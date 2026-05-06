# Shopify Customer – objects Reference (Indonesian / English)

> Referensi lengkap **Customer – objects** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/customer.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/customer` |
| Total halaman | **153** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `objects` (split file)


## Daftar Isi (Table of Contents)

- [latest / objects / AdditionalFeeSale](#latest-objects-additionalfeesale)
- [latest / objects / AdjustmentSale](#latest-objects-adjustmentsale)
- [latest / objects / AppliedGiftCard](#latest-objects-appliedgiftcard)
- [latest / objects / Attribute](#latest-objects-attribute)
- [latest / objects / AutomaticDiscountApplication](#latest-objects-automaticdiscountapplication)
- [latest / objects / AvailableShippingRates](#latest-objects-availableshippingrates)
- [latest / objects / BusinessCustomerUserError](#latest-objects-businesscustomerusererror)
- [latest / objects / BuyerExperienceConfiguration](#latest-objects-buyerexperienceconfiguration)
- [latest / objects / CalculatedReturn](#latest-objects-calculatedreturn)
- [latest / objects / CalculatedReturnLineItem](#latest-objects-calculatedreturnlineitem)
- [latest / objects / CardPaymentDetails](#latest-objects-cardpaymentdetails)
- [latest / objects / Checkout](#latest-objects-checkout)
- [latest / objects / CheckoutLineItem](#latest-objects-checkoutlineitem)
- [latest / objects / Company](#latest-objects-company)
- [latest / objects / CompanyAddress](#latest-objects-companyaddress)
- [latest / objects / CompanyContact](#latest-objects-companycontact)
- [latest / objects / CompanyContactRole](#latest-objects-companycontactrole)
- [latest / objects / CompanyContactRoleAssignment](#latest-objects-companycontactroleassignment)
- [latest / objects / CompanyLocation](#latest-objects-companylocation)
- [latest / objects / Count](#latest-objects-count)
- [latest / objects / Customer](#latest-objects-customer)
- [latest / objects / CustomerAddress](#latest-objects-customeraddress)
- [latest / objects / CustomerEmailAddress](#latest-objects-customeremailaddress)
- [latest / objects / CustomerPhoneNumber](#latest-objects-customerphonenumber)
- [latest / objects / DepositPercentage](#latest-objects-depositpercentage)
- [latest / objects / DiscountAllocation](#latest-objects-discountallocation)
- [latest / objects / DiscountCodeApplication](#latest-objects-discountcodeapplication)
- [latest / objects / Domain](#latest-objects-domain)
- [latest / objects / DraftOrder](#latest-objects-draftorder)
- [latest / objects / DraftOrderAppliedDiscount](#latest-objects-draftorderapplieddiscount)
- [latest / objects / DraftOrderDiscountInformation](#latest-objects-draftorderdiscountinformation)
- [latest / objects / DraftOrderLineItem](#latest-objects-draftorderlineitem)
- [latest / objects / DraftOrderLineItemDiscountInformation](#latest-objects-draftorderlineitemdiscountinformation)
- [latest / objects / DraftOrderLineItemsSummary](#latest-objects-draftorderlineitemssummary)
- [latest / objects / DutySale](#latest-objects-dutysale)
- [latest / objects / ExchangeLineItem](#latest-objects-exchangelineitem)
- [latest / objects / FeeSale](#latest-objects-feesale)
- [latest / objects / Fulfillment](#latest-objects-fulfillment)
- [latest / objects / FulfillmentEvent](#latest-objects-fulfillmentevent)
- [latest / objects / FulfillmentLineItem](#latest-objects-fulfillmentlineitem)
- [latest / objects / GenericFile](#latest-objects-genericfile)
- [latest / objects / GiftCardDetails](#latest-objects-giftcarddetails)
- [latest / objects / GiftCardSale](#latest-objects-giftcardsale)
- [latest / objects / Image](#latest-objects-image)
- [latest / objects / LineItem](#latest-objects-lineitem)
- [latest / objects / LineItemDiscountInformation](#latest-objects-lineitemdiscountinformation)
- [latest / objects / LineItemGroup](#latest-objects-lineitemgroup)
- [latest / objects / LineItemVariantOption](#latest-objects-lineitemvariantoption)
- [latest / objects / ManualDiscountApplication](#latest-objects-manualdiscountapplication)
- [latest / objects / Market](#latest-objects-market)
- [latest / objects / MarketWebPresence](#latest-objects-marketwebpresence)
- [latest / objects / MarketWebPresenceRootUrl](#latest-objects-marketwebpresencerooturl)
- [latest / objects / MediaImage](#latest-objects-mediaimage)
- [latest / objects / Metafield](#latest-objects-metafield)
- [latest / objects / MetafieldIdentifier](#latest-objects-metafieldidentifier)
- [latest / objects / MetafieldsDeleteUserError](#latest-objects-metafieldsdeleteusererror)
- [latest / objects / MetafieldsSetUserError](#latest-objects-metafieldssetusererror)
- [latest / objects / Metaobject](#latest-objects-metaobject)
- [latest / objects / MetaobjectField](#latest-objects-metaobjectfield)
- [latest / objects / Model3d](#latest-objects-model3d)
- [latest / objects / Model3dSource](#latest-objects-model3dsource)
- [latest / objects / MoneyBag](#latest-objects-moneybag)
- [latest / objects / MoneyV2](#latest-objects-moneyv2)
- [latest / objects / Mutation](#latest-objects-mutation)
- [latest / objects / NonReturnableLineItem](#latest-objects-nonreturnablelineitem)
- [latest / objects / NonReturnableQuantityDetail](#latest-objects-nonreturnablequantitydetail)
- [latest / objects / Order](#latest-objects-order)
- [latest / objects / OrderAgreement](#latest-objects-orderagreement)
- [latest / objects / OrderEditAgreement](#latest-objects-ordereditagreement)
- [latest / objects / OrderNonReturnableSummary](#latest-objects-ordernonreturnablesummary)
- [latest / objects / OrderPaymentInformation](#latest-objects-orderpaymentinformation)
- [latest / objects / OrderReturnInformation](#latest-objects-orderreturninformation)
- [latest / objects / OrderTransaction](#latest-objects-ordertransaction)
- [latest / objects / PageInfo](#latest-objects-pageinfo)
- [latest / objects / PaymentIconImage](#latest-objects-paymenticonimage)
- [latest / objects / PaymentSchedule](#latest-objects-paymentschedule)
- [latest / objects / PaymentTerms](#latest-objects-paymentterms)
- [latest / objects / PickupAddress](#latest-objects-pickupaddress)
- [latest / objects / PricingPercentageValue](#latest-objects-pricingpercentagevalue)
- [latest / objects / ProductSale](#latest-objects-productsale)
- [latest / objects / PurchasingCompany](#latest-objects-purchasingcompany)
- [latest / objects / QueryRoot](#latest-objects-queryroot)
- [latest / objects / Refund](#latest-objects-refund)
- [latest / objects / RefundAgreement](#latest-objects-refundagreement)
- [latest / objects / ResourcePermission](#latest-objects-resourcepermission)
- [latest / objects / Return](#latest-objects-return)
- [latest / objects / ReturnAgreement](#latest-objects-returnagreement)
- [latest / objects / ReturnFinancialSummary](#latest-objects-returnfinancialsummary)
- [latest / objects / ReturnLineItem](#latest-objects-returnlineitem)
- [latest / objects / ReturnReasonDefinition](#latest-objects-returnreasondefinition)
- [latest / objects / ReturnRestockingFee](#latest-objects-returnrestockingfee)
- [latest / objects / ReturnShippingFee](#latest-objects-returnshippingfee)
- [latest / objects / ReturnUserError](#latest-objects-returnusererror)
- [latest / objects / ReturnableLineItem](#latest-objects-returnablelineitem)
- [latest / objects / ReverseDelivery](#latest-objects-reversedelivery)
- [latest / objects / ReverseDeliveryLabel](#latest-objects-reversedeliverylabel)
- [latest / objects / ReverseDeliveryShippingDeliverable](#latest-objects-reversedeliveryshippingdeliverable)
- [latest / objects / ReverseDeliveryTracking](#latest-objects-reversedeliverytracking)
- [latest / objects / SaleTax](#latest-objects-saletax)
- [latest / objects / ScriptDiscountApplication](#latest-objects-scriptdiscountapplication)
- [latest / objects / ShippingLine](#latest-objects-shippingline)
- [latest / objects / ShippingLineSale](#latest-objects-shippinglinesale)
- [latest / objects / ShippingRate](#latest-objects-shippingrate)
- [latest / objects / Shop](#latest-objects-shop)
- [latest / objects / ShopPolicy](#latest-objects-shoppolicy)
- [latest / objects / StoreCreditAccount](#latest-objects-storecreditaccount)
- [latest / objects / StoreCreditAccountCreditTransaction](#latest-objects-storecreditaccountcredittransaction)
- [latest / objects / StoreCreditAccountDebitRevertTransaction](#latest-objects-storecreditaccountdebitreverttransaction)
- [latest / objects / StoreCreditAccountDebitTransaction](#latest-objects-storecreditaccountdebittransaction)
- [latest / objects / StoreCreditAccountExpirationTransaction](#latest-objects-storecreditaccountexpirationtransaction)
- [latest / objects / SubscriptionBillingCycle](#latest-objects-subscriptionbillingcycle)
- [latest / objects / SubscriptionBillingCycleSkipUserError](#latest-objects-subscriptionbillingcycleskipusererror)
- [latest / objects / SubscriptionBillingCycleUnskipUserError](#latest-objects-subscriptionbillingcycleunskipusererror)
- [latest / objects / SubscriptionBillingPolicy](#latest-objects-subscriptionbillingpolicy)
- [latest / objects / SubscriptionContract](#latest-objects-subscriptioncontract)
- [latest / objects / SubscriptionContractStatusUpdateUserError](#latest-objects-subscriptioncontractstatusupdateusererror)
- [latest / objects / SubscriptionContractUserError](#latest-objects-subscriptioncontractusererror)
- [latest / objects / SubscriptionDeliveryMethodLocalDelivery](#latest-objects-subscriptiondeliverymethodlocaldelivery)
- [latest / objects / SubscriptionDeliveryMethodLocalDeliveryOption](#latest-objects-subscriptiondeliverymethodlocaldeliveryoption)
- [latest / objects / SubscriptionDeliveryMethodPickup](#latest-objects-subscriptiondeliverymethodpickup)
- [latest / objects / SubscriptionDeliveryMethodPickupOption](#latest-objects-subscriptiondeliverymethodpickupoption)
- [latest / objects / SubscriptionDeliveryMethodShipping](#latest-objects-subscriptiondeliverymethodshipping)
- [latest / objects / SubscriptionDeliveryMethodShippingOption](#latest-objects-subscriptiondeliverymethodshippingoption)
- [latest / objects / SubscriptionDeliveryOptionsResultFailure](#latest-objects-subscriptiondeliveryoptionsresultfailure)
- [latest / objects / SubscriptionDeliveryOptionsResultSuccess](#latest-objects-subscriptiondeliveryoptionsresultsuccess)
- [latest / objects / SubscriptionDeliveryPolicy](#latest-objects-subscriptiondeliverypolicy)
- [latest / objects / SubscriptionDiscount](#latest-objects-subscriptiondiscount)
- [latest / objects / SubscriptionDiscountAllocation](#latest-objects-subscriptiondiscountallocation)
- [latest / objects / SubscriptionDiscountFixedAmountValue](#latest-objects-subscriptiondiscountfixedamountvalue)
- [latest / objects / SubscriptionDiscountPercentageValue](#latest-objects-subscriptiondiscountpercentagevalue)
- [latest / objects / SubscriptionLine](#latest-objects-subscriptionline)
- [latest / objects / SubscriptionLocalDeliveryOption](#latest-objects-subscriptionlocaldeliveryoption)
- [latest / objects / SubscriptionMailingAddress](#latest-objects-subscriptionmailingaddress)
- [latest / objects / SubscriptionMonthDayAnchor](#latest-objects-subscriptionmonthdayanchor)
- [latest / objects / SubscriptionPickupOption](#latest-objects-subscriptionpickupoption)
- [latest / objects / SubscriptionShippingOption](#latest-objects-subscriptionshippingoption)
- [latest / objects / SubscriptionWeekDayAnchor](#latest-objects-subscriptionweekdayanchor)
- [latest / objects / SubscriptionYearDayAnchor](#latest-objects-subscriptionyeardayanchor)
- [latest / objects / TaxLine](#latest-objects-taxline)
- [latest / objects / TipSale](#latest-objects-tipsale)
- [latest / objects / TrackingInformation](#latest-objects-trackinginformation)
- [latest / objects / TransactionTypeDetails](#latest-objects-transactiontypedetails)
- [latest / objects / UnitPrice](#latest-objects-unitprice)
- [latest / objects / UnitPriceMeasurement](#latest-objects-unitpricemeasurement)
- [latest / objects / UnknownSale](#latest-objects-unknownsale)
- [latest / objects / UnverifiedReturnLineItem](#latest-objects-unverifiedreturnlineitem)
- [latest / objects / UserErrorsCustomerAddressUserErrors](#latest-objects-usererrorscustomeraddressusererrors)
- [latest / objects / UserErrorsCustomerEmailMarketingUserErrors](#latest-objects-usererrorscustomeremailmarketingusererrors)
- [latest / objects / UserErrorsCustomerUserErrors](#latest-objects-usererrorscustomerusererrors)
- [latest / objects / UserErrorsStorefrontCustomerAccessTokenCreateUserErrors](#latest-objects-usererrorsstorefrontcustomeraccesstokencreateusererrors)
- [latest / objects / Video](#latest-objects-video)
- [latest / objects / VideoSource](#latest-objects-videosource)
- [latest / objects / Weight](#latest-objects-weight)


---



<a id="latest-objects-additionalfeesale"></a>


## Additional​Fee​Sale

object

A sale that includes an additional fee charge.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### AdditionalFeeSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-adjustmentsale"></a>


## Adjustment​Sale

object

A sale event that results in an adjustment to the order price.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### AdjustmentSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-appliedgiftcard"></a>


## Applied​Gift​Card

object

The details about the gift card used on the checkout.

### Fields

* amount​Used

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount deducted from the gift card.

* balance

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The remaining amount on the gift card.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* last​Characters

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The last characters of the gift card.

* presentment​Amount​Used

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount applied to the checkout in its currency.

***

### Map

#### Fields with this object

* [Checkout.appliedGiftCards](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.appliedGiftCards)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### AppliedGiftCard Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-attribute"></a>


## Attribute

object

A custom property. Attributes are used to store additional information about a Shopify resource, such as products, customers, or orders. Attributes are stored as key-value pairs.

For example, a list of attributes might include whether a customer is a first-time buyer (`"customer_first_order": "true"`), whether an order is gift-wrapped (`"gift_wrapped": "true"`), a preferred delivery date (`"preferred_delivery_date": "2025-10-01"`), the discount applied (`"loyalty_discount_applied": "10%"`), and any notes provided by the customer (`"customer_notes": "Please leave at the front door"`).

### Fields

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The key or name of the attribute. For example, `"customer_first_order"`.

* value

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the attribute. For example, `"true"`.

***

### Map

#### Fields with this object

* [Checkout.customAttributes](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.customAttributes)
* [CheckoutLineItem.customAttributes](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.customAttributes)
* [LineItem.customAttributes](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.customAttributes)
* [SubscriptionContract.customAttributes](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.customAttributes)
* [SubscriptionContractBase.customAttributes](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-customAttributes)
* [SubscriptionLine.customAttributes](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.customAttributes)

---



<a id="latest-objects-automaticdiscountapplication"></a>


## Automatic​Discount​Application

object

Captures the intentions of a discount that was automatically applied.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationAllocationMethod)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The method by which the discount's value is allocated to its entitled items.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetSelection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the application.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  interface

***

### AutomaticDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-availableshippingrates"></a>


## Available​Shipping​Rates

object

A collection of available shipping rates for a checkout.

### Fields

* ready

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the shipping rates are ready. The `shippingRates` field is `null` when this value is `false`. This field should be polled until its value becomes `true`.

* shipping​Rates

  [\[Shipping​Rate!\]](https://shopify.dev/docs/api/customer/latest/objects/ShippingRate)

  The fetched shipping rates. `null` until the `ready` field is `true`.

***

### Map

#### Fields with this object

* [Checkout.availableShippingRates](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.availableShippingRates)

---



<a id="latest-objects-businesscustomerusererror"></a>


## Business​Customer​User​Error

object

An error that happens during the execution of a business customer mutation.

### Fields

* code

  [Business​Customer​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/BusinessCustomerErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [company​Location​Assign​Address](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/customer/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

***

### BusinessCustomerUserError Mutations

#### Mutated by

* [company​Location​Assign​Address](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### BusinessCustomerUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-buyerexperienceconfiguration"></a>


## Buyer​Experience​Configuration

object

The configuration for the buyer's checkout.

### Fields

* deposit

  [Deposit​Configuration](https://shopify.dev/docs/api/customer/latest/unions/DepositConfiguration)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The deposit amount required for the order.

* pay​Now​Only

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the buyer must pay at checkout or can choose to pay at checkout or pay later using net terms.

***

### Map

#### Fields with this object

* [CompanyLocation.buyerExperienceConfiguration](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.buyerExperienceConfiguration)

---



<a id="latest-objects-calculatedreturn"></a>


## Calculated​Return

object

The calculated financial outcome of a return based on the line items requested for return.Includes the monetary values of the line items, along with applicable taxes, discounts, and otherfees on the order. Financial summary may include return fees depending onthe [return rules](https://help.shopify.com/manual/fulfillment/managing-orders/returns/return-rules)at the time the order was placed.

### Fields

* financial​Summary

  [Return​Financial​Summary!](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary)

  non-null

  A breakdown of the monetary values for the calculated return.

* return​Line​Items

  [Calculated​Return​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection)

  non-null

  A list of line items being processed for a return.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Map

No referencing types

***

### Queries

* [return​Calculate](https://shopify.dev/docs/api/customer/latest/queries/returnCalculate)

  query

  The calculated monetary value of the return.

  * input

    [Calculate​Return​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnInput)

    required

    ### Arguments

    The input fields for calculating a return.

  ***

***

### CalculatedReturn Queries

#### Queried by

* [return​Calculate](https://shopify.dev/docs/api/customer/latest/queries/returnCalculate)

---



<a id="latest-objects-calculatedreturnlineitem"></a>


## Calculated​Return​Line​Item

object

The line item being processed for a return and its calculated monetary values.

### Fields

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The line item being processed for a return.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity being returned.

* subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The subtotal of the return line item.

* total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The total tax of the return line item.

***

### Map

#### Fields and connections with this object

* [CalculatedReturn.returnLineItems](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems)
* [CalculatedReturnLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection#returns-nodes)
* [CalculatedReturnLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItemEdge#field-CalculatedReturnLineItemEdge.fields.node)

---



<a id="latest-objects-cardpaymentdetails"></a>


## Card​Payment​Details

object

The card payment details related to a transaction.

### Fields

* card​Brand

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The brand of the credit card used.

* last4

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The last four digits of the credit card used.

***

### Map

#### Possible type in

* [Payment​Details](https://shopify.dev/docs/api/customer/latest/unions/PaymentDetails)

---



<a id="latest-objects-checkout"></a>


## Checkout

object

A container for information required to checkout items and pay. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* applied​Gift​Cards

  [\[Applied​Gift​Card!\]!](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard)

  non-null

  The gift cards used on the checkout.

* available​Shipping​Rates

  [Available​Shipping​Rates](https://shopify.dev/docs/api/customer/latest/objects/AvailableShippingRates)

  The available shipping rates for this Checkout. Should only be used when checkout `requiresShipping` is `true` and the shipping address is valid.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the checkout was created.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/customer/latest/enums/CurrencyCode)

  non-null

  The currency code for the checkout.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/customer/latest/objects/Attribute)

  non-null

  The extra information added to the checkout.

* discount​Applications

  [Discount​Application​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection)

  non-null

  The discounts applied on the checkout.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* email

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The email associated with this checkout.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  A globally-unique ID.

* line​Items

  [Checkout​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection)

  non-null

  A list of line item objects, each containing information about an item in the checkout.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* line​Items​Subtotal​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The sum of all the prices of all the items in the checkout, excluding duties, taxes, shipping, and discounts.

* note

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The note associated with the checkout.

* payment​Due

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.

* ready

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the Checkout is ready and can be completed. Checkouts may have asynchronous operations that can take time to finish. If you want to complete a checkout or ensure all the fields are populated and up to date, polling is required until the value is true.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the fulfillment requires shipping.

* shipping​Discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/customer/latest/objects/DiscountAllocation)

  non-null

  The discounts allocated to the shipping line by discount applications.

* shipping​Line

  [Shipping​Rate](https://shopify.dev/docs/api/customer/latest/objects/ShippingRate)

  The selected shipping rate, transitioned to a `shipping_line` object.

* subtotal​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price at checkout before duties, shipping, and taxes.

* taxes​Included

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether taxes are included in the line item and shipping line prices.

* tax​Exempt

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the checkout is tax exempt.

* total​Duties

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  The sum of all the duties applied to the line items in the checkout.

* total​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The sum of all the prices of all the items in the checkout, duties, taxes, and discounts included.

* total​Tax

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The sum of all the taxes applied to the line items and shipping lines in the checkout.

* web​Url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null

  The URL for the checkout, accessible from the web.

***

### Map

#### Fields with this object

* [Customer.lastIncompleteCheckout](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.lastIncompleteCheckout)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Checkout Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-checkoutlineitem"></a>


## Checkout​Line​Item

object

A line item in the checkout, grouped by variant and attributes.

### Fields

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/customer/latest/objects/Attribute)

  non-null

  An array of Key-Value pairs providing extra information about the line item.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  A globally-unique ID.

* price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  The price of the line item.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of the line item.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the line item. Defaults to the product's title.

* unit​Price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  The unit price of the line item.

* variant​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the variant.

***

### Map

#### Fields and connections with this object

* [Checkout.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems)
* [CheckoutLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection#returns-nodes)
* [CheckoutLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItemEdge#field-CheckoutLineItemEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CheckoutLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-company"></a>


## Company

object

Represents a company's information.

### Fields

* draft​Orders

  [Draft​Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection)

  non-null

  The list of company draft orders.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Draft​Order​By​Company​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/DraftOrderByCompanySortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * customer\_id

      id

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * purchasing\_entity

      string

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  ***

* external​Id

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique externally-supplied ID for the company.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* locations

  [Company​Location​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection)

  non-null

  The list of locations that the business of the business contact belongs to.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Company​Location​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/CompanyLocationSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

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

* metafield

  [Metafield](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A metafield found by namespace and key.

  * namespace

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    A container for a set of metafields.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The metafields associated with the resource matching the supplied list of namespaces and keys.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

  ***

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the company.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection)

  non-null

  The list of customer orders under the company.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Order​By​Company​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/OrderByCompanySortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * confirmation\_number

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * order\_number

      string

    * processed\_at

      time

    * purchasing\_company\_contact\_id

      id

    * purchasing\_company\_id

      id

    * purchasing\_company\_location\_id

      id

    * purchasing\_entity

      string

    * shipment\_status

      string

    * updated\_at

      time

  ***

***

### Map

#### Fields with this object

* [CompanyContact.company](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.company)
* [PurchasingCompany.company](https://shopify.dev/docs/api/customer/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.company)

***

### Queries

* [company](https://shopify.dev/docs/api/customer/latest/queries/company)

  query

  The information of the customer's company. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Company.

  ***

***

### Company Queries

#### Queried by

* [company](https://shopify.dev/docs/api/customer/latest/queries/company)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### Company Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-companyaddress"></a>


## Company​Address

object

The address of a company location, either billing or shipping. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* address1

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The first line of the address. It is typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The second line of the address. It is typically the apartment, suite, or unit number.

* city

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The city, district, village, or town.

* company​Name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the company.

* country

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the country of the address.

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/customer/latest/enums/CountryCode)

  non-null

  The two-letter code for the country of the address, for example, US.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the company address was created.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first name of the recipient.

* formatted​Address

  [\[String!\]!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The formatted version of the address.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include the name of the recipient in the formatted address.

  * with​Company​Name

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:true

    Whether to include the company name in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  A comma-separated list of the city, province, and country values.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The last name of the recipient.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The unique phone number of the customer, formatted using the E.164 standard, for example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* recipient

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The identity of the recipient, for example, 'Receiving Department'.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time (in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the company address was last updated.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The alphanumeric code for the region, for example, ON.

***

### Map

#### Fields with this object

* [CompanyLocation.billingAddress](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.billingAddress)
* [CompanyLocation.shippingAddress](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.shippingAddress)

***

### Mutations

* [company​Location​Assign​Address](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress)

  mutation

  Updates an address on a company location.

  * location​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the company location to update addresses on.

  * address

    [Company​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput)

    required

    The input fields to use to update the address.

  * address​Types

    [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/customer/latest/enums/CompanyAddressType)

    required

    The list of address types on the location to update.

  ***

***

### CompanyAddress Mutations

#### Mutated by

* [company​Location​Assign​Address](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CompanyAddress Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-companycontact"></a>


## Company​Contact

object

Represents the customer's contact information.

### Fields

* company

  [Company](https://shopify.dev/docs/api/customer/latest/objects/Company)

  The information of the copmany contact's company.

* customer

  [Customer!](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  non-null

  The customer associated to this contact.

* draft​Orders

  [Draft​Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection)

  non-null

  The list of company contact's draft orders.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Draft​Order​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/DraftOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * customer\_id

      id

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * purchasing\_entity

      string

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  ***

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* locations

  [Company​Location​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection)

  non-null

  The list of locations that the company contact belongs to.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Company​Location​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/CompanyLocationSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_id

      id

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

* orders

  [Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection)

  non-null

  The list of company contact's orders.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Order​By​Contact​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/OrderByContactSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * confirmation\_number

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * order\_number

      string

    * processed\_at

      time

    * purchasing\_company\_contact\_id

      id

    * purchasing\_company\_id

      id

    * purchasing\_company\_location\_id

      id

    * purchasing\_entity

      string

    * shipment\_status

      string

    * updated\_at

      time

  ***

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The job title of the company contact.

***

### Map

#### Fields and connections with this object

* [CompanyContactConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection#returns-nodes)
* [CompanyContactEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactEdge#field-CompanyContactEdge.fields.node)
* [CompanyContactRoleAssignment.contact](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignment#field-CompanyContactRoleAssignment.fields.contact)
* [CompanyLocation.contacts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts)
* [Customer.companyContacts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.companyContacts)
* [PurchasingCompany.contact](https://shopify.dev/docs/api/customer/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.contact)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CompanyContact Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-companycontactrole"></a>


## Company​Contact​Role

object

A role for a company contact. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the role.

* resource​Permission

  [\[Permitted​Operation!\]!](https://shopify.dev/docs/api/customer/latest/enums/PermittedOperation)

  non-null

  The permissions on a specified resource.

* resource​Permissions

  [\[Resource​Permission!\]!](https://shopify.dev/docs/api/customer/latest/objects/ResourcePermission)

  non-null

  A list of permissions on all resources.

***

### Map

#### Fields with this object

* [CompanyContactRoleAssignment.role](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignment#field-CompanyContactRoleAssignment.fields.role)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CompanyContactRole Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-companycontactroleassignment"></a>


## Company​Contact​Role​Assignment

object

Represents information about a company contact role assignment.

### Fields

* contact

  [Company​Contact!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact)

  non-null

  The company contact for whom this role is assigned.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* role

  [Company​Contact​Role!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole)

  non-null

  The role that's assigned.

***

### Map

#### Fields and connections with this object

* [CompanyContactRoleAssignmentConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection#returns-nodes)
* [CompanyContactRoleAssignmentEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignmentEdge#field-CompanyContactRoleAssignmentEdge.fields.node)
* [CompanyLocation.roleAssignments](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CompanyContactRoleAssignment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-companylocation"></a>


## Company​Location

object

Represents a company's business location.

### Fields

* billing​Address

  [Company​Address](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The billing address of the company location.

* buyer​Experience​Configuration

  [Buyer​Experience​Configuration](https://shopify.dev/docs/api/customer/latest/objects/BuyerExperienceConfiguration)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The configuration of the buyer's B2B checkout.

* contacts

  [Company​Contact​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection)

  non-null

  The list of contacts under a particular business location.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Company​Contact​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/CompanyContactSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_location\_id

      id

    * created\_at

      time

    * email

      string

    * * id

        id

      * location\_name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * name

      string

    * role\_name

      string

    * status

      string

    * updated\_at

      time

  ***

* draft​Orders

  [Draft​Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection)

  non-null

  The list of company draft orders.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Draft​Order​By​Location​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/DraftOrderByLocationSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * customer\_id

      id

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * purchasing\_entity

      string

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  ***

* external​Id

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique externally-supplied ID for the location.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A metafield found by namespace and key.

  * namespace

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    A container for a set of metafields.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The metafields associated with the resource matching the supplied list of namespaces and keys.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

  ***

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the company location.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection)

  non-null

  The list of customer orders under the company.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Order​By​Location​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/OrderByLocationSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * confirmation\_number

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * order\_number

      string

    * processed\_at

      time

    * purchasing\_company\_contact\_id

      id

    * purchasing\_company\_id

      id

    * purchasing\_company\_location\_id

      id

    * purchasing\_entity

      string

    * shipment\_status

      string

    * updated\_at

      time

  ***

* role​Assignments

  [Company​Contact​Role​Assignment​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection)

  non-null

  The list of roles assigned to this location.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Company​Contact​Role​Assignment​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/CompanyContactRoleAssignmentSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * company\_contact\_role\_id

      id

    * company\_id

      id

    * company\_location\_id

      id

    * created\_at

      time

    * * id

        id

      * location\_name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * role\_name

      string

    * updated\_at

      time

  ***

* shipping​Address

  [Company​Address](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The shipping address of the company location.

* store​Credit​Accounts

  [Store​Credit​Account​Connection!](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of the owner resource's store credit accounts. Store credit accounts are not shown for shops with store credit disabled at checkout.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

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

* tax​Identifier

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The tax id of the company location.

* market

  [Market!](https://shopify.dev/docs/api/customer/latest/objects/Market)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

***

### Map

#### Fields and connections with this object

* [Company.locations](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations)
* [CompanyContact.locations](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations)
* [CompanyLocationConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection#returns-nodes)
* [CompanyLocationEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocationEdge#field-CompanyLocationEdge.fields.node)
* [PurchasingCompany.location](https://shopify.dev/docs/api/customer/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.location)

***

### Queries

* [company​Location](https://shopify.dev/docs/api/customer/latest/queries/companyLocation)

  query

  The Location corresponding to the provided ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Location.

  ***

***

### CompanyLocation Queries

#### Queried by

* [company​Location](https://shopify.dev/docs/api/customer/latest/queries/companyLocation)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)

    interface

  * [Has​Store​Credit​Accounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### CompanyLocation Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)
* [Has​Store​Credit​Accounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-count"></a>


## Count

object

A numeric count with precision information indicating whether the count is exact or an estimate.

### Fields

* count

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The count of elements.

* precision

  [Count​Precision!](https://shopify.dev/docs/api/customer/latest/enums/CountPrecision)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The count's precision, or the exactness of the value.

***

### Map

#### Fields with this object

* [Return.returnLineItemsCount](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.returnLineItemsCount)
* [SubscriptionBillingPolicy.intervalCount](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingPolicy#field-SubscriptionBillingPolicy.fields.intervalCount)
* [SubscriptionContract.linesCount](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.linesCount)
* [SubscriptionContractBase.linesCount](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-linesCount)
* [SubscriptionDeliveryPolicy.intervalCount](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryPolicy#field-SubscriptionDeliveryPolicy.fields.intervalCount)
* [SubscriptionDiscount.usageCount](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.usageCount)

---



<a id="latest-objects-customer"></a>


## Customer

object

Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* addresses

  [Customer​Address​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection)

  non-null

  The addresses associated with the customer.

  * skip​Default

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    ### Arguments

    A flag indicating whether the default address should be included.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* company​Contacts

  [Company​Contact​Connection!](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection)

  non-null

  The list of contacts the customer is associated with.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* creation​Date

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the customer was created.

* default​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The default address of the customer.

* display​Name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The full name of the customer, based on the first\_name and last\_name values. If these aren't available, it falls back to the customer's email address, and if that isn't available, the customer's phone number.

* draft​Orders

  [Draft​Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection)

  non-null

  The Draft Orders associated with the customer.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Draft​Order​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/DraftOrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * company\_contact\_id

        id

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * customer\_id

      id

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * purchasing\_entity

      string

    * source

      string

    * status

      string

    * tag

      string

    * updated\_at

      time

  ***

* email​Address

  [Customer​Email​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The email address of the customer.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first name of the customer.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image​Url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null

  The URL to the avatar image of the customer.

* last​Incomplete​Checkout

  [Checkout](https://shopify.dev/docs/api/customer/latest/objects/Checkout)

  The customer's most recently updated, incomplete checkout.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The last name of the customer.

* metafield

  [Metafield](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A metafield found by namespace and key.

  * namespace

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    A container for a set of metafields.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The metafields associated with the resource matching the supplied list of namespaces and keys.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

  ***

* orders

  [Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection)

  non-null

  The orders associated with the customer.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Order​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/OrderSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * default

        string

      * confirmation\_number

        string

      - Filter by a case-insensitive search of multiple fields in a document.

      - Example:
        * `query=Bob Norman`
        * `query=title:green hoodie`

    * created\_at

      time

    * * id

        id

      * name

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * order\_number

      string

    * processed\_at

      time

    * purchasing\_company\_contact\_id

      id

    * purchasing\_company\_id

      id

    * purchasing\_company\_location\_id

      id

    * purchasing\_entity

      string

    * shipment\_status

      string

    * updated\_at

      time

  ***

* phone​Number

  [Customer​Phone​Number](https://shopify.dev/docs/api/customer/latest/objects/CustomerPhoneNumber)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The phone number of the customer.

* store​Credit​Accounts

  [Store​Credit​Account​Connection!](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of the owner resource's store credit accounts. Store credit accounts are not shown for shops with store credit disabled at checkout.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

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

* subscription​Contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  Returns a `SubscriptionContract` resource by ID.

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `SubscriptionContract` to return.

  ***

* subscription​Contracts

  [Subscription​Contract​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection)

  non-null

  The Subscription Contracts associated with the customer.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Contracts​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

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

* tags

  [\[String!\]!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  A comma-separated list of tags that have been added to the customer.

***

### Map

#### Fields with this object

* [CompanyContact.customer](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.customer)
* [DraftOrder.customer](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.customer)
* [Order.customer](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.customer)

#### Possible type in

* [Purchasing​Entity](https://shopify.dev/docs/api/customer/latest/unions/PurchasingEntity)

***

### Queries

* [customer](https://shopify.dev/docs/api/customer/latest/queries/customer)

  query

  Returns the Customer resource. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Customer Queries

#### Queried by

* [customer](https://shopify.dev/docs/api/customer/latest/queries/customer)

***

### Mutations

* [customer​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate)

  mutation

  Updates the customer's personal information.

  * input

    [Customer​Update​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerUpdateInput)

    required

    ### Arguments

    Specifies the input fields for the customer update.

  ***

***

### Customer Mutations

#### Mutated by

* [customer​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)

    interface

  * [Has​Store​Credit​Accounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### Customer Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)
* [Has​Store​Credit​Accounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-customeraddress"></a>


## Customer​Address

object

Represents a customer's mailing address. For example, a customer's default address and an order's billing address are both mailing addresses. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* address1

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The second line of the address. This is typically the apartment, suite, or unit number.

* city

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the customer's company or organization.

* country

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the country.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The first name of the customer.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A formatted version of the address, customized by the provided arguments.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Determines whether to include the customer's name in the formatted address.

  * with​Company

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:true

    Determines whether to include the customer's company in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A comma-separated list of the values for city, province, and country.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The last name of the customer.

* name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The full name of the customer, based on firstName and lastName.

* phone​Number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The customer's unique phone number.

  Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The region of the address, such as the province, state, or district.

* territory​Code

  [Country​Code](https://shopify.dev/docs/api/customer/latest/enums/CountryCode)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The two-letter code for the country of the address.

  For example, US.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The alphanumeric code for the region.

  For example, ON.

***

### Map

#### Fields and connections with this object

* [Customer.addresses](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses)
* [Customer.defaultAddress](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.defaultAddress)
* [CustomerAddressConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection#returns-nodes)
* [CustomerAddressEdge.node](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddressEdge#field-CustomerAddressEdge.fields.node)
* [DraftOrder.billingAddress](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.billingAddress)
* [DraftOrder.shippingAddress](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.shippingAddress)
* [Order.billingAddress](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.billingAddress)
* [Order.shippingAddress](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.shippingAddress)

***

### Mutations

* [customer​Address​Create](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate)

  mutation

  Creates a new address for a customer.

  * address

    [Customer​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

    required

    ### Arguments

    Specifies the fields to use when creating the address.

  * default​Address

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    The flag to set the address as the default address.

  ***

* [customer​Address​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate)

  mutation

  Updates a specific address for a customer.

  * address​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to be updated.

  * address

    [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

    Specifies the fields to use when updating the address.

  * default​Address

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:null

    The flag to set the address as the default address.

  ***

***

### CustomerAddress Mutations

#### Mutated by

* [customer​Address​Create](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate)
* [customer​Address​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### CustomerAddress Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-customeremailaddress"></a>


## Customer​Email​Address

object

An email address associated with a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* email​Address

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The email address of the customer.

* marketing​State

  [Email​Marketing​State!](https://shopify.dev/docs/api/customer/latest/enums/EmailMarketingState)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The customer's subscription status for email marketing.

***

### Map

#### Fields with this object

* [Customer.emailAddress](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.emailAddress)

***

### Mutations

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)

  mutation

  Subscribes the customer to email marketing.

* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

  mutation

  Unsubscribes the customer from email marketing.

***

### CustomerEmailAddress Mutations

#### Mutated by

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)
* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

---



<a id="latest-objects-customerphonenumber"></a>


## Customer​Phone​Number

object

Defines the phone number of the customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* marketing​State

  [Sms​Marketing​State!](https://shopify.dev/docs/api/customer/latest/enums/SmsMarketingState)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Indicates whether the customer has subscribed to SMS marketing material.

* phone​Number

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The customer's phone number.

***

### Map

#### Fields with this object

* [Customer.phoneNumber](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.phoneNumber)

---



<a id="latest-objects-depositpercentage"></a>


## Deposit​Percentage

object

A percentage deposit.

### Fields

* percentage

  [Float!](https://shopify.dev/docs/api/customer/latest/scalars/Float)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The percentage value of the deposit.

***

### Map

#### Possible type in

* [Deposit​Configuration](https://shopify.dev/docs/api/customer/latest/unions/DepositConfiguration)

---



<a id="latest-objects-discountallocation"></a>


## Discount​Allocation

object

Represents an amount discounting the line that has been allocated by a discount.

### Fields

* allocated​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The amount of discount allocated.

* discount​Application

  [Discount​Application!](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discount from which this allocated amount originated.

***

### Map

#### Fields with this object

* [Checkout.shippingDiscountAllocations](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.shippingDiscountAllocations)
* [LineItem.discountAllocations](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.discountAllocations)
* [Order.shippingDiscountAllocations](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.shippingDiscountAllocations)

---



<a id="latest-objects-discountcodeapplication"></a>


## Discount​Code​Application

object

Captures the intentions of a discount code at the time that it is applied.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationAllocationMethod)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The method by which the discount's value is allocated to its entitled items.

* code

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The string identifying the discount code used at the time of application.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetSelection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of line that the discount is applicable towards.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  interface

***

### DiscountCodeApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-domain"></a>


## Domain

object

A unique string representing the address of a Shopify store on the Internet.

### Fields

* host

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The host name of the domain (for example, `example.com`).

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* redirect​Host

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The host of the primary domain that this domain redirects to (for example, `example.com`).

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null

  The URL of the domain (for example, `example.com`).

***

### Map

#### Fields with this object

* [MarketWebPresence.domain](https://shopify.dev/docs/api/customer/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.domain)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Domain Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-draftorder"></a>


## Draft​Order

object

A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* billing​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The billing address of the customer.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the draft order was created in Shopify.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/customer/latest/enums/CurrencyCode)

  non-null

  The three-letter code for the currency of the store at the time that the invoice is sent.

* customer

  [Customer](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  The customer who placed the order.

* discount​Information

  [Draft​Order​Discount​Information!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderDiscountInformation)

  non-null

  The discount information for the draft order.

* email

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The email address of the customer, which is used to send notifications to.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* in​Review

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the draft order is created from the online store and is open.

* invoice​Url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  The link to the checkout, which is sent to the customer in the invoice email.

* line​Items

  [Draft​Order​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection)

  non-null

  The list of the line items in the draft order.

  * flatten​Components

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to flatten components into the line items list. When true, returns both parent and component line items as top-level nodes. When false, returns only parent line items as top-level nodes.For API versions before 2026-04, defaults to true. For API versions 2026-04 and later, defaults to false.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* line​Items​Summary

  [Draft​Order​Line​Items​Summary](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemsSummary)

  The summary of draft order line items quantity.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unique identifier for the draft order, which is unique within the store. For example, *#D1223*.

* order

  [Order](https://shopify.dev/docs/api/customer/latest/objects/Order)

  The order that was created from this draft order.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The phone number assigned to the draft order.

* purchasing​Entity

  [Purchasing​Entity](https://shopify.dev/docs/api/customer/latest/unions/PurchasingEntity)

  The purchasing entity for the draft order.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the draft order requires shipping or not.

* shipping​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The shipping address of the customer.

* status

  [Draft​Order​Status!](https://shopify.dev/docs/api/customer/latest/enums/DraftOrderStatus)

  non-null

  The status of the draft order.

* subtotal​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The subtotal of the line items (doesn't include shipping charges, shipping discounts, or taxes).

* taxes​Included

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the line item prices include taxes.

* tax​Exempt

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Indicates whether the draft order is tax exempt.

* total​Line​Items​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total price of line items for this draft order.

* total​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of the draft order (includes taxes, shipping charges, and discounts).

* total​Shipping​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total shipping charge for the draft order.

* total​Tax

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of taxes for the draft order.

* total​Weight

  [Unsigned​Int64!](https://shopify.dev/docs/api/customer/latest/scalars/UnsignedInt64)

  non-null

  The total weight (in grams) of the draft order.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the draft order was last changed. The format is YYYY-MM-DD HH:mm:ss (for example, 2016-02-05 17:04:01).

***

### Map

#### Fields and connections with this object

* [Company.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders)
* [CompanyContact.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)
* [CompanyLocation.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)
* [Customer.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders)
* [DraftOrderConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection#returns-nodes)
* [DraftOrderEdge.node](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderEdge#field-DraftOrderEdge.fields.node)
* [Order.draftOrder](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.draftOrder)

***

### Queries

* [draft​Order](https://shopify.dev/docs/api/customer/latest/queries/draftOrder)

  query

  Returns a draft order resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the draft order to be returned.

  ***

***

### DraftOrder Queries

#### Queried by

* [draft​Order](https://shopify.dev/docs/api/customer/latest/queries/draftOrder)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### DraftOrder Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-draftorderapplieddiscount"></a>


## Draft​Order​Applied​Discount

object

The order-level discount applied to a draft order.

### Fields

* discount​Value

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount of money discounted.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the order-level discount.

***

### Map

#### Fields with this object

* [DraftOrderDiscountInformation.appliedDiscount](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderDiscountInformation#field-DraftOrderDiscountInformation.fields.appliedDiscount)

---



<a id="latest-objects-draftorderdiscountinformation"></a>


## Draft​Order​Discount​Information

object

The discount information associated with a draft order.

### Fields

* applied​Discount

  [Draft​Order​Applied​Discount](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderAppliedDiscount)

  The order-level discount applied to the draft order.

* total​Discounts

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts applied to the draft order.

***

### Map

#### Fields with this object

* [DraftOrder.discountInformation](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.discountInformation)

---



<a id="latest-objects-draftorderlineitem"></a>


## Draft​Order​Line​Item

object

A line item included in a draft order.

### Fields

* components

  [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem)

  non-null

  The list of components for this draft order line item.

* discounted​Total

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total price of the line item after discounts have been applied.

* discount​Information

  [Draft​Order​Line​Item​Discount​Information!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemDiscountInformation)

  non-null

  The discount information for the draft order line item.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  The image associated with the line item.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the product.

* original​Total

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total price of the line item, based on the original unit price of the variant multiplied by the quantity. This total doesn't include any discounts.

* original​Unit​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price of the variant without any discounts applied.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of this variant item in the draft order.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the variant requires physical shipping.

* sku

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The SKU number of the variant.

* taxable

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the variant is taxable.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the product or variant. This only applies to custom line items.

* variant​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the product variant.

* vendor

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the vendor of the variant.

* weight

  [Weight](https://shopify.dev/docs/api/customer/latest/objects/Weight)

  The weight of the line item, including the unit and value.

* discounted​Unit​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-nullDeprecated (removal date set)

***

### Map

#### Fields and connections with this object

* [DraftOrder.lineItems](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)
* [DraftOrderLineItem.components](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.components)
* [DraftOrderLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection#returns-nodes)
* [DraftOrderLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemEdge#field-DraftOrderLineItemEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### DraftOrderLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-draftorderlineitemdiscountinformation"></a>


## Draft​Order​Line​Item​Discount​Information

object

The discount information for the draft order line item.

### Fields

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The discount's name that displays to merchants in the Shopify admin and to customers.

* total​Discount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discount applied to the line item.

***

### Map

#### Fields with this object

* [DraftOrderLineItem.discountInformation](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.discountInformation)

---



<a id="latest-objects-draftorderlineitemssummary"></a>


## Draft​Order​Line​Items​Summary

object

The quantitative summary of the line items in a specific draft order.

### Fields

* line​Item​Count

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The total number of line items in the draft order.

* total​Quantity​Of​Line​Items

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The total quantity of all line items in the draft order.

***

### Map

#### Fields with this object

* [DraftOrder.lineItemsSummary](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItemsSummary)

---



<a id="latest-objects-dutysale"></a>


## Duty​Sale

object

A sale that includes a duty charge.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### DutySale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-exchangelineitem"></a>


## Exchange​Line​Item

object

An item for exchange.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The image associated to the line item's variant.

* product​Has​Only​Default​Variant

  [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the product has only a single variant with the default option and value.

* product​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ID of the product at time of refund creation.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The number of variant items ordered.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the product at time of order creation.

* variant​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ID of the variant at time of refund creation.

* variant​Sku

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The variant SKU number.

* variant​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the variant at time of refund creation.

***

### Map

#### Fields and connections with this object

* [ExchangeLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection#returns-nodes)
* [ExchangeLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItemEdge#field-ExchangeLineItemEdge.fields.node)
* [Return.exchangeLineItems](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.exchangeLineItems)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### ExchangeLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-feesale"></a>


## Fee​Sale

object

A sale associated with a fee.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### FeeSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-fulfillment"></a>


## Fulfillment

object

Represents a single fulfillment in an order.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the fulfillment was created.

* estimated​Delivery​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The estimated delivery time of this fulfillment.

* events

  [Fulfillment​Event​Connection!](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A collection of fulfillment events.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Fulfillment​Event​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/FulfillmentEventSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * status

        string

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

  ***

* fulfillment​Line​Items

  [Fulfillment​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The line items in the fulfillment.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* is​Picked​Up

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the fulfillment is picked up locally.

* latest​Shipment​Status

  [Fulfillment​Event​Status](https://shopify.dev/docs/api/customer/latest/enums/FulfillmentEventStatus)

  The latest shipment status for the fulfillment.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether any line items in the fulfillment require shipping.

* status

  [Fulfillment​Status](https://shopify.dev/docs/api/customer/latest/enums/FulfillmentStatus)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The status of the fulfillment.

* tracking​Information

  [\[Tracking​Information!\]!](https://shopify.dev/docs/api/customer/latest/objects/TrackingInformation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The tracking information associated with the fulfillment.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the fulfillment was updated.

***

### Map

#### Fields and connections with this object

* [FulfillmentConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection#returns-nodes)
* [FulfillmentEdge.node](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEdge#field-FulfillmentEdge.fields.node)
* [Order.fulfillments](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillments)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Fulfillment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-fulfillmentevent"></a>


## Fulfillment​Event

object

An event that occurred for a fulfillment.

### Fields

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The time when this fulfillment event occurred.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* status

  [Fulfillment​Event​Status!](https://shopify.dev/docs/api/customer/latest/enums/FulfillmentEventStatus)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The status of the fulfillment event.

***

### Map

#### Fields and connections with this object

* [Fulfillment.events](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events)
* [FulfillmentEventConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection#returns-nodes)
* [FulfillmentEventEdge.node](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEventEdge#field-FulfillmentEventEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### FulfillmentEvent Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-fulfillmentlineitem"></a>


## Fulfillment​Line​Item

object

Represents a line item from an order that's included in a fulfillment.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The line item associated with the order.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The number of line items in the fulfillment.

***

### Map

#### Fields and connections with this object

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)
* [FulfillmentLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [FulfillmentLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItemEdge#field-FulfillmentLineItemEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### FulfillmentLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-genericfile"></a>


## Generic​File

object

The generic file resource lets you manage files in a merchant's store. Generic files include any file that doesn't fit into a designated type such as image or video. Example: PDF, JSON.

### Fields

* alt

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to indicate the contents of a file.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/customer/latest/enums/MediaContentType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The media content type.

* mime​Type

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The MIME type of the file.

* original​File​Size

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The size of the original file in bytes.

* preview​Image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The preview image for the media.

* url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL of the file.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

***

### Interfaces

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

  interface

***

### GenericFile Implements

#### Implements

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

---



<a id="latest-objects-giftcarddetails"></a>


## Gift​Card​Details

object

The gift card payment details related to a transaction.

### Fields

* balance

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The balance of the gift card in shop and presentment currencies.

* last4

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The last characters of the gift card.

***

### Map

#### Fields with this object

* [OrderTransaction.giftCardDetails](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.giftCardDetails)

---



<a id="latest-objects-giftcardsale"></a>


## Gift​Card​Sale

object

A sale associated with a gift card.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The line item associated with the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### GiftCardSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-image"></a>


## Image

object

Represents an image resource.

### Fields

* alt​Text

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to share the nature or contents of an image.

* height

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

* id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique ID for the image.

* thumbhash

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ThumbHash of the image.

  Useful to display placeholder images while the original image is loading.

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The location of the image as a URL.

  If no transform options are specified, then the original image will be preserved including any pre-applied transforms.

  All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.

  If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).

  * transform

    [Image​Transform​Input](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput)

    ### Arguments

    A set of options to transform the original image.

  ***

* width

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

#### Deprecated fields

* original​Src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

* src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

* transformed​Src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  * max​Width

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    Image width in pixels between 1 and 5760.

  * max​Height

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    Image height in pixels between 1 and 5760.

  * crop

    [Crop​Region](https://shopify.dev/docs/api/customer/latest/enums/CropRegion)

    Crops the image according to the specified region.

  * scale

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    Default:1

    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.

  * preferred​Content​Type

    [Image​Content​Type](https://shopify.dev/docs/api/customer/latest/enums/ImageContentType)

    Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported).

  ***

***

### Map

#### Fields with this object

* [DraftOrderLineItem.image](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.image)
* [ExchangeLineItem.image](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.image)
* [GenericFile.previewImage](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.previewImage)
* [LineItem.image](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.image)
* [LineItemGroup.image](https://shopify.dev/docs/api/customer/latest/objects/LineItemGroup#field-LineItemGroup.fields.image)
* [Media.previewImage](https://shopify.dev/docs/api/customer/latest/interfaces/Media#fields-previewImage)
* [MediaImage.image](https://shopify.dev/docs/api/customer/latest/objects/MediaImage#field-MediaImage.fields.image)
* [MediaImage.previewImage](https://shopify.dev/docs/api/customer/latest/objects/MediaImage#field-MediaImage.fields.previewImage)
* [Model3d.previewImage](https://shopify.dev/docs/api/customer/latest/objects/Model3d#field-Model3d.fields.previewImage)
* [SubscriptionLine.image](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.image)
* [SubscriptionLine.variantImage](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.variantImage)
* [Video.previewImage](https://shopify.dev/docs/api/customer/latest/objects/Video#field-Video.fields.previewImage)

---



<a id="latest-objects-lineitem"></a>


## Line​Item

object

A single line item in an order.

### Fields

* current​Total​Price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total price of the line item, calculated by multiplying the current unit price of the variant by the quantity, expressed in presentment currencies.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/customer/latest/objects/Attribute)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of custom attributes associated with the line item.

* discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/customer/latest/objects/DiscountAllocation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discounts that have been allocated onto the line item by discount applications.

* gift​Card

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the line item represents the purchase of a gift card.

* group

  [Line​Item​Group](https://shopify.dev/docs/api/customer/latest/objects/LineItemGroup)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The line item group associated to the line item.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The image object associated with the line item.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the product.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the line item variant.

* price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The product variant price without any discounts applied, in presentment currencies.

* product​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The product's ID.

* product​Type

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The product's type.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The number of variant items ordered.

* refundable​Quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The quantity of the line item, minus the refunded quantity.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether physical shipping is required for the variant.

* sku

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The SKU number of the variant.

* suggested​Return​Reason​Definitions

  [Return​Reason​Definition​Connection](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Return reasons suggested based on the line item's product category in Shopify's product taxonomy. These are a curated subset of the full library of available reasons via the [`returnReasonDefinitions`](https://shopify.dev/docs/api/admin-graphql/latest/queries/returnReasonDefinitions) query.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the product or variant. This field only applies to custom line items.

* total​Discount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total of the discount allocations on this line item, resulting from discounts applied specifically to this line item.

* total​Price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total price of the line item, calculated by multiplying the current unit price of the variant by the quantity, expressed in presentment currencies.

* unit​Price

  [Unit​Price](https://shopify.dev/docs/api/customer/latest/objects/UnitPrice)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unit price of the line item in presentment currencies.

* variant​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ID of the variant.

* variant​Options

  [\[Line​Item​Variant​Option!\]](https://shopify.dev/docs/api/customer/latest/objects/LineItemVariantOption)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The options of the product variant.

* variant​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the variant.

* vendor

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The product's vendor.

***

### Map

#### Fields and connections with this object

* [CalculatedReturnLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.lineItem)
* [FulfillmentLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.lineItem)
* [GiftCardSale.lineItem](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineItem)
* [LineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection#returns-nodes)
* [LineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/LineItemEdge#field-LineItemEdge.fields.node)
* [NonReturnableLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItem#field-NonReturnableLineItem.fields.lineItem)
* [Order.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.lineItems)
* [ProductSale.lineItem](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.lineItem)
* [ReturnLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.lineItem)
* [ReturnLineItemType.lineItem](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType#fields-lineItem)
* [ReturnableLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/ReturnableLineItem#field-ReturnableLineItem.fields.lineItem)
* [TipSale.lineItem](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.lineItem)
* [UnverifiedReturnLineItem.lineItem](https://shopify.dev/docs/api/customer/latest/objects/UnverifiedReturnLineItem#field-UnverifiedReturnLineItem.fields.lineItem)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### LineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-lineitemdiscountinformation"></a>


## Line​Item​Discount​Information

object

The discount information for a specific line item.

### Fields

* discount​Value

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the applied discount.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discount's name that displays to merchants in the Shopify admin and to customers.

***

### Map

#### Fields with this object

* [LineItemGroup.discountInformation](https://shopify.dev/docs/api/customer/latest/objects/LineItemGroup#field-LineItemGroup.fields.discountInformation)

---



<a id="latest-objects-lineitemgroup"></a>


## Line​Item​Group

object

A line item group to which a line item belongs to.

### Fields

* current​Total​Price

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total price of the line item group, calculated by aggregating the current total price of its line item components.

* discount​Information

  [\[Line​Item​Discount​Information!\]](https://shopify.dev/docs/api/customer/latest/objects/LineItemDiscountInformation)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discount information for the line item group.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The image of the line item group variant or the product image if the variant has no image.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The number of line item groups ordered.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the line item group.

* total​Price​Before​Discounts

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total price of the line item group, calculated by aggregating the total price before discounts of its line item components.

***

### Map

#### Fields with this object

* [LineItem.group](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.group)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### LineItemGroup Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-lineitemvariantoption"></a>


## Line​Item​Variant​Option

object

The line item's variant option.

### Fields

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the option.

* value

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the option.

***

### Map

#### Fields with this object

* [LineItem.variantOptions](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.variantOptions)

---



<a id="latest-objects-manualdiscountapplication"></a>


## Manual​Discount​Application

object

Captures the intentions of a discount that was manually created.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationAllocationMethod)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The method by which the discount's value is allocated to its entitled items.

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the application.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetSelection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the application.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  interface

***

### ManualDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-market"></a>


## Market

object

A market, which is a group of one or more regions targeted for international sales. A market allows configuration of a distinct, localized shopping experience for customers from a specific area of the world.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The short, human-readable unique identifier for the market.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* web​Presence

  [Market​Web​Presence](https://shopify.dev/docs/api/customer/latest/objects/MarketWebPresence)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The web presence of the market, defining its SEO strategy. This can be a different domain, subdomain, or subfolders of the primary domain. Each web presence comprises one or more language variants. If a market doesn't have its own web presence, an inherited web presence will be returned.

***

### Map

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Market Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-marketwebpresence"></a>


## Market​Web​Presence

object

The web presence of the market, defining its SEO strategy. This can be a different domain (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language variants. If a market does not have its own web presence, it is accessible on the shop’s primary domain via [country selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).

Note: while the domain/subfolders defined by a market’s web presence are not applicable to custom storefronts, which must manage their own domains and routing, the languages chosen here do govern [the languages available on the Storefront API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in this market.

### Fields

* domain

  [Domain](https://shopify.dev/docs/api/customer/latest/objects/Domain)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The domain of the web presence. This field will be null if `subfolderSuffix` isn't null.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique identifier.

* root​Urls

  [\[Market​Web​Presence​Root​Url!\]!](https://shopify.dev/docs/api/customer/latest/objects/MarketWebPresenceRootUrl)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of root URLs for each of the web presence’s locales.

* subfolder​Suffix

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null.

***

### Map

#### Fields with this object

* [Market.webPresence](https://shopify.dev/docs/api/customer/latest/objects/Market#field-Market.fields.webPresence)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### MarketWebPresence Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-marketwebpresencerooturl"></a>


## Market​Web​Presence​Root​Url

object

The URL for the homepage of the online store in the context of a particular market and a particular locale.

### Fields

* locale

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The locale in which the storefront loads.

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL of the homepage.

***

### Map

#### Fields with this object

* [MarketWebPresence.rootUrls](https://shopify.dev/docs/api/customer/latest/objects/MarketWebPresence#field-MarketWebPresence.fields.rootUrls)

---



<a id="latest-objects-mediaimage"></a>


## Media​Image

object

Represents a Shopify hosted image.

### Fields

* alt

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The image for the media.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/customer/latest/enums/MediaContentType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The media content type.

* preview​Image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The preview image for the media.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

***

### Interfaces

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

  interface

***

### MediaImage Implements

#### Implements

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

---



<a id="latest-objects-metafield"></a>


## Metafield

object

The custom metadata attached to a resource. Metafields can be sorted into namespaces and are comprised of keys, values, and value types.

### Fields

* compare​Digest

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The data stored in the resource, represented as a digest.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the metafield was created.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* json​Value

  [JSON!](https://shopify.dev/docs/api/customer/latest/scalars/JSON)

  non-null

  The data stored in the metafield in JSON format.

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The key name for a metafield.

* namespace

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The namespace for a metafield.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Returns a reference object if the metafield's type is a resource reference.

* references

  [Metafield​Reference​Connection](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of reference objects if the metafield's type is a resource reference list.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  ***

* type

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type name of the metafield. See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the metafield was updated.

* value

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of a metafield.

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  Deprecated

***

### Map

#### Fields with this object

* [Company.metafield](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.metafield)
* [Company.metafields](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.metafields)
* [CompanyLocation.metafield](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafield)
* [CompanyLocation.metafields](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)
* [Customer.metafield](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.metafield)
* [Customer.metafields](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.metafields)
* [HasMetafields.metafield](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields#fields-metafield)
* [HasMetafields.metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields#fields-metafields)
* [Order.metafield](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.metafield)
* [Order.metafields](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.metafields)
* [Shop.metafield](https://shopify.dev/docs/api/customer/latest/objects/Shop#field-Shop.fields.metafield)
* [Shop.metafields](https://shopify.dev/docs/api/customer/latest/objects/Shop#field-Shop.fields.metafields)

***

### Mutations

* [metafields​Set](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

### Metafield Mutations

#### Mutated by

* [metafields​Set](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet)

***

### Interfaces

* * [Has​Compare​Digest](https://shopify.dev/docs/api/customer/latest/interfaces/HasCompareDigest)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### Metafield Implements

#### Implements

* [Has​Compare​Digest](https://shopify.dev/docs/api/customer/latest/interfaces/HasCompareDigest)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-metafieldidentifier"></a>


## Metafield​Identifier

object

Identifies a metafield by its owner resource, namespace, and key.

### Fields

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The key of the metafield.

* namespace

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The namespace of the metafield.

* owner​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  GID of the owner resource that the metafield belongs to.

***

### Map

No referencing types

***

### Mutations

* [metafields​Delete](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsDelete)

  mutation

  Deletes multiple metafields in bulk.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

***

### MetafieldIdentifier Mutations

#### Mutated by

* [metafields​Delete](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsDelete)

---



<a id="latest-objects-metafieldsdeleteusererror"></a>


## Metafields​Delete​User​Error

object

An error that occurs during the execution of `MetafieldsDelete`.

### Fields

* code

  [Metafields​Delete​User​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/MetafieldsDeleteUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The index of the array element that's causing the error.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [metafields​Delete](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsDelete)

  mutation

  Deletes multiple metafields in bulk.

  * metafields

    [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput)

    required

    ### Arguments

    A list of identifiers specifying metafields to delete. At least one identifier must be specified.

  ***

***

### MetafieldsDeleteUserError Mutations

#### Mutated by

* [metafields​Delete](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsDelete)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### MetafieldsDeleteUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-metafieldssetusererror"></a>


## Metafields​Set​User​Error

object

An error that occurs during the execution of `MetafieldsSet`.

### Fields

* code

  [Metafields​Set​User​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/MetafieldsSetUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The index of the array element that's causing the error.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [metafields​Set](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet)

  mutation

  Sets metafield values. Metafield values will be set regardless if they were previously created or not.

  Allows a maximum of 25 metafields to be set at a time.

  This operation is atomic, meaning no changes are persisted if an error is encountered.

  As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

  * metafields

    [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput)

    required

    ### Arguments

    The list of metafield values to set. Maximum of 25.

  ***

***

### MetafieldsSetUserError Mutations

#### Mutated by

* [metafields​Set](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### MetafieldsSetUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-metaobject"></a>


## Metaobject

object

An instance of a user-defined model based on a MetaobjectDefinition.

### Fields

* field

  [Metaobject​Field](https://shopify.dev/docs/api/customer/latest/objects/MetaobjectField)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Accesses a field of the object by key.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    The key of the field.

  ***

* fields

  [\[Metaobject​Field!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetaobjectField)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  All object fields with defined values. Omitted object keys can be assumed null, and no guarantees are made about field order.

* handle

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unique handle of the metaobject. Useful as a custom ID.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* type

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of the metaobject.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the metaobject was last updated.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Metaobject Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-metaobjectfield"></a>


## Metaobject​Field

object

Provides the value of a Metaobject field.

### Fields

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The field key.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A referenced object if the field type is a resource reference.

* type

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type name of the field. See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).

* value

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The field value.

***

### Map

#### Fields with this object

* [Metaobject.field](https://shopify.dev/docs/api/customer/latest/objects/Metaobject#field-Metaobject.fields.field)
* [Metaobject.fields](https://shopify.dev/docs/api/customer/latest/objects/Metaobject#field-Metaobject.fields.fields)

---



<a id="latest-objects-model3d"></a>


## Model3d

object

Represents a Shopify hosted 3D model.

### Fields

* alt

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/customer/latest/enums/MediaContentType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The media content type.

* preview​Image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The preview image for the media.

* sources

  [\[Model3d​Source!\]!](https://shopify.dev/docs/api/customer/latest/objects/Model3dSource)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The sources for a 3d model.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

***

### Interfaces

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

  interface

***

### Model3d Implements

#### Implements

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

---



<a id="latest-objects-model3dsource"></a>


## Model3d​Source

object

Represents a source for a Shopify hosted 3d model.

### Fields

* filesize

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The filesize of the 3d model.

* format

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The format of the 3d model.

* mime​Type

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The MIME type of the 3d model.

* url

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL of the 3d model.

***

### Map

#### Fields with this object

* [Model3d.sources](https://shopify.dev/docs/api/customer/latest/objects/Model3d#field-Model3d.fields.sources)

---



<a id="latest-objects-moneybag"></a>


## Money​Bag

object

A collection of monetary values in their respective currencies. Used throughout the API for multi-currency pricing and transactions, when an amount in the shop's currency is converted to the customer's currency of choice. The `presentmentMoney` field contains the amount in the customer's selected currency. The `shopMoney` field contains the equivalent in the shop's base currency.

### Fields

* presentment​Money

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Amount in presentment currency.

* shop​Money

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Amount in shop currency.

***

### Map

#### Fields with this object

* [CalculatedReturnLineItem.subtotalSet](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.subtotalSet)
* [CalculatedReturnLineItem.totalTaxSet](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.totalTaxSet)
* [OrderTransaction.transactionAmount](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.transactionAmount)
* [ReturnFee.amountSet](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee#fields-amountSet)
* [ReturnFinancialSummary.restockingFeeSubtotalSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.restockingFeeSubtotalSet)
* [ReturnFinancialSummary.returnShippingFeeSubtotalSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.returnShippingFeeSubtotalSet)
* [ReturnFinancialSummary.returnSubtotalSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.returnSubtotalSet)
* [ReturnFinancialSummary.returnSubtotalWithCartDiscountSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.returnSubtotalWithCartDiscountSet)
* [ReturnFinancialSummary.returnTotalSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.returnTotalSet)
* [ReturnFinancialSummary.returnTotalTaxSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnFinancialSummary#field-ReturnFinancialSummary.fields.returnTotalTaxSet)
* [ReturnRestockingFee.amountSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnRestockingFee#field-ReturnRestockingFee.fields.amountSet)
* [ReturnShippingFee.amountSet](https://shopify.dev/docs/api/customer/latest/objects/ReturnShippingFee#field-ReturnShippingFee.fields.amountSet)

---



<a id="latest-objects-moneyv2"></a>


## Money​V2

object

A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

### Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/customer/latest/scalars/Decimal)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A monetary value in decimal format, allowing for precise representation of cents or fractional currency. For example, 12.99.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/customer/latest/enums/CurrencyCode)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The three-letter currency code that represents a world currency used in a store. Currency codes include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, and non-standard codes. For example, USD.

***

### Map

#### Fields with this object

* [AdditionalFeeSale.totalAmount](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalAmount)
* [AdditionalFeeSale.totalDiscountAmountAfterTaxes](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalDiscountAmountAfterTaxes)
* [AdditionalFeeSale.totalDiscountAmountBeforeTaxes](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalDiscountAmountBeforeTaxes)
* [AdditionalFeeSale.totalTaxAmount](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.totalTaxAmount)
* [AdjustmentSale.totalAmount](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalAmount)
* [AdjustmentSale.totalDiscountAmountAfterTaxes](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalDiscountAmountAfterTaxes)
* [AdjustmentSale.totalDiscountAmountBeforeTaxes](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalDiscountAmountBeforeTaxes)
* [AdjustmentSale.totalTaxAmount](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.totalTaxAmount)
* [AppliedGiftCard.amountUsed](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.amountUsed)
* [AppliedGiftCard.balance](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.balance)
* [AppliedGiftCard.presentmentAmountUsed](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.presentmentAmountUsed)
* [Checkout.lineItemsSubtotalPrice](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItemsSubtotalPrice)
* [Checkout.paymentDue](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.paymentDue)
* [Checkout.subtotalPrice](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.subtotalPrice)
* [Checkout.totalDuties](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.totalDuties)
* [Checkout.totalPrice](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.totalPrice)
* [Checkout.totalTax](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.totalTax)
* [CheckoutLineItem.price](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.price)
* [CheckoutLineItem.unitPrice](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.unitPrice)
* [DiscountAllocation.allocatedAmount](https://shopify.dev/docs/api/customer/latest/objects/DiscountAllocation#field-DiscountAllocation.fields.allocatedAmount)
* [DraftOrder.subtotalPrice](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.subtotalPrice)
* [DraftOrder.totalLineItemsPrice](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.totalLineItemsPrice)
* [DraftOrder.totalPrice](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.totalPrice)
* [DraftOrder.totalShippingPrice](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.totalShippingPrice)
* [DraftOrder.totalTax](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.totalTax)
* [DraftOrderAppliedDiscount.discountValue](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderAppliedDiscount#field-DraftOrderAppliedDiscount.fields.discountValue)
* [DraftOrderDiscountInformation.totalDiscounts](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderDiscountInformation#field-DraftOrderDiscountInformation.fields.totalDiscounts)
* [DraftOrderLineItem.discountedTotal](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.discountedTotal)
* [DraftOrderLineItem.originalTotal](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.originalTotal)
* [DraftOrderLineItem.originalUnitPrice](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.originalUnitPrice)

#### Possible type in

* [Pricing​Value](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

---



<a id="latest-objects-mutation"></a>


## Mutation

object

This is the schema's entry point for all mutation operations.

### Map

No referencing types

---



<a id="latest-objects-nonreturnablelineitem"></a>


## Non​Returnable​Line​Item

object

A line item with at least one unit that is not eligible for return.

### Fields

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The line item associated with the non-returnable units.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The number of units that aren't eligible for return.

* quantity​Details

  [\[Non​Returnable​Quantity​Detail!\]!](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableQuantityDetail)

  non-null

  Details about non-returnable quantities, including the number of units that can't be returned and the reasons they can't be returned, grouped by reason (e.g., already returned, not yet fulfilled).

***

### Map

#### Fields and connections with this object

* [NonReturnableLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection#returns-nodes)
* [NonReturnableLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItemEdge#field-NonReturnableLineItemEdge.fields.node)
* [OrderReturnInformation.nonReturnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.nonReturnableLineItems)

---



<a id="latest-objects-nonreturnablequantitydetail"></a>


## Non​Returnable​Quantity​Detail

object

Details about non-returnable quantities, including the number of units that can't be returned and the reasons for non-returnability, grouped by reason (e.g., already returned, not yet fulfilled).

### Fields

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The number of units that aren't eligible for return.

* reason​Code

  [Non​Returnable​Reason!](https://shopify.dev/docs/api/customer/latest/enums/NonReturnableReason)

  non-null

  The reason why this quantity isn't eligible for return.

***

### Map

#### Fields with this object

* [NonReturnableLineItem.quantityDetails](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItem#field-NonReturnableLineItem.fields.quantityDetails)

---



<a id="latest-objects-order"></a>


## Order

object

A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Fields

* agreements

  [Sales​Agreement​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SalesAgreementConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of sales agreements associated with the order.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* billing​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The mailing address provided by the customer. Not all orders have a mailing address.

* cancelled​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the order was canceled. Returns `null` if the order wasn't canceled.

* cancel​Reason

  [Order​Cancel​Reason](https://shopify.dev/docs/api/customer/latest/enums/OrderCancelReason)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The reason for the cancellation of the order. Returns `null` if the order wasn't canceled.

* confirmation​Number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A randomly generated alpha-numeric identifier for the order that may be shown to the customer instead of the sequential order name. For example, "XPAV284CT", "R50KELTJP" or "35PKUN0UJ". This value isn't guaranteed to be unique.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the order was created.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/customer/latest/enums/CurrencyCode)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The shop currency when the order was placed.

* customer

  [Customer](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The customer who placed the order.

* customer​Locale

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The locale code representing the region where this specific order was placed.

* discount​Applications

  [Discount​Application​Connection!](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discounts that have been applied to the order.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The draft order associated with the order.

* edited

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the order has been edited or not.

* email

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The email address of the customer.

* financial​Status

  [Order​Financial​Status](https://shopify.dev/docs/api/customer/latest/enums/OrderFinancialStatus)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The financial status of the order.

* fulfillments

  [Fulfillment​Connection!](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The fulfillments associated with the order.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Fulfillment​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/FulfillmentSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * id

        id

      * order\_id

        id

      - Filter by `id` range.

      - Example:
        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

    * shipment\_status

      string

    * status

      string

  ***

* fulfillment​Status

  [Order​Fulfillment​Status!](https://shopify.dev/docs/api/customer/latest/enums/OrderFulfillmentStatus)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The fulfillment status of the order.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* line​Items

  [Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of line items of the order.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* location​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the fulfillment location assigned at the time of order creation.

* metafield

  [Metafield](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A metafield found by namespace and key.

  * namespace

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    A container for a set of metafields.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The metafields associated with the resource matching the supplied list of namespaces and keys.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

  ***

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The identifier for the order that appears on the order. For example, *#1000* or \_Store1001.

* note

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The order's notes.

* number

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique numeric identifier for the order, used by both the shop owner and customer.

* payment​Information

  [Order​Payment​Information](https://shopify.dev/docs/api/customer/latest/objects/OrderPaymentInformation)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The payment information for the order.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The phone number of the customer for SMS notifications.

* po​Number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The purchase order number of the order.

* processed​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the order was processed. This value can be set to dates in the past when importing from other systems. If no value is provided, it will be auto-generated based on current date and time.

* purchasing​Entity

  [Purchasing​Entity](https://shopify.dev/docs/api/customer/latest/unions/PurchasingEntity)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The purchasing entity for the order.

* refunds

  [\[Refund!\]!](https://shopify.dev/docs/api/customer/latest/objects/Refund)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of refunds associated with the order.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the order requires shipping.

* return​Information

  [Order​Return​Information!](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The return information for the order.

* returns

  [Return​Connection!](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of returns for the order with pagination.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Return​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/ReturnSortKeys)

    Default:ID

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* shipping​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The mailing address to which the order items are shipped.

* shipping​Discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/customer/latest/objects/DiscountAllocation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The discounts that have been allocated onto the shipping line by discount applications.

* shipping​Line

  [Shipping​Line](https://shopify.dev/docs/api/customer/latest/objects/ShippingLine)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A summary of all shipping costs on the order.

* status​Page​Url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unique URL for the status page of the order.

* subscription​Contracts

  [Subscription​Contract​Connection](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection)

  The customer Subscription Contracts associated with the order.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Contracts​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractsSortKeys)

    Default:CREATED\_AT

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

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

* subtotal

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The price of the order before duties, shipping, and taxes.

* total​Duties

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount of duties after returns.

* total​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount of the order (including taxes and discounts) minus the amounts for line items that have been returned.

* total​Refunded

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount refunded.

* total​Shipping

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total cost of shipping.

* total​Tax

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total cost of taxes.

* total​Tip

  [Money​V2](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total value of tips.

* transactions

  [\[Order​Transaction!\]!](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of transactions associated with the order.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the order was last updated.

***

### Map

#### Fields and connections with this object

* [Company.orders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders)
* [CompanyContact.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders)
* [CompanyLocation.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)
* [Customer.orders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders)
* [DraftOrder.order](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.order)
* [OrderAgreement.order](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.order)
* [OrderConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection#returns-nodes)
* [OrderEdge.node](https://shopify.dev/docs/api/customer/latest/objects/OrderEdge#field-OrderEdge.fields.node)
* [OrderTransaction.order](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.order)
* [SubscriptionContract.orders](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)
* [SubscriptionContract.originOrder](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.originOrder)
* [SubscriptionContractBase.orders](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-orders)

***

### Queries

* [order](https://shopify.dev/docs/api/customer/latest/queries/order)

  query

  Returns an Order resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Order to return.

  ***

***

### Order Queries

#### Queried by

* [order](https://shopify.dev/docs/api/customer/latest/queries/order)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### Order Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-orderagreement"></a>


## Order​Agreement

object

An agreement associated with an order placement.

### Fields

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the agreement occurred.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* order

  [Order!](https://shopify.dev/docs/api/customer/latest/objects/Order)

  non-null

  The order associated with the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/OrderActionType)

  non-null

  The reason the agreement was created.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

    interface

***

### OrderAgreement Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

---



<a id="latest-objects-ordereditagreement"></a>


## Order​Edit​Agreement

object

An agreement related to an edit of the order.

### Fields

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the agreement occurred.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/OrderActionType)

  non-null

  The reason the agreement was created.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

    interface

***

### OrderEditAgreement Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

---



<a id="latest-objects-ordernonreturnablesummary"></a>


## Order​Non​Returnable​Summary

object

The summary of reasons why the order is ineligible for return.

### Fields

* non​Returnable​Reasons

  [\[Non​Returnable​Reason!\]!](https://shopify.dev/docs/api/customer/latest/enums/NonReturnableReason)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Distinct reasons why line items in the order are ineligible for return.

***

### Map

#### Fields with this object

* [OrderReturnInformation.nonReturnableSummary](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.nonReturnableSummary)

---



<a id="latest-objects-orderpaymentinformation"></a>


## Order​Payment​Information

object

The summary of payment status information for the order.

### Fields

* payment​Collection​Url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL for collecting a payment on the order.

* payment​Status

  [Order​Payment​Status](https://shopify.dev/docs/api/customer/latest/enums/OrderPaymentStatus)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The financial status of the order.

* payment​Terms

  [Payment​Terms](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The payment terms linked with the order.

* total​Outstanding​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount that's yet to be transacted for the order.

* total​Paid​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount that has been paid for the order before any refund.

***

### Map

#### Fields with this object

* [Order.paymentInformation](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.paymentInformation)

---



<a id="latest-objects-orderreturninformation"></a>


## Order​Return​Information

object

The return information for a specific order.

### Fields

* has​Restocking​Fee

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the order has one or more restocking fees associated with its returnable line items.

* has​Return​Shipping​Fee

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the order has one or more return shipping fees associated with its returnable line items.

* non​Returnable​Line​Items

  [Non​Returnable​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection)

  non-null

  The line items that are not eligible for return.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* non​Returnable​Summary

  [Order​Non​Returnable​Summary](https://shopify.dev/docs/api/customer/latest/objects/OrderNonReturnableSummary)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The summary of reasons why the order is ineligible for return.

* returnable​Line​Items

  [Returnable​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection)

  non-null

  The line items that are eligible for return.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* return​Fees

  [\[Return​Fee!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The subtotal of all fees associated with return processing that have been applied to the order (e.g. return shipping fees or restocking fees), aggregated by fee type.

* return​Shipping​Method​Note

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  Note for the buyer about the return shipping method. Possible values are: "merchant\_provided\_label", "no\_shipping\_required", or a localized message that the buyer is responsible for return shipping.

* return​Shipping​Methods

  [\[Return​Shipping​Method!\]!](https://shopify.dev/docs/api/customer/latest/enums/ReturnShippingMethod)

  non-null

  A set of return shipping methods associated with the order's returnable line items. Return shipping methods are defined by the return rules at the time the order is placed.

***

### Map

#### Fields with this object

* [Order.returnInformation](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returnInformation)

---



<a id="latest-objects-ordertransaction"></a>


## Order​Transaction

object

A payment transaction within an order context.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the transaction was created.

* gift​Card​Details

  [Gift​Card​Details](https://shopify.dev/docs/api/customer/latest/objects/GiftCardDetails)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The gift card details for the transaction.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* kind

  [Order​Transaction​Kind](https://shopify.dev/docs/api/customer/latest/enums/OrderTransactionKind)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The kind of the transaction.

* order

  [Order](https://shopify.dev/docs/api/customer/latest/objects/Order)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The associated order for the transaction.

* payment​Details

  [Payment​Details](https://shopify.dev/docs/api/customer/latest/unions/PaymentDetails)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The payment details for the transaction.

* payment​Icon

  [Payment​Icon​Image](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The payment icon to display for the transaction.

* processed​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the transaction was processed.

* status

  [Order​Transaction​Status](https://shopify.dev/docs/api/customer/latest/enums/OrderTransactionStatus)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The status of the transaction.

* transaction​Amount

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The amount and currency of the transaction in shop and presentment currencies.

* transaction​Parent​Id

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ID of the parent transaction.

* type

  [Order​Transaction​Type!](https://shopify.dev/docs/api/customer/latest/enums/OrderTransactionType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of the transaction.

* type​Details

  [Transaction​Type​Details](https://shopify.dev/docs/api/customer/latest/objects/TransactionTypeDetails)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The details of the transaction type.

***

### Map

#### Fields with this object

* [Order.transactions](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.transactions)

#### Possible type in

* [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Payment​Icon](https://shopify.dev/docs/api/customer/latest/interfaces/PaymentIcon)

    interface

***

### OrderTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Payment​Icon](https://shopify.dev/docs/api/customer/latest/interfaces/PaymentIcon)

---



<a id="latest-objects-pageinfo"></a>


## Page​Info

object

Returns information about pagination in a connection, in accordance with the [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).

### Fields

* end​Cursor

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The cursor corresponding to the last node in edges.

* has​Next​Page

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether there are more pages to fetch following the current page.

* has​Previous​Page

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether there are any pages prior to the current page.

* start​Cursor

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The cursor corresponding to the first node in edges.

***

### Map

#### Connections with this object

* [CalculatedReturnLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection#returns-pageInfo)
* [CheckoutLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection#returns-pageInfo)
* [CompanyContactConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection#returns-pageInfo)
* [CompanyContactRoleAssignmentConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection#returns-pageInfo)
* [CompanyLocationConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection#returns-pageInfo)
* [CustomerAddressConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection#returns-pageInfo)
* [DiscountApplicationConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection#returns-pageInfo)
* [DraftOrderConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection#returns-pageInfo)
* [DraftOrderLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection#returns-pageInfo)
* [ExchangeLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection#returns-pageInfo)
* [FulfillmentConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection#returns-pageInfo)
* [FulfillmentEventConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection#returns-pageInfo)
* [FulfillmentLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)
* [LineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection#returns-pageInfo)
* [MetafieldReferenceConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection#returns-pageInfo)
* [NonReturnableLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection#returns-pageInfo)
* [OrderConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection#returns-pageInfo)
* [PaymentScheduleConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection#returns-pageInfo)
* [ReturnConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection#returns-pageInfo)
* [ReturnLineItemTypeConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnLineItemTypeConnection#returns-pageInfo)
* [ReturnReasonDefinitionConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection#returns-pageInfo)
* [ReturnableLineItemConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection#returns-pageInfo)
* [ReverseDeliveryConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection#returns-pageInfo)
* [SaleConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection#returns-pageInfo)
* [SalesAgreementConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SalesAgreementConnection#returns-pageInfo)
* [StoreCreditAccountConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection#returns-pageInfo)
* [StoreCreditAccountTransactionConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountTransactionConnection#returns-pageInfo)
* [SubscriptionBillingCycleConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection#returns-pageInfo)
* [SubscriptionContractConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection#returns-pageInfo)
* [SubscriptionDiscountConnection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection#returns-pageInfo)

---



<a id="latest-objects-paymenticonimage"></a>


## Payment​Icon​Image

object

Represents an image resource.

### Fields

* alt​Text

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to share the nature or contents of an image.

* height

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique non-nullable ID for the image.

* thumbhash

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ThumbHash of the image.

  Useful to display placeholder images while the original image is loading.

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The location of the image as a URL.

  If no transform options are specified, then the original image will be preserved including any pre-applied transforms.

  All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.

  If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).

  * transform

    [Image​Transform​Input](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput)

    ### Arguments

    A set of options to transform the original image.

  ***

* width

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

#### Deprecated fields

* original​Src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

* src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

* transformed​Src

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  * max​Width

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    Image width in pixels between 1 and 5760.

  * max​Height

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    Image height in pixels between 1 and 5760.

  * crop

    [Crop​Region](https://shopify.dev/docs/api/customer/latest/enums/CropRegion)

    Crops the image according to the specified region.

  * scale

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    Default:1

    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.

  * preferred​Content​Type

    [Image​Content​Type](https://shopify.dev/docs/api/customer/latest/enums/ImageContentType)

    Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported).

  ***

***

### Map

#### Fields with this object

* [OrderTransaction.paymentIcon](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentIcon)
* [PaymentIcon.paymentIcon](https://shopify.dev/docs/api/customer/latest/interfaces/PaymentIcon#fields-paymentIcon)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### PaymentIconImage Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-paymentschedule"></a>


## Payment​Schedule

object

A single payment schedule defined in the payment terms.

### Fields

* completed

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the payment has been completed.

* completed​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The date and time when the payment schedule was paid or fulfilled.

* due​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the payment schedule is due.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* total​Balance

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Remaining balance to be paid or authorized by the customer for this payment schedule.

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-nullDeprecated[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

***

### Map

#### Fields and connections with this object

* [PaymentScheduleConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection#returns-nodes)
* [PaymentScheduleEdge.node](https://shopify.dev/docs/api/customer/latest/objects/PaymentScheduleEdge#field-PaymentScheduleEdge.fields.node)
* [PaymentTerms.paymentSchedules](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### PaymentSchedule Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-paymentterms"></a>


## Payment​Terms

object

The payment terms associated with an order or draft order.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* next​Due​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The next due date if this is the NET or FIXED type of payment terms.

* overdue

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Whether the payment terms have overdue payment schedules.

* payment​Schedules

  [Payment​Schedule​Connection!](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of schedules associated with the payment terms.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* payment​Terms​Name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the payment terms template that was used to create the payment terms.

***

### Map

#### Fields with this object

* [OrderPaymentInformation.paymentTerms](https://shopify.dev/docs/api/customer/latest/objects/OrderPaymentInformation#field-OrderPaymentInformation.fields.paymentTerms)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### PaymentTerms Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-pickupaddress"></a>


## Pickup​Address

object

The address of a pickup location.

### Fields

* address1

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The street address for the pickup location.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  Any additional address information for the pickup location.

* city

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The city of the pickup location.

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/customer/latest/enums/CountryCode)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The country code for the pickup location.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The phone number for the pickup location.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The ZIP code for the pickup location.

* zone​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The province code for the pickup location.

***

### Map

#### Fields with this object

* [SubscriptionDeliveryMethodPickupOption.pickupAddress](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodPickupOption#field-SubscriptionDeliveryMethodPickupOption.fields.pickupAddress)
* [SubscriptionPickupOption.pickupAddress](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionPickupOption#field-SubscriptionPickupOption.fields.pickupAddress)

---



<a id="latest-objects-pricingpercentagevalue"></a>


## Pricing​Percentage​Value

object

Represents the value of the percentage pricing object.

### Fields

* percentage

  [Float!](https://shopify.dev/docs/api/customer/latest/scalars/Float)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The percentage value of the object.

***

### Map

#### Possible type in

* [Pricing​Value](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

---



<a id="latest-objects-productsale"></a>


## Product​Sale

object

A sale associated with a product.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The line item for the associated sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### ProductSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-purchasingcompany"></a>


## Purchasing​Company

object

The information of the purchasing company for an order or draft order.

### Fields

* company

  [Company!](https://shopify.dev/docs/api/customer/latest/objects/Company)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The company associated with the order or draft order.

* contact

  [Company​Contact](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The company contact associated with the order or draft order.

* location

  [Company​Location!](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The company location associated with the order or draft order.

***

### Map

#### Possible type in

* [Purchasing​Entity](https://shopify.dev/docs/api/customer/latest/unions/PurchasingEntity)

---



<a id="latest-objects-queryroot"></a>


## Query​Root

object

This acts as the public, top-level API from which all queries start.

### Map

No referencing types

---



<a id="latest-objects-refund"></a>


## Refund

object

The record of refunds issued to a customer.

### Fields

* created​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the refund was created.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* return​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the return, if the refund was issued from a return.

* total​Refunded

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total amount refunded across all transactions, in presentment currencies.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the refund was last updated.

***

### Map

#### Fields with this object

* [Order.refunds](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.refunds)
* [RefundAgreement.refund](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.refund)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Refund Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-refundagreement"></a>


## Refund​Agreement

object

An agreement for refunding all or a portion of the order between the merchant and the customer.

### Fields

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the agreement occurred.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/OrderActionType)

  non-null

  The reason the agreement was created.

* refund

  [Refund!](https://shopify.dev/docs/api/customer/latest/objects/Refund)

  non-null

  The refund that's associated with the agreement.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

    interface

***

### RefundAgreement Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

---



<a id="latest-objects-resourcepermission"></a>


## Resource​Permission

object

Represents permissions on resources.

### Fields

* permitted​Operations

  [\[Permitted​Operation!\]!](https://shopify.dev/docs/api/customer/latest/enums/PermittedOperation)

  non-null

  The operations permitted on the resource.

* resource

  [Resource​Type!](https://shopify.dev/docs/api/customer/latest/enums/ResourceType)

  non-null

  The name of the resource.

***

### Map

#### Fields with this object

* [CompanyContactRole.resourcePermissions](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.resourcePermissions)

---



<a id="latest-objects-return"></a>


## Return

object

A product return.

### Fields

* closed​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date when the return was closed.

* created​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The date when the return was created.

* exchange​Line​Items

  [Exchange​Line​Item​Connection!](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The exchange line items attached to the return.

  * include​Removed​Items

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Include exchange line items that have been removed from the order by an order edit, return, etc. Items that have been removed have a zero ([LineItem.currentQuantity](https://shopify.dev/docs/api/admin-graphql/unstable/objects/LineItem#field-lineitem-currentquantity)).

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name assigned to the return.

* return​Line​Items

  [Return​Line​Item​Type​Connection!](https://shopify.dev/docs/api/customer/latest/connections/ReturnLineItemTypeConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The line items associated with the return.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* return​Line​Items​Count

  [Count](https://shopify.dev/docs/api/customer/latest/objects/Count)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The number of line items associated with the return.

* reverse​Deliveries

  [Reverse​Delivery​Connection!](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The list of reverse deliveries associated with the return.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* status

  [Return​Status!](https://shopify.dev/docs/api/customer/latest/enums/ReturnStatus)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The current status of the `Return`.

* updated​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The date when the return was last updated.

***

### Map

#### Fields and connections with this object

* [Order.returns](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returns)
* [ReturnAgreement.return](https://shopify.dev/docs/api/customer/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.return)
* [ReturnConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection#returns-nodes)
* [ReturnEdge.node](https://shopify.dev/docs/api/customer/latest/objects/ReturnEdge#field-ReturnEdge.fields.node)

***

### Queries

* [return](https://shopify.dev/docs/api/customer/latest/queries/return)

  query

  Returns a Return resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

  * id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Return.

  ***

***

### Return Queries

#### Queried by

* [return](https://shopify.dev/docs/api/customer/latest/queries/return)

***

### Mutations

* [order​Request​Return](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn)

  mutation

  Request a new return on behalf of a customer.

  * order​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order for which this return is being requested.

  * requested​Line​Items

    [\[Requested​Line​Item​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput)

    required

    The line items that are requested to be returned.

  ***

***

### Return Mutations

#### Mutated by

* [order​Request​Return](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### Return Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-returnagreement"></a>


## Return​Agreement

object

An agreement between the merchant and customer for a return.

### Fields

* happened​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the agreement occurred.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID for the agreement.

* reason

  [Order​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/OrderActionType)

  non-null

  The reason the agreement was created.

* return

  [Return!](https://shopify.dev/docs/api/customer/latest/objects/Return)

  non-null

  The return associated with the agreement.

* sales

  [Sale​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection)

  non-null

  The sales associated with the agreement.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

    interface

***

### ReturnAgreement Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sales​Agreement](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

---



<a id="latest-objects-returnfinancialsummary"></a>


## Return​Financial​Summary

object

The financial breakdown of the return.

### Fields

* restocking​Fee​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The subtotal of all return line items restocking fees.

* return​Shipping​Fee​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The subtotal of all return line items shipping fees.

* return​Subtotal​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The subtotal of all return line items.

* return​Subtotal​With​Cart​Discount​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The subtotal of all return line items with order level discounts applied.

* return​Total​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The total sum of all return line items, including return line item subtotals, fees and taxes.

* return​Total​Tax​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null

  The total tax sum of all return line items.

***

### Map

#### Fields with this object

* [CalculatedReturn.financialSummary](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.financialSummary)

---



<a id="latest-objects-returnlineitem"></a>


## Return​Line​Item

object

A line item that has been returned.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The related line item that has been returned.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The line item quantity that has been returned.

* return​Reason

  [Return​Reason!](https://shopify.dev/docs/api/customer/latest/enums/ReturnReason)

  non-null

  The reason the line item quantity was returned.

* return​Reason​Definition

  [Return​Reason​Definition](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinition)

  The standardized reason for why the item is being returned.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Return​Line​Item​Type](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType)

    interface

***

### ReturnLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Return​Line​Item​Type](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType)

---



<a id="latest-objects-returnreasondefinition"></a>


## Return​Reason​Definition

object

A standardized reason for returning an item.

* Shopify offers an expanded library of return reasons available to all merchants
* For each product, Shopify suggests a curated subset of reasons based on the product's category.

### Fields

* deleted

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the return reason has been removed from taxonomy.

  Deleted reasons should not be presented to customers when creating new returns, but may still appear on existing returns that were created before the reason was deleted. This field enables graceful deprecation of return reasons without breaking historical data.

* handle

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  A unique, human-readable, stable identifier for the return reason.

  Example values include "arrived-late", "comfort", "too-tight", "color-too-bright", and "quality". The handle remains consistent across API versions and localizations, making it suitable for programmatic use.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The localized, user-facing name of the return reason.

  This field returns the reason name in the requested locale, automatically falling back to English if no translation is available. Use this field when displaying return reasons to customers.

***

### Map

#### Fields and connections with this object

* [LineItem.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)
* [ReturnLineItem.returnReasonDefinition](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.returnReasonDefinition)
* [ReturnLineItemType.returnReasonDefinition](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType#fields-returnReasonDefinition)
* [ReturnReasonDefinitionConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection#returns-nodes)
* [ReturnReasonDefinitionEdge.node](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinitionEdge#field-ReturnReasonDefinitionEdge.fields.node)
* [UnverifiedReturnLineItem.returnReasonDefinition](https://shopify.dev/docs/api/customer/latest/objects/UnverifiedReturnLineItem#field-UnverifiedReturnLineItem.fields.returnReasonDefinition)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### ReturnReasonDefinition Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-returnrestockingfee"></a>


## Return​Restocking​Fee

object

The restocking fee incurred during the return process.

### Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total monetary value of the fee in shop and presentment currencies.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  Human-readable name of the fee.

***

### Map

No referencing types

***

### Interfaces

* [Return​Fee](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee)

  interface

***

### ReturnRestockingFee Implements

#### Implements

* [Return​Fee](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee)

---



<a id="latest-objects-returnshippingfee"></a>


## Return​Shipping​Fee

object

The shipping fee incurred during the return process.

### Fields

* amount​Set

  [Money​Bag!](https://shopify.dev/docs/api/customer/latest/objects/MoneyBag)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The total monetary value of the fee in shop and presentment currencies.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  Human-readable name of the fee.

***

### Map

No referencing types

***

### Interfaces

* [Return​Fee](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee)

  interface

***

### ReturnShippingFee Implements

#### Implements

* [Return​Fee](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnFee)

---



<a id="latest-objects-returnusererror"></a>


## Return​User​Error

object

The errors that occur during the execution of a return mutation.

### Fields

* code

  [Return​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/ReturnErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [order​Request​Return](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn)

  mutation

  Request a new return on behalf of a customer.

  * order​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order for which this return is being requested.

  * requested​Line​Items

    [\[Requested​Line​Item​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput)

    required

    The line items that are requested to be returned.

  ***

***

### ReturnUserError Mutations

#### Mutated by

* [order​Request​Return](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### ReturnUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-returnablelineitem"></a>


## Returnable​Line​Item

object

A line item with at least one unit that is eligible for return.

### Fields

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The related line item.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of units that can be returned.

***

### Map

#### Fields and connections with this object

* [OrderReturnInformation.returnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.returnableLineItems)
* [ReturnableLineItemConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection#returns-nodes)
* [ReturnableLineItemEdge.node](https://shopify.dev/docs/api/customer/latest/objects/ReturnableLineItemEdge#field-ReturnableLineItemEdge.fields.node)

---



<a id="latest-objects-reversedelivery"></a>


## Reverse​Delivery

object

A reverse delivery represents a package being sent back by a buyer to a merchant post-fulfillment. This could occur when a buyer requests a return and the merchant provides a shipping label. The reverse delivery includes the context of the items being returned, the method of return (for example, a shipping label), and the current status of the delivery (tracking information).

### Fields

* customer​Generated​Label

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the label was generated by the customer.

* deliverable

  [Reverse​Delivery​Deliverable](https://shopify.dev/docs/api/customer/latest/unions/ReverseDeliveryDeliverable)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The deliverable linked with the reverse delivery.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

***

### Map

#### Fields and connections with this object

* [Return.reverseDeliveries](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.reverseDeliveries)
* [ReverseDeliveryConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection#returns-nodes)
* [ReverseDeliveryEdge.node](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryEdge#field-ReverseDeliveryEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### ReverseDelivery Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-reversedeliverylabel"></a>


## Reverse​Delivery​Label

object

The return label information for a reverse delivery.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The date and time when the reverse delivery label was created.

* public​File​Url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A publicly accessible link for downloading the label image.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the reverse delivery label was last updated.

***

### Map

#### Fields with this object

* [ReverseDeliveryShippingDeliverable.label](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryShippingDeliverable#field-ReverseDeliveryShippingDeliverable.fields.label)

---



<a id="latest-objects-reversedeliveryshippingdeliverable"></a>


## Reverse​Delivery​Shipping​Deliverable

object

A set of shipping deliverables for reverse delivery.

### Fields

* label

  [Reverse​Delivery​Label](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryLabel)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The return label that's attached to the reverse delivery.

* tracking

  [Reverse​Delivery​Tracking](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryTracking)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The tracking information for the reverse delivery.

***

### Map

#### Possible type in

* [Reverse​Delivery​Deliverable](https://shopify.dev/docs/api/customer/latest/unions/ReverseDeliveryDeliverable)

---



<a id="latest-objects-reversedeliverytracking"></a>


## Reverse​Delivery​Tracking

object

The tracking information for a reverse delivery.

### Fields

* carrier​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the delivery service provider, in a format that's suitable for display purposes.

* tracking​Number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The identifier that the courier uses to track the shipment.

* tracking​Url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL used to track the shipment.

***

### Map

#### Fields with this object

* [ReverseDeliveryShippingDeliverable.tracking](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryShippingDeliverable#field-ReverseDeliveryShippingDeliverable.fields.tracking)

---



<a id="latest-objects-saletax"></a>


## Sale​Tax

object

The tax allocated to a sale from a single tax line.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The portion of the total tax amount on the related sale that's from the associated tax line.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID for the sale tax.

* tax​Line

  [Tax​Line!](https://shopify.dev/docs/api/customer/latest/objects/TaxLine)

  non-null

  The tax line associated with the sale.

***

### Map

#### Fields with this object

* [AdditionalFeeSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.taxes)
* [AdjustmentSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.taxes)
* [DutySale.taxes](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.taxes)
* [FeeSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.taxes)
* [GiftCardSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.taxes)
* [ProductSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.taxes)
* [Sale.taxes](https://shopify.dev/docs/api/customer/latest/interfaces/Sale#fields-taxes)
* [ShippingLineSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.taxes)
* [TipSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.taxes)
* [UnknownSale.taxes](https://shopify.dev/docs/api/customer/latest/objects/UnknownSale#field-UnknownSale.fields.taxes)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### SaleTax Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-scriptdiscountapplication"></a>


## Script​Discount​Application

object

Captures the intentions of a discount that was created by a Shopify Script.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationAllocationMethod)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The method by which the discount's value is allocated to its entitled items.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetSelection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountApplicationTargetType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the application as defined by the Script.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  interface

***

### ScriptDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-shippingline"></a>


## Shipping​Line

object

Represents the shipping details that the customer chose for their order.

### Fields

* handle

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A unique identifier for the shipping rate.

* original​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The pre-tax shipping price without any discounts applied.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The title of the shipping line.

***

### Map

#### Fields with this object

* [Order.shippingLine](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.shippingLine)

---



<a id="latest-objects-shippinglinesale"></a>


## Shipping​Line​Sale

object

A sale associated with a shipping charge.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### ShippingLineSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-shippingrate"></a>


## Shipping​Rate

object

A shipping rate to be applied to a checkout.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The human-readable unique identifier for this shipping rate.

* price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price of this shipping rate.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of this shipping rate.

***

### Map

#### Fields with this object

* [AvailableShippingRates.shippingRates](https://shopify.dev/docs/api/customer/latest/objects/AvailableShippingRates#field-AvailableShippingRates.fields.shippingRates)
* [Checkout.shippingLine](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.shippingLine)

---



<a id="latest-objects-shop"></a>


## Shop

object

A collection of the general information about the shop.

### Fields

* email

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The email of the shop.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* metafield

  [Metafield](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A metafield found by namespace and key.

  * namespace

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    ### Arguments

    A container for a set of metafields.

  * key

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The metafields associated with the resource matching the supplied list of namespaces and keys.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

  ***

* myshopify​Domain

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The shop's .myshopify.com domain name.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the shop.

* shop​Policies

  [\[Shop​Policy!\]!](https://shopify.dev/docs/api/customer/latest/objects/ShopPolicy)

  non-null

  The list of all legal policies associated with the shop.

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null

  The URL of the shop's online store.

***

### Map

No referencing types

***

### Queries

* [shop](https://shopify.dev/docs/api/customer/latest/queries/shop)

  query

  Returns the information about the shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Shop Queries

#### Queried by

* [shop](https://shopify.dev/docs/api/customer/latest/queries/shop)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

***

### Shop Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/customer/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-shoppolicy"></a>


## Shop​Policy

object

A policy that a merchant has configured for their store, such as their refund or privacy policy.

### Fields

* body

  [HTML!](https://shopify.dev/docs/api/customer/latest/scalars/HTML)

  non-null

  The text of the policy. The maximum size is 512kb.

* handle

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The handle of the policy.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the policy.

* url

  [URL!](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  non-null

  The public URL to the policy.

***

### Map

#### Fields with this object

* [Shop.shopPolicies](https://shopify.dev/docs/api/customer/latest/objects/Shop#field-Shop.fields.shopPolicies)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### ShopPolicy Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-storecreditaccount"></a>


## Store​Credit​Account

object

A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

### Fields

* balance

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The current balance of the store credit account.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* transactions

  [Store​Credit​Account​Transaction​Connection!](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountTransactionConnection)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The transaction history of the store credit account.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Transaction​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/TransactionSortKeys)

    Default:CREATED\_AT

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * * expires\_at

        time

      * id

        id

      * type

        string

      - Filter transactions by expiry date. Only applicable to StoreCreditAccountCreditTransaction objects. All other objects are handled as if they have a null expiry date.

      - Example:

        * `expires_at:<='2025-01-01T00:00:00+01:00'`
        * `expires_at:<='2025-12-31T23:00:00Z'`

        Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter transactions by type. Any value other than the accepted values will be ignored.

        Valid values:

        * `credit`
        * `debit`
        * `debit_revert`
        * `expiration`

        Example:

        * `type:expiration`
        * `type:credit OR type:debit_revert`

  ***

***

### Map

#### Fields and connections with this object

* [CompanyLocation.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)
* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)
* [HasStoreCreditAccounts.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)
* [StoreCreditAccountConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection#returns-nodes)
* [StoreCreditAccountCreditTransaction.account](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.account)
* [StoreCreditAccountDebitRevertTransaction.account](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.account)
* [StoreCreditAccountDebitTransaction.account](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.account)
* [StoreCreditAccountEdge.node](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountEdge#field-StoreCreditAccountEdge.fields.node)
* [StoreCreditAccountExpirationTransaction.account](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.account)
* [StoreCreditAccountTransaction.account](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction#fields-account)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### StoreCreditAccount Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-storecreditaccountcredittransaction"></a>


## Store​Credit​Account​Credit​Transaction

object

A credit transaction which increases the store credit account balance.

### Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/customer/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* expires​At

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The time at which the transaction expires. Debit transactions will always spend the soonest expiring credit first.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

* remaining​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The remaining amount of the credit. The remaining amount will decrease when a debit spends this credit. It may also increase if that debit is subsequently reverted. In the event that the credit expires, the remaining amount will represent the amount that remained as the expiry ocurred.

***

### Map

#### Fields with this object

* [StoreCreditAccountExpirationTransaction.creditTransaction](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.creditTransaction)

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

### StoreCreditAccountCreditTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

---



<a id="latest-objects-storecreditaccountdebitreverttransaction"></a>


## Store​Credit​Account​Debit​Revert​Transaction

object

A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

### Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* debit​Transaction

  [Store​Credit​Account​Debit​Transaction!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitTransaction)

  non-null

  The reverted debit transaction.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/customer/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

### StoreCreditAccountDebitRevertTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

---



<a id="latest-objects-storecreditaccountdebittransaction"></a>


## Store​Credit​Account​Debit​Transaction

object

A debit transaction which decreases the store credit account balance.

### Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/customer/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

### Map

#### Fields with this object

* [StoreCreditAccountDebitRevertTransaction.debitTransaction](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.debitTransaction)

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

    interface

***

### StoreCreditAccountDebitTransaction Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

---



<a id="latest-objects-storecreditaccountexpirationtransaction"></a>


## Store​Credit​Account​Expiration​Transaction

object

An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

### Fields

* account

  [Store​Credit​Account!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount)

  non-null

  The store credit account that the transaction belongs to.

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The amount of the transaction.

* balance​After​Transaction

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The balance of the account after the transaction.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the transaction was created.

* credit​Transaction

  [Store​Credit​Account​Credit​Transaction!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountCreditTransaction)

  non-null

  The credit transaction which expired.

* event

  [Store​Credit​System​Event!](https://shopify.dev/docs/api/customer/latest/enums/StoreCreditSystemEvent)

  non-null

  The event that caused the store credit account transaction.

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

  The origin of the store credit account transaction.

***

### Map

No referencing types

***

### Interfaces

* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

  interface

***

### StoreCreditAccountExpirationTransaction Implements

#### Implements

* [Store​Credit​Account​Transaction](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

---



<a id="latest-objects-subscriptionbillingcycle"></a>


## Subscription​Billing​Cycle

object

The billing cycle of a subscription.

### Fields

* billing​Attempt​Expected​Date

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The expected date of the billing attempt.

* cycle​End​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The end date of the billing cycle.

* cycle​Index

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The index of the billing cycle.

* cycle​Start​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The start date of the billing cycle.

* edited

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the billing cycle was edited.

* skipped

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the billing cycle was skipped.

* status

  [Subscription​Billing​Cycle​Billing​Cycle​Status!](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionBillingCycleBillingCycleStatus)

  non-null

  The status of the billing cycle.

***

### Map

#### Fields and connections with this object

* [SubscriptionBillingCycleConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection#returns-nodes)
* [SubscriptionBillingCycleEdge.node](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleEdge#field-SubscriptionBillingCycleEdge.fields.node)
* [SubscriptionContract.upcomingBillingCycles](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.upcomingBillingCycles)

***

### Mutations

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    The input object for selecting and using billing cycles.

  ***

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    The input object for selecting and using billing cycles.

  ***

***

### SubscriptionBillingCycle Mutations

#### Mutated by

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleSkip)
* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleUnskip)

---



<a id="latest-objects-subscriptionbillingcycleskipusererror"></a>


## Subscription​Billing​Cycle​Skip​User​Error

object

An error that occurs during the execution of `SubscriptionBillingCycleSkip`.

### Fields

* code

  [Subscription​Billing​Cycle​Skip​User​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionBillingCycleSkipUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    The input object for selecting and using billing cycles.

  ***

***

### SubscriptionBillingCycleSkipUserError Mutations

#### Mutated by

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleSkip)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### SubscriptionBillingCycleSkipUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-subscriptionbillingcycleunskipusererror"></a>


## Subscription​Billing​Cycle​Unskip​User​Error

object

An error that occurs during the execution of `SubscriptionBillingCycleUnskip`.

### Fields

* code

  [Subscription​Billing​Cycle​Unskip​User​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionBillingCycleUnskipUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    The input object for selecting and using billing cycles.

  ***

***

### SubscriptionBillingCycleUnskipUserError Mutations

#### Mutated by

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleUnskip)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### SubscriptionBillingCycleUnskipUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-subscriptionbillingpolicy"></a>


## Subscription​Billing​Policy

object

The billing policy of a subscription.

### Fields

* anchors

  [\[Subscription​Anchor!\]!](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionAnchor)

  non-null

  The anchor dates for calculating billing intervals.

* interval

  [Subscription​Interval!](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionInterval)

  non-null

  The type of interval associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Count](https://shopify.dev/docs/api/customer/latest/objects/Count)

  The number of intervals between invoices.

* max​Cycles

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The maximum number of cycles after which the subscription ends.

* min​Cycles

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The minimum number of cycles required for the subscription.

***

### Map

#### Fields with this object

* [SubscriptionContract.billingPolicy](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.billingPolicy)

---



<a id="latest-objects-subscriptioncontract"></a>


## Subscription​Contract

object

A Subscription Contract.

### Fields

* billing​Policy

  [Subscription​Billing​Policy!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingPolicy)

  non-null

  The billing policy associated with the subscription contract.

* created​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was created.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/customer/latest/enums/CurrencyCode)

  non-null

  The currency used for the subscription contract.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/customer/latest/objects/Attribute)

  non-null

  A list of custom attributes to be added to the generated orders.

* delivery​Method

  [Subscription​Delivery​Method](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryMethod)

  The delivery method for each billing of the subscription contract.

* delivery​Policy

  [Subscription​Delivery​Policy!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryPolicy)

  non-null

  The delivery policy associated with the subscription contract.

* delivery​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The delivery price for each billing of the subscription contract.

* discounts

  [Subscription​Discount​Connection](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection)

  The list of subscription discounts associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Billing​Attempt​Error​Type

  [Subscription​Contract​Last​Billing​Error​Type](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractLastBillingErrorType)

  The last billing error type of the contract.

* last​Payment​Status

  [Subscription​Contract​Last​Payment​Status](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractLastPaymentStatus)

  The current status of the last payment.

* lines

  [Subscription​Line​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection)

  non-null

  A list of subscription lines associated with the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* lines​Count

  [Count](https://shopify.dev/docs/api/customer/latest/objects/Count)

  The number of lines associated with the subscription contract.

* next​Billing​Date

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The next billing date for the subscription contract.

* note

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  A note that will be applied to the generated orders.

* orders

  [Order​Connection!](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection)

  non-null

  A list of the subscription contract's orders.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* origin​Order

  [Order](https://shopify.dev/docs/api/customer/latest/objects/Order)

  The order from which the contract originated.

* revision​Id

  [Unsigned​Int64!](https://shopify.dev/docs/api/customer/latest/scalars/UnsignedInt64)

  non-null

  The revision ID of the contract.

* status

  [Subscription​Contract​Subscription​Status!](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractSubscriptionStatus)

  non-null

  The current status of the subscription contract.

* upcoming​Billing​Cycles

  [Subscription​Billing​Cycle​Connection!](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection)

  non-null

  The upcoming billing cycles on the subscription contract.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Subscription​Billing​Cycles​Sort​Keys](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionBillingCyclesSortKeys)

    Default:CYCLE\_INDEX

    Sort the underlying list using a key. If your query is slow or returns an error, then [try specifying a sort key that matches the field used in the search](https://shopify.dev/api/usage/pagination-graphql#search-performance-considerations).

  ***

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was updated.

***

### Map

#### Fields and connections with this object

* [Customer.subscriptionContract](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContract)
* [Customer.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts)
* [Order.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.subscriptionContracts)
* [SubscriptionContractConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection#returns-nodes)
* [SubscriptionContractEdge.node](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractEdge#field-SubscriptionContractEdge.fields.node)

***

### Mutations

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to activate.

  ***

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract to cancel.

  ***

* [subscription​Contract​Pause](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to pause.

  ***

* [subscription​Contract​Select​Delivery​Method](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod)

  mutation

  Selects an option from a delivery options result and updates the delivery method on a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * subscription​Delivery​Options​Result​Token

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The token associated with the successfully fetched delivery options result for the subscription contract.

  * delivery​Method​Input

    [Subscription​Delivery​Method​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput)

    required

    The delivery method selected for the subscription contract.

  ***

***

### SubscriptionContract Mutations

#### Mutated by

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)
* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)
* [subscription​Contract​Pause](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause)
* [subscription​Contract​Select​Delivery​Method](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod)

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Subscription​Contract​Base](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase)

    interface

***

### SubscriptionContract Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Subscription​Contract​Base](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase)

---



<a id="latest-objects-subscriptioncontractstatusupdateusererror"></a>


## Subscription​Contract​Status​Update​User​Error

object

The error codes for failed subscription contract mutations.

### Fields

* code

  [Subscription​Contract​Status​Update​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractStatusUpdateErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to activate.

  ***

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract to cancel.

  ***

* [subscription​Contract​Pause](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to pause.

  ***

***

### SubscriptionContractStatusUpdateUserError Mutations

#### Mutated by

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)
* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)
* [subscription​Contract​Pause](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### SubscriptionContractStatusUpdateUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-subscriptioncontractusererror"></a>


## Subscription​Contract​User​Error

object

The error codes for failed subscription contract mutations.

### Fields

* code

  [Subscription​Contract​User​Error​Code](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionContractUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [subscription​Contract​Fetch​Delivery​Options](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractFetchDeliveryOptions)

  mutation

  Fetches the available delivery options for a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * address

    [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

    The address to deliver the subscription contract to.

  ***

* [subscription​Contract​Select​Delivery​Method](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod)

  mutation

  Selects an option from a delivery options result and updates the delivery method on a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * subscription​Delivery​Options​Result​Token

    [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

    required

    The token associated with the successfully fetched delivery options result for the subscription contract.

  * delivery​Method​Input

    [Subscription​Delivery​Method​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput)

    required

    The delivery method selected for the subscription contract.

  ***

***

### SubscriptionContractUserError Mutations

#### Mutated by

* [subscription​Contract​Fetch​Delivery​Options](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractFetchDeliveryOptions)
* [subscription​Contract​Select​Delivery​Method](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### SubscriptionContractUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-subscriptiondeliverymethodlocaldelivery"></a>


## Subscription​Delivery​Method​Local​Delivery

object

The local delivery method, including a mailing address and a local delivery option.

### Fields

* address

  [Subscription​Mailing​Address!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionMailingAddress)

  non-null

  The delivery address.

* local​Delivery​Option

  [Subscription​Delivery​Method​Local​Delivery​Option!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodLocalDeliveryOption)

  non-null

  The local delivery method details.

***

### Map

#### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryMethod)

---



<a id="latest-objects-subscriptiondeliverymethodlocaldeliveryoption"></a>


## Subscription​Delivery​Method​Local​Delivery​Option

object

The delivery option selected for a subscription contract.

### Fields

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the delivery option shown to the customer.

* instructions

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The delivery instructions provided by the customer to the merchant.

* phone

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The phone number of the customer provided to the merchant. Formatted using E.164 standard. For example, `+16135551111`.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The displayed title of the delivery option.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The title of the delivery option.

***

### Map

#### Fields with this object

* [SubscriptionDeliveryMethodLocalDelivery.localDeliveryOption](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodLocalDelivery#field-SubscriptionDeliveryMethodLocalDelivery.fields.localDeliveryOption)

---



<a id="latest-objects-subscriptiondeliverymethodpickup"></a>


## Subscription​Delivery​Method​Pickup

object

A delivery method with a pickup option.

### Fields

* pickup​Option

  [Subscription​Delivery​Method​Pickup​Option!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodPickupOption)

  non-null

  The details of the pickup delivery method.

***

### Map

#### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryMethod)

---



<a id="latest-objects-subscriptiondeliverymethodpickupoption"></a>


## Subscription​Delivery​Method​Pickup​Option

object

Represents the selected pickup option on a subscription contract.

### Fields

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The details displayed to the customer to describe the pickup option.

* pickup​Address

  [Pickup​Address!](https://shopify.dev/docs/api/customer/latest/objects/PickupAddress)

  non-null

  The address where the customer will pick up the merchandise.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The presentment title of the pickup option.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The title of the pickup option.

***

### Map

#### Fields with this object

* [SubscriptionDeliveryMethodPickup.pickupOption](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodPickup#field-SubscriptionDeliveryMethodPickup.fields.pickupOption)

---



<a id="latest-objects-subscriptiondeliverymethodshipping"></a>


## Subscription​Delivery​Method​Shipping

object

The shipping delivery method, including a mailing address and a shipping option.

### Fields

* address

  [Subscription​Mailing​Address!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionMailingAddress)

  non-null

  The address for shipping.

* shipping​Option

  [Subscription​Delivery​Method​Shipping​Option!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodShippingOption)

  non-null

  The details of the shipping method.

***

### Map

#### Possible type in

* [Subscription​Delivery​Method](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryMethod)

---



<a id="latest-objects-subscriptiondeliverymethodshippingoption"></a>


## Subscription​Delivery​Method​Shipping​Option

object

The selected shipping option on a subscription contract.

### Fields

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the shipping option.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The presentment title of the shipping option.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The title of the shipping option.

***

### Map

#### Fields with this object

* [SubscriptionDeliveryMethodShipping.shippingOption](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodShipping#field-SubscriptionDeliveryMethodShipping.fields.shippingOption)

---



<a id="latest-objects-subscriptiondeliveryoptionsresultfailure"></a>


## Subscription​Delivery​Options​Result​Failure

object

A failed result indicating unavailability of delivery options for the subscription contract.

### Fields

* message

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The reason for the failure.

***

### Map

#### Possible type in

* [Subscription​Delivery​Options​Result](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOptionsResult)

---



<a id="latest-objects-subscriptiondeliveryoptionsresultsuccess"></a>


## Subscription​Delivery​Options​Result​Success

object

A successful result containing the available delivery options for the subscription contract.

### Fields

* delivery​Options

  [\[Subscription​Delivery​Option!\]!](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOption)

  non-null

  The available delivery options.

* token

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The token associated with the successful result of delivery options.

***

### Map

#### Possible type in

* [Subscription​Delivery​Options​Result](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOptionsResult)

---



<a id="latest-objects-subscriptiondeliverypolicy"></a>


## Subscription​Delivery​Policy

object

The delivery policy of a subscription.

### Fields

* anchors

  [\[Subscription​Anchor!\]!](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionAnchor)

  non-null

  The anchor dates for calculating delivery intervals.

* interval

  [Subscription​Interval!](https://shopify.dev/docs/api/customer/latest/enums/SubscriptionInterval)

  non-null

  The type of interval associated with this schedule (e.g. Monthly, Weekly, etc).

* interval​Count

  [Count](https://shopify.dev/docs/api/customer/latest/objects/Count)

  The number of intervals between deliveries.

***

### Map

#### Fields with this object

* [SubscriptionContract.deliveryPolicy](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.deliveryPolicy)

---



<a id="latest-objects-subscriptiondiscount"></a>


## Subscription​Discount

object

A discount applied to a subscription contract.

### Fields

* applies​To​All​Lines

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Specify whether the subscription discount will apply on all subscription lines.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID.

* lines

  [Subscription​Line​Connection](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection)

  The list of subscription lines associated with the subscription discount.

  * first

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The maximum number of times the subscription discount will be applied on orders.

* target​Type

  [Discount​Target​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountTargetType)

  non-null

  Type of line the discount applies on.

* title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The title associated with the subscription discount.

* type

  [Discount​Type!](https://shopify.dev/docs/api/customer/latest/enums/DiscountType)

  non-null

  The type of the subscription discount.

* usage​Count

  [Count](https://shopify.dev/docs/api/customer/latest/objects/Count)

  The number of times the discount was applied.

* value

  [Subscription​Discount​Value!](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDiscountValue)

  non-null

  The value of the subscription discount.

***

### Map

#### Fields and connections with this object

* [SubscriptionContract.discounts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)
* [SubscriptionContractBase.discounts](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-discounts)
* [SubscriptionDiscountAllocation.discount](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscountAllocation#field-SubscriptionDiscountAllocation.fields.discount)
* [SubscriptionDiscountConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection#returns-nodes)
* [SubscriptionDiscountEdge.node](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscountEdge#field-SubscriptionDiscountEdge.fields.node)

---



<a id="latest-objects-subscriptiondiscountallocation"></a>


## Subscription​Discount​Allocation

object

Represents what a particular discount reduces from a line price.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  Allocation amount.

* discount

  [Subscription​Discount!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount)

  non-null

  Discount that created the allocation.

***

### Map

#### Fields with this object

* [SubscriptionLine.discountAllocations](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.discountAllocations)

---



<a id="latest-objects-subscriptiondiscountfixedamountvalue"></a>


## Subscription​Discount​Fixed​Amount​Value

object

The value of the discount and how it will be applied.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The fixed amount value of the discount.

* applies​On​Each​Item

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the amount is applied per item.

***

### Map

#### Possible type in

* [Subscription​Discount​Value](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDiscountValue)

---



<a id="latest-objects-subscriptiondiscountpercentagevalue"></a>


## Subscription​Discount​Percentage​Value

object

The percentage value of the discount.

### Fields

* percentage

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The percentage value of the discount.

***

### Map

#### Possible type in

* [Subscription​Discount​Value](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDiscountValue)

---



<a id="latest-objects-subscriptionline"></a>


## Subscription​Line

object

A line item in a subscription.

### Fields

* current​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The current price per unit for the subscription line in the contract's currency.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/customer/latest/objects/Attribute)

  non-null

  The custom attributes associated with the line item.

* discount​Allocations

  [\[Subscription​Discount​Allocation!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscountAllocation)

  non-null

  Discount allocations.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the line item.

* image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  The image associated with the product variant.

* line​Discounted​Price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total price of the line item after all discounts have been applied.

* name

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the product.

* online​Store​Url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  The URL of the product in the online store. A value of `null` indicates that the product isn't published in the Online Store sales channel.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of the unit selected for the subscription line.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the product variant requires shipping.

* sku

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The SKU of the product variant associated with the subscription line.

* taxable

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the product variant is taxable.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the product associated with the subscription line.

* variant​Image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  The image associated with the product variant.

* variant​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The title of the product variant associated with the subscription line.

***

### Map

#### Fields and connections with this object

* [SubscriptionContract.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)
* [SubscriptionContractBase.lines](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-lines)
* [SubscriptionDiscount.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.lines)
* [SubscriptionLineConnection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection#returns-nodes)
* [SubscriptionLineEdge.node](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLineEdge#field-SubscriptionLineEdge.fields.node)

---



<a id="latest-objects-subscriptionlocaldeliveryoption"></a>


## Subscription​Local​Delivery​Option

object

A local delivery option for a subscription contract.

### Fields

* code

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The code of the local delivery option.

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the local delivery option.

* phone​Required

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether a phone number is required for the local delivery option.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The presentment title of the local delivery option.

* price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price of the local delivery option.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the local delivery option.

***

### Map

#### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOption)

---



<a id="latest-objects-subscriptionmailingaddress"></a>


## Subscription​Mailing​Address

object

The mailing address on a subscription.

### Fields

* address1

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first line of the address, typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The second line of the address, typically the apartment, suite, or unit number.

* city

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the customer's company or organization.

* country

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the country.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/customer/latest/enums/CountryCode)

  The two-letter code for the country of the address. For example, US.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The last name of the customer.

* name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The full name of the customer, based on the first name and last name.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  A unique phone number for the customer, formatted using the E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* province​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The alphanumeric code for the region. For example, ON.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The zip or postal code of the address.

***

### Map

#### Fields with this object

* [SubscriptionDeliveryMethodLocalDelivery.address](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodLocalDelivery#field-SubscriptionDeliveryMethodLocalDelivery.fields.address)
* [SubscriptionDeliveryMethodShipping.address](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryMethodShipping#field-SubscriptionDeliveryMethodShipping.fields.address)

---



<a id="latest-objects-subscriptionmonthdayanchor"></a>


## Subscription​Month​Day​Anchor

object

Represents an anchor specifying a day of the month.

### Fields

* day​Of​Month

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  Day of the month (1-31).

***

### Map

#### Possible type in

* [Subscription​Anchor](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionAnchor)

---



<a id="latest-objects-subscriptionpickupoption"></a>


## Subscription​Pickup​Option

object

A pickup option to deliver a subscription contract.

### Fields

* code

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The code of the pickup option.

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the pickup option.

* location​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the pickup location.

* phone​Required

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether a phone number is required for the pickup option.

* pickup​Address

  [Pickup​Address!](https://shopify.dev/docs/api/customer/latest/objects/PickupAddress)

  non-null

  The address where the customer will pick up the merchandise.

* pickup​Time

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The estimated amount of time it takes for the pickup to be ready. For example, "Usually ready in 24 hours".

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The presentment title of the pickup option.

* price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price of the pickup option.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the pickup option.

***

### Map

#### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOption)

---



<a id="latest-objects-subscriptionshippingoption"></a>


## Subscription​Shipping​Option

object

A shipping option to deliver a subscription contract.

### Fields

* code

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The code of the shipping option.

* description

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The description of the shipping option.

* phone​Required

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether a phone number is required for the shipping option.

* presentment​Title

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The presentment title of the shipping option.

* price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The price of the shipping option.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The title of the shipping option.

***

### Map

#### Possible type in

* [Subscription​Delivery​Option](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOption)

---



<a id="latest-objects-subscriptionweekdayanchor"></a>


## Subscription​Week​Day​Anchor

object

Represents an anchor specifying a day of the week.

### Fields

* day​Of​Week

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  Day of the week (1-7, where 1 is Monday).

***

### Map

#### Possible type in

* [Subscription​Anchor](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionAnchor)

---



<a id="latest-objects-subscriptionyeardayanchor"></a>


## Subscription​Year​Day​Anchor

object

Represents an anchor specifying a specific day and month of the year.

### Fields

* day​Of​Month

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  Day of the month (1-31). Specifies the exact day within the given month.

* month

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  Month of the year (1-12). Specifies the month in which the day occurs.

***

### Map

#### Possible type in

* [Subscription​Anchor](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionAnchor)

---



<a id="latest-objects-taxline"></a>


## Tax​Line

object

The details about a single tax applied to the associated line item.

### Fields

* channel​Liable

  [Boolean!](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  non-null

  Whether the channel that submitted the tax line is responsible for remitting it.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* price​Set

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The tax amount in shop and presentment currencies, calculated after discounts and before returns.

* rate

  [Float](https://shopify.dev/docs/api/customer/latest/scalars/Float)

  The proportion of the line item price represented by the tax, expressed as a decimal.

* rate​Percentage

  [Float](https://shopify.dev/docs/api/customer/latest/scalars/Float)

  The proportion of the line item price represented by the tax, expressed as a percentage.

* source

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The origin of the tax.

* title

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The name of the applied tax.

***

### Map

#### Fields with this object

* [SaleTax.taxLine](https://shopify.dev/docs/api/customer/latest/objects/SaleTax#field-SaleTax.fields.taxLine)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

  interface

***

### TaxLine Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

---



<a id="latest-objects-tipsale"></a>


## Tip​Sale

object

A sale that is associated with a tip.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null

  The line item associated with the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The type of line associated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### TipSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-trackinginformation"></a>


## Tracking​Information

object

Represents the tracking information for a fulfillment.

### Fields

* company

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the tracking company.

* number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The tracking number for the fulfillment.

* url

  [URL](https://shopify.dev/docs/api/customer/latest/scalars/URL)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URLs to track the fulfillment.

***

### Map

#### Fields with this object

* [Fulfillment.trackingInformation](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.trackingInformation)

---



<a id="latest-objects-transactiontypedetails"></a>


## Transaction​Type​Details

object

The details related to the transaction type.

### Fields

* message

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The message of the transaction type.

* name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The name of the transaction type.

***

### Map

#### Fields with this object

* [OrderTransaction.typeDetails](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.typeDetails)

---



<a id="latest-objects-unitprice"></a>


## Unit​Price

object

The unit price of the line component. For example, "$9.99 / 100ml".

### Fields

* measurement

  [Unit​Price​Measurement!](https://shopify.dev/docs/api/customer/latest/objects/UnitPriceMeasurement)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unit measurement. For example, "$9.99 / 100ml".

* price

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The unit price of the variant. For example, "$1 per xy" where price is "$1".

***

### Map

#### Fields with this object

* [LineItem.unitPrice](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.unitPrice)

---



<a id="latest-objects-unitpricemeasurement"></a>


## Unit​Price​Measurement

object

The unit price measurement of the line component. For example, "$9.99 / 100ml".

### Fields

* reference​Unit

  [Unit​Price​Measurement​Unit!](https://shopify.dev/docs/api/customer/latest/enums/UnitPriceMeasurementUnit)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The reference unit for the unit price measurement. For example, "$9.99 / 100ml" where the reference unit is "ml".

* reference​Value

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The reference value for the unit price measurement. For example, "$9.99 / 100ml" where the reference value is "100".

***

### Map

#### Fields with this object

* [UnitPrice.measurement](https://shopify.dev/docs/api/customer/latest/objects/UnitPrice#field-UnitPrice.fields.measurement)

---



<a id="latest-objects-unknownsale"></a>


## Unknown​Sale

object

This represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

### Fields

* action​Type

  [Sale​Action​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleActionType)

  non-null

  The type of order action represented by the sale.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the sale.

* line​Type

  [Sale​Line​Type!](https://shopify.dev/docs/api/customer/latest/enums/SaleLineType)

  non-null

  The line type assocated with the sale.

* quantity

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The number of units ordered or intended to be returned.

* taxes

  [\[Sale​Tax!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleTax)

  non-null

  The individual taxes associated with the sale.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total sale amount after taxes and discounts.

* total​Discount​Amount​After​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total amount of discounts allocated to the sale after taxes.

* total​Discount​Amount​Before​Taxes

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total discounts allocated to the sale before taxes.

* total​Tax​Amount

  [Money​V2!](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2)

  non-null

  The total tax amount for the sale.

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

    interface

***

### UnknownSale Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Sale](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

---



<a id="latest-objects-unverifiedreturnlineitem"></a>


## Unverified​Return​Line​Item

object

An unverified return line item.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* line​Item

  [Line​Item!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The specific line item that's being returned.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The quantity of the line item that's been returned.

* return​Reason​Definition

  [Return​Reason​Definition](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinition)

  The standardized reason for why the item is being returned.

* return​Reason

  [Return​Reason!](https://shopify.dev/docs/api/customer/latest/enums/ReturnReason)

  non-nullDeprecated

***

### Map

No referencing types

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)

    interface

  * [Return​Line​Item​Type](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType)

    interface

***

### UnverifiedReturnLineItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/customer/latest/interfaces/Node)
* [Return​Line​Item​Type](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType)

---



<a id="latest-objects-usererrorscustomeraddressusererrors"></a>


## User​Errors​Customer​Address​User​Errors

object

The error codes that are provided for failed address mutations.

### Fields

* code

  [User​Errors​Customer​Address​User​Errors​Code](https://shopify.dev/docs/api/customer/latest/enums/UserErrorsCustomerAddressUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [customer​Address​Create](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate)

  mutation

  Creates a new address for a customer.

  * address

    [Customer​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

    required

    ### Arguments

    Specifies the fields to use when creating the address.

  * default​Address

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:false

    The flag to set the address as the default address.

  ***

* [customer​Address​Delete](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete)

  mutation

  Deletes a specific address for a customer.

  * address​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to be deleted.

  ***

* [customer​Address​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate)

  mutation

  Updates a specific address for a customer.

  * address​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to be updated.

  * address

    [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

    Specifies the fields to use when updating the address.

  * default​Address

    [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

    Default:null

    The flag to set the address as the default address.

  ***

***

### UserErrorsCustomerAddressUserErrors Mutations

#### Mutated by

* [customer​Address​Create](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate)
* [customer​Address​Delete](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete)
* [customer​Address​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### UserErrorsCustomerAddressUserErrors Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-usererrorscustomeremailmarketingusererrors"></a>


## User​Errors​Customer​Email​Marketing​User​Errors

object

Provides error codes for marketing subscribe mutations.

### Fields

* code

  [User​Errors​Customer​Email​Marketing​User​Errors​Code](https://shopify.dev/docs/api/customer/latest/enums/UserErrorsCustomerEmailMarketingUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)

  mutation

  Subscribes the customer to email marketing.

* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

  mutation

  Unsubscribes the customer from email marketing.

***

### UserErrorsCustomerEmailMarketingUserErrors Mutations

#### Mutated by

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)
* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### UserErrorsCustomerEmailMarketingUserErrors Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-usererrorscustomerusererrors"></a>


## User​Errors​Customer​User​Errors

object

Provides error codes for failed personal information mutations.

### Fields

* code

  [User​Errors​Customer​User​Errors​Code](https://shopify.dev/docs/api/customer/latest/enums/UserErrorsCustomerUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [customer​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate)

  mutation

  Updates the customer's personal information.

  * input

    [Customer​Update​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerUpdateInput)

    required

    ### Arguments

    Specifies the input fields for the customer update.

  ***

***

### UserErrorsCustomerUserErrors Mutations

#### Mutated by

* [customer​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### UserErrorsCustomerUserErrors Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-usererrorsstorefrontcustomeraccesstokencreateusererrors"></a>


## User​Errors​Storefront​Customer​Access​Token​Create​User​Errors

object

Error codes for failed Storefront Customer Access Token mutation.

### Fields

* code

  [User​Errors​Storefront​Customer​Access​Token​Create​User​Errors​Code](https://shopify.dev/docs/api/customer/latest/enums/UserErrorsStorefrontCustomerAccessTokenCreateUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

* [storefront​Customer​Access​Token​Create](https://shopify.dev/docs/api/customer/latest/mutations/storefrontCustomerAccessTokenCreate)

  mutation

  Deprecated

***

### UserErrorsStorefrontCustomerAccessTokenCreateUserErrors Mutations

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

  interface

***

### UserErrorsStorefrontCustomerAccessTokenCreateUserErrors Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/customer/latest/interfaces/DisplayableError)

---



<a id="latest-objects-video"></a>


## Video

object

Represents a Shopify hosted video.

### Fields

* alt

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/customer/latest/enums/MediaContentType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The media content type.

* preview​Image

  [Image](https://shopify.dev/docs/api/customer/latest/objects/Image)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The preview image for the media.

* sources

  [\[Video​Source!\]!](https://shopify.dev/docs/api/customer/latest/objects/VideoSource)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The sources for a video.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

***

### Interfaces

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

  interface

***

### Video Implements

#### Implements

* [Media](https://shopify.dev/docs/api/customer/latest/interfaces/Media)

---



<a id="latest-objects-videosource"></a>


## Video​Source

object

Represents a source for a Shopify hosted video.

### Fields

* format

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The format of the video source.

* height

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The height of the video.

* mime​Type

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The video MIME type.

* url

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The URL of the video.

* width

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The width of the video.

***

### Map

#### Fields with this object

* [Video.sources](https://shopify.dev/docs/api/customer/latest/objects/Video#field-Video.fields.sources)

---



<a id="latest-objects-weight"></a>


## Weight

object

A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

### Fields

* unit

  [Weight​Unit!](https://shopify.dev/docs/api/customer/latest/enums/WeightUnit)

  non-null

  The unit of measurement for `value`.

* value

  [Float!](https://shopify.dev/docs/api/customer/latest/scalars/Float)

  non-null

  The weight value using the unit system specified with `unit`.

***

### Map

#### Fields with this object

* [DraftOrderLineItem.weight](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.weight)

---
