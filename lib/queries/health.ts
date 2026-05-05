import { createClient } from '@/lib/supabase/server';

export type IntegrationStatus =
  | 'operational'
  | 'degraded'
  | 'down'
  | 'investigating';

export interface IntegrationRow {
  id: string;
  name: string;
  description: string;
  status: IntegrationStatus;
  uptime: number;
  lastEvent: string;
}

export interface MenuSyncRow {
  location_key: string;
  last_sync_at: string | null;
  changes: number;
  drift: number;
  status: 'auto' | 'manual' | 'down';
}

export async function getIntegrationHealth(): Promise<IntegrationRow[]> {
  if (process.env['NEXT_PUBLIC_USE_MOCK_DATA'] === '1') {
    return [];
  }
  const supabase = await createClient();

  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [hmacFails, lsTokens, recentPushed] = await Promise.all([
    supabase
      .from('raw_orders')
      .select('id', { count: 'exact', head: true })
      .eq('hmac_valid', false)
      .gte('received_at', since24h),
    supabase
      .from('ls_tokens')
      .select('location_key, expires_at, updated_at'),
    supabase
      .from('canonical_orders')
      .select('source, shipday_pushed_at, ls_pushed_at')
      .gte('created_at', since24h)
      .limit(200),
  ]);

  const hmacBad = hmacFails.count ?? 0;
  const tokens = (lsTokens.data ?? []) as Array<{
    location_key: string;
    expires_at: string | null;
    updated_at: string | null;
  }>;

  function tokenStatus(): IntegrationStatus {
    if (tokens.length === 0) return 'down';
    const now = Date.now();
    const expired = tokens.some(
      (t) => t.expires_at && new Date(t.expires_at).getTime() < now
    );
    return expired ? 'degraded' : 'operational';
  }

  const orders = (recentPushed.data ?? []) as Array<{
    source: string;
    shipday_pushed_at: string | null;
    ls_pushed_at: string | null;
  }>;
  const shipdayOk = orders.some((o) => o.shipday_pushed_at);
  const lsOk = orders.some((o) => o.ls_pushed_at);

  const last = (key: 'shipday_pushed_at' | 'ls_pushed_at') => {
    const t = orders
      .map((o) => o[key])
      .filter((v): v is string => Boolean(v))
      .map((v) => new Date(v).getTime())
      .sort((a, b) => b - a)[0];
    if (!t) return 'no recent push';
    const min = Math.round((Date.now() - t) / 60000);
    return min < 60 ? `${min}m ago` : `${Math.round(min / 60)}h ago`;
  };

  return [
    {
      id: 'shopify',
      name: 'Shopify webhooks',
      description: '3 stores · orders/create',
      status:
        hmacBad === 0 ? 'operational' : hmacBad < 5 ? 'degraded' : 'down',
      uptime: hmacBad === 0 ? 100 : Math.max(0, 100 - hmacBad * 2),
      lastEvent:
        hmacBad === 0 ? 'no HMAC failures 24h' : `${hmacBad} HMAC failures`,
    },
    {
      id: 'lightspeed',
      name: 'Lightspeed L-Series',
      description: `OAuth tokens · ${tokens.length}/3 locations`,
      status: tokenStatus(),
      uptime: tokenStatus() === 'operational' ? 100 : 95,
      lastEvent: lsOk ? last('ls_pushed_at') : 'no pushes 24h',
    },
    {
      id: 'shipday',
      name: 'Shipday dispatch',
      description: 'Driver routing · 3 restaurants',
      status: shipdayOk ? 'operational' : 'investigating',
      uptime: shipdayOk ? 100 : 98,
      lastEvent: shipdayOk ? last('shipday_pushed_at') : 'no pushes 24h',
    },
  ];
}

export async function getMenuSyncStatus(): Promise<{
  lastSyncAt: string | null;
  rows: MenuSyncRow[];
}> {
  if (process.env['NEXT_PUBLIC_USE_MOCK_DATA'] === '1') {
    return { lastSyncAt: null, rows: [] };
  }
  const supabase = await createClient();

  const { data } = await supabase
    .from('menu_sync_log')
    .select('location_key, finished_at, change_count, drift_count')
    .order('finished_at', { ascending: false })
    .limit(50);

  const rows = ((data ?? []) as Array<{
    location_key: string;
    finished_at: string | null;
    change_count: number | null;
    drift_count: number | null;
  }>);

  const seen = new Map<string, MenuSyncRow>();
  for (const r of rows) {
    if (seen.has(r.location_key)) continue;
    seen.set(r.location_key, {
      location_key: r.location_key,
      last_sync_at: r.finished_at,
      changes: r.change_count ?? 0,
      drift: r.drift_count ?? 0,
      status: (r.drift_count ?? 0) > 0 ? 'manual' : 'auto',
    });
  }

  const latest = rows
    .map((r) => r.finished_at)
    .filter((v): v is string => Boolean(v))
    .sort()
    .reverse()[0] ?? null;

  return { lastSyncAt: latest, rows: Array.from(seen.values()) };
}
