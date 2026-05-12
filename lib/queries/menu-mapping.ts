import { createClient } from '@/lib/supabase/server';
import { getProductsForLocation, type ShopifyVariant } from '@/lib/shopify';
import type { LocationKey } from '@/lib/constants';

export type MappingStatus = 'matched' | 'shopify_only' | 'ls_only' | 'mismatch';

export interface ProductMappingRow {
  sku: string;
  shopify: {
    product_id: number;
    variant_id: number;
    product_title: string;
    variant_title: string;
    price: number;
    handle: string;
    status: string;
  } | null;
  lightspeed: {
    ls_product_id: number;
    name: string;
    price: number;
    visible: boolean;
  } | null;
  status: MappingStatus;
  mismatch_reasons: string[];
}

export interface MenuMappingResult {
  location_key: LocationKey;
  shopify_configured: boolean;
  shopify_error: string | null;
  total_shopify_variants: number;
  total_ls_products: number;
  matched: number;
  shopify_only: number;
  ls_only: number;
  mismatch: number;
  shopify_no_sku: number;
  last_ls_sync: string | null;
  rows: ProductMappingRow[];
}

interface LsRow {
  ls_product_id: number;
  name: string;
  sku: string | null;
  price: number | string | null;
  visible: boolean | null;
  synced_at: string;
}

const PRICE_TOLERANCE = 0.01;

function pricesDiffer(a: number, b: number): boolean {
  return Math.abs(a - b) > PRICE_TOLERANCE;
}

export async function getMenuMapping(loc: LocationKey): Promise<MenuMappingResult> {
  const supabase = await createClient();

  const lsRes = await supabase
    .from('raw_ls_products')
    .select('ls_product_id, name, sku, price, visible, synced_at')
    .eq('location_key', loc)
    .order('synced_at', { ascending: false });

  const lsRows = ((lsRes.data ?? []) as unknown as LsRow[]).filter(
    (r) => r.sku && r.sku.trim() !== ''
  );

  const lastLsSync =
    lsRows.length > 0
      ? lsRows.reduce<string>((m, r) => (r.synced_at > m ? r.synced_at : m), lsRows[0]!.synced_at)
      : null;

  const lsBySku = new Map<string, LsRow>();
  for (const r of lsRows) {
    if (r.sku) lsBySku.set(r.sku, r);
  }

  const shopifyResult = await getProductsForLocation(loc);

  if (!shopifyResult.ok) {
    return {
      location_key: loc,
      shopify_configured: false,
      shopify_error: shopifyResult.error,
      total_shopify_variants: 0,
      total_ls_products: lsRows.length,
      matched: 0,
      shopify_only: 0,
      ls_only: lsRows.length,
      mismatch: 0,
      shopify_no_sku: 0,
      last_ls_sync: lastLsSync,
      rows: lsRows.map((r) => ({
        sku: r.sku ?? '',
        shopify: null,
        lightspeed: {
          ls_product_id: r.ls_product_id,
          name: r.name,
          price: Number(r.price ?? 0),
          visible: Boolean(r.visible),
        },
        status: 'ls_only' as const,
        mismatch_reasons: [],
      })),
    };
  }

  const shopifyVariants = shopifyResult.variants.filter((v) => v.product_status === 'active');
  const shopifyNoSku = shopifyVariants.filter((v) => !v.sku || v.sku.trim() === '').length;
  const shopifyWithSku = shopifyVariants.filter((v) => v.sku && v.sku.trim() !== '');

  const shopifyBySku = new Map<string, ShopifyVariant>();
  for (const v of shopifyWithSku) {
    shopifyBySku.set(v.sku, v);
  }

  const allSkus = new Set<string>([...shopifyBySku.keys(), ...lsBySku.keys()]);
  const rows: ProductMappingRow[] = [];

  for (const sku of allSkus) {
    const sv = shopifyBySku.get(sku) ?? null;
    const lr = lsBySku.get(sku) ?? null;

    let status: MappingStatus;
    const mismatchReasons: string[] = [];

    if (sv && lr) {
      const lsPrice = Number(lr.price ?? 0);
      const priceMismatch = pricesDiffer(sv.price, lsPrice);
      const nameMismatch =
        sv.product_title.trim().toLowerCase() !== lr.name.trim().toLowerCase();

      if (priceMismatch) mismatchReasons.push('price_differs');
      if (nameMismatch) mismatchReasons.push('name_differs');

      status = mismatchReasons.length > 0 ? 'mismatch' : 'matched';
    } else if (sv) {
      status = 'shopify_only';
    } else {
      status = 'ls_only';
    }

    rows.push({
      sku,
      shopify: sv
        ? {
            product_id: sv.product_id,
            variant_id: sv.variant_id,
            product_title: sv.product_title,
            variant_title: sv.variant_title,
            price: sv.price,
            handle: sv.product_handle,
            status: sv.product_status,
          }
        : null,
      lightspeed: lr
        ? {
            ls_product_id: lr.ls_product_id,
            name: lr.name,
            price: Number(lr.price ?? 0),
            visible: Boolean(lr.visible),
          }
        : null,
      status,
      mismatch_reasons: mismatchReasons,
    });
  }

  rows.sort((a, b) => {
    const order: Record<MappingStatus, number> = {
      mismatch: 0,
      shopify_only: 1,
      ls_only: 2,
      matched: 3,
    };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return a.sku.localeCompare(b.sku);
  });

  const matched = rows.filter((r) => r.status === 'matched').length;
  const shopifyOnly = rows.filter((r) => r.status === 'shopify_only').length;
  const lsOnly = rows.filter((r) => r.status === 'ls_only').length;
  const mismatch = rows.filter((r) => r.status === 'mismatch').length;

  return {
    location_key: loc,
    shopify_configured: true,
    shopify_error: null,
    total_shopify_variants: shopifyVariants.length,
    total_ls_products: lsRows.length,
    matched,
    shopify_only: shopifyOnly,
    ls_only: lsOnly,
    mismatch,
    shopify_no_sku: shopifyNoSku,
    last_ls_sync: lastLsSync,
    rows,
  };
}
