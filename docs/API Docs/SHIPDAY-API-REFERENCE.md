# Shipday API Reference (Indonesian / English)

> Referensi lengkap Shipday API dalam bahasa Indonesia + English, disusun ulang dari https://docs.shipday.com/reference.
> Istilah teknis, field, dan contoh kode tetap dalam bahasa Inggris sesuai sumber resmi.
> Tanggal kompilasi: 2026-04-24.

**Base URL:** `https://api.shipday.com`
**Authentication:** header `Authorization: Basic <API_KEY>` atau `x-api-key: <API_KEY>`.

---

## Daftar Isi (Table of Contents)

- [Introduction](#introduction)
  - [Shipday API](#shipday-api)
  - [Shipday SDK](#shipday-sdk)
  - [Authentication](#authentication)
  - [Errors](#errors)
- [Delivery Orders](#delivery-orders)
  - [Delivery Order Object](#delivery-order-object)
  - [Retrieve Active Orders](#retrieve-active-orders)
  - [Retrieve Order Details](#retrieve-order-details)
  - [Insert Delivery Order](#insert-delivery-order)
  - [Edit Order](#edit-order)
  - [Delete Order](#delete-order)
  - [Orders Query](#orders-query)
  - [Assign Order to Driver](#assign-order-to-driver)
  - [Unassign Order from Driver](#unassign-order-from-driver)
  - [Order Ready to Pickup](#order-ready-to-pickup)
  - [Order Status Update](#order-status-update)
- [Pickup Orders](#pickup-orders)
  - [Pickup Order Object](#pickup-order-object)
  - [Retrieve Pickup Order Details](#retrieve-pickup-order-details)
  - [Insert Pickup Order](#insert-pickup-order)
  - [Edit Pickup Order](#edit-pickup-order)
  - [Delete Pickup Order](#delete-pickup-order)
- [Carriers](#carriers)
  - [Carrier Object](#carrier-object)
  - [Retrieve Carriers](#retrieve-carriers)
  - [Add a Carrier](#add-a-carrier)
  - [Delete a Carrier](#delete-a-carrier)
- [Delivery Tracking](#delivery-tracking)
  - [Eta Data Object](#eta-data-object)
  - [Order Delivery Progress](#order-delivery-progress)
- [Partners](#partners)
  - [Shipday Partners](#shipday-partners)
  - [Partner Authentication](#partner-authentication)
  - [Partner Order Object](#partner-order-object)
  - [Completed Orders](#completed-orders)
  - [Partner Orders Query](#partner-orders-query)
  - [Member Details Object](#member-details-object)
  - [Retrieve Members](#retrieve-members)
- [On-Demand Delivery](#on-demand-delivery)
  - [On-Demand Delivery](#on-demand-delivery)
  - [On-Demand Delivery Details Object](#on-demand-delivery-details-object)
  - [Services](#services)
  - [Estimate](#estimate)
  - [Assign](#assign)
  - [Details](#details)
  - [Cancel](#cancel)
  - [Availability](#availability)
- [Webhooks](#webhooks)
  - [Order Status Update Webhook](#order-status-update-webhook)
  - [Driver Location Update Webhook](#driver-location-update-webhook)

---

## Introduction

### Shipday API

Shipday menyediakan REST API untuk mengelola order pengiriman, driver (carrier), pickup, dan integrasi partner.

**Base URL:** `https://api.shipday.com`

API berbasis HTTP dengan response JSON. Untuk penjelasan lengkap dan terbaru, lihat dokumentasi resmi di https://docs.shipday.com/reference.

### Shipday SDK

Shipday menyediakan beberapa SDK open-source yang membungkus REST API dengan error handling bawaan.

Bahasa yang didukung antara lain: **Node.js/JavaScript, Python, Java, PHP, Ruby, Go**. Lihat halaman SDK resmi untuk daftar lengkap dan tautan repository: https://docs.shipday.com/reference/shipday-sdk

### Authentication

Shipday API menggunakan **API Key** untuk autentikasi.

- Dapatkan API Key dari dashboard Shipday: `Settings > Integrations > API Key`.
- Kirim key pada setiap request melalui header `Authorization`.

**Format header:**

```http
Authorization: Basic <API_KEY>
```

Contoh:

```bash
curl -H 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' https://api.shipday.com/orders
```

Selain itu, beberapa endpoint juga mendukung header `x-api-key: <API_KEY>`.

### Errors

Shipday mengembalikan kode HTTP standar untuk menandakan keberhasilan atau kegagalan request.

| Kode | Arti |
|------|------|
| `200 OK` | Request berhasil |
| `201 Created` | Resource berhasil dibuat |
| `400 Bad Request` | Request tidak valid / parameter kurang |
| `401 Unauthorized` | API Key tidak valid atau tidak dikirim |
| `403 Forbidden` | Tidak punya izin mengakses resource |
| `404 Not Found` | Resource tidak ditemukan |
| `409 Conflict` | Konflik state (misal order sudah di-assign) |
| `422 Unprocessable Entity` | Payload valid secara format tapi gagal validasi bisnis |
| `429 Too Many Requests` | Rate limit terlampaui |
| `500 Internal Server Error` | Kesalahan server Shipday |

## Delivery Orders

### Delivery Order Object

Delivery Order Object merepresentasikan satu order pengiriman di Shipday. Struktur field utama (lihat contoh response di `Retrieve Active Orders` dan `Retrieve Order Details`): `orderId`, `orderNumber`, `customer`, `restaurant`, `assignedCarrier`, `activityLog`, `costing`, `paymentMethod`, `orderItems`, `orderStatus`, `trackingLink`, `deliveryInstruction`, `schedule`, `parentId`, `etaTime`.

### Retrieve Active Orders

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Retrieve Order Details

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Insert Delivery Order

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Edit Order

### PUT `/{orderId}`

**Full URL:** `https://api.shipday.com/order/edit/{orderId}`

**Edit Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderId` | integer | no | Unique orderID that was provided from the system once the order was inserted |
| `orderNo` | string | yes | Numeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | yes | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date for the particular order ( yyyy-mm-dd formatv) |
| `expectedPickupTime` | string | no | Expected pickup time for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItems` | array<object> | no | Array of Order item objects |
| `tip` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalCost` | string | no | Total cost for the particular order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string | no | Type of the credit card ( Not needed if the payment method is 'cash' ) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `dropoff` | object | no | Dropoff details breakdown |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/order/edit/orderId \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "orderId": 6355523,
     "orderNo": 99,
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tip": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalCost": "13.47",
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order updated"
}
```



### Delete Order

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Orders Query

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Assign Order to Driver

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Unassign Order from Driver

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Order Ready to Pickup

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



### Order Status Update

### GET `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Retrieve Active Orders**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 22773,
    "orderNumber": "75637",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Isabella",
      "address": "Crespi Dr, Pacifica, CA 94044, USA",
      "phoneNumber": "+8801555552505",
      "emailAddress": "isabella@ymail.com",
      "latitude": 23.810332,
      "longitude": 90.4125181
    },
    "restaurant": {
      "id": 1232332,
      "name": "Kenny's Cafe",
      "address": "640 Crespi Dr #1, Pacifica, CA 94044, United States",
      "phoneNumber": "+16507388777",
      "latitude": 23.8069245,
      "longitude": 90.36869779999999
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Jennifer",
      "codeName": null,
      "phoneNumber": "+1234234233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "jennifer1234@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 0.6443,
    "activityLog": {
      "placementTime": "2019-12-07T05:48:05",
      "expectedPickupTime": "06:15",
      "expectedDeliveryDate": "2019-12-07",
      "expectedDeliveryTime": "06:45",
      "assignedTime": null,
      "startTime": null,
      "pickedUpTime": null,
      "arrivedTime": null,
      "deliveryTime": null
    },
    "costing": {
      "totalCost": 19.55,
      "deliveryFee": 2,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.55,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": null,
    "assignedCarrierId": null,
    "orderStatus": {
      "incomplete": true,
      "accepted": false,
      "orderState": "INCOMPLETE"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": "Ring the bell twice"
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/orders`

**Insert Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `customerName` | string | yes | The name of the customer |
| `customerAddress` | string | yes | Address of the customer |
| `customerEmail` | string | no | Email Address of the customer |
| `customerPhoneNumber` | string | yes | Phone number of the customer with country code |
| `restaurantName` | string | yes | Name of the restaurant |
| `restaurantAddress` | string | yes | Address of the restaurant |
| `restaurantPhoneNumber` | string | no | Phone number of the restaurant with country code |
| `expectedDeliveryDate` | string | no | Expected delivery date in UTC for the particular order ( yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `expectedDeliveryTime` | string | no | Expected Delivery Time in UTC for the particular order (format hh:mm:ss) |
| `pickupLatitude` | number | no | Pickup location latitude |
| `pickupLongitude` | number | no | Pickup location longitude |
| `deliveryLatitude` | number | no | Delivery location latitude |
| `deliveryLongitude` | number | no | Delivery location longitude |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `deliveryFee` | number | no | Delivery fee amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `deliveryInstruction` | string | no | Delivery Instruction for the driver or restaurant (if given) |
| `orderSource` | string | no | Source of the order |
| `additionalId` | string | no | Additional ID for the order |
| `clientRestaurantId` | integer | no | Client Restaurant ID |
| `paymentMethod` | string | no | Selected payment method for the order |
| `creditCardType` | string (enum) | no | Type of the credit card ( Not needed if the payment method is 'cash' ) (enum: VISA, MASTER_CARD, AMEX, OTHER) |
| `creditCardId` | integer | no | Last four digits of the credit card ( Not needed if the payment method is 'cash' ) |
| `pickup` | object | no | Pickup details breakdown |
| `pickup.address` | object | no | Address details |
| `dropoff` | object | no | Dropoff details breakdown |
| `dropoff.address` | object | no | Address details |
| `isCatering` | boolean | no | Marker of catering order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
     "orderNumber": "99qT5A",
     "customerName": "Mr. Jhon Mason",
     "customerAddress": "556 Crestlake Dr, San Francisco, CA 94132, USA",
     "customerEmail": "jhonMason@gmail.com",
     "customerPhoneNumber": "+14152392212",
     "restaurantName": "Popeyes Louisiana Kitchen",
     "restaurantAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
     "restaurantPhoneNumber": "+14152392013",
     "expectedDeliveryDate": "2021-06-03",
     "expectedPickupTime": "17:45:00",
     "expectedDeliveryTime": "19:22:00",
     "pickupLatitude": 41.53867,
     "pickupLongitude": -72.0827,
     "deliveryLatitude": 41.53867,
     "deliveryLongitude": -72.0827,
     "tips": 2.5,
     "tax": 1.5,
     "discountAmount": 1.5,
     "deliveryFee": 3,
     "totalOrderCost": 13.47,
     "deliveryInstruction": "fast",
     "orderSource": "Seamless",
     "additionalId": "4532",
     "clientRestaurantId": 12,
     "paymentMethod": "credit_card",
     "creditCardType": "visa",
     "creditCardId": 1234
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "response": "Order inserted with id 32841107",
  "orderId": 32841107
}
```

**Response Example (400)**

```json
{}
```


### GET `/orders/{ordernumber}`

**Full URL:** `https://api.shipday.com/orders/{ordernumber}`

**Retrieve Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `ordernumber` | path | string | yes | Order reference of the order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/orders/ordernumber \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 20625,
    "orderNumber": "7568",
    "companyId": 409,
    "areaId": 406,
    "customer": {
      "name": "Scarlett",
      "address": "173A, East Kafrul, Dhaka - 1206",
      "phoneNumber": "+14157537081",
      "emailAddress": "scarlett.evana@gmail.com",
      "latitude": 37.735563,
      "longitude": -122.502288
    },
    "restaurant": {
      "id": 2322323,
      "name": "Thai Cottage Restaurant",
      "address": "4041 Judah St, San Francisco, CA 94122, United States",
      "phoneNumber": "+14155665311",
      "latitude": 37.760447,
      "longitude": -122.5055599,
    },
    "assignedCarrier": {
      "id": 30309,
      "personalId": null,
      "name": "Steve",
      "codeName": null,
      "phoneNumber": "+123424233",
      "companyId": null,
      "areaId": null,
      "isOnShift": true,
      "email": "steve93@gmail.com",
      "carrierPhoto": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrier.jpg",
      "isActive": true,
    },
    "distance": 2.011,
    "activityLog": {
      "placementTime": "2020-11-29T11:43:59",
      "expectedPickupTime": "12:12",
      "expectedDeliveryDate": "2020-11-29",
      "expectedDeliveryTime": "12:42",
      "assignedTime": null,
      "startTime": "2020-11-30T13:41:07",
      "pickedUpTime": "2020-12-01T05:43:15",
      "arrivedTime": "2020-12-01T05:43:15",
      "deliveryTime": "2020-12-01T05:43:15"
    },
    "costing": {
      "totalCost": 29.8,
      "deliveryFee": 2.5,
      "tip": 0,
      "discountAmount": 0,
      "tax": 1.3,
      "cashTip": 0
    },
    "paymentMethod": "CASH",
    "orderItems": [
      {
        "name": "Pad Thai",
        "quantity": 2,
        "unitPrice": 13
      }
    ],
    "assignedCarrierId": -1,
    "orderStatus": {
      "incomplete": false,
      "accepted": true,
      "orderState": "ALREADY_DELIVERED"
    },
    "trackingLink": null,
    "feedback": null,
    "schedule": false,
    "parentId": 0,
    "etaTime": "",
    "deliveryInstruction": null
  }
]
```

**Response Example (400)**

```json
{}
```


### POST `/orders/query`

**Full URL:** `https://api.shipday.com/orders/query`

**Orders Query**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startTime` | string | no | Starting time for the query. Placement time of the orders will be compared. |
| `endTime` | string | no | Ending time for the query. Placement time of the orders will be compared. |
| `orderStatus` | string | no | Order status from the supported status types. |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/orders/query \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "startTime": "2020-01-01T00:00:00Z",
     "endTime": "2021-04-11T23:59:59Z",
     "orderStatus": "ALREADY_DELIVERED",
     "startCursor": 1,
     "endCursor": 3
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "orderId": 2413471,
    "orderNumber": "98",
    "companyId": 1199,
    "orderItem": "[{unitPrice:10.0,quantity:1,name:Box}]",
    "accepted": true,
    "placementTime": "2021-04-08T17:23:21Z",
    "requestedPickupTime": "2020-03-20T11:35:19Z",
    "requestedDeliveryTime": "2020-03-20T12:05:19Z",
    "assignedTime": "2021-04-08T20:14:31Z",
    "startTime": "2021-04-08T20:14:47Z",
    "pickedupTime": "2021-04-08T20:14:49Z",
    "arrivedTime": "2021-04-08T20:14:50Z",
    "deliveryTime": "2021-04-08T20:14:52Z",
    "failedDeliveryTime": null,
    "deliveryNote": "O",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": null,
    "orderSource": "",
   "additionalId": "",
    "incomplete": false,
    "orderTotal": 10,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 0.883786088220417,
    "carrier": {
      "id": 2501,
      "name": "Mark",
      "phone": "0124121211",
      "email": "mark12@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 191101,
      "name": "XYZ Delivery",
      "address": "Seattle, WA, USA",
      "formattedAddress": "Seattle, WA, USA",
      "phone": "+11121212121",
      "lat": 47.6062095,
      "lng": -122.3320708
    },
    "delivery": {
      "id": 66561,
      "name": "Jonathan Banh",
      "address": "2720 3rd Avenue Apt 407, Mosler Lofts, Seattle, WA, 98121",
      "formattedAddress": "2720 3rd Ave APT 407, Seattle, WA 98121, USA",
      "phone": "4083070862",
      "email": "banh.Jon@yahoo.com",
      "lat": 47.61766600000001,
      "lng": -122.3492015
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300714,
    "orderNumber": "5",
    "companyId": 1199,
    "orderItem": "[{name:Tea pot,quantity:1,unitPrice:5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:40Z",
    "requestedPickupTime": "2021-03-26T17:54:00Z",
    "requestedDeliveryTime": "2021-03-26T18:34:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:22Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:14:15Z",
    "deliveryTime": "2021-04-08T20:14:18Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 1.33233863,
    "carrier": {
      "id": 2501,
      "name": "Kayle",
      "phone": "+1234567891",
      "email": "kayle22@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "Rocky Mountain Tea store",
      "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "formattedAddress": "890 Geneva Ave, San Francisco, CA 94112, United States",
      "phone": "+11112221",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730761,
      "name": "Niki",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+151232323212",
      "email": "niki43@gmail.com",
      "lat": 22.8355565,
      "lng": -172.4184477
    },
    "status": "ALREADY_DELIVERED"
  },
  {
    "orderId": 2300704,
    "orderNumber": "41223",
    "companyId": 1199,
    "orderItem": "[{name:Banana,quantity:11,unitPrice:0.5}]",
    "accepted": true,
    "placementTime": "2021-03-27T17:34:12Z",
    "requestedPickupTime": "2021-03-26T17:53:00Z",
    "requestedDeliveryTime": "2021-03-26T18:33:00Z",
    "assignedTime": "2021-03-27T17:41:42Z",
    "startTime": "2021-03-27T17:42:15Z",
    "pickedupTime": "2021-03-27T17:45:20Z",
    "arrivedTime": "2021-04-08T20:13:00Z",
    "deliveryTime": "2021-04-08T20:13:12Z",
    "failedDeliveryTime": null,
    "deliveryNote": "Leave the package by the door if no one is available",
    "deliveryInstruction": null,
    "dispatcherNote": null,
    "paymentMethod": "CASH",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 5.5,
    "deliveryFee": 0,
    "tip": 0,
    "discount": 0,
    "tax": 0,
    "driverPayment": 0,
    "distance": 2.9833863,
    "carrier": {
      "id": 2501,
      "name": "Anderson",
      "phone": "+1231231211",
      "email": "andyContact@gmail.com",
      "status": "0",
      "vehiclePlateNumber": "",
      "vehicleDescription": "",
      "note": "",
      "imageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/621c3825230247a8bbab6dc9a20431ce.jpg",
      "partner": "None"
    },
    "pickup": {
      "id": 183258,
      "name": "XYZ Delivery",
      "address": "460 Ramona St, Palo Alto, CA 94301, United States",
      "formattedAddress": "460 Ramona St, Palo Alto, CA 94301, United States",
      "phone": "+111212322",
      "lat": 22.874216,
      "lng": -172.4000992
    },
    "delivery": {
      "id": 1730753,
      "name": "Jassica",
      "address": "CVV4+C7 Palo Alto, California, United States",
      "formattedAddress": "CVV4+C7 Palo Alto, California, United States",
      "phone": "+1512322132",
      "email": "Jassica12@gmail.com",
      "lat": 22.7392481,
      "lng": -172.3958189
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{}
```


### DELETE `/orders/{orderId}`

**Full URL:** `https://api.shipday.com/orders/{orderId}`

**Delete Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (400)**

```json
{}
```


### PUT `/orders/assign/{orderId}/{carrierId}`

**Full URL:** `https://api.shipday.com/orders/assign/{orderId}/{carrierId}`

**Assign Order to Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |
| `carrierId` | path | string | yes |  |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/assign/orderId/carrierId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'x-api-key: null'
```

**Response Codes**

- `204` — 204
- `400` — 400

**Response Example (204)**

```json
{
  "success": true,
  "response": "assignment successful"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/status`

**Full URL:** `https://api.shipday.com/orders/{orderId}/status`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | yes | Status of the order |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/16039690/status' \
--header 'Authorization: Bearer TkauNMKeSg.DdTG8Xq9esATXYO9Cdnu' \
--header 'Content-Type: application/json' \
--header 'accept: application/json' \
--data '{
    "status": "STARTED"
}'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "orderId": 16039690,
  "success": true,
  "response": "UPDATED STATUS: STARTED"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/orders/{orderId}/meta`

**Full URL:** `https://api.shipday.com/orders/{orderId}/meta`

**Order Ready to Pickup**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `readyToPickup` | boolean | yes | Pickup status in boolean |

**Request Example**

```bash
curl --location --request PUT 'https://api.shipday.com/orders/32830058/meta' \
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
--header 'Content-Type: application/json' \
--data '{
    "readyToPickup": true
}'
```

**Response Codes**

- `200` — OK
- `202` — 202
- `400` — 400
- `401` — Unauthorized

**Response Example (200)**

```json
{}
```


### PUT `/orders/unassign/{orderId}`

**Full URL:** `https://api.shipday.com/orders/unassign/{orderId}`

**Unassign Order from Driver**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Id of the order that will be unassigned from the driver. |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/orders/unassign/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (401)**

```json
{}
```


### GET `/order/progress/{trackingId}`

**Full URL:** `https://api.shipday.com/order/progress/{trackingId}`

**Order Status Update**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `isStaticDataRequired` | query | string | yes | If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned. |
| `trackingId` | path | string | yes | Tracking Id of the order. |

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
{
  "fixedData": {
    "order": {
      "orderNumber": "your_order_number"
    },
    "customer": {
      "name": "John Doe",
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
      "latitude": 33.7574062,
      "longitude": -84.396233
    },
    "restaurant": {
      "name": "My Restaurant",
      "address": "5th Avenue, New York, NY, USA",
      "latitude": 40.7744123,
      "longitude": -73.9656103
    },
    "carrier": {
      "id": 321743,
      "name": "Alice Johnson",
      "phoneNumber": "+12101234567",
      "imagePath": "William_Martin.png"
    },
    "isExpired": false
  },
  "dynamicData": {
    "orderStatus": {
      "startTime": "2025-06-24T16:28:29.000Z",
      "pickedTime": "2025-06-24T16:28:33.000Z",
      "arrivedTime": null,
      "deliveryTime": null,
      "failedDeliveryTime": null,
      "status": "PICKED_UP"
    },
    "carrierLocation": {
      "latitude": 37.822334,
      "longitude": -81.224434
    },
    "estimatedTimeInMinutes": "12",
    "detailEta": {
      "estimatedTimeInMinutes": 12,
      "pickUpTime": 0,
      "travelDistance": 3745.3496704217405,
      "travelDistanceTime": 11.636290872102045,
      "deliveryTime": 0,
      "orderPosition": 1,
      "startedOrder": 0,
      "calprog": ""
    }
  }
}
```

**Response Example (401)**

```json
{}
```



## Pickup Orders

### Pickup Order Object

Pickup Order Object merepresentasikan order pickup/multi-stop. Struktur field lihat contoh pada `Retrieve Pickup Order Details` dan `Insert Pickup Order`.

### Retrieve Pickup Order Details

### POST `/pickup-orders`

**Full URL:** `https://api.shipday.com/pickup-orders`

**Insert Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/pickup-orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
   "orderNumber": "99qT5A",
   "additionalId": "4532",
   "restaurant": {
       "name": "Popeyes Louisiana Kitchen",
       "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
       "phone": "+14152392013"
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "unitPrice": 13.95,
           "quantity": 2
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 642954,
  "message": "Pickup Order inserted successfully."
}
```

**Response Example (400)**

```json
{}
```


### GET `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Retrieve Takeout Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Edit Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `restaurant.latitude` | number | no | Restaurant location latitude |
| `restaurant.longitude` | number | no | Restaurant location longitude |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |
| `companyId` | integer | no | Company identifier associated with the order |
| `status` | string (enum) | no | Current status of the order (enum: IN_PROGRESS, READY, DONE, CANCEL) |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 643528,
  "message": "Pickup Order updated successfully."
}
```

**Response Example (400)**

```json
{}
```


### DELETE `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Delete Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204 No Content
- `400` — 400

**Response Example (204)**

```json
{}
```

**Response Example (400)**

```json
{}
```



### Insert Pickup Order

### POST `/pickup-orders`

**Full URL:** `https://api.shipday.com/pickup-orders`

**Insert Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/pickup-orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
   "orderNumber": "99qT5A",
   "additionalId": "4532",
   "restaurant": {
       "name": "Popeyes Louisiana Kitchen",
       "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
       "phone": "+14152392013"
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "unitPrice": 13.95,
           "quantity": 2
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 642954,
  "message": "Pickup Order inserted successfully."
}
```

**Response Example (400)**

```json
{}
```


### GET `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Retrieve Takeout Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Edit Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `restaurant.latitude` | number | no | Restaurant location latitude |
| `restaurant.longitude` | number | no | Restaurant location longitude |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |
| `companyId` | integer | no | Company identifier associated with the order |
| `status` | string (enum) | no | Current status of the order (enum: IN_PROGRESS, READY, DONE, CANCEL) |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 643528,
  "message": "Pickup Order updated successfully."
}
```

**Response Example (400)**

```json
{}
```


### DELETE `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Delete Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204 No Content
- `400` — 400

**Response Example (204)**

```json
{}
```

**Response Example (400)**

```json
{}
```



### Edit Pickup Order

### POST `/pickup-orders`

**Full URL:** `https://api.shipday.com/pickup-orders`

**Insert Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/pickup-orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
   "orderNumber": "99qT5A",
   "additionalId": "4532",
   "restaurant": {
       "name": "Popeyes Louisiana Kitchen",
       "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
       "phone": "+14152392013"
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "unitPrice": 13.95,
           "quantity": 2
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 642954,
  "message": "Pickup Order inserted successfully."
}
```

**Response Example (400)**

```json
{}
```


### GET `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Retrieve Takeout Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Edit Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `restaurant.latitude` | number | no | Restaurant location latitude |
| `restaurant.longitude` | number | no | Restaurant location longitude |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |
| `companyId` | integer | no | Company identifier associated with the order |
| `status` | string (enum) | no | Current status of the order (enum: IN_PROGRESS, READY, DONE, CANCEL) |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 643528,
  "message": "Pickup Order updated successfully."
}
```

**Response Example (400)**

```json
{}
```


### DELETE `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Delete Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204 No Content
- `400` — 400

**Response Example (204)**

```json
{}
```

**Response Example (400)**

```json
{}
```



### Delete Pickup Order

### POST `/pickup-orders`

**Full URL:** `https://api.shipday.com/pickup-orders`

**Insert Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/pickup-orders \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --header 'x-api-key: null' \
     --data '
{
   "orderNumber": "99qT5A",
   "additionalId": "4532",
   "restaurant": {
       "name": "Popeyes Louisiana Kitchen",
       "address": "890 Geneva Ave, San Francisco, CA 94112, United States",
       "phone": "+14152392013"
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "unitPrice": 13.95,
           "quantity": 2
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 642954,
  "message": "Pickup Order inserted successfully."
}
```

**Response Example (400)**

```json
{}
```


### GET `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Retrieve Takeout Order Details**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "orderSource": "Seamless",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
```

**Response Example (400)**

```json
{}
```


### PUT `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Edit Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | no | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | no |  |
| `orderId` | path | string | yes | Unique identifier of the pickup order |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `orderNumber` | string | yes | Alphanumeric identifier for the order object |
| `additionalId` | string | no | Additional ID for the order |
| `restaurant` | object | yes | Restaurant information including name, address, contact phone number |
| `restaurant.name` | string | yes | Name of the restaurant |
| `restaurant.address` | string | yes | Address of the restaurant |
| `restaurant.phone` | string | no | Phone number of the restaurant with country code |
| `restaurant.latitude` | number | no | Restaurant location latitude |
| `restaurant.longitude` | number | no | Restaurant location longitude |
| `customer` | object | yes | Customer information containing name, contact phone number and email |
| `customer.name` | string | yes | The name of the customer |
| `customer.phone` | string | yes | Phone number of the customer with country code |
| `customer.email` | string | no | Email Address of the customer |
| `tips` | number | no | Tips amount for the order |
| `tax` | number | no | Tax amount for the order |
| `discountAmount` | number | no | Discount amount for the order |
| `totalOrderCost` | number | no | Total cost for the particular order |
| `orderItem` | array<object> | no | Array of Order item objects |
| `orderItem[].name` | string | no | Name of the order item |
| `orderItem[].quantity` | integer | no | Quantity of the order item |
| `orderItem[].unitPrice` | number | no | Price of the order item per unit |
| `orderItem[].addOns` | array<string> | no | Array of Add-on items |
| `orderItem[].detail` | string | no | Detailed note (if given) |
| `paymentMethod` | string (enum) | no | Selected payment method for the order (enum: CARD, CASH, ONLINE) |
| `pickupInstruction` | string | no | Pickup related instructions for the order |
| `expectedPickupDate` | string | no | Expected pickup date in UTC for the particular order (yyyy-mm-dd format) |
| `expectedPickupTime` | string | no | Expected pickup time in UTC for the particular order (format hh:mm:ss) |
| `orderSource` | string | no | Source of the order |
| `companyId` | integer | no | Company identifier associated with the order |
| `status` | string (enum) | no | Current status of the order (enum: IN_PROGRESS, READY, DONE, CANCEL) |

**Request Example**

```bash
curl --request PUT \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
   "orderNumber": "99qT5A",
   "restaurant": {
       "name": "Shipday Inc. Demo",
       "address": "101 Jefferson Dr 1st Floor, Menlo Park, CA 94025, USA",
       "phone": "+17372268817",
       "latitude": 37.4832505,
       "longitude": -122.1743908
   },
   "customer": {
       "name": "Mr. Jhon Mason",
       "phone": "+14152392212",
       "email": "jhonMason@gmail.com"
   },
   "tips": 2.5,
   "tax": 1.5,
   "discountAmount": 1.5,
   "totalOrderCost": 13.47,
   "orderItem": [
       {
           "name": "Veggie Duck",
           "detail": "",
           "quantity": 2,
           "unitPrice": 14.95,
           "addOns": [
               "Onion Rings",
               "Sauce"
           ]
       },
       {
           "name": "Mango Chicken",
           "detail": "",
           "quantity": 2,
           "unitPrice": 13.95,
           "addOns": null
       }
   ],
   "paymentMethod": "CARD",
   "pickupInstruction": "fast",
   "expectedPickupDate": "2025-09-18",
   "expectedPickupTime": "20:45:00",
   "companyId": 130616,
   "orderId": 643528,
   "status": "IN_PROGRESS"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true,
  "orderId": 643528,
  "message": "Pickup Order updated successfully."
}
```

**Response Example (400)**

```json
{}
```


### DELETE `/pickup-orders/{orderId}`

**Full URL:** `https://api.shipday.com/pickup-orders/{orderId}`

**Delete Takeout Order**

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `orderId` | path | string | yes |  |

**Request Example**

```bash
curl --request DELETE \
     --url https://api.shipday.com/pickup-orders/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

**Response Codes**

- `204` — 204 No Content
- `400` — 400

**Response Example (204)**

```json
{}
```

**Response Example (400)**

```json
{}
```



## Carriers

### Carrier Object

[Jump to Content](https://docs.shipday.com/reference/carrier-object#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Carrier Object
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)


Attributes
[](https://docs.shipday.com/reference/carrier-object#attributes)
* * *
id `Integer`  
Unique ID for the carrier
* * *
personalId `Integer`  
Personal ID for the carrier
* * *
name `String`  
Name of the carrier
* * *
codeName `String`  
Code name for the carrier
* * *
phoneNumber `String`  
Phone number of the carrier with country code
* * *
companyId `Integer`  
Unique company ID for identifying the company
* * *
areaId `Integer`  
Unique area ID for identifying the area
* * *
isOnShift `Boolean`  
Indication for the carrier if he/she is on shift
* * *
email `String`  
Email Address of the carrier
* * *
carrierPhoto `String`  
URL link for the carrier photo
* * *
isActive `Boolean`  
Indication for the carrier if he/she is active
Carrier Object Example

```

{
    "id": 969,
    "personalId": null,
    "name": "Danial Tucker",
    "codeName": "",
    "phoneNumber": "+14234420986",
    "companyId": 409,
    "areaId": 406,
    "isOnShift": false,
    "email": "danialTucker@gmail.com",
    "carrierPhoto":"https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somephotolink.jpg",
    "isActive": true
  }

```

* * *
[Delete Pickup Order](https://docs.shipday.com/reference/delete-pickup-order)[Retrieve Carriers](https://docs.shipday.com/reference/retrieve-carriers)
Did this page help you?
Yes
No
11 months ago
* * *
[Delete Pickup Order](https://docs.shipday.com/reference/delete-pickup-order)[Retrieve Carriers](https://docs.shipday.com/reference/retrieve-carriers)
Did this page help you?
Yes
No
  *     * [Attributes](https://docs.shipday.com/reference/carrier-object#attributes)


  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Retrieve Carriers

[Jump to Content](https://docs.shipday.com/reference/retrieve-carriers#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Retrieve Carriers
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

get
https://api.shipday.com/carriers

Returns
[](https://docs.shipday.com/reference/retrieve-carriers#returns)
Response Object `object`
Response object child attributes
> * * *
> `id` `Integer`  
>  Unique identifier for the carrier.
> * * *
> `personalId` `String`  
>  Internal personal ID associated with the carrier.
> * * *
> `name` `String`  
>  Full name of the carrier, e.g. "Driver Abc".
> * * *
> `codeName` `String`  
>  Optional code name assigned to the carrier. Can be empty.
> * * *
> `phoneNumber` `String`  
>  Carrier's contact phone number in E.164 format, e.g. "+44555777000".
> * * *
> `companyId` `Integer`  
>  Identifier for the company the carrier belongs to.
> * * *
> `areaId` `Integer`  
>  Identifier for the operational area assigned to the carrier.
> * * *
> `isOnShift` `Boolean`  
>  `true` if the carrier is currently on shift; otherwise `false`.
> * * *
> `email` `String`  
>  Email address for the carrier, e.g. "kalam@shipday.com".
> * * *
> `carrierPhoto` `String`  
>  URL to the carrier’s profile photo.
> * * *
> `isActive` `Boolean`  
>  `true` if the carrier is active and allowed to receive orders.
> * * *
> `carrrierLocationLat` `Float`  
>  Last known latitude of the carrier's location.
> * * *
> `carrrierLocationLng` `Float`  
>  Last known longitude of the carrier's location.
[](https://docs.shipday.com/reference/retrieve-carriers#response-schemas)Responses

`` 200
[](https://docs.shipday.com/reference/retrieve-carriers#get-carriers-string-response-body)Response body
json

`` 400
Bad Request
* * *
[Carrier Object](https://docs.shipday.com/reference/carrier-object)[Add a Carrier](https://docs.shipday.com/reference/add-a-carrier-1)
Did this page help you?
Yes
No
Language
Credentials
Header
Header
Request
```
















```
xxxxxxxxxx
```

1

```
curl --location 'https://api.shipday.com/carriers' \
```

2

```
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13'
```


```

``
200 - Example

```



















```
xxxxxxxxxx
```

32
1

```
[
```

2

```
  {
```

3

```
    "id": 108418,
```

4

```
    "personalId": "123",
```

5

```
    "name": "Driver Shammo",
```

6

```
    "codeName": "",
```

7

```
    "phoneNumber": "+44555777000",
```

8

```
    "companyId": 41207,
```

9

```
    "areaId": 41189,
```

10

```
    "isOnShift": false,
```

11

```
    "email": "shammo@shipday.com",
```

12

```
    "carrierPhoto": "https://myurl/ca842047bf324c6eaab5db2b0297d054.png",
```

13

```
    "isActive": true,
```

14

```
    "carrrierLocationLat": 23.7729884,
```

15

```
    "carrrierLocationLng": 90.3595206
```

16

```
  },
```

17

```
  {
```

18

```
    "id": 342163,
```

19

```
    "personalId": "",
```

20

```
    "name": "Test Driver another one",
```

21

```
    "codeName": "",
```

22

```
    "phoneNumber": "+8801973391748",
```

23

```
    "companyId": 41207,
```

24

```
    "areaId": 41189,
```

25

```
    "isOnShift": false,
```

26

```
    "email": "versatileanthem@gmail.com",
```

27

```
    "carrierPhoto": null,
```

28

```
    "isActive": true,
```

29

```
    "carrrierLocationLat": null,
```

30

```
    "carrrierLocationLng": null
```

31

```
  }
```

32

```
]
```


```

10 months ago
* * *
[Carrier Object](https://docs.shipday.com/reference/carrier-object)[Add a Carrier](https://docs.shipday.com/reference/add-a-carrier-1)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Add a Carrier

[Jump to Content](https://docs.shipday.com/reference/add-a-carrier-1#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Add a Carrier
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

post
https://api.shipday.com/carriers

Returns
[](https://docs.shipday.com/reference/add-a-carrier-1#returns)
Response Object `object`
Response object child attributes
> * * *
> carrierId `Integer`  
>  Id associated to the carrier
> * * *
> email `String`  
>  Email address for the carrier
> * * *
> password `String`  
>  Generated Password for the carrier for access
> * * *
> message `String`  
>  Response message
[](https://docs.shipday.com/reference/add-a-carrier-1#body-params)Body Params
name
string
required
Defaults to John Doe
Full name of the user or contact person.
email
string
required
Defaults to user@example.com
Email address of the user. Must be a valid email format.
phoneNumber
string
required
Defaults to +1-555-123-4567
Phone number of the user. Can include country code and formatting.
[](https://docs.shipday.com/reference/add-a-carrier-1#header-params)Headers
Authorization
string
required
Defaults to Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13
Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication.
[](https://docs.shipday.com/reference/add-a-carrier-1#response-schemas)Responses

`` 200
[](https://docs.shipday.com/reference/add-a-carrier-1#post-open-string-response-body)Response body
json

`` 400
Bad Request
* * *
[Retrieve Carriers](https://docs.shipday.com/reference/retrieve-carriers)[Delete a carrier](https://docs.shipday.com/reference/delete-a-carrier)
Did this page help you?
Yes
No
Language
Credentials
Header
Header
Request
```
















```
xxxxxxxxxx
```

1

```
curl --location 'https://api.shipday.com/carriers' \
```

2

```
--header 'Content-Type: application/json' \
```

3

```
--header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

4

```
--data-raw '{
```

5

```
    "name": "Test Driver",
```

6

```
    "email": "kaazsasdfamu@gmail.com",
```

7

```
    "phoneNumber": "+112241899"
```

8

```
}'
```


```

``
200 - Example

```


















```
xxxxxxxxxx
```

1

```
{
```

2

```
  "carrierId": 386467,
```

3

```
  "email": "kaazsasdfamu@gmail.com",
```

4

```
  "password": "23bc5ba9",
```

5

```
  "message": "You should update your auto generated password"
```

6

```
}
```


```

10 months ago
* * *
[Retrieve Carriers](https://docs.shipday.com/reference/retrieve-carriers)[Delete a carrier](https://docs.shipday.com/reference/delete-a-carrier)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Delete a Carrier

[Jump to Content](https://docs.shipday.com/reference/delete-a-carrier#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Delete a carrier
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

delete
https://api.shipday.com/carriers/{carrierid}

Returns
[](https://docs.shipday.com/reference/delete-a-carrier#returns)
Returns a response Object `object`
Response object child attributes
> * * *
> success `Boolean`  
>  Boolean value indicating the carrier is removed.
> * * *
> response `String`  
>  Response message
[](https://docs.shipday.com/reference/delete-a-carrier#path-params)Path Params
carrierid
string
required
[](https://docs.shipday.com/reference/delete-a-carrier#header-params)Headers
Authorization
string
Defaults to Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13
Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication.
[](https://docs.shipday.com/reference/delete-a-carrier#response-schemas)Responses

`` 200
200
[](https://docs.shipday.com/reference/delete-a-carrier#deleteacarrier-object-response-body)Response body
object
success
boolean
Defaults to true
response
string

`` 400
400
* * *
[Add a Carrier](https://docs.shipday.com/reference/add-a-carrier-1)[Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
Did this page help you?
Yes
No
Language
Credentials
Header
Header
Request
```
















```
xxxxxxxxxx
```

1

```
curl --request DELETE \
```

2

```
     --url https://api.shipday.com/carriers/carrierid \
```

3

```
     --header 'Accept: application/json' \
```

4

```
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
```

5

```
     --header 'x-api-key: null'
```


```

``
200 - Result

```


















```
xxxxxxxxxx
```

1

```
{
```

2

```
  "success": true,
```

3

```
  "response": "Carrier deleted."
```

4

```
}
```


```

10 months ago
* * *
[Add a Carrier](https://docs.shipday.com/reference/add-a-carrier-1)[Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

## Delivery Tracking

### Eta Data Object

[Jump to Content](https://docs.shipday.com/reference/etadatapublic-object#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Eta Data Object
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)


Attributes
[](https://docs.shipday.com/reference/etadatapublic-object#attributes)
* * *
  

EtaData `Object`
The main response object contains two main properties: `fixedData` and `dynamicData`.
Child attributes
> * * *
> fixedData `FixedData`  
>  Contains fixed information about the order that does not change during delivery. `null` if `isStaticDataRequired` is `false`.
> * * *
> dynamicData `DynamicData`  
>  Contains dynamic, real-time information about the order's progress and the carrier's location.
* * *
FixedData `Object`
Contains static information about the order that does not change during delivery. `null` if `isStaticDataRequired` is `false`.
Child attributes
> * * *
> order `Order`  
>  Basic order details.
> * * *
> customer `Customer`  
>  Details of the customer receiving the order.
> * * *
> restaurant `Restaurant`  
>  Details of the pickup location.
> * * *
> carrier `Carrier`  
>  Details of the assigned delivery driver/carrier.
> * * *
> isExpired `Boolean`  
>  Flag indicating if the tracking link/data has expired.
* * *
Order `Object`
Basic order details.
Child attributes
> * * *
> orderNumber `String`  
>  The public-facing order number.
* * *
Customer `Object`
Details of the customer receiving the order.
Child attributes
> * * *
> name `String`  
>  Customer's name.
> * * *
> address `String`  
>  Customer's delivery address.
> * * *
> latitude `Double`  
>  Latitude of the delivery address.
> * * *
> longitude `Double`  
>  Longitude of the delivery address.
* * *
Restaurant `Object`
Details of the pickup location.
Child attributes
> * * *
> name `String`  
>  Restaurant/store name.
> * * *
> address `String`  
>  Restaurant/store address.
> * * *
> latitude `Double`  
>  Latitude of the restaurant/store.
> * * *
> longitude `Double`  
>  Longitude of the restaurant/store.
* * *
Carrier `Object`
Details of the assigned delivery driver/carrier.
Child attributes
> * * *
> id `Integer`  
>  The unique ID of the carrier. `-1` if not assigned.
> * * *
> name `String`  
>  The carrier's name. "Not assigned" if no carrier is assigned yet.
> * * *
> phoneNumber `String`  
>  The contact phone number. This may be the carrier's direct number, a masked proxy number, or the restaurant's number, depending on system settings.
> * * *
> imagePath `String`  
>  The file name or path for the carrier's profile image. Defaults to a placeholder if not set.
* * *
DynamicData `Object`
Contains dynamic, real-time information about the order's progress and the carrier's location.
Child attributes
> * * *
> orderStatus `OrderStatus`  
>  Contains various timestamps and the current status of the order.
> * * *
> carrierLocation `CarrierLocation`  
>  The real-time geographical coordinates of the carrier.
> * * *
> estimatedTimeInMinutes `String`  
>  The estimated time of arrival in minutes. Can be "INF" if ETA is not available.
> * * *
> detailEta `DetailEta`  
>  A more detailed breakdown of the ETA calculation.
* * *
OrderStatus `Object`
Contains various timestamps and the current status of the order.
Child attributes
> * * *
> startTime `String`  
>  Timestamp when the carrier started the delivery. (`nullable`)
> * * *
> pickedTime `String`  
>  Timestamp when the order was picked up from the restaurant. (`nullable`)
> * * *
> arrivedTime `String`  
>  Timestamp when the carrier arrived at the customer location. (`nullable`)
> * * *
> deliveryTime `String`  
>  Timestamp when the order was successfully delivered. (`nullable`)
> * * *
> failedDeliveryTime `String`  
>  Timestamp of a failed delivery attempt. (`nullable`)
> * * *
> status `String`  
>  The current status of the order (e.g., `ASSIGNED`, `IN_TRANSIT`, `DELIVERED`).
* * *
CarrierLocation `Object`
The real-time geographical coordinates of the carrier.
Child attributes
> * * *
> latitude `Double`  
>  The current latitude of the carrier.
> * * *
> longitude `Double`  
>  The current longitude of the carrier.
* * *
DetailEta `Object`
A more detailed breakdown of the ETA calculation.
Child attributes
> * * *
> estimatedTimeInMinutes `Double`  
>  The final estimated time of arrival in minutes. `-1.0` indicates not available.
> * * *
> pickUpTime `Double`  
>  Estimated time in minutes for the carrier to reach the pickup location.
> * * *
> travelDistance `Double`  
>  The total travel distance for the delivery route in the system's configured units (e.g., miles or km).
> * * *
> travelDistanceTime `Double`  
>  The estimated time in minutes based purely on the travel distance and speed.
> * * *
> deliveryTime `Double`  
>  Estimated time in minutes to travel from the pickup location to the final delivery destination.
> * * *
> orderPosition `Integer`  
>  For batch/stacked orders, this is the position of the current order in the carrier's delivery queue. `-1` if not a batch order.
> * * *
> startedOrder `Integer`  
>  For batch/stacked orders, this indicates which order in the sequence the carrier is currently fulfilling. `-1` if not a batch order.
> * * *
> calprog `String`  
>  A debug string representing the internal steps and values used in the ETA calculation.
  

EtaDataPublic Object

```

{
    "fixedData": {
        "order": {
            "orderNumber": "your_order_number"
        },
        "customer": {
            "name": "John Doe",
            "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
            "latitude": 33.7574062,
            "longitude": -84.396233
        },
        "restaurant": {
            "name": "My Restaurant",
            "address": "5th Avenue, New York, NY, USA",
            "latitude": 40.7744123,
            "longitude": -73.9656103
        },
        "carrier": {
            "id": 321743,
            "name": "Alice Johnson",
            "phoneNumber": "+12101234567",
            "imagePath": "William_Martin.png"
        },
        "isExpired": false
    },
    "dynamicData": {
        "orderStatus": {
            "startTime": "2025-06-24T16:28:29.000Z",
            "pickedTime": "2025-06-24T16:28:33.000Z",
            "arrivedTime": null,
            "deliveryTime": null,
            "failedDeliveryTime": null,
            "status": "PICKED_UP"
        },
        "carrierLocation": {
            "latitude": 37.822334,
            "longitude": -81.224434
        },
        "estimatedTimeInMinutes": "12",
        "detailEta": {
            "estimatedTimeInMinutes": 12.0,
            "pickUpTime": 0.0,
            "travelDistance": 3745.3496704217405,
            "travelDistanceTime": 11.636290872102045,
            "deliveryTime": 0.0,
            "orderPosition": 1,
            "startedOrder": 0,
            "calprog": ""
        }
    }
}

```

* * *
[Delete a carrier](https://docs.shipday.com/reference/delete-a-carrier)[Order Delivery Progress](https://docs.shipday.com/reference/order-delivery-progress)
Did this page help you?
Yes
No
10 months ago
* * *
[Delete a carrier](https://docs.shipday.com/reference/delete-a-carrier)[Order Delivery Progress](https://docs.shipday.com/reference/order-delivery-progress)
Did this page help you?
Yes
No
  *     * [Attributes](https://docs.shipday.com/reference/etadatapublic-object#attributes)


  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Order Delivery Progress

[Jump to Content](https://docs.shipday.com/reference/order-delivery-progress#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Order Delivery Progress
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

get
https://api.shipday.com/order/progress/{trackingId}
Retrieves the real-time delivery progress and ETA for a specific order. This endpoint is designed for public consumption, typically by end-customers, to track their delivery status. This API is only available for customer having plan **BUSINESS ADVANCED**. Additionally, there is a rate limit of at most 3 requests per minute per `trackingId`.

Returns
[](https://docs.shipday.com/reference/order-delivery-progress#returns)
[](https://docs.shipday.com/reference/eta-data-object)[eta data](https://docs.shipday.com/reference/etadatapublic-object#/) `object`
[](https://docs.shipday.com/reference/order-delivery-progress#path-params)Path Params
trackingId
string
required
Tracking Id of the order.
[](https://docs.shipday.com/reference/order-delivery-progress#query-params)Query Params
isStaticDataRequired
string
required
Defaults to false
If `true`, the response includes the `fixedData` object which contains static details like customer, restaurant, and carrier info. If `false`, the `fixedData` object will be `null`, and only dynamic tracking data will be returned.
[](https://docs.shipday.com/reference/order-delivery-progress#response-schemas)Responses

`` 200
[](https://docs.shipday.com/reference/order-delivery-progress#get-orderprogressorderid-string-response-body)Response body
json

`` 401
Unauthorized
* * *
[Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)[Shipday Partners](https://docs.shipday.com/reference/partners)
Did this page help you?
Yes
No
Language
Credentials
Header
Header
cURL Request

```
















```
xxxxxxxxxx
```

1

```
curl --request GET \
```

2

```
     --url 'https://api.shipday.com/order/progress/trackingId?isStaticDataRequired=false' \
```

3

```
     --header 'accept: application/json'
```


```

``
200 - Result

```



















```
xxxxxxxxxx
```

51

```
}
```

1

```
{
```

2

```
  "fixedData": {
```

3

```
    "order": {
```

4

```
      "orderNumber": "your_order_number"
```

5

```
    },
```

6

```
    "customer": {
```

7

```
      "name": "John Doe",
```

8

```
      "address": "State Farm Arena, State Farm Drive, Atlanta, GA, USA",
```

9

```
      "latitude": 33.7574062,
```

10

```
      "longitude": -84.396233
```

11

```
    },
```

12

```
    "restaurant": {
```

13

```
      "name": "My Restaurant",
```

14

```
      "address": "5th Avenue, New York, NY, USA",
```

15

```
      "latitude": 40.7744123,
```

16

```
      "longitude": -73.9656103
```

17

```
    },
```

18

```
    "carrier": {
```

19

```
      "id": 321743,
```

20

```
      "name": "Alice Johnson",
```

21

```
      "phoneNumber": "+12101234567",
```

22

```
      "imagePath": "William_Martin.png"
```

23

```
    },
```

24

```
    "isExpired": false
```

25

```
  },
```

26

```
  "dynamicData": {
```

27

```
    "orderStatus": {
```

28

```
      "startTime": "2025-06-24T16:28:29.000Z",
```

29

```
      "pickedTime": "2025-06-24T16:28:33.000Z",
```

30

```
      "arrivedTime": null,
```

31

```
      "deliveryTime": null,
```

32

```
      "failedDeliveryTime": null,
```


```

10 months ago
* * *
[Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)[Shipday Partners](https://docs.shipday.com/reference/partners)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

## Partners

### Shipday Partners

[Jump to Content](https://docs.shipday.com/reference/partners#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Shipday Partners
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

Shipday Partners are those category of users who can onboard one or more business using a "Partner Code". Every business that signs up to Shipday through a Partner becomes a Member of that Partner.
Primary use of Partner API is to help Shipday Partners in providing better usage and billing support to their members.
* * *
[Order Delivery Progress](https://docs.shipday.com/reference/order-delivery-progress)[Authentication](https://docs.shipday.com/reference/partner-authentication)
Did this page help you?
Yes
No
11 months ago
* * *
[Order Delivery Progress](https://docs.shipday.com/reference/order-delivery-progress)[Authentication](https://docs.shipday.com/reference/partner-authentication)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Partner Authentication

[Jump to Content](https://docs.shipday.com/reference/partner-authentication#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Authentication
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

Partner authentication is mandatory for requesting any partner endpoints. A partner's authentication is different from the company/dispatcher authentication. This is performed by a partner API key. To call any partner API, partner API key must be included in the header of the request as a value to the custom header **"PARTNER-API-KEY"**.
HTTPcURL

```

PARTNER-API-KEY: <partner api key>

```

```


curl ... -H 'PARTNER-API-KEY: <partner api key>' ...

```

Typically, a partner api key is a 64 characters long string.
* * *
[Shipday Partners](https://docs.shipday.com/reference/partners)[Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
Did this page help you?
Yes
No
11 months ago
* * *
[Shipday Partners](https://docs.shipday.com/reference/partners)[Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Partner Order Object

[Jump to Content](https://docs.shipday.com/reference/partner-order-object#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Partner Order Object
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)


Attributes
[](https://docs.shipday.com/reference/partner-order-object#attributes)
orderId `Integer`  
Unique order ID for identifying the order
* * *
orderNumber `String`  
Order number for the order
* * *
companyId `Integer`  
Unique Company ID for identifying the company
* * *
orderItem `String`  
Order Items ( JSON Array )
* * *
accepted `Boolean`  
Identifier indicating if the order is accepted
* * *
placementTime `String`  
Order placement time
* * *
requestedPickupTime `String`  
Requested pickup time for the order
* * *
requestedDeliveryTime `String`  
requested delivery time for the order
* * *
assignedTime `String`  
Assignment time for the order
* * *
startTime `String`  
Starting time for the delivery of the order
* * *
pickedupTime `String`  
Pickup time for the order
* * *
arrivedTime `String`  
Arrival time of the carrier to the customer address
* * *
deliveryTime `String`  
Delivery time for the order to the customer
* * *
failedDeliveryTime `String`  
Failed Delivery time if the order delivery failed
* * *
deliveryNote `String`  
Provided Delivery note
* * *
deliveryInstruction `String`  
Provided delivery instruction
* * *
dispatcherNote `String`  
Dispatch Note for the order
* * *
paymentMethod `String`  
Payment Method for the order  
| Possible enum values |  
| --- |  
| cash |  
| credit card |  
* * *
creditCardType `String`  
Type of the credit card (if credit card is selected as payment method)  
| Possible enum values |  
| --- |  
| visa |  
| master card |  
| AMEX |  
| other |  
* * *
creditCardId `Integer`  
Last four digits of the credit card (if credit card is selected as payment method)
* * *
orderSource `String`  
Order Source
* * *
incomplete `Boolean`  
Identifier indicating if the order delivery is incomplete
* * *
orderTotal `Double`  
Total fee amount for the order
* * *
deliveryFee `Double`  
Delivery fee amount for the order
* * *
tip `Double`  
Tip amount for the order
* * *
discount `Double`  
Discount amount for the order
* * *
tax `Double`  
Tax amount for the order
* * *
driverPayment `Double`  
Driver/Carrier payment amount
* * *
carrier `object`  
Carrier details object
Child Attributes
> id `Integer`  
>  Unique ID for the carrier
> * * *
> name `String`  
>  Name of the carrier
> * * *
> phone `String`  
>  phone number of the carrier
> * * *
> email `String`  
>  Email address of the carrier
> * * *
> status `String`  
>  Current State of the carrier  
| Possible enum values of 'status'  |  
| --- |  
| ONLINE  |  
| OFFLINE  |  
* * *
> * * *
> vehiclePlateNumber `String`  
>  Vehicle Plate number of the carrier
> * * *
> vehicleDescription `String`  
>  Vehicle Description of the carrier
> * * *
> note `String`  
>  Note for the carrier
> * * *
> imageUrl `String`  
>  Carrier image url
> * * *
> partner `String`  
>  Partner of the carrier
* * *
pickup `object`  
Detailed Pickup information object
Child Attributes
> id `Integer`  
>  Unique ID for the pickup
> * * *
> name `String`  
>  Name of the pickup point
> * * *
> address `String`  
>  Address of the pickup location
> * * *
> formattedAddress `String`  
>  Formatted Address of the pickup location
> * * *
> phone `String`  
>  Phone number with country code
> * * *
> lat `Double`  
>  Latitude value of the pickup location
> * * *
> lng `Double`  
>  Longitude value of the pickup location
* * *
delivery `object`  
Detailed Delivery information object
Child Attributes
> id `Integer`  
>  Unique ID for the delivery
> * * *
> name `String`  
>  Name of the delivery point / customer
> * * *
> address `String`  
>  Address of the delivery location
> * * *
> formattedAddress `String`  
>  Formatted Address of the delivery location
> * * *
> phone `String`  
>  Phone number with country code
> * * *
> email `String`  
>  Email address of the customer
> * * *
> lat `Double`  
>  Latitude value of the delivery location
> * * *
> lng `Double`  
>  Longitude value of the delivery location
* * *
status `String`  
Order delivery Status  
| Possible Enum values for `status`  |  
| --- |  
| ACTIVE  |  
| NOT_ASSIGNED  |  
| NOT_ACCEPTED  |  
| NOT_STARTED_YET  |  
| STARTED  |  
| PICKED_UP  |  
| READY_TO_DELIVER  |  
| ALREADY_DELIVERED  |  
| FAILED_DELIVERY  |  
| INCOMPLETE  |  
`Note: All datetimes are in UTC ISO format`
JSON

```

{
    "orderId": 1234567890,
    "orderNumber": "NR#123Test",
    "companyId": 1234567,
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
    "accepted": true,
    "placementTime": "2021-02-23T17:54:44Z",
    "requestedPickupTime": "2021-02-23T18:24:43Z",
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
    "assignedTime": "2021-02-23T17:56:00Z",
    "startTime": "2021-02-23T18:03:41Z",
    "pickedupTime": "2021-02-23T18:27:51Z",
    "arrivedTime": "2021-02-23T18:42:12Z",
    "deliveryTime": "2021-02-23T18:45:351Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": "Call my number when you arrive",
    "dispatcherNote": "rd",
    "paymentMethod": "CARD",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 13.4,
    "deliveryFee": 5.2,
    "tip": 1.3,
    "discount": 0.0,
    "tax": 0.0,
    "driverPayment": 0.0,
    "carrier": {
      "id": 7890,
      "name": "Jeff Minem",
      "phone": "+1234567890",
      "email": "jeffMinem@gmail.com",
      "status": "OFFLINE",
      "vehiclePlateNumber": "CA-1234",
      "vehicleDescription": "Black Chevy",
      "note": null,
      "imageUrl": null,
      "partner": "None"
    },
    "pickup": {
      "id": 45678,
      "name": "Pizza Home",
      "address": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "formattedAddress": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "phone": "+1234567891",
      "lat": 37.007420,
      "lng": -121.301
    },
    "delivery": {
      "id": 420,
      "name": "Abbey Kikoy",
      "address": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "formattedAddress": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "phone": "+1234567892",
      "email": "",
      "lat": 37.4568076,
      "lng": -121.925089
    },
    "status": "ALREADY_DELIVERED"
  }

```

* * *
[Authentication](https://docs.shipday.com/reference/partner-authentication)[Completed Orders](https://docs.shipday.com/reference/retrieve-member-orders)
Did this page help you?
Yes
No
10 months ago
* * *
[Authentication](https://docs.shipday.com/reference/partner-authentication)[Completed Orders](https://docs.shipday.com/reference/retrieve-member-orders)
Did this page help you?
Yes
No
  *     * [Attributes](https://docs.shipday.com/reference/partner-order-object#attributes)


  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Completed Orders

[Jump to Content](https://docs.shipday.com/reference/retrieve-member-orders#content)
[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)
[Home](https://docs.shipday.com/)[API Reference](https://docs.shipday.com/reference)
* * *
[API Reference](https://docs.shipday.com/reference)[Tutorials](https://docs.shipday.com/page/tutorials)[Support](https://docs.shipday.com/page/support)[![Shipday](https://files.readme.io/4c1a92e-small-MicrosoftTeams-image.png)](https://docs.shipday.com/)
API Reference
Completed Orders
Search
`CTRL-K`
JUMP TO`CTRL-/`
## Introduction
  * [Shipday API](https://docs.shipday.com/reference/shipday-api)
  * [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  * [Authentication](https://docs.shipday.com/reference/authentication)
  * [Errors](https://docs.shipday.com/reference/errors)


## Core Resources
  * [Delivery Orders](https://docs.shipday.com/reference/delivery-order-object)
    * [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
    * [Retrieve Active Ordersget](https://docs.shipday.com/reference/retrieve-active-orders)
    * [Retrieve Order Detailsget](https://docs.shipday.com/reference/retrieve-order-details)
    * [Insert Orderpost](https://docs.shipday.com/reference/insert-delivery-order)
    * [Edit Orderput](https://docs.shipday.com/reference/edit-order)
    * [Delete Orderdel](https://docs.shipday.com/reference/delete-order)
    * [Orders Querypost](https://docs.shipday.com/reference/delivery-orders-query)
    * [Assign Order to Driverput](https://docs.shipday.com/reference/assign-order)
    * [Unassign Order from Driverput](https://docs.shipday.com/reference/unassign-order-from-driver-1)
    * [Order Ready to Pickupput](https://docs.shipday.com/reference/order-ready-to-pickup)
    * [Order Status Updateput](https://docs.shipday.com/reference/order-status-update)
  * [Pickup Orders](https://docs.shipday.com/reference/pickup-order-object)
    * [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
    * [Retrieve Pickup Order Detailsget](https://docs.shipday.com/reference/retrieve-pickup-order-details)
    * [Insert Pickup Orderpost](https://docs.shipday.com/reference/insert-pickup-order)
    * [Edit Pickup Orderput](https://docs.shipday.com/reference/edit-pickup-order)
    * [Delete Pickup Orderdel](https://docs.shipday.com/reference/delete-pickup-order)
  * [Carriers](https://docs.shipday.com/reference/carrier-object)
    * [Carrier Object](https://docs.shipday.com/reference/carrier-object)
    * [Retrieve Carriersget](https://docs.shipday.com/reference/retrieve-carriers)
    * [Add a Carrierpost](https://docs.shipday.com/reference/add-a-carrier-1)
    * [Delete a carrierdel](https://docs.shipday.com/reference/delete-a-carrier)
  * [Delivery Tracking](https://docs.shipday.com/reference/etadatapublic-object)
    * [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)
    * [Order Delivery Progressget](https://docs.shipday.com/reference/order-delivery-progress)


## Partners
  * [Shipday Partners](https://docs.shipday.com/reference/partners)
  * [Authentication](https://docs.shipday.com/reference/partner-authentication)
  * [Shipday Partner Orders](https://docs.shipday.com/reference/partner-order-object)
    * [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
    * [Completed Ordersget](https://docs.shipday.com/reference/retrieve-member-orders)
    * [Orders Querypost](https://docs.shipday.com/reference/partner-orders-query)
  * [Retrieve Members](https://docs.shipday.com/reference/member-details-object)
    * [Member Details Object](https://docs.shipday.com/reference/member-details-object)
    * [Retrieve Member Detailsget](https://docs.shipday.com/reference/retrieve-members)


## On-Demand Delivery
  * [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
    * [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)
    * [Servicesget](https://docs.shipday.com/reference/services)
    * [Estimateget](https://docs.shipday.com/reference/estimate)
    * [Assignpost](https://docs.shipday.com/reference/assign)
    * [Detailsget](https://docs.shipday.com/reference/details)
    * [Cancelpost](https://docs.shipday.com/reference/cancel)
    * [Availabilitypost](https://docs.shipday.com/reference/availability-1)


## Webhooks
  * [Webhooks](https://docs.shipday.com/reference/order-status-update-2)
    * [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)
    * [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)


Powered by [](https://readme.com?ref_src=hub&project=shipday)

get
https://api.shipday.com/partner/members/{companyId}/completedOrders
Returns a list of orders completed by a member in the past 24 hours. Returns at most 100 orders data at a time. To get more order data, one must paginate through the order list.

Returns
[](https://docs.shipday.com/reference/retrieve-member-orders#returns)
Order object array `Array`  
Array of [order objects](https://docs.shipday.com/reference/partner-order-object) with all details
[](https://docs.shipday.com/reference/retrieve-member-orders#path-params)Path Params
companyId
int64
required
Defaults to 1234
[](https://docs.shipday.com/reference/retrieve-member-orders#header-params)Headers
PARTNER-API-KEY
string
required
Defaults to <partner api key>
accept
string
enum
Defaults to application/json
Generated from available response content types
application/json text/plain
Allowed:
`application/json``text/plain`
[](https://docs.shipday.com/reference/retrieve-member-orders#response-schemas)Responses

`` 200
200
[](https://docs.shipday.com/reference/retrieve-member-orders#retrievememberorders-array-response-body)Response body
array of objects
object
orderId
integer
Defaults to 0
orderNumber
string
companyId
integer
Defaults to 0
orderItem
string
accepted
boolean
Defaults to true
placementTime
string
requestedPickupTime
string
requestedDeliveryTime
string
assignedTime
string
startTime
string
pickedupTime
string
arrivedTime
string
deliveryTime
string
failedDeliveryTime
string
deliveryNote
string
deliveryInstruction
string
dispatcherNote
string
paymentMethod
string
orderSource
string
incomplete
boolean
Defaults to true
orderTotal
number
Defaults to 0
deliveryFee
number
Defaults to 0
tip
number
Defaults to 0
discount
integer
Defaults to 0
tax
integer
Defaults to 0
driverPayment
integer
Defaults to 0
carrier
object
carrier object
pickup
object
pickup object
delivery
object
delivery object
status
string

`` 400
400

`` 401
401
* * *
[Partner Order Object](https://docs.shipday.com/reference/partner-order-object)[Orders Query](https://docs.shipday.com/reference/partner-orders-query)
Did this page help you?
Yes
No
Language
Credentials
Header
Header
cURL Request

```
















```
xxxxxxxxxx
```

1

```
curl --request GET \
```

2

```
     --url https://api.shipday.com/partner/members/1234/completedOrders \
```

3

```
     --header 'PARTNER-API-KEY: <partner api key>' \
```

4

```
     --header 'accept: application/json'
```


```

``
200 - Result

```



















```
xxxxxxxxxx
```

62

```
]
```

1

```
[
```

2

```
  {
```

3

```
    "orderId": 1234567890,
```

4

```
    "orderNumber": "NR#123Test",
```

5

```
    "companyId": 1234567,
```

6

```
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
```

7

```
    "accepted": true,
```

8

```
    "placementTime": "2021-02-23T17:54:44Z",
```

9

```
    "requestedPickupTime": "2021-02-23T18:24:43Z",
```

10

```
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
```

11

```
    "assignedTime": "2021-02-23T17:56:00Z",
```

12

```
    "startTime": "2021-02-23T18:03:41Z",
```

13

```
    "pickedupTime": "2021-02-23T18:27:51Z",
```

14

```
    "arrivedTime": "2021-02-23T18:42:12Z",
```

15

```
    "deliveryTime": "2021-02-23T18:45:351Z",
```

16

```
    "failedDeliveryTime": null,
```

17

```
    "deliveryNote": "",
```

18

```
    "deliveryInstruction": "Call my number when you arrive",
```

19

```
    "dispatcherNote": "rd",
```

20

```
    "paymentMethod": "CARD",
```

21

```
    "orderSource": "",
```

22

```
    "incomplete": false,
```

23

```
    "orderTotal": 13.4,
```

24

```
    "deliveryFee": 5.2,
```

25

```
    "tip": 1.3,
```

26

```
    "discount": 0,
```

27

```
    "tax": 0,
```

28

```
    "driverPayment": 0,
```

29

```
    "carrier": {
```

30

```
      "id": 7890,
```

31

```
      "name": "Jeff Minem",
```


```

10 months ago
* * *
[Partner Order Object](https://docs.shipday.com/reference/partner-order-object)[Orders Query](https://docs.shipday.com/reference/partner-orders-query)
Did this page help you?
Yes
No
  1. Introduction
  2. [Shipday API](https://docs.shipday.com/reference/shipday-api)
  3. [Shipday SDK](https://docs.shipday.com/reference/shipday-sdk)
  4. [Authentication](https://docs.shipday.com/reference/authentication)
  5. [Errors](https://docs.shipday.com/reference/errors)


  1. Core Resources
  2. [Delivery Orders](https://docs.shipday.com/reference/delivery-orders)
  3. [Order Status Updateput ](https://docs.shipday.com/reference/order-status-update)
  4. [Order Ready to Pickupput ](https://docs.shipday.com/reference/order-ready-to-pickup)
  5. [Unassign Order from Driverput ](https://docs.shipday.com/reference/unassign-order-from-driver-1)
  6. [Assign Order to Driverput ](https://docs.shipday.com/reference/assign-order)
  7. [Orders Querypost ](https://docs.shipday.com/reference/delivery-orders-query)
  8. [Delete Orderdel ](https://docs.shipday.com/reference/delete-order)
  9. [Edit Orderput ](https://docs.shipday.com/reference/edit-order)
  10. [Insert Orderpost ](https://docs.shipday.com/reference/insert-delivery-order)
  11. [Retrieve Order Detailsget ](https://docs.shipday.com/reference/retrieve-order-details)
  12. [Retrieve Active Ordersget ](https://docs.shipday.com/reference/retrieve-active-orders)
  13. [Delivery Order Object](https://docs.shipday.com/reference/delivery-order-object)
  14. [Pickup Orders](https://docs.shipday.com/reference/pickup-orders)
  15. [Delete Pickup Orderdel ](https://docs.shipday.com/reference/delete-pickup-order)
  16. [Edit Pickup Orderput ](https://docs.shipday.com/reference/edit-pickup-order)
  17. [Insert Pickup Orderpost ](https://docs.shipday.com/reference/insert-pickup-order)
  18. [Retrieve Pickup Order Detailsget ](https://docs.shipday.com/reference/retrieve-pickup-order-details)
  19. [Pickup Order Object](https://docs.shipday.com/reference/pickup-order-object)
  20. [Carriers](https://docs.shipday.com/reference/carriers)
  21. [Delete a carrierdel ](https://docs.shipday.com/reference/delete-a-carrier)
  22. [Add a Carrierpost ](https://docs.shipday.com/reference/add-a-carrier-1)
  23. [Retrieve Carriersget ](https://docs.shipday.com/reference/retrieve-carriers)
  24. [Carrier Object](https://docs.shipday.com/reference/carrier-object)
  25. [Delivery Tracking](https://docs.shipday.com/reference/delivery-tracking)
  26. [Order Delivery Progressget ](https://docs.shipday.com/reference/order-delivery-progress)
  27. [Eta Data Object](https://docs.shipday.com/reference/etadatapublic-object)


  1. Partners
  2. [Shipday Partners](https://docs.shipday.com/reference/partners)
  3. [Authentication](https://docs.shipday.com/reference/partner-authentication)
  4. [Shipday Partner Orders](https://docs.shipday.com/reference/shipday-partner-orders)
  5. [Orders Querypost ](https://docs.shipday.com/reference/partner-orders-query)
  6. [Completed Ordersget ](https://docs.shipday.com/reference/retrieve-member-orders)
  7. [Partner Order Object](https://docs.shipday.com/reference/partner-order-object)
  8. [Retrieve Members](https://docs.shipday.com/reference/retrieve-members-1)
  9. [Retrieve Member Detailsget ](https://docs.shipday.com/reference/retrieve-members)
  10. [Member Details Object](https://docs.shipday.com/reference/member-details-object)


  1. On-Demand Delivery
  2. [On-Demand Delivery](https://docs.shipday.com/reference/on-demand-delivery)
  3. [Availabilitypost ](https://docs.shipday.com/reference/availability-1)
  4. [Cancelpost ](https://docs.shipday.com/reference/cancel)
  5. [Detailsget ](https://docs.shipday.com/reference/details)
  6. [Assignpost ](https://docs.shipday.com/reference/assign)
  7. [Estimateget ](https://docs.shipday.com/reference/estimate)
  8. [Servicesget ](https://docs.shipday.com/reference/services)
  9. [On-Demand Delivery Details Object](https://docs.shipday.com/reference/on-demand-delivery-details-object)


  1. Webhooks
  2. [Webhooks](https://docs.shipday.com/reference/shipday-webhoks)
  3. [Driver Location Webhook (Beta)](https://docs.shipday.com/reference/driver-location-update)
  4. [Order Status Update](https://docs.shipday.com/reference/order-status-update-2)

### Partner Orders Query

### GET `/members/{companyId}/completedOrders`

**Full URL:** `https://api.shipday.com/partner/members/{companyId}/completedOrders`

**Completed Orders**

Returns a list of orders completed by a member in the past 24 hours. Returns at most 100 orders data at a time. To get more order data, one must paginate through the order list.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `companyId` | path | integer | yes |  |
| `PARTNER-API-KEY` | header | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401

**Response Example (200)**

```json
[
  {
    "orderId": 1234567890,
    "orderNumber": "NR#123Test",
    "companyId": 1234567,
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
    "accepted": true,
    "placementTime": "2021-02-23T17:54:44Z",
    "requestedPickupTime": "2021-02-23T18:24:43Z",
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
    "assignedTime": "2021-02-23T17:56:00Z",
    "startTime": "2021-02-23T18:03:41Z",
    "pickedupTime": "2021-02-23T18:27:51Z",
    "arrivedTime": "2021-02-23T18:42:12Z",
    "deliveryTime": "2021-02-23T18:45:351Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": "Call my number when you arrive",
    "dispatcherNote": "rd",
    "paymentMethod": "CARD",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 13.4,
    "deliveryFee": 5.2,
    "tip": 1.3,
    "discount": 0.0,
    "tax": 0.0,
    "driverPayment": 0.0,
    "carrier": {
      "id": 7890,
      "name": "Jeff Minem",
      "phone": "+1234567890",
      "email": "jeffMinem@gmail.com",
      "status": "OFFLINE",
      "vehiclePlateNumber": "CA-1234",
      "vehicleDescription": "Black Chevy",
      "note": null,
      "imageUrl": null,
      "partner": "None"
    },
    "pickup": {
      "id": 45678,
      "name": "Pizza Home",
      "address": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "formattedAddress": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "phone": "+1234567891",
      "lat": 37.007420,
      "lng": -121.301
    },
    "delivery": {
      "id": 420,
      "name": "Abbey Kikoy",
      "address": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "formattedAddress": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "phone": "+1234567892",
      "email": "",
      "lat": 37.4568076,
      "lng": -121.925089
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 5, 2021, 1:03:16 AM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/members/1199/completedOrders"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "requested company/dispatcher is not a member of this partner"
}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/partner/orders`

**Orders Query**

Returns a list of orders as per the defined query request object.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `PARTNER-API-KEY` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `companyId` | string | yes | Single long value or comma separated long values inside quote for querying multiple companies.<br/><br/>  Examples: 1234 or "1234, 1235, 1236" or "1234" |
| `startTime` | string | no | ISO-8601 format date-time in UTC. Starting point of the time range query <br/><br/><strong>Default:</strong>24 hours past from now |
| `endTime` | string | no | ISO-8601 format date-time in UTC. Ending point of the time range query. <br/><br/><strong>Default:</strong> current time |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |
| `orderStatus` | string (enum) | no | Indicates what category of orders to retrieve. (enum: ACTIVE, NOT_ASSIGNED, NOT_ACCEPTED, NOT_STARTED_YET, STARTED, PICKED_UP, READY_TO_DELIVER, ALREADY_DELIVERED, FAILED_DELIVERY, INCOMPLETE) |
| `carrierId` | string | no | Single long value or comma separated long values inside quote for querying multiple assigned carriers. |
| `pickupId` | string | no | Pickup identifier. It needs to be exact match with case-sensitivity. |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401
- `415` — 415

**Response Example (200)**

```json
[
  {
    "orderId": 1234567890,
    "orderNumber": "NR#123Test",
    "companyId": 1234567,
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
    "accepted": true,
    "placementTime": "2021-02-23T17:54:44Z",
    "requestedPickupTime": "2021-02-23T18:24:43Z",
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
    "assignedTime": "2021-02-23T17:56:00Z",
    "startTime": "2021-02-23T18:03:41Z",
    "pickedupTime": "2021-02-23T18:27:51Z",
    "arrivedTime": "2021-02-23T18:42:12Z",
    "deliveryTime": "2021-02-23T18:45:351Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": "Call my number when you arrive",
    "dispatcherNote": "rd",
    "paymentMethod": "CARD",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 13.4,
    "deliveryFee": 5.2,
    "tip": 1.3,
    "discount": 0.0,
    "tax": 0.0,
    "driverPayment": 0.0,
    "carrier": {
      "id": 7890,
      "name": "Jeff Minem",
      "phone": "+1234567890",
      "email": "jeffMinem@gmail.com",
      "status": "OFFLINE",
      "vehiclePlateNumber": "CA-1234",
      "vehicleDescription": "Black Chevy",
      "note": null,
      "imageUrl": null,
      "partner": "None"
    },
    "pickup": {
      "id": 45678,
      "name": "Pizza Home",
      "address": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "formattedAddress": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "phone": "+1234567891",
      "lat": 37.007420,
      "lng": -121.301
    },
    "delivery": {
      "id": 420,
      "name": "Abbey Kikoy",
      "address": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "formattedAddress": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "phone": "+1234567892",
      "email": "",
      "lat": 37.4568076,
      "lng": -121.925089
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 5, 2021, 1:03:16 AM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/orders"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "requested company/dispatcher is not a member of this partner"
}
```

**Response Example (415)**

```json
{
  "timestamp": "Apr 5, 2021, 1:15:25 AM",
  "status": 415,
  "error": "Unsupported Media Type",
  "message": "Content type 'application/x-www-form-urlencoded;charset=UTF-8' not supported",
  "path": "/partner/orders"
}
```


### GET `/members`

**Full URL:** `https://api.shipday.com/partner/members`

**Retrieve Member Details**

Returns a list of active members' details

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `PARTNER-API-KEY` | header | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401

**Response Example (200)**

```json
[
  {
    "dispatcherId": 1234567890,
    "dispatcherName": "Dispatcher",
    "companyId": 123456789012,
    "companyName": "Test Company",
    "companyAddress": "California City, CA, USA",
    "phone": "+1234567890",
    "email": "test@example.com"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 4, 2021, 8:52:04 PM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/members"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "no partner found"
}
```



### Member Details Object

Member Details Object merepresentasikan anggota (member) dari partner. Lihat endpoint `Retrieve Members` untuk contoh response penuh.

### Retrieve Members

### GET `/members/{companyId}/completedOrders`

**Full URL:** `https://api.shipday.com/partner/members/{companyId}/completedOrders`

**Completed Orders**

Returns a list of orders completed by a member in the past 24 hours. Returns at most 100 orders data at a time. To get more order data, one must paginate through the order list.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `companyId` | path | integer | yes |  |
| `PARTNER-API-KEY` | header | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401

**Response Example (200)**

```json
[
  {
    "orderId": 1234567890,
    "orderNumber": "NR#123Test",
    "companyId": 1234567,
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
    "accepted": true,
    "placementTime": "2021-02-23T17:54:44Z",
    "requestedPickupTime": "2021-02-23T18:24:43Z",
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
    "assignedTime": "2021-02-23T17:56:00Z",
    "startTime": "2021-02-23T18:03:41Z",
    "pickedupTime": "2021-02-23T18:27:51Z",
    "arrivedTime": "2021-02-23T18:42:12Z",
    "deliveryTime": "2021-02-23T18:45:351Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": "Call my number when you arrive",
    "dispatcherNote": "rd",
    "paymentMethod": "CARD",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 13.4,
    "deliveryFee": 5.2,
    "tip": 1.3,
    "discount": 0.0,
    "tax": 0.0,
    "driverPayment": 0.0,
    "carrier": {
      "id": 7890,
      "name": "Jeff Minem",
      "phone": "+1234567890",
      "email": "jeffMinem@gmail.com",
      "status": "OFFLINE",
      "vehiclePlateNumber": "CA-1234",
      "vehicleDescription": "Black Chevy",
      "note": null,
      "imageUrl": null,
      "partner": "None"
    },
    "pickup": {
      "id": 45678,
      "name": "Pizza Home",
      "address": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "formattedAddress": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "phone": "+1234567891",
      "lat": 37.007420,
      "lng": -121.301
    },
    "delivery": {
      "id": 420,
      "name": "Abbey Kikoy",
      "address": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "formattedAddress": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "phone": "+1234567892",
      "email": "",
      "lat": 37.4568076,
      "lng": -121.925089
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 5, 2021, 1:03:16 AM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/members/1199/completedOrders"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "requested company/dispatcher is not a member of this partner"
}
```


### POST `/orders`

**Full URL:** `https://api.shipday.com/partner/orders`

**Orders Query**

Returns a list of orders as per the defined query request object.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `PARTNER-API-KEY` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `companyId` | string | yes | Single long value or comma separated long values inside quote for querying multiple companies.<br/><br/>  Examples: 1234 or "1234, 1235, 1236" or "1234" |
| `startTime` | string | no | ISO-8601 format date-time in UTC. Starting point of the time range query <br/><br/><strong>Default:</strong>24 hours past from now |
| `endTime` | string | no | ISO-8601 format date-time in UTC. Ending point of the time range query. <br/><br/><strong>Default:</strong> current time |
| `startCursor` | integer | no | Starting pointer of the retrieved order list. This marker is used for paginating the result.<br/><br/><strong>Default:</strong> 1 |
| `endCursor` | integer | no | Ending pointer of the retrieved order list. This marker is used for paginating the result. In combination with the startCursor it will determine which rows to return. <br/><br/> For example, startCursor=26 and endCursor=50 will return 25 orders data ranging from 26th to 50th rows sorted in descending order of order placement time having the most recent one at the top.<br/><br/><strong>Default:</strong> 100 |
| `orderStatus` | string (enum) | no | Indicates what category of orders to retrieve. (enum: ACTIVE, NOT_ASSIGNED, NOT_ACCEPTED, NOT_STARTED_YET, STARTED, PICKED_UP, READY_TO_DELIVER, ALREADY_DELIVERED, FAILED_DELIVERY, INCOMPLETE) |
| `carrierId` | string | no | Single long value or comma separated long values inside quote for querying multiple assigned carriers. |
| `pickupId` | string | no | Pickup identifier. It needs to be exact match with case-sensitivity. |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401
- `415` — 415

**Response Example (200)**

```json
[
  {
    "orderId": 1234567890,
    "orderNumber": "NR#123Test",
    "companyId": 1234567,
    "orderItem": "[{name:Pizza,quantity:1,unitPrice:13.4}]",
    "accepted": true,
    "placementTime": "2021-02-23T17:54:44Z",
    "requestedPickupTime": "2021-02-23T18:24:43Z",
    "requestedDeliveryTime": "2021-02-23T18:54:43Z",
    "assignedTime": "2021-02-23T17:56:00Z",
    "startTime": "2021-02-23T18:03:41Z",
    "pickedupTime": "2021-02-23T18:27:51Z",
    "arrivedTime": "2021-02-23T18:42:12Z",
    "deliveryTime": "2021-02-23T18:45:351Z",
    "failedDeliveryTime": null,
    "deliveryNote": "",
    "deliveryInstruction": "Call my number when you arrive",
    "dispatcherNote": "rd",
    "paymentMethod": "CARD",
    "orderSource": "",
    "incomplete": false,
    "orderTotal": 13.4,
    "deliveryFee": 5.2,
    "tip": 1.3,
    "discount": 0.0,
    "tax": 0.0,
    "driverPayment": 0.0,
    "carrier": {
      "id": 7890,
      "name": "Jeff Minem",
      "phone": "+1234567890",
      "email": "jeffMinem@gmail.com",
      "status": "OFFLINE",
      "vehiclePlateNumber": "CA-1234",
      "vehicleDescription": "Black Chevy",
      "note": null,
      "imageUrl": null,
      "partner": "None"
    },
    "pickup": {
      "id": 45678,
      "name": "Pizza Home",
      "address": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "formattedAddress": "123 Fremont Blvd, Fremont, CA 94538, USA",
      "phone": "+1234567891",
      "lat": 37.007420,
      "lng": -121.301
    },
    "delivery": {
      "id": 420,
      "name": "Abbey Kikoy",
      "address": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "formattedAddress": "000 Alta Vista Terrace, Fremont, CA 94539, USA",
      "phone": "+1234567892",
      "email": "",
      "lat": 37.4568076,
      "lng": -121.925089
    },
    "status": "ALREADY_DELIVERED"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 5, 2021, 1:03:16 AM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/orders"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "requested company/dispatcher is not a member of this partner"
}
```

**Response Example (415)**

```json
{
  "timestamp": "Apr 5, 2021, 1:15:25 AM",
  "status": 415,
  "error": "Unsupported Media Type",
  "message": "Content type 'application/x-www-form-urlencoded;charset=UTF-8' not supported",
  "path": "/partner/orders"
}
```


### GET `/members`

**Full URL:** `https://api.shipday.com/partner/members`

**Retrieve Member Details**

Returns a list of active members' details

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `PARTNER-API-KEY` | header | string | yes |  |

**Response Codes**

- `200` — 200
- `400` — 400
- `401` — 401

**Response Example (200)**

```json
[
  {
    "dispatcherId": 1234567890,
    "dispatcherName": "Dispatcher",
    "companyId": 123456789012,
    "companyName": "Test Company",
    "companyAddress": "California City, CA, USA",
    "phone": "+1234567890",
    "email": "test@example.com"
  }
]
```

**Response Example (400)**

```json
{
  "timestamp": "Apr 4, 2021, 8:52:04 PM",
  "status": 400,
  "error": "Bad Request",
  "message": "Missing request header 'PARTNER-API-KEY' for method parameter of type String",
  "path": "/partner/members"
}
```

**Response Example (401)**

```json
{
  "errorMessage": "no partner found"
}
```



## On-Demand Delivery

### On-Demand Delivery

**On-Demand Delivery** adalah layanan dari Shipday yang menghubungkan order ke third-party carrier network (Uber, DoorDash, Roadie, dll) secara otomatis berdasarkan harga dan ketersediaan.

Base URL khusus: `https://api.shipday.com/on-demand` (lihat endpoint di bawah).

### On-Demand Delivery Details Object

Object yang mengembalikan detail dari delivery on-demand (service pilihan, estimasi, status, dsb). Lihat response endpoint `Details` untuk struktur lengkap.

### Services

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



### Estimate

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



### Assign

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



### Details

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



### Cancel

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



### Availability

### GET `/services`

**Full URL:** `https://api.shipday.com/on-demand/services`

**Services**

Get a list of 3rd party delivery service providers available

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/services \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
[
  {
    "prod": false,
    "name": "DoorDash",
    "status": true
  }
]
```

**Response Example (400)**

```json
{}
```


### GET `/estimate/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/estimate/{orderId}`

**Estimate**

Get estimate from 3rd party service providers (Service availability, Price, Wait time etc.)

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/estimate/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
    "id": "1233",
    "name": "Delivery Ninja",
    "fee": 22.50,
    "pickupTime": "2021-08-21T23:14:10Z",
    "deliveryTime": "2021-08-21T23:44:10Z",
    "pickupDuration": 15,
    "deliveryDuration": 15,
    "error": false,
    "errorCode": null,
    "errorMessage": null
  }
```

**Response Example (400)**

```json
{}
```


### POST `/assign`

**Full URL:** `https://api.shipday.com/on-demand/assign`

**Assign**

Assign to a specific 3rd party delivery service provider. Usually, after getting an estimate.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | yes | Name of the 3rd party service provider |
| `orderId` | integer | yes | Order id of the order to be assigned |
| `tip` | number | no | Tip amount for the order |
| `estimateReference` | string | no | Reference id of the estimate |
| `contactlessDelivery` | boolean | no | Boolean value indicating contactless delivery or not |
| `podType` | string (enum) | no | Enum values ("PHOTO", "SIGNATURE", "PIN", "NONE") indicating proof of delivery type (enum: "PHOTO", "SIGNATURE", "PIN", "NONE") |
| `podTypes` | array<string> | no | If multiple POD types are applicable, then it can be sent in this property as an array of enum POD types like ["PHOTO", "PIN"] |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/assign \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json' \
     --data '
{
     "name": "Hello Orders",
     "orderId": 1234,
     "tip": 6.5,
     "estimateReference": "12345",
     "contactlessDelivery": false,
     "podType": "PHOTO"
}
'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### GET `/details/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/details/{orderId}`

**Details**

Get order and status details for an assigned order to 3rd party service provider.

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request GET \
     --url https://api.shipday.com/on-demand/details/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "id": 1233,
  "orderId": 123213,
  "companyId": 8836,
  "adminId": 3894,
  "thirdPartyName": "Delivery Ninja",
  "referenceId": "1231232",
  "referenceTag": "Third party",
  "thirdPartyFee": 1.50,
  "shipdayCharge": 1.25,
  "totalBillableAmount": 2.75,
  "charged": false,
  "timestamp": "2021-08-21T23:34:10Z",
  "insertedAt": 16232323232,
  "data": "Example information data",
  "trackingUrl": "https://dispatch.shipday.com/tracking/bHZu1221w==&lang=en",
  "driverName": "Alex",
  "driverPhone": "+14234420986",
  "driverLat": 32.8069245,
  "driverLng": -170.368697,
  "driverImageUrl": "https://s3-us-west-2.amazonaws.com/qt.com.dashboard.profile.driver/somelinktothecarrierphoto.jpg",
  "driverVehicleDescription": null,
  "tip": 4.50,
  "processingFee": 0.50,
  "status": "PICKEDUP",
  "billable": false
}
```

**Response Example (400)**

```json
{}
```


### POST `/cancel/{orderId}`

**Full URL:** `https://api.shipday.com/on-demand/cancel/{orderId}`

**Cancel**

Cancel an assigned order from 3rd party service provider

**Parameters**

| Name | In | Type | Required | Description |
|------|----|------|----------|-------------|
| `orderId` | path | string | yes | order Id of the order |
| `Authorization` | header | string | yes | Replace the BgxsDwd00n.LNNn90QydrjgZ1K9dS13 part with your own API_KEY from Shipday for authentication. |
| `Content-Type` | header | string | yes |  |

**Request Example**

```bash
curl --request POST \
     --url https://api.shipday.com/on-demand/cancel/orderId \
     --header 'Accept: application/json' \
     --header 'Authorization: Basic BgxsDwd00n.LNNn90QydrjgZ1K9dS13' \
     --header 'Content-Type: application/json'
```

**Response Codes**

- `200` — 200
- `400` — 400

**Response Example (200)**

```json
{
  "success": true
}
```

**Response Example (400)**

```json
{}
```


### POST `/availability`

**Full URL:** `https://api.shipday.com/on-demand/availability`

**Availability**

**Request Body**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `pickupAddress` | string | yes | Pickup address of the order. |
| `deliveryAddress` | string | yes | Delivery address of the order. |
| `deliveryTime` | string | no | Expected time for delivery in UTC following ISO_8061 format. |
| `pickUpTime` | string | no | Expected time for pickup in UTC following ISO_8061 format. |

**Request Example**

```bash
curl --location 'https://api.shipday.com/on-demand/availability' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic 5DssQuvPtl.El4Px8lVjl8X5K2ERCfX' \
--data '{
    "pickupAddress": "1 Wall St, New York, NY 10005, USA",
    "deliveryAddress": "1000 5th Ave, New York, NY 10028, USA",
    "deliveryTime": "2025-06-25T17:20:26Z"
}'
```

**Response Codes**

- `200` — 200
- `401` — Unauthorized

**Response Example (200)**

```json
[
  {
    "id": "1",
    "name": "DoorDash",
    "fee": 11.5,
    "pickupTime": "2025-06-25T17:23:52Z",
    "deliveryTime": "2025-06-25T18:16:41Z",
    "pickupDuration": 11,
    "deliveryDuration": 63,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": null,
    "name": "MotoClick",
    "fee": null,
    "pickupTime": null,
    "deliveryTime": null,
    "pickupDuration": null,
    "deliveryDuration": null,
    "error": true,
    "errorCode": null,
    "errorMessage": "No service available",
    "errorDescription": "Outside Delivery Zone",
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  },
  {
    "id": "dqt_iEU4aT01QJGGHYYZubMqQA",
    "name": "Uber",
    "fee": 11.99,
    "pickupTime": "2025-06-25T17:29:51Z",
    "deliveryTime": "2025-06-25T18:40:29Z",
    "pickupDuration": 17,
    "deliveryDuration": 87,
    "error": false,
    "errorCode": null,
    "errorMessage": null,
    "errorDescription": null,
    "isProd": false,
    "isInternal": false,
    "probableAssignment": false,
    "minBillableFee": null,
    "regulatoryFee": 0
  }
]
```

**Response Example (401)**

```json
{}
```



## Webhooks

### Order Status Update Webhook

**Order Status Update Webhook** — Shipday mengirim POST ke URL webhook Anda setiap kali status order berubah.

Konfigurasikan URL webhook di dashboard: `Settings > Integrations > Webhooks`.

Payload berisi event order (orderId, orderNumber, orderStatus, assignedCarrier, timestamps, dst). Format mirip dengan Delivery Order Object.

Shipday mengharapkan response `2xx` dalam waktu beberapa detik.

### Driver Location Update Webhook

**Driver Location Update Webhook (Beta)** — Shipday mengirim update posisi driver (lat/long) ke webhook Anda secara realtime selama pengiriman aktif.

Aktifkan di dashboard Integrations. Payload meliputi `carrierId`, `latitude`, `longitude`, `timestamp`, dan `orderId` terkait.


---

## Catatan / Notes

- Dokumen ini dikompilasi dari API Reference resmi Shipday (ReadMe.io).
- Jika ada perbedaan dengan versi live, dokumentasi resmi di https://docs.shipday.com adalah sumber kebenaran.
- Field yang tidak muncul pada schema (misal object reference page kosong) ditulis "(see live docs)".
