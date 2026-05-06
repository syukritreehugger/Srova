# Deliverect API Reference (Indonesian / English)

> Referensi lengkap Deliverect API dalam bahasa Indonesia + English, disusun ulang dari OpenAPI 3.1 spec resmi Deliverect (ReadMe).
> Istilah teknis, field, method, dan path tetap dalam bahasa Inggris sesuai sumber resmi.
> Tanggal kompilasi: 2026-04-24.

Deliverect menyediakan sekumpulan REST API dan Webhook untuk integrasi antara kanal pemesanan (food delivery aggregators, POS, KDS, loyalty, CRM, retail, payment, dsb.) dengan restoran/merchant. Setiap API di bawah ini diturunkan langsung dari OpenAPI 3.1 spec resmi.

---

## Daftar Isi (Table of Contents)

- [Introduction](#introduction)
- [Core APIs](#core-apis)
  - [Channel API](#channel-api)
  - [Commerce API](#commerce-api)
  - [POS API](#pos-api)
  - [Dispatch API](#dispatch-api)
  - [Store API](#store-api)
  - [Menu API](#menu-api)
  - [Fulfilment API](#fulfilment-api)
  - [Picking API](#picking-api)
  - [KDS API](#kds-api)
  - [Retail API](#retail-api)
  - [CRM API](#crm-api)
  - [Coupon API](#coupon-api)
  - [Upsells API](#upsells-api)
  - [Loyalty API](#loyalty-api)
  - [Gift Card API](#gift-card-api)
  - [Pay API](#pay-api)
  - [Pay At Table API](#pay-at-table-api)
  - [Partner Manager API](#partner-manager-api)
  - [OAuth2 API](#oauth2-api)
  - [Delete Customer API](#delete-customer-api)
- [Webhooks](#webhooks)
  - [Channel Webhooks](#channel-webhooks)
  - [Commerce Webhooks](#commerce-webhooks)
  - [Delete Customer Webhooks](#delete-customer-webhooks)
  - [Dispatch Webhooks](#dispatch-webhooks)
  - [Gift Cards Webhooks](#gift-cards-webhooks)
  - [KDS Webhooks](#kds-webhooks)
  - [Loyalty Webhooks](#loyalty-webhooks)
  - [Menu API Webhooks](#menu-api-webhooks)
  - [Pay API Webhooks](#pay-api-webhooks)
  - [Pay Platform Webhooks](#pay-platform-webhooks)
  - [POS Webhooks](#pos-webhooks)
  - [Reporting Endpoint Webhook](#reporting-endpoint-webhook)
  - [Store Webhooks](#store-webhooks)

---

## Introduction

Dokumen ini merangkum seluruh permukaan publik Deliverect API (Core APIs) dan Webhook yang dipublikasikan melalui ReadMe. Struktur tiap bagian:

- Deskripsi singkat dari `info.description` pada spec
- Server base URL
- Ringkasan security scheme (Bearer/OAuth2/API Key)
- Daftar endpoint: method + path + summary, parameter, request body, response codes, contoh payload (bila tersedia di spec)

Untuk detail semantik bisnis (misal: alur order, timing webhook, rate limit spesifik) selalu rujuk dokumentasi resmi Deliverect di https://developers.deliverect.com.

**Autentikasi umum:** sebagian besar API menggunakan OAuth 2.0 Client Credentials (lihat bagian [OAuth2 API](#oauth2-api)) yang menghasilkan `Bearer` token untuk dikirim via header `Authorization: Bearer <TOKEN>`. Beberapa Webhook endpoint menerima request dari Deliverect dan diverifikasi melalui signature (lihat spec masing-masing).

---

## Core APIs

## Channel API

ReadMe-friendly import version of the Deliverect Channel API.

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com/`

### POST `/{channelName}/order/{channelLinkId}` — Create Order

<a id="channel-api-post-channelnameorderchannellinkid-create-order"></a>

Create a new order for a linked location.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelOrderId` | string | yes |  |
| `channelOrderDisplayId` | string | yes |  |
| `orderType` | integer | yes |  |
| `courier` | string | yes |  |
| `payment` | object | yes |  |
| `taxes` | object | no |  |
| `items` | array<object> | yes |  |
| `deliveryIsAsap` | boolean | yes |  |
| `decimalDigits` | integer | yes |  |

**Request Example**

```json
{
  "channelOrderId": "TEST16838915628",
  "channelOrderDisplayId": "T8915628",
  "orderType": 2,
  "courier": "restaurant",
  "payment": {
    "amount": 1750,
    "type": 0
  },
  "taxes": {
    "total": 0
  },
  "items": [
    {
      "plu": "P-SATE",
      "name": "Chicken Sate",
      "price": 450,
      "quantity": 1,
      "remark": "well done",
      "subItems": [
        {
          "plu": "RICE-01",
          "name": "White Rice",
          "price": 450,
          "quantity": 1
        }
      ]
    }
  ],
  "deliveryIsAsap": true,
  "decimalDigits": 2
}
```

**Response Codes**

- `200` — Successful response

### POST `/{channelName}/order/{channelLinkId}/` — Cancel Order

<a id="channel-api-post-channelnameorderchannellinkid-cancel-order"></a>

Cancel an existing order.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelOrderId` | string | yes |  |
| `channelOrderDisplayId` | string | yes |  |
| `status` | integer | yes |  |
| `cancellationReason` | string | yes |  |

**Request Example**

```json
{
  "channelOrderId": "CXTDBKMZ-1229",
  "channelOrderDisplayId": "1229",
  "status": 100,
  "cancellationReason": "Customer requests order cancellation"
}
```

**Response Codes**

- `200` — Successful response

### POST `/{channelName}/menuStatus/{_id}` — Menu Update (Async)

<a id="channel-api-post-channelnamemenustatusid-menu-update-async"></a>

Receive menu update callback status.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |
| `_id` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes |  |
| `comment` | string | no |  |

**Request Example**

```json
{
  "status": "ONLINE",
  "comment": "string"
}
```

**Response Codes**

- `200` — Successful response

### POST `/{channelName}/updateStoreStatus/{channelLinkId}` — Update Store Status (open/closed)

<a id="channel-api-post-channelnameupdatestorestatuschannellinkid-update-store-status-openclosed"></a>

Update the status of a store.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes |  |
| `reason` | string | yes |  |

**Request Example**

```json
{
  "status": "closed",
  "reason": "Too many failed orders"
}
```

**Response Codes**

- `200` — Successful response

### POST `/{channelName}/courierUpdate/{channelLinkId}` — Update Courier Status

<a id="channel-api-post-channelnamecourierupdatechannellinkid-update-courier-status"></a>

Update courier or guest delivery status.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelOrderId` | string | yes |  |
| `courierUpdate` | object | yes |  |

**Request Example**

```json
{
  "channelOrderId": "63171d0000000d34b5efe",
  "courierUpdate": {
    "status": 85,
    "arrivalTime": "2022-10-25T16:24:40.482Z",
    "deliveryTime": "2022-10-25T16:54:40.482Z",
    "courier": {
      "firstName": "Joe",
      "lastName": "Driver",
      "phoneNumber": "+44 20 3936 1162"
    }
  }
}
```

**Response Codes**

- `200` — Successful response

### POST `/fulfillment/validate` — Dispatch Availability

<a id="channel-api-post-fulfillmentvalidate-dispatch-availability"></a>

Validate dispatch availability for a delivery location.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelLinkId` | string | yes |  |
| `deliveryLocations` | object | yes |  |

**Request Example**

```json
{
  "channelLinkId": "61bcc34f657cc48c23eb60d5",
  "deliveryLocations": {
    "packageSize": "unknown",
    "name": "None",
    "phone": "None",
    "street": "customer street",
    "streetNumber": "1",
    "city": "customer city",
    "country": "customer country",
    "postalCode": "postal code",
    "deliveryTime": "2024-10-17T10:00:00Z",
    "coordinates": {
      "coordinates": [
        -113,
        -113
      ]
    }
  }
}
```

**Response Codes**

- `200` — Successful response

### GET `/tables/{locationId}` — GET POS tables

<a id="channel-api-get-tableslocationid-get-pos-tables"></a>

Retrieve tables and floors for a location.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes |  |

**Response Codes**

- `200` — Successful response

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `tables` | array<object> |  |
| `floors` | array<object> |  |

**Response Example (200)**

```json
{
  "tables": [
    {
      "id": "table#1",
      "name": "Table #1",
      "floorId": "restaurant",
      "seats": 6
    }
  ],
  "floors": [
    {
      "id": "restaurant",
      "name": "Restaurant"
    }
  ]
}
```

### GET `/allAllegens` — Allergens and tags

<a id="channel-api-get-allallegens-allergens-and-tags"></a>

Get allergens and tags existing in Deliverect.

**Response Codes**

- `200` — Successful response

**Response Example (200)**

```json
[
  {
    "name": "Alcohol",
    "allergenId": 1
  },
  {
    "name": "Halal",
    "allergenId": 2
  },
  {
    "name": "Kosher",
    "allergenId": 3
  }
]
```

### POST `/updateStoreStatus` — Update Store Status

<a id="channel-api-post-updatestorestatus-update-store-status"></a>

Inform Deliverect of any change to a store's status.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes |  |
| `reason` | string | yes |  |

**Request Example**

```json
{
  "status": "closed",
  "reason": "Too many failed orders"
}
```

**Response Codes**

- `200` — Successful response

### POST `/{channelName}/updateRating` — Order Rating Update

<a id="channel-api-post-channelnameupdaterating-order-rating-update"></a>

Update rating for a previously placed order.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelName` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelOrderId` | string | yes |  |
| `orderDate` | string | yes |  |
| `channelLinkId` | string | yes |  |
| `rating` | array<object> | yes |  |

**Request Example**

```json
{
  "channelOrderId": "CXTDBKMZ-1229",
  "orderDate": "2021-04-13T11:53:34.453Z",
  "channelLinkId": "606d8489fcd8eddf13b121a6",
  "rating": [
    {
      "reason": 10000,
      "rating": 5,
      "comment": "Food was amazing.",
      "subject": 1
    },
    {
      "rating": 5,
      "subject": 2
    }
  ]
}
```

**Response Codes**

- `200` — Successful response


---

## Commerce API

Simplify online ordering for your restaurant or grocery store with Deliverect. Our platform seamlessly integrates multiple online ordering systems, consolidating orders from all channels into one easy-to-manage dashboard.

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### POST `/oauth/token` — Machine 2 Machine Access Token

<a id="commerce-api-post-oauthtoken-machine-2-machine-access-token"></a>

**Response Codes**

- `200` — OK
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "access_token": "ey**-**-Q",
  "expires_at": 1620899002,
  "token_type": "Bearer",
  "scope": "genericPOS provisioning"
}
```

### GET `/commerce/{accountId}/menus` — Get Root Menu(s)

<a id="commerce-api-get-commerceaccountidmenus-get-root-menus"></a>

This endpoint returns a list of menus associated with the account's master location. These menus are store agnostic and typically hold enough data to display as first entry experience.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/commerce/{accountId}/menus \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/commerce/{accountId}/stores` — Get Stores

<a id="commerce-api-get-commerceaccountidstores-get-stores"></a>

Returns the list of stores. A store represents a unique ordering experience from a specific location.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `page` | query | integer | no | Page to be returned |
| `size` | query | integer | no | Number of stores to be returned per page - Max: 100 |
| `latitude` | query | number | no | Reference latitude coordinate to calculate store distance |
| `longitude` | query | number | no | Reference longitude coordinate to calculate store distance |
| `sort` | query | string | no |  |
| `fulfillmentType` | query | string | no | Fulfillment type(s) available on the channelLink. e.g: delivery,eatIn |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "total": 1,
  "page": 1,
  "size": 50,
  "items": [
    {
      "id": "65eee6a9984a1bc1b9637c59",
      "channelLinkId": "65eee6a9984a1bc1b9637c59",
      "name": "Store Name",
      "currency": "EUR",
      "address": {
        "source": "1 Main street D13 R2P6 Ghent VOV",
        "coordinates": [
          3.73398891371018,
          51.0311233802278
        ],
        "country": "BE",
        "city": "Ghent",
        "stateOrProvince": "VOV"
      },
      "openingHours": {
        "timezone": "Europe/Brussels",
        "dayTimeRanges": [
          {
            "dayOfWeek": 1,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 2,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 3,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 4,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 5,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 6,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          },
          {
            "dayOfWeek": 7,
            "startTime": "00:00:00",
            "endTime": "23:59:00"
          }
        ]
      },
      "distance": 1235,
      "taxExclusive": false,
      "status": "open",
      "contact": {
        "firstName": "John",
        "lastName": "Doe",
        "phoneNumber": "+32411111111",
        "email": "john.doe@acme.com"
      },
      "fulfillmentTypes": [
        "pickup",
        "delivery",
        "eatIn"
      ]
    }
  ]
}
```

### GET `/commerce/{accountId}/stores/{storeId}` — Get Store

<a id="commerce-api-get-commerceaccountidstoresstoreid-get-store"></a>

A store represents a unique ordering experience from a specific location.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `storeId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `name` | string |  |
| `currency` | string |  |
| `address` | object |  |
| `openingHours` | object |  |
| `distance` | integer |  |
| `taxExclusive` | boolean |  |
| `contact` | object |  |
| `fulfillmentTypes` | array<string> |  |
| `status` | string |  |

**Response Example (200)**

```json
{
  "id": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "name": "Store Name",
  "currency": "EUR",
  "address": {
    "source": "1 Main street D13 R2P6 Ghent VOV",
    "coordinates": [
      3.73398891371018,
      51.0311233802278
    ],
    "country": "BE",
    "city": "Ghent",
    "stateOrProvince": "VOV"
  },
  "openingHours": {
    "timezone": "Europe/Brussels",
    "dayTimeRanges": [
      {
        "dayOfWeek": 1,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 2,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 3,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 4,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 5,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 6,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      },
      {
        "dayOfWeek": 7,
        "startTime": "00:00:00",
        "endTime": "23:59:00"
      }
    ]
  },
  "distance": 1235,
  "taxExclusive": false,
  "contact": {
    "firstName": "John",
    "lastName": "Doe",
    "phoneNumber": "+32411111111",
    "email": "john.doe@acme.com"
  },
  "fulfillmentTypes": [
    "pickup",
    "delivery",
    "eatIn"
  ],
  "status": "open"
}
```

### GET `/commerce/{accountId}/stores/{storeId}/menus` — Get Store Menu(s)

<a id="commerce-api-get-commerceaccountidstoresstoreidmenus-get-store-menus"></a>

Returns the menus available for a specific store.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `storeId` | path | string | yes | The storeId here is the channelLinkId |
| `fulfillmentType` | query | string | no | Possible values are; delivery \| pickup \| curbside \| eatIn |

**Response Codes**

- `200` — 200
- `400` — 400
- `500` — Internal Server Error

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/commerce/{accountId}/stores/{storeId}/menus \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/commerce/{accountId}/baskets` — Create Basket

<a id="commerce-api-post-commerceaccountidbaskets-create-basket"></a>

This endpoint creates a Basket for the store.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `storeId` | string | yes | ID of the store the basket is happening for. |
| `fulfillment` | object | no |  |
| `items` | array<object> | no |  |
| `customer` | object | no |  |

**Request Example**

```json
{
  "storeId": "67********************2c",
  "fulfillment": {
    "type": "pickup",
    "time": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"
  },
  "items": [
    {
      "menuId": "62********************3w",
      "plu": "PR1234",
      "quantity": 2,
      "note": "extra salt please",
      "subItems": [
        {
          "plu": "MOD123",
          "customizationPlu": "CATOPT3",
          "quantity": 1
        }
      ]
    },
    {
      "menuId": "62********************3w",
      "plu": "PR5678",
      "quantity": 1
    }
  ],
  "customer": {
    "name": "John Doe",
    "companyName": "ACME",
    "phoneNumber": "+3211223344",
    "email": "john.doe@acme.com",
    "externalId": "crm-id-1234",
    "tin": "123456789"
  }
}
```

**Response Codes**

- `200` — 200
- `422` — Unprocessable Entity

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `charges` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "65********************e2",
  "channel": 20000,
  "category": {
    "type": "restaurant"
  },
  "currency": "USD",
  "taxExclusive": true,
  "status": "open",
  "items": [
    {
      "id": "65********************27",
      "menuId": "64********************7b",
      "plu": "QS-01",
      "name": "Classic Quesadilla + Drink",
      "note": "as much cheese as possible!",
      "quantity": 1,
      "price": 529,
      "gross": 698,
      "taxes": [
        {
          "rate": 7000,
          "name": "GST",
          "amount": 49
        }
      ],
      "net": 747,
      "subItems": [
        {
          "customizationPlu": "MOD-01",
          "plu": "DRNK-01",
          "name": "Coca Cola",
          "quantity": 1,
          "price": 169,
          "note": "Extra cold please",
          "subItems": []
        }
      ],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "id": "691327c5d367f4588f9482fb",
      "menuId": "6902550da160cca419af2469",
      "plu": "645611577",
      "name": "Chocolate Chip Cookie",
      "quantity": 2,
      "price": 159,
      "gross": 318,
      "taxes": [],
      "net": 318,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0,
      "note": "In seperate bag please"
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "chargesTotal": 0,
    "taxTotal": 56,
    "tipTotal": 0,
    "subTotal": 1016,
    "total": 1065
  },
  "customer": {
    "name": "John Doe",
    "companyName": "ACME",
    "phoneNumber": "+3211223344",
    "email": "john.doe@acme.com",
    "externalId": "crm-id-1234",
    "tin": "123456789"
  },
  "fulfillment": {
    "type": "pickup",
    "time": null
  },
  "taxes": [
    {
      "name": "SALES_TAX",
      "amount": 49
    }
  ],
  "discounts": [],
  "charges": {
    "serviceCharge": {
      "value": 0,
      "taxRate": 0,
      "gross": 0,
      "tax": 0,
      "net": 0,
      "type": "fixed"
    },
    "bagFee": {
      "value": 0,
      "taxRate": 0,
      "gross": 0,
      "tax": 0,
      "net": 0
    },
    "deliveryFee": {
      "value": 0,
      "taxRate": 0,
      "gross": 0,
      "tax": 0,
      "net": 0
    },
    "taxTotal": 0,
    "netTotal": 0,
    "grossTotal": 0
  },
  "created": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "updated": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "deleted": false,
  "etag": "f4c8f20eeb23206c2bc8cf66c2843a6efaa3eaaf",
  "accountId": "66********************d1",
  "storeId": "67********************a8",
  "channelLinkId": "67********************a8",
  "channelOrderId": null,
  "channelOrderDisplayId": null
}
```

### GET `/commerce/{accountId}/baskets/{basketId}` — Get Basket

<a id="commerce-api-get-commerceaccountidbasketsbasketid-get-basket"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `charges` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "6643782d0c1914c93a846834",
  "created": "2024-05-14T14:41:49.738000+00:00",
  "updated": "2024-05-14T14:41:49.754000+00:00",
  "deleted": false,
  "etag": "f4c8f20eeb23206c2bc8cf66c2843a6efaa3eaaf",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 2,
      "note": "extra salt please",
      "price": 1500,
      "gross": 3800,
      "taxes": [],
      "net": 3800,
      "subItems": [
        {
          "customizationPlu": "MOD-01",
          "plu": "DRNK-01",
          "name": "Coca Cola",
          "quantity": 1,
          "price": 400,
          "subItems": []
        }
      ],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 1,
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "chargesTotal": 0,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 5300
  },
  "customer": {
    "name": "John Doe",
    "companyName": "ACME",
    "phoneNumber": "+3211223344",
    "email": "john.doe@acme.com",
    "externalId": "crm-id-1234"
  },
  "fulfillment": {
    "type": "pickup"
  },
  "charges": {
    "taxTotal": 0,
    "netTotal": 0,
    "grossTotal": 0,
    "serviceCharge": {
      "type": "fixed",
      "value": 0,
      "taxRate": 0,
      "gross": 0
    },
    "bagFee": {
      "type": "fixed",
      "value": 0,
      "taxRate": 0,
      "gross": 0
    },
    "deliveryFee": {
      "type": "fixed",
      "value": 0,
      "taxRate": 0,
      "gross": 0
    }
  },
  "taxes": [],
  "discounts": []
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/fulfillment` — Update Basket - Fulfillment Details

<a id="commerce-api-patch-commerceaccountidbasketsbasketidfulfillment-update-basket---fulfillment-details"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | object | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` |  |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "63********************a7",
  "created": "2024-05-14T14:41:49.738000+00:00",
  "updated": "2024-05-14T14:41:49.754000+00:00",
  "deleted": false,
  "etag": "f4c8f20eeb23206c2bc8cf66c2843a6efaa3eaaf",
  "accountId": "63********************g6",
  "storeId": "63********************b3",
  "channelLinkId": "63********************b3",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "menuId": "63********************42",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 2,
      "price": 1500,
      "gross": 3800,
      "taxes": [],
      "net": 3800,
      "subItems": [
        {
          "customizationPlu": "MOD-01",
          "plu": "DRNK-01",
          "name": "Coca Cola",
          "quantity": 1,
          "price": 400,
          "subItems": []
        }
      ],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "menuId": "63********************42",
      "plu": "P-BURG-CHK",
      "name": "Chicken Burger",
      "quantity": 1,
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 5300
  },
  "customer": null,
  "fulfillment": {
    "type": "eatIn",
    "spot": "TABLE-1"
  },
  "taxes": [],
  "discounts": []
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/customer` — Update Basket - Customer

<a id="commerce-api-patch-commerceaccountidbasketsbasketidcustomer-update-basket---customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | no |  |
| `companyName` | string | no |  |
| `email` | string | no |  |
| `phoneNumber` | string | no |  |
| `externalId` | string | no |  |
| `tin` | string | no |  |

**Request Example**

```json
{
  "name": "John Doe",
  "companyName": "ACME",
  "phoneNumber": "+3211223344",
  "email": "john.doe@acme.com",
  "externalId": "crm-id-1234",
  "tin": "123456789",
  "loyaltyProviderCustomerId": "17dh89"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "6643782d0c1914c93a846834",
  "created": "2024-05-14T14:41:49.738000+00:00",
  "updated": "2024-05-14T14:41:49.754000+00:00",
  "deleted": false,
  "etag": "f4c8f20eeb23206c2bc8cf66c2843a6efaa3eaaf",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 2,
      "price": 1500,
      "gross": 3800,
      "taxes": [],
      "net": 3800,
      "subItems": [
        {
          "customizationPlu": "MOD-01",
          "plu": "DRNK-01",
          "name": "Coca Cola",
          "quantity": 1,
          "price": 400,
          "subItems": []
        }
      ],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 1,
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 5300
  },
  "customer": {
    "name": "John Doe",
    "companyName": "ACME",
    "phoneNumber": "+3211223344",
    "email": "john.doe@acme.com",
    "externalId": "crm-id-1234",
    "tin": "123456789",
    "loyaltyProviderCustomerId": "17dh89"
  },
  "fulfillment": {
    "type": "pickup"
  },
  "taxes": [],
  "discounts": []
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/items` — Update Basket - Item(s)

<a id="commerce-api-patch-commerceaccountidbasketsbasketiditems-update-basket---items"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | array<object> | yes |  |

**Request Example**

```json
[
  {
    "plu": "3F_COMBO",
    "quantity": 3,
    "menuId": "681a721c98b4e6d4ec09d83d",
    "note": "No Salad"
  }
]
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` |  |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "663dff85512e27ec790fe713",
  "created": "2024-05-10T11:05:41.194000+00:00",
  "updated": "2024-05-10T11:05:41.226000+00:00",
  "deleted": false,
  "etag": "4f95244e98557fec08e449e767afb340842cf4f2",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "plu": "PLU-1",
      "quantity": 1,
      "note": "extra salt please",
      "menuId": "662fa50c9ddcfc5397580587",
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "plu": "PLU-2",
      "quantity": 1,
      "menuId": "662fa50c9ddcfc5397580587",
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    },
    {
      "plu": "PLU-3",
      "quantity": 1,
      "menuId": "662fa50c9ddcfc5397580587",
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 4500
  },
  "customer": null,
  "fulfillment": {
    "type": "pickup"
  },
  "taxes": [],
  "discounts": []
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/discounts` — Update Basket - Discount(s)

<a id="commerce-api-patch-commerceaccountidbasketsbasketiddiscounts-update-basket---discounts"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | array<object> | yes | dicounts |

**Request Example**

```json
[
  {
    "type": "order_flat_off",
    "provider": "coupon",
    "amount": 100,
    "name": "CONGRATS! HERE IS 1 EUR OFF"
  }
]
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "6643782d0c1914c93a846834",
  "created": "2024-05-14T14:41:49.738000+00:00",
  "updated": "2024-05-14T15:19:37.173000+00:00",
  "deleted": false,
  "etag": "c2046a6b9c21b9ebb38f8094c0a3ca02240742b3",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 1,
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1450,
      "subItems": [],
      "discounts": [
        {
          "referenceId": 1,
          "amount": 50
        }
      ],
      "discountTotal": 50
    }
  ],
  "payment": {
    "tips": [],
    "discountsTotal": 50,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 1450
  },
  "customer": {
    "name": "Test",
    "companyName": "Company LTDA",
    "phoneNumber": "12345",
    "email": "test@email.com"
  },
  "fulfillment": {
    "type": "pickup"
  },
  "taxes": [],
  "discounts": [
    {
      "type": "order_flat_off",
      "referenceId": 1,
      "amount": 50,
      "provider": "restaurant",
      "name": "CONGRATS! HERE'S 5 EUR OFF"
    }
  ]
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/payment` — Update Basket - Tips

<a id="commerce-api-patch-commerceaccountidbasketsbasketidpayment-update-basket---tips"></a>

Sets the desired tip(s) and recalculates the basket price.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `tips` | array<object> | no |  |

**Request Example**

```json
{
  "tips": [
    {
      "amount": 100,
      "type": "restaurant"
    }
  ]
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "6643782d0c1914c93a846834",
  "created": "2024-05-14T14:41:49.738000+00:00",
  "updated": "2024-05-14T15:28:33.188000+00:00",
  "deleted": false,
  "etag": "d8ac2d392f6a89d80376174d19cbe84b8b65d637",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [
    {
      "menuId": "62d7f77f64c95193cc29aa91",
      "plu": "STK-01",
      "name": "Delicious Steak Frites",
      "quantity": 1,
      "price": 1500,
      "gross": 1500,
      "taxes": [],
      "net": 1500,
      "subItems": [],
      "discounts": [],
      "discountTotal": 0
    }
  ],
  "payment": {
    "tips": [
      {
        "amount": 100,
        "type": "restaurant"
      }
    ],
    "discountsTotal": 0,
    "taxTotal": 0,
    "tipTotal": 100,
    "total": 1600
  },
  "customer": {
    "name": "Test",
    "companyName": "Company LTDA",
    "phoneNumber": "12345",
    "email": "test@email.com"
  },
  "fulfillment": {
    "type": "pickup"
  },
  "taxes": [],
  "discounts": []
}
```

### PATCH `/commerce/{accountId}/baskets/{basketId}/charges` — Update Basket - Charges

<a id="commerce-api-patch-commerceaccountidbasketsbasketidcharges-update-basket---charges"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `basketId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | array<object> | yes | charges |

**Request Example**

```json
[
  {
    "chargeType": "serviceCharge",
    "type": "fixed",
    "value": 500,
    "taxRate": 0
  }
]
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `channel` | integer |  |
| `channelOrderId` |  |  |
| `channelOrderDisplayId` |  |  |
| `currency` | string |  |
| `taxExclusive` | boolean |  |
| `status` | string |  |
| `items` | array<object> |  |
| `payment` | object |  |
| `customer` | object |  |
| `fulfillment` | object |  |
| `taxes` | array<object> |  |
| `discounts` | array<object> |  |
| `charges` | object |  |

**Response Example (200)**

```json
{
  "id": "6846dec388f9ddb3b0147c33",
  "created": "2025-06-09T13:16:51.472000+00:00",
  "updated": "2025-06-09T13:17:18.219000+00:00",
  "deleted": false,
  "etag": "38654a00ccfee91784411382ca379dd73fe05121",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "channel": 20000,
  "channelOrderId": null,
  "channelOrderDisplayId": null,
  "currency": "EUR",
  "taxExclusive": false,
  "status": "open",
  "items": [],
  "payment": {
    "tips": [],
    "discountsTotal": 0,
    "chargesTotal": 1000,
    "taxTotal": 0,
    "tipTotal": 0,
    "total": 1000
  },
  "customer": {
    "name": "Test",
    "companyName": "Company LTDA",
    "phoneNumber": "12345",
    "email": "test@email.com",
    "externalId": "ext_458d3f2432858ffdfs",
    "loyaltyProviderCustomerId": null
  },
  "fulfillment": {
    "type": "pickup",
    "time": null
  },
  "taxes": [],
  "discounts": [],
  "charges": {
    "serviceCharge": {
      "value": 500,
      "taxRate": 0,
      "gross": 0,
      "tax": 0,
      "net": 0,
      "type": "fixed"
    },
    "bagFee": {
      "value": 300,
      "taxRate": 0,
      "gross": 300,
      "tax": 0,
      "net": 300
    },
    "deliveryFee": {
      "value": 700,
      "taxRate": 0,
      "gross": 700,
      "tax": 0,
      "net": 700
    },
    "taxTotal": 0,
    "netTotal": 1000,
    "grossTotal": 1000
  }
}
```

### POST `/commerce/{accountId}/v2/checkouts` — Checkout Basket

<a id="commerce-api-post-commerceaccountidv2checkouts-checkout-basket"></a>

Creates a checkout session from a basket, leading to a payment intent based on the provided gateway.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `basket` | object | yes |  |
| `note` | string | no |  |
| `payments` | array<object> | yes |  |
| `order` | object | no |  |

**Response Codes**

- `200` — 200
- `422` — 422

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `deleted` | boolean |  |
| `etag` | string |  |
| `accountId` | string |  |
| `storeId` | string |  |
| `status` | string |  |
| `basket` | object |  |
| `payments` | array<object> |  |
| `order` | object |  |

**Response Example (200)**

```json
{
  "id": "694138133662b46bddf06e70",
  "created": "2025-12-16T10:44:35.107000",
  "updated": "2025-12-16T10:44:51.016000+00:00",
  "deleted": false,
  "etag": "2e94b59d6155094830af3362502fddc0cd51ef2f",
  "accountId": "668cd58b6da5e4cec26f1f35",
  "channelLinkId": "6911e9be1531637e9cf80a5f",
  "storeId": "6911e9be1531637e9cf80a5f",
  "status": "open",
  "failureReason": null,
  "basket": {
    "id": "694138103662b46bddf06e6e",
    "channel": 10165,
    "category": {
      "type": "restaurant"
    },
    "currency": "AED",
    "taxExclusive": false,
    "status": "open",
    "items": [
      {
        "id": "694138103662b46bddf06e6f",
        "menuId": "6882366cf04ece702e6661c8",
        "plu": "STK-01",
        "name": "Delicious Steak Frites",
        "quantity": 1,
        "price": 1500,
        "gross": 1500,
        "taxes": [],
        "net": 1500,
        "subItems": [
          {
            "customizationPlu": "MOD-01",
            "plu": "COOK-01",
            "name": "Rare",
            "quantity": 1,
            "price": 0,
            "subItems": [],
            "note": null
          },
          {
            "customizationPlu": "MOD-02",
            "plu": "SI-01",
            "name": "Fries",
            "quantity": 1,
            "price": 0,
            "subItems": [],
            "note": null
          }
        ],
        "discounts": [],
        "discountTotal": 0,
        "note": "ITEM LEVEL NOTE"
      }
    ],
    "payment": {
      "tips": [],
      "discountsTotal": 0,
      "chargesTotal": 0,
      "taxTotal": 0,
      "tipTotal": 0,
      "subTotal": 1500,
      "total": 1500
    },
    "customer": {
      "name": "John Doe",
      "companyName": "ACME",
      "phoneNumber": "+32474081356",
      "email": "john.doe@acme.com",
      "externalId": "custom_channel_id_12345",
      "loyaltyProviderCustomerId": null,
      "tin": null
    },
    "fulfillment": {
      "type": "eatIn",
      "spot": "TABLE-1"
    },
    "taxes": [],
    "discounts": [],
    "charges": {
      "serviceCharge": {
        "value": 0,
        "taxRate": 0,
        "gross": 0,
        "tax": 0,
        "net": 0,
        "type": "fixed"
      },
      "bagFee": {
        "value": 0,
        "taxRate": 0,
        "gross": 0,
        "tax": 0,
        "net": 0
      },
      "deliveryFee": {
        "value": 0,
        "taxRate": 0,
        "gross": 0,
        "tax": 0,
        "net": 0
      },
      "taxTotal": 0,
      "netTotal": 0,
      "grossTotal": 0
    }
  },
  "payment": {
    "id": "694138133662b46bddf06e71",
    "gateway": 1,
    "status": "authorized",
    "action": {
      "type": "offline",
      "paid": true
    },
    "metadata": {}
  },
  "order": {
    "channelOrderId": "5f6fb9fa-71ad-4758-8118-b9966d950105",
    "channelOrderDisplayId": "5f6fb9fa",
    "status": null
  }
}
```

### GET `/commerce/{accountId}/v2/checkouts/{checkoutId}` — Get Checkout

<a id="commerce-api-get-commerceaccountidv2checkoutscheckoutid-get-checkout"></a>

Returns a checkout session by ID. This can be used to poll the status of a checkout session providing order placement details.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `checkoutId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": "6643861d0c1914c93a846b78",
  "created": "2024-05-14T15:41:17.518000+00:00",
  "updated": "2024-05-14T15:41:18.449000+00:00",
  "deleted": false,
  "etag": "f225b232489659ed4dc0f17580f4f0200f4ca3ba",
  "accountId": "65c35d109a19b819b7cf78d8",
  "storeId": "65eee6a9984a1bc1b9637c59",
  "channelLinkId": "65eee6a9984a1bc1b9637c59",
  "status": "completed",
  "basket": {
    "currency": "EUR",
    "taxExclusive": false,
    "items": [
      {
        "menuId": "62d7f77f64c95193cc29aa91",
        "plu": "STK-01",
        "name": "Delicious Steak Frites",
        "quantity": 1,
        "price": 1500,
        "gross": 1500,
        "taxes": [],
        "net": 1500,
        "subItems": [],
        "discounts": [],
        "discountTotal": 0
      }
    ],
    "payment": {
      "tips": [
        {
          "amount": 100,
          "type": "restaurant"
        }
      ],
      "discountsTotal": 0,
      "taxTotal": 0,
      "tipTotal": 100,
      "total": 1600
    },
    "customer": {
      "name": "Test",
      "companyName": "Company LTDA",
      "phoneNumber": "12345",
      "email": "test@email.com",
      "tin": "123456789"
    },
    "fulfillment": {
      "type": "pickup"
    },
    "taxes": [],
    "discounts": []
  },
  "payment": {
    "id": "62d7f77f64c95193cc29aa91",
    "status": "authorized",
    "action": {
      "type": "redirect",
      "url": "http://payment.acme.com/1234"
    }
  },
  "order": {
    "channelOrderId": "6643861d0c1914c93a846b79",
    "channelOrderDisplayId": "01277571"
  }
}
```


---

## POS API

ReadMe-friendly subset of the Deliverect Restaurant POS API containing only the selected REST endpoints. Webhooks and unsupported editor features were removed for easier import and editing.

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### POST `/updatePreparationTime` — Update order preparation time

<a id="pos-api-post-updatepreparationtime-update-order-preparation-time"></a>

Some channels support the option to change the time an order can be picked up or delivered. If completed on time, this can optimize the order flow in the kitchen and the pickup procedure for drivers

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order` | string | yes | Deliverect order ID |
| `minutes` | integer | yes | New preparation time in minutes |

**Response Codes**

- `200` — OK
- `400` — Bad request

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/updatePreparationTime \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/updateBill/{locationId}` — Bill update

<a id="pos-api-post-updatebilllocationid-bill-update"></a>

Deliver the details of a bill closed on the POS to Deliverect.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes | Deliverect location ID |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | no |  |
| `status` | integer | no |  |
| `tableId` | string | no |  |
| `createdAt` | string | no |  |
| `lastUpdated` | string | no |  |
| `closedAt` | string | no |  |
| `decimalDigits` | integer | no |  |
| `discountTotal` | integer | no |  |
| `discounts` | array<object> | no |  |
| `surchargesTotal` | integer | no |  |
| `surcharges` | array<object> | no |  |
| `taxTotal` | integer | no |  |
| `taxes` | array<object> | no |  |
| `total` | integer | no |  |
| `totalDue` | integer | no |  |
| `items` | array<object> | no |  |
| `payments` | array<object> | no |  |

**Response Codes**

- `200` — Bill queued for processing
- `400` — Bad request

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/updateBill/{locationId} \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/productAndCategories` — Insert/update products and categories

<a id="pos-api-post-productandcategories-insertupdate-products-and-categories"></a>

Insert/update Products The 'Source of Truth' in terms of product data and structure is almost always sourced from an integrated POS system. When a POS successfully syncs products with their unique identifiers (PLUs), these will be selected by the customer for inclusion in their menu(s). In turn, orders will be created with these same PLUs and injected into the POS

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `accountId` | string | yes | The customer account ID in Deliverect |
| `locationId` | string | yes |  |
| `products` | array<object> | yes |  |
| `categories` | array<object> | yes |  |
| `priceLevels` | array<object> | no |  |

**Response Codes**

- `200` — 200
- `403` — 403
- `404` — 404

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `products` | object |  |
| `modifiers` | object |  |
| `modifierGroups` | object |  |
| `bundles` | object |  |
| `priceLevels` | integer |  |
| `warnings` | integer |  |
| `errors` | integer |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/productAndCategories \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/orderStatus/{orderId}` — Update order status

<a id="pos-api-post-orderstatusorderid-update-order-status"></a>

This endpoint allows a POS to update the status of an order at each stage in its preparation. It also allows for the modification of the pickupTime

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | Deliverect order ID |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderId` | string | yes |  |
| `status` | integer | yes | Order status code |
| `reason` | string | no |  |
| `timeStamp` | string | no |  |
| `receiptId` | string | no |  |
| `pickupTime` | string | no | Optional updated pickup time |
| `deliveryTime` | string | no | Optional delivery time |

**Response Codes**

- `200` — OK
- `400` — error

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/orderStatus/{orderId} \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```


---

## Dispatch API

We team up with the best global third-party delivery apps, seamlessly consolidating all your channels into one simple system.

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### POST `/oauth/token` — Machine 2 Machine Access Token

<a id="dispatch-api-post-oauthtoken-machine-2-machine-access-token"></a>

**Response Codes**

- `200` — OK
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "access_token": "ey**-**-Q",
  "expires_at": 1620899002,
  "token_type": "Bearer",
  "scope": "genericPOS provisioning"
}
```

### POST `/fulfillment/generic/events` — Update delivery

<a id="dispatch-api-post-fulfillmentgenericevents-update-delivery"></a>

This webhook allows to persist updates from third party delivery systems to Deliverect. Currently updates to following delivery information are supported. See examples for technical details. - delivery status - pickup time & eta - delivery time & eta - courier information ##### Delivery job statuses: Following delivery job statuses exist in deliverect: | Status name | Integer value | |-|-| | `IN_DELIVERY` | 80 | | `EN_ROUTE_TO_PICKUP` | 83 | | `ARRIVED_AT_PICKUP` | 85 | | `EN_ROUTE_TO_DROPOFF` | 87 | | `ARRIVED_AT_DROPOFF` | 89 | | `DELIVERED` | 90 | ##### NOTE Please note, that here and later all dates and times, coming from/to Deliverect are UTC.

**Response Codes**

- `200` — 200
- `default` — default

**Response Example (200)**

```json
"OK"
```

### POST `/fulfillment/cancel` — Cancel Delivery

<a id="dispatch-api-post-fulfillmentcancel-cancel-delivery"></a>

**Request Example**

```json
{
  "deliveryJobId": "6220a195af10fe8e6121257f",
  "deliveryFeeCharged": 4500,
  "reasonTag": "CUSTOMER_UNRESPONSIVE",
  "extraDescription": "Customer did not pickup the phone nor showed up in door"
}
```

**Response Codes**

- `200` — Ok


---

## Store API

Deliverect allows restaurants to directly connect channels like UberEats, Takeaway.com, Glovo and others with their POS system. More info on features and platforms supported on [https://deliverect.com/](https://deliverect.com/) This API can be used to integrate additional channels or POS systems, but also by bigger restaurants

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### GET `/locations` — Get locations

<a id="store-api-get-locations-get-locations"></a>

Per physical restaurant location, there will be a *Location*. This endpoint can be used to query them. You can have to specify an account, otherwise the locations of your own account will be returned

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `where` | query | string | no |  |

**Response Codes**

- `200` — OK

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/locations \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/channelDisabledProducts` — Get products marked out of stock

<a id="store-api-get-channeldisabledproducts-get-products-marked-out-of-stock"></a>

Get products marked out of stock.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `where` | query | string | no |  |

**Response Codes**

- `200` — OK
- `default` — default

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/channelDisabledProducts \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/products/snoozeByTags` — Mark products out of stock by tag

<a id="store-api-post-productssnoozebytags-mark-products-out-of-stock-by-tag"></a>

Mark products out of stock for a certain amount of time based on their tag and location. You can use the same call to unsnooze product passing `snoozeEnd` time in the past. ##### NOTE Please note, that here and later all dates and times, coming from/to Deliverect are UTC.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | yes |  |
| `location` | string | yes |  |
| `tag` | array<integer> | yes |  |
| `snoozeStart` | string | yes |  |
| `snoozeEnd` | string | yes |  |

**Request Example**

```json
{
  "account": "{{account_id}}",
  "location": null,
  "tags": [
    1,
    2,
    3
  ],
  "snoozeStart": "YYYY-MM-DDThh:mm:ss.sssZ",
  "snoozeEnd": "YYYY-MM-DDThh:mm:ss.sssZ"
}
```

**Response Codes**

- `200` — OK
- `400` — Bad Request
- `default` — default

**Response Example (200)**

```json
"{}"
```

### POST `/products/snoozeByPlus` — Mark products out of stock by PLU

<a id="store-api-post-productssnoozebyplus-mark-products-out-of-stock-by-plu"></a>

Mark products out of stock for a certain amount of time based on their PLU and location. You can use the same call to unsnooze product passing `snoozeEnd` time in the past.

**Request Example**

```json
{
  "account": "62********************2g",
  "location": "62********************9k",
  "plus": [
    "PLU_1",
    "PLU_2"
  ],
  "snoozeEnd": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"
}
```

**Response Codes**

- `default` — default

### POST `/updateStoreStatus/{locationId}` — Update Store Status

<a id="store-api-post-updatestorestatuslocationid-update-store-status"></a>

This endpoint allows a POS to update store status. One, several or all channel links can be put in busy/online mode(should be supported by channels as well) by calling this endpoint. When sending a call to the endpoint make sure it includes `isActive` flag which indicates if store busy/online. Optional parameter `channelLinks` allwos you to specify a list of channel links to be put in busy/online mode. Otherwise all location channel links will be put in busy/online mode. As a payload we always expect a JSON that contains: * Flag that indicates if store is busy/online (`isActive`) * [Optional] Array of channel link ids to be put in busy/online more (`channelLink`)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `isActive` | string | yes |  |
| `prepTime` | string | yes |  |

**Response Codes**

- `200` — OK
- `400` — Bad Request

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/updateStoreStatus/{locationId} \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/location/{locationId}/openingHours` — Get Store Opening Hours

<a id="store-api-get-locationlocationidopeninghours-get-store-opening-hours"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes |  |

**Response Codes**

- `200` — Successful response
- `400` — Bad Request

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `_id` | string |  |
| `status` | string |  |
| `locationName` | string |  |
| `tags` | array<object> |  |
| `openingHours` | array<object> |  |
| `channels` | array<object> |  |

**Response Example (200)**

```json
{
  "_id": "633d62de0f1565acdf**3bdf",
  "status": "ACTIVE",
  "locationName": "Location 1",
  "tags": [],
  "openingHours": [
    {
      "dayOfWeek": 1,
      "startTime": "00:00",
      "endTime": "23:59"
    },
    {
      "dayOfWeek": 2,
      "startTime": "00:00",
      "endTime": "23:59"
    },
    {
      "dayOfWeek": 3,
      "startTime": "00:00",
      "endTime": "23:59"
    }
  ],
  "channels": [
    {
      "_id": "633d6******565acdf893bf1",
      "status": 2,
      "channelName": "Channel 1",
      "channel": 1,
      "tags": [],
      "openingHours": []
    },
    {
      "_id": "6476183fe******c858de0b0",
      "status": 2,
      "channelName": "Channel 2",
      "channel": 10057,
      "tags": [],
      "openingHours": []
    },
    {
      "_id": "669519a1fe******040bdaf2",
      "status": 2,
      "channelName": "Channel 3",
      "channel": 10000,
      "tags": [],
      "openingHours": []
    }
  ]
}
```

### GET `/account/{accountId}/openingHours` — Get Account Opening Hours

<a id="store-api-get-accountaccountidopeninghours-get-account-opening-hours"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Response Codes**

- `200` — Successful response
- `400` — Bad Request

**Response Example (200)**

```json
"{}"
```

### POST `/locations/openingHours` — Create/Update Opening Hours

<a id="store-api-post-locationsopeninghours-createupdate-opening-hours"></a>

**Response Codes**

- `204` — No Content
- `400` — Bad Request

**Response Example (204)**

```json
"{}"
```

### POST `/locations/holidays` — Holiday Hours for Locations

<a id="store-api-post-locationsholidays-holiday-hours-for-locations"></a>

**Request Example**

```json
{
  "locations": [
    {
      "id": "61c30761e41eefadd03072af",
      "holidays": [
        {
          "startTime": "2023-12-19T15:53:00Z",
          "endTime": "2023-12-19T16:10:00Z"
        },
        {
          "startTime": "2023-12-20T04:00:00Z",
          "endTime": "2023-12-20T05:00:00Z"
        }
      ]
    }
  ]
}
```

**Response Codes**

- `default` — default

### GET `/location/{locationId}/holidays` — Holiday Hours for Locations

<a id="store-api-get-locationlocationidholidays-holiday-hours-for-locations"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes |  |

**Response Codes**

- `200` — Successful response

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/location/{locationId}/holidays \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/locations/channels/holidays` — Holiday Hours for Locations and ChannelLinks

<a id="store-api-post-locationschannelsholidays-holiday-hours-for-locations-and-channellinks"></a>

**Request Example**

```json
{
  "locations": [
    {
      "id": "63********************a7",
      "channels": [
        {
          "id": "63********************a7",
          "holidays": [
            {
              "startTime": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
              "endTime": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"
            },
            {
              "startTime": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
              "endTime": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ"
            }
          ]
        }
      ]
    }
  ]
}
```

**Response Codes**

- `default` — default

### GET `/accounts` — get_accounts

<a id="store-api-get-accounts-getaccounts"></a>

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "_items": [
    {
      "_id": "5f1***131",
      "name": "Generic account",
      "accountType": 1,
      "currency": 1,
      "posSystem": 10000,
      "_updated": "2021-05-18T08:02:16.000000Z",
      "_created": "2020-07-24T07:36:49.000000Z",
      "_deleted": false,
      "_etag": "004a4df4bcce3cae83fd530c4a502278633ffd42",
      "locations": [
        "5f1***133",
        "606***b86",
        "606***555"
      ],
      "accounts": [],
      "brands": [
        {
          "name": "Generic account",
          "brandId": "606***6c5"
        }
      ],
      "deliverectVersion": "2.0",
      "featureFlags": {
        "menuLocationOverrides": false,
        "autoApply": false,
        "pullAvailabilities": false,
        "combinedProductsPage": false,
        "enableSelfOnboarding": false,
        "reportsV2": false,
        "enableDiscounts": false,
        "enableDelivery": false
      },
      "region": "EU",
      "settings": {
        "taxExcl": false
      },
      "whitelabel": "deliverect",
      "users": [
        "607***ca68"
      ],
      "reportingEndpoints": [
        {
          "endpoint": "https://reporting-endpoint.com/reporting/newOrder",
          "statusTrigger": [
            20
          ],
          "endpointType": 10
        }
      ],
      "_links": {
        "self": {
          "title": "accounts",
          "href": "accounts/5f1***131"
        },
        "related": {
          "users": [
            {
              "title": "users",
              "href": "users/607***a68"
            }
          ],
          "locations": [
            {
              "title": "Locations",
              "href": "locations/5f1***133"
            },
            {
              "title": "Locations",
              "href": "locations/606***b86"
            },
            {
              "title": "Locations",
              "href": "locations/606***555"
            }
          ],
          "accounts": []
        }
      }
    }
  ],
  "_links": {
    "parent": {
      "title": "home",
      "href": "/"
    },
    "self": {
      "title": "accounts",
      "href": "accounts"
    },
    "next": {
      "title": "next page",
      "href": "accounts?page=2"
    },
    "last": {
      "title": "last page",
      "href": "accounts?page=11"
    }
  },
  "_meta": {
    "page": 1,
    "max_results": 25,
    "total": 11
  }
}
```

### GET `/accounts/{accountId}/brands` — get_accounts-accountid-brands

<a id="store-api-get-accountsaccountidbrands-getaccounts-accountid-brands"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — Bad Request

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `brands` | array<object> |  |

**Response Example (200)**

```json
{
  "brands": [
    {
      "name": "Brand 1",
      "brandId": "601bd819bfc52ecea142bf9f"
    },
    {
      "name": "Brand 2",
      "brandId": "602131b4639578ac0da4588d"
    },
    {
      "name": "Brand 3",
      "brandId": "602cecade10d4dc9fe0f7fdc"
    }
  ]
}
```

### GET `/channelLinks` — get_channellinks

<a id="store-api-get-channellinks-getchannellinks"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/channelLinks \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/products` — Get Products for Account

<a id="store-api-get-products-get-products-for-account"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `where` | query | string | no |  |

**Response Codes**

- `200` — OK
- `400` — Bad Request
- `default` — default

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `_items` | array<object> |  |
| `_links` | object |  |
| `_meta` | object |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/products \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/v2/locations/{locationId}/syncProducts` — get_v2-locations-locationid-syncproducts

<a id="store-api-get-v2locationslocationidsyncproducts-getv2-locations-locationid-syncproducts"></a>

This endpoint initiates the product sync request for a specified location. When called, Deliverect will trigger a product sync from the connected POS system for the given location.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `locationId` | path | string | yes | The unique identifier of the location to sync products for. |
| `forceUpdate` | query | string | no | When set to `true`, forces a full product sync even if products have not changed since the last sync. |

**Response Codes**

- `200` — Product sync request initiated successfully.
- `400` — Bad Request — the sync request could not be processed. This may occur if the location ID is invalid or the location does not have a POS system configured.

**Response Example (200)**

```json
{}
```


---

## Menu API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### GET `/menuManagement/account/{accountId}/menu` — GET Externally Managed Menus

<a id="menu-api-get-menumanagementaccountaccountidmenu-get-externally-managed-menus"></a>

Retrieve a list of all menus with their unique Deliverect ID and external menu Id set

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{ \n  {Deliverect menu ObjectId}: { \n        \"externalMenuId\": {externalMenuId}\n    }, \n      {Deliverect menu ObjectId}: { \n        \"externalMenuId\": {externalMenuId}\n    }, \n    ... \n}"
```

### POST `/menuManagement/account/{accountId}/menu` — POST Create/Update Menu

<a id="menu-api-post-menumanagementaccountaccountidmenu-post-createupdate-menu"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `externalMenuId` | string | yes | External Id to uniquely reference this menu on the API |
| `internalName` | string | no | Name of the menu as its shown on frontend |
| `masterLocationId` | string | no | ⓘ <<glossary:masterLocationId>> is the location set for product PLU lookup |
| `name` | string | yes | Name of the menu as it will be sent to the channel |
| `nameTranslations` | array<object> | no |  |
| `description` | string | no | Description of the menu, shown on some channels |
| `descriptionTranslations` | array<object> | no |  |
| `menuType` | integer | no |  |
| `headerImageURL` | string | no | URL to the header image. Required for some channels |
| `categories` | array<object> | yes | List of categories, including all the products |
| `productOverrides` | array<object> | no | For menu level changes that alter original price, name, tax etc (see below for Overrides section) |

**Response Codes**

- `202` — 202
- `400` — 400

**Response Fields (202, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `Deliverect menu ObjectId` | object |  |

**Response Example (202)**

```json
{
  "Deliverect menu ObjectId": {
    "externalMenuId": "externalMenuId",
    "action": "CREATING",
    "operationReportId": "1234"
  }
}
```

### POST `/menuManagement/account/{accountId}/publish` — post_menumanagement-account-accountid-publish

<a id="menu-api-post-menumanagementaccountaccountidpublish-postmenumanagement-account-accountid-publish"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — Bad Request

**Response Example (200)**

```json
{
  "_ids": [
    "63********************a7"
  ],
  "status": "enqueued",
  "_id": "63********************a7"
}
```

### DELETE `/menuManagement/account/{accountId}/menu/{externalMenuId}` — DELETE Externally Managed Menu

<a id="menu-api-delete-menumanagementaccountaccountidmenuexternalmenuid-delete-externally-managed-menu"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `externalMenuId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `{Deliverect menu ObjectId}` | object |  |

**Response Example (200)**

```json
{
  "{Deliverect menu ObjectId}": {
    "externalMenuId": "pizza_menu",
    "action": "DELETED",
    "deletedChannelProducts": 12,
    "deletedChannelCategories": 3,
    "deletedChannelMenus": 1
  }
}
```


---

## Fulfilment API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### POST `/fulfillment/updateJob` — post_fulfillment-updatejob

<a id="fulfilment-api-post-fulfillmentupdatejob-postfulfillment-updatejob"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deliveryJobId` | string | yes |  |
| `deliveryAddress` | object | no |  |
| `deliveryTime` | string | no |  |
| `pickupTime` | string | no |  |
| `driverTip` | string | no |  |
| `dropoffInstructions` | string | no |  |

**Response Codes**

- `200` — Success
- `400` — Invalid JSON or schema validation error
- `404` — Job or order not found
- `422` — Eligibility validation failed
- `501` — DSP unsupported or DSP update call failed

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `deliveryJobId` | string |  |
| `updated` | boolean |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com//fulfillment/updateJob \
     --header 'Accept: application/json'
```

### POST `/fulfillment/deliveryRefundConfirmation` — Copy of Refunded Delivery Notification

<a id="fulfilment-api-post-fulfillmentdeliveryrefundconfirmation-copy-of-refunded-delivery-notification"></a>

This endpoint can be called to communicate a refund.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `X-HMAC-Signature` | header | string | yes |  |
| `X-HMAC-Partner` | header | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `deliveryExternalJobId` | string | yes | Either deliveryExternalJobId or deliveryJobId required |
| `deliveryJobId` | string | no | Either deliveryExternalJobId or deliveryJobId required |

**Request Example**

```json
{
  "deliveryExternalJobId": "your-external-job-id-123"
}
```

**Response Codes**

- `200` — 200
- `400` — Missing/invalid fields
- `415` — Unsupported Media Type

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `deliveryJobId` | string |  |
| `deliveryExternalId` | string |  |
| `status` | string |  |
| `amount` | string | Defined by a an int with 2 decimal digits. i.e. 2 euros is stored as 200. |
| `completedAt` | string |  |

**Response Example (200)**

```json
{
  "deliveryJobId": "507f1f77bcf86cd799439011",
  "deliveryExternalId": "your-external-job-id-123",
  "status": "COMPLETED",
  "amount": 599,
  "completedAt": "2026-01-28T14:30:00.000Z"
}
```

### POST `/fulfillment/priceJob` — Dispatch Price Check

<a id="fulfilment-api-post-fulfillmentpricejob-dispatch-price-check"></a>

This endpoint is used in conjunction with a setting on the Deliverect platform that will both confirm the validity of the dispatch validationID or if required provide a new validationID before proceeding to Delivery Creation in your basket while also informing you of the Delivery Fee to charge your user based on the aforementioned settings on the Deliverect platform. This enables platforms to bridge the gap between validating the customer delivery location when entering your platform and accepting payment for a delivery job while reducing the need for further logic on your platform to calculate the delivery fee. This is an optional endpoint.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelLinkId` | string | yes | ID for the channel link created by the partner in the portal. |
| `validationId` | string | no | D passed in the Dispatch Availability response related to the ongoing customer offer |
| `subTotal` | integer | yes | The total amount of the order the customer will pay |
| `pickupTime` | string | no | Defaults to 2025-05-17T09:50:00Z |
| `deliveryLocations` | object | yes | Object containing details of the customer and delivery address |

**Request Example**

```json
{
  "channelLinkId": "64********************67",
  "validationId": "68********************e3",
  "subTotal": "1200",
  "deliveryLocations": {
    "deliveryTime": "2025-09-18T11:00:00Z",
    "packageSize": "unknown",
    "name": "Deliverect Employee",
    "postalCode": "3818 LE",
    "street": "Stationsplein",
    "city": "Amersfoort",
    "country": "The Netherlands",
    "source": "Deliverect Restaurant,Stationsplein 3818 LE,  Amersfoort",
    "phone": "+31 85 888 3577"
  },
  "coordinates": {
    "longitude": 5.3738916,
    "latitude": 52.1529549
  }
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `validationId` | string |  |
| `available` | boolean |  |
| `price` | integer |  |
| `smallBasketFee` | integer | This value will be sent only when the subTotal is below the value set by the location to charge this fee. |

**Response Example (200)**

```json
"{\n        \"validationId\": \"62********************2b\",\n        \"available\": true,\n        \"price\": 799\n}"
```

### POST `/fulfillment/refund` — Refunded Delivery Notification

<a id="fulfilment-api-post-fulfillmentrefund-refunded-delivery-notification"></a>

This endpoint can be called to communicate a refund.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `X-HMAC-Signature` | header | string | no |  |
| `X-HMAC-Partner` | header | string | no |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `externalJobId` | string | yes |  |
| `deliveryRefundDetails` | object | yes | object with the details of the refund |
| `deliveryRefundItemDetails` | array<object> | yes |  |
| `deliveryRefundFeeDetails` | array<object> | yes |  |

**Request Example**

```json
{
  "externalJobId": "67d89438a697346d7**2a71a",
  "deliveryRefundDetails": {
    "type": 0,
    "owner": 0,
    "totalRestaurantAmount": 0,
    "totalDspAmount": 0,
    "reason": "string",
    "extraInfo": "string"
  },
  "deliveryRefundItemDetails": [
    {
      "itemName": "string",
      "itemPLU": "string",
      "quantity": 0,
      "reason": "string",
      "amount": 0,
      "percentage": 0,
      "owner": 0
    }
  ],
  "deliveryRefundFeeDetails": [
    {
      "amount": 0,
      "owner": 0
    }
  ]
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Picking API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### POST `/picking/order/{orderId}/updateOrderItems` — post_picking-order-orderid-updateorderitems

<a id="picking-api-post-pickingorderorderidupdateorderitems-postpicking-order-orderid-updateorderitems"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `callbackUrl` | string | yes |  |
| `updates` | array<object> | yes |  |

**Request Example**

```json
{
  "callbackUrl": "https://somecallback.com",
  "updates": [
    {
      "itemId": "{{itemId}}",
      "action": "ADJUST",
      "reason": "OUT_OF_STOCK",
      "properties": {
        "quantity": 1
      }
    }
  ]
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "status": "success",
  "message": "Update OrderItems Event was received for Order id: 507f1f77bcf86cd799439011"
}
```

### POST `/picking/order/{orderId}/item/{itemId}/suggestSubstitute?reason=OUT_OF_STOCK` — post_picking-order-orderid-item-itemid-suggestsubstitute-reason-out-of-stock

<a id="picking-api-post-pickingorderorderiditemitemidsuggestsubstitutereasonoutofstock-postpicking-order-orderid-item-itemid-suggestsubstitute-reason-out-of-stock"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |
| `itemId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "substitutes": [
    {
      "itemId": "507f1f77bcf86cd799439014",
      "name": "Pepperoni Pizza",
      "price": 13.99,
      "similarity": 0.85,
      "reason": "Similar product type",
      "plu": "PIZZA_PEP"
    },
    {
      "itemId": "507f1f77bcf86cd799439015",
      "name": "Vegetarian Pizza",
      "price": 11.99,
      "similarity": 0.75,
      "reason": "Alternative option",
      "plu": "PIZZA_VEG"
    }
  ]
}
```

### POST `/picking/order/{orderId}/done` — post_picking-order-orderid-done

<a id="picking-api-post-pickingorderorderiddone-postpicking-order-orderid-done"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "status": "success",
  "message": "Order marked as done picking"
}
```

### GET `/picking/order/{orderId}` — get_picking-order-orderid

<a id="picking-api-get-pickingorderorderid-getpicking-order-orderid"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `_id` | string |  |
| `location` | string |  |
| `channelOrderId` | string |  |
| `status` | string |  |
| `pickerStatus` | string |  |
| `items` | array<object> |  |
| `customer` | object |  |
| `delivery` | object |  |
| `createdAt` | string |  |
| `scheduledFor` | string |  |

**Response Example (200)**

```json
{
  "_id": "507******************011",
  "location": "507******************012",
  "channelOrderId": "EXT_ORDER_123",
  "status": "SCHEDULED",
  "pickerStatus": "NOT_STARTED",
  "items": [
    {
      "_id": "507******************013",
      "name": "Margherita Pizza",
      "quantity": 2,
      "price": 12.99,
      "plu": "PIZZA_MARG",
      "channelItemId": "CH_ITEM_123",
      "subItems": [],
      "modifiers": [
        {
          "name": "Extra Cheese",
          "price": 2
        }
      ]
    }
  ],
  "customer": {
    "name": "John Doe",
    "phone": "+1234567890",
    "email": "john@example.com"
  },
  "delivery": {
    "address": "123 Main St, City, State 12345",
    "instructions": "Leave at front door",
    "estimatedTime": "2024-01-01T12:00:00Z"
  },
  "createdAt": "2024-01-01T10:00:00Z",
  "scheduledFor": "2024-01-01T11:30:00Z"
}
```

### POST `/picking/order/{orderId}/start` — post_picking-order-orderid-start

<a id="picking-api-post-pickingorderorderidstart-postpicking-order-orderid-start"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string |  |
| `message` | string |  |
| `pickerStatus` | string |  |

**Response Example (200)**

```json
{
  "status": "success",
  "message": "Picking started successfully",
  "pickerStatus": "IN_PROGRESS"
}
```

### POST `/picking/order/{orderId}/item/{itemId}/pick` — post_picking-order-orderid-item-itemid-pick

<a id="picking-api-post-pickingorderorderiditemitemidpick-postpicking-order-orderid-item-itemid-pick"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |
| `itemId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickedWeight` | number | no |  |
| `isSubItem` | boolean | no |  |
| `timestamp` | string | no |  |
| `location` | string | no |  |
| `notes` | string | no |  |

**Request Example**

```json
{
  "pickedWeight": 250.5,
  "isSubItem": false,
  "timestamp": "2024-01-01T10:30:00Z",
  "location": "A1-B2-Shelf3",
  "notes": "Item picked from top shelf"
}
```

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string |  |
| `message` | string |  |

**Response Example (200)**

```json
{
  "status": "success",
  "message": "Item Picked notification was received for Order id: 507f1f77bcf86cd799439011, Item Id: 507f1f77bcf86cd799439013"
}
```

### POST `/picking/order/{orderId}/reject` — Reject Order

<a id="picking-api-post-pickingorderorderidreject-reject-order"></a>

Reject an order for picking.

**Fields:**
- `reason` (string): Human-readable rejection reason
- `reasonType` (string): Categorized reason type (e.g. KITCHEN_ISSUE, OUT_OF_STOCK)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | Path parameter: orderId |
| `Content-Type` | header | string | yes |  |
| `X-Deliverect-Hmac-Sha256` | header | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `location` | string | no |  |
| `reason` | string | no |  |
| `reasonType` | string | no |  |

**Request Example**

```json
{
  "location": "{{locationId}}",
  "reason": "Kitchen equipment malfunction",
  "reasonType": "KITCHEN_ISSUE"
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{}"
```

### POST `/picking/order/{orderId}/couriers` — post_picking-order-orderid-couriers

<a id="picking-api-post-pickingorderorderidcouriers-postpicking-order-orderid-couriers"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes |  |

**Request Example**

```json
{
  "count": 3,
  "reason": "Large order requiring multiple couriers",
  "updatedBy": "picker_12345"
}
```

**Response Codes**

- `200` — 200
- `412` — Precondition Failed

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string |  |
| `message` | string |  |

**Response Example (200)**

```json
{
  "status": "success",
  "message": "Courier count updated successfully"
}
```

### POST `/picking/order/{orderId}/update` — post_picking-order-orderid-update

<a id="picking-api-post-pickingorderorderidupdate-postpicking-order-orderid-update"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes |  |

**Request Example**

```json
{
  "status": "IN_PROGRESS",
  "estimatedCompletionTime": "2024-01-15T14:30:00Z",
  "notes": "Order picking in progress"
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{}"
```


---

## KDS API

Deliverect allows restaurants to directly connect channels like UberEats, Takeaway.com, Glovo and others with their POS system. More info on features and platforms supported on [https://deliverect.com/](https://deliverect.com/) This API can be used to integrate additional channels or POS systems, but also by bigger restaurants

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### POST `/oauth/token` — Machine 2 Machine Access Token

<a id="kds-api-post-oauthtoken-machine-2-machine-access-token"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `content-type` | header | string | no |  |

**Response Codes**

- `200` — OK
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "access_token": "ey**-**-Q",
  "expires_at": 1620899002,
  "token_type": "Bearer",
  "scope": "genericPOS provisioning"
}
```

### POST `/kds/orderStatus/{orderId}` — Update Order Status

<a id="kds-api-post-kdsorderstatusorderid-update-order-status"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes |  |

**Response Codes**

- `200` — Successful response

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/kds/orderStatus/{orderId} \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/orderStatus/{orderId}` — Update order status

<a id="kds-api-post-orderstatusorderid-update-order-status"></a>

This endpoint allows a POS to update the status of an order at each stage in its preparation. It also allows for the modification of the pickupTime

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Response Codes**

- `200` — OK
- `default` — default

**Response Example (200)**

```json
{
  "result": "OK"
}
```

### POST `/products/snoozeByTags` — Mark products out of stock by tag

<a id="kds-api-post-productssnoozebytags-mark-products-out-of-stock-by-tag"></a>

Mark products out of stock for a certain amount of time based on their tag and location. You can use the same call to unsnooze product passing `snoozeEnd` time in the past. ##### NOTE Please note, that here and later all dates and times, coming from/to Deliverect are UTC.

**Response Codes**

- `default` — default

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/products/snoozeByTags \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/products/snoozeByPlus` — Mark products out of stock by PLU

<a id="kds-api-post-productssnoozebyplus-mark-products-out-of-stock-by-plu"></a>

Mark products out of stock for a certain amount of time based on their PLU and location. You can use the same call to unsnooze product passing `snoozeEnd` time in the past.

**Response Codes**

- `default` — default

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/products/snoozeByPlus \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/allAllergens/` — Allergens and tags

<a id="kds-api-get-allallergens-allergens-and-tags"></a>

This allows a channel to get allergens and tags existing in Deliverect.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no |  |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
[
  {
    "name": "Alcohol",
    "allergenId": 1
  },
  {
    "name": "Halal",
    "allergenId": 2
  },
  {
    "name": "Kosher",
    "allergenId": 3
  },
  {
    "name": "Vegan",
    "allergenId": 4
  },
  {
    "name": "Vegetarian",
    "allergenId": 5
  }
]
```


---

## Retail API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.io/`

**Security:** `sec0` (oauth2)

### POST `/catalog/accounts/{accountId}/inventoryUploadUrl` — Inventory Update

<a id="retail-api-post-catalogaccountsaccountidinventoryuploadurl-inventory-update"></a>

To support changes to item availability, Deliverect can receive an inventory file.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `X-Deliverect-Version` | header | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `callbackUrl` | string | no | Will be used to notify you when the inventory file has been processed. |

**Request Example**

```json
{
  "callbackUrl": "https://example.com/inventoryCallback"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{\n    \"fileId\": \"4e*********************************c1\",\n    \"signedUrl\": \"https://storage.googleapis.com/...\",\n    \"headers\": {\n        \"x-goog-meta-user\": \"61********************b4\",\n        \"x-goog-meta-callback\": \"https://example.com/inventoryCallback\",\n        \"content-type\": \"text/csv\",\n        \"Host\": \"storage.googleapis.com\"\n    }\n}"
```

### POST `/catalog/accounts/{accountId}/itemsUploadUrl` — Item Upload (Only for Retail)

<a id="retail-api-post-catalogaccountsaccountiditemsuploadurl-item-upload-only-for-retail"></a>

To support large product ranges common to the retail sector, Deliverect can receive an Item file for upload.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | path | string | yes |  |
| `X-Deliverect-Version` | header | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `callbackUrl` | string | no | Will be used to notify you when the catalog has been processed. |

**Request Example**

```json
{
  "callbackUrl": "https://example.com/itemsCallback"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{\n  \"fileId\": \"4e*********************************c1\",\n  \"signedUrl\": \"https://storage.googleapis.com/...\",\n  \"headers\": {\n    \"content-type\": \"text/csv\",\n    \"x-goog-meta-callback\": \"https://example.com/callback\",\n    \"host\": \"storage.googleapis.com\"\n  }\n}"
```


---

## CRM API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `get_customers` (http, bearer), `sec0` (oauth2)

### GET `/crm/channel/{channelLinkId}/customers/{crmProfileId}` — get_crm-channel-channellinkid-customers-crmprofileid

<a id="crm-api-get-crmchannelchannellinkidcustomerscrmprofileid-getcrm-channel-channellinkid-customers-crmprofileid"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmProfileId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `accountId` | string |  |
| `externalId` | string |  |
| `channel` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `contact` | object |  |
| `deliveryAddress` | object |  |
| `billingAddress` | object |  |
| `metadata` | object |  |
| `favorites` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "{id}",
  "accountId": "{accountId}",
  "externalId": "{externalId}",
  "channel": "{channel}",
  "created": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "updated": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "contact": {
    "email": "{email}",
    "firstName": "{firstName}",
    "lastName": "{lastName}",
    "phone": "{phone}",
    "fullName": "{fullName}"
  },
  "deliveryAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "billingAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "metadata": {
    "vehicle": {
      "make": "{vehicleMake}",
      "model": "{vehicleModel}",
      "color": "{vehicleColor}"
    }
  },
  "favorites": [
    {
      "type": "order",
      "orderIds": []
    },
    {
      "type": "item",
      "items": []
    },
    {
      "type": "store",
      "storeIds": []
    }
  ]
}
```

### PATCH `/crm/channel/{channelLinkId}/customers/{crmProfileId}` — patch_crm-channel-channellinkid-customers-crmprofileid

<a id="crm-api-patch-crmchannelchannellinkidcustomerscrmprofileid-patchcrm-channel-channellinkid-customers-crmprofileid"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmProfileId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact` | object | no |  |
| `externalId` | string | no |  |
| `loyaltyProviderId` | string | no |  |
| `deliveryAddress` | object | no |  |
| `billingAddress` | object | no |  |
| `metadata` | object | no |  |
| `favorites` | array<object> | no |  |

**Request Example**

```json
{
  "contact": {
    "email": "{crmProfileEmail}",
    "firstName": "{crmProfileFirstName}",
    "lastName": "{crmProfileLastName}",
    "birthdate": "{crmProfileBirthDate}"
  },
  "externalId": "{externalId}",
  "loyaltyProviderId": "{loyaltyProviderId}",
  "deliveryAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "billingAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "metadata": {
    "vehicle": {
      "make": "{vehicleMake}",
      "model": "{vehicleModel}",
      "color": "{vehicleColor}"
    }
  },
  "favorites": [
    {
      "type": "order",
      "orderIds": [
        "{crmOrderId-1}",
        "{crmOrderId-2}"
      ]
    },
    {
      "type": "item",
      "items": [
        "{PLU-1}",
        "{PLU-2}"
      ]
    },
    {
      "type": "store",
      "storeIds": [
        "{storeId-1}",
        "{storeId-2}"
      ]
    }
  ]
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{\n  \"id\": \"{id}\",\n  \"accountId\": \"{accountId}\",\n  \"channel\": \"{channel}\",\n  \"created\": \"{created}\",\n  \"updated\": \"{updated}\",\n  \"contact\": {\n    \"email\": \"{crmEmail}\",\n    \"firstName\": \"{crmFirstName}\",\n    \"lastName\": \"{crmLastName}\",\n    \"fullName\": \"{crmFullName}\",\n    \"phone\": \"{crmPhone}\",\n    \"birthdate\": \"{crmProfileBirthDate}\"\n  },\n  \"externalId\": \"{externalId}\",\n  \"loyaltyProviderId\": \"{loyaltyProviderId}\",\n  \"deliveryAddress\": {\n    \"country\": \"{countryCode}\",\n    \"stateOrProvince\": \"{stateOrProvince}\",\n    \"city\": \"{city}\",\n    \"streetName\": \"{streetName}\",\n    \"postalCode\": \"{postalCode}\",\n    \"houseNumber\": \"{houseNumber}\"\n  },\n  \"billingAddress\": {\n    \"country\": \"{countryCode}\",\n    \"stateOrProvince\": \"{stateOrProvince}\",\n    \"city\": \"{city}\",\n    \"streetName\": \"{streetName}\",\n    \"postalCode\": \"{postalCode}\",\n    \"houseNumber\": \"{houseNumber}\"\n  },\n  \"metadata\": {\n    \"vehicle\": {\n      \"make\": \"{vehicleMake}\",\n      \"model\": \"{vehicleModel}\",\n      \"color\": \"{vehicleColor}\"\n    }\n  },\n  \"favorites\": [\n    {\n      \"type\": \"order\",\n      \"orderIds\": [\n        \"{orderId}\"\n      ]\n    },\n    {\n      \"type\": \"item\",\n      \"items\": [\n        \"{PLU-1}\",\n        \"{PLU-2}\"\n      ]\n    },\n    {\n      \"type\": \"store\",\n      \"storeIds\": [\n        \"{storeId-1}\",\n        \"{storeId-2}\"\n      ]\n    }\n  ]\n"
```

### POST `/crm/channel/{channelLinkId}/customers/lookup` — post_crm-channel-channellinkid-customers-lookup

<a id="crm-api-post-crmchannelchannellinkidcustomerslookup-postcrm-channel-channellinkid-customers-lookup"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes |  |

**Request Example**

```json
{
  "email": "{crmProfileEmail}"
}
```

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `accountId` | string |  |
| `externalId` | string |  |
| `channel` | string |  |
| `created` | string |  |
| `updated` | string |  |
| `contact` | object |  |
| `deliveryAddress` | object |  |
| `billingAddress` | object |  |
| `metadata` | object |  |
| `favorites` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "{id}",
  "accountId": "{accountId}",
  "externalId": "{externalId}",
  "channel": "{channel}",
  "created": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "updated": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "contact": {
    "email": "{email}",
    "firstName": "{firstName}",
    "lastName": "{lastName}",
    "phone": "{phone}",
    "fullName": "{fullName}"
  },
  "deliveryAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "billingAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "metadata": {
    "vehicle": {
      "make": "{vehicleMake}",
      "model": "{vehicleModel}",
      "color": "{vehicleColor}"
    }
  },
  "favorites": [
    {
      "type": "order",
      "orderIds": []
    },
    {
      "type": "item",
      "items": []
    },
    {
      "type": "store",
      "storeIds": []
    }
  ]
}
```

### POST `/crm/channel/{channelLinkId}/customers/{crmProfileId}/favorites` — post_crm-channel-channellinkid-customers-crmprofileid-favorites

<a id="crm-api-post-crmchannelchannellinkidcustomerscrmprofileidfavorites-postcrm-channel-channellinkid-customers-crmprofileid-favorites"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmProfileId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `favorites` | array<object> | yes |  |

**Request Example**

```json
{
  "favorites": [
    {
      "type": "order",
      "orderIds": [
        "{crmOrderId}"
      ]
    },
    {
      "type": "item",
      "items": [
        "{PLU-1}",
        "{PLU-2}"
      ]
    },
    {
      "type": "store",
      "storeIds": [
        "{locationId}"
      ]
    }
  ]
}
```

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `favorites` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "698**************4e9",
  "favorites": [
    {
      "type": "order",
      "orderIds": [
        "698**************065"
      ]
    },
    {
      "type": "item",
      "items": [
        "PLU-0",
        "PLU-1",
        "PLU-2"
      ]
    },
    {
      "type": "store",
      "storeIds": [
        "69a**************abb"
      ]
    }
  ]
}
```

### DELETE `/crm/channel/{channelLinkId}/customers/{crmProfileId}/favorites` — Copy of 

<a id="crm-api-delete-crmchannelchannellinkidcustomerscrmprofileidfavorites-copy-of"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmProfileId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `favorites` | array<object> | yes |  |

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `favorites` | array<object> |  |

**Response Example (200)**

```json
{
  "id": "698**************4e9",
  "favorites": [
    {
      "type": "order",
      "orderIds": []
    },
    {
      "type": "item",
      "items": [
        "PLU-2",
        "PLU-3"
      ]
    },
    {
      "type": "store",
      "storeIds": []
    }
  ]
}
```

### GET `/crm/channel/{channelLinkId}/customers/{crmProfileId}/orders` — get_crm-channel-channellinkid-customers-crmprofileid-orders

<a id="crm-api-get-crmchannelchannellinkidcustomerscrmprofileidorders-getcrm-channel-channellinkid-customers-crmprofileid-orders"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmProfileId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `total` | integer |  |
| `page` | integer |  |
| `size` | integer |  |
| `items` | array<object> |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com//crm/channel/{channelLinkId}/customers/{crmProfileId}/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/crm/channel/{channelLinkId}/orders/{crmOrderId}` — Copy of 

<a id="crm-api-get-crmchannelchannellinkidorderscrmorderid-copy-of"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `crmOrderId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "id": "698**************066",
  "crmProfileId": "698**************4e9",
  "orderId": "698**************e6f",
  "accountId": "68d**************bdd",
  "channel": 20000,
  "payment": {
    "amount": {
      "value": 3100,
      "currency": "EUR",
      "display": "31.00"
    }
  },
  "orderDisplayId": "DISPLAY**************156c",
  "orderDate": "2026-02-12T15:23:25.967000Z",
  "orderType": 3,
  "itemQuantity": 1,
  "locationId": "68d**************5a9"
}
```

### POST `/crm/channel/{channelLinkId}/customers` — Create customer

<a id="crm-api-post-crmchannelchannellinkidcustomers-create-customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes | Channel link ID |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contact` | object | no |  |

**Request Example**

```json
{
  "contact": {
    "email": "{email}",
    "firstName": "{firstName}",
    "lastName": "{lastName}",
    "birthdate": "{birthdate}",
    "phone": "{phone}"
  },
  "externalId": "{externalId}",
  "loyaltyProviderId": "{loyaltyProviderId}",
  "deliveryAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "billingAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "metadata": {
    "vehicle": {
      "make": "{vehicleMake}",
      "model": "{vehicleModel}",
      "color": "{vehicleColor}"
    }
  }
}
```

**Response Codes**

- `200` — OK
- `201` — Created

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `externalId` | string |  |
| `loyaltyProviderId` | string |  |
| `deliveryAddress` | object |  |
| `billingAddress` | object |  |
| `metadata` | object |  |
| `id` | string |  |
| `contact` | object |  |
| `favorites` | array<object> |  |

**Response Example (200)**

```json
{
  "externalId": "{externalId}",
  "loyaltyProviderId": "{loyaltyProviderId}",
  "deliveryAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "billingAddress": {
    "country": "{countryCode}",
    "stateOrProvince": "{stateOrProvince}",
    "city": "{city}",
    "streetName": "{streetName}",
    "postalCode": "{postalCode}",
    "houseNumber": "{houseNumber}"
  },
  "metadata": {
    "vehicle": {
      "make": "{vehicleMake}",
      "model": "{vehicleModel}",
      "color": "{vehicleColor}"
    }
  },
  "id": "{id}",
  "contact": {
    "email": "{crmEmail}",
    "firstName": "{crmFirstName}",
    "lastName": "{crmLastName}",
    "fullName": "{crmFullName}",
    "phone": "{crmPhone}",
    "birthdate": "{crmProfileBirthDate}"
  },
  "favorites": [
    {
      "type": "order",
      "orderId": "{orderId}"
    },
    {
      "type": "item",
      "items": []
    },
    {
      "type": "store",
      "storeIds": []
    }
  ]
}
```


---

## Coupon API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### GET `/coupons/channel/{channelLinkId}/coupons` — Copy of 

<a id="coupon-api-get-couponschannelchannellinkidcoupons-copy-of"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `size` | query | integer | no |  |
| `page` | query | integer | no |  |
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — OK
- `404` — Not Found

**Response Example (200)**

```json
{
  "total": 1,
  "page": 1,
  "size": 50,
  "items": [
    {
      "code": "D23",
      "isEnabled": true,
      "type": "item",
      "isHidden": false,
      "discounts": [
        {
          "type": "flat_off",
          "value": 1234,
          "currency": "EUR",
          "plus": [
            "ABC-123",
            "DEF-456"
          ],
          "display": "12.34"
        }
      ],
      "conditions": [
        {
          "type": "max_uses_per_coupon",
          "maxUsesPerCoupon": 3
        },
        {
          "type": "locations",
          "locationIds": [
            "68434f75202fe35540a31c23"
          ]
        }
      ],
      "description": "my coupon",
      "id": "690e1ef7a856cfe57553a9e1",
      "accountId": "681cbecf4ae843d500e25e47",
      "timesUsed": 0,
      "created": "2025-11-07T16:31:51.508000Z",
      "updated": "2025-11-07T16:31:51.509000Z"
    }
  ]
}
```

### POST `/coupons/channel/{channelLinkId}/coupons/{couponCode}/validate` — get_new-endpoint

<a id="coupon-api-post-couponschannelchannellinkidcouponscouponcodevalidate-getnew-endpoint"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `couponCode` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderType` | integer | yes | Order type, according to the fulfillment type:  0 - Unknown 1 - Pickup 2 - Delivery 3 - Eat-in 4 - Curbside |
| `items` | array<object> | yes |  |
| `channel` | integer | yes |  |
| `channelLinkId` | string | yes |  |

**Request Example**

```json
{
  "code": "TEST123",
  "type": "basket",
  "isEnabled": true,
  "isHidden": false,
  "description": "my coupon",
  "discounts": [
    {
      "type": "flat_off",
      "value": 500,
      "currency": "EUR"
    }
  ],
  "conditions": [
    {
      "type": "max_uses_per_coupon",
      "maxUsesPerCoupon": 3
    },
    {
      "type": "locations",
      "locationIds": [
        "ObjectId"
      ]
    }
  ]
}
```

**Response Codes**

- `200` — 200
- `422` — Unprocessable Entity

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `code` | string |  |
| `description` | string |  |
| `discounts` | array<object> |  |

**Response Example (200)**

```json
{
  "discounts": [
    {
      "externalId": null,
      "offer": {
        "type": "flat_off",
        "value": 500,
        "currency": "EUR",
        "display": "5.00"
      },
      "scope": {
        "type": "order"
      }
    }
  ],
  "description": "my coupon",
  "code": "D24"
}
```


---

## Upsells API

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `bearerAuth` (http, bearer)

### POST `/upsell/channel/{channelLinkId}` — Get Upsell Items

<a id="upsells-api-post-upsellchannelchannellinkid-get-upsell-items"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes | The unique identifier of a channel link for a store location |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | yes | The unique identifier of a customer account |
| `channelLink` | string | yes | The unique identifier of a channel link within a store location |
| `location` | string | yes | The unique identifier of a location within a customer account |
| `items` | array<object> | yes | Items in the order which upsell recommendations will be based on |

**Request Example**

```json
{
  "account": "67f93fc709a75f7e9e36da7f",
  "location": "67f9413754e4db73b3ed1e9f",
  "channelLink": "67f94128c490d2ed895a34e7",
  "items": [
    {
      "plu": "PLU1",
      "quantity": 1
    },
    {
      "plu": "PLU2",
      "quantity": 2
    },
    {
      "plu": "PLU3",
      "quantity": 1
    }
  ]
}
```

**Response Codes**

- `200` — Success
- `403` — Forbidden
- `422` — Validation Error

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array<object> | Items which have a high likelihood of being ordered together with the items included in the provided order. |
| `upsellMetricId` | string |  |

**Response Example (200)**

```json
{
  "items": [
    {
      "plu": "PLU-4",
      "quantity": 1
    },
    {
      "plu": "PLU-5",
      "quantity": 1
    },
    {
      "plu": "PLU-6",
      "quantity": 1
    }
  ],
  "upsellMetricId": "{upsellMetricId}"
}
```


---

## Loyalty API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com`

**Security:** `sec0` (oauth2)

### GET `/loyalty/{channelLinkId}/configuration` — Get Configuration

<a id="loyalty-api-get-loyaltychannellinkidconfiguration-get-configuration"></a>

This endpoint provides information such as  settings, features and requirements based on the account's configuration.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `enabled` | boolean |  |
| `providerName` | string |  |
| `providerId` | integer |  |
| `externalSignUpUrl` | string |  |
| `features` | object |  |

**Response Example (200)**

```json
{
  "enabled": true,
  "providerName": "Generic",
  "providerId": 10000,
  "externalSignUpUrl": "https://deliverect.com/signup",
  "features": {
    "supportsSSO": false,
    "supportsExternalSignUpUrl": true,
    "supportsWalletPointsBalance": true,
    "supportsWalletCashBalance": false,
    "supportsBOGOFPrograms": true,
    "supportsFreeItemPrograms": true,
    "supportsFlatPrograms": true,
    "requiresEmail": true,
    "requiresPhoneNumber": false,
    "supportsDynamicConfiguration": false
  }
}
```

### GET `/loyalty/{channelLinkId}/customer` — Get Loyalty Customer

<a id="loyalty-api-get-loyaltychannellinkidcustomer-get-loyalty-customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `email` | query | string | no | email of the end customer |
| `phoneNumber` | query | string | no | phone number of the end customer in E164 format |
| `providerId` | query | string | no | The customer's unique identifier within the loyalty provider's system, QR codes can also be passed via this parameter where supported on the Loyalty platform |

**Response Codes**

- `200` — 200
- `400` — 400
- `404` — 404

**Response Example (200)**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@email.com",
  "phoneNumber": "+32411222333",
  "dateOfBirth": "1970-01-01T00:00:00.000000+00:00",
  "lifetimePointsBalance": 0,
  "status": "activation_pending",
  "tier": null,
  "providerId": "376483"
}
```

### POST `/loyalty/{channelLinkId}/customer` — Create Loyalty Customer

<a id="loyalty-api-post-loyaltychannellinkidcustomer-create-loyalty-customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | no | email of the end customer |
| `phoneNumber` | string | no | phone number of the end customer in E164 format |
| `firstName` | string | no | first name of the end customer |
| `lastName` | string | no | last name of the end customer |
| `dateOfBirth` | string | no | date of birth of the end customer in ISO format |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "providerId": "68964",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@email.com",
  "phoneNumber": "+32411222333",
  "dateOfBirth": "1970-01-01T00:00:00.000000+00:00",
  "lifetimePointsBalance": 0,
  "tier": null
}
```

### GET `/loyalty/{channelLinkId}/customer/wallet` — Get Loyalty Customer Wallet

<a id="loyalty-api-get-loyaltychannellinkidcustomerwallet-get-loyalty-customer-wallet"></a>

Retrieve the loyalty points and cash amounts for a customer.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `email` | query | string | no |  |
| `phoneNumber` | query | string | no |  |

**Response Codes**

- `200` — 200
- `404` — 404

**Response Example (200)**

```json
"{\n    \"cash\": {\n        \"balance\": 4.45,\n        \"expirations\": [\n            {\n                \"amount\": 2.5,\n                \"date\": \"2020-01-01\"\n            }\n        ]\n    },\n    \"points\": {\n        \"balance\": 10.5,\n        \"expirations\": [\n            {\n                \"amount\": 5,\n                \"date\": \"2020-01-01\"\n            }\n        ]\n    }\n}"
```

### GET `/loyalty/{channelLinkId}/tiers` — Get Loyalty Tiers

<a id="loyalty-api-get-loyaltychannellinkidtiers-get-loyalty-tiers"></a>

The tiers returned are sorted by lowest to highest

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"[\n    {\n        \"name\": \"Bronze\",\n        \"description\": \"Way to go!\",\n        \"media\": {\n            \"url\": \"https://deliverect.com/icon1.png\",\n            \"mediaType\": \"image\"\n        },\n        \"requirements\": {\n            \"minLifetimePoints\": 0,\n            \"maxLifetimePoints\": 1000\n        }\n    },\n    {\n        \"name\": \"Silver\",\n        \"description\": \"This is a higher tier!\",\n        \"media\": {\n            \"url\": \"https://deliverect.com/icon2.png\",\n            \"mediaType\": \"image\"\n        },\n        \"requirements\": {\n            \"minLifetimePoints\": 1000,\n            \"maxLifetimePoints\": 2000\n        }\n    }\n]"
```

### POST `/loyalty/{channelLinkId}/programs/retrieve` — Get Loyalty Programs

<a id="loyalty-api-post-loyaltychannellinkidprogramsretrieve-get-loyalty-programs"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order` | object | yes | For the full order schema, please refer to [Glossary - Channel Orders](https://developers.deliverect.com/page/glossary-channel-orders) |

**Request Example**

```json
{
  "order": {
    "orderType": 1,
    "items": [
      {
        "plu": "BEEF-02",
        "price": 1100,
        "quantity": 1,
        "name": "Beef Opor",
        "productType": 1,
        "_id": "620d19e940411b30c49b1005",
        "deliveryTax": 9000
      }
    ],
    "customer": {
      "email": "customer@loyalty.com",
      "phoneNumber": "+31201234567"
    },
    "decimalDigits": 2,
    "subTotal": 1100,
    "payment": {
      "amount": 1100,
      "type": 3
    }
  }
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"[\n    {\n        \"programId\":\"1234\",\n        \"title\":\"$10 off order\",\n        \"description\":\"Discount amount off the order\",\n        \"cost\":100,\n        \"type\":\"discount_amount\",\n        \"discount\":1000,\n        \"applicable\": true,\n        \"expiresAt\": \"2024-12-31 23:59:59.000000\",\n        \"media\": null\n    \n    },\n    {\n        \"programId\":\"4578\",\n        \"title\":\"50% off order\",\n        \"description\":\"Discount percentage off the order.\",\n        \"cost\":100,\n        \"type\":\"discount_percentage\",\n        \"discount\":5000,\n        \"applicable\": true,\n        \"expiresAt\": \"2024-12-31 23:59:59.000000\",\n        \"media\": null\n\n    \n    },\n    {\n        \"programId\":\"765\",\n        \"title\":\"Free item\",\n        \"description\":\"Get an item for free.\",\n        \"cost\":200,\n        \"type\":\"free_item\",\n        \"itemPLU\":\"DRN-01\",\n        \"media\":{\n            \"url\":\"https://program.media/image\",\n            \"mediaType\":\"image\"\n        },\n        \"applicable\": true,\n        \"expiresAt\": \"2024-12-31 23:59:59.000000\"\n    },\n    {\n        \"programId\":\"12456\",\n        \"title\":\"Buy one get one for free\",\n        \"description\":\"Order an item and get another one for free.\",\n        \"cost\":500,\n        \"type\":\"buy_one_get_one_free\",\n        \"itemPLU\":\"DRN-02\",\n        \"media\":{\n            \"url\":\"https://program.media/image\",\n            \"mediaType\":\"image\"\n        },\n        \"applicable\": false,\n        \"expiresAt\": \"2024-12-31 23:59:59.000000\"\n    },\n    {\n        \"programId\": \"36996\",\n        \"title\": \"Coke $5 off\",\n        \"type\": \"item_discount_amount\",\n        \"applicable\": true,\n        \"description\": \"$10 off for a single item\",\n        \"cost\": 150.0,\n        \"media\": {\n            \"url\": \"https://res.cloudinary.com/punchh/image/upload/c_limit,f_auto,fl_lossy,g_center,q_auto/v1/punchhstatic-mothership2/redeemables/redeemable_images/000/036/996/original/4b189839dd5c99f7bccee13cdb675af19f9b9d37.jpeg\",\n            \"mediaType\": \"image\"\n        },\n        \"expiresAt\": null,\n        \"discount\": 500,\n        \"itemPLU\": \"ABC-123\",\n        \"minOrderValue\": 1000\n    },\n    {\n        \"programId\": \"36998\",\n        \"title\": \"Coke 50% off\",\n        \"type\": \"item_discount_percentage\",\n        \"applicable\": true,\n        \"description\": \"50% off Coke!\",\n        \"cost\": 150.0,\n        \"media\": {\n            \"url\": \"https://res.cloudinary.com/punchh/image/upload/c_limit,f_auto,fl_lossy,g_center,q_auto/v1/punchhstatic-mothership2/redeemables/redeemable_images/000/036/996/original/4b189839dd5c99f7bccee13cdb675af19f9b9d37.jpeg\",\n            \"mediaType\": \"image\"\n        },\n        \"expiresAt\": null,\n        \"discount\": 5000,\n        \"itemPLU\": \"ABC-123\",\n        \"minOrderValue\": null\n    }\n]"
```

### GET `/loyalty/{channelLinkId}/sso` — Loyalty SSO - redirect to ordering channel

<a id="loyalty-api-get-loyaltychannellinkidsso-loyalty-sso---redirect-to-ordering-channel"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `code` | query | string | yes | authorization code coming from an oauth flow |
| `returnUrl` | query | string | no | Encoded URL of the store to redirect to after logging in |

**Response Codes**

- `302` — 302

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com/loyalty/{channelLinkId}/sso \
     --header 'Accept: application/json'
```

### POST `/loyalty/{channelLinkId}/programs/validate` — post_new-endpoint1

<a id="loyalty-api-post-loyaltychannellinkidprogramsvalidate-postnew-endpoint1"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/loyalty/{channelLinkId}/programs/validate \
     --header 'Accept: application/json'
```

### POST `//loyalty/{channelLinkId}/programs/validate` — post_new-endpoint

<a id="loyalty-api-post-loyaltychannellinkidprogramsvalidate-postnew-endpoint"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "validationErrors": [],
  "discounts": [
    {
      "externalId": null,
      "provider": "loyalty",
      "scope": {
        "type": "order"
      },
      "offer": {
        "type": "flat_off",
        "value": 500
      }
    }
  ],
  "maxRedeemableAmount": 1000
}
```

### POST `/loyalty/{channelLinkId}/compensationCards/validate` — post_loyalty-channellinkid-compensationcards-validate

<a id="loyalty-api-post-loyaltychannellinkidcompensationcardsvalidate-postloyalty-channellinkid-compensationcards-validate"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://api.staging.deliverect.com/loyalty/{channelLinkId}/compensationCards/validate \
     --header 'Accept: application/json'
```


---

## Gift Card API

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/giftCards/registerProfile` — Register profile

<a id="gift-card-api-post-giftcardsregisterprofile-register-profile"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | yes |  |
| `apiKey` | string | yes | API key is the unique identifier of the customer within the gift cards gateway |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `redeemGiftCardURL` | string |  |
| `revertRedeemGiftCardURL` | string |  |
| `getGiftCardBalanceURL` | string |  |

**Response Example (200)**

```json
{
  "redeemGiftCardURL": "https://yourwebhook.com/redeem",
  "revertRedeemGiftCardURL": "https: //yourwebhook.com/reverse",
  "getGiftCardBalanceURL": "https://yourwebhook.com/balance"
}
```

### POST `/giftCards/redeem` — Redeem gift cards

<a id="gift-card-api-post-giftcardsredeem-redeem-gift-cards"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{}
```

### POST `/giftCards/reverse` — Reverse gift card payments

<a id="gift-card-api-post-giftcardsreverse-reverse-gift-card-payments"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Pay API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### GET `/pay/channel/{channelLinkId}/gatewayProfiles` — Get Payment Gateways

<a id="pay-api-get-paychannelchannellinkidgatewayprofiles-get-payment-gateways"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"[\n    {\n        \"id\": \"6672fd224e8abca97dbe07cf\",\n        \"type\": \"online\"\n    },\n    {\n        \"id\": \"668541624a4a391b8fd2fc4d\",\n        \"type\": \"card\"\n    }\n]"
```

### GET `/pay/channel/{channelLinkId}/tokens/customer/{customerId}` — Copy of Get Payment Gateways

<a id="pay-api-get-paychannelchannellinkidtokenscustomercustomerid-copy-of-get-payment-gateways"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `customerId` | path | string | yes |  |
| `page` | query | integer | no | Page number |
| `size` | query | integer | no | Page size |

**Response Codes**

- `200` — 200
- `404` — Not Found

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `total` | integer |  |
| `page` | integer |  |
| `size` | integer |  |
| `items` | array<object> |  |

**Response Example (200)**

```json
{
  "total": 1,
  "page": 1,
  "size": 50,
  "items": [
    {
      "id": "699efe108a0e8c5d5071b104",
      "accountId": "67ff949465c301bea16fac30",
      "customerId": "customer_123",
      "card": {
        "brand": "visa",
        "last4": "1111",
        "expirationMonth": 3,
        "expirationYear": 2030,
        "bin": "41111111",
        "funding": "credit"
      },
      "provider": "basis_theory",
      "providerId": "357315df-223c-41a6-b14f-8d000cf6d434",
      "status": "verified",
      "verification": {
        "paymentId": "699efe108a0e8c5d5071b105",
        "providerTokenIntentId": "a7d9e76a-9898-40f9-b2e5-ddfdb039d03c"
      },
      "gateway": 4,
      "paymentGatewayToken": null
    }
  ]
}
```

### POST `/pay/channel/{channelLinkId}/payments/{paymentId}/reauthorize` — Copy of Request Payment

<a id="pay-api-post-paychannelchannellinkidpaymentspaymentidreauthorize-copy-of-request-payment"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `paymentId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `amount` | integer | no |  |
| `reference` | string | no |  |

**Request Example**

```json
{}
```

**Response Codes**

- `200` — pending
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `paymentId` | string |  |
| `amount` | integer |  |
| `currency` | string |  |
| `status` | string |  |
| `reference` |  |  |
| `failureReason` |  |  |

**Response Example (200)**

```json
{
  "id": "69a01e86d0ab82a119c46041",
  "paymentId": "69a01db3d0ab82a119c45ff4",
  "amount": 2500,
  "currency": "EUR",
  "status": "pending",
  "reference": null,
  "failureReason": null
}
```

### POST `/pay/channel/{channelLinkId}/payments/request` — Request Payment

<a id="pay-api-post-paychannelchannellinkidpaymentsrequest-request-payment"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gatewayProfileId` | string | yes | "id" retrieved via Get Payment Gateways endpoint |
| `mode` | object | yes |  |
| `amount` | integer | yes |  |
| `currency` | string | yes |  |
| `payableReference` | string | no | This field is deprecated. Use the `payable` field instead. |
| `payer` | object | no |  |
| `payable` | object | yes |  |
| `billingAddress` | object | no |  |
| `captureMode` | string | no |  |

**Request Example**

```json
{
  "gatewayProfileId": "6659eddc88ac699157639719",
  "mode": {
    "type": "redirect",
    "returnUrl": "https://ordering-system/order",
    "logoUrl": "https://ordering-system/logo.jpeg"
  },
  "amount": "1234",
  "currency": "EUR",
  "payableReference": "order-123456",
  "payer": {
    "name": "John Doe",
    "email": "john.doe@acme.com",
    "reference": "crm-id-1234",
    "ip": "102.129.200.16"
  },
  "payable": {
    "id": "order-12345",
    "items": [
      {
        "quantity": 1,
        "plu": "burger-1",
        "name": "The burger",
        "description": "The best burger",
        "unitPrice": 3000,
        "total": 3000,
        "taxTotal": 0,
        "discountTotal": 0
      }
    ]
  },
  "billingAddress": {
    "country": "US",
    "city": "New York",
    "stateOrProvince": "NY",
    "postalCode": "19087",
    "street": "5th Avenue",
    "houseNumber": "826"
  }
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{\n    \"paymentId\": \"66608ce6406d23da081e1716\",\n    \"paymentStatus\": \"pending\",\n    \"action\": {\n        \"type\": \"redirect\",\n        \"url\": \"https://payment-gateway/complete-payment\"\n    }\n}"
```

### GET `/pay/channel/{channelLinkId}/payments/{paymentId}` — Get Payment

<a id="pay-api-get-paychannelchannellinkidpaymentspaymentid-get-payment"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes |  |
| `paymentId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string |  |
| `payableReference` | string |  |
| `amount` | integer |  |
| `currency` | string |  |
| `payer` | object |  |
| `status` | string |  |
| `failureReason` |  |  |

**Response Example (200)**

```json
"{\n    \"id\": \"6687aee6424adb6b0114b896\",\n    \"payableReference\": \"order-123456\",\n    \"amount\": 1000,\n    \"currency\": \"EUR\",\n    \"payer\": {\n        \"name\": \"John Doe\",\n        \"email\": \"john@doe.com\",\n        \"reference\": \"cus-123456\"\n    },\n    \"status\": \"authorized\",\n    \"failureReason\": null\n}"
```

### DELETE `/pay/channel/{channelLinkId}/tokens/{tokenId}` — Copy of Copy of Get Payment Gateways

<a id="pay-api-delete-paychannelchannellinkidtokenstokenid-copy-of-copy-of-get-payment-gateways"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channelLinkId` | path | string | yes | The channel link ID - a BSON ObjectId |
| `tokenId` | path | string | yes | The token ID - a BSON ObjectId |

**Response Codes**

- `204` — 204
- `404` — Not Found
- `422` — Unprocessable Entity

**Request Example**

```bash
curl --request DELETE \
     --url https://api.staging.deliverect.com//pay/channel/{channelLinkId}/tokens/{tokenId} \
     --header 'Accept: application/json'
```


---

## Pay At Table API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### GET `/{channel}/channelLinks/{channelLinkId}/bills/{billId}` — GET Bill by ID

<a id="pay-at-table-api-get-channelchannellinkschannellinkidbillsbillid-get-bill-by-id"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channel` | path | string | yes | Identifier of the channel making the request. |
| `channelLinkId` | path | string | yes | ID of the channelLink that is requesting to receive the bills. |
| `billId` | path | string | yes | ID of the bill. |

**Response Codes**

- `200` — 200
- `400` — 400
- `501` — 501

**Response Example (200)**

```json
"{\n  \"callbackId\": \"62fe4b2f913e738c62fa5f90\",\n  \"bill\": {\n    \"freshness\": 50,\n    \"id\": \"62fe4993887d65385ab8e096\",\n    \"table\": {\n      \"id\": \"T1\",\n      \"name\": \"Table 1\"\n    },\n    \"posSpecificData\": {\n      \"id\": \"POSID123456\",\n    },\n    \"createdAt\": \"2022-02-14T12:00:00.000Z\",\n    \"closedAt\": \"\",\n    \"decimalDigits\": 2,\n    \"discountTotal\": 100,\n    \"discounts\": [\n      {\n        \"name\": \"Happy to see you back\",\n        \"amount\": 100\n      }\n    ],\n    \"surchargesTotal\": 200,\n    \"surcharges\": [\n      {\n        \"name\": \"VIP Waiter service\",\n        \"amount\": 200\n      }\n    ],\n    \"taxTotal\": 300,\n    \"taxes\": [\n      {\n        \"name\": \"VAT 20%\",\n        \"amount\": 300\n      }\n    ],\n    \"total\": 1900,\n    \"totalDue\": 1900,\n    \"items\": [\n      {\n        \"plu\": \"10000000-1\",\n        \"name\": \"Moon Burger\",\n        \"quantity\": 2,\n        \"price\": 750,\n        \"subItems\": []\n      }\n    ],\n    \"payments\": [\n      {\n        \"totalAmount\": 1400,\n        \"paymentType\": \"Credit Card\"\n      }\n    ]\n  }\n}"
```

### GET `//{channel}/channelLinks/{channelLinkId}/tables/{tableId}/bills` — GET Bills by Table

<a id="pay-at-table-api-get-channelchannellinkschannellinkidtablestableidbills-get-bills-by-table"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `channel` | path | string | yes | Identifier of the channel making the request. |
| `channelLinkId` | path | string | yes | ID of the channelLink that is requesting to receive the bills. |
| `tableId` | path | string | yes | ID of the table. ID can be retrieved via the GET POS Tables endpoint. |

**Response Codes**

- `200` — 200
- `400` — 400
- `404` — 404
- `501` — 501

**Response Example (200)**

```json
"{\n  \"callbackId\": \"62fe5916913e738c62fa5f9a\",\n  \"bills\": [\n    {\n      \"freshness\": 20,\n      \"id\": \"62fe4993887d65385ab8e096\",\n      \"table\": {\n        \"id\": \"T1\",\n        \"name\": \"Table 1\"\n      },\n      \"posSpecificData\": {\n        \"id\": \"POSID123456\",\n      },\n      \"createdAt\": \"2022-02-14T12:00:00.000Z\",\n      \"closedAt\": \"\",\n      \"decimalDigits\": 2,\n      \"discountTotal\": 100,\n      \"discounts\": [\n        {\n          \"name\": \"Happy to see you back\",\n          \"amount\": 100\n        }\n      ],\n      \"surchargesTotal\": 200,\n      \"surcharges\": [\n        {\n          \"name\": \"VIP Waiter service\",\n          \"amount\": 200\n        }\n      ],\n      \"taxTotal\": 300,\n      \"taxes\": [\n        {\n          \"name\": \"VAT 20%\",\n          \"amount\": 300\n        }\n      ],\n      \"total\": 1900,\n      \"totalDue\": 1900,\n      \"items\": [\n        {\n          \"plu\": \"10000000-1\",\n          \"name\": \"Moon Burger\",\n          \"quantity\": 2,\n          \"price\": 750,\n          \"subItems\": []\n        }\n      ],\n      \"payments\": [\n        {\n          \"totalAmount\": 1400,\n          \"paymentType\": \"Credit Card\"\n        }\n      ]\n    }\n  ]\n}"
```


---

## Partner Manager API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### POST `//resellers/{partner}/account` — Create Account

<a id="partner-manager-api-post-resellerspartneraccount-create-account"></a>

Creates a new account in Deliverect’s system after a sale has been completed on the partner's side. Account configuration must be sent in the request body.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `partner` | path | string | yes | Unique identifier of the reseller partner |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account_id` | string | yes |  |
| `street` | string | yes |  |
| `postal_code` | string | yes |  |
| `city` | string | yes |  |
| `country` | string | yes |  |
| `phone` | string | yes |  |
| `email_billing` | string | yes |  |
| `first_name_billing` | string | yes |  |
| `last_name_billing` | string | yes |  |
| `business_name` | string | yes |  |
| `currency` | string | yes |  |
| `type_business` | string | no |  |
| `first_name_sales` | string | no |  |
| `last_name_sales` | string | no |  |
| `email_sales` | string | no |  |
| `locations` | object | no |  |

**Request Example**

```json
{
  "account_id": "XXXXX",
  "street": "Example street",
  "postal_code": "100000",
  "city": "London",
  "country": "UK",
  "phone": "+17812054111",
  "email_billing": "test@test.com",
  "first_name_billing": "Andrea",
  "last_name_billing": "Deliverect",
  "business_name": "Andrea's little shop",
  "currency": "GBP",
  "type_business": "SMB",
  "locations": [
    {
      "location_name": "Andrea's little shop - Downtown",
      "location_id": "XXXXX-1",
      "core_product": "Unlimited",
      "billing_frequency": "M",
      "status": "active"
    },
    {
      "location_name": "Andrea's little shop - Upper East",
      "location_id": "XXXXX-2",
      "core_product": "Unlimited",
      "billing_frequency": "M",
      "status": "active"
    }
  ]
}
```

**Response Codes**

- `201` — 201
- `400` — 400
- `404` — 404
- `409` — 409
- `500` — 500
- `503` — 503

**Response Fields (201, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string |  |

**Response Example (201)**

```json
"{\n  \"response\": \"OK\"\n}\n"
```

### PATCH `/{partner}/account` — Update Account

<a id="partner-manager-api-patch-partneraccount-update-account"></a>

Updates the information of an existing account in the Deliverect system if a change has been made in the partner system. Example: business email has changed or the billing end date has been extended.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `partner` | path | string | yes | Unique identifier of the partner |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account_id` | string | yes |  |
| `street` | string | no |  |
| `postal_code` | string | no |  |
| `city` | string | no |  |
| `country` | string | no |  |
| `phone` | string | no |  |
| `email_billing` | string | no |  |
| `first_name_billing` | string | no |  |
| `last_name_billing` | string | no |  |
| `business_name` | string | no |  |
| `billing_start_date` | string | no |  |
| `billing_end_date` | string | no |  |
| `currency` | string | no |  |
| `type_business` | string | no |  |

**Request Example**

```json
{
  "account_id": "XXXXX",
  "phone": "+34617745132"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string |  |

**Response Example (200)**

```json
"{\n  \"response\": \"OK\"\n}\n\n"
```

### POST `//{partner}/location` — Create Location/Subscription

<a id="partner-manager-api-post-partnerlocation-create-locationsubscription"></a>

Creates a new location/subscription in Deliverect’s system after a new subscription on an existing account has been completed on the partners side.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `partner` | path | string | yes | Unique identifier of the partner |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account_id` | string | yes |  |
| `locations` | object | no |  |

**Request Example**

```json
{
  "account_id": "XXXXX",
  "locations": [
    {
      "location_name": "Andrea' s little shop - Finsbury Park",
      "location_id": "XXXXX-3",
      "core_product": "Unlimited",
      "billing_frequency": "M"
    }
  ]
}
```

**Response Codes**

- `200` — 200
- `400` — 400
- `404` — 404
- `500` — 500
- `503` — 503

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string |  |

**Response Example (200)**

```json
"{\n  \"response\": \"OK\"\n}\n\n"
```

### PATCH `//{partner}/location` — Update Location/Subscription

<a id="partner-manager-api-patch-partnerlocation-update-locationsubscription"></a>

Updates a new location/subscription in Deliverect system after a change has been registered on the partners side. Example: Subscription canceled

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `partner` | path | string | yes | Unique identifier of the partner |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `api_key` | string | yes |  |
| `account_id` | string | yes |  |
| `locations` | object | no |  |

**Request Example**

```json
{
  "account_id": "XXXXX",
  "locations": [
    {
      "status": "Canceled",
      "location_id": "XXXXX-3"
    }
  ]
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string |  |

**Response Example (200)**

```json
"{\n  \"response\": \"OK\"\n}\n"
```


---

## OAuth2 API

**Version:** `1.0`

**Servers:**
- `https://api.staging.deliverect.com/`

**Security:** `sec0` (oauth2)

### POST `/oauth/token` — Get Access Token

<a id="oauth2-api-post-oauthtoken-get-access-token"></a>

This endpoint allows you to exchange client credentials for a Bearer access token, required when authenticating API requests made to Deliverect.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `client_id` | string | yes |  |
| `client_secret` | string | yes |  |
| `audience` | string | yes |  |
| `grant_type` | string | yes |  |

**Response Codes**

- `200` — 200
- `401` — 401

**Response Example (200)**

```json
"{\n    \"access_token\": \"eyJ***BGLw\",\n    \"expires_at\": 17******52,\n    \"expires_in\": 8***0,\n    \"scope\": \"\",\n    \"token_type\": \"Bearer\"\n}"
```


---

## Delete Customer API

**Version:** `1.0.0`

**Servers:**
- `https://api.staging.deliverect.com/`

### GET `/new-endpoint` — New Endpoint

<a id="delete-customer-api-get-new-endpoint-new-endpoint"></a>

This is your first endpoint! Edit this page to start documenting your API.

**Response Codes**

- `200` — Successful response

**Request Example**

```bash
curl --request GET \
     --url https://api.staging.deliverect.com//new-endpoint \
     --header 'Accept: application/json'
```


---

## Webhooks

Webhook dikirim oleh Deliverect ke endpoint yang kamu daftarkan. Setiap bagian berikut mendeskripsikan payload event sesuai OpenAPI spec resmi.

## Channel Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/channel/register` — Channel Registration

<a id="channel-webhooks-post-channelregister-channel-registration"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `statusUpdateURL` | string |  |
| `menuUpdateURL` | string |  |
| `snoozeUnsnoozeURL` | string |  |
| `busyModeURL` | string |  |
| `updatePrepTimeURL` | string |  |
| `paymentUpdateURL` | string |  |
| `courierUpdateURL` | string |  |
| `menuUrl` | string |  |

**Response Example (200)**

```json
{
  "statusUpdateURL": "https://integrator.com/statusUpdate",
  "menuUpdateURL": "https://integrator.com/menuUpdate",
  "snoozeUnsnoozeURL": "https://integrator.com/snoozeUnsnooze",
  "busyModeURL": "https://integrator.com/busyMode",
  "updatePrepTimeURL": "https://integrator.com/updatePrepTimeURL",
  "paymentUpdateURL": "https://yourwebhook.com/payment_update",
  "courierUpdateURL": "https://yourwebhook.com/courier_update",
  "authorizationURL": "https://yourwebhook.com/authorization",
  "menuUrl": "https://integrator.com/store"
}
```

### POST `/channel/order_status` — Order Status Update

<a id="channel-webhooks-post-channelorderstatus-order-status-update"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/channel/courier_update` — Courier Update

<a id="channel-webhooks-post-channelcourierupdate-courier-update"></a>

This webhook delivers real-time updates on each delivery, based on information provided by the integrated Dispatch partner.

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/channel/snooze` — Snooze / Unsnooze Products

<a id="channel-webhooks-post-channelsnooze-snooze-unsnooze-products"></a>

Webhook events will be sent when items are snoozed or unsnoozed

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no | Snooze |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/channel/busy_mode` — Busy mode

<a id="channel-webhooks-post-channelbusymode-busy-mode"></a>

When a store status changes to open or closed, a webhook event will be sent

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/channel/prep_time` — Preparation time update

<a id="channel-webhooks-post-channelpreptime-preparation-time-update"></a>

{{YourSetwebhookUrl}}

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/channel/payment_update` — Payment update

<a id="channel-webhooks-post-channelpaymentupdate-payment-update"></a>

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{}"
```

### POST `/channel/authorize` — SSO authorization

<a id="channel-webhooks-post-channelauthorize-sso-authorization"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelLink` | string | yes | ID of the channel link requesting the SSO, to be redirected to. |
| `redirectUrl` | string | no | url to redirect after the authorization is completed |
| `customer` | string | no | SSO verified customer (firstName, lastName, email, phoneNumber, providerId) |
| `email` | string | no | email of the customer |
| `phoneNumber` | string | no | phone number of the customer |
| `name` | string | no | name of the customer |

**Response Codes**

- `200` — 200
- `302` — 302

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `authCode` | string |  |

**Response Example (200)**

```json
"{\n  \"authCode\": \"my-authorization-code\"\n}"
```

### POST `/channel/retailEvents` — Picking Status Update

<a id="channel-webhooks-post-channelretailevents-picking-status-update"></a>

When a store process order picking status updates, this webhook can be set to receive these events

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//channel/retailEvents \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/channel/amendments` — Amendments

<a id="channel-webhooks-post-channelamendments-amendments"></a>

When a store processes amendments for one or more items within an order, this webhook will deliver the amendment details

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//channel/amendments \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### GET `/channel/orders/{channelOrderId}/substitute/{plu}` — GET Substitutes

<a id="channel-webhooks-get-channelorderschannelorderidsubstituteplu-get-substitutes"></a>

This is a GET webhook provided by the channel, which returns valid substitute item PLUs for any requested substitution

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `plu` | path | string | yes | Unique identifier of the item, as communicated within the menu payload |
| `channelOrderId` | path | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `substituteItems` | array<object> |  |

**Response Example (200)**

```json
"{\n   \"substituteItems\":[\n      {\n         \"plu\":\"COLA1\",\n         \"quantity\":1,\n         \"name\":\"Cola\",\n         \"price\":200\n      }\n   ]\n}"
```

### POST `/channel/oauth/authorize?client_id={integration_id}&state={state_id}&redirect_uri={redirect_uri}&response_type={response_type}&metadata={metadata}` — Oauth flow

<a id="channel-webhooks-post-channeloauthauthorizeclientidintegrationidstatestateidredirecturiredirecturiresponsetyperesponsetypemetadatametadata-oauth-flow"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `integration_id` | path | string | yes |  |
| `state_id` | path | string | yes | The state parameter protects against XSRF attacks |
| `redirect_uri` | path | string | yes |  |
| `response_type` | path | string | yes |  |
| `metadata` | path | string | yes |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `client_id` | string | yes |  |
| `client_secret` | string | yes |  |
| `code` | string | yes |  |
| `grant_type` | string | yes |  |

**Response Codes**

- `200` — 200
- `401` — 401

**Response Example (200)**

```json
"{\n  \"access_token\": str,\n  \"refresh_token\": str,\n  \"token_type: str  # Typically `Bearer`\n  \"expires_in: int | null\n  \"refresh_token_expires_in: int | null \n  \"scope\": \"venue orders\"\n}"
```

### POST `/channel/menu_update/` — Menu Update

<a id="channel-webhooks-post-channelmenuupdate-menu-update"></a>

Customers will publish their menu to a provided webhook URL. This delivers JSON containing all the necessary attributes to display their menu as intended

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Commerce Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/commerce/menu_publish` — Menu Update 

<a id="commerce-webhooks-post-commercemenupublish-menu-update"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//commerce/menu_publish \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/commerce/snoozedProducts` — Snoozed Products 

<a id="commerce-webhooks-post-commercesnoozedproducts-snoozed-products"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//commerce/snoozedProducts \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/commerce/busyMode` — Busy Mode

<a id="commerce-webhooks-post-commercebusymode-busy-mode"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//commerce/busyMode \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/order_update` — Order Status Update

<a id="commerce-webhooks-post-orderupdate-order-status-update"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//order_update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/checkout_update` — post_checkout-update

<a id="commerce-webhooks-post-checkoutupdate-postcheckout-update"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//checkout_update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/courier_update` — Courier Status Update

<a id="commerce-webhooks-post-courierupdate-courier-status-update"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//courier_update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```


---

## Delete Customer Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/deleteCustomer/delete` — deletecustomer_delete

<a id="delete-customer-webhooks-post-deletecustomerdelete-deletecustomerdelete"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `customerId` | string | yes | Unique identifier of the customer |
| `accountId` | string | yes | Deliverect account identifier |
| `responseSLA` | integer | yes | Expected response timeframe |
| `requestDate` | string | yes | Timestamp of request creation |
| `requestId` | string | yes | Unique Id for the deletion request |

**Request Example**

```json
{
  "customerId": "customer_123",
  "accountId": "507f1f77bcf86cd799439011",
  "responseSLA": 15,
  "requestDate": "2025-03-19T12:00:00.000Z"
}
```

**Response Codes**

- `200` — 200
- `201` — Created
- `400` — Bad Request
- `404` — Not Found
- `500` — Internal Server Error

**Response Example (200)**

```json
"{}"
```


---

## Dispatch Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/dispatch/validate_job` — Validate Delivery Job

<a id="dispatch-webhooks-post-dispatchvalidatejob-validate-delivery-job"></a>

The initial dispatch notification that a new job is available which needs validated as being deliverable

**Response Codes**

- `200` — 200
- `400` — 400
- `422` — 422

**Response Example (200)**

```json
"{\n  \"jobId\": \"627a6f4c2*****3fbc79a\",\n  \"canDeliver\": true,\n  \"distance\":10,\n  \"pickupTimeETA\": \"2022-05-10T14:47:31.649000Z\",\n  \"deliveryLocations\": [\n    {\n      \"deliveryId\": \"ABC567\",\n      \"orderId\": \"627a6f*****5c09221a9837\",\n      \"deliveryTimeETA\": \"2022-05-10T14:57:31.649000Z\"\n    }\n  ],\n  \"price\": {\n    \"price\": 750,\n    \"taxRate\": 10000\n  }\n}"
```

### POST `/dispatch/create_job` — Create Delivery Job

<a id="dispatch-webhooks-post-dispatchcreatejob-create-delivery-job"></a>

Once a delivery job is validated a second webhook event will be sent to confirm the full details

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400
- `422` — 422

**Response Example (200)**

```json
"{}"
```

### POST `/dispatch/cancel_job` — Cancel Delivery Job

<a id="dispatch-webhooks-post-dispatchcanceljob-cancel-delivery-job"></a>

A merchant or ordering channel may cancel the order, which in turn will cancel the delivery job

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/dispatch/priceJob` — Price Delivery Job

<a id="dispatch-webhooks-post-dispatchpricejob-price-delivery-job"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/dispatch/updateJob` — Copy of Cancel Delivery Job

<a id="dispatch-webhooks-post-dispatchupdatejob-copy-of-cancel-delivery-job"></a>

A merchant or ordering channel may cancel the order, which in turn will cancel the delivery job

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Gift Cards Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/giftCards/registerProfile` — Register profile

<a id="gift-cards-webhooks-post-giftcardsregisterprofile-register-profile"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `account` | string | yes |  |
| `apiKey` | string | yes | API key is the unique identifier of the customer within the gift cards gateway |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `redeemGiftCardURL` | string |  |
| `revertRedeemGiftCardURL` | string |  |
| `getGiftCardBalanceURL` | string |  |

**Response Example (200)**

```json
{
  "redeemGiftCardURL": "https://yourwebhook.com/redeem",
  "revertRedeemGiftCardURL": "https: //yourwebhook.com/reverse",
  "getGiftCardBalanceURL": "https://yourwebhook.com/balance"
}
```

### POST `/giftCards/redeem` — Redeem gift cards

<a id="gift-cards-webhooks-post-giftcardsredeem-redeem-gift-cards"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{}
```

### POST `/giftCards/reverse` — Reverse gift card payments

<a id="gift-cards-webhooks-post-giftcardsreverse-reverse-gift-card-payments"></a>

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## KDS Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/kds/productUpdate` — kds_productupdate

<a id="kds-webhooks-post-kdsproductupdate-kdsproductupdate"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no | application/json |
| `Accept` | header | string | no | application/json |
| `User-Agent` | header | string | no | Deliverect/{version} |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no | {signature} |

**Response Codes**

- `200` — OK

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds/productUpdate \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/kds/product_update` — kds_product_update

<a id="kds-webhooks-post-kdsproductupdate-kdsproductupdate"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds/product_update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/kds/new-endpoint` — kds_new_endpoint

<a id="kds-webhooks-post-kdsnew-endpoint-kdsnewendpoint"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds/new-endpoint \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/kds_order_notification` — kds_order_notification

<a id="kds-webhooks-post-kdsordernotification-kdsordernotification"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `locationId` | string | yes |  |
| `channelLinkId` | string | yes |  |
| `checkoutId` | string | yes |  |
| `status` | string | yes |  |
| `reason` | string | yes |  |
| `updatedAt` | string | yes |  |

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds_order_notification \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/kds/register_kds` — kds_register_kds

<a id="kds-webhooks-post-kdsregisterkds-kdsregisterkds"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds/register_kds \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/kds/order_status_update` — kds_order_status_update

<a id="kds-webhooks-post-kdsorderstatusupdate-kdsorderstatusupdate"></a>

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//kds/order_status_update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```


---

## Loyalty Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/loyalty/registration` — Register Loyalty Partner

<a id="loyalty-webhooks-post-loyaltyregistration-register-loyalty-partner"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no | application/json |
| `Accept` | header | string | no | application/json |
| `User-Agent` | header | string | no | Deliverect/{version} |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no | {signature} |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `apiKey` | string | no | A unique identifier, typically a string of characters, used to authenticate and authorize a user, application, or project when interacting with an API. |
| `loyaltyProfileId` | string | no | The Id of the profile where the response configuration was stored |
| `accountId` | string | no | The Deliverect's account id of the customer. |

**Request Example**

```json
{
  "accountId": "6401c934c43f86ebfedaeb9c",
  "loyaltyProfileId": "67acb1893b57bab8866dfa4c",
  "apiKey": "123***890"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `customerURL` | string |  |
| `loyaltyProgramsURL` | string |  |
| `orderURL` | string |  |
| `tiersURL` | string |  |

**Response Example (200)**

```json
{
  "customerURL": "https://yourserver.com/customer",
  "customerWalletURL": "https://yourserver.com/customerWallet",
  "validateWalletURL": "https://yourserver.com/validateWallet",
  "loyaltyProgramsURL": "https://yourserver.com/programs",
  "loyaltyValidateProgramsURL": "https://yourserver.com/validatePrograms",
  "orderURL": "https://yourserver.com/orders",
  "tiersURL": "https://yourserver.com/tiers"
}
```

### GET `/loyalty/customer` — Get Loyalty Customer

<a id="loyalty-webhooks-get-loyaltycustomer-get-loyalty-customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `email` | query | string | no | Email of the end customer. The requirement of this field will depend on the loyalty integration configured on the customer's account |
| `phoneNumber` | query | string | no | Phone number of the end customer in E164 format. The requirement of this field will depend on the loyalty integration configured on the customer's account |
| `accountId` | query | string | no | The merchant's account ID in Deliverect |
| `loyaltyProfileId` | query | string | no | The Id of the profile where the response configuration was stored |
| `Content-Type` | header | string | no | application/json |
| `Accept` | header | string | no | application/json |
| `User-Agent` | header | string | no | Deliverect/{version} |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no | {signature} |
| `locationId` | query | string | no | The location ID related to the merchant's account in Deliverect |
| `channelLinkId` | query | string | no | The channel link ID related to the location of the merchant's account in Deliverect |

**Response Codes**

- `200` — 200
- `404` — 404

**Response Example (200)**

```json
"{\n    \"providerId\": \"partner-customer-id-1234\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"email\": \"john.doe@acme.com\",\n    \"phoneNumber\": \"+32111111111\",\n    \"dateOfBirth\": \"1970-01-01T00:00:00+00:00\",\n    \"status\": \"active\",\n    \"acceptedTCAt\": \"1970-01-01T00:00:00+00:00\",\n    \"lifetimePointsBalance\": 7837,\n    \"tier\": {\n        \"name\": \"Gold\",\n        \"description\": \"For premium members\",\n        \"media\": {\n            \"url\": \"https://image.png\",\n            \"mediaType\": \"image\"\n        },\n    }\n}\n"
```

### POST `/loyalty/customer` — Create Loyalty Customer

<a id="loyalty-webhooks-post-loyaltycustomer-create-loyalty-customer"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `Accept` | header | string | no | application/json |
| `User-Agent` | header | string | no |  |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | yes | email of the end customer |
| `phoneNumber` | string | no | phone number of the end customer in E164 format. |
| `firstName` | string | no | first name of the end customer |
| `lastName` | string | no | last name of the end customer |
| `dateOfBirth` | string | no | date of birth of the end customer in ISO format |
| `accountId` | string | no | The deliverect customer account id |
| `loyaltyProfileId` | string | no | The Id of the profile where the response configuration was stored |
| `locationId` | string | no | The location ID related to the merchant's account in Deliverect |
| `channelLinkId` | string | no | The channel link ID related to the location of the merchant's account in Deliverect |

**Response Codes**

- `201` — 201
- `409` — 409

**Response Example (201)**

```json
"{\n    \"firstName\": \"John\",\n    \"lastName\": \"Doe\",\n    \"email\": \"mr.doe@email.com\",\n    \"phoneNumber\": \"+32111111111\",\n    \"dateOfBirth\": \"2024-01-01T00:00:00+00:00\",\n    \"balance\": 2197,\n    \"acceptedTCAt\": \"1970-01-01T00:00:00+00:00\",\n    \"tier\": {\n        \"name\": \"Gold\",\n        \"description\": \"For premium members\",\n        \"media\": {\n            \"url\": \"https://image.png\",\n            \"mediaType\": \"image\"\n        },\n    },\n    \"lifetimePointsBalance\": 7837,\n    \"providerId\": \"123\",\n}"
```

### POST `/loyalty/order` — Create Loyalty Order

<a id="loyalty-webhooks-post-loyaltyorder-create-loyalty-order"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `Accept` | header | string | no |  |
| `User-Agent` | header | string | no |  |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### GET `/loyalty/tiers` — Get Loyalty Tiers

<a id="loyalty-webhooks-get-loyaltytiers-get-loyalty-tiers"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `accountId` | query | string | no | The merchant's account Id in Deliverect |
| `loyaltyProfileId` | query | string | no | The Id of the profile where the response configuration was stored |
| `Content-Type` | header | string | no |  |
| `Accept` | header | string | no |  |
| `User-Agent` | header | string | no |  |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no |  |
| `locationId` | query | string | no | The location ID related to the merchant's account in Deliverect |
| `channelLinkId` | query | string | no | The channel link ID related to the location of the merchant's account in Deliverect |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"[\n   {\n       \"name\": \"Bronze\",\n       \"description\": \"Way to go!\",\n       \"media\": {\n           \"url\": \"https://deliverect.com/icon1.png\",\n           \"mediaType\": \"image\"\n       }\n   },\n   {\n       \"name\": \"Silver\",\n       \"description\": \"This is a higher tier!\",\n       \"media\": {\n           \"url\": \"https://deliverect.com/icon2.png\",\n           \"mediaType\": \"image\"\n       }\n   }\n]"
```

### POST `/loyalty/token` — Loyalty SSO - OAuth token exchange

<a id="loyalty-webhooks-post-loyaltytoken-loyalty-sso---oauth-token-exchange"></a>

https://integrator.com/auth/token

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `grant_type` | string | yes |  |
| `client_id` | string | yes |  |
| `client_secret` | string | yes |  |
| `code` | string | yes |  |
| `accountId` | string | no | The deliverect customer account id |
| `loyaltyProfileId` | string | no | The loyalty profile id being use |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `token_type` | string |  |
| `scope` | string |  |
| `created_at` | string |  |
| `access_token` | string |  |
| `refresh_token` | string |  |

**Response Example (200)**

```json
"{\n    \"token_type\": \"Bearer\",\n    \"scope\": \"passwordless\",\n    \"created_at\": \"1709743524\",\n    \"access_token\": \"test-access-token\",\n    \"refresh_token\": \"test-refresh-token\"\n}"
```

### GET `/loyalty/get/wallet` — loyalty_get_wallet

<a id="loyalty-webhooks-get-loyaltygetwallet-loyaltygetwallet"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `cash` | object |  |
| `points` | object |  |

**Request Example**

```bash
curl --request GET \
     --url https://yourwebhook.com//loyalty/get/wallet \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/loyalty/programs-loyalty` — Get Loyalty Programs

<a id="loyalty-webhooks-post-loyaltyprograms-loyalty-get-loyalty-programs"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `Accept` | header | string | no |  |
| `User-Agent` | header | string | no |  |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no |  |

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `order` | object | no |  |
| `accountId` | string | no | The merchant's account ID in Deliverect |
| `loyaltyProfileId` | string | no | The Id of the profile where the response configuration was stored |
| `locationId` | string | no | The location ID related to the merchant's account in Deliverect |
| `channelLinkId` | string | no | The channel link ID related to the location of the merchant's account in Deliverect |

**Request Example**

```json
{
  "order": {
    "account": "6403c0b9ea6956b6f6970c5b",
    "location": "6403c0baea6956b6f6970c5c",
    "channelLinkId": "6403c0baea6956b6f6970c5c",
    "orderType": 3,
    "customer": {
      "email": "loyalty@customer.com",
      "phoneNumber": "+31201234567",
      "name": "John Doe"
    },
    "items": [
      {
        "plu": "CMB-02",
        "name": "Vegetarian Rames",
        "price": 1700,
        "quantity": 1,
        "subItems": [
          {
            "plu": "VEG-01",
            "name": "Vegetables Sayur Lodeh",
            "price": 0,
            "quantity": 1,
            "subItems": []
          },
          {
            "plu": "VEG-02",
            "name": "Vegetables Mix Tumisan",
            "price": 0,
            "quantity": 1,
            "subItems": []
          }
        ]
      }
    ],
    "discounts": [
      {
        "name": "Amount discount",
        "programId": "1234",
        "type": "discount_amount",
        "amount": 100
      }
    ],
    "subTotal": 1700,
    "discountTotal": -100,
    "paymentAmount": 1600,
    "decimalDigits": 2
  }
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"[\n    {\n        \"programId\":\"1\",\n        \"title\":\"Discount\",\n        \"description\":\"Discount amount for the order.\",\n        \"cost\":100,\n        \"type\":\"discount_amount\",\n        \"discount\":100,\n        \"applicable\": true\n    },\n    {\n        \"programId\":\"2\",\n        \"title\":\"Free item\",\n        \"description\":\"Get an item for free.\",\n        \"cost\": 500,\n        \"type\":\"free_item\",\n        \"itemPLU\":\"DRN-01\",\n        \"media\":{\n            \"url\":\"https://program.media/image\",\n            \"mediaType\":\"image\"\n        },\n        \"applicable\": false\n    },\n    {\n        \"programId\":\"3\",\n        \"title\":\"Buy one get one for free\",\n        \"description\":\"Order an item and get another one for free.\",\n        \"cost\": 100,\n        \"type\":\"buy_one_get_one_free\",\n        \"itemPLU\":\"DRN-02\",\n        \"media\":{\n            \"url\":\"https://program.media/image\",\n            \"mediaType\":\"image\"\n        },\n        \"applicable\": true\n    },\n    {\n        \"programId\": \"4\",\n        \"title\": \"50% Order percent off\",\n        \"type\": \"discount_percentage\",\n        \"applicable\": true,\n        \"description\": \"Get 50% OFF the order\",\n        \"cost\": 200,\n        \"media\": {\n            \"url\": \"https://res.cloudinary.com/punchh/image/upload/c_limit,f_auto,fl_lossy,g_center,q_auto/v1/punchhstatic-mothership2/redeemables/redeemable_images/000/036/785/original/dd4c98899742473e80ac703670279794ead73e36.png\",\n            \"mediaType\": \"image\"\n        },\n        \"expiresAt\": null,\n        \"discount\": 100,\n\n       \n    },\n  {\n        \"programId\": \"5\",\n        \"title\": \"Coke $10 off\",\n        \"type\": \"item_discount_amount\",\n        \"applicable\": true,\n        \"description\": \"To quench your thirst!\",\n        \"cost\": 150,\n        \"media\": {\n            \"url\": \"https://image.npg\",\n            \"mediaType\": \"image\"\n        },\n        \"expiresAt\": null,\n        \"discount\": 1000,\n        \"itemPLU\": \"1282933778\"\n  },\n   {\n        \"programId\":\"6\",\n        \"title\": \"Coke 50% off\",\n        \"type\": \"item_discount_percentage\",\n        \"applicable\": true,\n        \"description\": \"To quench your thirst!\",\n        \"cost\": 150,\n        \"media\": {\n            \"url\": \"https://image.npg\",\n            \"mediaType\": \"image\"\n        },\n        \"expiresAt\": null,\n        \"discount\": 5000,\n        \"itemPLU\": \"1282933778\"\n    }\n\n]"
```

### POST `/loyalty/validateprogram` — loyalty_validateprogram

<a id="loyalty-webhooks-post-loyaltyvalidateprogram-loyaltyvalidateprogram"></a>

**Response Codes**

- `200` — 200

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `locationId` | string |  |
| `channelLinkId` | string | this is the storeId |
| `checkoutId` | string |  |
| `status` | string | "completed" or "failed" |
| `reason` | string |  |
| `updatedAt` | string |  |

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//loyalty/validateprogram \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```

### POST `/loyalty/cancelOrder` — Cancel Loyalty Order

<a id="loyalty-webhooks-post-loyaltycancelorder-cancel-loyalty-order"></a>

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Content-Type` | header | string | no |  |
| `Accept` | header | string | no |  |
| `User-Agent` | header | string | no |  |
| `X-Server-Authorization-HMAC-SHA256` | header | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Menu API Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/operational_callback` — Operational Callback

<a id="menu-api-webhooks-post-operationalcallback-operational-callback"></a>

This will be called when certain operational processes have been actioned. At present, this includes events where menus are published.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---

## Pay API Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/payment-update` — payapi_payment_update

<a id="pay-api-webhooks-post-payment-update-payapipaymentupdate"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paymentId` | string | yes |  |
| `status` | string | yes |  |
| `gatewayProfilelinkId` | string | yes |  |
| `methodRaw` | string | yes |  |

**Response Codes**

- `200` — 200

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//payment-update \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```


---

## Pay Platform Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/payPlatform/payments/profile/register` — Register Profile

<a id="pay-platform-webhooks-post-payplatformpaymentsprofileregister-register-profile"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gatewayProfileId` | string | yes | Unique identifier of the payment gateway within a Deliverect customer account |
| `accountId` | string | yes |  |
| `apiKey` | string | yes | API key is the unique identifier of the customer within the payment gateway |
| `webhookUrl` | string | yes | Webhook URL which partners will send payment related update events |

**Request Example**

```json
{
  "gatewayProfileId": "66d721b3df0f5a9fda62dd8b",
  "accountId": "66570956c77ccc6b9d75e445",
  "apiKey": "api-key",
  "webhookUrl": "https://api.staging.deliverect.com/pay/events/integrationName/gatewayProfiles/66d721b3df0f5a9fda62dd8b"
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `requestPaymentURL` | string |  |
| `refundPaymentURL` | string |  |
| `unregisterGatewayProfileURL` | string |  |

**Response Example (200)**

```json
"{\n    \"requestPaymentURL\": \"https://yourwebhook.com/payments/request\",\n    \"refundPaymentURL\": \"https://yourwebhook.com/payments/refund\",\n    \"unregisterGatewayProfileURL\": \"https://yourwebhook.com/payments/unregister-profile\"\n}"
```

### POST `/payPlatform/payments/unregister-profile` — Unregister Profile Event

<a id="pay-platform-webhooks-post-payplatformpaymentsunregister-profile-unregister-profile-event"></a>

When the gateway profile is uninstalled, the partner is expected to handle the unregistered event so that the profile can be uninstalled and disabled.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `accountId` | string | yes | The ID of the account the gateway profile belongs to. |
| `gatewayProfileId` | string | yes | The ID of the profile being unregistered. |

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{}"
```

### POST `/payPlatform/payments/request` — Request Payment

<a id="pay-platform-webhooks-post-payplatformpaymentsrequest-request-payment"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `gatewayProfileId` | string | yes |  |
| `amount` | integer | yes |  |
| `currency` | string | yes |  |
| `returnUrl` | string | yes |  |
| `reference` | string | yes |  |
| `logoUrl` | string | no |  |
| `payer` | object | no |  |

**Request Example**

```json
{
  "gatewayProfileId": "66d721b3df0f5a9fda62dd8b",
  "amount": "1234",
  "currency": "EUR",
  "reference": "order-123456",
  "payer": {
    "name": "Customer Name",
    "email": "email@customer.com",
    "reference": "customer_external_id_123"
  },
  "returnUrl": "https://ordering-system/order",
  "logoUrl": "https://ordering-system/logo.jpeg"
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{\n    \"update\": {\n        \"gatewayId\": \"payment_id_123456\",\n        \"status\": \"pending\"\n    },\n    \"action\": {\n        \"type\": \"redirect\",\n        \"url\": \"https://generic-gateway.com/complete-payment\"\n    }      \n}"
```

### POST `/payPlatform/payments/refund` — Refund Payment

<a id="pay-platform-webhooks-post-payplatformpaymentsrefund-refund-payment"></a>

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `paymentId` | string | yes |  |
| `amount` | integer | yes |  |

**Request Example**

```json
{
  "paymentId": "gateway-payment-id",
  "amount": 1234
}
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
"{\n    \"gatewayId\": \"gateway-refund-id\",\n    \"status\": \"succeeded\"\n}"
```


---

## POS Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### GET `/floors/locationId` — Sync Floors

<a id="pos-webhooks-get-floorslocationid-sync-floors"></a>

*This is a GET webhook set by the POS

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/product_sync_callback` — Asynchronous Insert / Update Products

<a id="pos-webhooks-post-productsynccallback-asynchronous-insert-update-products"></a>

The webhook will be delivered to a specified endpoint, and the response will include the **`operationReportId`** and the summary of products synced as per below example.

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/tax-calculation/` — Tax Calculation

<a id="pos-webhooks-post-tax-calculation-tax-calculation"></a>

**Request Example**

```json
{
  "_created": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "_updated": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "_id": "62********************7c",
  "account": "61********************a1",
  "channelOrderId": "TEST******4206",
  "channelOrderDisplayId": "T**4206",
  "posId": "",
  "posReceiptId": "",
  "posLocationId": "",
  "status": 4,
  "statusHistory": [],
  "packaging": {
    "includeCutlery": false
  },
  "by": "",
  "orderType": 1,
  "channel": 20003,
  "pos": 0,
  "rating": [],
  "pickupTime": "YYYY-MM-DDTHH:mm:ss.SSSSSSZ",
  "deliveryIsAsap": false,
  "courier": {
    "deliveryBy": "restaurant"
  },
  "customer": {
    "name": "",
    "companyName": "",
    "phoneNumber": "",
    "email": "",
    "note": "",
    "tin": ""
  },
  "deliveryAddress": {},
  "orderIsAlreadyPaid": false,
  "taxes": [
    {
      "name": "GST",
      "total": 465
    }
  ],
  "taxTotal": 466,
  "taxRemitted": 0,
  "payment": {
    "amount": 3811,
    "type": 9,
    "due": 0,
    "rebate": 0
  },
  "note": "",
  "items": [
    {
      "_id": "68********************3c",
      "plu": "11309003-1",
      "name": "Chicken Crunchers",
      "sortOrder": 0,
      "price": 1550,
      "quantity": 2,
      "productType": 1,
      "categoryInfo": {},
      "subItems": [
        {
          "_id": "68********************3c",
          "plu": "P-GHRK",
          "name": "Extra Gherkin",
          "sortOrder": 0,
          "price": 50,
          "quantity": 2,
          "productType": 1,
          "subItems": [],
          "productTags": []
        }
      ],
      "packaging": {
        "includeCutlery": false
      },
      "discountReferenceIds": []
    }
  ],
  "decimalDigits": 2,
  "numberOfCustomers": 0,
  "channelOrderHistoryRawIds": [],
  "serviceCharge": 93,
  "deliveryCost": 0,
  "bagFee": 152,
  "tip": 0,
  "driverTip": 0,
  "smallOrderFee": 0,
  "discountTotal": 0,
  "discounts": [],
  "capacityUsages": [],
  "recent": false,
  "resolvedBy": ""
}
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `taxes` | array<object> |  |

**Response Example (200)**

```json
"{\n  \"taxes\": [\n    {\n    \t\"name\": \"tax-name\",\n    \t\"taxClassId\": 123,\n\t\t\t\"total\": 4455\n\t\t}\n\t]\n}"
```

### GET `/tables/locationId` — Sync Tables

<a id="pos-webhooks-get-tableslocationid-sync-tables"></a>

*This is a GET webhook set by the POS

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RAW_BODY` | string | no |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```

### POST `/orderCancel/` — Order Cancellation

<a id="pos-webhooks-post-ordercancel-order-cancellation"></a>

*This will be the same webhook endpoint set by the POS for Order Notifications

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
""
```

### POST `/register` — Register POS

<a id="pos-webhooks-post-register-register-pos"></a>

*This is a webhook set by the POS

**Request Body** (`application/json`)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `location` | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400

**Response Fields (200, `application/json`)**

| Field | Type | Description |
|-------|------|-------------|
| `ordersWebhookURL` | string |  |
| `syncProductsURL` | string |  |
| `syncTablesURL` | string |  |
| `syncFloorsURL` | string |  |
| `operationsWebhookURL` | string |  |
| `storeStatusWebhookURL` | string |  |

**Response Example (200)**

```json
"{\n  \"ordersWebhookURL\": \"https://integrator.com/ordersWebhookURL\",\n  \"syncProductsURL\": \"https://integrator.com/syncProductsURL\",\n  \"syncTablesURL\": \"https://integrator.com/syncTablesURL\",\n  \"syncFloorsURL\": \"https://integrator.com/syncFloorsURL\",\n  \"operationsWebhookURL\": \"https://integrator.com/operationsURL\",\n  \"storeStatusWebhookURL\": \"https://integrator.com/storeStatusURL\"\n}"
```

### GET `/syncProducts` — Sync Products

<a id="pos-webhooks-get-syncproducts-sync-products"></a>

*This is a GET webhook set by the POS

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
" "
```


---

## Reporting Endpoint Webhook

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/reportingEndpoint/orders` — Reporting Webhooks

<a id="reporting-endpoint-webhook-post-reportingendpointorders-reporting-webhooks"></a>

A service is available to deliver various types of order data typically for reporting purposes

**Response Codes**

- `200` — 200
- `400` — 400

**Request Example**

```bash
curl --request POST \
     --url https://yourwebhook.com//reportingEndpoint/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Bearer <TOKEN>'
```


---

## Store Webhooks

**Version:** `1.0.0`

**Servers:**
- `https://yourwebhook.com/`

**Security:** `bearerAuth` (http, bearer)

### POST `/store/store_status` — Store Status (POST)

<a id="store-webhooks-post-storestorestatus-store-status-post"></a>

e.g. {{YourSetwebhookUrl}}/store_status

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
"{}"
```


---
