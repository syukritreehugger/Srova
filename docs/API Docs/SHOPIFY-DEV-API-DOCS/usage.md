# Shopify Usage Reference (Indonesian / English)

> Referensi lengkap **Usage** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/usage.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/usage` |
| Total halaman | **25** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [access-scopes](#access-scopes)
- [api-exploration / admin-cli-app-execute](#api-exploration-admin-cli-app-execute)
- [api-exploration / admin-graphiql-explorer](#api-exploration-admin-graphiql-explorer)
- [api-exploration / storefront-graphiql-explorer](#api-exploration-storefront-graphiql-explorer)
- [authentication](#authentication)
- [bulk-operations](#bulk-operations)
- [bulk-operations / imports](#bulk-operations-imports)
- [bulk-operations / queries](#bulk-operations-queries)
- [gids](#gids)
- [graphql-basics](#graphql-basics)
- [graphql-basics / advanced](#graphql-basics-advanced)
- [graphql-basics / mutations](#graphql-basics-mutations)
- [graphql-basics / queries](#graphql-basics-queries)
- [graphql-basics / variables](#graphql-basics-variables)
- [idempotent-requests](#idempotent-requests)
- [implementing-idempotency](#implementing-idempotency)
- [limits](#limits)
- [pagination-graphql](#pagination-graphql)
- [pagination-rest](#pagination-rest)
- [response-codes](#response-codes)
- [search-syntax](#search-syntax)
- [versioning](#versioning)
- [versioning / api-health](#versioning-api-health)
- [versioning / updates](#versioning-updates)


---



<a id="landing"></a>


## About Shopify APIs

Shopify offers a suite of APIs that allow developers to extend the platform’s built-in features. These APIs allow app developers to read and write app user data, interoperate with other systems and platforms, and add new functionality to Shopify.

***

### Requirements for using Shopify APIs

* All APIs are subject to the [Shopify API License and Terms of Use](https://www.shopify.com/legal/api-terms).
* All APIs are subject to [rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits).
* All APIs require developers to [authenticate](https://shopify.dev/docs/apps/build/authentication-authorization).
* Some APIs are [versioned](https://shopify.dev/docs/api/usage/versioning).

***

### Scopes and permissions

* Some API features are only available to certain [Shopify plans](https://www.shopify.com/pricing).
* Depending on how you're [distributing your app](https://shopify.dev/docs/apps/launch/distribution), you might need to request certain permissions or access scopes when users install your app.
* With a few APIs, you’ll need to request access from Shopify and be approved before you can start making calls.

***

### Available APIs

For a complete list of available APIs, refer to [Shopify API reference docs](https://shopify.dev/docs/api).

***

### Deprecated APIs

Deprecated APIs remain available but are unsupported and can stop working at any time. Developers should migrate to supported alternatives as soon as possible. To learn more about deprecated APIs and migrating to supported alternatives, refer to the [developer changelog](https://shopify.dev/changelog).

***

---



<a id="access-scopes"></a>


## Shopify API access scopes

All apps need to request access to specific store data during the app authorization process. This guide provides a list of available access scopes for the GraphQL Admin, Storefront, Payment Apps APIs, and Customer Account APIs.

***

### How it works

**Tip:**

For more information on how to configure your access scopes, refer to [app configuration](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration) and [manage access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).

After you've [generated API credentials](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), your app needs to [be authorized to access store data](https://shopify.dev/docs/apps/build/authentication-authorization#authorization).

Authorization is the process of giving permissions to apps. Users can authorize Shopify apps to access data in a store. For example, an app might be authorized to access orders and product data in a store.

An app can request authenticated or unauthenticated access scopes.

| Scope type | Description | Example use cases |
| - | - | - |
| [Authenticated](#authenticated-access-scopes) | Controls access to resources in the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Web Pixel API](https://shopify.dev/docs/api/web-pixels-api), and [Payments Apps API](https://shopify.dev/docs/api/payments-apps). Authenticated access is intended for interacting with a store on behalf of a user. | * Creating products
* Managing discount codes |
| [Unauthenticated](#unauthenticated-access-scopes) | Controls an app's access to [Storefront API](https://shopify.dev/docs/api/storefront) objects. Unauthenticated access is intended for interacting with a store on behalf of a customer. | - Viewing products
- Initiating a checkout |
| [Customer](#customer-access-scopes) | Controls an app's access to [Customer Account API](https://shopify.dev/docs/api/customer) objects. Customer access is intended for interacting with data that belongs to a customer. | * Viewing orders
* Updating customer details |

***

### Authenticated access scopes

This section describes the authenticated access scopes that your app can request. In the table, access to some resources are marked with **permissions required**. In these cases, you must [request specific permission](#requesting-specific-permissions) to access data from the user in your Partner Dashboard.

**Info:**

To authenticate an admin-created custom app, you or the app user needs to install the app from the Shopify admin to generate API credentials and the necessary API access tokens. Refer to [access scopes for admin-created custom apps](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/generate-app-access-tokens-admin#permissions-required-to-assign-scopes-to-a-custom-app).

| Scope | Access |
| - | - |
| `read_all_orders` | All relevant [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) rather than the default window of orders created within the last 60 dayspermissions requiredThis access scope is used in conjunction with existing order scopes, for example `read_orders` or `write_orders`.You need to [request permission for this access scope](#orders-permissions) from your Partner Dashboard before adding it to your app. |
| `write_app_proxy` | Allows your app to use [app proxies](https://shopify.dev/docs/apps/build/online-store/display-dynamic-data). |
| `read_assigned_fulfillment_orders`,`write_assigned_fulfillment_orders`,`read_merchant_managed_fulfillment_orders`,`write_merchant_managed_fulfillment_orders`,`read_third_party_fulfillment_orders`,`write_third_party_fulfillment_orders`,`read_marketplace_fulfillment_orders` | `FulfillmentOrder`As of API version 2024-10, `write_third_party_fulfillment_orders` will no longer allow [order management apps](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) to create fulfillments for fulfillment orders that have been assigned to a different fulfillment service app. |
| `read_cart_transforms`,`write_cart_transforms` | `CartTransform` |
| `read_checkout_branding_settings`,`write_checkout_branding_settings` | `CheckoutBranding` |
| `read_checkout_and_accounts_configurations`,`write_checkout_and_accounts_configurations` | `CheckoutAndAccountsConfiguration` |
| `read_content`,`write_content`,`read_online_store_pages` | `Article`, `Blog`, `Comment`, `Page` |
| `read_customer_events`,`write_pixels` | [Web Pixels API](https://shopify.dev/docs/api/web-pixels-api) |
| `read_customer_merge`,`write_customer_merge` | `CustomerMergePreview`, `CustomerMergeRequest` |
| `read_customer_payment_methods` | `CustomerPaymentMethod`permissions requiredYou need to [request permission for this access scope](#subscription-apis-permissions) from your Partner Dashboard before adding it to your app. |
| `read_customers`,`write_customers` | `Customer`, `Segment`, `Company`, `CompanyLocation` |
| `read_delivery_customizations`,`write_delivery_customizations` | `DeliveryCustomization` |
| `read_discounts`,`write_discounts` | [Discounts features](https://shopify.dev/docs/apps/build/discounts) |
| `read_draft_orders`,`write_draft_orders` | `DraftOrder` |
| `read_files`,`write_files` | `GenericFile` |
| `read_fulfillments`,`write_fulfillments` | `FulfillmentService` |
| `read_gift_cards`,`write_gift_cards` | `GiftCard` |
| `read_inventory`,`write_inventory` | `InventoryLevel`, `InventoryItem` |
| `read_legal_policies` | `ShopPolicy` |
| `read_locales`,`write_locales` | `ShopLocale` |
| `read_locations`,`write_locations` | `Location` |
| `read_markets`,`write_markets` | `Market` |
| `read_marketing_events`,`write_marketing_events` | `MarketingEvent`, `MarketingActivity` |
| `read_merchant_approval_signals` | `MerchantApprovalSignals` |
| `read_metaobject_definitions`,`write_metaobject_definitions` | `MetaobjectDefinition` |
| `read_metaobjects`,`write_metaobjects` | `Metaobject` |
| `read_online_store_navigation``write_online_store_navigation` | `UrlRedirect` |
| `read_order_edits`,`write_order_edits` | `CalculatedOrder`, `DeliveryCarrierService` |
| `read_orders`,`write_orders` | `AbandonedCheckout`, `Fulfillment`, `Order`, `OrderTransaction`, `DeliveryCarrierService` |
| `read_own_subscription_contracts`,`write_own_subscription_contracts` | GraphQL Admin API `SubscriptionContract`permissions requiredCustomer Account API `SubscriptionContract`permissions requiredYou need to [request permission for these access scopes](#subscription-apis-permissions) from your Partner Dashboard before adding them to your app. |
| `read_payment_customizations`,`write_payment_customizations` | `PaymentCustomization` |
| `read_payment_gateways`,`write_payment_gateways` | Payments Apps API `PaymentsAppConfiguration` |
| `read_payment_mandate`,`write_payment_mandate` | `PaymentMandate` |
| `write_payment_sessions` | Payments Apps API `PaymentSession`, `CaptureSession`, `RefundSession`, `VoidSession` |
| `read_payment_terms`,`write_payment_terms` | `PaymentSchedule`, `PaymentTerms` |
| `read_price_rules`,`write_price_rules` | `PriceRule` |
| `write_privacy_settings`,`read_privacy_settings` | `CookieBanner`, `PrivacySettings` |
| `read_products`,`write_products` | `Product`, `ProductVariant`, `Collection`, `ResourceFeedback`,`SellingPlan` (also requires `read_purchase_options` or `read_own_subscription_contracts` for queries, and `write_purchase_options` or `write_own_subscription_contracts` for mutations) |
| `read_reports` | Analytics and reporting data through the [`shopifyqlQuery`](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyqlquery) query |
| `read_returns`,`write_returns` | `Return` |
| `read_script_tags`,`write_script_tags` | `ScriptTag` |
| `read_shipping`,`write_shipping` | `DeliveryCarrierService` |
| `read_shopify_payments_disputes` | `ShopifyPaymentsDispute` |
| `read_shopify_payments_dispute_evidences` | `ShopifyPaymentsDisputeEvidence` |
| `read_shopify_payments_payouts` | `ShopifyPaymentsPayout`, `ShopifyPaymentsBalanceTransaction` |
| `read_store_credit_accounts` | `StoreCreditAccount` |
| `read_store_credit_account_transactions`,`write_store_credit_account_transactions` | `StoreCreditAccountDebitTransaction`, `StoreCreditAccountCreditTransaction` |
| `read_themes`,`write_themes` | `OnlineStoreTheme` |
| `read_translations`,`write_translations` | `TranslatableResource`, `Translation` |
| `read_users` | `StaffMember`shopify plus |
| `read_validations`,`write_validations` | `Validation` |

#### Requesting specific permissions

Follow the procedures below to request specific permissions to request access scopes in the Partner Dashboard.

##### Orders permissions

By default, you have access to the last 60 days' worth of orders for a store. To access all the orders, you need to request access to the `read_all_orders` scope from the user:

1. From the Partner Dashboard, go to [**Apps**](https://partners.shopify.com/current/apps).
2. Click the name of your app.
3. Click **API access**.
4. In the **Access requests** section, on the **Read all orders scope** card, click **Request access**.
5. On the **Orders** page that opens, describe your app and why you're applying for access.
6. Click **Request access**.

If Shopify approves your request, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.

##### Subscription APIs permissions

Subscription apps let users sell subscription products that generate multiple orders on a specific billing frequency.

With subscription products, the app user isn't required to get customer approval for each subsequent order after the initial subscription purchase. As a result, your app needs to request the required protected access scopes to use Subscription APIs from the app user:

1. From the Partner Dashboard, go to [**Apps**](https://partners.shopify.com/current/apps).
2. Click the name of your app.
3. Click **API access**.
4. In the **Access requests** section, on the **Access Subscriptions APIs** card, click **Request access**.
5. On the **Subscriptions** page that opens, describe why you're applying for access.
6. Click **Request access**.

If Shopify approves your request, then you can add the `read_customer_payment_methods` and `write_own_subscription_contracts` scopes to your app. If you're using the Customer Account API, you can add the `customer_read_own_subscription_contracts` or `customer_write_own_subscription_contracts` scopes.

##### Protected customer data permissions

By default, apps don't have access to any protected customer data. To access protected customer data, you must meet our [protected customer data requirements](https://shopify.dev/docs/apps/launch/protected-customer-data#requirements). You can add the relevant scopes to your app, but the API won't return data from non-development stores until your app is configured and approved for protected customer data use.

***

### Unauthenticated access scopes

Unauthenticated access scopes provide apps with read-only access to the [Storefront API](https://shopify.dev/docs/api/storefront). Unauthenticated access is intended for interacting with a store on behalf of a customer. For example, an app might need to do one or more of following tasks:

* Read products and collections
* Create customers and update customer accounts
* Query international prices for products and orders
* Interact with a cart during a customer's session
* Initiate a checkout

#### Request scopes

To request unauthenticated access scopes for an app, select them when you [generate API credentials](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets) or [change granted access scopes](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes).

To request access scopes or permissions for the Headless channel, refer to [managing the Headless channel](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/manage-headless-channels#request-storefront-permissions).

You can request the following unauthenticated access scopes:

| Scope | Access |
| - | - |
| `unauthenticated_read_checkouts`, `unauthenticated_write_checkouts` | [Cart](https://shopify.dev/docs/api/storefront/latest/objects/cart) object |
| `unauthenticated_read_customers`, `unauthenticated_write_customers` | [Customer](https://shopify.dev/docs/api/storefront/latest/objects/customer) object |
| `unauthenticated_read_customer_tags` | `tags` field on the [Customer](https://shopify.dev/docs/api/storefront/latest/objects/customer) object |
| `unauthenticated_read_content` | Storefront content, such as [Article](https://shopify.dev/docs/api/storefront/latest/objects/article), [Blog](https://shopify.dev/docs/api/storefront/latest/objects/blog), and [Comment](https://shopify.dev/docs/api/storefront/latest/objects/comment) objects |
| `unauthenticated_read_metaobjects` | View metaobjects, such as [Metaobject](https://shopify.dev/docs/api/storefront/latest/objects/metaobject) |
| `unauthenticated_read_product_inventory` | `quantityAvailable` field on the [ProductVariant](https://shopify.dev/docs/api/storefront/latest/objects/productvariant) object and `totalAvailable` field on the [Product](https://shopify.dev/docs/api/storefront/latest/objects/product) object |
| `unauthenticated_read_product_listings` | [Product](https://shopify.dev/docs/api/storefront/latest/objects/product) and [Collection](https://shopify.dev/docs/api/storefront/latest/objects/collection) objects |
| `unauthenticated_read_product_pickup_locations` | [Location](https://shopify.dev/docs/api/storefront/latest/objects/location) and [StoreAvailability](https://shopify.dev/docs/api/storefront/latest/objects/storeavailability) objects |
| `unauthenticated_read_product_tags` | `tags` field on the [Product](https://shopify.dev/docs/api/storefront/latest/objects/product) object |
| `unauthenticated_read_selling_plans` | Selling plan content on the [Product](https://shopify.dev/docs/api/storefront/latest/objects/product) object |

***

### Customer access scopes

Customer access scopes provide apps with read and write access to the [Customer Account API](https://shopify.dev/docs/api/customer). Customer access is intended for interacting with data that belongs to a customer. For example, an app might need to do one or more of following tasks:

* Read customers orders
* Update customer accounts
* Create and update customer addresses
* Read shop, customer or order metafields

#### Request scopes

To request access scopes or permissions for the Headless or Hydrogen channel, refer to [managing permissions](https://shopify.dev/docs/storefronts/headless/building-with-the-customer-account-api/getting-started#step-2-configure-customer-account-api-access).

You can request the following customer access scopes:

| Scope | Access |
| - | - |
| `customer_read_customers`, `customer_write_customers` | [Customer](https://shopify.dev/docs/api/customer/latest/objects/Customer) object |
| `customer_read_orders`, `customer_write_orders` | [Order](https://shopify.dev/docs/api/customer/latest/objects/Order) object |
| `customer_read_draft_orders` | [Draft Order](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder) object |
| `customer_read_markets` | [Market](https://shopify.dev/docs/api/customer/latest/objects/Market) object |
| `customer_read_metaobjects` | [Metaobject](https://shopify.dev/docs/api/customer/unstable/objects/metaobject) object |
| `customer_read_store_credit_accounts` | [Store Credit Account](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount) object |
| `customer_read_own_subscription_contracts`, `customer_write_own_subscription_contracts` | [Subscription Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) object for records that belong to your app |
| `customer_write_subscription_contracts` | [Subscription Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract) object for all records. Only available for Hydrogen and Headless storefronts |
| `customer_read_companies`, `customer_write_companies` | [Company](https://shopify.dev/docs/api/customer/latest/objects/Company) object |
| `customer_read_locations`, `customer_write_locations` | [Company Location](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation) object |

***

### Checking granted access scopes

You can check your app's granted access scopes using the [`appInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallation?example=Get+the+access+scopes+associated+with+the+app+installation) query in the GraphQL Admin API.

***

### Limitations

* Apps should request only the minimum amount of data that's necessary for an app to function when using a Shopify API. Shopify restricts access to scopes for apps that don't require legitimate use of the associated data.
* Only [public or custom apps](https://shopify.dev/docs/apps/launch/distribution) are granted access scopes. Legacy app types, such as private or unpublished, won't be granted new access scopes.

***

---



<a id="api-exploration-admin-cli-app-execute"></a>


## GraphQL Admin API in Shopify CLI

If you're developing an app using [Shopify CLI](https://shopify.dev/docs/apps/build/cli-for-apps), you can execute GraphQL Admin API queries and mutations using the [`shopify app execute`](https://shopify.dev/docs/api/shopify-cli/app/app-execute) command. You can also use [`shopify app bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute) to execute bulk [queries](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [mutations](https://shopify.dev/docs/api/usage/bulk-operations/imports).

These commands use [client credentials](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/client-credentials-grant) to authenticate your app against a store in your organization. Their permissions are defined by the [access scopes](https://shopify.dev/docs/api/usage/access-scopes) that are available to your app. You should run `app execute` or `app bulk execute` from the root of your app directory.

To prevent accidental damage to production data, `app execute` and `app bulk execute` limit mutation execution to [dev stores](https://shopify.dev/docs/apps/build/cli-for-apps/app-configuration#dev-stores).

***

### Requirements

* You've installed the [latest version of Shopify CLI](https://shopify.dev/docs/api/shopify-cli#upgrade).
* You've [configured](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation/manage-access-scopes) the necessary access scopes for your query or mutation.
* You've installed the app on the store.
  * The app will be installed automatically when [using the `shopify app dev` command](https://shopify.dev/docs/apps/build/cli-for-apps/test-apps-locally).

***

### Querying data

You can use `app execute` with the `--query` or `--query-file` flag to execute a GraphQL query. The command defaults to your last used dev store. You can override this with the `--store` flag.

### Terminal

```bash
shopify app execute --query '{
  products(first: 3) {
    edges {
      node {
        id
        title
      }
    }
  }
}'
```

***

### Mutating data

You can also use `app execute` with the `--query` flag to execute a GraphQL mutation. You can pass GraphQL variables as JSON using the `--variables` or `--variable-file` flag.

### Terminal

```bash
shopify app execute --query \
  'mutation productSet($identifier: ProductSetIdentifiers, $input: ProductSetInput!) {
    productSet(identifier: $identifier, input: $input) {
      product {
        id
      }
      userErrors {
        field
        message
      }
    }
  }' \
  --variables \
    '{
      "identifier": {
        "handle": "my-cli-product"
      },
      "input": {
        "handle": "my-cli-product",
        "title": "Simple Product (Single Variant)",
        "descriptionHtml": "<p>Product with a single variant, used to set price and SKU.</p>",
        "status": "ACTIVE",
        "productOptions": [
          {
            "name": "Title",
            "values": [
              { "name": "Default Title" }
            ]
          }
        ],
        "variants": [
          {
            "optionValues": [
              {
                "optionName": "Title",
                "name": "Default Title"
              }
            ],
            "price": 12.99,
            "sku": "SIMPLE-001"
          }
        ]
      }
    }'
```

***

### Bulk querying

You can use `app bulk execute` to [export data with bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). The query must adhere to the [requirements](https://shopify.dev/docs/api/usage/bulk-operations/queries#operation-restrictions) for bulk query operations. Use the `--watch` flag to automatically poll the bulk operation until it's complete.

### Terminal

```bash
shopify app bulk execute --watch --query '{
  products {
    edges {
      node {
        id
        title
        variants {
          edges {
            node {
              id
              sku
              price
            }
          }
        }
      }
    }
  }
}'
```

***

### Bulk mutating

You can use `app bulk execute` to [import data with bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/imports). Use the `--variable-file` flag to provide the [JSONL file](https://shopify.dev/docs/api/usage/bulk-operations/imports#create-a-jsonl-file-and-include-graphql-variables) for the bulk mutation, or pass the values directly using the `--variables` flag.

### Terminal

```bash
cat <<EOF > products.jsonl
{ "input": { "title": "Sweet new snowboard 1", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 2", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 3", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 4", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 5", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 6", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 7", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 8", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 9", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 10", "productType": "Snowboard", "vendor": "JadedPixel" } }
EOF
shopify app bulk execute --watch --variable-file products.jsonl --query \
  'mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
        title
        variants(first: 10) {
          edges {
            node {
              id
              title
              inventoryQuantity
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }'
```

***

### Checking bulk operation status

The [`app bulk status`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status) command lists the status of recent bulk operations for your app.

### Terminal

```bash
shopify app bulk status
```

You can use the `--id` flag to check the status of a specific bulk operation.

### Terminal

```bash
shopify app bulk status --id 1234567890
```

***

### Canceling bulk operations

The [`app bulk cancel`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel) command cancels a running bulk operation. You must provide the operation ID using the `--id` flag.

### Terminal

```bash
shopify app bulk cancel --id 1234567890
```

***

### Next steps

* Review the command reference for [`app execute`](https://shopify.dev/docs/api/shopify-cli/app/app-execute) and [`app bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute).
* Review the command reference for [`app bulk status`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status) and [`app bulk cancel`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel).
* Learn more about [bulk queries](https://shopify.dev/docs/api/usage/bulk-operations/queries) and [bulk mutations](https://shopify.dev/docs/api/usage/bulk-operations/imports).

***

---



<a id="api-exploration-admin-graphiql-explorer"></a>


## GraphiQL for the Admin API

GraphiQL is an in-browser tool for writing, validating, and testing GraphQL queries. When working with Shopify's GraphQL Admin API, GraphiQL can be useful for the following tasks:

* Learning about the available queries and mutations

* Executing specific queries and mutations to extract information or accomplish tasks

  For more information on GraphQL Admin API queries, refer to the [GraphQL Admin API reference](https://shopify.dev/docs/api/admin-graphql).

***

### Execute queries on your store

You can use GraphiQL to interact with your store's data in the following ways.

#### Install the Graphi​QL app

To build queries and mutations on your development store, [install Shopify's GraphiQL app](https://shopify-graphiql-app.shopifycloud.com/).

Some scopes aren't available within the GraphiQL app. The app also can't be used to access data owned by other apps. If you're developing an app, then you should [use a local GraphiQL instance](#use-a-local-graphiql-instance) instead.

#### Use a local Graphi​QL instance

If you are developing an app using [Shopify CLI](https://shopify.dev/docs/apps/build/cli-for-apps), you can launch GraphiQL while running the [`dev`](https://shopify.dev/docs/api/shopify-cli/app/app-dev) command by tapping the `g` key.

Shopify CLI's GraphiQL instance connects as your app, so it has the same access scopes as your app, and it can access data owned by your app. It can't access data owned by other apps.

***

### Execute queries from Graph​QL code blocks

If you're running a local app server with Shopify CLI, then you can send GraphQL examples to GraphiQL using the **Open in GraphiQL** button. Access this feature in example code blocks on the references, and on code blocks inside of the Dev Assistant.

You should use the [latest version of Shopify CLI](https://shopify.dev/docs/api/shopify-cli#upgrade). You can check your Shopify CLI version by running the following command:

### Terminal

```terminal
shopify version
```

**Tip:**

If you need to upgrade to the latest Shopify CLI version, then you can run the [install](https://shopify.dev/docs/api/shopify-cli#installation) command.

#### Existing apps

If you've already started developing an app using [Shopify CLI](https://shopify.dev/docs/apps/build/cli-for-apps), then complete the following steps:

1. Navigate to your app directory:

   ## Terminal

   ```terminal
   cd <directory>
   ```

2. Use the Shopify CLI [`dev` command](https://shopify.dev/docs/api/shopify-cli/app/app-dev) to start the dev preview:

   ## Terminal

   ```terminal
   shopify app dev
   ```

3. To execute GraphQL code examples, click **Run in GraphiQL** in the code block.

#### New apps

If you haven't started developing an app yet, then complete the following steps:

1. [Install Shopify CLI](https://shopify.dev/docs/api/shopify-cli#installation).

2. [Scaffold an app](https://shopify.dev/docs/apps/build/scaffold-app).

3. Navigate to your app directory:

   ## Terminal

   ```terminal
   cd <directory>
   ```

4. Use the Shopify CLI [`dev` command](https://shopify.dev/docs/api/shopify-cli/app/app-dev) to start the dev preview:

   ## Terminal

   ```terminal
   shopify app dev
   ```

5. To execute GraphQL code examples, click **Run in GraphiQL** in the code block.

***

### Execute queries on a demo store

This is a read-only demo which can execute queries without needing to connect to a development store.

* Click **Explorer** and use checkboxes and fields to build GraphQL queries.
* Click **Docs** to expand the **Documentation Explorer**. You can search schemas to view descriptions and supported fields.

Launch GraphiQL in its [own window](https://shopify-graphiql-app.shopifycloud.com/).

***

---



<a id="api-exploration-storefront-graphiql-explorer"></a>


## Shopify Storefront API GraphiQL explorer

Start exploring Shopify's Storefront GraphQL API on our demo shop. Use the embedded Graph*i*QL explorer below to run queries.

**Caution:**

This is a **read-only** demo. To build queries and mutations [install Shopify's GraphiQL app](https://shopify-graphiql-app.shopifycloud.com/).

Launch the Explorer in its [own window](https://shopify-graphiql-app.shopifycloud.com/).

***

### Next steps

* Familiarize yourself with the [Storefront API reference documentation](https://shopify.dev/docs/api/storefront).

***

---



<a id="authentication"></a>


## Shopify API authentication

This guide introduces you to the authentication and authorization methods that you will use to connect to Shopify's APIs.

***

### Admin API access for Shopify apps

You can [use Shopify CLI to generate a starter app](https://shopify.dev/docs/apps/build/scaffold-app) with boilerplate code that handles authentication and authorization. The starter app includes code for an app rendered in the Shopify admin that follows best practices:

* Authorizing your app using [session tokens](https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens) and [token exchange](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/token-exchange).

* Installing on stores using [Shopify managed installation](https://shopify.dev/docs/apps/build/authentication-authorization/app-installation).

  You should use this starter app unless you need to scaffold a standalone app.

[Scaffold an app\
\
](https://shopify.dev/docs/apps/build/scaffold-app)

[Scaffold an app that follows all authentication and authorization best practices.](https://shopify.dev/docs/apps/build/scaffold-app)

To learn more about the authentication and authorization methods that you can use for Shopify apps, and the libraries that you can use to simplify your implementation, refer to [authentication and authorization](https://shopify.dev/docs/apps/build/authentication-authorization).

***

### Access tokens for the Storefront API

The [Storefront API](https://shopify.dev/docs/api/storefront) supports both [tokenless](https://shopify.dev/docs/api/storefront#tokenless-access) and token-based access. For token-based access, requests require a valid Shopify access token. The following types of tokens are available:

* [**Public access tokens**](#getting-started-with-public-access): Used to make requests from client-side applications, such as a browser or mobile app.

* [**Private access tokens**](#getting-started-with-private-access): Used to make requests from a server or other private context.

  Apps can have a maximum of 100 active storefront access tokens per shop.

#### Getting started with public access

Public access tokens enable your app to make Storefront API requests from public contexts like a browser. With public access, capacity scales with the number of buyers based on customer IP. In most cases, this is the IP of someone browsing your site or using your mobile app. Learn more about Storefront API [rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits#storefront-api-rate-limits).

To use public access, you need to create a public access token for your app by making a request to the GraphQL Admin API's [`storefrontAccessTokenCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/storefrontAccessTokenCreate) mutation. Alternatively, you can create a [custom app in the Shopify admin](https://help.shopify.com/en/manual/apps/custom-apps), and retrieve your Storefront API access token and manage access scopes from there.

To query the Storefront API with a public access token, include it as an `X-Shopify-Storefront-Access-Token` header on all client-side requests.

#### Getting started with private access

Private access tokens let you make authenticated, server-side queries to the Storefront API.

**Caution:**

Unlike public access tokens, private access tokens should be treated as secret and not used on the client-side. We recommend only requesting the scopes that your app needs, to reduce the security risk if the token leaks.

To start using private access, you can use the following methods:

* Add the Headless channel to your Shopify admin.

* Create a [delegate access token](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/use-delegate-tokens) for your custom app.

* Request [unauthenticated scopes](https://shopify.dev/docs/api/usage/access-scopes#unauthenticated-access-scopes) on an existing access token.

#### Making server-side requests

To query the Storefront API with a private access token:

1. Include the `Shopify-Storefront-Private-Token` header with the private access token.

In some cases, a request to the Storefront API isn't linked to buyer traffic, such as during a static site build, however when making server-side requests to the Storefront API as a result of buyer traffic, be sure to also:

1. Include the `Shopify-Storefront-Buyer-IP` (case-sensitive) header with the IP address of the buyer. This allows Shopify to accurately enforce IP-level bot and platform protection, to help your storefront manage traffic from a single user consuming a high level of capacity, such as a bot.

   **Caution:**

   Failure to include the `Shopify-Storefront-Buyer-IP` (case-sensitive) header, can result in sub-optimal user experiences, including throttled API requests, limited Bot Protection, and unauthenticated flows at checkout as Shopify will not be able to differentiate requests from different buyers.

***

### Tools

[Shopify CLI\
\
](https://shopify.dev/docs/apps/build/cli-for-apps)

[A command-line tool to help you build Shopify apps faster](https://shopify.dev/docs/apps/build/cli-for-apps)

[shopify\_api\
\
](https://github.com/Shopify/shopify-api-ruby)

[Shopify’s official Ruby gem for interacting with the Admin API](https://github.com/Shopify/shopify-api-ruby)

[@shopify/shopify-api\
\
](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api)

[Shopify’s official Node library for interacting with the Storefront and Admin APIs, handling OAuth, webhooks, and billing](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api)

[@shopify/admin-api-client\
\
](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/admin-api-client)

[Shopify’s official lightweight Node library for interacting with the Admin API](https://github.com/Shopify/shopify-app-js/tree/main/packages/api-clients/admin-api-client)

***

### Next steps

* Authenticate your app using [session tokens](https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens).
* Authorize your app using a session token with [token exchange](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/token-exchange).
* Authorize your standalone app with [authorization code grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant).
* Authenticate your app created in the Shopify admin with [access tokens](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/generate-app-access-tokens-admin).

***

---



<a id="bulk-operations"></a>


## Bulk operations with the GraphQL Admin API

Shopify’s GraphQL Admin API enables you to read and write high volumes of data using asynchronous [bulk operations](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation).

* **[Bulk import data with the GraphQL Admin API](https://shopify.dev/docs/api/usage/bulk-operations/imports)** — Learn how to bulk import large volumes of data asynchronously.
* **[Perform bulk operations with the GraphQL Admin API](https://shopify.dev/docs/api/usage/bulk-operations/queries)** — Learn how to retrieve large datasets from Shopify.

***

---



<a id="bulk-operations-imports"></a>


## Bulk import data with the GraphQL Admin API

Importing large volumes of data using traditional and synchronous APIs is slow, complex to run, and difficult to manage. Instead of manually running a GraphQL mutation multiple times and managing a client-side throttle, you can run a bulk mutation operation.

Using the GraphQL Admin API, you can bulk import large volumes of data asynchronously. When the operation is complete, the results are delivered in a [JSON Lines (JSONL)](https://jsonlines.org/) file that Shopify makes available at a URL.

This guide introduces the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) and shows you how to use it to bulk import data into Shopify.

In API versions `2026-01` and higher, you can run up to five bulk mutation operations at a time per shop. In API versions prior to `2026-01`, you can run only one bulk mutation operation at a time per shop. When the operation is complete, the results are delivered in a [JSON Lines (JSONL)](https://jsonlines.org/) file that Shopify makes available at a URL.

***

### Requirements

* You're familiar with creating [products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate), [product variants](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantcreate), and [collections](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate) in your development store.
* You're familiar with [performing bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries) using the GraphQL Admin API.

***

### Limitations

* In API versions `2026-01` and higher, you can run up to five bulk mutation operations at a time per shop. In API versions prior to `2026-01`, you can run only one bulk operation of each type ([`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) or [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery)) at a time per shop.
* The bulk mutation operation has to complete within 24 hours. After that it will be stopped and marked as `failed`. When your import runs into this limit, consider reducing the input size.
* You can supply any GraphQL Admin API mutation to the `bulkOperationRunMutation`, except for `bulkOperationRunMutation` and `bulkOperationRunQuery` themselves (to prevent recursion).
* The mutation that's passed into `bulkOperationRunMutation` is limited to one connection field, which is defined by the GraphQL Admin API schema.
* The size of the JSONL file can't exceed 100MB.

***

### How bulk importing data works

You initiate a bulk operation by supplying a mutation string in the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation). Shopify then executes that mutation string asynchronously as a bulk operation.

Most GraphQL Admin API requests that you make are subject to [rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits), but the `bulkOperationRunMutation` request isn't. Because you're only making low-cost requests for creating operations, polling their status, or canceling them, bulk mutation operations are an efficient way to create data compared to standard GraphQL API requests.

#### Listing and filtering bulk operations

In API versions `2026-01` and higher, you can use the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query to list, filter, and paginate your bulk operations. `bulkOperations` replaces the deprecated [`currentBulkOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation) query.

The `bulkOperations` query provides the following features:

* Filtering by [status](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations#argument-query-filter-status), such as `completed`, `running`, or `failed`.
* Filtering by operation type, such as query or mutation.
* [Sorting](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations#arguments-sortKey) by values such as creation date, completion date, status, or ID.
* [Pagination](https://shopify.dev/docs/api/usage/pagination-graphql) with cursor-based navigation.
* The [`bulkOperation`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperation) query replaces the deprecated [`currentBulkOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation) query by allowing a direct lookup of a specific operation by ID using `bulkOperation(id:)`.

For complete details, refer to the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) and [`bulkOperation`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperation) query reference.

The following diagram shows the steps involved in bulk importing data into Shopify:

![Workflow for bulk importing data](https://shopify.dev/assets/assets/images/api/tutorials/bulk-import-data-CVIWHlpb.png)

1. **Create a JSONL file and include GraphQL variables**: Include the variables for the mutation in a JSONL file format. Each line in the JSONL file represents one input unit. The mutation runs once on each line of the input file.

2. **Upload the file to Shopify**: Before you upload the file, you must reserve a link by running the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation. After the space has been reserved, you can upload the file by making a request using the information returned from the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) response.

3. **Create a bulk mutation operation**: After the file has been uploaded, you can run [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) to create a bulk mutation operation. The [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) imports data in bulk by running the supplied GraphQL API mutation with the file of variables uploaded in the last step.

4. **Wait for the operation to finish**: To determine when the bulk mutation has finished, you can either:

   * **Subscribe to a webhook topic**: You can use the [`webhookSubscriptionCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate) mutation to subscribe to the `bulk_operations/finish` webhook topic in order to receive a webhook when any operation finishes - in other words, it has completed, failed, or been cancelled.

   * **Poll the status of the operation**: While the operation is running, you can poll to see its progress by querying the specific bulk operation using its ID (returned from the `bulkOperationRunQuery` mutation). In API version `2026-01` and higher, use the `bulkOperation(id:)` query. In API versions prior to 2026-01, use the `currentBulkOperation` query. The `objectCount` field increments to indicate the operation's progress, and the `status` field returns whether the operation is completed.

5. **Retrieve the results**: When a bulk mutation operation is completed, a JSONL output file is available for download at the URL specified in the `url` field.

***

### Create a JSONL file and include Graph​QL variables

When adding GraphQL variables to a new JSONL file, you need to format the variables so that they are accepted by the corresponding bulk operation GraphQL API. The format of the input variables need to match the GraphQL Admin API schema.

For example, you might want to import a large quantity of products. Each attribute of a product must be mapped to existing fields defined in the GraphQL input object [`ProductInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/productinput). In the JSONL file, each line represents one product input. The GraphQL Admin API runs once on each line of the input file. One input should take up one line only, no matter how complex the input object structure is.

The following example shows a sample JSONL file that is used to create 10 products in bulk:

```json
{ "input": { "title": "Sweet new snowboard 1", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 2", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 3", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 4", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 5", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 6", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 7", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 8", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 9", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 10", "productType": "Snowboard", "vendor": "JadedPixel" } }
```

**Note:**

The GraphQL Admin API doesn't serially process the contents of the JSONL file. Avoid relying on a particular sequence of lines and object order to achieve a desired result.

***

### Upload the file to Shopify

After you've created the JSONL file, and included the GraphQL variables, you can upload the file to Shopify. Before uploading the file, you need to first generate the upload URL and parameters.

#### Generate the uploaded URL and parameters

You can use the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation to generate the values that you need to authenticate the upload. The mutation returns an array of [`stagedMediaUploadTarget`](https://shopify.dev/docs/api/admin-graphql/latest/objects/stagedmediauploadtarget) instances.

An instance of [`stagedMediaUploadTarget`](https://shopify.dev/docs/api/admin-graphql/latest/objects/stagedmediauploadtarget) has the following key properties:

* `parameters`: The parameters that you use to authenticate an upload request.
* `url`: The signed URL where you can upload the JSONL file that includes GraphQL variables.

The mutation accepts an input of type [`stagedUploadInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/stageduploadinput), which has the following fields:

| Field | Type | Description |
| - | - | - |
| `resource` | [enum](https://shopify.dev/docs/api/admin-graphql/latest/enums/stageduploadtargetgenerateuploadresource) | Specifies the resource type to upload. To use `bulkOperationRunMutation`, the resource type must be `BULK_MUTATION_VARIABLES`. |
| `filename` | [string](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String) | The name of the file to upload. |
| `mimeType` | [string](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String) | The [media type](https://en.wikipedia.org/wiki/Media_type) of the file to upload. To use `bulkOperationRunMutation`, the `mimeType` must be `"text/jsonl"`. |
| `httpMethod` | [enum](https://shopify.dev/docs/api/admin-graphql/latest/enums/stageduploadhttpmethodtype) | The HTTP method to be used by the staged upload. To use `bulkOperationRunMutation`, the `httpMethod` must be `POST`. |

##### Example

The following example uses the [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) mutation to generate the values required to upload a JSONL file and be consumed by the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation). You must first run the `stagedUploadsCreate` mutation with no variables, and then separately send a POST request to the staged upload URL with the JSONL data:

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  stagedUploadsCreate(input:[{
    resource: BULK_MUTATION_VARIABLES,
    filename: "bulk_op_vars",
    mimeType: "text/jsonl",
    httpMethod: POST
  }]){
    userErrors{
      field,
      message
    },
    stagedTargets{
      url,
      resourceUrl,
      parameters {
        name,
        value
      }
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "stagedUploadsCreate": {
      "userErrors": [],
      "stagedTargets": [
        {
          "url": "https://shopify-staged-uploads.storage.googleapis.com",
          "resourceUrl": null,
          "parameters": [
            {
              "name": "key",
              "value": "tmp/21759409/bulk/2d278b12-d153-4667-a05c-a5d8181623de/bulk_op_vars"
            },
            {
              "name": "Content-Type",
              "value": "text/jsonl"
            },
            {
              "name": "success_action_status",
              "value": "201"
            },
            {
              "name": "acl",
              "value": "private"
            },
            {
              "name": "policy",
              "value": "zyJjb25kaXRpb25zIjpbeyJDb250ZW50LVR5cGUiOiJ0ZXh0XC9qc29ubCJ9LHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn0seyJhY2wiOiJwcml2YXRlIn0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwyMDk3MTUyMF0seyJidWNrZXQiOiJzaG9waWZ5LXN0YWdlZC11cGxvYWRzIn0seyJrZXkiOiJ0bXBcL2djc1wvMTQzMjMyMjEwNFwvYnVsa1wvM2QyNzhiMTItZDE1My00NjY3LWEwNWMtYTVkODE4MTYyM2RlXC9idWxrX29wX3ZhcnMifSx7IngtZ29vZy1kYXRlIjoiMjAyMjA4MzBUMDI1MTI3WiJ9LHsieC1nb29nLWNyZWRlbnRpYWwiOiJtZXJjaGFudC1hc3NldHNAc2hvcGlmeS10aWVycy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwvMjAyMjA4MzBcL2F1dG9cL3N0b3JhZ2VcL2dvb2c0X3JlcXVlc3QifSx7IngtZ29vZy1hbGdvcml0aG0iOiJHT09HNC1SU0EtU0hBMjU2In1dLCJleHBpcmF0aW9uIjoiMjAyMi0wOC0zMVQwMjo1MToyN1oifQ=="
            },
            {
              "name": "x-goog-credential",
              "value": "merchant-assets@shopify-tiers.iam.gserviceaccount.com/20220830/auto/storage/goog4_request"
            },
            {
              "name": "x-goog-algorithm",
              "value": "GOOG4-RSA-SHA256"
            },
            {
              "name": "x-goog-date",
              "value": "20220830T025127Z"
            },
            {
              "name": "x-goog-signature",
              "value": "4c0f6920cd67cbdf1faae75c112a98d49f9751e4e0c9f525c850f15f40629afa13584ab9937ec9f5292065ca8fd357ba87e98d6ab0e383e15a6e444c7e9bae06fb95dc422ad673fe77aefcb68e9d1a6d55deb478e6976b61769e20863992fffd4036898f76c7a50e92f18aa4d9e3e04aa8d04086386dc0e488f2ccb0ebcc30c17da2ba5a4d6a9cd57553b41ef6698dbefc78a9b3fe1af167ea539b70e83e5fb015f061399e952270202b769ae8f4e7e50e97dbe6679c3281ec3fc886c3a67becc7b3cee1d0e6a2d0777d09f6d7b083499c58f9c566eeb5374afd67e26c7ab2a91cfe5c5deb83a507d7e3c3ea44bb9f401afd3f2e6b09742baff2b30bc3def78a"
            }
          ]
        }
      ]
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 11,
      "actualQueryCost": 11
    }
  }
}
```

#### Upload the JSONL file

After you generate the parameters and URL for an upload, you can upload the JSONL file using a POST request. You must use a multipart form, and include all parameters as form inputs in the request body.

To generate the parameters for the multipart form, start with the parameters returned from the `stagedUploadsCreate` mutation. Then, add the file attachment.

**Note:**

The `file` parameter must be the last parameter in the list. If you add the `file` parameter somewhere else, then you'll receive an error.

**Caution:**

After uploading your JSONL file, don't modify or replace the file at the staged upload URL while the bulk operation is running. The system validates the file's integrity using checksums, and any modifications will cause the operation to fail with an `INTERNAL_SERVER_ERROR`.

**POST request**

```terminal
curl --location --request POST 'https://shopify-staged-uploads.storage.googleapis.com/' \
--form 'key="tmp/21759409/bulk/2d278b12-d153-4667-a05c-a5d8181623de/bulk_op_vars"' \
--form 'x-goog-credential="merchant-assets@shopify-tiers.iam.gserviceaccount.com/20220830/auto/storage/goog4_request"' \
--form 'x-goog-algorithm="GOOG4-RSA-SHA256"' \
--form 'x-goog-date="20220830T025127Z"' \
--form 'x-goog-signature="4c0f6920cd67cbdf1faae75c112a98d49f9751e4e0c9f525c850f15f40629afa13584ab9937ec9f5292065ca8fd357ba87e98d6ab0e383e15a6e444c7e9bae06fb95dc422ad673fe77aefcb68e9d1a6d55deb478e6976b61769e20863992fffd4036898f76c7a50e92f18aa4d9e3e04aa8d04086386dc0e488f2ccb0ebcc30c17da2ba5a4d6a9cd57553b41ef6698dbefc78a9b3fe1af167ea539b70e83e5fb015f061399e952270202b769ae8f4e7e50e97dbe6679c3281ec3fc886c3a67becc7b3cee1d0e6a2d0777d09f6d7b083499c58f9c566eeb5374afd67e26c7ab2a91cfe5c5deb83a507d7e3c3ea44bb9f401afd3f2e6b09742baff2b30bc3def78a"' \
--form 'policy="zyJjb25kaXRpb25zIjpbeyJDb250ZW50LVR5cGUiOiJ0ZXh0XC9qc29ubCJ9LHsic3VjY2Vzc19hY3Rpb25fc3RhdHVzIjoiMjAxIn0seyJhY2wiOiJwcml2YXRlIn0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwyMDk3MTUyMF0seyJidWNrZXQiOiJzaG9waWZ5LXN0YWdlZC11cGxvYWRzIn0seyJrZXkiOiJ0bXBcL2djc1wvMTQzMjMyMjEwNFwvYnVsa1wvM2QyNzhiMTItZDE1My00NjY3LWEwNWMtYTVkODE4MTYyM2RlXC9idWxrX29wX3ZhcnMifSx7IngtZ29vZy1kYXRlIjoiMjAyMjA4MzBUMDI1MTI3WiJ9LHsieC1nb29nLWNyZWRlbnRpYWwiOiJtZXJjaGFudC1hc3NldHNAc2hvcGlmeS10aWVycy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwvMjAyMjA4MzBcL2F1dG9cL3N0b3JhZ2VcL2dvb2c0X3JlcXVlc3QifSx7IngtZ29vZy1hbGdvcml0aG0iOiJHT09HNC1SU0EtU0hBMjU2In1dLCJleHBpcmF0aW9uIjoiMjAyMi0wOC0zMVQwMjo1MToyN1oifQ=="' \
--form 'acl="private"' \
--form 'Content-Type="text/jsonl"' \
--form 'success_action_status="201"' \
--form 'file=@"/Users/username/Documents/bulk_mutation_tests/products_long.jsonl"'
```

**GraphQL variables in JSONL file**

```json
{ "input": { "title": "Sweet new snowboard 1", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 2", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 3", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 4", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 5", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 6", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 7", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 8", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 9", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 10", "productType": "Snowboard", "vendor": "JadedPixel" } }
```

***

### Create a bulk mutation operation

After you upload the file, you can run [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) to import data in bulk. You must supply the corresponding mutation and the URL that you obtained in the [previous step](#generate-the-uploaded-url-and-parameters).

The [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) mutation takes the following arguments:

| Field | Type | Description |
| - | - | - |
| `mutation` | [string](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String) | Specifies the GraphQL API mutation that you want to run in bulk. Valid values: [`productCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate), [`collectionCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectioncreate), [`productUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate), [`productUpdateMedia`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdatemedia) |
| `stagedUploadPath` | [string](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String) | The path to the file of inputs in JSONL format to be consumed by [`stagedUploadsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stageduploadscreate) |

#### Example

In the following example, you want to run the following [`productCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate) mutation in bulk:

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation call($input: ProductInput!) {
  productCreate(input: $input) {
    product {
      id
      title
      variants(first: 10) {
        edges {
          node {
            id
            title
            inventoryQuantity
          }
        }
      }
    }
    userErrors {
      message
      field
    }
  }
}
```

To run the `productCreate` mutation in bulk, pass the mutation as a string into [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation):

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationRunMutation(
    mutation: "mutation call($input: ProductInput!) { productCreate(input: $input) { product {id title variants(first: 10) {edges {node {id title inventoryQuantity }}}} userErrors { message field } } }",
    stagedUploadPath: "tmp/21759409/bulk/89e620e1-0252-43b0-8f3b-3b7075ba4a23/bulk_op_vars") {
    bulkOperation {
      id
      url
      status
    }
    userErrors {
      message
      field
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "bulkOperationRunMutation": {
      "bulkOperation": {
        "id": "gid://shopify/BulkOperation/206005076024",
        "url": null,
        "status": "CREATED"
      },
      "userErrors": []
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 10,
      "actualQueryCost": 10
    }
  }
}
```

***

### Wait for the operation to finish

**Tip:**

Subscribing to the webhook topic is recommended over polling as it limits the number of redundant API calls.

#### Option A. Subscribe to the `bulk_operations/finish` webhook topic

You can use the [`webhookSubscriptionCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate) mutation to subscribe to the `bulk_operations/finish` webhook topic in order to receive a webhook when any operation finishes - in other words, it has completed, failed, or been cancelled.

For full setup instructions, refer to [Configuring webhooks](https://shopify.dev/docs/apps/build/webhooks/subscribe).

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  webhookSubscriptionCreate(
    topic: BULK_OPERATIONS_FINISH
    webhookSubscription: {
      format: JSON,
      uri: "https://12345.ngrok.io/"}
  ) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "webhookSubscriptionCreate": {
      "userErrors": [],
      "webhookSubscription": {
        "id": "gid://shopify/WebhookSubscription/4567"
      }
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 10,
      "actualQueryCost": 10,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 990,
        "restoreRate": 50
      }
    }
  }
}
```

After you've subscribed to the webhook topic, Shopify sends a POST request to the specified URL any time a bulk operation on the store (both mutations and [queries](https://shopify.dev/docs/api/usage/bulk-operations/queries)) finishes.

**Example webhook response**

```json
{
"admin_graphql_api_id": "gid://shopify/BulkOperation/206005076024",
"completed_at": "2024-01-28T19:11:09Z",
"created_at": "2024-01-28T19:10:59Z",
"error_code": null,
"status": "completed",
"type": "mutation",
}
```

You now must retrieve the bulk operation's data URL by using the `node` field and passing the `admin_graphql_api_id` value from the webhook payload as its `id`:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  node(id: "gid://shopify/BulkOperation/206005076024") {
    ... on BulkOperation {
      url
      partialDataUrl
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "node": {
      "url": "https://storage.googleapis.com/shopify/dyfkl3g72empyyoenvmtidlm9o4g?<params />",
      "partialDataUrl": null
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 1,
      "actualQueryCost": 1,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 999,
        "restoreRate": 50
      }
    }
  }
}
```

For more information on how webhooks work, refer to [Webhooks](https://shopify.dev/docs/apps/build/webhooks).

**Note:**

Webhook delivery isn't always guaranteed, so you might still need to poll for the operation's status to check when it's finished.

#### Option B.​Poll the status of the operation

While the operation is running, you can poll to see its progress by querying the specific bulk operation using its ID, which is returned from the [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) mutation.

In API versions `2026-01` and higher, use the `bulkOperation(id:)` query. In API versions prior to `2026-01`, use the `currentBulkOperation` query. The `objectCount` field increments to indicate the operation's progress, and the `status` field returns whether the operation is completed.

You can adjust your polling intervals based on the amount of data that you import. To learn about other possible operation statuses, refer to the [`BulkOperationStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/bulkoperationstatus) reference documentation.

**In API versions `2026-01` and higher:**

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  bulkOperation(id: "gid://shopify/BulkOperation/206005076024") {
    id
    status
    errorCode
    createdAt
    completedAt
    objectCount
    fileSize
    url
    partialDataUrl
  }
}
```

### JSON response

```json
{
  "data": {
    "bulkOperation": {
      "id": "gid://shopify/BulkOperation/206005076024",
      "status": "COMPLETED",
      "errorCode": null,
      "createdAt": "2024-01-28T19:10:59Z",
      "completedAt": "2024-01-28T19:11:09Z",
      "objectCount": "16",
      "fileSize": "6155",
      "url": "https://storage.googleapis.com/shopify-tiers-assets-prod-us-east1/iqtpj52yuoa7prkbpzp9gwn27kw3?GoogleAccessId=assets-us-prod%40shopify-tiers.iam.gserviceaccount.com&Expires=1612465869&Signature=KOhlcYhLve3NLr6rfVbAeY02crFAM3rMrDNfTSlgT%2FScI%2B8o%2B%2FdO99F3UseC837uWA6FzfrNhxdRNqhBN%2F8ekBTW7IyPRD6ho5phfE8MTaev4ltQrJygJTDbjXfX5KLJOuY8siH%2FDrc4gctZsMsNaf2%2FYp%2FaDzBzjfxJge8i8he69t0uZ39FBXrMxCeMVd6lU8%2FbgMuO80rTHjgI%2BlC8g2%2FWiHyq5rSTDLIxxGWRCddMfPcaivdWVdMubMa0wOt9W9R2mfjuTAgUBexUkJwhvrkdof%2Bg00gU1g4dIBWlUSO5D9tdrv9bmIy7FceopNufrpwnD1NXU8Narsx2yEQ6aA%3D%3D&response-content-disposition=attachment%3B+filename%3D%22bulk-206005076024.jsonl%22%3B+filename%2A%3DUTF-8%27%27bulk-206005076024.jsonl&response-content-type=application%2Fjsonl",
      "partialDataUrl": null
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 1,
      "actualQueryCost": 1
    }
  }
}
```

**In API versions prior to `2026-01` (using the deprecated [`currentBulkOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/currentBulkOperation) query):**

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
 currentBulkOperation(type: MUTATION) {
    id
    status
    errorCode
    createdAt
    completedAt
    objectCount
    fileSize
    url
    partialDataUrl
 }
}
```

***

### Retrieve the results

When a bulk mutation operation is finished, you can download a result data file.

If an operation successfully completes, then the `url` field contains a URL where you can download the data file. If an operation fails, but some data was retrieved before the failure occurred, then a partially complete data file is available at the URL specified in the `partialDataUrl` field.

In either case, the returned URLs are authenticated and expire after one week.

After you've downloaded the data, you can parse it according to the JSONL format. Since both input and response files are in JSONL, each line in the final asset file represents the response of running the mutation on the corresponding line in the input file.

#### Operation success

The following example shows the response for a product that was successfully created:

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### JSON response

```json
{"data":{"productCreate":{"product":{"id":"gid:\/\/shopify\/Product\/5602345320504","title":"Monday morning snowboard 1","variants":{"edges":[{"node":{"id":"gid:\/\/shopify\/ProductVariant\/35645836853304","title":"First","inventoryQuantity":0}},{"node":{"id":"gid:\/\/shopify\/ProductVariant\/35645836886072","title":"Second","inventoryQuantity":0}}]}},"userErrors":[]}},"__lineNumber":0}
```

#### Operation failures

Bulk operations provide detailed per-line error handling. Each mutation in your JSONL file is validated and executed independently, with errors reported in the output file alongside successful results.

##### Error handling behavior

Errors are handled at the line level and reported in the output file:

* **JSON parse errors**: Invalid JSON format in a JSONL line appears as an error for that specific line in the output.
* **Validation errors**: GraphQL query validation failures, such as invalid fields or missing required arguments, display as errors for the affected line.
* **Execution errors**: Mutation failures during execution, such as business logic errors or permission issues, display in the output with detailed error messages.
* **Access denied errors**: Missing access scopes are reported for each line in the output file with details about which fields caused the issue.

The bulk operation only fails entirely (with `status: FAILED`) for critical system errors:

* `INTERNAL_SERVER_ERROR`: Something went wrong on Shopify's server and we've been notified of the error. These errors might be intermittent, so you can try making your request again.

To learn about the other possible operation error codes, refer to the [`BulkOperationErrorCode`](https://shopify.dev/docs/api/admin-graphql/2026-01/enums/BulkOperationErrorCode) reference documentation.

##### Best practices

* Review the output JSONL file to identify which specific mutations failed and why.
* Each error includes the line number from your input file, making it easy to identify failing mutations.
* Test individual mutations first to validate your access scopes and mutation structure before running bulk operations.

**Note:**

When using the `bulk_operations/finish` webhook, the `error_code` and `status` fields in the webhook payload will be lowercase. For example, `failed` instead of `FAILED`.

##### Error examples in output files

When a mutation fails, the error appears in the output JSONL file for that specific line. Here are common error formats:

###### Validation error

If the input has the correct format, but one or more values failed validation, then the line in the output file looks like the following:

```json
{"data"=>{"productCreate"=>{"userErrors"=>[{"message"=>"Some error message", "field"=>["some field"]}]}}}
```

###### Unrecognizable field error

If the input has an unrecognizable field, then the line in the output file looks like the following:

```json
{"errors"=>[{"message"=>"Variable input of type ProductInput! was provided invalid value for myfavoriteaddress (Field is not defined on ProductInput)", "locations"=>[{"line"=>1, "column"=>13}], "extensions"=>{"value"=>{"myfavoriteaddress"=>"test1"}, "problems"=>[{"path"=>["myfavoriteaddress"], "explanation"=>"Field is not defined on ProductInput"}]}}]}
```

**Note:**

This check is executed by comparing the input against the [`productInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/productinput) object, which is specified as part of the mutation argument.

***

### Manage concurrent operations

In API versions `2026-01` and higher, you can run up to 5 bulk mutation operations concurrently per shop. This enables you to import multiple datasets simultaneously without waiting for each operation to complete.

#### Run concurrent operations

To start a new bulk operation while others are running, call [`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunMutation) again with a different staged upload URL and mutation:

### POST https://{shop}.myshopify.com/admin/api/2026-01/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationRunMutation(
    mutation: "mutation call($input: ProductInput!) { productCreate(input: $input) { product { id } userErrors { message field } } }",
    stagedUploadPath: "tmp/uploads/another-bulk-op.jsonl"
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

Each operation runs independently and returns its own ID. You can track each operation separately using [`bulkOperation(id:)`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperation) or view all operations together using the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query.

#### View all running operations

Use the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query to see all your bulk operations, including those currently running:

### POST https://{shop}.myshopify.com/admin/api/2026-01/graphql.json

### GraphQL query

```graphql
query {
  bulkOperations(first: 10, query: "status:RUNNING type:MUTATION") {
    edges {
      node {
        id
        status
        createdAt
        objectCount
      }
    }
  }
}
```

This query returns all currently running bulk mutation operations, allowing you to monitor progress across multiple concurrent operations.

For complete details on filtering and pagination, refer to the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query reference.

***

### Cancel an operation

To cancel an in-progress bulk operation, run the [`bulkOperationCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationcancel) mutation and supply the operation ID as an input variable:

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

### GraphQL query

```graphql
mutation {
  bulkOperationCancel(id: "gid://shopify/BulkOperation/1") {
    bulkOperation {
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "bulkOperationCancel": {
      "id": "gid://shopify/BulkOperation/1",
      "bulkOperation": {
        "status": "COMPLETED"
      }
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 1,
      "actualQueryCost": 1
    }
  }
}
```

***

### Using Shopify CLI to run bulk mutations

You can use the [`shopify app bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute) command to explore bulk mutations or automate data imports.

### Terminal

```bash
cat <<EOF > products.jsonl
{ "input": { "title": "Sweet new snowboard 1", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 2", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 3", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 4", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 5", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 6", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 7", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 8", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 9", "productType": "Snowboard", "vendor": "JadedPixel" } }
{ "input": { "title": "Sweet new snowboard 10", "productType": "Snowboard", "vendor": "JadedPixel" } }
EOF
shopify app bulk execute --watch --variable-file products.jsonl --query \
  'mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
        title
        variants(first: 10) {
          edges {
            node {
              id
              title
              inventoryQuantity
            }
          }
        }
      }
      userErrors {
        message
        field
      }
    }
  }'
```

Use [`shopify app bulk status`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status) to check the status of your bulk operations, and [`shopify app bulk cancel`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel) to cancel a running operation.

For more information on using Shopify CLI to execute GraphQL, see [GraphQL Admin API in Shopify CLI](https://shopify.dev/docs/api/usage/api-exploration/admin-cli-app-execute).

***

### Next steps

* Consult our [reference documentation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to learn more about creating and managing bulk operations.
* Learn how to use bulk operations to [asynchronously fetch data in bulk](https://shopify.dev/docs/api/usage/bulk-operations/queries).

***

---



<a id="bulk-operations-queries"></a>


## Perform bulk operations with the GraphQL Admin API

With the GraphQL Admin API, you can use bulk operations to asynchronously fetch data in bulk. The API is designed to reduce complexity when dealing with pagination of large volumes of data. You can bulk query any connection field that's defined by the GraphQL Admin API schema.

Instead of manually paginating results and managing a client-side throttle, you can instead run a bulk query operation. Shopify's infrastructure does the hard work of executing your query, and then provides you with a URL where you can download all of the data.

The GraphQL Admin API supports querying a single top-level field, and then selecting the fields that you want returned. You can also nest connections, such as variants on products.

In API versions `2026-01` and higher apps can run up to five bulk query operations at a time per shop. In API versions prior to `2026-01`, apps are limited to running a single bulk operation at a time per shop. When the operation is complete, the results are delivered in the form of a [JSONL file](http://jsonlines.org/) that Shopify makes available at a URL.

***

### Limitations

* In API versions `2026-01` and higher, you can run up to five bulk query operations at a time per shop. In API versions prior to `2026-01`, you can run only one bulk operation of each type ([`bulkOperationRunMutation`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunmutation) or [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkoperationrunquery)) at a time per shop.
* The bulk query operation has to complete within 10 days. After that it will be stopped and marked as `failed`. When your query runs into this limit, consider reducing the query complexity and depth.
* Bulk operations are only available through the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). You can't perform bulk operations with the Storefront API.

***

### Admin UI extensions

If you're using admin UI extensions, [Direct API access](https://shopify.dev/docs/api/admin-extensions#direct-api-access) doesn't support bulk operations. Instead, [connect your extension to your app backend](https://shopify.dev/docs/apps/build/admin/actions-blocks/connect-app-backend) to initiate and manage bulk operations.

***

### Bulk query overview

The complete flow for running bulk queries is covered [later](#bulk-query-workflow), but below are some small code snippets that you can use to get started quickly.

#### Step 1.​Submit a query

Run a [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) mutation and specify what information you want from Shopify.

The following mutation queries the `products` connection and returns each product's ID and title.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
mutation {
  bulkOperationRunQuery(
   query: """
    {
      products {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    """
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "bulkOperationRunQuery": {
      "bulkOperation": {
        "id": "gid:\/\/shopify\/BulkOperation\/720918",
        "status": "CREATED"
      },
      "userErrors": []
    }
  },
...
}
```

#### Step 2.​Wait for the operation to finish

To retrieve data, you need to wait for the operation to finish. You can determine when a bulk operation has finished by using a webhook or by polling the operation's status.

**Tip:**

Subscribing to the webhook topic is recommended over polling as it limits the number of redundant API calls.

##### Option A. Subscribe to the `bulk_operations/finish` webhook topic

You can use the [webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate) mutation to subscribe to the `bulk_operations/finish` webhook topic in order to receive a webhook when any operation finishes - in other words, it has completed, failed, or been cancelled.

For full setup instructions, refer to [Configuring webhooks](https://shopify.dev/docs/apps/build/webhooks/subscribe).

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  webhookSubscriptionCreate(
    topic: BULK_OPERATIONS_FINISH
    webhookSubscription: {
      format: JSON,
      uri: "https://12345.ngrok.io/"}
  ) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "webhookSubscriptionCreate": {
      "userErrors": [],
      "webhookSubscription": {
        "id": "gid://shopify/WebhookSubscription/4567"
      }
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 10,
      "actualQueryCost": 10,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 990,
        "restoreRate": 50
      }
    }
  }
}
```

After you've subscribed to the webhook topic, Shopify sends a POST request to the specified URL any time a bulk operation on the store (both queries and [mutations](https://shopify.dev/docs/api/usage/bulk-operations/imports)) finishes.

**Example webhook response**

```json
{
  "admin_graphql_api_id": "gid://shopify/BulkOperation/720918",
  "completed_at": "2024-08-29T17:23:25Z",
  "created_at": "2024-08-29T17:16:35Z",
  "error_code": null,
  "status": "completed",
  "type": "query"
}
```

You now must retrieve the bulk operation's data URL by using the `node` field and passing the `admin_graphql_api_id` value from the webhook payload as its `id`:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  node(id: "gid://shopify/BulkOperation/720918") {
    ... on BulkOperation {
      url
      partialDataUrl
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "node": {
      "url": "https:\/\/storage.googleapis.com\/shopify\/dyfkl3g72empyyoenvmtidlm9o4g?<params />",
      "partialDataUrl": null
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 1,
      "actualQueryCost": 1,
      "throttleStatus": {
        "maximumAvailable": 1000,
        "currentlyAvailable": 999,
        "restoreRate": 50
      }
    }
  }
}
```

For more information on how webhooks work, refer to [Webhooks](https://shopify.dev/docs/apps/build/webhooks).

**Note:**

Webhook delivery isn't always guaranteed, so you might still need to poll for the operation's status to check when it's finished.

##### Option B.​Poll your operation's status

While the operation is running, you can poll to see its progress by querying the specific bulk operation using its ID (returned from the `bulkOperationRunQuery` mutation). In API version `2026-01` and higher, use the `bulkOperation(id:)` query. In API versions prior to `2026-01`, use the `currentBulkOperation` query. The `objectCount` field increments to indicate the operation's progress, and the `status` field returns whether the operation is completed.

**API version `2026-01` and higher:**

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  bulkOperation(id: "gid://shopify/BulkOperation/720918") {
    id
    status
    errorCode
    createdAt
    completedAt
    objectCount
    fileSize
    url
    partialDataUrl
  }
}
```

### JSON response

```json
{
  "data": {
    "bulkOperation": {
      "id": "gid:\/\/shopify\/BulkOperation\/720918",
      "status": "COMPLETED",
      "errorCode": null,
      "createdAt": "2024-08-29T17:16:35Z",
      "completedAt": "2024-08-29T17:23:25Z",
      "objectCount": "57",
      "fileSize": "358",
      "url": "https:\/\/storage.googleapis.com\/shopify\/dyfkl3g72empyyoenvmtidlm9o4g?<params />",
      "partialDataUrl": null
    }
  },
  ...
}
```

**API versions prior to `2026-01` (using deprecated `currentBulkOperation`):**

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  currentBulkOperation {
    id
    status
    errorCode
    createdAt
    completedAt
    objectCount
    fileSize
    url
    partialDataUrl
  }
}
```

#### Step 3.​Retrieve your data

When an operation is completed, a JSONL output file is available for download at the URL specified in the `url` field. If the query produced no results, then the `url` field will return `null`.

See [Download result data](#download-result-data) for more details on the files we return and [JSONL file format](#the-jsonl-data-format) for how to parse them.

***

### Bulk query workflow

Below is the high-level workflow for creating a bulk query:

1. [Identify a potential bulk operation](#identify-a-potential-bulk-query).

   You can use a new or existing query, but it should potentially return a lot of data. Connection-based queries work best.

2. Test the query by using the [Shopify GraphiQL app](https://shopify-graphiql-app.shopifycloud.com).

3. [Write a new mutation document](#write-a-bulk-operation) for `bulkOperationRunQuery`.

4. Include the query as the value for the `query` argument in the mutation.

5. Run the mutation.

6. [Wait for the bulk operation to finish](#wait-for-the-bulk-operation-to-finish) by either:

   1. [Subscribing to a webhook topic](#option-a-use-the-bulk_operations-finish-webhook-topic) that sends a webhook payload when the operation is finished.
   2. [Polling the bulk operation](#option-b-poll-a-running-bulk-operation) until the `status` field shows that the operation is no longer running.

   You can [check the operation's progress](#check-an-operations-progress) using the `objectCount` field in `bulkOperation(id:)` (API version `2026-01` and higher) or `currentBulkOperation` (API versions prior to `2026-01`).

7. Download the JSONL file at the URL provided in the `url` field.

#### Identify a potential bulk query

Identify a new or existing query that could return a lot of data and would benefit from being a bulk operation. Queries that use pagination to get all pages of results are the most common candidates.

The example query below retrieves some basic information from a store's first 50 products that were created on or after January 1, 2024.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  products(query: "created_at:>=2024-01-01 AND created_at:<2024-05-01", first: 50) {
    edges {
      cursor
      node {
        id
        createdAt
        updatedAt
        title
        handle
        descriptionHtml
        productType
        options {
          name
          position
          values
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
```

**Tip:**

Use the [Shopify GraphiQL app](https://shopify-graphiql-app.shopifycloud.com) to run this query against your development store. The query used in a bulk operation requires the same permissions as it would when run as a normal query, so it's important to run the query first and ensure it succeeds without any access denied errors.

#### Write a bulk operation

To turn the query above into a bulk query, use the [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) mutation. It's easiest to begin with a skeleton mutation without the `query` value:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationRunQuery(
    query:"""
    """
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

* The triple quotes (""") define a multi-line string in GraphQL.
* The bulk operation's ID is returned so you can poll the operation.
* The `userErrors` field is returned to retrieve any error messages.

Paste the original sample query into the mutation, and then make a couple of minor optional changes:

* The `first` argument is optional and ignored if present, so it can be removed.
* The `cursor` and `pageInfo` fields are also optional and ignored if present, so they can be removed.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationRunQuery(
    query:"""
    {
      products(query: "created_at:>=2024-01-01 AND created_at:<2024-05-01") {
        edges {
          node {
            id
            createdAt
            updatedAt
            title
            handle
            descriptionHtml
            productType
            options {
              name
              position
              values
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
              maxVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    """
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

If the mutation is successful, then the response looks similar to the example below:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### JSON response

```json
{
  "data": {
    "bulkOperationRunQuery": {
      "bulkOperation": {
        "id": "gid:\/\/shopify\/BulkOperation\/1",
        "status": "CREATED"
      },
      "userErrors": []
    }
  },
  ...
}
```

#### Wait for the bulk operation to finish

To retrieve data, you need to wait for the operation to finish. You can determine when a bulk operation has finished by using a webhook or by polling the operation's status.

##### Option A. Use the `bulk_operations/finish` webhook topic

Use the [webhookSubscriptionCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhooksubscriptioncreate) mutation to subscribe to the [`bulk_operations/finish`](https://shopify.dev/docs/api/admin-graphql/latest/enums/webhooksubscriptiontopic) webhook topic. For full setup instructions, refer to [Configuring webhooks](https://shopify.dev/docs/apps/build/webhooks/subscribe).

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  webhookSubscriptionCreate(
    topic: BULK_OPERATIONS_FINISH
    webhookSubscription: {
      format: JSON,
      uri: "https://12345.ngrok.io/"}
  ) {
    userErrors {
      field
      message
    }
    webhookSubscription {
      id
    }
  }
}
```

After you've subscribed, you'll receive a webhook any time a bulk operation on the store (both queries and [mutations](https://shopify.dev/docs/api/usage/bulk-operations/imports)) finishes (for example, completes, fails, or is cancelled). Refer to the [GraphQL Admin API reference](https://shopify.dev/docs/api/webhooks?reference=graphql) for details on the webhook payload.

Once you receive the webhook, you must retrieve the bulk operation's data URL by querying the `node` field and passing in the ID given by `admin_graphql_api_id` in the webhook payload:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  node(id: "gid://shopify/BulkOperation/1") {
    ... on BulkOperation {
      url
      partialDataUrl
    }
  }
}
```

##### Option B.​Poll a running bulk operation

You can also determine when the bulk operation has finished by querying the specific bulk operation by ID using the `bulkOperation` field:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  bulkOperation(id: "gid://shopify/BulkOperation/1") {
    id
    status
    errorCode
    createdAt
    completedAt
    objectCount
    fileSize
    url
    partialDataUrl
  }
}
```

You can adjust your polling intervals based on the amount of data that you expect. For example, if you're currently making pagination queries manually and it takes one hour to fetch all product data, then that can serve as a rough estimate for the bulk operation time. In this situation, a polling interval of one minute would probably be better than every 10 seconds.

To learn about the other possible operation statuses, refer to the [`BulkOperationStatus` reference](https://shopify.dev/docs/api/admin-graphql/latest/enums/bulkoperationstatus).

#### Check an operation's progress

Although polling is useful for checking whether an operation is complete, you can also use it to check the operation's progress by using the `objectCount` field. This field provides you with a running total of all the objects processed by your bulk operation. You can use the object count to validate your assumptions about how much data should be returned.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  bulkOperation(id: "gid://shopify/BulkOperation/1") {
    status
    objectCount
    url
  }
}
```

For example, if you're trying to query all products created in a single month and the object count exceeds your expected number, then it might be a sign that your query conditions are wrong. In that case, you might want to [cancel](#canceling-an-operation) your current operation and run a new one with a different query.

***

### Download result data

Only once an operation is finished running will there be result data available.

If an operation successfully completes, the `url` field will contain a URL where you can download the data. If an operation fails but some data was retrieved before the failure occurred, then a partially complete output file is available at the URL specified in the `partialDataUrl` field. In either case, the URLs return will be signed (authenticated) and will expire after one week.

Now that you've downloaded the data, it's time to parse it according to the JSONL format.

***

### The JSONL data format

Normal (non-bulk) GraphQL responses are JSON. The response structure mirrors the query structure, which results in a single JSON object with many nested objects. Most standard JSON parsers require the entire string or file to be read into memory, which can cause issues when the responses are large.

Since bulk operations are specifically designed to fetch large datasets, we've chosen the [JSON Lines](http://jsonlines.org/) (JSONL) format for the response data so that clients have more flexibility in how they consume the data. JSONL is similar to JSON, but each line is its own valid JSON object. To avoid issues with memory consumption, the file can be parsed one line at a time by using file streaming functionality, which most languages have.

Each line in the file is a node object returned in a connection. If a node has a nested connection, then each child node is extracted into its own object on the next line. For example, a bulk operation might use the following query to retrieve a list of products and their nested variants:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  products {
    edges {
      node {
        id
        variants {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  }
}
```

In the JSONL results, each product object is followed by each of its variant objects on a new line. The order of each connection type is preserved and all nested connections appear after their parents in the file. Because connections are no longer nested in the response data structure, the bulk operation result automatically includes the `__parentId` field, which is a reference to an object's parent. This field doesn't exist in the API schema, so you can't explicitly query it.

```json
{"id":"gid://shopify/Product/1921569226808"}
{"id":"gid://shopify/ProductVariant/19435458986123","title":"52","__parentId":"gid://shopify/Product/1921569226808"}
{"id":"gid://shopify/ProductVariant/19435458986040","title":"70","__parentId":"gid://shopify/Product/1921569226808"}
{"id":"gid://shopify/Product/1921569259576"}
{"id":"gid://shopify/ProductVariant/19435459018808","title":"34","__parentId":"gid://shopify/Product/1921569259576"}
{"id":"gid://shopify/Product/1921569292344"}
{"id":"gid://shopify/ProductVariant/19435459051576","title":"Default Title","__parentId":"gid://shopify/Product/1921569292344"}
{"id":"gid://shopify/Product/1921569325112"}
{"id":"gid://shopify/ProductVariant/19435459084344","title":"36","__parentId":"gid://shopify/Product/1921569325112"}
{"id":"gid://shopify/Product/1921569357880"}
{"id":"gid://shopify/ProductVariant/19435459117112","title":"47","__parentId":"gid://shopify/Product/1921569357880"}
```

#### Example

Most programming languages have the ability to read a file one line at a time to avoid reading the entire file into memory. This feature should be taken advantage of when dealing with the JSONL data files.

Here's a simple example in Ruby to demonstrate the proper way of loading and parsing a JSONL file:

```ruby
# Efficient: reads the file a single line at a time
File.open(file) do |f|
  f.each do |line|
    JSON.parse(line)
  end
end


# Inefficient: reads the entire file into memory


jsonl = File.read(file)


jsonl.each_line do |line|
  JSON.parse(line)
end
```

To demonstrate the difference using a 100MB JSONL file, the "good" version would consume only 2.5MB of memory while the "bad" version would consume 100MB (equal to the file size).

Other languages:

* NodeJS: [`readline`](https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line)
* Python: [built-in iterator](https://docs.python.org/3/tutorial/inputoutput.html#methods-of-file-objects)
* PHP: [`fgets`](https://www.php.net/manual/en/function.fgets.php)

***

### Operation failures

Bulk operations can fail for any of the reasons that a regular GraphQL query would fail, such as not having permission to query a field. For this reason, we encourage you to run the query normally first to make sure that it works. You'll get much better error feedback than when a query fails within a bulk operation.

When a bulk operation fails, [some data might be available to download](#download-result-data), the `status` field returns `FAILED`, and the `errorCode` field includes one of the following codes:

* `ACCESS_DENIED`: there are missing access scopes. Run the query normally (outside of a bulk operation) to get more details on which field is causing the issue.
* `INTERNAL_SERVER_ERROR`: something went wrong on our server and we've been notified of the error. These errors might be intermittent, so you can try [submitting the query again](#step-1-submit-a-query).
* `TIMEOUT`: one or more query timeouts occurred during execution. Try removing some fields from your query so that it can run successfully. These timeouts might be intermittent, so you can try [submitting the query again](#step-1-submit-a-query).

**Tip:**

Querying resources using a [range search](https://shopify.dev/docs/api/usage/search-syntax#search-query-syntax) might timeout or return an error if the collection of resources is sufficiently large, and the search field is different from the specified (or default) sort key for the connection you are querying. If your query is slow or returns an error, then try specifying a sort key that matches the field used in the search. For example, `query: "created_at:>2024-05-01", sortKey: CREATED_AT`.

To learn about the other possible operation error codes, refer to the [`BulkOperationErrorCode`](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationErrorCode) reference.

#### Canceled operations

If bulk operations have stalled, then they might be canceled by Shopify. After bulk operations are canceled, a `status` of `CANCELED` is returned. You can retry canceled bulk operations by [submitting the query again](#step-1-submit-a-query).

**Note:**

When using the `bulk_operations/finish` webhook, the `error_code` and `status` fields in the webhook payload will be lowercase. For example, `failed` instead of `FAILED`.

***

### Canceling an operation

To cancel an in-progress bulk operation, use the [`bulkOperationCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationCancel) mutation with the operation ID.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationCancel(id: "gid://shopify/BulkOperation/1") {
    bulkOperation {
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

***

### Rate limits

You can run only one bulk operation of each type (`bulkOperationRunMutation` or `bulkOperationRunQuery`) at a time per shop. This limit is in place because operations are asynchronous and long-running. To run a subsequent bulk operation for a shop, you need to either cancel the running operation or wait for it to finish.

#### How bulk operations fit within the Admin API rate limits

Bulk operations are initiated by you, the API consumer, by supplying a `query` string within the `bulkOperationRunQuery` mutation. Shopify then executes that `query` string asynchronously as a bulk operation.

This distinction between the `bulkOperationRunQuery` mutation and the bulk query string itself determines how rate limits apply as well: any GraphQL requests made by you count as normal API requests and are subject to [rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits#graphql-admin-api-rate-limits), while the bulk operation query execution is not.

In the following example, you would be charged the cost of the mutation request (as with any other mutation), but not for the `query` for product titles that you want Shopify to run as a bulk operation:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
mutation {
  bulkOperationRunQuery(
   query: """
    {
      products {
        edges {
          node {
            title
          }
        }
      }
    }
    """
  ) {
    bulkOperation {
      id
    }
  }
}
```

Since you're only making low-cost requests for creating operations, polling their status, or canceling them, bulk operations are a very efficient way to query data compared to standard pagination queries.

#### Manage concurrent operations

In API versions `2026-01` and higher, you can run up to five bulk query operations concurrently per shop. This enables you to process multiple large datasets simultaneously without waiting for each operation to complete.

##### Run concurrent operations

To start a new bulk operation while others are running, call [`bulkOperationRunQuery`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/bulkOperationRunQuery) again with a different query:

### POST https://{shop}.myshopify.com/api/2026-01/graphql.json

### GraphQL mutation

```graphql
mutation {
  bulkOperationRunQuery(
    query: """
    {
      products {
        edges {
          node {
            id
            title
            variants {
              edges {
                node {
                  id
                  sku
                }
              }
            }
          }
        }
      }
    }
    """
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

Each operation runs independently and returns its own ID. You can track each operation separately using [`bulkOperation(id:)`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperation) or view all operations together using the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query.

##### View all running operations

Use the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query to see all your bulk operations, including those currently running:

### POST https://{shop}.myshopify.com/api/2026-01/graphql.json

### GraphQL query

```graphql
query {
  bulkOperations(first: 10, query: "status:RUNNING type:QUERY") {
    edges {
      node {
        id
        status
        createdAt
        objectCount
      }
    }
  }
}
```

This query returns all currently running bulk query operations, allowing you to monitor progress across multiple concurrent operations.

#### Listing and filtering bulk operations

In API version `2026-01` and higher, you can use the `bulkOperations` query to list, filter, and paginate your bulk operations. This replaces the deprecated `currentBulkOperation` query.

The new query provides:

* **Filtering** by status (completed, running, failed, etc.) and operation type (query or mutation)
* **Sorting** by creation date, completion date, status, or ID
* **Pagination** with cursor-based navigation
* **Direct lookup** of specific operations by ID using `bulkOperation(id:)`

For complete details, refer to the [`bulkOperations`](https://shopify.dev/docs/api/admin-graphql/2026-01/queries/bulkOperations) query reference.

***

### Operation restrictions

A bulk operation query needs to include a connection. If your query doesn't use a connection, then it should be executed as a normal synchronous GraphQL query.

Bulk operations have some additional restrictions:

* Maximum of five total connections in the query.
* Connections must implement the [`Node`](https://shopify.dev/docs/api/storefront/latest/interfaces/Node) interface
* The top-level `node` and `nodes` fields can't be used.
* Maximum of two levels deep for nested connections. For example, the following is invalid because there are three levels of nested connections:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
      products {
        edges {
          node {
            id
            variants { # nested level 1
              edges {
                node {
                  id
                  images { # nested level 2
                    edges {
                      node {
                        id
                        metafields { # nested level 3 (invalid)
                          edges {
                            node {
                              value
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
```

The `bulkOperationRunQuery` mutation will validate the supplied queries and provide errors by using the `userErrors` field.

It's hard to provide exhaustive examples of what's allowed and what isn't given the flexibility of GraphQL queries, so try some and see what works and what doesn't. If you find useful queries which aren't yet supported, then let us know on the [.dev Community](https://community.shopify.dev/) so we can collect common use cases.

***

### Using Shopify CLI to run bulk queries

You can use the [`shopify app bulk execute`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-execute) command to explore bulk queries or automate data exports.

### Terminal

```bash
shopify app bulk execute --watch --query '{
  products {
    edges {
      node {
        id
        title
        variants {
          edges {
            node {
              id
              sku
              price
            }
          }
        }
      }
    }
  }
}'
```

Use [`shopify app bulk status`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-status) to check the status of your bulk operations, and [`shopify app bulk cancel`](https://shopify.dev/docs/api/shopify-cli/app/app-bulk-cancel) to cancel a running operation.

For more information on using Shopify CLI to execute GraphQL, see [GraphQL Admin API in Shopify CLI](https://shopify.dev/docs/api/usage/api-exploration/admin-cli-app-execute).

***

### Next steps

* Consult our [reference documentation](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation) to learn more about creating and managing bulk operations.
* Learn how [bulk import large volumes of data asynchronously](https://shopify.dev/docs/api/usage/bulk-operations/imports).

***

---



<a id="gids"></a>


## Global IDs in Shopify APIs

Shopify's GraphQL APIs use global IDs to refer to objects. A global ID is an application-wide uniform resource identifier (URI) that uniquely identifies an object. You can use a global ID to retrieve a specific Shopify object of any type.

***

### How it works

To enable GraphQL clients to neatly handle caching and data refetching, GraphQL servers expose object identifiers in a standardized way using the [Relay specification](https://relay.dev/graphql/objectidentification.htm).

Relay asks for a compliant server to expose a standard mechanism for fetching any object given an ID. These objects are referred as `nodes` and they implement the [`Node` interface](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface). Shopify's GraphQL APIs provide a [versionable](https://shopify.dev/docs/api/usage/versioning) implementation of this interface.

#### Global ID structure

Shopify uses [GlobalID](https://github.com/rails/globalid) to encode global IDs. By default, when implementing a `Node` interface, a type's `id` field constructs a global ID with the following structure:

### Global ID structure

```text
gid://shopify/{object_name}/{id}
```

For example, a [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object with the ID `123` would resolve to the following global ID:

### Global ID of a Product object

```text
gid://shopify/Product/123
```

#### Parameterized global IDs

Some objects are more complex and have global IDs that contain parameters. A global ID with parameters has the following structure:

### Parameterized global ID structure

```text
gid://shopify/{child_object_name}/{child_object_id}?{parent_object_name}_id={parent_object_id}
```

For example, the [`InventoryLevel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) object is associated with the [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) object. If the `InventoryLevel` object's ID is `123` and the `InventoryItem` object's ID is `456`, then the global ID would resolve to the following structure:

### Parameterized global ID for InventoryLevel object

```text
gid://shopify/InventoryLevel/123?inventory_item_id=456
```

***

### Global ID examples

The following table provides some common examples of global IDs that are associated with different GraphQL objects. For example purposes, each global ID is referenced as `123`.

| GraphQL object | Example global ID | Description |
| - | - | - |
| `Article` | `gid://shopify/Article/123` | A globally unique identifier of an article. |
| `Blog` | `gid://shopify/Blog/123` | A globally unique identifier of a blog. |
| `Collection` | `gid://shopify/Collection/123` | A globally unique identifier of a collection. |
| `Customer` | `gid://shopify/Customer/123` | A globally unique identifier of a customer. |
| `DeliveryCarrierService` | `gid://shopify/DeliveryCarrierService/123` | A globally unique identifier of a delivery carrier service. |
| `DeliveryLocationGroup` | `gid://shopify/DeliveryLocationGroup/123` | A globally unique identifier of a delivery location group. |
| `DeliveryProfile` | `gid://shopify/DeliveryProfile/123` | A globally unique identifier of a delivery profile, an object that enables shops to create shipping rates for each product variant and location. |
| `DeliveryZone` | `gid://shopify/DeliveryZone/123` | A globally unique identifier of a delivery zone. |
| `DraftOrder` | `gid://shopify/DraftOrder/123` | A globally unique identifier of a draft order. |
| `DraftOrderLineItem` | `gid://shopify/DraftOrderLineItem/123` | A globally unique identifier of a line item in a draft order. |
| `Duty` | `gid://shopify/Duty/123` | A globally unique identifier of duties on an order. |
| `EmailTemplate` | `gid://shopify/EmailTemplate/123` | A globally unique identifier of an email notification template that's associated with a Shopify store. |
| `Fulfillment` | `gid://shopify/Fulfillment/123` | A globally unique identifier of a fulfillment. |
| `FulfillmentEvent` | `gid://shopify/FulfillmentEvent/123` | A globally unique identifier of a fulfillment event. |
| `FulfillmentService` | `gid://shopify/FulfillmentService/123` | A globally unique identifier of a fulfillment service. |
| `InventoryItem` | `gid://shopify/InventoryItem/123` | A globally unique identifier of an inventory item, an object that represents a physical good. |
| `InventoryLevel` | `gid://shopify/InventoryLevel/123?inventory_item_id=456` | A globally unique identifier of an inventory level, an object that represents the quantities of an inventory item for a location. |
| `LineItem` | `gid://shopify/LineItem/123` | A globally unique identifier of a line item. |
| `Location` | `gid://shopify/Location/123` | A globally unique identifier of a location, an object that represents a geographical location where your stores, pop-up stores, headquarters, and warehouses exist. |
| `MarketingEvent` | `gid://shopify/MarketingEvent/123` | A globally unique identifer of a marketing event, an object that represents actions taken by your app, on behalf of the app user, to market products, collections, discounts, pages, blog posts, and other features. |
| `MediaImage` | `gid://shopify/MediaImage/123` | A globally unique identifier of a Shopify-hosted image. |
| `Metafield` | `gid://shopify/Metafield/123` | A globally unique identifier of a metafield, an object that provides a flexible way to attach additional information to a Shopify object. |
| `Order` | `gid://shopify/Order/123` | A globally unique identifier of an order. |
| `OrderTransaction` | `gid://shopify/OrderTransaction/123` | A globally unique identifier of an order transaction. |
| `Page` | `gid://shopify/Page/123` | A globally unique identifier of a page. |
| `PointOfSaleDevice` | `gid://shopify/PointOfSaleDevice/123` | A globally unique identifier of a Point of Sale Device. |
| `Product` | `gid://shopify/Product/123` | A globally unique identifier of a product. |
| `ProductImage` | `gid://shopify/ProductImage/123` | A globally unique identifier of a product image. |
| `ProductVariant` | `gid://shopify/ProductVariant/123` | A globally unique identifier of a product variant. |
| `Refund` | `gid://shopify/Refund/123` | A globally unique identifier of a refund. |
| `Shop` | `gid://shopify/Shop/123` | A globally unique identifier of a Shopify store. |
| `StaffMember` | `gid://shopify/StaffMember/123` | A globally unique identifier of a staff member in a Shopify store. |
| `Theme` | `gid://shopify/Theme/123` | A globally unique identifier of a Shopify theme. |

***

### Querying global IDs

A `node` is an object that has a global ID and is of a type that's defined by the schema. Connections retrieve a list of nodes. For example, the `products` connection finds all the `Product` type nodes connected to the query root.

The following example shows how to use the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) to query the global IDs of the first 5 products in your store:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  products(first:5) {
    edges {
      node {
        id
      }
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Product/1"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/2"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/3"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/4"
          }
        },
        {
          "node": {
            "id": "gid://shopify/Product/5"
          }
        }
      ]
    }
  }
}
```

#### Retrieving global IDs through the UI

Some global IDs can be quickly retrieved through the user interface (UI). For example, you can find a product's global ID from your Shopify admin by clicking **Products** and clicking a specific product. The URL of the page contains the product's global ID:

### Page URL containing the global ID of a product

```text
https://admin.shopify.com/store/{shop}/products/{id}
```

***

### Using global IDs in mutations

Many mutations in Shopify's GraphQL APIs require an `id` input field. The value of the `id` field needs to be constructed as a global ID.

The following example shows how to use an `id` input field to update a product's status:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
mutation {
  productUpdate(input: {id: "gid://shopify/Product/3", title: "Burton Custom Freestyle 151", status: "ARCHIVED"} ) {
    product {
      id
      status
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "productUpdate": {
      "product": {
        "id": "gid://shopify/Product/3",
        "status": "ARCHIVED"
      }
    }
  }
}
```

***

### Finding equivalent IDs between REST and Graph​QL

Most REST Admin API resources include an `admin_graphql_api_id` property, which provides a global ID for the equivalent object in the GraphQL Admin API. For example, the following two properties on the [`Customer`](https://shopify.dev/docs/api/admin-rest/latest/resources/customer) resource are equivalent:

### Customer resource

```json
{
  "id": 123456789, // A simple ID for a Customer resource in the REST Admin API
  "admin_graphql_api_id": "gid://shopify/Customer/123456789" // A global ID for the equivalent Customer object in the GraphQL Admin API
}
```

Similarly, most GraphQL Admin API objects include a `legacyResourceId` field, which provides a simple ID for the equivalent resource in the REST Admin API. For example, the following two fields on the [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-product-legacyresourceid) object are equivalent:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
{
  products(first:5) {
    edges {
      node {
        id # A global ID for the Product object in the GraphQL Admin API
        legacyResourceId  # A simple ID for the equivalent Product resource in the REST Admin API
      }
    }
  }
}
```

### JSON response

```json
{
	"data": {
		"products": {
			"edges": [
				{
					"node": {
						"id": "gid://shopify/Product/4353554645014",
						"legacyResourceId": "4353554645014"
					}
				},
				{
					"node": {
						"id": "gid://shopify/Product/4353554710550",
						"legacyResourceId": "4353554710550"
					}
				},
				{
					"node": {
						"id": "gid://shopify/Product/4358159007766",
						"legacyResourceId": "4358159007766"
					}
				},
				{
					"node": {
						"id": "gid://shopify/Product/5591484858390",
						"legacyResourceId": "5591484858390"
					}
				},
				{
					"node": {
						"id": "gid://shopify/Product/5591485448214",
						"legacyResourceId": "5591485448214"
					}
				}
			]
		}
	}
}
```

***

---



<a id="graphql-basics"></a>


## About GraphQL

**Note:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

GraphQL has become Shopify's technology of choice for building APIs. If you're used to working with REST APIs, then GraphQL might seem confusing at first. When you begin using GraphQL, you need to change how you think about retrieving and working with data. The following guides introduce you to GraphQL concepts and help you begin experimenting with GraphQL.

***

### What is Graph​QL?

GraphQL is a query language and a runtime system. Clients form requests by using the GraphQL query language, and the GraphQL server executes the request and returns the data in a response. The following are GraphQL request types:

* [**Queries**](https://shopify.dev/docs/apps/build/graphql/basics/queries): Requests to retrieve data, similar to a `GET` request in REST
* [**Mutations**](https://shopify.dev/docs/apps/build/graphql/basics/mutations): Requests to create and modify data, similar to a `PUT`, `POST`, or `DELETE` request in REST

Unlike REST APIs, which have different endpoints for each resource, a GraphQL API has a single endpoint for all available data. Clients specify the data they need, for both read and write operations, and the server responds with only that data.

GraphQL request structures resemble JSON. However, GraphQL requests don't use quotes for field names and don't have colons separating field names and values. Responses are in JSON format.

The following is a simple GraphQL query and the JSON response:

### POST /admin/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  product(id: "gid://shopify/Product/10079785100") {
    title
    handle
    createdAt
  }
}
```

### JSON response

```json
{
  "data": {
    "product": {
      "title": "The T-Shirt",
      "handle": "the-t-shirt",
      "createdAt": "2024-01-27T19:24:10Z"
    }
  }
}
```

In the JSON response, the structure within the top-level data object mirrors the structure of the corresponding GraphQL request.

#### Additional types

In addition to queries and mutations, the GraphQL type system includes the following types:

| Type | Description |
| - | - |
| Scalar | Primitive data types such as strings, Booleans, and integers. Can also represent unstructured data like a JSON blob. These are the basic building blocks of the GraphQL schema.GraphQL has the following built-in scalar types:- **Int**: A signed 32-bit integer
- **Float**: A signed double-precision floating-point value
- **String**: A UTF-8 character sequence
- **Boolean**: A `true` or `false` Boolean value
- **ID**: A unique identifier, which is often used either to refetch an object or as the key for a cache. The value isn't intended to be human-readable. |
| Enum | A scalar that's restricted to a set of allowed values.Enums enable you to validate that arguments of this type are one of the allowed values, and communicate through the type system that a field will always be one of a finite set of values. |
| Object | A fundamental unit that represents a structured set of data. Object types are collections of readable fields, where each field represents a type in the GraphQL type system and defines the kind of data that you can fetch.Object types are the most common units in a GraphQL schema, and they enable data to be modeled in a structural and relational way. |
| Input object | Similar to an object type, but used as input arguments in queries and mutations.Input objects enable you to pass complex, structured data to mutations.The key difference between input object and object types is that input objects are for inputs, or arguments to queries and mutations, and objects are for outputs, or data that you can fetch. |
| Interface | An abstract type that defines a specific set of fields that any object implementing the interface must contain.This mechanism ensures that different object types implementing the same interface share common fields, and promotes consistency across the objects. |
| Union | A type that can return one of several specific object types that are defined in the schema.Unlike interfaces, unions don't enforce common fields between these object types. The object type that's returned in a specific case is determined at runtime. This is useful when a field could return different object types, and these types don't necessarily share any fields.Refer to an example of the [`discount` union.](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNode#examples-Retrieve_a_discount_by_its_ID) |
| List | An array of another GraphQL type, for example an array of scalars or objects. |

***

### Benefits of Graph​QL over REST

Shopify's REST and GraphQL APIs have some similarities. For example, they're versioned, require authentication and explicit access scopes, and enforce rate limits. However, there are several benefits to using GraphQL over REST, summarized in the following table:

| GraphQL | REST |
| - | - |
| **Work with multiple resources in a single query or mutation**Use GraphQL features like connections, variables, fragments, and aliases for efficient queries and fetch data from multiple types in one request. | **Work with one resource at a time**REST APIs are designed to return a single resource type per endpoint. Fetching associated data often requires multiple calls or chained requests. |
| **Request only the data that you need**Reduce payload size, improve performance, and reduce over-fetching by requesting the exact data that you need. | **Limited resource filtering**Filter top-level resource properties using the `fields` parameter. However, filtering isn't available for properties of child resources. |
| **Strongly typed and part of a schema**GraphQL is strongly typed, which provides for safer data handling through validation and autocompletion.Everything that's available through a GraphQL API is included in its schema. | **Weakly typed and lacking machine-readable data**REST data is weakly typed and has fewer validation guardrails. This can lead to errors or unpredictable results due to incorrect data formatting. |
| **Shopify knows what data an app is using**Shopify knows which fields each app is using, which makes it easier for us to evolve our APIs over time and focus on resources that the community uses.We can easily mark a part of our schema as deprecated, which is reflected in documentation. | **Shopify doesn't know what data an app is using**When an app requests a REST endpoint, Shopify has no way of knowing if it's actually using every piece of data that's returned. It's similar to doing a `SELECT *` to a SQL database.When Shopify needs to make breaking changes, such as removing an attribute from a response, we can't know which developers the change directly affects. This means that we need to notify all developers who use an endpoint, which creates noise for those who aren't affected. |
| **Documentation is a first-class citizen**The documentation for a GraphQL API lives side-by-side with the code that constitutes it. Using GraphQL's introspection feature, you can query the schema to explore its contents and documentation. | **Documentation is secondary**Most REST APIs lack embedded metadata. Apps are dependent on external documentation that can become out of sync with the API. |

#### Example

In GraphQL, you can get information about related objects with a single request to a single endpoint, and scope your request down to only the fields that you need.

For example, in the case of an order, you might want to know the total price, the customer's name, metafields, and the title of other variants belonging to the product in the order.

Using REST, you need to make a request to the following endpoints and filter out unnecessary data:

* `/orders/{order_id}.json`
* `/products/{product_id}/variants.json`
* `/customers/{customer_id}/metafields.json`

Using GraphQL, you can make a single request using connections to get the desired data:

### Example

### Endpoint

```text
POST https://{shop}.myshopify.com/admin/api/{api_version}/graphql.json
```

### GraphQL query

```graphql
query {
  order(id:"gid://shopify/Order/5369369690390") {
    id
    totalPriceSet{
      shopMoney {
        amount
      }
    }
    customer {
      displayName
      metafields (first:10) {
        edges {
          node {
            key
            value
          }
        }
      }
    }
    lineItems (first:10) {
      edges {
        node {
          variant {
            product {
              variants(first:10) {
                edges {
                  node {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "order": {
      "id": "gid://shopify/Order/5369369690390",
      "totalPriceSet": {
        "shopMoney": {
          "amount": "2099.85"
        }
      },
      "customer": {
        "displayName": "Ayumu Hirano",
        "metafields": {
          "edges": [
            {
              "node": {
                "key": "birth_date",
                "value": "1990-02-22"
              }
            }
          ]
        }
      },
      "lineItems": {
        "edges": [
          {
            "node": {
              "variant": {
                "product": {
                  "variants": {
                    "edges": [
                      {
                        "node": {
                          "title": "Ice"
                        }
                      },
                      {
                        "node": {
                          "title": "Dawn"
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        ]
      }
    }
  }
}
```

***

### Graph​QL concepts

Refer to the following guides to learn the fundamentals of GraphQL:

[Queries\
\
](https://shopify.dev/docs/apps/build/graphql/basics/queries)

[Retrieve data from Shopify using queries.](https://shopify.dev/docs/apps/build/graphql/basics/queries)

[Mutations\
\
](https://shopify.dev/docs/apps/build/graphql/basics/mutations)

[Create and modify Shopify data using mutations.](https://shopify.dev/docs/apps/build/graphql/basics/mutations)

[Variables\
\
](https://shopify.dev/docs/apps/build/graphql/basics/variables)

[Write reusable requests using variables.](https://shopify.dev/docs/apps/build/graphql/basics/variables)

[Advanced concepts\
\
](https://shopify.dev/docs/api/usage/graphql-basics/advanced)

[Supercharge your requests using inline fragments, and learn how to build requests that contain multiple queries.](https://shopify.dev/docs/api/usage/graphql-basics/advanced)

[Optimized requests\
\
](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#optimizing-your-requests)

[Review some tips for refining requests to optimize performance and lower query costs.](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#optimizing-your-requests)

#### Additional guides

Refer to the following guides to learn more about how GraphQL APIs work at Shopify:

[Pagination\
\
](https://shopify.dev/docs/api/usage/pagination-graphql)

[Retrieve consecutive pages of resources using cursor-based pagination.](https://shopify.dev/docs/api/usage/pagination-graphql)

[Global IDs\
\
](https://shopify.dev/docs/api/usage/gids)

[Learn about the identifiers that Shopify uses for objects in GraphQL.](https://shopify.dev/docs/api/usage/gids)

[Bulk operations\
\
](https://shopify.dev/docs/api/usage/bulk-operations)

[Read and write high volumes of data and avoid throttling using asynchronous operations.](https://shopify.dev/docs/api/usage/bulk-operations)

[Rate limits\
\
](https://shopify.dev/docs/api/usage/limits#rate-limits)

[Learn about the rate limits for each API.](https://shopify.dev/docs/api/usage/limits#rate-limits)

[Error handling\
\
](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#understanding-error-handling)

[Learn about detecting and recovering from errors in GraphQL.](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#understanding-error-handling)

***

### Tools and resources

Explore the following developer tools and resources to learn more about Shopify GraphQL APIs. For a complete list of APIs, and for information about the libraries that you can use to interact with them, explore our [API documentation](https://shopify.dev/docs/api).

[.dev Assistant\
\
](https://shopify.dev/docs/apps/build/graphql?assistant=1)

[Generate GraphQL operations, convert REST requests to GraphQL operations, and get interactive help with Shopify's AI-powered assistant.\
\
Trained on Shopify data for high accuracy.](https://shopify.dev/docs/apps/build/graphql?assistant=1)

[Shopify Dev Assistant VS Code Extension\
\
](https://github.com/Shopify/vscode-shopify-dev-assistant)

[Access AI-powered Shopify development help directly within Visual Studio Code, with automatic GraphQL query execution and GraphiQL integration.\
\
Seamlessly integrates with your local development workflow. Trained on Shopify data for high accuracy.](https://github.com/Shopify/vscode-shopify-dev-assistant)

[GraphQL Admin API reference\
\
](https://shopify.dev/docs/api/admin-graphql)

[Consult the complete reference to Shopify’s GraphQL Admin API.](https://shopify.dev/docs/api/admin-graphql)

[Shopify Admin API GraphiQL explorer\
\
](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer)

[Browse Shopify’s GraphQL Admin API schema and documentation.](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer)

[GraphQL Storefront API reference\
\
](https://shopify.dev/docs/api/storefront)

[Consult the complete reference to Shopify’s GraphQL Storefront API.](https://shopify.dev/docs/api/storefront)

[Shopify Storefront API GraphiQL explorer\
\
](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration/graphiql-storefront-api)

[Browse Shopify’s Storefront API schema and documentation.](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration/graphiql-storefront-api)

[Shopify GraphiQL app\
\
](https://shopify-graphiql-app.shopifycloud.com/)

[Explore your store's data, and test queries and mutations, using the GraphQL Admin and Storefront APIs.](https://shopify-graphiql-app.shopifycloud.com/)

***

---



<a id="graphql-basics-advanced"></a>


## Advanced concepts

**Note:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

Learn how to optimize your GraphQL implementation further by using inline fragments and building multi-query requests.

***

### Inline fragments

Inline fragments enhance query flexibility and reusability by enabling type-specific transformations and conditional inclusion of fields. Inline fragments use the `... on <TYPE>` syntax.

For example, you can use the [`node`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot#field-queryroot-node) field on the GraphQL Admin API [`QueryRoot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot) object to request specific objects by their ID. The object is returned as a generic `node` object, which doesn't let you request any information other than the ID.

If you use an inline fragment, then you can ask for more specific data to return when the node is of a specific type. This is especially useful on nodes that don't have an easy access point through the `QueryRoot` object, such as a single [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/lineitem) object.

You can specify multiple inline fragments, which enables you to build conditionals in your request that enable you to request different return fields based on the node type. This is useful for selections that can return many different types of fields, such as the [`nodes`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot#field-queryroot-nodes) connection on the GraphQL Admin API's `QueryRoot` object, which accepts an array of IDs and can return any number of different node types.

#### Example

The following example uses all the concepts covered so far to find where a line item is stocked so that it can be fulfilled from that location. The query uses the [`node`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot#field-queryroot-node) field on the [`QueryRoot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot) object and provides the line item's ID.

**Tip:**

You can obtain a line item ID by querying the [`orders`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot#connection-queryroot-orders) connection on the `QueryRoot` and using the [`lineItem`](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection) connection to return a list of line item IDs.

### POST /admin/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query getLineItemLocationId($id: ID!) {
  node(id: $id) {
    ... on LineItem {
      id
      variant {
        inventoryItem {
          inventoryLevels(first: 1) {
            nodes {
              location {
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
```

### Variables

```json
{
  "id": "gid://shopify/LineItem/3111147110422"
}
```

### JSON response

```json
{
  "data": {
    "node": {
      "id": "gid://shopify/LineItem/3111147110422",
      "variant": {
        "inventoryItem": {
          "inventoryLevels": {
            "nodes": [
              {
                "location": {
                  "id": "gid://shopify/Location/6884556842",
                  "name": "151 O'Connor St"
                }
              }
            ]
          }
        }
      }
    }
  },
  ...
}
```

***

### Make multiple queries in one request

You can submit multiple queries or mutations in a single GraphQL request. This enables you to query the same field or run the name mutation multiple times with different arguments.

**Note:**

Submitting multiple queries or mutations in a single request doesn't provide rate-limiting benefits, because the operation complexities are additive.

The syntax for submitting multiple queries has the following key elements:

* At the beginning of the request, declare whether the operations are queries or mutations
* Give each operation a custom alias with `<your-custom-name>: <query field or mutation name> (<arguments>)`
* The operations don't have to be the same
* Each operation must select the fields that it wants to return

***

### Example

The following example uses multiple [`customerUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerUpdate) mutations to set three different tags on three different customers in a single request:

### POST /admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  VipGold: customerUpdate(
    input: {
      id: "gid://shopify/Customer/1322001989654",
      tags: ["Gold"]
    }
  )
  {
    customer {
      tags
    }
  }
  VipPlatinum: customerUpdate(
    input: {
      id: "gid://shopify/Customer/774173917206",
      tags: ["Platinum"]
    }
  )
  {
    customer {
      tags
    }
  }
  VipDiamond: customerUpdate(
    input: {
      id: "gid://shopify/Customer/773091000342",
      tags: ["Diamond"]
    }
  )
  {
    customer {
      tags
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "VipGold": {
      "customer": {
        "tags": [
          "Gold"
        ]
      }
    },
    "VipPlatinum": {
      "customer": {
        "tags": [
          "Platinum"
        ]
      }
    },
    "VipDiamond": {
      "customer": {
        "tags": [
          "Diamond"
        ]
      }
    }
  },
  ...
}
```

***

### Next steps

* Learn more ways to [optimize your requests](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#optimizing-your-requests).
* Explore [additional guides](https://shopify.dev/docs/apps/build/graphql#additional-guides) to learn more about GraphQL at Shopify.

***

---



<a id="graphql-basics-mutations"></a>


## GraphQL mutations

**Note:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

GraphQL mutations create and modify objects, similar to a `PUT`, `POST`, or `DELETE` request in REST. However, unlike REST, GraphQL mutations are sent to a single endpoint and use the `POST` HTTP method.

For a full list of available mutations, refer to the relevant API's reference.

***

### Mutation structure

GraphQL mutations have the following structure:

* The `mutation` operation name. This is the keyword that starts a mutation operation in a GraphQL request.
* The mutation field name, such as [`customerCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate). This is the specific mutation to perform, as defined in the GraphQL schema.
* The input data to use in the mutation, such as the information for a new customer. This is the data that the mutation needs to perform its operation. It's passed as an argument to the mutation field.
* A selection of return fields that should be included in the response, such as the ID of a successfully created [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) object. These are the pieces of data that you want the mutation to return. In GraphQL, you specify exactly what data you want returned.

#### Example

### Mutation structure

```graphql
mutation {
  mutationName(arg: "Data") {
    return fields
  }
}
```

### Mutation structure with data

```graphql
mutation {
  customerCreate(input: { firstName: "Ayumu", lastName: "Hirano", email: "ayumu@example.com" }) {
    customer {
      id
    }
  }
}
```

***

### Input objects

Mutations require input data, such as the data to create a new object, or the ID of an object to delete. For mutations that might require a substantial data object, the schema provides a dedicated input object type.

For example, the [`customerCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate) mutation requires an `input` argument, which accepts a [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/customerinput) input object. The `CustomerInput` type defines all the fields that can be used to create or modify a customer.

#### Example

### Mutation input

```graphql
mutation {
  customerCreate(
    input: {
      firstName: "Ayumu",
      lastName: "Hirano",
      email: "ayumu@example.com"
    }
  )
  {
    ...
  }
}
```

***

### Return fields

Each mutation provides a set of fields that can be returned in the response. For example, one of the return fields that's available for the [`customerCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerCreate) mutation is the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) object that was created by a successful mutation. Like GraphQL [queries](https://shopify.dev/docs/apps/build/graphql/basics/queries), you can select the fields on the new object that you want to include in the response.

Each mutation can also return the `userErrors` field. The `userErrors` field returns information about errors when a mutation fails. You should include the `userErrors` field with each mutation to make it easier to troubleshoot failed mutations. Learn more about [error handling in GraphQL](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#understanding-error-handling).

#### Example

### Mutation return fields

```graphql
mutation {
  customerCreate(
    input: {
      ...
    }
  )
  {
    customer {
      id
      displayName
    }
    userErrors {
      field
      message
    }
  }
}
```

***

### Example: Create a customer

The following mutation uses input objects and return fields to create a new customer and return their `id` and `displayName`:

### POST /admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation {
  customerCreate(
    input: {
      firstName: "Ayumu",
      lastName: "Hirano",
      email: "ayumu@example.com"
    }
  )
  {
    customer {
      id
      displayName
    }
    userErrors {
      field
      message
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "customerCreate": {
      "customer": {
        "id": "gid:\/\/shopify\/Customer\/1310036885526",
        "displayName": "Ayumu Hirano"
      },
      "userErrors": []
    }
  }
  ...
}
```

***

### Next steps

Learn how to write reusable requests using [variables](https://shopify.dev/docs/apps/build/graphql/basics/variables).

***

---



<a id="graphql-basics-queries"></a>


## GraphQL queries

**Note:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

GraphQL queries retrieve data from a server, similar to a `GET` request for a REST API. However, unlike REST, GraphQL queries are sent to a single endpoint and use the `POST` HTTP method.

A GraphQL API models data as nodes that are connected by edges. A node is an object that has a global ID, such as the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

***

### How to use these examples

If you want to use the examples below on Shopify, you have a few options to perform queries:

##### Use the demo store

Shopify [provides a read-only demo store](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer#execute-queries-on-a-demo-store) which can be used to execute queries without needing to connect to a dev store. You have access to the demo store via a [GraphQL Explorer interface](https://shopify.dev/docs/graphiql/admin-graphiql) where you can execute the queries on the left pane of that view. [Open the Explorer](https://shopify.dev/docs/graphiql/admin-graphiql) in a new tab or window, then paste the example query in the left pane to view the results.

In the code snippets below, take a look at the `Demo store query` tabs for queries you can run.

##### Install the Shopify GraphQL app

Install the [Shopify GraphiQL App](https://shopify-graphiql-app.shopifycloud.com/login) on your store using your Shop URL. During installation, ensure you have the following Admin API scopes selected:

* `all_orders`: `read`
* `customers`: `read`
* `products`: `read`

Install the app.

Run the queries in the `GraphQL app query` tabs below within the embedded GraphQL Explorer (`https://admin.shopify.com/store/{shop}/apps/shopify-graphiql-app`).

##### Local cURLs

You can also send requests from your terminal using cURL. To do so, you need to first generate an access token:

You need to generate an access token to run local requests via cURL.

1. From your store admin, visit **Settings** > **Apps and sales channels** > **Develop apps**.

2. Create and name an app, then click **Create app**.

3. From the **Configuration** tab, click the **Configure** button under **Admin API integration**.

4. Select the required Admin API scopes below, then click **Save**:

   * **Customers:** `read_customers`
   * **Orders:** `read_orders`
   * **Products:** `read_products`

5. From **API Credentials** tab under **Access tokens**, click **Install app** and then **Install**.

6. Click **Reveal token once** to expose the Admin API access token.

7. Copy the token to a local environment variable `SHOP_TOKEN`.

Use the commands in the `cURL with token` tabs in the below examples.

***

### Query​Root

The [`QueryRoot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot) object is the initial entry point for all queries in the GraphQL API. Everything that can be queried is defined as a field or connection on the `QueryRoot` object.

To learn about what data you can query, refer to the `QueryRoot` object in the relevant API's reference.

**Note:**

You don't need to reference the `QueryRoot` object in your query.

#### Example

The following diagram illustrates example relationships between objects that are retrieved in an query:

![The relationships between the objects retrieved in the query.](https://shopify.dev/assets/assets/images/api/usage/graphql-basics/nodes-BMSxYiGC.png)

The query requests the [`Shop`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop) object, data from a few fields, the child [`ShopAddress`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopAddress) object, and the `products` [connection](#connections). The following is the single request structure to retrieve this data. In the response, the structure of the `data` object mirrors the query's shape:

### QueryRoot: POST https://{shop}.myshopify.com/api/2026-04/graphql.json

###### Demo store query

```graphql
query {
  shop {
    id
    name
    email
    billingAddress {
      id
      address1
    }
  }
  products(first:2) {
    nodes {
      id
      title
    }
  }
}
```

###### GraphQL app query

```graphql
query {
  shop {
    id
    name
    email
    billingAddress {
      id
      address1
    }
  }
  products(first:2) {
    nodes {
      id
      title
    }
  }
}
```

###### cURL with token

```bash
SHOP_TOKEN="ACCESS_TOKEN"
SHOP_SUBDOMAIN="shop"

curl -sX POST \
  https://${SHOP_SUBDOMAIN}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H "X-Shopify-Access-Token: ${SHOP_TOKEN}" \
  -d @- <<EOF
{
  "query": "{
    shop {
        id
        name
        email
        billingAddress {
            id
            address1
        }
    }
    products(first:2) {
        nodes {
            id
            title
        }
    }
  }"
}
EOF
```

### Response

JSON

```json
{
  "data": {
    "shop": {
      "id": "gid://shopify/Shop/17681717",
      "name": "example",
      "email": "john@example.com",
      "billingAddress": {
        "id": "gid://shopify/ShopAddress/20516601878",
        "address1": "151 O'Connor St"
      }
    },
    "products": {
      "nodes": [
        {
          "id": "gid://shopify/Product/108828309",
          "title": "Draft"
        },
        {
          "id": "gid://shopify/Product/121709582",
          "title": "Boots"
        }
      ]
    }
  }
}
```

***

### Fields

A field is unit of data associated with an object or type. For example, in the GraphQL Admin API's [`QueryRoot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot) object, the [`customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/queryroot#field-queryroot-customer) field queries a single customer, and returns a [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) object.

An argument is a set of key-value pairs attached to a field, providing a parameterized input to the field that influences the returned data or an operation's behavior. For example, the `customer` field requires the `id` argument, which specifies the customer to query. After selecting the `customer` field and providing an ID, you list the fields on the `Customer` object that you want to return.

To learn about what data you can query, refer the object's fields in the relevant API's reference.

#### Example

The following query retrieves a specific customer, and selects a few fields from the [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) object:

### Fields: POST https://{shop}.myshopify.com/api/2026-04/graphql.json

###### Demo store query

```graphql
query {
  customer(id: "gid://shopify/Customer/6581271756") {
    displayName
    phone
  }
}
```

###### GraphQL app query

```graphql
query {
  customer(id: "gid://shopify/Customer/6581271756") {
    displayName
    phone
  }
}
```

###### cURL with token

```bash
SHOP_TOKEN="ACCESS_TOKEN"
SHOP_SUBDOMAIN="shop"

curl -sX POST \
  https://${SHOP_SUBDOMAIN}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H "X-Shopify-Access-Token: ${SHOP_TOKEN}" \
  -d @- <<EOF
{
  "query": "{
    customer(id: \"gid://shopify/Customer/6581271756\") {
        displayName
        phone
    }
  }"
}
EOF
```

### Response

JSON

```json
{
  "data": {
    "customer": {
      "displayName": "Beatrice Alighieri",
      "phone": "+12345678912"
    }
  }
}
```

**Tip:**

On many endpoints, the REST Admin API returns the `admin_graphql_api_id` property, which you can use to query that specific object in the GraphQL Admin API. [Learn more](https://shopify.dev/docs/apps/build/graphql/migrate/learn-how#translating-ids-from-rest-to-graphql).

***

### Connections

Connections in GraphQL represent relationships between associated types. Nodes are elements within connections. You can traverse connections to perform nested queries, retrieving data from multiple nodes in a single GraphQL query. If you're selecting something with a pluralized name, then you're likely using a connection.

When you select a connection, you must pass a `first` or `last` argument to limit the number of nodes that are returned. This is a key component to manage [rate-limiting](https://shopify.dev/docs/api/usage/limits#rate-limits) and [pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

You can access the nodes in a connection in the following ways:

* **`edges`**: `customers { edges { node { ... } } }`
* **`nodes`**: `customers { nodes { ... } }`

**Tip:**

`nodes` is shorthand for `edges { node ...` and is appropriate for most queries. To retrieve information that's specific to the connection between a node and its parent, you might want to use `edges`. [Learn more](https://shopify.dev/docs/api/usage/pagination-graphql#connection-edges).

Regardless of the syntax that you use, the return is an array of objects of the same type. For example, when you query a product's variants, an array of `Variant` objects is returned.

Similar to when you query an individual node, list the fields to return. The response returns that data for those fields for each node in the connection. If a connection contains fewer objects than requested, then the response contains all the data that's available.

If you want to retrieve the next batch of objects, or you need to retrieve more than the maximum number of objects, then you can paginate the objects using [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

#### Example

The following diagram illustrates example relationships between GraphQL types in a connection, including the connection, its constituent edges and nodes, and the associated objects and fields:

![You can query the edges of the product connection to access product objects.](https://shopify.dev/assets/assets/images/api/usage/graphql-basics/connections-CvtuKflp.png)

The example requests the `products` connection, and asks for the first three products. Because the [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object has a [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#connection-product-variants) connection, the same pattern is used to get information on the first three variants for the original products:

##### Using nodes

### Connections using nodes: POST https://{shop}.myshopify.com/api/2026-04/graphql.json

###### Demo store query

```graphql
query {
  products(first:3) {
    nodes {
      id
      handle
      variants(first:3) {
        nodes {
          id
          displayName
        }
      }
    }
  }
}
```

###### GraphQL app query

```graphql
query {
  products(first:3) {
    nodes {
      id
      handle
      variants(first:3) {
        nodes {
          id
          displayName
        }
      }
    }
  }
}
```

###### cURL with token

```bash
SHOP_TOKEN="ACCESS_TOKEN"
SHOP_SUBDOMAIN="shop"

curl -sX POST \
  https://${SHOP_SUBDOMAIN}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H "X-Shopify-Access-Token: ${SHOP_TOKEN}" \
  -d @- <<EOF
{
  "query": "{
    products(first:3) {
        nodes {
          id
          handle
          variants(first:3) {
              nodes {
                id
                displayName
              }
          }
        }
    }
  }"
}
EOF
```

### Response

JSON

```json
{
  "data": {
    "products": {
      "nodes": [
        {
          "id": "gid://shopify/Product/1321540321336",
          "handle": "ocean-blue-shirt",
          "variants": {
            "nodes": [
              {
                "id": "gid://shopify/ProductVariant/12195005104184",
                "displayName": "Ocean Blue Shirt - xs"
              }
            ]
          }
        }
      ]
    }
  }
}
```

##### Using edges

### Connections using edges: POST https://{shop}.myshopify.com/api/2026-04/graphql.json

###### Demo store query

```graphql
query {
  products(first:3) {
    edges {
      node {
        id
        handle
        variants(first:3) {
          edges {
            node {
              id
              displayName
            }
          }
        }
      }
    }
  }
}
```

###### GraphQL app query

```graphql
query {
  products(first:3) {
    edges {
      node {
        id
        handle
        variants(first:3) {
          edges {
            node {
              id
              displayName
            }
          }
        }
      }
    }
  }
}
```

###### cURL with token

```bash
SHOP_TOKEN="ACCESS_TOKEN"
SHOP_SUBDOMAIN="shop"

curl -sX POST \
  https://${SHOP_SUBDOMAIN}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H "X-Shopify-Access-Token: ${SHOP_TOKEN}" \
  -d @- <<EOF
{
  "query": "{
    products(first:3) {
        edges {
          node {
              id
              handle
              variants(first:3) {
                edges {
                    node {
                      id
                      displayName
                    }
                }
              }
          }
        }
    }
  }"
}
EOF
```

### Response

JSON

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Product/1321540321336",
            "handle": "ocean-blue-shirt",
            "variants": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/ProductVariant/12195005104184",
                    "displayName": "Ocean Blue Shirt - xs"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```

In the response, only one set of data is returned because the store only has a single product and variant.

***

### Filtering connections using a search query

You can filter connections with `query` argument, to return only the nodes that match a search query.

To learn which fields you can filter a connection by, refer to the API documentation for the connection's `query` argument. To learn how to format a search query, refer to [Search syntax](https://shopify.dev/docs/api/usage/search-syntax).

The following query retrieves the first two orders that are fulfilled:

### Using query: POST https://{shop}.myshopify.com/api/2026-04/graphql.json

###### Demo store query

```graphql
query {
  orders(first:2, query:"fulfillment_status:shipped") {
    nodes {
      id
      name
      displayFulfillmentStatus
    }
  }
}
```

###### GraphQL app query

```graphql
query {
  orders(first:2, query:"fulfillment_status:shipped") {
    nodes {
      id
      name
      displayFulfillmentStatus
    }
  }
}
```

###### cURL with token

```bash
SHOP_TOKEN="ACCESS_TOKEN"
SHOP_SUBDOMAIN="shop"

curl -sX POST \
  https://${SHOP_SUBDOMAIN}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H "X-Shopify-Access-Token: ${SHOP_TOKEN}" \
  -d @- <<EOF
{
  "query": "{
    orders(first:2, query:\"fulfillment_status:shipped\") {
        nodes {
          id
          name
          displayFulfillmentStatus
        }
    }
  }"
}
```

### Response

JSON

```json
{
  "data": {
    "orders": {
      "nodes": [
        {
          "id": "gid://shopify/Order/410479493176",
          "name": "#1592",
          "displayFulfillmentStatus": "FULFILLED"
        },
        {
          "id": "gid://shopify/Order/410478542904",
          "name": "#1564",
          "displayFulfillmentStatus": "FULFILLED"
        }
      ]
    }
  }
}
```

***

### Next steps

Learn how to create and modify data with [mutations](https://shopify.dev/docs/apps/build/graphql/basics/mutations).

***

---



<a id="graphql-basics-variables"></a>


## GraphQL variables

**Note:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

You can simplify GraphQL queries and mutations by extracting data into separate variables. GraphQL variables let you reuse the same requests with different arguments.

***

### Variable structure

GraphQL requests can be split into query and variable sections.

#### Query section

In the query section, GraphQL variables begin with the `$` symbol and are declared after the `query` or `mutation` keyword, similar to passing an argument to a function.

When you declare a variable, you need to specify its type, such as [`CustomerInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput). This lets GraphQL know that you intend to refer to this type by this variable name later in the actual query.

For example, the following query declares an `$input` variable and passes it to the `input` argument:

### GraphQL mutation with an input variable

```graphql
mutation($input: CustomerInput!) {
  customerCreate(input: $input) { ... }
}
```

#### Variable section

In the variable section, variables are defined as a JSON object.

The following JSON object defines the `$input` variable for the query section:

### Input variables

```json
{
  "input": {
    "firstName": "Ayumu",
    "lastName": "Hirano",
    "email": "ayumu@example.com"
  }
}
```

***

### Simplify the customer creation request

The following example simplifies the [`customerCreate` mutation example](https://shopify.dev/docs/apps/build/graphql/basics/mutations#example-create-a-customer) by using variables, resulting in an abstracted mutation that can be reused to create multiple customers.

### POST /admin/api/{api\_version}/graphql.json

### GraphQL mutation

```graphql
mutation ($input: CustomerInput!) {
  customerCreate(input: $input)
  {
    customer {
      id
      displayName
    }
    userErrors {
      field
      message
    }
  }
}
```

### Input variables

```json
{
  "input": {
    "firstName": "Ayumu",
    "lastName": "Hirano",
    "email": "ayumu@example.com"
  }
}
```

### JSON response

```json
{
  "data": {
    "customerCreate": {
      "customer": {
        "id": "gid://shopify/Customer/1310038130710",
        "displayName": "Ayumu Hirano"
      },
      "userErrors": []
    }
  }
  ...
}
```

***

### Next steps

Learn how to optimize your GraphQL implementation further with [inline fragments and multi-query requests](https://shopify.dev/docs/api/usage/graphql-basics/advanced).

***

---



<a id="idempotent-requests"></a>


## Idempotent requests

Shopify APIs support idempotency, which allows you to safely retry API requests that might have failed due to connection issues, without causing duplication or conflicts.

***

### Idempotency keys

An idempotency key is a unique string identifier generated by your app. Shopify uses this identifier to recognize subsequent duplicate requests.

Requests that process credit card payments, create billing attempts for subscriptions, or capture revenue details accept idempotency keys. Generally, requests that update or delete objects (for example, [`inventoryShipmentUpdateItemQuantities`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryshipmentsettracking)) are idempotent by definition, and don't require you to send an idempotency key as part of the request.

However, some update / delete mutations, such as [`inventoryTransferSetItems`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorytransfersetitems), might not be naturally idempotent, because they might perform non-idempotent operations on the side, in addition to the main operation. These mutations require an idempotency key.

**Tip:**

You can use any unique identifier for your idempotency key, but we recommend using a randomly generated universally unique identifier (UUID) to avoid collisions.

***

### How idempotent requests work

If an API request is disrupted in transit, then you might not receive a response. By including an idempotency key in your request, repeated requests with the same parameters are executed only once, no matter how many times the request is retried.

For example, the [`subscriptionBillingAttemptCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate) mutation supports idempotency. By including an idempotency key in your request, you ensure that repeated requests with the same parameters are executed only once, regardless of how many times the request is retried:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
mutation {
  subscriptionBillingAttemptCreate(input: {
    subscriptionContractId: "gid://shopify/SubscriptionContract/123456789",
    idempotencyKey: "3f5b6ebf-143c-4da5-8d0f-fb8553bfd85d"
  }) {
    subscriptionBillingAttempt {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

***

### Idempotency directives

While some mutations, such as the one shown in the previous example, accept idempotency keys as arguments, others use directives. Directives are just a different GraphQL syntax for passing in idempotency keys to the mutation.

Mutations that accept an `@idempotent` directive specify that they do in their descriptions. Learn more about [implementing idempotency for mutations accepting an `@idempotent` directive](https://shopify.dev/docs/api/usage/implementing-idempotency).

You can also use the `@idempotent` directive with [bulk mutation operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). In that case, you pass the idempotency key as a variable in the JSONL input file alongside the other mutation arguments, and idempotency is applied per row rather than per the entire bulk operation. Learn more about [using idempotency with bulk operations](https://shopify.dev/docs/api/usage/implementing-idempotency#using-idempotency-with-bulk-operations).

Below is an example of a mutation using the directive syntax:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
mutation InventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
  inventoryAdjustQuantities(input: $input) @idempotent(key: "3f5b6ebf-143c-4da5-8d0f-fb8553bfd85d") {
    inventoryAdjustmentGroup {
      id
      changes {
        delta
        name
        __typename
      }
      __typename
    }
    userErrors {
      field
      message
      __typename
    }
    __typename
  }
}
```

***

---



<a id="implementing-idempotency"></a>


## Implementing idempotency

This page provides detailed guidance on implementing idempotency on the client-side when calling certain GraphQL Admin API mutations.

The information on this page, in particular, implementation-specific details such as error codes and the retention window, only applies to mutations that support the `@idempotent` directive, because idempotency was built into these mutations in a similar way. Learn more about [idempotency directive syntax](https://shopify.dev/docs/api/usage/idempotent-requests).

***

### Understanding idempotency

#### Core principles

Understanding these two principles helps you implement idempotency correctly:

**Principle 1: Distinct requests need different idempotency keys**

Each distinct request should have its own unique idempotency key. We **strongly** recommend using UUIDs to ensure uniqueness.

**Principle 2: Duplicate requests must use the same idempotency key**

For the purposes of this documentation, a 'duplicate request' is one that has the same mutation variables and is **not intended to be a separate operation** from the original request. Duplicate requests must reuse the same idempotency key to enable deduplication and concurrency protection.

**What qualifies as a duplicate request:**

* Accidental double-clicks that send additional requests with identical parameters.
* Network retries with the exact same parameters after a timeout or connection failure.
* Job retries that resubmit the same operation after an initial failure.

**What doesn't qualify as a duplicate request:**

A request whose mutation variables are exactly identical to those of the first request isn't a duplicate request if it's *intended to result in a separate operation* being performed. Consider this scenario:

1. The client makes a first request to increment their inventory by +2 due to having received inventory from supplier A.
2. The client makes a second request with identical mutation variables to increment their inventory by +2, due to having received inventory from supplier B.
3. The intent for these two requests is different: they are meant to be performing *separate operations*. Here, the client isn't retrying the first inventory adjustment, they're trying to create a second, entirely new inventory adjustment.
4. The onus is on the client to decide when to use identical or different idempotency keys, because only the client is aware if they're intending to perform a separate operation or not.

**Common mistake:**

Avoid generating a new random UUID every time you call the mutation. This violates Principle 2 and prevents proper idempotency protection, because every request is treated as distinct.

#### How idempotency protection is implemented on the server-side

Shopify tracks idempotency keys for **24 hours** from the original request. During this window, all duplicate requests with the same idempotency key are handled according to the original request's status:

**Concurrent requests**

When multiple duplicate requests arrive in quick succession while the first request is still processing, Shopify returns `IDEMPOTENCY_CONCURRENT_REQUEST` to subsequent requests instead of processing them. This protects against race conditions and duplicate operations.

**Successful request retries**

After the original request completes successfully, any duplicate requests with the same idempotency key receive the cached GraphQL response without reprocessing the operation. This ensures safe retries without duplication.

Note that on rare occasions, the cached GraphQL response may not be the same as the original one, as the cached response is constructed from database records, which may have changed since the original successful response. The below scenario illustrates this:

*Example scenario*:

1. Client A calls the [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation with the idempotency key 'abc'. The location is successfully activated, so in the response, [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate#returns-location.fields.isActive) is `true`.
2. Client B calls the [`locationDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationDeactivate) mutation with the idempotency key 'def'. The same location is successfully deactivated, and the database records are updated accordingly.
3. Client A calls the [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate) mutation with the idempotency key 'abc'. Since the idempotency key is the same, no activation logic will be triggered, and a cached response will be returned instead.
4. Since this cached response is constructed from the current database state, [`isActive`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/locationActivate#returns-location.fields.isActive) will be `false` in the cached response.

**Failed request retries**

When the original request fails to process, duplicate requests might receive either:

* `IDEMPOTENCY_CONCURRENT_REQUEST` if the original request is stalled or still marked as in-progress.
* An error with a suitable message for example, "The refund couldn't be processed."

**24-hour retention window**

After 24 hours, idempotency keys expire and are no longer recognized as duplicates. Thus, retries that occur beyond this window (such as long-delayed job retries), will not have idempotency protection, and will be treated as separate operations.

***

### Best practices for using idempotency keys

Following these best practices ensures reliable, safe retries in your application.

#### Generating idempotency keys

**Use UUIDs (v4 or v7)**: Generate a random universally unique identifier for each unique operation.

```javascript
// Example: JavaScript with crypto.randomUUID()
const idempotencyKey = crypto.randomUUID();
// Result: "3f5b6ebf-143c-4da5-8d0f-fb8553bfd85d"
```

```ruby
# Example: Ruby with SecureRandom
idempotency_key = SecureRandom.uuid
# Result: "3f5b6ebf-143c-4da5-8d0f-fb8553bfd85d"
```

**For deterministic scenarios (background jobs, services)**: Suppose you have a collection of parameters (that is, mutation variables) and stable identifiers (for example, the unique id of a retrying job) which, taken together, uniquely identify distinct requests. In this case, you can use UUID v5 to generate deterministic keys from using those parameters/identifiers as inputs:

```javascript
// Example: Generate deterministic key for a job retry
import { v5 as uuidv5 } from 'uuid';


const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; // Your app namespace
const jobParams = `${jobId}-${JSON.stringify(mutationVariables)}`;
const idempotencyKey = uuidv5(jobParams, namespace);


// Same job + variables always produces the same key
```

This approach ensures duplicate job retries use the same idempotency key while different jobs or parameters produce unique keys.

#### Storing idempotency keys

**Before sending the request**, you should generally persist the idempotency key along with the operation intent. You should come up with the best persistence strategy that aligns with your application's architecture.

**Why persist first**: If your application crashes after sending the request but before recording the key, you risk losing the ability to safely retry or verify the operation succeeded.

**Note:**

If you're generating the idempotency key deterministically, then you don't need to persist the idempotency key—you can just recreate it from the same parameters / stable identifiers if you want to reuse it.

**For web and mobile apps**: You can persist the key by attaching the idempotency key to the page or screen lifecycle:

```javascript
// Example: React component managing idempotency
function InventoryAdjustmentForm() {
  // Generate key on component mount, persists during page lifecycle
  const idempotencyKeyRef = useRef(crypto.randomUUID());


  const handleSubmit = async (formData) => {
    try {
      await adjustInventory(formData, idempotencyKeyRef.current);
      // Success - regenerate key for next submission
      idempotencyKeyRef.current = crypto.randomUUID();
    } catch (error) {
      // Error - keep same key for retry on this page
      handleError(error);
    }
  };


  return <form onSubmit={handleSubmit}>...</form>;
}
```

This pattern ensures that additional requests sent (due to say, double-clicking) before receiving a successful response all use the same idempotency key, allowing the server to deduplicate them. After a successful response, the key regenerates so the next submission is treated as a new operation.

#### When to generate a new key

Generate a **new** idempotency key when:

* Starting a genuinely new operation (different intent).
* Modifying any request parameters from the original.

**Reuse** the same idempotency key when:

* Retrying after a backend processing failure, a network failure or a timeout.
* Retrying after receiving an `IDEMPOTENCY_CONCURRENT_REQUEST` error.
* Resubmitting an operation you're unsure has completed, in order to check on its status

**Tip:**

In practice, what the above guidelines usually translates to is this: "*If you receive a successful response from the backend, generate a new key (so you can use it in subsequent genuinely new operations). If you receive a failed response from the backend, reuse the same key (so you can safely retry)*".

If you are certain you want to retry the request as a **separate operation** following a failed response, and have verified that this won't result in unintended duplicate processing, you may regenerate a new key after a failed response.

***

### Using idempotency with bulk operations

You can use the `@idempotent` directive with [bulk mutation operations](https://shopify.dev/docs/api/usage/bulk-operations/queries). When you do, idempotency is applied per row in your JSONL input file, not per the entire bulk operation. Each row in the JSONL file represents a separate mutation call, and each one needs its own unique idempotency key. Don't use the same key for every row — reusing a single key across rows causes rows after the first to be treated as duplicates.

The same [best practices for idempotency keys](#best-practices-for-using-idempotency-keys) apply to bulk operations. If you retry the bulk operation, reuse the same keys for the same rows. If you use deterministic key generation (UUID v5), you can regenerate identical keys from the same input parameters without persisting them.

To pass the idempotency key, declare it as a variable in the mutation string and provide its value in each line of the JSONL file, alongside the other mutation arguments.

#### Example: Bulk inventory adjustment with idempotency

##### Step 1: Define the mutation string with a variable for the key

When you pass the mutation to `bulkOperationRunMutation`, use a variable for the `@idempotent` directive's `key` argument:

### Mutation string

```graphql
mutation call($input: InventoryAdjustQuantitiesInput!, $idempotencyKey: String!) {
  inventoryAdjustQuantities(input: $input) @idempotent(key: $idempotencyKey) {
    inventoryAdjustmentGroup {
      id
    }
    userErrors {
      field
      message
      code
    }
  }
}
```

##### Step 2: Include the idempotency key in each JSONL row

Each line in the JSONL file provides the `idempotencyKey` variable alongside the `input` variable. Every row must have its own unique key:

### JSONL input file

```json
{ "input": { "reason": "correction", "name": "available", "changes": [{ "delta": 1, "inventoryItemId": "gid://shopify/InventoryItem/1", "locationId": "gid://shopify/Location/1" }] }, "idempotencyKey": "a1b2c3d4-e5f6-7890-abcd-ef1234567890" }
{ "input": { "reason": "correction", "name": "available", "changes": [{ "delta": 5, "inventoryItemId": "gid://shopify/InventoryItem/2", "locationId": "gid://shopify/Location/1" }] }, "idempotencyKey": "b2c3d4e5-f6a7-8901-bcde-f12345678901" }
{ "input": { "reason": "correction", "name": "available", "changes": [{ "delta": -3, "inventoryItemId": "gid://shopify/InventoryItem/3", "locationId": "gid://shopify/Location/2" }] }, "idempotencyKey": "c3d4e5f6-a7b8-9012-cdef-123456789012" }
```

##### Step 3: Run the bulk mutation

### POST https://{shop}.myshopify.com/admin/api/{api\_version}/graphql.json

```graphql
mutation {
  bulkOperationRunMutation(
    mutation: "mutation call($input: InventoryAdjustQuantitiesInput!, $idempotencyKey: String!) { inventoryAdjustQuantities(input: $input) @idempotent(key: $idempotencyKey) { inventoryAdjustmentGroup { id } userErrors { field message code } } }",
    stagedUploadPath: "tmp/21759409/bulk/89e620e1-0252-43b0-8f3b-3b7075ba4a23/bulk_op_vars"
  ) {
    bulkOperation {
      id
      status
    }
    userErrors {
      field
      message
    }
  }
}
```

***

### Understanding idempotency errors

When working with idempotent requests, you might encounter specific error codes that help you understand what went wrong and how to proceed. These errors are typically returned in the `userErrors` array with a `code` field that identifies the specific idempotency issue.

#### IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

**What it means**: You're attempting to reuse an idempotency key with different request parameters than the original request.

**Error response**:

```json
{
  "userErrors": [
    {
      "field": null,
      "message": "The same idempotency key cannot be used with different operation parameters.",
      "code": "IDEMPOTENCY_KEY_PARAMETER_MISMATCH"
    }
  ]
}
```

**What causes this**: Shopify fingerprints each request's parameters. If you retry with the same idempotency key but different inputs (different quantities, different item IDs, and so on), this error occurs. This error indicates incorrect usage of idempotency on the client side- it might be caused by the client incorrectly implementing idempotency, so it's failing to regenerate a unique idempotency key after receiving a successful GraphQL response from the original request.

**How to handle**:

* If you intended for the second request with different parameters to be processed as a *separate operation*, you should generate a new idempotency key for the modified request.
* If you intended for the second request to be a retry of the original request, you should change the parameters back to exactly match what they were originally, and retry the original request with the same idempotency key.

**Note:**

By default, request parameters include all input fields. Usually, changing any value—even a single quantity or ID—requires a new idempotency key.

However, for some mutations, parameters like timestamps may be omitted from the fingerprint, so it's acceptable to reuse the idempotency key even if the timestamp changes. If there are parameters that do not form part of the fingerprinting, these should be mentioned in the mutation description.

Additionally, parameter order can affect fingerprinting. Ensure your client consistently orders input fields to avoid unexpected parameter mismatches.

#### IDEMPOTENCY\_​CONCURRENT\_​REQUEST

**What it means**: Another request with the same idempotency key is currently being processed.

**Error response**:

```json
{
  "userErrors": [
    {
      "field": null,
      "message": "This request is currently in progress, please try again.",
      "code": "IDEMPOTENCY_CONCURRENT_REQUEST"
    }
  ]
}
```

**What causes this**: Your application made multiple simultaneous requests with the same idempotency key before the first request completed.

**How to handle**: Wait briefly (exponential backoff recommended) and retry with the same idempotency key. The original request completes, and subsequent retries receive the cached result.

#### Miscellaneous 'NOT\_​FOUND' errors

Errors in this category are domain-specific 'Not Found' errors such as `LOCATION_NOT_FOUND`, `SHIPMENT_NOT_FOUND` or `PURCHASE_ORDER_NOT_FOUND`.

**What it means**: The business data that was associated with, or created by, your original request has been deleted from the database.

**Error response**:

```json
{
  "userErrors": [
    {
      "field": null,
      "message": "The location couldn't be found",
      "code": "LOCATION_NOT_FOUND"
    }
  ]
}
```

**What causes this**: Receiving this error indicates that the original request was successfully completed, but the backend business data associated with the original request was subsequently deleted by a separate process.

**How to handle**: The client is working with stale data, so they should verify the system state before proceeding. If they are absolutely sure that they want to recreate the deleted record, then they should call the mutation again with a different idempotency key.

**Example scenario**:

1. Shop owner A schedules an inventory adjustment of +50 units on his app using idempotency key `abc-123` because he thinks he'll be receiving new inventory next week.
2. The request completes successfully, creating a scheduled change database record, but Owner A doesn't receive a successful response on his app due to network problems.
3. Soon after, Shop Owner B sees that scheduled change in her app and manually cancels it because she knows the delivery next week is no longer happening due to a product shortage.
4. Then, Shop Owner A retries the request because he didn't get a successful response the first time.
5. Shop Owner A gets the 'Not Found' error.
6. Rather than retrying the request with a different idempotency key, he should investigate the system state—this would lead him to discover that the scheduled change was created, but then manually deleted by Owner B for a valid reason, so he wouldn't retry the request.

***

### List of mutations supporting the `@idempotent` directive

This list was last updated 2 February 2026. To check if a mutation supports the `@idempotent` directive on a given API version, check the mutation descriptions using the following links (or equivalent links, if the mutation you want to check is not in the list). If a mutation supports the directive, this is explicitly mentioned in the description.

1. [`inventoryActivate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryActivate)
2. [`inventoryAdjustQuantities`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryAdjustQuantities)
3. [`inventoryMoveQuantities`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryMoveQuantities)
4. [`inventorySetOnHandQuantities`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventorySetOnHandQuantities)
5. [`inventorySetQuantities`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventorySetQuantities)
6. [`inventorySetScheduledChanges`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventorySetScheduledChanges)
7. [`inventoryShipmentAddItems`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryShipmentAddItems)
8. [`inventoryShipmentCreate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryShipmentCreate)
9. [`inventoryShipmentCreateInTransit`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryShipmentCreateInTransit)
10. [`inventoryShipmentReceive`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryShipmentReceive)
11. [`inventoryTransferCreate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryTransferCreate)
12. [`inventoryTransferCreateAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryTransferCreateAsReadyToShip)
13. [`inventoryTransferDuplicate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryTransferDuplicate)
14. [`inventoryTransferSetItems`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/inventoryTransferSetItems)
15. [`locationActivate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/locationActivate)
16. [`locationDeactivate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/locationDeactivate)
17. [`refundCreate`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/refundCreate)

***

---



<a id="limits"></a>


## Shopify API limits

To ensure our platform remains performant, stable and fair for everyone, some Shopify APIs are limited in accepted inputs or rate-limited. Below you can find more information about those limits.

***

### Input limits

Input arguments that accept an array have a maximum size of 250 for all APIs. Requests return an error if an input array exceeds 250 items.

***

### Pagination limits

Shopify limits pagination of arrays of objects to 25,000 objects. Pagination deep into large arrays is resource intensive and can slow down other requests. To keep all requests performant a limit of 25,000 was put in place that balances performance with practical use-cases.

If you need to paginate more than 25,000 items, you should consider adding filters to help buyers narrow their search to a manageable number of items before paging through all results. [See how you can add filters to your store](https://help.shopify.com/en/manual/online-store/search-and-discovery/filters).

This limit is also enforced on count queries. Counts are accurate up to 25,000 items. For arrays with more items, 25,001 is returned as the count, signaling that there are more than 25,000 items in the array.

***

### Rate Limits

To ensure our platform remains stable and fair for everyone, some Shopify APIs are rate-limited. We use a variety of strategies to enforce rate limits. We ask developers to use [industry standard techniques](#avoiding-rate-limit-errors) for limiting calls, caching results, and re-trying requests responsibly.

#### Compare rate limits by API

Shopify APIs use several different [rate-limiting methods](#rate-limiting-methods). They're described in more detail below, but these are the key figures in brief:

| API | [Rate-limiting method](#rate-limiting-methods) | Standard limit | Advanced Shopify limit | Shopify Plus limit | Shopify for enterprise (Commerce Components) |
| - | - | - | - | - | - |
| [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) | Calculated query cost | 100 points/second | 200 points/second | 1000 points/second | 2000 points/second |
| [Storefront API](https://shopify.dev/docs/api/storefront) | None | None | None | None | None |
| [Payments Apps API](https://shopify.dev/docs/api/payments-apps/) ([GraphQL](https://shopify.dev/docs/api/payments-apps)) | Calculated query cost | 27300 points/second | 27300 points/second | 54600 points/second | 109200 points/second |
| [Customer Account API](https://shopify.dev/docs/api/customer) | Calculated query cost | 100 points/second | 200 points/second | 200 points/second | 400 points/second |

Shopify may temporarily reduce API rate limits to protect platform stability. We will strive to keep these instances brief and rare. However, your application should be built to handle limits gracefully.

#### The leaky bucket algorithm

All Shopify APIs use a [leaky bucket algorithm](https://en.wikipedia.org/wiki/Leaky_bucket) to manage requests. The main points to understand about the leaky bucket metaphor are as follows:

* Each app has access to a bucket. It can hold, say, 60 "marbles".
* Each API request tosses [some number](#rate-limiting-methods) of marbles into the bucket.
* Each second, a marble is removed from the bucket (if there are any). This restores capacity for more marbles.
* If the bucket gets full, you get a throttle error and have to wait for more bucket capacity to become available.

This model ensures that apps that manage API calls responsibly can maintain capacity to make bursts of requests when needed. For example, if you average 20 requests ("marbles") per second but suddenly need to make 30 requests all at once, you can still do so without hitting your rate limit.

The basic principles of the leaky bucket algorithm apply to all our rate limits, regardless of the specific [methods](#rate-limiting-methods) used to apply them.

#### Rate limiting methods

Shopify's GraphQL APIs use a calculated query cost method. The exception is the the Storefront API, which has no rate limits applied on the number of requests. [Learn more](#storefront-api-rate-limits).

Apps can make requests that cost a maximum number of **points** each minute. For example, 1000 points within 60 seconds. More complex requests cost more points, and therefore take up a proportionally larger share of the limit.

#### Graph​QL Admin API rate limits

Calls to the GraphQL Admin API are limited based on [calculated query costs](#rate-limiting-methods), which means you should consider the cost of requests over time, rather than the number of requests.

GraphQL Admin API rate limits are based on the combination of the app and store. This means that calls from one app don't affect the rate limits of another app, even on the same store. Similarly, calls to one store don't affect the rate limits of another store, even from the same app.

Each combination of app and store is given a bucket size and restore rate based on [API and plan tier](#compare-rate-limits-by-api). By making simpler, lower-cost queries, you can maximize your throughput and make more queries over time.

##### Cost calculation

Every field in the schema has an integer cost value assigned to it. The cost of a query is the maximum of possible fields selected. Running a query is the best way to find out its true cost.

By default, a field's cost is based on what the field returns:

| Field returns | Cost value |
| - | - |
| Scalar | 0 |
| Enum | 0 |
| Object | 1 |
| Interface | Maximum of possible selections |
| Union | Maximum of possible selections |
| Connection | Sized by `first` and `last` arguments |
| Mutation | 10 |

Although these default costs are in place, Shopify also reserves the right to set manual costs on fields.

##### Requested and actual cost

Shopify calculates the cost of a query both before and after execution.

* The **requested cost** is based on the composition of fields selected in the request.
* The **actual cost** is based on the query results, and may be lower than requested cost due to the actual objects returned or connections that return fewer edges than requested.

Rate limits use a combination of the requested and actual query cost. Before execution begins, an app's bucket must have enough capacity for the requested cost of a query. When execution is complete, the bucket is refunded the difference between the requested cost and the actual cost of the query.

##### Single query limit

A single query may not exceed a cost of 1,000 points, regardless of plan limits. This limit is enforced before a query is executed based on the query's requested cost.

##### Maximum input array size limit

Input arguments that accept an array have a maximum size of 250. Queries and mutations return an error if an input array exceeds 250 items.

##### Graph​QL response

The response includes information about the cost of the request and the state of the throttle. This data is returned under the `extensions` key:

```text
"extensions": {
  "cost": {
    "requestedQueryCost": 101,
    "actualQueryCost": 46,
    "throttleStatus": {
      "maximumAvailable": 1000,
      "currentlyAvailable": 954,
      "restoreRate": 50
    }
  }
}
```

To get a detailed breakdown of how each field contributes to the requested cost, you can include the header `Shopify-GraphQL-Cost-Debug=1` in your request.

```text
"extensions": {
  "cost": {
    "requestedQueryCost": 101,
    "actualQueryCost": 46,
    "throttleStatus": ...,
    "fields": [
      {
        "path": [
          "shop"
        ],
        "definedCost": 1,
        "requestedTotalCost": 101,
        "requestedChildrenCost": 100
      },
      ...
    ]
  }
}
```

##### Bulk operations

To query and fetch large amounts of data, you should use [bulk operations](https://shopify.dev/docs/api/usage/bulk-operations/queries) instead of single queries. Bulk operations are designed for handling large amounts of data, and they don't have the max cost limits or rate limits that single queries have.

#### Storefront API rate limits

The Storefront API is designed to support businesses of all sizes. The Storefront API will scale to support surges in buyer traffic or your largest flash sale. There are no rate limits applied on the number of requests that can be made to the API.

The Storefront API provides protection against malicious users, such as bots, from consuming a high level of capacity. If a request appears to be malicious, Shopify will respond with a `430 Shopify Security Rejection` [error code](https://shopify.dev/docs/api/usage/response-codes) to indicate potential security concerns. Ensure requests to the Storefront API include the correct [Buyer IP header](https://shopify.dev/docs/api/usage/authentication#making-server-side-requests).

##### Checkout-level throttle

Shopify limits the amount of checkouts that can be created on the Storefront API per minute. If an API client exceeds this throttle, then a `200 Throttled` error response is returned. Shopify recommends designing your app to be resilient to this scenario. For example, you could implement a request queue with an exponential backoff algorithm.

##### Maximum input array size limit

Input arguments that accept an array have a maximum size of 250. Queries and mutations return an error if an input array exceeds 250 items.

#### Resource-based rate limits

The following GraphQL Admin API types have an additional throttle that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new variants can be created per day.

* [productCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productcreate)
* [productUpdate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productupdate)
* [productVariantCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productvariantcreate)

If an app reaches API rate limits for a specific resource, then it receives a `429 Too Many Requests` response, and a message that a throttle has been applied.

In certain cases, Shopify needs to enforce rate limiting in order to prevent abuse of the platform. Therefore, your app should be prepared to handle rate limiting on all endpoints, rather than just those listed here.

**Plus:**

These additional limits don't apply to stores on the [Shopify Plus](https://www.shopify.com/plus) plan.

#### Avoiding rate limit errors

Designing your app with best practices in mind is the best way to avoid throttling errors. For example, you can stagger API requests in a queue and do other processing tasks while waiting for the next queued job to run. Consider the following best practices when designing your app:

* Optimize your code to only get the data that your app requires.
* Use caching for data that your app uses often.
* Regulate the rate of your requests for smoother distribution.
* Include code that catches errors. If you ignore these errors and keep trying to make requests, then your app won't be able to gracefully recover.
* Use metadata about your app's API usage, included with all API responses, to manage your app's behavior dynamically.
* Your code should stop making additional API requests until enough time has passed to retry. The recommended backoff time is one second.

***

---



<a id="pagination-graphql"></a>


## Paginating results with GraphQL

When you use a connection to retrieve a list of resources, you use arguments to specify the number of results to retrieve. You can select which set of results to retrieve from a connection by using cursor-based pagination.

**Note:**

You can retrieve up to a maximum of 250 resources. If you need to paginate larger volumes of data, then you can [perform a bulk query operation](https://shopify.dev/docs/api/usage/bulk-operations/queries) using the GraphQL Admin API.

***

### How it works

Connections retrieve a list of nodes. A node is an object that has a [global ID](https://shopify.dev/docs/api/usage/gids) and is of a type that's defined by the schema, such as the `Order` type. For example, the `orders` connection finds all the `Order` nodes connected to the query root. The `nodes` field is similar to a for-loop because it retrieves the selected fields from each node in the connection.

To optimize performance and user experience, you can request only a certain number of nodes at a time. The batch of nodes that is returned is known as a page. The position of each node in the array is indicated by its cursor.

To retrieve the next page of nodes, you need to indicate the position of the node the page should start from. You can do so by providing a cursor. You can retrieve cursor information about the current page using [the `PageInfo` object](#the-pageinfo-object), and use that cursor value in a subsequent query by passing it in a [`after`](#forward-pagination) or [`before`](#backward-pagination) argument.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  orders(first: 2) {
    nodes {
      id
      name
      createdAt
    }
  }
}
```

### JSON response

```json
{
	"data": {
		"orders": {
			"nodes": [
				{
					"id": "gid://shopify/Order/1",
					"name": "#1001",
					"createdAt": "2022-05-12T19:42:48Z"
				},
				{
					"id": "gid://shopify/Order/2",
					"name": "#1002",
					"createdAt": "2022-05-12T19:45:07Z"
				}
			]
		}
	}
}
```

**Tip:**

You can also retrieve a list of nodes using [edges](#connection-edges).

#### The `PageInfo` object

In the GraphQL Admin API, each connection returns a [`PageInfo`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo) object that assists in cursor-based pagination. The `PageInfo` object is composed of the following fields:

| Field | Type | Description |
| - | - | - |
| `hasPreviousPage` | Boolean | Whether there are results in the connection before the current page. |
| `hasNextPage` | Boolean | Whether there are results in the connection after the current page. |
| `startCursor` | string | The cursor of the first node in the `nodes` list. |
| `endCursor` | string | The cursor of the last node in the `nodes` list. |

**Note:**

The `PageInfo` object in the GraphQL Partner API is only composed of the `hasNextPage` and `hasPreviousPage` fields.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query {
  orders(first: 2) {
    nodes {
      id
      name
      createdAt
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
  }
}
```

### JSON response

```json
{
  "data": {
    "orders": {
      "nodes": [
        {
          "id": "gid://shopify/Order/1",
          "name": "#1001",
          "createdAt": "2022-05-12T19:42:48Z"
        },
        {
          "id": "gid://shopify/Order/2",
          "name": "#1002",
          "createdAt": "2022-05-12T19:45:07Z"
        }
      ]
      "pageInfo": {
        "hasPreviousPage": false,
        "hasNextPage": true,
        "startCursor": "eyJsYXN0X2lkIjoxNDIzOTgwNTI3NjM4LCJsYXN0X3ZhbHVlIjoiMjAyMC0wMS0yMCAxNDo0ODoxMS4wMDAwMDAifQ==",
        "endCursor": "eyJsYXN0X2lkIjoyMzIxMjM5MTQ2NTE4LCJsYXN0X3ZhbHVlIjoiMjAyMC0xMi0xNSAyMzowMDo0NS4wMDAwMDAifQ=="
      }
    }
  }
}
```

***

### Forward pagination

All connections in Shopify's APIs provide forward pagination. This is achieved with the following connection variables:

| Field | Type | Description |
| - | - | - |
| `first` | integer | The requested number of `nodes` for each page. |
| `after` | string | The cursor to retrieve `nodes` after in the connection. Typically, you should pass the `endCursor` of the previous page as `after`. |

#### Examples

You can include the `PageInfo` fields in your queries to paginate your results. The following example includes the `hasNextPage` and `endCursor` fields, and uses query variables to pass the `endCursor` value as an argument:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query ($numProducts: Int!, $cursor: String) {
  # The `$numProducts` variable is required and is used to specify the number of results to return. The `$cursor` variable isn't required. If the `$cursor` variable is omitted, then the `after` argument is ignored.
  products(first: $numProducts, after: $cursor) {
    nodes {
      title
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Variables

```json
{
  "numProducts": 3,
  "cursor": null
}
```

### JSON response

```json
{
  "data": {
    "products": {
      "nodes": [
        {
          "title": "Product 1 title"
        },
        {
          "title": "Product 2 title"
        },
        {
          "title": "Product 3 title"
        }
      ],
      "pageInfo": {
        // The response indicates that there's a next page and provides the cursor to use as an `after` input for the next page of nodes.
        "hasNextPage": true,
        "endCursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MTY0MTUyLCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDE2NDE1MiJ9"
      }
    }
  }
}
```

By using the same query with different variables, you can query for the next page:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query ($numProducts: Int!, $cursor: String){
  products(first: $numProducts, after: $cursor) {
    nodes {
      title
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Variables

```json
{
  "numProducts": 3,
  "cursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MTY0MTUyLCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDE2NDE1MiJ9"
}
```

### JSON response

```json
{
  "data": {
    "products": {
      "nodes": [
        {
          "title": "Product 4 title"
        }
      ],
      "pageInfo": {
        // The response indicates that there's no next page. This is the last page of the connection.
        "hasNextPage": false,
        "endCursor": "eyJsYXN0X2lkIjo3MjE0Njc0MjgwNTA0LCJsYXN0X3ZhbHVlIjoiNzIxNDY3NDI4MDUwNCJ9"
      }
    }
  }
}
```

***

### Backward pagination

Some connections in Shopify's APIs also provide backward pagination. This is achieved with the following connection variables:

| Field | Type | Description |
| - | - | - |
| `last` | integer | The requested number of `nodes` for each page. |
| `before` | string | The cursor to retrieve `nodes` before in the connection. Typically, you should pass the `startCursor` of the previous page as `before`. |

#### Examples

Similar to forward pagination, you can start at the end of the list of nodes, and then query in reverse page order to the beginning. The following example includes the `hasPreviousPage` and `startCursor` fields, and uses query variables to pass the `startCursor` value as an argument:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query ($numProducts: Int!, $cursor: String){
  products(last: $numProducts, before: $cursor) {
    nodes {
      title
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
```

### Variables

```json
{
  "numProducts": 3,
  "cursor": null
}
```

### JSON response

```json
{
  "data": {
    "products": {
      "nodes": [
        {
          "title": "Product 2 title"
        },
        {
          "title": "Product 3 title"
        },
        {
          "title": "Product 4 title"
        }
      ],
      "pageInfo": {
        "hasPreviousPage": true,
        "startCursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MDk4NjE2LCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDA5ODYxNiJ9"
      }
    }
  }
}
```

The `startCursor` field can also be used in the subsequent request as the input `before` to get the previous page:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query ($numProducts: Int!, $cursor: String){
  products(last: $numProducts, before: $cursor) {
    nodes {
      title
    }
    pageInfo {
      hasPreviousPage
      startCursor
    }
  }
}
```

### Variables

```json
{
  "numProducts": 3,
  "cursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MDk4NjE2LCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDA5ODYxNiJ9"
}
```

### JSON response

```json
{
  "data": {
    "products": {
      "nodes": [
        {
          "title": "Product 1 title"
        }
      ],
      "pageInfo": {
        "hasPreviousPage": false,
        "startCursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MDY1ODQ4LCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDA2NTg0OCJ9"
      }
    }
  }
}
```

***

### Connection edges

In connections, an `Edge` type describes the connection between the node and its parent. In almost all cases, querying `nodes` and `pageInfo` is preferred to querying `edges`. However, if you want the `Edge` metadata, then you can query `edges` instead of `nodes`. Each `Edge` contains a minimum of that edge's cursor and the node.

#### Example

The following query is equivalent to the [forward pagination query](https://shopify.dev/docs/api/usage/pagination-graphql#forward-pagination). However, it requests a cursor for every edge instead of only the `endCursor`:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

### GraphQL query

```graphql
query ($numProducts: Int!, $cursor: String){
  products(first: $numProducts, after: $cursor) {
    edges {
      cursor
      node {
        title
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Variables

```json
{
  "numProducts": 3,
  "cursor": null
}
```

### JSON response

```json
// The PageInfo `endCursor` and the last edge's `cursor` are the same. Also, the `edges[].node` list is the equivalent of the `nodes` list in the forward pagination query.
{
  "data": {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MDY1ODQ4LCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDA2NTg0OCJ9",
          "node": {
            "title": "Product 1 title"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MDk4NjE2LCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDA5ODYxNiJ9",
          "node": {
            "title": "Product 2 title"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MTY0MTUyLCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDE2NDE1MiJ9",
          "node": {
            "title": "Product 3 title"
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "endCursor": "eyJsYXN0X2lkIjo3MDE3MjQ0MTY0MTUyLCJsYXN0X3ZhbHVlIjoiNzAxNzI0NDE2NDE1MiJ9"
      }
    }
  }
}
```

***

### Search performance considerations

Paginating resources using a [range search](https://shopify.dev/docs/api/usage/search-syntax#search-query-syntax) might timeout or return an error if the collection of resources is sufficiently large, and the search field is different from the specified (or default) sort key for the connection you are querying. If your query is slow or returns an error, then try specifying a sort key that matches the field used in the search. For example:

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
{
  orders(first: 250, query: "created_at:>'2020-10-21'", sortKey: CREATED_AT) {
    edges {
      node {
        id
      }
    }
  }
}
```

***

---



<a id="pagination-rest"></a>


## Make paginated requests to the REST Admin API

**Legacy:**

The REST Admin API is a legacy API as of October 1, 2024. All apps and integrations should be built with the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql). For details and migration steps, visit our [migration guide](https://shopify.dev/docs/apps/build/graphql/migrate).

REST endpoints support cursor-based pagination. This guide illustrates how to request paginated data from the REST Admin API and access each page of results.

***

### How it works

When you send a request to a REST endpoint that supports cursor-based pagination, the response body returns the first page of results. If applicable, then a response header returns links to the next page and the previous page of results. You can use the links in the response header to iterate through the pages of results.

#### Link header syntax

Link headers use the following syntax:

### Link header syntax

```json
#...
link: "`https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info={page_info}&limit={limit}`; rel={next}, `https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info={page_info}&limit={limit}`; rel={previous}"
#...
```

The link header includes a `rel` parameter that describes the relation of the linked page to the current page of results. The value can either be `previous` or `next`. If your initial request doesn't return enough records to generate an additional page of results, then the response won't have a link header.

##### Parameters

The URL in the link header can include the following parameters:

| Parameter | Description |
| - | - |
| `page_info` | A unique ID used to access a certain page of results. The `page_info` parameter can't be modified and must be used exactly as it appears in the link header URL. |
| `limit` | The maximum number of results to show on the page:- The default `limit` value is `50`.
- The maximum `limit` value is `250`. |
| `fields` | A comma-separated list of which fields to show in the results. This parameter only works for some endpoints. |

***

### Supported endpoints

You can use cursor-based pagination on most [REST Admin API](https://shopify.dev/docs/api/admin-rest) GET endpoints that retrieve a list of resources.

If the REST resource includes the `limit` parameter on the GET endpoint, then you can use the endpoint to request paginated data. For example, the `Customer` resource includes the `limit` parameter on the [GET endpoint that retrieves a list of customers](https://shopify.dev/docs/api/admin-rest/latest/resources/customer#get-customers).

**Tip:**

You can use the `since_id` parameter that's available on endpoints that support cursor-based pagination to make requests from a specific point. For example, you can use the `since_id` parameter on the [`Transaction`](https://shopify.dev/docs/api/admin-rest/latest/resources/transaction) resource to retrieve only transactions after a specified ID.

***

### Make a request for paginated data

When you make a request to an endpoint that supports paginated results, you can set the number of results to return per page using the `limit` parameter. If you don't specify a `limit`, then the endpoint will use its [default page limit](#parameters). You can also set other parameters in this request to narrow down your results.

The following example request asks the product endpoint for all customers, with a `limit` of 3 customers per page of results:

### GET https

### Response header

```json
#...
link: "`https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info=hijgklmn&limit=3`; rel=next"
#...
```

### JSON response

```json
{
  "customers": [
    {"id": 1},
    {"id": 2},
    {"id": 3}
  ]
}
```

The response header returns a link header that includes a URL for the next page of results. The response body returns the first page of results, which includes 3 customers.

***

### Retrieve the next page of results

To get the next page of results, you can make a request to the URL stored in the link header of the [last response](#make-a-request-for-paginated-data).

**Note:**

Because the request URL contains the `page_info` parameter, you can't add any other parameters to the request, except for `limit`. Including other parameters can cause the request to fail.

### GET https

### Response header

```json
#...
Link: "`https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info=abcdefg&limit=3`; rel=previous, `https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info=opqrstu&limit=3`; rel=next"
#...
```

### JSON response

```json
{
  "customers": [
    {"id": 4},
    {"id": 5},
    {"id": 6}
  ]
}
```

The response header includes a link to the previous page of results and a link to the next page. The response body includes the second page of results, which includes the next 3 customers after the first page.

You can use the URLs in the link headers to iterate through each page of results. If you make a request to a page, and the response header only includes a link to the previous page, then you've reached the last page of results.

***

### Change the number of results for a specific page

You can change the `limit` in a link header URL to return a different number of results from a specified point. For example, the following example request asks the product endpoint for all customers, with a `limit` parameter of 3:

### GET https

### Response header

```json
#...
link: "`https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info=hijgklmn&limit=3`; rel=next"
#...
```

### JSON response

```json
{
  "customers": [
    {"id": 1},
    {"id": 2},
    {"id": 3}
  ]
}
```

If you change the `limit` in the URL in the link header to 6 and make a request to that URL, then the response body returns the 6 customers after the first page of results:

### GET https

### Response header

```json
#...
link: "`https://{shop}.myshopify.com/admin/api/{api_version}/customers.json?page_info=vwxyzab&limit=6`; rel=next"
#...
```

### JSON response

```json
{
  "customers": [
    {"id": 4},
    {"id": 5},
    {"id": 6},
    {"id": 7},
    {"id": 8},
    {"id": 9}
  ]
}
```

***

### Use the shopify-api npm library

The [`@shopify/shopify-api` library](https://www.npmjs.com/package/@shopify/shopify-api) provides backend support for JavaScript and TypeScript apps to access the REST Admin API.

#### Example

The following code retrieves customers from a store by fetching them in batches of 10 until all customers have been retrieved. You can store the `pageInfo` data between requests using a session.

### Retrieve more than one set of customers

```js
let pageInfo;
do {
  const response = await shopify.rest.Customer.all({
    ...pageInfo?.nextPage?.query,
    session,
    limit: 10,
  });


  const pageCustomers = response.data;
  // Use pageCustomers as needed


  pageInfo = response.pageInfo;
} while (pageInfo?.nextPage);
```

**Note:**

Each request returns the information required for an app to request the previous or next set of items. For REST resources, calls to the `all` method return the information that's necessary to make those requests in the `pageInfo` property.

***

### Limitations and considerations

* A request that includes the `page_info` parameter can't include any other parameters except for `limit` and `fields` (if it applies to the endpoint). If you want your results to be filtered by other parameters, then you need to include those parameters in the first request you make.
* The link header URLs are temporary and we don't recommend saving them to use later. Use link header URLs only while working with the request that generated them.
* Any request that sends the `page` parameter will return an error.

**Tip:**

Paginating resources using a [range search](https://shopify.dev/docs/api/usage/search-syntax#search-query-syntax) might timeout or return an error if the collection of resources is sufficiently large, and the search field is different from the specified (or default) sort order. If your query is slow or returns an error, then try specifying a sort order that matches the field used in the search. For example, `/admin/orders.json?created_at_min=2020-10-21&order=created_at`.

***

---



<a id="response-codes"></a>


## Shopify API response status and error codes

When Shopify receives a request to an API endpoint, a number of different HTTP status codes can be returned in the response depending on the original request.

| | |
| - | - |
| ```
200 OK
``` | The request was successfully processed by Shopify. |
| ```
201 Created
``` | The request has been fulfilled and a new resource has been created. |
| ```
202 Accepted
``` | The request has been accepted, but not yet processed. |
| ```
204 No Content
``` | The request has been accepted, but no content will be returned. For example, a client might use an update operation to save a document temporarily, and not refresh to a new page. |
| ```
205 Reset Content
``` | The request has been accepted, but no content will be returned. The client must reset the document from which the original request was sent. For example, if a user fills out a form and submits it, then the 205 code means that the server is making a request to the browser to clear the form. |
| ```
303 See Other
``` | The response to the request can be found under a different URL in the `Location` header and can be retrieved using a GET method on that resource. |
| ```
400 Bad Request
``` | The request wasn't understood by the server, generally due to bad syntax or because the `Content-Type` header wasn't correctly set to `application/json`.This status is also returned when a [token exchange](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/token-exchange) request includes an expired or otherwise invalid session token.This status is also returned when the request provides an invalid `code` parameter during [authorization code grant](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant). |
| ```
401 Unauthorized
``` | The necessary [authentication credentials](https://shopify.dev/docs/apps/build/authentication-authorization) are not present in the request or are incorrect. |
| ```
402 Payment Required
``` | The requested shop is currently frozen. The shop owner needs to log in to the shop's admin and pay the outstanding balance to unfreeze the shop. |
| ```
403 Forbidden
``` | The server is refusing to respond to the request. This status is generally returned if you haven't [requested the appropriate scope](https://shopify.dev/docs/apps/build/authentication-authorization/access-tokens/authorization-code-grant#ask-for-permission) for this action. |
| ```
404 Not Found
``` | The requested resource was not found but could be available again in the future. |
| ```
405 Method Not Allowed
``` | The server recognizes the request but rejects the specific HTTP method. This status is generally returned when a client-side error occurs. |
| ```
406 Not Acceptable
``` | The request's `Accept` header doesn't specify any content formats that the server is able to fulfill. |
| ```
409 Resource Conflict
``` | The requested resource couldn't be processed because of conflict in the request. For example, the requested resource might not be in an expected state, or processing the request would create a conflict within the resource. |
| ```
414 URI Too Long
``` | The server is refusing to accept the request because the Uniform Resource Identifier (URI) provided was too long. |
| ```
415 Unsupported Media Type
``` | The request's `Content-Type` header specifies a payload format that the server doesn't support. |
| ```
422 Unprocessable Entity
``` | The request body was well-formed but contains semantic errors. A `422` error code can be returned from a variety of scenarios including, but not limited to: - Incorrectly formatted input
- Checking out products that are out of stock
- Canceling an order that has fulfillments
- Creating an order with tax lines on both line items and the order
- Creating a customer without an email or name
- Creating a product without a titleThe response body provides details in the `errors` or `error` parameters. |
| ```
423 Locked
``` | The requested shop is currently locked. Shops are locked if they repeatedly exceed their API request limit, or if there is an issue with the account, such as a detected compromise or fraud risk.[Contact support](https://help.shopify.com/en/questions#/contact) if your shop is locked. |
| ```
429 Too Many Requests
``` | The request was not accepted because the application has exceeded the rate limit. Learn more about [Shopify's API rate limits](https://shopify.dev/docs/api/usage/limits#rate-limits). |
| ```
430 Shopify Security Rejection
``` | The request was not accepted because the request might be malicious, and Shopify has responded by rejecting it to protect the app from any possible attacks. |
| ```
500 Internal Server Error
``` | An internal error occurred in Shopify. Simplify or retry your request. If the issue persists, then please record any error codes, timestamps and [contact Partner Support](https://help.shopify.com/en/questions/partners) so that Shopify staff can investigate. |
| ```
501 Not Implemented
``` | The requested endpoint is not available on that particular shop, e.g. requesting access to a Shopify Plus-only API on a non-Plus shop. This response may also indicate that this endpoint is reserved for future use. |
| ```
502 Bad Gateway
``` | The server, while acting as a gateway or proxy, received an invalid response from the upstream server. A 502 error isn't typically something you can fix. It usually requires a fix on the web server or the proxies that you're trying to get access through. |
| ```
503 Service Unavailable
``` | The server is currently unavailable. Check the [Shopify status page](https://www.shopifystatus.com/) for reported service outages. |
| ```
504 Gateway Timeout
``` | The request couldn't complete in time. Shopify waits up to 10 seconds for a response. Try breaking it down in multiple smaller requests. |
| ```
530 Origin DNS Error
``` | Cloudflare can't resolve the requested DNS record. Check the [Shopify status page](https://www.shopifystatus.com/) for reported service outages. |
| ```
540 Temporarily Disabled
``` | The requested endpoint isn't currently available. It has been temporarily disabled, and will be back online shortly. |

***

---



<a id="search-syntax"></a>


## Shopify API search syntax

This page provides information on the syntax for searching text fields.

The same search query syntax is used across Shopify as an interface to search functionality. This includes the storefront, admin, mobile apps, customer group queries, [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql) and [Storefront API](https://shopify.dev/docs/api/storefront). For the APIs, the specific resources that can be queried are defined in the reference documentation.

***

### Search query grammar overview

A string query is a text search made up of terms, connectives, modifiers, and comparators. The search grammar rules defined here can be built into larger structures as defined by the [search query syntax](#search-query-syntax).

The search grammar is expressed similarly to [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) and uses the following baseline terminal symbols:

| Item | Description |
| - | - |
| `whitespace` | Any sequence of space, tab, or newline characters. |
| `name` | Any sequence of non-whitespace, non-special characters. For more information, refer to [Special characters](#special-characters). |
| `value` | Any name, or any quoted string (single or double quotes are both permitted). Date values must be a string surrounded by quotes. |

#### Query

```text
Query = Term { [ whitespace Connective ] whitespace Term }
```

A query is one or more terms separated by whitespace and optionally by single connectives. A query may have optional leading and trailing whitespace.

`query=John Smith`

#### Connectives

```text
Connective = "AND" | "OR"
```

When a connective is not specified between two terms, `AND` is implied.

`query=state:enabled OR state:disabled`

#### Terms

```text
Term = [ Modifier ] ( "(" Query ")" | [ name Comparator ] value )
```

A term consists of an optional modifier, followed either by a subquery (enclosed in parentheses) or a value with an optional name-and-comparator.

`query=-first_name:Bob AND orders_count:>3 orders_count:<=4`

#### Modifiers

```text
Modifier = "-" | "NOT" whitespace
```

Supported modifiers are `-` with no following whitespace, or `NOT` followed by whitespace. Both mean the same thing.

`query=-first_name:Bob`

`query=NOT first_name:Bob`

#### Comparators

```text
Comparator = ":" | ":<" | ":>" | ":<=" | ":>="
```

The following comparators are supported for search queries:

* `:`: equality

* `:<`: less-than

* `:>`: greater-than

* `:<=`: less-than-or-equal-to

* `:>=`: greater-than-or-equal-to

  **Note:**

  Equality (`:`) depends on how a field is indexed.

  * For numeric fields, `:` represents equality.
  * For tokenized fields, equality exists if the term is found anywhere in the field.
  * For non-tokenized fields, the search query string must match the searched field exactly.

#### Special characters

Special characters serve specific functions in search query syntax and need to be escaped with a backslash. For example, `: \ ( )`.

Names can include the characters `-`, `'`, and `"` but can't start with them. Names can include escaped characters using backslash escaping.

***

### Search query syntax

Shopify search query syntax is based on the defined grammar and enables the following search behavior. The following table describes the different types of search queries and their syntax:

| Type | Description | Example syntax | Example explained |
| - | - | - | - |
| Field search | A search that applies to terms in specific fields. If you specify an invalid field, then the query is ignored and all results are returned. | `query=first_name:Bob age:27` | A search for "Bob" in the `first_name` field AND "27" in the `age` field. The value must immediately follow the field with no whitespace. `first_name: Bob` searches for the terms "first\_name" and "Bob". |
| Default search | A case-insensitive search of all the fields in a document. | * `query=Bob Norman`
* `query=title:Bob Norman` | A case-insensitive search for both "bob" AND "norman" anywhere in the document. When combined with field search, this becomes "title:bob" AND "norman" anywhere in the document. To send composite terms to a field, wrap them in quotes or give them each a field prefix. |
| Range search | A search that specifies a range of values to search against. Supported operators: `>`, `>=`, `<` and `<=`. | `query=orders_count:>16 orders_count:<=30` | A search that matches documents where the `orders_count` field is greater than 16 and less than or equal to 30. Equality (`:`) is specified by `orders_count:16`, not `orders_count:=16`. `orders_count:=16` searches for the term "=16" in the `orders_count` field. Refer to the [range query example](#using-created_at-in-a-range-query) for a performance consideration with range searches. |
| NOT query | A search that excludes documents that include the specified value. The NOT operator must be capitalized to execute a NOT query, and only applies to the specified space-separated term or query. `-` must precede the field, value, or subquery. For example, `-field:value -value -(subquery)`. | - `query=-bob`
- `query=NOT bob` | Searches that exclude documents that include the term "bob". |
| Boolean operators | A search that allow terms to be combined through logic operators. | * `query=bob OR norman AND Shopify`
* `query=bob OR norman Shopify` | - `query=bob OR norman AND Shopify`: Searches for documents that must have the term "Shopify" and have at least one of the terms "bob" or "norman".
- `query=bob OR norman Shopify`: Equivalent to the query above, since OR has a higher operator precedence than AND.An explicit AND operator isn't needed between "bob OR norman" and "Shopify" because the AND is the default boolean operator between terms or queries. |
| Grouping | A search using parentheses to group clauses to form subqueries. | `query=state:disabled AND ("sale shopper" OR VIP)` | A search for disabled customers with "sale shopper" or "VIP" tags. |
| Phrase query | A search for a group of words surrounded by double quotes. | `query=first_name:"Bob Norman"` | A search for the term "bob" followed immediately by the term "norman" in the `first_name` field. Phrase queries can be used without the `query` field. For example, `"Bob Norman"`. |
| Prefix query | A search that matches documents containing terms that begin with a specified set of characters. Shopify supports `*` for wildcard matching. | `query=norm*` | A search for all the terms that begin with the prefix "norm", such as "norman". |
| Exists query | A search that matches documents with a non-null value in the specified field. Shopify supports `*` for wildcard matching. | `query=published_at:*` | A search for non-null values in the `published_at` field. The query can be combined with a NOT query to find fields missing a value. For example, `-published_at:*`. |

#### Examples

This section provides examples of how you can use the Shopify API search syntax.

**Note:**

The examples below use function arguments that don't exist for your store. You need to edit the function arguments used in the examples below.

##### Using `created_at` in a range query

List 5 products that were added to a store after October 21st, 2020.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
{
  products(first: 5, query: "created_at:>'2020-10-21T23:39:20Z'" ) {
    edges {
      node {
        id
        title
        createdAt
      }
    }
  }
}
```

**Tip:**

Searching for resources using a range query might be slow or timeout if the collection of resources is sufficiently large, and the search field is different from the specified (or default) sort key. If your query is slow or returns an error, then try specifying a sort key that matches the field used in the search. For example, `query: "created_at:>2020-10-21", sortKey: CREATED_AT`.

##### Using `title`

List 5 products with the name "Caramel Apple".

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
{
  products(first: 5, query: "title:Caramel Apple") {
    edges {
      node {
        id
        title
        createdAt
      }
    }
  }
}
```

**Note:**

`query: "title:Caramel Apple"` is equivalent to `query: "title: \"Caramel Apple\""` (phrase query).

List 10 products that include terms that begin with the prefix `head`, such as `headphones`.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
{
  shop {
    id
    name
  }
  products(first: 10, query:"title:head*") {
    edges {
      node {
        productType
        title
      }
    }
  }
}
```

##### Using `OR` and a range

List 5 products with the name "Caramel Apple", or products that have an inventory of over 500 items and less than or equal to 1000 items.

### POST https://{shop}.myshopify.com/api/{api\_version}/graphql.json

```graphql
{
  products(first: 5, query: "(title:Caramel Apple) OR (inventory_total:>500 inventory_total:<=1000)" ) {
    edges {
      node {
        id
        title
        createdAt
        totalInventory
      }
    }
  }
}
```

***

### Syntax debugging

The GraphQL Admin API provides tools for search syntax validation and debugging. Requests with malformed queries return warnings in the `extensions` section of the response. This feedback explains how the query was parsed and any incompatibilities encountered:

```json
{
"data": {
  "products": {
    "nodes": []
  }
},
"extensions": {
  "search": [{
    "path": ["products"],
    "query": "name:blue jeans",
    "parsed": {
      "and": [
        { "field": "default", "match_all": "jeans" },
        { "field": "name", "match_all": "blue" }
      ]
    },
    "warnings": [{
      "field": "name",
      "message": "Invalid search field for this query."
    }]
  }]
}
}
```

**Note:**

To receive the search extension for all queries with and without warnings, you can send a `Shopify-Search-Query-Debug=1` header to enable it manually.

***

---



<a id="versioning"></a>


## About Shopify API versioning

Shopify releases new API versions on a predictable quarterly schedule, giving you time to adopt changes before older versions are retired.

Subscribe to the [developer changelog](https://shopify.dev/changelog) and keep your contact information up to date in the Partner Dashboard to stay informed about upcoming changes.

***

### Versioned and unversioned APIs

Not all Shopify APIs follow the same versioning model. Versioned APIs and libraries follow the quarterly release schedule described below. Unversioned APIs and surfaces may change at any time.

| Versioning | Category | APIs | Notes |
| - | - | - | - |
| Versioned | GraphQL | * [Admin API](https://shopify.dev/docs/api/admin-graphql)
* [Customer Account API](https://shopify.dev/docs/api/customer)
* [Function APIs](https://shopify.dev/docs/api/functions)
* [Partner API](https://shopify.dev/docs/api/partner)
* [Payments Apps API](https://shopify.dev/docs/api/payments-apps)
* [Storefront API](https://shopify.dev/docs/api/storefront)
* [Webhooks](https://shopify.dev/docs/api/webhooks) | Webhook payloads are versioned the same way as API responses. Shopify falls forward when your selected version becomes unsupported, and webhooks include the `X-Shopify-Api-Version` header to confirm which version was used. [Learn more](https://shopify.dev/docs/apps/build/webhooks). |
| Libraries | - [Hydrogen](https://shopify.dev/docs/api/hydrogen)
- [Hydrogen React](https://shopify.dev/docs/api/hydrogen-react)
- [Shopify App React Router](https://shopify.dev/docs/api/shopify-app-react-router) | Versioned by major release. | |
| Polaris | * [Admin UI extensions](https://shopify.dev/docs/api/admin-extensions)
* [Checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions)
* [Customer account UI extensions](https://shopify.dev/docs/api/customer-account-ui-extensions)
* [POS UI extensions](https://shopify.dev/docs/api/pos-ui-extensions) | Only the last four stable versions have published docs on Shopify.dev. Older versions continue to work, but won't have dedicated reference docs. [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) prevents deploys targeting versions older than 12 months. | |
| Unversioned | - [Ajax API](https://shopify.dev/docs/api/ajax)
- [App Home](https://shopify.dev/docs/api/app-home)
- [Catalog API](https://shopify.dev/docs/api/catalog-api)
- [Customer Privacy API](https://shopify.dev/docs/api/customer-privacy)
- [Liquid](https://shopify.dev/docs/api/liquid)
- [OAuth](https://shopify.dev/docs/apps/build/authentication-authorization) endpoints (including `AccessScope`)
- [Shop Minis](https://shopify.dev/docs/api/shop-minis)
- [Shop Pay Wallet](https://shopify.dev/docs/api/commerce-components/pay)
- [ShopifyQL](https://shopify.dev/docs/api/shopifyql)
- [Storefront Web Components](https://shopify.dev/docs/api/storefront-web-components)
- [Web Pixels API](https://shopify.dev/docs/api/web-pixels-api)
- Any other resources not explicitly listed as versioned | These APIs aren't versioned and might change at any time. | |

***

### Release schedule

Shopify releases a new API version every three months at the beginning of the quarter, at 5pm UTC. Version names are date-based (for example, `2026-04`). Each stable version is supported for a minimum of 12 months, with at least nine months of overlap between consecutive versions.

We recommend updating to the latest stable version each quarter and always specifying a version in your requests. If your app targets an unsupported version, Shopify falls forward and responds using the oldest supported stable version. For example, requests to a retired `2026-10` are served as `2027-01`.

| Stable version | Release date | Supported until |
| - | - | - |
| 2026-04 | April 1, 2026 | April 1, 2027 |
| 2026-07 | July 1, 2026 | July 1, 2027 |
| 2026-10 | October 1, 2026 | October 1, 2027 |
| 2027-01 | January 1, 2027 | January 1, 2028 |

![](https://shopify.dev/assets/assets/images/api/versioning/api-release-schedule-DHO1M84j.png)

***

### Making requests to an API version

You specify the API version in your request URL. The format varies by API, so refer to each API's reference for the exact URL pattern. If you're using an [official Shopify library](https://shopify.dev/docs/api/libraries-and-templates) or a [Storefront SDK](https://shopify.dev/docs/storefronts/headless/additional-sdks), version configuration is handled for you automatically.

API responses include the `X-Shopify-API-Version` header reflecting the version used to fulfill the request. If it differs from what you requested, your app is targeting an unsupported version and Shopify has fallen forward to the default.

Shopify supports three version types:

* **Stable:** Recommended for production. Guaranteed not to change for its supported lifetime.

* **Release candidate:** Published on the same date as the stable release. For example, when `2026-04` releases on April 1, 2026, the `2026-07` release candidate also becomes available. May include backwards-incompatible changes, so not recommended for production.

* **Unstable:** Updated continuously with in-progress changes. Features can be added or removed at any time with no guarantee of release. Use it for early testing only.

***

### Deprecation practices

When part of a Shopify API becomes unnecessary, unsafe, or outdated, it's deprecated across all supported stable versions and announced in the [developer changelog](https://shopify.dev/changelog) with migration guidance. Deprecated fields or types are removed in a subsequent release—for example, something deprecated in `2026-10` might be removed in `2027-01`. Because versions overlap by at least nine months, you'll always have time to update before removal.

Deprecations are communicated through one or more of the following:

* The [API health report](https://shopify.dev/docs/api/usage/versioning/api-health) lists resources that require changes.
* Deprecation warnings appear in API client tools like the [GraphiQL Explorer](https://shopify.dev/docs/api/usage/api-exploration/admin-graphiql-explorer).
* A notice is posted in the [developer changelog](https://shopify.dev/changelog).
* The API reference is updated with deprecated fields and alternatives.
* For imminent backwards-incompatible changes, your app's [emergency developer contact](https://shopify.dev/docs/api/usage/versioning/updates) might be notified.

If your app continues to use unsupported resources after the upgrade deadline, it's delisted from the Shopify App Store. Users are blocked from installing it for a minimum of seven days, and they'll see warnings in the Shopify admin until seven days after the last detected use of unsupported resources.

**Warning:**

If your API is used in a standalone app (such as a desktop or mobile app), your users will need to update before the upgrade deadline. Ship your update early enough to give them time. Calls to unsupported resources could result in your app being delisted or users being blocked from installing it.

***

---



<a id="versioning-api-health"></a>


## API health report

When a feature of a Shopify API is [deprecated](https://shopify.dev/docs/api/usage/versioning#deprecation-practices), you need to update your affected apps to make sure they continue to work for your app users. You can view an API health report for each of your public and custom apps. The report shows you any deprecated calls your app is making and the deadline for updating those calls in your app.

As well as checking the API health report, you can follow the [developer changelog](https://shopify.dev/changelog) to make sure you're aware of any breaking changes that might affect your app. You can learn more about how to update your apps in our [versioning guide](https://shopify.dev/docs/api/usage/versioning).

***

### View an app's health report

1. From your [Dev Dashboard](https://dev.shopify.com/dashboard/), click **Apps**.
2. Click the name of your app.
3. In the sidebar, click **Monitoring**.
4. Select the **API health** tab.

The API health report shows the status of the app and a list of any deprecated API calls it's made in the past 14 days. Each deprecated call in the list shows additional information about what you need to do to update your app.

***

### API health statuses

API health status reflects any calls made with an app's access token in the last 14 days. An app can have one of the following statuses:

* **OK**: The app hasn't made any deprecated API calls in the last 14 days.

* **Fix by (date)**: The app has made deprecated API calls that must be updated by a specific date. This status can appear with either a yellow or a red indicator:

  * A yellow indicator means that you have between 30 days and 9 months to update your app.
  * A red indicator means that you have less than 30 days to update your app.

* **Fix overdue**: The app is making API calls to unsupported API versions and might be causing significant issues on stores that have it installed.

Because access tokens affect API health status, don't use an app's access tokens outside of the app. Any deprecated API calls will change an app's status. For example, your support team's Postman or Insomnia collections can cause a **Fix by** or **Fix overdue** status.

**Warning:**

If your app is marked as **Fix overdue** and continues to call unsupported APIs after the deprecation date, Shopify reserves the right to take action. Actions can include delisting the app from the Shopify App Store, blocking new installations, notifying users that the app doesn't work, or providing users with alternative app recommendations. You'll see a notice on your API health report and receive an email if your app with **Fix overdue** status is at risk of being delisted or having installs blocked.

#### Check the status of an updated app

After you update an app to remove all the deprecated calls, the app's status stays as **Fix by (date)** on the API health report for up to 14 days.

The app's status changes 14 days after the app last made a deprecated call. If the update deadline is less than 14 days away, then the app's status changes on the day after the update deadline.

When 14 days or the update deadline has passed, the app's status changes to **OK**. The time of the last deprecated call displays below the app's status indicator on the **Apps** page in the Partner Dashboard.

You can verify that your app is no longer making deprecated calls by filtering the API health report:

1. Navigate to your [Dev Dashboard](https://dev.shopify.com/dashboard).
2. Click the name of your app.
3. In the sidebar, click **Monitoring**.
4. Select the **API health** tab.
5. Click **Last day** to show unsupported calls that the app has made in the last 24 hours.

If the report is empty, or the unsupported resources are no longer shown, then your app has been updated. The app's status will change to **OK** automatically after 14 days.

**Note:**

If your app isn't affected by the deprecated changes listed in your API health report, then you should still [update your app to the specified API version in the API health report or later](https://shopify.dev/docs/api/usage/versioning) for all calls.

***

### Fixing webhook deprecations

If you've fixed a deprecated webhook in your app, but the webhook deprecation is still shown in your API health report, then check to make sure you've [manually upgraded your app's webhook API version](https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version) in the Partner Dashboard.

***

---



<a id="versioning-updates"></a>


## Getting technical updates

If you create an app from the Shopify admin, or if you have a Partner account, then you need to provide emergency developer contact details. Shopify collects these details so that we can communicate critical, targeted technical information to developers who maintain Shopify apps. This guide explains what you should expect from these communications to help you decide who should receive these updates.

***

### When will Shopify contact you?

Developer contact details are required so that we can inform you of backwards-incompatible changes in the API version that your app is using, or a bug or outage that's affecting a significant number of users. Below are some possible situations when we might contact you:

* We are planning a change to our API that directly affects one of your apps.

* Your app is using a deprecated endpoint, which might be affecting your app's functionality or the user experience.

* Your app has a bug or experiences an outage that's affecting users' stores.

  In each of these situations, our primary method of communication is email. In the second and third situations, we might also contact you by using your developer contact phone number to resolve the issue as soon as possible.

***

### Who should be your developer contact?

For Partners, we recommend that your developer contact is an individual or team who monitors their inbox regularly. These communications are intended for developers responsible for maintaining apps that interact with Shopify’s API, and provide information that's useful for a technical audience that's familiar with [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning).

If you're an app user and you’re setting up an app on behalf of your developer, then you should ask your developer for the best contact information to use. You can direct them to this guide to provide them with more information.

***

### Update your developer contact details

The process of updating your developer contact details is different depending on whether you're updating details for a public app, a custom app, or a Partner organization.

#### Update your API contact email for a public or custom app created in the Dev Dashboard

If your public or custom app is using an API version with backwards-incompatible changes, Shopify will contact the email address listed on your app **Settings** page.

1. Log in to your [Dev Dashboard](https://dev.shopify.com/dashboard/).
2. Navigate to **Apps** and select your app.
3. Click **Settings**.
4. In the **Contact information** section, in the **API contact email** card, click **Edit**.
5. Enter an API contact email address.
6. Click **Save**.

#### Update the contact details for a custom app created in the Shopify admin

Custom apps created in the Shopify admin have a staff or collaborator account associated with them. This account should belong to the app developer, should include the email address where you can reach them, and must have permission to develop apps.

1. From your Shopify admin, go to [**Apps**](https://www.shopify.com/admin/apps).
2. Click **Develop apps**.
3. Click the name of the app that you want to update.
4. Click **App settings** and select an account from the **App developer** drop-down.
5. Click **Save**.

If you set the app developer to a staff or collaborator account, and later delete that account, then the store owner becomes the app developer by default.

#### Update the contact details for a Partner organization

1. Log in to your [Partner Dashboard](https://app.shopify.com/services/partners/auth/login).
2. Go to **Settings**.
3. In the **Emergency developer contact information** section, enter a developer contact email address and phone number.
4. Click **Save**.

***

### Related links

* [Making Shopify apps](https://shopify.dev/docs/apps/build)

***

---
