import { Check, Circle } from 'lucide-react';
import { OnDevBadge } from '@/components/dashboard/on-dev-badge';
import { PageHeader } from '@/components/dashboard/page-header';
import { cn } from '@/lib/utils';

const PHASES = [
  {
    label: 'Pre-cutover',
    desc: 'Spike 1 closed · staging green · runbooks ready',
    state: 'done' as const,
  },
  {
    label: 'Pilot store',
    desc: '1 location, Shopify only · 7-day observation',
    state: 'active' as const,
  },
  {
    label: 'Multi-store',
    desc: 'All 3 locations · Shopify webhook switched',
    state: 'pending' as const,
  },
  {
    label: 'Phase 2 — JET Connect',
    desc: 'Takeaway via official partner API',
    state: 'pending' as const,
  },
  {
    label: 'Decommission',
    desc: 'Deliverect subscription cancelled',
    state: 'pending' as const,
  },
];

export default function CutoverPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow="Compliance"
        title="Cutover & rollback"
        description="Phase progression from Deliverect to Frituur OS. Rollback to Deliverect by toggling the Shopify webhook target — ≤10 min to restore."
      />

      <OnDevBadge
        variant="banner"
        reason="Phase tracker, rollback control, dan dual-run cost saat ini hardcoded. Akan disambungkan ke tabel cutover_state setelah RFC-013 (cutover orchestration) landed."
      />

      <div className="card-elevated rounded-2xl border border-border bg-card p-5">
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Phase tracker
        </div>
        <ol className="mt-5 space-y-3">
          {PHASES.map((p, i) => (
            <li
              key={i}
              className={cn(
                'flex items-start gap-3 rounded-xl border p-4',
                p.state === 'done'
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : p.state === 'active'
                    ? 'border-amber-500/40 bg-amber-500/10'
                    : 'border-border bg-background'
              )}
            >
              <div className="mt-0.5 shrink-0">
                {p.state === 'done' ? (
                  <Check className="h-5 w-5 text-emerald-600" />
                ) : p.state === 'active' ? (
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
                  </span>
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1">
                <div
                  className={cn(
                    'text-[14px] font-semibold',
                    p.state === 'done' && 'text-emerald-700 dark:text-emerald-400',
                    p.state === 'active' && 'text-amber-800 dark:text-amber-300'
                  )}
                >
                  {i + 1}. {p.label}
                </div>
                <div className="mt-0.5 text-[12.5px] text-muted-foreground">
                  {p.desc}
                </div>
              </div>
              <span
                className={cn(
                  'shrink-0 rounded-full px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider',
                  p.state === 'done'
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    : p.state === 'active'
                      ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300'
                      : 'bg-muted text-muted-foreground'
                )}
              >
                {p.state}
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="card-elevated rounded-2xl border border-rose-500/30 bg-rose-500/5 p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Rollback control
          </div>
          <div className="mt-3 text-[14px] font-semibold">
            Re-enable Deliverect webhook
          </div>
          <p className="mt-1 text-[12.5px] text-muted-foreground">
            Toggle Shopify webhook target back to Deliverect. Must be performed
            in the Shopify admin UI directly. This Frituur OS panel will simply
            stop receiving new orders. ETA &lt;10 min.
          </p>
          <ul className="mt-4 space-y-2 text-[12px]">
            <li className="text-muted-foreground">Triggers:</li>
            <li>· Push success rate &lt;95% for over 1h</li>
            <li>· Any LS duplicate detected</li>
            <li>· Manual ops/management call</li>
          </ul>
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Deliverect dual-run
          </div>
          <dl className="mt-3 space-y-2 text-[12.5px]">
            <Row label="Subscription end" value="≥30 days post-Phase 2" />
            <Row label="Channels still routed" value="Takeaway (until JET)" />
            <Row label="Cost during dual-run" value="~€500/mo" />
          </dl>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-medium text-right">{value}</dd>
    </div>
  );
}
