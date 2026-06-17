# Receipt Watermark — Srova brand on Lightspeed POS

**Date:** 2026-06-17
**Workflow:** `push_lightspeed_order` (n8n id `2ENsv7R4I8H5L3cf`), node **Build Order Payload**

## Background

Before this change, kitchen receipts from Srova-pushed orders looked
indistinguishable from generic LS POS receipts. Operator dapur could not
identify the source system at a glance. Deliverect uses a hidden watermark
(email proxy `@deliverect.com`) but not visible on print.

Aziz requested visible Srova branding on receipts so dapur staff understand
"this came through Srova" — analogous to a *powered by* footer.

## Format

Selected variant: **Top inline + footer attribution** (see chat 2026-06-17).
Industry "Powered by" SaaS convention.

### Lightspeed `description` field (receipt header)

```
SHOPIFY · Shopify - #4720 · via Srova Data
```

Format: `<CHANNEL> · <external_ref> · via Srova Data`
- `<CHANNEL>` — uppercase, from `order.source`:
  - `shopify` → `SHOPIFY`
  - `takeaway` → `TAKEAWAY`
  - else → uppercase fallback
- `·` middle dot U+00B7 — safe on Latin-1 thermal printers (widely used in EU)

### Lightspeed `note` field (kitchen body)

```
*** SHOPIFY · TAKEAWAY ***
Ref: Shopify - #4720
TE BETALEN: CASH €18.50
- Frietje speciaal: zonder zout
KLANT: Aub allergie pinda
─ via Srova Data ─
```

Lines:
1. **Brand + channel + order type** in stars `***` for max visual weight on
   thermal print (industry KOT convention)
2. **Order reference** + pay-at-door warning (existing behavior preserved)
3. **Item-level notes** (Takeaway modifier specs, etc.)
4. **Customer note** prefixed `KLANT:` (Belgian Nederlands convention)
5. **Footer attribution** in `─ ... ─` box for "powered by" feel

## Why this design

Based on research (see chat — sources: Lightspeed L-Series docs, Deliverect
help center, Toast/Square/Otter best practices, Star Micronics thermal
printer guides):

1. **2-second glance rule** — operator dapur needs to ID source within
   first 3 lines as paper exits printer. `description` is rendered at top by
   LS POS template. Brand + channel + ref on one line satisfies the rule.

2. **Lightspeed L-Series limitation** — kitchen template settings do NOT
   support custom branding. The ONLY way to inject brand is via order-level
   `description` and `note` fields populated by our push_lightspeed_order
   workflow.

3. **ASCII safety** — `·` (middle dot) and `─` (box drawing) are widely
   supported on EU thermal printers. No emoji (firmware compatibility risk).

4. **Belgian localization** — `KLANT` (Nederlands), `TE BETALEN` (existing),
   `via Srova Data` reads naturally in NL + FR.

5. **Brand awareness** — `"Srova Data"` instead of just `"SROVA"` adds
   company context. First-time operators see "Srova Data" and infer it's a
   service/vendor, not confusing initialism.

6. **Defense-in-depth** — email proxy pattern `shop-<ref>@frituuros.internal`
   preserved (do NOT change — breaks LS customer dedup per CLAUDE.md memory).
   So watermark exists at TWO layers: visible print + hidden email.

## Comparison vs Deliverect

| Aspect | Deliverect | Srova (this design) |
|---|---|---|
| Brand visible on receipt | ❌ Hidden in email only | ✅ Top header + footer |
| Channel name explicit | ⚠️ Depends on KDS config | ✅ Always in `description` |
| Order type explicit | ⚠️ Implicit | ✅ `TAKEAWAY` / `DELIVERY` in note |
| Email proxy for dedup | ✅ `@deliverect.com` | ✅ `@frituuros.internal` |
| 2-second-rule compliance | ⚠️ Hit-miss | ✅ Guaranteed top of description |

## Rollback

Edit `Build Order Payload` jsCode in n8n workflow `2ENsv7R4I8H5L3cf`:

- Remove the 3 const declarations (`SROVA_VENDOR`, `channelLabel`,
  `orderTypeLabel`)
- Restore `description` to: `` `ONLINE ORDER - ${order.external_ref}` ``
- Restore `note` to:
  ```js
  [
    `ONLINE ORDER - ${order.external_ref}${payAtDoorWarning(...)}`,
    itemNotes,
    customerNote ? `Klant: ${customerNote}` : ''
  ].filter(Boolean).join('\n')
  ```

No DB changes. No code repo changes. n8n workflow only.

## Verification

Test by firing a real Shopify order at Tipzakske after go-live tonight.
Receipt should print with `SHOPIFY · ... · via Srova Data` in the header
and footer attribution at the bottom.
