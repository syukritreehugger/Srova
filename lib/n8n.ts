/**
 * Minimal n8n REST client untuk pipeline control dari dashboard.
 *
 * Env yang dibutuhkan (set di .env.local):
 *   N8N_API_URL  – misal https://n8n.ghysels-vagenende.be
 *   N8N_API_KEY  – Personal API token n8n (Settings → API)
 *
 * Hanya 2 endpoint dipakai:
 *   GET  /api/v1/workflows/:id      → cek status aktif
 *   POST /api/v1/workflows/:id/activate
 *   POST /api/v1/workflows/:id/deactivate
 */

export const POLLER_NORMALIZE_ID = '0i4SS4CHZo1h2Poj';
export const LS_PUSHER_ID = '2ENsv7R4I8H5L3cf';
export const TAKEAWAY_POLLER_ID = '86E91MXlXNDO5DA6';
export const TAKEAWAY_TOKEN_REFRESH_ID = 'q1r0qcOalSrhzlrq';

export interface N8nWorkflowSummary {
  id: string;
  name: string;
  active: boolean;
}

function n8nConfig(): { base: string; key: string } | null {
  const base = process.env['N8N_API_URL'];
  const key = process.env['N8N_API_KEY'];
  if (!base || !key) return null;
  return { base: base.replace(/\/$/, ''), key };
}

export function isN8nConfigured(): boolean {
  return n8nConfig() !== null;
}

async function n8n<T>(
  path: string,
  init?: RequestInit
): Promise<{ ok: true; data: T } | { ok: false; error: string }> {
  const cfg = n8nConfig();
  if (!cfg) return { ok: false, error: 'N8N_API_URL / N8N_API_KEY not configured' };
  try {
    const res = await fetch(`${cfg.base}/api/v1${path}`, {
      ...init,
      headers: {
        'X-N8N-API-KEY': cfg.key,
        accept: 'application/json',
        ...(init?.body ? { 'content-type': 'application/json' } : {}),
        ...(init?.headers ?? {}),
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, error: `HTTP ${res.status}: ${text.slice(0, 200)}` };
    }
    const data = (await res.json()) as T;
    return { ok: true, data };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) };
  }
}

export async function getWorkflow(
  id: string
): Promise<{ ok: true; data: N8nWorkflowSummary } | { ok: false; error: string }> {
  const r = await n8n<{ id: string; name: string; active: boolean }>(`/workflows/${id}`);
  if (!r.ok) return r;
  return { ok: true, data: { id: r.data.id, name: r.data.name, active: r.data.active } };
}

export async function activateWorkflow(id: string) {
  return n8n<{ active: boolean }>(`/workflows/${id}/activate`, { method: 'POST' });
}

export async function deactivateWorkflow(id: string) {
  return n8n<{ active: boolean }>(`/workflows/${id}/deactivate`, { method: 'POST' });
}
