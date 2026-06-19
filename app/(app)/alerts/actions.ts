'use server';

import { revalidatePath } from 'next/cache';
import { createClient } from '@/lib/supabase/server';
import { assertManagement } from '@/lib/auth/assert';

export type DlqActionResult = { ok: true } | { ok: false; error: string };

const TERMINAL = new Set(['complete', 'cancelled', 'ls_rejected']);

async function audit(params: {
  actorUserId: string;
  actorEmail: string;
  action: string;
  subjectId: string;
  locationKey: string | null;
  before?: unknown;
  after?: unknown;
}): Promise<void> {
  const supabase = await createClient();
  await supabase.from('audit_log').insert({
    actor_user_id: params.actorUserId,
    actor_email: params.actorEmail,
    action: params.action,
    subject_type: 'dlq_alerts',
    subject_id: params.subjectId,
    location_key: params.locationKey,
    before: (params.before ?? null) as never,
    after: (params.after ?? null) as never,
  });
}

async function requireUser() {
  const auth = await assertManagement();
  if (!auth.ok) throw new Error(auth.error);
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Unauthenticated');
  return { supabase, user };
}

export async function retryDlq(id: number): Promise<DlqActionResult> {
  try {
    const { supabase, user } = await requireUser();

    const { data: dlq } = await supabase
      .from('dlq_alerts')
      .select('id, location_key, canonical_order_id, resolved_at')
      .eq('id', id)
      .maybeSingle();

    if (!dlq) return { ok: false, error: 'DLQ entry not found' };
    if (dlq.resolved_at) return { ok: false, error: 'Already resolved' };

    if (dlq.canonical_order_id) {
      const { data: order } = await supabase
        .from('canonical_orders')
        .select('status')
        .eq('id', dlq.canonical_order_id)
        .maybeSingle();
      if (order && TERMINAL.has(order.status)) {
        return { ok: false, error: `Order already terminal: ${order.status}` };
      }
    }

    const { error } = await supabase
      .from('dlq_alerts')
      .update({ resolved_at: new Date().toISOString(), resolution_action: 'retry' })
      .eq('id', dlq.id);
    if (error) return { ok: false, error: error.message };

    await audit({
      actorUserId: user.id,
      actorEmail: user.email ?? '',
      action: 'dlq.retry',
      subjectId: String(dlq.id),
      locationKey: dlq.location_key,
      before: { resolved_at: null },
      after: { resolution_action: 'retry' },
    });

    revalidatePath('/alerts');
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export async function editAndReplay(
  id: number,
  newPayload: unknown
): Promise<DlqActionResult> {
  try {
    const { supabase, user } = await requireUser();

    if (!newPayload || typeof newPayload !== 'object') {
      return { ok: false, error: 'Invalid payload (must be JSON object)' };
    }

    const { data: dlq } = await supabase
      .from('dlq_alerts')
      .select('id, location_key, resolved_at')
      .eq('id', id)
      .maybeSingle();

    if (!dlq) return { ok: false, error: 'DLQ entry not found' };
    if (dlq.resolved_at) return { ok: false, error: 'Already resolved' };

    const { error } = await supabase
      .from('dlq_alerts')
      .update({
        resolved_at: new Date().toISOString(),
        resolution_action: 'edit_and_replay',
      })
      .eq('id', dlq.id);
    if (error) return { ok: false, error: error.message };

    await audit({
      actorUserId: user.id,
      actorEmail: user.email ?? '',
      action: 'dlq.edit_and_replay',
      subjectId: String(dlq.id),
      locationKey: dlq.location_key,
      after: { new_payload: newPayload },
    });

    revalidatePath('/alerts');
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

export async function discardDlq(
  id: number,
  reason: string
): Promise<DlqActionResult> {
  try {
    const { supabase, user } = await requireUser();

    if (!reason.trim()) return { ok: false, error: 'Reason required' };

    const { data: dlq } = await supabase
      .from('dlq_alerts')
      .select('id, location_key, canonical_order_id, resolved_at')
      .eq('id', id)
      .maybeSingle();

    if (!dlq) return { ok: false, error: 'DLQ entry not found' };
    if (dlq.resolved_at) return { ok: false, error: 'Already resolved' };

    const { error } = await supabase
      .from('dlq_alerts')
      .update({
        resolved_at: new Date().toISOString(),
        resolution_action: 'discard',
      })
      .eq('id', dlq.id);
    if (error) return { ok: false, error: error.message };

    if (dlq.canonical_order_id) {
      await supabase
        .from('canonical_orders')
        .update({
          status: 'cancelled',
          cancel_reason: `dlq_discarded: ${reason}`,
        })
        .eq('id', dlq.canonical_order_id);
    }

    await audit({
      actorUserId: user.id,
      actorEmail: user.email ?? '',
      action: 'dlq.discard',
      subjectId: String(dlq.id),
      locationKey: dlq.location_key,
      before: { resolved_at: null },
      after: { resolution_action: 'discard', reason },
    });

    revalidatePath('/alerts');
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
