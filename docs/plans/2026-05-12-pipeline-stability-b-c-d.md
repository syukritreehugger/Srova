# Pipeline Stability — Phases B + C + D1/D2 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Tutup 3 kelas failure mode di Srova pipeline `Shopify → n8n → Lightspeed POS`: (B) PLU mismatch silent fail, (C) duplicate `canonical_orders` rows from multi-webhook fan-out, (D) silent failures dari token expiry + stuck orders.

**Architecture:** Modify production n8n workflows via n8n MCP (`n8n_get_workflow`, `n8n_update_partial_workflow`, `n8n_create_workflow`). Add 1 UNIQUE constraint via Supabase MCP (`apply_migration`). 1 small TS edit di `lib/queries/alerts.ts` untuk stage label baru. All verification via synthetic data + Supabase MCP `execute_sql` + Lightspeed REST API.

**Tech Stack:**
- n8n workflow JSON (nodes: `postgres`, `code`, `if`, `httpRequest`, `scheduleTrigger`)
- PostgreSQL 14+ dengan **pgmq extension** (`pgmq.send`, `pgmq.delete`, `pgmq.set_vt`, `pgmq.archive`)
- Supabase (canonical_orders, raw_orders, dlq_alerts, raw_ls_products, ls_tokens)
- Lightspeed L-Series API (`GET /resto/rest/onlineordering/order`)
- Next.js 16 dashboard (read-only consumer)

**Critical context to preserve across tasks:**
- Phase A (idempotency) already live di `push_lightspeed_order` workflow ID `2ENsv7R4I8H5L3cf`. Tetap respect itu — node baru dari Phase B harus diinsert SEBELUM "Check LS Existing" (Phase A node).
- `canonical_orders` is **append-only by RULES §4.3** — DELETE diblokir, hanya UPDATE/INSERT. Existing duplicates harus di-mark `cancelled` bukan dihapus.
- `order_state_history` punya trigger pada `canonical_orders` UPDATE — state transition harus valid (e.g. `normalized → ls_failed` not allowed direct, lewat `pushing_ls` dulu). Lihat valid transitions di `lib/constants.ts:12-23`.
- Workflows yang ada (semua live di n8n.ghysels-vagenende.be):
  - `0i4SS4CHZo1h2Poj` poller_q_orders_normalize
  - `2ENsv7R4I8H5L3cf` push_lightspeed_order (Phase A modified)
  - `OdYCsotEru63kxN7` shopify_normalize_to_canonical (Phase C target)
  - `OmJqbQdD0gmABLxr` shopify_webhook_order_create
  - 3 other webhook handlers
- Postgres credentials di n8n: `9zc3jzWzgtSSJL0O` ("Postgres Data Catalog") — gunakan ID ini di node baru.
- Test order pattern: pakai `tipzakske.myshopify.com` Shopify Admin API dengan `shpca_REDACTED` token, `test: true` flag.

---

## Phase B — PLU Pre-Validation

**Why:** 193 Shopify variants tidak punya matching PLU di Lightspeed (per `/menu` audit). Order untuk produk-produk ini akan dapat HTTP 400 (`code: 11401, "No product found with plu X"`) saat dipush, lalu retry 5× di DLQ ladder. Operator nunggu lama, customer impact tinggi.

**Solution:** Validate PLU exist di `raw_ls_products` SEBELUM push. Kalau ada missing PLU, skip push, set status `ls_failed`, create actionable DLQ alert.

**Target n8n workflow:** `2ENsv7R4I8H5L3cf` (push_lightspeed_order).

**Insertion point:** Between existing `Load dim_location` and `Load LS Token` nodes. **MUST be BEFORE** `Check LS Existing` (Phase A node at position [1750, 250]).

---

### Task B1: Add "Load LS Catalog SKUs" node

**Files:**
- Modify n8n workflow `2ENsv7R4I8H5L3cf` via MCP

**Step 1: Read current workflow structure**

Tool: `mcp__n8n-mcp__n8n_get_workflow` with `id: "2ENsv7R4I8H5L3cf"`, `mode: "structure"`

Expected: 25 nodes including "Load dim_location", "Load LS Token", "Check LS Existing", etc.

**Step 2: Add new postgres node "Load LS Catalog SKUs"**

Tool: `mcp__n8n-mcp__n8n_update_partial_workflow` with operation to add new node.

Node definition:
```json
{
  "id": "load-ls-catalog-skus-node",
  "name": "Load LS Catalog SKUs",
  "type": "n8n-nodes-base.postgres",
  "typeVersion": 2.5,
  "position": [1150, 100],
  "credentials": {
    "postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}
  },
  "parameters": {
    "operation": "executeQuery",
    "query": "=SELECT sku FROM raw_ls_products WHERE location_key = '{{ $json.location_key }}' AND sku IS NOT NULL AND sku <> '' AND visible = true;",
    "options": {}
  }
}
```

**Step 3: Verify node added**

Tool: `mcp__n8n-mcp__n8n_get_workflow` with `mode: "structure"`. Confirm 26 nodes total, new node visible.

**Step 4: Commit checkpoint**

Update changelog di plan file (manual edit OK). No git commit yet — workflow not connected.

---

### Task B2: Add "Validate Order PLUs" code node

**Files:**
- Modify n8n workflow `2ENsv7R4I8H5L3cf`

**Step 1: Define JS code for validation**

The node receives input from "Load LS Catalog SKUs" (array of `{sku}` rows). Uses `$('Load Canonical Order').all()` to access items, `$('Parse Messages').all()` for msg_id. Extracts unique PLUs from `items[].plu` AND `items[].modifiers[].plu`. Returns flag + missing PLU list.

JS Code:
```javascript
const skuRows = $input.all();
const orders = $('Load Canonical Order').all();
const msgs = $('Parse Messages').all();

// Build set of valid SKUs (case-sensitive — matches Lightspeed convention)
const validSkus = new Set(skuRows.map(r => r.json.sku));

return orders.map((orderItem, idx) => {
  const order = orderItem.json;
  const msg = msgs[idx].json;
  const items = typeof order.items === 'string' ? JSON.parse(order.items) : order.items;
  
  // Collect all required PLUs (items + their modifiers)
  const requiredPlus = new Set();
  for (const item of (items || [])) {
    if (item.plu) requiredPlus.add(item.plu);
    for (const mod of (item.modifiers || [])) {
      if (mod.plu) requiredPlus.add(mod.plu);
    }
  }
  
  // Find missing
  const missing = [...requiredPlus].filter(plu => !validSkus.has(plu));
  
  return {
    json: {
      all_valid: missing.length === 0,
      missing_plus: missing,
      missing_plus_str: missing.join(', '),
      missing_plus_json: JSON.stringify(missing),
      required_count: requiredPlus.size,
      catalog_size: validSkus.size,
      canonical_id: order.id,
      external_ref: order.external_ref,
      source: order.source,
      location_key: order.location_key,
      correlation_id: order.correlation_id,
      msg_id: msg.msg_id,
    },
  };
});
```

**Step 2: Add code node via MCP**

Tool: `mcp__n8n-mcp__n8n_update_partial_workflow`

```json
{
  "id": "validate-order-plus-node",
  "name": "Validate Order PLUs",
  "type": "n8n-nodes-base.code",
  "typeVersion": 2,
  "position": [1300, 100],
  "parameters": {"jsCode": "<paste code above>"}
}
```

**Step 3: Verify node + parameters**

Tool: `mcp__n8n-mcp__n8n_get_workflow` with `mode: "full"`. Inspect `jsCode` field contains the validation logic.

---

### Task B3: Add "IF PLU Valid" branching node

**Files:**
- Modify n8n workflow `2ENsv7R4I8H5L3cf`

**Step 1: Add IF node**

Tool: `mcp__n8n-mcp__n8n_update_partial_workflow`

```json
{
  "id": "if-plu-valid-node",
  "name": "IF PLU Valid",
  "type": "n8n-nodes-base.if",
  "typeVersion": 2.2,
  "position": [1450, 100],
  "parameters": {
    "conditions": {
      "options": {
        "caseSensitive": true,
        "leftValue": "",
        "typeValidation": "strict",
        "version": 2
      },
      "conditions": [
        {
          "id": "plu-valid",
          "leftValue": "={{ $json.all_valid }}",
          "rightValue": true,
          "operator": {
            "type": "boolean",
            "operation": "true",
            "singleValue": true
          }
        }
      ],
      "combinator": "and"
    },
    "options": {}
  }
}
```

**Step 2: Verify node exists**

Tool: `mcp__n8n-mcp__n8n_get_workflow`, `mode: "structure"`. Expect 28 total nodes now.

---

### Task B4: Add "DLQ: PLU Mismatch" postgres node

**Files:**
- Modify n8n workflow `2ENsv7R4I8H5L3cf`

**Step 1: Define SQL with state machine respect**

State transitions valid (from lib/constants.ts): `normalized → pushing_ls → ls_failed`. Direct `normalized → ls_failed` NOT allowed by trigger.

SQL (run as multi-statement query):
```sql
-- Transition 1: normalized → pushing_ls
UPDATE canonical_orders 
SET status = 'pushing_ls' 
WHERE id = '{{ $json.canonical_id }}'::uuid AND status = 'normalized';

-- Transition 2: pushing_ls → ls_failed
UPDATE canonical_orders 
SET status = 'ls_failed', 
    cancel_reason = 'PLU validation failed: ' || '{{ $json.missing_plus_str }}'
WHERE id = '{{ $json.canonical_id }}'::uuid AND status = 'pushing_ls';

-- Insert actionable DLQ alert
INSERT INTO dlq_alerts (
  queue_name, external_ref, source, location_key, canonical_order_id,
  last_error, attempt_count, alerted_at, created_at
) VALUES (
  'q_orders_push_ls',
  '{{ $json.external_ref }}',
  '{{ $json.source }}',
  '{{ $json.location_key }}',
  '{{ $json.canonical_id }}'::uuid,
  jsonb_build_object(
    'message', 'PLU not in Lightspeed catalog: ' || '{{ $json.missing_plus_str }}',
    'code', '11401',
    'stage', 'plu_validation',
    'missing_plus', '{{ $json.missing_plus_json }}'::jsonb,
    'runbook', 'Fix mapping at /menu (Shopify SKU must match LS PLU), then retry from /alerts'
  ),
  1,
  now(),
  now()
);

-- Delete msg from push queue (no auto-retry — PLU won't appear without manual fix)
SELECT pgmq.delete('q_orders_push_ls', {{ $json.msg_id }});
```

**Step 2: Add postgres node via MCP**

```json
{
  "id": "dlq-plu-mismatch-node",
  "name": "DLQ: PLU Mismatch",
  "type": "n8n-nodes-base.postgres",
  "typeVersion": 2.5,
  "position": [1600, 250],
  "credentials": {
    "postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}
  },
  "parameters": {
    "operation": "executeQuery",
    "query": "<paste SQL above>",
    "options": {}
  }
}
```

**Step 3: Verify**

Tool: `mcp__n8n-mcp__n8n_get_workflow`, `mode: "structure"`. Expect 29 nodes.

---

### Task B5: Rewire connections — insert validation chain

**Files:**
- Modify n8n workflow `2ENsv7R4I8H5L3cf` connections

**Step 1: Understand existing connection to break**

Tool: `mcp__n8n-mcp__n8n_get_workflow`, `mode: "structure"`. Find current connection `Load dim_location → Load LS Token`.

**Step 2: Update connections atomically via n8n_update_partial_workflow**

New connection topology:
```
Load dim_location 
  → Load LS Catalog SKUs 
  → Validate Order PLUs 
  → IF PLU Valid
       ├ TRUE  → Load LS Token  (existing flow continues)
       └ FALSE → DLQ: PLU Mismatch  (terminate)
```

Connection diff:
```json
{
  "Load dim_location": {"main": [[{"node": "Load LS Catalog SKUs", "type": "main", "index": 0}]]},
  "Load LS Catalog SKUs": {"main": [[{"node": "Validate Order PLUs", "type": "main", "index": 0}]]},
  "Validate Order PLUs": {"main": [[{"node": "IF PLU Valid", "type": "main", "index": 0}]]},
  "IF PLU Valid": {
    "main": [
      [{"node": "Load LS Token", "type": "main", "index": 0}],
      [{"node": "DLQ: PLU Mismatch", "type": "main", "index": 0}]
    ]
  },
  "DLQ: PLU Mismatch": {"main": [[]]}
}
```

**Step 3: Verify reactivation**

Tool: n8n MCP — query workflow active state. If `active: false`, reactivate via REST POST `/workflows/{id}/activate`.

---

### Task B6: Synthetic test — invalid PLU

**Files:**
- Test via Supabase MCP `execute_sql` + n8n MCP

**Step 1: Insert synthetic canonical_orders with bad PLU**

Tool: `mcp__supabase-self-hosted__execute_sql`

```sql
-- Snapshot baseline DLQ count
SELECT COUNT(*) AS baseline_dlq FROM dlq_alerts WHERE queue_name = 'q_orders_push_ls';

-- Insert synthetic test order
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id
) VALUES (
  'v1', 'shopify', 'TEST-PLU-INVALID-001', 'LOC_AALST', 'pickup', 'normalized',
  '{"name":"Test","email":"test@test.com"}'::jsonb,
  '[{"plu":"NONEXISTENT-XYZ","qty":1,"name":"Bad PLU","unit_price_cents":100}]'::jsonb,
  '{"total_cents":100,"method":"test"}'::jsonb,
  '[]'::jsonb,
  gen_random_uuid()::text
) RETURNING id;
```

Save returned `id` as `$CANONICAL_ID`.

**Step 2: Enqueue to push_ls queue manually**

```sql
SELECT pgmq.send(
  'q_orders_push_ls',
  jsonb_build_object(
    'source', 'shopify',
    'canonical_id', '<$CANONICAL_ID>',
    'external_ref', 'TEST-PLU-INVALID-001',
    'location_key', 'LOC_AALST'
  )
);
```

**Step 3: Wait ~15s + verify outcome**

```sql
-- Order should be ls_failed
SELECT status, cancel_reason FROM canonical_orders WHERE external_ref = 'TEST-PLU-INVALID-001';
-- Expected: status='ls_failed', cancel_reason='PLU validation failed: NONEXISTENT-XYZ'

-- DLQ alert should exist
SELECT id, last_error->>'message', last_error->>'code', last_error->'missing_plus'
FROM dlq_alerts 
WHERE external_ref = 'TEST-PLU-INVALID-001';
-- Expected: 1 row, message contains 'NONEXISTENT-XYZ', code='11401'

-- Queue should be empty (msg deleted)
SELECT queue_length FROM pgmq.metrics_all() WHERE queue_name = 'q_orders_push_ls';
-- Expected: 0
```

**Step 4: Check n8n executions for NO POST to Lightspeed**

Tool: `mcp__n8n-mcp__n8n_executions` action=list, workflowId=`2ENsv7R4I8H5L3cf`, limit=5.

Take latest execution ID, then:
Tool: `mcp__n8n-mcp__n8n_executions` action=get, mode=filtered, nodeNames=`["POST /establishmentorder", "DLQ: PLU Mismatch"]`.

Expected: POST node NOT in execution path. "DLQ: PLU Mismatch" present.

**Step 5: Cleanup**

```sql
UPDATE canonical_orders SET status = 'cancelled', cancel_reason = 'test cleanup' 
WHERE external_ref = 'TEST-PLU-INVALID-001';
DELETE FROM dlq_alerts WHERE external_ref = 'TEST-PLU-INVALID-001';
```

---

### Task B7: Live test — valid PLU (happy path)

**Files:**
- Test via Shopify Admin API + monitor

**Step 1: Create Shopify test order with real PLU**

Use existing test pattern (`shpca_REDACTED`, variant 54837686796636 = Andalouse SKU=Ks5).

```bash
curl -X POST "https://tipzakske.myshopify.com/admin/api/2024-10/orders.json" \
  -H "X-Shopify-Access-Token: shpca_REDACTED" \
  -H "Content-Type: application/json" \
  -d '{
    "order": {
      "test": true, "financial_status": "paid",
      "note": "TEST-PHASE-B-VALID-PLU",
      "tags": "frituur-os-test,phase-b-valid",
      "email": "test+phb@frietchalet.be",
      "line_items": [{"variant_id": 54837686796636, "quantity": 1}],
      "customer": {"first_name":"PhB","last_name":"Valid","email":"test+phb@frietchalet.be"},
      "shipping_address": {"first_name":"PhB","last_name":"Valid","address1":"Grote Markt 1","city":"Aalst","zip":"9300","country":"Belgium","phone":"+32000000000"}
    }
  }'
```

Save returned `order.name` as `$ORDER_NAME` (e.g. `#online-XXXX`).

**Step 2: Wait ~30s, verify normal flow**

```sql
SELECT status, ls_order_id 
FROM canonical_orders 
WHERE external_ref = 'Shopify - $ORDER_NAME';
-- Expected: status IN ('ls_sent', 'ls_accepted'), ls_order_id NOT NULL
```

**Step 3: Verify NO DLQ for this order**

```sql
SELECT COUNT(*) FROM dlq_alerts WHERE external_ref = 'Shopify - $ORDER_NAME';
-- Expected: 0
```

**Step 4: Cleanup**

Per existing pattern in tests prior — Shopify cancel/delete + LS manual cancel by user.

---

### Task B8: Document Phase B in commit

**Step 1: Update CLAUDE.md with new node references**

Add note about Phase B validation flow:
```markdown
## n8n Workflows (push_lightspeed_order, 2ENsv7R4I8H5L3cf)

After Phase B (PLU pre-validation), the pipeline includes:
- Load LS Catalog SKUs → Validate Order PLUs → IF PLU Valid
- TRUE → continue to LS push
- FALSE → DLQ: PLU Mismatch (skip push, create actionable alert)
```

**Step 2: Commit and push**

```bash
cd /var/www/frituur-os && git add CLAUDE.md
git commit -m "docs: document Phase B PLU pre-validation flow in push_lightspeed_order"
git push origin main
```

Note: n8n workflow JSON itself NOT in git (managed via n8n API). Document the structure for context.

---

## Phase C — Webhook Deduplication

**Why:** Shopify fires multiple webhook topics for 1 order (orders/create, orders/updated, orders/fulfilled). Tanpa UNIQUE constraint pada `canonical_orders.external_ref`, race conditions bisa bikin duplicate rows. Sekarang sebagian ter-mitigasi karena dashboard pakai `.eq('external_ref', ...)` tapi tidak atomic.

**Solution:** Audit existing duplicates → user-driven cleanup → add UNIQUE constraint → modify normalize workflow ke UPSERT.

**Target workflow:** `OdYCsotEru63kxN7` (shopify_normalize_to_canonical).

---

### Task C1: Audit existing duplicates

**Files:**
- Query via Supabase MCP

**Step 1: Find duplicates by (source, external_ref, location_key)**

Tool: `mcp__supabase-self-hosted__execute_sql`

```sql
SELECT 
  source,
  external_ref,
  location_key,
  COUNT(*) AS row_count,
  array_agg(id::text ORDER BY created_at DESC) AS ids_desc,
  array_agg(status ORDER BY created_at DESC) AS statuses_desc,
  array_agg(created_at::timestamp(0) ORDER BY created_at DESC) AS created_ats_desc,
  array_agg(ls_order_id ORDER BY created_at DESC) AS ls_ids_desc
FROM canonical_orders
GROUP BY source, external_ref, location_key
HAVING COUNT(*) > 1
ORDER BY row_count DESC, external_ref;
```

**Step 2: Save report ke working notes**

Output structure:
- Total duplicates count
- Per-(source,external_ref,location_key) detail: how many rows, which IDs, which statuses
- Flag suspicious patterns (e.g. duplicates with different ls_order_id → indicates parallel push)

**Step 3: Hand report ke user for review**

User decision per duplicate group:
- "Keep latest" (default) — mark older rows `cancelled`
- "Keep ls_accepted one" — preserve LS-confirmed row
- "Manual decide" — operator picks

---

### Task C2: Cleanup duplicates (user-driven)

**Files:**
- SQL via Supabase MCP

**Step 1: For each duplicate group, generate UPDATE per user decision**

Pattern (most common case — keep latest):
```sql
-- Mark all but latest as cancelled per duplicate group
WITH ranked AS (
  SELECT id, ROW_NUMBER() OVER (
    PARTITION BY source, external_ref, location_key 
    ORDER BY created_at DESC, id DESC
  ) AS rn
  FROM canonical_orders
  WHERE (source, external_ref, location_key) IN (
    -- list from audit query
  )
)
UPDATE canonical_orders
SET status = 'cancelled', 
    cancel_reason = 'duplicate row cleanup (Phase C dedup)'
WHERE id IN (SELECT id FROM ranked WHERE rn > 1)
  AND status NOT IN ('cancelled', 'ls_accepted');
```

**Step 2: Verify zero remaining duplicates with non-cancelled status**

```sql
SELECT source, external_ref, location_key, COUNT(*) FILTER (WHERE status != 'cancelled') AS active_count
FROM canonical_orders
GROUP BY source, external_ref, location_key
HAVING COUNT(*) FILTER (WHERE status != 'cancelled') > 1;
```

Expected: 0 rows returned. If non-zero, escalate to user — likely conflicting `ls_accepted` rows that need manual resolution before constraint can be applied.

---

### Task C3: Apply UNIQUE constraint via Supabase migration

**Files:**
- New migration via `apply_migration` MCP tool

**Step 1: Define migration**

Partial UNIQUE index (only active rows) — prevents adding constraint from blocking historical cancelled duplicates:

```sql
CREATE UNIQUE INDEX canonical_orders_unique_active_idx
ON canonical_orders (source, external_ref, location_key)
WHERE status != 'cancelled';
```

**Why partial:** Cancelled rows from cleanup remain in table (append-only rule). UNIQUE index only enforced on active rows. New INSERT/UPSERT pakai `ON CONFLICT (source, external_ref, location_key) WHERE status != 'cancelled'`.

**Step 2: Apply migration**

Tool: `mcp__supabase-self-hosted__apply_migration` with name `2026_05_12_canonical_orders_unique_active`.

**Step 3: Verify constraint exists**

```sql
SELECT indexname, indexdef 
FROM pg_indexes 
WHERE tablename = 'canonical_orders' 
  AND indexname = 'canonical_orders_unique_active_idx';
```

Expected: 1 row, `indexdef` contains `WHERE (status <> 'cancelled')`.

**Step 4: Test constraint enforcement**

```sql
-- This should succeed (first insert)
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id
) VALUES (
  'v1', 'shopify', 'TEST-C-CONSTRAINT-001', 'LOC_AALST', 'pickup', 'received',
  '{}'::jsonb, '[]'::jsonb, '{}'::jsonb, '[]'::jsonb, gen_random_uuid()::text
);

-- This should FAIL with unique violation
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id
) VALUES (
  'v1', 'shopify', 'TEST-C-CONSTRAINT-001', 'LOC_AALST', 'pickup', 'received',
  '{}'::jsonb, '[]'::jsonb, '{}'::jsonb, '[]'::jsonb, gen_random_uuid()::text
);
-- Expected: ERROR: duplicate key value violates unique constraint
```

**Step 5: Cleanup test**

```sql
UPDATE canonical_orders SET status = 'cancelled' WHERE external_ref = 'TEST-C-CONSTRAINT-001';
```

---

### Task C4: Update normalize workflow to UPSERT

**Files:**
- Modify n8n workflow `OdYCsotEru63kxN7` via MCP

**Step 1: Read current normalize workflow SQL**

Tool: `mcp__n8n-mcp__n8n_get_workflow` with `id: "OdYCsotEru63kxN7"`, `mode: "full"`. Find postgres node that inserts into canonical_orders.

**Step 2: Update INSERT SQL to ON CONFLICT pattern**

Replace the existing INSERT with:
```sql
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, utm, refund_markers,
  raw_payload_id, correlation_id
) VALUES (
  '{{ $json.schema_version }}', 
  '{{ $json.source }}',
  '{{ $json.external_ref }}',
  '{{ $json.location_key }}',
  '{{ $json.order_type }}',
  '{{ $json.status }}',
  '{{ $json.customer }}'::jsonb,
  '{{ $json.items }}'::jsonb,
  '{{ $json.payment }}'::jsonb,
  '{{ $json.vat_lines }}'::jsonb,
  '{{ $json.utm }}'::jsonb,
  '{{ $json.refund_markers }}'::jsonb,
  {{ $json.raw_payload_id }},
  '{{ $json.correlation_id }}'
)
ON CONFLICT (source, external_ref, location_key) WHERE status != 'cancelled' DO UPDATE SET
  items = EXCLUDED.items,
  payment = EXCLUDED.payment,
  customer = EXCLUDED.customer,
  refund_markers = EXCLUDED.refund_markers,
  utm = COALESCE(canonical_orders.utm, EXCLUDED.utm),
  updated_at = now()
RETURNING id, (xmax = 0) AS was_inserted;
```

**Key points:**
- `WHERE status != 'cancelled'` matches partial index
- DO NOT update: `status`, `ls_order_id`, `ls_pushed_at`, `correlation_id` (managed by downstream pipeline)
- `was_inserted` flag: TRUE for new row, FALSE for update (useful for downstream branching)

**Step 3: Apply via n8n MCP**

Tool: `mcp__n8n-mcp__n8n_update_partial_workflow` updating the postgres node's query parameter.

**Step 4: Reactivate workflow if needed**

n8n PUT often deactivates — verify and reactivate.

---

### Task C5: Test UPSERT — synthetic dual-webhook

**Files:**
- Test via Supabase MCP

**Step 1: Simulate two webhook normalization calls for same order**

Direct INSERT bypassing webhook to test UPSERT:
```sql
-- First call (orders/create simulation)
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id
) VALUES (
  'v1', 'shopify', 'TEST-C-UPSERT-001', 'LOC_AALST', 'pickup', 'received',
  '{"name":"FirstWebhook"}'::jsonb,
  '[{"plu":"SA1","qty":1,"name":"Ambiorix","unit_price_cents":420}]'::jsonb,
  '{"total_cents":420,"method":"test"}'::jsonb,
  '[]'::jsonb,
  gen_random_uuid()::text
)
ON CONFLICT (source, external_ref, location_key) WHERE status != 'cancelled' DO UPDATE SET
  items = EXCLUDED.items, payment = EXCLUDED.payment, customer = EXCLUDED.customer, updated_at = now()
RETURNING id, (xmax = 0) AS was_inserted;
-- Expected: was_inserted = TRUE
```

```sql
-- Second call (orders/updated simulation — same external_ref, different customer name)
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id
) VALUES (
  'v1', 'shopify', 'TEST-C-UPSERT-001', 'LOC_AALST', 'pickup', 'received',
  '{"name":"SecondWebhook","fulfilled":true}'::jsonb,
  '[{"plu":"SA1","qty":1,"name":"Ambiorix","unit_price_cents":420}]'::jsonb,
  '{"total_cents":420,"method":"test"}'::jsonb,
  '[]'::jsonb,
  gen_random_uuid()::text
)
ON CONFLICT (source, external_ref, location_key) WHERE status != 'cancelled' DO UPDATE SET
  items = EXCLUDED.items, payment = EXCLUDED.payment, customer = EXCLUDED.customer, updated_at = now()
RETURNING id, (xmax = 0) AS was_inserted;
-- Expected: was_inserted = FALSE, same id as first call
```

**Step 2: Verify only 1 row exists**

```sql
SELECT id, status, customer, created_at, updated_at
FROM canonical_orders 
WHERE external_ref = 'TEST-C-UPSERT-001';
-- Expected: 1 row, customer.name = 'SecondWebhook' (updated), updated_at > created_at
```

**Step 3: Cleanup**

```sql
UPDATE canonical_orders SET status = 'cancelled', cancel_reason = 'test cleanup' 
WHERE external_ref = 'TEST-C-UPSERT-001';
```

---

### Task C6: Live test — real Shopify order multi-webhook

**Step 1: Create Shopify test order with auto-fulfillment**

(Uses same pattern as B7, triggers orders/create + orders/updated + orders/fulfilled webhooks)

**Step 2: Wait ~60s for all webhooks to be processed**

**Step 3: Verify exactly 1 canonical_orders row**

```sql
SELECT COUNT(*) AS row_count, MAX(updated_at) - MIN(created_at) AS time_span
FROM canonical_orders 
WHERE external_ref = 'Shopify - $ORDER_NAME' AND status != 'cancelled';
-- Expected: row_count = 1, time_span > 0 (proves updates happened)
```

**Step 4: Verify state_history shows correct path**

```sql
SELECT from_state, to_state, occurred_at, reason
FROM order_state_history h
JOIN canonical_orders c ON c.id = h.canonical_order_id
WHERE c.external_ref = 'Shopify - $ORDER_NAME'
ORDER BY occurred_at;
-- Expected: Normal flow (received → normalized → pushing_ls → ls_sent), no errors
```

---

## Phase D1 — Token Expiry Alert

**Why:** LS OAuth tokens expire setiap 1 jam, auto-refresh berjalan tapi kalau gagal silent. Operator baru tahu setelah push gagal.

**Solution:** Scheduled n8n workflow check ls_tokens every 15min, alert kalau imminent expiry + recent refresh hasn't run.

---

### Task D1.1: Add stage label to TS app

**Files:**
- Modify `lib/queries/alerts.ts:25-31`

**Step 1: Add 'ls_token_expiry' entry to STAGE_LABELS**

Current code (lib/queries/alerts.ts:25-31):
```typescript
const STAGE_LABELS: Record<string, string> = {
  q_orders_normalize: 'Normalize order',
  q_orders_push_ls: 'Push to Lightspeed',
  q_orders_poll_ls: 'Poll Lightspeed',
  q_orders_push_shipday: 'Push to Shipday',
  q_orders_compensate: 'Compensation',
};
```

Add new entry:
```typescript
const STAGE_LABELS: Record<string, string> = {
  q_orders_normalize: 'Normalize order',
  q_orders_push_ls: 'Push to Lightspeed',
  q_orders_poll_ls: 'Poll Lightspeed',
  q_orders_push_shipday: 'Push to Shipday',
  q_orders_compensate: 'Compensation',
  ls_token_expiry: 'LS token refresh',
};
```

**Step 2: TypeScript check**

```bash
cd "/mnt/d/01_WORKSPACE/Aziz Fakhrul/Deliverect Replacement Project"
npx tsc --noEmit 2>&1 | grep -v "cutover\|TS2345.*p_location_key" | head -5
```

Expected: empty output (no errors).

**Step 3: Commit**

```bash
git add lib/queries/alerts.ts
git commit -m "feat: add ls_token_expiry stage label for Phase D1 alerts"
git push origin main
```

---

### Task D1.2: Create monitor_token_expiry workflow

**Files:**
- New n8n workflow via `n8n_create_workflow`

**Step 1: Compose workflow JSON**

```json
{
  "name": "monitor_token_expiry",
  "nodes": [
    {
      "id": "schedule-15m",
      "name": "Schedule (15m)",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [0, 0],
      "parameters": {
        "rule": {"interval": [{"field": "minutes", "minutesInterval": 15}]}
      }
    },
    {
      "id": "query-tokens",
      "name": "Query Token Health",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [250, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT location_key, expires_at, updated_at, EXTRACT(EPOCH FROM (expires_at - NOW()))::int AS sec_until_expiry, EXTRACT(EPOCH FROM (NOW() - updated_at))::int AS sec_since_refresh FROM ls_tokens WHERE EXTRACT(EPOCH FROM (expires_at - NOW())) < 1800;",
        "options": {}
      }
    },
    {
      "id": "classify-risk",
      "name": "Classify Token Risk",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [500, 0],
      "parameters": {
        "jsCode": "return $input.all().filter(i => i.json.sec_until_expiry < 1800 && i.json.sec_since_refresh > 600).map(i => ({json: {...i.json, alert_severity: i.json.sec_until_expiry < 600 ? 'critical' : 'warning'}}));"
      }
    },
    {
      "id": "check-existing-alert",
      "name": "Check Existing Alert (dedup)",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [750, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT COUNT(*) AS existing_count FROM dlq_alerts WHERE queue_name = 'ls_token_expiry' AND location_key = '{{ $json.location_key }}' AND resolved_at IS NULL AND created_at > NOW() - INTERVAL '2 hours';",
        "options": {}
      }
    },
    {
      "id": "if-no-existing",
      "name": "IF No Recent Alert",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.2,
      "position": [1000, 0],
      "parameters": {
        "conditions": {
          "options": {"caseSensitive": true, "leftValue": "", "typeValidation": "strict", "version": 2},
          "conditions": [{
            "id": "no-existing",
            "leftValue": "={{ $json.existing_count }}",
            "rightValue": 0,
            "operator": {"type": "number", "operation": "equals"}
          }],
          "combinator": "and"
        }
      }
    },
    {
      "id": "create-alert",
      "name": "Create DLQ Alert",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [1250, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "INSERT INTO dlq_alerts (queue_name, location_key, last_error, attempt_count, alerted_at, created_at) VALUES ('ls_token_expiry', '{{ $('Classify Token Risk').item.json.location_key }}', jsonb_build_object('message', 'LS token expiring soon (' || '{{ $('Classify Token Risk').item.json.sec_until_expiry }}' || 's left) without recent refresh', 'stage', 'ls_token_expiry', 'code', 'TOKEN_STALE', 'severity', '{{ $('Classify Token Risk').item.json.alert_severity }}', 'runbook', 'Manually trigger sync_lightspeed_customers workflow to force refresh, or check Lightspeed OAuth credentials.'), 1, now(), now());",
        "options": {}
      }
    }
  ],
  "connections": {
    "Schedule (15m)": {"main": [[{"node": "Query Token Health", "type": "main", "index": 0}]]},
    "Query Token Health": {"main": [[{"node": "Classify Token Risk", "type": "main", "index": 0}]]},
    "Classify Token Risk": {"main": [[{"node": "Check Existing Alert (dedup)", "type": "main", "index": 0}]]},
    "Check Existing Alert (dedup)": {"main": [[{"node": "IF No Recent Alert", "type": "main", "index": 0}]]},
    "IF No Recent Alert": {"main": [[{"node": "Create DLQ Alert", "type": "main", "index": 0}], []]}
  },
  "settings": {"executionOrder": "v1"}
}
```

**Step 2: Create via n8n MCP**

Tool: `mcp__n8n-mcp__n8n_create_workflow` with above JSON.

Save returned `id` as `$MONITOR_TOKEN_WF_ID`.

**Step 3: Validate workflow**

Tool: `mcp__n8n-mcp__n8n_validate_workflow` with `id: $MONITOR_TOKEN_WF_ID`.

Expected: no validation errors.

---

### Task D1.3: Test token expiry alert

**Step 1: Capture baseline**

```sql
SELECT COUNT(*) AS baseline FROM dlq_alerts WHERE queue_name = 'ls_token_expiry';
```

**Step 2: Synthetic test — manipulate 1 token to look stale**

```sql
-- Backup current token state
SELECT location_key, expires_at, updated_at FROM ls_tokens WHERE location_key = 'LOC_AALST';

-- Temporarily simulate stale (expires in 10min + no refresh in 1h)
UPDATE ls_tokens 
SET expires_at = NOW() + INTERVAL '10 minutes',
    updated_at = NOW() - INTERVAL '1 hour'
WHERE location_key = 'LOC_AALST';
```

**Step 3: Manually trigger workflow**

Tool: `mcp__n8n-mcp__n8n_test_workflow` with `id: $MONITOR_TOKEN_WF_ID`.

**Step 4: Verify alert created**

```sql
SELECT COUNT(*) AS new_count FROM dlq_alerts WHERE queue_name = 'ls_token_expiry';
-- Expected: baseline + 1

SELECT location_key, last_error
FROM dlq_alerts 
WHERE queue_name = 'ls_token_expiry' AND resolved_at IS NULL
ORDER BY created_at DESC LIMIT 1;
-- Expected: location_key='LOC_AALST', message mentions 'expiring soon'
```

**Step 5: Verify dedup — re-trigger should NOT create duplicate**

Re-run `n8n_test_workflow`. Re-query alert count — should remain baseline + 1, not baseline + 2.

**Step 6: Cleanup**

```sql
-- Auto-refresh will fix the token within ~15min, but for now restore safe value
UPDATE ls_tokens SET expires_at = NOW() + INTERVAL '1 hour', updated_at = NOW() 
WHERE location_key = 'LOC_AALST';

-- Resolve test alert
UPDATE dlq_alerts SET resolved_at = now(), resolution_action = 'discard'
WHERE queue_name = 'ls_token_expiry' AND external_ref IS NULL;
```

---

### Task D1.4: Verify dashboard rendering

**Step 1: Trigger alert again** (using synthetic stale token from D1.3 step 2)

**Step 2: Fetch /alerts page from VPS**

```bash
curl -s "https://srova.ghysels-vagenende.be/alerts" | grep -o "LS token refresh\|TOKEN_STALE\|expiring soon" | head
```

Expected: matches indicating alert rendered with stage label "LS token refresh".

**Step 3: Cleanup synthetic alert**

Same as D1.3 Step 6.

---

## Phase D2 — Stuck Order Auto-Retry

**Why:** Orders bisa stuck di transient states (`pushing_ls`, `ls_sent`) kalau n8n crash di tengah. Tanpa auto-retry, butuh manual intervention.

**Solution:** Scheduled workflow every 5min — find orders stuck >10min, re-enqueue to appropriate queue. Max 3 auto-retries.

**Reuses pgmq idempotency** dari Phase A: kalau LS sudah punya order, Srova adopt instead of re-push.

---

### Task D2.1: Create monitor_stuck_orders workflow

**Files:**
- New n8n workflow via `n8n_create_workflow`

**Step 1: Compose workflow JSON**

Schedule every 5min, query stuck orders, increment retry counter, re-enqueue.

```json
{
  "name": "monitor_stuck_orders",
  "nodes": [
    {
      "id": "schedule-5m",
      "name": "Schedule (5m)",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [0, 0],
      "parameters": {
        "rule": {"interval": [{"field": "minutes", "minutesInterval": 5}]}
      }
    },
    {
      "id": "query-stuck",
      "name": "Query Stuck Orders",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [250, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT id, status, location_key, source, external_ref, ls_order_id, correlation_id, EXTRACT(EPOCH FROM (NOW() - updated_at))::int AS sec_stuck, COALESCE((cancel_reason::jsonb->>'auto_retry_count')::int, 0) AS retry_count FROM canonical_orders WHERE status IN ('pushing_ls', 'ls_sent') AND updated_at < NOW() - INTERVAL '10 minutes' LIMIT 50;",
        "options": {}
      }
    },
    {
      "id": "split-batches",
      "name": "Split into Batches",
      "type": "n8n-nodes-base.splitInBatches",
      "typeVersion": 3,
      "position": [500, 0],
      "parameters": {"batchSize": 1, "options": {}}
    },
    {
      "id": "if-under-retry-limit",
      "name": "IF Retry < 3",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2.2,
      "position": [750, 0],
      "parameters": {
        "conditions": {
          "options": {"caseSensitive": true, "leftValue": "", "typeValidation": "strict", "version": 2},
          "conditions": [{
            "id": "under-limit",
            "leftValue": "={{ $json.retry_count }}",
            "rightValue": 3,
            "operator": {"type": "number", "operation": "smaller"}
          }],
          "combinator": "and"
        }
      }
    },
    {
      "id": "increment-retry",
      "name": "Increment Retry Counter",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [1000, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "UPDATE canonical_orders SET cancel_reason = jsonb_build_object('auto_retry_count', {{ $json.retry_count + 1 }}, 'last_auto_retry', now()::text, 'previous_status', '{{ $json.status }}')::text WHERE id = '{{ $json.id }}'::uuid;",
        "options": {}
      }
    },
    {
      "id": "reenqueue",
      "name": "Re-enqueue to Appropriate Queue",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [1250, 0],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "SELECT pgmq.send(CASE WHEN '{{ $json.status }}' = 'pushing_ls' THEN 'q_orders_push_ls' WHEN '{{ $json.status }}' = 'ls_sent' THEN 'q_orders_poll_ls' END, jsonb_build_object('source', '{{ $json.source }}', 'canonical_id', '{{ $json.id }}', 'external_ref', '{{ $json.external_ref }}', 'location_key', '{{ $json.location_key }}', 'auto_retry', true, 'ls_order_id', '{{ $json.ls_order_id }}', 'started_at', now()::text));",
        "options": {}
      }
    },
    {
      "id": "exceeded-retry-dlq",
      "name": "DLQ: Retry Exhausted",
      "type": "n8n-nodes-base.postgres",
      "typeVersion": 2.5,
      "position": [1000, 250],
      "credentials": {"postgres": {"id": "9zc3jzWzgtSSJL0O", "name": "Postgres Data Catalog"}},
      "parameters": {
        "operation": "executeQuery",
        "query": "INSERT INTO dlq_alerts (queue_name, external_ref, source, location_key, canonical_order_id, last_error, attempt_count, alerted_at, created_at) VALUES ('q_orders_push_ls', '{{ $json.external_ref }}', '{{ $json.source }}', '{{ $json.location_key }}', '{{ $json.id }}'::uuid, jsonb_build_object('message', 'Order stuck in ' || '{{ $json.status }}' || ' for ' || '{{ $json.sec_stuck }}' || 's, exceeded 3 auto-retries', 'stage', 'auto_retry_exhausted', 'code', 'STUCK_RETRY_LIMIT', 'previous_retries', {{ $json.retry_count }}), {{ $json.retry_count }}, now(), now());",
        "options": {}
      }
    }
  ],
  "connections": {
    "Schedule (5m)": {"main": [[{"node": "Query Stuck Orders", "type": "main", "index": 0}]]},
    "Query Stuck Orders": {"main": [[{"node": "Split into Batches", "type": "main", "index": 0}]]},
    "Split into Batches": {"main": [[{"node": "IF Retry < 3", "type": "main", "index": 0}]]},
    "IF Retry < 3": {
      "main": [
        [{"node": "Increment Retry Counter", "type": "main", "index": 0}],
        [{"node": "DLQ: Retry Exhausted", "type": "main", "index": 0}]
      ]
    },
    "Increment Retry Counter": {"main": [[{"node": "Re-enqueue to Appropriate Queue", "type": "main", "index": 0}]]}
  },
  "settings": {"executionOrder": "v1"}
}
```

**Step 2: Create workflow**

Tool: `mcp__n8n-mcp__n8n_create_workflow`.

Save returned `id` as `$MONITOR_STUCK_WF_ID`.

**Step 3: Validate**

Tool: `mcp__n8n-mcp__n8n_validate_workflow` with `id: $MONITOR_STUCK_WF_ID`.

---

### Task D2.2: Test stuck-order recovery

**Step 1: Find a real ls_failed test order to reuse (avoid touching production)**

```sql
SELECT id, external_ref, status, ls_order_id 
FROM canonical_orders 
WHERE external_ref LIKE 'Shopify - #online-472%' 
  AND status = 'cancelled' 
ORDER BY created_at DESC LIMIT 1;
```

Pick first row's `id` as `$STUCK_TEST_ID`.

**Step 2: Synthetically mark it as stuck**

```sql
-- Temporarily un-cancel + mark as pushing_ls with old updated_at (state machine: cancelled needs trip via received → ... so just use a clean test row instead)

-- Better: create a fresh synthetic stuck row
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, correlation_id, created_at, updated_at
) VALUES (
  'v1', 'shopify', 'TEST-D2-STUCK-001', 'LOC_AALST', 'pickup', 'pushing_ls',
  '{}'::jsonb, '[]'::jsonb, '{}'::jsonb, '[]'::jsonb, gen_random_uuid()::text,
  NOW() - INTERVAL '15 minutes',  -- stuck since 15 min ago
  NOW() - INTERVAL '15 minutes'
) RETURNING id;
```

**Step 3: Manually trigger monitor_stuck_orders**

Tool: `mcp__n8n-mcp__n8n_test_workflow` with `id: $MONITOR_STUCK_WF_ID`.

**Step 4: Verify retry counter incremented**

```sql
SELECT cancel_reason::jsonb->>'auto_retry_count' AS retry_count
FROM canonical_orders WHERE external_ref = 'TEST-D2-STUCK-001';
-- Expected: '1'
```

**Step 5: Verify message enqueued**

```sql
SELECT message::text 
FROM pgmq.q_q_orders_push_ls 
WHERE message::text LIKE '%TEST-D2-STUCK-001%';
-- Expected: 1 row, message contains "auto_retry": true
```

**Step 6: Test retry limit — trigger 3 more times**

Repeat n8n_test_workflow 2 more times. After 3rd retry (counter=3), next trigger should route to "DLQ: Retry Exhausted".

```sql
SELECT COUNT(*) FROM dlq_alerts WHERE external_ref = 'TEST-D2-STUCK-001' AND last_error->>'code' = 'STUCK_RETRY_LIMIT';
-- Expected: 1 (after 4th trigger when counter hits 3)
```

**Step 7: Cleanup**

```sql
UPDATE canonical_orders SET status = 'cancelled', cancel_reason = 'test cleanup'
WHERE external_ref = 'TEST-D2-STUCK-001';
DELETE FROM dlq_alerts WHERE external_ref = 'TEST-D2-STUCK-001';
SELECT pgmq.purge_queue('q_orders_push_ls');
```

---

## Verification Summary (end-to-end)

After all tasks completed:

| Verification | Tool | Expected |
|---|---|---|
| Phase B: Invalid PLU rejected | Supabase MCP | `dlq_alerts` row with `code: 11401`, canonical status = `ls_failed`, queue empty |
| Phase B: Valid PLU pushes normally | Live Shopify test | Order reaches `ls_sent`, no DLQ alert, 1 LS order |
| Phase C: UPSERT works | Synthetic SQL test | 1 row + updated_at > created_at |
| Phase C: Constraint enforced | Synthetic SQL test | Second insert fails with unique violation |
| Phase C: Live multi-webhook | Real Shopify order | Only 1 canonical_orders row for external_ref |
| Phase D1: Token alert | n8n manual trigger | 1 new alert with stage `ls_token_expiry` |
| Phase D1: Dedup | Re-trigger | No duplicate alert within 2h window |
| Phase D2: Stuck order retry | n8n manual trigger | retry_count incremented, msg enqueued |
| Phase D2: Retry limit | 4× trigger | DLQ alert with `STUCK_RETRY_LIMIT` after 3 retries |

---

## Operational Notes

- **Production impact:** All changes are additive. Phase B adds a guard before push (no behavior change for valid orders). Phase C adds dedup safety (existing flow still works). Phase D1/D2 are observer/recovery workflows — they don't intercept happy path.
- **Rollback:** Per phase:
  - B: Remove 4 added nodes + restore `Load dim_location → Load LS Token` direct connection.
  - C: `DROP INDEX canonical_orders_unique_active_idx`. Revert n8n SQL to plain INSERT.
  - D1/D2: Deactivate workflows. No DB changes to roll back.
- **Toko buka mode:** Tasks B5+B7, C6, D-tests semua require pipeline ACTIVE — coordinate dengan user untuk toggle window aman.
- **Idempotency interaction:** D2 re-enqueue ke push_ls akan trigger Phase A idempotency check, jadi tidak akan double-push ke LS even kalau LS sudah punya order.
- **Backup workflow JSONs sebelum modification:** `mcp__n8n-mcp__n8n_get_workflow` mode=`full` save to `/tmp/n8n-backups/` before each modification task.

---

## Out of Scope (future plans)

- **D3 Reconciliation** — daily backfill orphan LS orders into canonical_orders. Needs separate plan due to data analysis complexity (e.g. 8 historical orders #online-4706-4719 missing).
- **D4 DLQ Auto-Cleanup** — archive resolved alerts >30 days. Low priority.
- **Srova → Shipday push** — currently handled by Shipday Shopify app. Future cutover.
- **Recursive sub-item PLU validation** — current Phase B validates items + 1-level modifiers only. Sub-items in `subItems[]` (per Lightspeed API spec) tidak di-recursive. Sufficient for current menu structure.
