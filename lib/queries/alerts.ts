import { createClient } from '@/lib/supabase/server';

export type AlertSeverity = 'critical' | 'warning' | 'info';

export interface AlertRow {
  id: number;
  severity: AlertSeverity;
  title: string;
  body: string;
  source: string;
  external_ref: string | null;
  location_key: string | null;
  created_at: string;
  resolved_at: string | null;
  attempt_count: number;
}

interface ErrorJson {
  message?: string;
  stage?: string;
  code?: string;
  runbook?: string;
}

const STAGE_LABELS: Record<string, string> = {
  q_orders_normalize: 'Normalize order',
  q_orders_push_ls: 'Push to Lightspeed',
  q_orders_poll_ls: 'Poll Lightspeed',
  q_orders_push_shipday: 'Push to Shipday',
  q_orders_compensate: 'Compensation',
};

function humanStage(raw: string): string {
  return STAGE_LABELS[raw.toLowerCase()] ?? raw;
}

function readError(j: unknown): ErrorJson {
  return j && typeof j === 'object' ? (j as ErrorJson) : {};
}

function classify(attempt: number, resolved: string | null): AlertSeverity {
  if (resolved) return 'info';
  if (attempt >= 5) return 'critical';
  return 'warning';
}

export async function getRecentAlerts(limit = 20, loc?: string): Promise<AlertRow[]> {
  if (process.env['NEXT_PUBLIC_USE_MOCK_DATA'] === '1') {
    return [];
  }
  const supabase = await createClient();
  let query = supabase
    .from('dlq_alerts')
    .select(
      'id, queue_name, external_ref, source, location_key, last_error, attempt_count, alerted_at, resolved_at, created_at'
    )
    .order('created_at', { ascending: false })
    .limit(limit);

  if (loc) query = query.eq('location_key', loc);

  const { data, error } = await query;

  if (error || !data) return [];

  const SEVERITY_ORDER: Record<string, number> = { critical: 0, warning: 1, info: 2 };

  return data.map((r) => {
    const e = readError(r.last_error);
    const rawStage = e.stage ?? r.queue_name;
    const stage = humanStage(rawStage);
    const hasMessage = e.message && e.message !== 'unknown';
    return {
      id: r.id,
      severity: classify(r.attempt_count, r.resolved_at),
      title: hasMessage
        ? e.message!.slice(0, 80)
        : r.external_ref
          ? `${r.external_ref} — ${stage} failed`
          : `${stage} failed (${r.attempt_count} attempts)`,
      body: `${r.external_ref ?? '—'} · ${r.source ?? '—'} · ${
        e.code ?? 'no code'
      }`,
      source: stage,
      external_ref: r.external_ref,
      location_key: r.location_key,
      created_at: r.created_at,
      resolved_at: r.resolved_at,
      attempt_count: r.attempt_count,
    };
  }).sort((a, b) => (SEVERITY_ORDER[a.severity] ?? 9) - (SEVERITY_ORDER[b.severity] ?? 9));
}
