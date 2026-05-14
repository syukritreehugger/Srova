import { createClient } from '@/lib/supabase/server';
import type { LocationKey } from '@/lib/constants';

export type TakeawayMappingStatus = 'unmapped' | 'auto_matched' | 'confirmed';

export interface TakeawayMappingRow {
  id: number;
  takeaway_name: string;
  ls_plu: string | null;
  ls_product_name: string | null;
  auto_matched: boolean;
  confirmed_at: string | null;
  first_seen_at: string;
  last_seen_at: string;
  order_count: number;
  status: TakeawayMappingStatus;
}

export interface TakeawayMappingResult {
  location_key: LocationKey;
  total: number;
  unmapped: number;
  auto_matched: number;
  confirmed: number;
  rows: TakeawayMappingRow[];
}

export interface LsProductOption {
  sku: string;
  name: string;
}

interface PluMapRow {
  id: number;
  takeaway_name: string;
  ls_plu: string | null;
  ls_product_name: string | null;
  auto_matched: boolean;
  confirmed_at: string | null;
  first_seen_at: string;
  last_seen_at: string;
  order_count: number;
}

export async function getTakeawayMapping(loc: LocationKey): Promise<TakeawayMappingResult> {
  const supabase = await createClient();

  const { data } = await supabase
    .from('takeaway_plu_map')
    .select(
      'id, takeaway_name, ls_plu, ls_product_name, auto_matched, confirmed_at, first_seen_at, last_seen_at, order_count'
    )
    .eq('location_key', loc)
    .order('order_count', { ascending: false });

  const rows: TakeawayMappingRow[] = ((data ?? []) as unknown as PluMapRow[]).map((r) => {
    let status: TakeawayMappingStatus;
    if (!r.ls_plu) status = 'unmapped';
    else if (r.confirmed_at) status = 'confirmed';
    else if (r.auto_matched) status = 'auto_matched';
    else status = 'confirmed';

    return { ...r, status };
  });

  rows.sort((a, b) => {
    const order: Record<TakeawayMappingStatus, number> = {
      unmapped: 0,
      auto_matched: 1,
      confirmed: 2,
    };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return b.order_count - a.order_count;
  });

  return {
    location_key: loc,
    total: rows.length,
    unmapped: rows.filter((r) => r.status === 'unmapped').length,
    auto_matched: rows.filter((r) => r.status === 'auto_matched').length,
    confirmed: rows.filter((r) => r.status === 'confirmed').length,
    rows,
  };
}

interface LsProductRow {
  sku: string | null;
  name: string;
}

export async function getLsProductsForPicker(loc: LocationKey): Promise<LsProductOption[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from('raw_ls_products')
    .select('sku, name')
    .eq('location_key', loc)
    .eq('visible', true)
    .not('sku', 'is', null)
    .order('name');

  return ((data ?? []) as unknown as LsProductRow[])
    .filter((r): r is { sku: string; name: string } => r.sku !== null && r.sku.trim() !== '')
    .map((r) => ({ sku: r.sku, name: r.name }));
}
