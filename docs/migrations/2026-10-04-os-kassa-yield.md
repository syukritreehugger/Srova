# push_lightspeed_order: yield to the OS till (FrituurOS kassa, issue #51 in FrituurOS-GV)

**What:** when a shop's online orders go to the FrituurOS till instead of Lightspeed, `push_lightspeed_order`
must not push them to Lightspeed, or they are booked twice. One gate, built exactly like the Deliverect yield:

- `Load Canonical Order` gains `os_kassa`: true when the order was created inside a period in
  `public.orders_kassa_winkel_periode` (owned by FrituurOS; `postgres` can read it). Periods, not a flag, so an order
  created while the shop was on the OS till stays there if the shop switches back to Lightspeed.
- `IF NOT OS Kassa?` sits between `IF NOT Deliverect Active?` and `Load dim_location`. When `os_kassa` is true:
  `Log OS Kassa Yield (LS)` writes `order_state_history` with reason `os_kassa_yield` (status unchanged), and
  `Ack OS Kassa Yield (LS)` deletes the queue message. The order keeps its status; the OS till reads it from
  `canonical_orders` and books it there. Covers Shopify and Takeaway: both enqueue into `q_orders_push_ls`.

**Nothing else changes.** Shipday, Takeaway accept, the PLU mapping, `monitor_stuck_normalized` (only looks at
Deliverect shops) and `ls_receipt_watchdog` (only orders with an `ls_order_id`) are untouched by an OS-till order.

**Measured 04/10/2026:** 0 of 529 orders of the last 7 days have `os_kassa = true`; deploying this changes nothing
until a shop is switched in FrituurOS.

**Deploy (pilot day, before switching De Friturist):** apply to the live workflow through the n8n API/MCP, never
by SQL on the node table (the published version is a snapshot), read back with `mode=active`, then switch the shop
in FrituurOS (Orders · Kassa). Check after: for the switched shop, no new `ls_sent` after the switch, and every new
order appears in the till's online queue.
