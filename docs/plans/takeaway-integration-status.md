# Takeaway.com Integration — Status Report

> Last updated 2026-05-14 after controlled push test.

## Headline

**End-to-end push verified.** LS order 36162845 successfully created via workflow on 2026-05-14 17:45 UTC. Pipeline structurally works; several pre-existing bugs in `push_lightspeed_order` were exposed during the test and either fixed inline or documented for follow-up.

**All Takeaway-related workflows currently inactive** for safety until follow-up fixes ship and operational coordination is in place. `monitor_token_expiry` left active (read-only).

## What's deployed and working

### Data layer

| Component | Status |
|-----------|--------|
| `takeaway_tokens` table | ✅ Berlare seeded. refresh_token good ~30 days, auto-rotates per poll. |
| `takeaway_plu_map` table | ✅ 49 product names discovered. 2 mapped during test (Julientje→D9, Vlammenpijp→SN15). 47 still unmapped. |
| `canonical_order_schema_v1_1()` | ✅ Extended to allow `customer.notes`. See `docs/migrations/2026-05-14-canonical-schema-add-customer-notes.sql`. |
| `takeaway_backfill_plu()` RPC | ✅ Called by `/menu` mapping action to backfill stuck UNMAPPED placeholders. See `docs/migrations/2026-05-14-takeaway-backfill-plu-rpc.sql`. |
| `dim_location.lightspeed_company_id` | ✅ Fixed for Berlare (145352→44982) + Dender (145351→44981). See `docs/migrations/2026-05-14-fix-lightspeed-company-ids.sql`. Aalst was already correct. |

### n8n workflows

| Workflow | ID | Active? |
|----------|-----|---------|
| `takeaway_refresh_access_token` | `q1r0qcOalSrhzlrq` | ⏸️ inactive |
| `takeaway_poll_orders` | `86E91MXlXNDO5DA6` | ⏸️ inactive |
| `monitor_token_expiry` (extended) | `PYJ5HqtZErvCR95V` | ✅ active (read-only) |
| `push_lightspeed_order` | `2ENsv7R4I8H5L3cf` | ⏸️ inactive. See `docs/plans/2026-05-14-push-lightspeed-order-changes.md` for changes + remaining bugs. |

### Dashboard UI (deployed to VPS)

| Page | Status |
|------|--------|
| `/menu?channel=takeaway` | ✅ Works. 49 products listed (47 unmapped, 2 confirmed). |
| `/integrations` | ⚠️ Page is still static "On Dev" placeholder — `getIntegrationHealth()` extended but page doesn't call it yet. Out of scope. |
| `/settings` | ✅ Takeaway poller toggle works (deactivates/activates via n8n API). |
| `/alerts` | ✅ Picks up Takeaway alerts via `STAGE_LABELS`. |

## Controlled push test (2026-05-14 17:00-17:45 UTC)

Test goal: Verify Takeaway order can push through `push_lightspeed_order` to Lightspeed POS Berlare.

Test order: XWCB7C (Dylan Simons, €17.50 delivery, Julientje + Vlammenpijp). All canonical fields decorated with "#TESTORDER (IGNORE THIS)" markers for cashier safety.

### What worked

- ✅ Token refresh sub-workflow
- ✅ Order normalization with payment mapping
- ✅ PLU mapping admin flow + backfill RPC
- ✅ All upstream pipeline stages (Load LS Token, Check LS Existing, etc.)
- ✅ Customer creation in Lightspeed
- ✅ Order creation in Lightspeed (after fixes)

### Bugs discovered during test

| # | Bug | Status |
|---|-----|--------|
| 1 | `dim_location.lightspeed_company_id` had billing product IDs (145352, 145351) instead of API company IDs (44982, 44981) for Berlare & Dender | **Fixed** |
| 2 | `companyId` serialized as string by Postgres BIGINT → POST /establishmentorder 404 "No valid company found" | **Fixed** (Number() cast in Build Customer + Build Order Payload) |
| 3 | Paired item resolution breaks when queue read batch >1 (Load LS Catalog SKUs cardinality change confuses n8n pairing chain) | **Worked around** (batch=10→batch=1). Proper fix deferred. |
| 4 | No customer dedup fallback when 11301 "already exists" error | **Documented**, not yet fixed |
| 5 | State machine has no `ls_failed → normalized` retry path | **Documented**, today bypassed by disabling trigger |

See `docs/plans/2026-05-14-push-lightspeed-order-changes.md` for details on each.

## Cleanup needed (admin / operational tasks)

1. **Pay Lightspeed Berlare invoice INVS-2900708** (€1,776 annual subscription, not API charges — see invoice analysis in chat history). Until paid, POS is locked.
2. **Cancel/delete test orders** in LS Berlare POS once unlocked:
   - 36162713, 36162732 — manual curl test orders
   - 36162845 — workflow test order
3. **Optional:** Delete ghost LS customers 9001570, 9001654, 9001666, 9001701 (cosmetic, no functional impact)

## Remaining work to fully activate

1. **Fix push_lightspeed_order bugs #4 + #5** (customer dedup + state machine retry path) — recommended before full activation
2. **Map remaining 47 Takeaway products** in `/menu?channel=takeaway&loc=LOC_BERLARE` — admin task
3. **Confirm Aalst/Dender accounts**: Joef checking whether they have separate Takeaway portals. If yes, seed additional rows in `takeaway_tokens`.
4. **Coordinate full activation**: brief cashiers, activate all 4 workflows, monitor first 24h, deactivate Deliverect for Berlare
5. **Track follow-up tech debt:**
   - Proper paired-item fix for queue batch >1 throughput
   - Add `ls_customer_id` lookup pattern instead of always POST-create
   - Wire `/integrations` page to use `getIntegrationHealth()` real data

## Architecture (unchanged)

```
takeaway_poll_orders (5min schedule)
  ↓ Get Access Token (sub-workflow) → cache or refresh from Keycloak
  ↓ Fetch /api/orders/history (last 48h)
  ↓ Dedup vs canonical_orders.external_ref
  ↓ Per new order:
    ├ Fetch /api/orders/{id} detail
    ├ Normalize: products → items (PLU lookup), customer → contact, payment_type → method/status
    ├ INSERT raw_orders
    ├ UPSERT canonical_orders ('received')
    └ Transition to 'normalized' + enqueue q_orders_push_ls + (if delivery) q_orders_push_shipday
          (auto-populate takeaway_plu_map)
              ↓
push_lightspeed_order (10s schedule, batch=1)
  ↓ Read 1 message from q_orders_push_ls
  ↓ Load canonical + dim_location + LS catalog
  ↓ Validate PLUs (DLQ 11401 if any UNMAPPED:*)
  ↓ Load LS Token + Check Existing LS order
  ↓ Build customer payload + POST /core/customer
  ↓ Build order payload + POST /onlineordering/customer/{id}/establishmentorder
  ↓ Classify response: success / 409 dup / retry / DLQ
  ↓ Update canonical_orders status + delete/archive queue msg
```
