'use server';

import { revalidatePath } from 'next/cache';
import {
  activateWorkflow,
  deactivateWorkflow,
  POLLER_NORMALIZE_ID,
  LS_PUSHER_ID,
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
