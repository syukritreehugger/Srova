# Shopify Partner Reference (Indonesian / English)

> Referensi lengkap **Partner** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/partner.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/partner` |
| Total halaman | **80** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / connections / AppEventConnection](#latest-connections-appeventconnection)
- [latest / connections / TransactionConnection](#latest-connections-transactionconnection)
- [latest / enums / AppEventTypes](#latest-enums-appeventtypes)
- [latest / enums / AppPricingInterval](#latest-enums-apppricinginterval)
- [latest / enums / Currency](#latest-enums-currency)
- [latest / enums / ReferralCategory](#latest-enums-referralcategory)
- [latest / enums / TaxTransactionType](#latest-enums-taxtransactiontype)
- [latest / enums / TransactionType](#latest-enums-transactiontype)
- [latest / input-objects / MoneyInput](#latest-input-objects-moneyinput)
- [latest / interfaces / Actor](#latest-interfaces-actor)
- [latest / interfaces / AppCharge](#latest-interfaces-appcharge)
- [latest / interfaces / AppCreditEvent](#latest-interfaces-appcreditevent)
- [latest / interfaces / AppEvent](#latest-interfaces-appevent)
- [latest / interfaces / AppPurchaseOneTimeEvent](#latest-interfaces-apppurchaseonetimeevent)
- [latest / interfaces / AppSubscriptionEvent](#latest-interfaces-appsubscriptionevent)
- [latest / interfaces / AppUsageRecordEvent](#latest-interfaces-appusagerecordevent)
- [latest / interfaces / Transaction](#latest-interfaces-transaction)
- [latest / mutations / appCreditCreate](#latest-mutations-appcreditcreate)
- [latest / objects / ApiVersion](#latest-objects-apiversion)
- [latest / objects / App](#latest-objects-app)
- [latest / objects / AppCredit](#latest-objects-appcredit)
- [latest / objects / AppOneTimeSale](#latest-objects-apponetimesale)
- [latest / objects / AppPurchaseOneTime](#latest-objects-apppurchaseonetime)
- [latest / objects / AppSaleAdjustment](#latest-objects-appsaleadjustment)
- [latest / objects / AppSaleCredit](#latest-objects-appsalecredit)
- [latest / objects / AppSubscription](#latest-objects-appsubscription)
- [latest / objects / AppSubscriptionSale](#latest-objects-appsubscriptionsale)
- [latest / objects / AppUsageRecord](#latest-objects-appusagerecord)
- [latest / objects / AppUsageSale](#latest-objects-appusagesale)
- [latest / objects / CreditApplied](#latest-objects-creditapplied)
- [latest / objects / CreditFailed](#latest-objects-creditfailed)
- [latest / objects / CreditPending](#latest-objects-creditpending)
- [latest / objects / LegacyTransaction](#latest-objects-legacytransaction)
- [latest / objects / Money](#latest-objects-money)
- [latest / objects / MutationRoot](#latest-objects-mutationroot)
- [latest / objects / OneTimeChargeAccepted](#latest-objects-onetimechargeaccepted)
- [latest / objects / OneTimeChargeActivated](#latest-objects-onetimechargeactivated)
- [latest / objects / OneTimeChargeDeclined](#latest-objects-onetimechargedeclined)
- [latest / objects / OneTimeChargeExpired](#latest-objects-onetimechargeexpired)
- [latest / objects / Organization](#latest-objects-organization)
- [latest / objects / PageInfo](#latest-objects-pageinfo)
- [latest / objects / QueryRoot](#latest-objects-queryroot)
- [latest / objects / ReferralAdjustment](#latest-objects-referraladjustment)
- [latest / objects / ReferralTransaction](#latest-objects-referraltransaction)
- [latest / objects / RelationshipDeactivated](#latest-objects-relationshipdeactivated)
- [latest / objects / RelationshipInstalled](#latest-objects-relationshipinstalled)
- [latest / objects / RelationshipReactivated](#latest-objects-relationshipreactivated)
- [latest / objects / RelationshipUninstalled](#latest-objects-relationshipuninstalled)
- [latest / objects / ServiceSale](#latest-objects-servicesale)
- [latest / objects / ServiceSaleAdjustment](#latest-objects-servicesaleadjustment)
- [latest / objects / Shop](#latest-objects-shop)
- [latest / objects / SubscriptionApproachingCappedAmount](#latest-objects-subscriptionapproachingcappedamount)
- [latest / objects / SubscriptionCappedAmountUpdated](#latest-objects-subscriptioncappedamountupdated)
- [latest / objects / SubscriptionChargeAccepted](#latest-objects-subscriptionchargeaccepted)
- [latest / objects / SubscriptionChargeActivated](#latest-objects-subscriptionchargeactivated)
- [latest / objects / SubscriptionChargeCanceled](#latest-objects-subscriptionchargecanceled)
- [latest / objects / SubscriptionChargeDeclined](#latest-objects-subscriptionchargedeclined)
- [latest / objects / SubscriptionChargeExpired](#latest-objects-subscriptionchargeexpired)
- [latest / objects / SubscriptionChargeFrozen](#latest-objects-subscriptionchargefrozen)
- [latest / objects / SubscriptionChargeUnfrozen](#latest-objects-subscriptionchargeunfrozen)
- [latest / objects / TaxTransaction](#latest-objects-taxtransaction)
- [latest / objects / Theme](#latest-objects-theme)
- [latest / objects / ThemeSale](#latest-objects-themesale)
- [latest / objects / ThemeSaleAdjustment](#latest-objects-themesaleadjustment)
- [latest / objects / UsageChargeApplied](#latest-objects-usagechargeapplied)
- [latest / objects / UserError](#latest-objects-usererror)
- [latest / payloads / AppCreditCreatePayload](#latest-payloads-appcreditcreatepayload)
- [latest / queries / app](#latest-queries-app)
- [latest / queries / publicApiVersions](#latest-queries-publicapiversions)
- [latest / queries / transaction](#latest-queries-transaction)
- [latest / queries / transactions](#latest-queries-transactions)
- [latest / scalars / Boolean](#latest-scalars-boolean)
- [latest / scalars / DateTime](#latest-scalars-datetime)
- [latest / scalars / Decimal](#latest-scalars-decimal)
- [latest / scalars / ID](#latest-scalars-id)
- [latest / scalars / Int](#latest-scalars-int)
- [latest / scalars / String](#latest-scalars-string)
- [latest / scalars / Url](#latest-scalars-url)


---



<a id="landing"></a>


## GraphQL Partner API

The Partner API provides access to data in the Partners Dashboard. Data includes transactions that impact your earnings, app events, and for participating partners, Experts Marketplace opportunities. With this information, you can effectively scale your business by automating front and back-office operations, freeing up time to focus on solutions for Shopify merchants.

### Authentication

There are two pieces of information that you must include to successfully authenticate requests to a Partner API endpoint:

* Your organization ID. You can find this in the URL of the Partners Dashboard when you're logged in. For example: `https://partners.shopify.com/organization-id/api/2026-01/graphql.json`
* A Partner API client access token. The API client access token must belong to the organization that you're querying. You can create a new API client for your organization through the Partner Dashboard. For example: `X-Shopify-Access-Token: <partner-access-token>`

### cURL

```bash
curl -X POST \
  https://partners.shopify.com/{organization_id}/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {partner_access_token}' \
  -d '{
    "query": "{your_query}"
  }'
```

***

### Endpoints and queries

Use GraphiQL explorer through your Partners Dashboard to query the Partner API. The GraphiQL explorer uses your [Partner API client](#create-a-partner-api-client) to retrieve the requested information from your Partner account.

From your Partners Dashboard, navigate to Settings > Partner API clients. Next to the Partner API client that you want to explore, click View GraphiQL explorer.

You can also use the GraphiQL explorer to work with the schema and build queries.

Queries begin with one of the objects listed under QueryRoot. The QueryRoot is the schema’s entry-point for queries. Queries are equivalent to making a `GET` request in REST.

To make a query, send a `POST` request to:

`https://partners.shopify.com/{org_id}/api/2026-01/graphql.json`

You can use cURL or an HTTP client such as Postman or Insomnia to query the Partner API. This example is a basic request using cURL. Replace `{organization-id}` with the ID for the organization you are querying, and replace `{partner-access-token}` with your client access token. This request retrieves the last 20 active Experts Marketplace conversations with unread messages.

The Partner API is versioned. To keep your app stable, make sure you specify a supported version in the URL.

#### Create a Partner API client

You must be an organization owner to create and manage your API client through the Partners Dashboard. Each API client has access only to the data belonging to the organization in which it is created. You need to create an API client for each organization that you want to access using the API. From the Partners Dashboard, navigate to Settings > Partner API clients, and then click Manage Partner API clients.

The following permissions can be granted for each API client:

* View financials: This permission is required to access Transaction resources. These resources represent all of the transactions that impact your Partner earnings.
* Manage apps: This permission is required to access App resources, including all app-related events such as installs, uninstalls, and charges. This resource represents all of the public and private apps managed by your organization.
* Manage themes: This permission is required to access the Theme resource. This resource represents all of the Shopify themes managed by your organization.
* Manage jobs: This permission is required to access Conversation and Job resources. These resources represent Experts Marketplace conversations and jobs owned by your organization.

#### Secure your data by rotating your access token

Your access token secures your organization's data. It should be kept secret at all times. If you need to replace your access token, you can generate a secondary token from your Partners Dashboard, Navigate to Settings > Partner API clients, and then click Manage Partner API clients.

#### Usage limitations

* Transaction information is for analytics purposes only. This information shouldn't be used for accounting or financial reporting.
* All apps and services connecting to the Partner API are subject to Shopify’s API Terms of Service. Only organization owners can create and manage Partner API clients.

POST

### https://partners.shopify.com/{org\_id}/api/2026-01/graphql.json

```bash
# Get the ID and user name of your 20 most recent unread messages
curl -X POST "https://partners.shopify.com/{org_id}/api/2026-01/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: {partner-access-token}" \
  -d '{
    "query": "{
      conversations(
        first: 20,
        unreadOnly: true,
        statuses: [ACTIVE]
      ) {
        edges {
          node {
            id
            merchantUser {
              name
            }
          }
        }
      }
    }"
  }'
```

***

### Rate limits

The Partner API has a rate limit of four requests per second per Partner API client. After the limit is exceeded, all requests are throttled and return an `{"errors": [{"message": "Too many requests"}]}` error.

{}

### Request

```json
HTTP/1.1 429 Too Many Requests
```

{}

### Response

```json
HTTP/1.1 429 Too Many Requests
  {
    "errors": [{
      "message": "Too many requests",
      "extensions": {
        "code": "429"
      }
    }]
  }
```

***

### Status and error codes

All API queries return HTTP status codes that contain more information about the response.

#### 200 OK

The GraphQL Partner API can return a `200 OK` response code in cases that would typically produce 4xx errors in REST.

200 response codes can return different formats including both strings and objects.

#### Error handling

The response for the errors object contains additional detail to help you debug your operation.

The response for mutations contains additional detail to help debug your query. To access this, you must request `userErrors`.

##### Properties

* errorsarray

A list of all errors returned

* errors\[n].​messagestring

Contains details about the error(s).

* errors\[n].​extensionsobject

Provides more information about the error(s) including properties and metadata.

* extensions.​codestring

Shows error codes common to Shopify. Additional error codes may also be shown.

* 400

Bad Request: The server will not process the request.

* 401

Unauthorized: A call was made with an invalid API client (for example, using tokens that don't exist) or against an invalid Organization (for example, one that is disabled).

* 404

Not found: The resource isn’t available. This occurs when querying for something that has been deleted.

* 429

Too Many Requests: The client has exceeded the [rate limit](#rate-limits).

* 500

Internal Server Error: An internal error occurred in Shopify. Check out the [Shopify status page](https://www.shopifystatus.com/) for more information.

***

{}

### Sample 200 error responses

###### Throttled

```json
{
  "errors": [
    {
      "message": "Too many requests",
      "extensions": {
        "code": "429"
      }
    }
  ]
}
```

###### Internal

```json
{
  "errors": [
    {
      "message": "Internal error. Looks like something went wrong on our end.
      Request ID: 1b355a21-7117-44c5-8d8b-8948082f40a8 (include this in support requests).",
      "extensions": {
        "code": "500"
      }
    }
  ]
}
```

#### 4xx and 5xx status codes

The 4xx and 5xx errors occur infrequently. They are often related to network communications, your account, or an issue with Shopify’s services.

Many errors that would typically return a 4xx or 5xx status code, return an HTTP 200 errors response instead. Refer to the [200 OK section](#200-ok) above for details.

***

##### 400 Bad Request

The server will not process the request.

***

##### 401 Unauthorized

A call was made with an invalid API client (for example, using tokens that don't exist) or against an invalid Organization (for example, one that's been disabled).

***

##### 404 Not Found

The resource isn’t available. This is often caused by querying for something that’s been deleted.

***

##### 429 Too Many Requests

Too many requests were sent in a given time period.

***

**Info:**

Didn’t find the status code you’re looking for? View the complete list of [API status response and error codes](https://shopify.dev/api/usage/response-codes).

{}

### Sample error codes

###### 400

```
HTTP/1.1 400 Bad Request
{
  "errors": [{
    "message": "Maximum query length is 50000 characters",
    "extensions": {
      "code": "400"
    }
  }]
}
```

###### 401

```
HTTP/1.1 401 Unauthorized
{
  "errors": [{
    "message": "Invalid access token",
    "extensions": {
      "code": "401"
    }
  }]
}
```

###### 404

```
HTTP/1.1 404 Not Found
{
  "errors": [{
    "message": "Invalid API version",
    "extensions": {
      "code": "404"
    }
  }]
}
```

###### 429

```
HTTP/1.1 429 Too Many Requests
{
  "errors": [{
    "message": "Too many requests",
    "extensions": {
      "code": "429"
    }
  }]
}
```

***

### Translations

To receive translated error messages when using the Partner API, you need to specify a locale in the Accept-Language HTTP request header when sending queries. This example shows a header that enables error messages to be returned in Spanish when using the Partner API.

If the locale is missing or unsupported, then the API returns error messages in English.

{}

### Sample request header for locale

```json
Accept-Language: es
```

***

---



<a id="latest"></a>


## GraphQL Partner API

The Partner API provides access to data in the Partners Dashboard. Data includes transactions that impact your earnings, app events, and for participating partners, Experts Marketplace opportunities. With this information, you can effectively scale your business by automating front and back-office operations, freeing up time to focus on solutions for Shopify merchants.

### Authentication

There are two pieces of information that you must include to successfully authenticate requests to a Partner API endpoint:

* Your organization ID. You can find this in the URL of the Partners Dashboard when you're logged in. For example: `https://partners.shopify.com/organization-id/api/2026-01/graphql.json`
* A Partner API client access token. The API client access token must belong to the organization that you're querying. You can create a new API client for your organization through the Partner Dashboard. For example: `X-Shopify-Access-Token: <partner-access-token>`

### cURL

```bash
curl -X POST \
  https://partners.shopify.com/{organization_id}/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {partner_access_token}' \
  -d '{
    "query": "{your_query}"
  }'
```

***

### Endpoints and queries

Use GraphiQL explorer through your Partners Dashboard to query the Partner API. The GraphiQL explorer uses your [Partner API client](#create-a-partner-api-client) to retrieve the requested information from your Partner account.

From your Partners Dashboard, navigate to Settings > Partner API clients. Next to the Partner API client that you want to explore, click View GraphiQL explorer.

You can also use the GraphiQL explorer to work with the schema and build queries.

Queries begin with one of the objects listed under QueryRoot. The QueryRoot is the schema’s entry-point for queries. Queries are equivalent to making a `GET` request in REST.

To make a query, send a `POST` request to:

`https://partners.shopify.com/{org_id}/api/2026-01/graphql.json`

You can use cURL or an HTTP client such as Postman or Insomnia to query the Partner API. This example is a basic request using cURL. Replace `{organization-id}` with the ID for the organization you are querying, and replace `{partner-access-token}` with your client access token. This request retrieves the last 20 active Experts Marketplace conversations with unread messages.

The Partner API is versioned. To keep your app stable, make sure you specify a supported version in the URL.

#### Create a Partner API client

You must be an organization owner to create and manage your API client through the Partners Dashboard. Each API client has access only to the data belonging to the organization in which it is created. You need to create an API client for each organization that you want to access using the API. From the Partners Dashboard, navigate to Settings > Partner API clients, and then click Manage Partner API clients.

The following permissions can be granted for each API client:

* View financials: This permission is required to access Transaction resources. These resources represent all of the transactions that impact your Partner earnings.
* Manage apps: This permission is required to access App resources, including all app-related events such as installs, uninstalls, and charges. This resource represents all of the public and private apps managed by your organization.
* Manage themes: This permission is required to access the Theme resource. This resource represents all of the Shopify themes managed by your organization.
* Manage jobs: This permission is required to access Conversation and Job resources. These resources represent Experts Marketplace conversations and jobs owned by your organization.

#### Secure your data by rotating your access token

Your access token secures your organization's data. It should be kept secret at all times. If you need to replace your access token, you can generate a secondary token from your Partners Dashboard, Navigate to Settings > Partner API clients, and then click Manage Partner API clients.

#### Usage limitations

* Transaction information is for analytics purposes only. This information shouldn't be used for accounting or financial reporting.
* All apps and services connecting to the Partner API are subject to Shopify’s API Terms of Service. Only organization owners can create and manage Partner API clients.

POST

### https://partners.shopify.com/{org\_id}/api/2026-01/graphql.json

```bash
# Get the ID and user name of your 20 most recent unread messages
curl -X POST "https://partners.shopify.com/{org_id}/api/2026-01/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Access-Token: {partner-access-token}" \
  -d '{
    "query": "{
      conversations(
        first: 20,
        unreadOnly: true,
        statuses: [ACTIVE]
      ) {
        edges {
          node {
            id
            merchantUser {
              name
            }
          }
        }
      }
    }"
  }'
```

***

### Rate limits

The Partner API has a rate limit of four requests per second per Partner API client. After the limit is exceeded, all requests are throttled and return an `{"errors": [{"message": "Too many requests"}]}` error.

{}

### Request

```json
HTTP/1.1 429 Too Many Requests
```

{}

### Response

```json
HTTP/1.1 429 Too Many Requests
  {
    "errors": [{
      "message": "Too many requests",
      "extensions": {
        "code": "429"
      }
    }]
  }
```

***

### Status and error codes

All API queries return HTTP status codes that contain more information about the response.

#### 200 OK

The GraphQL Partner API can return a `200 OK` response code in cases that would typically produce 4xx errors in REST.

200 response codes can return different formats including both strings and objects.

#### Error handling

The response for the errors object contains additional detail to help you debug your operation.

The response for mutations contains additional detail to help debug your query. To access this, you must request `userErrors`.

##### Properties

* errorsarray

A list of all errors returned

* errors\[n].​messagestring

Contains details about the error(s).

* errors\[n].​extensionsobject

Provides more information about the error(s) including properties and metadata.

* extensions.​codestring

Shows error codes common to Shopify. Additional error codes may also be shown.

* 400

Bad Request: The server will not process the request.

* 401

Unauthorized: A call was made with an invalid API client (for example, using tokens that don't exist) or against an invalid Organization (for example, one that is disabled).

* 404

Not found: The resource isn’t available. This occurs when querying for something that has been deleted.

* 429

Too Many Requests: The client has exceeded the [rate limit](#rate-limits).

* 500

Internal Server Error: An internal error occurred in Shopify. Check out the [Shopify status page](https://www.shopifystatus.com/) for more information.

***

{}

### Sample 200 error responses

###### Throttled

```json
{
  "errors": [
    {
      "message": "Too many requests",
      "extensions": {
        "code": "429"
      }
    }
  ]
}
```

###### Internal

```json
{
  "errors": [
    {
      "message": "Internal error. Looks like something went wrong on our end.
      Request ID: 1b355a21-7117-44c5-8d8b-8948082f40a8 (include this in support requests).",
      "extensions": {
        "code": "500"
      }
    }
  ]
}
```

#### 4xx and 5xx status codes

The 4xx and 5xx errors occur infrequently. They are often related to network communications, your account, or an issue with Shopify’s services.

Many errors that would typically return a 4xx or 5xx status code, return an HTTP 200 errors response instead. Refer to the [200 OK section](#200-ok) above for details.

***

##### 400 Bad Request

The server will not process the request.

***

##### 401 Unauthorized

A call was made with an invalid API client (for example, using tokens that don't exist) or against an invalid Organization (for example, one that's been disabled).

***

##### 404 Not Found

The resource isn’t available. This is often caused by querying for something that’s been deleted.

***

##### 429 Too Many Requests

Too many requests were sent in a given time period.

***

**Info:**

Didn’t find the status code you’re looking for? View the complete list of [API status response and error codes](https://shopify.dev/api/usage/response-codes).

{}

### Sample error codes

###### 400

```
HTTP/1.1 400 Bad Request
{
  "errors": [{
    "message": "Maximum query length is 50000 characters",
    "extensions": {
      "code": "400"
    }
  }]
}
```

###### 401

```
HTTP/1.1 401 Unauthorized
{
  "errors": [{
    "message": "Invalid access token",
    "extensions": {
      "code": "401"
    }
  }]
}
```

###### 404

```
HTTP/1.1 404 Not Found
{
  "errors": [{
    "message": "Invalid API version",
    "extensions": {
      "code": "404"
    }
  }]
}
```

###### 429

```
HTTP/1.1 429 Too Many Requests
{
  "errors": [{
    "message": "Too many requests",
    "extensions": {
      "code": "429"
    }
  }]
}
```

***

### Translations

To receive translated error messages when using the Partner API, you need to specify a locale in the Accept-Language HTTP request header when sending queries. This example shows a header that enables error messages to be returned in Spanish when using the Partner API.

If the locale is missing or unsupported, then the API returns error messages in English.

{}

### Sample request header for locale

```json
Accept-Language: es
```

***

---



<a id="latest-connections-appeventconnection"></a>


## App​Event​Connection

connection

The connection type for AppEvent.

### Fields with this connection

* [App.events](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events)

  OBJECT

  A Shopify [app](https://shopify.dev/concepts/apps).

***

### Possible returns

* edges

  [\[App​Event​Edge!\]!](https://shopify.dev/docs/api/partner/latest/objects/AppEventEdge)

  non-null

  A list of edges.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/partner/latest/objects/PageInfo)

  non-null

  Information about pagination in a connection.

***

### Map

#### Fields with this connection

* [App.events](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events)

#### Possible returns

* [App​Event​Connection.edges](https://shopify.dev/docs/api/partner/latest/connections/AppEventConnection#returns-edges)
* [App​Event​Connection.pageInfo](https://shopify.dev/docs/api/partner/latest/connections/AppEventConnection#returns-pageInfo)

---



<a id="latest-connections-transactionconnection"></a>


## Transaction​Connection

connection

The connection type for Transaction.

### Queries with this connection

* [transactions](https://shopify.dev/docs/api/partner/latest/queries/transactions)

  query

  A list of the Partner organization's [transactions](https://help.shopify.com/partners/getting-started/getting-paid).

  * after

    [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

    ### Arguments

    Returns the elements in the list that come after the specified cursor.

  * before

    [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

    Returns the elements in the list that come before the specified cursor.

  * first

    [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

    Returns the first *n* elements from the list.

  * last

    [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

    Returns the last *n* elements from the list.

  * shop​Id

    [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    Returns transactions associated with the specified shop ID.

  * myshopify​Domain

    [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

    Returns transactions associated with the specified `.myshopify.com` shop domain. Example value: `example.myshopify.com`.

  * app​Id

    [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    Returns transactions associated with the specified app ID.

  * created​At​Min

    [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

    Returns transactions that were created on or after the specified date and time.

  * created​At​Max

    [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

    Returns transactions that were created on or before the specified date and time.

  * types

    [\[Transaction​Type!\]](https://shopify.dev/docs/api/partner/latest/enums/TransactionType)

    Returns transactions of the specified types.

  ***

***

### Possible returns

* edges

  [\[Transaction​Edge!\]!](https://shopify.dev/docs/api/partner/latest/objects/TransactionEdge)

  non-null

  A list of edges.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/partner/latest/objects/PageInfo)

  non-null

  Information about pagination in a connection.

***

### Map

#### Queries with this connection

* [transactions](https://shopify.dev/docs/api/partner/latest/queries/transactions)

#### Possible returns

* [Transaction​Connection.edges](https://shopify.dev/docs/api/partner/latest/connections/TransactionConnection#returns-edges)
* [Transaction​Connection.pageInfo](https://shopify.dev/docs/api/partner/latest/connections/TransactionConnection#returns-pageInfo)

---



<a id="latest-enums-appeventtypes"></a>


## App​Event​Types

enum

The type of app event.

### Valid values

* CREDIT\_​APPLIED

  Credit applied

* CREDIT\_​FAILED

  Credit failed

* CREDIT\_​PENDING

  Credit pending

* ONE\_​TIME\_​CHARGE\_​ACCEPTED

  One time charge accepted

* ONE\_​TIME\_​CHARGE\_​ACTIVATED

  One time charge activated

* ONE\_​TIME\_​CHARGE\_​DECLINED

  One time charge declined

* ONE\_​TIME\_​CHARGE\_​EXPIRED

  One time charge expired

* RELATIONSHIP\_​DEACTIVATED

  Relationship deactivated

* RELATIONSHIP\_​INSTALLED

  Relationship installed

* RELATIONSHIP\_​REACTIVATED

  Relationship reactivated

* RELATIONSHIP\_​UNINSTALLED

  Relationship uninstalled

* SUBSCRIPTION\_​APPROACHING\_​CAPPED\_​AMOUNT

  Subscription is approaching capped amount.

* SUBSCRIPTION\_​CAPPED\_​AMOUNT\_​UPDATED

  Subscription capped amount was updated.

* SUBSCRIPTION\_​CHARGE\_​ACCEPTED

  Subscription charge accepted

* SUBSCRIPTION\_​CHARGE\_​ACTIVATED

  Subscription charge activated

* SUBSCRIPTION\_​CHARGE\_​CANCELED

  Subscription charge canceled

* SUBSCRIPTION\_​CHARGE\_​DECLINED

  Subscription charge declined

* SUBSCRIPTION\_​CHARGE\_​EXPIRED

  Subscription charge expired

* SUBSCRIPTION\_​CHARGE\_​FROZEN

  Subscription charge frozen

* SUBSCRIPTION\_​CHARGE\_​UNFROZEN

  Subscription charge unfrozen

* USAGE\_​CHARGE\_​APPLIED

  Usage charge applied

***

### Fields

* [App.events(types)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.types)

  ARGUMENT

  A Shopify [app](https://shopify.dev/concepts/apps).

* [App​Event.type](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent#fields-type)

  INTERFACE

  An event related to a Shopify app.

* [Credit​Applied.type](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.type)

  OBJECT

  An event that marks that an app credit was applied.

* [Credit​Failed.type](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.type)

  OBJECT

  An event that marks that an app credit failed to apply.

* [Credit​Pending.type](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.type)

  OBJECT

  An event that marks that an app credit is pending.

* [One​Time​Charge​Accepted.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.type)

  OBJECT

  An event that marks that a one-time app charge was accepted by the merchant.

* [One​Time​Charge​Activated.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.type)

  OBJECT

  An event that marks that a one-time app charge was activated.

* [One​Time​Charge​Declined.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.type)

  OBJECT

  An event that marks that a one-time app charge was declined by the merchant.

* [One​Time​Charge​Expired.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.type)

  OBJECT

  An event that marks that a one-time app charge expired before the merchant could accept it.

* [Relationship​Deactivated.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipDeactivated#field-RelationshipDeactivated.fields.type)

  OBJECT

  An event that marks that an app was deactivated.

* [Relationship​Installed.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipInstalled#field-RelationshipInstalled.fields.type)

  OBJECT

  An event that marks that an app was installed.

* [Relationship​Reactivated.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipReactivated#field-RelationshipReactivated.fields.type)

  OBJECT

  An event that marks that an app was reactivated.

* [Relationship​Uninstalled.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.type)

  OBJECT

  An event that marks that an app was uninstalled.

* [Subscription​Approaching​Capped​Amount.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.type)

  OBJECT

  An event that marks that a subscription is approaching its capped amount.

* [Subscription​Capped​Amount​Updated.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.type)

  OBJECT

  An event that marks that a subscription had its capped amount updated.

* [Subscription​Charge​Accepted.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.type)

  OBJECT

  An event that marks that a recurring app charge was accepted.

* [Subscription​Charge​Activated.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.type)

  OBJECT

  An event that marks that a recurring app charge was activated.

* [Subscription​Charge​Canceled.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.type)

  OBJECT

  An event that marks that a recurring app charge was cancelled.

* [Subscription​Charge​Declined.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.type)

  OBJECT

  An event that marks that a recurring app charge was declined.

* [Subscription​Charge​Expired.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.type)

  OBJECT

  An event that marks that a recurring app charge has expired.

* [Subscription​Charge​Frozen.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.type)

  OBJECT

  An event that marks that a recurring app charge has been suspended. For example, if a merchant stops paying their bills, or closes their store, then Shopify suspends the recurring app charge.

* [Subscription​Charge​Unfrozen.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeUnfrozen#field-SubscriptionChargeUnfrozen.fields.type)

  OBJECT

  An event that marks that a recurring app charge was unfrozen.

* [Usage​Charge​Applied.type](https://shopify.dev/docs/api/partner/latest/objects/UsageChargeApplied#field-UsageChargeApplied.fields.type)

  OBJECT

  An event that marks that an app usage charge was applied.

***

### Map

#### Fields with this enum

* [Credit​Applied.type](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.type)
* [Credit​Failed.type](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.type)
* [Credit​Pending.type](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.type)
* [One​Time​Charge​Accepted.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.type)
* [One​Time​Charge​Activated.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.type)
* [One​Time​Charge​Declined.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.type)
* [One​Time​Charge​Expired.type](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.type)
* [Relationship​Deactivated.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipDeactivated#field-RelationshipDeactivated.fields.type)
* [Relationship​Installed.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipInstalled#field-RelationshipInstalled.fields.type)
* [Relationship​Reactivated.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipReactivated#field-RelationshipReactivated.fields.type)
* [Relationship​Uninstalled.type](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.type)
* [Subscription​Approaching​Capped​Amount.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.type)
* [Subscription​Capped​Amount​Updated.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.type)
* [Subscription​Charge​Accepted.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.type)
* [Subscription​Charge​Activated.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.type)
* [Subscription​Charge​Canceled.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.type)
* [Subscription​Charge​Declined.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.type)
* [Subscription​Charge​Expired.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.type)
* [Subscription​Charge​Frozen.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.type)
* [Subscription​Charge​Unfrozen.type](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeUnfrozen#field-SubscriptionChargeUnfrozen.fields.type)
* [Usage​Charge​Applied.type](https://shopify.dev/docs/api/partner/latest/objects/UsageChargeApplied#field-UsageChargeApplied.fields.type)

#### Arguments with this enum

* [App.events(types)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.types)

---



<a id="latest-enums-apppricinginterval"></a>


## App​Pricing​Interval

enum

The billing frequency for the app.

### Valid values

* ANNUAL

  The merchant is billed for this app annually.

* EVERY\_​30\_​DAYS

  The merchant is billed for this app every 30 days.

***

### Fields

* [App​Subscription​Sale.billingInterval](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.billingInterval)

  OBJECT

  A transaction corresponding to an app subscription charge.

***

### Map

#### Fields with this enum

* [App​Subscription​Sale.billingInterval](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.billingInterval)

---



<a id="latest-enums-currency"></a>


## Currency

enum

Supported monetary currencies from ISO 4217.

### Valid values

* AED

  United arab emirates dirham.

* AFN

  Afghan afghani.

* ALL

  Albanian lek.

* AMD

  Armenian dram.

* ANG

  Netherlands antillean gulden.

* AOA

  Angolan kwanza.

* ARS

  Argentine peso.

* AUD

  Australian dollar.

* AWG

  Aruban florin.

* AZN

  Azerbaijani manat.

* BAM

  Bosnia and herzegovina convertible mark.

* BBD

  Barbadian dollar.

* BDT

  Bangladeshi taka.

* BGN

  Bulgarian lev.

* BHD

  Bahraini dinar.

* BIF

  Burundian franc.

* BMD

  Bermudian dollar.

* BND

  Brunei dollar.

* BOB

  Bolivian boliviano.

* BRL

  Brazilian real.

* BSD

  Bahamian dollar.

* BTN

  Bhutanese ngultrum.

* BWP

  Botswana pula.

* BYN

  Belarusian ruble.

* BYR

  Belarusian ruble.

* BZD

  Belize dollar.

* CAD

  Canadian dollar.

* CDF

  Congolese franc.

* CHF

  Swiss franc.

* CLF

  Unidad de fomento.

* CLP

  Chilean peso.

* CNY

  Chinese renminbi yuan.

* COP

  Colombian peso.

* CRC

  Costa rican colón.

* CUC

  Cuban convertible peso.

* CUP

  Cuban peso.

* CVE

  Cape verdean escudo.

* CYP

  Cypriot pound.

* CZK

  Czech koruna.

* DJF

  Djiboutian franc.

* DKK

  Danish krone.

* DOP

  Dominican peso.

* DZD

  Algerian dinar.

* EEK

  Estonian kroon.

* EGP

  Egyptian pound.

* ERN

  Eritrean nakfa.

* ETB

  Ethiopian birr.

* EUR

  Euro.

* FJD

  Fijian dollar.

* FKP

  Falkland pound.

* GBP

  British pound.

* GBX

  British penny.

* GEL

  Georgian lari.

* GGP

  Guernsey pound.

* GHC

  Ghanaian cedi.

* GHS

  Ghanaian cedi.

* GIP

  Gibraltar pound.

* GMD

  Gambian dalasi.

* GNF

  Guinean franc.

* GTQ

  Guatemalan quetzal.

* GYD

  Guyanese dollar.

* HKD

  Hong kong dollar.

* HNL

  Honduran lempira.

* HRK

  Croatian kuna.

* HTG

  Haitian gourde.

* HUF

  Hungarian forint.

* IDR

  Indonesian rupiah.

* ILS

  Israeli new sheqel.

* IMP

  Isle of man pound.

* INR

  Indian rupee.

* IQD

  Iraqi dinar.

* IRR

  Iranian rial.

* ISK

  Icelandic króna.

* JEP

  Jersey pound.

* JMD

  Jamaican dollar.

* JOD

  Jordanian dinar.

* JPY

  Japanese yen.

* KES

  Kenyan shilling.

* KGS

  Kyrgyzstani som.

* KHR

  Cambodian riel.

* KID

  Kiribati dollar.

* KMF

  Comorian franc.

* KPW

  North korean won.

* KRW

  South korean won.

* KWD

  Kuwaiti dinar.

* KYD

  Cayman islands dollar.

* KZT

  Kazakhstani tenge.

* LAK

  Lao kip.

* LBP

  Lebanese pound.

* LKR

  Sri lankan rupee.

* LRD

  Liberian dollar.

* LSL

  Lesotho loti.

* LTL

  Lithuanian litas.

* LVL

  Latvian lats.

* LYD

  Libyan dinar.

* MAD

  Moroccan dirham.

* MDL

  Moldovan leu.

* MGA

  Malagasy ariary.

* MKD

  Macedonian denar.

* MMK

  Myanmar kyat.

* MNT

  Mongolian tögrög.

* MOP

  Macanese pataca.

* MRO

  Mauritanian ouguiya.

* MRU

  Mauritanian new ouguiya.

* MTL

  Maltese lira.

* MUR

  Mauritian rupee.

* MVR

  Maldivian rufiyaa.

* MWK

  Malawian kwacha.

* MXN

  Mexican peso.

* MYR

  Malaysian ringgit.

* MZN

  Mozambican metical.

* NAD

  Namibian dollar.

* NGN

  Nigerian naira.

* NIO

  Nicaraguan córdoba.

* NOK

  Norwegian krone.

* NPR

  Nepalese rupee.

* NZD

  New zealand dollar.

* OMR

  Omani rial.

* PAB

  Panamanian balboa.

* PEN

  Peruvian sol.

* PGK

  Papua new guinean kina.

* PHP

  Philippine peso.

* PKR

  Pakistani rupee.

* PLN

  Polish złoty.

* PYG

  Paraguayan guaraní.

* QAR

  Qatari riyal.

* RON

  Romanian leu.

* RSD

  Serbian dinar.

* RUB

  Russian ruble.

* RWF

  Rwandan franc.

* SAR

  Saudi riyal.

* SBD

  Solomon islands dollar.

* SCR

  Seychellois rupee.

* SDG

  Sudanese pound.

* SEK

  Swedish krona.

* SGD

  Singapore dollar.

* SHP

  Saint helenian pound.

* SKK

  Slovak koruna.

* SLL

  Sierra leonean leone.

* SOS

  Somali shilling.

* SRD

  Surinamese dollar.

* SSP

  South sudanese pound.

* STD

  São tomé and príncipe dobra.

* STN

  São tomé and príncipe dobra.

* SVC

  Salvadoran colón.

* SYP

  Syrian pound.

* SZL

  Swazi lilangeni.

* THB

  Thai baht.

* TJS

  Tajikistani somoni.

* TMM

  Turkmenistani manat.

* TMT

  Turkmenistani manat.

* TND

  Tunisian dinar.

* TOP

  Tongan paʻanga.

* TRY

  Turkish lira.

* TTD

  Trinidad and tobago dollar.

* TWD

  New taiwan dollar.

* TZS

  Tanzanian shilling.

* UAH

  Ukrainian hryvnia.

* UGX

  Ugandan shilling.

* USD

  United states dollar.

* UYU

  Uruguayan peso.

* UZS

  Uzbekistan som.

* VEB

  Venezuelan bolívar.

* VED

  Venezuelan bolívar soberano.

* VEF

  Venezuelan bolívar fuerte.

* VES

  Venezuelan bolívar soberano.

* VND

  Vietnamese đồng.

* VUV

  Vanuatu vatu.

* WST

  Samoan tala.

* XAF

  Central african cfa franc.

* XAG

  Silver (troy ounce).

* XAU

  Gold (troy ounce).

* XBA

  European composite unit.

* XBB

  European monetary unit.

* XBC

  European unit of account 9.

* XBD

  European unit of account 17.

* XCD

  East caribbean dollar.

* XDR

  Special drawing rights.

* XFU

  Uic franc.

* XOF

  West african cfa franc.

* XPD

  Palladium.

* XPF

  Cfp franc.

* XPT

  Platinum.

* xts

  Codes specifically reserved for testing purposes.

* YER

  Yemeni rial.

* ZAR

  South african rand.

* ZMK

  Zambian kwacha.

* ZMW

  Zambian kwacha.

* ZWD

  Zimbabwean dollar.

* ZWL

  Zimbabwean dollar.

* ZWN

  Zimbabwean dollar.

* ZWR

  Zimbabwean dollar.

***

### Fields

* [Money.currencyCode](https://shopify.dev/docs/api/partner/latest/objects/Money#field-Money.fields.currencyCode)

  OBJECT

  A monetary value with currency.

* [Money​Input.currencyCode](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput#fields-currencyCode)

  INPUT OBJECT

  A monetary value with currency.

***

### Map

#### Fields with this enum

* [Money.currencyCode](https://shopify.dev/docs/api/partner/latest/objects/Money#field-Money.fields.currencyCode)

#### Inputs with this enum

* [Money​Input.currencyCode](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput#fields-currencyCode)

---



<a id="latest-enums-referralcategory"></a>


## Referral​Category

enum

The referral type.

### Valid values

* AFFILIATE\_​STORES

  The merchant was referred using an affiliate link.

* INTUIT\_​POINT\_​OF\_​SALE

  The merchant was referred from an Intuit Channel Partner.

* MARKETS\_​PRO

  The merchant was referred to Markets Pro by a partner.

* PARTNER\_​DEVELOPMENT\_​FUNDS

  Partner Development Funds adjustment.

* POINT\_​OF\_​SALE

  The merchant was referred using the Partner POS lead form.

* POS\_​SHOPIFY\_​PAYMENTS\_​PROFIT

  The merchant was referred to POS by a partner.

* SHOPIFY\_​PLUS

  The merchant was referred using the Shopify Plus lead form.

* SHOPIFY\_​PLUS\_​ONE\_​TIME\_​REFERRAL

  The merchant was referred to Shopify Plus by a partner.

* TRANSFERRED\_​STORES

  The merchant was referred using a development store transfer.

***

### Fields

* [Referral​Adjustment.category](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.category)

  OBJECT

  A transaction corresponding to a shop referral adjustment.

* [Referral​Transaction.category](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.category)

  OBJECT

  A transaction corresponding to a shop referral.

***

### Map

#### Fields with this enum

* [Referral​Adjustment.category](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.category)
* [Referral​Transaction.category](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.category)

---



<a id="latest-enums-taxtransactiontype"></a>


## Tax​Transaction​Type

enum

The tax model applied to the transaction, based on the transaction type.

### Valid values

* REFERRAL\_​COMMISSION

  The taxes paid out on your commission fee for a referral.

* SALE\_​SHOPIFY\_​FEE

  Deprecated

***

### Fields

* [Tax​Transaction.type](https://shopify.dev/docs/api/partner/latest/objects/TaxTransaction#field-TaxTransaction.fields.type)

  OBJECT

  Deprecated

***

### Map

---



<a id="latest-enums-transactiontype"></a>


## Transaction​Type

enum

The type of transaction.

### Valid values

* APP\_​ONE\_​TIME\_​SALE

  A transaction corresponding to a one-time app charge.

* APP\_​SALE\_​ADJUSTMENT

  A transaction corresponding to a refund, downgrade, or adjustment of an app charge.

* APP\_​SALE\_​CREDIT

  A transaction corresponding to an [app credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit).

* APP\_​SUBSCRIPTION\_​SALE

  A transaction corresponding to an app subscription charge.

* APP\_​USAGE\_​SALE

  A transaction corresponding to an app usage charge.

* LEGACY

  A transaction of a type that is no longer supported.

* REFERRAL

  A transaction corresponding to a shop referral.

* REFERRAL\_​ADJUSTMENT

  A transaction corresponding to a shop referral adjustment.

* SERVICE\_​SALE

  A transaction corresponding to a paid invoice for a service.

* SERVICE\_​SALE\_​ADJUSTMENT

  A transaction corresponding to a refund, downgrade, or adjustment of a service sale.

* TAX

  Tax transactions are not computed for pending transactions. Instead, they're rolled up as one transaction per payout. The type of tax and the way it's computed is dependent on the type of transaction.

  For sale transactions, such as app subscriptions or theme purchases, Shopify charges the Partner tax on the fee collected for brokering the transaction. The amount is a negative number in this scenario.

  For referral transactions, such as a development store transfer, Shopify pays the Partner a commission. The tax represents any taxes on the referral commission that are payable to the Partner. The amount is a positive number in this scenario.

* THEME\_​SALE

  A transaction corresponding to a theme purchase.

* THEME\_​SALE\_​ADJUSTMENT

  A transaction corresponding to a refund, downgrade, or adjustment of a theme sale.

***

### Fields

* [Query​Root.transactions(types)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.types)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [transactions.types](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-types)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.transactions(types)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.types)
* [transactions.types](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-types)

---



<a id="latest-input-objects-moneyinput"></a>


## Money​Input

input\_object

A monetary value with currency.

### Fields

* amount

  [Decimal](https://shopify.dev/docs/api/partner/latest/scalars/Decimal)

  The amount of money.

* currency​Code

  [Currency](https://shopify.dev/docs/api/partner/latest/enums/Currency)

  Currency of the money.

***

### Map

No referencing types

---



<a id="latest-interfaces-actor"></a>


## Actor

interface

A Partner organization or shop.

### Fields

* avatar​Url

  [Url](https://shopify.dev/docs/api/partner/latest/scalars/Url)

  A URL referencing the avatar associated with the actor.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier for the actor. Example value: `gid://partners/Shop/1234`.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the actor. This might be a Partner organization or shop name.

***

###### Variables

```json
{
	"avatarUrl": "",
	"id": "",
	"name": ""
}
```

###### Schema

```graphql
interface Actor {
  avatarUrl: Url
  id: ID!
  name: String!
}
```

---



<a id="latest-interfaces-appcharge"></a>


## App​Charge

interface

A [charge](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcharge) created through an app.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The amount of the app charge.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the app charge.

* test

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the app purchase was a test transaction.

***

###### Variables

```json
{
	"amount": "",
	"id": "",
	"name": "",
	"test": ""
}
```

###### Schema

```graphql
interface AppCharge {
  amount: Money!
  id: ID!
  name: String!
  test: Boolean!
}
```

---



<a id="latest-interfaces-appcreditevent"></a>


## App​Credit​Event

interface

An event involving an app credit.

### Fields

* app​Credit

  [App​Credit!](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  non-null

  A [credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit) issued to a merchant for an app. Merchants are entitled to app credits under certain circumstances, such as when a paid app subscription is downgraded partway through its billing cycle.

***

###### Variables

```json
{
	"appCredit": ""
}
```

###### Schema

```graphql
interface AppCreditEvent {
  appCredit: AppCredit!
}
```

---



<a id="latest-interfaces-appevent"></a>


## App​Event

interface

An event related to a Shopify app.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

###### Variables

```json
{
	"app": "",
	"occurredAt": "",
	"shop": "",
	"type": ""
}
```

###### Schema

```graphql
interface AppEvent {
  app: App!
  occurredAt: DateTime!
  shop: Shop!
  type: AppEventTypes!
}
```

---



<a id="latest-interfaces-apppurchaseonetimeevent"></a>


## App​Purchase​One​Time​Event

interface

An app event for a one-time app charge.

### Fields

* charge

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime)

  non-null

  A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

***

###### Variables

```json
{
	"charge": ""
}
```

###### Schema

```graphql
interface AppPurchaseOneTimeEvent {
  charge: AppPurchaseOneTime!
}
```

---



<a id="latest-interfaces-appsubscriptionevent"></a>


## App​Subscription​Event

interface

An event related to an [app subscription charge](https://shopify.dev/docs/admin-api/rest/reference/billing/recurringapplicationcharge).

### Fields

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

***

###### Variables

```json
{
	"charge": ""
}
```

###### Schema

```graphql
interface AppSubscriptionEvent {
  charge: AppSubscription!
}
```

---



<a id="latest-interfaces-appusagerecordevent"></a>


## App​Usage​Record​Event

interface

An app event for an app usage charge.

### Fields

* charge

  [App​Usage​Record!](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord)

  non-null

  An app charge. This charge varies based on how much the merchant uses the app or a service that the app integrates with.

***

###### Variables

```json
{
	"charge": ""
}
```

###### Schema

```graphql
interface AppUsageRecordEvent {
  charge: AppUsageRecord!
}
```

---



<a id="latest-interfaces-transaction"></a>


## Transaction

interface

A Shopify Partner transaction.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

***

###### Variables

```json
{
	"createdAt": "",
	"id": ""
}
```

###### Schema

```graphql
interface Transaction {
  createdAt: DateTime!
  id: ID!
}
```

---



<a id="latest-mutations-appcreditcreate"></a>


## app​Credit​Create

mutation

Allows an app to create a credit for a shop that can be used towards future app purchases. This mutation is only available to Partner API clients that have been granted the `View financials` permission.

### Arguments

* amount

  [Money​Input!](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput)

  required

  The amount that can be used towards future app purchases in Shopify.

* app​Id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  required

  The id of the app to associate the credit with. Example value: `gid://partners/App/123`.

* description

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  required

  The description of the app credit.

* shop​Id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  required

  The id of the shop to be credited. Example value: `gid://partners/Shop/456`.

* test

  [Boolean](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  Default:false

  Specifies whether the app credit is a test transaction.

***

### App​Credit​Create​Payload returns

* app​Credit

  [App​Credit](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  The app credit that was created.

* user​Errors

  [\[User​Error!\]](https://shopify.dev/docs/api/partner/latest/objects/UserError)

  Errors when creating the application credit.

***

### Examples

* ### appCreditCreate reference

---



<a id="latest-objects-apiversion"></a>


## Api​Version

object

A version of the API.

### Fields

* display​Name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The human-readable name of the version.

* handle

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

* supported

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the version is supported by Shopify.

***

### Map

No referencing types

***

### Queries

* [public​Api​Versions](https://shopify.dev/docs/api/partner/latest/queries/publicApiVersions)

  query

  The list of public Partner API versions, including supported, release candidate and unstable versions.

***

### ApiVersion Queries

#### Queried by

* [public​Api​Versions](https://shopify.dev/docs/api/partner/latest/queries/publicApiVersions)

---



<a id="latest-objects-app"></a>


## App

object

A Shopify [app](https://shopify.dev/concepts/apps).

### Fields

* api​Key

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  A unique application API identifier.

* events

  [App​Event​Connection!](https://shopify.dev/docs/api/partner/latest/connections/AppEventConnection)

  non-null

  A list of app events.

  * after

    [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

    ### Arguments

    Returns the elements in the list that come after the specified cursor.

  * before

    [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

    Returns the elements in the list that come before the specified cursor.

  * first

    [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

    Returns the first *n* elements from the list.

  * last

    [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

    Returns the last *n* elements from the list.

  * types

    [\[App​Event​Types!\]](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

    Returns app events of the specified types.

  * shop​Id

    [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    Returns app events associated with the specified shop ID. Example value: `gid://partners/Shop/1234`.

  * charge​Id

    [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    Returns app events associated with the specified [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api). Example value: `gid://shopify/AppUsageRecord/1234`.

  * occurred​At​Min

    [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

    Returns app events that occurred on or after the specified date and time.

  * occurred​At​Max

    [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

    Returns app events that occurred on or before the specified date and time.

  ***

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The ID of the app. Example value: `gid://partners/App/1234`.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the app.

***

### Map

#### Fields with this object

* [AppEvent.app](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent#fields-app)
* [AppOneTimeSale.app](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.app)
* [AppSaleAdjustment.app](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.app)
* [AppSaleCredit.app](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.app)
* [AppSubscriptionSale.app](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.app)
* [AppUsageSale.app](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.app)
* [CreditApplied.app](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.app)
* [CreditFailed.app](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.app)
* [CreditPending.app](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.app)
* [OneTimeChargeAccepted.app](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.app)
* [OneTimeChargeActivated.app](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.app)
* [OneTimeChargeDeclined.app](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.app)
* [OneTimeChargeExpired.app](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.app)
* [RelationshipDeactivated.app](https://shopify.dev/docs/api/partner/latest/objects/RelationshipDeactivated#field-RelationshipDeactivated.fields.app)
* [RelationshipInstalled.app](https://shopify.dev/docs/api/partner/latest/objects/RelationshipInstalled#field-RelationshipInstalled.fields.app)
* [RelationshipReactivated.app](https://shopify.dev/docs/api/partner/latest/objects/RelationshipReactivated#field-RelationshipReactivated.fields.app)
* [RelationshipUninstalled.app](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.app)
* [SubscriptionApproachingCappedAmount.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.app)
* [SubscriptionCappedAmountUpdated.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.app)
* [SubscriptionChargeAccepted.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.app)
* [SubscriptionChargeActivated.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.app)
* [SubscriptionChargeCanceled.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.app)
* [SubscriptionChargeDeclined.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.app)
* [SubscriptionChargeExpired.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.app)
* [SubscriptionChargeFrozen.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.app)
* [SubscriptionChargeUnfrozen.app](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeUnfrozen#field-SubscriptionChargeUnfrozen.fields.app)
* [UsageChargeApplied.app](https://shopify.dev/docs/api/partner/latest/objects/UsageChargeApplied#field-UsageChargeApplied.fields.app)

***

### Queries

* [app](https://shopify.dev/docs/api/partner/latest/queries/app)

  query

  A Shopify [app](https://shopify.dev/concepts/apps).

  * id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    ### Arguments

    The app ID. Example value: `gid://partners/App/1234`.

  ***

***

### App Queries

#### Queried by

* [app](https://shopify.dev/docs/api/partner/latest/queries/app)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

  interface

***

### App Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-appcredit"></a>


## App​Credit

object

A [credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit) issued to a merchant for an app. Merchants are entitled to app credits under certain circumstances, such as when a paid app subscription is downgraded partway through its billing cycle.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The amount that can be used towards future app purchases in Shopify.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The description of the app credit.

* test

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the app credit was a test transaction.

***

### Map

#### Fields with this object

* [AppCreditEvent.appCredit](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent#fields-appCredit)
* [CreditApplied.appCredit](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.appCredit)
* [CreditFailed.appCredit](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.appCredit)
* [CreditPending.appCredit](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.appCredit)

***

### Mutations

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

  mutation

  Allows an app to create a credit for a shop that can be used towards future app purchases. This mutation is only available to Partner API clients that have been granted the `View financials` permission.

  * app​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    ### Arguments

    The id of the app to associate the credit with. Example value: `gid://partners/App/123`.

  * shop​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    The id of the shop to be credited. Example value: `gid://partners/Shop/456`.

  * amount

    [Money​Input!](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput)

    required

    The amount that can be used towards future app purchases in Shopify.

  * description

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    required

    The description of the app credit.

  * test

    [Boolean](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

    Default:false

    Specifies whether the app credit is a test transaction.

  ***

***

### AppCredit Mutations

#### Mutated by

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

***

### Interfaces

* * [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### AppCredit Implements

#### Implements

* [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-apponetimesale"></a>


## App​One​Time​Sale

object

A transaction corresponding to a one-time app charge.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  The app associated with the sale.

* charge​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  The ID of the [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api) associated with the transaction. Example value: `gid://shopify/AppUsageRecord/1234`. This value might be `null` for transactions that occurred before September 2020.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### AppOneTimeSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-apppurchaseonetime"></a>


## App​Purchase​One​Time

object

A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The amount of the app charge.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the app charge.

* test

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the app purchase was a test transaction.

***

### Map

#### Fields with this object

* [AppPurchaseOneTimeEvent.charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent#fields-charge)
* [OneTimeChargeAccepted.charge](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.charge)
* [OneTimeChargeActivated.charge](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.charge)
* [OneTimeChargeDeclined.charge](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.charge)
* [OneTimeChargeExpired.charge](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.charge)

***

### Interfaces

* * [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### AppPurchaseOneTime Implements

#### Implements

* [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-appsaleadjustment"></a>


## App​Sale​Adjustment

object

A transaction corresponding to a refund, downgrade, or adjustment of an app charge.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  The app associated with the refund.

* charge​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  The ID of the [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api) associated with the transaction. Example value: `gid://shopify/AppUsageRecord/1234`. This value might be `null` for transactions that occurred before September 2020.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the adjustment.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### AppSaleAdjustment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-appsalecredit"></a>


## App​Sale​Credit

object

A transaction corresponding to an [app credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit).

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  The app associated with the sale.

* charge​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  The ID of the [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api) associated with the transaction. Example value: `gid://shopify/AppUsageRecord/1234`. This value might be `null` for transactions that occurred before September 2020.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### AppSaleCredit Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-appsubscription"></a>


## App​Subscription

object

A recurring charge for use of an app, such as a monthly subscription charge.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The amount of the app charge.

* billing​On

  [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  The date when the merchant will next be billed.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the app charge.

* test

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the app purchase was a test transaction.

***

### Map

#### Fields with this object

* [AppSubscriptionEvent.charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent#fields-charge)
* [SubscriptionApproachingCappedAmount.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.charge)
* [SubscriptionCappedAmountUpdated.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.charge)
* [SubscriptionChargeAccepted.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.charge)
* [SubscriptionChargeActivated.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.charge)
* [SubscriptionChargeCanceled.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.charge)
* [SubscriptionChargeDeclined.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.charge)
* [SubscriptionChargeExpired.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.charge)
* [SubscriptionChargeFrozen.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.charge)
* [SubscriptionChargeUnfrozen.charge](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeUnfrozen#field-SubscriptionChargeUnfrozen.fields.charge)

***

### Interfaces

* * [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### AppSubscription Implements

#### Implements

* [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-appsubscriptionsale"></a>


## App​Subscription​Sale

object

A transaction corresponding to an app subscription charge.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  The app associated with the sale.

* billing​Interval

  [App​Pricing​Interval](https://shopify.dev/docs/api/partner/latest/enums/AppPricingInterval)

  The billing frequency for the app.

* charge​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  The ID of the [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api) associated with the transaction. Example value: `gid://shopify/AppUsageRecord/1234`. This value might be `null` for transactions that occurred before September 2020.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### AppSubscriptionSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-appusagerecord"></a>


## App​Usage​Record

object

An app charge. This charge varies based on how much the merchant uses the app or a service that the app integrates with.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The amount of the app charge.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the app charge.

* test

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether the app purchase was a test transaction.

***

### Map

#### Fields with this object

* [AppUsageRecordEvent.charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppUsageRecordEvent#fields-charge)
* [UsageChargeApplied.charge](https://shopify.dev/docs/api/partner/latest/objects/UsageChargeApplied#field-UsageChargeApplied.fields.charge)

***

### Interfaces

* * [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### AppUsageRecord Implements

#### Implements

* [App​Charge](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-appusagesale"></a>


## App​Usage​Sale

object

A transaction corresponding to an app usage charge.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  The app associated with the sale.

* charge​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  The ID of the [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api) associated with the transaction. Example value: `gid://shopify/AppUsageRecord/1234`. This value might be `null` for transactions that occurred before September 2020.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### AppUsageSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-creditapplied"></a>


## Credit​Applied

object

An event that marks that an app credit was applied.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* app​Credit

  [App​Credit!](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  non-null

  A [credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit) issued to a merchant for an app. Merchants are entitled to app credits under certain circumstances, such as when a paid app subscription is downgraded partway through its billing cycle.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)

    interface

  * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

***

### CreditApplied Implements

#### Implements

* [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)
* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-creditfailed"></a>


## Credit​Failed

object

An event that marks that an app credit failed to apply.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* app​Credit

  [App​Credit!](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  non-null

  A [credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit) issued to a merchant for an app. Merchants are entitled to app credits under certain circumstances, such as when a paid app subscription is downgraded partway through its billing cycle.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)

    interface

  * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

***

### CreditFailed Implements

#### Implements

* [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)
* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-creditpending"></a>


## Credit​Pending

object

An event that marks that an app credit is pending.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* app​Credit

  [App​Credit!](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  non-null

  A [credit](https://shopify.dev/docs/admin-api/rest/reference/billing/applicationcredit) issued to a merchant for an app. Merchants are entitled to app credits under certain circumstances, such as when a paid app subscription is downgraded partway through its billing cycle.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)

    interface

  * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

***

### CreditPending Implements

#### Implements

* [App​Credit​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppCreditEvent)
* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-legacytransaction"></a>


## Legacy​Transaction

object

A transaction of a type that is no longer supported.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### LegacyTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-money"></a>


## Money

object

A monetary value with currency.

### Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/partner/latest/scalars/Decimal)

  non-null

  The decimal money amount.

* currency​Code

  [Currency!](https://shopify.dev/docs/api/partner/latest/enums/Currency)

  non-null

  The currency.

***

### Map

#### Fields with this object

* [AppCharge.amount](https://shopify.dev/docs/api/partner/latest/interfaces/AppCharge#fields-amount)
* [AppCredit.amount](https://shopify.dev/docs/api/partner/latest/objects/AppCredit#field-AppCredit.fields.amount)
* [AppOneTimeSale.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.grossAmount)
* [AppOneTimeSale.netAmount](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.netAmount)
* [AppOneTimeSale.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.shopifyFee)
* [AppPurchaseOneTime.amount](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.amount)
* [AppSaleAdjustment.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.grossAmount)
* [AppSaleAdjustment.netAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.netAmount)
* [AppSaleAdjustment.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.shopifyFee)
* [AppSaleCredit.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.grossAmount)
* [AppSaleCredit.netAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.netAmount)
* [AppSaleCredit.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.shopifyFee)
* [AppSubscription.amount](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription#field-AppSubscription.fields.amount)
* [AppSubscriptionSale.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.grossAmount)
* [AppSubscriptionSale.netAmount](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.netAmount)
* [AppSubscriptionSale.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.shopifyFee)
* [AppUsageRecord.amount](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.amount)
* [AppUsageSale.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.grossAmount)
* [AppUsageSale.netAmount](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.netAmount)
* [AppUsageSale.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.shopifyFee)
* [LegacyTransaction.amount](https://shopify.dev/docs/api/partner/latest/objects/LegacyTransaction#field-LegacyTransaction.fields.amount)
* [ReferralAdjustment.amount](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.amount)
* [ReferralTransaction.amount](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.amount)
* [ServiceSale.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.grossAmount)
* [ServiceSale.netAmount](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.netAmount)
* [ServiceSale.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.shopifyFee)
* [ServiceSaleAdjustment.grossAmount](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.grossAmount)
* [ServiceSaleAdjustment.netAmount](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.netAmount)
* [ServiceSaleAdjustment.shopifyFee](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.shopifyFee)
* [TaxTransaction.amount](https://shopify.dev/docs/api/partner/latest/objects/TaxTransaction#field-TaxTransaction.fields.amount)

---



<a id="latest-objects-mutationroot"></a>


## Mutation​Root

object

The schema's entry-point for mutations. This acts as the public, top-level API from which all mutations must start.

### Map

No referencing types

---



<a id="latest-objects-onetimechargeaccepted"></a>


## One​Time​Charge​Accepted

object

An event that marks that a one-time app charge was accepted by the merchant.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime)

  non-null

  A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

    interface

***

### OneTimeChargeAccepted Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

---



<a id="latest-objects-onetimechargeactivated"></a>


## One​Time​Charge​Activated

object

An event that marks that a one-time app charge was activated.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime)

  non-null

  A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

    interface

***

### OneTimeChargeActivated Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

---



<a id="latest-objects-onetimechargedeclined"></a>


## One​Time​Charge​Declined

object

An event that marks that a one-time app charge was declined by the merchant.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime)

  non-null

  A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

    interface

***

### OneTimeChargeDeclined Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

---



<a id="latest-objects-onetimechargeexpired"></a>


## One​Time​Charge​Expired

object

An event that marks that a one-time app charge expired before the merchant could accept it.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Purchase​One​Time!](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime)

  non-null

  A one-time app charge for services and features purchased once by a store. For example, a one-time migration of a merchant's data from one platform to another.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

    interface

***

### OneTimeChargeExpired Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Purchase​One​Time​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppPurchaseOneTimeEvent)

---



<a id="latest-objects-organization"></a>


## Organization

object

A Partner organization.

### Fields

* avatar​Url

  [Url](https://shopify.dev/docs/api/partner/latest/scalars/Url)

  A URL referencing the avatar associated with the actor.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier for the actor. Example value: `gid://partners/Shop/1234`.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the actor. This might be a Partner organization or shop name.

***

### Map

No referencing types

***

### Interfaces

* * [Actor](https://shopify.dev/docs/api/partner/latest/interfaces/Actor)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### Organization Implements

#### Implements

* [Actor](https://shopify.dev/docs/api/partner/latest/interfaces/Actor)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-pageinfo"></a>


## Page​Info

object

Information about pagination in a connection.

### Fields

* has​Next​Page

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether there are more pages to fetch.

* has​Previous​Page

  [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

  non-null

  Whether there are any pages prior to the current page.

***

### Map

#### Connections with this object

* [AppEventConnection.pageInfo](https://shopify.dev/docs/api/partner/latest/connections/AppEventConnection#returns-pageInfo)
* [TransactionConnection.pageInfo](https://shopify.dev/docs/api/partner/latest/connections/TransactionConnection#returns-pageInfo)

---



<a id="latest-objects-queryroot"></a>


## Query​Root

object

The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

### Map

No referencing types

---



<a id="latest-objects-referraladjustment"></a>


## Referral​Adjustment

object

A transaction corresponding to a shop referral adjustment.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* category

  [Referral​Category!](https://shopify.dev/docs/api/partner/latest/enums/ReferralCategory)

  non-null

  The referral type.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The referred shop.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ReferralAdjustment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-referraltransaction"></a>


## Referral​Transaction

object

A transaction corresponding to a shop referral.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to your payout.

* category

  [Referral​Category!](https://shopify.dev/docs/api/partner/latest/enums/ReferralCategory)

  non-null

  The referral type.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  The referred shop.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ReferralTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-relationshipdeactivated"></a>


## Relationship​Deactivated

object

An event that marks that an app was deactivated.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

  interface

***

### RelationshipDeactivated Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-relationshipinstalled"></a>


## Relationship​Installed

object

An event that marks that an app was installed.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

  interface

***

### RelationshipInstalled Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-relationshipreactivated"></a>


## Relationship​Reactivated

object

An event that marks that an app was reactivated.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

  interface

***

### RelationshipReactivated Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-relationshipuninstalled"></a>


## Relationship​Uninstalled

object

An event that marks that an app was uninstalled.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* description

  [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

  More details from the merchant about why they uninstalled the app.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* reason

  [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

  A comma separated list of reasons why the merchant uninstalled the app.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

  interface

***

### RelationshipUninstalled Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

---



<a id="latest-objects-servicesale"></a>


## Service​Sale

object

A transaction corresponding to a paid invoice for a service.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ServiceSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-servicesaleadjustment"></a>


## Service​Sale​Adjustment

object

A transaction corresponding to a refund, downgrade, or adjustment of a service sale.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the adjustment.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ServiceSaleAdjustment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-shop"></a>


## Shop

object

A Shopify shop.

### Fields

* avatar​Url

  [Url](https://shopify.dev/docs/api/partner/latest/scalars/Url)

  A URL referencing the avatar associated with the actor.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  A globally unique identifier for the actor. Example value: `gid://partners/Shop/1234`.

* myshopify​Domain

  [Url!](https://shopify.dev/docs/api/partner/latest/scalars/Url)

  non-null

  The shop's `.myshopify.com` domain name.

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the actor. This might be a Partner organization or shop name.

***

### Map

#### Fields with this object

* [AppEvent.shop](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent#fields-shop)
* [AppOneTimeSale.shop](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.shop)
* [AppSaleAdjustment.shop](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.shop)
* [AppSaleCredit.shop](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.shop)
* [AppSubscriptionSale.shop](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.shop)
* [AppUsageSale.shop](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.shop)
* [CreditApplied.shop](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.shop)
* [CreditFailed.shop](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.shop)
* [CreditPending.shop](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.shop)
* [LegacyTransaction.shop](https://shopify.dev/docs/api/partner/latest/objects/LegacyTransaction#field-LegacyTransaction.fields.shop)
* [OneTimeChargeAccepted.shop](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.shop)
* [OneTimeChargeActivated.shop](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.shop)
* [OneTimeChargeDeclined.shop](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.shop)
* [OneTimeChargeExpired.shop](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.shop)
* [ReferralAdjustment.shop](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.shop)
* [ReferralTransaction.shop](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.shop)
* [RelationshipDeactivated.shop](https://shopify.dev/docs/api/partner/latest/objects/RelationshipDeactivated#field-RelationshipDeactivated.fields.shop)
* [RelationshipInstalled.shop](https://shopify.dev/docs/api/partner/latest/objects/RelationshipInstalled#field-RelationshipInstalled.fields.shop)
* [RelationshipReactivated.shop](https://shopify.dev/docs/api/partner/latest/objects/RelationshipReactivated#field-RelationshipReactivated.fields.shop)
* [RelationshipUninstalled.shop](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.shop)
* [ServiceSale.shop](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.shop)
* [ServiceSaleAdjustment.shop](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.shop)
* [SubscriptionApproachingCappedAmount.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.shop)
* [SubscriptionCappedAmountUpdated.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.shop)
* [SubscriptionChargeAccepted.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.shop)
* [SubscriptionChargeActivated.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.shop)
* [SubscriptionChargeCanceled.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.shop)
* [SubscriptionChargeDeclined.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.shop)
* [SubscriptionChargeExpired.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.shop)
* [SubscriptionChargeFrozen.shop](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.shop)

***

### Interfaces

* * [Actor](https://shopify.dev/docs/api/partner/latest/interfaces/Actor)

    interface

  * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

***

### Shop Implements

#### Implements

* [Actor](https://shopify.dev/docs/api/partner/latest/interfaces/Actor)
* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

---



<a id="latest-objects-subscriptionapproachingcappedamount"></a>


## Subscription​Approaching​Capped​Amount

object

An event that marks that a subscription is approaching its capped amount.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionApproachingCappedAmount Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptioncappedamountupdated"></a>


## Subscription​Capped​Amount​Updated

object

An event that marks that a subscription had its capped amount updated.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionCappedAmountUpdated Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargeaccepted"></a>


## Subscription​Charge​Accepted

object

An event that marks that a recurring app charge was accepted.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeAccepted Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargeactivated"></a>


## Subscription​Charge​Activated

object

An event that marks that a recurring app charge was activated.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeActivated Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargecanceled"></a>


## Subscription​Charge​Canceled

object

An event that marks that a recurring app charge was cancelled.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeCanceled Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargedeclined"></a>


## Subscription​Charge​Declined

object

An event that marks that a recurring app charge was declined.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeDeclined Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargeexpired"></a>


## Subscription​Charge​Expired

object

An event that marks that a recurring app charge has expired.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeExpired Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargefrozen"></a>


## Subscription​Charge​Frozen

object

An event that marks that a recurring app charge has been suspended. For example, if a merchant stops paying their bills, or closes their store, then Shopify suspends the recurring app charge.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeFrozen Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-subscriptionchargeunfrozen"></a>


## Subscription​Charge​Unfrozen

object

An event that marks that a recurring app charge was unfrozen.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Subscription!](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription)

  non-null

  A recurring charge for use of an app, such as a monthly subscription charge.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

    interface

***

### SubscriptionChargeUnfrozen Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Subscription​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppSubscriptionEvent)

---



<a id="latest-objects-taxtransaction"></a>


## Tax​Transaction

object

Tax transactions are not computed for pending transactions. Instead, they're rolled up as one transaction per payout. The type of tax and the way it's computed is dependent on the type of transaction.

For sale transactions, such as app subscriptions or theme purchases, Shopify charges the Partner tax on the fee collected for brokering the transaction. The amount is a negative number in this scenario.

For referral transactions, such as a development store transfer, Shopify pays the Partner a commission. The tax represents any taxes on the referral commission that are payable to the Partner. The amount is a positive number in this scenario.

### Fields

* amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* type

  [Tax​Transaction​Type!](https://shopify.dev/docs/api/partner/latest/enums/TaxTransactionType)

  non-nullDeprecated

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### TaxTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-theme"></a>


## Theme

object

A Shopify [theme](https://shopify.dev/concepts/themes).

### Fields

* name

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The name of the theme.

***

### Map

#### Fields with this object

* [ThemeSale.theme](https://shopify.dev/docs/api/partner/latest/objects/ThemeSale#field-ThemeSale.fields.theme)
* [ThemeSaleAdjustment.theme](https://shopify.dev/docs/api/partner/latest/objects/ThemeSaleAdjustment#field-ThemeSaleAdjustment.fields.theme)

---



<a id="latest-objects-themesale"></a>


## Theme​Sale

object

A transaction corresponding to a theme purchase.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the sale.

* theme

  [Theme!](https://shopify.dev/docs/api/partner/latest/objects/Theme)

  non-null

  The theme associated with the purchase.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ThemeSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-themesaleadjustment"></a>


## Theme​Sale​Adjustment

object

A transaction corresponding to a refund, downgrade, or adjustment of a theme sale.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was recorded.

* gross​Amount

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The total amount that the merchant paid, excluding taxes.

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  non-null

  The transaction ID.

* net​Amount

  [Money!](https://shopify.dev/docs/api/partner/latest/objects/Money)

  non-null

  The net amount that is added to or deducted from your payout.

* shop

  [Shop](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  The shop associated with the transaction.

* shopify​Fee

  [Money](https://shopify.dev/docs/api/partner/latest/objects/Money)

  The amount that Shopify retained from the adjustment.

* theme

  [Theme!](https://shopify.dev/docs/api/partner/latest/objects/Theme)

  non-null

  The theme associated with the refund.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)

    interface

  * [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

    interface

***

### ThemeSaleAdjustment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/partner/latest/interfaces/Node)
* [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

---



<a id="latest-objects-usagechargeapplied"></a>


## Usage​Charge​Applied

object

An event that marks that an app usage charge was applied.

### Fields

* app

  [App!](https://shopify.dev/docs/api/partner/latest/objects/App)

  non-null

  A Shopify [app](https://shopify.dev/concepts/apps).

* charge

  [App​Usage​Record!](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord)

  non-null

  An app charge. This charge varies based on how much the merchant uses the app or a service that the app integrates with.

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  non-null

  The date and time when the event took place.

* shop

  [Shop!](https://shopify.dev/docs/api/partner/latest/objects/Shop)

  non-null

  A Shopify shop.

* type

  [App​Event​Types!](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

  non-null

  The type of app event.

***

### Map

No referencing types

***

### Interfaces

* * [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)

    interface

  * [App​Usage​Record​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppUsageRecordEvent)

    interface

***

### UsageChargeApplied Implements

#### Implements

* [App​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppEvent)
* [App​Usage​Record​Event](https://shopify.dev/docs/api/partner/latest/interfaces/AppUsageRecordEvent)

---



<a id="latest-objects-usererror"></a>


## User​Error

object

Represents an error in a mutation.

### Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/partner/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

  mutation

  Allows an app to create a credit for a shop that can be used towards future app purchases. This mutation is only available to Partner API clients that have been granted the `View financials` permission.

  * app​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    ### Arguments

    The id of the app to associate the credit with. Example value: `gid://partners/App/123`.

  * shop​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    The id of the shop to be credited. Example value: `gid://partners/Shop/456`.

  * amount

    [Money​Input!](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput)

    required

    The amount that can be used towards future app purchases in Shopify.

  * description

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    required

    The description of the app credit.

  * test

    [Boolean](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

    Default:false

    Specifies whether the app credit is a test transaction.

  ***

***

### UserError Mutations

#### Mutated by

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

---



<a id="latest-payloads-appcreditcreatepayload"></a>


## App​Credit​Create​Payload

payload

The result of an appCreditCreate mutation.

### Fields

* app​Credit

  [App​Credit](https://shopify.dev/docs/api/partner/latest/objects/AppCredit)

  The app credit that was created.

* user​Errors

  [\[User​Error!\]](https://shopify.dev/docs/api/partner/latest/objects/UserError)

  Errors when creating the application credit.

***

### Mutations with this payload

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

  mutation

  Allows an app to create a credit for a shop that can be used towards future app purchases. This mutation is only available to Partner API clients that have been granted the `View financials` permission.

  * app​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    ### Arguments

    The id of the app to associate the credit with. Example value: `gid://partners/App/123`.

  * shop​Id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    required

    The id of the shop to be credited. Example value: `gid://partners/Shop/456`.

  * amount

    [Money​Input!](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput)

    required

    The amount that can be used towards future app purchases in Shopify.

  * description

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    required

    The description of the app credit.

  * test

    [Boolean](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

    Default:false

    Specifies whether the app credit is a test transaction.

  ***

***

### Map

#### Mutations with this payload

* [app​Credit​Create](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate)

---



<a id="latest-queries-app"></a>


## app

query

A Shopify [app](https://shopify.dev/concepts/apps).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  required

  The app ID. Example value: `gid://partners/App/1234`.

***

### Possible returns

* App

  [App](https://shopify.dev/docs/api/partner/latest/objects/App)

  A Shopify [app](https://shopify.dev/concepts/apps).

  * api​Key

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    non-null

    A unique application API identifier.

  * events

    [App​Event​Connection!](https://shopify.dev/docs/api/partner/latest/connections/AppEventConnection)

    non-null

    A list of app events.

    * after

      [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

      ### Arguments

      Returns the elements in the list that come after the specified cursor.

    * before

      [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

      Returns the elements in the list that come before the specified cursor.

    * first

      [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

      Returns the first *n* elements from the list.

    * last

      [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

      Returns the last *n* elements from the list.

    * types

      [\[App​Event​Types!\]](https://shopify.dev/docs/api/partner/latest/enums/AppEventTypes)

      Returns app events of the specified types.

    * shop​Id

      [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

      Returns app events associated with the specified shop ID. Example value: `gid://partners/Shop/1234`.

    * charge​Id

      [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

      Returns app events associated with the specified [app charge](https://shopify.dev/tutorials/bill-for-your-app-using-graphql-admin-api). Example value: `gid://shopify/AppUsageRecord/1234`.

    * occurred​At​Min

      [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

      Returns app events that occurred on or after the specified date and time.

    * occurred​At​Max

      [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

      Returns app events that occurred on or before the specified date and time.

    ***

  * id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    non-null

    The ID of the app. Example value: `gid://partners/App/1234`.

  * name

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    non-null

    The name of the app.

***

### Examples

* ### app reference

---



<a id="latest-queries-publicapiversions"></a>


## public​Api​Versions

query

The list of public Partner API versions, including supported, release candidate and unstable versions.

### Possible returns

* Api​Version

  [\[Api​Version!\]!](https://shopify.dev/docs/api/partner/latest/objects/ApiVersion)

  A version of the API.

  * display​Name

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    non-null

    The human-readable name of the version.

  * handle

    [String!](https://shopify.dev/docs/api/partner/latest/scalars/String)

    non-null

    The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

  * supported

    [Boolean!](https://shopify.dev/docs/api/partner/latest/scalars/Boolean)

    non-null

    Whether the version is supported by Shopify.

***

### Examples

* ### publicApiVersions reference

---



<a id="latest-queries-transaction"></a>


## transaction

query

A Shopify Partner transaction.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  required

  The transaction ID. Example value: `gid://partners/ThemeSale/1234`.

***

### Possible returns

* Transaction

  [Transaction](https://shopify.dev/docs/api/partner/latest/interfaces/Transaction)

  A Shopify Partner transaction.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

    non-null

    The date and time when the transaction was recorded.

  * id

    [ID!](https://shopify.dev/docs/api/partner/latest/scalars/ID)

    non-null

    The transaction ID.

***

### Examples

* ### transaction reference

---



<a id="latest-queries-transactions"></a>


## transactions

query

A list of the Partner organization's [transactions](https://help.shopify.com/partners/getting-started/getting-paid).

### TransactionConnection arguments

[TransactionConnection!](https://shopify.dev/docs/api/partner/latest/connections/TransactionConnection)

* after

  [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

  Returns the elements in the list that come after the specified cursor.

* app​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  Returns transactions associated with the specified app ID.

* before

  [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

  Returns the elements in the list that come before the specified cursor.

* created​At​Max

  [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  Returns transactions that were created on or before the specified date and time.

* created​At​Min

  [Date​Time](https://shopify.dev/docs/api/partner/latest/scalars/DateTime)

  Returns transactions that were created on or after the specified date and time.

* first

  [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

  Returns the first *n* elements from the list.

* last

  [Int](https://shopify.dev/docs/api/partner/latest/scalars/Int)

  Returns the last *n* elements from the list.

* myshopify​Domain

  [String](https://shopify.dev/docs/api/partner/latest/scalars/String)

  Returns transactions associated with the specified `.myshopify.com` shop domain. Example value: `example.myshopify.com`.

* shop​Id

  [ID](https://shopify.dev/docs/api/partner/latest/scalars/ID)

  Returns transactions associated with the specified shop ID.

* types

  [\[Transaction​Type!\]](https://shopify.dev/docs/api/partner/latest/enums/TransactionType)

  Returns transactions of the specified types.

***

### Possible returns

* edges

  [\[Transaction​Edge!\]!](https://shopify.dev/docs/api/partner/latest/objects/TransactionEdge)

  non-null

  A list of edges.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/partner/latest/objects/PageInfo)

  non-null

  Information about pagination in a connection.

***

### Examples

* ### transactions reference

---



<a id="latest-scalars-boolean"></a>


## Boolean

scalar

Represents `true` or `false` values.

### Map

#### Fields with this scalar

* [Api​Version.supported](https://shopify.dev/docs/api/partner/latest/objects/ApiVersion#field-ApiVersion.fields.supported)
* [App​Credit.test](https://shopify.dev/docs/api/partner/latest/objects/AppCredit#field-AppCredit.fields.test)
* [App​Purchase​One​Time.test](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.test)
* [App​Subscription.test](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription#field-AppSubscription.fields.test)
* [App​Usage​Record.test](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.test)
* [Page​Info.hasNextPage](https://shopify.dev/docs/api/partner/latest/objects/PageInfo#field-PageInfo.fields.hasNextPage)
* [Page​Info.hasPreviousPage](https://shopify.dev/docs/api/partner/latest/objects/PageInfo#field-PageInfo.fields.hasPreviousPage)

#### Arguments with this scalar

* [app​Credit​Create.test](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate#arguments-test)

---



<a id="latest-scalars-datetime"></a>


## Date​Time

scalar

An [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) encoded UTC date time string. Example value: `"2019-07-03T20:47:55.123456Z"`.

### Map

#### Fields with this scalar

* [App​One​Time​Sale.createdAt](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.createdAt)
* [App​Sale​Adjustment.createdAt](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.createdAt)
* [App​Sale​Credit.createdAt](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.createdAt)
* [App​Subscription.billingOn](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription#field-AppSubscription.fields.billingOn)
* [App​Subscription​Sale.createdAt](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.createdAt)
* [App​Usage​Sale.createdAt](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.createdAt)
* [Credit​Applied.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/CreditApplied#field-CreditApplied.fields.occurredAt)
* [Credit​Failed.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/CreditFailed#field-CreditFailed.fields.occurredAt)
* [Credit​Pending.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/CreditPending#field-CreditPending.fields.occurredAt)
* [Legacy​Transaction.createdAt](https://shopify.dev/docs/api/partner/latest/objects/LegacyTransaction#field-LegacyTransaction.fields.createdAt)
* [One​Time​Charge​Accepted.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeAccepted#field-OneTimeChargeAccepted.fields.occurredAt)
* [One​Time​Charge​Activated.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeActivated#field-OneTimeChargeActivated.fields.occurredAt)
* [One​Time​Charge​Declined.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeDeclined#field-OneTimeChargeDeclined.fields.occurredAt)
* [One​Time​Charge​Expired.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/OneTimeChargeExpired#field-OneTimeChargeExpired.fields.occurredAt)
* [Referral​Adjustment.createdAt](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.createdAt)
* [Referral​Transaction.createdAt](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.createdAt)
* [Relationship​Deactivated.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/RelationshipDeactivated#field-RelationshipDeactivated.fields.occurredAt)
* [Relationship​Installed.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/RelationshipInstalled#field-RelationshipInstalled.fields.occurredAt)
* [Relationship​Reactivated.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/RelationshipReactivated#field-RelationshipReactivated.fields.occurredAt)
* [Relationship​Uninstalled.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.occurredAt)
* [Service​Sale.createdAt](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.createdAt)
* [Service​Sale​Adjustment.createdAt](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.createdAt)
* [Subscription​Approaching​Capped​Amount.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionApproachingCappedAmount#field-SubscriptionApproachingCappedAmount.fields.occurredAt)
* [Subscription​Capped​Amount​Updated.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionCappedAmountUpdated#field-SubscriptionCappedAmountUpdated.fields.occurredAt)
* [Subscription​Charge​Accepted.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeAccepted#field-SubscriptionChargeAccepted.fields.occurredAt)
* [Subscription​Charge​Activated.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeActivated#field-SubscriptionChargeActivated.fields.occurredAt)
* [Subscription​Charge​Canceled.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeCanceled#field-SubscriptionChargeCanceled.fields.occurredAt)
* [Subscription​Charge​Declined.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeDeclined#field-SubscriptionChargeDeclined.fields.occurredAt)
* [Subscription​Charge​Expired.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeExpired#field-SubscriptionChargeExpired.fields.occurredAt)
* [Subscription​Charge​Frozen.occurredAt](https://shopify.dev/docs/api/partner/latest/objects/SubscriptionChargeFrozen#field-SubscriptionChargeFrozen.fields.occurredAt)

#### Arguments with this scalar

* [App.events(occurredAtMin)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.occurredAtMin)
* [App.events(occurredAtMax)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.occurredAtMax)
* [Query​Root.transactions(createdAtMin)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.createdAtMin)
* [Query​Root.transactions(createdAtMax)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.createdAtMax)
* [transactions.createdAtMin](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-createdAtMin)
* [transactions.createdAtMax](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-createdAtMax)

---



<a id="latest-scalars-decimal"></a>


## Decimal

scalar

A signed decimal number, which supports arbitrary precision and is serialized as a string.

### Map

#### Fields with this scalar

* [Money.amount](https://shopify.dev/docs/api/partner/latest/objects/Money#field-Money.fields.amount)

#### Inputs with this scalar

* [Money​Input.amount](https://shopify.dev/docs/api/partner/latest/input-objects/MoneyInput#fields-amount)

---



<a id="latest-scalars-id"></a>


## ID

scalar

Represents a unique identifier that is Base64 obfuscated. It is often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"VXNlci0xMA=="`) or integer (such as `4`) input value will be accepted as an ID.

### Map

#### Fields with this scalar

* [App.id](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.id)
* [App​Credit.id](https://shopify.dev/docs/api/partner/latest/objects/AppCredit#field-AppCredit.fields.id)
* [App​One​Time​Sale.chargeId](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.chargeId)
* [App​One​Time​Sale.id](https://shopify.dev/docs/api/partner/latest/objects/AppOneTimeSale#field-AppOneTimeSale.fields.id)
* [App​Purchase​One​Time.id](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.id)
* [App​Sale​Adjustment.chargeId](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.chargeId)
* [App​Sale​Adjustment.id](https://shopify.dev/docs/api/partner/latest/objects/AppSaleAdjustment#field-AppSaleAdjustment.fields.id)
* [App​Sale​Credit.chargeId](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.chargeId)
* [App​Sale​Credit.id](https://shopify.dev/docs/api/partner/latest/objects/AppSaleCredit#field-AppSaleCredit.fields.id)
* [App​Subscription.id](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription#field-AppSubscription.fields.id)
* [App​Subscription​Sale.chargeId](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.chargeId)
* [App​Subscription​Sale.id](https://shopify.dev/docs/api/partner/latest/objects/AppSubscriptionSale#field-AppSubscriptionSale.fields.id)
* [App​Usage​Record.id](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.id)
* [App​Usage​Sale.chargeId](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.chargeId)
* [App​Usage​Sale.id](https://shopify.dev/docs/api/partner/latest/objects/AppUsageSale#field-AppUsageSale.fields.id)
* [Legacy​Transaction.id](https://shopify.dev/docs/api/partner/latest/objects/LegacyTransaction#field-LegacyTransaction.fields.id)
* [Organization.id](https://shopify.dev/docs/api/partner/latest/objects/Organization#field-Organization.fields.id)
* [Referral​Adjustment.id](https://shopify.dev/docs/api/partner/latest/objects/ReferralAdjustment#field-ReferralAdjustment.fields.id)
* [Referral​Transaction.id](https://shopify.dev/docs/api/partner/latest/objects/ReferralTransaction#field-ReferralTransaction.fields.id)
* [Service​Sale.id](https://shopify.dev/docs/api/partner/latest/objects/ServiceSale#field-ServiceSale.fields.id)
* [Service​Sale​Adjustment.id](https://shopify.dev/docs/api/partner/latest/objects/ServiceSaleAdjustment#field-ServiceSaleAdjustment.fields.id)
* [Shop.id](https://shopify.dev/docs/api/partner/latest/objects/Shop#field-Shop.fields.id)
* [Tax​Transaction.id](https://shopify.dev/docs/api/partner/latest/objects/TaxTransaction#field-TaxTransaction.fields.id)
* [Theme​Sale.id](https://shopify.dev/docs/api/partner/latest/objects/ThemeSale#field-ThemeSale.fields.id)
* [Theme​Sale​Adjustment.id](https://shopify.dev/docs/api/partner/latest/objects/ThemeSaleAdjustment#field-ThemeSaleAdjustment.fields.id)

#### Arguments with this scalar

* [App.events(shopId)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.shopId)
* [App.events(chargeId)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.chargeId)
* [Query​Root.app(id)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.app.arguments.id)
* [Query​Root.transaction(id)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transaction.arguments.id)
* [Query​Root.transactions(shopId)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.shopId)
* [Query​Root.transactions(appId)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.appId)
* [app​Credit​Create.appId](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate#arguments-appId)
* [app​Credit​Create.shopId](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate#arguments-shopId)
* [app.id](https://shopify.dev/docs/api/partner/latest/queries/app#arguments-id)
* [transaction.id](https://shopify.dev/docs/api/partner/latest/queries/transaction#arguments-id)
* [transactions.shopId](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-shopId)
* [transactions.appId](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-appId)

---



<a id="latest-scalars-int"></a>


## Int

scalar

Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Map

#### Arguments with this scalar

* [App.events(first)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.first)
* [App.events(last)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.last)
* [Query​Root.transactions(first)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.first)
* [Query​Root.transactions(last)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.last)
* [transactions.first](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-first)
* [transactions.last](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-last)

---



<a id="latest-scalars-string"></a>


## String

scalar

Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.

### Map

#### Fields with this scalar

* [Api​Version.displayName](https://shopify.dev/docs/api/partner/latest/objects/ApiVersion#field-ApiVersion.fields.displayName)
* [Api​Version.handle](https://shopify.dev/docs/api/partner/latest/objects/ApiVersion#field-ApiVersion.fields.handle)
* [App.apiKey](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.apiKey)
* [App.name](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.name)
* [App​Credit.name](https://shopify.dev/docs/api/partner/latest/objects/AppCredit#field-AppCredit.fields.name)
* [App​Event​Edge.cursor](https://shopify.dev/docs/api/partner/latest/objects/AppEventEdge#field-AppEventEdge.fields.cursor)
* [App​Purchase​One​Time.name](https://shopify.dev/docs/api/partner/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.name)
* [App​Subscription.name](https://shopify.dev/docs/api/partner/latest/objects/AppSubscription#field-AppSubscription.fields.name)
* [App​Usage​Record.name](https://shopify.dev/docs/api/partner/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.name)
* [Organization.name](https://shopify.dev/docs/api/partner/latest/objects/Organization#field-Organization.fields.name)
* [Relationship​Uninstalled.description](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.description)
* [Relationship​Uninstalled.reason](https://shopify.dev/docs/api/partner/latest/objects/RelationshipUninstalled#field-RelationshipUninstalled.fields.reason)
* [Shop.name](https://shopify.dev/docs/api/partner/latest/objects/Shop#field-Shop.fields.name)
* [Theme.name](https://shopify.dev/docs/api/partner/latest/objects/Theme#field-Theme.fields.name)
* [Transaction​Edge.cursor](https://shopify.dev/docs/api/partner/latest/objects/TransactionEdge#field-TransactionEdge.fields.cursor)
* [User​Error.field](https://shopify.dev/docs/api/partner/latest/objects/UserError#field-UserError.fields.field)
* [User​Error.message](https://shopify.dev/docs/api/partner/latest/objects/UserError#field-UserError.fields.message)

#### Arguments with this scalar

* [App.events(after)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.after)
* [App.events(before)](https://shopify.dev/docs/api/partner/latest/objects/App#field-App.fields.events.arguments.before)
* [Query​Root.transactions(after)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.after)
* [Query​Root.transactions(before)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.before)
* [Query​Root.transactions(myshopifyDomain)](https://shopify.dev/docs/api/partner/latest/objects/QueryRoot#field-QueryRoot.fields.transactions.arguments.myshopifyDomain)
* [app​Credit​Create.description](https://shopify.dev/docs/api/partner/latest/mutations/appCreditCreate#arguments-description)
* [transactions.after](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-after)
* [transactions.before](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-before)
* [transactions.myshopifyDomain](https://shopify.dev/docs/api/partner/latest/queries/transactions#arguments-myshopifyDomain)

---



<a id="latest-scalars-url"></a>


## Url

scalar

A valid URL, transported as a string.

### Map

#### Fields with this scalar

* [Organization.avatarUrl](https://shopify.dev/docs/api/partner/latest/objects/Organization#field-Organization.fields.avatarUrl)
* [Shop.avatarUrl](https://shopify.dev/docs/api/partner/latest/objects/Shop#field-Shop.fields.avatarUrl)
* [Shop.myshopifyDomain](https://shopify.dev/docs/api/partner/latest/objects/Shop#field-Shop.fields.myshopifyDomain)

---
