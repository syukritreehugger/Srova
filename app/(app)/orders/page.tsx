import Link from 'next/link';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import { LOCATIONS, STATE_LABEL, STATE_TONE, type LocationKey, type OrderState } from '@/lib/constants';
import { listOrders } from '@/lib/queries/orders';
import { cn } from '@/lib/utils';

function locName(key: string): string {
  return LOCATIONS.find((l) => l.key === key)?.name ?? key;
}

function eur(cents: number): string {
  return `€${(cents / 100).toLocaleString('nl-BE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function timeAgo(iso: string): string {
  const m = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 60000));
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.round(h / 24)}d ago`;
}

interface FilterChip {
  label: string;
  count: number;
  href: string;
  active: boolean;
  tone?: 'rose' | 'amber';
}

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{
    loc?: string;
    source?: 'shopify' | 'takeaway';
    state?: OrderState | 'in_flight';
    page?: string;
  }>;
}) {
  const sp = await searchParams;
  const loc = (sp.loc as LocationKey | undefined) ?? undefined;
  const page = Math.max(1, Number(sp.page ?? '1') || 1);
  const pageSize = 25;

  const { rows, total, counts } = await listOrders({
    source: sp.source,
    state: sp.state,
    loc,
    page,
    pageSize,
  });

  const baseQs = (extra: Record<string, string | undefined>) => {
    const q = new URLSearchParams();
    if (loc) q.set('loc', loc);
    for (const [k, v] of Object.entries(extra)) {
      if (v) q.set(k, v);
    }
    const s = q.toString();
    return s ? `?${s}` : '';
  };

  const isAll = !sp.source && !sp.state;
  const chips: FilterChip[] = [
    { label: 'All', count: counts.all, href: `/orders${baseQs({})}`, active: isAll },
    { label: 'Shopify', count: counts.shopify, href: `/orders${baseQs({ source: 'shopify' })}`, active: sp.source === 'shopify' && !sp.state },
    { label: 'Takeaway', count: counts.takeaway, href: `/orders${baseQs({ source: 'takeaway' })}`, active: sp.source === 'takeaway' && !sp.state },
    { label: 'Failed', count: counts.failed, href: `/orders${baseQs({ state: 'ls_failed' })}`, active: sp.state === 'ls_failed', tone: 'rose' },
    { label: 'Rejected', count: counts.rejected, href: `/orders${baseQs({ state: 'ls_rejected' })}`, active: sp.state === 'ls_rejected', tone: 'rose' },
    { label: 'In flight', count: counts.inFlight, href: `/orders${baseQs({ state: 'in_flight' })}`, active: sp.state === 'in_flight', tone: 'amber' },
  ];

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="flex flex-col gap-4">
      <PageHeader
        eyebrow="Orders"
        title="Live order stream"
        description="All orders from receipt to delivery. Click any reference to inspect its payload and audit trail."
        actions={
          <Button size="sm" asChild className="h-9 gap-2 rounded-full text-[13px]">
            <Link href={`/orders${baseQs({})}`}>
              <RefreshCw className="h-3.5 w-3.5" />
              Refresh
            </Link>
          </Button>
        }
      />

      <div className="flex flex-wrap items-center gap-2">
        {chips.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className={
              c.active
                ? 'inline-flex h-8 items-center gap-2 rounded-full bg-foreground px-3 text-[12px] font-medium text-background'
                : c.tone === 'rose'
                  ? 'inline-flex h-8 items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/5 px-3 text-[12px] font-medium text-rose-700 hover:bg-rose-500/10'
                  : c.tone === 'amber'
                    ? 'inline-flex h-8 items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 text-[12px] font-medium text-amber-700 hover:bg-amber-500/10'
                    : 'inline-flex h-8 items-center gap-2 rounded-full border border-border bg-card px-3 text-[12px] font-medium text-muted-foreground hover:text-foreground'
            }
          >
            {c.label}
            <span className="rounded-full bg-current/10 px-1.5 py-0.5 text-[11px] tabular-nums opacity-70">
              {c.count.toLocaleString('nl-BE')}
            </span>
          </Link>
        ))}
        <Link
          href="/pipeline"
          className="inline-flex h-8 items-center gap-1 px-2 text-[12px] text-muted-foreground transition-colors hover:text-foreground"
        >
          Pipeline
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="card-elevated overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <span className="tabular-nums">{rows.length}</span> of{' '}
            <span className="tabular-nums">{total}</span> shown
          </div>
          {totalPages > 1 && (
            <div className="flex items-center gap-2 text-[12px] tabular-nums">
              {page > 1 && (
                <Link
                  href={`/orders${baseQs({ source: sp.source, state: sp.state, page: String(page - 1) })}`}
                  className="rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground"
                >
                  Prev
                </Link>
              )}
              <span className="text-muted-foreground">
                Page {page} / {totalPages}
              </span>
              {page < totalPages && (
                <Link
                  href={`/orders${baseQs({ source: sp.source, state: sp.state, page: String(page + 1) })}`}
                  className="rounded-full border border-border px-3 py-1 text-muted-foreground hover:text-foreground"
                >
                  Next
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-[11px] uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-2.5 text-left font-medium">Reference</th>
                <th className="px-3 py-2.5 text-left font-medium">Channel</th>
                <th className="px-3 py-2.5 text-left font-medium">Location</th>
                <th className="px-3 py-2.5 text-right font-medium">Total</th>
                <th className="px-3 py-2.5 text-left font-medium">State</th>
                <th className="px-3 py-2.5 text-left font-medium">POS / Delivery</th>
                <th className="px-5 py-2.5 text-right font-medium">Created</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center"
                  >
                    <div className="text-[13px] font-medium text-foreground">
                      No orders found
                    </div>
                    <p className="mt-1 text-[12px] text-muted-foreground">
                      {isAll
                        ? 'Orders will appear here once the pipeline receives them.'
                        : 'Try broadening your search or removing filters.'}
                    </p>
                    {!isAll && (
                      <Link
                        href={`/orders${loc ? `?loc=${loc}` : ''}`}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                      >
                        Clear all filters
                      </Link>
                    )}
                  </td>
                </tr>
              )}
              {rows.map((o) => (
                <tr
                  key={o.external_ref}
                  className="relative border-b border-border/60 last:border-b-0 cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-3 font-mono text-[12px]">
                    <Link
                      href={`/orders/${encodeURIComponent(o.external_ref)}`}
                      className="hover:underline after:absolute after:inset-0"
                    >
                      {o.external_ref}
                    </Link>
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[12px] font-medium',
                        o.source === 'shopify'
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                          : 'bg-orange-500/10 text-orange-700 dark:text-orange-400'
                      )}
                    >
                      <span
                        className={cn(
                          'h-1.5 w-1.5 rounded-full',
                          o.source === 'shopify' ? 'bg-emerald-500' : 'bg-orange-500'
                        )}
                      />
                      {o.source === 'shopify' ? 'Shopify' : 'Takeaway'}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{locName(o.location_key)}</td>
                  <td className="px-3 py-3 text-right tabular-nums font-medium">
                    {eur(o.payment_total_cents)}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={cn(
                        'inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-medium',
                        STATE_TONE[o.status]
                      )}
                    >
                      {STATE_LABEL[o.status]}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-[12px] tabular-nums text-muted-foreground">
                    <div>{o.ls_order_id ? `POS ${o.ls_order_id.slice(-8)}` : '—'}</div>
                    <div>{o.shipday_order_id ? `Delivery ${o.shipday_order_id.slice(-8)}` : '—'}</div>
                  </td>
                  <td className="px-5 py-3 text-right text-[12px] tabular-nums text-muted-foreground">
                    {timeAgo(o.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
