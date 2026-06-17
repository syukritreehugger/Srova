# push_lightspeed_order — Changes from 2026-05-14 test

> Workflow ID: `2ENsv7R4I8H5L3cf`
> Changes captured here for git history. The workflow itself lives in n8n.

## Summary

During the Takeaway → Lightspeed controlled push test, three production fixes were applied to `push_lightspeed_order` plus several latent bugs were exposed. The workflow is currently **inactive** pending follow-up fixes.

## Fixes applied (live in workflow)

### 1. Extended cashier warning logic — `Build Order Payload` node

Original logic only added "TE BETALEN: CASH €X.XX" warning when `payment.method === 'cash' && payment.status === 'pending'`. Extended to all pay-at-door payment methods + item-level Takeaway specifications + customer-level remarks.

**New behavior:**

```javascript
function payAtDoorWarning(p, totalEur) {
  if (p.status !== 'pending') return '';
  const labels = { cash: 'CASH', bancontact: 'BANCONTACT', voucher: 'BON', card_online: 'CASH/CARD' };
  const label = labels[p.method];
  return label ? ` | TE BETALEN: ${label} €${totalEur.toFixed(2)}` : '';
}

// Customer note (from canonical_orders.customer.notes — Takeaway remarks, Shopify order note)
const customerNote = (customerObj.notes || '').trim();

// Item-level notes (Takeaway specifications like "Mayo | Kruiden | Gedroogde ui")
const itemNotes = (items || []).filter(it => it.notes).map(it => `- ${it.name}: ${it.notes}`).join('\n');

note: [
  `ONLINE ORDER - ${order.external_ref}${payAtDoorWarning(payment, centsToEur(payment.total_cents))}`,
  itemNotes,
  customerNote ? `Klant: ${customerNote}` : ''
].filter(Boolean).join('\n'),
```

**Example output (test order 36162845):**
```
ONLINE ORDER - TEST-Takeaway-XWCB7C-1778780694
- Julientje: Mayo | Z Kruiden | Gedroogde ui
Klant: 🧪 TEST ORDER - DO NOT PROCESS - DELETE AFTER TEST 🧪
```

### 2. `companyId` cast to Number — both Customer + Order payload

**Bug:** Postgres BIGINT serializes to JSON as **string** (`"145352"` not `145352`). This is normal JS BIGINT precision safety. But Lightspeed's `/onlineordering/customer/{id}/establishmentorder` endpoint **strictly validates** companyId as integer — string causes 404 "No valid company found".

The customer-create endpoint (`/core/customer`) was tolerant (accepted string companyId and silently used the OAuth token's default company context), so the bug was invisible until the order POST validation tripped.

**Fix in Build Customer Payload:**
```javascript
// Before:
companyId: dim.lightspeed_company_id,
// After:
companyId: Number(dim.lightspeed_company_id),
```

**Fix in Build Order Payload:**
```javascript
// Before:
const payload = {
  type: orderType,
  description: `ONLINE ORDER - ${order.external_ref}`,
  companyId: dim.lightspeed_company_id,
// After:
  companyId: Number(dim.lightspeed_company_id),
```

### 3. Queue read batch size 10 → 1 (workaround)

**Bug:** When the queue contains >1 message, multiple items flow through `Load Canonical Order` → `Load dim_location` → `Load LS Catalog SKUs` (cardinality changes 1 → N catalog rows) → `Validate Order PLUs` (Code node, filters via $('Load Canonical Order').all()) → `IF PLU Valid` (further filters).

After this chain, downstream Postgres queries using `.item.json` references (e.g., `Load LS Token` with `'{{ $('Load Canonical Order').item.json.location_key }}'`) fail with **"Paired item data unavailable"** because n8n can't trace the pairing chain back through the cardinality changes.

This bug was latent — Shopify orders come via webhook 1-at-a-time, so the queue read returns 1 item, no pairing issue. Takeaway poller enqueued 11 messages at once, exposing the bug.

**Workaround applied:**
```sql
-- Read q_orders_push_ls node:
-- Before:
SELECT msg_id, message FROM pgmq_read_order('q_orders_push_ls', 60, 10);
-- After:
SELECT msg_id, message FROM pgmq_read_order('q_orders_push_ls', 60, 1);
```

Each execution now processes 1 message. With 10-second schedule, throughput is 6 messages/minute = 360/hour — well above expected load (Takeaway max ~30/day, Shopify ~5/hour).

**Proper fix (deferred):** Refactor `Filter LS Idempotency` and `Build Customer/Order Payload` Code nodes to use `$input.all()` (current pipeline) instead of `$('NodeName').all()` (full upstream history), matching upstream data by `canonical_id`. Plus add explicit `pairedItem` in `Validate Order PLUs` return. ~1-2 hours work.

## Known bugs NOT yet fixed (TODO)

### A. Paired item issue (root cause of batch=1 workaround)

See "Fix #3" above. Workaround unblocks operation but limits throughput. Should be properly fixed before any source generates >360 orders/hour.

### B. ~~No customer dedup on retry — 11301 "already exists"~~ — FIXED 2026-05-18

When the workflow retried pushing an order with the same `external_ref`, the customer's deterministic email (`shop-${extRef}@frituuros.internal`) was unchanged. POST `/core/customer` returned 400 with code 11301 "A customer with the X email address already exists." The workflow has `onError: continueRegularOutput`, so the error item passed through to Build Order Payload, which set `customerId = 0`. The next POST `/establishmentorder` then failed because customer 0 is invalid.

**Fix applied 2026-05-18:** Pragmatic two-part patch — no new nodes, no extra LS API calls. Reuses the `ls_customer_id` column that the Success node already persists.

1. **`Load Canonical Order` SELECT** — added `ls_customer_id` to returned columns:

   ```sql
   -- Added column at end of SELECT list:
   SELECT id, source, external_ref, location_key, order_type, status,
          customer, items, payment, vat_lines, correlation_id,
          ls_order_id, ls_customer_id
   FROM canonical_orders WHERE id = ...;
   ```

2. **`Build Order Payload` Code node** — replaced the single-line customerId extraction with a fallback chain:

   ```javascript
   let customerId = 0;
   const respBody = customerResponse.body;
   if (typeof respBody === 'number' && respBody > 0) {
     customerId = respBody;
   } else if (respBody?.id) {
     customerId = respBody.id;
   } else if (customerResponse.data && typeof customerResponse.data === 'number') {
     customerId = customerResponse.data;
   }
   // Fallback to persisted customer ID from prior successful push
   if (!customerId && order.ls_customer_id) {
     customerId = Number(order.ls_customer_id);
   }
   ```

**How it works:**
- **First push** — `ls_customer_id` is NULL. POST `/core/customer` succeeds, returns new ID. Build Order Payload uses it. Success node persists `ls_customer_id` to `canonical_orders`.
- **Retry after a previously-successful push (e.g. admin retry from /alerts)** — `ls_customer_id` is populated. POST `/core/customer` fires again, returns 11301 error. Response-parsing branch yields 0 → fallback to `order.ls_customer_id` → push succeeds.

**Edge case not covered:** if POST `/core/customer` succeeded on first attempt but POST `/establishmentorder` failed before Success node ran, `ls_customer_id` isn't persisted. A subsequent retry still hits Bug #4. Rare in practice (network blip between two consecutive HTTP calls in same workflow run). If it becomes a problem we can add a Postgres node between POST `/core/customer` and Build Order Payload that persists the new ID immediately. Deferred.

**Why not GET-by-email lookup?** L-Series API documents `GET /core/customer` (returns ALL customers, no email filter) and `GET /core/customer/:id` (requires the ID we don't have). No efficient email lookup → paginated fallback would be slow and brittle. Persisted-ID fallback is simpler and handles 99% of retries.

### C. ~~State machine retry path missing~~ — FIXED 2026-05-18

`is_allowed_order_state_transition()` allows `ls_failed → pushing_ls → ls_sent` (legal retry path). But several UPDATE queries in `push_lightspeed_order` had `WHERE status = 'normalized'` only, causing them to silently no-op on `ls_failed` orders — meaning retries from `/alerts` would get stuck.

**Fix applied 2026-05-18:** Patched all 3 occurrences across the workflow to accept both states:

```sql
-- Before:
UPDATE canonical_orders SET status = 'pushing_ls'
WHERE id = ... AND status = 'normalized';

-- After:
UPDATE canonical_orders SET status = 'pushing_ls'
WHERE id = ... AND status IN ('normalized', 'ls_failed');
```

Patched nodes:
1. **State → pushing_ls** (main happy path)
2. **Adopt Existing LS Order** (Phase A idempotency path — adopts existing LS order ID when re-pushing)
3. **DLQ: PLU Mismatch** (writes status='pushing_ls' then 'ls_failed' as audit trail)

Now an admin retry flow works cleanly:
```
1. Order in ls_failed (PLU validation rejected, missing PLU)
2. Admin maps the missing PLU in /menu
3. Admin clicks "Retry" in /alerts → re-enqueues to q_orders_push_ls
4. Workflow picks up, transitions ls_failed → pushing_ls → ls_sent
   (or → ls_failed again if PLU validation still fails)
```

No more SQL admin override needed.

## Test results

Successful end-to-end push: **LS order 36162845** for canonical_id `92ec7fa6-18ba-42bf-b05f-d78d645b1ac7` (Berlare, €17.50, Julientje + Vlammenpijp), pushed 2026-05-14 17:45:23 UTC.

Total test orders created in LS Berlare during diagnosis (need cleanup):
- 36162713 — manual curl test 1 (Shopify Delivery table)
- 36162732 — manual curl test 2 (Takeaway V2 Delivery table)
- 36162845 — workflow test (Takeaway V2 Delivery table) ← the successful one

Ghost LS customers created (cosmetic, no functional impact):
- 9001570, 9001654, 9001666, 9001701 — all `#TESTORDER (IGNORE THIS) - Dylan Simons`

## State of workflows after test

| Workflow | Active? | Why |
|---|---|---|
| `push_lightspeed_order` | **inactive** | Has unfixed bugs (B, C above). Activate only for controlled tests until fixes ship. |
| `takeaway_poll_orders` | **inactive** | Don't keep accumulating orders until full pipeline ready. |
| `takeaway_refresh_access_token` | **inactive** | Only useful when poller runs. |
| `monitor_token_expiry` | active | Read-only monitoring, safe. |
