# Order handover door (`os_webhook_order_overname`)

**Status: written, NOT imported.** The workflow JSON lives at
`docs/workflows/orders_overname_uitvoeren.json`. Nobody has created it in n8n, nobody has
published it, and no row in prod has been written by it. A human does steps 1-3 below.

## Why this exists

A Business Leader at shop X cannot serve an order and hands it to shop Y. The OS records the
request and the target BL accepts; then the OS calls this door, which does the physical move
inside Srova. Srova stays the only writer of `canonical_orders`.

## Why the move is cancel-and-recreate, not a location change

Three measured reasons, all still true on 2026-09-10:

1. `canonical_orders.location_key` is immutable by design. Both normalizers exclude it from
   `DO UPDATE SET` and guard with `WHERE canonical_orders.location_key = EXCLUDED.location_key`.
   Nothing writes it after insert.
2. Lightspeed has no cancel and no update: there are zero `PUT`/`PATCH`/`DELETE` calls to
   `lightspeedapis.com` in the whole n8n instance. A ticket that already printed is voided by
   a human at the POS.
3. `location_key` alone selects the LS company, the OAuth token, the table ids, the payment
   type ids and the valid PLU catalogue at push time (`Load dim_location`, `Load LS Token`,
   `Load LS Catalog SKUs` in `push_lightspeed_order`). A new row at the target shop is the
   only way to make the target till print.

## The contract

`POST /webhook/order-overname`, header `x-overname-token: <vault secret overname_webhook_token>`.

**`action: "check"`** - which of these shops can serve this order?

```json
{ "action": "check", "canonical_id": "<uuid>", "location_keys": ["LOC_AALST", "LOC_BERLARE"] }
```

Answers one row per candidate: `location_key`, `bestaat`, `actief`, `deliverect_slikt`,
`ontbrekende_plus[]`, `aanbiedbaar`. A candidate is offerable when it exists in `dim_location`,
is active, would not be swallowed by the takeaway `deliverect_yield` branch, and holds every
PLU of the order.

**`action: "move"`** - do it.

```json
{ "action": "move", "canonical_id": "<uuid>", "target_location_key": "LOC_BERLARE", "van_naam": "TIPZAKSKE" }
```

Answers `{ ok: true, canonical_id, external_ref, msg_id }` for the NEW order. A bad token, a
malformed field, or an order that cannot be moved (already cancelled, complete, or
ls_rejected) fails the execution instead of answering 200 - the OS must treat any non-200
**and any body without `ok: true`** as "the handover did not happen".

## What was checked against prod before the SQL was written

Read-only, 2026-09-10. The prod SQL MCP was unreachable all session, so these were read
through PostgREST with the service key (schema spec + real rows + read-only RPC calls) and
through the live workflow JSON.

| Assumption in the sketch | Verdict |
|---|---|
| `canonical_orders.items` holds objects with a `plu` key | True. A real row: `{"plu":"Ks6","qty":1,"name":"Joppisaus - Groot potje","unit_price_cents":220,"modifiers":[{"plu":"","name":"Groot potje","unit_price_cents":0}]}`. Modifiers carry their own `plu`, often empty. |
| `raw_ls_products` has `location_key` and `plu` | **Wrong.** Columns are `id, location_key, ls_product_id, name, product_group_id, price, cost_price, sku, barcode, visible, color, raw_payload, synced_at`. The PLU is `sku`. |
| `order_state` has `'received'` | True. `received, normalized, pushing_ls, ls_sent, ls_accepted, ls_rejected, ls_failed, shipday_sent, complete, cancelled`; column default is `received`. |
| `canonical_orders` has `updated_at, cancel_reason, correlation_id, raw_payload_id, vat_lines, utm, schema_version` | All present. NOT NULL: `id, schema_version, source, external_ref, location_key, order_type, status, customer, items, payment, vat_lines, correlation_id, created_at, updated_at, is_canary`. The INSERT omits only columns the live normalizer also omits (`id`, `created_at`, `updated_at`, `is_canary`), so their defaults are proven in production every day. |
| `pgmq_send_order` signature | `pgmq_send_order(p_queue text, p_payload jsonb)`, SECURITY DEFINER wrapper around `pgmq.send`. Argument order in the sketch is correct. |
| `'anything' -> 'cancelled'` is legal | **Partly.** `is_allowed_order_state_transition()` on prod answers `true` for received/normalized/pushing_ls/ls_sent/ls_accepted/shipday_sent/ls_failed -> cancelled, and **`false` for complete -> cancelled, ls_rejected -> cancelled and cancelled -> cancelled**. The sketch's `status <> 'cancelled'` was too wide. |
| A new row at `'received'` is enough | **No.** `push_lightspeed_order`'s `State -> pushing_ls` node only moves an order whose status is `normalized` or `ls_failed`. A row left at `received` is never pushed and never alarms. |
| `canonical_orders_unique_active_idx` on `(source, external_ref, location_key) WHERE status != 'cancelled'` | Not verifiable this session (see below), and not load-bearing: the new row's `external_ref` differs, so it collides under neither that index nor the older non-partial `canonical_orders_source_external_ref_uk` on `(source, external_ref)` that both normalizers' `ON CONFLICT` binds to. |
| `external_ref` length | `text`, no limit in Postgres. Real refs are 15-25 characters (`Shopify - #1037`, `Takeaway - 6GYCGB`); the suffix adds 20. Lightspeed's own limit on `externalReference` is undocumented here - if it ever rejects the value, `push_lightspeed_order` DLQs it loudly (`ls_failed` + `dlq_alerts`); it does not print at the wrong shop. |

### Two things that could NOT be verified, and why it does not block

`mcp__supabase-self-hosted__execute_sql` answered "Unable to connect" all session and shell
access to `psql` on the VPS was refused by the permission classifier, so nothing in
`pg_catalog` could be read:

1. **The state-transition trigger itself.** The function
   `is_allowed_order_state_transition(from_state, to_state)` exists and was called; the trigger
   that enforces it was not read. The door does not depend on the answer: the cancel names only
   transitions the function calls legal, and the insert uses `'received'`, which is what both
   normalizers insert several hundred times a day.
2. **The index list on `canonical_orders`.** See the row above - the new `external_ref` differs
   under either shape.

Step 0 of the runbook closes both in two queries.

## Two shapes that differ from the plan's sketch, on purpose

- **The move is two statements, not one.** The cancel + insert is one statement in one
  transaction, as asked. The `received -> normalized` transition plus the enqueue is a second
  statement in a second node, because a data-modifying CTE cannot see a row inserted by a
  sibling CTE in the same statement - the UPDATE would match zero rows. This is exactly how
  both live normalizers do it (`INSERT canonical_orders` then `Transition received to
  normalized` then enqueue), and the enqueue hangs off the transition's `RETURNING`, so a
  failed transition queues nothing.
- **The move also enqueues `q_orders_compensate`** when the origin order already carries a
  `shipday_order_id`. Cancelling the row alone would leave a driver on the way to a shop that
  no longer has the food, and a second driver dispatched from the target. The message shape
  (`canonical_order_id`, `shipday_order_id`, `location_key`) is the one `shipday_compensate`
  parses today. It is reported back in the response as `shipday_compensaties`.

## Deliberate omissions

- **No `order_state_history` row.** `cancel_reason = 'overname_naar_<LOC>'` already records why
  the origin order died, and whether a trigger already writes that table could not be read this
  session. Add it once someone has read the triggers, not before.
- **No new column.** The origin marker rides in `external_ref` instead of
  `canonical_orders.overname_van_location_key`, because a column means editing
  `Build Order Payload` inside `push_lightspeed_order` - the highest-traffic live workflow in
  the business (715k successful runs). Upgrade path if the text ever gets in the way: add the
  column plus three lines in `Build Order Payload`, as its own inactive-copy handover.
- **The `·` separator** in `' · OVERNAME '` is the plan's. If a thermal ticket ever renders it
  as mojibake, swap it for ` - `; it is cosmetic and lives in exactly one line of SQL.

## Runbook - a human does this, in order

### Step 0. Close the two open questions (read-only)

```sql
select tgname, pg_get_triggerdef(t.oid)
  from pg_trigger t
 where tgrelid = 'public.canonical_orders'::regclass and not tgisinternal;

select indexname, indexdef from pg_indexes where tablename = 'canonical_orders';
```

Expected: a transition trigger that fires on UPDATE and accepts an INSERT at `'received'`, and
a unique index on `(source, external_ref)` (possibly next to the partial
`canonical_orders_unique_active_idx`). If the trigger blocks an INSERT at `'received'`, stop -
the door cannot work and neither can the normalizers.

### Step 1. Create the shared secret

```sql
select vault.create_secret('<a long random string>', 'overname_webhook_token',
                           'Shared secret for POST /webhook/order-overname (OS -> Srova)');
```

Give the same string to the OS as its `OVERNAME_WEBHOOK_TOKEN`.

### Step 2. Import, inactive

Import `docs/workflows/orders_overname_uitvoeren.json` through the n8n UI. It arrives inactive.
Do not activate yet. Tag it `fos:orders` and put it in the `FrituurOS/orders` folder, like its
siblings.

### Step 3. Dry run

Pick a **safe** order: a canary or an obvious test order, never a customer's food.

```sql
-- Canaries and test orders that are still in a movable state.
select co.id, co.external_ref, co.source, co.status, co.location_key, co.is_canary,
       jsonb_array_length(co.items) as regels
  from public.canonical_orders co
 where co.status in ('received','normalized','pushing_ls','ls_sent',
                     'ls_accepted','shipday_sent','ls_failed')
   and (co.is_canary = true or co.external_ref ilike '%TEST%')
 order by co.created_at desc
 limit 20;
```

If none exists, make one the way the canary path makes them, or run the dry run outside
opening hours on a real order of your own and void the ticket by hand afterwards.

Then, with the workflow still inactive, use n8n's **Execute Workflow** with pinned webhook data
(or activate it, run the two calls below, and deactivate again - decide before you start; two
active copies of anything is the thing this shop does not do).

```bash
# 3a. Ask which shops can serve it.
curl -sS -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_WEBHOOK_TOKEN" \
  -d '{"action":"check","canonical_id":"<uuid>","location_keys":["LOC_AALST","LOC_BERLARE","LOC_DENDER"]}'

# 3b. Move it to one that answered aanbiedbaar = true.
curl -sS -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_WEBHOOK_TOKEN" \
  -d '{"action":"move","canonical_id":"<uuid>","target_location_key":"LOC_BERLARE","van_naam":"TIPZAKSKE"}'
```

### Step 4. Verify the result (read-only)

```sql
-- Old row cancelled with the reason, new row at the target shop, both sides visible.
select id, external_ref, location_key, status, cancel_reason, correlation_id, created_at
  from public.canonical_orders
 where id = '<old uuid>'::uuid
    or external_ref like (select external_ref || ' · OVERNAME %'
                            from public.canonical_orders where id = '<old uuid>'::uuid)
 order by created_at;

-- Did the queue actually receive it, and did the pusher act?
select id, external_ref, status, ls_order_id, ls_pushed_at, shipday_order_id
  from public.canonical_orders where id = '<new uuid>'::uuid;

select * from public.dlq_alerts
 where canonical_order_id in ('<old uuid>'::uuid, '<new uuid>'::uuid)
 order by created_at desc;
```

Green means: old row `cancelled` with `cancel_reason = 'overname_naar_<LOC>'`; new row
`ls_sent`/`ls_accepted` with an `ls_order_id`; **the ticket printed at the target shop**; no
`dlq_alerts`. If the origin order had a `shipday_order_id`, `shipday_compensate` DELETEs it -
check that `shipday_compensated_at` on the old row fills in within a minute or two.

**Manual step that no code can do:** if the origin shop had already printed, void that ticket
at the POS. Lightspeed has no cancel call.

### Step 5. Publish

Activating is a publish since n8n 2.0:

```bash
docker exec n8n-main n8n publish:workflow --id=<ID>
docker restart n8n-main
```

### Step 6. Prove it runs - never by `active`, never by `execution_entity`

`active = true` says nothing (a workflow can be active and have never worked), and an empty
`execution_entity` says nothing either (n8n discards successful runs unless
`saveDataSuccessExecution: all`, which this workflow does set). The only counter that survives
retention:

```sql
select w.id, w.name, s.name as stat, s.count, s."latestEvent"
  from workflow_entity w
  join workflow_statistics s on s."workflowId" = w.id
 where w.name = 'os_webhook_order_overname';
```

Expect `production_success` to climb by one per real handover.

## Names

The workflow is called `os_webhook_order_overname`, in Srova's own convention
(`shipday_webhook_status`, `shopify_webhook_order_create`), not the OS dictionary - Srova's
naming is a standing exception. The file name comes from the plan.
