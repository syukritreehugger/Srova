import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/components/dashboard/page-header';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { createClient } from '@/lib/supabase/server';
import {
  LOCATIONS,
  STATE_LABEL,
  STATE_TONE,
  type OrderState,
} from '@/lib/constants';
import { cn } from '@/lib/utils';

interface PaymentJson {
  total_cents?: number;
  method?: string;
  status?: string;
}

interface CustomerJson {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
}

function locName(key: string): string {
  return LOCATIONS.find((l) => l.key === key)?.name ?? key;
}

function eur(cents: number): string {
  return `€${(cents / 100).toLocaleString('nl-BE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function deltaMs(from: string, to: string): string {
  const ms = new Date(to).getTime() - new Date(from).getTime();
  if (ms < 1000) return `+${ms}ms`;
  if (ms < 60000) return `+${(ms / 1000).toFixed(2)}s`;
  return `+${(ms / 60000).toFixed(1)}m`;
}

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const externalRef = decodeURIComponent(id);

  const supabase = await createClient();

  const { data: order } = await supabase
    .from('canonical_orders')
    .select(
      'id, external_ref, source, location_key, status, customer, items, payment, vat_lines, ls_order_id, ls_pushed_at, shipday_order_id, shipday_pushed_at, correlation_id, created_at, updated_at, raw_payload_id, cancel_reason'
    )
    .eq('external_ref', externalRef)
    .maybeSingle();

  if (!order) notFound();

  const [{ data: history }, rawRes] = await Promise.all([
    supabase
      .from('order_state_history')
      .select('id, from_state, to_state, reason, attempt, occurred_at')
      .eq('canonical_order_id', order.id)
      .order('occurred_at', { ascending: true }),
    order.raw_payload_id
      ? supabase
          .from('raw_orders')
          .select('payload')
          .eq('id', order.raw_payload_id)
          .maybeSingle()
      : Promise.resolve({ data: null as { payload: unknown } | null }),
  ]);

  const customer = (order.customer ?? {}) as CustomerJson;
  const payment = (order.payment ?? {}) as PaymentJson;
  const items = (order.items ?? []) as Array<{
    sku?: string;
    name?: string;
    qty?: number;
    unit_price_cents?: number;
  }>;

  const customerName =
    [customer.first_name, customer.last_name].filter(Boolean).join(' ') ||
    customer.email ||
    'Guest';

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        eyebrow={`Order · ${order.source}`}
        title={order.external_ref}
        description={`${locName(order.location_key)} · ${customerName}`}
        actions={
          <Button variant="outline" size="sm" asChild className="h-9 gap-2 rounded-full text-[12.5px]">
            <Link href="/orders">
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to orders
            </Link>
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4">
        <Stat label="State">
          <span
            className={cn(
              'inline-flex items-center rounded-full px-2 py-0.5 text-[12px] font-semibold',
              STATE_TONE[order.status as OrderState]
            )}
          >
            {STATE_LABEL[order.status as OrderState]}
          </span>
        </Stat>
        <Stat label="Total" value={eur(payment.total_cents ?? 0)} />
        <Stat label="Source" value={order.source} />
        <Stat label="Location" value={locName(order.location_key)} />
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">State history</TabsTrigger>
          <TabsTrigger value="raw">Raw payload</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="card-elevated lg:col-span-2 rounded-2xl border border-border bg-card p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Items
            </div>
            <table className="mt-3 w-full text-[13px]">
              <thead>
                <tr className="border-b border-border text-[10.5px] uppercase tracking-wider text-muted-foreground">
                  <th className="py-2 text-left font-medium">SKU</th>
                  <th className="py-2 text-left font-medium">Name</th>
                  <th className="py-2 text-right font-medium">Qty</th>
                  <th className="py-2 text-right font-medium">Unit</th>
                  <th className="py-2 text-right font-medium">Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((it, i) => {
                  const qty = it.qty ?? 1;
                  const unit = it.unit_price_cents ?? 0;
                  return (
                    <tr key={i} className="border-b border-border/60 last:border-b-0">
                      <td className="py-2 font-mono text-[12px]">{it.sku ?? '—'}</td>
                      <td className="py-2">{it.name ?? '—'}</td>
                      <td className="py-2 text-right tabular-nums">{qty}</td>
                      <td className="py-2 text-right tabular-nums">{eur(unit)}</td>
                      <td className="py-2 text-right tabular-nums font-medium">
                        {eur(unit * qty)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="card-elevated rounded-2xl border border-border bg-card p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Customer
            </div>
            <dl className="mt-3 space-y-2 text-[12.5px]">
              <Row label="Name" value={customerName} />
              <Row label="Email" value={customer.email ?? '—'} />
              <Row label="Phone" value={customer.phone ?? '—'} />
            </dl>

            <div className="mt-5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Pushes
            </div>
            <dl className="mt-3 space-y-2 text-[12.5px]">
              <Row label="LS order ID" value={order.ls_order_id ?? '—'} mono />
              <Row
                label="LS pushed"
                value={
                  order.ls_pushed_at
                    ? new Date(order.ls_pushed_at).toLocaleString('nl-BE')
                    : '—'
                }
              />
              <Row
                label="Shipday ID"
                value={order.shipday_order_id ?? '—'}
                mono
              />
              <Row
                label="Shipday pushed"
                value={
                  order.shipday_pushed_at
                    ? new Date(order.shipday_pushed_at).toLocaleString('nl-BE')
                    : '—'
                }
              />
            </dl>

            {order.cancel_reason && (
              <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-500/5 p-3 text-[12px] text-rose-700 dark:text-rose-400">
                <div className="text-[10.5px] uppercase tracking-wider">
                  Cancel reason
                </div>
                <div className="mt-1">{order.cancel_reason}</div>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="mt-4">
          <div className="card-elevated rounded-2xl border border-border bg-card p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              State transitions
            </div>
            <ol className="mt-4 space-y-3">
              {(history ?? []).length === 0 && (
                <li className="text-[12.5px] text-muted-foreground">
                  No state history yet.
                </li>
              )}
              {(history ?? []).map((h, i, arr) => {
                const prev = i > 0 ? arr[i - 1]! : null;
                return (
                  <li
                    key={h.id}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-3"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-foreground" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[12.5px]">
                        {h.from_state && (
                          <>
                            <span className="font-mono text-muted-foreground">
                              {h.from_state}
                            </span>
                            <span className="text-muted-foreground">→</span>
                          </>
                        )}
                        <span
                          className={cn(
                            'inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium',
                            STATE_TONE[h.to_state as OrderState]
                          )}
                        >
                          {STATE_LABEL[h.to_state as OrderState]}
                        </span>
                        {h.attempt > 0 && (
                          <span className="text-[10.5px] text-muted-foreground">
                            attempt {h.attempt}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-[11.5px] text-muted-foreground">
                        {new Date(h.occurred_at).toLocaleString('nl-BE')}
                        {prev && (
                          <span className="ml-2 font-mono">
                            {deltaMs(prev.occurred_at, h.occurred_at)}
                          </span>
                        )}
                      </div>
                      {h.reason && (
                        <div className="mt-1 text-[11.5px]">{h.reason}</div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="raw" className="mt-4">
          <div className="card-elevated rounded-2xl border border-border bg-card p-5">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              Raw payload (channel-specific)
            </div>
            <pre className="mt-3 max-h-[600px] overflow-auto rounded-xl border border-border bg-background p-4 text-[12px] leading-relaxed font-mono">
              {JSON.stringify(
                (rawRes.data as { payload?: unknown } | null)?.payload ?? order,
                null,
                2
              )}
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function Stat({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="card-elevated rounded-2xl border border-border bg-card p-4">
      <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 text-[20px] font-semibold tabular-nums leading-none">
        {value ?? children}
      </div>
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
    <div className="flex items-start justify-between gap-3">
      <dt className="text-muted-foreground">{label}</dt>
      <dd
        className={cn(
          'text-right',
          mono ? 'font-mono text-[11.5px] tabular-nums' : 'font-medium'
        )}
      >
        {value}
      </dd>
    </div>
  );
}
