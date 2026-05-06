# Shopify Admin GraphQL API — Connections

> Bagian dari Shopify Admin GraphQL API reference (split per kategori karena spec sangat besar — 3.866 halaman).
> Semua nama tipe, field, query, mutation, payload, dan contoh kode dipertahankan dalam bahasa Inggris persis dari sumber resmi Shopify.
> Tanggal kompilasi: 2026-05-02.
> Sumber: https://shopify.dev/docs/api/admin-graphql
> Total halaman dalam grup ini: **182**

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

- [Abandoned​Checkout​Connection](#abandoned-checkout-connection) — `connections/AbandonedCheckoutConnection`
- [Abandoned​Checkout​Line​Item​Connection](#abandoned-checkout-line-item-connection) — `connections/AbandonedCheckoutLineItemConnection`
- [App​Connection](#app-connection) — `connections/AppConnection`
- [App​Credit​Connection](#app-credit-connection) — `connections/AppCreditConnection`
- [App​Discount​Type​Connection](#app-discount-type-connection) — `connections/AppDiscountTypeConnection`
- [App​Installation​Connection](#app-installation-connection) — `connections/AppInstallationConnection`
- [App​Purchase​One​Time​Connection](#app-purchase-one-time-connection) — `connections/AppPurchaseOneTimeConnection`
- [App​Revenue​Attribution​Record​Connection](#app-revenue-attribution-record-connection) — `connections/AppRevenueAttributionRecordConnection`
- [App​Subscription​Connection](#app-subscription-connection) — `connections/AppSubscriptionConnection`
- [App​Usage​Record​Connection](#app-usage-record-connection) — `connections/AppUsageRecordConnection`
- [Article​Author​Connection](#article-author-connection) — `connections/ArticleAuthorConnection`
- [Article​Connection](#article-connection) — `connections/ArticleConnection`
- [Blog​Connection](#blog-connection) — `connections/BlogConnection`
- [Bulk​Operation​Connection](#bulk-operation-connection) — `connections/BulkOperationConnection`
- [Calculated​Discount​Application​Connection](#calculated-discount-application-connection) — `connections/CalculatedDiscountApplicationConnection`
- [Calculated​Line​Item​Connection](#calculated-line-item-connection) — `connections/CalculatedLineItemConnection`
- [Cart​Transform​Connection](#cart-transform-connection) — `connections/CartTransformConnection`
- [Cash​Activity​Connection](#cash-activity-connection) — `connections/CashActivityConnection`
- [Cash​Drawer​Connection](#cash-drawer-connection) — `connections/CashDrawerConnection`
- [Cash​Management​Reason​Code​Connection](#cash-management-reason-code-connection) — `connections/CashManagementReasonCodeConnection`
- [Cash​Tracking​Adjustment​Connection](#cash-tracking-adjustment-connection) — `connections/CashTrackingAdjustmentConnection`
- [Cash​Tracking​Session​Connection](#cash-tracking-session-connection) — `connections/CashTrackingSessionConnection`
- [Catalog​Connection](#catalog-connection) — `connections/CatalogConnection`
- [Channel​Connection](#channel-connection) — `connections/ChannelConnection`
- [Checkout​And​Accounts​Configuration​Connection](#checkout-and-accounts-configuration-connection) — `connections/CheckoutAndAccountsConfigurationConnection`
- [Checkout​Profile​Connection](#checkout-profile-connection) — `connections/CheckoutProfileConnection`
- [Collection​Connection](#collection-connection) — `connections/CollectionConnection`
- [Collection​Publication​Connection](#collection-publication-connection) — `connections/CollectionPublicationConnection`
- [Combined​Listing​Child​Connection](#combined-listing-child-connection) — `connections/CombinedListingChildConnection`
- [Comment​Connection](#comment-connection) — `connections/CommentConnection`
- [Company​Connection](#company-connection) — `connections/CompanyConnection`
- [Company​Contact​Connection](#company-contact-connection) — `connections/CompanyContactConnection`
- [Company​Contact​Role​Assignment​Connection](#company-contact-role-assignment-connection) — `connections/CompanyContactRoleAssignmentConnection`
- [Company​Contact​Role​Connection](#company-contact-role-connection) — `connections/CompanyContactRoleConnection`
- [Company​Location​Connection](#company-location-connection) — `connections/CompanyLocationConnection`
- [Company​Location​Staff​Member​Assignment​Connection](#company-location-staff-member-assignment-connection) — `connections/CompanyLocationStaffMemberAssignmentConnection`
- [Country​Harmonized​System​Code​Connection](#country-harmonized-system-code-connection) — `connections/CountryHarmonizedSystemCodeConnection`
- [Currency​Setting​Connection](#currency-setting-connection) — `connections/CurrencySettingConnection`
- [Customer​Account​Page​Connection](#customer-account-page-connection) — `connections/CustomerAccountPageConnection`
- [Customer​Connection](#customer-connection) — `connections/CustomerConnection`
- [Customer​Moment​Connection](#customer-moment-connection) — `connections/CustomerMomentConnection`
- [Customer​Payment​Method​Connection](#customer-payment-method-connection) — `connections/CustomerPaymentMethodConnection`
- [Customer​Segment​Member​Connection](#customer-segment-member-connection) — `connections/CustomerSegmentMemberConnection`
- [Customer​Visit​Product​Info​Connection](#customer-visit-product-info-connection) — `connections/CustomerVisitProductInfoConnection`
- [Deletion​Event​Connection](#deletion-event-connection) — `connections/DeletionEventConnection`
- [Delivery​Carrier​Service​Connection](#delivery-carrier-service-connection) — `connections/DeliveryCarrierServiceConnection`
- [Delivery​Customization​Connection](#delivery-customization-connection) — `connections/DeliveryCustomizationConnection`
- [Delivery​Location​Group​Zone​Connection](#delivery-location-group-zone-connection) — `connections/DeliveryLocationGroupZoneConnection`
- [Delivery​Method​Definition​Connection](#delivery-method-definition-connection) — `connections/DeliveryMethodDefinitionConnection`
- [Delivery​Profile​Connection](#delivery-profile-connection) — `connections/DeliveryProfileConnection`
- [Delivery​Profile​Item​Connection](#delivery-profile-item-connection) — `connections/DeliveryProfileItemConnection`
- [Delivery​Promise​Participant​Connection](#delivery-promise-participant-connection) — `connections/DeliveryPromiseParticipantConnection`
- [Discount​Allocation​Connection](#discount-allocation-connection) — `connections/DiscountAllocationConnection`
- [Discount​Application​Connection](#discount-application-connection) — `connections/DiscountApplicationConnection`
- [Discount​Automatic​Connection](#discount-automatic-connection) — `connections/DiscountAutomaticConnection`
- [Discount​Automatic​Node​Connection](#discount-automatic-node-connection) — `connections/DiscountAutomaticNodeConnection`
- [Discount​Code​Node​Connection](#discount-code-node-connection) — `connections/DiscountCodeNodeConnection`
- [Discount​Node​Connection](#discount-node-connection) — `connections/DiscountNodeConnection`
- [Discount​Redeem​Code​Bulk​Creation​Code​Connection](#discount-redeem-code-bulk-creation-code-connection) — `connections/DiscountRedeemCodeBulkCreationCodeConnection`
- [Discount​Redeem​Code​Connection](#discount-redeem-code-connection) — `connections/DiscountRedeemCodeConnection`
- [Draft​Order​Connection](#draft-order-connection) — `connections/DraftOrderConnection`
- [Draft​Order​Line​Item​Connection](#draft-order-line-item-connection) — `connections/DraftOrderLineItemConnection`
- [Event​Connection](#event-connection) — `connections/EventConnection`
- [Exchange​Line​Item​Connection](#exchange-line-item-connection) — `connections/ExchangeLineItemConnection`
- [File​Connection](#file-connection) — `connections/FileConnection`
- [Fulfillment​Connection](#fulfillment-connection) — `connections/FulfillmentConnection`
- [Fulfillment​Event​Connection](#fulfillment-event-connection) — `connections/FulfillmentEventConnection`
- [Fulfillment​Line​Item​Connection](#fulfillment-line-item-connection) — `connections/FulfillmentLineItemConnection`
- [Fulfillment​Order​Connection](#fulfillment-order-connection) — `connections/FulfillmentOrderConnection`
- [Fulfillment​Order​Line​Item​Connection](#fulfillment-order-line-item-connection) — `connections/FulfillmentOrderLineItemConnection`
- [Fulfillment​Order​Location​For​Move​Connection](#fulfillment-order-location-for-move-connection) — `connections/FulfillmentOrderLocationForMoveConnection`
- [Fulfillment​Order​Merchant​Request​Connection](#fulfillment-order-merchant-request-connection) — `connections/FulfillmentOrderMerchantRequestConnection`
- [Gift​Card​Connection](#gift-card-connection) — `connections/GiftCardConnection`
- [Gift​Card​Transaction​Connection](#gift-card-transaction-connection) — `connections/GiftCardTransactionConnection`
- [Image​Connection](#image-connection) — `connections/ImageConnection`
- [Inventory​Item​Connection](#inventory-item-connection) — `connections/InventoryItemConnection`
- [Inventory​Level​Connection](#inventory-level-connection) — `connections/InventoryLevelConnection`
- [Inventory​Scheduled​Change​Connection](#inventory-scheduled-change-connection) — `connections/InventoryScheduledChangeConnection`
- [Inventory​Shipment​Connection](#inventory-shipment-connection) — `connections/InventoryShipmentConnection`
- [Inventory​Shipment​Line​Item​Connection](#inventory-shipment-line-item-connection) — `connections/InventoryShipmentLineItemConnection`
- [Inventory​Transfer​Connection](#inventory-transfer-connection) — `connections/InventoryTransferConnection`
- [Inventory​Transfer​Line​Item​Connection](#inventory-transfer-line-item-connection) — `connections/InventoryTransferLineItemConnection`
- [Line​Item​Connection](#line-item-connection) — `connections/LineItemConnection`
- [Localization​Extension​Connection](#localization-extension-connection) — `connections/LocalizationExtensionConnection`
- [Localized​Field​Connection](#localized-field-connection) — `connections/LocalizedFieldConnection`
- [Location​Connection](#location-connection) — `connections/LocationConnection`
- [Mailing​Address​Connection](#mailing-address-connection) — `connections/MailingAddressConnection`
- [Marketing​Activity​Connection](#marketing-activity-connection) — `connections/MarketingActivityConnection`
- [Marketing​Event​Connection](#marketing-event-connection) — `connections/MarketingEventConnection`
- [Market​Catalog​Connection](#market-catalog-connection) — `connections/MarketCatalogConnection`
- [Market​Connection](#market-connection) — `connections/MarketConnection`
- [Market​Localizable​Resource​Connection](#market-localizable-resource-connection) — `connections/MarketLocalizableResourceConnection`
- [Market​Region​Connection](#market-region-connection) — `connections/MarketRegionConnection`
- [Market​Web​Presence​Connection](#market-web-presence-connection) — `connections/MarketWebPresenceConnection`
- [Media​Connection](#media-connection) — `connections/MediaConnection`
- [Menu​Connection](#menu-connection) — `connections/MenuConnection`
- [Metafield​Connection](#metafield-connection) — `connections/MetafieldConnection`
- [Metafield​Definition​Connection](#metafield-definition-connection) — `connections/MetafieldDefinitionConnection`
- [Metafield​Definition​Constraint​Value​Connection](#metafield-definition-constraint-value-connection) — `connections/MetafieldDefinitionConstraintValueConnection`
- [Metafield​Reference​Connection](#metafield-reference-connection) — `connections/MetafieldReferenceConnection`
- [Metafield​Relation​Connection](#metafield-relation-connection) — `connections/MetafieldRelationConnection`
- [Metaobject​Connection](#metaobject-connection) — `connections/MetaobjectConnection`
- [Metaobject​Definition​Connection](#metaobject-definition-connection) — `connections/MetaobjectDefinitionConnection`
- [Mobile​Platform​Application​Connection](#mobile-platform-application-connection) — `connections/MobilePlatformApplicationConnection`
- [Online​Store​Theme​Connection](#online-store-theme-connection) — `connections/OnlineStoreThemeConnection`
- [Online​Store​Theme​File​Connection](#online-store-theme-file-connection) — `connections/OnlineStoreThemeFileConnection`
- [Order​Adjustment​Connection](#order-adjustment-connection) — `connections/OrderAdjustmentConnection`
- [Order​Connection](#order-connection) — `connections/OrderConnection`
- [Order​Staged​Change​Connection](#order-staged-change-connection) — `connections/OrderStagedChangeConnection`
- [Order​Transaction​Connection](#order-transaction-connection) — `connections/OrderTransactionConnection`
- [Page​Connection](#page-connection) — `connections/PageConnection`
- [Payment​Customization​Connection](#payment-customization-connection) — `connections/PaymentCustomizationConnection`
- [Payment​Mandate​Resource​Connection](#payment-mandate-resource-connection) — `connections/PaymentMandateResourceConnection`
- [Payment​Schedule​Connection](#payment-schedule-connection) — `connections/PaymentScheduleConnection`
- [Point​Of​Sale​Device​Connection](#point-of-sale-device-connection) — `connections/PointOfSaleDeviceConnection`
- [Point​Of​Sale​Device​Payment​Session​Connection](#point-of-sale-device-payment-session-connection) — `connections/PointOfSaleDevicePaymentSessionConnection`
- [Price​List​Connection](#price-list-connection) — `connections/PriceListConnection`
- [Price​List​Price​Connection](#price-list-price-connection) — `connections/PriceListPriceConnection`
- [Price​Rule​Discount​Code​Connection](#price-rule-discount-code-connection) — `connections/PriceRuleDiscountCodeConnection`
- [Product​Bundle​Component​Connection](#product-bundle-component-connection) — `connections/ProductBundleComponentConnection`
- [Product​Component​Type​Connection](#product-component-type-connection) — `connections/ProductComponentTypeConnection`
- [Product​Connection](#product-connection) — `connections/ProductConnection`
- [Product​Feed​Connection](#product-feed-connection) — `connections/ProductFeedConnection`
- [Product​Publication​Connection](#product-publication-connection) — `connections/ProductPublicationConnection`
- [Product​Variant​Component​Connection](#product-variant-component-connection) — `connections/ProductVariantComponentConnection`
- [Product​Variant​Connection](#product-variant-connection) — `connections/ProductVariantConnection`
- [Product​Variant​Price​Pair​Connection](#product-variant-price-pair-connection) — `connections/ProductVariantPricePairConnection`
- [Publication​Connection](#publication-connection) — `connections/PublicationConnection`
- [Quantity​Price​Break​Connection](#quantity-price-break-connection) — `connections/QuantityPriceBreakConnection`
- [Quantity​Rule​Connection](#quantity-rule-connection) — `connections/QuantityRuleConnection`
- [Refund​Connection](#refund-connection) — `connections/RefundConnection`
- [Refund​Line​Item​Connection](#refund-line-item-connection) — `connections/RefundLineItemConnection`
- [Refund​Shipping​Line​Connection](#refund-shipping-line-connection) — `connections/RefundShippingLineConnection`
- [Resource​Publication​Connection](#resource-publication-connection) — `connections/ResourcePublicationConnection`
- [Resource​Publication​V2Connection](#resource-publication-v2connection) — `connections/ResourcePublicationV2Connection`
- [Returnable​Fulfillment​Connection](#returnable-fulfillment-connection) — `connections/ReturnableFulfillmentConnection`
- [Returnable​Fulfillment​Line​Item​Connection](#returnable-fulfillment-line-item-connection) — `connections/ReturnableFulfillmentLineItemConnection`
- [Return​Connection](#return-connection) — `connections/ReturnConnection`
- [Return​Line​Item​Type​Connection](#return-line-item-type-connection) — `connections/ReturnLineItemTypeConnection`
- [Return​Reason​Definition​Connection](#return-reason-definition-connection) — `connections/ReturnReasonDefinitionConnection`
- [Reverse​Delivery​Connection](#reverse-delivery-connection) — `connections/ReverseDeliveryConnection`
- [Reverse​Delivery​Line​Item​Connection](#reverse-delivery-line-item-connection) — `connections/ReverseDeliveryLineItemConnection`
- [Reverse​Fulfillment​Order​Connection](#reverse-fulfillment-order-connection) — `connections/ReverseFulfillmentOrderConnection`
- [Reverse​Fulfillment​Order​Line​Item​Connection](#reverse-fulfillment-order-line-item-connection) — `connections/ReverseFulfillmentOrderLineItemConnection`
- [Sales​Agreement​Connection](#sales-agreement-connection) — `connections/SalesAgreementConnection`
- [Sale​Connection](#sale-connection) — `connections/SaleConnection`
- [Saved​Search​Connection](#saved-search-connection) — `connections/SavedSearchConnection`
- [Script​Tag​Connection](#script-tag-connection) — `connections/ScriptTagConnection`
- [Search​Result​Connection](#search-result-connection) — `connections/SearchResultConnection`
- [Segment​Connection](#segment-connection) — `connections/SegmentConnection`
- [Segment​Filter​Connection](#segment-filter-connection) — `connections/SegmentFilterConnection`
- [Segment​Migration​Connection](#segment-migration-connection) — `connections/SegmentMigrationConnection`
- [Segment​Value​Connection](#segment-value-connection) — `connections/SegmentValueConnection`
- [Selling​Plan​Connection](#selling-plan-connection) — `connections/SellingPlanConnection`
- [Selling​Plan​Group​Connection](#selling-plan-group-connection) — `connections/SellingPlanGroupConnection`
- [Shipping​Line​Connection](#shipping-line-connection) — `connections/ShippingLineConnection`
- [Shopify​Function​Connection](#shopify-function-connection) — `connections/ShopifyFunctionConnection`
- [Shopify​Payments​Balance​Transaction​Connection](#shopify-payments-balance-transaction-connection) — `connections/ShopifyPaymentsBalanceTransactionConnection`
- [Shopify​Payments​Bank​Account​Connection](#shopify-payments-bank-account-connection) — `connections/ShopifyPaymentsBankAccountConnection`
- [Shopify​Payments​Dispute​Connection](#shopify-payments-dispute-connection) — `connections/ShopifyPaymentsDisputeConnection`
- [Shopify​Payments​Payout​Connection](#shopify-payments-payout-connection) — `connections/ShopifyPaymentsPayoutConnection`
- [Shop​Pay​Payment​Request​Receipt​Connection](#shop-pay-payment-request-receipt-connection) — `connections/ShopPayPaymentRequestReceiptConnection`
- [Staff​Member​Connection](#staff-member-connection) — `connections/StaffMemberConnection`
- [Standard​Metafield​Definition​Template​Connection](#standard-metafield-definition-template-connection) — `connections/StandardMetafieldDefinitionTemplateConnection`
- [Storefront​Access​Token​Connection](#storefront-access-token-connection) — `connections/StorefrontAccessTokenConnection`
- [Store​Credit​Account​Connection](#store-credit-account-connection) — `connections/StoreCreditAccountConnection`
- [Store​Credit​Account​Transaction​Connection](#store-credit-account-transaction-connection) — `connections/StoreCreditAccountTransactionConnection`
- [String​Connection](#string-connection) — `connections/StringConnection`
- [Subscription​Billing​Attempt​Connection](#subscription-billing-attempt-connection) — `connections/SubscriptionBillingAttemptConnection`
- [Subscription​Billing​Cycle​Connection](#subscription-billing-cycle-connection) — `connections/SubscriptionBillingCycleConnection`
- [Subscription​Contract​Connection](#subscription-contract-connection) — `connections/SubscriptionContractConnection`
- [Subscription​Discount​Connection](#subscription-discount-connection) — `connections/SubscriptionDiscountConnection`
- [Subscription​Line​Connection](#subscription-line-connection) — `connections/SubscriptionLineConnection`
- [Subscription​Manual​Discount​Connection](#subscription-manual-discount-connection) — `connections/SubscriptionManualDiscountConnection`
- [Taxonomy​Category​Attribute​Connection](#taxonomy-category-attribute-connection) — `connections/TaxonomyCategoryAttributeConnection`
- [Taxonomy​Category​Connection](#taxonomy-category-connection) — `connections/TaxonomyCategoryConnection`
- [Taxonomy​Value​Connection](#taxonomy-value-connection) — `connections/TaxonomyValueConnection`
- [Tender​Transaction​Connection](#tender-transaction-connection) — `connections/TenderTransactionConnection`
- [Translatable​Resource​Connection](#translatable-resource-connection) — `connections/TranslatableResourceConnection`
- [Url​Redirect​Connection](#url-redirect-connection) — `connections/UrlRedirectConnection`
- [Validation​Connection](#validation-connection) — `connections/ValidationConnection`
- [Webhook​Subscription​Connection](#webhook-subscription-connection) — `connections/WebhookSubscriptionConnection`

---

<a id="abandoned-checkout-connection"></a>

## Abandoned​Checkout​Connection

connection

An auto-generated type for paginating through multiple AbandonedCheckouts.

### Queries with this connection

* [abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

  query

  Returns a list of abandoned checkouts. A checkout is considered abandoned when a customer adds contact information but doesn't complete their purchase. Includes both abandoned and recovered checkouts.

  Each checkout provides [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) details, [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects, pricing information, and a recovery URL for re-engaging customers who didn't complete their purchase.

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

    [Abandoned​Checkout​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AbandonedCheckoutSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was created.

    * email\_state

      string

      Filter by `abandoned_email_state` value. Possible values: `sent`, `not_sent`, `scheduled` and `suppressed`.

    * * id

        id

      * recovery\_state

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Possible values: `recovered` and `not_recovered`.

    * status

      string

      Possible values: `open` and `closed`.

    * updated\_at

      time

      The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the abandoned cart was last updated.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Abandoned​Checkout​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Abandoned​Checkout!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout)

  non-null

  A list of nodes that are contained in AbandonedCheckoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [abandoned​Checkouts](https://shopify.dev/docs/api/admin-graphql/latest/queries/abandonedCheckouts)

#### Possible returns

* [Abandoned​Checkout​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-edges)
* [Abandoned​Checkout​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-nodes)
* [Abandoned​Checkout​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutConnection#returns-pageInfo)

---
<a id="abandoned-checkout-line-item-connection"></a>

## Abandoned​Checkout​Line​Item​Connection

connection

An auto-generated type for paginating through multiple AbandonedCheckoutLineItems.

### Fields with this connection

* [Abandoned​Checkout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems)

  OBJECT

  An incomplete checkout where the customer added items and provided contact information but didn't complete the purchase. Tracks the customer's cart contents, pricing details, addresses, and timestamps to enable recovery campaigns and abandonment analytics.

  The checkout includes a recovery URL that merchants can send to customers to resume their purchase. [`AbandonedCheckoutLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem) objects preserve the original [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) selections, quantities, and pricing at the time of abandonment.

***

### Possible returns

* edges

  [\[Abandoned​Checkout​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Abandoned​Checkout​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem)

  non-null

  A list of nodes that are contained in AbandonedCheckoutLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Abandoned​Checkout.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckout#field-AbandonedCheckout.fields.lineItems)

#### Possible returns

* [Abandoned​Checkout​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-edges)
* [Abandoned​Checkout​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-nodes)
* [Abandoned​Checkout​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AbandonedCheckoutLineItemConnection#returns-pageInfo)

---
<a id="app-connection"></a>

## App​Connection

connection

An auto-generated type for paginating through multiple Apps.

### Fields with this connection

* [App​Catalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps)

  OBJECT

  A catalog that defines the publication associated with an app.

* [Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.availableChannelApps)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

### Possible returns

* edges

  [\[App​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  A list of nodes that are contained in AppEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Catalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps)
* [Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.availableChannelApps)

#### Possible returns

* [App​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-edges)
* [App​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-nodes)
* [App​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-pageInfo)

---
<a id="app-credit-connection"></a>

## App​Credit​Connection

connection

An auto-generated type for paginating through multiple AppCredits.

### Fields with this connection

* [App​Installation.credits](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

### Possible returns

* edges

  [\[App​Credit​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCreditEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Credit!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit)

  non-null

  A list of nodes that are contained in AppCreditEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Installation.credits](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.credits)

#### Possible returns

* [App​Credit​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#returns-edges)
* [App​Credit​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#returns-nodes)
* [App​Credit​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppCreditConnection#returns-pageInfo)

---
<a id="app-discount-type-connection"></a>

## App​Discount​Type​Connection

connection

An auto-generated type for paginating through multiple AppDiscountTypes.

### Queries with this connection

* [app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

  query

  A list of app discount types installed by apps.

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

### Possible returns

* edges

  [\[App​Discount​Type​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountTypeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Discount​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType)

  non-null

  A list of nodes that are contained in AppDiscountTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [app​Discount​Types​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/appDiscountTypesNodes)

#### Possible returns

* [App​Discount​Type​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-edges)
* [App​Discount​Type​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-nodes)
* [App​Discount​Type​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppDiscountTypeConnection#returns-pageInfo)

---
<a id="app-installation-connection"></a>

## App​Installation​Connection

connection

An auto-generated type for paginating through multiple AppInstallations.

### Queries with this connection

* [app​Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations)

  query

  A paginated list of [`AppInstallation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation) objects across multiple stores where your app is installed. Use this query to monitor installation status, track billing and subscriptions through [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects, and review granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects.

  Filter by [`AppInstallationCategory`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory) to find specific types of installations (such as POS or channel apps) and by [`AppInstallationPrivacy`](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy) to scope to public or private installations.

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

    [App​Installation​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationSortKeys)

    Default:INSTALLED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * category

    [App​Installation​Category](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationCategory)

    The category of app installations to fetch.

  * privacy

    [App​Installation​Privacy](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppInstallationPrivacy)

    Default:PUBLIC

    The privacy level of app installations to fetch.

  ***

***

### Possible returns

* edges

  [\[App​Installation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Installation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation)

  non-null

  A list of nodes that are contained in AppInstallationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [app​Installations](https://shopify.dev/docs/api/admin-graphql/latest/queries/appInstallations)

#### Possible returns

* [App​Installation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-edges)
* [App​Installation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-nodes)
* [App​Installation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppInstallationConnection#returns-pageInfo)

---
<a id="app-purchase-one-time-connection"></a>

## App​Purchase​One​Time​Connection

connection

An auto-generated type for paginating through multiple AppPurchaseOneTimes.

### Fields with this connection

* [App​Installation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

### Possible returns

* edges

  [\[App​Purchase​One​Time​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Purchase​One​Time!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  non-null

  A list of nodes that are contained in AppPurchaseOneTimeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Installation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases)

#### Possible returns

* [App​Purchase​One​Time​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-edges)
* [App​Purchase​One​Time​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-nodes)
* [App​Purchase​One​Time​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-pageInfo)

---
<a id="app-revenue-attribution-record-connection"></a>

## App​Revenue​Attribution​Record​Connection

connection

An auto-generated type for paginating through multiple AppRevenueAttributionRecords.

### Fields with this connection

* [App​Installation.revenueAttributionRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

### Possible returns

* edges

  [\[App​Revenue​Attribution​Record​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecordEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Revenue​Attribution​Record!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord)

  non-null

  A list of nodes that are contained in AppRevenueAttributionRecordEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Installation.revenueAttributionRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.revenueAttributionRecords)

#### Possible returns

* [App​Revenue​Attribution​Record​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#returns-edges)
* [App​Revenue​Attribution​Record​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#returns-nodes)
* [App​Revenue​Attribution​Record​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppRevenueAttributionRecordConnection#returns-pageInfo)

---
<a id="app-subscription-connection"></a>

## App​Subscription​Connection

connection

An auto-generated type for paginating through multiple AppSubscriptions.

### Fields with this connection

* [App​Installation.allSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

### Possible returns

* edges

  [\[App​Subscription​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Subscription!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription)

  non-null

  A list of nodes that are contained in AppSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Installation.allSubscriptions](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.allSubscriptions)

#### Possible returns

* [App​Subscription​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-edges)
* [App​Subscription​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-nodes)
* [App​Subscription​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppSubscriptionConnection#returns-pageInfo)

---
<a id="app-usage-record-connection"></a>

## App​Usage​Record​Connection

connection

An auto-generated type for paginating through multiple AppUsageRecords.

### Fields with this connection

* [App​Subscription​Line​Item.usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords)

  OBJECT

  Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.

  If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.

  Use the `AppSubscriptionLineItem` object to:

  * View the pricing terms a merchant has agreed to
  * Distinguish between recurring and usage fee components
  * Access detailed billing information for each pricing component

  This read-only object provides visibility into the subscription's pricing structure without allowing modifications.

  Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

***

### Possible returns

* edges

  [\[App​Usage​Record​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecordEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Usage​Record!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord)

  non-null

  A list of nodes that are contained in AppUsageRecordEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Subscription​Line​Item.usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords)

#### Possible returns

* [App​Usage​Record​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-edges)
* [App​Usage​Record​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-nodes)
* [App​Usage​Record​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-pageInfo)

---
<a id="article-author-connection"></a>

## Article​Author​Connection

connection

An auto-generated type for paginating through multiple ArticleAuthors.

### Queries with this connection

* [article​Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleAuthors)

  query

  List of article authors for the shop.

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

### Possible returns

* edges

  [\[Article​Author​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthorEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Article​Author!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleAuthor)

  non-null

  A list of nodes that are contained in ArticleAuthorEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [article​Authors](https://shopify.dev/docs/api/admin-graphql/latest/queries/articleAuthors)

#### Possible returns

* [Article​Author​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-edges)
* [Article​Author​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-nodes)
* [Article​Author​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleAuthorConnection#returns-pageInfo)

---
<a id="article-connection"></a>

## Article​Connection

connection

An auto-generated type for paginating through multiple Articles.

### Fields with this connection

* [Blog.articles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.articles)

  OBJECT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

***

### Queries with this connection

* [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)

  query

  Returns a paginated list of articles from the shop's blogs. [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects are blog posts that contain content like text, images, and tags.

  Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of articles returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles#arguments-query) argument to filter results by specific criteria.

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

    [Article​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ArticleSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * author

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=handle:summer-collection-announcement`

        Filter by the author of the article.

    * * blog\_id

        string

      * blog\_title

        string

      - Filter by the ID of the blog the article belongs to.

      - Example:
        * `blog_id:1234`
        * `blog_id:>=1234`
        * `blog_id:<=1234`

    * * created\_at

        time

      * handle

        string

      * id

        id

      * published\_at

        time

      * published\_status

        string

      - Filter by the date and time when the article was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the article's handle.

      - Example:

        * `handle:summer-collection-announcement`
        * `handle:how-to-guide`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the article was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

    * * tag

        string

      * tag\_not

        string

      * title

        string

      * updated\_at

        time

      - Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the title of the article.

      - Example:

        * `title:summer-collection`
        * `title:green hoodie`

        Filter by the date and time when the article was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

***

### Possible returns

* edges

  [\[Article​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Article!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  non-null

  A list of nodes that are contained in ArticleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Blog.articles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.articles)

#### Queries with this connection

* [articles](https://shopify.dev/docs/api/admin-graphql/latest/queries/articles)

#### Possible returns

* [Article​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#returns-edges)
* [Article​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#returns-nodes)
* [Article​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ArticleConnection#returns-pageInfo)

---
<a id="blog-connection"></a>

## Blog​Connection

connection

An auto-generated type for paginating through multiple Blogs.

### Queries with this connection

* [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)

  query

  Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) objects. Blogs serve as containers for [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects and provide content management capabilities for the store's editorial content.

  Supports [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to control the number of blogs returned and their order. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs#arguments-query) argument to filter results by specific criteria.

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

    [Blog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BlogSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * handle

      string

    * * id

        id

      * title

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

***

### Possible returns

* edges

  [\[Blog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Blog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog)

  non-null

  A list of nodes that are contained in BlogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [blogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/blogs)

#### Possible returns

* [Blog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-edges)
* [Blog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-nodes)
* [Blog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BlogConnection#returns-pageInfo)

---
<a id="bulk-operation-connection"></a>

## Bulk​Operation​Connection

connection

An auto-generated type for paginating through multiple BulkOperations.

### Queries with this connection

* [bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

  query

  Returns the app's bulk operations meeting the specified filters. Defaults to sorting by created\_at, with newest operations first.

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

    [Bulk​Operations​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/BulkOperationsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

      Filter operations created after a specific date.

    * * id

        id

      * operation\_type

        string

      * status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter operations by type.

      - Valid values:

        * `query`
        * `mutation`

        Filter operations by status.

        Valid values:

        * `canceled`
        * `canceling`
        * `completed`
        * `created`
        * `failed`
        * `running`

  ***

***

### Possible returns

* edges

  [\[Bulk​Operation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Bulk​Operation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BulkOperation)

  non-null

  A list of nodes that are contained in BulkOperationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [bulk​Operations](https://shopify.dev/docs/api/admin-graphql/latest/queries/bulkOperations)

#### Possible returns

* [Bulk​Operation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-edges)
* [Bulk​Operation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-nodes)
* [Bulk​Operation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/BulkOperationConnection#returns-pageInfo)

---
<a id="calculated-discount-application-connection"></a>

## Calculated​Discount​Application​Connection

connection

An auto-generated type for paginating through multiple CalculatedDiscountApplications.

### Fields with this connection

* [Calculated​Order.addedDiscountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedDiscountApplications)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

***

### Possible returns

* edges

  [\[Calculated​Discount​Application​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountApplicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Calculated​Discount​Application!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication)

  non-null

  A list of nodes that are contained in CalculatedDiscountApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Calculated​Order.addedDiscountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedDiscountApplications)

#### Possible returns

* [Calculated​Discount​Application​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-edges)
* [Calculated​Discount​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-nodes)
* [Calculated​Discount​Application​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedDiscountApplicationConnection#returns-pageInfo)

---
<a id="calculated-line-item-connection"></a>

## Calculated​Line​Item​Connection

connection

An auto-generated type for paginating through multiple CalculatedLineItems.

### Fields with this connection

* [Calculated​Order.addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

* [Calculated​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

***

### Possible returns

* edges

  [\[Calculated​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Calculated​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedLineItem)

  non-null

  A list of nodes that are contained in CalculatedLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Calculated​Order.addedLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.addedLineItems)
* [Calculated​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.lineItems)

#### Possible returns

* [Calculated​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-edges)
* [Calculated​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-nodes)
* [Calculated​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CalculatedLineItemConnection#returns-pageInfo)

---
<a id="cart-transform-connection"></a>

## Cart​Transform​Connection

connection

An auto-generated type for paginating through multiple CartTransforms.

### Queries with this connection

* [cart​Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms)

  query

  Retrieves all cart transform functions currently deployed by your app within the merchant's store. This query provides comprehensive access to your active cart modification logic, enabling management and monitoring of bundling and merchandising features.

  The query returns paginated results with full cart transform details, including function IDs, configuration settings, and operational status.

  Cart Transform ownership is scoped to your API client, ensuring you only see and manage functions deployed by your specific app. This isolation prevents conflicts between different apps while maintaining security boundaries for sensitive merchandising logic.

  Learn more about [managing cart transforms](https://shopify.dev/docs/api/functions/latest/cart-transform).

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

### Possible returns

* edges

  [\[Cart​Transform​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cart​Transform!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform)

  non-null

  A list of nodes that are contained in CartTransformEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [cart​Transforms](https://shopify.dev/docs/api/admin-graphql/latest/queries/cartTransforms)

#### Possible returns

* [Cart​Transform​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-edges)
* [Cart​Transform​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-nodes)
* [Cart​Transform​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CartTransformConnection#returns-pageInfo)

---
<a id="cash-activity-connection"></a>

## Cash​Activity​Connection

connection

An auto-generated type for paginating through multiple CashActivities.

### Fields with this connection

* [Cash​Drawer.cashActivities](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.cashActivities)

  OBJECT

  A cash drawer for cash management.

* [Point​Of​Sale​Device​Payment​Session.cashActivities](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.cashActivities)

  OBJECT

  Tracks the payment activity for a point of sale device.

***

### Possible returns

* edges

  [\[Cash​Activity​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashActivityEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Activity!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CashActivity)

  non-null

  A list of nodes that are contained in CashActivityEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Cash​Drawer.cashActivities](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.cashActivities)
* [Point​Of​Sale​Device​Payment​Session.cashActivities](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession#field-PointOfSaleDevicePaymentSession.fields.cashActivities)

#### Possible returns

* [Cash​Activity​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection#returns-edges)
* [Cash​Activity​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection#returns-nodes)
* [Cash​Activity​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashActivityConnection#returns-pageInfo)

---
<a id="cash-drawer-connection"></a>

## Cash​Drawer​Connection

connection

An auto-generated type for paginating through multiple CashDrawers.

### Queries with this connection

* [cash​Drawers](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawers)

  query

  A list of cash drawers in the shop.

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

    * * id

        id

      * location\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Cash​Drawer​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawerEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Drawer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer)

  non-null

  A list of nodes that are contained in CashDrawerEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [cash​Drawers](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashDrawers)

#### Possible returns

* [Cash​Drawer​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashDrawerConnection#returns-edges)
* [Cash​Drawer​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashDrawerConnection#returns-nodes)
* [Cash​Drawer​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashDrawerConnection#returns-pageInfo)

---
<a id="cash-management-reason-code-connection"></a>

## Cash​Management​Reason​Code​Connection

connection

An auto-generated type for paginating through multiple CashManagementReasonCodes.

### Queries with this connection

* [cash​Management​Reason​Codes](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementReasonCodes)

  query

  Returns the cash management reason codes for the shop.

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

### Possible returns

* edges

  [\[Cash​Management​Reason​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashManagementReasonCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Management​Reason​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/CashManagementReasonCode)

  non-null

  A list of nodes that are contained in CashManagementReasonCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [cash​Management​Reason​Codes](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashManagementReasonCodes)

#### Possible returns

* [Cash​Management​Reason​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection#returns-edges)
* [Cash​Management​Reason​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection#returns-nodes)
* [Cash​Management​Reason​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashManagementReasonCodeConnection#returns-pageInfo)

---
<a id="cash-tracking-adjustment-connection"></a>

## Cash​Tracking​Adjustment​Connection

connection

An auto-generated type for paginating through multiple CashTrackingAdjustments.

### Fields with this connection

* [Cash​Tracking​Session.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments)

  OBJECT

  Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

***

### Possible returns

* edges

  [\[Cash​Tracking​Adjustment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Tracking​Adjustment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment)

  non-null

  A list of nodes that are contained in CashTrackingAdjustmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Cash​Tracking​Session.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments)

#### Possible returns

* [Cash​Tracking​Adjustment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-edges)
* [Cash​Tracking​Adjustment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-nodes)
* [Cash​Tracking​Adjustment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-pageInfo)

---
<a id="cash-tracking-session-connection"></a>

## Cash​Tracking​Session​Connection

connection

An auto-generated type for paginating through multiple CashTrackingSessions.

### Queries with this connection

* [cash​Tracking​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSessions)

  query

  Returns a shop's cash tracking sessions for locations with a POS Pro subscription.

  Tip: To query for cash tracking sessions in bulk, you can [perform a bulk operation](https://shopify.dev/docs/api/usage/bulk-operations/queries).

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

    [Cash​Tracking​Sessions​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CashTrackingSessionsSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * closing\_time

      time

    * * id

        id

      * location\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * opening\_time

      time

    * point\_of\_sale\_device\_ids

      string

    * status

      string

  ***

***

### Possible returns

* edges

  [\[Cash​Tracking​Session​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSessionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Tracking​Session!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession)

  non-null

  A list of nodes that are contained in CashTrackingSessionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [cash​Tracking​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/cashTrackingSessions)

#### Possible returns

* [Cash​Tracking​Session​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#returns-edges)
* [Cash​Tracking​Session​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#returns-nodes)
* [Cash​Tracking​Session​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingSessionConnection#returns-pageInfo)

---
<a id="catalog-connection"></a>

## Catalog​Connection

connection

An auto-generated type for paginating through multiple Catalogs.

### Fields with this connection

* [Company​Location.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.catalogs)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

### Queries with this connection

* [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)

  query

  Returns a paginated list of catalogs for the shop. Catalogs control which products are published and how they're priced in different contexts, such as international markets (Canada vs. United States), B2B company locations (different branches of the same business), or specific sales channels (such as online store vs. POS).

  Filter catalogs by [`type`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-type) and use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-query) argument to search and filter by additional criteria.

  Learn more about [Shopify Catalogs](https://shopify.dev/docs/apps/build/markets/catalogs-different-markets).

  * type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    Default:null

    ### Arguments

    The type of the catalogs to be returned.

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

    [Catalog​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

    * company\_location\_id

      id

    * * id

        id

      * managed\_country\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * market\_id

      id

    * status

      string

    * title

      string

  ***

***

### Possible returns

* edges

  [\[Catalog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CatalogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Catalog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog)

  non-null

  A list of nodes that are contained in CatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.catalogs)

#### Queries with this connection

* [catalogs](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs)

#### Possible returns

* [Catalog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-edges)
* [Catalog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-nodes)
* [Catalog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CatalogConnection#returns-pageInfo)

---
<a id="channel-connection"></a>

## Channel​Connection

connection

An auto-generated type for paginating through multiple Channels.

### Fields with this connection

* [App.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels)

  OBJECT

  A Shopify application that extends store functionality. Apps integrate with Shopify through APIs to add features, automate workflows, or connect external services.

  Provides metadata about the app including its developer information and listing details in the Shopify App Store. Use the [`installation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.installation) field to determine if the app is currently installed on the shop and access installation-specific details like granted [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects. Check [`failedRequirements`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.failedRequirements) before installation to identify any prerequisites that must be met.

* [App​Catalog.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels)

  OBJECT

  A catalog that defines the publication associated with an app.

* [Publication.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.channels)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

#### Deprecated fields with this connection

* [Collection.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedChannels)

  OBJECT

  Deprecated

* [Product.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedChannels)

  OBJECT

  Deprecated

* [Publishable.unpublishedChannels](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedChannels)

  INTERFACE

  Deprecated

* [Shop.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.channels)

  OBJECT

  Deprecated

***

### Queries with this connection

* [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

  query

  The list of [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel) objects on the shop. When the calling application supports multi-channel, only channels established by the calling application are returned. Each channel represents an authenticated connection to an external selling platform such as a marketplace, social media platform, online store, or point-of-sale system.

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

### Possible returns

* edges

  [\[Channel​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ChannelEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Channel!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel)

  non-null

  A list of nodes that are contained in ChannelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/App#field-App.fields.channels)
* [App​Catalog.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.channels)
* [Publication.channels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.channels)

#### Queries with this connection

* [channels](https://shopify.dev/docs/api/admin-graphql/latest/queries/channels)

#### Possible returns

* [Channel​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-edges)
* [Channel​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-nodes)
* [Channel​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ChannelConnection#returns-pageInfo)

---
<a id="checkout-and-accounts-configuration-connection"></a>

## Checkout​And​Accounts​Configuration​Connection

connection

An auto-generated type for paginating through multiple CheckoutAndAccountsConfigurations.

### Queries with this connection

* [checkout​And​Accounts​Configurations](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations)

  query

  List of checkout and accounts configurations on a shop.

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

    [Checkout​And​Accounts​Configurations​Graph​QLSort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutAndAccountsConfigurationsGraphQLSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * is\_published

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * one\_page\_checkout\_enabled

      boolean

    * typ\_osp\_pages\_enabled

      boolean

  ***

***

### Possible returns

* edges

  [\[Checkout​And​Accounts​Configuration​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfigurationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Checkout​And​Accounts​Configuration!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutAndAccountsConfiguration)

  non-null

  A list of nodes that are contained in CheckoutAndAccountsConfigurationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [checkout​And​Accounts​Configurations](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutAndAccountsConfigurations)

#### Possible returns

* [Checkout​And​Accounts​Configuration​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection#returns-edges)
* [Checkout​And​Accounts​Configuration​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection#returns-nodes)
* [Checkout​And​Accounts​Configuration​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutAndAccountsConfigurationConnection#returns-pageInfo)

---
<a id="checkout-profile-connection"></a>

## Checkout​Profile​Connection

connection

An auto-generated type for paginating through multiple CheckoutProfiles.

### Queries with this connection

* [checkout​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/checkoutProfiles)

  query

  Deprecated

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

    [Checkout​Profile​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CheckoutProfileSortKeys)

    Default:UPDATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * is\_published

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Checkout​Profile​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Checkout​Profile!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CheckoutProfile)

  non-null

  A list of nodes that are contained in CheckoutProfileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Checkout​Profile​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-edges)
* [Checkout​Profile​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-nodes)
* [Checkout​Profile​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CheckoutProfileConnection#returns-pageInfo)

---
<a id="collection-connection"></a>

## Collection​Connection

connection

An auto-generated type for paginating through multiple Collections.

### Fields with this connection

* [Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collections)

  OBJECT

  A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.

  Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.

  Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.

* [Discount​Collections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-DiscountCollections.fields.collections)

  OBJECT

  A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied.

* [Price​Rule​Item​Entitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.collections)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.collections)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collections)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Shop.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.collections)

  OBJECT

  Deprecated

***

### Queries with this connection

* [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

  query

  Retrieves a list of [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) in a store. Collections are groups of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize for display in their [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  Use the `collections` query when you need to:

  * Build a browsing interface for a store's product groupings.
  * Create collection searching, sorting, and filtering experiences (for example, by title, type, or published status).
  * Sync collection data with external systems.
  * Manage both custom ([manual](https://help.shopify.com/manual/products/collections/manual-shopify-collection)) and smart ([automated](https://help.shopify.com/manual/products/collections/automated-collections)) collections.

  The `collections` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) for large catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-savedSearchId) for frequently used collection queries.

  The `collections` query returns collections with their associated metadata, including:

  * Basic collection information (title, description, handle, and type)
  * Collection image and SEO metadata
  * Product count and product relationships
  * Collection rules (for smart collections)
  * Publishing status and publication details
  * Metafields and custom attributes

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

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

    [Collection​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * collection\_type

        string

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:
        * `custom`
        * `smart`

    * * id

        id

      * product\_id

        id

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by collections containing a product by its ID.

    * * product\_publication\_status

        string

      * publishable\_status

        string

      * published\_at

        time

      - Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the collection was published to the Online Store.

    * * published\_status

        string

      * title

        string

      - Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:
        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_id_or_handle}-published`
        * `* {channel_id_or_handle}-visible`
        * `* {channel_id_or_handle}-intended`
        * `* {channel_id_or_handle}-hidden`
        * `* {channel_app_id_or_handle}-published`
        * `* {channel_app_id_or_handle}-visible`
        * `* {channel_app_id_or_handle}-intended`
        * `* {channel_app_id_or_handle}-hidden`
        * `unavailable`
        Example:
        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:my-channel-handle-published`
        * `published_status:unavailable`

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Collection​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Collection!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  non-null

  A list of nodes that are contained in CollectionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Channel.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collections)
* [Discount​Collections.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections#field-DiscountCollections.fields.collections)
* [Price​Rule​Item​Entitlements.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.collections)
* [Price​Rule​Line​Item​Prerequisites.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.collections)
* [Product.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections)
* [Publication.collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collections)

#### Queries with this connection

* [collections](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections)

#### Possible returns

* [Collection​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-edges)
* [Collection​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-nodes)
* [Collection​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionConnection#returns-pageInfo)

---
<a id="collection-publication-connection"></a>

## Collection​Publication​Connection

connection

An auto-generated type for paginating through multiple CollectionPublications.

### Fields with this connection

* [Collection.publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.publications)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Collection​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Collection​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication)

  non-null

  A list of nodes that are contained in CollectionPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Collection​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-edges)
* [Collection​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-nodes)
* [Collection​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-pageInfo)

---
<a id="combined-listing-child-connection"></a>

## Combined​Listing​Child​Connection

connection

An auto-generated type for paginating through multiple CombinedListingChildren.

### Fields with this connection

* [Combined​Listing.combinedListingChildren](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.combinedListingChildren)

  OBJECT

  A combined listing of products.

***

### Possible returns

* edges

  [\[Combined​Listing​Child​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChildEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Combined​Listing​Child!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListingChild)

  non-null

  A list of nodes that are contained in CombinedListingChildEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Combined​Listing.combinedListingChildren](https://shopify.dev/docs/api/admin-graphql/latest/objects/CombinedListing#field-CombinedListing.fields.combinedListingChildren)

#### Possible returns

* [Combined​Listing​Child​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-edges)
* [Combined​Listing​Child​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-nodes)
* [Combined​Listing​Child​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CombinedListingChildConnection#returns-pageInfo)

---
<a id="comment-connection"></a>

## Comment​Connection

connection

An auto-generated type for paginating through multiple Comments.

### Fields with this connection

* [Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments)

  OBJECT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

***

### Queries with this connection

* [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

  query

  List of the shop's comments.

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

    [Comment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CommentSortKeys)

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

      * published\_at

        time

      * published\_status

        string

      * status

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the comment was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the comment was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

      - Valid values:
        * `any`
        * `published`
        * `unpublished`
        Example:
        * `published_status:any`
        * `published_status:published`
        * `published_status:unpublished`

    * updated\_at

      time

      Filter by the date and time when the comment was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  ***

***

### Possible returns

* edges

  [\[Comment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Comment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  non-null

  A list of nodes that are contained in CommentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Article.comments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.comments)

#### Queries with this connection

* [comments](https://shopify.dev/docs/api/admin-graphql/latest/queries/comments)

#### Possible returns

* [Comment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-edges)
* [Comment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-nodes)
* [Comment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CommentConnection#returns-pageInfo)

---
<a id="company-connection"></a>

## Company​Connection

connection

An auto-generated type for paginating through multiple Companies.

### Queries with this connection

* [companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)

  query

  A paginated list of companies in the shop. [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) objects are business entities that purchase from the merchant.

  Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies#arguments-query) argument to filter companies by attributes like name or externalId. Sort and paginate results to handle large datasets efficiently. Learn more about [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

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

    [Company​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanySortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * active\_customers\_count

        integer

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * external\_id

      id

    * * id

        id

      * metafields.{namespace}.{key}

        mixed

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * ordering\_status

      string

    * since\_date

      time

    * updated\_at

      time

  ***

***

### Possible returns

* edges

  [\[Company​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company)

  non-null

  A list of nodes that are contained in CompanyEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [companies](https://shopify.dev/docs/api/admin-graphql/latest/queries/companies)

#### Possible returns

* [Company​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection#returns-edges)
* [Company​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection#returns-nodes)
* [Company​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyConnection#returns-pageInfo)

---
<a id="company-contact-connection"></a>

## Company​Contact​Connection

connection

An auto-generated type for paginating through multiple CompanyContacts.

### Fields with this connection

* [Company.contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

***

### Possible returns

* edges

  [\[Company​Contact​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact)

  non-null

  A list of nodes that are contained in CompanyContactEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.contacts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contacts)

#### Possible returns

* [Company​Contact​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-edges)
* [Company​Contact​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-nodes)
* [Company​Contact​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactConnection#returns-pageInfo)

---
<a id="company-contact-role-assignment-connection"></a>

## Company​Contact​Role​Assignment​Connection

connection

An auto-generated type for paginating through multiple CompanyContactRoleAssignments.

### Fields with this connection

* [Company​Contact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.roleAssignments)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

### Possible returns

* edges

  [\[Company​Contact​Role​Assignment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact​Role​Assignment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleAssignment)

  non-null

  A list of nodes that are contained in CompanyContactRoleAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Contact.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.roleAssignments)
* [Company​Location.roleAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

#### Possible returns

* [Company​Contact​Role​Assignment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-edges)
* [Company​Contact​Role​Assignment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-nodes)
* [Company​Contact​Role​Assignment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleAssignmentConnection#returns-pageInfo)

---
<a id="company-contact-role-connection"></a>

## Company​Contact​Role​Connection

connection

An auto-generated type for paginating through multiple CompanyContactRoles.

### Fields with this connection

* [Company.contactRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactRoles)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

***

### Possible returns

* edges

  [\[Company​Contact​Role​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRoleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact​Role!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContactRole)

  non-null

  A list of nodes that are contained in CompanyContactRoleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.contactRoles](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.contactRoles)

#### Possible returns

* [Company​Contact​Role​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#returns-edges)
* [Company​Contact​Role​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#returns-nodes)
* [Company​Contact​Role​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyContactRoleConnection#returns-pageInfo)

---
<a id="company-location-connection"></a>

## Company​Location​Connection

connection

An auto-generated type for paginating through multiple CompanyLocations.

### Fields with this connection

* [Company.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.locations)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location​Catalog.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.companyLocations)

  OBJECT

  A list of products with publishing and pricing information associated with company locations.

  Company location catalogs can include an optional publication to control product visibility and a price list to customize pricing. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

* [Company​Locations​Condition.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition#field-CompanyLocationsCondition.fields.companyLocations)

  OBJECT

  A condition checking the company location a visitor is purchasing for.

***

### Queries with this connection

* [company​Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocations)

  query

  A paginated list of [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects for B2B customers. Company locations represent individual branches or offices of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) where B2B orders can be placed.

  Each location can have its own billing and shipping addresses, tax settings, [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) assignments with custom pricing. Use the query parameter to search locations by name or other attributes.

  Learn more about [managing company locations](https://shopify.dev/docs/apps/build/b2b/manage-client-company-locations).

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

    [Company​Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CompanyLocationSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * external\_id

      string

    * * id

        id

      * ids

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * * metafields.{namespace}.{key}

        mixed

      * name

        string

      - Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

    * updated\_at

      time

  ***

***

### Possible returns

* edges

  [\[Company​Location​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation)

  non-null

  A list of nodes that are contained in CompanyLocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.locations)
* [Company​Location​Catalog.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationCatalog#field-CompanyLocationCatalog.fields.companyLocations)
* [Company​Locations​Condition.companyLocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationsCondition#field-CompanyLocationsCondition.fields.companyLocations)

#### Queries with this connection

* [company​Locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/companyLocations)

#### Possible returns

* [Company​Location​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection#returns-edges)
* [Company​Location​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection#returns-nodes)
* [Company​Location​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationConnection#returns-pageInfo)

---
<a id="company-location-staff-member-assignment-connection"></a>

## Company​Location​Staff​Member​Assignment​Connection

connection

An auto-generated type for paginating through multiple CompanyLocationStaffMemberAssignments.

### Fields with this connection

* [Company​Location.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

***

### Possible returns

* edges

  [\[Company​Location​Staff​Member​Assignment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Location​Staff​Member​Assignment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocationStaffMemberAssignment)

  non-null

  A list of nodes that are contained in CompanyLocationStaffMemberAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.staffMemberAssignments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.staffMemberAssignments)

#### Possible returns

* [Company​Location​Staff​Member​Assignment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-edges)
* [Company​Location​Staff​Member​Assignment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-nodes)
* [Company​Location​Staff​Member​Assignment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CompanyLocationStaffMemberAssignmentConnection#returns-pageInfo)

---
<a id="country-harmonized-system-code-connection"></a>

## Country​Harmonized​System​Code​Connection

connection

An auto-generated type for paginating through multiple CountryHarmonizedSystemCodes.

### Fields with this connection

* [Inventory​Item.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.countryHarmonizedSystemCodes)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

***

### Possible returns

* edges

  [\[Country​Harmonized​System​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Country​Harmonized​System​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CountryHarmonizedSystemCode)

  non-null

  A list of nodes that are contained in CountryHarmonizedSystemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Inventory​Item.countryHarmonizedSystemCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.countryHarmonizedSystemCodes)

#### Possible returns

* [Country​Harmonized​System​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-edges)
* [Country​Harmonized​System​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-nodes)
* [Country​Harmonized​System​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CountryHarmonizedSystemCodeConnection#returns-pageInfo)

---
<a id="currency-setting-connection"></a>

## Currency​Setting​Connection

connection

An auto-generated type for paginating through multiple CurrencySettings.

### Fields with this connection

* [Shop.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencySettings)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

### Possible returns

* edges

  [\[Currency​Setting​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySettingEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Currency​Setting!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

  non-null

  A list of nodes that are contained in CurrencySettingEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shop.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencySettings)

#### Possible returns

* [Currency​Setting​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-edges)
* [Currency​Setting​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-nodes)
* [Currency​Setting​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-pageInfo)

---
<a id="customer-account-page-connection"></a>

## Customer​Account​Page​Connection

connection

An auto-generated type for paginating through multiple CustomerAccountPages.

### Queries with this connection

* [customer​Account​Pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerAccountPages)

  query

  List of the shop's customer account pages.

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

### Possible returns

* edges

  [\[Customer​Account​Page​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountPageEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Account​Page!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerAccountPage)

  non-null

  A list of nodes that are contained in CustomerAccountPageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [customer​Account​Pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerAccountPages)

#### Possible returns

* [Customer​Account​Page​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerAccountPageConnection#returns-edges)
* [Customer​Account​Page​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerAccountPageConnection#returns-nodes)
* [Customer​Account​Page​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerAccountPageConnection#returns-pageInfo)

---
<a id="customer-connection"></a>

## Customer​Connection

connection

An auto-generated type for paginating through multiple Customers.

### Fields with this connection

* [Price​Rule​Customer​Selection.customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-PriceRuleCustomerSelection.fields.customers)

  OBJECT

  A selection of customers for whom the price rule applies.

* [Shop.customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customers)

  OBJECT

  Deprecated

***

### Queries with this connection

* [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)

  query

  Returns a list of [customers](https://shopify.dev/api/admin-graphql/latest/objects/Customer) in your Shopify store, including key information such as name, email, location, and purchase history. Use this query to segment your audience, personalize marketing campaigns, or analyze customer behavior by applying filters based on location, order history, marketing preferences and tags. The `customers` query supports [pagination](https://shopify.dev/api/usage/pagination-graphql) and [sorting](https://shopify.dev/api/admin-graphql/latest/enums/CustomerSortKeys).

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

    [Customer​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * accepts\_marketing

        boolean

      * country

        string

      * customer\_date

        time

      * email

        string

      * first\_name

        string

      * id

        id

      * last\_abandoned\_order\_date

        time

      * last\_name

        string

      * order\_date

        time

      * orders\_count

        integer

      * phone

        string

      * state

        string

      * tag

        string

      * tag\_not

        string

      * total\_spent

        float

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether a customer has consented to receive marketing material.

      - Example:

        * `accepts_marketing:true`

        Filter by the country associated with the customer's address. Use either the country name or the two-letter country code.

      - Example:

        * `country:Canada`
        * `country:JP`

        Filter by the date and time when the customer record was created. This query parameter filters by the [`createdAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-createdAt) field.

      - Example:

        * `customer_date:'2024-03-15T14:30:00Z'`
        * `customer_date: >='2024-01-01'`

        The customer's email address, used to communicate information about orders and for the purposes of email marketing campaigns. You can use a wildcard value to filter the query by customers who have an email address specified. Please note that *email* is a tokenized field: To retrieve exact matches, quote the email address (*phrase query*) as described in [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax).

      - Example:

        * `email:gmail.com`
        * `email:"bo.wang@example.com"`
        * `email:*`

        Filter by the customer's first name.

      - Example:

        * `first_name:Jane`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time of the customer's most recent abandoned checkout. An abandoned checkout occurs when a customer adds items to their cart, begins the checkout process, but leaves the site without completing their purchase.

      - Example:

        * `last_abandoned_order_date:'2024-04-01T10:00:00Z'`
        * `last_abandoned_order_date: >='2024-01-01'`

        Filter by the customer's last name.

      - Example:

        * `last_name:Reeves`

        Filter by the date and time that the order was placed by the customer. Use this query filter to check if a customer has placed at least one order within a specified date range.

      - Example:

        * `order_date:'2024-02-20T00:00:00Z'`
        * `order_date: >='2024-01-01'`
        * `order_date:'2024-01-01..2024-03-31'`

        Filter by the total number of orders a customer has placed.

      - Example:

        * `orders_count:5`

        The phone number of the customer, used to communicate information about orders and for the purposes of SMS marketing campaigns. You can use a wildcard value to filter the query by customers who have a phone number specified.

      - Example:

        * `phone:+18005550100`
        * `phone:*`

        Filter by the [state](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-state) of the customer's account with the shop. This filter is only valid when [Classic Customer Accounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerAccountsV2#field-customerAccountsVersion) is active.

      - Example:

        * `state:ENABLED`
        * `state:INVITED`
        * `state:DISABLED`
        * `state:DECLINED`

        Filter by the tags that are associated with the customer. This query parameter accepts multiple tags separated by commas.

      - Example:

        * `tag:'VIP'`
        * `tag:'Wholesale,Repeat'`

        Filter by the tags that aren't associated with the customer. This query parameter accepts multiple tags separated by commas.

      - Example:

        * `tag_not:'Prospect'`
        * `tag_not:'Test,Internal'`

        Filter by the total amount of money a customer has spent across all orders.

      - Example:

        * `total_spent:100.50`
        * `total_spent:50.00`
        * `total_spent:>100.50`
        * `total_spent:>50.00`

        The date and time, matching a whole day, when the customer's information was last updated.

        Example:

        * `updated_at:2024-01-01T00:00:00Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  ***

***

### Possible returns

* edges

  [\[Customer​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  non-null

  A list of nodes that are contained in CustomerEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Price​Rule​Customer​Selection.customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleCustomerSelection#field-PriceRuleCustomerSelection.fields.customers)

#### Queries with this connection

* [customers](https://shopify.dev/docs/api/admin-graphql/latest/queries/customers)

#### Possible returns

* [Customer​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection#returns-edges)
* [Customer​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection#returns-nodes)
* [Customer​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerConnection#returns-pageInfo)

---
<a id="customer-moment-connection"></a>

## Customer​Moment​Connection

connection

An auto-generated type for paginating through multiple CustomerMoments.

### Fields with this connection

* [Customer​Journey​Summary.moments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-CustomerJourneySummary.fields.moments)

  OBJECT

  A [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney) through the online store leading up to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks session data, attribution sources, and the timeline from first visit to purchase conversion.

  The summary includes the customer's position in their order history, days between first visit and order creation, and details about their first and last sessions. Use the [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments) connection to access the complete timeline of customer interactions before the purchase.

***

### Possible returns

* edges

  [\[Customer​Moment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMomentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Moment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)

  non-null

  A list of nodes that are contained in CustomerMomentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer​Journey​Summary.moments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-CustomerJourneySummary.fields.moments)

#### Possible returns

* [Customer​Moment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-edges)
* [Customer​Moment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-nodes)
* [Customer​Moment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-pageInfo)

---
<a id="customer-payment-method-connection"></a>

## Customer​Payment​Method​Connection

connection

An auto-generated type for paginating through multiple CustomerPaymentMethods.

### Fields with this connection

* [Customer.paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.paymentMethods)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

***

### Possible returns

* edges

  [\[Customer​Payment​Method​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethodEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Payment​Method!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod)

  non-null

  A list of nodes that are contained in CustomerPaymentMethodEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer.paymentMethods](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.paymentMethods)

#### Possible returns

* [Customer​Payment​Method​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-edges)
* [Customer​Payment​Method​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-nodes)
* [Customer​Payment​Method​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerPaymentMethodConnection#returns-pageInfo)

---
<a id="customer-segment-member-connection"></a>

## Customer​Segment​Member​Connection

connection

The connection type for the `CustomerSegmentMembers` object.

### Queries with this connection

* [customer​Segment​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers)

  query

  A paginated list of customers that belong to an individual [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment). Segments group customers based on criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). Access segment members with their profile information and purchase summary data. The connection includes statistics for analyzing segment attributes (such as average and sum calculations) and a total count of all members. The maximum page size is 1000.

  * segment​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the segment.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The query that's used to filter the members. The query is composed of a combination of conditions on facts about customers such as `email_subscription_status = 'SUBSCRIBED'` with [this syntax](https://shopify.dev/api/shopifyql/segment-query-language-reference).

  * query​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the segment members query.

  * timezone

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The timezone that's used to interpret relative date arguments. The timezone defaults to UTC if the timezone isn't provided.

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the list. The sorting behaviour defaults to ascending order.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Sort the list by a given key. Valid values: • `created_at` - Sort by customer creation date • `first_order_date` - Sort by the date of the customer's first order • `last_abandoned_order_date` - Sort by the date of the customer's last abandoned checkout • `last_order_date` - Sort by the date of the customer's most recent order • `number_of_orders` - Sort by the total number of orders placed by the customer • `amount_spent` - Sort by the total amount the customer has spent across all orders

    Use with the `reverse` parameter to control sort direction (ascending by default, descending when reverse=true).

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

  ***

***

### Possible returns

* edges

  [\[Customer​Segment​Member​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMemberEdge)

  non-null

  A list of edges.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* statistics

  [Segment​Statistics!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentStatistics)

  non-null

  The statistics for a given segment.

* total​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The total number of members in a given segment.

***

### Map

#### Queries with this connection

* [customer​Segment​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSegmentMembers)

#### Possible returns

* [Customer​Segment​Member​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-edges)
* [Customer​Segment​Member​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-pageInfo)
* [Customer​Segment​Member​Connection.statistics](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-statistics)
* [Customer​Segment​Member​Connection.totalCount](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerSegmentMemberConnection#returns-totalCount)

---
<a id="customer-visit-product-info-connection"></a>

## Customer​Visit​Product​Info​Connection

connection

An auto-generated type for paginating through multiple CustomerVisitProductInfos.

### Fields with this connection

* [Abandonment.productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

* [Abandonment.productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

***

### Possible returns

* edges

  [\[Customer​Visit​Product​Info​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfoEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Visit​Product​Info!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo)

  non-null

  A list of nodes that are contained in CustomerVisitProductInfoEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Abandonment.productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart)
* [Abandonment.productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed)

#### Possible returns

* [Customer​Visit​Product​Info​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-edges)
* [Customer​Visit​Product​Info​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-nodes)
* [Customer​Visit​Product​Info​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-pageInfo)

---
<a id="deletion-event-connection"></a>

## Deletion​Event​Connection

connection

An auto-generated type for paginating through multiple DeletionEvents.

### Queries with this connection

* [deletion​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/deletionEvents)

  query

  Deprecated

  * subject​Types

    [\[Deletion​Event​Subject​Type!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSubjectType)

    ### Arguments

    List of subject types to filter by.

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

    [Deletion​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DeletionEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * occurred\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Deletion​Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Deletion​Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeletionEvent)

  non-null

  A list of nodes that are contained in DeletionEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Deletion​Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-edges)
* [Deletion​Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-nodes)
* [Deletion​Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeletionEventConnection#returns-pageInfo)

---
<a id="delivery-carrier-service-connection"></a>

## Delivery​Carrier​Service​Connection

connection

An auto-generated type for paginating through multiple DeliveryCarrierServices.

### Queries with this connection

* [carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierServices)

  query

  A paginated list of carrier services configured for the shop. Carrier services provide real-time shipping rates from external providers like FedEx, UPS, or custom shipping solutions. Use the `query` parameter to filter results by attributes such as active status.

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

    [Carrier​Service​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CarrierServiceSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * active

      boolean

    * id

      id

      Filter by `id` range.

      Example:

      * `id:1234`
      * `id:>=1234`
      * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Delivery​Carrier​Service​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierServiceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Carrier​Service!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCarrierService)

  non-null

  A list of nodes that are contained in DeliveryCarrierServiceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [carrier​Services](https://shopify.dev/docs/api/admin-graphql/latest/queries/carrierServices)

#### Possible returns

* [Delivery​Carrier​Service​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-edges)
* [Delivery​Carrier​Service​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-nodes)
* [Delivery​Carrier​Service​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCarrierServiceConnection#returns-pageInfo)

---
<a id="delivery-customization-connection"></a>

## Delivery​Customization​Connection

connection

An auto-generated type for paginating through multiple DeliveryCustomizations.

### Queries with this connection

* [delivery​Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryCustomizations)

  query

  The delivery customizations.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * enabled

      boolean

    * function\_id

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

### Possible returns

* edges

  [\[Delivery​Customization​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomizationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Customization!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization)

  non-null

  A list of nodes that are contained in DeliveryCustomizationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [delivery​Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryCustomizations)

#### Possible returns

* [Delivery​Customization​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCustomizationConnection#returns-edges)
* [Delivery​Customization​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCustomizationConnection#returns-nodes)
* [Delivery​Customization​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryCustomizationConnection#returns-pageInfo)

---
<a id="delivery-location-group-zone-connection"></a>

## Delivery​Location​Group​Zone​Connection

connection

An auto-generated type for paginating through multiple DeliveryLocationGroupZones.

### Fields with this connection

* [Delivery​Profile​Location​Group.locationGroupZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.locationGroupZones)

  OBJECT

  Links a location group with zones. Both are associated to a delivery profile.

***

### Possible returns

* edges

  [\[Delivery​Location​Group​Zone​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZoneEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Location​Group​Zone!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone)

  non-null

  A list of nodes that are contained in DeliveryLocationGroupZoneEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Profile​Location​Group.locationGroupZones](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileLocationGroup#field-DeliveryProfileLocationGroup.fields.locationGroupZones)

#### Possible returns

* [Delivery​Location​Group​Zone​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-edges)
* [Delivery​Location​Group​Zone​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-nodes)
* [Delivery​Location​Group​Zone​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryLocationGroupZoneConnection#returns-pageInfo)

---
<a id="delivery-method-definition-connection"></a>

## Delivery​Method​Definition​Connection

connection

An auto-generated type for paginating through multiple DeliveryMethodDefinitions.

### Fields with this connection

* [Delivery​Location​Group​Zone.methodDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitions)

  OBJECT

  Links a location group with a zone and the associated method definitions.

***

### Possible returns

* edges

  [\[Delivery​Method​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Method​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition)

  non-null

  A list of nodes that are contained in DeliveryMethodDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Location​Group​Zone.methodDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitions)

#### Possible returns

* [Delivery​Method​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-edges)
* [Delivery​Method​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-nodes)
* [Delivery​Method​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-pageInfo)

---
<a id="delivery-profile-connection"></a>

## Delivery​Profile​Connection

connection

An auto-generated type for paginating through multiple DeliveryProfiles.

### Queries with this connection

* [delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

  query

  Returns a paginated list of [`DeliveryProfile`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile) objects for the shop. Delivery profiles group [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects that share shipping rates and zones.

  Each profile contains [`DeliveryLocationGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup) objects that organize fulfillment [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects and their associated delivery zones. [`DeliveryZone`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryZone) objects define geographic regions with specific shipping methods and rates. Use the [`merchantOwnedOnly`](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles#arguments-merchantOwnedOnly) filter to exclude profiles that third-party apps manage.

  Learn more about [delivery profiles](https://shopify.dev/docs/apps/build/purchase-options/deferred/delivery-and-deferment#whats-a-delivery-profile).

  * merchant​Owned​Only

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    ### Arguments

    If `true`, returns only delivery profiles that were created by the merchant.

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

### Possible returns

* edges

  [\[Delivery​Profile​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Profile!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile)

  non-null

  A list of nodes that are contained in DeliveryProfileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [delivery​Profiles](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryProfiles)

#### Possible returns

* [Delivery​Profile​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-edges)
* [Delivery​Profile​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-nodes)
* [Delivery​Profile​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileConnection#returns-pageInfo)

---
<a id="delivery-profile-item-connection"></a>

## Delivery​Profile​Item​Connection

connection

An auto-generated type for paginating through multiple DeliveryProfileItems.

### Fields with this connection

* [Delivery​Profile.profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

***

### Possible returns

* edges

  [\[Delivery​Profile​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Profile​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem)

  non-null

  A list of nodes that are contained in DeliveryProfileItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Profile.profileItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.profileItems)

#### Possible returns

* [Delivery​Profile​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-edges)
* [Delivery​Profile​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-nodes)
* [Delivery​Profile​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryProfileItemConnection#returns-pageInfo)

---
<a id="delivery-promise-participant-connection"></a>

## Delivery​Promise​Participant​Connection

connection

An auto-generated type for paginating through multiple DeliveryPromiseParticipants.

### Queries with this connection

* [delivery​Promise​Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseParticipants)

  query

  Returns delivery promise participants.

  * owner​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The product variant ID to filter by.

  * branded​Promise​Handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The branded promise handle to filter by.

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

### Possible returns

* edges

  [\[Delivery​Promise​Participant​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipantEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Promise​Participant!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryPromiseParticipant)

  non-null

  A list of nodes that are contained in DeliveryPromiseParticipantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [delivery​Promise​Participants](https://shopify.dev/docs/api/admin-graphql/latest/queries/deliveryPromiseParticipants)

#### Possible returns

* [Delivery​Promise​Participant​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection#returns-edges)
* [Delivery​Promise​Participant​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection#returns-nodes)
* [Delivery​Promise​Participant​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryPromiseParticipantConnection#returns-pageInfo)

---
<a id="discount-allocation-connection"></a>

## Discount​Allocation​Connection

connection

An auto-generated type for paginating through multiple DiscountAllocations.

### Fields with this connection

* [Abandoned​Checkout​Line​Item.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations)

  OBJECT

  A single line item in an abandoned checkout.

***

### Possible returns

* edges

  [\[Discount​Allocation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation)

  non-null

  A list of nodes that are contained in DiscountAllocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Abandoned​Checkout​Line​Item.discountAllocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/AbandonedCheckoutLineItem#field-AbandonedCheckoutLineItem.fields.discountAllocations)

#### Possible returns

* [Discount​Allocation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-edges)
* [Discount​Allocation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-nodes)
* [Discount​Allocation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAllocationConnection#returns-pageInfo)

---
<a id="discount-application-connection"></a>

## Discount​Application​Connection

connection

An auto-generated type for paginating through multiple DiscountApplications.

### Fields with this connection

* [Order.discountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.discountApplications)

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

### Possible returns

* edges

  [\[Discount​Application​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Application!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication)

  non-null

  A list of nodes that are contained in DiscountApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.discountApplications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.discountApplications)

#### Possible returns

* [Discount​Application​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection#returns-edges)
* [Discount​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection#returns-nodes)
* [Discount​Application​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountApplicationConnection#returns-pageInfo)

---
<a id="discount-automatic-connection"></a>

## Discount​Automatic​Connection

connection

An auto-generated type for paginating through multiple DiscountAutomatics.

### Queries with this connection

* [automatic​Discounts](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscounts)

  query

  Deprecated

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

    [Automatic​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * id

        id

      * status

        string

      * tag

        string

      * type

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the discount status.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by a tag applied to the discount.

      - Example:

        * `tag:loyalty`
        * `tag:clearance`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

        Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `percentage`

        Example:

        * `type:bxgy`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Discount​Automatic​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Automatic!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountAutomatic)

  non-null

  A list of nodes that are contained in DiscountAutomaticEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Discount​Automatic​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection#returns-edges)
* [Discount​Automatic​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection#returns-nodes)
* [Discount​Automatic​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticConnection#returns-pageInfo)

---
<a id="discount-automatic-node-connection"></a>

## Discount​Automatic​Node​Connection

connection

An auto-generated type for paginating through multiple DiscountAutomaticNodes.

### Queries with this connection

* [automatic​Discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountNodes)

  query

  Deprecated

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

    [Automatic​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/AutomaticDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * id

        id

      * status

        string

      * tag

        string

      * type

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the discount status.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by a tag applied to the discount.

      - Example:

        * `tag:loyalty`
        * `tag:clearance`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

        Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `percentage`

        Example:

        * `type:bxgy`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Discount​Automatic​Node​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Automatic​Node!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode)

  non-null

  A list of nodes that are contained in DiscountAutomaticNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Discount​Automatic​Node​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#returns-edges)
* [Discount​Automatic​Node​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#returns-nodes)
* [Discount​Automatic​Node​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountAutomaticNodeConnection#returns-pageInfo)

---
<a id="discount-code-node-connection"></a>

## Discount​Code​Node​Connection

connection

An auto-generated type for paginating through multiple DiscountCodeNodes.

### Queries with this connection

* [code​Discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountNodes)

  query

  Deprecated

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

    [Code​Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CodeDiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * combines\_with

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * created\_at

        time

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * starts\_at

        time

      * status

        string

      * tag

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by the date and time when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `app`
        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`

        Filter by the date and time when the discount expires and is no longer available for customer use.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount.

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`

        Filter by a tag applied to the discount.

      - Example:

        * `tag:loyalty`
        * `tag:clearance`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`

        Filter by the date and time when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Discount​Code​Node​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Code​Node!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode)

  non-null

  A list of nodes that are contained in DiscountCodeNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Discount​Code​Node​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-edges)
* [Discount​Code​Node​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-nodes)
* [Discount​Code​Node​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountCodeNodeConnection#returns-pageInfo)

---
<a id="discount-node-connection"></a>

## Discount​Node​Connection

connection

An auto-generated type for paginating through multiple DiscountNodes.

### Fields with this connection

* [Customer​Merge​Preview​Default​Fields.discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

### Queries with this connection

* [discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

  query

  Returns a list of discounts.

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

    [Discount​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * code

        string

      * combines\_with

        string

      * combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line

        string

      * created\_at

        time

      * discount\_class

        string

      * discount\_type

        string

      * ends\_at

        time

      * id

        id

      * method

        string

      * starts\_at

        time

      * status

        string

      * tag

        string

      * times\_used

        integer

      * title

        string

      * type

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the discount code. Not supported for bulk discounts.

      - Example:

        * `code:WELCOME10`

        Filter by the [Shopify Functions discount classes](https://shopify.dev/docs/apps/build/discounts#discount-classes) that the [discount type](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountnodes#argument-query-filter-discount_type) can combine with. Supports multiple values separated by commas (e.g., combines\_with:product\_discounts,order\_discounts).

      - Valid values:

        * `order_discounts`
        * `product_discounts`
        * `shipping_discounts`

        Example:

        * `combines_with:product_discounts`
        * `combines_with:product_discounts,order_discounts`

        Filter by a combines with tag applied to discounts on the same cart line. Supports multiple tags separated by commas (e.g., combines\_with.product\_discounts\_with\_tags\_on\_same\_cart\_line:priority,exclusive).

      - Example:

        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority`
        * `combines_with.product_discounts_with_tags_on_same_cart_line:priority,exclusive`

        Filter by the date and time, in the shop's timezone, when the discount was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the [discount class](https://shopify.dev/docs/apps/build/discounts#discount-classes). Supports multiple classes separated by commas (e.g., discount\_class:product,order).

      - Valid values:

        * `order`
        * `product`
        * `shipping`

        Example:

        * `discount_class:product`
        * `discount_class:product,order`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., discount\_type:percentage,fixed\_amount).

      - Valid values:

        * `app`
        * `bogo`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `discount_type:fixed_amount`
        * `discount_type:percentage,fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount ends.

      - Example:

        * `ends_at:>'2020-10-21T23:39:20Z'`
        * `ends_at:<now`
        * `ends_at:<='2024'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the [discount method](https://shopify.dev/docs/apps/build/discounts#discount-methods). Supports multiple methods separated by commas (e.g., method:code,automatic).

      - Valid values:

        * `automatic`
        * `code`

        Example:

        * `method:code`
        * `method:code,automatic`

        Filter by the date and time, in the shop's timezone, when the discount becomes active and is available for customer use.

      - Example:

        * `starts_at:>'2020-10-21T23:39:20Z'`
        * `starts_at:<now`
        * `starts_at:<='2024'`

        Filter by the status of the discount. Supports multiple statuses separated by commas (e.g., status:active,scheduled).

      - Valid values:

        * `active`
        * `expired`
        * `scheduled`

        Example:

        * `status:scheduled`
        * `status:active,scheduled`

        Filter by a tag applied to the discount. Supports multiple tags separated by commas (e.g., tag:loyalty,clearance).

      - Example:

        * `tag:loyalty`
        * `tag:loyalty,clearance`

        Filter by the number of times the discount has been used. For example, if a "Buy 3, Get 1 Free" t-shirt discount is automatically applied in 200 transactions, then the discount has been used 200 times.\
        \
        This value is updated asynchronously. As a result, it might be different than the actual usage count.

      - Example:

        * `times_used:0`
        * `times_used:>150`
        * `times_used:>=200`

        Filter by the discount name that displays to merchants in the Shopify admin and to customers.

      - Example:

        * `title:Black Friday Sale`

        Filter by the [discount type](https://help.shopify.com/manual/discounts/discount-types). Supports multiple types separated by commas (e.g., type:percentage,fixed\_amount).

      - Valid values:

        * `all`
        * `all_with_app`
        * `app`
        * `bxgy`
        * `fixed_amount`
        * `free_shipping`
        * `percentage`

        Example:

        * `type:percentage`
        * `type:percentage,fixed_amount`

        Filter by the date and time, in the shop's timezone, when the discount was last updated.

        Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Discount​Node​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Node!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode)

  non-null

  A list of nodes that are contained in DiscountNodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer​Merge​Preview​Default​Fields.discountNodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.discountNodes)

#### Queries with this connection

* [discount​Nodes](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountNodes)

#### Possible returns

* [Discount​Node​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-edges)
* [Discount​Node​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-nodes)
* [Discount​Node​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountNodeConnection#returns-pageInfo)

---
<a id="discount-redeem-code-bulk-creation-code-connection"></a>

## Discount​Redeem​Code​Bulk​Creation​Code​Connection

connection

An auto-generated type for paginating through multiple DiscountRedeemCodeBulkCreationCodes.

### Fields with this connection

* [Discount​Redeem​Code​Bulk​Creation.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.codes)

  OBJECT

  The properties and status of a bulk discount redeem code creation operation.

***

### Possible returns

* edges

  [\[Discount​Redeem​Code​Bulk​Creation​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Redeem​Code​Bulk​Creation​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreationCode)

  non-null

  A list of nodes that are contained in DiscountRedeemCodeBulkCreationCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Discount​Redeem​Code​Bulk​Creation.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeBulkCreation#field-DiscountRedeemCodeBulkCreation.fields.codes)

#### Possible returns

* [Discount​Redeem​Code​Bulk​Creation​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-edges)
* [Discount​Redeem​Code​Bulk​Creation​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-nodes)
* [Discount​Redeem​Code​Bulk​Creation​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeBulkCreationCodeConnection#returns-pageInfo)

---
<a id="discount-redeem-code-connection"></a>

## Discount​Redeem​Code​Connection

connection

An auto-generated type for paginating through multiple DiscountRedeemCodes.

### Fields with this connection

* [Discount​Code​App.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>App\</span>\</code> object, with the exception that \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>App\</span>\</code> stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Basic\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Basic\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Bxgy\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Bxgy\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Free\<wbr/>Shipping\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Free\<wbr/>Shipping\</span>\</code> object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

### Possible returns

* edges

  [\[Discount​Redeem​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Redeem​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode)

  non-null

  A list of nodes that are contained in DiscountRedeemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Discount​Code​App.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes)
* [Discount​Code​Basic.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes)
* [Discount​Code​Bxgy.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes)
* [Discount​Code​Free​Shipping.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes)

#### Possible returns

* [Discount​Redeem​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-edges)
* [Discount​Redeem​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-nodes)
* [Discount​Redeem​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-pageInfo)

---
<a id="draft-order-connection"></a>

## Draft​Order​Connection

connection

An auto-generated type for paginating through multiple DraftOrders.

### Fields with this connection

* [Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer​Merge​Preview​Default​Fields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

### Queries with this connection

* [draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

  query

  List of saved draft orders.

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

    [Draft​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * customer\_id

      id

    * * id

        id

      * source

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

    * tag

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Draft​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  non-null

  A list of nodes that are contained in DraftOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.draftOrders)
* [Company​Contact.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)
* [Company​Location.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)
* [Customer​Merge​Preview​Default​Fields.draftOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.draftOrders)

#### Queries with this connection

* [draft​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrders)

#### Possible returns

* [Draft​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-edges)
* [Draft​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-nodes)
* [Draft​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderConnection#returns-pageInfo)

---
<a id="draft-order-line-item-connection"></a>

## Draft​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple DraftOrderLineItems.

### Fields with this connection

* [Draft​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

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

***

### Possible returns

* edges

  [\[Draft​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

  non-null

  A list of nodes that are contained in DraftOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Draft​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

#### Possible returns

* [Draft​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-edges)
* [Draft​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-nodes)
* [Draft​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-pageInfo)

---
<a id="event-connection"></a>

## Event​Connection

connection

An auto-generated type for paginating through multiple Events.

### Fields with this connection

* [Article.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events)

  OBJECT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

* [Blog.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.events)

  OBJECT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Collection.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.events)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Comment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.events)

  OBJECT

  A comment on an article.

* [Company.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.events)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.events)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.events)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Discount​Automatic​Bxgy.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.events)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  **Note:** The \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\<wbr/>Bxgy\</span>\</code>\</a> object has similar functionality to the \<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Automatic\<wbr/>Bxgy\</span>\</code> object, but customers need to enter a code to receive a discount.\</p> \<p>API versions prior to \<code>2025-10\</code> only return automatic discounts with \<code>context\</code> set to \<code>all\</code>, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.events)

  OBJECT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Code​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.events)

  OBJECT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.events)

  OBJECT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

* [Draft​Order.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.events)

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

* [Has​Events.events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents#fields-events)

  INTERFACE

  Represents an object that has a list of events.

* [Inventory​Transfer.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.events)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

* [Order.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.events)

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

* [Page.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.events)

  OBJECT

  A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

  Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

* [Price​Rule.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.events)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  **Note:** Use the types and queries included our \<a href="https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started">discount tutorials\</a> instead. These will replace the GraphQL Admin API\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> object and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\</span>\</code>\</a> union, and the REST Admin API\&#39;s deprecated\<a href="https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> resource.

  ***

* [Product.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.events)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.events)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

***

### Queries with this connection

* [events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events)

  query

  A paginated list of events that chronicle activities in the store. [`Event`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event) is an interface implemented by types such as [`BasicEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BasicEvent) and [`CommentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentEvent) that track actions such as creating [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article) objects, fulfilling [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects, adding [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, or staff comments on timelines.

  The query supports filtering and sorting to help you find specific events or audit store activity over time.

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

### Possible returns

* edges

  [\[Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/EventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Event)

  non-null

  A list of nodes that are contained in EventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Article.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.events)
* [Blog.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.events)
* [Collection.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.events)
* [Comment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment#field-Comment.fields.events)
* [Company.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.events)
* [Company​Location.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.events)
* [Customer.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.events)
* [Discount​Automatic​Bxgy.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.events)
* [Discount​Automatic​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.events)
* [Discount​Code​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.events)
* [Discount​Node.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.events)
* [Draft​Order.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.events)
* [Has​Events.events](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasEvents#fields-events)
* [Inventory​Transfer.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.events)
* [Order.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.events)
* [Page.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.events)
* [Price​Rule.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.events)
* [Product.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.events)
* [Product​Variant.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.events)

#### Queries with this connection

* [events](https://shopify.dev/docs/api/admin-graphql/latest/queries/events)

#### Possible returns

* [Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection#returns-edges)
* [Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection#returns-nodes)
* [Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/EventConnection#returns-pageInfo)

---
<a id="exchange-line-item-connection"></a>

## Exchange​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ExchangeLineItems.

### Fields with this connection

* [Return.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.exchangeLineItems)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

### Possible returns

* edges

  [\[Exchange​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Exchange​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ExchangeLineItem)

  non-null

  A list of nodes that are contained in ExchangeLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.exchangeLineItems)

#### Possible returns

* [Exchange​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection#returns-edges)
* [Exchange​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection#returns-nodes)
* [Exchange​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ExchangeLineItemConnection#returns-pageInfo)

---
<a id="file-connection"></a>

## File​Connection

connection

An auto-generated type for paginating through multiple Files.

### Queries with this connection

* [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)

  query

  Retrieves a paginated list of files that have been uploaded to a Shopify store. Files represent digital assets that merchants can upload to their store for various purposes including product images, marketing materials, documents, and brand assets.

  Use the `files` query to retrieve information associated with the following workflows:

  * [Managing product media and images](https://shopify.dev/docs/apps/build/online-store/product-media)
  * [Theme development and asset management](https://shopify.dev/docs/storefronts/themes/store/success/brand-assets)
  * Brand asset management and [checkout branding](https://shopify.dev/docs/apps/build/checkout/styling/add-favicon)

  Files can include multiple [content types](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileContentType), such as images, videos, 3D models, and generic files. Each file has properties like dimensions, file size, alt text for accessibility, and upload status. Files can be filtered by [media type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MediaContentType) and can be associated with [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [themes](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme), and other store resources.

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

    [File​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FileSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * filename

      string

    * * id

        id

      * ids

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * media\_type

      string

    * original\_upload\_size

      float

    * product\_id

      string

    * status

      string

    * updated\_at

      time

    * used\_in

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[File​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[File!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/File)

  non-null

  A list of nodes that are contained in FileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [files](https://shopify.dev/docs/api/admin-graphql/latest/queries/files)

#### Possible returns

* [File​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-edges)
* [File​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-nodes)
* [File​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FileConnection#returns-pageInfo)

---
<a id="fulfillment-connection"></a>

## Fulfillment​Connection

connection

An auto-generated type for paginating through multiple Fulfillments.

### Fields with this connection

* [Fulfillment​Order.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillments)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  **Note:** Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.\</p> \<p>\<a href="#the-lifecycle-of-a-fulfillment-order">See below for more details on the lifecycle of a fulfillment order\</a>.

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

***

### Possible returns

* edges

  [\[Fulfillment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  non-null

  A list of nodes that are contained in FulfillmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment​Order.fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillments)

#### Possible returns

* [Fulfillment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection#returns-edges)
* [Fulfillment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection#returns-nodes)
* [Fulfillment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentConnection#returns-pageInfo)

---
<a id="fulfillment-event-connection"></a>

## Fulfillment​Event​Connection

connection

An auto-generated type for paginating through multiple FulfillmentEvents.

### Fields with this connection

* [Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

### Possible returns

* edges

  [\[Fulfillment​Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent)

  non-null

  A list of nodes that are contained in FulfillmentEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment.events](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.events)

#### Possible returns

* [Fulfillment​Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-edges)
* [Fulfillment​Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-nodes)
* [Fulfillment​Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentEventConnection#returns-pageInfo)

---
<a id="fulfillment-line-item-connection"></a>

## Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple FulfillmentLineItems.

### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

***

### Possible returns

* edges

  [\[Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentLineItem)

  non-null

  A list of nodes that are contained in FulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

#### Possible returns

* [Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-edges)
* [Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)

---
<a id="fulfillment-order-connection"></a>

## Fulfillment​Order​Connection

connection

An auto-generated type for paginating through multiple FulfillmentOrders.

### Fields with this connection

* [Fulfillment.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentOrders)

  OBJECT

  A shipment of one or more items from an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks which [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects ship, their quantities, and the shipment's tracking information.

  Includes tracking details such as the carrier, tracking numbers, and URLs. The fulfillment connects to both the original order and any associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. [`FulfillmentEvent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentEvent) objects record milestones throughout the shipment lifecycle, from creation through delivery.

  Multiple fulfillments can exist for a single order when items either ship separately or from different locations.

* [Fulfillment​Order.fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillmentOrdersForMerge)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  **Note:** Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.\</p> \<p>\<a href="#the-lifecycle-of-a-fulfillment-order">See below for more details on the lifecycle of a fulfillment order\</a>.

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

* [Order.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.fulfillmentOrders)

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

#### Deprecated fields with this connection

* [Shop.assignedFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.assignedFulfillmentOrders)

  OBJECT

  Deprecated

* [Shop.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.fulfillmentOrders)

  OBJECT

  Deprecated

***

### Queries with this connection

* [assigned​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders)

  query

  The paginated list of fulfillment orders assigned to the shop locations owned by the app.

  Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations managed by [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) that are registered by the app. One app (api\_client) can host multiple fulfillment services on a shop. Each fulfillment service manages a dedicated location on a shop. Assigned fulfillment orders can have associated [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus), or might currently not be requested to be fulfilled.

  The app must have the `read_assigned_fulfillment_orders` [access scope](https://shopify.dev/docs/api/usage/access-scopes) to be able to retrieve the fulfillment orders assigned to its locations.

  All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default. Perform filtering with the `assignmentStatus` argument to receive only fulfillment orders that have been requested to be fulfilled.

  * assignment​Status

    [Fulfillment​Order​Assignment​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderAssignmentStatus)

    ### Arguments

    The assigment status of the fulfillment orders that should be returned. If `assignmentStatus` argument is not provided, then the query will return all assigned fulfillment orders, except those that have the `CLOSED` status.

  * location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Returns fulfillment orders only for certain locations, specified by a list of location IDs.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* [fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders)

  query

  The paginated list of all fulfillment orders. The returned fulfillment orders are filtered according to the [fulfillment order access scopes](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder#api-access-scopes) granted to the app.

  Use this query to retrieve fulfillment orders assigned to merchant-managed locations, third-party fulfillment service locations, or all kinds of locations together.

  For fetching only the fulfillment orders assigned to the app's locations, use the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection.

  * include​Closed

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include closed fulfillment orders.

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

    [Fulfillment​Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * assigned\_location\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * status

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  ***

* [manual​Holds​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualHoldsFulfillmentOrders)

  query

  Returns a list of fulfillment orders that are on hold.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    The query conditions used to filter fulfillment orders. Only fulfillment orders corresponding to orders matching the query will be counted. Supported filter parameters:

    * `order_financial_status`
    * `order_risk_level`
    * `shipping_address_coordinates_validated`

    See the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

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

### Possible returns

* edges

  [\[Fulfillment​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  non-null

  A list of nodes that are contained in FulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentOrders)
* [Fulfillment​Order.fulfillmentOrdersForMerge](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.fulfillmentOrdersForMerge)
* [Order.fulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.fulfillmentOrders)

#### Queries with this connection

* [assigned​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/assignedFulfillmentOrders)
* [fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/fulfillmentOrders)
* [manual​Holds​Fulfillment​Orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/manualHoldsFulfillmentOrders)

#### Possible returns

* [Fulfillment​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-edges)
* [Fulfillment​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-nodes)
* [Fulfillment​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderConnection#returns-pageInfo)

---
<a id="fulfillment-order-line-item-connection"></a>

## Fulfillment​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple FulfillmentOrderLineItems.

### Fields with this connection

* [Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.lineItems)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  **Note:** Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.\</p> \<p>\<a href="#the-lifecycle-of-a-fulfillment-order">See below for more details on the lifecycle of a fulfillment order\</a>.

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

* [Fulfillment​Order​Location​For​Move.availableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.availableLineItems)

  OBJECT

  A location that a fulfillment order can potentially move to.

* [Fulfillment​Order​Location​For​Move.unavailableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.unavailableLineItems)

  OBJECT

  A location that a fulfillment order can potentially move to.

***

### Possible returns

* edges

  [\[Fulfillment​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem)

  non-null

  A list of nodes that are contained in FulfillmentOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.lineItems)
* [Fulfillment​Order​Location​For​Move.availableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.availableLineItems)
* [Fulfillment​Order​Location​For​Move.unavailableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove#field-FulfillmentOrderLocationForMove.fields.unavailableLineItems)

#### Possible returns

* [Fulfillment​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#returns-edges)
* [Fulfillment​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#returns-nodes)
* [Fulfillment​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLineItemConnection#returns-pageInfo)

---
<a id="fulfillment-order-location-for-move-connection"></a>

## Fulfillment​Order​Location​For​Move​Connection

connection

An auto-generated type for paginating through multiple FulfillmentOrderLocationForMoves.

### Fields with this connection

* [Fulfillment​Order.locationsForMove](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.locationsForMove)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  **Note:** Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.\</p> \<p>\<a href="#the-lifecycle-of-a-fulfillment-order">See below for more details on the lifecycle of a fulfillment order\</a>.

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

***

### Possible returns

* edges

  [\[Fulfillment​Order​Location​For​Move​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMoveEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Order​Location​For​Move!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLocationForMove)

  non-null

  A list of nodes that are contained in FulfillmentOrderLocationForMoveEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment​Order.locationsForMove](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.locationsForMove)

#### Possible returns

* [Fulfillment​Order​Location​For​Move​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection#returns-edges)
* [Fulfillment​Order​Location​For​Move​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection#returns-nodes)
* [Fulfillment​Order​Location​For​Move​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderLocationForMoveConnection#returns-pageInfo)

---
<a id="fulfillment-order-merchant-request-connection"></a>

## Fulfillment​Order​Merchant​Request​Connection

connection

An auto-generated type for paginating through multiple FulfillmentOrderMerchantRequests.

### Fields with this connection

* [Fulfillment​Order.merchantRequests](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.merchantRequests)

  OBJECT

  The FulfillmentOrder object represents either an item or a group of items in an [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) that are expected to be fulfilled from the same location. There can be more than one fulfillment order for an [order](https://shopify.dev/api/admin-graphql/latest/objects/Order) at a given location.

  ![](https://shopify.dev/assets/api/reference/fulfillment_order_relationships.png)

  Fulfillment orders represent the work which is intended to be done in relation to an order. When fulfillment has started for one or more line items, a [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) is created by a merchant or third party to represent the ongoing or completed work of fulfillment.

  [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).

  ***

  **Note:** Shopify creates fulfillment orders automatically when an order is created. It is not possible to manually create fulfillment orders.\</p> \<p>\<a href="#the-lifecycle-of-a-fulfillment-order">See below for more details on the lifecycle of a fulfillment order\</a>.

  ***

  ## Retrieving fulfillment orders

  ### Fulfillment orders from an order

  All fulfillment orders related to a given order can be retrieved with the [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders) connection.

  [API access scopes](#api-access-scopes) govern which fulfillments orders are returned to clients. An API client will only receive a subset of the fulfillment orders which belong to an order if they don't have the necessary access scopes to view all of the fulfillment orders.

  ### Fulfillment orders assigned to the app for fulfillment

  Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the [assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/2024-07/objects/queryroot#connection-assignedfulfillmentorders) connection. Use the `assignmentStatus` argument to control whether all assigned fulfillment orders should be returned or only those where a merchant has sent a [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest) and it has yet to be responded to.

  The API client must be granted the `read_assigned_fulfillment_orders` access scope to access the assigned fulfillment orders.

  ### All fulfillment orders

  Apps can retrieve all fulfillment orders with the [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders) query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop, which are accessible to the app according to the [fulfillment order access scopes](#api-access-scopes) it was granted with.

  ## The lifecycle of a fulfillment order

  ### Fulfillment Order Creation

  After an order is created, a background worker performs the order routing process which determines which locations will be responsible for fulfilling the purchased items. Once the order routing process is complete, one or more fulfillment orders will be created and assigned to these locations. It is not possible to manually create fulfillment orders.

  Once a fulfillment order has been created, it will have one of two different lifecycles depending on the type of location which the fulfillment order is assigned to.

  ### The lifecycle of a fulfillment order at a merchant managed location

  Fulfillment orders are completed by creating [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment). Fulfillments represents the work done.

  For digital products a merchant or an order management app would create a fulfilment once the digital asset has been provisioned. For example, in the case of a digital gift card, a merchant would to do this once the gift card has been activated - before the email has been shipped.

  On the other hand, for a traditional shipped order, a merchant or an order management app would create a fulfillment after picking and packing the items relating to a fulfillment order, but before the courier has collected the goods.

  [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).

  ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service

  For fulfillment orders which are assigned to a location that is managed by a fulfillment service, a merchant or an Order Management App can [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest) to the fulfillment service which operates the location to request that they fulfill the associated items. A fulfillment service has the option to [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest) or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest) this fulfillment request.

  Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant or order management app and instead a [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest) to the fulfillment service.

  Once a fulfillment service accepts a fulfillment request, then after they are ready to pack items and send them for delivery, they create fulfillments with the [fulfillmentCreate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentCreate) mutation. They can provide tracking information right away or create fulfillments without it and then update the tracking information for fulfillments with the [fulfillmentTrackingInfoUpdate](https://shopify.dev/api/admin-graphql/unstable/mutations/fulfillmentTrackingInfoUpdate) mutation.

  [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).

  ## API access scopes

  Fulfillment orders are governed by the following API access scopes:

  * The `read_merchant_managed_fulfillment_orders` and `write_merchant_managed_fulfillment_orders` access scopes grant access to fulfillment orders assigned to merchant-managed locations.
  * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders` access scopes are intended for fulfillment services. These scopes grant access to fulfillment orders assigned to locations that are being managed by fulfillment services.
  * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes grant access to fulfillment orders assigned to locations managed by other fulfillment services.

  ### Fulfillment service app access scopes

  Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope and don't have the `*_third_party_fulfillment_orders` or `*_merchant_managed_fulfillment_orders` access scopes. The app will only have access to the fulfillment orders assigned to their location (or multiple locations if the app registers multiple fulfillment services on the shop). The app will not have access to fulfillment orders assigned to merchant-managed locations or locations owned by other fulfillment service apps.

  ### Order management app access scopes

  **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders on behalf of a merchant.

  If an app combines the functions of an order management app and a fulfillment service, then the app should request all access scopes to manage all assigned and all unassigned fulfillment orders.

  ## Notifications about fulfillment orders

  Fulfillment services are required to [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService) a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified whenever a merchant submits a fulfillment or cancellation request.

  Both merchants and apps can [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks) to the [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted) to be notified whenever fulfillment order related domain events occur.

  [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).

***

### Possible returns

* edges

  [\[Fulfillment​Order​Merchant​Request​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequestEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Order​Merchant​Request!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest)

  non-null

  A list of nodes that are contained in FulfillmentOrderMerchantRequestEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment​Order.merchantRequests](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder#field-FulfillmentOrder.fields.merchantRequests)

#### Possible returns

* [Fulfillment​Order​Merchant​Request​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection#returns-edges)
* [Fulfillment​Order​Merchant​Request​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection#returns-nodes)
* [Fulfillment​Order​Merchant​Request​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/FulfillmentOrderMerchantRequestConnection#returns-pageInfo)

---
<a id="gift-card-connection"></a>

## Gift​Card​Connection

connection

An auto-generated type for paginating through multiple GiftCards.

### Fields with this connection

* [Customer​Merge​Preview​Default​Fields.giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCards)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

### Queries with this connection

* [gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

  query

  Returns a paginated list of [`GiftCard`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard) objects issued for the shop.

  You can filter gift cards by attributes such as status, last characters of the code, balance status, and other values using the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards#arguments-query) parameter. You can also apply [`SavedSearch`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) objects to filter results.

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

    [Gift​Card​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * balance\_status

        string

      * created\_at

        time

      * customer\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document, including gift card codes.

      - Example:
        * `query=a5bh6h64b329j4k7`
        * `query=Bob Norman`

      - Valid values:
        * `full`
        * `partial`
        * `empty`
        * `full_or_partial`
        Example:
        * `balance_status:full`

      - Example:
        * `created_at:>=2020-01-01T12:00:00Z`

    * * expires\_on

        date

      * id

        id

      * initial\_value

        string

      * recipient\_id

        id

      -

      - Example:

        * `expires_on:>=2020-01-01`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

      - Example:
        * `initial_value:>=100`

    * * source

        string

      * status

        string

      -
      - Valid values:
        * `manual`
        * `purchased`
        * `api_client`
        Example:
        * `source:manual`
        Valid values:
        * `disabled`
        * `enabled`
        * `expired`
        * `expiring`
        Example:
        * `status:disabled OR status:expired`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Gift​Card​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Gift​Card!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  non-null

  A list of nodes that are contained in GiftCardEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer​Merge​Preview​Default​Fields.giftCards](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.giftCards)

#### Queries with this connection

* [gift​Cards](https://shopify.dev/docs/api/admin-graphql/latest/queries/giftCards)

#### Possible returns

* [Gift​Card​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-edges)
* [Gift​Card​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-nodes)
* [Gift​Card​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardConnection#returns-pageInfo)

---
<a id="gift-card-transaction-connection"></a>

## Gift​Card​Transaction​Connection

connection

An auto-generated type for paginating through multiple GiftCardTransactions.

### Fields with this connection

* [Gift​Card.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.transactions)

  OBJECT

  A gift card that customers use as a payment method. Stores the initial value, current balance, and expiration date.

  You can issue gift cards to a specific [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) or send them to a [`GiftCardRecipient`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardRecipient) with a personalized message. The card tracks its transaction history through [`GiftCardCreditTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction) and [`GiftCardDebitTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction) records. You can create and deactivate gift cards using the [`GiftCardCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardCreate) and [`GiftCardDeactivate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardDeactivate) mutations, respectively.

  ***

  **Note:** After a gift card is deactivated, it can\&#39;t be used for further purchases or re-enabled.

  ***

***

### Possible returns

* edges

  [\[Gift​Card​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Gift​Card​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction)

  non-null

  A list of nodes that are contained in GiftCardTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Gift​Card.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard#field-GiftCard.fields.transactions)

#### Possible returns

* [Gift​Card​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-edges)
* [Gift​Card​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-nodes)
* [Gift​Card​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/GiftCardTransactionConnection#returns-pageInfo)

---
<a id="image-connection"></a>

## Image​Connection

connection

An auto-generated type for paginating through multiple Images.

### Fields with this connection

#### Deprecated fields with this connection

* [Product.images](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.images)

  OBJECT

  Deprecated

* [Shop.productImages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productImages)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Image​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Image!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  A list of nodes that are contained in ImageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Image​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-edges)
* [Image​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-nodes)
* [Image​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-pageInfo)

---
<a id="inventory-item-connection"></a>

## Inventory​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryItems.

### Fields with this connection

* [Shop.inventoryItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.inventoryItems)

  OBJECT

  Deprecated

***

### Queries with this connection

* [inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

  query

  Returns a list of inventory items.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * sku

        string

      * updated\_at

        time

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the inventory item [`sku`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:
        * `sku:XYZ-12345`

  ***

***

### Possible returns

* edges

  [\[Inventory​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  non-null

  A list of nodes that are contained in InventoryItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

#### Possible returns

* [Inventory​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-edges)
* [Inventory​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-nodes)
* [Inventory​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-pageInfo)

---
<a id="inventory-level-connection"></a>

## Inventory​Level​Connection

connection

An auto-generated type for paginating through multiple InventoryLevels.

### Fields with this connection

* [Inventory​Item.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevels)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

* [Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevels)

  OBJECT

  A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

  Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

***

### Possible returns

* edges

  [\[Inventory​Level​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevelEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Level!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel)

  non-null

  A list of nodes that are contained in InventoryLevelEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Inventory​Item.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.inventoryLevels)
* [Location.inventoryLevels](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.inventoryLevels)

#### Possible returns

* [Inventory​Level​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-edges)
* [Inventory​Level​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-nodes)
* [Inventory​Level​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryLevelConnection#returns-pageInfo)

---
<a id="inventory-scheduled-change-connection"></a>

## Inventory​Scheduled​Change​Connection

connection

An auto-generated type for paginating through multiple InventoryScheduledChanges.

### Fields with this connection

* [Inventory​Level.scheduledChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel#field-InventoryLevel.fields.scheduledChanges)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Inventory​Scheduled​Change​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChangeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Scheduled​Change!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryScheduledChange)

  non-null

  A list of nodes that are contained in InventoryScheduledChangeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Inventory​Scheduled​Change​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-edges)
* [Inventory​Scheduled​Change​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-nodes)
* [Inventory​Scheduled​Change​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryScheduledChangeConnection#returns-pageInfo)

---
<a id="inventory-shipment-connection"></a>

## Inventory​Shipment​Connection

connection

An auto-generated type for paginating through multiple InventoryShipments.

### Fields with this connection

* [Inventory​Transfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.shipments)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

***

### Queries with this connection

* [inventory​Shipments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipments)

  query

  Returns a paginated list of [`InventoryShipment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment) objects.

  Supports filtering by barcode (e.g. `barcode:"12345"`), status (e.g. `status:"draft"` or `status:"in_transit"`), and destination (e.g. `destination_id:12345`).

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

  * sort​Key

    [Inventory​Shipment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * barcode

      string

    * destination\_id

      id

    * * id

        id

      * status

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * tracking\_number

      string

  ***

***

### Possible returns

* edges

  [\[Inventory​Shipment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Shipment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  non-null

  A list of nodes that are contained in InventoryShipmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Inventory​Transfer.shipments](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.shipments)

#### Queries with this connection

* [inventory​Shipments](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryShipments)

#### Possible returns

* [Inventory​Shipment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-edges)
* [Inventory​Shipment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-nodes)
* [Inventory​Shipment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentConnection#returns-pageInfo)

---
<a id="inventory-shipment-line-item-connection"></a>

## Inventory​Shipment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryShipmentLineItems.

### Fields with this connection

* [Inventory​Shipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItems)

  OBJECT

  Represents an inventory shipment.

***

### Possible returns

* edges

  [\[Inventory​Shipment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Shipment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  non-null

  A list of nodes that are contained in InventoryShipmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Inventory​Shipment.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.lineItems)

#### Possible returns

* [Inventory​Shipment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-edges)
* [Inventory​Shipment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-nodes)
* [Inventory​Shipment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryShipmentLineItemConnection#returns-pageInfo)

---
<a id="inventory-transfer-connection"></a>

## Inventory​Transfer​Connection

connection

An auto-generated type for paginating through multiple InventoryTransfers.

### Queries with this connection

* [inventory​Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfers)

  query

  Returns a paginated list of [`InventoryTransfer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer) objects between locations. Transfers track the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects.

  Supports filtering transfers using query parameters and sorting by various criteria. Use the connection's edges to access transfer details including [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects, quantities, and shipment status.

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

    [Transfer​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/TransferSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * destination\_id

      id

    * * id

        id

      * origin\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * product\_id

      id

    * product\_variant\_id

      id

    * source\_id

      id

    * status

      string

    * * tag

        string

      * tag\_not

        string

      - Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

        Example:

        * `tag_not:my_tag`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Inventory​Transfer​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Transfer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  non-null

  A list of nodes that are contained in InventoryTransferEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [inventory​Transfers](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryTransfers)

#### Possible returns

* [Inventory​Transfer​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection#returns-edges)
* [Inventory​Transfer​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection#returns-nodes)
* [Inventory​Transfer​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferConnection#returns-pageInfo)

---
<a id="inventory-transfer-line-item-connection"></a>

## Inventory​Transfer​Line​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryTransferLineItems.

### Fields with this connection

* [Inventory​Transfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItems)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

***

### Possible returns

* edges

  [\[Inventory​Transfer​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Transfer​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem)

  non-null

  A list of nodes that are contained in InventoryTransferLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Inventory​Transfer.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.lineItems)

#### Possible returns

* [Inventory​Transfer​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-edges)
* [Inventory​Transfer​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-nodes)
* [Inventory​Transfer​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryTransferLineItemConnection#returns-pageInfo)

---
<a id="line-item-connection"></a>

## Line​Item​Connection

connection

An auto-generated type for paginating through multiple LineItems.

### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems)

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

* [Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.nonFulfillableLineItems)

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

### Possible returns

* edges

  [\[Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem)

  non-null

  A list of nodes that are contained in LineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.lineItems)
* [Order.nonFulfillableLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.nonFulfillableLineItems)

#### Possible returns

* [Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-edges)
* [Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-nodes)
* [Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LineItemConnection#returns-pageInfo)

---
<a id="localization-extension-connection"></a>

## Localization​Extension​Connection

connection

An auto-generated type for paginating through multiple LocalizationExtensions.

### Fields with this connection

#### Deprecated fields with this connection

* [Draft​Order.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizationExtensions)

  OBJECT

  Deprecated

* [Has​Localization​Extensions.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions#fields-localizationExtensions)

  INTERFACE

  Deprecated

* [Order.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizationExtensions)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Localization​Extension​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtensionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Localization​Extension!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension)

  non-null

  A list of nodes that are contained in LocalizationExtensionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Localization​Extension​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-edges)
* [Localization​Extension​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-nodes)
* [Localization​Extension​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-pageInfo)

---
<a id="localized-field-connection"></a>

## Localized​Field​Connection

connection

An auto-generated type for paginating through multiple LocalizedFields.

### Fields with this connection

* [Draft​Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizedFields)

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

* [Has​Localized​Fields.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields#fields-localizedFields)

  INTERFACE

  Localized fields associated with the specified resource.

* [Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizedFields)

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

### Possible returns

* edges

  [\[Localized​Field​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedFieldEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Localized​Field!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedField)

  non-null

  A list of nodes that are contained in LocalizedFieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Draft​Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizedFields)
* [Has​Localized​Fields.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields#fields-localizedFields)
* [Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizedFields)

#### Possible returns

* [Localized​Field​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-edges)
* [Localized​Field​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-nodes)
* [Localized​Field​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-pageInfo)

---
<a id="location-connection"></a>

## Location​Connection

connection

An auto-generated type for paginating through multiple Locations.

### Fields with this connection

* [Delivery​Location​Group.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations)

  OBJECT

  A location group is a collection of locations. They share zones and delivery methods across delivery profiles.

* [Delivery​Profile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocationsPaginated)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

* [Locations​Condition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.locations)

  OBJECT

  A condition checking the location that the visitor is shopping from.

* [Shop.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.locations)

  OBJECT

  Deprecated

***

### Queries with this connection

* [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)

  query

  A paginated list of inventory locations where merchants can stock [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) items and fulfill [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) items.

  Returns only active locations by default. Use the [`includeInactive`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeInactive) argument to retrieve deactivated locations that can no longer stock inventory or fulfill orders. Use the [`includeLegacy`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-includeLegacy) argument to include locations that [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) apps manage. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations#arguments-query) argument to filter by location attributes like name, address, and whether local pickup is enabled.

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

    [Location​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/LocationSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * active

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * address1

      string

    * address2

      string

    * city

      string

    * country

      string

    * created\_at

      time

    * geolocated

      boolean

    * * id

        id

      * legacy

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * name

      string

    * * pickup\_in\_store

        string

      * province

        string

      -
      - Valid values:
        * `enabled`
        * `disabled`

    * zip

      string

  * include​Legacy

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the legacy locations of fulfillment services.

  * include​Inactive

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to include the locations that are deactivated.

  ***

* [locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

  query

  Returns a list of all origin locations available for a delivery profile.

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

### Possible returns

* edges

  [\[Location​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Location!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)

  non-null

  A list of nodes that are contained in LocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Location​Group.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroup#field-DeliveryLocationGroup.fields.locations)
* [Delivery​Profile.unassignedLocationsPaginated](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.unassignedLocationsPaginated)
* [Locations​Condition.locations](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationsCondition#field-LocationsCondition.fields.locations)

#### Queries with this connection

* [locations](https://shopify.dev/docs/api/admin-graphql/latest/queries/locations)
* [locations​Available​For​Delivery​Profiles​Connection](https://shopify.dev/docs/api/admin-graphql/latest/queries/locationsAvailableForDeliveryProfilesConnection)

#### Possible returns

* [Location​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-edges)
* [Location​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-nodes)
* [Location​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocationConnection#returns-pageInfo)

---
<a id="mailing-address-connection"></a>

## Mailing​Address​Connection

connection

An auto-generated type for paginating through multiple MailingAddresses.

### Fields with this connection

* [Customer.addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.addressesV2)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Customer​Merge​Preview​Default​Fields.addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.addresses)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

***

### Possible returns

* edges

  [\[Mailing​Address​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddressEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Mailing​Address!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MailingAddress)

  non-null

  A list of nodes that are contained in MailingAddressEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer.addressesV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.addressesV2)
* [Customer​Merge​Preview​Default​Fields.addresses](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.addresses)

#### Possible returns

* [Mailing​Address​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-edges)
* [Mailing​Address​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-nodes)
* [Mailing​Address​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MailingAddressConnection#returns-pageInfo)

---
<a id="marketing-activity-connection"></a>

## Marketing​Activity​Connection

connection

An auto-generated type for paginating through multiple MarketingActivities.

### Queries with this connection

* [marketing​Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivities)

  query

  A list of marketing activities associated with the marketing app.

  * marketing​Activity​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    Default:\[]

    ### Arguments

    The list of marketing activity IDs to filter by.

  * remote​Ids

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Default:\[]

    The list of remote IDs associated with marketing activities to filter by.

  * utm

    [UTMInput](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/UTMInput)

    The UTM parameters associated with marketing activities to filter by.

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

    [Marketing​Activity​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingActivitySortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * app\_name

      string

      A comma-separated list of app names.

    * created\_at

      time

    * * id

        id

      * marketing\_campaign\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * scheduled\_to\_end\_at

      time

    * scheduled\_to\_start\_at

      time

    * tactic

      string

    * title

      string

    * updated\_at

      time

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Marketing​Activity​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivityEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Marketing​Activity!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingActivity)

  non-null

  A list of nodes that are contained in MarketingActivityEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [marketing​Activities](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingActivities)

#### Possible returns

* [Marketing​Activity​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#returns-edges)
* [Marketing​Activity​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#returns-nodes)
* [Marketing​Activity​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingActivityConnection#returns-pageInfo)

---
<a id="marketing-event-connection"></a>

## Marketing​Event​Connection

connection

An auto-generated type for paginating through multiple MarketingEvents.

### Queries with this connection

* [marketing​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvents)

  query

  A list of marketing events associated with the marketing app.

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

    [Marketing​Event​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketingEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * app\_id

      id

    * description

      string

    * * id

        id

      * started\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * type

      string

  ***

***

### Possible returns

* edges

  [\[Marketing​Event​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEventEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Marketing​Event!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketingEvent)

  non-null

  A list of nodes that are contained in MarketingEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [marketing​Events](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketingEvents)

#### Possible returns

* [Marketing​Event​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#returns-edges)
* [Marketing​Event​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#returns-nodes)
* [Marketing​Event​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketingEventConnection#returns-pageInfo)

---
<a id="market-catalog-connection"></a>

## Market​Catalog​Connection

connection

An auto-generated type for paginating through multiple MarketCatalogs.

### Fields with this connection

* [Market.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogs)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Markets​Resolved​Values.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.catalogs)

  OBJECT

  The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

***

### Possible returns

* edges

  [\[Market​Catalog​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalogEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Catalog!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog)

  non-null

  A list of nodes that are contained in MarketCatalogEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Market.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.catalogs)
* [Markets​Resolved​Values.catalogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.catalogs)

#### Possible returns

* [Market​Catalog​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-edges)
* [Market​Catalog​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-nodes)
* [Market​Catalog​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketCatalogConnection#returns-pageInfo)

---
<a id="market-connection"></a>

## Market​Connection

connection

An auto-generated type for paginating through multiple Markets.

### Fields with this connection

* [Market​Catalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets)

  OBJECT

  A catalog for managing product availability and pricing for specific [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) contexts. Each catalog links to one or more markets. The catalog can optionally include a [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) to control which [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects customers see, and a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) for market-specific pricing adjustments. When a publication isn't associated with the catalog, product availability is determined by the sales channel.

  Use catalogs to create distinct shopping experiences for different geographic regions or customer segments.

  Learn more about [building a catalog](https://shopify.dev/docs/apps/build/markets/build-catalog) and [managing markets](https://shopify.dev/docs/apps/build/markets).

* [Market​Web​Presence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.markets)

  OBJECT

  The market’s web presence, which defines its SEO strategy. This can be a different domain (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language variants. If a market does not have its own web presence, it is accessible on the shop’s primary domain via [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

  Note: while the domain/subfolders defined by a market’s web presence are not applicable to custom storefronts, which must manage their own domains and routing, the languages chosen here do govern [the languages available on the Storefront API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in this market.

***

### Queries with this connection

* [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

  query

  Returns a paginated list of [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) objects configured for the shop. Markets match buyers based on defined conditions to deliver customized shopping experiences.

  Filter markets by [`MarketType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType) and [`MarketStatus`](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketStatus), search by name, and control sort order. Retrieve market configurations including [`MarketCurrencySettings`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCurrencySettings), [`MarketWebPresence`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence) objects, and [`MarketConditions`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketConditions).

  Learn more about [Shopify Markets](https://shopify.dev/docs/apps/build/markets).

  * type

    [Market​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketType)

    Default:null

    ### Arguments

    Filters markets by type.

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

    [Markets​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketsSortKeys)

    Default:NAME

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * market\_condition\_types

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        A comma-separated list of condition types.

    * market\_type

      string

    * name

      string

    * * status

        string

      * wildcard\_company\_location\_with\_country\_code

        string

      -
      - Valid values:
        * `ACTIVE`
        * `DRAFT`

  ***

***

### Possible returns

* edges

  [\[Market​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market)

  non-null

  A list of nodes that are contained in MarketEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Market​Catalog.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketCatalog#field-MarketCatalog.fields.markets)
* [Market​Web​Presence.markets](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.markets)

#### Queries with this connection

* [markets](https://shopify.dev/docs/api/admin-graphql/latest/queries/markets)

#### Possible returns

* [Market​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-edges)
* [Market​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-nodes)
* [Market​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketConnection#returns-pageInfo)

---
<a id="market-localizable-resource-connection"></a>

## Market​Localizable​Resource​Connection

connection

An auto-generated type for paginating through multiple MarketLocalizableResources.

### Queries with this connection

* [market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)

  query

  Resources that can have localized values for different markets.

  * resource​Type

    [Market​Localizable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MarketLocalizableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

* [market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)

  query

  Resources that can have localized values for different markets.

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

### Possible returns

* edges

  [\[Market​Localizable​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Localizable​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketLocalizableResource)

  non-null

  A list of nodes that are contained in MarketLocalizableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [market​Localizable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResources)
* [market​Localizable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/marketLocalizableResourcesByIds)

#### Possible returns

* [Market​Localizable​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-edges)
* [Market​Localizable​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-nodes)
* [Market​Localizable​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketLocalizableResourceConnection#returns-pageInfo)

---
<a id="market-region-connection"></a>

## Market​Region​Connection

connection

An auto-generated type for paginating through multiple MarketRegions.

### Fields with this connection

* [Regions​Condition.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.regions)

  OBJECT

  A condition checking the visitor's region.

* [Market.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.regions)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Market​Region​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketRegionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Region!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/MarketRegion)

  non-null

  A list of nodes that are contained in MarketRegionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Regions​Condition.regions](https://shopify.dev/docs/api/admin-graphql/latest/objects/RegionsCondition#field-RegionsCondition.fields.regions)

#### Possible returns

* [Market​Region​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-edges)
* [Market​Region​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-nodes)
* [Market​Region​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketRegionConnection#returns-pageInfo)

---
<a id="market-web-presence-connection"></a>

## Market​Web​Presence​Connection

connection

An auto-generated type for paginating through multiple MarketWebPresences.

### Fields with this connection

* [Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.webPresences)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Markets​Resolved​Values.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.webPresences)

  OBJECT

  The resolved values based on the markets configuration for a buyer signal. Resolved values include the resolved catalogs, web presences, currency, and price inclusivity.

***

### Queries with this connection

* [web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

  query

  The web presences for the shop.

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

### Possible returns

* edges

  [\[Market​Web​Presence​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresenceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Market​Web​Presence!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketWebPresence)

  non-null

  A list of nodes that are contained in MarketWebPresenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Market.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.webPresences)
* [Markets​Resolved​Values.webPresences](https://shopify.dev/docs/api/admin-graphql/latest/objects/MarketsResolvedValues#field-MarketsResolvedValues.fields.webPresences)

#### Queries with this connection

* [web​Presences](https://shopify.dev/docs/api/admin-graphql/latest/queries/webPresences)

#### Possible returns

* [Market​Web​Presence​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-edges)
* [Market​Web​Presence​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-nodes)
* [Market​Web​Presence​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MarketWebPresenceConnection#returns-pageInfo)

---
<a id="media-connection"></a>

## Media​Connection

connection

An auto-generated type for paginating through multiple Media.

### Fields with this connection

* [Product.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.media)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

***

### Possible returns

* edges

  [\[Media​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Media!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  non-null

  A list of nodes that are contained in MediaEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Product.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media)
* [Product​Variant.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.media)

#### Possible returns

* [Media​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-edges)
* [Media​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-nodes)
* [Media​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-pageInfo)

---
<a id="menu-connection"></a>

## Menu​Connection

connection

An auto-generated type for paginating through multiple Menus.

### Queries with this connection

* [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

  query

  Retrieves navigation menus. Menus organize content into hierarchical navigation structures that merchants can display in the online store (for example, in headers, footers, and sidebars) and customer accounts.

  Each [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) contains a handle for identification, a title for display, and a collection of [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects that can be nested up to 3 levels deep. Default menus have protected handles that can't be modified.

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

    [Menu​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * title

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Menu​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Menu!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  non-null

  A list of nodes that are contained in MenuEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [menus](https://shopify.dev/docs/api/admin-graphql/latest/queries/menus)

#### Possible returns

* [Menu​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-edges)
* [Menu​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-nodes)
* [Menu​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MenuConnection#returns-pageInfo)

---
<a id="metafield-connection"></a>

## Metafield​Connection

connection

An auto-generated type for paginating through multiple Metafields.

### Fields with this connection

* [App​Installation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

* [Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields)

  OBJECT

  An article that contains content, author information, and metadata. Articles belong to a [`Blog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog) and can include HTML-formatted body text, summary text, and an associated image. Merchants publish articles to share content, drive traffic, and engage customers.

  Articles can be organized with tags and published immediately or scheduled for future publication using the [`publishedAt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.publishedAt) timestamp. The API manages comments on articles when the blog's comment policy enables them.

* [Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields)

  OBJECT

  A blog for publishing articles in the online store. Stores can have multiple blogs to organize content by topic or purpose.

  Each blog contains articles with their associated comments, tags, and metadata. The comment policy controls whether readers can post comments and whether moderation is required. Blogs use customizable URL handles and can apply alternate templates for specialized layouts.

* [Cart​Transform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields)

  OBJECT

  A deployed cart transformation function that actively modifies how products appear and behave in customer carts. Cart transforms enable sophisticated merchandising strategies by programmatically merging, expanding, or updating cart line items based on custom business logic.

  Use the `CartTransform` object to:

  * Monitor active bundling and cart modification logic
  * Track transform function deployment status and configuration
  * Manage error handling behavior for cart processing failures
  * Coordinate multiple transforms when running complex merchandising strategies
  * Analyze transform performance and customer interaction patterns

  Each cart transform links to a specific [Shopify Function](https://shopify.dev/docs/apps/build/functions) that contains the actual cart modification logic. The `blockOnFailure` setting determines whether cart processing should halt when the transform encounters errors, or whether it should allow customers to proceed with unmodified carts. This flexibility ensures merchants can balance feature richness with checkout reliability.

  Transform functions operate during cart updates, product additions, and checkout initiation, providing multiple touchpoints to enhance the shopping experience. They integrate seamlessly with existing cart APIs while extending functionality beyond standard product catalog capabilities.

  The function ID connects to your deployed function code, while the configuration settings control how the transform behaves in different scenarios. Multiple transforms can work together, processing cart modifications in sequence to support complex merchandising workflows.

  Learn more about [customized bundles](https://shopify.dev/docs/apps/selling-strategies/bundles/add-a-customized-bundle), and about the [Cart Transform Function API](https://shopify.dev/docs/api/functions/latest/cart-transform).

* [Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafields)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafields)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafields)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Customer​Segment​Member.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafields)

  OBJECT

  The member of a segment.

* [Delivery​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafields)

  OBJECT

  A delivery customization.

* [Discount​Automatic​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafields)

  OBJECT

  The `DiscountAutomaticNode` object enables you to manage [automatic discounts](https://help.shopify.com/manual/discounts/discount-types#automatic-discounts) that are applied when an order meets specific criteria. You can create amount off, free shipping, or buy X get Y automatic discounts. For example, you can offer customers a free shipping discount that applies when conditions are met. Or you can offer customers a buy X get Y discount that's automatically applied when customers spend a specified amount of money, or a specified quantity of products.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Code​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafields)

  OBJECT

  The `DiscountCodeNode` object enables you to manage [code discounts](https://help.shopify.com/manual/discounts/discount-types#discount-codes) that are applied when customers enter a code at checkout. For example, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store. Or, you can offer discounts where customers have to enter a code to get free shipping. Merchants can create and share discount codes individually with customers.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related queries, mutations, limitations, and considerations.

* [Discount​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafields)

  OBJECT

  The `DiscountNode` object enables you to manage [discounts](https://help.shopify.com/manual/discounts), which are applied at checkout or on a cart.

  Discounts are a way for merchants to promote sales and special offers, or as customer loyalty rewards. Discounts can apply to [orders, products, or shipping](https://shopify.dev/docs/apps/build/discounts#discount-classes), and can be either automatic or code-based. For example, you can offer customers a buy X get Y discount that's automatically applied when purchases meet specific criteria. Or, you can offer discounts where customers have to enter a code to redeem an amount off discount on products, variants, or collections in a store.

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including related mutations, limitations, and considerations.

* [Draft​Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields)

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

* [Fulfillment​Constraint​Rule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafields)

  OBJECT

  A fulfillment constraint rule.

* [Gift​Card​Credit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction#field-GiftCardCreditTransaction.fields.metafields)

  OBJECT

  A credit transaction which increases the gift card balance.

* [Gift​Card​Debit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction#field-GiftCardDebitTransaction.fields.metafields)

  OBJECT

  A debit transaction which decreases the gift card balance.

* [Gift​Card​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction#fields-metafields)

  INTERFACE

  Interface for a gift card transaction.

* [Has​Metafields.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields#fields-metafields)

  INTERFACE

  Represents information about the metafields associated to the specified resource.

* [Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.metafields)

  OBJECT

  Represents an image resource.

* [Inventory​Transfer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafields)

  OBJECT

  Tracks the movement of [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem) objects between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects. A transfer includes origin and destination information, [`InventoryTransferLineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItem) objects with quantities, and shipment details.

  Transfers progress through multiple [`statuses`](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferStatus). The transfer maintains [`LocationSnapshot`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocationSnapshot) objects of location details to preserve historical data even if locations change or are deleted later.

* [Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafields)

  OBJECT

  A physical location where merchants store and fulfill inventory. Locations include retail stores, warehouses, popups, dropshippers, or other places where inventory is managed or stocked.

  Active locations can fulfill online orders when configured with shipping rates, local pickup, or local delivery options. Locations track inventory quantities for [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and process [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) fulfillment. Third-party apps using [`FulfillmentService`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentService) can create and manage their own locations.

* [Market.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafields)

  OBJECT

  A market is a group of one or more regions that you want to target for international sales. By creating a market, you can configure a distinct, localized shopping experience for customers from a specific area of the world. For example, you can [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate), [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists), or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).

* [Metafield​Definition.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields)

  OBJECT

  Defines the structure, validation rules, and permissions for [`Metafield`](https://shopify.dev/docs/api/admin-graphql/current/objects/Metafield) objects attached to a specific owner type. Each definition establishes a schema that metafields must follow, including the data type and validation constraints.

  The definition controls access permissions across different APIs, determines whether the metafield can be used for filtering or as a collection condition, and can be constrained to specific resource subtypes.

* [Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafields)

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

* [Page.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafields)

  OBJECT

  A standalone content page in the online store. Pages display HTML-formatted content for informational pages like "About Us", contact information, or shipping policies.

  Each page has a unique handle for URL routing and supports custom template suffixes for specialized layouts. Pages can be published or hidden, and include creation and update timestamps.

* [Payment​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafields)

  OBJECT

  A payment customization.

* [Product.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafields)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafields)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* [Selling​Plan.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafields)

  OBJECT

  How a product can be sold and purchased through recurring billing or deferred purchase options. Defines the specific terms for subscriptions, pre-orders, or try-before-you-buy offers, including when to bill customers, when to fulfill orders, and what pricing adjustments to apply.

  Each selling plan has billing, delivery, and pricing policies that control the purchase experience. The plan's [`options`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.options) and [`category`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.category) help merchants organize and report on different selling strategies. Plans are grouped within a [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) that associates them with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects.

  ***

  **Caution:** Selling plans and associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

  Learn more about [selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan).

* [Shop.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafields)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Validation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafields)

  OBJECT

  A server-side validation that enforces business rules before customers complete their purchases. Each validation links to a [`ShopifyFunction`](https://shopify.dev/docs/api/functions/latest/cart-and-checkout-validation) that implements the validation logic.

  Validations run on Shopify's servers and are enforced throughout the checkout process. Validation errors always block checkout progress. The `blockOnFailure` setting determines whether runtime exceptions, like timeouts, also block checkout. Tracks runtime exception history for the validation function and supports custom data through [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

* [Media​Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaImage#field-MediaImage.fields.metafields)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Metafield​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)

  non-null

  A list of nodes that are contained in MetafieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [App​Installation.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.metafields)
* [Article.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafields)
* [Blog.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafields)
* [Cart​Transform.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransform#field-CartTransform.fields.metafields)
* [Collection.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafields)
* [Company.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafields)
* [Company​Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)
* [Customer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafields)
* [Customer​Segment​Member.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSegmentMember#field-CustomerSegmentMember.fields.metafields)
* [Delivery​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafields)
* [Discount​Automatic​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafields)
* [Discount​Code​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafields)
* [Discount​Node.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafields)
* [Draft​Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.metafields)
* [Fulfillment​Constraint​Rule.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentConstraintRule#field-FulfillmentConstraintRule.fields.metafields)
* [Gift​Card​Credit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardCreditTransaction#field-GiftCardCreditTransaction.fields.metafields)
* [Gift​Card​Debit​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardDebitTransaction#field-GiftCardDebitTransaction.fields.metafields)
* [Gift​Card​Transaction.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/GiftCardTransaction#fields-metafields)
* [Has​Metafields.metafields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafields#fields-metafields)
* [Image.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image#field-Image.fields.metafields)
* [Inventory​Transfer.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafields)
* [Location.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafields)
* [Market.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafields)
* [Metafield​Definition.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition#field-MetafieldDefinition.fields.metafields)
* [Order.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafields)
* [Page.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafields)
* [Payment​Customization.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafields)
* [Product.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafields)
* [Product​Variant.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafields)
* [Selling​Plan.metafields](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafields)

#### Possible returns

* [Metafield​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-edges)
* [Metafield​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-nodes)
* [Metafield​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldConnection#returns-pageInfo)

---
<a id="metafield-definition-connection"></a>

## Metafield​Definition​Connection

connection

An auto-generated type for paginating through multiple MetafieldDefinitions.

### Fields with this connection

#### Deprecated fields with this connection

* [Article.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article#field-Article.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Blog.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog#field-Blog.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Collection.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Company.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Company​Location.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Customer.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Delivery​Customization.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryCustomization#field-DeliveryCustomization.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Automatic​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticNode#field-DiscountAutomaticNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Code​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeNode#field-DiscountCodeNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Discount​Node.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountNode#field-DiscountNode.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Has​Metafield​Definitions.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasMetafieldDefinitions#fields-metafieldDefinitions)

  INTERFACE

  Deprecated

* [Inventory​Transfer.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer#field-InventoryTransfer.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Location.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Market.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market#field-Market.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Order.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Page.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page#field-Page.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Payment​Customization.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization#field-PaymentCustomization.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Product.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Product​Variant.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Selling​Plan.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan#field-SellingPlan.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Shop.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.metafieldDefinitions)

  OBJECT

  Deprecated

* [Validation.metafieldDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation#field-Validation.fields.metafieldDefinitions)

  OBJECT

  Deprecated

***

### Queries with this connection

* [metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

  query

  Returns a list of metafield definitions.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter metafield definition by key.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Filter metafield definition by namespace.

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    Filter the metafield definition by the specific owner type.

  * pinned​Status

    [Metafield​Definition​Pinned​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinnedStatus)

    Default:ANY

    Filter the metafield definition by the pinned status.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    Filter metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter metafield definitions based on whether they are constrained.

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

### Possible returns

* edges

  [\[Metafield​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  non-null

  A list of nodes that are contained in MetafieldDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [metafield​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metafieldDefinitions)

#### Possible returns

* [Metafield​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-edges)
* [Metafield​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-nodes)
* [Metafield​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConnection#returns-pageInfo)

---
<a id="metafield-definition-constraint-value-connection"></a>

## Metafield​Definition​Constraint​Value​Connection

connection

An auto-generated type for paginating through multiple MetafieldDefinitionConstraintValues.

### Fields with this connection

* [Metafield​Definition​Constraints.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints#field-MetafieldDefinitionConstraints.fields.values)

  OBJECT

  The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what subtypes of resources a metafield definition applies to.

***

### Possible returns

* edges

  [\[Metafield​Definition​Constraint​Value​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValueEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Definition​Constraint​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValue)

  non-null

  A list of nodes that are contained in MetafieldDefinitionConstraintValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Metafield​Definition​Constraints.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints#field-MetafieldDefinitionConstraints.fields.values)

#### Possible returns

* [Metafield​Definition​Constraint​Value​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-edges)
* [Metafield​Definition​Constraint​Value​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-nodes)
* [Metafield​Definition​Constraint​Value​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-pageInfo)

---
<a id="metafield-reference-connection"></a>

## Metafield​Reference​Connection

connection

An auto-generated type for paginating through multiple MetafieldReferences.

### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

* [Metaobject​Field.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

  OBJECT

  Provides a field definition and the data value assigned to it.

***

### Possible returns

* edges

  [\[Metafield​Reference​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldReferenceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Reference\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

  non-null

  A list of nodes that are contained in MetafieldReferenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.references)
* [Metaobject​Field.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

#### Possible returns

* [Metafield​Reference​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-edges)
* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-nodes)
* [Metafield​Reference​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-pageInfo)

---
<a id="metafield-relation-connection"></a>

## Metafield​Relation​Connection

connection

An auto-generated type for paginating through multiple MetafieldRelations.

### Fields with this connection

* [Metaobject.referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.referencedBy)

  OBJECT

  An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.

  Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.

***

### Possible returns

* edges

  [\[Metafield​Relation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Relation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation)

  non-null

  A list of nodes that are contained in MetafieldRelationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Metaobject.referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.referencedBy)

#### Possible returns

* [Metafield​Relation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-edges)
* [Metafield​Relation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-nodes)
* [Metafield​Relation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-pageInfo)

---
<a id="metaobject-connection"></a>

## Metaobject​Connection

connection

An auto-generated type for paginating through multiple Metaobjects.

### Fields with this connection

* [Metaobject​Definition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.metaobjects)

  OBJECT

  Defines the structure and configuration for a custom data type in Shopify. Each definition specifies the fields, validation rules, and capabilities that apply to all [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries created from it.

  The definition includes field definitions that determine what data to store, access controls for [the Shopify admin](https://shopify.dev/docs/apps/build/custom-data/permissions#admin-permissions) and [Storefront](https://shopify.dev/docs/apps/build/custom-data/permissions#storefront-permissions) APIs, and capabilities such as publishability and translatability. You can track which [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) or [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) created the definition and optionally base it on a [`StandardMetaobjectDefinitionTemplate`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetaobjectDefinitionTemplate).

***

### Queries with this connection

* [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

  query

  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries for a specific type. Metaobjects are custom data structures that extend Shopify's data model with merchant or app-specific data types.

  Filter results using the query parameter with a search syntax for metaobject fields. Use `fields.{key}:{value}` to filter by field values, supporting any field previously marked as filterable. The `sortKey` parameter accepts `id`, `type`, `updated_at`, or `display_name` to control result ordering.

  Learn more about [querying metaobjects by field value](https://shopify.dev/docs/apps/build/custom-data/metafields/query-by-metafield-value).

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobjects to query.

  * sort​Key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of a field to sort with. Supports "id", "type", "updated\_at", and "display\_name".

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * display\_name

      string

    * * fields.{key}

        mixed

      * handle

        string

      - Filters metaobject entries by field value. Format: `fields.{key}:{value}`. Only fields marked as filterable in the metaobject definition can be used. Learn more about [querying metaobjects by field value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:
        * `fields.color:blue`
        * `fields.on_sale:true`

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Metaobject​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metaobject!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject)

  non-null

  A list of nodes that are contained in MetaobjectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Metaobject​Definition.metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition#field-MetaobjectDefinition.fields.metaobjects)

#### Queries with this connection

* [metaobjects](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjects)

#### Possible returns

* [Metaobject​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-edges)
* [Metaobject​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-nodes)
* [Metaobject​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectConnection#returns-pageInfo)

---
<a id="metaobject-definition-connection"></a>

## Metaobject​Definition​Connection

connection

An auto-generated type for paginating through multiple MetaobjectDefinitions.

### Queries with this connection

* [metaobject​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions)

  query

  Returns a paginated list of all [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition) objects configured for the store. Metaobject definitions provide the schema for creating custom data structures composed of individual fields. Each definition specifies the field types, access permissions, and capabilities for [`Metaobject`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject) entries of that type. Use this query to discover available metaobject types before creating or querying metaobject entries.

  Learn more about [managing metaobjects](https://shopify.dev/docs/apps/build/custom-data/metaobjects/manage-metaobjects).

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

### Possible returns

* edges

  [\[Metaobject​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metaobject​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  non-null

  A list of nodes that are contained in MetaobjectDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [metaobject​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/metaobjectDefinitions)

#### Possible returns

* [Metaobject​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#returns-edges)
* [Metaobject​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#returns-nodes)
* [Metaobject​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetaobjectDefinitionConnection#returns-pageInfo)

---
<a id="mobile-platform-application-connection"></a>

## Mobile​Platform​Application​Connection

connection

An auto-generated type for paginating through multiple MobilePlatformApplications.

### Queries with this connection

* [mobile​Platform​Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobilePlatformApplications)

  query

  List the mobile platform applications.

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

### Possible returns

* edges

  [\[Mobile​Platform​Application​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MobilePlatformApplicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Mobile​Platform​Application!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MobilePlatformApplication)

  non-null

  A list of nodes that are contained in MobilePlatformApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [mobile​Platform​Applications](https://shopify.dev/docs/api/admin-graphql/latest/queries/mobilePlatformApplications)

#### Possible returns

* [Mobile​Platform​Application​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-edges)
* [Mobile​Platform​Application​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-nodes)
* [Mobile​Platform​Application​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MobilePlatformApplicationConnection#returns-pageInfo)

---
<a id="online-store-theme-connection"></a>

## Online​Store​Theme​Connection

connection

An auto-generated type for paginating through multiple OnlineStoreThemes.

### Queries with this connection

* [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

  query

  Returns a paginated list of [`OnlineStoreTheme`](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme) objects for the online store. Themes control the appearance and layout of the storefront.

  You can filter themes by [`role`](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes#arguments-roles) to find specific theme types, such as `MAIN` for the published theme and `UNPUBLISHED` for draft themes.

  * roles

    [\[Theme​Role!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/ThemeRole)

    ### Arguments

    The theme roles to filter by.

  * names

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The theme names to filter by. Use '\*' to match zero or more characters.

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

### Possible returns

* edges

  [\[Online​Store​Theme​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Online​Store​Theme!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme)

  non-null

  A list of nodes that are contained in OnlineStoreThemeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [themes](https://shopify.dev/docs/api/admin-graphql/latest/queries/themes)

#### Possible returns

* [Online​Store​Theme​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-edges)
* [Online​Store​Theme​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-nodes)
* [Online​Store​Theme​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeConnection#returns-pageInfo)

---
<a id="online-store-theme-file-connection"></a>

## Online​Store​Theme​File​Connection

connection

An auto-generated type for paginating through multiple OnlineStoreThemeFiles.

### Fields with this connection

* [Online​Store​Theme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.files)

  OBJECT

  A theme for display on the storefront. Themes control the visual appearance and functionality of the online store through templates, stylesheets, and assets that determine how [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), and other content display to customers.

  Each theme has a [role](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.role) that indicates its status. Main themes are live on the storefront, unpublished themes are inactive, demo themes require purchase before publishing, and development themes are temporary for previewing during development. The theme includes [translations](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.translations) for multi-language support.

***

### Possible returns

* edges

  [\[Online​Store​Theme​File​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Online​Store​Theme​File!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFile)

  non-null

  A list of nodes that are contained in OnlineStoreThemeFileEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* user​Errors

  [\[Online​Store​Theme​File​Read​Result!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreThemeFileReadResult)

  non-null

  List of errors that occurred during the request.

***

### Map

#### Fields with this connection

* [Online​Store​Theme.files](https://shopify.dev/docs/api/admin-graphql/latest/objects/OnlineStoreTheme#field-OnlineStoreTheme.fields.files)

#### Possible returns

* [Online​Store​Theme​File​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-edges)
* [Online​Store​Theme​File​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-nodes)
* [Online​Store​Theme​File​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-pageInfo)
* [Online​Store​Theme​File​Connection.userErrors](https://shopify.dev/docs/api/admin-graphql/latest/connections/OnlineStoreThemeFileConnection#returns-userErrors)

---
<a id="order-adjustment-connection"></a>

## Order​Adjustment​Connection

connection

An auto-generated type for paginating through multiple OrderAdjustments.

### Fields with this connection

* [Refund.orderAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.orderAdjustments)

  OBJECT

  The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  The `Refund` object provides information to:

  * Process customer returns and issue payments back to customers
  * Handle partial or full refunds for line items with optional inventory restocking
  * Refund shipping costs, duties, and additional fees
  * Issue store credit refunds as an alternative to original payment method returns
  * Track and reconcile all financial transactions related to refunds

  Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

  Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

  ***

  **Note:** The existence of a \<code>Refund\</code> object doesn\&#39;t guarantee that the money has been returned to the customer. The actual financial processing happens through associated \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code>\</a> objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status">status\</a> of the associated transactions.

  ***

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

***

### Possible returns

* edges

  [\[Order​Adjustment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order​Adjustment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAdjustment)

  non-null

  A list of nodes that are contained in OrderAdjustmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Refund.orderAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.orderAdjustments)

#### Possible returns

* [Order​Adjustment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection#returns-edges)
* [Order​Adjustment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection#returns-nodes)
* [Order​Adjustment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderAdjustmentConnection#returns-pageInfo)

---
<a id="order-connection"></a>

## Order​Connection

connection

An auto-generated type for paginating through multiple Orders.

### Fields with this connection

* [Company.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders)

  OBJECT

  A business entity that purchases from the shop as part of B2B commerce. Companies organize multiple locations and contacts who can place orders on behalf of the organization. [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects can have custom pricing through [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) and [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList) configurations.

* [Company​Contact.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders)

  OBJECT

  A person who acts on behalf of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) to make B2B purchases. Company contacts are associated with [`Customer`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) accounts and can place orders on behalf of their company.

  Each contact can be assigned to one or more [`CompanyLocation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation) objects with specific roles that determine their permissions and access to catalogs, pricing, and payment terms configured for those locations.

* [Company​Location.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Customer​Merge​Preview​Default​Fields.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders)

  OBJECT

  The fields that will be kept as part of a customer merge preview.

* [Subscription​Billing​Cycle​Edited​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.orders)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.orders](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-orders)

  INTERFACE

  Represents subscription contract common fields.

* [Shop.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orders)

  OBJECT

  Deprecated

***

### Queries with this connection

* [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)

  query

  Returns a list of [orders](https://shopify.dev/api/admin-graphql/latest/objects/Order) placed in the store, including data such as order status, customer, and line item details. Use the `orders` query to build reports, analyze sales performance, or automate fulfillment workflows. The `orders` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders#arguments-query).

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

    [Order​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderSortKeys)

    Default:PROCESSED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * cart\_token

        string

      * channel

        string

      * channel\_id

        id

      * chargeback\_status

        string

      * checkout\_token

        string

      * confirmation\_number

        string

      * created\_at

        time

      * credit\_card\_last4

        string

      * current\_total\_price

        float

      * customer\_id

        id

      * delivery\_method

        string

      * discount\_code

        string

      * email

        string

      * financial\_status

        string

      * fraud\_protection\_level

        string

      * fulfillment\_location\_id

        id

      * fulfillment\_status

        string

      * gateway

        string

      * id

        id

      * location\_id

        id

      * metafields.{namespace}.{key}

        mixed

      * name

        string

      * payment\_id

        string

      * payment\_provider\_id

        id

      * po\_number

        string

      * processed\_at

        time

      * reference\_location\_id

        id

      * return\_status

        string

      * risk\_level

        string

      * sales\_channel

        string

      * sku

        string

      * source\_identifier

        string

      * source\_name

        string

      * status

        string

      * subtotal\_line\_items\_quantity

        string

      * tag

        string

      * tag\_not

        string

      * test

        boolean

      * total\_weight

        string

      * updated\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the cart token's unique value to track abandoned cart conversions or troubleshoot checkout issues. The token references the cart that's associated with an order.

      - Example:

        * `cart_token:abc123`

        Filter by the channel information [`handle`](https://shopify.dev/api/admin-graphql/latest/objects/ChannelInformation#field-ChannelInformation.fields.channelDefinition.handle) (`ChannelInformation.channelDefinition.handle`) field.

      - Example:

        * `channel:web`
        * `channel:web,pos`

        Filter by the channel [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.id) field.

      - Example:

        * `channel_id:123`

        Filter by the order's chargeback status. A chargeback occurs when a customer questions the legitimacy of a charge with their financial institution.

      - Valid values:

        * `accepted`
        * `charge_refunded`
        * `lost`
        * `needs_response`
        * `under_review`
        * `won`

        Example:

        * `chargeback_status:accepted`

        Filter by the checkout token's unique value to analyze conversion funnels or resolve payment issues. The checkout token's value references the checkout that's associated with an order.

      - Example:

        * `checkout_token:abc123`

        Filter by the randomly generated alpha-numeric identifier for an order that can be displayed to the customer instead of the sequential order name. This value isn't guaranteed to be unique.

      - Example:

        * `confirmation_number:ABC123`

        Filter by the date and time when the order was created in Shopify's system.

      - Example:

        * `created_at:2020-10-21T23:39:20Z`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the last four digits of the payment card that was used to pay for the order. This filter matches only the last four digits of the card for heightened security.

      - Example:

        * `credit_card_last4:1234`

        Filter by the current total price of the order in the shop currency, including any returns/refunds/removals. This filter supports both exact values and ranges.

      - Example:

        * `current_total_price:10`
        * `current_total_price:>=5.00 current_total_price:<=20.99`

        Filter orders by the customer [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Customer#field-Customer.fields.id) field.

      - Example:

        * `customer_id:123`

        Filter by the delivery [`methodType`](https://shopify.dev/api/admin-graphql/2024-07/objects/DeliveryMethod#field-DeliveryMethod.fields.methodType) field.

      - Valid values:

        * `shipping`
        * `pick-up`
        * `retail`
        * `local`
        * `pickup-point`
        * `none`

        Example:

        * `delivery_method:shipping`

        Filter by the case-insensitive discount code that was applied to the order at checkout. Limited to the first discount code used on an order. Maximum characters: 255.

      - Example:

        * `discount_code:ABC123`

        Filter by the email address that's associated with the order to provide customer support or analyze purchasing patterns.

      - Example:

        * `email:example@shopify.com`

        Filter by the order [`displayFinancialStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) field.

      - Valid values:

        * `paid`
        * `pending`
        * `authorized`
        * `partially_paid`
        * `partially_refunded`
        * `refunded`
        * `voided`
        * `expired`

        Example:

        * `financial_status:authorized`

        Filter by the level of fraud protection that's applied to the order. Use this filter to manage risk or handle disputes.

      - Valid values:

        * `fully_protected`
        * `partially_protected`
        * `not_protected`
        * `pending`
        * `not_eligible`
        * `not_available`

        Example:

        * `fraud_protection_level:fully_protected`

        Filter by the fulfillment location [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment#field-Fulfillment.fields.location.id) (`Fulfillment.location.id`) field.

      - Example:

        * `fulfillment_location_id:123`

        Filter by the [`displayFulfillmentStatus`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus) field to prioritize shipments or monitor order processing.

      - Valid values:

        * `unshipped`
        * `shipped`
        * `fulfilled`
        * `partial`
        * `scheduled`
        * `on_hold`
        * `unfulfilled`
        * `request_declined`

        Example:

        * `fulfillment_status:fulfilled`

        Filter by the [`paymentGatewayNames`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.paymentGatewayNames) field. Use this filter to find orders that were processed through specific payment providers like Shopify Payments, PayPal, or other custom payment gateways.

      - Example:

        * `gateway:shopify_payments`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the location [`id`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location#field-Location.fields.id) that's associated with the order to view and manage orders for specific locations. For POS orders, locations must be defined in the Shopify admin under **Settings** > **Locations**. If no ID is provided, then the primary location of the shop is returned.

      - Example:

        * `location_id:123`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:

        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

        Filter by the order [`name`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-name) field.

      - Example:

        * `name:1001-A`

        Filter by the payment ID that's associated with the order to reconcile financial records or troubleshoot payment issues.

      - Example:

        * `payment_id:abc123`

        Filter by the ID of the payment provider that's associated with the order to manage payment methods or troubleshoot transactions.

      - Example:

        * `payment_provider_id:123`

        Filter by the order [`poNumber`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.poNumber) field.

      - Example:

        * `po_number:P01001`

        Filter by the order [`processedAt`](https://shopify.dev/api/admin-graphql/latest/objects/order#field-Order.fields.processedAt) field.

      - Example:

        * `processed_at:2021-01-01T00:00:00Z`

        Filter by the ID of a location that's associated with the order, such as locations from fulfillments, refunds, or the shop's primary location.

      - Example:

        * `reference_location_id:123`

        Filter by the order's [`returnStatus`](https://shopify.dev/api/admin-graphql/latest/objects/Order#field-Order.fields.returnStatus) to monitor returns processing and track which orders have active returns.

      - Valid values:

        * `return_requested`
        * `in_progress`
        * `inspection_complete`
        * `returned`
        * `return_failed`
        * `no_return`

        Example:

        * `return_status:in_progress`

        Filter by the order risk assessment [`riskLevel`](https://shopify.dev/api/admin-graphql/latest/objects/OrderRiskAssessment#field-OrderRiskAssessment.fields.riskLevel) field.

      - Valid values:

        * `high`
        * `medium`
        * `low`
        * `none`
        * `pending`

        Example:

        * `risk_level:high`

        Filter by the [sales channel](https://shopify.dev/docs/apps/build/sales-channels) where the order was made to analyze performance or manage fulfillment processes.

      - Example:

        * `sales_channel: some_sales_channel`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:ABC123`

        Filter by the ID of the order placed on the originating platform, such as a unique POS or third-party identifier. This value doesn't correspond to the Shopify ID that's generated from a completed draft order.

      - Example:

        * `source_identifier:1234-12-1000`

        Filter by the platform where the order was placed to distinguish between web orders, POS sales, draft orders, or third-party channels. Use this filter to analyze sales performance across different ordering methods.

      - Example:

        * `source_name:web`
        * `source_name:shopify_draft_order`

        Filter by the order's status to manage workflows or analyze the order lifecycle.

      - Valid values:

        * `open`
        * `closed`
        * `cancelled`
        * `not_closed`

        Example:

        * `status:open`

        Filter by the total number of items across all line items in an order. This filter supports both exact values and ranges, and is useful for identifying bulk orders or analyzing purchase volume patterns.

      - Example:

        * `subtotal_line_items_quantity:10`
        * `subtotal_line_items_quantity:5..20`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by test orders. Test orders are made using the [Shopify Bogus Gateway](https://help.shopify.com/manual/checkout-settings/test-orders/payments-test-mode#bogus-gateway) or a payment provider with test mode enabled.

      - Example:

        * `test:true`

        Filter by the order weight. This filter supports both exact values and ranges, and is to be used to filter orders by the total weight of all items (excluding packaging). It takes a unit of measurement as a suffix. It accepts the following units: g, kg, lb, oz.

      - Example:

        * `total_weight:10.5kg`
        * `total_weight:>=5g total_weight:<=20g`
        * `total_weight:.5 lb`

        Filter by the date and time when the order was last updated in Shopify's system.

        Example:

        * `updated_at:2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  non-null

  A list of nodes that are contained in OrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.orders)
* [Company​Contact.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyContact#field-CompanyContact.fields.orders)
* [Company​Location.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)
* [Customer.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.orders)
* [Customer​Merge​Preview​Default​Fields.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMergePreviewDefaultFields#field-CustomerMergePreviewDefaultFields.fields.orders)
* [Subscription​Billing​Cycle​Edited​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.orders)
* [Subscription​Contract.orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)
* [Subscription​Contract​Base.orders](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-orders)

#### Queries with this connection

* [orders](https://shopify.dev/docs/api/admin-graphql/latest/queries/orders)

#### Possible returns

* [Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-edges)
* [Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-nodes)
* [Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderConnection#returns-pageInfo)

---
<a id="order-staged-change-connection"></a>

## Order​Staged​Change​Connection

connection

An auto-generated type for paginating through multiple OrderStagedChanges.

### Fields with this connection

* [Calculated​Order.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.stagedChanges)

  OBJECT

  An order during an active edit session with all proposed changes applied but not yet committed. When you begin editing an order with the [`orderEditBegin`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditBegin) mutation, the system creates a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) that shows how the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) will look after your changes. The calculated order tracks the original order state and all staged modifications (added or removed [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects, quantity adjustments, discount changes, and [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine) updates). Use the calculated order to preview the financial impact of edits before committing them with the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

***

### Possible returns

* edges

  [\[Order​Staged​Change​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order​Staged​Change!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/OrderStagedChange)

  non-null

  A list of nodes that are contained in OrderStagedChangeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Calculated​Order.stagedChanges](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder#field-CalculatedOrder.fields.stagedChanges)

#### Possible returns

* [Order​Staged​Change​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-edges)
* [Order​Staged​Change​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-nodes)
* [Order​Staged​Change​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderStagedChangeConnection#returns-pageInfo)

---
<a id="order-transaction-connection"></a>

## Order​Transaction​Connection

connection

An auto-generated type for paginating through multiple OrderTransactions.

### Fields with this connection

* [Cash​Tracking​Session.cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions)

  OBJECT

  Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

* [Refund.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.transactions)

  OBJECT

  The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  The `Refund` object provides information to:

  * Process customer returns and issue payments back to customers
  * Handle partial or full refunds for line items with optional inventory restocking
  * Refund shipping costs, duties, and additional fees
  * Issue store credit refunds as an alternative to original payment method returns
  * Track and reconcile all financial transactions related to refunds

  Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

  Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

  ***

  **Note:** The existence of a \<code>Refund\</code> object doesn\&#39;t guarantee that the money has been returned to the customer. The actual financial processing happens through associated \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code>\</a> objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status">status\</a> of the associated transactions.

  ***

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

* [Return.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.transactions)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

* [Subscription​Billing​Attempt.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.transactions)

  OBJECT

  A record of an execution of the subscription billing process. Billing attempts use idempotency keys to avoid duplicate order creation.

  When a billing attempt completes successfully, it creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The attempt includes associated payment transactions and any errors that occur during billing. If 3D Secure authentication is required, the `nextActionUrl` field provides the redirect URL for customer verification.

***

### Possible returns

* edges

  [\[Order​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction)

  non-null

  A list of nodes that are contained in OrderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Cash​Tracking​Session.cashTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.cashTransactions)
* [Refund.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.transactions)
* [Return.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.transactions)
* [Subscription​Billing​Attempt.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.transactions)

#### Possible returns

* [Order​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-edges)
* [Order​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-nodes)
* [Order​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/OrderTransactionConnection#returns-pageInfo)

---
<a id="page-connection"></a>

## Page​Connection

connection

An auto-generated type for paginating through multiple Pages.

### Queries with this connection

* [pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)

  query

  A paginated list of pages from the online store. [`Page`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page) objects are content pages that merchants create to provide information to customers, such as "About Us", "Contact", or policy pages.

  The query supports filtering with a [search query](https://shopify.dev/docs/api/usage/search-syntax) and sorting by various criteria. Advanced filtering is available through saved searches using the [`savedSearchId`](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages#arguments-savedSearchId) argument.

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

    [Page​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PageSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      * handle

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the date and time when the page was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by the handle of the page.

    * * id

        id

      * published\_at

        time

      * published\_status

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the date and time when the page was published.

      - Example:

        * `published_at:>'2020-10-21T23:39:20Z'`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter by published status

    * title

      string

      Filter by the title of the page.

    * updated\_at

      time

      Filter by the date and time when the page was last updated.

      Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Page​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Page!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page)

  non-null

  A list of nodes that are contained in PageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [pages](https://shopify.dev/docs/api/admin-graphql/latest/queries/pages)

#### Possible returns

* [Page​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-edges)
* [Page​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-nodes)
* [Page​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PageConnection#returns-pageInfo)

---
<a id="payment-customization-connection"></a>

## Payment​Customization​Connection

connection

An auto-generated type for paginating through multiple PaymentCustomizations.

### Queries with this connection

* [payment​Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentCustomizations)

  query

  The payment customizations.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * enabled

      boolean

    * function\_id

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

### Possible returns

* edges

  [\[Payment​Customization​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomizationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Customization!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentCustomization)

  non-null

  A list of nodes that are contained in PaymentCustomizationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [payment​Customizations](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentCustomizations)

#### Possible returns

* [Payment​Customization​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentCustomizationConnection#returns-edges)
* [Payment​Customization​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentCustomizationConnection#returns-nodes)
* [Payment​Customization​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentCustomizationConnection#returns-pageInfo)

---
<a id="payment-mandate-resource-connection"></a>

## Payment​Mandate​Resource​Connection

connection

An auto-generated type for paginating through multiple PaymentMandateResources.

### Fields with this connection

* [Customer​Payment​Method.mandates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.mandates)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

### Possible returns

* edges

  [\[Payment​Mandate​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Mandate​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentMandateResource)

  non-null

  A list of nodes that are contained in PaymentMandateResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer​Payment​Method.mandates](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.mandates)

#### Possible returns

* [Payment​Mandate​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-edges)
* [Payment​Mandate​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-nodes)
* [Payment​Mandate​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentMandateResourceConnection#returns-pageInfo)

---
<a id="payment-schedule-connection"></a>

## Payment​Schedule​Connection

connection

An auto-generated type for paginating through multiple PaymentSchedules.

### Fields with this connection

* [Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

  OBJECT

  Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).

  Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.

  Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).

***

### Possible returns

* edges

  [\[Payment​Schedule​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentScheduleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Schedule!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule)

  non-null

  A list of nodes that are contained in PaymentScheduleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

#### Possible returns

* [Payment​Schedule​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-edges)
* [Payment​Schedule​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-nodes)
* [Payment​Schedule​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PaymentScheduleConnection#returns-pageInfo)

---
<a id="point-of-sale-device-connection"></a>

## Point​Of​Sale​Device​Connection

connection

An auto-generated type for paginating through multiple PointOfSaleDevices.

### Fields with this connection

* [Cash​Drawer.pointOfSaleDevices](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.pointOfSaleDevices)

  OBJECT

  A cash drawer for cash management.

***

### Possible returns

* edges

  [\[Point​Of​Sale​Device​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDeviceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Point​Of​Sale​Device!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevice)

  non-null

  A list of nodes that are contained in PointOfSaleDeviceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Cash​Drawer.pointOfSaleDevices](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashDrawer#field-CashDrawer.fields.pointOfSaleDevices)

#### Possible returns

* [Point​Of​Sale​Device​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDeviceConnection#returns-edges)
* [Point​Of​Sale​Device​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDeviceConnection#returns-nodes)
* [Point​Of​Sale​Device​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDeviceConnection#returns-pageInfo)

---
<a id="point-of-sale-device-payment-session-connection"></a>

## Point​Of​Sale​Device​Payment​Session​Connection

connection

An auto-generated type for paginating through multiple PointOfSaleDevicePaymentSessions.

### Queries with this connection

* [point​Of​Sale​Device​Payment​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions)

  query

  A list of point of sale device payment sessions in the shop.

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

    [Point​Of​Sale​Device​Payment​Session​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PointOfSaleDevicePaymentSessionSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * closing\_date

      date

    * closing\_time

      time

    * * id

        id

      * is\_open

        boolean

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * location\_id

      id

    * opening\_date

      date

    * opening\_time

      time

    * point\_of\_sale\_device\_id

      id

  ***

***

### Possible returns

* edges

  [\[Point​Of​Sale​Device​Payment​Session​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSessionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Point​Of​Sale​Device​Payment​Session!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PointOfSaleDevicePaymentSession)

  non-null

  A list of nodes that are contained in PointOfSaleDevicePaymentSessionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [point​Of​Sale​Device​Payment​Sessions](https://shopify.dev/docs/api/admin-graphql/latest/queries/pointOfSaleDevicePaymentSessions)

#### Possible returns

* [Point​Of​Sale​Device​Payment​Session​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDevicePaymentSessionConnection#returns-edges)
* [Point​Of​Sale​Device​Payment​Session​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDevicePaymentSessionConnection#returns-nodes)
* [Point​Of​Sale​Device​Payment​Session​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PointOfSaleDevicePaymentSessionConnection#returns-pageInfo)

---
<a id="price-list-connection"></a>

## Price​List​Connection

connection

An auto-generated type for paginating through multiple PriceLists.

### Queries with this connection

* [price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

  query

  All price lists for a shop.

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

    [Price​List​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

### Possible returns

* edges

  [\[Price​List​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​List!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList)

  non-null

  A list of nodes that are contained in PriceListEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [price​Lists](https://shopify.dev/docs/api/admin-graphql/latest/queries/priceLists)

#### Possible returns

* [Price​List​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-edges)
* [Price​List​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-nodes)
* [Price​List​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListConnection#returns-pageInfo)

---
<a id="price-list-price-connection"></a>

## Price​List​Price​Connection

connection

An auto-generated type for paginating through multiple PriceListPrices.

### Fields with this connection

* [Price​List.prices](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices)

  OBJECT

  A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

  Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

  Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

***

### Possible returns

* edges

  [\[Price​List​Price​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPriceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​List​Price!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice)

  non-null

  A list of nodes that are contained in PriceListPriceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Price​List.prices](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.prices)

#### Possible returns

* [Price​List​Price​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-edges)
* [Price​List​Price​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-nodes)
* [Price​List​Price​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceListPriceConnection#returns-pageInfo)

---
<a id="price-rule-discount-code-connection"></a>

## Price​Rule​Discount​Code​Connection

connection

An auto-generated type for paginating through multiple PriceRuleDiscountCodes.

### Fields with this connection

* [Price​Rule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  **Note:** Use the types and queries included our \<a href="https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started">discount tutorials\</a> instead. These will replace the GraphQL Admin API\&#39;s \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> object and \<a href="https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Code\</span>\</code>\</a> union, and the REST Admin API\&#39;s deprecated\<a href="https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Price\<wbr/>Rule\</span>\</code>\</a> resource.

  ***

***

### Possible returns

* edges

  [\[Price​Rule​Discount​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Price​Rule​Discount​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleDiscountCode)

  non-null

  A list of nodes that are contained in PriceRuleDiscountCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Price​Rule.discountCodes](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes)

#### Possible returns

* [Price​Rule​Discount​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-edges)
* [Price​Rule​Discount​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-nodes)
* [Price​Rule​Discount​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PriceRuleDiscountCodeConnection#returns-pageInfo)

---
<a id="product-bundle-component-connection"></a>

## Product​Bundle​Component​Connection

connection

An auto-generated type for paginating through multiple ProductBundleComponents.

### Fields with this connection

* [Product.bundleComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.bundleComponents)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

***

### Possible returns

* edges

  [\[Product​Bundle​Component​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Bundle​Component!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent)

  non-null

  A list of nodes that are contained in ProductBundleComponentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Product.bundleComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.bundleComponents)

#### Possible returns

* [Product​Bundle​Component​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection#returns-edges)
* [Product​Bundle​Component​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection#returns-nodes)
* [Product​Bundle​Component​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductBundleComponentConnection#returns-pageInfo)

---
<a id="product-component-type-connection"></a>

## Product​Component​Type​Connection

connection

An auto-generated type for paginating through multiple ProductComponentTypes.

### Fields with this connection

* [Product.productComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productComponents)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

***

### Possible returns

* edges

  [\[Product​Component​Type​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentTypeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Component​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType)

  non-null

  A list of nodes that are contained in ProductComponentTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Product.productComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productComponents)

#### Possible returns

* [Product​Component​Type​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-edges)
* [Product​Component​Type​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-nodes)
* [Product​Component​Type​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-pageInfo)

---
<a id="product-connection"></a>

## Product​Connection

connection

An auto-generated type for paginating through multiple Products.

### Fields with this connection

* [Channel.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.products)

  OBJECT

  A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.

  Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.

  Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.

* [Collection.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.products)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Discount​Products.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.products)

  OBJECT

  A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied.

* [Price​Rule​Item​Entitlements.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.products)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.products)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productParents)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productParents)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

* [Publication.includedProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publication.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Selling​Plan​Group.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.products)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  **Caution:** Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

* [Shop.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.products)

  OBJECT

  Deprecated

***

### Queries with this connection

* [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

  query

  Retrieves a list of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in a store. Products are the items that merchants can sell in their store.

  Use the `products` query when you need to:

  * Build a browsing interface for a product catalog.
  * Create product [searching](https://shopify.dev/docs/api/usage/search-syntax), [sorting](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey), and [filtering](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-query) experiences.
  * Implement product recommendations.
  * Sync product data with external systems.

  The `products` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-savedSearchId) for frequently used product queries.

  The `products` query returns products with their associated metadata, including:

  * Basic product information (for example, title, description, vendor, and type)
  * Product options and product variants, with their prices and inventory
  * Media attachments (for example, images and videos)
  * SEO metadata
  * Product categories and tags
  * Product availability and publishing statuses

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

    [Product​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * bundles

        boolean

      * category\_id

        string

      * collection\_id

        id

      * combined\_listing\_role

        string

      * created\_at

        time

      * delivery\_profile\_id

        id

      * error\_feedback

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-1234`

        Filter by a [product bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). A product bundle is a set of two or more related products, which are commonly offered at a discount.

      - Example:

        * `bundles:true`

        Filter by the product [category ID](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-category) (`product.category.id`). A product category is the category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

      - Example:

        * `category_id:sg-4-17-2-17`

        Filter by the collection [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) field.

      - Example:

        * `collection_id:108179161409`

        Filter by the role of the product in a [combined listing](https://shopify.dev/apps/build/product-merchandising/combined-listings).

      - Valid values:

        * `parent`
        * `child`
        * `no_role`

        Example:

        * `combined_listing_role:parent`

        Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<='2024'`

        Filter by the delivery profile [`id`](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryProfile#field-id) field.

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by products with publishing errors.

    * * gift\_card

        boolean

      * handle

        string

      * has\_only\_composites

        boolean

      * has\_only\_default\_variant

        boolean

      * has\_variant\_with\_components

        boolean

      * id

        id

      * inventory\_total

        integer

      * is\_price\_reduced

        boolean

      * metafields.{namespace}.{key}

        mixed

      * out\_of\_stock\_somewhere

        boolean

      * price

        bigdecimal

      * product\_configuration\_owner

        string

      * product\_publication\_status

        string

      * product\_type

        string

      * publication\_ids

        string

      * publishable\_status

        string

      * published\_at

        time

      * published\_status

        string

      * sku

        string

      * status

        string

      * tag

        string

      * tag\_not

        string

      * title

        string

      * tracks\_inventory

        boolean

      * updated\_at

        time

      * variant\_id

        id

      * variant\_title

        string

      * vendor

        string

      - Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by a comma-separated list of product [handles](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-handle).

      - Example:

        * `handle:the-minimal-snowboard`

        Filter by products that have only composite variants.

      - Example:

        * `has_only_composites:true`

        Filter by products that have only a default variant. A default variant is the only variant if no other variants are specified.

      - Example:

        * `has_only_default_variant:true`

        Filter by products that have variants with associated components.

      - Example:

        * `has_variant_with_components:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by inventory count.

      - Example:

        * `inventory_total:0`
        * `inventory_total:>150`
        * `inventory_total:>=200`

        Filter by products that have a reduced price. For more information, refer to the [`CollectionRule`](https://shopify.dev/api/admin-graphql/latest/objects/CollectionRule) object.

      - Example:

        * `is_price_reduced:true`

        Filters resources by metafield value. Format: `metafields.{namespace}.{key}:{value}`. Learn more about [querying by metafield value](https://shopify.dev/apps/build/custom-data/metafields/query-by-metafield-value).

      - Example:

        * `metafields.custom.on_sale:true`
        * `metafields.product.material:"gid://shopify/Metaobject/43458085"`

        Filter by products that are out of stock in at least one location.

      - Example:

        * `out_of_stock_somewhere:true`

        Filter by the product variant [`price`](https://shopify.dev/api/admin-graphql/latest/objects/Productvariant#field-price) field.

      - Example:

        * `price:100.57`

        Filter by the app [`id`](https://shopify.dev/api/admin-graphql/latest/objects/App#field-id) field.

      - Example:

        * `product_configuration_owner:10001`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        Filter by a comma-separated list of [product types](https://help.shopify.com/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter by a comma-separated list of publication IDs that are associated with the product.

      - Example:

        * `publication_ids:184111530305,184111694145`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter by the date and time when the product was published to the online store and other sales channels.

      - Example:

        * `published_at:>2020-10-21T23:39:20Z`
        * `published_at:<now`
        * `published_at:<=2024`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:

        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_id_or_handle}-published`
        * `* {channel_id_or_handle}-visible`
        * `* {channel_id_or_handle}-intended`
        * `* {channel_id_or_handle}-hidden`
        * `* {channel_app_id_or_handle}-published`
        * `* {channel_app_id_or_handle}-visible`
        * `* {channel_app_id_or_handle}-intended`
        * `* {channel_app_id_or_handle}-hidden`
        * `unavailable`

        Example:

        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:my-channel-handle-published`
        * `published_status:unavailable`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter by a comma-separated list of statuses. You can use statuses to manage inventory. Shopify only displays products with an `ACTIVE` status in online stores, sales channels, and apps.

      - Valid values:

        * `active` Default
        * `archived`
        * `draft`

        Example:

        * `status:active,draft`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by products that have [inventory tracking](https://help.shopify.com/manual/products/inventory/getting-started-with-inventory/set-up-inventory-tracking) enabled.

      - Example:

        * `tracks_inventory:true`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<='2024'`

        Filter by the product variant [`id`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-id) field.

      - Example:

        * `variant_id:45779434701121`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `variant_title:'Special ski wax'`

        Filter by the origin or source of the product. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Product​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  non-null

  A list of nodes that are contained in ProductEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Channel.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.products)
* [Collection.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.products)
* [Discount​Products.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.products)
* [Price​Rule​Item​Entitlements.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.products)
* [Price​Rule​Line​Item​Prerequisites.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.products)
* [Product.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productParents)
* [Product​Variant.productParents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productParents)
* [Publication.includedProducts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts)
* [Publication.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products)
* [Selling​Plan​Group.products](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.products)

#### Queries with this connection

* [products](https://shopify.dev/docs/api/admin-graphql/latest/queries/products)

#### Possible returns

* [Product​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-edges)
* [Product​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-nodes)
* [Product​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductConnection#returns-pageInfo)

---
<a id="product-feed-connection"></a>

## Product​Feed​Connection

connection

An auto-generated type for paginating through multiple ProductFeeds.

### Queries with this connection

* [product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

  query

  The product feeds for the shop.

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

### Possible returns

* edges

  [\[Product​Feed​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeedEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Feed!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductFeed)

  non-null

  A list of nodes that are contained in ProductFeedEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [product​Feeds](https://shopify.dev/docs/api/admin-graphql/latest/queries/productFeeds)

#### Possible returns

* [Product​Feed​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-edges)
* [Product​Feed​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-nodes)
* [Product​Feed​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductFeedConnection#returns-pageInfo)

---
<a id="product-publication-connection"></a>

## Product​Publication​Connection

connection

An auto-generated type for paginating through multiple ProductPublications.

### Fields with this connection

#### Deprecated fields with this connection

* [Channel.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublications)

  OBJECT

  Deprecated

* [Product.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productPublications)

  OBJECT

  Deprecated

* [Product.publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.publications)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Product​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  non-null

  A list of nodes that are contained in ProductPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Product​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-edges)
* [Product​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-nodes)
* [Product​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-pageInfo)

---
<a id="product-variant-component-connection"></a>

## Product​Variant​Component​Connection

connection

An auto-generated type for paginating through multiple ProductVariantComponents.

### Fields with this connection

* [Product​Variant.productVariantComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productVariantComponents)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

***

### Possible returns

* edges

  [\[Product​Variant​Component​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Variant​Component!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantComponent)

  non-null

  A list of nodes that are contained in ProductVariantComponentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Product​Variant.productVariantComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.productVariantComponents)

#### Possible returns

* [Product​Variant​Component​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection#returns-edges)
* [Product​Variant​Component​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection#returns-nodes)
* [Product​Variant​Component​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantComponentConnection#returns-pageInfo)

---
<a id="product-variant-connection"></a>

## Product​Variant​Connection

connection

An auto-generated type for paginating through multiple ProductVariants.

### Fields with this connection

* [Delivery​Profile​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.variants)

  OBJECT

  A product and the subset of associated variants that are part of this delivery profile.

* [Discount​Products.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.productVariants)

  OBJECT

  A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied.

* [Inventory​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.variants)

  OBJECT

  A [product variant's](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) inventory information across all locations. The inventory item connects the product variant to its [inventory levels](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryLevel) at different locations, tracking stock keeping unit (SKU), whether quantities are tracked, shipping requirements, and customs information for the product.

  Learn more about [inventory object relationships](https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps/manage-quantities-states#inventory-object-relationships).

* [Price​Rule​Item​Entitlements.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.productVariants)

  OBJECT

  The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned.

* [Price​Rule​Line​Item​Prerequisites.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.productVariants)

  OBJECT

  Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination.

* [Product.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Bundle​Component.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.componentVariants)

  OBJECT

  The product's component information.

* [Product​Component​Type.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.componentVariants)

  OBJECT

  The product component information.

* [Product​Component​Type.nonComponentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.nonComponentVariants)

  OBJECT

  The product component information.

* [Selling​Plan​Group.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.productVariants)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  **Caution:** Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

* [Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.insufficientStockProductVariants)

  OBJECT

  An inventory error caused by an issue with one or more of the contract merchandise lines.

* [Subscription​Billing​Attempt​Inventory​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInventoryError#field-SubscriptionBillingAttemptInventoryError.fields.insufficientStockProductVariants)

  OBJECT

  An inventory-related error that occurred during a subscription billing attempt.

#### Deprecated fields with this connection

* [Shop.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVariants)

  OBJECT

  Deprecated

* [Subscription​Billing​Attempt​Out​Of​Stock​Product​Variants​Error.outOfStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptOutOfStockProductVariantsError#field-SubscriptionBillingAttemptOutOfStockProductVariantsError.fields.outOfStockProductVariants)

  OBJECT

  Deprecated

***

### Queries with this connection

* [product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants)

  query

  Retrieves a list of [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) associated with a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product).

  A product variant is a specific version of a product that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `productVariants` query when you need to:

  * Search for product variants by attributes such as SKU, barcode, or inventory quantity.
  * Filter product variants by attributes, such as whether they're gift cards or have custom metafields.
  * Fetch product variants for bulk operations, such as updating prices or inventory.
  * Preload data for product variants, such as inventory items, selected options, or associated products.

  The `productVariants` query supports [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) to handle large product catalogs and [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-savedSearchId) for frequently used product variant queries.

  The `productVariants` query returns product variants with their associated metadata, including:

  * Basic product variant information (for example, title, SKU, barcode, price, and inventory)
  * Media attachments (for example, images and videos)
  * Associated products, selling plans, bundles, and metafields

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

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

    [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * barcode

        string

      * collection

        string

      * delivery\_profile\_id

        id

      * exclude\_composite

        boolean

      * exclude\_variants\_with\_components

        boolean

      * gift\_card

        boolean

      * id

        id

      * inventory\_quantity

        integer

      * location\_id

        id

      * managed

        boolean

      * managed\_by

        string

      * option1

        string

      * option2

        string

      * option3

        string

      * product\_id

        id

      * product\_ids

        string

      * product\_publication\_status

        string

      * product\_status

        string

      * product\_type

        string

      * publishable\_status

        string

      * published\_status

        string

      * requires\_components

        boolean

      * sku

        string

      * tag

        string

      * tag\_not

        string

      * taxable

        boolean

      * title

        string

      * updated\_at

        time

      * vendor

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by the product variant [`barcode`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-barcode) field.

      - Example:

        * `barcode:ABC-abc-123`

        Filter by the [ID of the collection](https://shopify.dev/api/admin-graphql/latest/objects/Collection#field-id) that the product variant belongs to.

      - Example:

        * `collection:465903092033`

        Filter by the product variant [delivery profile ID](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-deliveryprofile) (`ProductVariant.deliveryProfile.id`).

      - Example:

        * `delivery_profile_id:108179161409`

        Filter by product variants that aren't composites.

      - Example:

        * `exclude_composite:true`

        Filter by whether there are [components](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle) that are associated with the product variants in a bundle.

      - Example:

        * `exclude_variants_with_components:true`

        Filter by the product [`isGiftCard`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-isgiftcard) field.

      - Example:

        * `gift_card:true`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by an aggregate of inventory across all locations where the product variant is stocked.

      - Example:

        * `inventory_quantity:10`

        Filter by the [location ID](https://shopify.dev/api/admin-graphql/latest/objects/Location#field-id) for the product variant.

      - Example:

        * `location_id:88511152449`

        Filter by whether there is fulfillment service tracking associated with the product variants.

      - Example:

        * `managed:true`

        Filter by the fulfillment service that tracks the number of items in stock for the product variant.

      - Example:

        * `managed_by:shopify`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option1:small`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option2:medium`

        Filter by a custom property that a shop owner uses to define product variants.

      - Example:

        * `option3:large`

        Filter by the product [`id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id) field.

      - Example:

        * `product_id:8474977763649`

        Filter by a comma-separated list of product [IDs](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-id).

      - Example:

        * `product_ids:8474977763649,8474977796417`

        Filter by channel approval process status of the resource on a channel, such as the online store. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#field-Channel.fields.app) (`Channel.app.id`) and one of the valid values. For simple visibility checks, use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) instead.

      - Valid values:

        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-rejected`
        * `* {channel_app_id}-needs_action`
        * `* {channel_app_id}-awaiting_review`
        * `* {channel_app_id}-published`
        * `* {channel_app_id}-demoted`
        * `* {channel_app_id}-scheduled`
        * `* {channel_app_id}-provisionally_published`

        Example:

        * `product_publication_status:189769876-approved`

        Filter by a comma-separated list of product [statuses](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-status).

      - Example:

        * `product_status:ACTIVE,DRAFT`

        Filter by the product type that's associated with the product variants.

      - Example:

        * `product_type:snowboard`

        **Deprecated:** This parameter is deprecated as of 2025-12 and will be removed in a future API version. Use [published\_status](https://shopify.dev/api/admin-graphql/latest/queries/products#argument-query-filter-publishable_status) for visibility checks. Filter by the publishable status of the resource on a channel. The value is a composite of the [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`) and one of the valid status values.

      - Valid values:

        * `* {channel_app_id}-unset`
        * `* {channel_app_id}-pending`
        * `* {channel_app_id}-approved`
        * `* {channel_app_id}-not_approved`

        Example:

        * `publishable_status:580111-unset`
        * `publishable_status:580111-pending`

        Filter resources by their visibility and publication state on a channel. Online store channel filtering: - `online_store_channel`: Returns all resources in the online store channel, regardless of publication status. - `published`/`visible`: Returns resources that are published to the online store. - `unpublished`: Returns resources that are not published to the online store. Channel-specific filtering using a channel ID, channel handle, [channel `app` ID](https://shopify.dev/api/admin-graphql/latest/objects/Channel#app-price) (`Channel.app.id`), or app handle with suffixes: - `{id_or_handle}-published`: Returns resources published to the specified channel. - `{id_or_handle}-visible`: Same as `{id_or_handle}-published` (kept for backwards compatibility). - `{id_or_handle}-intended`: Returns resources added to the channel but not yet published. - `{id_or_handle}-hidden`: Returns resources not added to the channel or not published. Other: - `unavailable`: Returns resources not published to any channel.

      - Valid values:

        * `online_store_channel`
        * `published`
        * `visible`
        * `unpublished`
        * `* {channel_id_or_handle}-published`
        * `* {channel_id_or_handle}-visible`
        * `* {channel_id_or_handle}-intended`
        * `* {channel_id_or_handle}-hidden`
        * `* {channel_app_id_or_handle}-published`
        * `* {channel_app_id_or_handle}-visible`
        * `* {channel_app_id_or_handle}-intended`
        * `* {channel_app_id_or_handle}-hidden`
        * `unavailable`

        Example:

        * `published_status:online_store_channel`
        * `published_status:published`
        * `published_status:580111-published`
        * `published_status:580111-hidden`
        * `published_status:my-channel-handle-published`
        * `published_status:unavailable`

        Filter by whether the product variant can only be purchased with components. [Learn more](https://shopify.dev/apps/build/product-merchandising/bundles#store-eligibility).

      - Example:

        * `requires_components:true`

        Filter by the product variant [`sku`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:

        * `sku:XYZ-12345`

        Filter objects by the `tag` field.

      - Example:

        * `tag:my_tag`

        Filter by objects that don’t have the specified tag.

      - Example:

        * `tag_not:my_tag`

        Filter by the product variant [`taxable`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-taxable) field.

      - Example:

        * `taxable:false`

        Filter by the product variant [`title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-title) field.

      - Example:

        * `title:ice`

        Filter by date and time when the product variant was updated.

      - Example:

        * `updated_at:>2020-10-21T23:39:20Z`
        * `updated_at:<now`
        * `updated_at:<=2024`

        Filter by the origin or source of the product variant. Learn more about [vendors and managing vendor information](https://help.shopify.com/manual/products/managing-vendor-info).

        Example:

        * `vendor:Snowdevil`
        * `vendor:Snowdevil,Icedevil`
        * `vendor:Snowdevil OR vendor:Icedevil`

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Product​Variant​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Variant!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant)

  non-null

  A list of nodes that are contained in ProductVariantEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Profile​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.variants)
* [Discount​Products.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts#field-DiscountProducts.fields.productVariants)
* [Inventory​Item.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-InventoryItem.fields.variants)
* [Price​Rule​Item​Entitlements.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleItemEntitlements#field-PriceRuleItemEntitlements.fields.productVariants)
* [Price​Rule​Line​Item​Prerequisites.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleLineItemPrerequisites#field-PriceRuleLineItemPrerequisites.fields.productVariants)
* [Product.variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants)
* [Product​Bundle​Component.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleComponent#field-ProductBundleComponent.fields.componentVariants)
* [Product​Component​Type.componentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.componentVariants)
* [Product​Component​Type.nonComponentVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType#field-ProductComponentType.fields.nonComponentVariants)
* [Selling​Plan​Group.productVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.productVariants)
* [Subscription​Billing​Attempt​Insufficient​Stock​Product​Variants​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInsufficientStockProductVariantsError#field-SubscriptionBillingAttemptInsufficientStockProductVariantsError.fields.insufficientStockProductVariants)
* [Subscription​Billing​Attempt​Inventory​Error.insufficientStockProductVariants](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptInventoryError#field-SubscriptionBillingAttemptInventoryError.fields.insufficientStockProductVariants)

#### Queries with this connection

* [product​Variants](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants)

#### Possible returns

* [Product​Variant​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-edges)
* [Product​Variant​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-nodes)
* [Product​Variant​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantConnection#returns-pageInfo)

---
<a id="product-variant-price-pair-connection"></a>

## Product​Variant​Price​Pair​Connection

connection

An auto-generated type for paginating through multiple ProductVariantPricePairs.

### Fields with this connection

* [Product​Variant.presentmentPrices](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.presentmentPrices)

  OBJECT

  Deprecated

***

### Possible returns

* edges

  [\[Product​Variant​Price​Pair​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePairEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Variant​Price​Pair!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantPricePair)

  non-null

  A list of nodes that are contained in ProductVariantPricePairEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Possible returns

* [Product​Variant​Price​Pair​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-edges)
* [Product​Variant​Price​Pair​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-nodes)
* [Product​Variant​Price​Pair​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductVariantPricePairConnection#returns-pageInfo)

---
<a id="publication-connection"></a>

## Publication​Connection

connection

An auto-generated type for paginating through multiple Publications.

### Fields with this connection

* [Collection.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedPublications)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Product.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedPublications)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publishable.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedPublications)

  INTERFACE

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

***

### Queries with this connection

* [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)

  query

  Returns a paginated list of [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  Filter publications by [`CatalogType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType).

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    ### Arguments

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

***

### Possible returns

* edges

  [\[Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  A list of nodes that are contained in PublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Collection.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedPublications)
* [Product.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedPublications)
* [Publishable.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedPublications)

#### Queries with this connection

* [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)

#### Possible returns

* [Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-edges)
* [Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-nodes)
* [Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-pageInfo)

---
<a id="quantity-price-break-connection"></a>

## Quantity​Price​Break​Connection

connection

An auto-generated type for paginating through multiple QuantityPriceBreaks.

### Fields with this connection

* [Price​List​Price.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks)

  OBJECT

  Pricing for a [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) on a [`PriceList`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList). Represents the variant's price, compare-at price, and whether the price is fixed or calculated using percentage-based adjustments. The [`PriceListPriceOriginType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/PriceListPriceOriginType) distinguishes between prices set directly on the price list (fixed) and prices calculated using the price list's adjustment configuration (relative).

  Learn more about [building catalogs with different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

* [Product​Variant​Contextual​Pricing.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks)

  OBJECT

  The price of a product variant in a specific country. Prices vary between countries.

***

### Possible returns

* edges

  [\[Quantity​Price​Break​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreakEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Quantity​Price​Break!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityPriceBreak)

  non-null

  A list of nodes that are contained in QuantityPriceBreakEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Price​List​Price.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceListPrice#field-PriceListPrice.fields.quantityPriceBreaks)
* [Product​Variant​Contextual​Pricing.quantityPriceBreaks](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantContextualPricing#field-ProductVariantContextualPricing.fields.quantityPriceBreaks)

#### Possible returns

* [Quantity​Price​Break​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-edges)
* [Quantity​Price​Break​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-nodes)
* [Quantity​Price​Break​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityPriceBreakConnection#returns-pageInfo)

---
<a id="quantity-rule-connection"></a>

## Quantity​Rule​Connection

connection

An auto-generated type for paginating through multiple QuantityRules.

### Fields with this connection

* [Price​List.quantityRules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.quantityRules)

  OBJECT

  A list that defines pricing for [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). Price lists override default product prices with either fixed prices or percentage-based adjustments.

  Each price list associates with a [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) to determine which customers see the pricing. The catalog's context rules control when the price list applies, such as for specific markets, company locations, or apps.

  Learn how to [support different pricing models](https://shopify.dev/docs/apps/build/markets/build-catalog).

***

### Possible returns

* edges

  [\[Quantity​Rule​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRuleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Quantity​Rule!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/QuantityRule)

  non-null

  A list of nodes that are contained in QuantityRuleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Price​List.quantityRules](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceList#field-PriceList.fields.quantityRules)

#### Possible returns

* [Quantity​Rule​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection#returns-edges)
* [Quantity​Rule​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection#returns-nodes)
* [Quantity​Rule​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/QuantityRuleConnection#returns-pageInfo)

---
<a id="refund-connection"></a>

## Refund​Connection

connection

An auto-generated type for paginating through multiple Refunds.

### Fields with this connection

* [Return.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.refunds)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

### Possible returns

* edges

  [\[Refund​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Refund!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund)

  non-null

  A list of nodes that are contained in RefundEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.refunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.refunds)

#### Possible returns

* [Refund​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection#returns-edges)
* [Refund​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection#returns-nodes)
* [Refund​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundConnection#returns-pageInfo)

---
<a id="refund-line-item-connection"></a>

## Refund​Line​Item​Connection

connection

An auto-generated type for paginating through multiple RefundLineItems.

### Fields with this connection

* [Refund.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundLineItems)

  OBJECT

  The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  The `Refund` object provides information to:

  * Process customer returns and issue payments back to customers
  * Handle partial or full refunds for line items with optional inventory restocking
  * Refund shipping costs, duties, and additional fees
  * Issue store credit refunds as an alternative to original payment method returns
  * Track and reconcile all financial transactions related to refunds

  Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

  Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

  ***

  **Note:** The existence of a \<code>Refund\</code> object doesn\&#39;t guarantee that the money has been returned to the customer. The actual financial processing happens through associated \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code>\</a> objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status">status\</a> of the associated transactions.

  ***

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

***

### Possible returns

* edges

  [\[Refund​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Refund​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem)

  non-null

  A list of nodes that are contained in RefundLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Refund.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundLineItems)

#### Possible returns

* [Refund​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection#returns-edges)
* [Refund​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection#returns-nodes)
* [Refund​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundLineItemConnection#returns-pageInfo)

---
<a id="refund-shipping-line-connection"></a>

## Refund​Shipping​Line​Connection

connection

An auto-generated type for paginating through multiple RefundShippingLines.

### Fields with this connection

* [Refund.refundShippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundShippingLines)

  OBJECT

  The `Refund` object represents a financial record of money returned to a customer from an order. It provides a comprehensive view of all refunded amounts, transactions, and restocking instructions associated with returning products or correcting order issues.

  The `Refund` object provides information to:

  * Process customer returns and issue payments back to customers
  * Handle partial or full refunds for line items with optional inventory restocking
  * Refund shipping costs, duties, and additional fees
  * Issue store credit refunds as an alternative to original payment method returns
  * Track and reconcile all financial transactions related to refunds

  Each `Refund` object maintains detailed records of what was refunded, how much was refunded, which payment transactions were involved, and any inventory restocking that occurred. The refund can include multiple components such as product line items, shipping charges, taxes, duties, and additional fees, all calculated with proper currency handling for international orders.

  Refunds are always associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can optionally be linked to a [return](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) if the refund was initiated through the returns process. The refund tracks both the presentment currency (what the customer sees) and the shop currency for accurate financial reporting.

  ***

  **Note:** The existence of a \<code>Refund\</code> object doesn\&#39;t guarantee that the money has been returned to the customer. The actual financial processing happens through associated \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Order\<wbr/>Transaction\</span>\</code>\</a> objects, which can be in various states, such as pending, processing, success, or failure. To determine if money has actually been refunded, check the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderTransaction#field-OrderTransaction.fields.status">status\</a> of the associated transactions.

  ***

  Learn more about [managing returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management), [refunding duties](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/view-and-refund-duties), and [processing refunds](https://shopify.dev/docs/api/admin-graphql/latest/mutations/refundCreate).

***

### Possible returns

* edges

  [\[Refund​Shipping​Line​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLineEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Refund​Shipping​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundShippingLine)

  non-null

  A list of nodes that are contained in RefundShippingLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Refund.refundShippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Refund#field-Refund.fields.refundShippingLines)

#### Possible returns

* [Refund​Shipping​Line​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection#returns-edges)
* [Refund​Shipping​Line​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection#returns-nodes)
* [Refund​Shipping​Line​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/RefundShippingLineConnection#returns-pageInfo)

---
<a id="resource-publication-connection"></a>

## Resource​Publication​Connection

connection

An auto-generated type for paginating through multiple ResourcePublications.

### Fields with this connection

* [Channel.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3)

  OBJECT

  A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.

  Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.

  Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.

* [Channel.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublicationsV3)

  OBJECT

  A connection between a Shopify shop and an external selling platform that supports product syndication and optionally order ingestion. Each channel binds a merchant's account on a specific platform — such as Amazon, eBay, Google, or a point-of-sale system — to the shop, establishing the publishing destination for product feeds.

  Sales Channel applications use [`channelCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/channelCreate) to establish channels after merchant authentication, and can manage multiple channel connections per app. Each channel is bound to a channel specification that declares the platform's regional coverage, capabilities, and requirements.

  Use channels to manage where catalog items are syndicated, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different selling destinations.

* [Collection.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublications)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Product.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublications)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publication.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collectionPublicationsV3)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publication.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.productPublicationsV3)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publishable.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublications)

  INTERFACE

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

***

### Possible returns

* edges

  [\[Resource​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Resource​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication)

  non-null

  A list of nodes that are contained in ResourcePublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Channel.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3)
* [Channel.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublicationsV3)
* [Collection.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublications)
* [Product.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublications)
* [Publication.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collectionPublicationsV3)
* [Publication.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.productPublicationsV3)
* [Publishable.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublications)

#### Possible returns

* [Resource​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-edges)
* [Resource​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-nodes)
* [Resource​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-pageInfo)

---
<a id="resource-publication-v2connection"></a>

## Resource​Publication​V2Connection

connection

An auto-generated type for paginating through multiple ResourcePublicationV2s.

### Fields with this connection

* [Collection.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsV2)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  **Note:** Collections are unpublished by default. To make them available to customers, use the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish">\<code>\<span class="PreventFireFoxApplyingGapToWBR">publishable\<wbr/>Publish\</span>\</code>\</a> mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Product.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublicationsV2)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publishable.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublicationsV2)

  INTERFACE

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

***

### Possible returns

* edges

  [\[Resource​Publication​V2Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2Edge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Resource​Publication​V2!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationV2)

  non-null

  A list of nodes that are contained in ResourcePublicationV2Edge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Collection.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsV2)
* [Product.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublicationsV2)
* [Publishable.resourcePublicationsV2](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublicationsV2)

#### Possible returns

* [Resource​Publication​V2Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection#returns-edges)
* [Resource​Publication​V2Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection#returns-nodes)
* [Resource​Publication​V2Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationV2Connection#returns-pageInfo)

---
<a id="returnable-fulfillment-connection"></a>

## Returnable​Fulfillment​Connection

connection

An auto-generated type for paginating through multiple ReturnableFulfillments.

### Queries with this connection

* [returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

  query

  List of returnable fulfillments.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Order ID that will scope all returnable fulfillments.

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

### Possible returns

* edges

  [\[Returnable​Fulfillment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Returnable​Fulfillment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment)

  non-null

  A list of nodes that are contained in ReturnableFulfillmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [returnable​Fulfillments](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnableFulfillments)

#### Possible returns

* [Returnable​Fulfillment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-edges)
* [Returnable​Fulfillment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-nodes)
* [Returnable​Fulfillment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentConnection#returns-pageInfo)

---
<a id="returnable-fulfillment-line-item-connection"></a>

## Returnable​Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReturnableFulfillmentLineItems.

### Fields with this connection

* [Returnable​Fulfillment.returnableFulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.returnableFulfillmentLineItems)

  OBJECT

  A delivered order that's eligible to be returned to the merchant. Provides the items from completed fulfillments that customers can select when initiating a return.

  Use returnable fulfillments to determine which items are eligible for return before creating a [`Return`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return) with the [`returnCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/returnCreate) mutation. The line items show quantities that are available for return.

  Learn more about [building return management workflows](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management).

***

### Possible returns

* edges

  [\[Returnable​Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Returnable​Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillmentLineItem)

  non-null

  A list of nodes that are contained in ReturnableFulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Returnable​Fulfillment.returnableFulfillmentLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnableFulfillment#field-ReturnableFulfillment.fields.returnableFulfillmentLineItems)

#### Possible returns

* [Returnable​Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-edges)
* [Returnable​Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-nodes)
* [Returnable​Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnableFulfillmentLineItemConnection#returns-pageInfo)

---
<a id="return-connection"></a>

## Return​Connection

connection

An auto-generated type for paginating through multiple Returns.

### Fields with this connection

* [Order.returns](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.returns)

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

### Possible returns

* edges

  [\[Return​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return)

  non-null

  A list of nodes that are contained in ReturnEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.returns](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.returns)

#### Possible returns

* [Return​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection#returns-edges)
* [Return​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection#returns-nodes)
* [Return​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnConnection#returns-pageInfo)

---
<a id="return-line-item-type-connection"></a>

## Return​Line​Item​Type​Connection

connection

An auto-generated type for paginating through multiple ReturnLineItemTypes.

### Fields with this connection

* [Return.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.returnLineItems)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

### Possible returns

* edges

  [\[Return​Line​Item​Type​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnLineItemTypeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return​Line​Item​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/ReturnLineItemType)

  non-null

  A list of nodes that are contained in ReturnLineItemTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.returnLineItems)

#### Possible returns

* [Return​Line​Item​Type​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnLineItemTypeConnection#returns-edges)
* [Return​Line​Item​Type​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnLineItemTypeConnection#returns-nodes)
* [Return​Line​Item​Type​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnLineItemTypeConnection#returns-pageInfo)

---
<a id="return-reason-definition-connection"></a>

## Return​Reason​Definition​Connection

connection

An auto-generated type for paginating through multiple ReturnReasonDefinitions.

### Fields with this connection

* [Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

  OBJECT

  The `LineItem` object represents a single product or service that a customer purchased in an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Each line item is associated with a [product variant](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) and can have multiple [discount allocations](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAllocation). Line items contain details about what was purchased, including the product variant, quantity, pricing, and fulfillment status.

  Use the `LineItem` object to manage the following processes:

  * [Track the quantity of items](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/build-fulfillment-solutions) ordered, fulfilled, and unfulfilled.
  * [Calculate prices](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders), including discounts and taxes.
  * Manage fulfillment through [fulfillment services](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps).
  * Manage [returns](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) and [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges).
  * Handle [subscriptions](https://shopify.dev/docs/apps/build/purchase-options/subscriptions) and recurring orders.

  Line items can also include custom attributes and properties, allowing merchants to add specific details about each item in an order. Learn more about [managing orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

***

### Queries with this connection

* [return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

  query

  Returns the full library of available return reason definitions.

  Use this query to retrieve the standardized return reasons available for creating returns. Filter by IDs or handles to get specific definitions.

  Only non-deleted reasons should be shown to customers when creating new returns. Deleted reasons have been replaced with better alternatives and are no longer recommended. However, they remain valid options and may still appear on existing returns.

  * ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    A list of return reason definition IDs to filter by.

  * handles

    [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A list of return reason definition handles to filter by.

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

    [Return​Reason​Definition​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ReturnReasonDefinitionSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * deleted

        boolean

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by whether the return reason has been removed from taxonomy.

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by name.

  ***

***

### Possible returns

* edges

  [\[Return​Reason​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return​Reason​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnReasonDefinition)

  non-null

  A list of nodes that are contained in ReturnReasonDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

#### Queries with this connection

* [return​Reason​Definitions](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions)

#### Possible returns

* [Return​Reason​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-edges)
* [Return​Reason​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-nodes)
* [Return​Reason​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReturnReasonDefinitionConnection#returns-pageInfo)

---
<a id="reverse-delivery-connection"></a>

## Reverse​Delivery​Connection

connection

An auto-generated type for paginating through multiple ReverseDeliveries.

### Fields with this connection

* [Reverse​Fulfillment​Order.reverseDeliveries](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.reverseDeliveries)

  OBJECT

  A group of one or more items in a return that will be processed at a fulfillment service. There can be more than one reverse fulfillment order for a return at a given location.

***

### Possible returns

* edges

  [\[Reverse​Delivery​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Delivery!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery)

  non-null

  A list of nodes that are contained in ReverseDeliveryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Reverse​Fulfillment​Order.reverseDeliveries](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.reverseDeliveries)

#### Possible returns

* [Reverse​Delivery​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-edges)
* [Reverse​Delivery​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-nodes)
* [Reverse​Delivery​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryConnection#returns-pageInfo)

---
<a id="reverse-delivery-line-item-connection"></a>

## Reverse​Delivery​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReverseDeliveryLineItems.

### Fields with this connection

* [Reverse​Delivery.reverseDeliveryLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.reverseDeliveryLineItems)

  OBJECT

  A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant. For example, a buyer requests a return, and a merchant sends the buyer a shipping label. The reverse delivery contains the context of the items sent back, how they're being sent back (for example, a shipping label), and the current state of the delivery (tracking information).

***

### Possible returns

* edges

  [\[Reverse​Delivery​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Delivery​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDeliveryLineItem)

  non-null

  A list of nodes that are contained in ReverseDeliveryLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Reverse​Delivery.reverseDeliveryLineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.reverseDeliveryLineItems)

#### Possible returns

* [Reverse​Delivery​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-edges)
* [Reverse​Delivery​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-nodes)
* [Reverse​Delivery​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseDeliveryLineItemConnection#returns-pageInfo)

---
<a id="reverse-fulfillment-order-connection"></a>

## Reverse​Fulfillment​Order​Connection

connection

An auto-generated type for paginating through multiple ReverseFulfillmentOrders.

### Fields with this connection

* [Return.reverseFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.reverseFulfillmentOrders)

  OBJECT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

### Possible returns

* edges

  [\[Reverse​Fulfillment​Order​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Fulfillment​Order!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder)

  non-null

  A list of nodes that are contained in ReverseFulfillmentOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.reverseFulfillmentOrders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.reverseFulfillmentOrders)

#### Possible returns

* [Reverse​Fulfillment​Order​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-edges)
* [Reverse​Fulfillment​Order​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-nodes)
* [Reverse​Fulfillment​Order​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderConnection#returns-pageInfo)

---
<a id="reverse-fulfillment-order-line-item-connection"></a>

## Reverse​Fulfillment​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReverseFulfillmentOrderLineItems.

### Fields with this connection

* [Reverse​Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.lineItems)

  OBJECT

  A group of one or more items in a return that will be processed at a fulfillment service. There can be more than one reverse fulfillment order for a return at a given location.

***

### Possible returns

* edges

  [\[Reverse​Fulfillment​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Fulfillment​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrderLineItem)

  non-null

  A list of nodes that are contained in ReverseFulfillmentOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Reverse​Fulfillment​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReverseFulfillmentOrder#field-ReverseFulfillmentOrder.fields.lineItems)

#### Possible returns

* [Reverse​Fulfillment​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-edges)
* [Reverse​Fulfillment​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-nodes)
* [Reverse​Fulfillment​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ReverseFulfillmentOrderLineItemConnection#returns-pageInfo)

---
<a id="sales-agreement-connection"></a>

## Sales​Agreement​Connection

connection

An auto-generated type for paginating through multiple SalesAgreements.

### Fields with this connection

* [Order.agreements](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.agreements)

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

### Possible returns

* edges

  [\[Sales​Agreement​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SalesAgreementEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Sales​Agreement!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement)

  non-null

  A list of nodes that are contained in SalesAgreementEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.agreements](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.agreements)

#### Possible returns

* [Sales​Agreement​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SalesAgreementConnection#returns-edges)
* [Sales​Agreement​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SalesAgreementConnection#returns-nodes)
* [Sales​Agreement​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SalesAgreementConnection#returns-pageInfo)

---
<a id="sale-connection"></a>

## Sale​Connection

connection

An auto-generated type for paginating through multiple Sales.

### Fields with this connection

* [Order​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)

  OBJECT

  An agreement associated with an order placement.

* [Order​Edit​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)

  OBJECT

  An agreement associated with an edit to the order.

* [Refund​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)

  OBJECT

  An agreement between the merchant and customer to refund all or a portion of the order.

* [Return​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)

  OBJECT

  An agreement between the merchant and customer for a return.

* [Sales​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-sales)

  INTERFACE

  A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

***

### Possible returns

* edges

  [\[Sale​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SaleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Sale!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale)

  non-null

  A list of nodes that are contained in SaleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)
* [Order​Edit​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)
* [Refund​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)
* [Return​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)
* [Sales​Agreement.sales](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SalesAgreement#fields-sales)

#### Possible returns

* [Sale​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-edges)
* [Sale​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-nodes)
* [Sale​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SaleConnection#returns-pageInfo)

---
<a id="saved-search-connection"></a>

## Saved​Search​Connection

connection

An auto-generated type for paginating through multiple SavedSearches.

### Queries with this connection

* [automatic​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountSavedSearches)

  query

  List of the shop's automatic discount saved searches.

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

* [code​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountSavedSearches)

  query

  List of the shop's code discount saved searches.

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

* [collection​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionSavedSearches)

  query

  Returns a list of the shop's collection saved searches.

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

* [customer​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSavedSearches)

  query

  List of the shop's customer saved searches.

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

    [Customer​Saved​Search​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSavedSearchSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* [discount​Redeem​Code​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches)

  query

  List of the shop's redeemed discount code saved searches.

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

    [Discount​Code​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * times\_used

        integer

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* [draft​Order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderSavedSearches)

  query

  List of the shop's draft order saved searches.

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

* [file​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/fileSavedSearches)

  query

  A list of the shop's file saved searches.

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

* [order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderSavedSearches)

  query

  Returns [saved searches](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch) for orders in the shop. Saved searches store search queries with their filters and search terms.

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

* [product​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productSavedSearches)

  query

  Returns a list of the shop's product saved searches.

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

* [url​Redirect​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectSavedSearches)

  query

  A list of the shop's URL redirect saved searches.

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

### Possible returns

* edges

  [\[Saved​Search​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearchEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Saved​Search!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SavedSearch)

  non-null

  A list of nodes that are contained in SavedSearchEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [automatic​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/automaticDiscountSavedSearches)
* [code​Discount​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/codeDiscountSavedSearches)
* [collection​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/collectionSavedSearches)
* [customer​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/customerSavedSearches)
* [discount​Redeem​Code​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches)
* [draft​Order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/draftOrderSavedSearches)
* [file​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/fileSavedSearches)
* [order​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/orderSavedSearches)
* [product​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/productSavedSearches)
* [url​Redirect​Saved​Searches](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirectSavedSearches)

#### Possible returns

* [Saved​Search​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection#returns-edges)
* [Saved​Search​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection#returns-nodes)
* [Saved​Search​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SavedSearchConnection#returns-pageInfo)

---
<a id="script-tag-connection"></a>

## Script​Tag​Connection

connection

An auto-generated type for paginating through multiple ScriptTags.

### Queries with this connection

* [script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

  query

  **Theme app extensions:**

  If your app integrates with a Shopify theme and you plan to submit it to the Shopify App Store, you must use theme app extensions instead of Script tags. Script tags can only be used with vintage themes. [Learn more](https://shopify.dev/apps/online-store#what-integration-method-should-i-use).

  **Script tag deprecation:**

  Script tags will be sunset for the **Order status** page on August 28, 2025. [Upgrade to Checkout Extensibility](https://www.shopify.com/plus/upgrading-to-checkout-extensibility) before this date. [Shopify Scripts](https://shopify.dev/docs/api/liquid/objects#script) will continue to work alongside Checkout Extensibility until August 28, 2025.

  A list of script tags.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * src

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * updated\_at

      time

  * src

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    The source URL of the script tag to filter by.

  ***

***

### Possible returns

* edges

  [\[Script​Tag​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTagEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Script​Tag!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptTag)

  non-null

  A list of nodes that are contained in ScriptTagEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [script​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/scriptTags)

#### Possible returns

* [Script​Tag​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-edges)
* [Script​Tag​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-nodes)
* [Script​Tag​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ScriptTagConnection#returns-pageInfo)

---
<a id="search-result-connection"></a>

## Search​Result​Connection

connection

The connection type for SearchResult.

### Fields with this connection

* [Shop.search](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

### Possible returns

* edges

  [\[Search​Result​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResultEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* results​After​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shop.search](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search)

#### Possible returns

* [Search​Result​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection#returns-edges)
* [Search​Result​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection#returns-pageInfo)

---
<a id="segment-connection"></a>

## Segment​Connection

connection

An auto-generated type for paginating through multiple Segments.

### Queries with this connection

* [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

  query

  Returns a paginated list of [`Segment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment) objects for the shop. Segments are dynamic groups of customers that meet specific criteria defined through [ShopifyQL queries](https://shopify.dev/docs/api/shopifyql/segment-query-language-reference). You can filter segments by search query and sort them by creation date or other criteria.

  The query supports standard [pagination](https://shopify.dev/docs/api/usage/pagination-graphql) arguments and returns a [`SegmentConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentConnection) containing segment details including names, creation dates, and the query definitions that determine segment membership.

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

    [Segment​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SegmentSortKeys)

    Default:CREATION\_DATE

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * name

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

***

### Possible returns

* edges

  [\[Segment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

  non-null

  A list of nodes that are contained in SegmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [segments](https://shopify.dev/docs/api/admin-graphql/latest/queries/segments)

#### Possible returns

* [Segment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-edges)
* [Segment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-nodes)
* [Segment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentConnection#returns-pageInfo)

---
<a id="segment-filter-connection"></a>

## Segment​Filter​Connection

connection

An auto-generated type for paginating through multiple SegmentFilters.

### Queries with this connection

* [segment​Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilters)

  query

  A list of filters.

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

  ***

* [segment​Filter​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilterSuggestions)

  query

  A list of filter suggestions associated with a segment. A segment is a group of members (commonly customers) that meet specific criteria.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Returns the elements of a list by keyword or term.

  * first

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  ***

***

### Possible returns

* edges

  [\[Segment​Filter​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentFilterEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment​Filter!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SegmentFilter)

  non-null

  A list of nodes that are contained in SegmentFilterEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [segment​Filter​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilterSuggestions)
* [segment​Filters](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentFilters)

#### Possible returns

* [Segment​Filter​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-edges)
* [Segment​Filter​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-nodes)
* [Segment​Filter​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentFilterConnection#returns-pageInfo)

---
<a id="segment-migration-connection"></a>

## Segment​Migration​Connection

connection

An auto-generated type for paginating through multiple SegmentMigrations.

### Queries with this connection

* [segment​Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentMigrations)

  query

  A list of a shop's segment migrations.

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    Search a segment migration by its saved search ID.

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

  ***

***

### Possible returns

* edges

  [\[Segment​Migration​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigrationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment​Migration!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentMigration)

  non-null

  A list of nodes that are contained in SegmentMigrationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [segment​Migrations](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentMigrations)

#### Possible returns

* [Segment​Migration​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection#returns-edges)
* [Segment​Migration​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection#returns-nodes)
* [Segment​Migration​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentMigrationConnection#returns-pageInfo)

---
<a id="segment-value-connection"></a>

## Segment​Value​Connection

connection

An auto-generated type for paginating through multiple SegmentValues.

### Queries with this connection

* [segment​Value​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentValueSuggestions)

  query

  The list of suggested values corresponding to a particular filter for a segment. A segment is a group of members, such as customers, that meet specific criteria.

  * search

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    Returns the elements of a list by keyword or term.

  * filter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter handle.

  * function​Parameter​Query​Name

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    Returns the elements of a list by filter parameter name.

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

  ***

***

### Possible returns

* edges

  [\[Segment​Value​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValueEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Segment​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SegmentValue)

  non-null

  A list of nodes that are contained in SegmentValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [segment​Value​Suggestions](https://shopify.dev/docs/api/admin-graphql/latest/queries/segmentValueSuggestions)

#### Possible returns

* [Segment​Value​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection#returns-edges)
* [Segment​Value​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection#returns-nodes)
* [Segment​Value​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SegmentValueConnection#returns-pageInfo)

---
<a id="selling-plan-connection"></a>

## Selling​Plan​Connection

connection

An auto-generated type for paginating through multiple SellingPlans.

### Fields with this connection

* [Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  **Caution:** Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the \<a href="https://shopify.dev/docs/api/admin-graphql/latest/objects/App">\<code>App\</code>\</a> that created them. Back up these records if you need to restore them later.

  ***

***

### Possible returns

* edges

  [\[Selling​Plan​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Selling​Plan!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan)

  non-null

  A list of nodes that are contained in SellingPlanEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

#### Possible returns

* [Selling​Plan​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-edges)
* [Selling​Plan​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-nodes)
* [Selling​Plan​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-pageInfo)

---
<a id="selling-plan-group-connection"></a>

## Selling​Plan​Group​Connection

connection

An auto-generated type for paginating through multiple SellingPlanGroups.

### Fields with this connection

* [Delivery​Profile.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.sellingPlanGroups)

  OBJECT

  A shipping profile that defines shipping rates for specific [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects. Delivery profiles determine which products can ship from which [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects to which zones, and at what rates.

  Profiles can associate with [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects to provide custom shipping rules for subscriptions, such as free shipping or restricted delivery zones. The default profile applies to all products that aren't assigned to other profiles.

  Learn more about [building delivery profiles](https://shopify.dev/apps/build/purchase-options/deferred/delivery-and-deferment/build-delivery-profiles).

* [Product.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.sellingPlanGroups)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanGroups)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

***

### Queries with this connection

* [selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

  query

  Retrieves a paginated list of [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup) objects that belong to the app making the API call. Selling plan groups are selling methods like subscriptions, preorders, or other purchase options that merchants offer to customers.

  Each group has one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that define specific billing and delivery schedules, pricing adjustments, and policies. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups#arguments-query) argument to search by name or filter results by other criteria.

  Learn more about [building selling plans](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans).

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

    [Selling​Plan​Group​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SellingPlanGroupSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * app\_id

        id

      * category

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

      - Valid values:

        * `CURRENT` Default
        * `ALL`
        * `* (numeric app ID)`

        A comma-separated list of categories.

      - Valid values:
        * `SUBSCRIPTION`
        * `PRE_ORDER`
        * `TRY_BEFORE_YOU_BUY`
        * `OTHER`

    * delivery\_frequency

      string

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * percentage\_off

      float

  ***

***

### Possible returns

* edges

  [\[Selling​Plan​Group​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroupEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Selling​Plan​Group!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup)

  non-null

  A list of nodes that are contained in SellingPlanGroupEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Delivery​Profile.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfile#field-DeliveryProfile.fields.sellingPlanGroups)
* [Product.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.sellingPlanGroups)
* [Product​Variant.sellingPlanGroups](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanGroups)

#### Queries with this connection

* [selling​Plan​Groups](https://shopify.dev/docs/api/admin-graphql/latest/queries/sellingPlanGroups)

#### Possible returns

* [Selling​Plan​Group​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-edges)
* [Selling​Plan​Group​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-nodes)
* [Selling​Plan​Group​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanGroupConnection#returns-pageInfo)

---
<a id="shipping-line-connection"></a>

## Shipping​Line​Connection

connection

An auto-generated type for paginating through multiple ShippingLines.

### Fields with this connection

* [Order.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shippingLines)

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

### Possible returns

* edges

  [\[Shipping​Line​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shipping​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine)

  non-null

  A list of nodes that are contained in ShippingLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.shippingLines)

#### Possible returns

* [Shipping​Line​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection#returns-edges)
* [Shipping​Line​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection#returns-nodes)
* [Shipping​Line​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShippingLineConnection#returns-pageInfo)

---
<a id="shopify-function-connection"></a>

## Shopify​Function​Connection

connection

An auto-generated type for paginating through multiple ShopifyFunctions.

### Queries with this connection

* [shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)

  query

  Returns Shopify Functions owned by the querying API client installed on the shop. [Functions](https://shopify.dev/docs/apps/build/functions) enable you to customize Shopify's backend logic at specific points in the commerce loop, such as discounts, checkout validation, and fulfillment.

  You can filter the results by API type to find specific function implementations, or by whether they provide a merchant configuration interface in the Shopify Admin.

  The response includes details about each function's configuration, including its title, description, API version, and the input query used to provide data to the function logic.

  Learn more about [building functions](https://shopify.dev/docs/api/functions).

  * api​Type

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    ### Arguments

    Filter the functions by the API type.

  * use​Creation​Ui

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Filter the functions by whether or not the function uses the creation UI in the Admin.

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

### Possible returns

* edges

  [\[Shopify​Function​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunctionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Function!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyFunction)

  non-null

  A list of nodes that are contained in ShopifyFunctionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [shopify​Functions](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopifyFunctions)

#### Possible returns

* [Shopify​Function​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-edges)
* [Shopify​Function​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-nodes)
* [Shopify​Function​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyFunctionConnection#returns-pageInfo)

---
<a id="shopify-payments-balance-transaction-connection"></a>

## Shopify​Payments​Balance​Transaction​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsBalanceTransactions.

### Fields with this connection

* [Shopify​Payments​Account.balanceTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

### Possible returns

* edges

  [\[Shopify​Payments​Balance​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Balance​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction)

  non-null

  A list of nodes that are contained in ShopifyPaymentsBalanceTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shopify​Payments​Account.balanceTransactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.balanceTransactions)

#### Possible returns

* [Shopify​Payments​Balance​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-edges)
* [Shopify​Payments​Balance​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-nodes)
* [Shopify​Payments​Balance​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBalanceTransactionConnection#returns-pageInfo)

---
<a id="shopify-payments-bank-account-connection"></a>

## Shopify​Payments​Bank​Account​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsBankAccounts.

### Fields with this connection

* [Shopify​Payments​Account.bankAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.bankAccounts)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

### Possible returns

* edges

  [\[Shopify​Payments​Bank​Account​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Bank​Account!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount)

  non-null

  A list of nodes that are contained in ShopifyPaymentsBankAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shopify​Payments​Account.bankAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.bankAccounts)

#### Possible returns

* [Shopify​Payments​Bank​Account​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBankAccountConnection#returns-edges)
* [Shopify​Payments​Bank​Account​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBankAccountConnection#returns-nodes)
* [Shopify​Payments​Bank​Account​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsBankAccountConnection#returns-pageInfo)

---
<a id="shopify-payments-dispute-connection"></a>

## Shopify​Payments​Dispute​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsDisputes.

### Fields with this connection

* [Shopify​Payments​Account.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.disputes)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

***

### Queries with this connection

* [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

  query

  Returns a paginated list of all Shopify Payments disputes for the shop. Disputes occur when a buyer files a complaint with their payments provider, and the merchant must provide evidence to contest it. Each dispute includes the status, amount, reason, and associated order. Use this to monitor and manage open chargebacks and track dispute resolution outcomes.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * initiated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

  ***

***

### Possible returns

* edges

  [\[Shopify​Payments​Dispute​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDisputeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Dispute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsDispute)

  non-null

  A list of nodes that are contained in ShopifyPaymentsDisputeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shopify​Payments​Account.disputes](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.disputes)

#### Queries with this connection

* [disputes](https://shopify.dev/docs/api/admin-graphql/latest/queries/disputes)

#### Possible returns

* [Shopify​Payments​Dispute​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-edges)
* [Shopify​Payments​Dispute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-nodes)
* [Shopify​Payments​Dispute​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsDisputeConnection#returns-pageInfo)

---
<a id="shopify-payments-payout-connection"></a>

## Shopify​Payments​Payout​Connection

connection

An auto-generated type for paginating through multiple ShopifyPaymentsPayouts.

### Fields with this connection

* [Shopify​Payments​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts)

  OBJECT

  Financial account information for merchants using Shopify Payments. Tracks current balances across all supported currencies, payout schedules, and [`ShopifyPaymentsBalanceTransaction`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBalanceTransaction) records.

  The account includes configuration details such as [`ShopifyPaymentsBankAccount`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount) objects for receiving [`ShopifyPaymentsPayout`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout) transfers, statement descriptors that appear on customer credit card statements, and the [`ShopifyPaymentsPayoutSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutSchedule) that determines when funds transfer to your bank. Access balance transactions to review individual charges, refunds, and adjustments that affect your account balance. Query payouts to track money movement between your Shopify Payments balance and bank accounts.

* [Shopify​Payments​Bank​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts)

  OBJECT

  A bank account that can receive payouts.

***

### Possible returns

* edges

  [\[Shopify​Payments​Payout​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayoutEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shopify​Payments​Payout!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsPayout)

  non-null

  A list of nodes that are contained in ShopifyPaymentsPayoutEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shopify​Payments​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsAccount#field-ShopifyPaymentsAccount.fields.payouts)
* [Shopify​Payments​Bank​Account.payouts](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopifyPaymentsBankAccount#field-ShopifyPaymentsBankAccount.fields.payouts)

#### Possible returns

* [Shopify​Payments​Payout​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-edges)
* [Shopify​Payments​Payout​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-nodes)
* [Shopify​Payments​Payout​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopifyPaymentsPayoutConnection#returns-pageInfo)

---
<a id="shop-pay-payment-request-receipt-connection"></a>

## Shop​Pay​Payment​Request​Receipt​Connection

connection

An auto-generated type for paginating through multiple ShopPayPaymentRequestReceipts.

### Queries with this connection

* [shop​Pay​Payment​Request​Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipts)

  query

  Returns a list of Shop Pay payment request receipts.

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

    [Shop​Pay​Payment​Request​Receipts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ShopPayPaymentRequestReceiptsSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * created\_at

        time

      * id

        id

      * source\_identifier

        string

      * state

        string

      - Filter by the creation date of the payment request receipt.

      - Example:

        * `created_at:2021-01-01`
        * `created_at:2021-01-01..2021-01-02`
        * `created_at:<now`
        * `created_at:<2024-01-01`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the source identifier of the payment request receipt.

      - Example:

        * `source_identifier:1282823`

        Filter by the state of the payment request receipt. Options include: - COMPLETED - FAILED - PENDING - PROCESSING

        Example:

        * `state:COMPLETED`

  ***

***

### Possible returns

* edges

  [\[Shop​Pay​Payment​Request​Receipt​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceiptEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Shop​Pay​Payment​Request​Receipt!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShopPayPaymentRequestReceipt)

  non-null

  A list of nodes that are contained in ShopPayPaymentRequestReceiptEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [shop​Pay​Payment​Request​Receipts](https://shopify.dev/docs/api/admin-graphql/latest/queries/shopPayPaymentRequestReceipts)

#### Possible returns

* [Shop​Pay​Payment​Request​Receipt​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection#returns-edges)
* [Shop​Pay​Payment​Request​Receipt​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection#returns-nodes)
* [Shop​Pay​Payment​Request​Receipt​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ShopPayPaymentRequestReceiptConnection#returns-pageInfo)

---
<a id="staff-member-connection"></a>

## Staff​Member​Connection

connection

An auto-generated type for paginating through multiple StaffMembers.

### Fields with this connection

* [Shop.staffMembers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.staffMembers)

  OBJECT

  Deprecated

***

### Queries with this connection

* [staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMembers)

  query

  Returns a paginated list of [`StaffMember`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember) objects for the shop. Staff members are users who can access the Shopify admin to manage store operations.

  Supports filtering by account type, email, and name, with an option to sort results. The query returns a [`StaffMemberConnection`](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection) for [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

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

    [Staff​Members​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/StaffMembersSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * account\_type

        string

      * email

        string

      - Filter by account type.

      - Valid values:

        * `collaborator`
        * `collaborator_team_member`
        * `invited`
        * `regular`
        * `requested`
        * `restricted`
        * `saml`

        Filter by email.

    * first\_name

      string

      Filter by first name.

    * * id

        id

      * last\_name

        string

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by last name.

  ***

***

### Possible returns

* edges

  [\[Staff​Member​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMemberEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Staff​Member!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StaffMember)

  non-null

  A list of nodes that are contained in StaffMemberEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [staff​Members](https://shopify.dev/docs/api/admin-graphql/latest/queries/staffMembers)

#### Possible returns

* [Staff​Member​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#returns-edges)
* [Staff​Member​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#returns-nodes)
* [Staff​Member​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StaffMemberConnection#returns-pageInfo)

---
<a id="standard-metafield-definition-template-connection"></a>

## Standard​Metafield​Definition​Template​Connection

connection

An auto-generated type for paginating through multiple StandardMetafieldDefinitionTemplates.

### Queries with this connection

* [standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

  query

  Retrieves preset metafield definition templates for common use cases. Each template provides a reserved namespace and key combination for specific purposes like product subtitles, care guides, or ISBN numbers. Use these templates to create standardized metafields across your store. Filter templates by constraint status or exclude those you've already activated.

  See the [list of standard metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/list-of-standard-definitions) for available templates.

  * constraint​Subtype

    [Metafield​Definition​Constraint​Subtype​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionConstraintSubtypeIdentifier)

    ### Arguments

    Filter standard metafield definitions based on whether they apply to a given resource subtype.

  * constraint​Status

    [Metafield​Definition​Constraint​Status](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionConstraintStatus)

    Filter standard metafield definitions based on whether they are constrained.

  * exclude​Activated

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Filter standard metafield definitions that have already been activated.

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

### Possible returns

* edges

  [\[Standard​Metafield​Definition​Template​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplateEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Standard​Metafield​Definition​Template!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionTemplate)

  non-null

  A list of nodes that are contained in StandardMetafieldDefinitionTemplateEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [standard​Metafield​Definition​Templates](https://shopify.dev/docs/api/admin-graphql/latest/queries/standardMetafieldDefinitionTemplates)

#### Possible returns

* [Standard​Metafield​Definition​Template​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-edges)
* [Standard​Metafield​Definition​Template​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-nodes)
* [Standard​Metafield​Definition​Template​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StandardMetafieldDefinitionTemplateConnection#returns-pageInfo)

---
<a id="storefront-access-token-connection"></a>

## Storefront​Access​Token​Connection

connection

An auto-generated type for paginating through multiple StorefrontAccessTokens.

### Fields with this connection

* [Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.storefrontAccessTokens)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

### Possible returns

* edges

  [\[Storefront​Access​Token​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Storefront​Access​Token!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

  non-null

  A list of nodes that are contained in StorefrontAccessTokenEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.storefrontAccessTokens)

#### Possible returns

* [Storefront​Access​Token​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-edges)
* [Storefront​Access​Token​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-nodes)
* [Storefront​Access​Token​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-pageInfo)

---
<a id="store-credit-account-connection"></a>

## Store​Credit​Account​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccounts.

### Fields with this connection

* [Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)

  OBJECT

  A location or branch of a [`Company`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company) that's a customer of the shop. Company locations enable B2B customers to manage multiple branches with distinct billing and shipping addresses, tax settings, and checkout configurations.

  Each location can have its own [`Catalog`](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Catalog) objects that determine which products are published and their pricing. The [`BuyerExperienceConfiguration`](https://shopify.dev/docs/api/admin-graphql/latest/objects/BuyerExperienceConfiguration) determines checkout behavior including [`PaymentTerms`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms), and whether orders require merchant review. B2B customers select which location they're purchasing for, which determines the applicable catalogs, pricing, [`TaxExemption`](https://shopify.dev/docs/api/admin-graphql/latest/enums/TaxExemption) values, and checkout settings for their [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) objects.

* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

  INTERFACE

  Represents information about the store credit accounts associated to the specified owner.

***

### Possible returns

* edges

  [\[Store​Credit​Account​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount)

  non-null

  A list of nodes that are contained in StoreCreditAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)
* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)
* [Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

#### Possible returns

* [Store​Credit​Account​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-edges)
* [Store​Credit​Account​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-nodes)
* [Store​Credit​Account​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountConnection#returns-pageInfo)

---
<a id="store-credit-account-transaction-connection"></a>

## Store​Credit​Account​Transaction​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccountTransactions.

### Fields with this connection

* [Store​Credit​Account.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

  OBJECT

  A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

  The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

***

### Possible returns

* edges

  [\[Store​Credit​Account​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccountTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/StoreCreditAccountTransaction)

  non-null

  A list of nodes that are contained in StoreCreditAccountTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Store​Credit​Account.transactions](https://shopify.dev/docs/api/admin-graphql/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

#### Possible returns

* [Store​Credit​Account​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-edges)
* [Store​Credit​Account​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-nodes)
* [Store​Credit​Account​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StoreCreditAccountTransactionConnection#returns-pageInfo)

---
<a id="string-connection"></a>

## String​Connection

connection

An auto-generated type for paginating through multiple Strings.

### Fields with this connection

* [Shop.customerTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customerTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Shop.draftOrderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.draftOrderTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Shop.orderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orderTags)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

#### Deprecated fields with this connection

* [Shop.productTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productTags)

  OBJECT

  Deprecated

* [Shop.productTypes](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productTypes)

  OBJECT

  Deprecated

* [Shop.productVendors](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVendors)

  OBJECT

  Deprecated

***

### Queries with this connection

* [discount​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountTags)

  query

  List of tags associated to discounts.

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

    [Discount​Tag​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountTagSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * id

        id

      * title

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:

        * `query=Bob Norman`
        * `query=title:green hoodie`

        Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* [product​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTags)

  query

  Returns tags added to [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects in the shop. Provides a paginated list of tag strings.

  The maximum page size is 5000 tags per request. Tags are returned as simple strings through a [`StringConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/StringConnection). The maximum page size is 5000.

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

* [product​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTypes)

  query

  Returns a paginated list of product types assigned to [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) in the store. The maximum page size is 1000. The maximum page size is 1000.

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

* [product​Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVendors)

  query

  The list of vendors added to products. The maximum page size is 1000.

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

### Possible returns

* edges

  [\[String​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StringEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[String!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  A list of nodes that are contained in StringEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Shop.customerTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.customerTags)
* [Shop.draftOrderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.draftOrderTags)
* [Shop.orderTags](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.orderTags)

#### Queries with this connection

* [discount​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountTags)
* [product​Tags](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTags)
* [product​Types](https://shopify.dev/docs/api/admin-graphql/latest/queries/productTypes)
* [product​Vendors](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVendors)

#### Possible returns

* [String​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-edges)
* [String​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-nodes)
* [String​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StringConnection#returns-pageInfo)

---
<a id="subscription-billing-attempt-connection"></a>

## Subscription​Billing​Attempt​Connection

connection

An auto-generated type for paginating through multiple SubscriptionBillingAttempts.

### Fields with this connection

* [Subscription​Billing​Cycle.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.billingAttempts)

  OBJECT

  A subscription billing cycle.

* [Subscription​Contract.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingAttempts)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

***

### Queries with this connection

* [subscription​Billing​Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingAttempts)

  query

  Returns subscription billing attempts on a store.

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

    [Subscription​Billing​Attempts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * error\_code

      string

    * error\_message

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

### Possible returns

* edges

  [\[Subscription​Billing​Attempt​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Billing​Attempt!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  non-null

  A list of nodes that are contained in SubscriptionBillingAttemptEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Billing​Cycle.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.billingAttempts)
* [Subscription​Contract.billingAttempts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingAttempts)

#### Queries with this connection

* [subscription​Billing​Attempts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingAttempts)

#### Possible returns

* [Subscription​Billing​Attempt​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-edges)
* [Subscription​Billing​Attempt​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-nodes)
* [Subscription​Billing​Attempt​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingAttemptConnection#returns-pageInfo)

---
<a id="subscription-billing-cycle-connection"></a>

## Subscription​Billing​Cycle​Connection

connection

An auto-generated type for paginating through multiple SubscriptionBillingCycles.

### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Draft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)

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

### Queries with this connection

* [subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)

  query

  Retrieves the results of the asynchronous job for the subscription billing cycle bulk action based on the specified job ID. This query can be used to obtain the billing cycles that match the criteria defined in the subscriptionBillingCycleBulkSearch and subscriptionBillingCycleBulkCharge mutations.

  * job​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the billing cycle bulk operation job.

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

* [subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

  query

  Returns subscription billing cycles for a contract ID.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to retrieve billing cycles for.

  * billing​Cycles​Date​Range​Selector

    [Subscription​Billing​Cycles​Date​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesDateRangeSelector)

    Select subscription billing cycles within a date range.

  * billing​Cycles​Index​Range​Selector

    [Subscription​Billing​Cycles​Index​Range​Selector](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCyclesIndexRangeSelector)

    Select subscription billing cycles within an index range.

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

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

### Possible returns

* edges

  [\[Subscription​Billing​Cycle​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Billing​Cycle!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  non-null

  A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.billingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.billingCycles)
* [Subscription​Draft.concatenatedBillingCycles](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.concatenatedBillingCycles)

#### Queries with this connection

* [subscription​Billing​Cycle​Bulk​Results](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycleBulkResults)
* [subscription​Billing​Cycles](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionBillingCycles)

#### Possible returns

* [Subscription​Billing​Cycle​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-edges)
* [Subscription​Billing​Cycle​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-nodes)
* [Subscription​Billing​Cycle​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionBillingCycleConnection#returns-pageInfo)

---
<a id="subscription-contract-connection"></a>

## Subscription​Contract​Connection

connection

An auto-generated type for paginating through multiple SubscriptionContracts.

### Fields with this connection

* [Customer.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.subscriptionContracts)

  OBJECT

  Information about a customer of the shop, such as the customer's contact details, purchase history, and marketing preferences.

  Tracks the customer's total spending through the [`amountSpent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-amountSpent) field and provides access to associated data such as payment methods and subscription contracts.

  ***

  **Caution:** Only use this data if it\&#39;s required for your app\&#39;s functionality. Shopify will restrict \<a href="https://shopify.dev/api/usage/access-scopes">access to scopes\</a> for apps that don\&#39;t have a legitimate use for the associated data.

  ***

* [Customer​Payment​Method.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.subscriptionContracts)

  OBJECT

  A customer's saved payment method. Stores the payment instrument details and billing information for recurring charges.

  The payment method supports types included in the [`CustomerPaymentInstrument`](https://shopify.dev/docs/api/admin-graphql/latest/unions/CustomerPaymentInstrument) union.

***

### Queries with this connection

* [subscription​Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts)

  query

  Returns a [`SubscriptionContractConnection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractConnection) containing [subscription contracts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract). Subscription contracts are agreements between [customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer) and merchants for recurring purchases with defined billing and delivery schedules.

  Filter results with the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts#arguments-query) argument. You can paginate results using standard [cursor-based pagination](https://shopify.dev/docs/api/usage/pagination-graphql).

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

    [Subscription​Contracts​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * last\_billing\_attempt\_error\_type

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * status

      string

    * updated\_at

      time

  ***

***

### Possible returns

* edges

  [\[Subscription​Contract​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Contract!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract)

  non-null

  A list of nodes that are contained in SubscriptionContractEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer#field-Customer.fields.subscriptionContracts)
* [Customer​Payment​Method.subscriptionContracts](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerPaymentMethod#field-CustomerPaymentMethod.fields.subscriptionContracts)

#### Queries with this connection

* [subscription​Contracts](https://shopify.dev/docs/api/admin-graphql/latest/queries/subscriptionContracts)

#### Possible returns

* [Subscription​Contract​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#returns-edges)
* [Subscription​Contract​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#returns-nodes)
* [Subscription​Contract​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionContractConnection#returns-pageInfo)

---
<a id="subscription-discount-connection"></a>

## Subscription​Discount​Connection

connection

An auto-generated type for paginating through multiple SubscriptionDiscounts.

### Fields with this connection

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

### Possible returns

* edges

  [\[Subscription​Discount​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

  non-null

  A list of nodes that are contained in SubscriptionDiscountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Draft.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discounts)
* [Subscription​Draft.discountsAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsAdded)
* [Subscription​Draft.discountsRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsRemoved)
* [Subscription​Draft.discountsUpdated](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.discountsUpdated)

#### Possible returns

* [Subscription​Discount​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection#returns-edges)
* [Subscription​Discount​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection#returns-nodes)
* [Subscription​Discount​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionDiscountConnection#returns-pageInfo)

---
<a id="subscription-line-connection"></a>

## Subscription​Line​Connection

connection

An auto-generated type for paginating through multiple SubscriptionLines.

### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.lines)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-lines)

  INTERFACE

  Represents subscription contract common fields.

* [Subscription​Discount​Entitled​Lines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-SubscriptionDiscountEntitledLines.fields.lines)

  OBJECT

  Represents the subscription lines the discount applies on.

* [Subscription​Draft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.lines)

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

* [Subscription​Draft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesAdded)

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

* [Subscription​Draft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesRemoved)

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

### Possible returns

* edges

  [\[Subscription​Line​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLineEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Line!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  non-null

  A list of nodes that are contained in SubscriptionLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.lines)
* [Subscription​Contract.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)
* [Subscription​Contract​Base.lines](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-lines)
* [Subscription​Discount​Entitled​Lines.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDiscountEntitledLines#field-SubscriptionDiscountEntitledLines.fields.lines)
* [Subscription​Draft.lines](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.lines)
* [Subscription​Draft.linesAdded](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesAdded)
* [Subscription​Draft.linesRemoved](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft#field-SubscriptionDraft.fields.linesRemoved)

#### Possible returns

* [Subscription​Line​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-edges)
* [Subscription​Line​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-nodes)
* [Subscription​Line​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionLineConnection#returns-pageInfo)

---
<a id="subscription-manual-discount-connection"></a>

## Subscription​Manual​Discount​Connection

connection

An auto-generated type for paginating through multiple SubscriptionManualDiscounts.

### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.discounts)

  OBJECT

  Represents a subscription contract with billing cycles.

* [Subscription​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)

  OBJECT

  A subscription contract that defines recurring purchases for a customer. Each contract specifies what products to deliver, when to bill and ship them, and at what price.

  The contract includes [`SubscriptionBillingPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingPolicy) and [`SubscriptionDeliveryPolicy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDeliveryPolicy) that control the frequency of charges and fulfillments. [`SubscriptionLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine) items define the products, quantities, and pricing for each recurring [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). The contract tracks [`SubscriptionBillingAttempt`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt) records, payment status, and generated orders throughout its lifecycle. [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) instances manage contracts through various status transitions including active, paused, failed, cancelled, or expired states.

  Learn more about [building subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract) and [updating subscription contracts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/update-a-subscription-contract).

* [Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-discounts)

  INTERFACE

  Represents subscription contract common fields.

***

### Possible returns

* edges

  [\[Subscription​Manual​Discount​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscountEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Manual​Discount!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  non-null

  A list of nodes that are contained in SubscriptionManualDiscountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Billing​Cycle​Edited​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleEditedContract#field-SubscriptionBillingCycleEditedContract.fields.discounts)
* [Subscription​Contract.discounts](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)
* [Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionContractBase#fields-discounts)

#### Possible returns

* [Subscription​Manual​Discount​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-edges)
* [Subscription​Manual​Discount​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-nodes)
* [Subscription​Manual​Discount​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SubscriptionManualDiscountConnection#returns-pageInfo)

---
<a id="taxonomy-category-attribute-connection"></a>

## Taxonomy​Category​Attribute​Connection

connection

An auto-generated type for paginating through multiple TaxonomyCategoryAttributes.

### Fields with this connection

* [Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

  OBJECT

  A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

  Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

***

### Possible returns

* edges

  [\[Taxonomy​Category​Attribute​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Category​Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute)

  non-null

  A list of nodes that are contained in TaxonomyCategoryAttributeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

#### Possible returns

* [Taxonomy​Category​Attribute​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-edges)
* [Taxonomy​Category​Attribute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-nodes)
* [Taxonomy​Category​Attribute​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-pageInfo)

---
<a id="taxonomy-category-connection"></a>

## Taxonomy​Category​Connection

connection

An auto-generated type for paginating through multiple TaxonomyCategories.

### Fields with this connection

* [Taxonomy.categories](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy#field-Taxonomy.fields.categories)

  OBJECT

  Represents Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) tree. Provides categories that you can filter by search criteria or hierarchical relationships.

  You can search categories globally, retrieve children of a specific category, find siblings, or get descendants. When you specify no filter arguments, you get all top-level categories in the taxonomy.

***

### Possible returns

* edges

  [\[Taxonomy​Category​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Category!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

  non-null

  A list of nodes that are contained in TaxonomyCategoryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Taxonomy.categories](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy#field-Taxonomy.fields.categories)

#### Possible returns

* [Taxonomy​Category​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-edges)
* [Taxonomy​Category​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-nodes)
* [Taxonomy​Category​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-pageInfo)

---
<a id="taxonomy-value-connection"></a>

## Taxonomy​Value​Connection

connection

An auto-generated type for paginating through multiple TaxonomyValues.

### Fields with this connection

* [Taxonomy​Choice​List​Attribute.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute#field-TaxonomyChoiceListAttribute.fields.values)

  OBJECT

  A Shopify product taxonomy choice list attribute.

***

### Possible returns

* edges

  [\[Taxonomy​Value​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValueEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValue)

  non-null

  A list of nodes that are contained in TaxonomyValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Taxonomy​Choice​List​Attribute.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute#field-TaxonomyChoiceListAttribute.fields.values)

#### Possible returns

* [Taxonomy​Value​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-edges)
* [Taxonomy​Value​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-nodes)
* [Taxonomy​Value​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-pageInfo)

---
<a id="tender-transaction-connection"></a>

## Tender​Transaction​Connection

connection

An auto-generated type for paginating through multiple TenderTransactions.

### Queries with this connection

* [tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

  query

  Transactions representing a movement of money between customers and the shop. Each transaction records the amount, payment method, processing details, and the associated [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  Positive amounts indicate customer payments to the merchant. Negative amounts represent refunds from the merchant to the customer. Use the [`query`](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions#arguments-query) parameter to filter transactions by attributes such as transaction ID, processing date, and point-of-sale device ID.

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

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * point\_of\_sale\_device\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * processed\_at

      time

    * test

      boolean

  ***

***

### Possible returns

* edges

  [\[Tender​Transaction​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransactionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Tender​Transaction!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TenderTransaction)

  non-null

  A list of nodes that are contained in TenderTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [tender​Transactions](https://shopify.dev/docs/api/admin-graphql/latest/queries/tenderTransactions)

#### Possible returns

* [Tender​Transaction​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-edges)
* [Tender​Transaction​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-nodes)
* [Tender​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TenderTransactionConnection#returns-pageInfo)

---
<a id="translatable-resource-connection"></a>

## Translatable​Resource​Connection

connection

An auto-generated type for paginating through multiple TranslatableResources.

### Fields with this connection

* [Translatable​Resource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources)

  OBJECT

  A resource in Shopify that contains fields available for translation into different languages. Accesses the resource's translatable content, existing [`Translation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Translation) objects, and any nested resources that can also be translated.

  The [`TranslatableContent`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableContent) includes field keys, values, and digest hashes needed when [registering translations](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister).

  You can retrieve translations for specific [`Locale`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Locale) and [`Market`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Market) configurations. Each translation includes an `outdated` flag indicating whether the original content has changed since that translation was last updated.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

***

### Queries with this connection

* [translatable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)

  query

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for a specific resource type. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Type

    [Translatable​Resource​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/TranslatableResourceType)

    required

    ### Arguments

    Return only resources of a type.

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

* [translatable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)

  query

  Returns a paginated list of [`TranslatableResource`](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource) objects for the specified resource IDs. Each resource provides translatable content and digest values needed for the [`translationsRegister`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/translationsRegister) mutation.

  Learn more about [managing translated content](https://shopify.dev/docs/apps/build/markets/manage-translated-content).

  * resource​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Return only resources for given IDs.

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

### Possible returns

* edges

  [\[Translatable​Resource​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResourceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Translatable​Resource!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource)

  non-null

  A list of nodes that are contained in TranslatableResourceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Translatable​Resource.nestedTranslatableResources](https://shopify.dev/docs/api/admin-graphql/latest/objects/TranslatableResource#field-TranslatableResource.fields.nestedTranslatableResources)

#### Queries with this connection

* [translatable​Resources](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResources)
* [translatable​Resources​By​Ids](https://shopify.dev/docs/api/admin-graphql/latest/queries/translatableResourcesByIds)

#### Possible returns

* [Translatable​Resource​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-edges)
* [Translatable​Resource​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-nodes)
* [Translatable​Resource​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TranslatableResourceConnection#returns-pageInfo)

---
<a id="url-redirect-connection"></a>

## Url​Redirect​Connection

connection

An auto-generated type for paginating through multiple UrlRedirects.

### Queries with this connection

* [url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

  query

  A list of redirects for a shop.

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

    [Url​Redirect​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/UrlRedirectSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * created\_at

        time

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * * id

        id

      * path

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * target

      string

  * saved​Search​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of a [saved search](https://shopify.dev/api/admin-graphql/latest/objects/savedsearch#field-id). The search’s query string is used as the query argument.

  ***

***

### Possible returns

* edges

  [\[Url​Redirect​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirectEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Url​Redirect!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UrlRedirect)

  non-null

  A list of nodes that are contained in UrlRedirectEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [url​Redirects](https://shopify.dev/docs/api/admin-graphql/latest/queries/urlRedirects)

#### Possible returns

* [Url​Redirect​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-edges)
* [Url​Redirect​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-nodes)
* [Url​Redirect​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/UrlRedirectConnection#returns-pageInfo)

---
<a id="validation-connection"></a>

## Validation​Connection

connection

An auto-generated type for paginating through multiple Validations.

### Queries with this connection

* [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

  query

  Validations available on the shop.

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

    [Validation​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/ValidationSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

***

### Possible returns

* edges

  [\[Validation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ValidationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Validation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Validation)

  non-null

  A list of nodes that are contained in ValidationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [validations](https://shopify.dev/docs/api/admin-graphql/latest/queries/validations)

#### Possible returns

* [Validation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ValidationConnection#returns-edges)
* [Validation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ValidationConnection#returns-nodes)
* [Validation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ValidationConnection#returns-pageInfo)

---
<a id="webhook-subscription-connection"></a>

## Webhook​Subscription​Connection

connection

An auto-generated type for paginating through multiple WebhookSubscriptions.

### Queries with this connection

* [webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

  query

  Retrieves a paginated list of webhook subscriptions created using the API for the current app and shop.

  ***

  **Note:** Returns only shop-scoped subscriptions, not app-scoped subscriptions configured in TOML files.

  ***

  Subscription details include event topics, endpoint URIs, filtering rules, field inclusion settings, and metafield namespace permissions. Results support cursor-based pagination that you can filter by topic, format, or custom search criteria.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

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

    [Webhook​Subscription​Sort​Keys](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * updated\_at

        time

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  * callback​Url

    [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    Deprecated

  * uri

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    URI to filter by. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

  * format

    [Webhook​Subscription​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

    Response format to filter by.

  * topics

    [\[Webhook​Subscription​Topic!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    List of webhook subscription topics to filter by.

  ***

***

### Possible returns

* edges

  [\[Webhook​Subscription​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscriptionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Webhook​Subscription!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  non-null

  A list of nodes that are contained in WebhookSubscriptionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Queries with this connection

* [webhook​Subscriptions](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions)

#### Possible returns

* [Webhook​Subscription​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-edges)
* [Webhook​Subscription​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-nodes)
* [Webhook​Subscription​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/WebhookSubscriptionConnection#returns-pageInfo)

---
