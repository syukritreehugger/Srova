# Shopify Webhooks Reference (Indonesian / English)

> Referensi lengkap **Webhooks** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/webhooks.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/webhooks` |
| Total halaman | **1** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)


---



<a id="landing"></a>


## Webhooks

The list of all webhook topics you can subscribe to. You can use webhook subscriptions to receive notifications about particular events in a shop.

**Caution:**

If your app is distributed through the Shopify App Store, it must be subscribed to Shopify's [mandatory compliance topics](https://shopify.dev/docs/apps/build/privacy-law-compliance). You can create mandatory compliance webhook subscriptions either using your Partner Dashboard or by updating your [app configuration file](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#app-configuration-file-example).

### Getting started

###### Creating subscriptions using the app configuration file

You can subscribe to most topics through your [app configuration file](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started?framework=remix\&deliveryMethod=pubSub) using CLI version 3.63.0 or greater.

If you create and manage your subscriptions in your app configuration file, they will be used across all shops that your app is installed on.

###### Creating subscriptions using GraphQL Admin API

You can make app-specific subscriptions to all non-compliance topics through your app configuration file, or shop-specific subscriptions by Shopify's GraphQL Admin API.

For subscriptions managed with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), use the `webhookSubscriptionCreate` mutation. Specify the `$topic` and `$webhookSubscription` parameters to create subscriptions.

### Creating subscriptions using app configuration file

```toml
[webhooks]
api_version = "2023-04"


[[webhooks.subscriptions]]
topics = [
  "products/create",
  "products/update",
  "products/delete"
]
uri = "pubsub://example:pub-sub-topic1"


[[webhooks.subscriptions]]
topics = ["orders/create"]
uri = "pubsub://example:pub-sub-topic2"
```

### Creating subscriptions using GraphQL Admin API

```graphql
mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription {
      id
      topic
      format
      includeFields
      uri
    }
  }
}
```

***

### List of topics

All webhook topics you can subscribe to.

#### Examples

* #### app\_purchases\_one\_time/update: Sample Payload

  #####

  ```undefined
  {
    "app_purchase_one_time": {
      "admin_graphql_api_id": "gid://shopify/AppPurchaseOneTime/1017262349",
      "name": "Webhook Test",
      "status": "PENDING",
      "admin_graphql_api_shop_id": "gid://shopify/Shop/548380009",
      "created_at": "2021-12-31T19:00:00-05:00",
      "updated_at": "2021-12-31T19:00:00-05:00"
    }
  }
  ```

***

### Customize

###### Filter events

Manage the number of event messages your app receives by filtering events. Unlike payload modifications, filters are made up of rules, applied to a webhook subscription, which act as a gate for whether or not webhooks are delivered when an event occurs.

[Navigate to - Webhooks filters guide](https://shopify.dev/docs/apps/build/webhooks/customize/filters)

[Navigate to - Shopify API Search Syntax](https://shopify.dev/docs/api/usage/search-syntax)

###### Modify payloads

Shopify provides you with a way to modify the payload you receive when you subscribe to webhook topics. Unlike filters, which always return the same payload, this feature enables you to specify what subset of information is most relevant to your use case from a webhook.

[Navigate to - Webhooks payload modification guide](https://shopify.dev/docs/apps/build/webhooks/customize/modify-payloads)

### Filter events

```toml
[[webhooks.subscriptions]]
topics = ["products/update"]
uri = "https://example.com/webhooks"
filter = "id:* AND status:active AND (product_type:Music OR product_type:Movies) AND -invalid_field:* AND variants.taxable:true AND variants.weight:<5 AND variants.price:>=100 AND variants.title:Album*"
```

### Modify payloads

```toml
[[webhooks.subscriptions]]
topics = ["customers/delete"]
uri = "https://example.com/webhooks"
include_fields = ["id", "email_marketing_consent", "updated_at"]
```

### customers/update payload

###### Modified

```toml
{
  "id": 706405506930370000,
  "updated_at": "2021-12-31T19:00:00-05:00",
  "email_marketing_consent": null
}
```

###### Original

```toml
{
  "id": 706405506930370000,
  "email": "bob@biller.com",
  "created_at": "2021-12-31T19:00:00-05:00",
  "updated_at": "2021-12-31T19:00:00-05:00",
  "first_name": "Bob",
  "last_name": "Biller",
  "orders_count": 0,
  "state": "disabled",
  "total_spent": "0.00",
  "last_order_id": null,
  "note": "This customer loves ice cream",
  "verified_email": true,
  "multipass_identifier": null,
  "tax_exempt": false,
  "tags": "",
  "last_order_name": null,
  "currency": "USD",
  "phone": null,
  "addresses": [],
  "tax_exemptions": [],
  "email_marketing_consent": null,
  "sms_marketing_consent": null,
  "admin_graphql_api_id": "gid://shopify/Customer/706405506930370084"
}
```

***

---
