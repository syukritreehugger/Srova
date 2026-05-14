# Takeaway.com API Discovery

> Discovered 2026-05-14 via live API calls against the `defrietbooster` account.

## Authentication

**Token endpoint:**
```
POST https://partner-hub.justeattakeaway.com/auth/realms/restaurant/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=refresh_token
client_id=live-orders
refresh_token=<JWT_REFRESH_TOKEN>
```

**Response:**
```json
{
  "access_token": "eyJ...",
  "refresh_token": "eyJ...",
  "expires_in": 300,
  "refresh_expires_in": 2592000,
  "token_type": "Bearer",
  "id_token": "eyJ...",
  "not-before-policy": 1641809289,
  "session_state": "...",
  "scope": "profile live-orders openid restaurant-attributes email"
}
```

**Key timing:**
- `access_token` expires in **300 seconds (5 minutes)** — NOT 1 hour
- `refresh_token` expires in **2,592,000 seconds (30 days)** — NOT 50 days
- Keycloak **rotates refresh_token** on each use — always save the new one

**JWT payload fields (from access_token):**
- `aid`: "8218856" — account/restaurant ID
- `preferred_username`: "defrietbooster"
- `email`: "marketing@defrietbooster.be"
- `realm_access.roles`: ["restaurant-admin"]

**CAPTCHA:** Keycloak login form has reCAPTCHA enabled. Automated Playwright login triggers CAPTCHA in headless mode. Stealth flags (`--disable-blink-features=AutomationControlled`, custom user-agent, `navigator.webdriver = undefined`) bypass the initial page load CAPTCHA but it reappears on form submission. Manual browser login required for initial token extraction.

## Orders History Endpoint

```
GET https://live-orders-api.takeaway.com/api/orders/history?date_from=...&date_to=...
Authorization: Bearer <access_token>
Accept: application/json
```

**Response:** Array of order summaries.

### History Order Schema

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `id` | number | 17081350873 | Internal order ID, used for detail endpoint |
| `public_reference` | string | "QGYQRH" | 6-char customer-facing reference |
| `cancelled_at` | string\|null | null | ISO timestamp if cancelled |
| `placed_date` | string | "2026-05-12T15:06:10Z" | ISO timestamp |
| `currency` | string | "EUR" | Always EUR for Belgian locations |
| `restaurant_total` | number | 45.6 | Total in euros (float, not cents) |
| `status` | string | "confirmed" | Observed values: "confirmed", "delivered" |
| `payment_type` | string | "online" | Observed: "online" |
| `delivery_type` | string | "delivery" | **"delivery" or "pickup"** |
| `customer` | object | see below | Abbreviated in history |

**History customer object:**
```json
{
  "full_name": "Jolien Van Eetvelde",
  "street": "Van Hesedreef",
  "street_number": "99"
}
```
Note: History does NOT include `phone_number`, `postcode`, `city` — only detail does.

## Order Detail Endpoint

```
GET https://live-orders-api.takeaway.com/api/orders/{id}
Authorization: Bearer <access_token>
Accept: application/json
```

### Full Order Detail Schema

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `id` | number | 17081350873 | |
| `public_reference` | string | "QGYQRH" | |
| `global_id` | string | "c22onacrsk65fvs0ws4ieg" | Global UUID-like ID |
| `status` | string | "confirmed" | |
| `placed_date` | string | "2026-05-12T15:06:10Z" | |
| `delivery_type` | string | "delivery" | "delivery" or "pickup" |
| `requested_time` | string\|null | null | Scheduled delivery time |
| `payment_type` | string | "online" | |
| `restaurant_estimated_delivery_time` | string\|null | "2026-05-12T15:15:27Z" | |
| `restaurant_estimated_pickup_time` | string\|null | null | |
| `delivery_service_pickup_time` | string\|null | null | |
| `delivery_service_delivery_time` | string\|null | null | |
| `currency` | string | "EUR" | |
| `remarks` | string | "Als het snel kan..." | Customer order notes |
| `subtotal` | number | 45.6 | Pre-discount total |
| `restaurant_total` | number | 45.6 | Restaurant payout |
| `customer_total` | number | 45.6 | Customer charged |
| `delivery_fee` | number | 0 | |
| `service_fee` | number | 0 | |
| `small_order_fee` | number | 0 | |
| `discounts_total` | number | 3.2 | |
| `stampcards_total` | number | 0 | |
| `food_preparation_duration` | number | 5 | Minutes |
| `delivery_time_duration` | number\|null | null | |
| `is_ready_for_kitchen` | boolean | false | |
| `created_at` | string | "2026-05-12T15:07:27Z" | |
| `confirmed_at` | string | "2026-05-12T15:08:30Z" | |
| `with_alcohol` | boolean | false | |
| `has_failure_alert` | boolean | false | |

### Customer Object (Detail)

```json
{
  "full_name": "Jolien Van Eetvelde",
  "street": "Van Hesedreef",
  "street_number": "99",
  "phone_number": "+32495904023",
  "display_phone_number": "+32460260118",
  "phone_masking_code": "618086469",
  "company_name": null,
  "postcode": "9240",
  "city": "Zele",
  "tax_id": null,
  "extra": []
}
```

### Payment Object

```json
{
  "method": "online",
  "pays_with": 0,
  "already_paid_amount": 45.6
}
```

### Product Object

```json
{
  "id": 48148534533,
  "code": "defd5df0-7e95-5418-90da-c495762f0e0d",
  "name": "Julientje",
  "category_name": "Divers",
  "quantity": 1,
  "amount": 13.7,
  "total_amount": 13.7,
  "remarks": null,
  "is_available": true,
  "specifications": [
    {
      "id": 42602971843,
      "code": "7bd82ac0-9e27-572c-b602-5f57b8ffcc2b",
      "name": "Mayo | Kruiden | Gedroogde ui",
      "amount": 0
    }
  ],
  "partner_product_ids": ["78491895042"],
  "menu_product_id": "1126816743"
}
```

**Key product fields:**
- `name` — product name (used for PLU mapping via `takeaway_plu_map`)
- `specifications` — modifiers/toppings (NOT called "modifiers")
- `amount` — unit price in euros (float)
- `total_amount` — quantity × unit price
- `partner_product_ids` — potential external reference IDs
- `menu_product_id` — Takeaway's internal menu item ID

## Location Identification

**No `restaurant_id` field in order data.** The account `defrietbooster` (aid: 8218856) appears to cover a single restaurant location.

Customer addresses in the dataset are in the Berlare/Zele area (postcode 9240), consistent with the "De Frietbooster" Berlare location.

**Implications for multi-location:**
- If each location has its own Takeaway account, we need separate tokens per location
- If one account covers all locations, all orders route to one `location_key`
- Current data suggests single-location per account → hardcode `location_key` per token row

**Recommended approach:** Use `takeaway_tokens.account_name` to map to `location_key` instead of parsing `restaurant_id` from orders. Add a `location_key` column to `takeaway_tokens`.

## Differences from Plan Assumptions

| Assumption | Reality | Impact |
|-----------|---------|--------|
| access_token expires in 3600s | 300s (5 min) | Token refresh sub-workflow must cache with 2-min buffer (plan had same) but poll interval (90s) means ~every 3rd poll refreshes |
| refresh_token expires in ~50 days | 30 days (2,592,000s) | Playwright renewal needed more frequently |
| Order has `restaurant_id` | No such field | Location determined by account/token, not order data |
| Modifiers called "modifiers" | Called `specifications` | Update normalization code |
| Products have no PLU hint | Products have `partner_product_ids` and `menu_product_id` | Could potentially use for auto-matching |
| Customer in order.customer | Correct | `full_name`, `phone_number`, `street`, `street_number`, `postcode`, `city` |
| Delivery vs pickup in `order_mode` | Field is `delivery_type` | Values: "delivery", "pickup" |
| Amounts in unknown format | Euros as float (not cents) | Must multiply by 100 for `total_cents` |
