# L-Series API Collection — Documentation

> **Source:** Lightspeed HQ — [Postman API Network](https://www.postman.com/lightspeedhq/l-series-api/documentation/pn52f3y/l-series-api-collection)
>
> **Base host:** `{{host}}`
> - **Production:** `https://lightspeedapis.com`
> - **Staging:** `https://test.lightspeedapis.com`
>
> **Auth:** All endpoints except the OAuth token endpoints require `Authorization: Bearer {{access_token}}`.

---

## Table of Contents

1. [Authentication (OAuth2 PKCE)](#1-authentication-oauth2-pkce)
2. [Analytics](#2-analytics)
3. [Core — Company](#3-core--company)
4. [Core — Customer](#4-core--customer)
5. [Core — Establishments](#5-core--establishments)
6. [Core — Floor](#6-core--floor)
7. [Core — Payment Type](#7-core--payment-type)
8. [Core — Table](#8-core--table)
9. [Financial — Receipts](#9-financial--receipts)
10. [Inventory — Product](#10-inventory--product)
11. [Inventory — Product Groups (Categories)](#11-inventory--product-groups-categories)
12. [Labour — Clocktime](#12-labour--clocktime)
13. [Labour — Employee](#13-labour--employee)
14. [Liteserver Conversion](#14-liteserver-conversion)
15. [Online Ordering](#15-online-ordering)
16. [Reservation](#16-reservation)

---

## 1. Authentication (OAuth2 PKCE)

This API uses OAuth2 Authorization Code + PKCE for authentication.

#### Before you start

- Contact your Technical Partner Manager to get a new API Client.
- Keep a temporary reference file to store your credentials during setup.
- Read through the API docs.

---

### Part 1 — Getting an authorization code

**Step 1:** Generate a **code challenge** and **code verifier** using a tool like:
`https://developer.pingidentity.com/en/tools/pkce-code-generator.html`

**Step 2:** Build the authorization URL and open it in a browser:

```
Production:
https://lightspeedapis.com/resto/oauth2/v1/authorize
  ?response_type=code
  &client_id=YOUR_CLIENT_ID
  &code_challenge=YOUR_CODE_CHALLENGE
  &code_challenge_method=S256

Staging:
https://test.lightspeedapis.com/resto/oauth2/v1/authorize
  ?response_type=code
  &client_id=YOUR_CLIENT_ID
  &code_challenge=YOUR_CODE_CHALLENGE
  &code_challenge_method=S256
```

**Step 3:** Log in with your test account credentials and authorize the client.

**Step 4:** Grab the `code` from the redirect URL in the browser:
```
https://localhost:8000/?state=ZTz...&code=2tnYOS5z...
```

---

### Part 2 — Getting an access token (initial)

#### `POST /resto/oauth2/v1/token`

| | |
|---|---|
| **URL** | `https://{{host}}/resto/oauth2/v1/token` |
| **Auth** | Basic Auth (`client_id` / `client_secret`) |
| **Content-Type** | `application/x-www-form-urlencoded` |

**Request body (urlencoded):**

| Field | Value | Description |
|---|---|---|
| `grant_type` | `authorization_code` | Grant type |
| `redirect_uri` | `<redirect_uri>` | Client redirect URI |
| `code_verifier` | `<code_verifier>` | PKCE code verifier |
| `code` | `<code>` | Authorization code from the redirect URI |

**Response `200 OK`:**

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "dfHG4hZka...l02BI9SG",
  "expires_in": 3600
}
```

> The access token is automatically stored in the Postman environment.

---

### Part 3 — Refresh token

Access tokens expire after 60 minutes. Refresh tokens expire after 30 days of non-use, with a 60-second grace period for recently used tokens.

#### `POST /resto/oauth2/v1/token`

| | |
|---|---|
| **URL** | `https://{{host}}/resto/oauth2/v1/token` |
| **Auth** | Basic Auth (`client_id` / `client_secret`) |
| **Content-Type** | `application/x-www-form-urlencoded` |

**Request body (urlencoded):**

| Field | Value |
|---|---|
| `grant_type` | `refresh_token` |
| `refresh_token` | `{{refresh_token}}` |

**Response `200 OK`:**

```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...",
  "refresh_token": "MgYRFlMps...hymcwkZkX8z4TU",
  "expires_in": 3600
}
```

---

## 2. Analytics

### `GET` Product Sales

Product sales data for a given date or date range.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/financial/analytics/productsales` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Format | Description |
|---|---|---|---|
| `from` | string | `YYYY-MM-DD` | Start date |
| `to` | string | `YYYY-MM-DD` | End date |
| `date` | string | `YYYY-MM-DD` | Specific date (alternative to `from`/`to`) |

**Example:**
```
GET https://{{host}}/resto/rest/financial/analytics/productsales?from=2021-11-23&to=2021-11-24
```

**Response `200 OK`:**

```json
[
  {
    "productName": "T-Bone",
    "vatRate": 10,
    "vat": 2,
    "pid": "M1",
    "amount": 1,
    "price": 20,
    "total": 20,
    "costVatExcl": 0,
    "profit": 20
  },
  {
    "productName": "Beer",
    "vatRate": 5,
    "vat": 0.45,
    "pid": "D3",
    "amount": 3,
    "price": 3,
    "total": 9,
    "costVatExcl": 3,
    "profit": 6
  }
]
```

---

## 3. Core — Company

### `GET` All Companies

All companies linked to the account.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/company` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
[
  {
    "id": 32265,
    "name": "Food4Thought",
    "vatInclusive": false,
    "openingTime": "00:00",
    "timeZone": "America/Toronto",
    "streetName": "Main",
    "streetNumber": "1",
    "zipCode": "H2S 3H4",
    "city": "Montreal",
    "country": "Canada",
    "server": "nae2.posios.com",
    "creationTime": "2018-06-19T17:51:14.278Z",
    "enforceLiteserver": false,
    "enforceCloud": true,
    "globalId": 63044
  }
]
```

---

### `GET` Single Company

A single company by ID.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/company/:companyId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `companyId` | integer | Company ID |

**Response `200 OK`:** *(same structure as above, single object)*

---

### `PATCH` Update Company

Update part of a company's data using JSON Patch operations.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/company/:companyId` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `companyId` | integer | Company ID |

**Request body:**

```json
{
  "operations": [
    {
      "op": "replace",
      "path": "/genericPmsApiUrl",
      "value": "https://your_pms_url.com"
    },
    {
      "op": "replace",
      "path": "/genericPmsApiUser",
      "value": "some_unique_username"
    },
    {
      "op": "replace",
      "path": "/genericPmsApiPassword",
      "value": "some_unique_password"
    }
  ]
}
```

**Response `200 OK`:**

```json
{
  "id": 123456,
  "name": "ComapnyName",
  "vatInclusive": false,
  "openingTime": "03:00",
  "timeZone": "America/Montreal",
  "streetName": "Street",
  "streetNumber": "73",
  "zipCode": "h2t 1n6",
  "city": "Montreal",
  "country": "Canada",
  "server": "nae1.posios.com",
  "creationTime": "2017-02-09T19:36:25.540Z",
  "enforceLiteserver": false,
  "enforceCloud": true,
  "globalId": 654321
}
```

---

## 4. Core — Customer

### `GET` All Customers

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 448263,
      "uuid": "efc7f7f9764911e8b93b12f9efddaf9e",
      "firstName": "Charlie",
      "lastName": "C.",
      "street": "",
      "streetNumber": "",
      "zip": "",
      "city": "Montreal",
      "country": "Canada",
      "telephone": "5555555555",
      "deliveryStreet": "",
      "deliveryStreetNumber": "",
      "deliveryZip": "",
      "deliveryCity": "",
      "deliveryCountry": "",
      "email": "charlie@charlie.ca",
      "credits": 0,
      "companyId": 32265,
      "modificationTime": "2022-04-08T19:31:15.721Z",
      "note": "",
      "vatNumber": "",
      "dateOfBirth": "",
      "language": "",
      "customerCards": []
    }
  ]
}
```

---

### `GET` Single Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Response `200 OK`:**

```json
{
  "id": 448263,
  "uuid": "efc7f7f9764911e8b93b12f9efddaf9e",
  "firstName": "Charlie",
  "lastName": "C.",
  "street": "",
  "streetNumber": "",
  "zip": "",
  "city": "Montreal",
  "country": "Canada",
  "telephone": "5555555555",
  "deliveryStreet": "",
  "deliveryStreetNumber": "",
  "deliveryZip": "",
  "deliveryCity": "",
  "deliveryCountry": "",
  "email": "charlie@charlie.ca",
  "credits": 0,
  "companyId": 32265,
  "modificationTime": "2022-04-08T19:31:15.721Z",
  "note": "",
  "vatNumber": "",
  "dateOfBirth": "",
  "language": "",
  "customerCards": []
}
```

---

### `POST` Create a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Request body:**

```json
{
  "city": "Montreal",
  "companyId": 32265,
  "country": "Canada",
  "credits": 0,
  "customerCards": [],
  "dateOfBirth": "",
  "deliveryCity": "",
  "deliveryCountry": "",
  "deliveryStreet": "",
  "deliveryStreetNumber": "",
  "deliveryZip": "",
  "email": "customer@example.com",
  "firstName": "John",
  "id": 0,
  "language": "",
  "lastName": "Doe",
  "modificationTime": "",
  "note": "",
  "street": "",
  "streetNumber": "",
  "telephone": "",
  "uuid": "",
  "vatNumber": "",
  "zip": ""
}
```

**Response `201 Created`:** The new customer ID (integer).

```json
10580156
```

---

### `PUT` Update an Existing Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Request body:**

```json
{
  "id": 10580156,
  "city": "",
  "country": "",
  "deliveryCity": "",
  "deliveryCountry": "",
  "deliveryStreet": "",
  "deliveryStreetNumber": "",
  "deliveryZip": "",
  "email": "updated@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "street": "",
  "streetNumber": "",
  "telephone": "",
  "zip": ""
}
```

**Response `200 OK`:** No response body.

---

### `GET` Current Credit Balance for a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Response `200 OK`:** Current credit value (number).

```json
-40.47
```

---

### `GET` Credit Change History for a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id/creditchange` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 907583,
      "changeQuantity": -40.47,
      "creationUserId": 51431,
      "creationTime": "2021-02-24T15:45:39.076Z",
      "receiptId": 75154066
    }
  ],
  "amount": 50,
  "offset": 0,
  "total": 1
}
```

---

### `POST` Add a Credit Change for a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id/creditchange` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Request body:**

```json
{
  "change": 20
}
```

> Use a negative value to deduct credits.

**Response:**

```json
{
  "id": 1785278,
  "changeQuantity": 20,
  "creationUserId": 51431,
  "creationTime": "2022-04-11T13:20:13.043Z"
}
```

---

### `POST` Add a Loyalty Card for a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id/loyaltycard` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |

**Request body:**

```json
{
  "barcode": 705632441947
}
```

**Response `200 OK`:**

```json
{
  "uuid": "2cefe006b99b11ec869f862de6ec0849",
  "companyId": 32265,
  "mainEstablishmentMasterId": 63044,
  "creationUserId": 51431,
  "code": "705632441947",
  "type": "LOYALTY_VALUE_CARD",
  "generatedDate": 1649683666663,
  "originalValue": 0,
  "remainingValue": 0,
  "soldValue": 0,
  "redeemedValue": 0,
  "customerId": 448263,
  "customerUuid": "efc7f7f9764911e8b93b12f9efddaf9e",
  "status": "EMPTY"
}
```

---

### `DELETE` Remove a Loyalty Card from a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:id/loyaltycard/:loyaltyCardUUID` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Customer ID |
| `loyaltyCardUUID` | string | Loyalty card UUID |

**Response `204 No Content`:** No response body.

---

### `POST` Reactivate a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/customer/:customerId/activate` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerId` | integer | Customer ID |

---

## 5. Core — Establishments

### `GET` Establishments of a Company

All establishments (branches/locations) under a company.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/establishment` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
[
  {
    "id": 33888,
    "name": "Trung's demo winnipeg store",
    "vatInclusive": false,
    "openingTime": "16:00",
    "timeZone": "US/Eastern",
    "streetName": "Cory Avenue",
    "streetNumber": "999",
    "zipCode": "R3M 8P1",
    "city": "Winnipeg",
    "country": "Canada",
    "server": "nae2.posios.com",
    "creationTime": "2019-01-19T16:25:23.099Z",
    "enforceLiteserver": false,
    "enforceCloud": true,
    "globalId": 71944
  }
]
```

---

## 6. Core — Floor

### `GET` All Floors

All floors and areas in the establishment.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/floor` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `visible` | boolean | Include hidden floors (`false` returns all) |
| `amount` | integer | Number of results to return |
| `offset` | integer | Starting position |

**Example:**
```
GET https://{{host}}/resto/rest/core/floor?visible=false&amount=50&offset=0
```

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 14586,
      "name": "Main",
      "capacity": 0,
      "tables": [
        {
          "id": "242232",
          "floorId": 14586,
          "name": "TAB",
          "seats": 0,
          "type": "tab"
        },
        {
          "id": "246111",
          "floorId": 14586,
          "name": "1",
          "seats": 4,
          "type": "restaurant"
        }
      ]
    }
  ],
  "amount": 50,
  "offset": 0,
  "total": 2
}
```

> Table types: `tab`, `restaurant`, `takeaway`, `takeaway_simple`, `bar`, `delivery`

---

### `GET` Single Floor

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/floor/:id` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Floor ID |

**Response `200 OK`:**

```json
{
  "id": 14586,
  "name": "Main",
  "capacity": 100
}
```

---

## 7. Core — Payment Type

### `POST` Create a Payment Type

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/paymenttype` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Request body:**

```json
{
  "description": "Payments via the API",
  "name": "API Payments",
  "typeId": 4
}
```

**Response `201 Created`:** The new payment type ID (integer).

```json
247282
```

---

## 8. Core — Table

### `GET` Tables on a Specific Floor

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/floor/:id/table` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Floor ID |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `visible` | boolean | Default `true`; use `false` to include hidden tables |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": "242232",
      "floorId": 14586,
      "name": "TAB",
      "seats": 0,
      "type": "tab"
    },
    {
      "id": "246111",
      "floorId": 14586,
      "name": "1",
      "seats": 4,
      "type": "restaurant"
    }
  ],
  "amount": 50,
  "offset": 0,
  "total": 22
}
```

---

### `GET` Single Table

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/core/table/:id` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | Table ID |

**Response `200 OK`:**

```json
{
  "id": "246111",
  "floorId": 14586,
  "name": "1",
  "seats": 4,
  "status": "free",
  "type": "restaurant"
}
```

---

## 9. Financial — Receipts

### `GET` Receipts for a Date or Date Range

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/financial/receipt/` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `date` | string | Specific date (`YYYY-MM-DD`). Only used when `from`/`to` are absent. |
| `from` | string | Range start (ISO-8601). Use with `to`. |
| `to` | string | Range end (ISO-8601). Use with `from`. |
| `useModification` | boolean | Filter by modification date instead of creation date. Default `false`. |
| `status` | string | Filter by receipt status. |
| `receiptId` | integer | Return a specific receipt only. |
| `customerId` | integer | Return receipts for a specific customer. |
| `customerUuid` | string | Return receipts by customer UUID (overrides `customerId`). |
| `modifiedSince` | string | Return receipts modified at or after this timestamp (ISO-8601). |
| `condenseItems` | boolean | Merge identical items with quantity > 1. |
| `amount` | integer | Number of results per response. |
| `offset` | integer | Starting record position. |

**Example:**
```
GET https://{{host}}/resto/rest/financial/receipt/?date=2022-03-22
```

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 141154528,
      "sequentialId": 0,
      "sequenceNumber": 1384,
      "uuid": "68109343a9ee11ec83eb56e16acfad1b",
      "parentId": 0,
      "floorId": 14586,
      "tableId": 246124,
      "customerId": 448263,
      "customerUuid": "efc7f7f9764911e8b93b12f9efddaf9e",
      "userId": 128540,
      "status": "DONE",
      "type": "delivery",
      "creationDate": "2022-03-22T14:43:15.499Z",
      "modificationDate": "2022-03-22T14:43:54.184Z",
      "closingDate": "1970-01-01T00:00:00.000Z",
      "deliveryDate": "2022-03-22T14:20:00.000Z",
      "printDate": "2022-03-22T14:43:54.448Z",
      "total": 229.95,
      "totalWithoutTax": 200,
      "numberOfCustomers": 0,
      "currentCourse": 1,
      "items": [
        {
          "id": "3",
          "parentId": "0",
          "productId": "S12",
          "productPLU": "S12",
          "prodId": "839420",
          "productName": "Fries",
          "info": "",
          "amount": 1,
          "unitPrice": 0,
          "unitPriceWithoutVat": 10,
          "totalPrice": 11.5,
          "totalPriceWithoutVat": 10,
          "vatPercentage": 0,
          "deliveryVatPercentage": 0,
          "takeawayVatPercentage": 0,
          "priceTypeId": 0,
          "seat": 0,
          "course": 0,
          "creationDate": "2022-03-22T14:43:15.501Z",
          "sentDate": "2022-03-22T14:43:16.070Z",
          "discountPrice": 0,
          "discountPriceWithoutVat": 0,
          "modifierValues": [
            {
              "id": -1,
              "modifierId": 0,
              "name": "9999999",
              "price": 0,
              "priceWithoutVAT": 0,
              "default": false
            }
          ],
          "taxInfo": {
            "taxClassCode": "default",
            "taxCalculations": [
              { "taxRate": 5, "taxRateCode": "GST" },
              { "taxRate": 9.975, "taxRateCode": "QST" }
            ]
          }
        }
      ],
      "actionItems": [],
      "payments": [
        {
          "id": 143942724,
          "type": "Credit Card",
          "paymentTypeId": 37548,
          "paymentTypeCategoryId": 4,
          "amount": 115,
          "tips": 0,
          "restitution": 0,
          "statusId": 0,
          "deviceId": "",
          "creationDate": "2022-03-22T14:43:15.535Z",
          "modificationDate": "2022-03-22T14:43:15.535Z"
        }
      ],
      "taxInfo": [
        { "taxRate": 9.975, "taxRateCode": "QST", "taxTotal": 19.95 },
        { "taxRate": 5, "taxRateCode": "GST", "taxTotal": 10 }
      ]
    }
  ]
}
```

---

## 10. Inventory — Product

### `GET` All Products

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `query` | string | Filter by product name |
| `amount` | integer | Number of results per response |
| `offset` | integer | Starting record position |

**Example:**
```
GET https://{{host}}/resto/rest/inventory/product?amount=10&offset=10
```

**Response `200 OK`:**

```json
[
  {
    "id": 863823,
    "name": "FF",
    "visible": true,
    "imageLocation": "",
    "kitchenImageLocation": "",
    "cfdImageLocation": "",
    "price": 15,
    "priceWithoutVat": 15,
    "takeawayPrice": 15,
    "takeawayPriceWithoutVat": 15,
    "deliveryPrice": 15,
    "deliveryPriceWithoutVat": 15,
    "productType": "",
    "sku": "S12",
    "taxClass": "default",
    "deliveryTaxClass": "default",
    "takeawayTaxClass": "default",
    "stockAmount": 0,
    "groupIds": [767244, 906349],
    "additions": [],
    "info": ""
  }
]
```

---

### `GET` Single Product

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Product ID |

**Response `200 OK`:**

```json
{
  "id": 839417,
  "name": "Fries",
  "visible": true,
  "imageLocation": "",
  "kitchenImageLocation": "",
  "cfdImageLocation": "",
  "price": 5,
  "priceWithoutVat": 5,
  "takeawayPrice": 5,
  "takeawayPriceWithoutVat": 5,
  "deliveryPrice": 5,
  "deliveryPriceWithoutVat": 5,
  "productType": "",
  "sku": "S12",
  "taxClass": "default",
  "deliveryTaxClass": "default",
  "takeawayTaxClass": "default",
  "stockAmount": 0,
  "groupIds": [767244, 906349],
  "additions": [
    {
      "id": 27407,
      "name": "Note",
      "displayName": "",
      "values": [],
      "multiselect": false,
      "minSelectedAmount": 0,
      "maxSelectedAmount": 1
    },
    {
      "id": 49165,
      "name": "Extra",
      "displayName": "",
      "values": [
        {
          "id": 242044,
          "name": "Tomato",
          "price": 0,
          "priceWithoutVAT": 0,
          "info": "",
          "plu": "",
          "default": false
        }
      ],
      "multiselect": true,
      "minSelectedAmount": 0,
      "maxSelectedAmount": -1
    }
  ],
  "info": ""
}
```

---

### `PATCH` Update Certain Fields of a Product

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Product ID |

**Request body (JSON Patch array):**

```json
[
  {
    "op": "replace",
    "path": "sku",
    "value": "s19"
  }
]
```

**Response `200 OK`:** No response body.

---

### `PUT` Full Product Update

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Product ID |

**Request body (full product object):**

```json
{
  "id": 839417,
  "name": "Fries",
  "visible": true,
  "imageLocation": "",
  "kitchenImageLocation": "",
  "cfdImageLocation": "",
  "price": 5,
  "priceWithoutVat": 5,
  "takeawayPrice": 5,
  "takeawayPriceWithoutVat": 5,
  "deliveryPrice": 5,
  "deliveryPriceWithoutVat": 5,
  "productType": "",
  "sku": "S12",
  "taxClass": "default",
  "deliveryTaxClass": "default",
  "takeawayTaxClass": "default",
  "stockAmount": 0,
  "groupIds": [767244, 906349],
  "additions": [],
  "info": ""
}
```

**Response `200 OK`:** No response body.

---

### `DELETE` Delete a Product

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Product ID |

**Response `200 OK`:** No response body.

---

### `GET` Subproducts of a Product

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId/subproduct` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Product ID |

**Response `200 OK`:**

```json
[
  { "id": 479214, "name": "Nacho", "visible": true, "productType": "" },
  { "id": 479216, "name": "Salad", "visible": true, "productType": "" },
  { "id": 479217, "name": "Soup", "visible": true, "productType": "" }
]
```

---

### `POST` Add a Subproduct (Single)

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId/subproduct/:subProductId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Parent product ID |
| `subProductId` | integer | Subproduct ID |

**Response `200 OK`:** No response body.

---

### `POST` Add Multiple Subproducts

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId/subproduct/` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Parent product ID |

**Request body (array of subproduct IDs):**

```json
[1234567, 12345678, 123456789]
```

**Response `200 OK`:** No response body.

---

### `DELETE` Remove a Subproduct (Single)

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId/subproduct/:subProductId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Parent product ID |
| `subProductId` | integer | Subproduct ID |

**Response `200 OK`:** No response body.

---

### `DELETE` Remove Multiple Subproducts

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/product/:productId/subproduct/` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productId` | integer | Parent product ID |

**Request body (array of subproduct IDs):**

```json
[1234567, 12345678, 123456789]
```

**Response `200 OK`:** No response body.

---

### `GET` Additions (Modifiers)

All available modifiers and add-ons.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/additions` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |

**Response `200 OK`:**

```json
[
  {
    "id": 21129,
    "name": "Other Options",
    "values": [
      { "id": 94140, "name": "SEE SERVER", "price": 0, "priceWithoutVAT": 0, "default": false },
      { "id": 94141, "name": "DO NOT MAKE", "price": 0, "priceWithoutVAT": 0, "default": false },
      { "id": 94142, "name": "HOLD", "price": 0, "priceWithoutVAT": 0, "default": false },
      { "id": 94143, "name": "EXPEDITE", "price": 0, "priceWithoutVAT": 0, "default": false }
    ],
    "multiselect": true,
    "minSelectedAmount": 0,
    "maxSelectedAmount": -1,
    "productLinks": [692302, 598720, 604610]
  },
  {
    "id": 22875,
    "name": "Cooking",
    "displayName": "",
    "values": [
      { "id": 101140, "name": "Rare", "price": 0, "priceWithoutVAT": 0, "default": false },
      { "id": 101141, "name": "Medium", "price": 0, "priceWithoutVAT": 0, "default": false },
      { "id": 101142, "name": "Well done", "price": 0, "priceWithoutVAT": 0, "default": false }
    ],
    "multiselect": false,
    "minSelectedAmount": 0,
    "maxSelectedAmount": 1,
    "productLinks": [598720, 490450]
  }
]
```

---

### `GET` Timed Events

Active timed events — happy hours, scheduled discounts, and similar.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/timed-events` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `includePastEvents` | boolean | Include past events. Default `false`. |

**Response `200 OK`:**

```json
[
  {
    "id": 13573,
    "name": "Happy Hour",
    "type": "Percentage Adjustment",
    "amount": -15,
    "daysOfTheWeek": [true, true, true, true, true, false, false],
    "activeTimeFrom": "13:00",
    "activeTimeTo": "16:00",
    "startDate": "2022-12-09T18:00:00.000Z",
    "endDate": "2023-04-22T20:00:00.000Z",
    "linkedProducts": [
      { "id": 3539713, "sku": "HH1" },
      { "id": 3539714, "sku": "HH2" }
    ],
    "priority": 1
  }
]
```

> `daysOfTheWeek` is a 7-element boolean array (Monday through Sunday).

---

### `GET` Modification Times

When each inventory entity was last updated.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/modification-times` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
{
  "products": "2021-10-06T15:22:24.830Z",
  "productGroups": "2021-10-06T15:22:24.830Z",
  "modifiers": "2021-05-11T19:28:26.658Z",
  "timedEvents": "2018-01-31T22:27:40.858Z"
}
```

---

## 11. Inventory — Product Groups (Categories)

### `GET` All Product Groups

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/productgroup` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `query` | string | Filter by name |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |

**Example:**
```
GET https://{{host}}/resto/rest/inventory/productgroup?amount=5&offset=2
```

**Response `200 OK`:**

```json
[
  {
    "id": 767241,
    "name": "Wine",
    "sequence": 1,
    "visible": true,
    "categoryId": 102720,
    "shortcutCategory": false,
    "products": []
  },
  {
    "id": 767242,
    "name": "Cocktail",
    "sequence": 2,
    "visible": true,
    "categoryId": 102721,
    "shortcutCategory": false,
    "products": []
  }
]
```

---

### `GET` Single Product Group

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/productgroup/:productgroupId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productgroupId` | integer | Product group ID |

**Response `200 OK`:**

```json
{
  "id": 767243,
  "name": "Drinks",
  "sequence": 1,
  "visible": true,
  "categoryId": 102677,
  "shortcutCategory": false,
  "products": []
}
```

---

### `GET` Products in a Product Group

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/productgroup/:productgroupId/product` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productgroupId` | integer | Product group ID |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |
| `query` | string | Filter by product name |

**Response `200 OK`:** *(array of full product objects — same structure as Single Product)*

---

### `POST` Add a Product to a Product Group

Creates a new product and adds it directly to the specified product group.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/inventory/productgroup/:productgroupId/product` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `productgroupId` | integer | Product group ID |

**Request body (full product object):**

```json
{
  "id": 0,
  "name": "Filet Mignon",
  "visible": true,
  "imageLocation": "",
  "kitchenImageLocation": "",
  "cfdImageLocation": "",
  "price": 22.0,
  "priceWithoutVat": 22.0,
  "takeawayPrice": 22.0,
  "takeawayPriceWithoutVat": 22.0,
  "deliveryPrice": 22.0,
  "deliveryPriceWithoutVat": 22.0,
  "productType": "",
  "sku": "M100",
  "taxClass": "default",
  "deliveryTaxClass": "default",
  "takeawayTaxClass": "default",
  "stockAmount": 100,
  "groupIds": [],
  "additions": [
    {
      "id": 27407,
      "name": "Note",
      "displayName": "",
      "values": [],
      "multiselect": false,
      "minSelectedAmount": 0,
      "maxSelectedAmount": 1
    }
  ],
  "info": ""
}
```

**Response `200 OK`:** The newly created product object.

---

## 12. Labour — Clocktime

### `GET` Clocktimes for All Users

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/labour/clocktime` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `minClockInTime` | string | ISO-8601 — earliest clock-in time |
| `maxClockOutTime` | string | ISO-8601 — latest clock-out time |
| `changedSince` | string | ISO-8601 — minimum modification time |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |

**Response `200 OK`:**

```json
[
  {
    "companyId": 32265,
    "userId": 51432,
    "clockInTime": "2018-06-21T13:34:30.091",
    "clockOutTime": "2018-06-21T13:37:14.697",
    "clockInLastModifiedDate": "2019-01-12T17:21:07.108",
    "clockOutLastModifiedDate": "2019-01-12T17:21:07.108",
    "clockInLastModifiedUserId": 51432,
    "clockOutLastModifiedUserId": 51432
  }
]
```

---

### `GET` Clocktime for a Specific User

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/labour/clocktime/:userid` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `userid` | integer | User ID |

**Query parameters:** *(same as All Clocktimes)*

---

## 13. Labour — Employee

### `GET` All Employees

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/labour/employee` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `visible` | boolean | Filter by employee visibility |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |

**Response `200 OK`:**

```json
[
  {
    "companyId": 32265,
    "userId": 51433,
    "visible": false,
    "socialSecurityNumber": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "username": "Trung",
    "telephone": "",
    "gsm": "",
    "street": "",
    "streetNumber": "0",
    "city": "",
    "zip": ""
  }
]
```

---

### `GET` A Specific Employee

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/labour/employee/:userid` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `userid` | integer | User/employee ID |

**Response `200 OK`:**

```json
[
  {
    "companyId": 32265,
    "userId": 51433,
    "visible": false,
    "socialSecurityNumber": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "username": "Trung",
    "telephone": "",
    "gsm": "",
    "street": "",
    "streetNumber": "0",
    "city": "",
    "zip": ""
  }
]
```

---

## 14. Liteserver Conversion

### `GET` Convert a Liteserver Receipt ID

Converts a liteserver receipt ID to its cloud equivalent.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/liteserverConversion/receipt/:liteserverReceiptId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `liteserverReceiptId` | integer/string | The liteserver ID to convert |

**Response `200 OK`:** Cloud receipt ID (integer).

```json
4125706
```

---

## 15. Online Ordering

### `GET` All Online Orders

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/order` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `status` | string | Filter by status: `ACCEPTED`, `DENIED`, `AWAITING_PROCESSING` |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |
| `createdSince` | string | ISO-8601 — only orders created after this date |

**Response `200 OK`:**

```json
[
  {
    "id": 5024124,
    "deliveryDate": "2022-03-22T14:20:00.000Z",
    "creationDate": "2022-03-22T15:13:12.000Z",
    "type": "delivery",
    "receiptId": 141159606,
    "status": "PROCESSED",
    "orderItems": [],
    "orderPayments": [],
    "orderTaxInfo": [],
    "note": "ONLINE ORDER...",
    "numberOfCustomers": 0,
    "tableId": 0,
    "customerId": 448263
  }
]
```

---

### `GET` Single Online Order

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/order/:orderId` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `orderId` | integer | Order ID |

**Response `200 OK`:**

```json
{
  "id": 5024124,
  "deliveryDate": "2022-03-22T14:20:00.000Z",
  "creationDate": "2022-03-22T15:13:12.000Z",
  "type": "delivery",
  "receiptId": 141159606,
  "status": "PROCESSED",
  "orderItems": [
    {
      "id": 14380052,
      "productId": 839420,
      "productPlu": "S12",
      "amount": 10,
      "unitPrice": 0,
      "totalPrice": 10,
      "unitPriceWithoutVat": 10,
      "totalPriceWithoutVat": 10,
      "modifiers": [
        {
          "modifierValueId": 0,
          "description": "9999999",
          "modifierId": 0,
          "price": 0,
          "priceWithoutVat": 0
        }
      ],
      "subitems": []
    }
  ],
  "orderPayments": [
    {
      "id": 5109292,
      "paymentTypeId": 37548,
      "paymentTypeTypeId": 4,
      "amount": 100,
      "tip": 0
    }
  ],
  "orderTaxInfo": [],
  "note": "ONLINE ORDER...",
  "numberOfCustomers": 0,
  "tableId": 0,
  "customerId": 448263,
  "orderPayment": {
    "id": 5109292,
    "paymentTypeId": 37548,
    "paymentTypeTypeId": 4,
    "amount": 100,
    "tip": 0
  }
}
```

---

### `GET` Online Orders for a Customer

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/customer/:customerid/order` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerid` | integer | Customer ID |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `status` | string | Filter by status: `ACCEPTED`, `DENIED`, `AWAITING_PROCESSING` |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |
| `createdSince` | string | ISO-8601 |

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 5024124,
      "deliveryDate": "2022-03-22T14:20:00.000Z",
      "creationDate": "2022-03-22T15:13:12.000Z",
      "type": "delivery",
      "receiptId": 141159606,
      "status": "PROCESSED",
      "orderItems": [],
      "orderPayments": [],
      "orderTaxInfo": [],
      "note": "ONLINE ORDER - Takeout",
      "numberOfCustomers": 0,
      "tableId": 0,
      "customerId": 448263
    }
  ],
  "amount": 2,
  "offset": 0,
  "total": 136
}
```

---

### `GET` A Specific Customer Order

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/customer/:customerid/order/:orderid` |
| **Auth** | Bearer Token |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerid` | integer | Customer ID |
| `orderid` | integer | Order ID |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `status` | string | Filter by status: `ACCEPTED`, `DENIED`, `AWAITING_PROCESSING` |
| `amount` | integer | Number of results |
| `offset` | integer | Starting position |
| `createdSince` | string | ISO-8601 |

**Response `200 OK`:** *(same structure as Single Online Order)*

---

### `POST` Create a New Order (No Establishment)

An order not tied to a specific establishment.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/customer/:customerid/order` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerid` | integer | Customer ID |

**Request body:**

```json
{
  "type": "delivery",
  "description": "Test",
  "deliveryDate": "2022-04-11T14:20Z",
  "note": "ONLINE ORDER - Notes: TEST",
  "customerId": 448263,
  "orderItems": [
    {
      "productId": 839417,
      "amount": 1,
      "totalPrice": 6,
      "totalPriceWithoutVat": 5,
      "unitPriceWithoutVat": 5,
      "unitPrice": 5,
      "modifiers": [
        {
          "modifierId": 49165,
          "modifierValueId": 242044,
          "priceWithoutVat": 1,
          "price": 1,
          "description": "Extra Tomatoes"
        }
      ]
    }
  ],
  "status": "ACCEPTED",
  "orderPayments": [
    {
      "amount": 18.39,
      "paymentTypeId": 37548,
      "paymentTypeTypeId": 4,
      "tip": 0
    }
  ]
}
```

**Response `201 Created`:** The new order ID (integer).

---

### `POST` Create a New Order for an Establishment

An order tied to a specific establishment. Supports referencing products via `productPlu`.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/customer/:customerid/establishmentorder` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerid` | integer | Customer ID |

**Request body:**

```json
{
  "type": "delivery",
  "description": "ONLINE ORDER - Establishment",
  "deliveryDate": "2022-04-11T20:20Z",
  "note": "DO NOT MAKE - TEST",
  "customerId": 448263,
  "companyId": 32265,
  "orderItems": [
    {
      "productPlu": "S12",
      "amount": 1,
      "totalPrice": 11,
      "totalPriceWithoutVat": 11,
      "unitPriceWithoutVat": 11,
      "unitPrice": 11,
      "modifiers": [
        {
          "plu": "ETM28",
          "modifierId": 49165,
          "modifierValueId": 242044,
          "priceWithoutVat": 0,
          "price": 0,
          "description": "+ Artichokes"
        }
      ]
    }
  ],
  "status": "ACCEPTED",
  "orderPayments": [
    {
      "amount": 12.65,
      "paymentTypeId": 37548,
      "paymentTypeTypeId": 4,
      "tip": 5
    }
  ]
}
```

**Response `201 Created`:** The new order ID (integer).

---

### `PATCH` Update an Order

Update payment data on an existing order.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/customer/:customerid/order/:orderId` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Path parameters:**

| Parameter | Type | Description |
|---|---|---|
| `customerid` | integer | Customer ID |
| `orderId` | integer | Order ID |

**Request body:**

```json
{
  "orderPayments": [
    {
      "id": 5266581,
      "amount": 20,
      "paymentTypeId": 37547,
      "paymentTypeTypeId": 1
    }
  ]
}
```

**Response `200 OK`:** Updated order object (same structure as Single Order).

---

### `GET` Available Payment Types

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/paymenttype` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
[
  { "id": 37547, "typeId": 1, "name": "Cash", "description": "" },
  { "id": 37548, "typeId": 4, "name": "Credit Card", "description": "" },
  { "id": 48890, "typeId": 7, "name": "No payment", "description": "" },
  { "id": 40282, "typeId": 1401, "name": "giftCard redeem value" },
  { "id": 48391, "typeId": 2701, "name": "Lightspeed loyalty app payment" },
  { "id": 48392, "typeId": 2703, "name": "Lightspeed loyalty redeem points" }
]
```

---

### `GET` Available Tax Classes

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/taxclass` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
[
  { "id": "prepfood", "description": "Prepared foods/Aliments préparés" },
  { "id": "nonalcoholic", "description": "Non Alcoholic beverages/Boissons Non alcoolisées" },
  { "id": "alcbeverages", "description": "Alcoholic beverages/Boissons alcoolisées" },
  { "id": "default", "description": "TPS+TVQ" },
  { "id": "tps", "description": "GST only/TPS seule" },
  { "id": "notax", "description": "No Tax/Non taxé" }
]
```

---

### `POST` Calculate Tax Totals

Calculate tax totals before submitting an order.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/onlineordering/order-calculations` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Request body:** *(same structure as Create Order)*

```json
{
  "type": "delivery",
  "description": "Test",
  "deliveryDate": "2022-04-11T14:20Z",
  "note": "ONLINE ORDER",
  "customerId": 448263,
  "orderItems": [
    {
      "productId": 827106,
      "amount": 1,
      "totalPrice": 1,
      "totalPriceWithoutVat": 1,
      "unitPriceWithoutVat": 1,
      "unitPrice": 1,
      "modifiers": []
    }
  ]
}
```

**Response `200 OK`:**

```json
{
  "orderItems": [
    {
      "productId": 827106,
      "productPlu": "...",
      "amount": 1,
      "unitPrice": 1,
      "totalPrice": 1.13,
      "unitPriceWithoutVat": 1,
      "totalPriceWithoutVat": 1,
      "modifiers": [],
      "subitems": [],
      "taxInfo": {
        "taxClassCode": "hst",
        "taxCalculations": [
          { "taxRate": 13, "taxRateCode": "HST" }
        ]
      }
    },
    {
      "productId": 1567340,
      "productPlu": "123",
      "amount": 2,
      "unitPrice": 1,
      "totalPrice": 2.1,
      "unitPriceWithoutVat": 1,
      "totalPriceWithoutVat": 2,
      "modifiers": [],
      "subitems": [],
      "taxInfo": {
        "taxClassCode": "default",
        "taxCalculations": [
          { "taxRate": 5, "taxRateCode": "GST" }
        ]
      }
    }
  ],
  "taxInfo": [
    { "taxRate": 5, "taxRateCode": "GST", "taxTotal": 0.10 },
    { "taxRate": 13, "taxRateCode": "HST", "taxTotal": 0.13 }
  ],
  "total": 3.23,
  "totalWithoutTax": 3
}
```

---

## 16. Reservation

### `GET` Reservations

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/reservation` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `date` | string | ISO-8601 — reservation date and time |
| `floorId` | string | Floor ID |
| `tableId` | string | Table ID |
| `modifiedSince` | string | ISO-8601 — last modification time |
| `userId` | string | User who created the reservation |
| `customerId` | string | Customer ID |
| `amount` | integer | Number of results per response |
| `offset` | integer | Starting record position |

**Response:**

```json
{
  "results": [
    {
      "id": 16406,
      "companyId": 33376,
      "startTime": "2018-04-30T23:00:00.000Z",
      "endTime": "2018-05-01T01:00:00.000Z",
      "status": "CONFIRMED",
      "seats": 2,
      "customerId": 599793,
      "floorId": 0,
      "tableId": "0",
      "notes": "T",
      "modificationTime": "2018-04-30T16:06:49.049Z"
    }
  ],
  "amount": 50,
  "offset": 0,
  "total": 3
}
```

> Status values: `CONFIRMED`, `ON_HOLD`, `SEATED`, `TO_CHECK`

---

### `POST` Create a Reservation

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/reservation` |
| **Auth** | Bearer Token |
| **Content-Type** | `application/json` |

**Request body:**

```json
{
  "companyId": 32265,
  "customerId": 448338,
  "startTime": "2022-04-15T22:00:00.000Z",
  "endTime": "2022-04-16T00:00:00.000Z",
  "status": "CONFIRMED",
  "seats": 5,
  "floorId": 14586,
  "tableId": 242232,
  "reservationName": "Lightspeed",
  "telephone": "5149071801"
}
```

**Response `201 Created`:** The new reservation ID (integer).

```json
146354
```

---

### `GET` Reservations with Changed Status

Reservations that changed after a given date.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/reservation/?changedAfter=` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `changedAfter` | string | ISO-8601 — return reservations modified after this date |

**Example:**
```
GET https://{{host}}/resto/rest/reservation/?changedAfter=2021-03-04
```

**Response `200 OK`:**

```json
{
  "results": [
    {
      "id": 21453,
      "companyId": 32265,
      "startTime": "2018-08-22T13:00:00.000Z",
      "endTime": "2018-08-22T14:00:00.000Z",
      "status": "ON_HOLD",
      "seats": 5,
      "customerId": 448338,
      "floorId": 14586,
      "tableId": "246111",
      "modificationTime": "2018-08-22T19:25:56.745Z"
    },
    {
      "id": 146354,
      "companyId": 32265,
      "startTime": "2022-04-15T22:00:00.000Z",
      "endTime": "2022-04-16T00:00:00.000Z",
      "status": "TO_CHECK",
      "seats": 5,
      "customerId": 448338,
      "floorId": 14586,
      "tableId": "242232",
      "reservationName": "Lightspeed",
      "telephone": "5149071801",
      "modificationTime": "2022-04-11T19:09:20.045Z"
    }
  ],
  "amount": 50,
  "offset": 0,
  "total": 8
}
```

---

### `GET` Reservation Configuration

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/reservation/configuration` |
| **Auth** | Bearer Token |

**Response `200 OK`:**

```json
{
  "id": 0,
  "standardTimeslots": [
    {
      "dayOfWeek": "Monday",
      "timeslots": ["08:30", "09:00", "09:30", "10:00", "11:30", "12:00", "17:30", "18:00"]
    }
  ],
  "specialTimeslots": [],
  "holidays": [],
  "reservationDurations": [
    { "name": "Breakfast", "timeFrom": "08:30", "timeTo": "09:00", "durationInMinutes": 390 },
    { "name": "Lunch", "timeFrom": "10:30", "timeTo": "15:30", "durationInMinutes": 90 },
    { "name": "Dinner", "timeFrom": "17:30", "timeTo": "23:00", "durationInMinutes": 120 }
  ]
}
```

---

### `GET` Available Tables

Find open tables for a specific date and time window.

| | |
|---|---|
| **URL** | `https://{{host}}/resto/rest/reservation/freetable` |
| **Auth** | Bearer Token |

**Query parameters:**

| Parameter | Type | Description |
|---|---|---|
| `date` | string | ISO-8601 — date to search |
| `startTime` | string | ISO-8601 — window start |
| `endTime` | string | ISO-8601 — window end |
| `minimumSeats` | string | Minimum seats required |

**Example:**
```
GET https://{{host}}/resto/rest/reservation/freetable
  ?date=2022-04-15
  &startTime=17%3A00%3A00
  &endTime=18%3A00%3A00
  &minimumSeats=4
```

**Response `200 OK`:**

```json
[
  { "id": "246111", "floorId": 14586, "name": "1", "seats": 4, "type": "restaurant" },
  { "id": "246112", "floorId": 14586, "name": "3", "seats": 4, "type": "restaurant" },
  { "id": "246114", "floorId": 14586, "name": "4", "seats": 4, "type": "restaurant" },
  { "id": "246115", "floorId": 14586, "name": "7", "seats": 4, "type": "restaurant" },
  { "id": "246116", "floorId": 14586, "name": "9", "seats": 4, "type": "restaurant" }
]
```

---

## Endpoint Summary

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/resto/oauth2/v1/token` | Initial token request |
| `POST` | `/resto/oauth2/v1/token` | Refresh token |
| `GET` | `/resto/rest/financial/analytics/productsales` | Product sales |
| `GET` | `/resto/rest/core/company` | All companies |
| `GET` | `/resto/rest/core/company/:companyId` | Single company |
| `PATCH` | `/resto/rest/core/company/:companyId` | Update company |
| `GET` | `/resto/rest/core/customer` | All customers |
| `GET` | `/resto/rest/core/customer/:id` | Single customer |
| `POST` | `/resto/rest/core/customer` | Create customer |
| `PUT` | `/resto/rest/core/customer/:id` | Update customer |
| `GET` | `/resto/rest/core/customer/:id` | Customer credit balance |
| `GET` | `/resto/rest/core/customer/:id/creditchange` | Credit change history |
| `POST` | `/resto/rest/core/customer/:id/creditchange` | Add credit change |
| `POST` | `/resto/rest/core/customer/:id/loyaltycard` | Add loyalty card |
| `DELETE` | `/resto/rest/core/customer/:id/loyaltycard/:loyaltyCardUUID` | Remove loyalty card |
| `POST` | `/resto/rest/core/customer/:customerId/activate` | Reactivate customer |
| `GET` | `/resto/rest/core/establishment` | Establishments |
| `GET` | `/resto/rest/core/floor` | All floors |
| `GET` | `/resto/rest/core/floor/:id` | Single floor |
| `POST` | `/resto/rest/core/paymenttype` | Create payment type |
| `GET` | `/resto/rest/core/floor/:id/table` | Tables on a floor |
| `GET` | `/resto/rest/core/table/:id` | Single table |
| `GET` | `/resto/rest/financial/receipt/` | Receipts |
| `GET` | `/resto/rest/inventory/product` | All products |
| `GET` | `/resto/rest/inventory/product/:productId` | Single product |
| `PATCH` | `/resto/rest/inventory/product/:productId` | Partial product update |
| `PUT` | `/resto/rest/inventory/product/:productId` | Full product update |
| `DELETE` | `/resto/rest/inventory/product/:productId` | Delete product |
| `GET` | `/resto/rest/inventory/product/:productId/subproduct` | Subproducts |
| `POST` | `/resto/rest/inventory/product/:productId/subproduct/:subProductId` | Add single subproduct |
| `POST` | `/resto/rest/inventory/product/:productId/subproduct/` | Add multiple subproducts |
| `DELETE` | `/resto/rest/inventory/product/:productId/subproduct/:subProductId` | Remove single subproduct |
| `DELETE` | `/resto/rest/inventory/product/:productId/subproduct/` | Remove multiple subproducts |
| `GET` | `/resto/rest/inventory/additions` | Modifiers/additions |
| `GET` | `/resto/rest/inventory/timed-events` | Timed events |
| `GET` | `/resto/rest/inventory/modification-times` | Modification timestamps |
| `GET` | `/resto/rest/inventory/productgroup` | All product groups |
| `GET` | `/resto/rest/inventory/productgroup/:productgroupId` | Single product group |
| `GET` | `/resto/rest/inventory/productgroup/:productgroupId/product` | Products in group |
| `POST` | `/resto/rest/inventory/productgroup/:productgroupId/product` | Add product to group |
| `GET` | `/resto/rest/labour/clocktime` | All clocktimes |
| `GET` | `/resto/rest/labour/clocktime/:userid` | Clocktime for a user |
| `GET` | `/resto/rest/labour/employee` | All employees |
| `GET` | `/resto/rest/labour/employee/:userid` | Single employee |
| `GET` | `/resto/rest/liteserverConversion/receipt/:liteserverReceiptId` | Convert liteserver receipt ID |
| `GET` | `/resto/rest/onlineordering/order` | All online orders |
| `GET` | `/resto/rest/onlineordering/order/:orderId` | Single online order |
| `GET` | `/resto/rest/onlineordering/customer/:customerid/order` | Orders for a customer |
| `GET` | `/resto/rest/onlineordering/customer/:customerid/order/:orderid` | Specific customer order |
| `POST` | `/resto/rest/onlineordering/customer/:customerid/order` | Create order (no establishment) |
| `POST` | `/resto/rest/onlineordering/customer/:customerid/establishmentorder` | Create establishment order |
| `PATCH` | `/resto/rest/onlineordering/customer/:customerid/order/:orderId` | Update order |
| `GET` | `/resto/rest/onlineordering/paymenttype` | Payment types |
| `GET` | `/resto/rest/onlineordering/taxclass` | Tax classes |
| `POST` | `/resto/rest/onlineordering/order-calculations` | Calculate tax totals |
| `GET` | `/resto/rest/reservation` | Reservations |
| `POST` | `/resto/rest/reservation` | Create reservation |
| `GET` | `/resto/rest/reservation/?changedAfter=` | Changed reservations |
| `GET` | `/resto/rest/reservation/configuration` | Reservation configuration |
| `GET` | `/resto/rest/reservation/freetable` | Available tables |

---

*Documentation sourced from the Lightspeed HQ L-Series API Postman Collection.*
