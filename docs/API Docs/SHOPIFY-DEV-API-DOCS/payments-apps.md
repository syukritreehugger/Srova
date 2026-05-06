# Shopify Payments Apps Reference (Indonesian / English)

> Referensi lengkap **Payments Apps** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/payments-apps.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/payments-apps` |
| Total halaman | **153** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [latest](#latest)
- [latest / enums / CaptureSessionRejectUserErrorCode](#latest-enums-capturesessionrejectusererrorcode)
- [latest / enums / CaptureSessionResolveUserErrorCode](#latest-enums-capturesessionresolveusererrorcode)
- [latest / enums / CaptureSessionStateCode](#latest-enums-capturesessionstatecode)
- [latest / enums / CaptureSessionStateRejectedReason](#latest-enums-capturesessionstaterejectedreason)
- [latest / enums / CaptureSessionStatusReasonRejectionCode](#latest-enums-capturesessionstatusreasonrejectioncode)
- [latest / enums / DigitalWallet](#latest-enums-digitalwallet)
- [latest / enums / PaymentSessionCardNotPresentAvsResultCode](#latest-enums-paymentsessioncardnotpresentavsresultcode)
- [latest / enums / PaymentSessionCardNotPresentCvvResultCode](#latest-enums-paymentsessioncardnotpresentcvvresultcode)
- [latest / enums / PaymentSessionConfirmUserErrorCode](#latest-enums-paymentsessionconfirmusererrorcode)
- [latest / enums / PaymentSessionModalUserErrorCode](#latest-enums-paymentsessionmodalusererrorcode)
- [latest / enums / PaymentSessionNextActionAction](#latest-enums-paymentsessionnextactionaction)
- [latest / enums / PaymentSessionPendingUserErrorCode](#latest-enums-paymentsessionpendingusererrorcode)
- [latest / enums / PaymentSessionRedirectUserErrorCode](#latest-enums-paymentsessionredirectusererrorcode)
- [latest / enums / PaymentSessionStateCode](#latest-enums-paymentsessionstatecode)
- [latest / enums / PaymentSessionStatePendingReason](#latest-enums-paymentsessionstatependingreason)
- [latest / enums / PaymentSessionStateRejectedReason](#latest-enums-paymentsessionstaterejectedreason)
- [latest / enums / PaymentSessionStateRejectedSource](#latest-enums-paymentsessionstaterejectedsource)
- [latest / enums / PaymentSessionThreeDSecureAuthenticationFlow](#latest-enums-paymentsessionthreedsecureauthenticationflow)
- [latest / enums / PaymentSessionThreeDSecureChargebackLiability](#latest-enums-paymentsessionthreedsecurechargebackliability)
- [latest / enums / PaymentSessionThreeDSecurePartnerError](#latest-enums-paymentsessionthreedsecurepartnererror)
- [latest / enums / PaymentSessionThreeDSecureTransStatus](#latest-enums-paymentsessionthreedsecuretransstatus)
- [latest / enums / PaymentSessionThreeDSecureVersion](#latest-enums-paymentsessionthreedsecureversion)
- [latest / enums / RefundSessionRejectUserErrorCode](#latest-enums-refundsessionrejectusererrorcode)
- [latest / enums / RefundSessionResolveUserErrorCode](#latest-enums-refundsessionresolveusererrorcode)
- [latest / enums / RefundSessionStateCode](#latest-enums-refundsessionstatecode)
- [latest / enums / RefundSessionStateRejectedReason](#latest-enums-refundsessionstaterejectedreason)
- [latest / enums / RefundSessionStatusReasonRejectionCode](#latest-enums-refundsessionstatusreasonrejectioncode)
- [latest / enums / VerificationSessionCardBrandInput](#latest-enums-verificationsessioncardbrandinput)
- [latest / enums / VerificationSessionNextActionAction](#latest-enums-verificationsessionnextactionaction)
- [latest / enums / VerificationSessionStateCode](#latest-enums-verificationsessionstatecode)
- [latest / enums / VerificationSessionStateReason](#latest-enums-verificationsessionstatereason)
- [latest / enums / VerificationSessionThreeDSecureAuthenticationFlow](#latest-enums-verificationsessionthreedsecureauthenticationflow)
- [latest / enums / VerificationSessionThreeDSecureChargebackLiability](#latest-enums-verificationsessionthreedsecurechargebackliability)
- [latest / enums / VerificationSessionThreeDSecurePartnerError](#latest-enums-verificationsessionthreedsecurepartnererror)
- [latest / enums / VerificationSessionThreeDSecureTransStatus](#latest-enums-verificationsessionthreedsecuretransstatus)
- [latest / enums / VerificationSessionThreeDSecureVersion](#latest-enums-verificationsessionthreedsecureversion)
- [latest / enums / VerificationSessionUserErrorCode](#latest-enums-verificationsessionusererrorcode)
- [latest / enums / VoidSessionRejectUserErrorCode](#latest-enums-voidsessionrejectusererrorcode)
- [latest / enums / VoidSessionResolveUserErrorCode](#latest-enums-voidsessionresolveusererrorcode)
- [latest / enums / VoidSessionStateCode](#latest-enums-voidsessionstatecode)
- [latest / enums / VoidSessionStateRejectedReason](#latest-enums-voidsessionstaterejectedreason)
- [latest / enums / VoidSessionStatusReasonRejectionCode](#latest-enums-voidsessionstatusreasonrejectioncode)
- [latest / input-objects / CaptureSessionRejectionReasonInput](#latest-input-objects-capturesessionrejectionreasoninput)
- [latest / input-objects / External](#latest-input-objects-external)
- [latest / input-objects / ModalAction](#latest-input-objects-modalaction)
- [latest / input-objects / PaymentSessionCardNotPresentInput](#latest-input-objects-paymentsessioncardnotpresentinput)
- [latest / input-objects / PaymentSessionPaymentDetails](#latest-input-objects-paymentsessionpaymentdetails)
- [latest / input-objects / PaymentSessionRejectionReasonInput](#latest-input-objects-paymentsessionrejectionreasoninput)
- [latest / input-objects / PaymentSessionThreeDSecureAuthentication](#latest-input-objects-paymentsessionthreedsecureauthentication)
- [latest / input-objects / PaymentSessionThreeDSecureAuthenticationData](#latest-input-objects-paymentsessionthreedsecureauthenticationdata)
- [latest / input-objects / QrCode](#latest-input-objects-qrcode)
- [latest / input-objects / RefundSessionRejectionReasonInput](#latest-input-objects-refundsessionrejectionreasoninput)
- [latest / input-objects / VerificationSessionAddressInput](#latest-input-objects-verificationsessionaddressinput)
- [latest / input-objects / VerificationSessionCardInput](#latest-input-objects-verificationsessioncardinput)
- [latest / input-objects / VerificationSessionPaymentDetailsInput](#latest-input-objects-verificationsessionpaymentdetailsinput)
- [latest / input-objects / VerificationSessionRejectionReasonInput](#latest-input-objects-verificationsessionrejectionreasoninput)
- [latest / input-objects / VerificationSessionThreeDSecureAuthentication](#latest-input-objects-verificationsessionthreedsecureauthentication)
- [latest / input-objects / VerificationSessionThreeDSecureAuthenticationData](#latest-input-objects-verificationsessionthreedsecureauthenticationdata)
- [latest / input-objects / VoidSessionRejectionReasonInput](#latest-input-objects-voidsessionrejectionreasoninput)
- [latest / interfaces / CaptureSessionState](#latest-interfaces-capturesessionstate)
- [latest / interfaces / DisplayableError](#latest-interfaces-displayableerror)
- [latest / interfaces / PaymentSessionState](#latest-interfaces-paymentsessionstate)
- [latest / interfaces / RefundSessionState](#latest-interfaces-refundsessionstate)
- [latest / interfaces / VerificationSessionState](#latest-interfaces-verificationsessionstate)
- [latest / interfaces / VoidSessionState](#latest-interfaces-voidsessionstate)
- [latest / mutations / captureSessionReject](#latest-mutations-capturesessionreject)
- [latest / mutations / captureSessionResolve](#latest-mutations-capturesessionresolve)
- [latest / mutations / paymentSessionConfirm](#latest-mutations-paymentsessionconfirm)
- [latest / mutations / paymentSessionModal](#latest-mutations-paymentsessionmodal)
- [latest / mutations / paymentSessionPending](#latest-mutations-paymentsessionpending)
- [latest / mutations / paymentSessionRedirect](#latest-mutations-paymentsessionredirect)
- [latest / mutations / paymentSessionReject](#latest-mutations-paymentsessionreject)
- [latest / mutations / paymentSessionResolve](#latest-mutations-paymentsessionresolve)
- [latest / mutations / paymentsAppConfigure](#latest-mutations-paymentsappconfigure)
- [latest / mutations / refundSessionReject](#latest-mutations-refundsessionreject)
- [latest / mutations / refundSessionResolve](#latest-mutations-refundsessionresolve)
- [latest / mutations / verificationSessionRedirect](#latest-mutations-verificationsessionredirect)
- [latest / mutations / verificationSessionReject](#latest-mutations-verificationsessionreject)
- [latest / mutations / verificationSessionResolve](#latest-mutations-verificationsessionresolve)
- [latest / mutations / voidSessionReject](#latest-mutations-voidsessionreject)
- [latest / mutations / voidSessionResolve](#latest-mutations-voidsessionresolve)
- [latest / objects / ApiVersion](#latest-objects-apiversion)
- [latest / objects / CaptureSession](#latest-objects-capturesession)
- [latest / objects / CaptureSessionRejectUserError](#latest-objects-capturesessionrejectusererror)
- [latest / objects / CaptureSessionResolveUserError](#latest-objects-capturesessionresolveusererror)
- [latest / objects / CaptureSessionStateRejected](#latest-objects-capturesessionstaterejected)
- [latest / objects / CaptureSessionStateResolved](#latest-objects-capturesessionstateresolved)
- [latest / objects / MutationRoot](#latest-objects-mutationroot)
- [latest / objects / PaymentSession](#latest-objects-paymentsession)
- [latest / objects / PaymentSessionActionsRedirect](#latest-objects-paymentsessionactionsredirect)
- [latest / objects / PaymentSessionConfirmUserError](#latest-objects-paymentsessionconfirmusererror)
- [latest / objects / PaymentSessionModalUserError](#latest-objects-paymentsessionmodalusererror)
- [latest / objects / PaymentSessionNextAction](#latest-objects-paymentsessionnextaction)
- [latest / objects / PaymentSessionPendingUserError](#latest-objects-paymentsessionpendingusererror)
- [latest / objects / PaymentSessionRedirectUserError](#latest-objects-paymentsessionredirectusererror)
- [latest / objects / PaymentSessionStateBuyerActionRequired](#latest-objects-paymentsessionstatebuyeractionrequired)
- [latest / objects / PaymentSessionStateConfirming](#latest-objects-paymentsessionstateconfirming)
- [latest / objects / PaymentSessionStatePending](#latest-objects-paymentsessionstatepending)
- [latest / objects / PaymentSessionStateRedirecting](#latest-objects-paymentsessionstateredirecting)
- [latest / objects / PaymentSessionStateRejected](#latest-objects-paymentsessionstaterejected)
- [latest / objects / PaymentSessionStateResolved](#latest-objects-paymentsessionstateresolved)
- [latest / objects / PaymentsAppConfiguration](#latest-objects-paymentsappconfiguration)
- [latest / objects / QueryRoot](#latest-objects-queryroot)
- [latest / objects / RefundSession](#latest-objects-refundsession)
- [latest / objects / RefundSessionRejectUserError](#latest-objects-refundsessionrejectusererror)
- [latest / objects / RefundSessionResolveUserError](#latest-objects-refundsessionresolveusererror)
- [latest / objects / RefundSessionStateRejected](#latest-objects-refundsessionstaterejected)
- [latest / objects / RefundSessionStateResolved](#latest-objects-refundsessionstateresolved)
- [latest / objects / UserError](#latest-objects-usererror)
- [latest / objects / VerificationSession](#latest-objects-verificationsession)
- [latest / objects / VerificationSessionActionsRedirect](#latest-objects-verificationsessionactionsredirect)
- [latest / objects / VerificationSessionNextAction](#latest-objects-verificationsessionnextaction)
- [latest / objects / VerificationSessionStateRedirecting](#latest-objects-verificationsessionstateredirecting)
- [latest / objects / VerificationSessionStateRejected](#latest-objects-verificationsessionstaterejected)
- [latest / objects / VerificationSessionStateResolved](#latest-objects-verificationsessionstateresolved)
- [latest / objects / VerificationSessionUserError](#latest-objects-verificationsessionusererror)
- [latest / objects / VoidSession](#latest-objects-voidsession)
- [latest / objects / VoidSessionRejectUserError](#latest-objects-voidsessionrejectusererror)
- [latest / objects / VoidSessionResolveUserError](#latest-objects-voidsessionresolveusererror)
- [latest / objects / VoidSessionStateRejected](#latest-objects-voidsessionstaterejected)
- [latest / objects / VoidSessionStateResolved](#latest-objects-voidsessionstateresolved)
- [latest / payloads / CaptureSessionRejectPayload](#latest-payloads-capturesessionrejectpayload)
- [latest / payloads / CaptureSessionResolvePayload](#latest-payloads-capturesessionresolvepayload)
- [latest / payloads / PaymentSessionConfirmPayload](#latest-payloads-paymentsessionconfirmpayload)
- [latest / payloads / PaymentSessionModalPayload](#latest-payloads-paymentsessionmodalpayload)
- [latest / payloads / PaymentSessionPendingPayload](#latest-payloads-paymentsessionpendingpayload)
- [latest / payloads / PaymentSessionRedirectPayload](#latest-payloads-paymentsessionredirectpayload)
- [latest / payloads / PaymentSessionRejectPayload](#latest-payloads-paymentsessionrejectpayload)
- [latest / payloads / PaymentSessionResolvePayload](#latest-payloads-paymentsessionresolvepayload)
- [latest / payloads / PaymentsAppConfigurePayload](#latest-payloads-paymentsappconfigurepayload)
- [latest / payloads / RefundSessionRejectPayload](#latest-payloads-refundsessionrejectpayload)
- [latest / payloads / RefundSessionResolvePayload](#latest-payloads-refundsessionresolvepayload)
- [latest / payloads / VerificationSessionRedirectPayload](#latest-payloads-verificationsessionredirectpayload)
- [latest / payloads / VerificationSessionRejectPayload](#latest-payloads-verificationsessionrejectpayload)
- [latest / payloads / VerificationSessionResolvePayload](#latest-payloads-verificationsessionresolvepayload)
- [latest / payloads / VoidSessionRejectPayload](#latest-payloads-voidsessionrejectpayload)
- [latest / payloads / VoidSessionResolvePayload](#latest-payloads-voidsessionresolvepayload)
- [latest / queries / publicApiVersions](#latest-queries-publicapiversions)
- [latest / scalars / Boolean](#latest-scalars-boolean)
- [latest / scalars / DateTime](#latest-scalars-datetime)
- [latest / scalars / ID](#latest-scalars-id)
- [latest / scalars / JSON](#latest-scalars-json)
- [latest / scalars / String](#latest-scalars-string)
- [latest / scalars / URL](#latest-scalars-url)
- [latest / unions / CaptureSessionStates](#latest-unions-capturesessionstates)
- [latest / unions / PaymentSessionNextActionContext](#latest-unions-paymentsessionnextactioncontext)
- [latest / unions / PaymentSessionStates](#latest-unions-paymentsessionstates)
- [latest / unions / RefundSessionStates](#latest-unions-refundsessionstates)
- [latest / unions / VerificationSessionNextActionContext](#latest-unions-verificationsessionnextactioncontext)
- [latest / unions / VerificationSessionStates](#latest-unions-verificationsessionstates)
- [latest / unions / VoidSessionStates](#latest-unions-voidsessionstates)


---



<a id="landing"></a>


## Payments Apps API

The Payments Apps API enables you to programmatically access your payments app's configuration data. You can use the Payments Apps API to resolve, pend, or reject payments sessions. You can also use the Payments Apps API to reject or resolve captures, refunds, and void sessions.

### Authentication

All Payments Apps API requests require a valid Shopify access token.

Public and custom apps created in the Dev Dashboard generate tokens using [OAuth](https://shopify.dev/apps/auth/oauth). Include your token as a `X-Shopify-Access-Token` header on all API requests.

To keep the platform secure, payments apps need to request specific [access scopes](https://shopify.dev/api/usage/access-scopes) during the install process. Only request as much data access as your app needs to work.

All requests to the Payments Apps API must be authenticated. Learn more about [getting started with authentication](https://shopify.dev/apps/auth) and [building payments apps](https://shopify.dev/apps/payments).

### cURL

```bash
curl -X POST \
https://{shop}.myshopify.com/payments_apps/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {password}' \
  -d '{
    "query": "{your_query}"
  }'
```

***

### Graph​QL endpoint

The Payments Apps API is available at a single GraphQL `POST` endpoint:

`https://{shop_domain}/payments_apps/api/2026-04/graphql.json`

You can access the Payments Apps API using curl or any HTTP client.

#### Versioning

The Payments Apps API is a [versioned API](https://shopify.dev/api/usage/versioning). Updates are released quarterly. To keep your app stable, make sure that you specify a supported version in the URL.

#### Usage limitations

* The Payments Apps API is available only to [approved Payments Partners](https://shopify.dev/docs/apps/payments/payments-extension-review).
* All apps and services connecting to the Payments Apps API are subject to Shopify's [API Terms of Service](https://www.shopify.com/legal/api-terms).
* The Payments Apps API doesn't support sending additional information back to Shopify.

POST

### https://{shop\_domain}/payments\_apps/api/2026-04/graphql.json

```bash
# Get the handles for all public API versions
curl -X POST \
https://{store_name}.myshopify.com/payments_apps/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
    "query": "{
      publicApiVersions {
        handle
      }
    }"
  }'
```

***

### Rate limits

The Payments Apps API enforces [rate limits](https://shopify.dev/api/usage/limits#rate-limits) on all requests.

{}

### Request

```graphql
{
  products(first: 1) {
    edges {
      node {
        title
      }
    }
  }
}
```

{}

### Response

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "title": "Hiking backpack"
          }
        }
      ]
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 3,
      "actualQueryCost": 3,
      "throttleStatus": {
        "maximumAvailable": 1000.0,
        "currentlyAvailable": 997,
        "restoreRate": 50.0
      }
    }
  }
}
```

***

### Status and error codes

All API queries return HTTP status codes that contain more information about the response.

#### 200 OK

GraphQL HTTP status codes are different from REST API status codes. Most importantly, the GraphQL API can return a `200 OK` response code in cases that would typically produce 4xx or 5xx errors in REST.

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

* THROTTLED

The client has exceeded the [rate limit](#rate-limits). Similar to 429 Too Many Requests.

* ACCESS\_​DENIED

The client doesn’t have correct [authentication](#authentication) credentials. Similar to 401 Unauthorized.

* SHOP\_​INACTIVE

The shop is not active. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

* INTERNAL\_​SERVER\_​ERROR

Shopify experienced an internal error while processing the request. This error is returned instead of 500 Internal Server Error in most circumstances.

***

{}

### Sample 200 error responses

###### Throttled

```json
{
  "errors": [
    {
      "message": "Query cost is 2003, which exceeds the single query max cost limit (1000).

See https://shopify.dev/concepts/about-apis/rate-limits for more information on how the
cost of a query is calculated.

To query larger amounts of data with fewer limits, bulk operations should be used instead.
See https://shopify.dev/tutorials/perform-bulk-operations-with-admin-api for usage details.
",
      "extensions": {
        "code": "MAX_COST_EXCEEDED",
        "cost": 2003,
        "maxCost": 1000,
        "documentation": "https://shopify.dev/api/usage/limits#rate-limits"
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
        "code": "INTERNAL_SERVER_ERROR",
        "requestId": "1b355a21-7117-44c5-8d8b-8948082f40a8"
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

##### 402 Payment Required

The shop is frozen. The shop owner will need to pay the outstanding balance to [unfreeze](https://help.shopify.com/en/manual/your-account/pause-close-store#unfreeze-your-shopify-store) the shop.

***

##### 403 Forbidden

The shop is forbidden. Returned if the store has been marked as fraudulent.

***

##### 404 Not Found

The resource isn’t available. This is often caused by querying for something that’s been deleted.

***

##### 423 Locked

The shop isn’t available. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

***

##### 5xx Errors

An internal error occurred in Shopify. Check out the [Shopify status page](https://www.shopifystatus.com) for more information.

***

**Info:**

Didn’t find the status code you’re looking for? View the complete list of [API status response and error codes](https://shopify.dev/api/usage/response-codes).

{}

### Sample error codes

###### 400

```
HTTP/1.1 400 Bad Request
{
  "errors": {
    "query": "Required parameter missing or invalid"
  }
}
```

###### 402

```
HTTP/1.1 402 Payment Required
{
  "errors": "This shop's plan does not have access to this feature"
}
```

###### 403

```
HTTP/1.1 403 Forbidden
{
  "errors": "Unavailable Shop"
}
```

###### 404

```
HTTP/1.1 404 Not Found
{
  "errors": "Not Found"
}
```

###### 423

```
HTTP/1.1 423 Locked
{
  "errors": "This shop is unavailable"
}
```

###### 500

```
HTTP/1.1 500 Internal Server Error
{
  "errors": "An unexpected error occurred"
}
```

***

---



<a id="latest"></a>


## Payments Apps API

The Payments Apps API enables you to programmatically access your payments app's configuration data. You can use the Payments Apps API to resolve, pend, or reject payments sessions. You can also use the Payments Apps API to reject or resolve captures, refunds, and void sessions.

### Authentication

All Payments Apps API requests require a valid Shopify access token.

Public and custom apps created in the Dev Dashboard generate tokens using [OAuth](https://shopify.dev/apps/auth/oauth). Include your token as a `X-Shopify-Access-Token` header on all API requests.

To keep the platform secure, payments apps need to request specific [access scopes](https://shopify.dev/api/usage/access-scopes) during the install process. Only request as much data access as your app needs to work.

All requests to the Payments Apps API must be authenticated. Learn more about [getting started with authentication](https://shopify.dev/apps/auth) and [building payments apps](https://shopify.dev/apps/payments).

### cURL

```bash
curl -X POST \
https://{shop}.myshopify.com/payments_apps/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {password}' \
  -d '{
    "query": "{your_query}"
  }'
```

***

### Graph​QL endpoint

The Payments Apps API is available at a single GraphQL `POST` endpoint:

`https://{shop_domain}/payments_apps/api/2026-04/graphql.json`

You can access the Payments Apps API using curl or any HTTP client.

#### Versioning

The Payments Apps API is a [versioned API](https://shopify.dev/api/usage/versioning). Updates are released quarterly. To keep your app stable, make sure that you specify a supported version in the URL.

#### Usage limitations

* The Payments Apps API is available only to [approved Payments Partners](https://shopify.dev/docs/apps/payments/payments-extension-review).
* All apps and services connecting to the Payments Apps API are subject to Shopify's [API Terms of Service](https://www.shopify.com/legal/api-terms).
* The Payments Apps API doesn't support sending additional information back to Shopify.

POST

### https://{shop\_domain}/payments\_apps/api/2026-04/graphql.json

```bash
# Get the handles for all public API versions
curl -X POST \
https://{store_name}.myshopify.com/payments_apps/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
    "query": "{
      publicApiVersions {
        handle
      }
    }"
  }'
```

***

### Rate limits

The Payments Apps API enforces [rate limits](https://shopify.dev/api/usage/limits#rate-limits) on all requests.

{}

### Request

```graphql
{
  products(first: 1) {
    edges {
      node {
        title
      }
    }
  }
}
```

{}

### Response

```json
{
  "data": {
    "products": {
      "edges": [
        {
          "node": {
            "title": "Hiking backpack"
          }
        }
      ]
    }
  },
  "extensions": {
    "cost": {
      "requestedQueryCost": 3,
      "actualQueryCost": 3,
      "throttleStatus": {
        "maximumAvailable": 1000.0,
        "currentlyAvailable": 997,
        "restoreRate": 50.0
      }
    }
  }
}
```

***

### Status and error codes

All API queries return HTTP status codes that contain more information about the response.

#### 200 OK

GraphQL HTTP status codes are different from REST API status codes. Most importantly, the GraphQL API can return a `200 OK` response code in cases that would typically produce 4xx or 5xx errors in REST.

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

* THROTTLED

The client has exceeded the [rate limit](#rate-limits). Similar to 429 Too Many Requests.

* ACCESS\_​DENIED

The client doesn’t have correct [authentication](#authentication) credentials. Similar to 401 Unauthorized.

* SHOP\_​INACTIVE

The shop is not active. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

* INTERNAL\_​SERVER\_​ERROR

Shopify experienced an internal error while processing the request. This error is returned instead of 500 Internal Server Error in most circumstances.

***

{}

### Sample 200 error responses

###### Throttled

```json
{
  "errors": [
    {
      "message": "Query cost is 2003, which exceeds the single query max cost limit (1000).

See https://shopify.dev/concepts/about-apis/rate-limits for more information on how the
cost of a query is calculated.

To query larger amounts of data with fewer limits, bulk operations should be used instead.
See https://shopify.dev/tutorials/perform-bulk-operations-with-admin-api for usage details.
",
      "extensions": {
        "code": "MAX_COST_EXCEEDED",
        "cost": 2003,
        "maxCost": 1000,
        "documentation": "https://shopify.dev/api/usage/limits#rate-limits"
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
        "code": "INTERNAL_SERVER_ERROR",
        "requestId": "1b355a21-7117-44c5-8d8b-8948082f40a8"
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

##### 402 Payment Required

The shop is frozen. The shop owner will need to pay the outstanding balance to [unfreeze](https://help.shopify.com/en/manual/your-account/pause-close-store#unfreeze-your-shopify-store) the shop.

***

##### 403 Forbidden

The shop is forbidden. Returned if the store has been marked as fraudulent.

***

##### 404 Not Found

The resource isn’t available. This is often caused by querying for something that’s been deleted.

***

##### 423 Locked

The shop isn’t available. This can happen when stores repeatedly exceed API rate limits or due to fraud risk.

***

##### 5xx Errors

An internal error occurred in Shopify. Check out the [Shopify status page](https://www.shopifystatus.com) for more information.

***

**Info:**

Didn’t find the status code you’re looking for? View the complete list of [API status response and error codes](https://shopify.dev/api/usage/response-codes).

{}

### Sample error codes

###### 400

```
HTTP/1.1 400 Bad Request
{
  "errors": {
    "query": "Required parameter missing or invalid"
  }
}
```

###### 402

```
HTTP/1.1 402 Payment Required
{
  "errors": "This shop's plan does not have access to this feature"
}
```

###### 403

```
HTTP/1.1 403 Forbidden
{
  "errors": "Unavailable Shop"
}
```

###### 404

```
HTTP/1.1 404 Not Found
{
  "errors": "Not Found"
}
```

###### 423

```
HTTP/1.1 423 Locked
{
  "errors": "This shop is unavailable"
}
```

###### 500

```
HTTP/1.1 500 Internal Server Error
{
  "errors": "An unexpected error occurred"
}
```

***

---



<a id="latest-enums-capturesessionrejectusererrorcode"></a>


## Capture​Session​Reject​User​Error​Code

enum

Possible error codes that can be returned by `CaptureSessionRejectUserError`.

### Valid values

* CAPTURE\_​SESSION\_​INVALID\_​STATE

  Capture session has already been resolved or has already been rejected with a different reason.

* CAPTURE\_​SESSION\_​NOT\_​FOUND

  Capture session not found.

***

### Fields

* [Capture​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError#field-CaptureSessionRejectUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `CaptureSessionReject`.

***

### Map

#### Fields with this enum

* [Capture​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError#field-CaptureSessionRejectUserError.fields.code)

---



<a id="latest-enums-capturesessionresolveusererrorcode"></a>


## Capture​Session​Resolve​User​Error​Code

enum

Possible error codes that can be returned by `CaptureSessionResolveUserError`.

### Valid values

* CAPTURE\_​SESSION\_​INVALID\_​STATE

  Capture session has already been rejected.

* CAPTURE\_​SESSION\_​NOT\_​FOUND

  Capture session not found.

***

### Fields

* [Capture​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError#field-CaptureSessionResolveUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `CaptureSessionResolve`.

***

### Map

#### Fields with this enum

* [Capture​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError#field-CaptureSessionResolveUserError.fields.code)

---



<a id="latest-enums-capturesessionstatecode"></a>


## Capture​Session​State​Code

enum

The possible values that can be used to describe the state of a finalized capture transaction.

### Valid values

* REJECTED

  Capture rejected.

* RESOLVED

  Capture resolved.

***

### Fields

* [Capture​Session​State.code](https://shopify.dev/docs/api/payments-apps/latest/interfaces/CaptureSessionState#fields-code)

  INTERFACE

  The state of a finalized capture transaction.

* [Capture​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateRejected#field-CaptureSessionStateRejected.fields.code)

  OBJECT

  Additional details about a capture's rejected state.

* [Capture​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateResolved#field-CaptureSessionStateResolved.fields.code)

  OBJECT

  Additional details about a capture's resolved state.

***

### Map

#### Fields with this enum

* [Capture​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateRejected#field-CaptureSessionStateRejected.fields.code)
* [Capture​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateResolved#field-CaptureSessionStateResolved.fields.code)

---



<a id="latest-enums-capturesessionstaterejectedreason"></a>


## Capture​Session​State​Rejected​Reason

enum

The possible values that can be used to describe the reason why the capture transaction is rejected.

### Valid values

* AUTHORIZATION\_​EXPIRED

  Authorization expired.

* PROCESSING\_​ERROR

  Capture processing failure.

***

### Fields

* [Capture​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateRejected#field-CaptureSessionStateRejected.fields.reason)

  OBJECT

  Additional details about a capture's rejected state.

***

### Map

#### Fields with this enum

* [Capture​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateRejected#field-CaptureSessionStateRejected.fields.reason)

---



<a id="latest-enums-capturesessionstatusreasonrejectioncode"></a>


## Capture​Session​Status​Reason​Rejection​Code

enum

The possible values that can be used to describe the reason why a capture transaction is rejected.

### Valid values

* AUTHORIZATION\_​EXPIRED

  Authorization expired.

* PROCESSING\_​ERROR

  Capture processing failure.

***

### Fields

* [Capture​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput#fields-code)

  INPUT OBJECT

  The input fields to use for the reason why the capture was rejected.

***

### Map

#### Inputs with this enum

* [Capture​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput#fields-code)

---



<a id="latest-enums-digitalwallet"></a>


## Digital​Wallet

enum

Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.

### Valid values

* AMAZON\_​PAY

  Amazon Pay.

* ANDROID\_​PAY

  Android Pay.

* APPLE\_​PAY

  Apple Pay.

* FACEBOOK\_​PAY

  Facebook Pay.

* GOOGLE\_​PAY

  Google Pay.

* SHOPIFY\_​PAY

  Shopify Pay.

***

### Fields

* [Verification​Session​Card​Input.wallet](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-wallet)

  INPUT OBJECT

  The input fields for the credit card.

***

### Map

#### Inputs with this enum

* [Verification​Session​Card​Input.wallet](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-wallet)

---



<a id="latest-enums-paymentsessioncardnotpresentavsresultcode"></a>


## Payment​Session​Card​Not​Present​Avs​Result​Code

enum

The response code from the address verification system (AVS). The code is a single letter.

### Valid values

* A

  Street address matches but postal code does not match.

* B

  Street address matches, postal code not verified (international).

* D

  Street address matches, postal code not verified.

* E

  Not eligible for AVS or AVS data invalid.

* F

  Street address and postal code both match (UK-specific).

* G

  Non-U.S. issuing bank does not support AVS.

* N

  Street address and postal code do not match.

* P

  Postal code matches, street address not verified.

* R

  System unavailable or timed out.

* S

  Service not supported.

* U

  Address information unavailable.

* W

  Postal code matches, street address does not match.

* X

  Street address and postal code both match (exact match).

* Y

  Street address and postal code both match.

* Z

  Street address does not match but postal code matches.

***

### Fields

* [Payment​Session​Card​Not​Present​Input.avsResultCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionCardNotPresentInput#fields-avsResultCode)

  INPUT OBJECT

  The input fields for the details of a card not present transaction.

***

### Map

#### Inputs with this enum

* [Payment​Session​Card​Not​Present​Input.avsResultCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionCardNotPresentInput#fields-avsResultCode)

---



<a id="latest-enums-paymentsessioncardnotpresentcvvresultcode"></a>


## Payment​Session​Card​Not​Present​Cvv​Result​Code

enum

The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter.

### Valid values

* I

  CVV failed data validation check.

* M

  CVV matches.

* N

  CVV does not match.

* P

  CVV not processed.

* S

  CVV should have been present.

* U

  CVV request unable to be processed by issuer.

* X

  CVV check not supported for card.

***

### Fields

* [Payment​Session​Card​Not​Present​Input.cvvResultCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionCardNotPresentInput#fields-cvvResultCode)

  INPUT OBJECT

  The input fields for the details of a card not present transaction.

***

### Map

#### Inputs with this enum

* [Payment​Session​Card​Not​Present​Input.cvvResultCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionCardNotPresentInput#fields-cvvResultCode)

---



<a id="latest-enums-paymentsessionconfirmusererrorcode"></a>


## Payment​Session​Confirm​User​Error​Code

enum

Possible error codes that can be returned by `PaymentSessionConfirmUserError`.

### Valid values

* CONFIRMATION\_​NOT\_​SUPPORTED

  Confirmation flow requirements are not configured completely for this payment app.

* INVALID\_​STATE\_​TRANSITION

  The state transition is invalid.

* PAYMENT\_​SESSION\_​NOT\_​FOUND

  Payment session not found.

***

### Fields

* [Payment​Session​Confirm​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError#field-PaymentSessionConfirmUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `PaymentSessionConfirm`.

***

### Map

#### Fields with this enum

* [Payment​Session​Confirm​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError#field-PaymentSessionConfirmUserError.fields.code)

---



<a id="latest-enums-paymentsessionmodalusererrorcode"></a>


## Payment​Session​Modal​User​Error​Code

enum

Possible error codes that can be returned by `PaymentSessionModalUserError`.

### Valid values

* EXPIRED\_​MODAL\_​EXPIRES\_​AT

  Modal expiry date can't be a time in the past.

* INVALID\_​STATE\_​TRANSITION

  The state transition is invalid.

* OUT\_​OF\_​RANGE\_​MODAL\_​EXPIRES\_​AT

  Modal expiry date has exceeded the limit.

* PAYMENT\_​SESSION\_​NOT\_​FOUND

  Payment session not found.

* UNSUPPORTED\_​PAYMENT\_​METHOD\_​FOR\_​MODAL

  Modal is not supported for this payment method.

***

### Fields

* [Payment​Session​Modal​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError#field-PaymentSessionModalUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `PaymentSessionModal`.

***

### Map

#### Fields with this enum

* [Payment​Session​Modal​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError#field-PaymentSessionModalUserError.fields.code)

---



<a id="latest-enums-paymentsessionnextactionaction"></a>


## Payment​Session​Next​Action​Action

enum

The possible values that can be used to describe the next action that a Partner should do after a payment is finalized.

### Valid values

* REDIRECT

  Redirect the customer to the next checkout step.

***

### Fields

* [Payment​Session​Next​Action.action](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionNextAction#field-PaymentSessionNextAction.fields.action)

  OBJECT

  The next action that is expected of the Partner after the payment is finalized.

***

### Map

#### Fields with this enum

* [Payment​Session​Next​Action.action](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionNextAction#field-PaymentSessionNextAction.fields.action)

---



<a id="latest-enums-paymentsessionpendingusererrorcode"></a>


## Payment​Session​Pending​User​Error​Code

enum

Possible error codes that can be returned by `PaymentSessionPendingUserError`.

### Valid values

* EXPIRED\_​PENDING\_​EXPIRES\_​AT

  Pending expiry date can't be a time in the past.

* NOT\_​FOUND

  Payment session doesn't exist.

* OUT\_​OF\_​RANGE\_​PENDING\_​EXPIRES\_​AT

  Pending expiry date has exceeded the default pending expiry limit.

* PENDING\_​INVALID\_​STATE

  Payment session has already been resolved or rejected.

* UNSUPPORTED\_​PAYMENT\_​METHOD

  Pending is not supported for credit card payment methods.

***

### Fields

* [Payment​Session​Pending​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError#field-PaymentSessionPendingUserError.fields.code)

  OBJECT

  Represents a payment session custom error.

***

### Map

#### Fields with this enum

* [Payment​Session​Pending​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError#field-PaymentSessionPendingUserError.fields.code)

---



<a id="latest-enums-paymentsessionredirectusererrorcode"></a>


## Payment​Session​Redirect​User​Error​Code

enum

Possible error codes that can be returned by `PaymentSessionRedirectUserError`.

### Valid values

* BUYER\_​ALREADY\_​REDIRECTED\_​BY\_​SHOPIFY

  Redirect request was received too late. The buyer has already been redirected by Shopify.

* INVALID\_​STATE\_​TRANSITION

  The state transition is invalid.

* PAYMENT\_​SESSION\_​NOT\_​FOUND

  Payment session not found.

* REDIRECT\_​NOT\_​SUPPORTED\_​FOR\_​CREDIT\_​CARD

  The credit card payments app extension is not configured properly to support redirection flow.

* REDIRECT\_​NOT\_​SUPPORTED\_​FOR\_​OFFSITE

  Redirect is not expected for offsite payments processing flow.

* REDIRECT\_​NOT\_​SUPPORTED\_​FOR\_​ONSITE

  Redirect is not expected for onsite payments processing flow.

***

### Fields

* [Payment​Session​Redirect​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError#field-PaymentSessionRedirectUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `PaymentSessionRedirect`.

***

### Map

#### Fields with this enum

* [Payment​Session​Redirect​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError#field-PaymentSessionRedirectUserError.fields.code)

---



<a id="latest-enums-paymentsessionstatecode"></a>


## Payment​Session​State​Code

enum

The possible values that can be used to describe the state of a payment transaction.

### Valid values

* BUYER\_​ACTION\_​REQUIRED

  Buyer action required.

* CONFIRMING

  Confirming the payment.

* PENDING

  Payment pending.

* REDIRECTING

  Redirecting buyer.

* REJECTED

  Payment rejected.

* RESOLVED

  Payment resolved.

***

### Fields

* [Payment​Session​State.code](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState#fields-code)

  INTERFACE

  The state of a payment transaction.

* [Payment​Session​State​Buyer​Action​Required.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateBuyerActionRequired#field-PaymentSessionStateBuyerActionRequired.fields.code)

  OBJECT

  Buyer action required for the payment.

* [Payment​Session​State​Confirming.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateConfirming#field-PaymentSessionStateConfirming.fields.code)

  OBJECT

  Additional details about a payment's confirming state.

* [Payment​Session​State​Pending.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStatePending#field-PaymentSessionStatePending.fields.code)

  OBJECT

  Additional details about a payment's pending state.

* [Payment​Session​State​Redirecting.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRedirecting#field-PaymentSessionStateRedirecting.fields.code)

  OBJECT

  Additional details about a payment's redirecting state.

* [Payment​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.code)

  OBJECT

  Additional details about a payment's rejected state.

* [Payment​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateResolved#field-PaymentSessionStateResolved.fields.code)

  OBJECT

  Additional details about a payment's resolved state.

***

### Map

#### Fields with this enum

* [Payment​Session​State​Buyer​Action​Required.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateBuyerActionRequired#field-PaymentSessionStateBuyerActionRequired.fields.code)
* [Payment​Session​State​Confirming.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateConfirming#field-PaymentSessionStateConfirming.fields.code)
* [Payment​Session​State​Pending.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStatePending#field-PaymentSessionStatePending.fields.code)
* [Payment​Session​State​Redirecting.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRedirecting#field-PaymentSessionStateRedirecting.fields.code)
* [Payment​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.code)
* [Payment​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateResolved#field-PaymentSessionStateResolved.fields.code)

---



<a id="latest-enums-paymentsessionstatependingreason"></a>


## Payment​Session​State​Pending​Reason

enum

Reasons the finalization of the payment is pending.

### Valid values

* BUYER\_​ACTION\_​REQUIRED

  Awaiting action from the buyer.

* MERCHANT\_​ACTION\_​REQUIRED

  Awaiting action from the merchant.

* NETWORK\_​ACTION\_​REQUIRED

  Awaiting action from the network.

* PARTNER\_​ACTION\_​REQUIRED

  Awaiting action from the Partner.

***

### Fields

* [Payment​Session​State​Pending.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStatePending#field-PaymentSessionStatePending.fields.reason)

  OBJECT

  Additional details about a payment's pending state.

* [payment​Session​Pending.reason](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending#arguments-reason)

  ARGUMENT

***

### Map

#### Fields with this enum

* [Payment​Session​State​Pending.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStatePending#field-PaymentSessionStatePending.fields.reason)

#### Arguments with this enum

* [payment​Session​Pending.reason](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending#arguments-reason)

---



<a id="latest-enums-paymentsessionstaterejectedreason"></a>


## Payment​Session​State​Rejected​Reason

enum

The possible values that can be used to describe the reasons why a payment is rejected.

### Valid values

* AMOUNT\_​TOO\_​LARGE

  The amount exceeds the maximum amount allowed.

* AMOUNT\_​TOO\_​SMALL

  The amount is below the minimum amount allowed.

* AUTHENTICATION\_​FAILED

  3D Secure authentication failed. This rejection reason should only be used when a payment has completed the 3DS authentication step but the authentication was unsuccessful or declined. In this case, the app isn't required to call the [`paymentSessionConfirm`](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm) mutation to reject the credit card payment. Refer to [Supporting 3-D Secure](https://shopify.dev/docs/apps/build/payments/credit-card/use-the-cli?framework=remix#supporting-3-d-secure) for more information on how to support 3DS.

* AUTHENTICATION\_​REQUIRED

  The payment required 3D Secure authentication but was attempted without authentication.

* CALL\_​ISSUER

  The issuer declined the payment. The buyer should contact their issuer for more details.

* CANCELLED\_​PAYMENT

  The payment was cancelled.

* CARD\_​DECLINED

  The card was declined.

* CARD\_​TESTING

  The payment was blocked due to suspected card testing behaviour.

* CONFIRMATION\_​REJECTED

  The payments app called the [`paymentSessionConfirm`](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm) mutation and Shopify rejected the confirmation.

* DO\_​NOT\_​HONOR

  The issuer declined the payment without providing a specific reason.

* EXPIRED\_​CARD

  The card has expired.

* FRAUD\_​SUSPECTED

  The payment was declined due to suspected fraudulent activity.

* HIGH\_​RISK\_​FRAUD\_​SUSPECTED

  The payment was declined due to high fraud risk indicators. The payment instrument may have been reported as lost or stolen.

* INCORRECT\_​ADDRESS

  The address is incorrect.

* INCORRECT\_​CVC

  The card security code (CVC/CVV) doesn't match the one on file.

* INCORRECT\_​NUMBER

  The number is incorrect.

* INCORRECT\_​PIN

  The PIN entered doesn't match the one on file.

* INCORRECT\_​ZIP

  The postal code doesn't match the one on file.

* INSTRUMENT\_​DECLINED

  The payment instrument was declined.

* INSUFFICIENT\_​FUNDS

  The payment method has insufficient funds to complete the payment.

* INVALID\_​AMOUNT

  The payment amount is invalid or incorrectly calculated.

* INVALID\_​CURRENCY

  The currency isn't supported.

* INVALID\_​CVC

  The card security code (CVC/CVV) doesn't match the expected format.

* INVALID\_​EXPIRY\_​DATE

  The card expiration date is invalid or incorrectly formatted.

* INVALID\_​NUMBER

  The number has an invalid or incomplete format.

* INVALID\_​PAYMENT\_​METHOD

  The payment method or its associated account is invalid or not found.

* INVALID\_​PURCHASE\_​TYPE

  This payment method doesn't support the requested payment type.

* INVALID\_​REQUEST

  The payment request is missing required parameters or contains invalid values.

* MERCHANT\_​ACCOUNT\_​ERROR

  The payment couldn't be processed due to an issue with the merchant account.

* MERCHANT\_​RULE

  The payment was blocked due to merchant's custom payment risk rule.

* PAYMENT\_​METHOD\_​UNSUPPORTED

  The payment method isn't supported.

* PICK\_​UP\_​CARD

  The card can't be used for this payment. The cardholder may have reported it as lost or stolen.

* PROCESSING\_​ERROR

  An error occurred while processing the payment.

* RETRY\_​DECLINED

  The payment retry attempt was declined.

* TRANSACTION\_​LIMIT\_​EXCEEDED

  The payment instrument has exceeded the processing frequency limit.

* RISKY

  Deprecated

***

### Fields

* [Payment​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput#fields-code)

  INPUT OBJECT

  The input fields for the reason why the payment was rejected.

* [Payment​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.reason)

  OBJECT

  Additional details about a payment's rejected state.

***

### Map

#### Fields with this enum

* [Payment​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.reason)

#### Inputs with this enum

* [Payment​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput#fields-code)

---



<a id="latest-enums-paymentsessionstaterejectedsource"></a>


## Payment​Session​State​Rejected​Source

enum

The entity that rejected the payment.

### Valid values

* NETWORK

  The payment network or the issuer rejected the payment.

* PROVIDER

  The provider rejected the payment.

***

### Fields

* [Payment​Session​Rejection​Reason​Input.source](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput#fields-source)

  INPUT OBJECT

  The input fields for the reason why the payment was rejected.

* [Payment​Session​State​Rejected.source](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.source)

  OBJECT

  Additional details about a payment's rejected state.

***

### Map

#### Fields with this enum

* [Payment​Session​State​Rejected.source](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.source)

#### Inputs with this enum

* [Payment​Session​Rejection​Reason​Input.source](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput#fields-source)

---



<a id="latest-enums-paymentsessionthreedsecureauthenticationflow"></a>


## Payment​Session​Three​DSecure​Authentication​Flow

enum

The 3D Secure Authentication Flow.

### Valid values

* CHALLENGE

  The Challenge Flow requires some Cardholder interaction. Cannot be used with 'trans\_status' 'I'.

* FRICTIONLESS

  The Frictionless Flow does not require a Cardholder interaction.

* UNKNOWN

  Use this value for 3DS version 1 or when an error makes it impossible to establish what the flow is.

***

### Fields

* [Payment​Session​Three​DSecure​Authentication​Data.authenticationFlow](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-authenticationFlow)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Payment​Session​Three​DSecure​Authentication​Data.authenticationFlow](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-authenticationFlow)

---



<a id="latest-enums-paymentsessionthreedsecurechargebackliability"></a>


## Payment​Session​Three​DSecure​Chargeback​Liability

enum

Indicates if the liability for chargebacks has shifted away from the merchant.

### Valid values

* MERCHANT

  The merchant remains liable for chargebacks. This can be the case when a Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant, for instance.

* UNKNOWN

  The merchant may not remain liable for chargebacks. This can be the case when no Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant and when the authentication is successful, for instance. Cannot be used if trans\_status is "N" or "R".

***

### Fields

* [Payment​Session​Three​DSecure​Authentication​Data.chargebackLiability](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-chargebackLiability)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Payment​Session​Three​DSecure​Authentication​Data.chargebackLiability](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-chargebackLiability)

---



<a id="latest-enums-paymentsessionthreedsecurepartnererror"></a>


## Payment​Session​Three​DSecure​Partner​Error

enum

The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result.

### Valid values

* PROCESSING\_​ERROR

  Error while requesting the 3D Secure authentication or processing its result.

***

### Fields

* [Payment​Session​Three​DSecure​Authentication.partnerError](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication#fields-partnerError)

  INPUT OBJECT

  The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

***

### Map

#### Inputs with this enum

* [Payment​Session​Three​DSecure​Authentication.partnerError](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication#fields-partnerError)

---



<a id="latest-enums-paymentsessionthreedsecuretransstatus"></a>


## Payment​Session​Three​DSecure​Trans​Status

enum

Indicates whether a transaction qualifies as an authenticated transaction. For 3DS version 2, the EMV 3D Secure transaction status from the last of the Authentication Response (ARes) or Results Request (RReq) messages. For 3DS version 1, the 3D Secure PARes Status.

### Valid values

* A

  Attempts Processing Performed; Not Authenticated/Verified, but a proof of attempted authentication/verification is provided.

* I

  I = Informational Only; 3DS Requestor challenge preference acknowledged. Cannot be used with 'authentication\_flow' 'CHALLENGE'.

* N

  Not Authenticated /Account Not Verified; Transaction denied.

* R

  Authentication/ Account Verification Rejected; Issuer is rejecting authentication/verification and request that authorisation not be attempted.

* U

  Authentication/ Account Verification Could Not Be Performed; Technical or other problem.

* Y

  Authentication Verification Successful.

***

### Fields

* [Payment​Session​Three​DSecure​Authentication​Data.transStatus](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-transStatus)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Payment​Session​Three​DSecure​Authentication​Data.transStatus](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-transStatus)

---



<a id="latest-enums-paymentsessionthreedsecureversion"></a>


## Payment​Session​Three​DSecure​Version

enum

The 3D Secure version.

### Valid values

* UNKNOWN

  Unknown version.

* V1\_​

  Version 1.0.

* V2\_​

  Version 2.1.

* V2\_​

  Version 2.2.

* V2\_​

  Version 2.3.

***

### Fields

* [Payment​Session​Three​DSecure​Authentication​Data.version](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-version)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Payment​Session​Three​DSecure​Authentication​Data.version](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-version)

---



<a id="latest-enums-refundsessionrejectusererrorcode"></a>


## Refund​Session​Reject​User​Error​Code

enum

Possible error codes that can be returned by `RefundSessionRejectUserError`.

### Valid values

* REFUND\_​SESSION\_​INVALID\_​STATE

  Refund session has already been resolved or has already been rejected with a different reason.

* REFUND\_​SESSION\_​NOT\_​FOUND

  Refund session not found.

***

### Fields

* [Refund​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError#field-RefundSessionRejectUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `RefundSessionReject`.

***

### Map

#### Fields with this enum

* [Refund​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError#field-RefundSessionRejectUserError.fields.code)

---



<a id="latest-enums-refundsessionresolveusererrorcode"></a>


## Refund​Session​Resolve​User​Error​Code

enum

Possible error codes that can be returned by `RefundSessionResolveUserError`.

### Valid values

* REFUND\_​SESSION\_​INVALID\_​STATE

  Refund session has already been rejected.

* REFUND\_​SESSION\_​NOT\_​FOUND

  Refund session not found.

***

### Fields

* [Refund​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError#field-RefundSessionResolveUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `RefundSessionResolve`.

***

### Map

#### Fields with this enum

* [Refund​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError#field-RefundSessionResolveUserError.fields.code)

---



<a id="latest-enums-refundsessionstatecode"></a>


## Refund​Session​State​Code

enum

The possible values that can be used to describe the state of a finalized refund transaction.

### Valid values

* REJECTED

  Refund rejected.

* RESOLVED

  Refund resolved.

***

### Fields

* [Refund​Session​State.code](https://shopify.dev/docs/api/payments-apps/latest/interfaces/RefundSessionState#fields-code)

  INTERFACE

  The State of a finalized refund transaction.

* [Refund​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateRejected#field-RefundSessionStateRejected.fields.code)

  OBJECT

  Additional details about a refund's rejected state.

* [Refund​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateResolved#field-RefundSessionStateResolved.fields.code)

  OBJECT

  Additional details about a refund's resolved state.

***

### Map

#### Fields with this enum

* [Refund​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateRejected#field-RefundSessionStateRejected.fields.code)
* [Refund​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateResolved#field-RefundSessionStateResolved.fields.code)

---



<a id="latest-enums-refundsessionstaterejectedreason"></a>


## Refund​Session​State​Rejected​Reason

enum

The possible values that can be used to describe the reason why the refund is rejected.

### Valid values

* PROCESSING\_​ERROR

  Refund processing failure.

***

### Fields

* [Refund​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateRejected#field-RefundSessionStateRejected.fields.reason)

  OBJECT

  Additional details about a refund's rejected state.

***

### Map

#### Fields with this enum

* [Refund​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateRejected#field-RefundSessionStateRejected.fields.reason)

---



<a id="latest-enums-refundsessionstatusreasonrejectioncode"></a>


## Refund​Session​Status​Reason​Rejection​Code

enum

The possible values that can be used to describe the reason why a refund transaction was rejected.

### Valid values

* PROCESSING\_​ERROR

  Refund processing failure.

***

### Fields

* [Refund​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput#fields-code)

  INPUT OBJECT

  The input fields for the reason why the refund was rejected.

***

### Map

#### Inputs with this enum

* [Refund​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput#fields-code)

---



<a id="latest-enums-verificationsessioncardbrandinput"></a>


## Verification​Session​Card​Brand​Input

enum

Card brand, such as Visa or Mastercard, which can be used for payments.

### Valid values

* AMERICAN\_​EXPRESS

  American Express.

* BOGUS

  Bogus.

* CODENSA

  Codensa.

* CUOTAS

  Cuotas.

* DANKORT

  Dankort.

* DINERS\_​CLUB

  Diners Club.

* DISCOVER

  Discover.

* EFTPOS\_​AU

  Eftpos.

* EFTPOSAU

  Eftposau.

* ELO

  Elo.

* FINLOUP

  Finloup.

* FORBRUGSFORENINGEN

  Forbrugsforeningen.

* HYPERCARD

  Hyper Card.

* INTERAC

  Interac.

* JCB

  JCB.

* LASER

  Laser.

* MAESTRO

  Maestro.

* MASTERCARD

  Mastercard.

* MEEZA

  Meeza.

* MINICUOTAS

  Minicuotas.

* OCA

  OCA.

* OMANNET

  OmanNet.

* OVERSTOCKCITICOBRAND

  Overstock Mastercard.

* OVERSTOCKCITIPLCC

  Overstock Credit Card.

* RUPAY

  RuPay.

* TASACERO

  Tasa Cero.

* UNIONPAY

  UnionPay.

* UNKNOWN

  Unknown.

* VENUSPLCC

  Venus Credit Card.

* VISA

  Visa.

* VISAELECTRON

  Visa Electron.

* ZULILYCREDITCARD

  Zulily Credit Card.

***

### Fields

* [Verification​Session​Card​Input.type](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-type)

  INPUT OBJECT

  The input fields for the credit card.

***

### Map

#### Inputs with this enum

* [Verification​Session​Card​Input.type](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-type)

---



<a id="latest-enums-verificationsessionnextactionaction"></a>


## Verification​Session​Next​Action​Action

enum

The possible values that can be used to describe the next action that a Partner should do after a verification is finalized.

### Valid values

* REDIRECT

  Redirect the customer to the next checkout step.

***

### Fields

* [Verification​Session​Next​Action.action](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionNextAction#field-VerificationSessionNextAction.fields.action)

  OBJECT

  The next action that is expected of the Partner after the verification is finalized.

***

### Map

#### Fields with this enum

* [Verification​Session​Next​Action.action](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionNextAction#field-VerificationSessionNextAction.fields.action)

---



<a id="latest-enums-verificationsessionstatecode"></a>


## Verification​Session​State​Code

enum

The possible values that can be used to describe the state of a verification transaction.

### Valid values

* REDIRECTING

  Redirecting buyer.

* REJECTED

  Verification rejected.

* RESOLVED

  Verification resolved.

***

### Fields

* [Verification​Session​State.code](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState#fields-code)

  INTERFACE

  The state of a verification transaction.

* [Verification​Session​State​Redirecting.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRedirecting#field-VerificationSessionStateRedirecting.fields.code)

  OBJECT

  Additional details about a verification's redirecting state.

* [Verification​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRejected#field-VerificationSessionStateRejected.fields.code)

  OBJECT

  Additional details about a verification's rejected state.

* [Verification​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateResolved#field-VerificationSessionStateResolved.fields.code)

  OBJECT

  Additional details about a verification's resolved state.

***

### Map

#### Fields with this enum

* [Verification​Session​State​Redirecting.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRedirecting#field-VerificationSessionStateRedirecting.fields.code)
* [Verification​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRejected#field-VerificationSessionStateRejected.fields.code)
* [Verification​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateResolved#field-VerificationSessionStateResolved.fields.code)

---



<a id="latest-enums-verificationsessionstatereason"></a>


## Verification​Session​State​Reason

enum

The possible values that can be used to describe the reasons why a verification is rejected.

### Valid values

* AUTHENTICATION\_​FAILED

  Credit card only. 3DS authentication failed. This Reason should be only used when the payments app does not want to proceed and confirm the payment after the 3DS authentication step.

* CARD\_​DECLINED

  Credit card only. Credit card declined.

* EXPIRED\_​CARD

  Credit card only. Credit card expired.

* GENERIC\_​ERROR

  Verification processing failure.

* INCORRECT\_​ADDRESS

  Credit card only. The provided address is valid but does not match the card's provider record.

* INCORRECT\_​CVC

  Credit card only. The provided CVC is valid but does not match the card's provider record.

* INCORRECT\_​ZIP

  Credit card only. The provided ZIP is valid but does not match the card's provider record.

* INVALID\_​CVC

  Credit card only. The provided CVC does not match the expected format.

* INVALID\_​EXPIRY\_​DATE

  Credit card only. The expiry date does not match the date format.

* INVALID\_​NUMBER

  Credit card only. The provided card number does not match the expected format.

* RESOURCE\_​INVALID

  The payment token is not valid for this use case (e.g., customer/payment method mismatch).

* RESOURCE\_​NOT\_​FOUND

  The payment method could not be found in the payment provider's system.

***

### Fields

* [Verification​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput#fields-code)

  INPUT OBJECT

  The input fields for the reason why the verification was rejected.

* [Verification​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRejected#field-VerificationSessionStateRejected.fields.reason)

  OBJECT

  Additional details about a verification's rejected state.

***

### Map

#### Fields with this enum

* [Verification​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionStateRejected#field-VerificationSessionStateRejected.fields.reason)

#### Inputs with this enum

* [Verification​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput#fields-code)

---



<a id="latest-enums-verificationsessionthreedsecureauthenticationflow"></a>


## Verification​Session​Three​DSecure​Authentication​Flow

enum

The 3D Secure Authentication Flow.

### Valid values

* CHALLENGE

  The Challenge Flow requires some Cardholder interaction. Cannot be used with 'trans\_status' 'I'.

* FRICTIONLESS

  The Frictionless Flow does not require a Cardholder interaction.

* UNKNOWN

  Use this value for 3DS version 1 or when an error makes it impossible to establish what the flow is.

***

### Fields

* [Verification​Session​Three​DSecure​Authentication​Data.authenticationFlow](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-authenticationFlow)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Verification​Session​Three​DSecure​Authentication​Data.authenticationFlow](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-authenticationFlow)

---



<a id="latest-enums-verificationsessionthreedsecurechargebackliability"></a>


## Verification​Session​Three​DSecure​Chargeback​Liability

enum

Indicates if the liability for chargebacks has shifted away from the merchant.

### Valid values

* MERCHANT

  The merchant remains liable for chargebacks. This can be the case when a Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant, for instance.

* UNKNOWN

  The merchant may not remain liable for chargebacks. This can be the case when no Strong Customer Authentication exemption is requested by the payments app on behalf of the merchant and when the authentication is successful, for instance. Cannot be used if trans\_status is "N" or "R".

***

### Fields

* [Verification​Session​Three​DSecure​Authentication​Data.chargebackLiability](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-chargebackLiability)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Verification​Session​Three​DSecure​Authentication​Data.chargebackLiability](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-chargebackLiability)

---



<a id="latest-enums-verificationsessionthreedsecurepartnererror"></a>


## Verification​Session​Three​DSecure​Partner​Error

enum

The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result.

### Valid values

* PROCESSING\_​ERROR

  Error while requesting the 3D Secure authentication or processing its result.

***

### Fields

* [Verification​Session​Three​DSecure​Authentication.partnerError](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication#fields-partnerError)

  INPUT OBJECT

  The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

***

### Map

#### Inputs with this enum

* [Verification​Session​Three​DSecure​Authentication.partnerError](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication#fields-partnerError)

---



<a id="latest-enums-verificationsessionthreedsecuretransstatus"></a>


## Verification​Session​Three​DSecure​Trans​Status

enum

Indicates whether a transaction qualifies as an authenticated transaction. For 3DS version 2, the EMV 3D Secure transaction status from the last of the Authentication Response (ARes) or Results Request (RReq) messages. For 3DS version 1, the 3D Secure PARes Status.

### Valid values

* A

  Attempts Processing Performed; Not Authenticated/Verified, but a proof of attempted authentication/verification is provided.

* I

  I = Informational Only; 3DS Requestor challenge preference acknowledged. Cannot be used with 'authentication\_flow' 'CHALLENGE'.

* N

  Not Authenticated /Account Not Verified; Transaction denied.

* R

  Authentication/ Account Verification Rejected; Issuer is rejecting authentication/verification and request that authorisation not be attempted.

* U

  Authentication/ Account Verification Could Not Be Performed; Technical or other problem.

* Y

  Authentication Verification Successful.

***

### Fields

* [Verification​Session​Three​DSecure​Authentication​Data.transStatus](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-transStatus)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Verification​Session​Three​DSecure​Authentication​Data.transStatus](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-transStatus)

---



<a id="latest-enums-verificationsessionthreedsecureversion"></a>


## Verification​Session​Three​DSecure​Version

enum

The 3D Secure version.

### Valid values

* UNKNOWN

  Unknown version.

* V1\_​

  Version 1.0.

* V2\_​

  Version 2.1.

* V2\_​

  Version 2.2.

* V2\_​

  Version 2.3.

***

### Fields

* [Verification​Session​Three​DSecure​Authentication​Data.version](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-version)

  INPUT OBJECT

  The input fields for the 3D Secure authentication data from the partner.

***

### Map

#### Inputs with this enum

* [Verification​Session​Three​DSecure​Authentication​Data.version](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-version)

---



<a id="latest-enums-verificationsessionusererrorcode"></a>


## Verification​Session​User​Error​Code

enum

Possible error codes that can be returned by `VerificationSessionUserError`.

### Valid values

* INVALID\_​STATE\_​TRANSITION

  Verification session has already been resolved or rejected.

* VERIFICATION\_​SESSION\_​NOT\_​FOUND

  Verification session doesn't exist.

* VERIFICATION\_​SESSION\_​TIMEOUT

  Redirect request was received too late.

***

### Fields

* [Verification​Session​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError#field-VerificationSessionUserError.fields.code)

  OBJECT

  Represents a verification session custom error.

***

### Map

#### Fields with this enum

* [Verification​Session​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError#field-VerificationSessionUserError.fields.code)

---



<a id="latest-enums-voidsessionrejectusererrorcode"></a>


## Void​Session​Reject​User​Error​Code

enum

Possible error codes that can be returned by `VoidSessionRejectUserError`.

### Valid values

* VOID\_​SESSION\_​INVALID\_​STATE

  Void session has already been resolved or has already been rejected with a different reason.

* VOID\_​SESSION\_​NOT\_​FOUND

  Void session not found.

***

### Fields

* [Void​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError#field-VoidSessionRejectUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `VoidSessionReject`.

***

### Map

#### Fields with this enum

* [Void​Session​Reject​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError#field-VoidSessionRejectUserError.fields.code)

---



<a id="latest-enums-voidsessionresolveusererrorcode"></a>


## Void​Session​Resolve​User​Error​Code

enum

Possible error codes that can be returned by `VoidSessionResolveUserError`.

### Valid values

* VOID\_​SESSION\_​INVALID\_​STATE

  Void session has already been rejected.

* VOID\_​SESSION\_​NOT\_​FOUND

  Void session not found.

***

### Fields

* [Void​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError#field-VoidSessionResolveUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `VoidSessionResolve`.

***

### Map

#### Fields with this enum

* [Void​Session​Resolve​User​Error.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError#field-VoidSessionResolveUserError.fields.code)

---



<a id="latest-enums-voidsessionstatecode"></a>


## Void​Session​State​Code

enum

The possible values that can be used to describe the state of a finalized void transaction.

### Valid values

* REJECTED

  Void rejected.

* RESOLVED

  Void resolved.

***

### Fields

* [Void​Session​State.code](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VoidSessionState#fields-code)

  INTERFACE

  The state of a finalized void transaction.

* [Void​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateRejected#field-VoidSessionStateRejected.fields.code)

  OBJECT

  Additional details about a void's rejected state.

* [Void​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateResolved#field-VoidSessionStateResolved.fields.code)

  OBJECT

  Additional details about a void's resolved state.

***

### Map

#### Fields with this enum

* [Void​Session​State​Rejected.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateRejected#field-VoidSessionStateRejected.fields.code)
* [Void​Session​State​Resolved.code](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateResolved#field-VoidSessionStateResolved.fields.code)

---



<a id="latest-enums-voidsessionstaterejectedreason"></a>


## Void​Session​State​Rejected​Reason

enum

The possible values that can be used to describe the reason why a void transaction is rejected.

### Valid values

* PROCESSING\_​ERROR

  Void processing failure.

***

### Fields

* [Void​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateRejected#field-VoidSessionStateRejected.fields.reason)

  OBJECT

  Additional details about a void's rejected state.

***

### Map

#### Fields with this enum

* [Void​Session​State​Rejected.reason](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionStateRejected#field-VoidSessionStateRejected.fields.reason)

---



<a id="latest-enums-voidsessionstatusreasonrejectioncode"></a>


## Void​Session​Status​Reason​Rejection​Code

enum

The possible values that can be used to describe the reason why a void transaction is rejected.

### Valid values

* PROCESSING\_​ERROR

  Void processing failure.

***

### Fields

* [Void​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput#fields-code)

  INPUT OBJECT

  The input fields for the reason why the void transaction was rejected.

***

### Map

#### Inputs with this enum

* [Void​Session​Rejection​Reason​Input.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput#fields-code)

---



<a id="latest-input-objects-capturesessionrejectionreasoninput"></a>


## Capture​Session​Rejection​Reason​Input

input\_object

The input fields to use for the reason why the capture was rejected.

### Fields

* code

  [Capture​Session​Status​Reason​Rejection​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionStatusReasonRejectionCode)

  non-null

  The reason code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A custom, localized message for the merchant.

***

### Map

No referencing types

---



<a id="latest-input-objects-external"></a>


## External

input\_object

The input fields will be used to render a message for buyers to take an action on an external device.

### Fields

* data

  [JSON](https://shopify.dev/docs/api/payments-apps/latest/scalars/JSON)

  The data to be used in the modal context.

***

### Input objects using this input

* [Modal​Action.external](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction#fields-external)

  INPUT OBJECT

  The input fields to capture action data from the provider, that will populate the buyer action modal.

***

### Map

#### Input objects using this input

* [Modal​Action.external](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction#fields-external)

---



<a id="latest-input-objects-modalaction"></a>


## Modal​Action

input\_object

The input fields to capture action data from the provider, that will populate the buyer action modal.

### Fields

* external

  [External](https://shopify.dev/docs/api/payments-apps/latest/input-objects/External)

  The modal will render a message to inform buyers to complete an action on an external device.

* qr​Code

  [Qr​Code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/QrCode)

  The modal will render a QR code that the buyer will scan.

***

### Map

No referencing types

---



<a id="latest-input-objects-paymentsessioncardnotpresentinput"></a>


## Payment​Session​Card​Not​Present​Input

input\_object

The input fields for the details of a card not present transaction.

### Fields

* avs​Result​Code

  [Payment​Session​Card​Not​Present​Avs​Result​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionCardNotPresentAvsResultCode)

  The response code from the address verification system (AVS). The code is a single letter.

* cvv​Result​Code

  [Payment​Session​Card​Not​Present​Cvv​Result​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionCardNotPresentCvvResultCode)

  The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter.

***

### Input objects using this input

* [Payment​Session​Payment​Details.cardNotPresent](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails#fields-cardNotPresent)

  INPUT OBJECT

  The input fields to capture details from the provider processing the payment.

***

### Map

#### Input objects using this input

* [Payment​Session​Payment​Details.cardNotPresent](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails#fields-cardNotPresent)

---



<a id="latest-input-objects-paymentsessionpaymentdetails"></a>


## Payment​Session​Payment​Details

input\_object

The input fields to capture details from the provider processing the payment.

### Fields

* card​Not​Present

  [Payment​Session​Card​Not​Present​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionCardNotPresentInput)

  The details from a card not present transaction.

***

### Map

No referencing types

---



<a id="latest-input-objects-paymentsessionrejectionreasoninput"></a>


## Payment​Session​Rejection​Reason​Input

input\_object

The input fields for the reason why the payment was rejected.

### Fields

* code

  [Payment​Session​State​Rejected​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateRejectedReason)

  non-null

  The reason code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A custom, localized message for the merchant.

* source

  [Payment​Session​State​Rejected​Source](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateRejectedSource)

  The entity that rejected the payment.

***

### Map

No referencing types

---



<a id="latest-input-objects-paymentsessionthreedsecureauthentication"></a>


## Payment​Session​Three​DSecure​Authentication

input\_object

The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

### Fields

* authentication​Data

  [Payment​Session​Three​DSecure​Authentication​Data](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData)

  The 3D Secure authentication data from the partner.

* partner​Error

  [Payment​Session​Three​DSecure​Partner​Error](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionThreeDSecurePartnerError)

  The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result. Cannot be present if authentication\_data is present.

***

### Map

No referencing types

---



<a id="latest-input-objects-paymentsessionthreedsecureauthenticationdata"></a>


## Payment​Session​Three​DSecure​Authentication​Data

input\_object

The input fields for the 3D Secure authentication data from the partner.

### Fields

* authentication​Flow

  [Payment​Session​Three​DSecure​Authentication​Flow!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionThreeDSecureAuthenticationFlow)

  non-null

  The Authentication Flow.

* chargeback​Liability

  [Payment​Session​Three​DSecure​Chargeback​Liability!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionThreeDSecureChargebackLiability)

  non-null

  Indicates if the liability for chargebacks has shifted away from the merchant.

* ds​Transaction​Id

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The 3D Secure transaction id.

* trans​Status

  [Payment​Session​Three​DSecure​Trans​Status!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionThreeDSecureTransStatus)

  non-null

  The Transaction Status.

* trans​Status​Reason

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The Transaction Status Reason, as documented by the EMVCo 2.x specification. Must match the "A(0\[1-9]|1\[0-9]|2\[0-6]|\[89]\[0-9])z" regular expression. Provides information on why the trans\_status field has the specified value. Required if trans\_status is one of \[N, U, R].

* version

  [Payment​Session​Three​DSecure​Version!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionThreeDSecureVersion)

  non-null

  The 3D Secure version.

***

### Input objects using this input

* [Payment​Session​Three​DSecure​Authentication.authenticationData](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication#fields-authenticationData)

  INPUT OBJECT

  The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

***

### Map

#### Input objects using this input

* [Payment​Session​Three​DSecure​Authentication.authenticationData](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication#fields-authenticationData)

---



<a id="latest-input-objects-qrcode"></a>


## Qr​Code

input\_object

The input fields will be used to render a QR code that the buyer will scan.

### Fields

* code

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The code which will be used to render the QR Code.

* data

  [JSON](https://shopify.dev/docs/api/payments-apps/latest/scalars/JSON)

  The data to be used within the modal context.

***

### Input objects using this input

* [Modal​Action.qrCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction#fields-qrCode)

  INPUT OBJECT

  The input fields to capture action data from the provider, that will populate the buyer action modal.

***

### Map

#### Input objects using this input

* [Modal​Action.qrCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction#fields-qrCode)

---



<a id="latest-input-objects-refundsessionrejectionreasoninput"></a>


## Refund​Session​Rejection​Reason​Input

input\_object

The input fields for the reason why the refund was rejected.

### Fields

* code

  [Refund​Session​Status​Reason​Rejection​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionStatusReasonRejectionCode)

  non-null

  The reason code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A custom, localized message for the merchant.

***

### Map

No referencing types

---



<a id="latest-input-objects-verificationsessionaddressinput"></a>


## Verification​Session​Address​Input

input\_object

The input fields for the address.

### Fields

* city

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  City of the address.

* company

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Company of the address.

* country​Code

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  Country code of the address.

* family​Name

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  Family name of the address.

* given​Name

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Given name of the address.

* line1

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  Line1 of the address.

* line2

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Line2 of the address.

* phone​Number

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Phone number of the address.

* postal​Code

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Postal code of the address.

* province

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Province of the address.

***

### Input objects using this input

* [Verification​Session​Card​Input.billingAddress](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-billingAddress)

  INPUT OBJECT

  The input fields for the credit card.

***

### Map

#### Input objects using this input

* [Verification​Session​Card​Input.billingAddress](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-billingAddress)

---



<a id="latest-input-objects-verificationsessioncardinput"></a>


## Verification​Session​Card​Input

input\_object

The input fields for the credit card.

### Fields

* billing​Address

  [Verification​Session​Address​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput)

  The billing address of the card holder.

* bin

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The bin number of the card.

* card​Holder​Name

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The name of the card holder.

* descriptor

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The descriptor displayed to the buyer on invoice and checkout.

* dynamic​Last4

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The last four digits of the DPAN if one was used.

* expiration​Month

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The expiration month of the card.

* expiration​Year

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The expiration year of the card.

* issuer​Name

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The name of the company which issued the card.

* last4

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The last four digits of the card.

* network​Transaction​Id

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The networkTransactionId of the card.

* type

  [Verification​Session​Card​Brand​Input!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionCardBrandInput)

  non-null

  The network used to process the card.

* wallet

  [Digital​Wallet](https://shopify.dev/docs/api/payments-apps/latest/enums/DigitalWallet)

  The enum value of the wallet.

***

### Input objects using this input

* [Verification​Session​Payment​Details​Input.card](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput#fields-card)

  INPUT OBJECT

  The input fields for the payment details.

***

### Map

#### Input objects using this input

* [Verification​Session​Payment​Details​Input.card](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput#fields-card)

---



<a id="latest-input-objects-verificationsessionpaymentdetailsinput"></a>


## Verification​Session​Payment​Details​Input

input\_object

The input fields for the payment details.

### Fields

* card

  [Verification​Session​Card​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput)

  Card information.

***

### Map

No referencing types

---



<a id="latest-input-objects-verificationsessionrejectionreasoninput"></a>


## Verification​Session​Rejection​Reason​Input

input\_object

The input fields for the reason why the verification was rejected.

### Fields

* code

  [Verification​Session​State​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateReason)

  non-null

  The reason code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A custom, localized message for the merchant.

***

### Map

No referencing types

---



<a id="latest-input-objects-verificationsessionthreedsecureauthentication"></a>


## Verification​Session​Three​DSecure​Authentication

input\_object

The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

### Fields

* authentication​Data

  [Verification​Session​Three​DSecure​Authentication​Data](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData)

  The 3D Secure authentication data from the partner.

* partner​Error

  [Verification​Session​Three​DSecure​Partner​Error](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionThreeDSecurePartnerError)

  The error that occurred in the partner environment while requesting the 3D Secure authentication or processing its result. Cannot be present if authentication\_data is present.

***

### Map

No referencing types

---



<a id="latest-input-objects-verificationsessionthreedsecureauthenticationdata"></a>


## Verification​Session​Three​DSecure​Authentication​Data

input\_object

The input fields for the 3D Secure authentication data from the partner.

### Fields

* authentication​Flow

  [Verification​Session​Three​DSecure​Authentication​Flow!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionThreeDSecureAuthenticationFlow)

  non-null

  The Authentication Flow.

* chargeback​Liability

  [Verification​Session​Three​DSecure​Chargeback​Liability!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionThreeDSecureChargebackLiability)

  non-null

  Indicates if the liability for chargebacks has shifted away from the merchant.

* trans​Status

  [Verification​Session​Three​DSecure​Trans​Status!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionThreeDSecureTransStatus)

  non-null

  The Transaction Status.

* trans​Status​Reason

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The Transaction Status Reason, as documented by the EMVCo 2.x specification. Must match the "A(0\[1-9]|1\[0-9]|2\[0-6]|\[89]\[0-9])z" regular expression. Provides information on why the trans\_status field has the specified value. Required if trans\_status is one of \[N, U, R].

* version

  [Verification​Session​Three​DSecure​Version!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionThreeDSecureVersion)

  non-null

  The 3D Secure version.

***

### Input objects using this input

* [Verification​Session​Three​DSecure​Authentication.authenticationData](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication#fields-authenticationData)

  INPUT OBJECT

  The 3D Secure authentication data from the partner. One and only one of authentication\_data and partner\_error must be present.

***

### Map

#### Input objects using this input

* [Verification​Session​Three​DSecure​Authentication.authenticationData](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication#fields-authenticationData)

---



<a id="latest-input-objects-voidsessionrejectionreasoninput"></a>


## Void​Session​Rejection​Reason​Input

input\_object

The input fields for the reason why the void transaction was rejected.

### Fields

* code

  [Void​Session​Status​Reason​Rejection​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionStatusReasonRejectionCode)

  non-null

  The reason code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A custom, localized message for the merchant.

***

### Map

No referencing types

---



<a id="latest-interfaces-capturesessionstate"></a>


## Capture​Session​State

interface

The state of a finalized capture transaction.

### Fields

* code

  [Capture​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionStateCode)

  non-null

  The capture state code.

***

###### Variables

```json
{
	"code": ""
}
```

###### Schema

```graphql
interface CaptureSessionState {
  code: CaptureSessionStateCode!
}
```

---



<a id="latest-interfaces-displayableerror"></a>


## Displayable​Error

interface

Represents an error in the input of a mutation.

### Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

###### Variables

```json
{
	"field": "",
	"message": ""
}
```

###### Schema

```graphql
interface DisplayableError {
  field: [String!]
  message: String!
}
```

---



<a id="latest-interfaces-paymentsessionstate"></a>


## Payment​Session​State

interface

The state of a payment transaction.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

***

###### Variables

```json
{
	"code": ""
}
```

###### Schema

```graphql
interface PaymentSessionState {
  code: PaymentSessionStateCode!
}
```

---



<a id="latest-interfaces-refundsessionstate"></a>


## Refund​Session​State

interface

The State of a finalized refund transaction.

### Fields

* code

  [Refund​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionStateCode)

  non-null

  The refund state code.

***

###### Variables

```json
{
	"code": ""
}
```

###### Schema

```graphql
interface RefundSessionState {
  code: RefundSessionStateCode!
}
```

---



<a id="latest-interfaces-verificationsessionstate"></a>


## Verification​Session​State

interface

The state of a verification transaction.

### Fields

* code

  [Verification​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateCode)

  non-null

  The verification state code.

***

###### Variables

```json
{
	"code": ""
}
```

###### Schema

```graphql
interface VerificationSessionState {
  code: VerificationSessionStateCode!
}
```

---



<a id="latest-interfaces-voidsessionstate"></a>


## Void​Session​State

interface

The state of a finalized void transaction.

### Fields

* code

  [Void​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionStateCode)

  non-null

  The void state code.

***

###### Variables

```json
{
	"code": ""
}
```

###### Schema

```graphql
interface VoidSessionState {
  code: VoidSessionStateCode!
}
```

---



<a id="latest-mutations-capturesessionreject"></a>


## capture​Session​Reject

mutation

Requires `write_payment_sessions` access scope.

Rejects an open capture session.

After the `captureSessionReject` mutation completes on a given capture session, any `captureSessionResolve` mutation attempts will fail. Subsequent `captureSessionReject` mutation attempts will succeed, but the `reason` argument will be ignored.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The capture session ID.

* reason

  [Capture​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput)

  required

  The rejection reason.

***

### Capture​Session​Reject​Payload returns

* capture​Session

  [Capture​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession)

  The updated capture session.

* user​Errors

  [\[Capture​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### captureSessionReject reference

---



<a id="latest-mutations-capturesessionresolve"></a>


## capture​Session​Resolve

mutation

Requires `write_payment_sessions` access scope.

Resolves an open capture session.

After the `captureSessionResolve` mutation completes on a given capture session, any `captureSessionReject` mutation attempts will fail. Subsequent `captureSessionResolve` mutation attempts will succeed.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The capture session ID.

***

### Capture​Session​Resolve​Payload returns

* capture​Session

  [Capture​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession)

  The updated capture session.

* user​Errors

  [\[Capture​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### captureSessionResolve reference

---



<a id="latest-mutations-paymentsessionconfirm"></a>


## payment​Session​Confirm

mutation

Requires `write_payment_sessions` access scope.

Initiates the confirmation process of the given payment\_session.

Shopify will start confirming the payment. According to its business logic, Shopify determines if the payment can be authorized and sends a POST request to the payments app, delivering the confirmation result.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

***

### Payment​Session​Confirm​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Confirm​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionConfirm reference

---



<a id="latest-mutations-paymentsessionmodal"></a>


## payment​Session​Modal

mutation

Requires `write_payment_sessions` access scope.

Raises a modal that will be displayed to the buyer after a checkout is completed. Included data will be used to populate the UI extension in the modal.

### Arguments

* action

  [Modal​Action!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction)

  required

  The buyer action and corresponding data that will be made available in the modal at runtime.

* expires​At

  [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

  The date and time the modal will expire, in UTC

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

***

### Payment​Session​Modal​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Modal​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionModal reference

---



<a id="latest-mutations-paymentsessionpending"></a>


## payment​Session​Pending

mutation

Requires `write_payment_sessions` access scope.

Change a payment session status to pending.

Upon receiving the response from the `PaymentSessionPending` mutation, you must redirect the customer back to Shopify, using `redirectUrl` in `nextAction`.

Upon completion, pending payments must be finalized into either a successful or failed state using the `paymentSessionResolve` or `paymentSessionReject` mutations. Both `sale` and `authorization` payments can be marked as pending.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

* pending​Expires​At

  [Date​Time!](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

  required

  The date and time when the pending payment expires, recommended to be within 3 days.

* reason

  [Payment​Session​State​Pending​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStatePendingReason)

  required

  The reason the payment is pending.

***

### Payment​Session​Pending​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Pending​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionPending reference

---



<a id="latest-mutations-paymentsessionredirect"></a>


## payment​Session​Redirect

mutation

Requires `write_payment_sessions` access scope.

Redirects the buyer to the given URL for the payment session. For example, Shopify will redirect the buyer to the URL where the 3DS authentication will take place for onsite payment with `credit_card` payment method.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

* redirect​Url

  [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

  required

  The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to payments with the credit card payment method only.

***

### Payment​Session​Redirect​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Redirect​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionRedirect reference

---



<a id="latest-mutations-paymentsessionreject"></a>


## payment​Session​Reject

mutation

Requires `write_payment_sessions` access scope.

Rejects an open payment session. After the `paymentSessionReject` mutation completes on a given payment session, any `paymentSessionResolve` mutation attempts will fail. Subsequent `paymentSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

### Arguments

* authentication

  [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

  The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

* payment​Details

  [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

  The payment details used to process the transaction.

* reason

  [Payment​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput)

  required

  The rejection reason.

***

### Payment​Session​Reject​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionReject reference

---



<a id="latest-mutations-paymentsessionresolve"></a>


## payment​Session​Resolve

mutation

Requires `write_payment_sessions` access scope.

Resolves an open payment session. After the `paymentSessionResolve` mutation completes on a given payment session, any `paymentSessionReject` mutation attempts will fail. Subsequent `paymentSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

### Arguments

* authentication

  [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

  The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

* authorization​Expires​At

  [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

  The date and time when an authorized payment session expires.

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The payment session ID.

* network​Transaction​Id

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The transaction ID issued by the network when processing the payment.

* payment​Details

  [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

  The payment details used to process the transaction.

***

### Payment​Session​Resolve​Payload returns

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentSessionResolve reference

---



<a id="latest-mutations-paymentsappconfigure"></a>


## payments​App​Configure

mutation

Requires `write_payment_gateways` access scope.

Configures the partner-managed payments gateway to work on the merchant's store. For an example of how to use the `paymentsAppConfigure` mutation, refer to the tutorial for [onboarding merchants to payments extensions](https://shopify.dev/docs/apps/build/payments/onboard-a-merchant-payments-extension).

### Arguments

* external​Handle

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Handle used in the external system.

* ready

  [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

  required

  The provider is ready to process merchant's payments.

***

### Payments​App​Configure​Payload returns

* payments​App​Configuration

  [Payments​App​Configuration](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentsAppConfiguration)

  The production configuration of the payments app.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### paymentsAppConfigure reference

---



<a id="latest-mutations-refundsessionreject"></a>


## refund​Session​Reject

mutation

Requires `write_payment_sessions` access scope.

Rejects an open refund session. After the `refundSessionReject` mutation completes on a given refund session, any `refundSessionResolve` mutation attempts will fail. Subsequent `refundSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The refund session ID.

* reason

  [Refund​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput)

  required

  The rejection reason.

***

### Refund​Session​Reject​Payload returns

* refund​Session

  [Refund​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession)

  The updated refund session.

* user​Errors

  [\[Refund​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### refundSessionReject reference

---



<a id="latest-mutations-refundsessionresolve"></a>


## refund​Session​Resolve

mutation

Requires `write_payment_sessions` access scope.

Resolves an open refund session. After the `refundSessionResolve` mutation completes on a given refund session, any `refundSessionReject` mutation attempts will fail. Subsequent `refundSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The refund session ID.

***

### Refund​Session​Resolve​Payload returns

* refund​Session

  [Refund​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession)

  The updated refund session.

* user​Errors

  [\[Refund​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### refundSessionResolve reference

---



<a id="latest-mutations-verificationsessionredirect"></a>


## verification​Session​Redirect

mutation

Requires `write_payment_sessions` access scope.

Redirects the buyer to the given URL for the verification session. Shopify will redirect the buyer to the URL where the 3DS authentication will take place when verifying the buyer's credit\_card.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The verification session ID.

* redirect​Url

  [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

  required

  The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to verifications with the credit card payment method only.

***

### Verification​Session​Redirect​Payload returns

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Examples

* ### verificationSessionRedirect reference

---



<a id="latest-mutations-verificationsessionreject"></a>


## verification​Session​Reject

mutation

Requires `write_payment_sessions` access scope.

Rejects an open verification session. After the `verificationSessionReject` mutation completes on a given verification session, any `verificationSessionResolve` mutation attempts will fail. Subsequent `verificationSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

### Arguments

* authentication

  [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

  The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The verification session ID.

* reason

  [Verification​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput)

  required

  The rejection reason.

***

### Verification​Session​Reject​Payload returns

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Examples

* ### verificationSessionReject reference

---



<a id="latest-mutations-verificationsessionresolve"></a>


## verification​Session​Resolve

mutation

Requires `write_payment_sessions` access scope.

Resolves an open verification session. After the `verificationSessionResolve` mutation completes on a given verification session, any `verificationSessionReject` mutation attempts will fail. Subsequent `verificationSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

### Arguments

* authentication

  [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

  The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The verification session ID.

* payment​Details

  [Verification​Session​Payment​Details​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput)

  The payment details used to process the verification.

* network​Transaction​Id

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  Deprecated

***

### Verification​Session​Resolve​Payload returns

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Examples

* ### verificationSessionResolve reference

---



<a id="latest-mutations-voidsessionreject"></a>


## void​Session​Reject

mutation

Requires `write_payment_sessions` access scope.

Rejects an open void session. After the `voidSessionReject` mutation completes on a given void session, any `voidSessionResolve` mutation attempts will fail. Subsequent `voidSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The void session ID.

* reason

  [Void​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput)

  required

  The rejection reason.

***

### Void​Session​Reject​Payload returns

* user​Errors

  [\[Void​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* void​Session

  [Void​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession)

  The updated void session.

***

### Examples

* ### voidSessionReject reference

---



<a id="latest-mutations-voidsessionresolve"></a>


## void​Session​Resolve

mutation

Requires `write_payment_sessions` access scope.

Resolves an open void session. After the `voidSessionResolve` mutation completes on a given void session, any `voidSessionReject` mutation attempts will fail. Subsequent `voidSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  required

  The void session ID.

***

### Void​Session​Resolve​Payload returns

* user​Errors

  [\[Void​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* void​Session

  [Void​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession)

  The updated void session.

***

### Examples

* ### voidSessionResolve reference

---



<a id="latest-objects-apiversion"></a>


## Api​Version

object

A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning). Versions are commonly referred to by their handle (for example, `2021-10`).

### Fields

* display​Name

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The human-readable name of the version.

* handle

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

* supported

  [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

  non-null

  Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).

***

### Map

No referencing types

***

### Queries

* [public​Api​Versions](https://shopify.dev/docs/api/payments-apps/latest/queries/publicApiVersions)

  query

  The list of public Payments Apps API versions, including supported, release candidate and unstable versions.

***

### ApiVersion Queries

#### Queried by

* [public​Api​Versions](https://shopify.dev/docs/api/payments-apps/latest/queries/publicApiVersions)

---



<a id="latest-objects-capturesession"></a>


## Capture​Session

object

Requires `read_payment_sessions` access scope.

Represents a unique capture transaction.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  non-null

  A globally-unique ID.

* state

  [Capture​Session​States!](https://shopify.dev/docs/api/payments-apps/latest/unions/CaptureSessionStates)

  non-null

  Details about the capture state.

***

### Map

No referencing types

***

### Mutations

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)

  mutation

  Rejects an open capture session.

  After the `captureSessionReject` mutation completes on a given capture session, any `captureSessionResolve` mutation attempts will fail. Subsequent `captureSessionReject` mutation attempts will succeed, but the `reason` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  * reason

    [Capture​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

  mutation

  Resolves an open capture session.

  After the `captureSessionResolve` mutation completes on a given capture session, any `captureSessionReject` mutation attempts will fail. Subsequent `captureSessionResolve` mutation attempts will succeed.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  ***

***

### CaptureSession Mutations

#### Mutated by

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)
* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

---



<a id="latest-objects-capturesessionrejectusererror"></a>


## Capture​Session​Reject​User​Error

object

An error that occurs during the execution of `CaptureSessionReject`.

### Fields

* code

  [Capture​Session​Reject​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionRejectUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)

  mutation

  Rejects an open capture session.

  After the `captureSessionReject` mutation completes on a given capture session, any `captureSessionResolve` mutation attempts will fail. Subsequent `captureSessionReject` mutation attempts will succeed, but the `reason` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  * reason

    [Capture​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### CaptureSessionRejectUserError Mutations

#### Mutated by

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### CaptureSessionRejectUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-capturesessionresolveusererror"></a>


## Capture​Session​Resolve​User​Error

object

An error that occurs during the execution of `CaptureSessionResolve`.

### Fields

* code

  [Capture​Session​Resolve​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionResolveUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

  mutation

  Resolves an open capture session.

  After the `captureSessionResolve` mutation completes on a given capture session, any `captureSessionReject` mutation attempts will fail. Subsequent `captureSessionResolve` mutation attempts will succeed.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  ***

***

### CaptureSessionResolveUserError Mutations

#### Mutated by

* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### CaptureSessionResolveUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-capturesessionstaterejected"></a>


## Capture​Session​State​Rejected

object

Requires `read_payment_sessions` access scope.

Additional details about a capture's rejected state.

### Fields

* code

  [Capture​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionStateCode)

  non-null

  The capture state code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The custom, localized message for the merchant.

* reason

  [Capture​Session​State​Rejected​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionStateRejectedReason)

  non-null

  The reason the capture is rejected.

***

### Map

#### Possible type in

* [Capture​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/CaptureSessionStates)

***

### Interfaces

* [Capture​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/CaptureSessionState)

  interface

***

### CaptureSessionStateRejected Implements

#### Implements

* [Capture​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/CaptureSessionState)

---



<a id="latest-objects-capturesessionstateresolved"></a>


## Capture​Session​State​Resolved

object

Requires `read_payment_sessions` access scope.

Additional details about a capture's resolved state.

### Fields

* code

  [Capture​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/CaptureSessionStateCode)

  non-null

  The capture state code.

***

### Map

#### Possible type in

* [Capture​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/CaptureSessionStates)

***

### Interfaces

* [Capture​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/CaptureSessionState)

  interface

***

### CaptureSessionStateResolved Implements

#### Implements

* [Capture​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/CaptureSessionState)

---



<a id="latest-objects-mutationroot"></a>


## Mutation​Root

object

The schema's entry point for all mutation operations.

### Map

No referencing types

---



<a id="latest-objects-paymentsession"></a>


## Payment​Session

object

Requires `read_payment_sessions` access scope.

A unique payment transaction.

### Fields

* authorization​Expires​At

  [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

  The date and time when an authorized payment session expires.

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  non-null

  A globally-unique ID.

* next​Action

  [Payment​Session​Next​Action](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionNextAction)

  The next action expected of the partner.

* pending​Expires​At

  [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

  The date and time when a pending payment session expires.

* state

  [Payment​Session​States!](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

  non-null

  Details about the payment state.

***

### Map

No referencing types

***

### Mutations

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)

  mutation

  Initiates the confirmation process of the given payment\_session.

  Shopify will start confirming the payment. According to its business logic, Shopify determines if the payment can be authorized and sends a POST request to the payments app, delivering the confirmation result.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  ***

* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)

  mutation

  Raises a modal that will be displayed to the buyer after a checkout is completed. Included data will be used to populate the UI extension in the modal.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time the modal will expire, in UTC

  * action

    [Modal​Action!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction)

    required

    The buyer action and corresponding data that will be made available in the modal at runtime.

  ***

* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)

  mutation

  Change a payment session status to pending.

  Upon receiving the response from the `PaymentSessionPending` mutation, you must redirect the customer back to Shopify, using `redirectUrl` in `nextAction`.

  Upon completion, pending payments must be finalized into either a successful or failed state using the `paymentSessionResolve` or `paymentSessionReject` mutations. Both `sale` and `authorization` payments can be marked as pending.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * pending​Expires​At

    [Date​Time!](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    required

    The date and time when the pending payment expires, recommended to be within 3 days.

  * reason

    [Payment​Session​State​Pending​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStatePendingReason)

    required

    The reason the payment is pending.

  ***

* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the payment session. For example, Shopify will redirect the buyer to the URL where the 3DS authentication will take place for onsite payment with `credit_card` payment method.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to payments with the credit card payment method only.

  ***

* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)

  mutation

  Rejects an open payment session. After the `paymentSessionReject` mutation completes on a given payment session, any `paymentSessionResolve` mutation attempts will fail. Subsequent `paymentSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * reason

    [Payment​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)

  mutation

  Resolves an open payment session. After the `paymentSessionResolve` mutation completes on a given payment session, any `paymentSessionReject` mutation attempts will fail. Subsequent `paymentSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * authorization​Expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time when an authorized payment session expires.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    The transaction ID issued by the network when processing the payment.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

***

### PaymentSession Mutations

#### Mutated by

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)
* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)
* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)
* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)
* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)
* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)

---



<a id="latest-objects-paymentsessionactionsredirect"></a>


## Payment​Session​Actions​Redirect

object

Requires `read_payment_sessions` access scope.

The payload required to redirect the customer to the shop after payment is finalized.

### Fields

* redirect​Url

  [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

  non-null

  The URL of the checkout that's used to redirect the customer.

***

### Map

#### Possible type in

* [Payment​Session​Next​Action​Context](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionNextActionContext)

---



<a id="latest-objects-paymentsessionconfirmusererror"></a>


## Payment​Session​Confirm​User​Error

object

An error that occurs during the execution of `PaymentSessionConfirm`.

### Fields

* code

  [Payment​Session​Confirm​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionConfirmUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)

  mutation

  Initiates the confirmation process of the given payment\_session.

  Shopify will start confirming the payment. According to its business logic, Shopify determines if the payment can be authorized and sends a POST request to the payments app, delivering the confirmation result.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  ***

***

### PaymentSessionConfirmUserError Mutations

#### Mutated by

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### PaymentSessionConfirmUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-paymentsessionmodalusererror"></a>


## Payment​Session​Modal​User​Error

object

An error that occurs during the execution of `PaymentSessionModal`.

### Fields

* code

  [Payment​Session​Modal​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionModalUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)

  mutation

  Raises a modal that will be displayed to the buyer after a checkout is completed. Included data will be used to populate the UI extension in the modal.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time the modal will expire, in UTC

  * action

    [Modal​Action!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction)

    required

    The buyer action and corresponding data that will be made available in the modal at runtime.

  ***

***

### PaymentSessionModalUserError Mutations

#### Mutated by

* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### PaymentSessionModalUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-paymentsessionnextaction"></a>


## Payment​Session​Next​Action

object

Requires `read_payment_sessions` access scope.

The next action that is expected of the Partner after the payment is finalized.

### Fields

* action

  [Payment​Session​Next​Action​Action!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionNextActionAction)

  non-null

  The action expected by the partner.

* context

  [Payment​Session​Next​Action​Context!](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionNextActionContext)

  non-null

  The context required to perform an action.

***

### Map

#### Fields with this object

* [PaymentSession.nextAction](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession#field-PaymentSession.fields.nextAction)

---



<a id="latest-objects-paymentsessionpendingusererror"></a>


## Payment​Session​Pending​User​Error

object

Requires `read_payment_sessions` access scope.

Represents a payment session custom error.

### Fields

* code

  [Payment​Session​Pending​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionPendingUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)

  mutation

  Change a payment session status to pending.

  Upon receiving the response from the `PaymentSessionPending` mutation, you must redirect the customer back to Shopify, using `redirectUrl` in `nextAction`.

  Upon completion, pending payments must be finalized into either a successful or failed state using the `paymentSessionResolve` or `paymentSessionReject` mutations. Both `sale` and `authorization` payments can be marked as pending.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * pending​Expires​At

    [Date​Time!](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    required

    The date and time when the pending payment expires, recommended to be within 3 days.

  * reason

    [Payment​Session​State​Pending​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStatePendingReason)

    required

    The reason the payment is pending.

  ***

***

### PaymentSessionPendingUserError Mutations

#### Mutated by

* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### PaymentSessionPendingUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-paymentsessionredirectusererror"></a>


## Payment​Session​Redirect​User​Error

object

An error that occurs during the execution of `PaymentSessionRedirect`.

### Fields

* code

  [Payment​Session​Redirect​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionRedirectUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the payment session. For example, Shopify will redirect the buyer to the URL where the 3DS authentication will take place for onsite payment with `credit_card` payment method.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to payments with the credit card payment method only.

  ***

***

### PaymentSessionRedirectUserError Mutations

#### Mutated by

* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### PaymentSessionRedirectUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-paymentsessionstatebuyeractionrequired"></a>


## Payment​Session​State​Buyer​Action​Required

object

Requires `read_payment_sessions` access scope.

Buyer action required for the payment.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStateBuyerActionRequired Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsessionstateconfirming"></a>


## Payment​Session​State​Confirming

object

Requires `read_payment_sessions` access scope.

Additional details about a payment's confirming state.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStateConfirming Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsessionstatepending"></a>


## Payment​Session​State​Pending

object

Requires `read_payment_sessions` access scope.

Additional details about a payment's pending state.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

* reason

  [Payment​Session​State​Pending​Reason](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStatePendingReason)

  The reason the payment is pending.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStatePending Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsessionstateredirecting"></a>


## Payment​Session​State​Redirecting

object

Requires `read_payment_sessions` access scope.

Additional details about a payment's redirecting state.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStateRedirecting Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsessionstaterejected"></a>


## Payment​Session​State​Rejected

object

Requires `read_payment_sessions` access scope.

Additional details about a payment's rejected state.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The custom, localized message for the merchant.

* reason

  [Payment​Session​State​Rejected​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateRejectedReason)

  non-null

  The reason the payment is rejected.

* source

  [Payment​Session​State​Rejected​Source](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateRejectedSource)

  The entity that rejected the payment.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStateRejected Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsessionstateresolved"></a>


## Payment​Session​State​Resolved

object

Requires `read_payment_sessions` access scope.

Additional details about a payment's resolved state.

### Fields

* code

  [Payment​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStateCode)

  non-null

  The payment state code.

***

### Map

#### Possible type in

* [Payment​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/PaymentSessionStates)

***

### Interfaces

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

  interface

***

### PaymentSessionStateResolved Implements

#### Implements

* [Payment​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/PaymentSessionState)

---



<a id="latest-objects-paymentsappconfiguration"></a>


## Payments​App​Configuration

object

Requires `read_payment_gateways` access scope.

The [production configuration](https://shopify.dev/apps/payments/onboarding-a-merchant-payments-apps) of the payments app.

### Fields

* external​Handle

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  A username or identifier associated with the account that the merchant has used with the partner. It displays in the Payments section in the Shopify admin. The `externalHandle` enables the merchant to identify the connected payment provider account.

* ready

  [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

  non-null

  Whether the provider is ready to process the merchant's payments.

***

### Map

No referencing types

***

### Mutations

* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

  mutation

  Configures the partner-managed payments gateway to work on the merchant's store. For an example of how to use the `paymentsAppConfigure` mutation, refer to the tutorial for [onboarding merchants to payments extensions](https://shopify.dev/docs/apps/build/payments/onboard-a-merchant-payments-extension).

  * external​Handle

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    ### Arguments

    Handle used in the external system.

  * ready

    [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

    required

    The provider is ready to process merchant's payments.

  ***

***

### PaymentsAppConfiguration Mutations

#### Mutated by

* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

---



<a id="latest-objects-queryroot"></a>


## Query​Root

object

The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

### Map

No referencing types

---



<a id="latest-objects-refundsession"></a>


## Refund​Session

object

Requires `read_payment_sessions` access scope.

A unique refund transaction.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  non-null

  A globally-unique ID.

* state

  [Refund​Session​States!](https://shopify.dev/docs/api/payments-apps/latest/unions/RefundSessionStates)

  non-null

  Details about the refund state.

***

### Map

No referencing types

***

### Mutations

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)

  mutation

  Rejects an open refund session. After the `refundSessionReject` mutation completes on a given refund session, any `refundSessionResolve` mutation attempts will fail. Subsequent `refundSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  * reason

    [Refund​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

  mutation

  Resolves an open refund session. After the `refundSessionResolve` mutation completes on a given refund session, any `refundSessionReject` mutation attempts will fail. Subsequent `refundSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  ***

***

### RefundSession Mutations

#### Mutated by

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)
* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

---



<a id="latest-objects-refundsessionrejectusererror"></a>


## Refund​Session​Reject​User​Error

object

An error that occurs during the execution of `RefundSessionReject`.

### Fields

* code

  [Refund​Session​Reject​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionRejectUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)

  mutation

  Rejects an open refund session. After the `refundSessionReject` mutation completes on a given refund session, any `refundSessionResolve` mutation attempts will fail. Subsequent `refundSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  * reason

    [Refund​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### RefundSessionRejectUserError Mutations

#### Mutated by

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### RefundSessionRejectUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-refundsessionresolveusererror"></a>


## Refund​Session​Resolve​User​Error

object

An error that occurs during the execution of `RefundSessionResolve`.

### Fields

* code

  [Refund​Session​Resolve​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionResolveUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

  mutation

  Resolves an open refund session. After the `refundSessionResolve` mutation completes on a given refund session, any `refundSessionReject` mutation attempts will fail. Subsequent `refundSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  ***

***

### RefundSessionResolveUserError Mutations

#### Mutated by

* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### RefundSessionResolveUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-refundsessionstaterejected"></a>


## Refund​Session​State​Rejected

object

Requires `read_payment_sessions` access scope.

Additional details about a refund's rejected state.

### Fields

* code

  [Refund​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionStateCode)

  non-null

  The refund state code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The custom, localized message for the merchant.

* reason

  [Refund​Session​State​Rejected​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionStateRejectedReason)

  non-null

  The reason the refund is rejected.

***

### Map

#### Possible type in

* [Refund​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/RefundSessionStates)

***

### Interfaces

* [Refund​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/RefundSessionState)

  interface

***

### RefundSessionStateRejected Implements

#### Implements

* [Refund​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/RefundSessionState)

---



<a id="latest-objects-refundsessionstateresolved"></a>


## Refund​Session​State​Resolved

object

Requires `read_payment_sessions` access scope.

Additional details about a refund's resolved state.

### Fields

* code

  [Refund​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/RefundSessionStateCode)

  non-null

  The refund state code.

***

### Map

#### Possible type in

* [Refund​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/RefundSessionStates)

***

### Interfaces

* [Refund​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/RefundSessionState)

  interface

***

### RefundSessionStateResolved Implements

#### Implements

* [Refund​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/RefundSessionState)

---



<a id="latest-objects-usererror"></a>


## User​Error

object

An error in the input of a mutation. Mutations return `UserError` objects to indicate validation failures, such as invalid field values or business logic violations, that prevent the operation from completing.

### Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

  mutation

  Configures the partner-managed payments gateway to work on the merchant's store. For an example of how to use the `paymentsAppConfigure` mutation, refer to the tutorial for [onboarding merchants to payments extensions](https://shopify.dev/docs/apps/build/payments/onboard-a-merchant-payments-extension).

  * external​Handle

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    ### Arguments

    Handle used in the external system.

  * ready

    [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

    required

    The provider is ready to process merchant's payments.

  ***

* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)

  mutation

  Rejects an open payment session. After the `paymentSessionReject` mutation completes on a given payment session, any `paymentSessionResolve` mutation attempts will fail. Subsequent `paymentSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * reason

    [Payment​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)

  mutation

  Resolves an open payment session. After the `paymentSessionResolve` mutation completes on a given payment session, any `paymentSessionReject` mutation attempts will fail. Subsequent `paymentSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * authorization​Expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time when an authorized payment session expires.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    The transaction ID issued by the network when processing the payment.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

***

### UserError Mutations

#### Mutated by

* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)
* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)
* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### UserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-verificationsession"></a>


## Verification​Session

object

Requires `read_payment_sessions` access scope.

A unique verification transaction.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  non-null

  A globally-unique ID.

* next​Action

  [Verification​Session​Next​Action](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionNextAction)

  The next action expected of the partner.

* state

  [Verification​Session​States!](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionStates)

  non-null

  Details about the verification state.

***

### Map

No referencing types

***

### Mutations

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the verification session. Shopify will redirect the buyer to the URL where the 3DS authentication will take place when verifying the buyer's credit\_card.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to verifications with the credit card payment method only.

  ***

* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)

  mutation

  Rejects an open verification session. After the `verificationSessionReject` mutation completes on a given verification session, any `verificationSessionResolve` mutation attempts will fail. Subsequent `verificationSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * reason

    [Verification​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  ***

* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

  mutation

  Resolves an open verification session. After the `verificationSessionResolve` mutation completes on a given verification session, any `verificationSessionReject` mutation attempts will fail. Subsequent `verificationSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    Deprecated

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Verification​Session​Payment​Details​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput)

    The payment details used to process the verification.

  ***

***

### VerificationSession Mutations

#### Mutated by

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)
* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)
* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

---



<a id="latest-objects-verificationsessionactionsredirect"></a>


## Verification​Session​Actions​Redirect

object

Requires `read_payment_sessions` access scope.

The payload required to redirect the customer to the shop after verification is finalized.

### Fields

* redirect​Url

  [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

  non-null

  The URL of the checkout that's used to redirect the customer.

***

### Map

#### Possible type in

* [Verification​Session​Next​Action​Context](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionNextActionContext)

---



<a id="latest-objects-verificationsessionnextaction"></a>


## Verification​Session​Next​Action

object

Requires `read_payment_sessions` access scope.

The next action that is expected of the Partner after the verification is finalized.

### Fields

* action

  [Verification​Session​Next​Action​Action!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionNextActionAction)

  non-null

  The action expected by the partner.

* context

  [Verification​Session​Next​Action​Context!](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionNextActionContext)

  non-null

  The context required to perform an action.

***

### Map

#### Fields with this object

* [VerificationSession.nextAction](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession#field-VerificationSession.fields.nextAction)

---



<a id="latest-objects-verificationsessionstateredirecting"></a>


## Verification​Session​State​Redirecting

object

Requires `read_payment_sessions` access scope.

Additional details about a verification's redirecting state.

### Fields

* code

  [Verification​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateCode)

  non-null

  The verification state code.

***

### Map

#### Possible type in

* [Verification​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionStates)

***

### Interfaces

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

  interface

***

### VerificationSessionStateRedirecting Implements

#### Implements

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

---



<a id="latest-objects-verificationsessionstaterejected"></a>


## Verification​Session​State​Rejected

object

Requires `read_payment_sessions` access scope.

Additional details about a verification's rejected state.

### Fields

* code

  [Verification​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateCode)

  non-null

  The verification state code.

* reason

  [Verification​Session​State​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateReason)

  non-null

  The reason the verification is rejected.

***

### Map

#### Possible type in

* [Verification​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionStates)

***

### Interfaces

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

  interface

***

### VerificationSessionStateRejected Implements

#### Implements

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

---



<a id="latest-objects-verificationsessionstateresolved"></a>


## Verification​Session​State​Resolved

object

Requires `read_payment_sessions` access scope.

Additional details about a verification's resolved state.

### Fields

* code

  [Verification​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionStateCode)

  non-null

  The verification state code.

***

### Map

#### Possible type in

* [Verification​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/VerificationSessionStates)

***

### Interfaces

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

  interface

***

### VerificationSessionStateResolved Implements

#### Implements

* [Verification​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VerificationSessionState)

---



<a id="latest-objects-verificationsessionusererror"></a>


## Verification​Session​User​Error

object

Requires `read_payment_sessions` access scope.

Represents a verification session custom error.

### Fields

* code

  [Verification​Session​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/VerificationSessionUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the verification session. Shopify will redirect the buyer to the URL where the 3DS authentication will take place when verifying the buyer's credit\_card.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to verifications with the credit card payment method only.

  ***

* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)

  mutation

  Rejects an open verification session. After the `verificationSessionReject` mutation completes on a given verification session, any `verificationSessionResolve` mutation attempts will fail. Subsequent `verificationSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * reason

    [Verification​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  ***

* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

  mutation

  Resolves an open verification session. After the `verificationSessionResolve` mutation completes on a given verification session, any `verificationSessionReject` mutation attempts will fail. Subsequent `verificationSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    Deprecated

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Verification​Session​Payment​Details​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput)

    The payment details used to process the verification.

  ***

***

### VerificationSessionUserError Mutations

#### Mutated by

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)
* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)
* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### VerificationSessionUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-voidsession"></a>


## Void​Session

object

Requires `read_payment_sessions` access scope.

A unique void transaction.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

  non-null

  A globally-unique ID.

* state

  [Void​Session​States!](https://shopify.dev/docs/api/payments-apps/latest/unions/VoidSessionStates)

  non-null

  Details about the void state.

***

### Map

No referencing types

***

### Mutations

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)

  mutation

  Rejects an open void session. After the `voidSessionReject` mutation completes on a given void session, any `voidSessionResolve` mutation attempts will fail. Subsequent `voidSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  * reason

    [Void​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

  mutation

  Resolves an open void session. After the `voidSessionResolve` mutation completes on a given void session, any `voidSessionReject` mutation attempts will fail. Subsequent `voidSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  ***

***

### VoidSession Mutations

#### Mutated by

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)
* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

---



<a id="latest-objects-voidsessionrejectusererror"></a>


## Void​Session​Reject​User​Error

object

An error that occurs during the execution of `VoidSessionReject`.

### Fields

* code

  [Void​Session​Reject​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionRejectUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)

  mutation

  Rejects an open void session. After the `voidSessionReject` mutation completes on a given void session, any `voidSessionResolve` mutation attempts will fail. Subsequent `voidSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  * reason

    [Void​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### VoidSessionRejectUserError Mutations

#### Mutated by

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### VoidSessionRejectUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-voidsessionresolveusererror"></a>


## Void​Session​Resolve​User​Error

object

An error that occurs during the execution of `VoidSessionResolve`.

### Fields

* code

  [Void​Session​Resolve​User​Error​Code](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionResolveUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

  mutation

  Resolves an open void session. After the `voidSessionResolve` mutation completes on a given void session, any `voidSessionReject` mutation attempts will fail. Subsequent `voidSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  ***

***

### VoidSessionResolveUserError Mutations

#### Mutated by

* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

  interface

***

### VoidSessionResolveUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/payments-apps/latest/interfaces/DisplayableError)

---



<a id="latest-objects-voidsessionstaterejected"></a>


## Void​Session​State​Rejected

object

Requires `read_payment_sessions` access scope.

Additional details about a void's rejected state.

### Fields

* code

  [Void​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionStateCode)

  non-null

  The void state code.

* merchant​Message

  [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

  The custom, localized message for the merchant.

* reason

  [Void​Session​State​Rejected​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionStateRejectedReason)

  non-null

  The reason the void is rejected.

***

### Map

#### Possible type in

* [Void​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/VoidSessionStates)

***

### Interfaces

* [Void​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VoidSessionState)

  interface

***

### VoidSessionStateRejected Implements

#### Implements

* [Void​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VoidSessionState)

---



<a id="latest-objects-voidsessionstateresolved"></a>


## Void​Session​State​Resolved

object

Requires `read_payment_sessions` access scope.

Additional details about a void's resolved state.

### Fields

* code

  [Void​Session​State​Code!](https://shopify.dev/docs/api/payments-apps/latest/enums/VoidSessionStateCode)

  non-null

  The void state code.

***

### Map

#### Possible type in

* [Void​Session​States](https://shopify.dev/docs/api/payments-apps/latest/unions/VoidSessionStates)

***

### Interfaces

* [Void​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VoidSessionState)

  interface

***

### VoidSessionStateResolved Implements

#### Implements

* [Void​Session​State](https://shopify.dev/docs/api/payments-apps/latest/interfaces/VoidSessionState)

---



<a id="latest-payloads-capturesessionrejectpayload"></a>


## Capture​Session​Reject​Payload

payload

Return type for `captureSessionReject` mutation.

### Fields

* capture​Session

  [Capture​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession)

  The updated capture session.

* user​Errors

  [\[Capture​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)

  mutation

  Rejects an open capture session.

  After the `captureSessionReject` mutation completes on a given capture session, any `captureSessionResolve` mutation attempts will fail. Subsequent `captureSessionReject` mutation attempts will succeed, but the `reason` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  * reason

    [Capture​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### Map

#### Mutations with this payload

* [capture​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject)

---



<a id="latest-payloads-capturesessionresolvepayload"></a>


## Capture​Session​Resolve​Payload

payload

Return type for `captureSessionResolve` mutation.

### Fields

* capture​Session

  [Capture​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession)

  The updated capture session.

* user​Errors

  [\[Capture​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

  mutation

  Resolves an open capture session.

  After the `captureSessionResolve` mutation completes on a given capture session, any `captureSessionReject` mutation attempts will fail. Subsequent `captureSessionResolve` mutation attempts will succeed.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The capture session ID.

  ***

***

### Map

#### Mutations with this payload

* [capture​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve)

---



<a id="latest-payloads-paymentsessionconfirmpayload"></a>


## Payment​Session​Confirm​Payload

payload

Return type for `paymentSessionConfirm` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Confirm​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)

  mutation

  Initiates the confirmation process of the given payment\_session.

  Shopify will start confirming the payment. According to its business logic, Shopify determines if the payment can be authorized and sends a POST request to the payments app, delivering the confirmation result.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Confirm](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm)

---



<a id="latest-payloads-paymentsessionmodalpayload"></a>


## Payment​Session​Modal​Payload

payload

Return type for `paymentSessionModal` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Modal​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)

  mutation

  Raises a modal that will be displayed to the buyer after a checkout is completed. Included data will be used to populate the UI extension in the modal.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time the modal will expire, in UTC

  * action

    [Modal​Action!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/ModalAction)

    required

    The buyer action and corresponding data that will be made available in the modal at runtime.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Modal](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal)

---



<a id="latest-payloads-paymentsessionpendingpayload"></a>


## Payment​Session​Pending​Payload

payload

Return type for `paymentSessionPending` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Pending​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)

  mutation

  Change a payment session status to pending.

  Upon receiving the response from the `PaymentSessionPending` mutation, you must redirect the customer back to Shopify, using `redirectUrl` in `nextAction`.

  Upon completion, pending payments must be finalized into either a successful or failed state using the `paymentSessionResolve` or `paymentSessionReject` mutations. Both `sale` and `authorization` payments can be marked as pending.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * pending​Expires​At

    [Date​Time!](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    required

    The date and time when the pending payment expires, recommended to be within 3 days.

  * reason

    [Payment​Session​State​Pending​Reason!](https://shopify.dev/docs/api/payments-apps/latest/enums/PaymentSessionStatePendingReason)

    required

    The reason the payment is pending.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Pending](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending)

---



<a id="latest-payloads-paymentsessionredirectpayload"></a>


## Payment​Session​Redirect​Payload

payload

Return type for `paymentSessionRedirect` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[Payment​Session​Redirect​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the payment session. For example, Shopify will redirect the buyer to the URL where the 3DS authentication will take place for onsite payment with `credit_card` payment method.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to payments with the credit card payment method only.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect)

---



<a id="latest-payloads-paymentsessionrejectpayload"></a>


## Payment​Session​Reject​Payload

payload

Return type for `paymentSessionReject` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)

  mutation

  Rejects an open payment session. After the `paymentSessionReject` mutation completes on a given payment session, any `paymentSessionResolve` mutation attempts will fail. Subsequent `paymentSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * reason

    [Payment​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject)

---



<a id="latest-payloads-paymentsessionresolvepayload"></a>


## Payment​Session​Resolve​Payload

payload

Return type for `paymentSessionResolve` mutation.

### Fields

* payment​Session

  [Payment​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession)

  The updated payment session.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)

  mutation

  Resolves an open payment session. After the `paymentSessionResolve` mutation completes on a given payment session, any `paymentSessionReject` mutation attempts will fail. Subsequent `paymentSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The payment session ID.

  * authorization​Expires​At

    [Date​Time](https://shopify.dev/docs/api/payments-apps/latest/scalars/DateTime)

    The date and time when an authorized payment session expires.

  * authentication

    [Payment​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    The transaction ID issued by the network when processing the payment.

  * payment​Details

    [Payment​Session​Payment​Details](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionPaymentDetails)

    The payment details used to process the transaction.

  ***

***

### Map

#### Mutations with this payload

* [payment​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve)

---



<a id="latest-payloads-paymentsappconfigurepayload"></a>


## Payments​App​Configure​Payload

payload

Return type for `paymentsAppConfigure` mutation.

### Fields

* payments​App​Configuration

  [Payments​App​Configuration](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentsAppConfiguration)

  The production configuration of the payments app.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

  mutation

  Configures the partner-managed payments gateway to work on the merchant's store. For an example of how to use the `paymentsAppConfigure` mutation, refer to the tutorial for [onboarding merchants to payments extensions](https://shopify.dev/docs/apps/build/payments/onboard-a-merchant-payments-extension).

  * external​Handle

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    ### Arguments

    Handle used in the external system.

  * ready

    [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

    required

    The provider is ready to process merchant's payments.

  ***

***

### Map

#### Mutations with this payload

* [payments​App​Configure](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure)

---



<a id="latest-payloads-refundsessionrejectpayload"></a>


## Refund​Session​Reject​Payload

payload

Return type for `refundSessionReject` mutation.

### Fields

* refund​Session

  [Refund​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession)

  The updated refund session.

* user​Errors

  [\[Refund​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)

  mutation

  Rejects an open refund session. After the `refundSessionReject` mutation completes on a given refund session, any `refundSessionResolve` mutation attempts will fail. Subsequent `refundSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  * reason

    [Refund​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### Map

#### Mutations with this payload

* [refund​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject)

---



<a id="latest-payloads-refundsessionresolvepayload"></a>


## Refund​Session​Resolve​Payload

payload

Return type for `refundSessionResolve` mutation.

### Fields

* refund​Session

  [Refund​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession)

  The updated refund session.

* user​Errors

  [\[Refund​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

  mutation

  Resolves an open refund session. After the `refundSessionResolve` mutation completes on a given refund session, any `refundSessionReject` mutation attempts will fail. Subsequent `refundSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The refund session ID.

  ***

***

### Map

#### Mutations with this payload

* [refund​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve)

---



<a id="latest-payloads-verificationsessionredirectpayload"></a>


## Verification​Session​Redirect​Payload

payload

Return type for `verificationSessionRedirect` mutation.

### Fields

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Mutations with this payload

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)

  mutation

  Redirects the buyer to the given URL for the verification session. Shopify will redirect the buyer to the URL where the 3DS authentication will take place when verifying the buyer's credit\_card.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * redirect​Url

    [URL!](https://shopify.dev/docs/api/payments-apps/latest/scalars/URL)

    required

    The URL that Shopify will redirect the buyer to, for 3DS authentication. Applicable to verifications with the credit card payment method only.

  ***

***

### Map

#### Mutations with this payload

* [verification​Session​Redirect](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect)

---



<a id="latest-payloads-verificationsessionrejectpayload"></a>


## Verification​Session​Reject​Payload

payload

Return type for `verificationSessionReject` mutation.

### Fields

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Mutations with this payload

* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)

  mutation

  Rejects an open verification session. After the `verificationSessionReject` mutation completes on a given verification session, any `verificationSessionResolve` mutation attempts will fail. Subsequent `verificationSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * reason

    [Verification​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput)

    required

    The rejection reason.

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  ***

***

### Map

#### Mutations with this payload

* [verification​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject)

---



<a id="latest-payloads-verificationsessionresolvepayload"></a>


## Verification​Session​Resolve​Payload

payload

Return type for `verificationSessionResolve` mutation.

### Fields

* user​Errors

  [\[Verification​Session​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* verification​Session

  [Verification​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession)

  The updated verification session.

***

### Mutations with this payload

* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

  mutation

  Resolves an open verification session. After the `verificationSessionResolve` mutation completes on a given verification session, any `verificationSessionReject` mutation attempts will fail. Subsequent `verificationSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The verification session ID.

  * network​Transaction​Id

    [String](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    Deprecated

  * authentication

    [Verification​Session​Three​DSecure​Authentication](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthentication)

    The 3D Secure authentication data from the partner. Must be present if and only if the Redirect mutation has been called and the payment method is credit card.

  * payment​Details

    [Verification​Session​Payment​Details​Input](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionPaymentDetailsInput)

    The payment details used to process the verification.

  ***

***

### Map

#### Mutations with this payload

* [verification​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve)

---



<a id="latest-payloads-voidsessionrejectpayload"></a>


## Void​Session​Reject​Payload

payload

Return type for `voidSessionReject` mutation.

### Fields

* user​Errors

  [\[Void​Session​Reject​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* void​Session

  [Void​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession)

  The updated void session.

***

### Mutations with this payload

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)

  mutation

  Rejects an open void session. After the `voidSessionReject` mutation completes on a given void session, any `voidSessionResolve` mutation attempts will fail. Subsequent `voidSessionReject` mutation attempts will succeed, but the `RejectionReasonInput` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  * reason

    [Void​Session​Rejection​Reason​Input!](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput)

    required

    The rejection reason.

  ***

***

### Map

#### Mutations with this payload

* [void​Session​Reject](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject)

---



<a id="latest-payloads-voidsessionresolvepayload"></a>


## Void​Session​Resolve​Payload

payload

Return type for `voidSessionResolve` mutation.

### Fields

* user​Errors

  [\[Void​Session​Resolve​User​Error!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* void​Session

  [Void​Session](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession)

  The updated void session.

***

### Mutations with this payload

* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

  mutation

  Resolves an open void session. After the `voidSessionResolve` mutation completes on a given void session, any `voidSessionReject` mutation attempts will fail. Subsequent `voidSessionResolve` mutation attempts will succeed, but the `Details` argument will be ignored.

  * id

    [ID!](https://shopify.dev/docs/api/payments-apps/latest/scalars/ID)

    required

    ### Arguments

    The void session ID.

  ***

***

### Map

#### Mutations with this payload

* [void​Session​Resolve](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve)

---



<a id="latest-queries-publicapiversions"></a>


## public​Api​Versions

query

The list of public Payments Apps API versions, including supported, release candidate and unstable versions.

### Possible returns

* Api​Version

  [\[Api​Version!\]!](https://shopify.dev/docs/api/payments-apps/latest/objects/ApiVersion)

  A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning). Versions are commonly referred to by their handle (for example, `2021-10`).

  * display​Name

    [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    non-null

    The human-readable name of the version.

  * handle

    [String!](https://shopify.dev/docs/api/payments-apps/latest/scalars/String)

    non-null

    The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

  * supported

    [Boolean!](https://shopify.dev/docs/api/payments-apps/latest/scalars/Boolean)

    non-null

    Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).

***

### Examples

* ### publicApiVersions reference

---



<a id="latest-scalars-boolean"></a>


## Boolean

scalar

Represents `true` or `false` values.

### Map

#### Fields with this scalar

* [Api​Version.supported](https://shopify.dev/docs/api/payments-apps/latest/objects/ApiVersion#field-ApiVersion.fields.supported)
* [Payments​App​Configuration.ready](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentsAppConfiguration#field-PaymentsAppConfiguration.fields.ready)

#### Arguments with this scalar

* [payments​App​Configure.ready](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure#arguments-ready)

---



<a id="latest-scalars-datetime"></a>


## Date​Time

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string. For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is represented as `"2019-09-07T15:50:00Z`".

### Map

#### Fields with this scalar

* [Payment​Session.authorizationExpiresAt](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession#field-PaymentSession.fields.authorizationExpiresAt)
* [Payment​Session.pendingExpiresAt](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession#field-PaymentSession.fields.pendingExpiresAt)

#### Arguments with this scalar

* [payment​Session​Modal.expiresAt](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal#arguments-expiresAt)
* [payment​Session​Pending.pendingExpiresAt](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending#arguments-pendingExpiresAt)
* [payment​Session​Resolve.authorizationExpiresAt](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve#arguments-authorizationExpiresAt)

---



<a id="latest-scalars-id"></a>


## ID

scalar

Represents a unique identifier, often used to refetch an object. The ID type appears in a JSON response as a String, but it is not intended to be human-readable.

Example value: `"gid://shopify/Product/10079785100"`

### Map

#### Fields with this scalar

* [Capture​Session.id](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession#field-CaptureSession.fields.id)
* [Payment​Session.id](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession#field-PaymentSession.fields.id)
* [Refund​Session.id](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession#field-RefundSession.fields.id)
* [Verification​Session.id](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession#field-VerificationSession.fields.id)
* [Void​Session.id](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession#field-VoidSession.fields.id)

#### Arguments with this scalar

* [capture​Session​Reject.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionReject#arguments-id)
* [capture​Session​Resolve.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/captureSessionResolve#arguments-id)
* [payment​Session​Confirm.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionConfirm#arguments-id)
* [payment​Session​Modal.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionModal#arguments-id)
* [payment​Session​Pending.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionPending#arguments-id)
* [payment​Session​Redirect.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect#arguments-id)
* [payment​Session​Reject.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionReject#arguments-id)
* [payment​Session​Resolve.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve#arguments-id)
* [refund​Session​Reject.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionReject#arguments-id)
* [refund​Session​Resolve.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/refundSessionResolve#arguments-id)
* [verification​Session​Redirect.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect#arguments-id)
* [verification​Session​Reject.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionReject#arguments-id)
* [verification​Session​Resolve.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionResolve#arguments-id)
* [void​Session​Reject.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionReject#arguments-id)
* [void​Session​Resolve.id](https://shopify.dev/docs/api/payments-apps/latest/mutations/voidSessionResolve#arguments-id)

---



<a id="latest-scalars-json"></a>


## JSON

scalar

A [JSON](https://www.json.org/json-en.html) object.

Example value: `{ "product": { "id": "gid://shopify/Product/1346443542550", "title": "White T-shirt", "options": [{ "name": "Size", "values": ["M", "L"] }] } }`

### Map

#### Inputs with this scalar

* [External.data](https://shopify.dev/docs/api/payments-apps/latest/input-objects/External#fields-data)
* [Qr​Code.data](https://shopify.dev/docs/api/payments-apps/latest/input-objects/QrCode#fields-data)

---



<a id="latest-scalars-string"></a>


## String

scalar

Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.

### Map

#### Fields with this scalar

* [Api​Version.displayName](https://shopify.dev/docs/api/payments-apps/latest/objects/ApiVersion#field-ApiVersion.fields.displayName)
* [Api​Version.handle](https://shopify.dev/docs/api/payments-apps/latest/objects/ApiVersion#field-ApiVersion.fields.handle)
* [Capture​Session​Reject​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError#field-CaptureSessionRejectUserError.fields.field)
* [Capture​Session​Reject​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionRejectUserError#field-CaptureSessionRejectUserError.fields.message)
* [Capture​Session​Resolve​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError#field-CaptureSessionResolveUserError.fields.field)
* [Capture​Session​Resolve​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionResolveUserError#field-CaptureSessionResolveUserError.fields.message)
* [Capture​Session​State​Rejected.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSessionStateRejected#field-CaptureSessionStateRejected.fields.merchantMessage)
* [Payment​Session​Confirm​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError#field-PaymentSessionConfirmUserError.fields.field)
* [Payment​Session​Confirm​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionConfirmUserError#field-PaymentSessionConfirmUserError.fields.message)
* [Payment​Session​Modal​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError#field-PaymentSessionModalUserError.fields.field)
* [Payment​Session​Modal​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionModalUserError#field-PaymentSessionModalUserError.fields.message)
* [Payment​Session​Pending​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError#field-PaymentSessionPendingUserError.fields.field)
* [Payment​Session​Pending​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionPendingUserError#field-PaymentSessionPendingUserError.fields.message)
* [Payment​Session​Redirect​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError#field-PaymentSessionRedirectUserError.fields.field)
* [Payment​Session​Redirect​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionRedirectUserError#field-PaymentSessionRedirectUserError.fields.message)
* [Payment​Session​State​Rejected.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionStateRejected#field-PaymentSessionStateRejected.fields.merchantMessage)
* [Payments​App​Configuration.externalHandle](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentsAppConfiguration#field-PaymentsAppConfiguration.fields.externalHandle)
* [Refund​Session​Reject​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError#field-RefundSessionRejectUserError.fields.field)
* [Refund​Session​Reject​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionRejectUserError#field-RefundSessionRejectUserError.fields.message)
* [Refund​Session​Resolve​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError#field-RefundSessionResolveUserError.fields.field)
* [Refund​Session​Resolve​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionResolveUserError#field-RefundSessionResolveUserError.fields.message)
* [Refund​Session​State​Rejected.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSessionStateRejected#field-RefundSessionStateRejected.fields.merchantMessage)
* [User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError#field-UserError.fields.field)
* [User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/UserError#field-UserError.fields.message)
* [Verification​Session​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError#field-VerificationSessionUserError.fields.field)
* [Verification​Session​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionUserError#field-VerificationSessionUserError.fields.message)
* [Void​Session​Reject​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError#field-VoidSessionRejectUserError.fields.field)
* [Void​Session​Reject​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionRejectUserError#field-VoidSessionRejectUserError.fields.message)
* [Void​Session​Resolve​User​Error.field](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError#field-VoidSessionResolveUserError.fields.field)
* [Void​Session​Resolve​User​Error.message](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSessionResolveUserError#field-VoidSessionResolveUserError.fields.message)

#### Inputs with this scalar

* [Capture​Session​Rejection​Reason​Input.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/input-objects/CaptureSessionRejectionReasonInput#fields-merchantMessage)
* [Payment​Session​Rejection​Reason​Input.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionRejectionReasonInput#fields-merchantMessage)
* [Payment​Session​Three​DSecure​Authentication​Data.transStatusReason](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-transStatusReason)
* [Payment​Session​Three​DSecure​Authentication​Data.dsTransactionId](https://shopify.dev/docs/api/payments-apps/latest/input-objects/PaymentSessionThreeDSecureAuthenticationData#fields-dsTransactionId)
* [Qr​Code.code](https://shopify.dev/docs/api/payments-apps/latest/input-objects/QrCode#fields-code)
* [Refund​Session​Rejection​Reason​Input.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/input-objects/RefundSessionRejectionReasonInput#fields-merchantMessage)
* [Verification​Session​Address​Input.givenName](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-givenName)
* [Verification​Session​Address​Input.familyName](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-familyName)
* [Verification​Session​Address​Input.line1](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-line1)
* [Verification​Session​Address​Input.line2](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-line2)
* [Verification​Session​Address​Input.city](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-city)
* [Verification​Session​Address​Input.postalCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-postalCode)
* [Verification​Session​Address​Input.province](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-province)
* [Verification​Session​Address​Input.countryCode](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-countryCode)
* [Verification​Session​Address​Input.phoneNumber](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-phoneNumber)
* [Verification​Session​Address​Input.company](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionAddressInput#fields-company)
* [Verification​Session​Card​Input.descriptor](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-descriptor)
* [Verification​Session​Card​Input.bin](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-bin)
* [Verification​Session​Card​Input.last4](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-last4)
* [Verification​Session​Card​Input.dynamicLast4](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-dynamicLast4)
* [Verification​Session​Card​Input.expirationMonth](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-expirationMonth)
* [Verification​Session​Card​Input.expirationYear](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-expirationYear)
* [Verification​Session​Card​Input.cardHolderName](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-cardHolderName)
* [Verification​Session​Card​Input.issuerName](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-issuerName)
* [Verification​Session​Card​Input.networkTransactionId](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionCardInput#fields-networkTransactionId)
* [Verification​Session​Rejection​Reason​Input.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionRejectionReasonInput#fields-merchantMessage)
* [Verification​Session​Three​DSecure​Authentication​Data.transStatusReason](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VerificationSessionThreeDSecureAuthenticationData#fields-transStatusReason)
* [Void​Session​Rejection​Reason​Input.merchantMessage](https://shopify.dev/docs/api/payments-apps/latest/input-objects/VoidSessionRejectionReasonInput#fields-merchantMessage)

#### Arguments with this scalar

* [payment​Session​Resolve.networkTransactionId](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionResolve#arguments-networkTransactionId)
* [payments​App​Configure.externalHandle](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentsAppConfigure#arguments-externalHandle)

---



<a id="latest-scalars-url"></a>


## URL

scalar

Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.

For example, `"https://example.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host (`example.myshopify.com`).

### Map

#### Fields with this scalar

* [Payment​Session​Actions​Redirect.redirectUrl](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionActionsRedirect#field-PaymentSessionActionsRedirect.fields.redirectUrl)
* [Verification​Session​Actions​Redirect.redirectUrl](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionActionsRedirect#field-VerificationSessionActionsRedirect.fields.redirectUrl)

#### Arguments with this scalar

* [payment​Session​Redirect.redirectUrl](https://shopify.dev/docs/api/payments-apps/latest/mutations/paymentSessionRedirect#arguments-redirectUrl)
* [verification​Session​Redirect.redirectUrl](https://shopify.dev/docs/api/payments-apps/latest/mutations/verificationSessionRedirect#arguments-redirectUrl)

---



<a id="latest-unions-capturesessionstates"></a>


## Capture​Session​States

union

Requires `read_payment_sessions` access scope.

The possible values that can be used to describe the state of a finalized capture transaction.

### Fields with this union

* [Capture​Session.state](https://shopify.dev/docs/api/payments-apps/latest/objects/CaptureSession#field-CaptureSession.fields.state)

  OBJECT

  Represents a unique capture transaction.

***

```graphql
union CaptureSessionStates = CaptureSessionStateRejected | CaptureSessionStateResolved
```

---



<a id="latest-unions-paymentsessionnextactioncontext"></a>


## Payment​Session​Next​Action​Context

union

Requires `read_payment_sessions` access scope.

The context required to perform an action.

### Fields with this union

* [Payment​Session​Next​Action.context](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSessionNextAction#field-PaymentSessionNextAction.fields.context)

  OBJECT

  The next action that is expected of the Partner after the payment is finalized.

***

```graphql
union PaymentSessionNextActionContext = PaymentSessionActionsRedirect
```

---



<a id="latest-unions-paymentsessionstates"></a>


## Payment​Session​States

union

Requires `read_payment_sessions` access scope.

The possible values that can be used to describe the state of a payment transaction.

### Fields with this union

* [Payment​Session.state](https://shopify.dev/docs/api/payments-apps/latest/objects/PaymentSession#field-PaymentSession.fields.state)

  OBJECT

  A unique payment transaction.

***

```graphql
union PaymentSessionStates = PaymentSessionStateBuyerActionRequired | PaymentSessionStateConfirming | PaymentSessionStatePending | PaymentSessionStateRedirecting | PaymentSessionStateRejected | PaymentSessionStateResolved
```

---



<a id="latest-unions-refundsessionstates"></a>


## Refund​Session​States

union

Requires `read_payment_sessions` access scope.

The possible values that can be used to describe the state of a finalized refund transaction.

### Fields with this union

* [Refund​Session.state](https://shopify.dev/docs/api/payments-apps/latest/objects/RefundSession#field-RefundSession.fields.state)

  OBJECT

  A unique refund transaction.

***

```graphql
union RefundSessionStates = RefundSessionStateRejected | RefundSessionStateResolved
```

---



<a id="latest-unions-verificationsessionnextactioncontext"></a>


## Verification​Session​Next​Action​Context

union

Requires `read_payment_sessions` access scope.

The context required to perform an action.

### Fields with this union

* [Verification​Session​Next​Action.context](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSessionNextAction#field-VerificationSessionNextAction.fields.context)

  OBJECT

  The next action that is expected of the Partner after the verification is finalized.

***

```graphql
union VerificationSessionNextActionContext = VerificationSessionActionsRedirect
```

---



<a id="latest-unions-verificationsessionstates"></a>


## Verification​Session​States

union

Requires `read_payment_sessions` access scope.

The possible values that can be used to describe the state of a verification transaction.

### Fields with this union

* [Verification​Session.state](https://shopify.dev/docs/api/payments-apps/latest/objects/VerificationSession#field-VerificationSession.fields.state)

  OBJECT

  A unique verification transaction.

***

```graphql
union VerificationSessionStates = VerificationSessionStateRedirecting | VerificationSessionStateRejected | VerificationSessionStateResolved
```

---



<a id="latest-unions-voidsessionstates"></a>


## Void​Session​States

union

Requires `read_payment_sessions` access scope.

The possible values that can be used to describe the state of a finalized void transaction.

### Fields with this union

* [Void​Session.state](https://shopify.dev/docs/api/payments-apps/latest/objects/VoidSession#field-VoidSession.fields.state)

  OBJECT

  A unique void transaction.

***

```graphql
union VoidSessionStates = VoidSessionStateRejected | VoidSessionStateResolved
```

---
