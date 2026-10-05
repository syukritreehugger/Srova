# Order handover door (`os_webhook_order_overname`)

**Status: written, NOT imported.** The workflow JSON lives at
`docs/workflows/orders_overname_uitvoeren.json`. Nobody has created it in n8n, nobody has
published it, and no row in prod has been written by it. A human does the runbook below,
starting at Step 0.

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

Answers a JSON **array with one object per candidate**, in `location_key` order:
`location_key`, `bestaat`, `actief`, `deliverect_slikt`, `ontbrekende_plus[]`, `aanbiedbaar`.
A candidate is offerable when it exists in `dim_location`, is active, would not be swallowed by
the `deliverect_yield` branch, and holds every PLU of the order. An unknown `canonical_id` is
answered as `{ ok: false, reden: "order_bestaat_niet" }` rather than an empty list, which would
read like "no shop can serve it".

**`action: "move"`** - do it.

```json
{ "action": "move", "canonical_id": "<uuid>", "target_location_key": "LOC_BERLARE" }
```

Answers an **array holding exactly one object**, always: either
`{ ok: true, canonical_id, external_ref, msg_id, van_location_key, huidige_status,
oud_shipday_order_id }` describing the NEW order, or a refusal (below). There is no `van_naam`
field: the origin shop's name rides onto the printed ticket, so it is read from `dim_location`
rather than taken from the caller.

### What the caller gets, per outcome

**`ok` is the field to branch on, never the HTTP status alone.** A 200 from this door does not
mean the handover happened; `ok: true` does. A refusal is an expected outcome of this door, so
it is answered rather than thrown - a thrown error reaches the caller as n8n's own generic
envelope (`{"message":"Error in workflow"}`) with the node's text nowhere in it, and no client
can tell a refusal from a crash.

**A wrong shared secret is answered too**, with `reden: "niet_toegelaten"` and nothing else -
no echo of the token, no word on whether it was absent or merely wrong, no Vault key name.
Answering 200 for an auth failure is unusual and it is right here for one reason: this door has
exactly one caller, over a private tunnel, and the likeliest failure in the whole rollout is
the Step 1 value being copied by hand onto two machines and not matching. A generic 500 would
have an operator debugging the tunnel and n8n instead of the value. **If this door ever becomes
reachable from anywhere else, that reasoning expires.**

| Outcome | HTTP | Body |
|---|---|---|
| `check`, order exists | 200 | `[ { ok: true, location_key, bestaat, actief, deliverect_slikt, ontbrekende_plus, aanbiedbaar }, ... ]` - one object per candidate, `location_key` order |
| `check`, unknown order | 200 | `[ { ok: false, reden: "order_bestaat_niet", canonical_id } ]` |
| `move`, moved | 200 | `[ { ok: true, canonical_id, external_ref, msg_id, van_location_key, huidige_status, oud_shipday_order_id } ]` |
| `move`, origin already cancelled BY THIS DOOR | 200 | `[ { ok: false, reden: "niets_gewijzigd", canonical_id, huidige_status: "cancelled", overname_canonical_id, overname_external_ref, overname_gevonden: 1 } ]` - the order moved on an earlier call; **record `overname_canonical_id` and carry on**, this is the recovery path |
| `move`, origin cancelled by something else | 200 | `[ { ok: false, reden: "niets_gewijzigd", canonical_id, huidige_status: "cancelled", overname_gevonden: 0 } ]` - no row of this door's making; a plain refusal |
| `move`, origin cancelled and MORE than one handover row found | 200 | `[ { ok: false, reden: "niets_gewijzigd", canonical_id, huidige_status: "cancelled", overname_gevonden: 2 } ]` - the ids are deliberately withheld; a human decides |
| `move`, order not movable for another reason | 200 | `[ { ok: false, reden: "niets_gewijzigd", canonical_id, huidige_status } ]` - `huidige_status` is `complete` or `ls_rejected` |
| `move`, unknown order | 200 | `[ { ok: false, reden: "order_bestaat_niet", canonical_id, huidige_status: null } ]` |
| any action, wrong shared secret | 200 | `[ { ok: false, reden: "niet_toegelaten" } ]` - nothing else, ever |
| malformed request, database error | 500 | n8n's generic envelope. No diagnosis - read the execution in n8n |

`canonical_id` on an `ok: true` move is the **new** order's id; on a refusal there is no new
order *in this call*, so it echoes the id you asked about. `huidige_status` on an `ok: true`
move is the status the origin had **before** the cancel.

### The three `overname_*` fields, and why they exist

They are meaningful only on a `niets_gewijzigd` refusal of an origin that is already
`cancelled`; elsewhere they are null / 0.

| Field | Meaning |
|---|---|
| `overname_canonical_id` | the id of the order this door created on an EARLIER call - the food the customer is waiting for, at the target shop. Present only when exactly one was found |
| `overname_external_ref` | that order's `external_ref`, the one carrying the ` · OVERNAME ` marker |
| `overname_gevonden` | how many handover rows were found for this origin: 0, 1, or more |

**The money is why.** If the OS calls `move`, the move succeeds, and then the OS's own
write-back of the new order id fails - a blip, a restart - the order HAS moved but the OS never
records it. The manual task "void the receipt at the origin till" then never appears, and that
void is the only thing that moves the revenue between two legal entities. From every screen it
looks like the transfer simply did not happen, while the money quietly stays in the wrong BV.
Answering the retry with only "already cancelled" is honest and useless: the caller still
cannot learn which order the food became. These fields let it recover on the second call.

**How it is found:** by the marker this door itself writes - the origin's own `external_ref`
followed by ` · OVERNAME `, matched with `starts_with()` rather than a `LIKE` pattern, because
an `external_ref` is data and may contain `%` or `_`. The marker in the INSERT and the marker
in this lookup are one mechanism: change one and you must change the other, or the lookup goes
blind and stays silent about it. The scan is over 5 078 rows (measured 2026-09-10) and only
runs when the origin is already cancelled.

**Why more than one is withheld rather than guessed.** Two handover rows for one origin means
either the same order was moved twice, or a chain (A to B to C) - a legitimate chain produces
two matches. Both are a human's call, not a guess this door gets to make. It says how many it
found and stops.

This path **reads only**. It writes nothing, enqueues nothing, and changes no status: it makes
a refusal useful, it does not retry the move.

**What `reden: "niets_gewijzigd"` does and does not prove.** It says the door's statement
matched nothing and returned no new order. It is *probably* also true that the origin was left
alone - the cancel and the insert are one statement, so a raising insert takes the cancel down
with it. But if a `BEFORE INSERT` trigger silently **suppressed** the target row rather than
raising, the cancel in `oud` would have committed. Until Step 0's trigger question is actually
answered, read `huidige_status` and, if it surprises you, read the origin row before doing
anything else.

**Both actions answer an array, on purpose.** The webhook node carries
`responseData: "allEntries"`. n8n's default for `responseMode: "lastNode"` is `firstEntryJson`,
which would have answered a `check` on four candidate shops with the first shop only - and no
caller can tell that apart from a legitimate one-shop answer. Do not remove that setting, and
do not assume the default if you rebuild this workflow on a newer n8n: defaults move.

**`msg_id` is evidence, not a number to compute with.** It comes back from `pgmq_send_order`
as a Postgres `bigint` - the id of the queue message - and it exists so the caller can say "the
queue accepted it" and quote it in an incident. Nothing adds to it, compares it or orders by
it. If a client ever needs to do arithmetic on it, that is a sign the door owes it a different
field.

**What a 500 means for the OS.** A 500 is reserved for the genuinely unexpected - a malformed
request (a caller bug) and a database error (a real fault) - so it carries no diagnosis and the
OS cannot reason about it. A wrong secret is no longer among them. The move is one statement in one transaction, so it means either nothing
happened or, in the one case where the transaction committed and the HTTP response was lost,
everything happened. Do not assume either: read the origin row, or ask `check` about it.
**Retrying is safe:** a second `move` on the same `canonical_id` finds the origin already
`cancelled`, the cancel matches nothing, and the door answers
`{ ok: false, reden: "niets_gewijzigd", huidige_status: "cancelled" }` - carrying
`overname_canonical_id` if the first call was this door's doing, which is exactly how a caller
recovers from a lost response. It cannot move the same order twice.

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
| A new row at `'received'` is enough | **No.** `push_lightspeed_order`'s `State -> pushing_ls` node only moves an order whose status is `normalized` or `ls_failed`. A row left at `received` is never pushed and never alarms - `monitor_stuck_normalized` watches `normalized` at deliverect shops and `ls_receipt_watchdog` needs an `ls_order_id`, so nothing watches `received` at all. The door therefore inserts straight at `normalized`. |
| The `deliverect_active` yield only swallows takeaway orders | **Wrong** (an error in the plan, caught in review). The live `IF NOT Deliverect Active?` node has exactly one condition, on `deliverect_active`, with no source condition. It applies to every order pulled off the queue. As first written, a Shopify order offered to a deliverect shop would have passed the check, been cancelled at the origin and then yielded at the target. |
| `canonical_orders_unique_active_idx` on `(source, external_ref, location_key) WHERE status != 'cancelled'` | Not verifiable this session (see below), and not load-bearing: the new row's `external_ref` differs, so it collides under neither that index nor the older non-partial `canonical_orders_source_external_ref_uk` on `(source, external_ref)` that both normalizers' `ON CONFLICT` binds to. |
| `external_ref` length | `text`, no limit in Postgres. Real refs are 15-25 characters (`Shopify - #1037`, `Takeaway - 6GYCGB`); the suffix adds 20. Lightspeed's own limit on `externalReference` is undocumented here - if it ever rejects the value, `push_lightspeed_order` DLQs it loudly (`ls_failed` + `dlq_alerts`); it does not print at the wrong shop. |

### Four things that could NOT be verified, and what hangs on each

`mcp__supabase-self-hosted__execute_sql` answered "Unable to connect" all session and shell
access to `psql` on the VPS was refused by the permission classifier, so nothing in
`pg_catalog` could be read:

1. **The state-transition trigger itself.** The function
   `is_allowed_order_state_transition(from_state, to_state)` exists and was called; the trigger
   that enforces it was not read. The cancel side does not depend on the answer - it names only
   transitions the function calls legal. **The insert side does:** it inserts straight at
   `'normalized'`, and if an INSERT-time trigger forces `'received'`, that insert raises instead
   of writing. Step 0 says what to look for and what to do about it.
2. **The index list on `canonical_orders`.** See the row above - the new `external_ref` differs
   under either shape.
3. **Whether `raw_payload_id` is unique.** The new row copies it, so one `raw_orders` row ends
   up with two canonical rows. Step 0 asks the question.
4. **Whether `dim_location.name` is fit to print.** This door is the first thing in either repo
   to read that column, so nothing has been keeping it tidy, and its value rides onto a
   customer's ticket. A missing name falls back to the `location_key`; a *bad* name prints.

Step 0 of the runbook closes all four.

## One statement, one transaction

The whole move - cancel at the origin, insert at the target, enqueue the push - is a single
statement in a single node. An earlier draft split the transition and the enqueue into a second
node, on the reasoning that a data-modifying CTE cannot see a row inserted by a sibling CTE.
That is true for reading the table, but the INSERT's own `RETURNING` **is** visible to the
outer query, so the split was unnecessary - and it was dangerous: if the second node failed
(connection blip, pool exhaustion, `n8n-main` restarting between nodes) the origin was
`cancelled` and the target row sat at `received` with no queue message and no watcher. The
customer's order would be cancelled at one shop, invisible at the other, and nothing would
alarm. Exactly the hole this door was written to avoid, one node to the right.

**If Step 0 finds an INSERT trigger that forces `'received'`,** do not force it back. Split the
statement in two (insert at `received`, then a second node doing
`UPDATE ... SET status='normalized' WHERE id=$1 AND status='received' RETURNING ...` with the
enqueue hanging off that `RETURNING`) **and add the missing net in the same session**, because
today nothing watches that state:

```sql
-- Monitor, alongside monitor_stuck_normalized: an order stuck at 'received'.
SELECT id, external_ref, source, location_key, created_at
  FROM public.canonical_orders
 WHERE status = 'received'
   AND created_at < now() - interval '5 minutes'
 ORDER BY created_at;
```

## Deliberately not automated: the courier

Cancelling the origin row does not cancel the ride. If the origin order already sits at
Shipday, a driver is on his way to a shop that no longer has the food, and the target shop
will dispatch a second one. That is a real hole, and it is closed by a person, not by this
door: the OS shows the task ("delete the delivery in Shipday Aalst, create it again in Shipday
Frietchalet") and nags until someone ticks it. `oud_shipday_order_id` in the move response
tells the OS whether that task is needed at all.

An earlier draft of this door enqueued `q_orders_compensate` automatically. It was taken back
out, for three reasons:

1. **Half the job cannot be automated.** `shipday_compensate` can DELETE the old ride; nothing
   here can create the new one. Automating the delete leaves the risky half with the human
   anyway - and now they are told to delete something that is already gone. Half an automation
   across two systems is how you end up with a driver at neither shop.
2. **It would fire for almost nobody.** Measured on prod: 2 131 Shopify delivery orders in
   `canonical_orders`, **zero** with a `shipday_order_id` - Shopify rides are created by
   Shipday's own Shopify integration, outside both repos. Only takeaway deliveries would ever
   reach the branch, and those are the slice least likely to be handed over.
3. **It would lie in the failure ledger.** `shipday_compensate` closes by writing a resolved
   `dlq_alerts` row with `resolution_action = 'discard'`. A deliberate, successful handover
   would start appearing there as a failure, and the next person reading that ledger would be
   reading something untrue.

**Upgrade path.** If the human task turns out to be missed in practice, the compensator is the
place to revisit - and it should then stop writing a `dlq_alerts` row when it was called for a
handover instead of for a failure.

## A live secret found on the way (not this task's job)

`shipday_webhook_status (realtime)` (n8n id `QHRqA8icb1P18kVC`) does **not** read its shared
secret from Vault: a shared secret is hardcoded in the body of its `Validate & Map` node and
compared there against the `token` header, so it lives in plain text in the workflow body and
in every export of it. The value is deliberately not repeated here - writing it down is what
spreads it.

It needs rotating: new secret in Vault, the node reading it from there, Shipday's webhook
configuration updated to match. That is its own task, because it means editing a live pipe.
This door reads its own secret from Vault instead.

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
- **Later Shopify edits land on the dead row, and nobody is told.** The handover deliberately
  changes `external_ref`, and `shopify_webhook_order_updated` upserts on
  `(source, external_ref)` - so if the customer changes the order after the handover, the
  update finds the **cancelled origin row** and updates that. The target row's items, customer
  and payment are frozen at the moment of handover. It is not dangerous - the reviewer
  confirmed the dead row cannot be re-pushed - but the shop will meet it.
  **What a person does:** treat a handover as closing the order for edits. If the customer
  changes something afterwards, the target shop is told by phone or ticket, and the change is
  made at the till, not in Shopify. If it has to go through the systems, cancel the target row
  and let the shop enter a fresh order.

## Runbook - a human does this, in order

### Step 0. Close the four open questions (read-only)

```sql
-- 0a. The triggers, and what their functions actually do.
select t.tgname, pg_get_triggerdef(t.oid) as def, pg_get_functiondef(p.oid) as body
  from pg_trigger t
  join pg_proc p on p.oid = t.tgfoid
 where t.tgrelid = 'public.canonical_orders'::regclass and not t.tgisinternal;

-- 0b. The indexes.
select indexname, indexdef from pg_indexes where tablename = 'canonical_orders';

-- 0c. Does anything assume one raw order = one canonical order?
select indexname, indexdef from pg_indexes
 where tablename = 'canonical_orders' and indexdef ilike '%raw_payload_id%';

select pg_get_functiondef('public.check_orphan_raw_orders'::regproc);
select pg_get_functiondef('public.reconcile_missing_canonical'::regproc);

-- 0d. Is dim_location.name fit to print on a customer's ticket?
select location_key, name, length(name) as lengte, is_active, deliverect_active
  from public.dim_location
 order by location_key;
```

**0a - what to look for:** whether any trigger fires `BEFORE INSERT` (not only `BEFORE UPDATE`)
and whether its body constrains `NEW.status` on insert - typically a `TG_OP = 'INSERT'` branch
demanding `'received'`, or a transition check run with `OLD` null.
- *No INSERT-time constraint on status* (the expected answer): the door works as committed -
  one statement, inserting straight at `'normalized'`.
- *An INSERT-time constraint forcing `'received'`*: do not force it back. Switch to the split
  shape described under "One statement, one transaction" above **and** add the
  `status = 'received'` monitor in the same session. Nothing watches that state today.
- *A trigger blocking an INSERT at `'received'` as well*: stop. Neither this door nor the
  normalizers could work, and something else is wrong.

**0b - what to look for:** a unique index on `(source, external_ref)`
(`canonical_orders_source_external_ref_uk`), possibly beside the partial
`canonical_orders_unique_active_idx` on `(source, external_ref, location_key) WHERE status !=
'cancelled'`. The new row's `external_ref` differs, so it conflicts with neither. If a unique
index exists that the suffix does **not** dodge, stop and re-read the insert.

**0c - what to look for:** whether `raw_payload_id` carries a unique index, and whether
`check_orphan_raw_orders` or the reconciler assumes `raw_orders -> canonical_orders` is 1:1.
- *No unique index and no 1:1 assumption*: nothing to do. Two canonical rows per raw order is
  the honest record of what happened - the raw payload really did produce two orders.
- *A unique index on `raw_payload_id`*: the insert will fail. Insert `NULL` instead (the column
  is nullable by design, for purged raw rows) and accept that `push_lightspeed_order` loses the
  promised-time hints it reads from `raw_orders` for that order.
- *The reconciler or the orphan check counts on 1:1*: it will now see a second canonical row
  for one raw order. Read what it does with that before the first real handover - a false
  "orphan" alert is noise, a re-enqueue would be worse.

**0d - what to look for:** short, human, printable shop names. This door is the first thing in
either repo to *read* `dim_location.name` - `Load dim_location` selects
`lightspeed_company_id, ls_table_ids, payment_type_ids`, `ls_receipt_watchdog` selects
`is_active`, `Build Order Payload` reads `timezone`, and `monitor_order_blocking_alerts` maps
shop names with a hardcoded `CASE c.location_key WHEN 'LOC_AALST' THEN 'Tipzakske' ...` rather
than joining the column. So nothing has been keeping it tidy. Read on 2026-09-10 it was
`Tipzakske`, `De Frietbooster`, `De Frietchalet`, `De Friturist`.
- *Still short and human*: nothing to do; the ticket reads `... · OVERNAME DE FRIETCHALET`.
- *Long, or carrying a suffix a customer should not read* (a legal entity, a city code, a
  "(gesloten)" marker): shorten the `name` values, or change the one line in the insert to a
  column the shop controls. Do not leave it: it prints on a customer's receipt.
- *NULL for some shop*: already handled - the insert falls back to the `location_key`, so the
  ticket says `OVERNAME LOC_AALST`. Ugly, never silent, never blocking.

### Step 1. Create the shared secret

```sql
select vault.create_secret('<a long random string>', 'overname_webhook_token',
                           'Shared secret for POST /webhook/order-overname (OS -> Srova)');
```

Give the same string to the OS.

**The three names are deliberately not the same, and none of them is wrong.** Only the VALUE
has to match; the names live on different machines and follow their own conventions:

| Where | Name | Convention |
|---|---|---|
| Srova, Postgres Vault | `overname_webhook_token` | the name this workflow's `Load Overname Token` node queries |
| The wire | header `x-overname-token` | what the OS sends and this door compares |
| The OS, environment | `SROVA_OVERNAME_TOKEN` | the OS garage's own `<SOURCE>_*` convention |

Do not "fix" one to match another. Renaming the Vault row means editing this workflow;
renaming the header means editing both sides at once. **If the first real call comes back
`{ ok: false, reden: "niet_toegelaten" }`, the two VALUES differ - the names are a red
herring.** Copy the Vault value again, carefully; a trailing newline or a truncated paste is
the usual cause.

### Step 2. Import, inactive

Import `docs/workflows/orders_overname_uitvoeren.json` through the n8n UI. It arrives inactive.
Do not activate yet. Tag it `fos:orders` and put it in the `FrituurOS/orders` folder, like its
siblings.

### Step 3. Dry run - choose the path before you start

There are two paths and they prove different things. Read both, pick one deliberately.

**Path A - the safe one. Proves the door, does not prove the print.** Use an order whose
`external_ref` contains `TEST` (or a `TEST` / `NIET BEREIDEN` item name, or a `SHOP-` PLU).
`push_lightspeed_order`'s `Gate: Location Active?` requires `location_active = true` **and**
`is_test_order = false`, so such an order is stopped at that gate: it never reaches Lightspeed
and **no ticket prints anywhere**. What Path A proves: the token gate, the check answer, the
cancel, the new row, the queue message, and that the pusher picked it up and dropped it at the
gate. What it cannot prove: the ticket. Step 4's "green" for a Path A run stops at
`status = 'pushing_ls'` and a `deliverect_yield`-style stop, **not** at `ls_sent`.

**Path B - the real one. Proves the print, and prints a real ticket at a real till.** A canary
(`is_canary = true`) is **not** caught by that gate: `is_test_order` looks only at
`external_ref` and item names, so a canary goes all the way through and the target shop's
printer produces a ticket for food nobody ordered. Choose Path B only if you accept that, only
outside a rush, and only after telling the target shop it is coming. **Attached to Path B, not
optional:** void the printed ticket at the target POS afterwards, and void the origin ticket
too if the origin had already printed. Lightspeed has no cancel call; nobody else will do it.

```sql
-- Path A candidates (test orders) and Path B candidates (canaries), still movable.
select co.id, co.external_ref, co.source, co.status, co.location_key, co.is_canary,
       (co.external_ref ilike '%TEST%') as stopt_bij_de_gate,
       jsonb_array_length(co.items) as regels
  from public.canonical_orders co
 where co.status in ('received','normalized','pushing_ls','ls_sent',
                     'ls_accepted','shipday_sent','ls_failed')
   and (co.is_canary = true or co.external_ref ilike '%TEST%')
 order by co.created_at desc
 limit 20;
```

If neither exists, make one the way the canary path makes them (Path B) or place a `TEST` order
yourself (Path A). Never a customer's food.

Then, with the workflow still inactive, use n8n's **Execute Workflow** with pinned webhook data
(or activate it, run the two calls below, and deactivate again - decide before you start; two
active copies of anything is the thing this shop does not do).

`$OVERNAME_TOKEN` below is just your own shell variable holding the value from Step 1 - a
fourth name for the same string, and equally not wrong.

```bash
# 3a. Ask which shops can serve it.
curl -sS -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_TOKEN" \
  -d '{"action":"check","canonical_id":"<uuid>","location_keys":["LOC_AALST","LOC_BERLARE","LOC_DENDER"]}'

# 3b. Move it to one that answered aanbiedbaar = true.
curl -sS -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_TOKEN" \
  -d '{"action":"move","canonical_id":"<uuid>","target_location_key":"LOC_BERLARE"}'

# 3c. NOT optional: produce a refusal on purpose and record the RAW body.
#     The same call again - the origin is cancelled now, so the door must refuse AND hand back
#     the order it created the first time. That is the recovery path the OS needs when its own
#     write-back fails, and this is the only evidence it works.
#     Expect HTTP 200, "reden":"niets_gewijzigd", "huidige_status":"cancelled",
#     "overname_gevonden":1, and an "overname_canonical_id" equal to the canonical_id that
#     call 3b returned. Compare those two by eye - equal is the whole point.
curl -sS -o /tmp/overname-refusal.json -w 'HTTP %{http_code}\n' \
  -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_TOKEN" \
  -d '{"action":"move","canonical_id":"<uuid>","target_location_key":"LOC_BERLARE"}'
cat /tmp/overname-refusal.json

# 3d. And a check on an id that does not exist.
#     Expect HTTP 200 and [{"ok":false,"reden":"order_bestaat_niet","canonical_id":"..."}]
curl -sS -w '\nHTTP %{http_code}\n' -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: $OVERNAME_TOKEN" \
  -d '{"action":"check","canonical_id":"00000000-0000-4000-8000-000000000000","location_keys":["LOC_AALST"]}'

# 3e. And a deliberately wrong secret.
#     Expect HTTP 200 and [{"ok":false,"reden":"niet_toegelaten"}] - and nothing else in it.
curl -sS -w '\nHTTP %{http_code}\n' -X POST https://<n8n-host>/webhook/order-overname \
  -H 'content-type: application/json' \
  -H "x-overname-token: dit-is-niet-het-geheim" \
  -d '{"action":"check","canonical_id":"<uuid>","location_keys":["LOC_AALST"]}'
```

Paste all three raw bodies into the handover note. They are the only evidence that the refusal shape
is what this document claims, and the only thing that will catch it changing under a newer n8n:
a refusal that starts arriving as a 500 breaks the OS client's most important distinction -
"definitely nothing changed" versus "I have no idea what happened" - and it breaks it silently.

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

**Green after Path A** (test order): old row `cancelled` with
`cancel_reason = 'overname_naar_<LOC>'`; new row exists at the target shop at `normalized` and
then `pushing_ls`; a queue message was consumed; no `dlq_alerts`. The new row does **not** reach
`ls_sent` and no ticket prints - `Gate: Location Active?` stopped it because `is_test_order` is
true. That is the expected end of Path A, not a failure.

**Green after Path B** (canary): all of the above, plus the new row at `ls_sent`/`ls_accepted`
with an `ls_order_id`, and **a ticket on the target shop's printer**. Then, as part of the run
and not as an afterthought: void that ticket at the target POS, and void the origin ticket too
if the origin had already printed. Lightspeed has no cancel call, so nobody else will.

Either path: if the move response carried an `oud_shipday_order_id`, the ride is still the
origin shop's - delete it in Shipday there and create it again at the target, by hand.

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

---

## Dry run RESULT — 11/09/2026, Path A, all green

Run at 01:30 Brussels (shops closed, zero orders in the previous two hours). Imported as
`e8UfR5ZMyMGBS4SW`, tagged `fos:orders`, published, webhook registered. Step 0's four questions
were closed first and all four landed on the expected answer: no INSERT-time trigger constrains
`status` (only `BEFORE UPDATE OF status` validates transitions), both unique indexes key on
`external_ref` so the marker dodges them, nothing assumes `raw_orders -> canonical_orders` is
1:1, and `dim_location.name` is short and printable.

**The test order was a real Shopify order, deliberately.** Created through the Admin API at
Tipzakske with no customer, no email and **no payment** — the Shopify docs are explicit that
"orders that interact with an online gateway can't be deleted", so a gateway-less order is the
one shape that can be removed again. Line item `TEST - NIET BEREIDEN - overname dry run`, which
made `is_test_order` true and stopped it at `Gate: Location Active?`. **Verified in the database
BEFORE calling the door**, not assumed. It was deleted from Shopify afterwards (DELETE 200, GET
404).

### The raw bodies, as they actually came back

```
# wrong secret
[{"ok":false,"reden":"niet_toegelaten"}]                                        HTTP 200

# unknown order
[{"ok":false,"reden":"order_bestaat_niet","canonical_id":"00000000-0000-4000-8000-000000000000"}]
                                                                                 HTTP 200

# check, four candidates  (one row per candidate - this is what responseData=allEntries buys)
[{"ok":true,"location_key":"LOC_AALST","bestaat":true,"actief":true,"deliverect_slikt":false,
  "ontbrekende_plus":["SHOP-37610838655324"],"aanbiedbaar":false}, … x4 …]        HTTP 200

# move
[{"ok":true,"reden":null,"canonical_id":"2f293d7e-39bc-4ed4-9063-85c95c7c258d",
  "huidige_status":"normalized","external_ref":"Shopify - #online-5873 · OVERNAME TIPZAKSKE",
  "van_location_key":"LOC_AALST","oud_shipday_order_id":null,
  "overname_canonical_id":null,"overname_external_ref":null,"overname_gevonden":0,
  "msg_id":"4881"}]                                                              HTTP 200

# move again - the recovery path
[{"ok":false,"reden":"niets_gewijzigd","canonical_id":"4bf08693-…","huidige_status":"cancelled",
  "external_ref":null,"van_location_key":null,"oud_shipday_order_id":null,
  "overname_canonical_id":"2f293d7e-39bc-4ed4-9063-85c95c7c258d",
  "overname_external_ref":"Shopify - #online-5873 · OVERNAME TIPZAKSKE",
  "overname_gevonden":1,"msg_id":null}]                                          HTTP 200
```

`overname_canonical_id` on the refusal is byte-for-byte the `canonical_id` the successful move
returned. That equality is the whole point of the recovery path: when the OS's own write-back
fails, a retry learns which order the food became, so the manual till-void task still appears
and the revenue does not stay in the wrong BV.

Note `reden` is present-but-**null** on success. A caller must branch on `ok`, never on
"does the body have a reden key".

### What the database held afterwards

Origin `cancelled` with `cancel_reason = overname_naar_LOC_DENDER`, new row at `LOC_DENDER`
carrying the marker, `ls_order_id` null on **both** — no ticket printed anywhere, which is what
Path A is for. `msg_id` null on the refusal, so a refusal enqueues nothing.

### Cleanup, and one thing deliberately NOT cleaned

The Shopify order was deleted. The temp workflow that created it was deleted. The new canonical
row was **cancelled**, not deleted, and the seven `order_state_history` rows were left standing.

That was a decision, not laziness. `order_state_history` is append-only, enforced by
`order_state_history_no_delete`, and the FK cascades — so removing the canonical rows means
bypassing that guard. The guard exists so the story of an order can never be rewritten, and this
test really happened: a real order really was created and really was moved. Erasing the audit
trail to tidy up a test is exactly what it is there to prevent, and doing it once establishes
that the trail is deletable when inconvenient.

Cancelling instead costs nothing that matters: `v_orders_bon` and the day board both exclude
cancelled orders, so no euro is counted anywhere (verified: 0 cents on any board), and what is
left is two TEST-named cancelled orders among the 620 cancelled orders that were already there.
Which is exactly what a test order is.
