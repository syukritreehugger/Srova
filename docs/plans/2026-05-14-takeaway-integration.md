# Takeaway.com Full Pipeline Integration

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Poll Takeaway.com orders via their internal REST API and push them through the existing Lightspeed pipeline — identical to the Shopify flow but with a polling ingestion model instead of webhooks.

**Architecture:** A new n8n polling workflow (`takeaway_poll_orders`) fetches orders every 90s from Takeaway's internal API, normalizes them into `canonical_orders`, and enqueues to `q_orders_push_ls`. The existing `push_lightspeed_order` workflow already supports `source='takeaway'` (table IDs + payment types are pre-configured in `dim_location`). Token management uses OAuth refresh_token grant with Playwright headless browser as a fallback for the ~50-day token renewal.

**Tech Stack:** n8n (workflow automation), Supabase/Postgres (database), Next.js 16 (dashboard UI), Playwright (headless browser for token refresh), Vitest (testing)

---

## Reference Documents

- Takeaway API endpoints: `docs/API Docs/maudy-ref/(N)takeaway order.json`
- Lightspeed L-Series API: `docs/API Docs/L-Series_API-Lightspeed.md`
- Shipday API: `docs/API Docs/SHIPDAY-API-REFERENCE.md`
- Playwright docs: context7 `/microsoft/playwright.dev`
- n8n docs: context7 `/n8n-io/n8n-docs`

## Key Discovery: push_lightspeed_order Already Supports Takeaway

The `Build Order Payload` code node (`2ENsv7R4I8H5L3cf`) already has:

```javascript
// Table ID routing — already source-aware
const tableKey = `${order.source}_${order.order_type === 'delivery' ? 'delivery' : 'pickup'}`;
// → 'takeaway_delivery' or 'takeaway_pickup' — matches dim_location.ls_table_ids keys

// Payment type routing — already source-aware
const channelKey = order.source === 'shopify' ? 'SHOPIFY API'
  : order.source === 'takeaway' ? 'TAKEAWAY_V2 API' : 'DELIVERECT API';
```

**No changes needed to push_lightspeed_order.** We just need to get Takeaway orders into `canonical_orders` in the correct format.

## Live dim_location Data (Verified)

| Location | takeaway_delivery table | takeaway_pickup table | TAKEAWAY_V2 API payment |
|---|---|---|---|
| LOC_AALST | 1103132 | 1103131 | `{"id":233294,"typeId":3}` |
| LOC_BERLARE | 1052484 | 1052483 | `{"id":227133,"typeId":3}` |
| LOC_DENDER | 1052487 | 1052486 | `{"id":227134,"typeId":3}` |

## Takeaway API Endpoints (from Maudy's reference workflow)

**Token endpoint:**
```
POST https://partner-hub.justeattakeaway.com/auth/realms/restaurant/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
client_id=live-orders
refresh_token=<JWT_REFRESH_TOKEN>
```
Response: `{ access_token, refresh_token, expires_in: 3600 }`

**Orders history:**
```
GET https://live-orders-api.takeaway.com/api/orders/history?date_from=...&date_to=...
Authorization: Bearer <access_token>
Accept: application/json
```

**Order detail:**
```
GET https://live-orders-api.takeaway.com/api/orders/{id}
Authorization: Bearer <access_token>
Accept: application/json
```

**Known response fields:** `id`, `public_reference`, `placed_date`, `status`, `restaurant_total`, `products[{name, quantity, amount}]`

**Unknown (requires Phase 0 discovery):** `restaurant_id`, `customer`, `delivery_address`, `order_mode` (delivery vs pickup)

---

## Task 1: API Discovery — Manual Takeaway API Test

**Files:**
- Reference: `docs/API Docs/maudy-ref/(N)takeaway order.json`

**Step 1: Extract refresh token from Maudy's workflow**

The token is embedded in the workflow JSON at the HTTP Request node for token refresh. Find the `refresh_token` value in the form body parameters.

Run: Read the n8n workflow JSON and extract the refresh_token parameter value.

**Step 2: Manually call the token endpoint**

```bash
curl -s -X POST \
  'https://partner-hub.justeattakeaway.com/auth/realms/restaurant/protocol/openid-connect/token' \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'grant_type=refresh_token&client_id=live-orders&refresh_token=<EXTRACTED_TOKEN>' \
  | jq .
```

Expected: JSON with `access_token`, `refresh_token` (possibly rotated), `expires_in`
**IMPORTANT:** If `refresh_token` in response differs from input, save the NEW token — Keycloak rotates it.

**Step 3: Call orders history endpoint**

```bash
curl -s \
  'https://live-orders-api.takeaway.com/api/orders/history?date_from=2026-05-13T00:00:00Z&date_to=2026-05-14T23:59:59Z' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Accept: application/json' \
  | jq .
```

Expected: Array of order summaries. Inspect for: `restaurant_id`, `restaurant_name`, location identifiers.

**Step 4: Call order detail endpoint**

Pick any order ID from Step 3:

```bash
curl -s \
  'https://live-orders-api.takeaway.com/api/orders/<ORDER_ID>' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Accept: application/json' \
  | jq .
```

Expected: Full order with products, customer, address, payment. Document ALL fields.

**Step 5: Document findings**

Create a file `docs/API Docs/TAKEAWAY-API-DISCOVERY.md` with:
- Full response schemas (history + detail)
- How to identify location (restaurant_id → location_key mapping)
- Whether single account covers all 3 locations
- Any fields not in Maudy's reference

**Step 6: Commit**

```bash
git add docs/API\ Docs/TAKEAWAY-API-DISCOVERY.md
git commit -m "docs: document Takeaway.com API discovery results"
```

---

## Task 2: Database Schema — Create Tables

**Files:**
- Create migration via Supabase MCP

**Step 1: Create `takeaway_tokens` table**

Run via `mcp__supabase-self-hosted__execute_sql`:

```sql
CREATE TABLE public.takeaway_tokens (
  id                 bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  account_name       text NOT NULL DEFAULT 'defrietbooster' UNIQUE,
  refresh_token      text NOT NULL,
  access_token       text,
  token_expires_at   timestamptz,
  refresh_expires_at timestamptz,
  updated_at         timestamptz NOT NULL DEFAULT now(),
  created_at         timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE takeaway_tokens IS 'OAuth tokens for Takeaway.com live-orders API. One row per account (currently single account for all locations).';
COMMENT ON COLUMN takeaway_tokens.refresh_expires_at IS 'Approximate refresh token expiry (~50 days). Triggers proactive Playwright renewal.';
```

**Step 2: Create `takeaway_plu_map` table**

```sql
CREATE TABLE public.takeaway_plu_map (
  id                bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  location_key      text NOT NULL REFERENCES dim_location(location_key),
  takeaway_name     text NOT NULL,
  takeaway_name_lower text GENERATED ALWAYS AS (lower(takeaway_name)) STORED,
  ls_plu            text,
  ls_product_name   text,
  auto_matched      boolean NOT NULL DEFAULT false,
  confirmed_by      uuid,
  confirmed_at      timestamptz,
  first_seen_at     timestamptz NOT NULL DEFAULT now(),
  last_seen_at      timestamptz NOT NULL DEFAULT now(),
  order_count       integer NOT NULL DEFAULT 1,
  UNIQUE (location_key, takeaway_name)
);

CREATE INDEX takeaway_plu_map_unmapped_idx
  ON takeaway_plu_map (location_key) WHERE ls_plu IS NULL;

COMMENT ON TABLE takeaway_plu_map IS 'Maps Takeaway.com product names to Lightspeed PLU codes. Populated automatically by poll workflow; PLU assigned by admin via /menu page.';
```

**Step 3: Add `takeaway_restaurant_id` to `dim_location`**

```sql
ALTER TABLE dim_location ADD COLUMN IF NOT EXISTS takeaway_restaurant_id text;

COMMENT ON COLUMN dim_location.takeaway_restaurant_id IS 'Restaurant identifier from Takeaway API response, used to route orders to location_key.';
```

After Task 1 discovery, populate:
```sql
-- UPDATE dim_location SET takeaway_restaurant_id = '<discovered_id>' WHERE location_key = 'LOC_AALST';
-- (repeat for BERLARE, DENDER)
```

**Step 4: Verify tables exist**

```sql
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('takeaway_tokens', 'takeaway_plu_map');
```

Expected: Both tables listed.

**Step 5: Commit** — No file changes (schema is in Supabase); update `types/supabase.ts` in Task 3.

---

## Task 3: TypeScript Types — Add Takeaway Table Interfaces

**Files:**
- Modify: `types/supabase.ts`

**Step 1: Write failing type check**

We won't write a separate test, but the build must pass after changes. The types must match the DB schema from Task 2.

**Step 2: Add interfaces to `types/supabase.ts`**

After the existing `DlqAlert` interface, add:

```typescript
/* ──── takeaway_tokens ──── */
export interface TakeawayToken {
  Row: {
    id: number;
    account_name: string;
    refresh_token: string;
    access_token: string | null;
    token_expires_at: string | null;
    refresh_expires_at: string | null;
    updated_at: string;
    created_at: string;
  };
  Insert: {
    account_name?: string;
    refresh_token: string;
    access_token?: string | null;
    token_expires_at?: string | null;
    refresh_expires_at?: string | null;
  };
  Update: Partial<TakeawayToken['Insert']>;
}

/* ──── takeaway_plu_map ──── */
export interface TakeawayPluMap {
  Row: {
    id: number;
    location_key: string;
    takeaway_name: string;
    takeaway_name_lower: string;
    ls_plu: string | null;
    ls_product_name: string | null;
    auto_matched: boolean;
    confirmed_by: string | null;
    confirmed_at: string | null;
    first_seen_at: string;
    last_seen_at: string;
    order_count: number;
  };
  Insert: {
    location_key: string;
    takeaway_name: string;
    ls_plu?: string | null;
    ls_product_name?: string | null;
    auto_matched?: boolean;
  };
  Update: Partial<TakeawayPluMap['Insert']>;
}
```

**Step 3: Run build to verify types**

Run: `pnpm build`
Expected: No type errors.

**Step 4: Commit**

```bash
git add types/supabase.ts
git commit -m "feat: add TakeawayToken and TakeawayPluMap type interfaces"
```

---

## Task 4: Alert Helpers — Add Takeaway Stage Labels

**Files:**
- Modify: `lib/queries/alerts.helpers.ts`
- Modify: `lib/queries/alerts.helpers.test.ts`

**Step 1: Write failing tests**

Add to `lib/queries/alerts.helpers.test.ts` inside the `humanStage` describe block:

```typescript
it('maps takeaway stage labels', () => {
  expect(humanStage('takeaway_token_expiry')).toBe('Takeaway token refresh');
  expect(humanStage('takeaway_poll_error')).toBe('Takeaway poll failure');
  expect(humanStage('takeaway_plu_unmapped')).toBe('Takeaway PLU unmapped');
});
```

**Step 2: Run tests to verify failure**

Run: `pnpm test -- --run lib/queries/alerts.helpers.test.ts`
Expected: FAIL — new stage labels not yet in `STAGE_LABELS`.

**Step 3: Add stage labels to `lib/queries/alerts.helpers.ts`**

Add to the `STAGE_LABELS` record:

```typescript
'takeaway_token_expiry': 'Takeaway token refresh',
'takeaway_poll_error': 'Takeaway poll failure',
'takeaway_plu_unmapped': 'Takeaway PLU unmapped',
```

**Step 4: Run tests to verify pass**

Run: `pnpm test -- --run lib/queries/alerts.helpers.test.ts`
Expected: ALL PASS.

**Step 5: Commit**

```bash
git add lib/queries/alerts.helpers.ts lib/queries/alerts.helpers.test.ts
git commit -m "feat: add Takeaway stage labels to alert helpers"
```

---

## Task 5: Seed Token — Insert Initial Refresh Token

**Files:**
- Reference: `docs/API Docs/maudy-ref/(N)takeaway order.json`

**Step 1: Extract refresh token from Maudy's workflow JSON**

In the workflow JSON, find the HTTP Request node that calls the token endpoint. The refresh_token is in the form body parameters. Extract it.

**Step 2: Insert into `takeaway_tokens`**

Run via `mcp__supabase-self-hosted__execute_sql`:

```sql
INSERT INTO takeaway_tokens (account_name, refresh_token, refresh_expires_at)
VALUES ('defrietbooster', '<EXTRACTED_REFRESH_TOKEN>', NOW() + INTERVAL '50 days')
ON CONFLICT (account_name) DO UPDATE SET
  refresh_token = EXCLUDED.refresh_token,
  refresh_expires_at = EXCLUDED.refresh_expires_at,
  updated_at = now();
```

**Step 3: Verify**

```sql
SELECT account_name, LEFT(refresh_token, 20) || '...' as token_preview, refresh_expires_at FROM takeaway_tokens;
```

Expected: One row with `defrietbooster`, truncated token, expiry ~50 days from now.

---

## Task 6: n8n Workflow — Token Refresh Sub-Workflow

**Purpose:** Called before each poll cycle. Returns a valid `access_token`. Caches token until 2min before expiry.

**Create via `mcp__n8n-mcp__n8n_create_workflow` or MCP tools.**

### Workflow: `takeaway_refresh_access_token`

**Nodes:**

1. **Manual Trigger** (for testing) + **Execute Workflow Trigger** (called by poll workflow)

2. **Load Token** — Postgres query:
```sql
SELECT id, account_name, refresh_token, access_token, token_expires_at
FROM takeaway_tokens
WHERE account_name = 'defrietbooster';
```

3. **IF Token Fresh** — Code node:
```javascript
const row = $input.first().json;
const expiresAt = row.token_expires_at ? new Date(row.token_expires_at) : new Date(0);
const isFresh = expiresAt > new Date(Date.now() + 2 * 60 * 1000); // 2min buffer
return [{ json: { ...row, is_fresh: isFresh } }];
```

4. **IF Node** — Check `is_fresh === true`
   - TRUE → **Return Cached Token** (just pass `access_token` forward)
   - FALSE → **POST Token Endpoint**

5. **POST Token Endpoint** — HTTP Request:
```
POST https://partner-hub.justeattakeaway.com/auth/realms/restaurant/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded
Body: grant_type=refresh_token&client_id=live-orders&refresh_token={{ $json.refresh_token }}
```
   - On error: continue to DLQ node

6. **Save New Token** — Postgres:
```sql
UPDATE takeaway_tokens SET
  access_token = '{{ $json.access_token }}',
  token_expires_at = NOW() + INTERVAL '{{ $json.expires_in }} seconds',
  refresh_token = COALESCE(NULLIF('{{ $json.refresh_token }}', ''), refresh_token),
  updated_at = now()
WHERE account_name = 'defrietbooster'
RETURNING access_token;
```

7. **DLQ on Failure** — Postgres (only if POST fails):
```sql
INSERT INTO dlq_alerts (queue_name, msg_id, last_error, attempt_count, alerted_at, created_at)
VALUES (
  'takeaway_token_expiry', 0,
  jsonb_build_object('message', 'Takeaway token refresh failed', 'code', 'TOKEN_REFRESH_FAILED', 'stage', 'takeaway_auth'),
  1, now(), now()
);
```

**Step: Test the workflow**

Activate and manually trigger. Verify:
- First run: calls POST endpoint, saves access_token to DB
- Second run within 1h: returns cached token (skips POST)

**Step: Commit**

Record the new workflow ID. No file commit needed (workflow is in n8n).

---

## Task 7: n8n Workflow — Takeaway Order Poller

**Purpose:** The main pipeline entry point. Polls Takeaway API every 90s, stores raw orders, normalizes to canonical, enqueues for LS push.

### Workflow: `takeaway_poll_orders`

**Nodes (in order):**

1. **Schedule Trigger (90s)** — ScheduleTrigger node, every 90 seconds interval.

2. **Get Access Token** — Execute Workflow node → calls `takeaway_refresh_access_token` sub-workflow from Task 6. Returns `access_token`.

3. **Fetch Order History** — HTTP Request:
```
GET https://live-orders-api.takeaway.com/api/orders/history
Query params:
  date_from: {{ new Date(Date.now() - 48*60*60*1000).toISOString() }}
  date_to: {{ new Date().toISOString() }}
Headers:
  Authorization: Bearer {{ $json.access_token }}
  Accept: application/json
```
On error: continue regular output (handle in next node).

4. **Handle API Error** — IF node: check if response is array/valid. If error → insert DLQ alert with `queue_name='takeaway_poll_error'` and stop. If valid → continue.

5. **Filter New Orders** — Code node:
```javascript
const orders = $('Fetch Order History').first().json;
const orderList = Array.isArray(orders) ? orders : (orders.body || orders.data || []);

if (!orderList.length) return [];

// Get existing external_refs from raw_orders
const existingRefs = $('Load Existing Refs').all().map(r => r.json.external_ref);
const existingSet = new Set(existingRefs);

return orderList
  .filter(o => !existingSet.has(o.public_reference))
  .map(o => ({ json: o }));
```

*Before this node, add a Postgres node:*

5a. **Load Existing Refs** — Postgres:
```sql
SELECT DISTINCT external_ref FROM raw_orders
WHERE source = 'takeaway' AND received_at > NOW() - INTERVAL '48 hours';
```

6. **Split Into Batches** — SplitInBatches node, batch size 1.

7. **Fetch Order Detail** — HTTP Request:
```
GET https://live-orders-api.takeaway.com/api/orders/{{ $json.id }}
Headers:
  Authorization: Bearer {{ $('Get Access Token').first().json.access_token }}
  Accept: application/json
```

8. **Load Location Map** — Postgres:
```sql
SELECT location_key, takeaway_restaurant_id FROM dim_location WHERE takeaway_restaurant_id IS NOT NULL;
```

9. **Determine Location + Normalize** — Code node (the critical transformation):
```javascript
const order = $('Fetch Order Detail').first().json;
const body = order.body || order;
const locationRows = $('Load Location Map').all();

// Match restaurant to location
// ADAPT THIS after Task 1 discovery — use the actual field name
const restaurantId = String(body.restaurant_id || body.restaurant?.id || '');
const locMatch = locationRows.find(r => r.json.takeaway_restaurant_id === restaurantId);
const location_key = locMatch ? locMatch.json.location_key : 'LOC_BERLARE'; // fallback to Frietbooster (defrietbooster account)

// Determine order type
const isDelivery = (body.order_mode || body.type || '').toLowerCase() !== 'pickup';

// Parse products
const products = body.products || [];
const items = products.map(p => ({
  plu: null, // PLU resolved later by takeaway_plu_map or during push_ls validation
  name: p.name,
  qty: p.quantity || 1,
  unit_price_cents: Math.round((p.amount || 0) * 100),
  modifiers: []
}));

const totalCents = Math.round((body.restaurant_total || 0) * 100);

return [{
  json: {
    // For raw_orders INSERT
    raw: {
      source: 'takeaway',
      location_key,
      external_ref: body.public_reference,
      raw_payload: body,
      hmac_valid: true
    },
    // For canonical_orders UPSERT
    canonical: {
      schema_version: '1.1',
      source: 'takeaway',
      external_ref: body.public_reference,
      location_key,
      order_type: isDelivery ? 'delivery' : 'pickup',
      customer: {
        name: body.customer?.name || 'Takeaway Customer',
        email: null,
        phone: body.customer?.phone || null,
        address: isDelivery ? {
          line1: body.delivery_address?.street || body.address?.street || '',
          line2: body.delivery_address?.addition || null,
          postal_code: body.delivery_address?.postcode || '',
          city: body.delivery_address?.city || '',
          country: 'BE',
          lat: null, lng: null
        } : null
      },
      items,
      payment: {
        method: 'card_online',
        status: 'paid',
        total_cents: totalCents,
        currency: 'EUR'
      },
      vat_lines: [{
        rate_bp: 2100,
        base_cents: Math.round(totalCents / 1.21),
        vat_cents: totalCents - Math.round(totalCents / 1.21)
      }]
    },
    // For takeaway_plu_map UPSERT
    product_names: products.map(p => p.name)
  }
}];
```

10. **Store raw_orders** — Postgres:
```sql
INSERT INTO raw_orders (source, location_key, external_ref, raw_payload, hmac_valid, received_at)
VALUES (
  'takeaway',
  '{{ $json.raw.location_key }}',
  '{{ $json.raw.external_ref }}',
  '{{ JSON.stringify($json.raw.raw_payload) }}'::jsonb,
  true,
  NOW()
)
RETURNING id;
```

11. **UPSERT canonical_orders** — Postgres:
```sql
INSERT INTO canonical_orders (
  schema_version, source, external_ref, location_key, order_type, status,
  customer, items, payment, vat_lines, raw_payload_id, correlation_id
) VALUES (
  '1.1', 'takeaway', '{{ $json.canonical.external_ref }}',
  '{{ $json.canonical.location_key }}',
  '{{ $json.canonical.order_type }}',
  'received',
  '{{ JSON.stringify($json.canonical.customer) }}'::jsonb,
  '{{ JSON.stringify($json.canonical.items) }}'::jsonb,
  '{{ JSON.stringify($json.canonical.payment) }}'::jsonb,
  '{{ JSON.stringify($json.canonical.vat_lines) }}'::jsonb,
  {{ $('Store raw_orders').first().json.id }},
  gen_random_uuid()
)
ON CONFLICT (source, external_ref, location_key) WHERE status != 'cancelled'
DO UPDATE SET
  items = EXCLUDED.items,
  payment = EXCLUDED.payment,
  customer = EXCLUDED.customer,
  updated_at = now()
RETURNING id, (xmax = 0) AS was_inserted;
```

12. **IF was_inserted** — IF node: `{{ $json.was_inserted }} === true`
   - FALSE → go to Wait node (already processed, skip)
   - TRUE → continue

13. **Transition received → normalized** — Postgres:
```sql
UPDATE canonical_orders SET status = 'normalized'
WHERE id = '{{ $json.id }}'::uuid AND status = 'received';
```

14. **Enqueue push_ls** — Postgres:
```sql
SELECT pgmq_send_order('q_orders_push_ls',
  json_build_object(
    'canonical_id', '{{ $json.id }}',
    'location_key', '{{ $('Determine Location + Normalize').first().json.canonical.location_key }}'
  )::jsonb
);
```

15. **UPSERT PLU Map** — Postgres (for each product name):
```sql
-- Run in a Code node that generates one INSERT per product name
INSERT INTO takeaway_plu_map (location_key, takeaway_name, last_seen_at, order_count)
VALUES ('{{ location_key }}', '{{ product_name }}', NOW(), 1)
ON CONFLICT (location_key, takeaway_name) DO UPDATE SET
  last_seen_at = NOW(),
  order_count = takeaway_plu_map.order_count + 1;
```

16. **Wait 1s** — Wait node, 1 second delay between batches.

17. **Loop** — Connection back to Split Into Batches.

### PLU Resolution Strategy

Items are stored in `canonical_orders.items` with `plu: null` initially. Before the poll workflow can resolve PLUs, the admin must map them via the `/menu` Takeaway tab (Task 9). The existing `Validate Order PLUs` node in `push_lightspeed_order` will catch unmapped PLUs and send them to DLQ with code `11401`.

**Alternative:** Add a Code node between "Determine Location + Normalize" and "Store raw_orders" that loads `takeaway_plu_map` and resolves PLUs:

```javascript
const pluMapRows = $('Load PLU Map').all();
const pluMap = {};
pluMapRows.forEach(r => { pluMap[r.json.takeaway_name_lower] = r.json.ls_plu; });

const items = $json.canonical.items.map(item => ({
  ...item,
  plu: pluMap[item.name.toLowerCase()] || item.plu
}));

return [{ json: { ...$json, canonical: { ...$json.canonical, items } } }];
```

With a preceding Postgres node **Load PLU Map**:
```sql
SELECT takeaway_name_lower, ls_plu FROM takeaway_plu_map
WHERE location_key = '{{ $json.canonical.location_key }}' AND ls_plu IS NOT NULL;
```

**Step: Test the workflow**

1. Activate with a longer interval first (5 min) for testing
2. Wait for a poll cycle
3. Check: `SELECT * FROM raw_orders WHERE source = 'takeaway' ORDER BY received_at DESC LIMIT 5;`
4. Check: `SELECT * FROM canonical_orders WHERE source = 'takeaway' ORDER BY created_at DESC LIMIT 5;`
5. Check: `SELECT * FROM takeaway_plu_map ORDER BY last_seen_at DESC LIMIT 10;`
6. Once confirmed working, reduce interval to 90s

---

## Task 8: n8n Workflow — Playwright Token Refresh (Fallback)

**Purpose:** Automated fallback when the refresh_token expires (~50 days). Uses Playwright to login and extract a new refresh_token.

### VPS Setup

**Step 1: Install Playwright on VPS**

SSH to `root@72.61.208.251`:

```bash
mkdir -p /opt/frituur-os/scripts
cd /opt/frituur-os/scripts
npm init -y
npm install playwright
npx playwright install chromium --with-deps
```

**Step 2: Create the login script**

Create `/opt/frituur-os/scripts/takeaway-login.js`:

```javascript
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  let capturedToken = null;

  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('openid-connect/token') && response.status() === 200) {
      try {
        const body = await response.json();
        if (body.refresh_token) {
          capturedToken = body;
        }
      } catch (e) {}
    }
  });

  await page.goto('https://live-orders.takeaway.com');
  await page.waitForTimeout(2000);

  // Fill login form — adapt selectors after manual inspection
  const usernameInput = page.locator('input[name="username"], input[type="email"], #username');
  const passwordInput = page.locator('input[name="password"], input[type="password"], #password');

  await usernameInput.fill('defrietbooster');
  await passwordInput.fill('Stoofvlees1!');

  const submitButton = page.locator('button[type="submit"], input[type="submit"]');
  await submitButton.click();

  // Wait for token exchange
  await page.waitForTimeout(10000);

  await browser.close();

  if (capturedToken) {
    // Output as JSON for n8n to parse
    console.log(JSON.stringify({
      success: true,
      refresh_token: capturedToken.refresh_token,
      access_token: capturedToken.access_token,
      expires_in: capturedToken.expires_in
    }));
  } else {
    console.log(JSON.stringify({
      success: false,
      error: 'Failed to capture token from login flow'
    }));
  }

  process.exit(capturedToken ? 0 : 1);
})();
```

**Step 3: Test the script**

```bash
cd /opt/frituur-os/scripts
node takeaway-login.js
```

Expected: JSON output with `success: true` and tokens.

### n8n Workflow: `takeaway_playwright_login`

**Trigger:** Manual trigger + ScheduleTrigger weekly (every Sunday 3am).

**Nodes:**

1. **Execute Command** — Execute Command node:
```
cd /opt/frituur-os/scripts && node takeaway-login.js
```
Timeout: 60 seconds.

2. **Parse Result** — Code node:
```javascript
const output = $input.first().json;
const stdout = output.stdout || '';
try {
  const result = JSON.parse(stdout);
  return [{ json: result }];
} catch (e) {
  return [{ json: { success: false, error: 'Failed to parse script output: ' + stdout.substring(0, 200) } }];
}
```

3. **IF Success** — Check `{{ $json.success }} === true`
   - TRUE → Update Token node
   - FALSE → DLQ Alert node

4. **Update Token** — Postgres:
```sql
UPDATE takeaway_tokens SET
  refresh_token = '{{ $json.refresh_token }}',
  access_token = '{{ $json.access_token }}',
  token_expires_at = NOW() + INTERVAL '{{ $json.expires_in }} seconds',
  refresh_expires_at = NOW() + INTERVAL '50 days',
  updated_at = now()
WHERE account_name = 'defrietbooster';
```

5. **DLQ Alert** — Postgres:
```sql
INSERT INTO dlq_alerts (queue_name, msg_id, last_error, attempt_count, alerted_at, created_at)
VALUES (
  'takeaway_token_expiry', 0,
  jsonb_build_object('message', 'Playwright token refresh failed: ' || '{{ $json.error }}', 'code', 'PLAYWRIGHT_FAILED', 'stage', 'takeaway_auth', 'runbook', 'Manually extract refresh token from browser DevTools at live-orders.takeaway.com'),
  1, now(), now()
);
```

---

## Task 9: PLU Mapping Query Module

**Files:**
- Create: `lib/queries/takeaway-mapping.ts`

**Step 1: Create the query module**

```typescript
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

export async function getTakeawayMapping(loc: LocationKey): Promise<TakeawayMappingResult> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('takeaway_plu_map')
    .select('id, takeaway_name, ls_plu, ls_product_name, auto_matched, confirmed_at, first_seen_at, last_seen_at, order_count')
    .eq('location_key', loc)
    .order('order_count', { ascending: false });

  const rows: TakeawayMappingRow[] = (data ?? []).map((r: any) => {
    let status: TakeawayMappingStatus;
    if (!r.ls_plu) status = 'unmapped';
    else if (r.confirmed_at) status = 'confirmed';
    else if (r.auto_matched) status = 'auto_matched';
    else status = 'confirmed';

    return { ...r, status };
  });

  rows.sort((a, b) => {
    const order: Record<TakeawayMappingStatus, number> = { unmapped: 0, auto_matched: 1, confirmed: 2 };
    if (order[a.status] !== order[b.status]) return order[a.status] - order[b.status];
    return b.order_count - a.order_count;
  });

  return {
    location_key: loc,
    total: rows.length,
    unmapped: rows.filter(r => r.status === 'unmapped').length,
    auto_matched: rows.filter(r => r.status === 'auto_matched').length,
    confirmed: rows.filter(r => r.status === 'confirmed').length,
    rows,
  };
}

export async function getLsProductsForPicker(loc: LocationKey) {
  const supabase = await createClient();
  const { data } = await supabase
    .from('raw_ls_products')
    .select('sku, name')
    .eq('location_key', loc)
    .eq('visible', true)
    .not('sku', 'is', null)
    .order('name');
  return (data ?? []) as { sku: string; name: string }[];
}
```

**Step 2: Run build**

Run: `pnpm build`
Expected: No errors.

**Step 3: Commit**

```bash
git add lib/queries/takeaway-mapping.ts
git commit -m "feat: add Takeaway PLU mapping query module"
```

---

## Task 10: PLU Mapping Server Actions

**Files:**
- Modify: `app/(app)/menu/actions.ts` (create if doesn't exist)

**Step 1: Create server actions**

```typescript
'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function updateTakeawayPluMapping(
  id: number,
  ls_plu: string,
  ls_product_name: string
) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('takeaway_plu_map')
    .update({
      ls_plu,
      ls_product_name,
      confirmed_at: new Date().toISOString(),
      auto_matched: false,
    })
    .eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/menu');
}

export async function confirmTakeawayAutoMatch(id: number) {
  const supabase = await createClient();
  const { error } = await supabase
    .from('takeaway_plu_map')
    .update({ confirmed_at: new Date().toISOString() })
    .eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/menu');
}
```

**Step 2: Run build**

Run: `pnpm build`
Expected: No errors.

**Step 3: Commit**

```bash
git add app/(app)/menu/actions.ts
git commit -m "feat: add server actions for Takeaway PLU mapping"
```

---

## Task 11: Extend /menu Page with Takeaway Tab

**Files:**
- Modify: `app/(app)/menu/page.tsx`
- Create: `app/(app)/menu/_components/takeaway-mapping-table.tsx`

**Step 1: Add channel param to menu page**

In `app/(app)/menu/page.tsx`, add `channel` to searchParams:

```typescript
// Add to imports
import { getTakeawayMapping, getLsProductsForPicker } from '@/lib/queries/takeaway-mapping';
import { TakeawayMappingTable } from './_components/takeaway-mapping-table';

// Update searchParams type
searchParams: Promise<{ loc?: string; filter?: string; channel?: string }>;

// After sp = await searchParams
const channel = sp.channel === 'takeaway' ? 'takeaway' : 'shopify';
```

Add channel toggle tabs before the location selector:

```tsx
<div className="flex items-center gap-2 border-b border-border pb-3">
  {(['shopify', 'takeaway'] as const).map((ch) => (
    <Link
      key={ch}
      href={`/menu?channel=${ch}&loc=${loc}`}
      className={cn(
        "inline-flex h-8 items-center rounded-full px-4 text-[12px] font-medium capitalize",
        channel === ch
          ? "bg-foreground text-background"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {ch === 'shopify' ? 'Shopify SKU ↔ LS PLU' : 'Takeaway Name → LS PLU'}
    </Link>
  ))}
</div>
```

Conditionally render Shopify or Takeaway content:

```tsx
{channel === 'shopify' ? (
  <>
    {/* existing Shopify mapping content */}
  </>
) : (
  <>
    {/* Takeaway mapping */}
  </>
)}
```

For the Takeaway branch, fetch and render:

```typescript
// In the Takeaway branch
const takeawayMapping = await getTakeawayMapping(loc);
const lsProducts = await getLsProductsForPicker(loc);
```

**Step 2: Create TakeawayMappingTable component**

Create `app/(app)/menu/_components/takeaway-mapping-table.tsx`:

```tsx
'use client';

import { useState, useTransition } from 'react';
import { cn } from '@/lib/utils';
import { updateTakeawayPluMapping, confirmTakeawayAutoMatch } from '../actions';
import type { TakeawayMappingRow } from '@/lib/queries/takeaway-mapping';

interface Props {
  rows: TakeawayMappingRow[];
  lsProducts: { sku: string; name: string }[];
}

export function TakeawayMappingTable({ rows, lsProducts }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <table className="w-full text-[12.5px]">
        <thead>
          <tr className="border-b border-border bg-muted/40 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
            <th className="px-4 py-2.5 font-medium">Takeaway Product</th>
            <th className="px-4 py-2.5 font-medium">LS PLU</th>
            <th className="px-4 py-2.5 font-medium text-right">Orders</th>
            <th className="px-4 py-2.5 font-medium">Status</th>
            <th className="px-4 py-2.5 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TakeawayRow key={row.id} row={row} lsProducts={lsProducts} />
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                No Takeaway products discovered yet. Orders will auto-populate this list.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function TakeawayRow({ row, lsProducts }: { row: TakeawayMappingRow; lsProducts: { sku: string; name: string }[] }) {
  const [selectedPlu, setSelectedPlu] = useState(row.ls_plu || '');
  const [isPending, startTransition] = useTransition();

  const handleSave = () => {
    if (!selectedPlu) return;
    const product = lsProducts.find(p => p.sku === selectedPlu);
    startTransition(async () => {
      await updateTakeawayPluMapping(row.id, selectedPlu, product?.name || selectedPlu);
    });
  };

  const handleConfirm = () => {
    startTransition(async () => {
      await confirmTakeawayAutoMatch(row.id);
    });
  };

  const statusColor = {
    unmapped: 'bg-rose-500/10 text-rose-600',
    auto_matched: 'bg-amber-500/10 text-amber-600',
    confirmed: 'bg-emerald-500/10 text-emerald-600',
  }[row.status];

  return (
    <tr className="border-b border-border/50 hover:bg-muted/20">
      <td className="px-4 py-2.5 font-medium">{row.takeaway_name}</td>
      <td className="px-4 py-2.5">
        {row.status === 'confirmed' ? (
          <span className="font-mono text-[11px]">{row.ls_plu}</span>
        ) : (
          <select
            value={selectedPlu}
            onChange={(e) => setSelectedPlu(e.target.value)}
            className="h-7 rounded border border-border bg-background px-2 text-[11px] font-mono"
          >
            <option value="">Select PLU...</option>
            {lsProducts.map((p) => (
              <option key={p.sku} value={p.sku}>
                {p.sku} — {p.name}
              </option>
            ))}
          </select>
        )}
      </td>
      <td className="px-4 py-2.5 text-right font-mono tabular-nums">{row.order_count}</td>
      <td className="px-4 py-2.5">
        <span className={cn('inline-flex items-center rounded-full px-2 py-0.5 text-[10.5px] font-medium', statusColor)}>
          {row.status === 'unmapped' ? 'Unmapped' : row.status === 'auto_matched' ? 'Auto-matched' : 'Confirmed'}
        </span>
      </td>
      <td className="px-4 py-2.5">
        {row.status === 'unmapped' && (
          <button
            onClick={handleSave}
            disabled={!selectedPlu || isPending}
            className="rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background disabled:opacity-40"
          >
            {isPending ? '...' : 'Save'}
          </button>
        )}
        {row.status === 'auto_matched' && (
          <button
            onClick={handleConfirm}
            disabled={isPending}
            className="rounded-full border border-border px-3 py-1 text-[11px] font-medium hover:bg-muted disabled:opacity-40"
          >
            {isPending ? '...' : 'Confirm'}
          </button>
        )}
      </td>
    </tr>
  );
}
```

**Step 3: Run build**

Run: `pnpm build`
Expected: No errors.

**Step 4: Test on deployed URL**

Navigate to `https://srova.ghysels-vagenende.be/menu?channel=takeaway&loc=LOC_AALST`
Expected: Takeaway tab active, table shows products (or empty state if no orders polled yet).

**Step 5: Commit**

```bash
git add app/(app)/menu/page.tsx app/(app)/menu/_components/takeaway-mapping-table.tsx
git commit -m "feat: add Takeaway PLU mapping tab to /menu page"
```

---

## Task 12: Integration Health — Add Takeaway Row

**Files:**
- Modify: `lib/n8n.ts`
- Modify: `lib/queries/health.ts`

**Step 1: Add workflow ID constant to `lib/n8n.ts`**

After the existing `LS_PUSHER_ID`:

```typescript
export const TAKEAWAY_POLLER_ID = '<WORKFLOW_ID_FROM_TASK_7>';
```

**Step 2: Add Takeaway health check to `lib/queries/health.ts`**

Add a new function or extend `getIntegrationHealth()`. After the Lightspeed health section:

```typescript
// --- Takeaway.com ---
let takeawayStatus: IntegrationStatus = 'operational';
let takeawayEvent = 'Not configured';

try {
  const { data: tokenRow } = await supabase
    .from('takeaway_tokens')
    .select('token_expires_at, refresh_expires_at, updated_at')
    .eq('account_name', 'defrietbooster')
    .single();

  if (!tokenRow) {
    takeawayStatus = 'down';
    takeawayEvent = 'No token configured';
  } else {
    const tokenExpiry = tokenRow.token_expires_at ? new Date(tokenRow.token_expires_at) : new Date(0);
    const refreshExpiry = tokenRow.refresh_expires_at ? new Date(tokenRow.refresh_expires_at) : new Date(0);
    const now = new Date();

    if (tokenExpiry < now) {
      takeawayStatus = 'degraded';
      takeawayEvent = 'Access token expired — next poll will refresh';
    }
    if (refreshExpiry < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) {
      takeawayStatus = 'degraded';
      takeawayEvent = `Refresh token expires ${refreshExpiry.toLocaleDateString()}`;
    }
    if (refreshExpiry < now) {
      takeawayStatus = 'down';
      takeawayEvent = 'Refresh token expired — run Playwright login';
    }

    // Check poll workflow active
    const pollerRes = await getWorkflow(TAKEAWAY_POLLER_ID);
    if (pollerRes.ok && !pollerRes.data.active) {
      takeawayStatus = takeawayStatus === 'down' ? 'down' : 'degraded';
      takeawayEvent += ' · Poller paused';
    }

    // Check last order received
    const { data: lastOrder } = await supabase
      .from('raw_orders')
      .select('received_at')
      .eq('source', 'takeaway')
      .order('received_at', { ascending: false })
      .limit(1);

    if (lastOrder?.[0]) {
      const age = Date.now() - new Date(lastOrder[0].received_at).getTime();
      const ageHours = Math.round(age / 3600000);
      if (takeawayStatus === 'operational') {
        takeawayEvent = `Last order ${ageHours}h ago`;
      }
    } else if (takeawayStatus === 'operational') {
      takeawayEvent = 'No orders received yet';
    }
  }
} catch {
  takeawayStatus = 'investigating';
  takeawayEvent = 'Health check error';
}

rows.push({
  id: 'takeaway',
  name: 'Takeaway.com',
  description: 'Order polling from Just Eat Takeaway live-orders API',
  status: takeawayStatus,
  lastEvent: takeawayEvent,
});
```

**Step 3: Import TAKEAWAY_POLLER_ID**

Add to the import line in `health.ts`:

```typescript
import { getWorkflow, LS_PUSHER_ID, TAKEAWAY_POLLER_ID } from '@/lib/n8n';
```

**Step 4: Run build**

Run: `pnpm build`
Expected: No errors.

**Step 5: Commit**

```bash
git add lib/n8n.ts lib/queries/health.ts
git commit -m "feat: add Takeaway.com integration health monitoring"
```

---

## Task 13: Extend Token Expiry Monitor

**Files:**
- Modify n8n workflow: `monitor_token_expiry` (`PYJ5HqtZErvCR95V`)

**Step 1: Get current workflow structure**

Use `mcp__n8n-mcp__n8n_get_workflow` to read the current workflow.

**Step 2: Add a parallel branch**

After the existing ScheduleTrigger, add a new Postgres node:

**Check Takeaway Token Expiry** — Postgres:
```sql
SELECT id, account_name, refresh_expires_at,
  CASE
    WHEN refresh_expires_at < NOW() + INTERVAL '3 days' THEN 'critical'
    WHEN refresh_expires_at < NOW() + INTERVAL '7 days' THEN 'warning'
    ELSE 'ok'
  END AS severity
FROM takeaway_tokens
WHERE refresh_expires_at IS NOT NULL
  AND refresh_expires_at < NOW() + INTERVAL '7 days';
```

**IF Takeaway Expiring** — IF node: check if rows returned.

**Dedup Check** — Postgres:
```sql
SELECT id FROM dlq_alerts
WHERE queue_name = 'takeaway_token_expiry'
  AND resolved_at IS NULL
  AND created_at > NOW() - INTERVAL '24 hours';
```

**IF No Recent Alert** → **Insert Takeaway Token Alert**:
```sql
INSERT INTO dlq_alerts (queue_name, msg_id, last_error, attempt_count, alerted_at, created_at)
VALUES (
  'takeaway_token_expiry', 0,
  jsonb_build_object(
    'message', 'Takeaway refresh token expires ' || '{{ $json.refresh_expires_at }}',
    'code', 'TAKEAWAY_TOKEN_EXPIRY',
    'stage', 'takeaway_auth',
    'runbook', 'Trigger takeaway_playwright_login workflow or manually extract token from browser'
  ),
  1, now(), now()
);
```

**Step 3: Update workflow via MCP**

Use `mcp__n8n-mcp__n8n_update_partial_workflow` to add the new nodes.

---

## Task 14: Settings Page — Add Takeaway Toggle

**Files:**
- Modify: `app/(app)/settings/page.tsx`

**Step 1: Add Takeaway workflow to pipeline status**

In `app/(app)/settings/page.tsx`, after fetching the existing 2 workflows, also fetch the Takeaway poller:

```typescript
import { TAKEAWAY_POLLER_ID } from '@/lib/n8n';

// In the async function, add:
const takeawayRes = configured ? await getWorkflow(TAKEAWAY_POLLER_ID) : null;
const takeawayActive = takeawayRes?.ok ? takeawayRes.data.active : false;
```

Add a separate section or extend the existing pipeline description to mention Takeaway:

```tsx
<div className="text-[12px] text-muted-foreground mt-2">
  Takeaway poller: <span className={takeawayActive ? "text-emerald-600" : "text-rose-600"}>
    {takeawayActive ? "Active" : "Paused"}
  </span>
</div>
```

**Step 2: Run build**

Run: `pnpm build`
Expected: No errors.

**Step 3: Commit**

```bash
git add app/(app)/settings/page.tsx
git commit -m "feat: show Takeaway poller status on settings page"
```

---

## Task 15: Shipday Verification

**Files:**
- No changes expected — verification only.

**Step 1: Check Shipday push workflow**

Use `mcp__n8n-mcp__n8n_get_workflow` to read the Shipday push workflow. Search for hardcoded `source = 'shopify'` or any source filter.

**Step 2: If no hardcoded filter found** — Shipday push is source-agnostic, no changes needed.

**Step 3: If hardcoded filter found** — Parameterize to use `order.source` from canonical_orders.

**Step 4: Verify Takeaway enqueue path**

In Task 7, the poll workflow enqueues delivery orders to `q_orders_push_shipday`. Verify the Shipday workflow reads from that queue.

---

## Task 16: End-to-End Verification

**Step 1: Activate all workflows**

Via n8n MCP:
- `takeaway_refresh_access_token` — active
- `takeaway_poll_orders` — active (90s interval)
- `takeaway_playwright_login` — active (weekly)
- `push_lightspeed_order` — active
- `monitor_token_expiry` — active (with new Takeaway branch)

**Step 2: Wait for poll cycle and verify data flow**

```sql
-- Check raw_orders
SELECT id, source, external_ref, location_key, received_at
FROM raw_orders WHERE source = 'takeaway'
ORDER BY received_at DESC LIMIT 5;

-- Check canonical_orders
SELECT id, source, external_ref, location_key, status, created_at
FROM canonical_orders WHERE source = 'takeaway'
ORDER BY created_at DESC LIMIT 5;

-- Check PLU map discovery
SELECT takeaway_name, ls_plu, order_count, last_seen_at
FROM takeaway_plu_map ORDER BY order_count DESC LIMIT 10;

-- Check DLQ for PLU failures
SELECT id, queue_name, external_ref, last_error->>'message' as msg
FROM dlq_alerts WHERE source = 'takeaway'
ORDER BY created_at DESC LIMIT 5;
```

**Step 3: Map a PLU and verify LS push**

1. Go to `/menu?channel=takeaway&loc=LOC_BERLARE`
2. Map a Takeaway product name to an LS PLU
3. Wait for next poll cycle to pick up a new order with that product
4. Verify: order reaches `ls_sent` or `ls_accepted` status

**Step 4: Check dashboard**

Navigate to dashboard. Verify:
- Hourly chart shows Takeaway orders (orange bar)
- Orders page "Takeaway" filter shows orders
- Integrations page shows Takeaway.com row

**Step 5: Check health**

Navigate to `/integrations`. Verify Takeaway.com shows `operational` with last order timestamp.

---

## Verification Summary

| What to test | How to verify | Expected |
|---|---|---|
| Token refresh | Trigger `takeaway_refresh_access_token` manually | access_token saved in DB |
| Order polling | Wait 90s after activating poller | raw_orders + canonical_orders created |
| Deduplication | Wait 2+ poll cycles | No duplicate orders |
| PLU validation | Order with unmapped product | DLQ alert code 11401 |
| PLU mapping | Map product in /menu, new order arrives | Order pushes to LS |
| LS push | Order with mapped PLUs | status = ls_sent → ls_accepted |
| Dashboard | Check hourly chart | Takeaway bar visible |
| Health | Check /integrations | Takeaway.com = operational |
| Token expiry alert | Set `refresh_expires_at` to near-future | DLQ alert appears |
| Playwright fallback | Trigger `takeaway_playwright_login` | New refresh_token saved |
