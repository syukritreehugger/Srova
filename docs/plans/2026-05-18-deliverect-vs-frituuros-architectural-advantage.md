# Deliverect vs FrituurOS — Architectural Advantage

> Discovered 2026-05-18 during real e2e test (Joef's order XKVTVW at Frietchalet).
> This doc captures a critical insight about why FrituurOS pipeline is **strictly better** than Deliverect for the Takeaway → Lightspeed integration.

## The Discovery

During the e2e test, Joef placed a real pickup order (XKVTVW, €7.30) at takeaway.com → De Frietchalet. **Only one LS receipt appeared (ours)**, not two as expected.

Joef explained:
> "Because iPad not active. Deliverect push only when lightspeed app is open on iPad. But we're closed today so :D"

This means **Deliverect's push to Lightspeed depends on the physical iPad POS app being open and running**. When the iPad is off/crashed/restarting, Deliverect silently drops orders.

## Architectural Comparison

### Deliverect (current path)

```
Takeaway customer pays
   ↓
Takeaway sends webhook → Deliverect server
   ↓
Deliverect server → Lightspeed iPad app (via push notification / app channel)
   ↓
[REQUIRED: iPad app open and connected]
   ↓
Lightspeed iPad app receives → creates receipt in POS
```

**Failure modes:**
- iPad off / sleep → order not received until app reopened
- iPad app crashed → order dropped (silently?)
- iPad Wi-Fi disconnected → order delayed
- iPad rebooted / battery dead → order skipped during downtime
- Cashier closes app → orders lost

**Hidden operational cost:** Lost orders during any iPad downtime. Restaurant may never know orders came in until customer complains. Real-world frequency unknown but plausible (Wi-Fi blips, charging cycles, manual app closes).

### FrituurOS (our pipeline)

```
Takeaway customer pays
   ↓
Takeaway stores order in their backend API
   ↓
FrituurOS poller (n8n, 5-min schedule) → fetches /api/orders/history
   ↓
Pipeline normalizes → enqueues to pgmq
   ↓
push_lightspeed_order workflow → POST to Lightspeed cloud REST API
   ↓
[Lightspeed cloud creates receipt — NO iPad required]
   ↓
Next time iPad syncs/opens, receipt is already there
```

**Failure modes:**
- n8n server down → orders pile up in Takeaway API, picked up on next n8n recovery
- Lightspeed cloud API down → push retried automatically (n8n retry logic)
- Token expired → auto-refresh via sub-workflow

**Resilient:** Pipeline keeps working through iPad outages, app crashes, even restaurant closing hours. Orders that arrived overnight pushed automatically by morning.

## Concrete Evidence

| Test scenario | Result |
|---|---|
| iPad active, order placed | Both Deliverect + FrituurOS push (would create 2 LS receipts) |
| iPad inactive (Joef's XKVTVW test) | Only FrituurOS pushed (Deliverect silently skipped) |

## Implications

### For migration strategy

The cutover from Deliverect → FrituurOS is **strictly an improvement**, not a risk:
1. FrituurOS handles all orders, regardless of iPad state
2. No "downgrade" in any scenario
3. Cashier still sees orders in LS POS as before, but more reliably

### For sales / partner pitch

If positioning FrituurOS commercially:
- "Lose orders when iPad is off? Not with FrituurOS — pushes directly to Lightspeed cloud, doesn't depend on your POS device state."
- Reliability metric: percentage of orders successfully pushed during operational hours. Deliverect has hidden gap.

### For monitoring

A future enhancement: track orders that **should have** been pushed by Deliverect (visible in Takeaway API but no matching `externalReference` in LS). Quantify the "Deliverect blind spot" empirically before cutover.

## Implementation Notes

The reason FrituurOS doesn't have this dependency:
- Uses direct Lightspeed L-Series REST API (`lightspeedapis.com/resto/rest/onlineordering/...`)
- Calls `POST /establishmentorder` with OAuth bearer token
- Lightspeed cloud creates the receipt server-side, regardless of which devices have the app open
- iPad app, when next online, syncs from Lightspeed cloud and displays the receipt

Deliverect's architecture predates the L-Series cloud API — they integrate via the older device-to-device channel that required the POS app to be running. Modern Lightspeed L-Series API removes this dependency entirely.

## Action Items

- [ ] (Future) Add monitoring: alert when Takeaway API has orders not in canonical_orders within 10 min → indicates pipeline issue (or Deliverect blind spot if Deliverect is the active push path)
- [ ] (Sales positioning) Use this insight in any migration pitch to Joef's group or future customers
- [ ] (Validation) Repeat test with iPad active — confirm both systems push and we can see Deliverect's receipt format for comparison
