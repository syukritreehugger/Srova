import { createClient } from '@/lib/supabase/server';
import type { LocationKey, OrderState } from '@/lib/constants';

export interface OrderRow {
  external_ref: string;
  source: string;
  location_key: string;
  status: OrderState;
  payment_total_cents: number;
  ls_order_id: string | null;
  ls_pushed_at: string | null;
  shipday_order_id: string | null;
  created_at: string;
}

export interface ListOrdersResult {
  rows: OrderRow[];
  total: number;
  counts: { all: number; shopify: number; takeaway: number; failed: number; rejected: number; inFlight: number };
}

export interface ListOrdersParams {
  source?: 'shopify' | 'takeaway';
  state?: OrderState | 'in_flight';
  loc?: LocationKey;
  page?: number;
  pageSize?: number;
}

interface PaymentJson { total_cents?: number }

function readTotalCents(payment: unknown): number {
  if (!payment || typeof payment !== 'object') return 0;
  const v = (payment as PaymentJson).total_cents;
  return typeof v === 'number' ? v : 0;
}

const FAIL = ['ls_failed', 'ls_rejected'] as const;
const IN_FLIGHT = ['received', 'normalized', 'pushing_ls', 'ls_sent'] as const;

export async function listOrders(
  params: ListOrdersParams = {}
): Promise<ListOrdersResult> {
  const supabase = await createClient();
  const page = Math.max(1, params.page ?? 1);
  const pageSize = Math.min(100, params.pageSize ?? 25);
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let q = supabase
    .from('canonical_orders')
    .select(
      'external_ref, source, location_key, status, payment, ls_order_id, ls_pushed_at, shipday_order_id, created_at',
      { count: 'exact' }
    )
    .order('created_at', { ascending: false })
    .range(from, to);

  if (params.source) q = q.eq('source', params.source);
  if (params.state === 'in_flight') {
    q = q.in('status', [...IN_FLIGHT]);
  } else if (params.state) {
    q = q.eq('status', params.state);
  } else {
    q = q.neq('status', 'cancelled');
  }
  if (params.loc) q = q.eq('location_key', params.loc);

  const [listRes, countsRes] = await Promise.all([
    q,
    supabase
      .from('canonical_orders')
      .select('source, status, location_key')
      .neq('status', 'cancelled')
      .order('created_at', { ascending: false })
      .limit(1000),
  ]);

  const rows = ((listRes.data ?? []) as unknown as Array<{
    external_ref: string;
    source: string;
    location_key: string;
    status: OrderState;
    payment: unknown;
    ls_order_id: string | null;
    ls_pushed_at: string | null;
    shipday_order_id: string | null;
    created_at: string;
  }>).map((r) => ({
    external_ref: r.external_ref,
    source: r.source,
    location_key: r.location_key,
    status: r.status,
    payment_total_cents: readTotalCents(r.payment),
    ls_order_id: r.ls_order_id,
    ls_pushed_at: r.ls_pushed_at,
    shipday_order_id: r.shipday_order_id,
    created_at: r.created_at,
  }));

  const all = (countsRes.data ?? []) as Array<{ source: string; status: string; location_key: string }>;
  const filteredAll = params.loc ? all.filter((o) => o.location_key === params.loc) : all;

  const counts = {
    all: filteredAll.length,
    shopify: filteredAll.filter((o) => o.source === 'shopify').length,
    takeaway: filteredAll.filter((o) => o.source === 'takeaway').length,
    failed: filteredAll.filter((o) => o.status === 'ls_failed').length,
    rejected: filteredAll.filter((o) => o.status === 'ls_rejected').length,
    inFlight: filteredAll.filter((o) =>
      (IN_FLIGHT as readonly string[]).includes(o.status)
    ).length,
  };

  return { rows, total: listRes.count ?? rows.length, counts };
}

export interface StuckOrder {
  external_ref: string;
  status: OrderState;
  location_key: string;
  minutes_stuck: number;
  ls_order_id: string | null;
}

/**
 * Joef §8.6 — orders stuck in transient states for >10 min.
 */
export async function getStuckOrders(loc?: LocationKey): Promise<StuckOrder[]> {
  const supabase = await createClient();
  const cutoff = new Date(Date.now() - 10 * 60 * 1000).toISOString();

  let q = supabase
    .from('canonical_orders')
    .select('external_ref, status, location_key, ls_order_id, updated_at')
    .in('status', [
      'received',
      'normalized',
      'pushing_ls',
      'ls_sent',
    ] satisfies OrderState[])
    .lt('updated_at', cutoff)
    .order('updated_at', { ascending: true })
    .limit(20);

  if (loc) q = q.eq('location_key', loc);

  const { data } = await q;
  return ((data ?? []) as Array<{
    external_ref: string;
    status: OrderState;
    location_key: string;
    ls_order_id: string | null;
    updated_at: string;
  }>).map((r) => ({
    external_ref: r.external_ref,
    status: r.status,
    location_key: r.location_key,
    ls_order_id: r.ls_order_id,
    minutes_stuck: Math.floor(
      (Date.now() - new Date(r.updated_at).getTime()) / 60000
    ),
  }));
}
