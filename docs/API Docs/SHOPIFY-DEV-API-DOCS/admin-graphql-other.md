# Shopify Admin GraphQL API — Other

> Bagian dari Shopify Admin GraphQL API reference (split per kategori karena spec sangat besar — 3.866 halaman).
> Semua nama tipe, field, query, mutation, payload, dan contoh kode dipertahankan dalam bahasa Inggris persis dari sumber resmi Shopify.
> Tanggal kompilasi: 2026-05-02.
> Sumber: https://shopify.dev/docs/api/admin-graphql
> Total halaman dalam grup ini: **121**

Lihat juga file split lainnya:

- [admin-graphql.md](admin-graphql.md) — landing + indeks ke semua split
- [admin-graphql-objects.md](admin-graphql-objects.md) — GraphQL object types
- [admin-graphql-enums.md](admin-graphql-enums.md) — enum types
- [admin-graphql-input-objects.md](admin-graphql-input-objects.md) — input object types
- [admin-graphql-payloads.md](admin-graphql-payloads.md) — mutation payload types
- [admin-graphql-mutations.md](admin-graphql-mutations.md) — mutations
- [admin-graphql-queries.md](admin-graphql-queries.md) — queries
- [admin-graphql-connections.md](admin-graphql-connections.md) — connection types
- [admin-graphql-other.md](admin-graphql-other.md) — unions, interfaces, scalars

---

## Daftar Isi (Table of Contents)

- [App​Pricing​Details](#app-pricing-details) — `unions/AppPricingDetails`
- [App​Purchase](#app-purchase) — `interfaces/AppPurchase`
- [App​Subscription​Discount​Value](#app-subscription-discount-value) — `unions/AppSubscriptionDiscountValue`
- [ARN](#arn) — `scalars/ARN`
- [Base​Payment​Details](#base-payment-details) — `interfaces/BasePaymentDetails`
- [Big​Int](#big-int) — `scalars/BigInt`
- [Boolean](#boolean) — `scalars/Boolean`
- [Calculated​Discount​Application](#calculated-discount-application) — `interfaces/CalculatedDiscountApplication`
- [Calculated​Return​Fee](#calculated-return-fee) — `interfaces/CalculatedReturnFee`
- [Cash​Activity](#cash-activity) — `interfaces/CashActivity`
- [Cash​Management​Reason​Code](#cash-management-reason-code) — `unions/CashManagementReasonCode`
- [Catalog](#catalog) — `interfaces/Catalog`
- [Checkout​And​Accounts​Configuration​Branding​Font​Group](#checkout-and-accounts-configuration-branding-font-group) — `unions/CheckoutAndAccountsConfigurationBrandingFontGroup`
- [Checkout​And​Accounts​Configuration​Branding​Image​Value](#checkout-and-accounts-configuration-branding-image-value) — `unions/CheckoutAndAccountsConfigurationBrandingImageValue`
- [Checkout​And​Accounts​Configuration​Interface](#checkout-and-accounts-configuration-interface) — `interfaces/CheckoutAndAccountsConfigurationInterface`
- [Checkout​Branding​Font](#checkout-branding-font) — `interfaces/CheckoutBrandingFont`
- [Collection​Rule​Conditions​Rule​Object](#collection-rule-conditions-rule-object) — `unions/CollectionRuleConditionsRuleObject`
- [Collection​Rule​Condition​Object](#collection-rule-condition-object) — `unions/CollectionRuleConditionObject`
- [Color](#color) — `scalars/Color`
- [Comment​Event​Embed](#comment-event-embed) — `unions/CommentEventEmbed`
- [Comment​Event​Subject](#comment-event-subject) — `interfaces/CommentEventSubject`
- [Customer​Account​Page](#customer-account-page) — `interfaces/CustomerAccountPage`
- [Customer​Moment](#customer-moment) — `interfaces/CustomerMoment`
- [Customer​Payment​Instrument](#customer-payment-instrument) — `unions/CustomerPaymentInstrument`
- [Date](#date) — `scalars/Date`
- [Date​Time](#date-time) — `scalars/DateTime`
- [Decimal](#decimal) — `scalars/Decimal`
- [Delivery​Condition​Criteria](#delivery-condition-criteria) — `unions/DeliveryConditionCriteria`
- [Delivery​Promise​Participant​Owner](#delivery-promise-participant-owner) — `unions/DeliveryPromiseParticipantOwner`
- [Delivery​Rate​Provider](#delivery-rate-provider) — `unions/DeliveryRateProvider`
- [Deposit​Configuration](#deposit-configuration) — `unions/DepositConfiguration`
- [Discount](#discount) — `unions/Discount`
- [Discount​Application](#discount-application) — `interfaces/DiscountApplication`
- [Discount​Automatic](#discount-automatic) — `unions/DiscountAutomatic`
- [Discount​Code](#discount-code) — `unions/DiscountCode`
- [Discount​Context](#discount-context) — `unions/DiscountContext`
- [Discount​Customer​Buys​Value](#discount-customer-buys-value) — `unions/DiscountCustomerBuysValue`
- [Discount​Customer​Gets​Value](#discount-customer-gets-value) — `unions/DiscountCustomerGetsValue`
- [Discount​Customer​Selection](#discount-customer-selection) — `unions/DiscountCustomerSelection`
- [Discount​Effect](#discount-effect) — `unions/DiscountEffect`
- [Discount​Items](#discount-items) — `unions/DiscountItems`
- [Discount​Minimum​Requirement](#discount-minimum-requirement) — `unions/DiscountMinimumRequirement`
- [Discount​Shipping​Destination​Selection](#discount-shipping-destination-selection) — `unions/DiscountShippingDestinationSelection`
- [Displayable​Error](#displayable-error) — `interfaces/DisplayableError`
- [Draft​Order​Platform​Discount​Allocation​Target](#draft-order-platform-discount-allocation-target) — `unions/DraftOrderPlatformDiscountAllocationTarget`
- [Draft​Order​Warning](#draft-order-warning) — `interfaces/DraftOrderWarning`
- [Event](#event) — `interfaces/Event`
- [Fee](#fee) — `interfaces/Fee`
- [File](#file) — `interfaces/File`
- [Float](#float) — `scalars/Float`
- [Formatted​String](#formatted-string) — `scalars/FormattedString`
- [Gift​Card​Transaction](#gift-card-transaction) — `interfaces/GiftCardTransaction`
- [GraphQL Admin API reference](#graphql-admin-api-reference) — `https://shopify.dev/docs/api/admin-graphql/latest`
- [Has​Compare​Digest](#has-compare-digest) — `interfaces/HasCompareDigest`
- [Has​Events](#has-events) — `interfaces/HasEvents`
- [Has​Localization​Extensions](#has-localization-extensions) — `interfaces/HasLocalizationExtensions`
- [Has​Localized​Fields](#has-localized-fields) — `interfaces/HasLocalizedFields`
- [Has​Metafields](#has-metafields) — `interfaces/HasMetafields`
- [Has​Metafield​Definitions](#has-metafield-definitions) — `interfaces/HasMetafieldDefinitions`
- [Has​Published​Translations](#has-published-translations) — `interfaces/HasPublishedTranslations`
- [Has​Store​Credit​Accounts](#has-store-credit-accounts) — `interfaces/HasStoreCreditAccounts`
- [HTML](#html) — `scalars/HTML`
- [ID](#id) — `scalars/ID`
- [Int](#int) — `scalars/Int`
- [Job​Result](#job-result) — `interfaces/JobResult`
- [JSON](#json) — `scalars/JSON`
- [Legacy​Interoperability](#legacy-interoperability) — `interfaces/LegacyInteroperability`
- [Market​Region](#market-region) — `interfaces/MarketRegion`
- [Media](#media) — `interfaces/Media`
- [Metafield​Reference](#metafield-reference) — `unions/MetafieldReference`
- [Metafield​Referencer](#metafield-referencer) — `unions/MetafieldReferencer`
- [Mobile​Platform​Application](#mobile-platform-application) — `unions/MobilePlatformApplication`
- [Money](#money) — `scalars/Money`
- [Navigable](#navigable) — `interfaces/Navigable`
- [Online​Store​Previewable](#online-store-previewable) — `interfaces/OnlineStorePreviewable`
- [Online​Store​Theme​File​Body](#online-store-theme-file-body) — `unions/OnlineStoreThemeFileBody`
- [Order​Staged​Change](#order-staged-change) — `unions/OrderStagedChange`
- [Payment​Details](#payment-details) — `unions/PaymentDetails`
- [Payment​Instrument](#payment-instrument) — `unions/PaymentInstrument`
- [Price​Rule​Value](#price-rule-value) — `unions/PriceRuleValue`
- [Pricing​Value](#pricing-value) — `unions/PricingValue`
- [Product​Operation](#product-operation) — `interfaces/ProductOperation`
- [Publication​Operation](#publication-operation) — `unions/PublicationOperation`
- [Publishable](#publishable) — `interfaces/Publishable`
- [Purchasing​Entity](#purchasing-entity) — `unions/PurchasingEntity`
- [Resource​Operation](#resource-operation) — `interfaces/ResourceOperation`
- [Return​Line​Item​Type](#return-line-item-type) — `interfaces/ReturnLineItemType`
- [Return​Outcome​Financial​Transfer](#return-outcome-financial-transfer) — `unions/ReturnOutcomeFinancialTransfer`
- [Reverse​Delivery​Deliverable](#reverse-delivery-deliverable) — `unions/ReverseDeliveryDeliverable`
- [Sale](#sale) — `interfaces/Sale`
- [Sales​Agreement](#sales-agreement) — `interfaces/SalesAgreement`
- [Segment​Filter](#segment-filter) — `interfaces/SegmentFilter`
- [Selling​Plan​Billing​Policy](#selling-plan-billing-policy) — `unions/SellingPlanBillingPolicy`
- [Selling​Plan​Checkout​Charge​Value](#selling-plan-checkout-charge-value) — `unions/SellingPlanCheckoutChargeValue`
- [Selling​Plan​Delivery​Policy](#selling-plan-delivery-policy) — `unions/SellingPlanDeliveryPolicy`
- [Selling​Plan​Pricing​Policy](#selling-plan-pricing-policy) — `unions/SellingPlanPricingPolicy`
- [Selling​Plan​Pricing​Policy​Adjustment​Value](#selling-plan-pricing-policy-adjustment-value) — `unions/SellingPlanPricingPolicyAdjustmentValue`
- [Selling​Plan​Pricing​Policy​Base](#selling-plan-pricing-policy-base) — `interfaces/SellingPlanPricingPolicyBase`
- [Shopify​Payments​Charge​Statement​Descriptor](#shopify-payments-charge-statement-descriptor) — `interfaces/ShopifyPaymentsChargeStatementDescriptor`
- [Storefront​ID](#storefront-id) — `scalars/StorefrontID`
- [Store​Credit​Account​Transaction](#store-credit-account-transaction) — `interfaces/StoreCreditAccountTransaction`
- [Store​Credit​Account​Transaction​Origin](#store-credit-account-transaction-origin) — `unions/StoreCreditAccountTransactionOrigin`
- [String](#string) — `scalars/String`
- [Subscription​Billing​Attempt​Action](#subscription-billing-attempt-action) — `unions/SubscriptionBillingAttemptAction`
- [Subscription​Billing​Attempt​Error](#subscription-billing-attempt-error) — `unions/SubscriptionBillingAttemptError`
- [Subscription​Billing​Attempt​Processing​Error](#subscription-billing-attempt-processing-error) — `interfaces/SubscriptionBillingAttemptProcessingError`
- [Subscription​Billing​Attempt​State](#subscription-billing-attempt-state) — `unions/SubscriptionBillingAttemptState`
- [Subscription​Contract​Base](#subscription-contract-base) — `interfaces/SubscriptionContractBase`
- [Subscription​Delivery​Method](#subscription-delivery-method) — `unions/SubscriptionDeliveryMethod`
- [Subscription​Delivery​Option](#subscription-delivery-option) — `unions/SubscriptionDeliveryOption`
- [Subscription​Delivery​Option​Result](#subscription-delivery-option-result) — `unions/SubscriptionDeliveryOptionResult`
- [Subscription​Discount](#subscription-discount) — `unions/SubscriptionDiscount`
- [Subscription​Discount​Value](#subscription-discount-value) — `unions/SubscriptionDiscountValue`
- [Subscription​Shipping​Option​Result](#subscription-shipping-option-result) — `unions/SubscriptionShippingOptionResult`
- [Suggested​Refund​Method](#suggested-refund-method) — `interfaces/SuggestedRefundMethod`
- [Taxonomy​Category​Attribute](#taxonomy-category-attribute) — `unions/TaxonomyCategoryAttribute`
- [Tender​Transaction​Details](#tender-transaction-details) — `unions/TenderTransactionDetails`
- [Unsigned​Int64](#unsigned-int64) — `scalars/UnsignedInt64`
- [URL](#url) — `scalars/URL`
- [Utc​Offset](#utc-offset) — `scalars/UtcOffset`
- [Webhook​Subscription​Endpoint](#webhook-subscription-endpoint) — `unions/WebhookSubscriptionEndpoint`

---

<a id="app-pricing-details"></a>

## App​Pricing​Details

union

The information about the price that's charged to a shop every plan period. The concrete type can be `AppRecurringPricing` for recurring billing or `AppUsagePricing` for usage-based billing.

### Fields with this union

* [App​Plan​V2.pricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPlanV2#field-AppPlanV2.fields.pricingDetails)

  OBJECT

  Contains the pricing details for the app plan that a merchant has subscribed to within their current billing arrangement.

  This simplified object focuses on the essential pricing information merchants need to understand their current subscription costs and billing structure.

  Details about subscription management and pricing strategies are available in the [app billing documentation](https://shopify.dev/docs/apps/launch/billing).

***

```graphql
union AppPricingDetails = AppRecurringPricing | AppUsagePricing
```

---
<a id="app-purchase"></a>

## App​Purchase

interface

Requires The staff member must have permission to manage app billing or approve app charges if authenticated with an online access token as described in <https://shopify.dev/apps/auth/oauth/access-modes>.

Services and features purchased once by the store.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the app purchase occurred.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the app purchase.

* price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount to be charged to the store for the app purchase.

* status

  [App​Purchase​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppPurchaseStatus)

  non-null

  The status of the app purchase.

* test

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the app purchase is a test transaction.

***

###### Variables

```json
{
	"createdAt": "",
	"name": "",
	"price": "",
	"status": "",
	"test": ""
}
```

###### Schema

```graphql
interface AppPurchase {
  createdAt: DateTime!
  name: String!
  price: MoneyV2!
  status: AppPurchaseStatus!
  test: Boolean!
}
```

---
<a id="app-subscription-discount-value"></a>

## App​Subscription​Discount​Value

union

The value of the discount.

### Fields with this union

* [App​Subscription​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.value)

  OBJECT

  Discount applied to the recurring pricing portion of a subscription.

***

```graphql
union AppSubscriptionDiscountValue = AppSubscriptionDiscountAmount | AppSubscriptionDiscountPercentage
```

---
<a id="arn"></a>

## ARN

scalar

An Amazon Web Services Amazon Resource Name (ARN), including the Region and account ID. For more information, refer to [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).

### Map

#### Fields with this scalar

* [Webhook​Event​Bridge​Endpoint.arn](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookEventBridgeEndpoint#field-WebhookEventBridgeEndpoint.fields.arn)

#### Inputs with this scalar

* [Event​Bridge​Webhook​Subscription​Input.arn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput#fields-arn)

#### Arguments with this scalar

* [event​Bridge​Server​Pixel​Update.arn](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeServerPixelUpdate#arguments-arn)

---
<a id="base-payment-details"></a>

## Base​Payment​Details

interface

Requires `read_orders` access scope.

Generic payment details that are related to a transaction.

### Fields

* payment​Method​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of payment method used by the buyer.

***

###### Variables

```json
{
	"paymentMethodName": ""
}
```

###### Schema

```graphql
interface BasePaymentDetails {
  paymentMethodName: String
}
```

---
<a id="big-int"></a>

## Big​Int

scalar

Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string.

### Map

#### Fields with this scalar

* [Shopify​Payments​Adjustment​Order.orderTransactionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAdjustmentOrder#field-ShopifyPaymentsAdjustmentOrder.fields.orderTransactionId)
* [Shopify​Payments​Balance​Transaction.sourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.sourceId)
* [Shopify​Payments​Balance​Transaction.sourceOrderTransactionId](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction#field-ShopifyPaymentsBalanceTransaction.fields.sourceOrderTransactionId)

---
<a id="boolean"></a>

## Boolean

scalar

Represents `true` or `false` values.

### Map

#### Fields with this scalar

* [Abandoned​Checkout.taxesIncluded](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.taxesIncluded)
* [Abandonment.customerHasNoDraftOrderSinceAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.customerHasNoDraftOrderSinceAbandonment)
* [Abandonment.customerHasNoOrderSinceAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.customerHasNoOrderSinceAbandonment)
* [Abandonment.inventoryAvailable](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.inventoryAvailable)
* [Abandonment.isFromCustomStorefront](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.isFromCustomStorefront)
* [Abandonment.isFromOnlineStore](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.isFromOnlineStore)
* [Abandonment.isFromShopApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.isFromShopApp)
* [Abandonment.isFromShopPay](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.isFromShopPay)
* [Abandonment.isMostSignificantAbandonment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.isMostSignificantAbandonment)
* [All​Discount​Items.allItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems#field-AllDiscountItems.fields.allItems)
* [Android​Application.appLinksEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication#field-AndroidApplication.fields.appLinksEnabled)
* [Api​Version.supported](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion#field-ApiVersion.fields.supported)
* [App.embedded](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.embedded)
* [App.isPostPurchaseAppInUse](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.isPostPurchaseAppInUse)
* [App.previouslyInstalled](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.previouslyInstalled)
* [App.published](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.published)
* [App.shopifyDeveloped](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.shopifyDeveloped)
* [App​Credit.test](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.test)
* [App​Purchase​One​Time.test](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.test)
* [App​Revenue​Attribution​Record.test](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.test)
* [App​Subscription.test](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.test)
* [Apple​Application.appClipsEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication#field-AppleApplication.fields.appClipsEnabled)
* [Apple​Application.sharedWebCredentialsEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication#field-AppleApplication.fields.sharedWebCredentialsEnabled)
* [Apple​Application.universalLinksEnabled](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication#field-AppleApplication.fields.universalLinksEnabled)
* [Article.isPublished](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.isPublished)
* [Basic​Event.attributeToApp](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.attributeToApp)
* [Basic​Event.attributeToUser](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.attributeToUser)
* [Basic​Event.criticalAlert](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.criticalAlert)
* [Basic​Event.hasAdditionalContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.hasAdditionalContent)
* [Bundles​Feature.eligibleForBundles](https://shopify.dev/docs/api/admin-graphql/latest/objects/BundlesFeature#field-BundlesFeature.fields.eligibleForBundles)

#### Inputs with this scalar

* [Article​Create​Input.isPublished](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-isPublished)
* [Article​Update​Input.isPublished](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-isPublished)
* [Article​Update​Input.redirectNewHandle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-redirectNewHandle)
* [Blog​Update​Input.redirectNewHandle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-redirectNewHandle)
* [Blog​Update​Input.redirectArticles](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-redirectArticles)
* [Buyer​Experience​Configuration​Input.checkoutToDraft](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput#fields-checkoutToDraft)
* [Buyer​Experience​Configuration​Input.editableShippingAddress](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput#fields-editableShippingAddress)
* [Checkout​And​Accounts​Configuration​Branding​Checkout​Footer​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCheckoutFooterInput#fields-divided)
* [Checkout​And​Accounts​Configuration​Branding​Checkout​Header​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCheckoutHeaderInput#fields-divided)
* [Checkout​And​Accounts​Configuration​Branding​Footer​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingFooterInput#fields-divided)
* [Checkout​And​Accounts​Configuration​Branding​Header​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingHeaderInput#fields-divided)
* [Checkout​Branding​Footer​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFooterInput#fields-divided)
* [Checkout​Branding​Header​Input.divided](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingHeaderInput#fields-divided)
* [Collection​Duplicate​Input.copyPublications](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput#fields-copyPublications)
* [Collection​Input.redirectNewHandle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-redirectNewHandle)
* [Collection​Rule​Set​Input.appliedDisjunctively](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleSetInput#fields-appliedDisjunctively)
* [Company​Location​Input.billingSameAsShipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-billingSameAsShipping)
* [Company​Location​Input.taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyLocationInput#fields-taxExempt)
* [Consent​Policy​Input.consentRequired](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput#fields-consentRequired)
* [Consent​Policy​Input.dataSaleOptOutRequired](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ConsentPolicyInput#fields-dataSaleOptOutRequired)
* [Custom​Shipping​Package​Input.default](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomShippingPackageInput#fields-default)
* [Customer​Input.taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerInput#fields-taxExempt)
* [Customer​Segment​Members​Query​Input.reverse](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSegmentMembersQueryInput#fields-reverse)
* [Customer​Set​Input.taxExempt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSetInput#fields-taxExempt)
* [Delivery​Carrier​Service​Create​Input.supportsServiceDiscovery](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput#fields-supportsServiceDiscovery)
* [Delivery​Carrier​Service​Create​Input.active](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput#fields-active)
* [Delivery​Carrier​Service​Update​Input.supportsServiceDiscovery](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput#fields-supportsServiceDiscovery)
* [Delivery​Carrier​Service​Update​Input.active](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput#fields-active)
* [Delivery​Country​Input.restOfWorld](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCountryInput#fields-restOfWorld)
* [Delivery​Country​Input.includeAllProvinces](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCountryInput#fields-includeAllProvinces)

#### Arguments with this scalar

* [Abandoned​Checkout.lineItems(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems.arguments.reverse)
* [Abandoned​Checkout​Line​Item.discountAllocations(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations.arguments.reverse)
* [Abandonment.productsAddedToCart(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart.arguments.reverse)
* [Abandonment.productsViewed(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed.arguments.reverse)
* [App.channels(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels.arguments.reverse)
* [App​Catalog.apps(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps.arguments.reverse)
* [App​Catalog.channels(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels.arguments.reverse)
* [App​Installation.allSubscriptions(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions.arguments.reverse)
* [App​Installation.credits(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.reverse)
* [App​Installation.metafields(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.reverse)
* [App​Installation.oneTimePurchases(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.reverse)
* [App​Installation.revenueAttributionRecords(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords.arguments.reverse)
* [App​Subscription​Line​Item.usageRecords(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.reverse)
* [Article.comments(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments.arguments.reverse)
* [Article.events(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events.arguments.reverse)
* [Article.metafieldDefinitions(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafieldDefinitions.arguments.reverse)
* [Article.metafields(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields.arguments.reverse)
* [Blog.articles(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.articles.arguments.reverse)
* [Blog.events(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.events.arguments.reverse)
* [Blog.metafieldDefinitions(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafieldDefinitions.arguments.reverse)
* [Blog.metafields(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields.arguments.reverse)
* [Calculated​Order.addedDiscountApplications(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedDiscountApplications.arguments.reverse)
* [Calculated​Order.addedLineItems(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems.arguments.reverse)
* [Calculated​Order.lineItems(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems.arguments.reverse)
* [Calculated​Order.stagedChanges(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.stagedChanges.arguments.reverse)
* [Cart​Transform.metafields(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields.arguments.reverse)
* [Cash​Drawer.cashActivities(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.cashActivities.arguments.reverse)
* [Cash​Tracking​Session.adjustments(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments.arguments.reverse)
* [Cash​Tracking​Session.cashTransactions(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions.arguments.reverse)
* [Channel.collectionPublicationsV3(reverse)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3.arguments.reverse)

---
<a id="calculated-discount-application"></a>

## Calculated​Discount​Application

interface

Requires `read_order_edits` access scope or `read_returns` access scope.

A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* applied​To

  [Discount​Application​Level!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationLevel)

  non-null

  The level at which the discount was applied.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of discount application. Indicates the reason why the discount was applied.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

  non-null

  How the discount amount is distributed on the discounted lines.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-null

  Whether the discount is applied on line items or shipping lines.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

###### Variables

```json
{
	"allocationMethod": "",
	"appliedTo": "",
	"description": "",
	"id": "",
	"targetSelection": "",
	"targetType": "",
	"value": ""
}
```

###### Schema

```graphql
interface CalculatedDiscountApplication {
  allocationMethod: DiscountApplicationAllocationMethod!
  appliedTo: DiscountApplicationLevel!
  description: String
  id: ID!
  targetSelection: DiscountApplicationTargetSelection!
  targetType: DiscountApplicationTargetType!
  value: PricingValue!
}
```

---
<a id="calculated-return-fee"></a>

## Calculated​Return​Fee

interface

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A calculated return fee.

### Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The calculated amount of the return fee, in shop and presentment currencies.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

###### Variables

```json
{
	"amountSet": "",
	"id": ""
}
```

###### Schema

```graphql
interface CalculatedReturnFee {
  amountSet: MoneyBag!
  id: ID!
}
```

---
<a id="cash-activity"></a>

## Cash​Activity

interface

Requires `read_cash_tracking` access scope.

An activity on a cash drawer.

### Fields

* cash

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of cash added or removed as part of the activity.

* payment​Session

  [Point​Of​Sale​Device​Payment​Session!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  non-null

  The point of sale device payment session associated with the activity.

* staff​Member

  [Staff​Member!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  The staff member who performed the activity.

* time

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The time at which the activity occurred.

***

###### Variables

```json
{
	"cash": "",
	"paymentSession": "",
	"staffMember": "",
	"time": ""
}
```

###### Schema

```graphql
interface CashActivity {
  cash: MoneyV2!
  paymentSession: PointOfSaleDevicePaymentSession!
  staffMember: StaffMember!
  time: DateTime!
}
```

---
<a id="cash-management-reason-code"></a>

## Cash​Management​Reason​Code

union

Requires `read_cash_tracking` access scope.

Reason code for cash management.

### Fields with this union

* [Cash​Adjustment​Activity.reasonCode](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.reasonCode)

  OBJECT

  A cash adjustment activity.

* [Cash​Management​Reason​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple CashManagementReasonCodes.

* [Cash​Management​Reason​Code​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeEdge#field-CashManagementReasonCodeEdge.fields.node)

  OBJECT

  An auto-generated type which holds one CashManagementReasonCode and a cursor during pagination.

***

```graphql
union CashManagementReasonCode = CashManagementCustomReasonCode | CashManagementDefaultReasonCode | CashManagementSystemReasonCode
```

---
<a id="catalog"></a>

## Catalog

interface

Requires products or product\_listings read access scope. The user must have permission to view markets or customers or companies.

A list of products with publishing and pricing information. A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/market), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/companylocation), or [`App`](https://shopify.dev/docs/api/admin-graphql/2026-04/objects/app).

Catalogs can optionally include a publication to control product visibility and a price list to customize pricing. When a publication isn't associated with a catalog, product availability is determined by the sales channel.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* operations

  [\[Resource​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ResourceOperation)

  non-null

  Most recent catalog operations.

* price​List

  [Price​List](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  The price list associated with the catalog.

* publication

  [Publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  A group of products and collections that's published to a catalog.

* status

  [Catalog​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogStatus)

  non-null

  The status of the catalog.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the catalog.

***

###### Variables

```json
{
	"id": "",
	"operations": "",
	"priceList": "",
	"publication": "",
	"status": "",
	"title": ""
}
```

###### Schema

```graphql
interface Catalog {
  id: ID!
  operations: [ResourceOperation!]!
  priceList: PriceList
  publication: Publication
  status: CatalogStatus!
  title: String!
}
```

---
<a id="checkout-and-accounts-configuration-branding-font-group"></a>

## Checkout​And​Accounts​Configuration​Branding​Font​Group

union

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

A group of fonts.

### Fields with this union

* [Checkout​And​Accounts​Configuration​Branding​Typography.primary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography#field-CheckoutAndAccountsConfigurationBrandingTypography.fields.primary)

  OBJECT

  The typography customizations.

* [Checkout​And​Accounts​Configuration​Branding​Typography.secondary](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingTypography#field-CheckoutAndAccountsConfigurationBrandingTypography.fields.secondary)

  OBJECT

  The typography customizations.

***

```graphql
union CheckoutAndAccountsConfigurationBrandingFontGroup = CheckoutAndAccountsConfigurationBrandingCustomFontGroup | CheckoutAndAccountsConfigurationBrandingShopifyFontGroup
```

---
<a id="checkout-and-accounts-configuration-branding-image-value"></a>

## Checkout​And​Accounts​Configuration​Branding​Image​Value

union

Requires `read_checkout_and_accounts_configurations` access scope or `read_checkout_settings` access scope. Also: User must have `manage_checkout_settings` permission and shop must have access to the checkout and accounts editor as well as the contextualized checkouts and customer accounts feature. When modifying configuration overrides, user must have `view_markets` and `create_and_edit_markets` permissions.

The image value.

### Fields with this union

* [Checkout​And​Accounts​Configuration​Branding​Components.favicon](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingComponents#field-CheckoutAndAccountsConfigurationBrandingComponents.fields.favicon)

  OBJECT

  The base component customizations that apply to all surfaces.

* [Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Logo.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogo#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogo.fields.image)

  OBJECT

  The customer accounts store logo customizations.

* [Checkout​And​Accounts​Configuration​Branding​Header​Cart​Link.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingHeaderCartLink#field-CheckoutAndAccountsConfigurationBrandingHeaderCartLink.fields.image)

  OBJECT

  The header cart link customizations.

* [Checkout​And​Accounts​Configuration​Branding​Logo.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingLogo#field-CheckoutAndAccountsConfigurationBrandingLogo.fields.image)

  OBJECT

  The store logo customizations.

* [Checkout​And​Accounts​Configuration​Branding​Order​Summary.backgroundImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingOrderSummary#field-CheckoutAndAccountsConfigurationBrandingOrderSummary.fields.backgroundImage)

  OBJECT

  The order summary customizations.

* [Checkout​And​Accounts​Configuration​Branding​Sign​In​Logo.image](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInLogo#field-CheckoutAndAccountsConfigurationBrandingSignInLogo.fields.image)

  OBJECT

  The sign-in store logo customizations.

* [Checkout​And​Accounts​Configuration​Branding​Sign​In​Main.backgroundImage](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingSignInMain#field-CheckoutAndAccountsConfigurationBrandingSignInMain.fields.backgroundImage)

  OBJECT

  The sign-in-specific main customizations.

***

```graphql
union CheckoutAndAccountsConfigurationBrandingImageValue = CheckoutAndAccountsConfigurationBrandingImage
```

---
<a id="checkout-and-accounts-configuration-interface"></a>

## Checkout​And​Accounts​Configuration​Interface

interface

Represents a checkout and accounts configuration interface.

### Fields

* branding

  [Checkout​And​Accounts​Configuration​Branding](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBranding)

  The branding configuration.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was created.

* edited​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last edited.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The configuration name.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the configuration was last updated.

***

###### Variables

```json
{
	"branding": "",
	"createdAt": "",
	"editedAt": "",
	"name": "",
	"updatedAt": ""
}
```

###### Schema

```graphql
interface CheckoutAndAccountsConfigurationInterface {
  branding: CheckoutAndAccountsConfigurationBranding
  createdAt: DateTime!
  editedAt: DateTime!
  name: String!
  updatedAt: DateTime!
}
```

---
<a id="checkout-branding-font"></a>

## Checkout​Branding​Font

interface

A font.

### Fields

* sources

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The font sources.

* weight

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The font weight.

***

###### Variables

```json
{
	"sources": "",
	"weight": ""
}
```

###### Schema

```graphql
interface CheckoutBrandingFont {
  sources: String
  weight: Int
}
```

---
<a id="collection-rule-conditions-rule-object"></a>

## Collection​Rule​Conditions​Rule​Object

union

Requires `read_products` access scope.

Specifies object with additional rule attributes.

### Fields with this union

* [Collection​Rule​Conditions.ruleObject](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions#field-CollectionRuleConditions.fields.ruleObject)

  OBJECT

  Defines the available columns and relationships that can be used when creating rules for smart collections. This provides the schema for building automated collection logic based on product attributes.

  For example, merchants can create rules like "product type equals 'Shirts'" or "vendor contains 'Nike'" using the conditions defined in this object to automatically populate collections.

  Use `CollectionRuleConditions` to:

  * Discovering valid field options for smart collection rule interfaces
  * Understanding which conditions are available for automated collections
  * Exploring available product attributes for collection automation
  * Learning about proper field relationships for rule implementation

  The conditions define which product fields can be used in smart collection rules and what types of comparisons are allowed for each field.

  Learn more about [smart collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

***

```graphql
union CollectionRuleConditionsRuleObject = CollectionRuleMetafieldCondition
```

---
<a id="collection-rule-condition-object"></a>

## Collection​Rule​Condition​Object

union

Requires `read_products` access scope.

Specifies object for the condition of the rule.

### Fields with this union

* [Collection​Rule.conditionObject](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRule#field-CollectionRule.fields.conditionObject)

  OBJECT

  Represents at rule that's used to assign products to a collection.

***

```graphql
union CollectionRuleConditionObject = CollectionRuleCategoryCondition | CollectionRuleMetafieldCondition | CollectionRuleProductCategoryCondition | CollectionRuleTextCondition
```

---
<a id="color"></a>

## Color

scalar

A string containing a hexadecimal representation of a color.

For example, "#6A8D48".

### Map

#### Fields with this scalar

* [Product​Option​Value​Swatch.color](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionValueSwatch#field-ProductOptionValueSwatch.fields.color)

---
<a id="comment-event-embed"></a>

## Comment​Event​Embed

union

The main embed of a comment event.

### Fields with this union

* [Comment​Event.embed](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-CommentEvent.fields.embed)

  OBJECT

  A comment that staff members add to the timeline of [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order), [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer), [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer), [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company), [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation), or [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) objects. Staff use comments to document internal notes, communicate with team members, and track important information about these types.

  The comment includes information like the [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) who authored it, when it was created, and whether it's editable or deletable. Comments can have file attachments and reference related objects like [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects through embeds.

***

```graphql
union CommentEventEmbed = Customer | DraftOrder | InventoryTransfer | Order | Product | ProductVariant
```

---
<a id="comment-event-subject"></a>

## Comment​Event​Subject

interface

The subject line of a comment event.

### Fields

* has​Timeline​Comment

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the timeline subject has a timeline comment. If true, then a timeline comment exists.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

###### Variables

```json
{
	"hasTimelineComment": "",
	"id": ""
}
```

###### Schema

```graphql
interface CommentEventSubject {
  hasTimelineComment: Boolean!
  id: ID!
}
```

---
<a id="customer-account-page"></a>

## Customer​Account​Page

interface

Requires `read_content` access scope or `read_online_store_pages` access scope.

A customer account page.

### Fields

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

* handle

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A unique, human-friendly string for the customer account page.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the customer account page.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the customer account page.

***

###### Variables

```json
{
	"defaultCursor": "",
	"handle": "",
	"id": "",
	"title": ""
}
```

###### Schema

```graphql
interface CustomerAccountPage {
  defaultCursor: String!
  handle: String!
  id: ID!
  title: String!
}
```

---
<a id="customer-moment"></a>

## Customer​Moment

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Represents a session preceding an order, often used for building a timeline of events leading to an order.

### Fields

* occurred​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the customer's session occurred.

***

###### Variables

```json
{
	"occurredAt": ""
}
```

###### Schema

```graphql
interface CustomerMoment {
  occurredAt: DateTime!
}
```

---
<a id="customer-payment-instrument"></a>

## Customer​Payment​Instrument

union

Requires `read_customers` access scope. Also: Requires `read_customer_payment_methods` scope.

All possible instruments for CustomerPaymentMethods.

### Fields with this union

* [Customer​Payment​Method.instrument](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.instrument)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

```graphql
union CustomerPaymentInstrument = BankAccount | CustomerCreditCard | CustomerPaypalBillingAgreement | CustomerShopPayAgreement
```

---
<a id="date"></a>

## Date

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date string. For example, September 7, 2019 is represented as `"2019-07-16"`.

### Map

#### Fields with this scalar

* [Gift​Card.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.expiresOn)
* [Marketing​Engagement.occurredOn](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.occurredOn)
* [Shopify​Payments​Dispute​Fulfillment.shippingDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeFulfillment#field-ShopifyPaymentsDisputeFulfillment.fields.shippingDate)

#### Inputs with this scalar

* [Gift​Card​Create​Input.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-expiresOn)
* [Gift​Card​Update​Input.expiresOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardUpdateInput#fields-expiresOn)
* [Inventory​Transfer​Edit​Input.dateCreated](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferEditInput#fields-dateCreated)
* [Marketing​Engagement​Input.occurredOn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-occurredOn)

#### Arguments with this scalar

* [Query​Root.cashManagementLocationSummary(startDate)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.cashManagementLocationSummary.arguments.startDate)
* [Query​Root.cashManagementLocationSummary(endDate)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.cashManagementLocationSummary.arguments.endDate)
* [Query​Root.cashManagementShopSummary(startDate)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.cashManagementShopSummary.arguments.startDate)
* [Query​Root.cashManagementShopSummary(endDate)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.cashManagementShopSummary.arguments.endDate)
* [cash​Management​Location​Summary.startDate](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementLocationSummary#arguments-startDate)
* [cash​Management​Location​Summary.endDate](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementLocationSummary#arguments-endDate)
* [cash​Management​Shop​Summary.startDate](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary#arguments-startDate)
* [cash​Management​Shop​Summary.endDate](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementShopSummary#arguments-endDate)

---
<a id="date-time"></a>

## Date​Time

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string. For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is represented as `"2019-09-07T15:50:00Z`".

### Map

#### Fields with this scalar

* [Abandoned​Checkout.completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.completedAt)
* [Abandoned​Checkout.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.createdAt)
* [Abandoned​Checkout.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.updatedAt)
* [Abandonment.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.createdAt)
* [Abandonment.emailSentAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.emailSentAt)
* [Abandonment.lastBrowseAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastBrowseAbandonmentDate)
* [Abandonment.lastCartAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastCartAbandonmentDate)
* [Abandonment.lastCheckoutAbandonmentDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.lastCheckoutAbandonmentDate)
* [Abandonment.visitStartedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.visitStartedAt)
* [App​Credit.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.createdAt)
* [App​Feedback.feedbackGeneratedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppFeedback#field-AppFeedback.fields.feedbackGeneratedAt)
* [App​Purchase​One​Time.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.createdAt)
* [App​Revenue​Attribution​Record.capturedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.capturedAt)
* [App​Revenue​Attribution​Record.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.createdAt)
* [App​Subscription.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.createdAt)
* [App​Subscription.currentPeriodEnd](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.currentPeriodEnd)
* [App​Usage​Record.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.createdAt)
* [Article.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.createdAt)
* [Article.publishedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt)
* [Article.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.updatedAt)
* [Basic​Event.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.createdAt)
* [Blog.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.createdAt)
* [Blog.updatedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.updatedAt)
* [Bulk​Operation.completedAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.completedAt)
* [Bulk​Operation.createdAt](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.createdAt)
* [Cash​Adjustment​Activity.time](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashAdjustmentActivity#field-CashAdjustmentActivity.fields.time)
* [Cash​Count​Activity.time](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashCountActivity#field-CashCountActivity.fields.time)
* [Cash​Tracking​Adjustment.time](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment#field-CashTrackingAdjustment.fields.time)
* [Cash​Tracking​Session.closingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.closingTime)
* [Cash​Tracking​Session.openingTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.openingTime)

#### Inputs with this scalar

* [Article​Create​Input.publishDate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-publishDate)
* [Article​Update​Input.publishDate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-publishDate)
* [Cash​Drawer​Date​Range​Input.from](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput#fields-from)
* [Cash​Drawer​Date​Range​Input.to](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerDateRangeInput#fields-to)
* [Company​Input.customerSince](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CompanyInput#fields-customerSince)
* [Customer​Email​Marketing​Consent​Input.consentUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerEmailMarketingConsentInput#fields-consentUpdatedAt)
* [Customer​Sms​Marketing​Consent​Input.consentUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CustomerSmsMarketingConsentInput#fields-consentUpdatedAt)
* [Discount​Automatic​App​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-startsAt)
* [Discount​Automatic​App​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-endsAt)
* [Discount​Automatic​Basic​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-startsAt)
* [Discount​Automatic​Basic​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-endsAt)
* [Discount​Automatic​Bxgy​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-startsAt)
* [Discount​Automatic​Bxgy​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-endsAt)
* [Discount​Automatic​Free​Shipping​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-startsAt)
* [Discount​Automatic​Free​Shipping​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-endsAt)
* [Discount​Code​App​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-startsAt)
* [Discount​Code​App​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-endsAt)
* [Discount​Code​Basic​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-startsAt)
* [Discount​Code​Basic​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-endsAt)
* [Discount​Code​Bxgy​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-startsAt)
* [Discount​Code​Bxgy​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-endsAt)
* [Discount​Code​Free​Shipping​Input.startsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-startsAt)
* [Discount​Code​Free​Shipping​Input.endsAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-endsAt)
* [Draft​Order​Input.reserveInventoryUntil](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-reserveInventoryUntil)
* [Fulfillment​Event​Input.estimatedDeliveryAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-estimatedDeliveryAt)
* [Fulfillment​Event​Input.happenedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-happenedAt)
* [Gift​Card​Credit​Input.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreditInput#fields-processedAt)
* [Gift​Card​Debit​Input.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardDebitInput#fields-processedAt)
* [Gift​Card​Recipient​Input.sendNotificationAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardRecipientInput#fields-sendNotificationAt)
* [Inventory​Scheduled​Change​Input.expectedAt](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeInput#fields-expectedAt)

#### Arguments with this scalar

* [abandonment​Email​State​Update.emailSentAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentEmailStateUpdate#arguments-emailSentAt)
* [abandonment​Update​Activities​Delivery​Statuses.deliveredAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/abandonmentUpdateActivitiesDeliveryStatuses#arguments-deliveredAt)
* [channel​Full​Sync.beforeUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync#arguments-beforeUpdatedAt)
* [channel​Full​Sync.updatedAtSince](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelFullSync#arguments-updatedAtSince)
* [fulfillment​Order​Accept​Fulfillment​Request.estimatedShippedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest#arguments-estimatedShippedAt)
* [fulfillment​Order​Reschedule.fulfillAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule#arguments-fulfillAt)
* [fulfillment​Orders​Set​Fulfillment​Deadline.fulfillmentDeadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline#arguments-fulfillmentDeadline)
* [inventory​Shipment​Mark​In​Transit.dateShipped](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentMarkInTransit#arguments-dateShipped)
* [inventory​Shipment​Receive.dateReceived](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive#arguments-dateReceived)
* [order​Create​Manual​Payment.processedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCreateManualPayment#arguments-processedAt)
* [point​Of​Sale​Device​Payment​Session​Adjust.time](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionAdjust#arguments-time)
* [point​Of​Sale​Device​Payment​Session​Close.time](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionClose#arguments-time)
* [point​Of​Sale​Device​Payment​Session​Count.time](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionCount#arguments-time)
* [point​Of​Sale​Device​Payment​Session​Open.time](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pointOfSaleDevicePaymentSessionOpen#arguments-time)
* [product​Full​Sync.beforeUpdatedAt](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync#arguments-beforeUpdatedAt)
* [product​Full​Sync.updatedAtSince](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productFullSync#arguments-updatedAtSince)
* [subscription​Contract​Set​Next​Billing​Date.date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate#arguments-date)
* [tax​Summary​Create.startTime](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate#arguments-startTime)
* [tax​Summary​Create.endTime](https://shopify.dev/docs/api/admin-graphql/latest/mutations/taxSummaryCreate#arguments-endTime)

---
<a id="decimal"></a>

## Decimal

scalar

A signed decimal number, which supports arbitrary precision and is serialized as a string.

Example values: `"29.99"`, `"29.999"`.

### Map

#### Fields with this scalar

* [Currency​Setting.manualRate](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting#field-CurrencySetting.fields.manualRate)
* [Discount​Purchase​Amount.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPurchaseAmount#field-DiscountPurchaseAmount.fields.amount)
* [Marketing​Engagement.allConversions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.allConversions)
* [Marketing​Engagement.firstTimeCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.firstTimeCustomers)
* [Marketing​Engagement.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.orders)
* [Marketing​Engagement.primaryConversions](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.primaryConversions)
* [Marketing​Engagement.returningCustomers](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.returningCustomers)
* [Money​V2.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2#field-MoneyV2.fields.amount)
* [Order​Transaction.settlementCurrencyRate](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.settlementCurrencyRate)
* [Transaction​Fee.rate](https://shopify.dev/docs/api/admin-graphql/latest/objects/TransactionFee#field-TransactionFee.fields.rate)

#### Inputs with this scalar

* [App​Subscription​Discount​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountValueInput#fields-amount)
* [Discount​Amount​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAmountInput#fields-amount)
* [Discount​Automatic​Free​Shipping​Input.maximumShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-maximumShippingPrice)
* [Discount​Code​Free​Shipping​Input.maximumShippingPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-maximumShippingPrice)
* [Discount​Customer​Buys​Value​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput#fields-amount)
* [Discount​Effect​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountEffectInput#fields-amount)
* [Discount​Minimum​Subtotal​Input.greaterThanOrEqualToSubtotal](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumSubtotalInput#fields-greaterThanOrEqualToSubtotal)
* [Gift​Card​Create​Input.initialValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/GiftCardCreateInput#fields-initialValue)
* [Inventory​Item​Input.cost](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryItemInput#fields-cost)
* [Market​Currency​Settings​Update​Input.baseCurrencyManualRate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketCurrencySettingsUpdateInput#fields-baseCurrencyManualRate)
* [Marketing​Engagement​Input.orders](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-orders)
* [Marketing​Engagement​Input.firstTimeCustomers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-firstTimeCustomers)
* [Marketing​Engagement​Input.returningCustomers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-returningCustomers)
* [Marketing​Engagement​Input.primaryConversions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-primaryConversions)
* [Marketing​Engagement​Input.allConversions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-allConversions)
* [Money​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput#fields-amount)
* [Order​Create​Tax​Line​Input.rate](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput#fields-rate)
* [Selling​Plan​Checkout​Charge​Value​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanCheckoutChargeValueInput#fields-fixedValue)
* [Selling​Plan​Pricing​Policy​Value​Input.fixedValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput#fields-fixedValue)
* [Subscription​Contract​Product​Change​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionContractProductChangeInput#fields-currentPrice)
* [Subscription​Draft​Input.deliveryPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryPrice)
* [Subscription​Line​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput#fields-currentPrice)
* [Subscription​Line​Update​Input.currentPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput#fields-currentPrice)
* [Subscription​Pricing​Policy​Cycle​Discounts​Input.computedPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyCycleDiscountsInput#fields-computedPrice)
* [Subscription​Pricing​Policy​Input.basePrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput#fields-basePrice)

---
<a id="delivery-condition-criteria"></a>

## Delivery​Condition​Criteria

union

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

The value (weight or price) that the condition field is compared to.

### Fields with this union

* [Delivery​Condition.conditionCriteria](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCondition#field-DeliveryCondition.fields.conditionCriteria)

  OBJECT

  A condition that must pass for a delivery method definition to be applied to an order.

***

```graphql
union DeliveryConditionCriteria = MoneyV2 | Weight
```

---
<a id="delivery-promise-participant-owner"></a>

## Delivery​Promise​Participant​Owner

union

Requires `read_delivery_promises` access scope.

The object that the participant references.

### Fields with this union

* [Delivery​Promise​Participant.owner](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant#field-DeliveryPromiseParticipant.fields.owner)

  OBJECT

  Returns enabled delivery promise participants.

***

```graphql
union DeliveryPromiseParticipantOwner = ProductVariant
```

---
<a id="delivery-rate-provider"></a>

## Delivery​Rate​Provider

union

Requires Any of `assigned_shipping` or `shipping` access scopes or `manage_delivery_settings` user permission.

A rate provided by a merchant-defined rate or a participant.

### Fields with this union

* [Delivery​Method​Definition.rateProvider](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition#field-DeliveryMethodDefinition.fields.rateProvider)

  OBJECT

  A method definition contains the delivery rate and the conditions that must be met for the method to be applied.

***

```graphql
union DeliveryRateProvider = DeliveryParticipant | DeliveryRateDefinition
```

---
<a id="deposit-configuration"></a>

## Deposit​Configuration

union

Configuration of the deposit.

### Fields with this union

* [Buyer​Experience​Configuration.deposit](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration#field-BuyerExperienceConfiguration.fields.deposit)

  OBJECT

  Settings describing the behavior of checkout for a B2B buyer.

***

```graphql
union DepositConfiguration = DepositPercentage
```

---
<a id="discount"></a>

## Discount

union

Requires Apps must have `read_discounts` access scope.

A discount offers promotional value and can be applied by entering a code or automatically when conditions are met. Discounts can provide fixed amounts, percentage reductions, free shipping, or Buy X Get Y (BXGY) benefits on specific products or the entire order. For more complex scenarios, developers can use Function-backed discounts to create custom discount configurations.

### Fields with this union

* [Discount​Node.discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.discount)

  OBJECT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

***

```graphql
union Discount = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping | DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping
```

---
<a id="discount-application"></a>

## Discount​Application

interface

Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is applied to its entitled items.

* index

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  An ordered index that can be used to identify the discount application and indicate the precedence of the discount application for calculations.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetSelection)

  non-null

  How the discount amount is distributed on the discounted lines.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountApplicationTargetType)

  non-null

  Whether the discount is applied on line items or shipping lines.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

###### Variables

```json
{
	"allocationMethod": "",
	"index": "",
	"targetSelection": "",
	"targetType": "",
	"value": ""
}
```

###### Schema

```graphql
interface DiscountApplication {
  allocationMethod: DiscountApplicationAllocationMethod!
  index: Int!
  targetSelection: DiscountApplicationTargetSelection!
  targetType: DiscountApplicationTargetType!
  value: PricingValue!
}
```

---
<a id="discount-automatic"></a>

## Discount​Automatic

union

Requires Apps must have `read_discounts` access scope.

The types of automatic discounts applied in the cart and at checkout when an order meets specific criteria.

Includes [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) for custom logic using the [Discount Function API](https://shopify.dev/docs/api/functions/latest/discount), [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) for percentage or fixed amount reductions, [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) for Buy X Get Y promotions, and [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) for delivery incentives.

### Fields with this union

* [Discount​Automatic​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple DiscountAutomatics.

* [Discount​Automatic​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticEdge#field-DiscountAutomaticEdge.fields.node)

  OBJECT

  An auto-generated type which holds one DiscountAutomatic and a cursor during pagination.

* [Discount​Automatic​Node.automaticDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.automaticDiscount)

  OBJECT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

***

```graphql
union DiscountAutomatic = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping
```

---
<a id="discount-code"></a>

## Discount​Code

union

Requires Apps must have `read_discounts` access scope.

The type of discount associated with the discount code. For example, the discount code might offer a basic discount of a fixed percentage, or a fixed amount, on specific products or the order. Alternatively, the discount might offer the customer free shipping on their order. A third option is a Buy X, Get Y (BXGY) discount, which offers a customer discounts on select products if they add a specific product to their order.

### Fields with this union

* [Discount​Code​Node.codeDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.codeDiscount)

  OBJECT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

***

```graphql
union DiscountCode = DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping
```

---
<a id="discount-context"></a>

## Discount​Context

union

Requires Apps must have `read_discounts` access scope.

The type used to define which buyers can use the discount.

### Fields with this union

* [Discount​Automatic​App.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.context)

  OBJECT

  The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code> object, with the exception that \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code> stores information about discount codes that are managed by an app using Shopify Functions.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Basic.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.context)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Basic\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Basic\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Bxgy.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.context)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Bxgy\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Bxgy\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.context)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Code​App.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.context)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code> object, with the exception that \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code> stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.context)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Basic\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Basic\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.context)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Bxgy\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Bxgy\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.context)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

```graphql
union DiscountContext = DiscountBuyerSelectionAll | DiscountCustomerSegments | DiscountCustomers
```

---
<a id="discount-customer-buys-value"></a>

## Discount​Customer​Buys​Value

union

Requires Apps must have `read_discounts` access scope.

The prerequisite for the discount to be applicable. For example, the discount might require a customer to buy a minimum quantity of select items. Alternatively, the discount might require a customer to spend a minimum amount on select items.

### Fields with this union

* [Discount​Customer​Buys.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys#field-DiscountCustomerBuys.fields.value)

  OBJECT

  The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

***

```graphql
union DiscountCustomerBuysValue = DiscountPurchaseAmount | DiscountQuantity
```

---
<a id="discount-customer-gets-value"></a>

## Discount​Customer​Gets​Value

union

Requires Apps must have `read_discounts` access scope.

The type of the discount value and how it will be applied. For example, it might be a percentage discount on a fixed number of items. Alternatively, it might be a fixed amount evenly distributed across all items or on each individual item. A third example is a percentage discount on all items.

### Fields with this union

* [Discount​Customer​Gets.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets#field-DiscountCustomerGets.fields.value)

  OBJECT

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

***

```graphql
union DiscountCustomerGetsValue = DiscountAmount | DiscountOnQuantity | DiscountPercentage
```

---
<a id="discount-customer-selection"></a>

## Discount​Customer​Selection

union

Requires Apps must have `read_discounts` access scope.

The type used for targeting a set of customers who are eligible for the discount. For example, the discount might be available to all customers or it might only be available to a specific set of customers. You can define the set of customers by targeting a list of customer segments, or by targeting a list of specific customers.

### Fields with this union

#### Deprecated fields with this union

* [Discount​Code​App.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Basic.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Bxgy.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.customerSelection)

  OBJECT

  Deprecated

* [Discount​Code​Free​Shipping.customerSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.customerSelection)

  OBJECT

  Deprecated

***

```graphql
union DiscountCustomerSelection = DiscountCustomerAll | DiscountCustomerSegments | DiscountCustomers
```

---
<a id="discount-effect"></a>

## Discount​Effect

union

Requires Apps must have `read_discounts` access scope.

The type of discount that will be applied. Currently, only a percentage discount is supported.

### Fields with this union

* [Discount​On​Quantity.effect](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountOnQuantity#field-DiscountOnQuantity.fields.effect)

  OBJECT

  Defines quantity-based discount rules that specify how many items are eligible for a discount effect. This object enables bulk purchase incentives and tiered pricing strategies.

  For example, a "Buy 4 candles, get 2 candles 50% off (mix and match)" promotion would specify a quantity threshold of 2 items that will receive a percentage discount effect, encouraging customers to purchase more items to unlock savings.

  The configuration combines quantity requirements with discount effects, allowing merchants to create sophisticated pricing rules that reward larger purchases and increase average order values.

***

```graphql
union DiscountEffect = DiscountAmount | DiscountPercentage
```

---
<a id="discount-items"></a>

## Discount​Items

union

Requires Apps must have `read_discounts` access scope.

The type used to target the items required for discount eligibility, or the items to which the application of a discount might apply. For example, for a customer to be eligible for a discount, they're required to add an item from a specified collection to their order. Alternatively, a customer might be required to add a specific product or product variant. When using this type to target which items the discount will apply to, the discount might apply to all items on the order, or to specific products and product variants, or items in a given collection.

### Fields with this union

* [Discount​Customer​Buys.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerBuys#field-DiscountCustomerBuys.fields.items)

  OBJECT

  The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable.

* [Discount​Customer​Gets.items](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerGets#field-DiscountCustomerGets.fields.items)

  OBJECT

  The items in the order that qualify for the discount, their quantities, and the total value of the discount.

***

```graphql
union DiscountItems = AllDiscountItems | DiscountCollections | DiscountProducts
```

---
<a id="discount-minimum-requirement"></a>

## Discount​Minimum​Requirement

union

Requires Apps must have `read_discounts` access scope.

The type of minimum requirement that must be met for the discount to be applied. For example, a customer must spend a minimum subtotal to be eligible for the discount. Alternatively, a customer must purchase a minimum quantity of items to be eligible for the discount.

### Fields with this union

* [Discount​Automatic​Basic.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.minimumRequirement)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Basic\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Basic\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.minimumRequirement)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Code​Basic.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.minimumRequirement)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Basic\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Basic\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.minimumRequirement)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

```graphql
union DiscountMinimumRequirement = DiscountMinimumQuantity | DiscountMinimumSubtotal
```

---
<a id="discount-shipping-destination-selection"></a>

## Discount​Shipping​Destination​Selection

union

Requires Apps must have `read_discounts` access scope.

The type used to target the eligible countries of an order's shipping destination for which the discount applies. For example, the discount might be applicable when shipping to all countries, or only to a set of countries.

### Fields with this union

* [Discount​Automatic​Free​Shipping.destinationSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.destinationSelection)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Code​Free​Shipping.destinationSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.destinationSelection)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

```graphql
union DiscountShippingDestinationSelection = DiscountCountries | DiscountCountryAll
```

---
<a id="displayable-error"></a>

## Displayable​Error

interface

Represents an error in the input of a mutation.

### Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

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
<a id="draft-order-platform-discount-allocation-target"></a>

## Draft​Order​Platform​Discount​Allocation​Target

union

Requires `read_draft_orders` access scope.

The element of the draft being discounted.

### Fields with this union

* [Draft​Order​Platform​Discount​Allocation.target](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscountAllocation#field-DraftOrderPlatformDiscountAllocation.fields.target)

  OBJECT

  Price reduction allocations across the draft order's lines.

***

```graphql
union DraftOrderPlatformDiscountAllocationTarget = CalculatedDraftOrderLineItem | DraftOrderLineItem | ShippingLine
```

---
<a id="draft-order-warning"></a>

## Draft​Order​Warning

interface

Requires `read_draft_orders` access scope.

A warning that is displayed to the merchant when a change is made to a draft order.

### Fields

* error​Code

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error code.

* field

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The input field that the warning applies to.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The warning message.

***

###### Variables

```json
{
	"errorCode": "",
	"field": "",
	"message": ""
}
```

###### Schema

```graphql
interface DraftOrderWarning {
  errorCode: String!
  field: String!
  message: String!
}
```

---
<a id="event"></a>

## Event

interface

Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the addition of a product.

### Fields

* action

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The action that occured.

* app​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The name of the app that created the event.

* attribute​To​App

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was created by an app.

* attribute​To​User

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event was caused by an admin user.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the event was created.

* critical​Alert

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the event is critical.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* message

  [Formatted​String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/FormattedString)

  non-null

  Human readable text that describes the event.

***

###### Variables

```json
{
	"action": "",
	"appTitle": "",
	"attributeToApp": "",
	"attributeToUser": "",
	"createdAt": "",
	"criticalAlert": "",
	"id": "",
	"message": ""
}
```

###### Schema

```graphql
interface Event {
  action: String!
  appTitle: String
  attributeToApp: Boolean!
  attributeToUser: Boolean!
  createdAt: DateTime!
  criticalAlert: Boolean!
  id: ID!
  message: FormattedString!
}
```

---
<a id="fee"></a>

## Fee

interface

Requires `read_returns` access scope and (`read_orders` access scope or `read_marketplace_orders` access scope).

A additional cost, charged by the merchant, on an order. Examples include return shipping fees and restocking fees.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the Fee.

***

###### Variables

```json
{
	"id": ""
}
```

###### Schema

```graphql
interface Fee {
  id: ID!
}
```

---
<a id="file"></a>

## File

interface

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

A file interface.

### Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to describe the contents or the function of a file.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.

* file​Errors

  [\[File​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileError)

  non-null

  Any errors that have occurred on the file.

* file​Status

  [File​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileStatus)

  non-null

  The status of the file.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated.

***

###### Variables

```json
{
	"alt": "",
	"createdAt": "",
	"fileErrors": "",
	"fileStatus": "",
	"id": "",
	"preview": "",
	"updatedAt": ""
}
```

###### Schema

```graphql
interface File {
  alt: String
  createdAt: DateTime!
  fileErrors: [FileError!]!
  fileStatus: FileStatus!
  id: ID!
  preview: MediaPreviewImage
  updatedAt: DateTime!
}
```

---
<a id="float"></a>

## Float

scalar

Represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Map

#### Fields with this scalar

* [Abandonment.hoursSinceLastAbandonedCheckout](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.hoursSinceLastAbandonedCheckout)
* [App​Subscription​Discount​Percentage.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscountPercentage#field-AppSubscriptionDiscountPercentage.fields.percentage)
* [Calculated​Restocking​Fee.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedRestockingFee#field-CalculatedRestockingFee.fields.percentage)
* [Checkout​And​Accounts​Configuration​Branding​Font​Size.base](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFontSize#field-CheckoutAndAccountsConfigurationBrandingFontSize.fields.base)
* [Checkout​And​Accounts​Configuration​Branding​Font​Size.ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingFontSize#field-CheckoutAndAccountsConfigurationBrandingFontSize.fields.ratio)
* [Checkout​Branding​Font​Size.base](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontSize#field-CheckoutBrandingFontSize.fields.base)
* [Checkout​Branding​Font​Size.ratio](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutBrandingFontSize#field-CheckoutBrandingFontSize.fields.ratio)
* [Delivery​Participant.percentageOfRateFee](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryParticipant#field-DeliveryParticipant.fields.percentageOfRateFee)
* [Deposit​Percentage.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/DepositPercentage#field-DepositPercentage.fields.percentage)
* [Discount​Percentage.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountPercentage#field-DiscountPercentage.fields.percentage)
* [Distance.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/Distance#field-Distance.fields.value)
* [Draft​Order​Applied​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderAppliedDiscount#field-DraftOrderAppliedDiscount.fields.value)
* [Fulfillment​Event.latitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.latitude)
* [Fulfillment​Event.longitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.longitude)
* [Location​Address.latitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress#field-LocationAddress.fields.latitude)
* [Location​Address.longitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationAddress#field-LocationAddress.fields.longitude)
* [Mailing​Address.latitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.latitude)
* [Mailing​Address.longitude](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)
* [Price​List​Adjustment.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListAdjustment#field-PriceListAdjustment.fields.value)
* [Price​Rule​Percent​Value.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRulePercentValue#field-PriceRulePercentValue.fields.percentage)
* [Pricing​Percentage​Value.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/PricingPercentageValue#field-PricingPercentageValue.fields.percentage)
* [Restocking​Fee.percentage](https://shopify.dev/docs/api/admin-graphql/latest/objects/RestockingFee#field-RestockingFee.fields.percentage)
* [Segment​Attribute​Statistics.average](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAttributeStatistics#field-SegmentAttributeStatistics.fields.average)
* [Segment​Attribute​Statistics.sum](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentAttributeStatistics#field-SegmentAttributeStatistics.fields.sum)
* [Segment​Event​Filter​Parameter.maxRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter#field-SegmentEventFilterParameter.fields.maxRange)
* [Segment​Event​Filter​Parameter.minRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEventFilterParameter#field-SegmentEventFilterParameter.fields.minRange)
* [Segment​Float​Filter.maxRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentFloatFilter#field-SegmentFloatFilter.fields.maxRange)
* [Segment​Float​Filter.minRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentFloatFilter#field-SegmentFloatFilter.fields.minRange)
* [Segment​Integer​Filter.maxRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentIntegerFilter#field-SegmentIntegerFilter.fields.maxRange)
* [Segment​Integer​Filter.minRange](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentIntegerFilter#field-SegmentIntegerFilter.fields.minRange)

#### Inputs with this scalar

* [App​Subscription​Discount​Value​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountValueInput#fields-percentage)
* [Checkout​And​Accounts​Configuration​Branding​Font​Size​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingFontSizeInput#fields-base)
* [Checkout​And​Accounts​Configuration​Branding​Font​Size​Input.ratio](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingFontSizeInput#fields-ratio)
* [Checkout​And​Accounts​Configuration​Branding​Merchandise​Thumbnail​Input.aspectRatio](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingMerchandiseThumbnailInput#fields-aspectRatio)
* [Checkout​Branding​Font​Size​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontSizeInput#fields-base)
* [Checkout​Branding​Font​Size​Input.ratio](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingFontSizeInput#fields-ratio)
* [Delivery​Participant​Input.percentageOfRateFee](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryParticipantInput#fields-percentageOfRateFee)
* [Delivery​Update​Condition​Input.criteria](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryUpdateConditionInput#fields-criteria)
* [Deposit​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DepositInput#fields-percentage)
* [Discount​Customer​Gets​Value​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerGetsValueInput#fields-percentage)
* [Discount​Effect​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountEffectInput#fields-percentage)
* [Draft​Order​Applied​Discount​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-value)
* [Exchange​Line​Item​Applied​Discount​Value​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountValueInput#fields-percentage)
* [Fulfillment​Event​Input.latitude](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-latitude)
* [Fulfillment​Event​Input.longitude](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentEventInput#fields-longitude)
* [Object​Dimensions​Input.length](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput#fields-length)
* [Object​Dimensions​Input.width](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput#fields-width)
* [Object​Dimensions​Input.height](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ObjectDimensionsInput#fields-height)
* [Order​Create​Percentage​Discount​Code​Attributes​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreatePercentageDiscountCodeAttributesInput#fields-percentage)
* [Order​Edit​Applied​Discount​Input.percentValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput#fields-percentValue)
* [Price​List​Adjustment​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceListAdjustmentInput#fields-value)
* [Restocking​Fee​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RestockingFeeInput#fields-percentage)
* [Selling​Plan​Checkout​Charge​Value​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanCheckoutChargeValueInput#fields-percentage)
* [Selling​Plan​Pricing​Policy​Value​Input.percentage](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SellingPlanPricingPolicyValueInput#fields-percentage)
* [Subscription​Manual​Discount​Fixed​Amount​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountFixedAmountInput#fields-amount)
* [Unit​Price​Measurement​Input.quantityValue](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UnitPriceMeasurementInput#fields-quantityValue)
* [Weight​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WeightInput#fields-value)

---
<a id="formatted-string"></a>

## Formatted​String

scalar

A string containing a strict subset of HTML code. Non-allowed tags will be stripped out. Allowed tags:

* `a` (allowed attributes: `href`, `target`)
* `b`
* `br`
* `em`
* `i`
* `strong`
* `u` Use [HTML](https://shopify.dev/api/admin-graphql/latest/scalars/HTML) instead if you need to include other HTML tags.

Example value: `"Your current domain is <strong>example.myshopify.com</strong>."`

### Map

#### Fields with this scalar

* [Basic​Event.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.message)
* [Basic​Event.secondaryMessage](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.secondaryMessage)
* [Comment​Event.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent#field-CommentEvent.fields.message)
* [Currency​Formats.moneyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats#field-CurrencyFormats.fields.moneyFormat)
* [Currency​Formats.moneyWithCurrencyFormat](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyFormats#field-CurrencyFormats.fields.moneyWithCurrencyFormat)
* [Customer​Visit.referralInfoHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.referralInfoHtml)
* [Editable​Property.reason](https://shopify.dev/docs/api/admin-graphql/latest/objects/EditableProperty#field-EditableProperty.fields.reason)

---
<a id="gift-card-transaction"></a>

## Gift​Card​Transaction

interface

Requires `read_gift_card_transactions` access scope.

Interface for a gift card transaction.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* gift​Card

  [Gift​Card!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  non-null

  The gift card that the transaction belongs to.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the transaction.

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The key for the metafield.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note about the transaction.

* processed​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was processed.

***

###### Variables

```json
{
	"amount": "",
	"giftCard": "",
	"id": "",
	"metafield": {
		"namespace": "",
		"key": ""
	},
	"metafields": {
		"namespace": "",
		"keys": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"note": "",
	"processedAt": ""
}
```

###### Schema

```graphql
interface GiftCardTransaction {
  amount: MoneyV2!
  giftCard: GiftCard!
  id: ID!
  metafield: Metafield
  metafields: MetafieldConnection!
  note: String
  processedAt: DateTime!
}
```

---
<a id="graphql-admin-api-reference"></a>

## GraphQL Admin API reference

The Admin API lets you build apps and integrations that extend and enhance the Shopify admin.

This page will help you get up and running with Shopify’s GraphQL API.

### Client libraries

Use Shopify’s officially supported libraries to build fast, reliable apps with the programming languages and frameworks you already know.

###### React Router

The official package for React Router applications.

* [Docs](https://shopify.dev/docs/api/shopify-app-react-router)
* [npm package](https://www.npmjs.com/package/@shopify/shopify-app-react-router)
* [GitHub repo](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-app-react-router#readme)

###### Node.js

The official client library for Node.js apps. No framework dependencies—works with any Node.js app.

* [Docs](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api#readme)
* [npm package](https://www.npmjs.com/package/@shopify/shopify-api)
* [GitHub repo](https://github.com/Shopify/shopify-app-js/tree/main/packages/apps/shopify-api)

###### Ruby

The official client library for Ruby apps.

* [Docs](https://shopify.github.io/shopify-api-ruby/)

* [Ruby gem](https://rubygems.org/gems/shopify_api)

* [GitHub repo](https://github.com/Shopify/shopify-api-ruby)

###### cURL

Use the [curl utility](https://curl.se/) to make API queries directly from the command line.

###### Direct API Access

Make requests to the Admin API directly from your app using the standard [web `fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/fetch). Requests are automatically authenticated and fast because Shopify handles them directly.

* [Learn about direct API Access](https://shopify.dev/docs/api/app-home#direct-api-access)
* [Configuration guide](https://shopify.dev/docs/apps/tools/cli/configuration#admin)

###### Other

Need a different language? Check the list of [community-supported libraries](https://shopify.dev/apps/tools/api-libraries#third-party-admin-api-libraries).

###### React Router

```bash
npm install -g @shopify/cli@latest
shopify app init
```

###### Node.js

```ts
npm install --save @shopify/shopify-api
## or
yarn add @shopify/shopify-api
```

###### Ruby

```ruby
bundle add shopify_api
```

###### cURL

```bash
## cURL is often available by default on macOS and Linux.
## See http://curl.se/docs/install.html for more details.
```

###### Direct API Access

```toml
## Enable Direct API access in App Home.
[access.admin]
embedded_app_direct_api_access = true
```

***

### Authentication

All GraphQL Admin API requests require a valid Shopify access token. If you use Shopify’s [client libraries](https://shopify.dev/apps/tools/api-libraries), then this will be done for you. Otherwise, you should include your token as a `X-Shopify-Access-Token` header on all GraphQL requests.

Public and custom apps created in the Dev Dashboard generate tokens using [OAuth](https://shopify.dev/apps/auth/oauth), and custom apps made in the Shopify admin are [authenticated in the Shopify admin](https://shopify.dev/apps/auth/admin-app-access-tokens).

To keep the platform secure, apps need to request specific [access scopes](https://shopify.dev/api/usage/access-scopes) during the install process. Only request as much data access as your app needs to work.

Learn more about [getting started with authentication](https://shopify.dev/apps/auth) and [building apps](https://shopify.dev/apps/getting-started).

###### React Router

```js
import { authenticate } from "../shopify.server";

export async function loader({request}) {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `query { shop { name } }`,
  );
}
```

###### Node.js

```ts
const client = new shopify.clients.Graphql({session});
const response = await client.query({data: 'query { shop { name } }'});
```

###### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: 'your-development-store.myshopify.com',
  access_token: access_token,
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session,
)
response = client.query(query: 'query { shop { name } }')
```

###### cURL

```bash
## Replace {SHOPIFY_ACCESS_TOKEN} with your actual access token
  curl -X POST \
  https://{shop}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {SHOPIFY_ACCESS_TOKEN}' \
  -d '{
  "query": "query { shop { name } }"
  }'
```

###### Direct API Access

```ts
// Authentication is handled automatically!
const response = await fetch('shopify:admin/api/2026-04/graphql.json', {
  method: 'POST',
  body: JSON.stringify({
    query: `query { shop { name } }`,
  }),
});

const { data } = await response.json();
console.log(data);
```

***

### Endpoints and queries

GraphQL queries are executed by sending `POST` HTTP requests to the endpoint:

`https://{store_name}.myshopify.com/admin/api/2026-04/graphql.json`

Queries begin with one of the objects listed under [QueryRoot](https://shopify.dev/api/admin-graphql/2026-04/objects/queryroot). The QueryRoot is the schema’s entry-point for queries.

Queries are equivalent to making a `GET` request in REST. The example shown is a query to get the ID and title of the first three products.

Learn more about [API usage](https://shopify.dev/api/usage).

***

**Note:**

Explore and learn Shopify's Admin API using [GraphiQL Explorer](https://shopify.dev/apps/tools/graphiql-admin-api). To build queries and mutations with shop data, install [Shopify’s GraphiQL app](https://shopify-graphiql-app.shopifycloud.com/).

POST

### https://{store\_name}.myshopify.com/admin/api/2026-04/graphql.json

###### React Router

```ts
import { authenticate } from "../shopify.server";

export async function loader({request}) {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
    query getProducts {
      products (first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }`,
  );
  const json = await response.json();
  return { products: json?.data?.products?.edges };
}
```

###### Node.js

```ts
const queryString = `{
  products (first: 3) {
    edges {
      node {
        id
        title
      }
    }
  }
}`

// `session` is built as part of the OAuth process
const client = new shopify.clients.Graphql({session});
const products = await client.query({
  data: queryString,
});
```

###### Ruby

```ruby
query = <<~GQL
  {
    products (first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
GQL

## session is built as part of the OAuth process
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)
products = client.query(
  query: query,
)
```

###### cURL

```bash
## Get the ID and title of the three most recently added products
curl -X POST   https://{store_name}.myshopify.com/admin/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "{
    products(first: 3) {
      edges {
        node {
          id
          title
        }
      }
    }
  }"
}'
```

###### Direct API Access

```ts
const response = await fetch('shopify:admin/api/2026-04/graphql.json', {
  method: 'POST',
  body: JSON.stringify({
    query: `{
      products(first: 3) {
        edges {
          node {
            id
            title
          }
        }
      }
    }`,
  }),
});

const { data } = await response.json();
console.log(data);
```

***

### Rate limits

The GraphQL Admin API is rate-limited using calculated query costs, measured in cost points. Each field returned by a query costs a set number of points. The total cost of a query is the maximum of possible fields selected, so more complex queries cost more to run.

Learn more about [rate limits](https://shopify.dev/api/usage/limits#graphql-admin-api-rate-limits).

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

* errors\[n].​extensions.​codestring

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

#### 4xx and 5xx status codes

The 4xx and 5xx errors occur infrequently. They are often related to network communications, your account, or an issue with Shopify’s services.

Many errors that would typically return a 4xx or 5xx status code, return an HTTP 200 errors response instead. Refer to the [200 OK section](#200-ok) above for details.

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
HTTP/1.1 403 Access Denied
{
  "errors": "User does not have access"
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
<a id="has-compare-digest"></a>

## Has​Compare​Digest

interface

Represents a summary of the current version of data in a resource.

The `compare_digest` field can be used as input for mutations that implement a compare-and-swap mechanism.

### Fields

* compare​Digest

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The data stored in the resource, represented as a digest.

***

###### Variables

```json
{
	"compareDigest": ""
}
```

###### Schema

```graphql
interface HasCompareDigest {
  compareDigest: String!
}
```

---
<a id="has-events"></a>

## Has​Events

interface

Represents an object that has a list of events.

### Fields

* events

  [Event​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection)

  non-null

  The paginated list of events associated with the host subject.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/EventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * action

        string

      * comments

        boolean

      * created\_at

        time

      * id

        id

      * subject\_type

        string

      - The action that occured.

      - Example:

        * `action:create`

        Whether or not to include [comment-events](https://shopify.dev/api/admin-graphql/latest/objects/CommentEvent) in your search, passing `false` will exclude comment-events, any other value will include comment-events.

      - Example:

        * `false`
        * `true`

        Filter by the date and time when the event occurred. Event data is retained for 1 year.

      - Example:

        * `created_at:>2025-10-21`
        * `created_at:<now`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        The resource type affected by this event. See [EventSubjectType](https://shopify.dev/api/admin-graphql/latest/enums/EventSubjectType) for possible values.

        Example:

        * `PRODUCT_VARIANT`
        * `PRODUCT`
        * `COLLECTION`

  ***

***

###### Variables

```json
{
	"events": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": "",
		"sortKey": "",
		"query": ""
	}
}
```

###### Schema

```graphql
interface HasEvents {
  events: EventConnection!
}
```

---
<a id="has-localization-extensions"></a>

## Has​Localization​Extensions

interface

Localization extensions associated with the specified resource. For example, the tax id for government invoice.

### Fields

* localization​Extensions

  [Localization​Extension​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection)

  non-nullDeprecated

  * country​Codes

    [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    ### Arguments

    The country codes of the extensions.

  * purposes

    [\[Localization​Extension​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose)

    The purpose of the extensions.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

###### Variables

```json
{
	"localizationExtensions": {
		"countryCodes": "",
		"purposes": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	}
}
```

###### Schema

```graphql
interface HasLocalizationExtensions {
  localizationExtensions: LocalizationExtensionConnection!
}
```

---
<a id="has-localized-fields"></a>

## Has​Localized​Fields

interface

Localized fields associated with the specified resource.

### Fields

* localized​Fields

  [Localized​Field​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection)

  non-null

  List of localized fields for the resource.

  * country​Codes

    [\[Country​Code!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    ### Arguments

    The country codes of the extensions.

  * purposes

    [\[Localized​Field​Purpose!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizedFieldPurpose)

    The purpose of the extensions.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

###### Variables

```json
{
	"localizedFields": {
		"countryCodes": "",
		"purposes": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	}
}
```

###### Schema

```graphql
interface HasLocalizedFields {
  localizedFields: LocalizedFieldConnection!
}
```

---
<a id="has-metafields"></a>

## Has​Metafields

interface

Represents information about the metafields associated to the specified resource.

### Fields

* metafield

  [Metafield](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The key for the metafield.

  ***

* metafields

  [Metafield​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection)

  non-null

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The metafield namespace to filter by. If omitted, all metafields are returned.

  * keys

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    List of keys of metafields in the format `namespace.key`, will be returned in the same format.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

###### Variables

```json
{
	"metafield": {
		"namespace": "",
		"key": ""
	},
	"metafields": {
		"namespace": "",
		"keys": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	}
}
```

###### Schema

```graphql
interface HasMetafields {
  metafield: Metafield
  metafields: MetafieldConnection!
}
```

---
<a id="has-metafield-definitions"></a>

## Has​Metafield​Definitions

interface

Resources that metafield definitions can be applied to.

### Fields

* metafield​Definitions

  [Metafield​Definition​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection)

  non-nullDeprecated

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter metafield definitions by namespace.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter by the definition's pinned status.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Metafield​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * id

        id

      * key

        string

      * namespace

        string

      * owner\_type

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the metafield definition was created.

      - Example:

        * `created_at:>2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the metafield definition [`key`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-key) field.

      - Example:

        * `key:some-key`

        Filter by the metafield definition [`namespace`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-namespace) field.

      - Example:

        * `namespace:some-namespace`

        Filter by the metafield definition [`ownerType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-ownertype) field.

      - Example:

        * `owner_type:PRODUCT`

        Filter by the metafield definition [`type`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-type) field.

      - Example:

        * `type:single_line_text_field`

        Filter by the date and time when the metafield definition was last updated.

        Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

***

###### Variables

```json
{
	"metafieldDefinitions": {
		"namespace": "",
		"pinnedStatus": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": "",
		"sortKey": "",
		"query": ""
	}
}
```

###### Schema

```graphql
interface HasMetafieldDefinitions {
  metafieldDefinitions: MetafieldDefinitionConnection!
}
```

---
<a id="has-published-translations"></a>

## Has​Published​Translations

interface

Published translations associated with the resource.

### Fields

* translations

  [\[Translation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation)

  non-null

  The published translations associated with the resource.

  * locale

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Filters translations locale.

  * market​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Filters translations by market ID. Use this argument to retrieve content specific to a market.

  ***

***

###### Variables

```json
{
	"translations": [
		{
			"locale": "",
			"marketId": ""
		}
	]
}
```

###### Schema

```graphql
interface HasPublishedTranslations {
  translations: [Translation!]!
}
```

---
<a id="has-store-credit-accounts"></a>

## Has​Store​Credit​Accounts

interface

Requires `read_store_credit_accounts` access scope.

Represents information about the store credit accounts associated to the specified owner.

### Fields

* store​Credit​Accounts

  [Store​Credit​Account​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection)

  non-null

  Returns a list of store credit accounts that belong to the owner resource. A store credit account owner can hold multiple accounts each with a different currency.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * currency\_code

      string

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

***

###### Variables

```json
{
	"storeCreditAccounts": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"query": ""
	}
}
```

###### Schema

```graphql
interface HasStoreCreditAccounts {
  storeCreditAccounts: StoreCreditAccountConnection!
}
```

---
<a id="html"></a>

## HTML

scalar

A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a complete list of HTML elements.

Example value: `"<p>Grey cotton knit sweater.</p>"`

### Map

#### Fields with this scalar

* [Article.body](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.body)
* [Article.summary](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.summary)
* [Calculated​Order.notificationPreviewHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.notificationPreviewHtml)
* [Collection.descriptionHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.descriptionHtml)
* [Comment.bodyHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.bodyHtml)
* [Customer​Visit.landingPageHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.landingPageHtml)
* [Page.body](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.body)
* [Product.descriptionHtml](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.descriptionHtml)
* [Resource​Alert.content](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceAlert#field-ResourceAlert.fields.content)
* [Shop​Policy.body](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPolicy#field-ShopPolicy.fields.body)

#### Inputs with this scalar

* [Article​Create​Input.body](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-body)
* [Article​Create​Input.summary](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-summary)
* [Article​Update​Input.body](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-body)
* [Article​Update​Input.summary](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-summary)

---
<a id="id"></a>

## ID

scalar

Represents a unique identifier, often used to refetch an object. The ID type appears in a JSON response as a String, but it is not intended to be human-readable.

Example value: `"gid://shopify/Product/10079785100"`

### Map

#### Fields with this scalar

* [Abandoned​Checkout.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.id)
* [Abandoned​Checkout​Line​Item.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.id)
* [Abandoned​Checkout​Line​Item​Component.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent#field-AbandonedCheckoutLineItemComponent.fields.id)
* [Abandonment.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.id)
* [Add​All​Products​Operation.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation#field-AddAllProductsOperation.fields.id)
* [Additional​Fee.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee#field-AdditionalFee.fields.id)
* [Additional​Fee​Sale.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.id)
* [Adjustment​Sale.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.id)
* [Android​Application.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication#field-AndroidApplication.fields.id)
* [App.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.id)
* [App​Catalog.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.id)
* [App​Credit.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.id)
* [App​Installation.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.id)
* [App​Purchase​One​Time.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.id)
* [App​Revenue​Attribution​Record.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.id)
* [App​Subscription.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.id)
* [App​Subscription​Line​Item.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.id)
* [App​Usage​Record.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.id)
* [Apple​Application.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppleApplication#field-AppleApplication.fields.id)
* [Article.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.id)
* [Basic​Event.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.id)
* [Basic​Event.subjectId](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.subjectId)
* [Blog.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.id)
* [Bulk​Operation.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.id)
* [Business​Entity.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/BusinessEntity#field-BusinessEntity.fields.id)
* [Calculated​Automatic​Discount​Application.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.id)
* [Calculated​Discount​Code​Application.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.id)
* [Calculated​Exchange​Line​Item.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem#field-CalculatedExchangeLineItem.fields.id)
* [Calculated​Line​Item.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.id)
* [Calculated​Manual​Discount​Application.id](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.id)

#### Inputs with this scalar

* [Article​Create​Input.blogId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-blogId)
* [Article​Update​Input.blogId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-blogId)
* [Author​Input.userId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AuthorInput#fields-userId)
* [Bundles​Draft​Order​Bundle​Line​Item​Component​Input.variantId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput#fields-variantId)
* [Buyer​Experience​Configuration​Input.paymentTermsTemplateId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BuyerExperienceConfigurationInput#fields-paymentTermsTemplateId)
* [Calculate​Exchange​Line​Item​Input.variantId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput#fields-variantId)
* [Calculate​Return​Input.orderId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput#fields-orderId)
* [Calculate​Return​Line​Item​Input.fulfillmentLineItemId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnLineItemInput#fields-fulfillmentLineItemId)
* [Catalog​Context​Input.marketIds](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput#fields-marketIds)
* [Catalog​Context​Input.companyLocationIds](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogContextInput#fields-companyLocationIds)
* [Catalog​Create​Input.priceListId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput#fields-priceListId)
* [Catalog​Create​Input.publicationId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput#fields-publicationId)
* [Catalog​Update​Input.priceListId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput#fields-priceListId)
* [Catalog​Update​Input.publicationId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput#fields-publicationId)
* [Checkout​And​Accounts​Configuration​Branding​Custom​Font​Input.genericFileId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCustomFontInput#fields-genericFileId)
* [Checkout​And​Accounts​Configuration​Branding​Image​Input.mediaImageId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingImageInput#fields-mediaImageId)
* [Checkout​And​Accounts​Configuration​Override​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationOverrideInput#fields-id)
* [Checkout​Branding​Custom​Font​Input.genericFileId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput#fields-genericFileId)
* [Checkout​Branding​Image​Input.mediaImageId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingImageInput#fields-mediaImageId)
* [Child​Product​Relation​Input.childProductId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChildProductRelationInput#fields-childProductId)
* [Collection​Delete​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDeleteInput#fields-id)
* [Collection​Duplicate​Input.collectionId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDuplicateInput#fields-collectionId)
* [Collection​Identifier​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionIdentifierInput#fields-id)
* [Collection​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-id)
* [Collection​Input.products](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-products)
* [Collection​Publication​Input.publicationId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublicationInput#fields-publicationId)
* [Collection​Publication​Input.channelId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublicationInput#fields-channelId)
* [Collection​Publish​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput#fields-id)
* [Collection​Rule​Input.conditionObjectId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionRuleInput#fields-conditionObjectId)
* [Collection​Unpublish​Input.id](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput#fields-id)

#### Arguments with this scalar

* [Article.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.translations.arguments.marketId)
* [Blog.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.translations.arguments.marketId)
* [Cash​Drawer.cashActivities(staffMemberId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.cashActivities.arguments.staffMemberId)
* [Channel.hasCollection(id)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.hasCollection.arguments.id)
* [Collection.hasProduct(id)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.hasProduct.arguments.id)
* [Collection.publishedOnChannel(channelId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.publishedOnChannel.arguments.channelId)
* [Collection.publishedOnPublication(publicationId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.publishedOnPublication.arguments.publicationId)
* [Collection.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.translations.arguments.marketId)
* [Company​Location.inCatalog(catalogId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.inCatalog.arguments.catalogId)
* [Cookie​Banner.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/CookieBanner#field-CookieBanner.fields.translations.arguments.marketId)
* [Delivery​Carrier​Service.availableServicesForCountries(origins)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService#field-DeliveryCarrierService.fields.availableServicesForCountries.arguments.origins)
* [Delivery​Profile.profileLocationGroups(locationGroupId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileLocationGroups.arguments.locationGroupId)
* [Discount​Code​App.codes(savedSearchId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes.arguments.savedSearchId)
* [Discount​Code​Basic.codes(savedSearchId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes.arguments.savedSearchId)
* [Discount​Code​Bxgy.codes(savedSearchId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes.arguments.savedSearchId)
* [Discount​Code​Free​Shipping.codes(savedSearchId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes.arguments.savedSearchId)
* [Fulfillment​Order.locationsForMove(lineItemIds)](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.locationsForMove.arguments.lineItemIds)
* [Fulfillment​Order.locationsForMove(locationIds)](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.locationsForMove.arguments.locationIds)
* [Has​Published​Translations.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasPublishedTranslations#field-HasPublishedTranslations.fields.translations.arguments.marketId)
* [Image.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.translations.arguments.marketId)
* [Inventory​Adjustment​Group.changes(inventoryItemIds)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes.arguments.inventoryItemIds)
* [Inventory​Adjustment​Group.changes(locationIds)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustmentGroup#field-InventoryAdjustmentGroup.fields.changes.arguments.locationIds)
* [Inventory​Item.inventoryLevel(locationId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevel.arguments.locationId)
* [Link.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Link#field-Link.fields.translations.arguments.marketId)
* [Location.inventoryLevel(inventoryItemId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevel.arguments.inventoryItemId)
* [Market.assignedCustomization(customizationId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.assignedCustomization.arguments.customizationId)
* [Market​Localizable​Resource.marketLocalizations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource#field-MarketLocalizableResource.fields.marketLocalizations.arguments.marketId)
* [Media​Image.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.translations.arguments.marketId)
* [Menu.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu#field-Menu.fields.translations.arguments.marketId)
* [Metafield.translations(marketId)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.translations.arguments.marketId)

---
<a id="int"></a>

## Int

scalar

Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Map

#### Fields and connections with this scalar

* [Abandoned​Checkout​Line​Item.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.quantity)
* [Abandoned​Checkout​Line​Item​Component.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent#field-AbandonedCheckoutLineItemComponent.fields.quantity)
* [Abandonment.daysSinceLastAbandonmentEmail](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.daysSinceLastAbandonmentEmail)
* [Add​All​Products​Operation.processedRowCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AddAllProductsOperation#field-AddAllProductsOperation.fields.processedRowCount)
* [Additional​Fee​Sale.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.quantity)
* [Adjustment​Sale.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.quantity)
* [App​Subscription.trialDays](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.trialDays)
* [App​Subscription​Discount.durationLimitInIntervals](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.durationLimitInIntervals)
* [App​Subscription​Discount.remainingDurationInIntervals](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.remainingDurationInIntervals)
* [Automatic​Discount​Application.index](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.index)
* [Calculated​Draft​Order.totalQuantityOfLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.totalQuantityOfLineItems)
* [Calculated​Draft​Order​Line​Item.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.quantity)
* [Calculated​Exchange​Line​Item.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedExchangeLineItem#field-CalculatedExchangeLineItem.fields.quantity)
* [Calculated​Line​Item.editableQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.editableQuantity)
* [Calculated​Line​Item.editableQuantityBeforeChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.editableQuantityBeforeChanges)
* [Calculated​Line​Item.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.quantity)
* [Calculated​Order.subtotalLineItemsQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.subtotalLineItemsQuantity)
* [Calculated​Return​Line​Item.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.quantity)
* [Card​Payment​Details.expirationMonth](https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.expirationMonth)
* [Card​Payment​Details.expirationYear](https://shopify.dev/docs/api/admin-graphql/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.expirationYear)
* [Cash​Management​Summary.sessionsClosed](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary#field-CashManagementSummary.fields.sessionsClosed)
* [Cash​Management​Summary.sessionsOpened](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementSummary#field-CashManagementSummary.fields.sessionsOpened)
* [Catalog​Csv​Operation.processedRowCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogCsvOperation#field-CatalogCsvOperation.fields.processedRowCount)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables.base](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables#field-CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables.fields.base)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables.large](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables#field-CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables.fields.large)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables.small](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables#field-CheckoutAndAccountsConfigurationBrandingCornerRadiusVariables.fields.small)
* [Checkout​And​Accounts​Configuration​Branding​Custom​Font.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomFont#field-CheckoutAndAccountsConfigurationBrandingCustomFont.fields.weight)
* [Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Logo.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogo#field-CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogo.fields.maxWidth)
* [Checkout​And​Accounts​Configuration​Branding​Logo.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingLogo#field-CheckoutAndAccountsConfigurationBrandingLogo.fields.maxWidth)
* [Checkout​And​Accounts​Configuration​Branding​Shopify​Font.weight](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationBrandingShopifyFont#field-CheckoutAndAccountsConfigurationBrandingShopifyFont.fields.weight)

#### Inputs with this scalar

* [App​Subscription​Discount​Input.durationLimitInIntervals](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppSubscriptionDiscountInput#fields-durationLimitInIntervals)
* [Bundles​Draft​Order​Bundle​Line​Item​Component​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput#fields-quantity)
* [Calculate​Exchange​Line​Item​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput#fields-quantity)
* [Calculate​Return​Line​Item​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnLineItemInput#fields-quantity)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables​Input.small](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariablesInput#fields-small)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariablesInput#fields-base)
* [Checkout​And​Accounts​Configuration​Branding​Corner​Radius​Variables​Input.large](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCornerRadiusVariablesInput#fields-large)
* [Checkout​And​Accounts​Configuration​Branding​Custom​Font​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCustomFontInput#fields-weight)
* [Checkout​And​Accounts​Configuration​Branding​Customer​Accounts​Logo​Input.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingCustomerAccountsLogoInput#fields-maxWidth)
* [Checkout​And​Accounts​Configuration​Branding​Logo​Input.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingLogoInput#fields-maxWidth)
* [Checkout​And​Accounts​Configuration​Branding​Sign​In​Logo​Input.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutAndAccountsConfigurationBrandingSignInLogoInput#fields-maxWidth)
* [Checkout​Branding​Corner​Radius​Variables​Input.small](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCornerRadiusVariablesInput#fields-small)
* [Checkout​Branding​Corner​Radius​Variables​Input.base](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCornerRadiusVariablesInput#fields-base)
* [Checkout​Branding​Corner​Radius​Variables​Input.large](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCornerRadiusVariablesInput#fields-large)
* [Checkout​Branding​Custom​Font​Input.weight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingCustomFontInput#fields-weight)
* [Checkout​Branding​Logo​Input.maxWidth](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingLogoInput#fields-maxWidth)
* [Checkout​Branding​Shopify​Font​Group​Input.baseWeight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput#fields-baseWeight)
* [Checkout​Branding​Shopify​Font​Group​Input.boldWeight](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CheckoutBrandingShopifyFontGroupInput#fields-boldWeight)
* [Delegate​Access​Token​Input.expiresIn](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DelegateAccessTokenInput#fields-expiresIn)
* [Discount​Automatic​App​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-recurringCycleLimit)
* [Discount​Automatic​Basic​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBasicInput#fields-recurringCycleLimit)
* [Discount​Automatic​Free​Shipping​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticFreeShippingInput#fields-recurringCycleLimit)
* [Discount​Code​App​Input.usageLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-usageLimit)
* [Discount​Code​App​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-recurringCycleLimit)
* [Discount​Code​Basic​Input.usageLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-usageLimit)
* [Discount​Code​Basic​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBasicInput#fields-recurringCycleLimit)
* [Discount​Code​Bxgy​Input.usageLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-usageLimit)
* [Discount​Code​Bxgy​Input.usesPerOrderLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeBxgyInput#fields-usesPerOrderLimit)
* [Discount​Code​Free​Shipping​Input.usageLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-usageLimit)
* [Discount​Code​Free​Shipping​Input.recurringCycleLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeFreeShippingInput#fields-recurringCycleLimit)

#### Arguments with this scalar

* [Abandoned​Checkout.lineItems(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems.arguments.first)
* [Abandoned​Checkout.lineItems(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems.arguments.last)
* [Abandoned​Checkout​Line​Item.discountAllocations(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations.arguments.first)
* [Abandoned​Checkout​Line​Item.discountAllocations(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations.arguments.last)
* [Abandonment.productsAddedToCart(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart.arguments.first)
* [Abandonment.productsAddedToCart(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart.arguments.last)
* [Abandonment.productsViewed(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed.arguments.first)
* [Abandonment.productsViewed(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed.arguments.last)
* [App.channels(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels.arguments.first)
* [App.channels(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels.arguments.last)
* [App​Catalog.apps(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps.arguments.first)
* [App​Catalog.apps(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps.arguments.last)
* [App​Catalog.channels(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels.arguments.first)
* [App​Catalog.channels(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels.arguments.last)
* [App​Installation.allSubscriptions(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions.arguments.first)
* [App​Installation.allSubscriptions(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions.arguments.last)
* [App​Installation.credits(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.first)
* [App​Installation.credits(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.last)
* [App​Installation.metafields(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.first)
* [App​Installation.metafields(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.last)
* [App​Installation.oneTimePurchases(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.first)
* [App​Installation.oneTimePurchases(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.last)
* [App​Installation.revenueAttributionRecords(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords.arguments.first)
* [App​Installation.revenueAttributionRecords(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords.arguments.last)
* [App​Subscription​Line​Item.usageRecords(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.first)
* [App​Subscription​Line​Item.usageRecords(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.last)
* [Article.comments(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments.arguments.first)
* [Article.comments(last)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments.arguments.last)
* [Article.commentsCount(limit)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.commentsCount.arguments.limit)
* [Article.events(first)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events.arguments.first)

---
<a id="job-result"></a>

## Job​Result

interface

A job corresponds to some long running task that the client should poll for status.

### Fields

* done

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  This indicates if the job is still queued or has been run.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID that's returned when running an asynchronous mutation.

***

###### Variables

```json
{
	"done": "",
	"id": ""
}
```

###### Schema

```graphql
interface JobResult {
  done: Boolean!
  id: ID!
}
```

---
<a id="json"></a>

## JSON

scalar

A [JSON](https://www.json.org/json-en.html) object.

Example value: `{ "product": { "id": "gid://shopify/Product/1346443542550", "title": "White T-shirt", "options": [{ "name": "Size", "values": ["M", "L"] }] } }`

### Map

#### Fields with this scalar

* [Basic​Event.additionalContent](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.additionalContent)
* [Basic​Event.additionalData](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.additionalData)
* [Basic​Event.arguments](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent#field-BasicEvent.fields.arguments)
* [Fulfillment​Order​Merchant​Request.requestOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest#field-FulfillmentOrderMerchantRequest.fields.requestOptions)
* [Fulfillment​Order​Merchant​Request.responseData](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest#field-FulfillmentOrderMerchantRequest.fields.responseData)
* [Metafield.jsonValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.jsonValue)
* [Metaobject​Field.jsonValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.jsonValue)
* [Order​Transaction.receiptJson](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.receiptJson)
* [Shopifyql​Table​Data.rows](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyqlTableData#field-ShopifyqlTableData.fields.rows)
* [Web​Pixel.settings](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebPixel#field-WebPixel.fields.settings)

#### Inputs with this scalar

* [Marketing​Activity​Update​Input.errors](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateInput#fields-errors)
* [Order​Create​Order​Transaction​Input.receiptJson](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-receiptJson)
* [Web​Pixel​Input.settings](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebPixelInput#fields-settings)

#### Arguments with this scalar

* [flow​Trigger​Receive.payload](https://shopify.dev/docs/api/admin-graphql/latest/mutations/flowTriggerReceive#arguments-payload)

---
<a id="legacy-interoperability"></a>

## Legacy​Interoperability

interface

Interoperability metadata for types that directly correspond to a REST Admin API resource. For example, on the Product type, LegacyInteroperability returns metadata for the corresponding [Product object](https://shopify.dev/api/admin-graphql/latest/objects/product) in the REST Admin API.

### Fields

* legacy​Resource​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

  non-null

  The ID of the corresponding resource in the REST Admin API.

***

###### Variables

```json
{
	"legacyResourceId": ""
}
```

###### Schema

```graphql
interface LegacyInteroperability {
  legacyResourceId: UnsignedInt64!
}
```

---
<a id="market-region"></a>

## Market​Region

interface

Requires `read_markets` for queries and both `read_markets` as well as `write_markets` for mutations.

A geographic region which comprises a market.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the region.

***

###### Variables

```json
{
	"id": "",
	"name": ""
}
```

###### Schema

```graphql
interface MarketRegion {
  id: ID!
  name: String!
}
```

---
<a id="media"></a>

## Media

interface

Requires `read_products` access scope, `read_files` access scope, `read_themes` access scope, `read_orders` access scope, `read_draft_orders` access scope, `read_images` access scope or `read_quick_sale` access scope.

Represents a media interface.

### Fields

* alt

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType)

  non-null

  The media content type.

* media​Errors

  [\[Media​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaError)

  non-null

  Any errors which have occurred on the media.

* media​Warnings

  [\[Media​Warning!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaWarning)

  non-null

  The warnings attached to the media.

* preview

  [Media​Preview​Image](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaPreviewImage)

  The preview image for the media.

* status

  [Media​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaStatus)

  non-null

  Current status of the media.

***

###### Variables

```json
{
	"alt": "",
	"id": "",
	"mediaContentType": "",
	"mediaErrors": "",
	"mediaWarnings": "",
	"preview": "",
	"status": ""
}
```

###### Schema

```graphql
interface Media {
  alt: String
  id: ID!
  mediaContentType: MediaContentType!
  mediaErrors: [MediaError!]!
  mediaWarnings: [MediaWarning!]!
  preview: MediaPreviewImage
  status: MediaStatus!
}
```

---
<a id="metafield-reference"></a>

## Metafield​Reference

union

The resource referenced by the metafield value.

### Fields with this union

* [Metafield.reference](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.reference)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

* [Metafield.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple MetafieldReferences.

* [Metafield​Reference​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldReferenceEdge#field-MetafieldReferenceEdge.fields.node)

  OBJECT

  An auto-generated type which holds one MetafieldReference and a cursor during pagination.

* [Metaobject​Field.reference](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.reference)

  OBJECT

  Provides a field definition and the data value assigned to it.

* [Metaobject​Field.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

  OBJECT

  Provides a field definition and the data value assigned to it.

* [Metafield​Relation.target](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation#field-MetafieldRelation.fields.target)

  OBJECT

  Deprecated

***

```graphql
union MetafieldReference = Article | Collection | Company | Customer | GenericFile | MediaImage | Metaobject | Model3d | Order | Page | Product | ProductVariant | TaxonomyValue | Video
```

---
<a id="metafield-referencer"></a>

## Metafield​Referencer

union

Types of resources that may use metafields to reference other resources.

### Fields with this union

* [Metafield​Relation.referencer](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation#field-MetafieldRelation.fields.referencer)

  OBJECT

  Defines a relation between two resources via a reference metafield. The referencer owns the joining field with a given namespace and key, while the target is referenced by the field.

***

```graphql
union MetafieldReferencer = AppInstallation | Article | Blog | Collection | Company | CompanyLocation | Customer | DeliveryCustomization | DiscountAutomaticNode | DiscountCodeNode | DiscountNode | DraftOrder | FulfillmentOrder | Location | Market | Metaobject | Order | Page | PaymentCustomization | Product | ProductVariant | Shop
```

---
<a id="mobile-platform-application"></a>

## Mobile​Platform​Application

union

Requires `read_mobile_platform_applications` access scope. Please contact Shopify Support to enable this scope for your app.

You can use the `MobilePlatformApplication` resource to enable [shared web credentials](https://developer.apple.com/documentation/security/shared_web_credentials) for Shopify iOS apps, as well as to create [iOS universal link](https://developer.apple.com/ios/universal-links/) or [Android app link](https://developer.android.com/training/app-links/) verification endpoints for merchant Shopify iOS or Android apps. Shared web credentials let iOS users access a native app after logging into the respective website in Safari without re-entering their username and password. If a user changes their credentials in the app, then those changes are reflected in Safari. You must use a custom domain to integrate shared web credentials with Shopify. With each platform's link system, users can tap a link to a shop's website and get seamlessly redirected to a merchant's installed app without going through a browser or manually selecting an app.

For full configuration instructions on iOS shared web credentials, see the [associated domains setup](https://developer.apple.com/documentation/security/password_autofill/setting_up_an_app_s_associated_domains) technical documentation.

For full configuration instructions on iOS universal links or Android App Links, see the respective [iOS universal link](https://developer.apple.com/documentation/uikit/core_app/allowing_apps_and_websites_to_link_to_your_content) or [Android app link](https://developer.android.com/training/app-links) technical documentation.

### Fields with this union

* [Mobile​Platform​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple MobilePlatformApplications.

* [Mobile​Platform​Application​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge#field-MobilePlatformApplicationEdge.fields.node)

  OBJECT

  An auto-generated type which holds one MobilePlatformApplication and a cursor during pagination.

***

```graphql
union MobilePlatformApplication = AndroidApplication | AppleApplication
```

---
<a id="money"></a>

## Money

scalar

A monetary value string without a currency symbol or code. Example value: `"100.57"`.

### Map

#### Fields with this scalar

* [Price​Rule​Fixed​Amount​Value.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleFixedAmountValue#field-PriceRuleFixedAmountValue.fields.amount)
* [Price​Rule​Money​Range.greaterThan](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.greaterThan)
* [Price​Rule​Money​Range.greaterThanOrEqualTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.greaterThanOrEqualTo)
* [Price​Rule​Money​Range.lessThan](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.lessThan)
* [Price​Rule​Money​Range.lessThanOrEqualTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.lessThanOrEqualTo)
* [Product​Variant.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.compareAtPrice)
* [Product​Variant.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.price)

#### Inputs with this scalar

* [Draft​Order​Applied​Discount​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-amount)
* [Draft​Order​Line​Item​Input.originalUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-originalUnitPrice)
* [Order​Capture​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput#fields-amount)
* [Order​Transaction​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput#fields-amount)
* [Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput#fields-price)
* [Product​Variant​Set​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-price)
* [Product​Variant​Set​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-compareAtPrice)
* [Product​Variants​Bulk​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-compareAtPrice)
* [Product​Variants​Bulk​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-price)
* [Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput#fields-price)
* [Shipping​Refund​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingRefundInput#fields-amount)

#### Arguments with this scalar

* [Order.suggestedRefund(shippingAmount)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.suggestedRefund.arguments.shippingAmount)

---
<a id="navigable"></a>

## Navigable

interface

A default cursor that you can use in queries to paginate your results. Each edge in a connection can return a cursor, which is a reference to the edge's position in the connection. You can use an edge's cursor as the starting point to retrieve the nodes before or after it in a connection.

To learn more about using cursor-based pagination, refer to [Paginating results with GraphQL](https://shopify.dev/api/usage/pagination-graphql).

### Fields

* default​Cursor

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A default [cursor](https://shopify.dev/api/usage/pagination-graphql) that returns the single next record, sorted ascending by ID.

***

###### Variables

```json
{
	"defaultCursor": ""
}
```

###### Schema

```graphql
interface Navigable {
  defaultCursor: String!
}
```

---
<a id="online-store-previewable"></a>

## Online​Store​Previewable

interface

Online Store preview URL of the object.

### Fields

* online​Store​Preview​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The [preview URL](https://help.shopify.com/manual/online-store/setting-up#preview-your-store) for the online store.

***

###### Variables

```json
{
	"onlineStorePreviewUrl": ""
}
```

###### Schema

```graphql
interface OnlineStorePreviewable {
  onlineStorePreviewUrl: URL
}
```

---
<a id="online-store-theme-file-body"></a>

## Online​Store​Theme​File​Body

union

Requires `read_themes` access scope.

Represents the body of a theme file.

### Fields with this union

* [Online​Store​Theme​File.body](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile#field-OnlineStoreThemeFile.fields.body)

  OBJECT

  Represents a theme file.

***

```graphql
union OnlineStoreThemeFileBody = OnlineStoreThemeFileBodyBase64 | OnlineStoreThemeFileBodyText | OnlineStoreThemeFileBodyUrl
```

---
<a id="order-staged-change"></a>

## Order​Staged​Change

union

Requires `read_order_edits` access scope.

A change that has been applied to an order.

### Fields with this union

* [Calculated​Line​Item.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem#field-CalculatedLineItem.fields.stagedChanges)

  OBJECT

  A line item involved in order editing that may be newly added or have new changes applied.

* [Calculated​Order.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.stagedChanges)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

* [Order​Staged​Change​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple OrderStagedChanges.

* [Order​Staged​Change​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeEdge#field-OrderStagedChangeEdge.fields.node)

  OBJECT

  An auto-generated type which holds one OrderStagedChange and a cursor during pagination.

***

```graphql
union OrderStagedChange = OrderStagedChangeAddCustomItem | OrderStagedChangeAddLineItemDiscount | OrderStagedChangeAddShippingLine | OrderStagedChangeAddVariant | OrderStagedChangeDecrementItem | OrderStagedChangeIncrementItem | OrderStagedChangeRemoveDiscount | OrderStagedChangeRemoveShippingLine
```

---
<a id="payment-details"></a>

## Payment​Details

union

Requires `read_orders` access scope.

Payment details related to a transaction.

### Fields with this union

* [Order​Transaction.paymentDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentDetails)

  OBJECT

  The `OrderTransaction` object represents a payment transaction that's associated with an order. An order transaction is a specific action or event that happens within the context of an order, such as a customer paying for a purchase or receiving a refund, or other payment-related activity.

  Use the `OrderTransaction` object to capture the complete lifecycle of a payment, from initial authorization to final settlement, including refunds and currency exchanges. Common use cases for using the `OrderTransaction` object include:

  * Processing new payments for orders
  * Managing payment authorizations and captures
  * Processing refunds for returned items
  * Tracking payment status and errors
  * Managing multi-currency transactions
  * Handling payment gateway integrations

  Each `OrderTransaction` object has a [`kind`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionKind) that defines the type of transaction and a [`status`](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderTransactionStatus) that indicates the current state of the transaction. The object stores detailed information about payment methods, gateway processing, and settlement details.

  Learn more about [payment processing](https://help.shopify.com/manual/payments) and [payment gateway integrations](https://www.shopify.com/ca/payment-gateways).

* [Suggested​Order​Transaction.paymentDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedOrderTransaction#field-SuggestedOrderTransaction.fields.paymentDetails)

  OBJECT

  A suggested transaction. Suggested transaction are usually used in the context of refunds and exchanges.

***

```graphql
union PaymentDetails = CardPaymentDetails | LocalPaymentMethodsPaymentDetails | PaypalWalletPaymentDetails | ShopPayInstallmentsPaymentDetails
```

---
<a id="payment-instrument"></a>

## Payment​Instrument

union

Requires `read_payment_mandate` access scope.

All possible instrument outputs for Payment Mandates.

### Fields with this union

* [Payment​Mandate.paymentInstrument](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandate#field-PaymentMandate.fields.paymentInstrument)

  OBJECT

  A payment instrument and the permission the owner of the instrument gives to the merchant to debit it.

***

```graphql
union PaymentInstrument = BankAccount | VaultCreditCard | VaultPaypalBillingAgreement
```

---
<a id="price-rule-value"></a>

## Price​Rule​Value

union

Requires `read_price_rules` access scope.

The type of the price rule value. The price rule value might be a percentage value, or a fixed amount.

### Fields with this union

* [Price​Rule.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.value)

  OBJECT

  Deprecated

***

```graphql
union PriceRuleValue = PriceRuleFixedAmountValue | PriceRulePercentValue
```

---
<a id="pricing-value"></a>

## Pricing​Value

union

The type of value given to a customer when a discount is applied to an order. For example, the application of the discount might give the customer a percentage off a specified item. Alternatively, the application of the discount might give the customer a monetary value in a given currency off an order.

### Fields with this union

* [Automatic​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.value)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

* [Calculated​Automatic​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.value)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-value)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.value)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.value)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.value)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

* [Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication#fields-value)

  INTERFACE

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Discount​Code​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.value)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Manual​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.value)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Order​Staged​Change​Add​Line​Item​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount#field-OrderStagedChangeAddLineItemDiscount.fields.value)

  OBJECT

  The discount applied to an item that was added during the current order edit.

* [Price​Rule.valueV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.valueV2)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  **Note:** Use the types and queries included our \<a href="https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started">discount tutorials\</a> instead. These will replace the GraphQL Admin API\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> object and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\</span>\</code>\</a> union, and the REST Admin API\&#39;s deprecated\<a href="https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> resource.

  ***

* [Script​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.value)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

***

```graphql
union PricingValue = MoneyV2 | PricingPercentageValue
```

---
<a id="product-operation"></a>

## Product​Operation

interface

Requires `read_products` access scope.

An interface representing asynchronous operations on products. Tracks the status and details of background product mutations like `productSet`, `productDelete`, `productDuplicate`, and `productBundle` operations. Provides status field (CREATED, ACTIVE, COMPLETE) and product field to monitor long-running product operations.

### Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product on which the operation is being performed.

* status

  [Product​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOperationStatus)

  non-null

  The status of this operation.

***

###### Variables

```json
{
	"product": "",
	"status": ""
}
```

###### Schema

```graphql
interface ProductOperation {
  product: Product
  status: ProductOperationStatus!
}
```

---
<a id="publication-operation"></a>

## Publication​Operation

union

Requires The user must have `read_products` or `read_publications` access.

The possible types of publication operations.

### Fields with this union

* [Publication.operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.operation)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

***

```graphql
union PublicationOperation = AddAllProductsOperation | CatalogCsvOperation | PublicationResourceOperation
```

---
<a id="publishable"></a>

## Publishable

interface

Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

### Fields

* available​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

* published​On​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the resource is published to a specified [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * publication​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the publication to check. For example, `id: "gid://shopify/Publication/123"`.

  ***

* resource​Publications

  [Resource​Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection)

  non-null

  The list of resources that are published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled to be published.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* resource​Publications​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that a resource is published to, without [feedback errors](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourceFeedback).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* resource​Publications​V2

  [Resource​Publication​V2Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection)

  non-null

  The list of resources that are either published or staged to be published to a [publication](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Whether to return only the resources that are currently published. If false, then also returns the resources that are scheduled or staged to be published.

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Filter publications by catalog type.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* unpublished​Publications

  [Publication​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection)

  non-null

  The list of [publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) that the resource isn't published to.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

#### Deprecated fields

* publication​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

  * only​Published

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    ### Arguments

    Include only the resource's publications that are published. If false, then return all the resource's publications including future publications.

  ***

* published​On​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

  * channel​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the channel to check.

  ***

* published​On​Current​Channel

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* published​On​Current​Publication

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-nullDeprecated

* unpublished​Channels

  [Channel​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection)

  non-nullDeprecated

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

###### Variables

```json
{
	"availablePublicationsCount": "",
	"publicationCount": {
		"onlyPublished": ""
	},
	"publishedOnChannel": {
		"channelId": ""
	},
	"publishedOnCurrentChannel": "",
	"publishedOnCurrentPublication": "",
	"publishedOnPublication": {
		"publicationId": ""
	},
	"resourcePublications": {
		"onlyPublished": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"resourcePublicationsCount": {
		"onlyPublished": ""
	},
	"resourcePublicationsV2": {
		"onlyPublished": "",
		"catalogType": "",
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"unpublishedChannels": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"unpublishedPublications": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	}
}
```

###### Schema

```graphql
interface Publishable {
  availablePublicationsCount: Count
  publicationCount: Int!
  publishedOnChannel: Boolean!
  publishedOnCurrentChannel: Boolean!
  publishedOnCurrentPublication: Boolean!
  publishedOnPublication: Boolean!
  resourcePublications: ResourcePublicationConnection!
  resourcePublicationsCount: Count
  resourcePublicationsV2: ResourcePublicationV2Connection!
  unpublishedChannels: ChannelConnection!
  unpublishedPublications: PublicationConnection!
}
```

---
<a id="purchasing-entity"></a>

## Purchasing​Entity

union

Requires The user must have access to customers and orders or draft orders.

Represents information about the purchasing entity for the order or draft order.

### Fields with this union

* [Calculated​Draft​Order.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrder#field-CalculatedDraftOrder.fields.purchasingEntity)

  OBJECT

  Calculated pricing, taxes, and discounts for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). Includes the complete financial breakdown with line items, discounts, shipping costs, tax calculations, and totals in both shop and presentment currencies.

  Available [`ShippingRate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingRate) options are included when a valid shipping address and line items are present.

  ***

  **Note:** Returns alerts and warnings when issues occur during calculation, such as insufficient inventory or incompatible discounts.

  ***

* [Draft​Order.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.purchasingEntity)

  OBJECT

  An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers to pay with a secure checkout link.
  * Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

  **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

* [Order.purchasingEntity](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.purchasingEntity)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  **Note:** Only the last 60 days\&#39; worth of orders from a store are accessible from the \<code>Order\</code> object by default. If you want to access older records, then you need to \<a href="https://shopify.dev/docs/api/usage/access-scopes#orders-permissions">request access to all orders\</a>. If your app is granted access, then you can add the \<code>\<span class="PreventFireFoxApplyingGapToWBR">read\<wbr/>\_all\<wbr/>\_orders\</span>\</code>, \<code>\<span class="PreventFireFoxApplyingGapToWBR">read\<wbr/>\_orders\</span>\</code>, and \<code>\<span class="PreventFireFoxApplyingGapToWBR">write\<wbr/>\_orders\</span>\</code> scopes.

  ***

  ***

  **Caution:** Only use orders data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

***

```graphql
union PurchasingEntity = Customer | PurchasingCompany
```

---
<a id="resource-operation"></a>

## Resource​Operation

interface

Requires `read_products` access scope or `read_publications` access scope.

Represents a merchandising background operation interface.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* processed​Row​Count

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The count of processed rows, summing imported, failed, and skipped rows.

* row​Count

  [Row​Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/RowCount)

  Represents a rows objects within this background operation.

* status

  [Resource​Operation​Status!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ResourceOperationStatus)

  non-null

  The status of this operation.

***

###### Variables

```json
{
	"id": "",
	"processedRowCount": "",
	"rowCount": "",
	"status": ""
}
```

###### Schema

```graphql
interface ResourceOperation {
  id: ID!
  processedRowCount: Int
  rowCount: RowCount
  status: ResourceOperationStatus!
}
```

---
<a id="return-line-item-type"></a>

## Return​Line​Item​Type

interface

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

A return line item of any type.

### Fields

* customer​Note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A note from the customer that describes the item to be returned. Maximum length: 300 characters.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  A globally-unique ID.

* processable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that can be processed.

* processed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that has been processed.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity being returned.

* refundable​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that can be refunded.

* refunded​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that was refunded.

* return​Reason​Definition

  [Return​Reason​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  The standardized reason for why the item is being returned.

* return​Reason​Note

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  Additional information about the reason for the return. Maximum length: 255 characters.

* unprocessed​Quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity that has't been processed.

* return​Reason

  [Return​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReason)

  non-nullDeprecated

***

###### Variables

```json
{
	"customerNote": "",
	"id": "",
	"processableQuantity": "",
	"processedQuantity": "",
	"quantity": "",
	"refundableQuantity": "",
	"refundedQuantity": "",
	"returnReason": "",
	"returnReasonDefinition": "",
	"returnReasonNote": "",
	"unprocessedQuantity": ""
}
```

###### Schema

```graphql
interface ReturnLineItemType {
  customerNote: String
  id: ID!
  processableQuantity: Int!
  processedQuantity: Int!
  quantity: Int!
  refundableQuantity: Int!
  refundedQuantity: Int!
  returnReason: ReturnReason!
  returnReasonDefinition: ReturnReasonDefinition
  returnReasonNote: String!
  unprocessedQuantity: Int!
}
```

---
<a id="return-outcome-financial-transfer"></a>

## Return​Outcome​Financial​Transfer

union

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The financial transfer details for the return outcome.

### Fields with this union

* [Suggested​Return​Financial​Outcome.financialTransfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/SuggestedReturnFinancialOutcome#field-SuggestedReturnFinancialOutcome.fields.financialTransfer)

  OBJECT

  Represents a return financial outcome suggested by Shopify based on the items being reimbursed. You can then use the suggested outcome object to generate an actual refund or invoice for the return.

***

```graphql
union ReturnOutcomeFinancialTransfer = InvoiceReturnOutcome | RefundReturnOutcome
```

---
<a id="reverse-delivery-deliverable"></a>

## Reverse​Delivery​Deliverable

union

Requires `read_returns` access scope or `read_marketplace_returns` access scope.

The delivery method and artifacts associated with a reverse delivery.

### Fields with this union

* [Reverse​Delivery.deliverable](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.deliverable)

  OBJECT

  A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant. For example, a buyer requests a return, and a merchant sends the buyer a shipping label. The reverse delivery contains the context of the items sent back, how they're being sent back (for example, a shipping label), and the current state of the delivery (tracking information).

***

```graphql
union ReverseDeliveryDeliverable = ReverseDeliveryShippingDeliverable
```

---
<a id="sale"></a>

## Sale

interface

Requires `read_orders` access scope.

An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType)

  non-null

  The type of order action that the sale represents.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType)

  non-null

  The line type assocated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The number of units either ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleTax)

  non-null

  All individual taxes associated with the sale.

* total​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The total amount of taxes for the sale.

***

###### Variables

```json
{
	"actionType": "",
	"id": "",
	"lineType": "",
	"quantity": "",
	"taxes": "",
	"totalAmount": "",
	"totalDiscountAmountAfterTaxes": "",
	"totalDiscountAmountBeforeTaxes": "",
	"totalTaxAmount": ""
}
```

###### Schema

```graphql
interface Sale {
  actionType: SaleActionType!
  id: ID!
  lineType: SaleLineType!
  quantity: Int
  taxes: [SaleTax!]!
  totalAmount: MoneyBag!
  totalDiscountAmountAfterTaxes: MoneyBag!
  totalDiscountAmountBeforeTaxes: MoneyBag!
  totalTaxAmount: MoneyBag!
}
```

---
<a id="sales-agreement"></a>

## Sales​Agreement

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

### Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The application that created the agreement.

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time at which the agreement occured.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderActionType)

  non-null

  The reason the agremeent was created.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* user

  [Staff​Member](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  The staff member associated with the agreement.

***

###### Variables

```json
{
	"app": "",
	"happenedAt": "",
	"id": "",
	"reason": "",
	"sales": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"user": ""
}
```

###### Schema

```graphql
interface SalesAgreement {
  app: App
  happenedAt: DateTime!
  id: ID!
  reason: OrderActionType!
  sales: SaleConnection!
  user: StaffMember
}
```

---
<a id="segment-filter"></a>

## Segment​Filter

interface

Requires `read_customers` access scope.

The filters used in segment queries associated with a shop.

### Fields

* localized​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The localized name of the filter.

* multi​Value

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether a file can have multiple values for a single customer.

* query​Name

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The query name of the filter.

***

###### Variables

```json
{
	"localizedName": "",
	"multiValue": "",
	"queryName": ""
}
```

###### Schema

```graphql
interface SegmentFilter {
  localizedName: String!
  multiValue: Boolean!
  queryName: String!
}
```

---
<a id="selling-plan-billing-policy"></a>

## Selling​Plan​Billing​Policy

union

Requires `read_products` access scope.

Represents the billing frequency associated to the selling plan (for example, bill every week, or bill every three months). The selling plan billing policy and associated records (selling plan groups, selling plans, pricing policies, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

### Fields with this union

* [Selling​Plan.billingPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.billingPolicy)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  **Caution:** Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

***

```graphql
union SellingPlanBillingPolicy = SellingPlanFixedBillingPolicy | SellingPlanRecurringBillingPolicy
```

---
<a id="selling-plan-checkout-charge-value"></a>

## Selling​Plan​Checkout​Charge​Value

union

Requires `read_products` access scope.

The portion of the price to be charged at checkout.

### Fields with this union

* [Selling​Plan​Checkout​Charge.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanCheckoutCharge#field-SellingPlanCheckoutCharge.fields.value)

  OBJECT

  The amount charged at checkout when the full amount isn't charged at checkout.

***

```graphql
union SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue
```

---
<a id="selling-plan-delivery-policy"></a>

## Selling​Plan​Delivery​Policy

union

Requires `read_products` access scope.

Represents the delivery frequency associated to the selling plan (for example, deliver every month, or deliver every other week). The selling plan delivery policy and associated records (selling plan groups, selling plans, pricing policies, and billing policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

### Fields with this union

* [Selling​Plan.deliveryPolicy](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.deliveryPolicy)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  **Caution:** Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

***

```graphql
union SellingPlanDeliveryPolicy = SellingPlanFixedDeliveryPolicy | SellingPlanRecurringDeliveryPolicy
```

---
<a id="selling-plan-pricing-policy"></a>

## Selling​Plan​Pricing​Policy

union

Requires `read_products` access scope.

Represents the type of pricing associated to the selling plan (for example, a $10 or 20% discount that is set for a limited period or that is fixed for the duration of the subscription). Selling plan pricing policies and associated records (selling plan groups, selling plans, billing policy, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.

### Fields with this union

* [Selling​Plan.pricingPolicies](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.pricingPolicies)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  **Caution:** Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

***

```graphql
union SellingPlanPricingPolicy = SellingPlanFixedPricingPolicy | SellingPlanRecurringPricingPolicy
```

---
<a id="selling-plan-pricing-policy-adjustment-value"></a>

## Selling​Plan​Pricing​Policy​Adjustment​Value

union

Requires `read_products` access scope.

Represents a selling plan pricing policy adjustment value type.

### Fields with this union

* [Selling​Plan​Fixed​Pricing​Policy.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanFixedPricingPolicy#field-SellingPlanFixedPricingPolicy.fields.adjustmentValue)

  OBJECT

  Represents the pricing policy of a subscription or deferred purchase option selling plan. The selling plan fixed pricing policy works with the billing and delivery policy to determine the final price. Discounts are divided among fulfillments. For example, a subscription with a $10 discount and two deliveries will have a $5 discount applied to each delivery.

* [Selling​Plan​Pricing​Policy​Base.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SellingPlanPricingPolicyBase#fields-adjustmentValue)

  INTERFACE

  Represents selling plan pricing policy common fields.

* [Selling​Plan​Recurring​Pricing​Policy.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanRecurringPricingPolicy#field-SellingPlanRecurringPricingPolicy.fields.adjustmentValue)

  OBJECT

  Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options.

* [Subscription​Cycle​Price​Adjustment.adjustmentValue](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionCyclePriceAdjustment#field-SubscriptionCyclePriceAdjustment.fields.adjustmentValue)

  OBJECT

  Represents a Subscription Line Pricing Cycle Adjustment.

***

```graphql
union SellingPlanPricingPolicyAdjustmentValue = MoneyV2 | SellingPlanPricingPolicyPercentageValue
```

---
<a id="selling-plan-pricing-policy-base"></a>

## Selling​Plan​Pricing​Policy​Base

interface

Requires `read_products` access scope.

Represents selling plan pricing policy common fields.

### Fields

* adjustment​Type

  [Selling​Plan​Pricing​Policy​Adjustment​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanPricingPolicyAdjustmentType)

  non-null

  The price adjustment type.

* adjustment​Value

  [Selling​Plan​Pricing​Policy​Adjustment​Value!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)

  non-null

  The price adjustment value.

***

###### Variables

```json
{
	"adjustmentType": "",
	"adjustmentValue": ""
}
```

###### Schema

```graphql
interface SellingPlanPricingPolicyBase {
  adjustmentType: SellingPlanPricingPolicyAdjustmentType!
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue!
}
```

---
<a id="shopify-payments-charge-statement-descriptor"></a>

## Shopify​Payments​Charge​Statement​Descriptor

interface

Requires `read_shopify_payments` access scope.

The charge descriptors for a payments account.

### Fields

* default

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The default charge statement descriptor.

* prefix

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The prefix of the statement descriptor.

***

###### Variables

```json
{
	"default": "",
	"prefix": ""
}
```

###### Schema

```graphql
interface ShopifyPaymentsChargeStatementDescriptor {
  default: String
  prefix: String!
}
```

---
<a id="storefront-id"></a>

## Storefront​ID

scalar

Represents a unique identifier in the Storefront API. A `StorefrontID` value can be used wherever an ID is expected in the Storefront API.

Example value: `"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw"`.

### Map

---
<a id="store-credit-account-transaction"></a>

## Store​Credit​Account​Transaction

interface

Requires `read_store_credit_account_transactions` access scope.

Interface for a store credit account transaction.

### Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/admin-graphql/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/admin-graphql/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

###### Variables

```json
{
	"account": "",
	"amount": "",
	"balanceAfterTransaction": "",
	"createdAt": "",
	"event": "",
	"origin": ""
}
```

###### Schema

```graphql
interface StoreCreditAccountTransaction {
  account: StoreCreditAccount!
  amount: MoneyV2!
  balanceAfterTransaction: MoneyV2!
  createdAt: DateTime!
  event: StoreCreditSystemEvent!
  origin: StoreCreditAccountTransactionOrigin
}
```

---
<a id="store-credit-account-transaction-origin"></a>

## Store​Credit​Account​Transaction​Origin

union

The origin of a store credit account transaction.

### Fields with this union

* [Store​Credit​Account​Credit​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.origin)

  OBJECT

  A credit transaction which increases the store credit account balance.

* [Store​Credit​Account​Debit​Revert​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.origin)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

* [Store​Credit​Account​Debit​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.origin)

  OBJECT

  A debit transaction which decreases the store credit account balance.

* [Store​Credit​Account​Expiration​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.origin)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

* [Store​Credit​Account​Transaction.origin](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction#fields-origin)

  INTERFACE

  Interface for a store credit account transaction.

***

```graphql
union StoreCreditAccountTransactionOrigin = OrderTransaction
```

---
<a id="string"></a>

## String

scalar

Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.

### Map

#### Fields and connections with this scalar

* [Abandoned​Checkout.defaultCursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.defaultCursor)
* [Abandoned​Checkout.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.discountCodes)
* [Abandoned​Checkout.name](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.name)
* [Abandoned​Checkout.note](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.note)
* [Abandoned​Checkout​Edge.cursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge#field-AbandonedCheckoutEdge.fields.cursor)
* [Abandoned​Checkout​Line​Item.sku](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.sku)
* [Abandoned​Checkout​Line​Item.title](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.title)
* [Abandoned​Checkout​Line​Item.variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.variantTitle)
* [Abandoned​Checkout​Line​Item​Component.title](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent#field-AbandonedCheckoutLineItemComponent.fields.title)
* [Abandoned​Checkout​Line​Item​Component.variantTitle](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemComponent#field-AbandonedCheckoutLineItemComponent.fields.variantTitle)
* [Abandoned​Checkout​Line​Item​Edge.cursor](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge#field-AbandonedCheckoutLineItemEdge.fields.cursor)
* [Abandonment​Email​State​Update​User​Error.field](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError#field-AbandonmentEmailStateUpdateUserError.fields.field)
* [Abandonment​Email​State​Update​User​Error.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentEmailStateUpdateUserError#field-AbandonmentEmailStateUpdateUserError.fields.message)
* [Abandonment​Update​Activities​Delivery​Statuses​User​Error.field](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError#field-AbandonmentUpdateActivitiesDeliveryStatusesUserError.fields.field)
* [Abandonment​Update​Activities​Delivery​Statuses​User​Error.message](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonmentUpdateActivitiesDeliveryStatusesUserError#field-AbandonmentUpdateActivitiesDeliveryStatusesUserError.fields.message)
* [Access​Scope.description](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope#field-AccessScope.fields.description)
* [Access​Scope.handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope#field-AccessScope.fields.handle)
* [Additional​Fee.name](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFee#field-AdditionalFee.fields.name)
* [Android​Application.applicationId](https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication#field-AndroidApplication.fields.applicationId)
* [Android​Application.sha256CertFingerprints](https://shopify.dev/docs/api/admin-graphql/latest/objects/AndroidApplication#field-AndroidApplication.fields.sha256CertFingerprints)
* [Api​Version.displayName](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion#field-ApiVersion.fields.displayName)
* [Api​Version.handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/ApiVersion#field-ApiVersion.fields.handle)
* [App.apiKey](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.apiKey)
* [App.description](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.description)
* [App.developerName](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.developerName)
* [App.features](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.features)
* [App.handle](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.handle)
* [App.pricingDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.pricingDetails)
* [App.pricingDetailsSummary](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.pricingDetailsSummary)
* [App.title](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.title)

#### Inputs with this scalar

* [App​Usage​Pricing​Input.terms](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AppUsagePricingInput#fields-terms)
* [Article​Blog​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput#fields-title)
* [Article​Create​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-handle)
* [Article​Create​Input.templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-templateSuffix)
* [Article​Create​Input.tags](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-tags)
* [Article​Create​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput#fields-title)
* [Article​Image​Input.altText](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleImageInput#fields-altText)
* [Article​Image​Input.url](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleImageInput#fields-url)
* [Article​Update​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-handle)
* [Article​Update​Input.templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-templateSuffix)
* [Article​Update​Input.tags](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-tags)
* [Article​Update​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleUpdateInput#fields-title)
* [Attribute​Input.key](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput#fields-key)
* [Attribute​Input.value](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput#fields-value)
* [Author​Input.name](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AuthorInput#fields-name)
* [Blog​Create​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-handle)
* [Blog​Create​Input.templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-templateSuffix)
* [Blog​Create​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogCreateInput#fields-title)
* [Blog​Update​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-handle)
* [Blog​Update​Input.templateSuffix](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-templateSuffix)
* [Blog​Update​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BlogUpdateInput#fields-title)
* [Bundles​Draft​Order​Bundle​Line​Item​Component​Input.uuid](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/BundlesDraftOrderBundleLineItemComponentInput#fields-uuid)
* [Cash​Drawer​Update​Input.name](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CashDrawerUpdateInput#fields-name)
* [Catalog​Create​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogCreateInput#fields-title)
* [Catalog​Update​Input.title](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CatalogUpdateInput#fields-title)
* [Channel​Create​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput#fields-handle)
* [Channel​Create​Input.specificationHandle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput#fields-specificationHandle)
* [Channel​Create​Input.accountId](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput#fields-accountId)
* [Channel​Create​Input.accountName](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelCreateInput#fields-accountName)
* [Channel​Update​Input.handle](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ChannelUpdateInput#fields-handle)

#### Arguments with this scalar

* [Abandoned​Checkout.lineItems(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems.arguments.after)
* [Abandoned​Checkout.lineItems(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems.arguments.before)
* [Abandoned​Checkout​Line​Item.discountAllocations(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations.arguments.after)
* [Abandoned​Checkout​Line​Item.discountAllocations(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations.arguments.before)
* [Abandonment.productsAddedToCart(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart.arguments.after)
* [Abandonment.productsAddedToCart(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart.arguments.before)
* [Abandonment.productsViewed(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed.arguments.after)
* [Abandonment.productsViewed(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed.arguments.before)
* [App.channels(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels.arguments.after)
* [App.channels(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels.arguments.before)
* [App​Catalog.apps(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps.arguments.after)
* [App​Catalog.apps(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps.arguments.before)
* [App​Catalog.channels(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels.arguments.after)
* [App​Catalog.channels(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels.arguments.before)
* [App​Installation.allSubscriptions(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions.arguments.after)
* [App​Installation.allSubscriptions(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions.arguments.before)
* [App​Installation.credits(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.after)
* [App​Installation.credits(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits.arguments.before)
* [App​Installation.metafield(namespace)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafield.arguments.namespace)
* [App​Installation.metafield(key)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafield.arguments.key)
* [App​Installation.metafields(namespace)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.namespace)
* [App​Installation.metafields(keys)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.keys)
* [App​Installation.metafields(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.after)
* [App​Installation.metafields(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields.arguments.before)
* [App​Installation.oneTimePurchases(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.after)
* [App​Installation.oneTimePurchases(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases.arguments.before)
* [App​Installation.revenueAttributionRecords(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords.arguments.after)
* [App​Installation.revenueAttributionRecords(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords.arguments.before)
* [App​Subscription​Line​Item.usageRecords(after)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.after)
* [App​Subscription​Line​Item.usageRecords(before)](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords.arguments.before)

---
<a id="subscription-billing-attempt-action"></a>

## Subscription​Billing​Attempt​Action

union

Requires `read_own_subscription_contracts` access scope.

The action required to continue processing the billing attempt.

### Fields with this union

* [Subscription​Billing​Attempt​Action​Required​State.action](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptActionRequiredState#field-SubscriptionBillingAttemptActionRequiredState.fields.action)

  OBJECT

  The billing attempt state that requires an action to resolve. Must complete the action required for the billing attempt to continue being processed.

***

```graphql
union SubscriptionBillingAttemptAction = SubscriptionBillingAttemptPaymentChallenge
```

---
<a id="subscription-billing-attempt-error"></a>

## Subscription​Billing​Attempt​Error

union

Requires `read_own_subscription_contracts` access scope.

Possible error types for a subscription billing attempt.

### Fields with this union

* [Subscription​Billing​Attempt​Failed​State.error](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptFailedState#field-SubscriptionBillingAttemptFailedState.fields.error)

  OBJECT

  The billing attempt failed due to an error.

***

```graphql
union SubscriptionBillingAttemptError = SubscriptionBillingAttemptGeneralError | SubscriptionBillingAttemptInventoryError | SubscriptionBillingAttemptPaymentError | SubscriptionBillingAttemptUnexpectedError
```

---
<a id="subscription-billing-attempt-processing-error"></a>

## Subscription​Billing​Attempt​Processing​Error

interface

An error that prevented a billing attempt.

### Fields

* code

  [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

  non-null

  The code for the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An explanation of the error.

***

###### Variables

```json
{
	"code": "",
	"message": ""
}
```

###### Schema

```graphql
interface SubscriptionBillingAttemptProcessingError {
  code: SubscriptionBillingAttemptErrorCode!
  message: String!
}
```

---
<a id="subscription-billing-attempt-state"></a>

## Subscription​Billing​Attempt​State

union

Requires `read_own_subscription_contracts` access scope.

The state of a subscription billing attempt with state-specific data.

### Fields with this union

* [Subscription​Billing​Attempt.state](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.state)

  OBJECT

  A record of an execution of the subscription billing process. Billing attempts use idempotency keys to avoid duplicate order creation.

  When a billing attempt completes successfully, it creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The attempt includes associated payment transactions and any errors that occur during billing. If 3D Secure authentication is required, the `nextActionUrl` field provides the redirect URL for customer verification.

***

```graphql
union SubscriptionBillingAttemptState = SubscriptionBillingAttemptActionRequiredState | SubscriptionBillingAttemptFailedState | SubscriptionBillingAttemptPendingState | SubscriptionBillingAttemptSuccessState
```

---
<a id="subscription-contract-base"></a>

## Subscription​Contract​Base

interface

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Represents subscription contract common fields.

### Fields

* app

  [App](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  The subscription app that the subscription contract is registered to.

* app​Admin​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  The URL of the subscription contract page on the subscription app.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The currency that's used for the subscription contract.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Attribute)

  non-null

  A list of the custom attributes to be added to the generated orders.

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom the subscription contract belongs.

* customer​Payment​Method

  [Customer​Payment​Method](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  The customer payment method that's used for the subscription contract.

  * show​Revoked

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to show the customer's revoked payment method.

  ***

* delivery​Method

  [Subscription​Delivery​Method](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDeliveryMethod)

  The delivery method for each billing of the subscription contract.

* delivery​Price

  [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  non-null

  The delivery price for each billing of the subscription contract.

* discounts

  [Subscription​Manual​Discount​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection)

  non-null

  The list of subscription discounts associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection)

  non-null

  The list of subscription lines associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines​Count

  [Count](https://shopify.dev/docs/api/admin-graphql/latest/objects/Count)

  The number of lines associated with the subscription contract.

* note

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The note field that will be applied to the generated orders.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection)

  non-null

  A list of the subscription contract's orders.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was updated.

* line​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

***

###### Variables

```json
{
	"app": "",
	"appAdminUrl": "",
	"currencyCode": "",
	"customAttributes": "",
	"customer": "",
	"customerPaymentMethod": {
		"showRevoked": ""
	},
	"deliveryMethod": "",
	"deliveryPrice": "",
	"discounts": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"lineCount": "",
	"lines": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"linesCount": "",
	"note": "",
	"orders": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
	"updatedAt": ""
}
```

###### Schema

```graphql
interface SubscriptionContractBase {
  app: App
  appAdminUrl: URL
  currencyCode: CurrencyCode!
  customAttributes: [Attribute!]!
  customer: Customer
  customerPaymentMethod: CustomerPaymentMethod
  deliveryMethod: SubscriptionDeliveryMethod
  deliveryPrice: MoneyV2!
  discounts: SubscriptionManualDiscountConnection!
  lineCount: Int!
  lines: SubscriptionLineConnection!
  linesCount: Count
  note: String
  orders: OrderConnection!
  updatedAt: DateTime!
}
```

---
<a id="subscription-delivery-method"></a>

## Subscription​Delivery​Method

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Describes the delivery method to use to get the physical goods to the customer.

### Fields with this union

* [Subscription​Billing​Cycle​Edited​Contract.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.deliveryMethod)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.deliveryMethod)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-deliveryMethod)

  INTERFACE

  Represents subscription contract common fields.

* [Subscription​Draft.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.deliveryMethod)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

***

```graphql
union SubscriptionDeliveryMethod = SubscriptionDeliveryMethodLocalDelivery | SubscriptionDeliveryMethodPickup | SubscriptionDeliveryMethodShipping
```

---
<a id="subscription-delivery-option"></a>

## Subscription​Delivery​Option

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The delivery option for a subscription contract.

### Fields with this union

* [Subscription​Delivery​Option​Result​Success.deliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryOptionResultSuccess#field-SubscriptionDeliveryOptionResultSuccess.fields.deliveryOptions)

  OBJECT

  The delivery option for a subscription contract.

***

```graphql
union SubscriptionDeliveryOption = SubscriptionLocalDeliveryOption | SubscriptionPickupOption | SubscriptionShippingOption
```

---
<a id="subscription-delivery-option-result"></a>

## Subscription​Delivery​Option​Result

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The result of the query to fetch delivery options for the subscription contract.

### Fields with this union

* [Subscription​Draft.deliveryOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.deliveryOptions)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

***

```graphql
union SubscriptionDeliveryOptionResult = SubscriptionDeliveryOptionResultFailure | SubscriptionDeliveryOptionResultSuccess
```

---
<a id="subscription-discount"></a>

## Subscription​Discount

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

Subscription draft discount types.

### Fields with this union

* [Subscription​Discount​Allocation.discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountAllocation#field-SubscriptionDiscountAllocation.fields.discount)

  OBJECT

  Represents what a particular discount reduces from a line price.

* [Subscription​Discount​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple SubscriptionDiscounts.

* [Subscription​Discount​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEdge#field-SubscriptionDiscountEdge.fields.node)

  OBJECT

  An auto-generated type which holds one SubscriptionDiscount and a cursor during pagination.

* [Subscription​Draft.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discounts)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsAdded)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsRemoved)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

* [Subscription​Draft.discountsUpdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsUpdated)

  OBJECT

  The `SubscriptionDraft` object represents a draft version of a [subscription contract](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract) before it's committed. It serves as a staging area for making changes to an existing subscription or creating a new one. The draft allows you to preview and modify various aspects of a subscription before applying the changes.

  Use the `SubscriptionDraft` object to:

  * Add, remove, or modify subscription lines and their quantities
  * Manage discounts (add, remove, or update manual and code-based discounts)
  * Configure delivery options and shipping methods
  * Set up billing and delivery policies
  * Manage customer payment methods
  * Add custom attributes and notes to generated orders
  * Configure billing cycles and next billing dates
  * Preview the projected state of the subscription

  Each `SubscriptionDraft` object maintains a projected state that shows how the subscription will look after the changes are committed. This allows you to preview the impact of your modifications before applying them. The draft can be associated with an existing subscription contract (for modifications) or used to create a new subscription.

  The draft remains in a draft state until it's committed, at which point the changes are applied to the subscription contract and the draft is no longer accessible.

  Learn more about [how subscription contracts work](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts) and how to [build](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract), [update](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract), and [combine](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/combine-subscription-contracts) subscription contracts.

***

```graphql
union SubscriptionDiscount = SubscriptionAppliedCodeDiscount | SubscriptionManualDiscount
```

---
<a id="subscription-discount-value"></a>

## Subscription​Discount​Value

union

Requires `read_own_subscription_contracts` access scope.

The value of the discount and how it will be applied.

### Fields with this union

* [Subscription​Manual​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount#field-SubscriptionManualDiscount.fields.value)

  OBJECT

  Custom subscription discount.

***

```graphql
union SubscriptionDiscountValue = SubscriptionDiscountFixedAmountValue | SubscriptionDiscountPercentageValue
```

---
<a id="subscription-shipping-option-result"></a>

## Subscription​Shipping​Option​Result

union

Requires the `read_own_subscription_contracts` or `write_own_subscription_contracts` scope.

The result of the query to fetch shipping options for the subscription contract.

### Fields with this union

* [Subscription​Draft.shippingOptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.shippingOptions)

  OBJECT

  Deprecated

***

```graphql
union SubscriptionShippingOptionResult = SubscriptionShippingOptionResultFailure | SubscriptionShippingOptionResultSuccess
```

---
<a id="suggested-refund-method"></a>

## Suggested​Refund​Method

interface

Requires `read_orders` access scope or `read_marketplace_orders` access scope.

Generic attributes of a suggested refund method.

### Fields

* amount

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The suggested amount to refund in shop and presentment currencies.

* maximum​Refundable

  [Money​Bag!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyBag)

  non-null

  The maximum available amount to refund in shop and presentment currencies.

***

###### Variables

```json
{
	"amount": "",
	"maximumRefundable": ""
}
```

###### Schema

```graphql
interface SuggestedRefundMethod {
  amount: MoneyBag!
  maximumRefundable: MoneyBag!
}
```

---
<a id="taxonomy-category-attribute"></a>

## Taxonomy​Category​Attribute

union

A product taxonomy attribute interface.

### Fields with this union

* [Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

  OBJECT

  A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

  Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

* [Taxonomy​Category​Attribute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple TaxonomyCategoryAttributes.

* [Taxonomy​Category​Attribute​Edge.node](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge#field-TaxonomyCategoryAttributeEdge.fields.node)

  OBJECT

  An auto-generated type which holds one TaxonomyCategoryAttribute and a cursor during pagination.

***

```graphql
union TaxonomyCategoryAttribute = TaxonomyAttribute | TaxonomyChoiceListAttribute | TaxonomyMeasurementAttribute
```

---
<a id="tender-transaction-details"></a>

## Tender​Transaction​Details

union

Requires `read_orders` access scope.

Information about the payment instrument used for this transaction.

### Fields with this union

* [Tender​Transaction.transactionDetails](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction#field-TenderTransaction.fields.transactionDetails)

  OBJECT

  A TenderTransaction represents a transaction with financial impact on a shop's balance sheet. A tender transaction always represents actual money movement between a buyer and a shop. TenderTransactions can be used instead of OrderTransactions for reconciling a shop's cash flow. A TenderTransaction is immutable once created.

***

```graphql
union TenderTransactionDetails = TenderTransactionCreditCardDetails
```

---
<a id="unsigned-int64"></a>

## Unsigned​Int64

scalar

An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.

Example value: `"50"`.

### Map

#### Fields with this scalar

* [Bulk​Operation.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.fileSize)
* [Bulk​Operation.objectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.objectCount)
* [Bulk​Operation.rootObjectCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.rootObjectCount)
* [Collection.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.legacyResourceId)
* [Customer.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.legacyResourceId)
* [Customer.numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.numberOfOrders)
* [Customer​Merge​Preview​Default​Fields.discountNodeCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodeCount)
* [Customer​Merge​Preview​Default​Fields.draftOrderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrderCount)
* [Customer​Merge​Preview​Default​Fields.giftCardCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCardCount)
* [Customer​Merge​Preview​Default​Fields.metafieldCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.metafieldCount)
* [Customer​Merge​Preview​Default​Fields.orderCount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orderCount)
* [Customer​Segment​Member.numberOfOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.numberOfOrders)
* [Discount​Minimum​Quantity.greaterThanOrEqualToQuantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumQuantity#field-DiscountMinimumQuantity.fields.greaterThanOrEqualToQuantity)
* [Discount​Quantity.quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountQuantity#field-DiscountQuantity.fields.quantity)
* [Draft​Order.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.legacyResourceId)
* [Draft​Order.totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.totalWeight)
* [Fulfillment.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.legacyResourceId)
* [Inventory​Item.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.legacyResourceId)
* [Location.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.legacyResourceId)
* [Marketing​Event.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent#field-MarketingEvent.fields.legacyResourceId)
* [Metafield.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.legacyResourceId)
* [Online​Store​Theme​File.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile#field-OnlineStoreThemeFile.fields.size)
* [Online​Store​Theme​File​Operation​Result.size](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileOperationResult#field-OnlineStoreThemeFileOperationResult.fields.size)
* [Order.currentTotalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.currentTotalWeight)
* [Order.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.legacyResourceId)
* [Order.totalWeight](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.totalWeight)
* [Price​Rule.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.legacyResourceId)
* [Product.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.legacyResourceId)
* [Product​Variant.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.legacyResourceId)
* [Refund.legacyResourceId](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.legacyResourceId)

#### Inputs with this scalar

* [Discount​Automatic​Bxgy​Input.usesPerOrderLimit](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticBxgyInput#fields-usesPerOrderLimit)
* [Discount​Customer​Buys​Value​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerBuysValueInput#fields-quantity)
* [Discount​Minimum​Quantity​Input.greaterThanOrEqualToQuantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountMinimumQuantityInput#fields-greaterThanOrEqualToQuantity)
* [Discount​On​Quantity​Input.quantity](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountOnQuantityInput#fields-quantity)
* [Move​Input.newPosition](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput#fields-newPosition)
* [Staged​Upload​Input.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadInput#fields-fileSize)
* [Staged​Upload​Target​Generate​Input.fileSize](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StagedUploadTargetGenerateInput#fields-fileSize)

---
<a id="url"></a>

## URL

scalar

Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.

For example, `"https://example.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host (`example.myshopify.com`).

### Map

#### Fields with this scalar

* [Abandoned​Checkout.abandonedCheckoutUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.abandonedCheckoutUrl)
* [Abandonment.cartUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.cartUrl)
* [App.appStoreAppUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.appStoreAppUrl)
* [App.appStoreDeveloperUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.appStoreDeveloperUrl)
* [App.installUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installUrl)
* [App.privacyPolicyUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.privacyPolicyUrl)
* [App​Installation.launchUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.launchUrl)
* [App​Installation.uninstallUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.uninstallUrl)
* [App​Subscription.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription#field-AppSubscription.fields.returnUrl)
* [Blog​Feed.location](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogFeed#field-BlogFeed.fields.location)
* [Bulk​Operation.partialDataUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.partialDataUrl)
* [Bulk​Operation.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation#field-BulkOperation.fields.url)
* [Comment​Event​Attachment.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEventAttachment#field-CommentEventAttachment.fields.url)
* [Customer​Accounts​V2.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-CustomerAccountsV2.fields.url)
* [Customer​Email​Address.marketingUnsubscribeUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingUnsubscribeUrl)
* [Customer​Email​Address.openTrackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.openTrackingUrl)
* [Customer​Visit.landingPage](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.landingPage)
* [Customer​Visit.referrerUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisit#field-CustomerVisit.fields.referrerUrl)
* [Delivery​Carrier​Service.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService#field-DeliveryCarrierService.fields.callbackUrl)
* [Discount​Shareable​Url.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountShareableUrl#field-DiscountShareableUrl.fields.url)
* [Domain.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/Domain#field-Domain.fields.url)
* [Draft​Order.invoiceUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.invoiceUrl)
* [External​Video.embedUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.embedUrl)
* [External​Video.originUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExternalVideo#field-ExternalVideo.fields.originUrl)
* [Fulfillment​Order​Supported​Action.externalUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSupportedAction#field-FulfillmentOrderSupportedAction.fields.externalUrl)
* [Fulfillment​Service.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService#field-FulfillmentService.fields.callbackUrl)
* [Fulfillment​Tracking​Info.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentTrackingInfo#field-FulfillmentTrackingInfo.fields.url)
* [Generic​File.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/GenericFile#field-GenericFile.fields.url)
* [Image.url](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.url)
* [Inventory​Item.inventoryHistoryUrl](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryHistoryUrl)

#### Inputs with this scalar

* [Delivery​Carrier​Service​Create​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceCreateInput#fields-callbackUrl)
* [Delivery​Carrier​Service​Update​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DeliveryCarrierServiceUpdateInput#fields-callbackUrl)
* [Fulfillment​Tracking​Input.url](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput#fields-url)
* [Fulfillment​Tracking​Input.urls](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentTrackingInput#fields-urls)
* [Inventory​Scheduled​Change​Item​Input.ledgerDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput#fields-ledgerDocumentUri)
* [Inventory​Set​Scheduled​Changes​Input.referenceDocumentUri](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput#fields-referenceDocumentUri)
* [Inventory​Shipment​Tracking​Input.trackingUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput#fields-trackingUrl)
* [Marketing​Activity​Create​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-remoteUrl)
* [Marketing​Activity​Create​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityCreateExternalInput#fields-remotePreviewImageUrl)
* [Marketing​Activity​Update​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-remoteUrl)
* [Marketing​Activity​Update​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpdateExternalInput#fields-remotePreviewImageUrl)
* [Marketing​Activity​Upsert​External​Input.remoteUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-remoteUrl)
* [Marketing​Activity​Upsert​External​Input.remotePreviewImageUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingActivityUpsertExternalInput#fields-remotePreviewImageUrl)
* [Order​Create​Order​Input.referringSite](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-referringSite)
* [Order​Create​Order​Input.sourceUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-sourceUrl)
* [Reverse​Delivery​Label​Input.fileUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryLabelInput#fields-fileUrl)
* [Reverse​Delivery​Tracking​Input.url](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReverseDeliveryTrackingInput#fields-url)
* [Script​Tag​Input.src](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ScriptTagInput#fields-src)
* [Webhook​Subscription​Input.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-callbackUrl)

#### Arguments with this scalar

* [Query​Root.scriptTags(src)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.scriptTags.arguments.src)
* [app​Purchase​One​Time​Create.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appPurchaseOneTimeCreate#arguments-returnUrl)
* [app​Subscription​Create.returnUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionCreate#arguments-returnUrl)
* [fulfillment​Service​Create.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceCreate#arguments-callbackUrl)
* [fulfillment​Service​Update.callbackUrl](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate#arguments-callbackUrl)
* [theme​Create.source](https://shopify.dev/docs/api/admin-graphql/latest/mutations/themeCreate#arguments-source)
* [url​Redirect​Import​Create.url](https://shopify.dev/docs/api/admin-graphql/latest/mutations/urlRedirectImportCreate#arguments-url)
* [script​Tags.src](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags#arguments-src)

---
<a id="utc-offset"></a>

## Utc​Offset

scalar

Time between UTC time and a location's observed time, in the format `"+HH:MM"` or `"-HH:MM"`.

Example value: `"-07:00"`.

### Map

#### Fields with this scalar

* [Marketing​Engagement.utcOffset](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEngagement#field-MarketingEngagement.fields.utcOffset)

#### Inputs with this scalar

* [Marketing​Engagement​Input.utcOffset](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MarketingEngagementInput#fields-utcOffset)

---
<a id="webhook-subscription-endpoint"></a>

## Webhook​Subscription​Endpoint

union

An endpoint to which webhook subscriptions send webhooks events.

### Fields with this union

* [Webhook​Subscription.endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.endpoint)

  OBJECT

  Deprecated

***

```graphql
union WebhookSubscriptionEndpoint = WebhookEventBridgeEndpoint | WebhookHttpEndpoint | WebhookPubSubEndpoint
```

---
