import Link from 'next/link';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/page-header';
import { PipelineFlow } from '@/components/dashboard/pipeline-flow';
import { Button } from '@/components/ui/button';
import { LOCATIONS, STATE_LABEL, STATE_TONE, type LocationKey } from '@/lib/constants';
import { getDashboardStats } from '@/lib/queries/dashboard';
import { getStuckOrders } from '@/lib/queries/orders';
import { cn } from '@/lib/utils';

const RETRY_LADDER = [
  { label: 'Backoff +5s', desc: 'retry 1' },
  { label: 'Backoff +30s', desc: 'retry 2' },
  { label: 'Backoff +2m', desc: 'retry 3' },
  { label: 'Backoff +15m', desc: 'retry 4' },
  { label: 'DLQ + Slack', desc: 'max 5 attempts → archive', tone: 'rose' as const },
];

function locName(key: string): string {
  return LOCATIONS.find((l) => l.key === key)?.name ?? key;
}

export default async function PipelinePage({
  searchParams,
}: {
  searchParams: Promise<{ loc?: string }>;
}) {
  const { loc: rawLoc } = await searchParams;
  const loc = (rawLoc as LocationKey | undefined) ?? undefined;

  const [stats, stuck] = await Promise.all([
    getDashboardStats(loc),
    getStuckOrders(loc),
  ]);

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Subsystem 6"
        title="Order state machine"
        description="Every order is a state machine. Each transition is logged, every retry is tracked, every failure is replayable. This is what Deliverect did silently — now visible."
        actions={
          <Button size="sm" asChild className="h-9 gap-2 rounded-full text-[12.5px]">
            <Link href="/alerts">
              <RefreshCw className="h-3.5 w-3.5" />
              Open DLQ
            </Link>
          </Button>
        }
      />

      <PipelineFlow counts={stats.pipelineCounts} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="card-elevated lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <AlertTriangle className="h-3.5 w-3.5" />
                Stuck orders · &gt;10 min in transient state
              </div>
              <div className="mt-0.5 text-[14px] font-medium">
                {stuck.length === 0 ? (
                  <span className="text-emerald-600 dark:text-emerald-400">
                    No stuck orders ✓
                  </span>
                ) : (
                  <>
                    <span className="text-rose-600 tabular-nums">{stuck.length}</span>{' '}
                    <span className="text-muted-foreground">need operator attention</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {stuck.length === 0 ? (
            <div className="px-5 py-10 text-center text-[12.5px] text-muted-foreground">
              Pipeline is healthy. Orders flowing normally.
            </div>
          ) : (
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-border bg-muted/30 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-2.5 text-left font-medium">Reference</th>
                  <th className="px-3 py-2.5 text-left font-medium">State</th>
                  <th className="px-3 py-2.5 text-left font-medium">Location</th>
                  <th className="px-5 py-2.5 text-right font-medium">Stuck for</th>
                </tr>
              </thead>
              <tbody>
                {stuck.map((o) => (
                  <tr
                    key={o.external_ref}
                    className="border-b border-border/60 last:border-b-0 hover:bg-muted/30"
                  >
                    <td className="px-5 py-3 font-mono text-[12px]">
                      <Link
                        href={`/orders/${encodeURIComponent(o.external_ref)}`}
                        className="hover:underline"
                      >
                        {o.external_ref}
                      </Link>
                    </td>
                    <td className="px-3 py-3">
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
                          STATE_TONE[o.status]
                        )}
                      >
                        {STATE_LABEL[o.status]}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-muted-foreground">
                      {locName(o.location_key)}
                    </td>
                    <td className="px-5 py-3 text-right tabular-nums text-rose-700 dark:text-rose-400 font-medium">
                      {o.minutes_stuck}m
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Retry ladder · pgmq visibility timeouts
          </div>
          <div className="mt-1 text-[14px] font-medium">5 attempts · ±20% jitter</div>
          <ul className="mt-4 space-y-2">
            {RETRY_LADDER.map((b, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3"
              >
                <div>
                  <div
                    className={cn(
                      'text-[12.5px] font-medium',
                      b.tone === 'rose' && 'text-rose-700 dark:text-rose-400'
                    )}
                  >
                    {b.label}
                  </div>
                  <div className="mt-0.5 text-[10.5px] uppercase tracking-wider text-muted-foreground">
                    {b.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
