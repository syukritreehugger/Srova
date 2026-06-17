import { createClient } from '@/lib/supabase/server';
import { getProductsForLocation, type ShopifyVariant } from '@/lib/shopify';
import type { LocationKey } from '@/lib/constants';

export type MappingStatus =
  | 'matched'      // Simple SKU matches LS PLU 1:1
  | 'auto_split'   // Compound SKU (X__Y): base X exists in LS, modifier suffix prints as kitchen note
  | 'shopify_only' // Shopify SKU (or base PLU) NOT in LS catalog — real problem
  | 'ls_only'      // LS product not exposed in Shopify
  | 'mismatch';    // Same SKU both sides but name/price differs

export interface ProductMappingRow {
  sku: string;
  base_plu: string;           // For compound SKUs: parts[0]. For simple: same as sku.
  modifier_codes: string[];   // For compound: parts[1..n]. Empty for simple.
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
  auto_split: number;
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
      auto_split: 0,
      shopify_only: 0,
      ls_only: lsRows.length,
      mismatch: 0,
      shopify_no_sku: 0,
      last_ls_sync: lastLsSync,
      rows: lsRows.map((r) => ({
        sku: r.sku ?? '',
        base_plu: r.sku ?? '',
        modifier_codes: [],
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

  // Set of Shopify SKUs (and base PLUs after split) that have a corresponding side present.
  // Used so we don't double-report a LS product as ls_only when a compound Shopify SKU
  // already references it as its base.
  const baseShopifyToShopifySku = new Map<string, string>();
  for (const v of shopifyWithSku) {
    const base = v.sku.split('__')[0]!;
    if (!baseShopifyToShopifySku.has(base)) {
      baseShopifyToShopifySku.set(base, v.sku);
    }
  }

  const rows: ProductMappingRow[] = [];

  // First pass: every Shopify variant becomes a row.
  for (const [sku, sv] of shopifyBySku) {
    const skuParts = sku.split('__');
    const base = skuParts[0]!;
    const modifierCodes = skuParts.slice(1);
    const isCompound = modifierCodes.length > 0;

    // Look up LS by full SKU first (simple SKU exact match); fall back to base PLU (compound).
    const lr = lsBySku.get(sku) ?? (isCompound ? lsBySku.get(base) ?? null : null);

    let status: MappingStatus;
    const mismatchReasons: string[] = [];

    if (isCompound) {
      if (lr) {
        // Compound SKU resolves: base exists in LS catalog. Modifier suffix prints as kitchen note.
        status = 'auto_split';
      } else {
        // Base PLU missing — would DLQ at Phase B validate.
        status = 'shopify_only';
      }
    } else if (lr) {
      // Simple SKU — exact match required for both name and price.
      const lsPrice = Number(lr.price ?? 0);
      if (pricesDiffer(sv.price, lsPrice)) mismatchReasons.push('price_differs');
      if (sv.product_title.trim().toLowerCase() !== lr.name.trim().toLowerCase()) {
        mismatchReasons.push('name_differs');
      }
      status = mismatchReasons.length > 0 ? 'mismatch' : 'matched';
    } else {
      status = 'shopify_only';
    }

    rows.push({
      sku,
      base_plu: base,
      modifier_codes: modifierCodes,
      shopify: {
        product_id: sv.product_id,
        variant_id: sv.variant_id,
        product_title: sv.product_title,
        variant_title: sv.variant_title,
        price: sv.price,
        handle: sv.product_handle,
        status: sv.product_status,
      },
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

  // Second pass: LS products that have NO corresponding Shopify SKU (neither exact-match nor
  // as the base of any compound Shopify SKU). These are products only sold in-store.
  for (const [lsSku, lr] of lsBySku) {
    if (shopifyBySku.has(lsSku)) continue;          // already shown as matched/mismatch
    if (baseShopifyToShopifySku.has(lsSku)) continue; // already shown as auto_split parent
    rows.push({
      sku: lsSku,
      base_plu: lsSku,
      modifier_codes: [],
      shopify: null,
      lightspeed: {
        ls_product_id: lr.ls_product_id,
        name: lr.name,
        price: Number(lr.price ?? 0),
        visible: Boolean(lr.visible),
      },
      status: 'ls_only',
      mismatch_reasons: [],
    });
  }

  rows.sort((a, b) => {
    const order: Record<MappingStatus, number> = {
      mismatch: 0,
      shopify_only: 1,
      ls_only: 2,
      auto_split: 3,
      matched: 4,
    };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return a.sku.localeCompare(b.sku);
  });

  const matched = rows.filter((r) => r.status === 'matched').length;
  const autoSplit = rows.filter((r) => r.status === 'auto_split').length;
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
    auto_split: autoSplit,
    shopify_only: shopifyOnly,
    ls_only: lsOnly,
    mismatch,
    shopify_no_sku: shopifyNoSku,
    last_ls_sync: lastLsSync,
    rows,
  };
}
