import { createClient } from '@/lib/supabase/server';
import { LOCATIONS, type LocationKey } from '@/lib/constants';
import { getWorkflow, SHIPDAY_PUSH_WORKFLOW_ID } from '@/lib/n8n';

export interface StoreIntegrationRow {
  location_key: LocationKey;
  name: string;
  city: string;
  postcode: string;
  is_active: boolean;
  // Last 24h KPIs
  orders_24h: number;
  success_rate_24h: number;
  ls_token_expires_at: string | null;
  ls_token_ok: boolean;
  raw_ls_products_count: number;
  raw_ls_products_synced_at: string | null;
  takeaway_account_count: number;
  takeaway_active_count: number;
  shopify_last_webhook_at: string | null;
  shipday_dispatch_active: boolean;
  shipday_dispatched_24h: number;
  shipday_last_dispatched_at: string | null;
}

export async function getStoreIntegrations(): Promise<StoreIntegrationRow[]> {
  if (
    process.env['NEXT_PUBLIC_USE_MOCK_DATA'] === '1' &&
    process.env.NODE_ENV !== 'production'
  ) {
    return [];
  }
  const sb = await createClient();
  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  // Global signal (not per-loc): is the push_shipday_order workflow active in n8n?
  // We fetch once and stamp on every location row.
  const shipdayWf = await getWorkflow(SHIPDAY_PUSH_WORKFLOW_ID);
  const shipdayDispatchActive = shipdayWf.ok ? shipdayWf.data.active : false;

  // For each location, gather signals in one query each (3 locs * a few queries — OK at this scale)
  const rows = await Promise.all(
    LOCATIONS.map(async (loc) => {
      const [dimRes, ordersRes, tokenRes, productsRes, taRes, shopifyRes, shipday24hRes, shipdayLastRes] =
        await Promise.all([
          sb.from('dim_location').select('is_active').eq('location_key', loc.key).maybeSingle(),
          sb.from('canonical_orders')
            .select('status')
            .eq('location_key', loc.key)
            .gte('created_at', since24h),
          sb.from('ls_tokens').select('expires_at').eq('location_key', loc.key).maybeSingle(),
          sb.from('raw_ls_products')
            .select('synced_at', { count: 'exact', head: false })
            .eq('location_key', loc.key)
            .order('synced_at', { ascending: false })
            .limit(1),
          sb.from('takeaway_tokens')
            .select('is_active')
            .eq('location_key', loc.key),
          sb.from('raw_orders')
            .select('received_at')
            .eq('location_key', loc.key)
            .eq('source', 'shopify')
            .order('received_at', { ascending: false })
            .limit(1)
            .maybeSingle(),
          sb.from('canonical_orders')
            .select('id', { count: 'exact', head: true })
            .eq('location_key', loc.key)
            .not('shipday_order_id', 'is', null)
            .gte('shipday_pushed_at', since24h),
          sb.from('canonical_orders')
            .select('shipday_pushed_at')
            .eq('location_key', loc.key)
            .not('shipday_order_id', 'is', null)
            .order('shipday_pushed_at', { ascending: false })
            .limit(1)
            .maybeSingle(),
        ]);

      const orders = (ordersRes.data ?? []) as Array<{ status: string }>;
      const ok = orders.filter((o) =>
        ['complete', 'ls_accepted', 'shipday_sent'].includes(o.status)
      ).length;
      const failed = orders.filter((o) =>
        ['ls_failed', 'ls_rejected'].includes(o.status)
      ).length;
      const total = orders.length;
      const denom = ok + failed;
      const successRate = denom === 0 ? 100 : Math.round((ok / denom) * 1000) / 10;

      const tokenExp = tokenRes.data?.expires_at ?? null;
      const tokenOk = tokenExp ? new Date(tokenExp).getTime() > Date.now() : false;

      const taTokens = (taRes.data ?? []) as Array<{ is_active: boolean }>;

      return {
        location_key: loc.key,
        name: loc.name,
        city: loc.city,
        postcode: loc.postcode,
        is_active: Boolean(dimRes.data?.is_active),
        orders_24h: total,
        success_rate_24h: successRate,
        ls_token_expires_at: tokenExp,
        ls_token_ok: tokenOk,
        raw_ls_products_count: productsRes.count ?? 0,
        raw_ls_products_synced_at:
          (productsRes.data as Array<{ synced_at: string }> | null)?.[0]?.synced_at ?? null,
        takeaway_account_count: taTokens.length,
        takeaway_active_count: taTokens.filter((t) => t.is_active).length,
        shopify_last_webhook_at: shopifyRes.data?.received_at ?? null,
        shipday_dispatch_active: shipdayDispatchActive,
        shipday_dispatched_24h: shipday24hRes.count ?? 0,
        shipday_last_dispatched_at: shipdayLastRes.data?.shipday_pushed_at ?? null,
      };
    })
  );

  return rows;
}
