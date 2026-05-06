# Shopify Ajax Reference (Indonesian / English)

> Referensi lengkap **Ajax** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/ajax.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/ajax` |
| Total halaman | **7** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [reference](#reference)
- [reference / cart](#reference-cart)
- [reference / predictive-search](#reference-predictive-search)
- [reference / product](#reference-product)
- [reference / product-recommendations](#reference-product-recommendations)
- [section-rendering](#section-rendering)


---



<a id="landing"></a>


## About the Shopify Ajax API

The Ajax API provides a suite of lightweight REST API endpoints for development of [Shopify themes](https://shopify.dev/docs/storefronts/themes). The Ajax API can only be used by themes that are hosted by Shopify. You can't use the Ajax API on a Shopify custom storefront.

**Tip:**

To request the HTML markup for theme sections using an AJAX request, use the [Section Rendering API](https://shopify.dev/docs/api/ajax/section-rendering).

***

### Use cases

Possible uses of the Ajax API include:

* Add products to the cart and update the cart item counter.
* Display related product recommendations.
* Suggest products and collections to visitors as they type in a search field.

Refer to the [Ajax API reference](https://shopify.dev/docs/api/ajax/reference/) for a full list of available API endpoints.

***

### Making requests to the API

The Ajax API accepts two types of HTTP requests:

* `GET` requests to read cart and some product data
* `POST` requests to update the cart for the current session

For instance, to fetch the current contents of the cart, send a client-side request to the store's `/cart.js` endpoint.

```javascript
var cartContents = fetch(window.Shopify.routes.root + 'cart.js')
.then(response => response.json())
.then(data => { return data });
```

***

### Locale-aware URLs

Stores can have [dynamic URLs](https://shopify.dev/docs/storefronts/themes/markets/multiple-currencies-languages#locale-aware-urls) generated for them when they sell internationally or in multiple languages. When using the Ajax API, it's important to use dynamic, locale-aware URLs so that you can give visitors a consistent experience for the language and country that they've chosen.

The global value `window.Shopify.routes.root` is available to use as a base when building locale-aware URLs in JavaScript. The global value will always end in a `/` character, so you can safely use simple string concatenation to build the full URLs.

***

### Requirements and limitations

* This is an [unauthenticated](https://shopify.dev/docs/apps/build/authentication-authorization) API. It doesn't require access tokens or a client ID to access.
* There are no hard [rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits) on the Ajax API. It's still subject to Shopify's standard API abuse-prevention measures.
* All API responses return JSON-formatted data.
* Product JSON responses are limited to a maximum of 250 variants.
* The Ajax API can't be used to read any customer or order data, or update any store data. If you need more extensive access, check the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql).

***

### Tutorials

* [Show product recommendations on product pages using the Ajax API](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations)

***

---



<a id="reference"></a>


## Shopify Ajax API reference

Shopify’s Ajax API can be used in [Shopify themes](https://shopify.dev/docs/storefronts/themes) to carry out actions like adding items to the cart, and displaying suggested products without requiring any page refreshes from buyers.

The Ajax API includes the following endpoints:

* [**Cart**](https://shopify.dev/docs/api/ajax/reference/cart) - Update cart line items, attributes, and notes.
* [**Product**](https://shopify.dev/docs/api/ajax/reference/product) - Fetch information about any product in the catalog.
* [**Product Recommendations**](https://shopify.dev/docs/api/ajax/reference/product-recommendations) - Display recommended products on product pages.
* [**Predictive Search**](https://shopify.dev/docs/api/ajax/reference/predictive-search) - Suggest products, collections, pages and articles to buyers as they type their search queries.

***

---



<a id="reference-cart"></a>


## Cart API reference

The Cart API is used to interact with a cart during a customer's session. This guide shows how to use the Cart API to update cart line items, add cart attributes and notes, and generate shipping rates.

All Ajax API requests should use [locale-aware URLs](https://shopify.dev/docs/api/ajax#locale-aware-urls) to give visitors a consistent experience.

**Note:**

For simplicity, the code examples in this guide don't always use a callback.

***

### POST /{locale}/cart/add.​js

Use the `POST /{locale}/cart/add.js` endpoint to add one or multiple variants to the cart.

In the following example, `quantity` is the amount of the variant that you want to add and `id` is the variant ID of that variant. You can add multiple variants to the cart by appending more objects in the `items` array.

Below is a simplified `POST` request using the `fetch` API. The `formData` object is built in JavaScript, so the `Content-Type` should be set to `application/json` in the `headers` object. The response is the JSON of the line items associated with the added variants. If an item is already in the cart, then `quantity` is equal to the new quantity for that item.

### Example request

```js
let formData = {
 'items': [{
  'id': 36110175633573,
  'quantity': 2
  }]
};


fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
```

### Response

```json
{
  "items": [
    {
      "id": 36110175633573,
      "title": "Red Rain Coat - Small",
      "key": "794864229:03af7a8cb59a4c3c45595c76fa8cb53c",
      "price": 12900,
      "line_price": 12900,
      "quantity": 2,
      "sku": null,
      "grams": 0,
      "vendor": "Shopify",
      "properties": {},
      "variant_id": 794864229,
      "gift_card": false,
      "url": "/products/red-rain-coat?variant=794864229",
      "featured_image": {
        "url": "http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
        "aspect_ratio": 1.0,
        "alt": "Red rain coat with a hood"
      },
      "image": "http://cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
      "handle": "red-rain-coat",
      "requires_shipping": true,
      "product_title": "Red Rain Coat",
      "product_description": "A bright red rain coat for rainy days!",
      "product_type": "Coat",
      "properties" : null,
      "variant_title": "Red",
      "variant_options": ["Red"],
      "options_with_values": [
        {
          "name": "Color",
          "value": "Red"
        }
      ]
    }
  ]
}
```

Alternatively, you can use the [`FormData` constructor](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData) and target the desired add-to-cart form:

```js
let addToCartForm = document.querySelector('form[action$="/cart/add"]');
let formData = new FormData(addToCartForm);


fetch(window.Shopify.routes.root + 'cart/add.js', {
  method: 'POST',
  body: formData
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
```

#### Response

The response for a successful `POST` request is a JSON object of the line items associated with the added items.

If an added item was already in the cart, then the `quantity` is equal to the new quantity for that cart line item. However, if the same items have differing prices, properties, or selling plans, then they'll be split into their own line items.

**Tip:**

Changes in price are typically the result of [automatic discounts](https://help.shopify.com/en/manual/discounts/automatic-discounts) or [Shopify Scripts](https://help.shopify.com/manual/checkout-settings/script-editor).

### Example data

```js
items: [
  {
    id: 36323170943141,
    quantity: 1
  },
  {
    id: 36323170943141,
    selling_plan: 6717605,
    quantity: 1
  },
  {
    id: 36323170943141,
    parent_id: 4534355122,
    quantity: 1
  }
]
```

### Response

```json
{
  "items":[
    {
      "id":36323170943141,
      "properties":null,
      "quantity":1,
      "variant_id":36323170943141,
      "key":"36323170943141:b15f59bb6d406f2f45dc383a5493bdb8",
      "title":"Great Granola Bar",
      "price":2000,
      "original_price":2000,
      "discounted_price":2000,
      "line_price":2000,
      "original_line_price":2000,
      "total_discount":0,
      "discounts":[],
      "sku":"",
      "grams":0,
      "vendor":"shopify",
      "taxable":true,
      "product_id":5680114172069,
      "product_has_only_default_variant":true,
      "gift_card":false,
      "final_price":2000,
      "final_line_price":2000,
      "url":"/products/great-granola-bar?variant=36323170943141",
      "featured_image":{
        "aspect_ratio":1.504,
        "alt":"Great Granola Bar",
        "height":1277,
        "url":"https://cdn.shopify.com/s/files/1/0401/3218/2181/products/fallon-michael-h2UH2674Bg4-unsplash.jpg?v=1600796940",
        "width":1920
      },
      "image":"https://cdn.shopify.com/s/files/1/0401/3218/2181/products/fallon-michael-h2UH2674Bg4-unsplash.jpg?v=1600796940",
      "handle":"great-granola-bar",
      "requires_shipping":true,
```

#### Error responses

If the specified quantity for an item exceeds the available stock (e.g., attempting to add 20 items when only 10 are available), the cart will instead add the maximum available quantity. The error returned in JSON format is as follows:

```json
{
  "status": 422,
  "message": "Cart Error",
  "description": "You can't add more #{item.name} to the cart."
}
```

If the product is entirely sold out, then the following error is returned:

```json
{
  "status": 422,
  "message": "Cart Error",
  "description": "The product '#{item.name}' is already sold out."
}
```

If the product is not sold out, but all of its stock is in the cart, then the following error is returned:

```json
{
  "status": 422,
  "message": "Cart Error",
  "description": "You can't add more #{item.name} to the cart."
}
```

#### Add line item properties

You can add a variant to the cart with [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties) using the `properties` property. Its value must be an object of key-value pairs.

### Request data

```js
items: [
  {
    quantity: 1,
    id: 794864229,
    properties: {
      'First name': 'Caroline'
    }
  }
]
```

### Response

```json
{
  "items": [
    {
      "id": 794864229,
      "quantity": 1,
      // ...
      "properties" : {
        "First name": "Caroline"
      }
    }
  ]
}
```

#### Add a selling plan

You can add a variant with a [selling plan](https://shopify.dev/docs/api/liquid/objects/selling_plan) to the cart using the `selling_plan` parameter. Its value must be the [selling plan ID](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-id).

### Request data

```js
items: [
  {
    quantity: 1,
    id: 794864229,
    selling_plan: 183638
  }
]
```

### Response

```json
{
  "items": [
    {
      "id": 794864229,
      // ...
      "selling_plan_allocation": {
        "price": 3120,
        "compare_at_price": 3900,
        "per_delivery_price": 3120,
        "selling_plan": {
          "id": 183638,
          "name": "Pay every month, delivery every month | save 20%",
          "description": "No commitment · Auto-renews · Skip or cancel anytime",
          "options": [{
            "name": "Delivery Frequency",
            "position": 1,
            "value": "Month"
          }, {
            "name": "Billing Frequency",
            "position": 2,
            "value": "Month"
          }],
          "recurring_deliveries": true
        }
      }
    }
  ]
}
```

***

### GET /{locale}/cart.​js

Use the `GET /{locale}/cart.js` endpoint to get the cart as JSON.

All monetary properties are returned in the customer's presentment currency. To check the customer's presentment currency, you can use the `currency` field in the response. To learn more about selling in multiple currencies, refer to [Migrate your app to support multi-currency](https://shopify.dev/docs/api/admin-rest/latest/resources/transaction).

#### Responses

##### JSON of a cart

```json
{
  "token": "Z2NwLXVzLXdlc3QxOjAxSjBQTVk1Sjc5NVFKTjNOVlhLWENXQUI1?key=0d9909213054e22d092152de385763f0",
  "note": "Hello!",
  "attributes": {
    "Gift wrap": "Yes"
  },
  "original_total_price": 3399,
  "total_price": 2925,
  "total_discount": 474,
  "total_weight": 500,
  "item_count": 2,
  "items": [
    {
      "id": 39897499729985,
      "properties": {},
      "quantity": 1,
      "variant_id": 39897499729985,
      "key": "39897499729985:b1fca88d0e8bf5290f306f808785f744",
      "title": "Health potion - S / Low",
      "price": 900,
      "original_price": 900,
      "discounted_price": 900,
      "line_price": 900,
      "original_line_price": 900,
      "total_discount": 0,
      "discounts": [],
      "sku": "",
      "grams": 500,
      "vendor": "Polina's Potent Potions",
      "taxable": true,
      "product_id": 6786188247105,
      "product_has_only_default_variant": false,
      "gift_card": false,
      "final_price": 900,
      "final_line_price": 900,
      "url": "/products/health-potion?selling_plan=610435137&variant=39897499729985",
```

##### JSON of an empty cart

```json
{
  "token": "Z2NwLXVzLXdlc3QxOjAxSjBQTVk1Sjc5NVFKTjNOVlhLWENXQUI1?key=0d9909213054e22d092152de385763f0",
  "note": null,
  "attributes": {},
  "original_total_price": 0,
  "total_price": 0,
  "total_discount": 0,
  "total_weight": 0,
  "item_count": 0,
  "items": [],
  "requires_shipping": false,
  "currency": "CAD",
  "items_subtotal_price": 0,
  "cart_level_discount_applications": []
}
```

**Tip:**

If you want to empty an existing cart, then use the `/{locale}/cart/clear` endpoint.

##### JSON of a cart with remote products

```json
{
  "token": "Z2NwLXVzLXdlc3QxOjAxSjBQTVk1Sjc5NVFKTjNOVlhLWENXQUI1?key=0d9909213054e22d092152de385763f0",
  "note": null,
  "attributes": {},
  "original_total_price": 4925,
  "total_price": 4925,
  "total_discount": 0,
  "total_weight": 500,
  "item_count": 3,
  "items": [
    {
      "id": 36323170943141,
      "quantity": 1,
      "title": "Blue Mug - Sold by Sam's Shop",
      "remote": true,
      ...
    },
    {
      "id": 36323170943142,
      "quantity": 1,
      "title": "Salad bowl - Sold by Home Experts",
      "remote": true,
      ...
    },
    {
      "id": 36323170943143,
      "quantity": 1,
      "title": "Silverware set",
      ...
    }
  ],
  "requires_shipping": false,
  "currency": "CAD",
  "items_subtotal_price": 3149,
  "cart_level_discount_applications": []
}
```

***

### POST /{locale}/cart/update.​js

Use the `POST /{locale}/cart/update.js` endpoint to update the cart's line item quantities, note, or attributes. You can submit a serialized cart form, or submit separate updates to a cart's line items, note, or attributes.

#### Update line item quantities

To update line item quantities, you can make a `POST` request with an `updates` object. The `updates` object must contain key-value pairs where the value is the desired quantity, and the key is one of the following:

* The line item's [`variant_id`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-variant_id)
* The line item's [`key`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-key)

```js
let updates = {
  794864053: 2,
  794864233: 3
};


fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ updates })
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
```

A cart can have multiple line items that share the same `variant_id`. For example, when variants have different [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties), or [automatic discounts](https://help.shopify.com/en/manual/discounts/automatic-discounts) create variants at different prices. Because of this, it's recommended to use the line item key to ensure that you're only changing the intended line item.

The line item key is not persistent for the lifetime of a line item, it changes as characteristics of the line item change. This includes, but is not limited to, properties and discount applications.

**Note:**

If you use the variant ID, then the key can be either an integer or a string. However, if you use the line item key, then the key needs to be a string.

The following `POST` request yields the same result:

```js
var formData = new FormData();
formData.append("updates[794864053]", 2);
formData.append("updates[794864233]", 3);


fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

The `/{locale}/cart/update.js` endpoint adds new line items to the cart if the `variant_id` provided doesn't match any line item already in the cart. However, if the `variant_id` matches multiple line items, then the first matching line item is updated.

**Tip:**

Use the `change.js` endpoint when changing line items that are already in the cart, and the `add.js` endpoint when adding new line items.

You can remove items from the cart by setting the quantity to 0:

```js
let updates = {
  794864053: 0,
  794864233: 0
};


fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ updates })
})
.then(response => {
  return response.json();
})
.catch((error) => {
  console.error('Error:', error);
});
```

You can also submit an array of numbers to `/{locale}/cart/update.js`, provided the size of the array matches the number of line items in the cart. Each number in the array sets the quantity for the corresponding line item in the cart. For example, if you have 3 line items in the cart with quantities 1, 2, and 3, and you want to change those quantities to 3, 2, and 1, then you can use the following:

```js
fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ updates: [3, 2, 1] })
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Update the cart note

To update the cart note, you can make a `POST` request with a `note` character string:

```js
{
  note: 'This is a note about my order'
}
```

#### Update cart attributes

To update cart attributes, you can make a `POST` request with an `attributes` object. The `attributes` object must contain key-value pairs where the `key` is the name of the attribute you want to update, and the value is the attribute value:

```js
{
  attributes: {
    'Gift wrap': 'Yes'
  }
}
```

The following `POST` request yields the same result:

```js
var formData = new FormData();
formData.append("attributes[Gift wrap]", "Yes");


fetch(window.Shopify.routes.root + 'cart/update.js', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => console.log(data));
```

#### Update discounts in the cart

You can apply a discount to the cart, as shown in the following example:

```js
{
  discount: 'discount_code'
}
```

You can also apply multiple discounts to the cart using a comma `,` separator:

```js
{
  discount: 'discount_code,discount_code2'
}
```

To remove all discounts from the cart, use an empty string:

```js
{
  discount: ''
}
```

#### Response

The JSON of the cart.

#### Error responses

If a variant ID is provided that either doesn't exist or isn't available in the online store channel, then the endpoint returns the following error:

```js
{
  "status": 404,
  "message": "Cart Error"
  "description": "Cannot find variant"
}
```

**Caution:**

The `update.js` endpoint doesn't validate the quantity on variants that are already in the cart. This means that it's possible to add more inventory than is available.

***

### POST /{locale}/cart/change.​js

Use the `/{locale}/cart/change.js` endpoint to change the `quantity`, `properties`, and `selling_plan` properties of a cart line item. Only items already in your cart can be changed, and you can change only one line item at a time.

#### Identify the line item to change

The `POST` data requires either an `id` or `line` property to identify the line item to be changed.

##### The `id` property

The value of the `id` property can be one of the following:

* The line item's [`variant_id`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-variant_id)
* The line item's [`key`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-key)

###### Variant ID

```js
{
  'id': 794864053,
  'quantity': 3
}
```

###### Line item key

```js
{
  'id': '794864053:83503fd282b94a4737d2c95bd95db0b8',
  'quantity': 3
}
```

A cart can have multiple line items that share the same `variant_id`. For example, when variants have different [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties), or [automatic discounts](https://help.shopify.com/en/manual/discounts/automatic-discounts) create variants at different prices. Because of this, it's recommended to use the line item key to ensure that you're only changing the intended line item.

**Note:**

If you use the variant ID, then the `id` value can be either an integer or a string. However, if you use the line item key, then the `id` value needs to be a string.

##### The `line` property

A cart can have multiple line items that share the same `variant_id`. For example, when variants have different [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties), or [automatic discounts](https://help.shopify.com/en/manual/discounts/automatic-discounts) create variants at different prices. To account for this, you can use the `line` property when updating the cart.

The value of `line` is the 1-based index position of the item in the cart.

```js
{
  'line': 1,
  'quantity': 3
}
```

#### Update quantities

The value of the`quantity` property represents the new quantity you want for the line item. It must be an integer.

```js
{
  'line': 2,
  'quantity': 1
}
```

You can remove a line item by setting the `quantity` to `0`:

```js
{
  'line': 2,
  'quantity': 0
}
```

#### Update properties

The `properties` property sets the [line item properties](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties). Its value must be an object of key-value pairs.

```js
{
  'line': 2,
  'properties': { 'gift_wrap': true }
}
```

Whenever a `POST` request includes `properties`, it overwrites the entire `properties` object. Any key-value pairs that were already in the `properties` object are erased.

It's not possible to set a line item's `properties` property to an empty object once a value is set. If you need to remove all line item properties, then you need to remove the entire line item.

**Tip:**

You can visually hide line item properties at checkout by creating [private properties](#private-properties-and-attributes). This technique might be an alternative to removing a line item when managing `properties`.

#### Update selling plans

The `selling_plan` property sets the [line item selling plan](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-selling_plan_allocation). Its value must be one of the following:

* The [selling plan ID](https://shopify.dev/docs/api/liquid/objects/selling_plan#selling_plan-id): To set a specific selling plan for the line item.
* `null` or an empty string: To remove any selling plan from the line item.

###### Add selling plan

```js
{
  'line': 2,
  'quantity': 2,
  'selling_plan': 183638
}
```

###### Remove selling plan

```js
{
  'line': 2,
  'quantity': 2,
  'selling_plan': null
}
```

**Note:**

When specifying the `selling_plan` property, consider the following:

* You can use only the [`line` property](#the-line-property) for identifying the line item.
* You should always specify the `quantity` property. If the `quantity` isn't specified, then it's assumed to be 1.

#### Response

The JSON of the cart.

#### Error responses

If the item that you're attempting to change isn't already in the cart, then `/{locale}/cart/change.js` doesn't add it. Instead, it returns a `400` error:

```json
{
  "status": "bad_request",
  "message": "no valid id or line parameter",
  "description": "no valid id or line parameter"
}
```

***

### POST /{locale}/cart/clear.​js

Use the `POST /{locale}/cart/clear.js` endpoint to set all quantities of all line items in the cart to zero.

#### Response

The JSON of an empty cart. This does not remove cart attributes or the cart note.

```json
{
  "token": "Z2NwLXVzLXdlc3QxOjAxSjBQTVk1Sjc5NVFKTjNOVlhLWENXQUI1?key=0d9909213054e22d092152de385763f0",
  "note": null,
  "attributes": {},
  "total_price": 0,
  "total_weight": 0,
  "item_count": 0,
  "items": [],
  "requires_shipping": false
}
```

***

### Generate shipping rates

Use the `POST /{locale}/cart/prepare_shipping_rates.json` and `GET /{locale}/cart/async_shipping_rates.json` endpoints to generate shipping rates:

* The `POST /{locale}/cart/prepare_shipping_rates.json` endpoint initiates the process of calculating shipping rates for the cart given a destination.
* The `GET /{locale}/cart/async_shipping_rates.json` endpoint returns the shipping rates results if the calculations have finished.

#### Example `prepare_shipping_rates` call

```text
/{locale}/cart/prepare_shipping_rates.json?shipping_address%5Bzip%5D=K1N+5T2&shipping_address%5Bcountry%5D=Canada&shipping_address%5Bprovince%5D=Ontario
```

##### Response

`null`

#### Example `async_shipping_rates` call

```text
/{locale}/cart/async_shipping_rates.json?shipping_address%5Bzip%5D=K1N+5T2&shipping_address%5Bcountry%5D=Canada&shipping_address%5Bprovince%5D=Ontario
```

If you call `async_shipping_rates` with the same parameters as `prepare_shipping_rates`, then it checks whether Shopify has finished calculating the rates. If the shipping rates aren't ready, then the response is `null`.

If the shipping rates are ready, the rates are returned:

```json
{
  "shipping_rates": [
    {
      "name": "Generic Rate",
      "presentment_name": "Generic Rate",
      "code": "Generic Rate",
      "price": "6.00",
      "markup": null,
      "source": "shopify",
      "delivery_date": null,
      "delivery_range": null,
      "delivery_days": [],
      "compare_price": null,
      "phone_required": false,
      "currency": null,
      "carrier_identifier": null,
      "delivery_category": null,
      "using_merchant_account": null,
      "carrier_service_id": null,
      "description": null,
      "api_client_id": null,
      "requested_fulfillment_service_id": null,
      "shipment_options": null,
      "charge_items": null,
      "has_restrictions": null,
      "rating_classification": null,
      "accepts_instructions": false
    },
    {
      "name": "Carrier Service Mail",
      "presentment_name": "Carrier Service Mail",
      "code": "CarrierServiceMail",
      "price": "12.46",
      "markup": "0.00",
      "source": "usps",
      "delivery_date": "2020-10-09",
      "delivery_range": [
          "2020-10-06",
          "2020-10-09"
      ],
      "delivery_days": [
          0,
          3
      ],
      "compare_price": null,
      "phone_required": true,
      "currency": null,
      "carrier_identifier": null,
      "delivery_category": null,
      "using_merchant_account": null,
      "carrier_service_id": 2,
      "description": null,
      "api_client_id": null,
      "requested_fulfillment_service_id": null,
      "shipment_options": null,
      "charge_items": null,
      "has_restrictions": null,
      "rating_classification": null,
      "accepts_instructions": false
      }
   ]
}
```

#### GET /{locale}/cart/shipping\_​rates.​json

Use the `GET /{locale}/cart/shipping_rates.json` to get estimated shipping rates.

**Note:**

The recommended method to generate shipping rates is to use the `POST /{locale}/cart/prepare_shipping_rates.json` and `GET /{locale}/cart/async_shipping_rates.json` endpoints because it might take a while for shipping rates to be returned. The `GET /{locale}/cart/shipping_rates.json` endpoint is subject to throttling.

```text
/{locale}/cart/shipping_rates.json?shipping_address%5Bzip%5D=K1N+5T2&shipping_address%5Bcountry%5D=Canada&shipping_address%5Bprovince%5D=Ontario
```

```json
{
  "shipping_rates": [
    {
      "name": "Ground Shipping",
      "price": "8.00",
      "delivery_date": null,
      "source": "shopify"
    },
    {
      "name": "Expedited Shipping",
      "price": "15.00",
      "delivery_date": null,
      "source": "shopify"
    },
    {
      "name": "Express Shipping",
      "price": "30.00",
      "delivery_date": null,
      "source": "shopify"
    }
  ]
}
```

***

### Private properties and attributes

Private line item properties and private cart attributes are used when you need to attach information to either cart line items or the entire cart, and you don't want the properties and attributes to be visible to the online store's visitors.

Both private properties and private cart attributes are visually hidden at checkout, but are visible on the **Order details** page in the Shopify admin.

**Caution:**

If you hide private line item properties on the storefront, then you must [modify your theme's codebase](#hide-properties-in-a-theme).

#### Private line item properties

To make a line item property private, prepend an underscore (`_`) to the key. For example, to add a variant to cart with a private `_foo` property using the `/{locale}/cart/add.js` endpoint:

```js
items: [
  {
    'quantity': 2,
    'id': 794864229,
    'properties': {
      '_foo': 'bar'
    }
  }
]
```

The `properties` property can have a mix of private and public line item properties:

```js
items: [
  {
    quantity: 2,
    id: 794864229,
    properties: {
      '_foo': 'bar',
      'gift_wrap': true
    }
  }
]
```

##### Hide properties in a theme

Private line item properties are available in the Liquid [`line_item.properties`](https://shopify.dev/docs/api/liquid/objects/line_item#line_item-properties) object and Ajax API. To hide private properties on the storefront, you must modify the theme's codebase.

In the following example, all `properties` items that begin with `_` in Liquid are filtered out:

### Liquid

```liquid
{% for property in line_item.properties %}
  {% assign first_character_in_key = property.first | slice: 0 %}
  {% unless first_character_in_key == '_' %}
    {{ property.first }}: {{ property.last }}
  {% endunless %}
{% endfor %}
```

#### Private cart attributes

To make a cart attribute private, append a double underscore (`__`) to an attribute name.

Private cart attributes are not available in the Liquid [`cart.attributes`](https://shopify.dev/docs/api/liquid/objects/cart#cart-attributes) object or the Ajax API. This means there is no code modification required to hide them in theme files. Private cart attributes also do not affect the page rendering, which allows for more effective page caching.

***

### Bundled section rendering

Bundled section rendering allows you to request the HTML markup for up to five sections you might want to update based on an initial call to the Cart API, within that same call.

Bundled section rendering is available for the following Cart API endpoints:

* `/{locale}/cart/add`
* `/{locale}/cart/change`
* `/{locale}/cart/clear`
* `/{locale}/cart/update`

#### Request sections

To request sections, you can include a `sections` parameter in your API call data:

### Example

```json
items: [
  {
   id: 36110175633573,
   quantity: 2
  }
],
sections: "cart-items,cart-icon-bubble,cart-live-region-text,cart-footer"
```

**Note:**

The `sections` parameter can be a comma-separated list or an array, similar to when using the [Section Rendering API](https://shopify.dev/docs/api/ajax/section-rendering) directly.

By default, sections are rendered in the context of the current page, based on the [HTTP Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) header. However, you can specify any other page using the `sections_url` parameter. The `sections_url` must begin with a `/` and can include query parameters like `q` and `page`.

### Example

```json
sections: "cart-items,cart-icon-bubble,cart-live-region-text,cart-footer",
sections_url: "/cart?some_param=foo"
```

The HTML for the requested sections is included under the `sections` key of the returned JSON. Each section can be identified by the same ID that was passed in the request.

### Example

```json
{
  attributes: {},
  cart_level_discount_applications: [],
  currency: "CAD",
  item_count: 1,
  items: [{…}],
  items_subtotal_price: 100100,
  note: null,
  original_total_price: 100100,
  requires_shipping: true,
  sections: {
    cart-items: "<div id=\"shopify-section-template--14199693705272_…9930913703934\" defer=\"defer\"></script>\n\n\n\n\n</div>",
    cart-icon-bubble: "<div id=\"shopify-section-cart-icon-bubble\" className=\"…ss=\"visually-hidden\">1 item</span>\n  </div></div>",
    cart-live-region-text: "<div id=\"shopify-section-cart-live-region-text\" cl…opify-section\">New subtotal: $1,001.00 CAD\n</div>",
    cart-footer: "<div id=\"shopify-section-template--14199693705272_…   </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n</div>"
  },
  token: "Z2NwLXVzLXdlc3QxOjAxSjBQTVk1Sjc5NVFKTjNOVlhLWENXQUI1?key=0d9909213054e22d092152de385763f0",
  total_discount: 0,
  total_price: 100100,
  total_weight: 1000,
}
```

#### Error response

Sections are rendered after the data modifications from the request are completed. Because of this, rendering errors don't affect the response status of the API call. Sections that fail to render are returned as `null`, so you should account for this possibility.

Passing invalid values for the `sections` or `sections_url` parameters, such as a `sections_url` that doesn't begin with `/`, causes the entire request to return an **HTTP 400 Bad Request** status. However, this doesn't mean that the rest of the request didn't succeed.

***

---



<a id="reference-predictive-search"></a>


## Predictive Search API reference

The Predictive Search API can be used to display predictive search results for queries, products, collections, pages, and articles.

To learn how to use predictive search in a theme, refer to [Add predictive search to your theme](https://shopify.dev/docs/storefronts/themes/navigation-search/search/predictive-search).

All Ajax API requests should use [locale-aware URLs](https://shopify.dev/docs/api/ajax#locale-aware-urls) to give visitors a consistent experience.

***

### GET /{locale}/search/suggest.​json

The following example request retrieves predictive results for a specified search query:

```js
GET /{locale}/search/suggest.json?q={query}
```

#### Query parameters

| Query parameter | Required | Description |
| - | - | - |
| `q` | Yes | The search query. |
| `resources[type]` | No | Specifies the type of results requested.The following are the accepted values, which can be combined in a comma-separated list:- `product`
- `page`
- `article`
- `collection`
- `query`The default value is `query,product,collection,page`.To change the default value, you can use [Search Settings](https://help.shopify.com/manual/online-store/search-and-discovery/settings) in the Search & Discovery app. |
| `resources[limit]` | No | Limits the number of results based on `limit_scope`.The value can range from `1` to `10`, and the default is `10`. |
| `resources[limit_scope]` | No | Decides the distribution of results.The following are the accepted values:- `all`: Return results up to `limit` across all types.
- `each`: Return results up to `limit` per type.The default value is `all`. |
| `resources[options][unavailable_products]` | No | Specifies whether to display results for unavailable products.The following are the accepted values:- `show`: Show unavailable products.
- `hide`: Hide unavailable products.
- `last`: Show unavailable products below other matching results.The default value is `last`.To change the default value, you can use [Search Settings](https://help.shopify.com/manual/online-store/search-and-discovery/settings) in the Search & Discovery app.This parameter is only applicable to type `product`. |
| `resources[options][fields]` | No | Specifies the list of resource fields to search.The following are the accepted values:- `author`
- `body`
- `product_type`
- `tag`
- `title`
- `variants.barcode`
- `variants.sku`
- `variants.title`
- `vendor`The default fields searched on are `title`, `product_type`, `variants.title`, and `vendor`. For the best search experience, you should search on the default field set. |

### Example request object

```json
{
  "q": "bag",
  "resources": {
    "type": "product",
    "options": {
      "unavailable_products": "hide",
      "fields": "title,product_type,variants.title"
    }
  }
}
```

### Example request using Fetch

```javascript
fetch(window.Shopify.routes.root + "search/suggest.json?q=bag&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title")
  .then((response) => response.json())
  .then((suggestions) => {
    const productSuggestions = suggestions.resources.results.products;


    if (productSuggestions.length > 0) {
      const firstProductSuggestion = productSuggestions[0];


      alert(`The title of the first product suggestion is: ${
        firstProductSuggestion.title}`
      );
    }
  }
);
```

#### Resources response

The following example is a response to a successful request to the `/{locale}/search/suggest.json` endpoint, which contains resource objects associated with the specified query:

### Example resources response

```json
{
  "resources": {
    "results": {
      "queries" : ARRAY OF RELEVANT search queries,
      "products": ARRAY OF MATCHING product_object,
      "collections": ARRAY OF MATCHING collection_object,
      "pages": ARRAY OF MATCHING page_object,
      "articles": ARRAY OF MATCHING article_object
    }
  }
}
```

**Caution:**

You shouldn't output the `body` content of resource objects for stores that support multiple languages. When a store supports multiple languages, the `body` content contains a combination of the content translated in each language.

### Example product\_object

```json
{
  "available": BOOLEAN,
  "body": STRING w/HTML,
  "compare_at_price_max": DECIMAL ("0.00" when the product has no variants with a "compare_at_price"),
  "compare_at_price_min": DECIMAL ("0.00" when the product has no variants with a "compare_at_price"),
  "handle": STRING,
  "id": INTEGER,
  "image": STRING e.g, "https://cdn.shopify.com/s/...",
  "price": DECIMAL,
  "price_max": DECIMAL,
  "price_min": DECIMAL,
  "tags" : ARRAY OF STRING,
  "title": STRING,
  "type" : STRING,
  "url": STRING e.g, "/products/fast-snowboard?_pos=1&_psq=snowb&_ss=e&_v=1.0",
  "variants": [{
    "available": BOOLEAN,
    "compare_at_price": DECIMAL (nullable),
    "id": INTEGER,
    "image": STRING e.g, "https://cdn.shopify.com/s/...",
    "price": DECIMAL,
    "title": STRING,
    "url": STRING e.g, "/products/fast-snowboard?_pos=1&_psq=snowb&_ss=e&_v=1.0",
    "featured_image": {
      "alt": STRING,
      "aspect_ratio": DECIMAL,
      "height": INTEGER,
      "url": STRING e.g, "https://cdn.shopify.com/s/...",
      "width": INTEGER
    }
  }],
  "vendor": STRING,
  "featured_image": {
    "alt": STRING,
    "aspect_ratio": DECIMAL,
    "height": INTEGER,
    "url": STRING e.g, "https://cdn.shopify.com/s/...",
    "width": INTEGER
  }
}
```

**Note:**

A product variant is returned only when the query matches terms specific to the variant title. Only the variant with the most matching terms is returned. When a variant is returned, the following `product_object` fields will match those of the variant:

* `featured_image`
* `image`
* `url` For example, a store has a snowboard with a blue variant and a light blue variant. If you search for `snowbo`, then only the snowboard product is returned. However, if you search for `light blue snowbo`, then the snowboard product is returned with the light blue variant.

### Example collection\_object

```json
{
  "body": STRING w/HTML,
  "handle": STRING,
  "id": INTEGER,
  "featured_image": {
    "alt": STRING,
    "width": INTEGER,
    "height": INTEGER,
    "aspect_ratio": DECIMAL,
    "url": STRING e.g, "https://cdn.shopify.com/s/..."
  },
  "published_at": STRING DATE,
  "title": STRING,
  "url": STRING e.g, "/collections/snowboards?_pos=1&_psq=sno&_ss=e&_v=1.0"
}
```

### Example query\_object

```json
{
  "url": STRING e.g, "/search?_pos=1&_psq=cos&_ss=e&_v=1.0&q=costume",
  "text":STRING,
  "styled_text": STRING e.g, "<mark>cos</mark><span>tume</span>"
}
```

### Example page\_object

```json
{
  "author": STRING,
  "body": STRING w/HTML,
  "handle":STRING,
  "id": INTEGER,
  "published_at": STRING DATE,
  "title": STRING,
  "url": STRING e.g, "/pages/my-page?_pos=1&_psq=my&_ss=e&_v=1.0"
}
```

### Example article\_object

```json
{
  "author": STRING,
  "body": STRING w/HTML,
  "handle": STRING,
  "id": INTEGER,
  "image": STRING e.g, "https://cdn.shopify.com/s/...",
  "published_at": STRING DATE,
  "summary_html": STRING w/HTML,
  "tags": ARRAY OF STRING,
  "title": STRING,
  "url": STRING e.g, "/blogs/news/my-article?_pos=1&_psq=my&_ss=e&_v=1.0"
}
```

#### Error responses

When a request to the `/{locale}/search/suggest.json` endpoint is unsuccessful, one of the following error responses is returned:

* [Invalid parameter error](#invalid-parameter-error)
* [Expectation failed](#expectation-failed)
* [Too many requests](#too-many-requests)

Any other errors not listed will return a `5xx` status code.

##### Invalid parameter error

All errors related to the request parameters are returned with a 422 status code and a relevant error message. The `description` field describes the request error.

### Invalid parameter example

```json
{
  "status": "422",
  "message": "Invalid parameter error",
  "description": "Invalid option for `unavailable_products` parameter"
}
```

##### Expectation failed

If your theme isn't using one of the [supported languages](#supported-languages), then the API returns the following error:

### Expectation failed example

```json
{
  "status": "417",
  "message": "Expectation Failed",
  "description": "Unsupported buyer locale"
}
```

##### Too many requests

Exceeding the request throttle limit will return a 429 status code with a relevant error message.

### Example

```json
{
  "status": "429",
  "message": "Too many requests",
  "description": "Throttled"
}
```

In this case, the response will also contain an HTTP header with the Retry-After value in seconds.

### Retry-After example

```text
Retry-After: 1
```

***

### GET /{locale}/search/suggest

The following example request retrieves the HTML from a section rendered with the predictive results for a specified search query.

```js
GET /{locale}/search/suggest?q={query}&resources[type]=product&section_id={section_id}
```

#### Query parameters

The `/search/suggest` endpoint supports the same [query parameters](https://shopify.dev/docs/api/ajax/reference/predictive-search#query-parameters) as the `/search/suggest.json` endpoint, in addition to the following:

| Query parameter | Required | Description |
| - | - | - |
| `section_id` | Yes | The unique [section ID](https://shopify.dev/docs/api/ajax/section-rendering#find-section-ids) of the section file that you want render with the predictive search query. |

### Example request object

```json
{
  "q": "bag",
  "resources": {
    "type": "product",
    "options": {
      "unavailable_products": "hide",
      "fields": "title, product_type, variants.title"
    }
  },
  "section_id": "predictive-search"
}
```

### Example request using Fetch

```javascript
const predictiveSearchSection = document.querySelector('.predictive-search-results');
var requestResponse;


fetch(window.Shopify.routes.root + "search/suggest?q=bag&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title&section_id=predictive-search")
  .then((response) => {
    requestResponse = response;
    return response.text();
   })
  .then((text) => {
    if (!requestResponse.ok) {
      throw new Error(`${requestResponse.status}: ${text}`);
    }


    const resultsMarkup = new DOMParser()
      .parseFromString(text, 'text/html')
      .querySelector('#shopify-section-predictive-search').innerHTML;


    predictiveSearchSection.innerHTML = resultsMarkup;
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Section response

The response to a successful request to the `/{locale}/search/suggest` endpoint.

The section response contains the HTML of the provided section rendered with the [`predictive_search` object](https://shopify.dev/docs/api/liquid/objects/predictive_search) containing the results of the specified query.

For example, the following section would generate the following section response:

### Example section

```liquid
{%- if predictive_search.performed -%}
  <div id="predictive-search-results">
    {%- if predictive_search.resources.products.size > 0 -%}
      <h3>Products</h3>
      <ul>
        {%- for product in predictive_search.resources.products -%}
          <li><a href="{{ product.url }}">{{ product.title }}</a></li>
        {%- endfor -%}
      </ul>
    {%- endif -%}
  </div>
{%- endif -%}
```

### Example section response

```html
<div id="shopify-section-predictive-search">
  <div id="predictive-search-results">
    <h3>Products</h3>
    <ul>
      <li><a href="/products/running-shoes">Running Shoes</a></li>
      <li><a href="/products/tennis-shoes">Tennis Shoes</a></li>
    </ul>
  </div>
</div>
```

**Note:**

For the `product` resources type, if the query matches terms specific to a variant's title, the following [`product` object](https://shopify.dev/docs/api/liquid/objects/product) fields will match those of the variant:

* `featured_media`
* `url` For example, a store has a snowboard with a blue variant and a light blue variant. If you search for `snowbo`, then the snowboard product is returned showing the featured media and URL for the snowboard product. However, if you search for `light blue snowbo`, then the snowboard product is returned showing the featured media and URL for the light blue variant.

#### Error responses

When a request to the `/{locale}/search/suggest` endpoint is unsuccessful, one of the following error status codes is returned:

| Status code | Description |
| - | - |
| `404` | **Section not found** - The provided section ID wasn't found in the theme. |
| `417` | **Expectation failed** - The buyer isn't using one of the [supported languages](#supported-languages). |
| `422` | **Invalid parameter error** - The value used for a query parameter was invalid. |
| `429` | **Too many requests** - The request throttle limit has been exceeded. |

You can output the response text to get more details about an error. Refer to the [example request using Fetch](#html-example-fetch-request) to learn more.

**Note:**

Any other errors not listed will return a `5xx` status code.

***

### Searchable properties

Search results are based on different searchable properties, depending on the resource `type` that you include in your query.

| Resource type | Searchable properties |
| - | - |
| Products | * `body`
* `product_type`
* `tag`
* `title`
* `variants.barcode`
* `variants.sku`
* `variants.title`
* `vendor` |
| Pages | - `author`
- `body`
- `title` |
| Articles | * `author`
* `body`
* `tag`
* `title` |
| Collections | - `title` |

#### Searchable translations

When searching a translated storefront, you can search the following properties:

| Resource type | Searchable translations |
| - | - |
| Products | * `body`
* `title`
* `variants.title` |
| Pages | - `body`
- `title` |
| Articles | * `body`
* `title` |

***

### Typo tolerance

Predictive search includes typo tolerance, which lets search terms containing typos return the correct matching search results.

Typo tolerance is set to `1`, which means that search displays results that differ from the search term by 1 letter, or results that have 2 letters in a different order. The first 4 letters of a search term need to be entered correctly for typo tolerance to take effect.

The following fields support typo tolerance:

| Resource type | Fields supporting typo tolerance |
| - | - |
| Products | * `title`
* `product_type`
* `variants.title`
* `vendor` |
| Pages | - `author`
- `title` |
| Articles | * `author`
* `title` |
| Collections | - `title` |

#### Partial word matches

Predictive search supports partial word matches. This means that it suggests results even if the word you've entered is still incomplete. For example, if you enter `sweate`, then you might see a suggested search result for `sweater`.

Predictive search has the following limitations when it applies partial word matches:

* If a search query has more than one term, then partial word matches are applied only to the last term in the query.
* Partial word matches are applied only to the end of a search term. For example, if you enter `book`, then you won't see a suggested search result for `ebook`.
* Partial word matches are supported only for themes using specific languages. For more details, refer to [Requirements and limitations](#requirements-and-limitations).

Predictive search uses a different search engine than storefront search. Because of this, it doesn't handle partial word matches in the same way. Although predictive search supports partial word matches, storefront search supports them only if the [prefix option parameter](https://shopify.dev/docs/storefronts/themes/navigation-search/search#query-parameters) is set to `last`.

***

### Requirements and limitations

This section contains information about how predictive search is supported, and any current limitations.

#### Supported languages

Predictive search is supported when the customer's online store session (`buyer locale`) is in one of the following supported languages:

* Afrikaans
* Albanian
* Armenian
* Bosnian
* Bulgarian
* Catalan
* Croatian
* Czech
* Danish
* Dutch
* English
* Estonian
* Faroese
* Finnish
* French
* Gaelic
* German
* Greek
* Hungarian
* Icelandic
* Indonesian
* Italian
* Latin
* Latvian
* Lithuanian
* Macedonian
* Moldovan
* Norwegian
* Norwegian (Bokmål)
* Norwegian Nynorsk
* Polish
* Portuguese (Brazil)
* Portuguese (Portugal)
* Romanian
* Russian
* Serbian
* Serbo-Croatian
* Slovak
* Slovenian
* Spanish
* Swedish
* Turkish
* Ukrainian
* Vietnamese
* Welsh

A script tag in the `<head>` section indicates whether predictive search is supported for the theme language: `<script id="shopify-features"></script>`. This script tag includes a JSON-encoded `predictiveSearch` key with a boolean value. When it's set to `true`, the theme language is supported, and predictive search is enabled. Otherwise, it's set to `false`.

#### Limitations

* Individual products can't be excluded from predictive search results. If a product is hidden from search engines and sitemaps with the metafield `seo.hidden`, then it won't appear in predictive search results. Learn more about [hiding resources with this metafield](https://shopify.dev/docs/apps/build/marketing-analytics/optimize-storefront-seo#step-2-hide-a-resource-from-search-engines-and-sitemaps).
* The API returns no more than 10 predictive suggestions per request type.
* Collection suggestions are based on the store's primary language. A customer's search won't be compared to a collection's translated content.
* Query suggestions are available in English only, and require the store's primary language (`shop primary locale`) and the customer's online store session (`buyer locale`) to be in English.

***

---



<a id="reference-product"></a>


## Product API reference

You can make a `GET` request for the information of any product using the Ajax Product API.

All Ajax API requests should use [locale-aware URLs](https://shopify.dev/docs/api/ajax#locale-aware-urls) to give visitors a consistent experience.

***

### GET /{locale}/products/{product-handle}.​js

Get the JSON of a product using the product [handle](https://shopify.dev/docs/api/liquid/basics/handle).

All monetary properties are returned in the customer's presentment currency. To check the customer's presentment currency, you can use the `currency` field of the `/{locale}/cart.js` endpoint. To learn more about selling in multiple currencies, see [Support multiple currencies and languages](https://shopify.dev/docs/storefronts/themes/markets/multiple-currencies-languages).

#### Example

```js
fetch(window.Shopify.routes.root + 'products/red-rain-coat.js')
.then(response => response.json())
.then(product => alert('The title of this product is ' + product.title));
```

***

### Response

The JSON of the product.

Example:

```json
{
"id": 329678821,
"title": "Red Rain Coat",
"handle": "red-rain-coat",
"description": "<p>Lorem Ipsum.</p>",
"published_at": "2014-06-12T16:28:11-04:00",
"created_at": "2014-06-12T16:28:13-04:00",
"vendor": "Shopify",
"type": "Coat",
"tags": [
  "Spring"
],
"price": 12900,
"price_min": 12900,
"price_max": 12900,
"available": true,
"price_varies": false,
"compare_at_price": null,
"compare_at_price_min": 0,
"compare_at_price_max": 0,
"compare_at_price_varies": false,
"variants": [
  {
    "id": 794864229,
    "title": "Small",
    "options": [
      "Small"
    ],
    "option1": "Small",
    "option2": null,
    "option3": null,
    "price": 12900,
    "weight": 0,
    "compare_at_price": null,
    "inventory_management": "shopify",
    "available": true,
    "sku": null,
    "requires_shipping": true,
    "taxable": true,
    "barcode": "49738645"
  },
  {
    "id": 794864233,
    "title": "Medium",
    "options": [
      "Medium"
    ],
    "option1": "Medium",
    "option2": null,
    "option3": null,
    "price": 12900,
    "weight": 0,
    "compare_at_price": null,
    "inventory_management": "shopify",
    "available": true,
    "sku": null,
    "requires_shipping": true,
    "taxable": true,
    "barcode": "49738657"
  },
  {
    "id": 794864237,
    "title": "Large",
    "options": [
      "Large"
    ],
    "option1": "Large",
    "option2": null,
    "option3": null,
    "price": 12900,
    "weight": 0,
    "compare_at_price": null,
    "inventory_management": "shopify",
    "available": true,
    "sku": null,
    "requires_shipping": true,
    "taxable": true,
    "barcode": "49738673"
  }
],
"images": [
  "//cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893"
],
"featured_image": "//cdn.shopify.com/s/files/1/0040/7092/products/red-rain-coat.jpeg?v=1402604893",
"options": [
  {
    "name": "Size",
    "position": 1
  }
],
"url": "/products/red-rain-coat"
}
```

**Note:**

The JSON of the product can contain a maximum of 250 variants in the variants array.

#### Selling plan example

Products with selling plans will have the following additional properties available at `/{locale}/products/<handle>.js`.

```json
{
"id":5290511958181,
// ...
"variants":[
  {
     "id":34620489400485,
     // ...
     "requires_selling_plan":false,
     "selling_plan_allocations":[
        {
           "price":3120,
           "compare_at_price":3900,
           "per_delivery_price":3120,
           "selling_plan_id":360613,
           "selling_plan_group_id":14699254537353206000
        },
        {
           "price":3510,
           "compare_at_price":3900,
           "per_delivery_price":3510,
           "selling_plan_id":393381,
           "selling_plan_group_id":14699254537353206000
        }
     ]
  }
],
"requires_selling_plan":false,
"selling_plan_groups":[
  {
     "id":14699254537353206000,
     "name":"Subscribe and Save",
     "options":[
        {
           "name":"Delivery Frequency",
           "position":1,
           "values":[
              "Month",
              "Week"
           ]
        },
        {
           "name":"Billing Frequency",
           "position":2,
           "values":[
              "Month",
              "Week"
           ]
        }
     ],
     "selling_plans":[
        {
           "id":360613,
           "name":"Pay every month, delivery every month | save 20%",
           "description":"No commitment · Auto-renews · Skip or cancel anytime",
           "options":[
              {
                 "name":"Delivery Frequency",
                 "position":1,
                 "value":"Month"
              },
              {
                 "name":"Billing Frequency",
                 "position":2,
                 "value":"Month"
              }
           ],
           "recurring_deliveries":true
        },
        {
```

***

---



<a id="reference-product-recommendations"></a>


## Product Recommendations API reference

The Product Recommendations API can be used to recommend related products for a given product. To learn more about how recommendations are made and the associated limitations, refer to [Product recommendations](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations).

To learn how to show product recommendations in your theme, refer to [Product recommendations](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations).

All Ajax API requests should use [locale-aware URLs](https://shopify.dev/docs/api/ajax#locale-aware-urls) to give visitors a consistent experience.

**Note:**

The [Shopify Search & Discovery app](https://apps.shopify.com/search-and-discovery) enables users to customize product recommendation and search results, which can impact results from [storefront search](https://shopify.dev/docs/storefronts/themes/navigation-search/search) and the Ajax Product Recommendations API. To learn about how these results can be impacted, visit the [Shopify Help Center](https://help.shopify.com/manual/online-store/search-and-discovery/product-recommendations).

***

### GET /{locale}/recommendations/products.​json

The following example request retrieves the recommended products for a specific product:

```js
GET /{locale}/recommendations/products.json?product_id={product-id}&intent={intent}
```

#### Query parameters

| Query parameter | Required | Description |
| - | - | - |
| `product_id` | Yes | The unique [product ID](https://shopify.dev/docs/api/liquid/objects/product#product-id) of the product that you want to show recommended products for. |
| `limit` | No | Limits the number of results.The value can range from `1` to `10`, and the default is `10`. |
| `intent` | No | The recommendation intent that is used to generate product recommendations. You can use `intent` to generate product recommendations on various pages across the online store, according to different strategies. [Learn more about recommendation intents](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations).The accepted values are `related` and `complementary`. The default value is `related`. |

### Example request object

```json
{
  "product_id": "1234567890123",
  "limit": 4,
  "intent": "related"
}
```

### Example request using Fetch

```js
fetch(window.Shopify.routes.root + "recommendations/products.json?product_id=1234567890123&limit=4&intent=related")
  .then(response => response.json())
  .then(({ products }) => {
    if (products.length > 0) {
      const firstRecommendedProduct = products[0];


      alert(
        `The title of the first recommended product is: ${firstRecommendedProduct.title}`
      );
    }
  }
);
```

#### Products response

The following example is a response to a successful request to the `/{locale}/recommendations/products.json` endpoint:

### Example product response

```json
{
 "intent": "related",
 "products": [
   {
     "id": 35,
     "title": "Gorgeous Silk Coat",
     "handle": "gorgeous-silk-coat",
     "description": null,
     "published_at": "2019-02-26T11:34:58-05:00",
     "created_at": "2019-02-26T11:34:58-05:00",
     "vendor": "Marge Group",
     "type": "Outdoors",
     "tags": [],
     "price": 380000,
     "price_min": 380000,
     "price_max": 790000,
     "available": true,
     "price_varies": true,
     "compare_at_price": null,
     "compare_at_price_min": 0,
     "compare_at_price_max": 0,
     "compare_at_price_varies": false,
     "variants": [
       {
         "id": 69,
         "title": "Small Aluminum Knife",
         "option1": "Small Aluminum Knife",
         "option2": null,
         "option3": null,
         "sku": "",
         "requires_shipping": true,
         "taxable": true,
         "featured_image": null,
         "available": true,
         "name": "Gorgeous Silk Coat - Small Aluminum Knife",
         "public_title": "Small Aluminum Knife",
```

#### Error responses

When a request to the `/{locale}/recommendations/products.json` endpoint is unsuccessful, one of the following error responses is returned:

* [Invalid parameter](#invalid-parameter)
* [Product not found](#product-not-found)

##### Invalid parameter

In the absence of a `product_id` parameter, the endpoint returns the following error:

```json
{
"status": 422,
"message": "Invalid parameter error",
"description": "A product_id value is missing"
}
```

If `intent` isn't one of `related` or `complementary`, then the endpoint returns the following error:

```json
{
"status": 422,
"message": "Invalid parameter error",
"description": "The intent parameter must be one of related, complementary"
}
```

##### Product not found

If the `product_id` is for a product that doesn't exist, or that isn't published in the **Online store** channel, then the endpoint returns the following error:

```json
{
"status": 404,
"message": "Product not found",
"description": "No product with id <product_id> is published in the online store"
}
```

***

### GET /{locale}/recommendations/products

The following example request retrieves the HTML from a section rendered with product recommendations for a specific product.

```js
GET /{locale}/recommendations/products?product_id={product-id}&section_id=product-recommendations
```

#### Query parameters

| Query parameter | Required | Description |
| - | - | - |
| `product_id` | Yes | The unique [product ID](https://shopify.dev/docs/api/liquid/objects/product#product-id) of the product that you want to show recommended products for. |
| `limit` | No | Limits the number of results.The value can range from `1` to `10`, and the default is `10`. |
| `section_id` | Yes | The unique [section ID](https://shopify.dev/docs/api/ajax/section-rendering#find-section-ids) of the section file that you want to render with product recommendations. |
| `intent` | No | The recommendation intent that is used to generate product recommendations. You can use `intent` to generate product recommendations on various pages across the online store, according to different strategies. [Learn more about recommendation intents](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations#recommendation-intents).The following values are accepted: `related`, `complementary`. The default value is `related`. |

### Example request object

```json
{
  "product_id": "1234567890123",
  "limit": 4,
  "section_id": "product-recommendations",
  "intent": "related"
}
```

### Example request using Fetch

```js
const productRecommendationsSection = document.querySelector('.product-recommendations');


fetch(window.Shopify.routes.root + "recommendations/products?product_id=12345690123&limit=4&section_id=product-recommendations&intent=related")
 .then(response => response.text())
 .then((text) => {
    const html = document.createElement('div');
    html.innerHTML = text;
    const recommendations = html.querySelector('.product-recommendations');


    if (recommendations && recommendations.innerHTML.trim().length) {
      productRecommendationsSection.innerHTML = recommendations.innerHTML;
    }
 });
```

#### Section response

The response to a successful request to the `/{locale}/recommendations/products` endpoint.

The section response contains the HTML of the provided section rendered with the [`recommendations` object](https://shopify.dev/docs/api/liquid/objects/recommendations) containing the recommended products for the specified product.

For example, the following section would generate the following section response:

### Example section

```liquid
{%- if recommendations.performed? -%}
  <div id="product-recommendations">
    {%- if recommendations.products_count > 0 -%}
      {% if recommendations.intent == 'related' %}
        <h2>You may also like</h2>
      {% elsif recommendations.intent == 'complementary' %}
        <h2>Pair it with</h2>
      {% endif %}


      <ul>
        {%- for product in recommendations.products -%}
          <li className="grid__item small--one-half medium-up--one-quarter">
            <a href="{{ product.url }}">
              <span>{{ product.title }}</span>
              <span>{{ product.price | money }}</span>
            </a>
          </li>
        {%- endfor -%}
      </ul>
    {%- endif -%}
  </div>
{%- endif -%}
```

### Example section response

```html
<div id="product-recommendations">
  <h2>You may also like</h2>


  <ul>
    <li className="grid__item small--one-half medium-up--one-quarter">
      <a href="/products/gorgeous-silk-coat?pr_choice=default&pr_prod_strat=copurchase&pr_rec_pid=35&pr_ref_pid=17&pr_seq=alternating">
        <span>Gorgeous Silk Coat</span>
        <span>$380.00</span>
      </a>
    </li>
    ...
  </ul>
</div>
```

#### Error responses

When a request to the `/{locale}/recommendations/products` endpoint is unsuccessful, one of the following error status codes is returned:

| Status code | Description |
| - | - |
| `404` | * **Product not found** - The provided product ID doesn't exist, or doesn't belong to a product published on the **Online store** channel.
* **Section not found** - The provided section ID wasn't found in the theme. |
| `422` | - **Invalid parameter error** - The `product_id` query parameter was missing.
- **Invalid parameter error** - The `intent` parameter must be one of `related`, `complementary`. |

***

### Tracking conversions for product recommendations

The `url` property for each `product` in the [products response](#products-response) contains URL parameters that lets you build a conversion funnel that can be tracked by using reports in Shopify. Similarly, the Liquid `url` property returned for [`recommendations.products`](https://shopify.dev/docs/api/liquid/objects/recommendations#recommendations-products) contains this tracking information as well. The URL uses the following format:

```text
/products/gorgeous-wooden-computer?pr_choice=default&pr_prod_strat=description&pr_rec_pid=13&pr_ref_pid=17&pr_seq=alternating
```

To learn more about product recommendation reports, see [Product recommendation conversion over time](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/behaviour-reports#product-recommendation-conversions-over-time).

***

---



<a id="section-rendering"></a>


## Section Rendering API

You can use the Section Rendering API to request the HTML markup for theme sections using an AJAX request. This can allow you to update page content without reloading the entire page by fetching and dynamically replacing only certain elements.

For example, you can use the Section Rendering API to paginate search results without performing a full page reload between pages.

**Tip:**

If you want to use the Section Rendering API to update a page based on changes to the cart, then you should consider [bundled section rendering](https://shopify.dev/docs/api/ajax/reference/cart#bundled-section-rendering).

***

### Request sections

You can use the `sections` query parameter to render up to five sections, identified by their [section IDs](#find-section-ids). The response is a JSON object that includes pairs for each section ID and its corresponding rendered HTML.

The `sections` parameter can be a comma-separated list of IDs or an array:

### Example

```text
?sections=main-password-header,sections--1234__header
?sections[]=main-password-header&sections[]=sections--1234__header
```

Sections can be rendered in the context of any page by appending the `sections` parameter to any page URL. For example, you can request `/?sections=sections--1234__header` for the root page, or you can request `/collections/featured?sections=sections--1234__header` for a featured collection page.

**Note:**

You can't specify section setting values through the Section Rendering API. If a requested section exists in a template, or is statically rendered, then the existing section settings apply. Otherwise, any default values are used.

The following example code requests two sections using a JavaScript `XMLHttpRequest`:

### Example

```js
function handleResponse() {
  JSON.parse(this.responseText);
}


const request = new XMLHttpRequest();


request.addEventListener('load', handleResponse);
request.open('GET', '/?sections=main-password-header,sections--1234__header', true);
request.send();
```

### Response text

```json
{
  "header":"<div id=\"shopify-section-main-password-header\" className=\"shopify-section\">\n<!-- section content -->\n</div>",
  "footer":"<div id=\"shopify-section-sections--1234__header\" className=\"shopify-section shopify-section-group-header-group\">\n<!-- section content -->\n</div>"
}
```

**Tip:**

Any query parameters that are respected when rendering the full page, such as `q` or `page`, are also respected when sections are rendered.

#### Sections error response

Sections that fail to render, including those that fail because they do not exist for the published theme, are returned as `null` in the JSON response. A response might have an HTTP 200 status, but still include one or more sections that failed to render. Because of this, you should account for the possibility of `null` sections.

***

### Request a single section

You can use the `sections` parameter and its JSON response in most cases, including rendering a single section. As an alternative, you can use the `section_id` query parameter to request a single section.

### Example

```text
?section_id=main-password-header
```

Sections rendered in response to the `section_id` query parameter are returned directly as HTML and, like `sections`, this parameter can be used to render a section in the context of any page.

**Note:**

You can't specify section setting values through the Section Rendering API. If a requested section exists in a template, or is statically rendered, then the existing section settings apply. Otherwise, any default values are used.

#### Single section error response

If the requested section ID doesn’t exist on the theme, then the server responds with a `404` status.

***

### Find section IDs

You can access a section ID in two ways:

* Through the Liquid [`section` object](https://shopify.dev/docs/api/liquid/objects/section), using `section.id`
* [Extract it](#extract-a-section-id-from-the-wrapper) from the ID attribute of the section wrapper

**Tip:**

If you want to reference a statically rendered section, then the section ID is the file name. For example, if you had a `social.liquid` section, then the ID would be `social`.

#### Extract a section ID from the wrapper

You can extract a section ID from the ID attribute of the section wrapper. For example, the following is the general format for a section wrapper:

### Section wrapper format

```html
<div id="shopify-section-[section-id]" className="shopify-section">
  <!-- section content -->
</div>
```

If a section is included in a [JSON template](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates) or a [section group](https://shopify.dev/docs/storefronts/themes/architecture/section-groups), then it's assigned a dynamic section ID. Dynamic section IDs ensure no two sections of the same type have the same ID.

For example, a section inside of a section group might have an ID of `sections--1234__header`, and a section inside of a JSON template might have an ID of `template--5678__image_banner`.

***

### Locale-aware URLs

Stores can have [dynamic URLs](https://shopify.dev/docs/storefronts/themes/markets/multiple-currencies-languages#locale-aware-urls) generated for them when they sell internationally or in multiple languages. When using the Section Rendering API, it’s important to use dynamic, locale-aware URLs so that you can give visitors a consistent experience for the language and country that they’ve chosen.

The global value `window.Shopify.routes.root` is available to use as a base when building locale-aware URLs in JavaScript:

### Loading a section in the context of the root

```javascript
fetch(window.Shopify.routes.root + "?sections={section-id}")
  .then(res => res.json())
```

Alternatively, a section can be loaded in the context of the current page by using [`window.location.pathname`](https://developer.mozilla.org/docs/Web/API/Location/pathname) as a base:

### Loading a section in the context of the current page

```javascript
fetch(window.location.pathname + "?sections={section-id}")
  .then(res => res.json())
```

***

---
