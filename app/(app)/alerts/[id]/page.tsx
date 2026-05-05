import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { createClient } from '@/lib/supabase/server';
import { LOCATIONS } from '@/lib/constants';
import { DlqActionBar } from './_components/dlq-actions';

function locName(key: string | null): string {
  if (!key) return '—';
  return LOCATIONS.find((l) => l.key === key)?.name ?? key;
}

export default async function DlqDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dlqId = Number(id);
  if (!Number.isFinite(dlqId)) notFound();

  const supabase = await createClient();

  const { data: dlq } = await supabase
    .from('dlq_alerts')
    .select(
      'id, queue_name, msg_id, canonical_order_id, external_ref, source, location_key, last_error, attempt_count, raw_payload_id, alerted_at, resolved_at, resolution_action, created_at'
    )
    .eq('id', dlqId)
    .maybeSingle();

  if (!dlq) notFound();

  let rawPayload: unknown = null;
  if (dlq.raw_payload_id != null) {
    const { data: raw } = await supabase
      .from('raw_orders')
      .select('payload')
      .eq('id', dlq.raw_payload_id)
      .maybeSingle();
    rawPayload = (raw as { payload?: unknown } | null)?.payload ?? null;
  }

  const errJson = JSON.stringify(dlq.last_error, null, 2);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow={`DLQ #${dlq.id}`}
        title={dlq.external_ref ?? '—'}
        description={`${dlq.queue_name} · ${dlq.attempt_count} attempts · ${locName(dlq.location_key)}`}
        actions={
          <Button variant="outline" size="sm" asChild className="h-9 gap-2 rounded-full text-[12.5px]">
            <Link href="/alerts">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to alerts
            </Link>
          </Button>
        }
      />

      <DlqActionBar
        dlqId={dlq.id}
        rawPayload={rawPayload}
        resolved={Boolean(dlq.resolved_at)}
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="card-elevated rounded-2xl border border-border bg-card p-5 lg:col-span-1">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Status
          </div>
          <dl className="mt-3 space-y-2 text-[12.5px]">
            <Row label="Source" value={dlq.source ?? '—'} />
            <Row label="Location" value={locName(dlq.location_key)} />
            <Row label="Queue" value={dlq.queue_name} mono />
            <Row label="msg_id" value={String(dlq.msg_id)} mono />
            <Row label="Attempts" value={String(dlq.attempt_count)} />
            <Row label="Created" value={new Date(dlq.created_at).toLocaleString('nl-BE')} />
            <Row
              label="Resolved"
              value={
                dlq.resolved_at
                  ? `${dlq.resolution_action} · ${new Date(dlq.resolved_at).toLocaleString('nl-BE')}`
                  : 'No'
              }
            />
          </dl>
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-5 lg:col-span-2">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Last error
          </div>
          <pre className="mt-3 overflow-auto rounded-xl border border-border bg-background p-4 text-[12px] leading-relaxed font-mono">
            {errJson}
          </pre>
        </div>
      </div>

      {rawPayload != null && (
        <div className="card-elevated rounded-2xl border border-border bg-card p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Raw payload
          </div>
          <pre className="mt-3 max-h-[480px] overflow-auto rounded-xl border border-border bg-background p-4 text-[12px] leading-relaxed font-mono">
            {JSON.stringify(rawPayload, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={mono ? 'font-mono tabular-nums' : 'font-medium'}>{value}</dd>
    </div>
  );
}
