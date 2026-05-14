'use server';

import { revalidatePath } from 'next/cache';
import {
  activateWorkflow,
  deactivateWorkflow,
  POLLER_NORMALIZE_ID,
  LS_PUSHER_ID,
  TAKEAWAY_POLLER_ID,
} from '@/lib/n8n';

export async function setPipelineActive(
  active: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  const toggle = active ? activateWorkflow : deactivateWorkflow;

  const [pollerRes, pusherRes] = await Promise.all([
    toggle(POLLER_NORMALIZE_ID),
    toggle(LS_PUSHER_ID),
  ]);

  if (!pollerRes.ok) return { ok: false, error: `Poller: ${pollerRes.error}` };
  if (!pusherRes.ok) return { ok: false, error: `Pusher: ${pusherRes.error}` };

  revalidatePath('/settings');
  revalidatePath('/');
  return { ok: true };
}

export async function setTakeawayPollerActive(
  active: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = active
    ? await activateWorkflow(TAKEAWAY_POLLER_ID)
    : await deactivateWorkflow(TAKEAWAY_POLLER_ID);

  if (!res.ok) return { ok: false, error: res.error };

  revalidatePath('/settings');
  revalidatePath('/integrations');
  return { ok: true };
}
