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

function readError(j: unknown): ErrorJson {
  return j && typeof j === 'object' ? (j as ErrorJson) : {};
}

function classify(attempt: number, resolved: string | null): AlertSeverity {
  if (resolved) return 'info';
  if (attempt >= 5) return 'critical';
  return 'warning';
}

export async function getRecentAlerts(limit = 20): Promise<AlertRow[]> {
  if (process.env['NEXT_PUBLIC_DEV_SKIP_AUTH'] === '1') {
    return [];
  }
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('dlq_alerts')
    .select(
      'id, queue_name, external_ref, source, location_key, last_error, attempt_count, alerted_at, resolved_at, created_at'
    )
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error || !data) return [];

  return data.map((r) => {
    const e = readError(r.last_error);
    const stage = e.stage ?? r.queue_name;
    return {
      id: r.id,
      severity: classify(r.attempt_count, r.resolved_at),
      title: e.message
        ? e.message.slice(0, 80)
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
  });
}
