# PLU Mapping Audit Dashboard — Plan

**Date:** 2026-05-07 (planned)
**Goal:** Per-store dashboard yang membandingkan Shopify SKU vs Lightspeed PLU untuk verifikasi mapping perfect, sesuai request atasan: *"Make overview per store for each product so the connection is perfect."*

## Context

Test malam ini menunjukkan order #online-4720 gagal (`ls_failed`) karena Lightspeed tidak punya PLU `SHOP-36567878009180`. Order #online-4721 sukses karena SKU `SA1` Ambiorix ter-map dengan benar di Lightspeed. Mapping yang salah = direct order failure di kitchen.

**Source of truth:** Lightspeed POS (per Deliverect docs convention). Shopify SKU harus match Lightspeed PLU exact.

## Data Sources Confirmed

### Shopify Products (per store, live API)
- **Endpoint:** `GET /admin/api/2024-10/products.json?limit=250` (paginated, max 250 per page)
- **Auth:** Custom App access token per store
  - tipzakske.myshopify.com → `shpca_REDACTED_AALST`
  - frietbooster.myshopify.com → `shpca_REDACTED_BERLARE`
  - de-frietchalet.myshopify.com → `shpca_REDACTED_DENDER`
- Stored in: `/var/www/driver-route-optimizer/.env` on VPS
- Scope: `read_products`, `write_orders` (sufficient)
- Returns: each product has `variants[]` with `sku`, `price`, `title`, `id`

### Lightspeed Products (per location, synced)
- **Table:** `raw_ls_products` (already exists, populated)
- **Sync workflow:** n8n `sync_lightspeed_products` (runs daily based on last sync timestamps)
- **Counts:** AALST 222 (219 with SKU), BERLARE 208 (205), DENDER 224 (217)
- **Columns:** `location_key`, `ls_product_id`, `name`, `sku` (= PLU), `price`, `cost_price`, `visible`, `barcode`, `synced_at`, `raw_payload`
- Last sync: 2026-05-07 05:30 UTC (fresh)
- **Bottom line:** SKU column in this table = Lightspeed PLU. Match this against Shopify variant SKU.

## Architecture

### Backend — Server Actions in `lib/queries/`

New file: `lib/queries/menu-mapping.ts`

```typescript
export interface ProductMapping {
  sku: string | null;
  shopify: {
    product_id: number;
    variant_id: number;
    title: string;
    price: number;
    handle: string;
    status: string; // active/draft/archived
  } | null;
  lightspeed: {
    ls_product_id: number;
    name: string;
    price: number;
    visible: boolean;
  } | null;
  status: 'matched' | 'shopify_only' | 'ls_only' | 'mismatch';
  mismatch_reasons?: string[]; // e.g. ['price_differs', 'name_differs']
}

export interface MenuMappingSummary {
  location_key: LocationKey;
  shopify_store: string;
  total_shopify: number;
  total_lightspeed: number;
  matched: number;
  shopify_only: number;
  ls_only: number;
  mismatch: number;
  last_ls_sync: string;
  rows: ProductMapping[];
}

export async function getMenuMapping(loc: LocationKey): Promise<MenuMappingSummary>
```

### Implementation Logic

```
1. Resolve Shopify token + shop domain for `loc`
   - LOC_AALST   → tipzakske.myshopify.com   + TIPZAKSKE_TOKEN
   - LOC_BERLARE → frietbooster.myshopify.com + FRIETBOOSTER_TOKEN
   - LOC_DENDER  → de-frietchalet.myshopify.com + FRIETCHALET_TOKEN

2. Fetch ALL Shopify products via paginated REST API
   - Loop `?limit=250&page_info=...` until exhausted
   - For each variant, collect: { sku, product_id, variant_id, title, price, status }
   - Filter: only variants where status=active

3. Read raw_ls_products WHERE location_key = loc
   - Already in Supabase, fast query
   - Filter: visible=true, sku IS NOT NULL

4. Build mapping by SKU (case-sensitive exact match):
   For each unique SKU across both sets:
     - shopify_variant = shopify.find(v => v.sku === sku)
     - ls_product = lightspeed.find(p => p.sku === sku)
     - If both: status = 'matched' (or 'mismatch' if name/price diverge >5%)
     - If shopify only: status = 'shopify_only'
     - If LS only: status = 'ls_only'

5. Compute summary stats + return
```

### UI — `app/(app)/menu/page.tsx`

**Replace OnDev placeholder.** Layout:

```
┌──────────────────────────────────────────────────────────────────┐
│ Menu sync · Product PLU Mapping                                   │
│ Source of truth: Lightspeed POS catalog                           │
├──────────────────────────────────────────────────────────────────┤
│  [LOC_AALST] [LOC_BERLARE] [LOC_DENDER]   Last LS sync: 2 min ago │
│                                                                    │
│  Stats:                                                            │
│  ┌──────────┬────────────┬────────────┬────────────┐             │
│  │ Matched  │ Shopify    │ LS only    │ Mismatch   │             │
│  │ 145 ✅   │ only 3 ⚠️  │ 8 🔵       │ 2 🔴       │             │
│  └──────────┴────────────┴────────────┴────────────┘             │
│                                                                    │
│  Filter chips: [All] [Issues only] [Matched] [Shopify-only] ...   │
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ SKU │ Shopify       │ LS PLU │ LS Name      │ Price │ Status │ │
│  ├─────────────────────────────────────────────────────────────┤ │
│  │ SA1 │ Ambiorix €4.20│ SA1    │ Ambiorix     │ €4.20 │ ✅     │ │
│  │ Ks5 │ Andalouse €1.30│ Ks5   │ Andalouse    │ €1.30 │ ✅     │ │
│  │ XYZ │ Special Sauce │ —      │ —            │ —     │ ⚠️ SO  │ │
│  │ —   │ —             │ HID01  │ Hidden Item  │ €0.50 │ 🔵 LO  │ │
│  │ FRK │ Frikandel €2.0│ FRK    │ Frikandel XL │ €2.50 │ 🔴 MM  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
│  Rows clickable → expand to show full payload diff                 │
└──────────────────────────────────────────────────────────────────┘
```

### Files to Create/Modify

| File | Action | Notes |
|---|---|---|
| `lib/queries/menu-mapping.ts` | NEW | Backend logic |
| `lib/shopify.ts` | NEW | Shopify Admin REST client (paginated products fetch) |
| `app/(app)/menu/page.tsx` | REWRITE | Remove OnDev placeholder, render mapping table |
| `app/(app)/menu/_components/mapping-table.tsx` | NEW | Table with filters |
| `app/(app)/menu/_components/mapping-stats.tsx` | NEW | Summary card |
| `app/(app)/menu/loading.tsx` | UPDATE | Skeleton |
| `components/dashboard/sidebar.tsx` | EDIT | Remove `onDev: true` from menu nav item |
| `.env.local` (VPS) | EDIT | Add 3 Shopify tokens (or move from driver-route-optimizer) |

### Environment Variables to Add

```bash
# .env.local (VPS /var/www/frituur-os)
SHOPIFY_AALST_DOMAIN=tipzakske.myshopify.com
SHOPIFY_AALST_TOKEN=shpca_REDACTED_AALST
SHOPIFY_BERLARE_DOMAIN=frietbooster.myshopify.com
SHOPIFY_BERLARE_TOKEN=shpca_REDACTED_BERLARE
SHOPIFY_DENDER_DOMAIN=de-frietchalet.myshopify.com
SHOPIFY_DENDER_TOKEN=shpca_REDACTED_DENDER
```

## Phasing

### Phase 1 — Read-only Audit (Day 1, ~5 jam)
- Backend query + UI
- Per location, table dengan all 4 statuses
- Filter chips
- Summary stats
- **Goal:** Operator bisa lihat issue, fix manual di Shopify atau Lightspeed POS

### Phase 2 — Action Buttons (Day 2, +3 jam)
- Click "Fix in Shopify" → deeplink ke Shopify admin product edit
- Click "Fix in LS" → deeplink ke Lightspeed Resto Manager product edit
- Export CSV button untuk mapping report

### Phase 3 — Modifier Mapping (Day 3+, +4 jam)
- Sama tapi untuk Shopify variants/options ↔ Lightspeed modifiers
- Lebih kompleks karena structure berbeda (Lightspeed pakai modifierGroups + modifierValues)

### Phase 4 — Auto-sync Shopify products to Supabase (optional, +3 jam)
- Bikin n8n workflow `sync_shopify_products` (mirror `sync_lightspeed_products`)
- Tabel baru: `raw_shopify_products`
- Daily sync, supaya audit bisa pakai cached data (lebih cepat)

## Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Shopify API rate limit (40 req/min REST) | Pagination 250 per page = 1-2 requests per store |
| SKU case mismatch (`SA1` vs `sa1`) | Document policy: case-sensitive. Operator decide mana yang correct |
| Shopify variant has empty SKU | Tampilkan as `shopify_only` dengan flag "no SKU" |
| LS product hidden but ada SKU match | Tampilkan tapi ada warning "LS product hidden" |
| 3 stores berarti 3 API calls per page load | Cache per location, refresh button manual |
| Pricing differs slightly (rounding) | Tolerance 1 cent, anything >1 cent = mismatch |

## Acceptance Criteria

- [ ] Buka `/menu`, pilih location, table tampil semua products
- [ ] Stats counter akurat (matched/shopify-only/ls-only/mismatch)
- [ ] Filter chips berfungsi
- [ ] Last LS sync timestamp visible
- [ ] Click row → expand detail (Shopify product info + LS product info side by side)
- [ ] Refresh button manual reload
- [ ] Untuk setiap location: zero false positives (matched products benar-benar match)
- [ ] Testing dengan minimal 1 known mismatch → muncul di list

## Success Metrics

- **Day 1:** Dashboard live, operator bisa lihat issues
- **Day 7:** Zero `ls_failed` orders karena PLU mismatch (dari `dlq_alerts` query)
- **Day 30:** Mapping audit jadi standard pre-cutover check untuk lokasi baru

## Out of Scope (untuk MVP)

- Auto-fix mapping (one-click sync)
- Modifier-level audit
- Historical change log per product
- Multi-language product names
- Product image comparison

## Implementation Order (Day 1)

1. Build `lib/shopify.ts` — REST client + paginated `getProducts(domain, token)`
2. Build `lib/queries/menu-mapping.ts` — combine Shopify + raw_ls_products + status logic
3. Test backend with curl/SQL — verify counts make sense
4. Build UI components (stats card + table)
5. Wire up to `/menu` page
6. Remove `onDev: true` from sidebar
7. Build + deploy + verify
8. Spot-check 5 known products manually di Shopify + Lightspeed
