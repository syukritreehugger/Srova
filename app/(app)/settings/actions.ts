'use server';

import { revalidatePath } from 'next/cache';
import { activateWorkflow, deactivateWorkflow, POLLER_NORMALIZE_ID } from '@/lib/n8n';

export async function setPipelineActive(
  active: boolean
): Promise<{ ok: true } | { ok: false; error: string }> {
  const r = active
    ? await activateWorkflow(POLLER_NORMALIZE_ID)
    : await deactivateWorkflow(POLLER_NORMALIZE_ID);
  if (!r.ok) return { ok: false, error: r.error };
  revalidatePath('/settings');
  revalidatePath('/');
  return { ok: true };
}
