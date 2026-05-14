# Takeaway.com Integration — Final Status Report

> Generated 2026-05-15 after end-to-end verification (Task 16).

## What's live

### Pipeline (data layer)

| Component | Status | Notes |
|-----------|--------|-------|
| `takeaway_tokens` table | ✅ live | Seeded for `defrietbooster` → `LOC_BERLARE`. refresh_token good for ~30 days (rotates every poll). |
| `takeaway_plu_map` table | ✅ live | 49 unique product names auto-discovered, 0 currently mapped. Admin maps via `/menu?channel=takeaway`. |
| `canonical_orders` schema v1.1 | ✅ extended | Added `customer.notes` to JSON schema. Backward-compatible. |
| `takeaway_backfill_plu` RPC | ✅ live | Called by admin mapping action to update stuck `UNMAPPED:xxx` placeholders in past orders. |

### n8n workflows

| Workflow | ID | Status |
|----------|-----|--------|
| `takeaway_refresh_access_token` | `q1r0qcOalSrhzlrq` | ✅ active. Sub-workflow, 5-min cache with 30s buffer. |
| `takeaway_poll_orders` | `86E91MXlXNDO5DA6` | ✅ active, 5-min schedule. Successfully processed **17 orders / 49 product names** during verification. |
| `monitor_token_expiry` | `PYJ5HqtZErvCR95V` | ✅ extended with Takeaway branch. Alerts when `refresh_expires_at < NOW() + 7 days`. |
| `push_lightspeed_order` | `2ENsv7R4I8H5L3cf` | ⚠️ inactive. Updated with multi-method pay-at-door warning (cash/bancontact/voucher/card_online) + item-level + customer-level notes in LS order note. Activate when ready. |

### Dashboard UI

| Page | Change |
|------|--------|
| `/menu?channel=takeaway` | New tab with PLU mapping table + stats + Bahasa Indonesia explainer. |
| `/integrations` | Adds Takeaway.com row showing account, poller state, refresh-token TTL, last-order age. |
| `/settings` | Shows Takeaway poller Active/Paused status below Shopify toggle. |
| `/alerts` | Picks up `takeaway_token_expiry` queue with human label "Takeaway token refresh" via `STAGE_LABELS`. |

## End-to-end verification results

Live data after 4 poll cycles (15:50 — 16:15 UTC):

```
17 raw_orders rows for source='takeaway'
17 canonical_orders rows, all status='normalized'
49 takeaway_plu_map rows (unique product names)
17 messages in q_orders_push_ls queue (waiting for push_lightspeed_order activation)
Token state: access expires in 3.5min (auto-refresh), refresh expires in 30 days
```

## Known limitations / follow-ups

1. **Aalst & Dender accounts unknown.** Currently only `defrietbooster` (Berlare) is wired. Joef said he'd check whether Aalst/Dender have separate Takeaway accounts. Adding new locations = insert one row in `takeaway_tokens` per account + seed refresh_token.

2. **Playwright auto-renewal deferred.** Keycloak login has server-side reCAPTCHA that blocks automation. Manual recovery procedure in `docs/plans/takeaway-token-recovery.md`. Future: storage-state reuse design documented.

3. **Shipday push consumer missing.** Not specific to Takeaway — the queue `q_orders_push_shipday` has 355 pending Shopify messages too. When the consumer is built, our payload is source-agnostic so it'll handle Takeaway automatically.

4. **Modifiers (`specifications`) stored as item-level notes, not separate orderItems.** When push_lightspeed_order activates, the cashier sees them in the order note like `"- Curryworst: Special saus | TK"`. Future: map specifications to LS modifier PLUs (requires modifier mapping schema).

5. **Existing 17 orders blocked by PLU validation.** All items currently have `plu: 'UNMAPPED:xxx'`. As admin maps each product name in `/menu?channel=takeaway`, the backfill RPC updates `items[].plu` in stuck orders. Admin can then retry from `/alerts`.

## To activate the full Shopify+Takeaway pipeline

1. Activate `push_lightspeed_order` workflow (currently inactive)
2. Activate `poller_q_orders_normalize` (also inactive)
3. Admin maps Takeaway product names in `/menu?channel=takeaway` (49 to map)
4. Each mapping auto-backfills stuck `UNMAPPED:xxx` placeholders, orders re-queue automatically via the unchanged Phase D2 retry logic

When new Takeaway orders come in, they flow:
```
takeaway_poll_orders (5min) → canonical_orders ('normalized')
  → q_orders_push_ls → push_lightspeed_order → LS POS
  → (if delivery) q_orders_push_shipday → (future Shipday consumer)
```
