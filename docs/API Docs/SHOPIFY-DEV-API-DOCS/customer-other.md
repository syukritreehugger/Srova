# Shopify Customer – other Reference (Indonesian / English)

> Referensi lengkap **Customer – other** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/customer.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/customer` |
| Total halaman | **127** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `other (small groups)` (split file)


## Daftar Isi (Table of Contents)

- [latest / connections / CalculatedReturnLineItemConnection](#latest-connections-calculatedreturnlineitemconnection)
- [latest / connections / CheckoutLineItemConnection](#latest-connections-checkoutlineitemconnection)
- [latest / connections / CompanyContactConnection](#latest-connections-companycontactconnection)
- [latest / connections / CompanyContactRoleAssignmentConnection](#latest-connections-companycontactroleassignmentconnection)
- [latest / connections / CompanyLocationConnection](#latest-connections-companylocationconnection)
- [latest / connections / CustomerAddressConnection](#latest-connections-customeraddressconnection)
- [latest / connections / DiscountApplicationConnection](#latest-connections-discountapplicationconnection)
- [latest / connections / DraftOrderConnection](#latest-connections-draftorderconnection)
- [latest / connections / DraftOrderLineItemConnection](#latest-connections-draftorderlineitemconnection)
- [latest / connections / ExchangeLineItemConnection](#latest-connections-exchangelineitemconnection)
- [latest / connections / FulfillmentConnection](#latest-connections-fulfillmentconnection)
- [latest / connections / FulfillmentEventConnection](#latest-connections-fulfillmenteventconnection)
- [latest / connections / FulfillmentLineItemConnection](#latest-connections-fulfillmentlineitemconnection)
- [latest / connections / LineItemConnection](#latest-connections-lineitemconnection)
- [latest / connections / MetafieldReferenceConnection](#latest-connections-metafieldreferenceconnection)
- [latest / connections / NonReturnableLineItemConnection](#latest-connections-nonreturnablelineitemconnection)
- [latest / connections / OrderConnection](#latest-connections-orderconnection)
- [latest / connections / PaymentScheduleConnection](#latest-connections-paymentscheduleconnection)
- [latest / connections / ReturnConnection](#latest-connections-returnconnection)
- [latest / connections / ReturnLineItemTypeConnection](#latest-connections-returnlineitemtypeconnection)
- [latest / connections / ReturnReasonDefinitionConnection](#latest-connections-returnreasondefinitionconnection)
- [latest / connections / ReturnableLineItemConnection](#latest-connections-returnablelineitemconnection)
- [latest / connections / ReverseDeliveryConnection](#latest-connections-reversedeliveryconnection)
- [latest / connections / SaleConnection](#latest-connections-saleconnection)
- [latest / connections / SalesAgreementConnection](#latest-connections-salesagreementconnection)
- [latest / connections / StoreCreditAccountConnection](#latest-connections-storecreditaccountconnection)
- [latest / connections / StoreCreditAccountTransactionConnection](#latest-connections-storecreditaccounttransactionconnection)
- [latest / connections / SubscriptionBillingCycleConnection](#latest-connections-subscriptionbillingcycleconnection)
- [latest / connections / SubscriptionContractConnection](#latest-connections-subscriptioncontractconnection)
- [latest / connections / SubscriptionDiscountConnection](#latest-connections-subscriptiondiscountconnection)
- [latest / connections / SubscriptionLineConnection](#latest-connections-subscriptionlineconnection)
- [latest / input-objects / CalculateReturnInput](#latest-input-objects-calculatereturninput)
- [latest / input-objects / CalculateReturnLineItemInput](#latest-input-objects-calculatereturnlineiteminput)
- [latest / input-objects / CompanyAddressInput](#latest-input-objects-companyaddressinput)
- [latest / input-objects / CustomerAddressInput](#latest-input-objects-customeraddressinput)
- [latest / input-objects / CustomerUpdateInput](#latest-input-objects-customerupdateinput)
- [latest / input-objects / HasMetafieldsIdentifier](#latest-input-objects-hasmetafieldsidentifier)
- [latest / input-objects / ImageTransformInput](#latest-input-objects-imagetransforminput)
- [latest / input-objects / MetafieldIdentifierInput](#latest-input-objects-metafieldidentifierinput)
- [latest / input-objects / MetafieldsSetInput](#latest-input-objects-metafieldssetinput)
- [latest / input-objects / RequestedLineItemInput](#latest-input-objects-requestedlineiteminput)
- [latest / input-objects / SubscriptionBillingCycleInput](#latest-input-objects-subscriptionbillingcycleinput)
- [latest / input-objects / SubscriptionBillingCycleSelector](#latest-input-objects-subscriptionbillingcycleselector)
- [latest / input-objects / SubscriptionDeliveryMethodInput](#latest-input-objects-subscriptiondeliverymethodinput)
- [latest / input-objects / SubscriptionDeliveryMethodLocalDeliveryInput](#latest-input-objects-subscriptiondeliverymethodlocaldeliveryinput)
- [latest / input-objects / SubscriptionDeliveryMethodPickupInput](#latest-input-objects-subscriptiondeliverymethodpickupinput)
- [latest / input-objects / SubscriptionDeliveryMethodShippingInput](#latest-input-objects-subscriptiondeliverymethodshippinginput)
- [latest / interfaces / DiscountApplication](#latest-interfaces-discountapplication)
- [latest / interfaces / DisplayableError](#latest-interfaces-displayableerror)
- [latest / interfaces / HasCompareDigest](#latest-interfaces-hascomparedigest)
- [latest / interfaces / HasMetafields](#latest-interfaces-hasmetafields)
- [latest / interfaces / HasStoreCreditAccounts](#latest-interfaces-hasstorecreditaccounts)
- [latest / interfaces / Media](#latest-interfaces-media)
- [latest / interfaces / PaymentIcon](#latest-interfaces-paymenticon)
- [latest / interfaces / ReturnFee](#latest-interfaces-returnfee)
- [latest / interfaces / ReturnLineItemType](#latest-interfaces-returnlineitemtype)
- [latest / interfaces / Sale](#latest-interfaces-sale)
- [latest / interfaces / SalesAgreement](#latest-interfaces-salesagreement)
- [latest / interfaces / StoreCreditAccountTransaction](#latest-interfaces-storecreditaccounttransaction)
- [latest / interfaces / SubscriptionContractBase](#latest-interfaces-subscriptioncontractbase)
- [latest / mutations / companyLocationAssignAddress](#latest-mutations-companylocationassignaddress)
- [latest / mutations / customerAddressCreate](#latest-mutations-customeraddresscreate)
- [latest / mutations / customerAddressDelete](#latest-mutations-customeraddressdelete)
- [latest / mutations / customerAddressUpdate](#latest-mutations-customeraddressupdate)
- [latest / mutations / customerEmailMarketingSubscribe](#latest-mutations-customeremailmarketingsubscribe)
- [latest / mutations / customerEmailMarketingUnsubscribe](#latest-mutations-customeremailmarketingunsubscribe)
- [latest / mutations / customerUpdate](#latest-mutations-customerupdate)
- [latest / mutations / metafieldsDelete](#latest-mutations-metafieldsdelete)
- [latest / mutations / metafieldsSet](#latest-mutations-metafieldsset)
- [latest / mutations / orderRequestReturn](#latest-mutations-orderrequestreturn)
- [latest / mutations / storefrontCustomerAccessTokenCreate](#latest-mutations-storefrontcustomeraccesstokencreate)
- [latest / mutations / subscriptionBillingCycleSkip](#latest-mutations-subscriptionbillingcycleskip)
- [latest / mutations / subscriptionBillingCycleUnskip](#latest-mutations-subscriptionbillingcycleunskip)
- [latest / mutations / subscriptionContractActivate](#latest-mutations-subscriptioncontractactivate)
- [latest / mutations / subscriptionContractCancel](#latest-mutations-subscriptioncontractcancel)
- [latest / mutations / subscriptionContractFetchDeliveryOptions](#latest-mutations-subscriptioncontractfetchdeliveryoptions)
- [latest / mutations / subscriptionContractPause](#latest-mutations-subscriptioncontractpause)
- [latest / mutations / subscriptionContractSelectDeliveryMethod](#latest-mutations-subscriptioncontractselectdeliverymethod)
- [latest / payloads / CompanyLocationAssignAddressPayload](#latest-payloads-companylocationassignaddresspayload)
- [latest / payloads / CustomerAddressCreatePayload](#latest-payloads-customeraddresscreatepayload)
- [latest / payloads / CustomerAddressDeletePayload](#latest-payloads-customeraddressdeletepayload)
- [latest / payloads / CustomerAddressUpdatePayload](#latest-payloads-customeraddressupdatepayload)
- [latest / payloads / CustomerEmailMarketingSubscribePayload](#latest-payloads-customeremailmarketingsubscribepayload)
- [latest / payloads / CustomerEmailMarketingUnsubscribePayload](#latest-payloads-customeremailmarketingunsubscribepayload)
- [latest / payloads / CustomerUpdatePayload](#latest-payloads-customerupdatepayload)
- [latest / payloads / MetafieldsDeletePayload](#latest-payloads-metafieldsdeletepayload)
- [latest / payloads / MetafieldsSetPayload](#latest-payloads-metafieldssetpayload)
- [latest / payloads / OrderRequestReturnPayload](#latest-payloads-orderrequestreturnpayload)
- [latest / payloads / StorefrontCustomerAccessTokenCreatePayload](#latest-payloads-storefrontcustomeraccesstokencreatepayload)
- [latest / payloads / SubscriptionBillingCycleSkipPayload](#latest-payloads-subscriptionbillingcycleskippayload)
- [latest / payloads / SubscriptionBillingCycleUnskipPayload](#latest-payloads-subscriptionbillingcycleunskippayload)
- [latest / payloads / SubscriptionContractActivatePayload](#latest-payloads-subscriptioncontractactivatepayload)
- [latest / payloads / SubscriptionContractCancelPayload](#latest-payloads-subscriptioncontractcancelpayload)
- [latest / payloads / SubscriptionContractFetchDeliveryOptionsPayload](#latest-payloads-subscriptioncontractfetchdeliveryoptionspayload)
- [latest / payloads / SubscriptionContractPausePayload](#latest-payloads-subscriptioncontractpausepayload)
- [latest / payloads / SubscriptionContractSelectDeliveryMethodPayload](#latest-payloads-subscriptioncontractselectdeliverymethodpayload)
- [latest / queries / company](#latest-queries-company)
- [latest / queries / companyLocation](#latest-queries-companylocation)
- [latest / queries / customer](#latest-queries-customer)
- [latest / queries / draftOrder](#latest-queries-draftorder)
- [latest / queries / order](#latest-queries-order)
- [latest / queries / return](#latest-queries-return)
- [latest / queries / returnCalculate](#latest-queries-returncalculate)
- [latest / queries / shop](#latest-queries-shop)
- [latest / scalars / Boolean](#latest-scalars-boolean)
- [latest / scalars / DateTime](#latest-scalars-datetime)
- [latest / scalars / Decimal](#latest-scalars-decimal)
- [latest / scalars / Float](#latest-scalars-float)
- [latest / scalars / HTML](#latest-scalars-html)
- [latest / scalars / ID](#latest-scalars-id)
- [latest / scalars / Int](#latest-scalars-int)
- [latest / scalars / JSON](#latest-scalars-json)
- [latest / scalars / String](#latest-scalars-string)
- [latest / scalars / URL](#latest-scalars-url)
- [latest / scalars / UnsignedInt64](#latest-scalars-unsignedint64)
- [latest / unions / DepositConfiguration](#latest-unions-depositconfiguration)
- [latest / unions / MetafieldReference](#latest-unions-metafieldreference)
- [latest / unions / PaymentDetails](#latest-unions-paymentdetails)
- [latest / unions / PricingValue](#latest-unions-pricingvalue)
- [latest / unions / PurchasingEntity](#latest-unions-purchasingentity)
- [latest / unions / ReverseDeliveryDeliverable](#latest-unions-reversedeliverydeliverable)
- [latest / unions / StoreCreditAccountTransactionOrigin](#latest-unions-storecreditaccounttransactionorigin)
- [latest / unions / SubscriptionAnchor](#latest-unions-subscriptionanchor)
- [latest / unions / SubscriptionDeliveryMethod](#latest-unions-subscriptiondeliverymethod)
- [latest / unions / SubscriptionDeliveryOption](#latest-unions-subscriptiondeliveryoption)
- [latest / unions / SubscriptionDeliveryOptionsResult](#latest-unions-subscriptiondeliveryoptionsresult)
- [latest / unions / SubscriptionDiscountValue](#latest-unions-subscriptiondiscountvalue)


---



<a id="latest-connections-calculatedreturnlineitemconnection"></a>


## Calculated​Return​Line​Item​Connection

connection

An auto-generated type for paginating through multiple CalculatedReturnLineItems.

### Fields with this connection

* [Calculated​Return.returnLineItems](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems)

  OBJECT

  The calculated financial outcome of a return based on the line items requested for return.Includes the monetary values of the line items, along with applicable taxes, discounts, and otherfees on the order. Financial summary may include return fees depending onthe [return rules](https://help.shopify.com/manual/fulfillment/managing-orders/returns/return-rules)at the time the order was placed.

***

### Possible returns

* edges

  [\[Calculated​Return​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Calculated​Return​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CalculatedReturnLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Calculated​Return.returnLineItems](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems)

#### Possible returns

* [Calculated​Return​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection#returns-edges)
* [Calculated​Return​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection#returns-nodes)
* [Calculated​Return​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CalculatedReturnLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-checkoutlineitemconnection"></a>


## Checkout​Line​Item​Connection

connection

An auto-generated type for paginating through multiple CheckoutLineItems.

### Fields with this connection

* [Checkout.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems)

  OBJECT

  A container for information required to checkout items and pay. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Checkout​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Checkout​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CheckoutLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Checkout.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems)

#### Possible returns

* [Checkout​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection#returns-edges)
* [Checkout​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection#returns-nodes)
* [Checkout​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CheckoutLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-companycontactconnection"></a>


## Company​Contact​Connection

connection

An auto-generated type for paginating through multiple CompanyContacts.

### Fields with this connection

* [Company​Location.contacts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts)

  OBJECT

  Represents a company's business location.

* [Customer.companyContacts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.companyContacts)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Company​Contact​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CompanyContactEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.contacts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts)
* [Customer.companyContacts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.companyContacts)

#### Possible returns

* [Company​Contact​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection#returns-edges)
* [Company​Contact​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection#returns-nodes)
* [Company​Contact​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactConnection#returns-pageInfo)

---



<a id="latest-connections-companycontactroleassignmentconnection"></a>


## Company​Contact​Role​Assignment​Connection

connection

An auto-generated type for paginating through multiple CompanyContactRoleAssignments.

### Fields with this connection

* [Company​Location.roleAssignments](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

  OBJECT

  Represents a company's business location.

***

### Possible returns

* edges

  [\[Company​Contact​Role​Assignment​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignmentEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Contact​Role​Assignment!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignment)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CompanyContactRoleAssignmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.roleAssignments](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments)

#### Possible returns

* [Company​Contact​Role​Assignment​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection#returns-edges)
* [Company​Contact​Role​Assignment​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection#returns-nodes)
* [Company​Contact​Role​Assignment​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyContactRoleAssignmentConnection#returns-pageInfo)

---



<a id="latest-connections-companylocationconnection"></a>


## Company​Location​Connection

connection

An auto-generated type for paginating through multiple CompanyLocations.

### Fields with this connection

* [Company.locations](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations)

  OBJECT

  Represents a company's information.

* [Company​Contact.locations](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations)

  OBJECT

  Represents the customer's contact information.

***

### Possible returns

* edges

  [\[Company​Location​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocationEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Company​Location!\]!](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CompanyLocationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.locations](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations)
* [Company​Contact.locations](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations)

#### Possible returns

* [Company​Location​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection#returns-edges)
* [Company​Location​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection#returns-nodes)
* [Company​Location​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CompanyLocationConnection#returns-pageInfo)

---



<a id="latest-connections-customeraddressconnection"></a>


## Customer​Address​Connection

connection

An auto-generated type for paginating through multiple CustomerAddresses.

### Fields with this connection

* [Customer.addresses](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Customer​Address​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddressEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Address!\]!](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in CustomerAddressEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer.addresses](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses)

#### Possible returns

* [Customer​Address​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection#returns-edges)
* [Customer​Address​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection#returns-nodes)
* [Customer​Address​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/CustomerAddressConnection#returns-pageInfo)

---



<a id="latest-connections-discountapplicationconnection"></a>


## Discount​Application​Connection

connection

An auto-generated type for paginating through multiple DiscountApplications.

### Fields with this connection

* [Checkout.discountApplications](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications)

  OBJECT

  A container for information required to checkout items and pay. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Order.discountApplications](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.discountApplications)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Discount​Application​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/DiscountApplicationEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Application!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in DiscountApplicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Checkout.discountApplications](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications)
* [Order.discountApplications](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.discountApplications)

#### Possible returns

* [Discount​Application​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection#returns-edges)
* [Discount​Application​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection#returns-nodes)
* [Discount​Application​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DiscountApplicationConnection#returns-pageInfo)

---



<a id="latest-connections-draftorderconnection"></a>


## Draft​Order​Connection

connection

An auto-generated type for paginating through multiple DraftOrders.

### Fields with this connection

* [Company.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders)

  OBJECT

  Represents a company's information.

* [Company​Contact.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)

  OBJECT

  Represents the customer's contact information.

* [Company​Location.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)

  OBJECT

  Represents a company's business location.

* [Customer.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Draft​Order​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order!\]!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in DraftOrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders)
* [Company​Contact.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders)
* [Company​Location.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders)
* [Customer.draftOrders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders)

#### Possible returns

* [Draft​Order​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection#returns-edges)
* [Draft​Order​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection#returns-nodes)
* [Draft​Order​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderConnection#returns-pageInfo)

---



<a id="latest-connections-draftorderlineitemconnection"></a>


## Draft​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple DraftOrderLineItems.

### Fields with this connection

* [Draft​Order.lineItems](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

  OBJECT

  A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Draft​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in DraftOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Draft​Order.lineItems](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

#### Possible returns

* [Draft​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection#returns-edges)
* [Draft​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection#returns-nodes)
* [Draft​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/DraftOrderLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-exchangelineitemconnection"></a>


## Exchange​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ExchangeLineItems.

### Fields with this connection

* [Return.exchangeLineItems](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.exchangeLineItems)

  OBJECT

  A product return.

***

### Possible returns

* edges

  [\[Exchange​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Exchange​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ExchangeLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.exchangeLineItems](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.exchangeLineItems)

#### Possible returns

* [Exchange​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection#returns-edges)
* [Exchange​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection#returns-nodes)
* [Exchange​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ExchangeLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-fulfillmentconnection"></a>


## Fulfillment​Connection

connection

An auto-generated type for paginating through multiple Fulfillments.

### Fields with this connection

* [Order.fulfillments](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillments)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Fulfillment​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment!\]!](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in FulfillmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.fulfillments](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillments)

#### Possible returns

* [Fulfillment​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection#returns-edges)
* [Fulfillment​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection#returns-nodes)
* [Fulfillment​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentConnection#returns-pageInfo)

---



<a id="latest-connections-fulfillmenteventconnection"></a>


## Fulfillment​Event​Connection

connection

An auto-generated type for paginating through multiple FulfillmentEvents.

### Fields with this connection

* [Fulfillment.events](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events)

  OBJECT

  Represents a single fulfillment in an order.

***

### Possible returns

* edges

  [\[Fulfillment​Event​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEventEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Event!\]!](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEvent)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in FulfillmentEventEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment.events](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events)

#### Possible returns

* [Fulfillment​Event​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection#returns-edges)
* [Fulfillment​Event​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection#returns-nodes)
* [Fulfillment​Event​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentEventConnection#returns-pageInfo)

---



<a id="latest-connections-fulfillmentlineitemconnection"></a>


## Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple FulfillmentLineItems.

### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

  OBJECT

  Represents a single fulfillment in an order.

***

### Possible returns

* edges

  [\[Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in FulfillmentLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

#### Possible returns

* [Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection#returns-edges)
* [Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-lineitemconnection"></a>


## Line​Item​Connection

connection

An auto-generated type for paginating through multiple LineItems.

### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.lineItems)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/LineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/LineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in LineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.lineItems)

#### Possible returns

* [Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection#returns-edges)
* [Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection#returns-nodes)
* [Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/LineItemConnection#returns-pageInfo)

---



<a id="latest-connections-metafieldreferenceconnection"></a>


## Metafield​Reference​Connection

connection

An auto-generated type for paginating through multiple MetafieldReferences.

### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  The custom metadata attached to a resource. Metafields can be sorted into namespaces and are comprised of keys, values, and value types.

***

### Possible returns

* edges

  [\[Metafield​Reference​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetafieldReferenceEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Reference!\]!](https://shopify.dev/docs/api/customer/latest/unions/MetafieldReference)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in MetafieldReferenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.references)

#### Possible returns

* [Metafield​Reference​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection#returns-edges)
* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection#returns-nodes)
* [Metafield​Reference​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection#returns-pageInfo)

---



<a id="latest-connections-nonreturnablelineitemconnection"></a>


## Non​Returnable​Line​Item​Connection

connection

An auto-generated type for paginating through multiple NonReturnableLineItems.

### Fields with this connection

* [Order​Return​Information.nonReturnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.nonReturnableLineItems)

  OBJECT

  The return information for a specific order.

***

### Possible returns

* edges

  [\[Non​Returnable​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Non​Returnable​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in NonReturnableLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order​Return​Information.nonReturnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.nonReturnableLineItems)

#### Possible returns

* [Non​Returnable​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection#returns-edges)
* [Non​Returnable​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection#returns-nodes)
* [Non​Returnable​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/NonReturnableLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-orderconnection"></a>


## Order​Connection

connection

An auto-generated type for paginating through multiple Orders.

### Fields with this connection

* [Company.orders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders)

  OBJECT

  Represents a company's information.

* [Company​Contact.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders)

  OBJECT

  Represents the customer's contact information.

* [Company​Location.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)

  OBJECT

  Represents a company's business location.

* [Customer.orders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Subscription​Contract.orders](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)

  OBJECT

  A Subscription Contract.

* [Subscription​Contract​Base.orders](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-orders)

  INTERFACE

  The common fields of a subscription contract.

***

### Possible returns

* edges

  [\[Order​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/OrderEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Order!\]!](https://shopify.dev/docs/api/customer/latest/objects/Order)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in OrderEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company.orders](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders)
* [Company​Contact.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders)
* [Company​Location.orders](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders)
* [Customer.orders](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders)
* [Subscription​Contract.orders](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.orders)
* [Subscription​Contract​Base.orders](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-orders)

#### Possible returns

* [Order​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection#returns-edges)
* [Order​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection#returns-nodes)
* [Order​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/OrderConnection#returns-pageInfo)

---



<a id="latest-connections-paymentscheduleconnection"></a>


## Payment​Schedule​Connection

connection

An auto-generated type for paginating through multiple PaymentSchedules.

### Fields with this connection

* [Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

  OBJECT

  The payment terms associated with an order or draft order.

***

### Possible returns

* edges

  [\[Payment​Schedule​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/PaymentScheduleEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Payment​Schedule!\]!](https://shopify.dev/docs/api/customer/latest/objects/PaymentSchedule)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in PaymentScheduleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Payment​Terms.paymentSchedules](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules)

#### Possible returns

* [Payment​Schedule​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection#returns-edges)
* [Payment​Schedule​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection#returns-nodes)
* [Payment​Schedule​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/PaymentScheduleConnection#returns-pageInfo)

---



<a id="latest-connections-returnconnection"></a>


## Return​Connection

connection

An auto-generated type for paginating through multiple Returns.

### Fields with this connection

* [Order.returns](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returns)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Return​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return!\]!](https://shopify.dev/docs/api/customer/latest/objects/Return)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ReturnEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.returns](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returns)

#### Possible returns

* [Return​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection#returns-edges)
* [Return​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection#returns-nodes)
* [Return​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnConnection#returns-pageInfo)

---



<a id="latest-connections-returnlineitemtypeconnection"></a>


## Return​Line​Item​Type​Connection

connection

An auto-generated type for paginating through multiple ReturnLineItemTypes.

### Fields with this connection

* [Return.returnLineItems](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.returnLineItems)

  OBJECT

  A product return.

***

### Possible returns

* edges

  [\[Return​Line​Item​Type​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItemTypeEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return​Line​Item​Type!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ReturnLineItemTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.returnLineItems](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.returnLineItems)

#### Possible returns

* [Return​Line​Item​Type​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ReturnLineItemTypeConnection#returns-edges)
* [Return​Line​Item​Type​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnLineItemTypeConnection#returns-nodes)
* [Return​Line​Item​Type​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnLineItemTypeConnection#returns-pageInfo)

---



<a id="latest-connections-returnreasondefinitionconnection"></a>


## Return​Reason​Definition​Connection

connection

An auto-generated type for paginating through multiple ReturnReasonDefinitions.

### Fields with this connection

* [Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

  OBJECT

  A single line item in an order.

***

### Possible returns

* edges

  [\[Return​Reason​Definition​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinitionEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Return​Reason​Definition!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinition)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ReturnReasonDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Line​Item.suggestedReturnReasonDefinitions](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions)

#### Possible returns

* [Return​Reason​Definition​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection#returns-edges)
* [Return​Reason​Definition​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection#returns-nodes)
* [Return​Reason​Definition​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnReasonDefinitionConnection#returns-pageInfo)

---



<a id="latest-connections-returnablelineitemconnection"></a>


## Returnable​Line​Item​Connection

connection

An auto-generated type for paginating through multiple ReturnableLineItems.

### Fields with this connection

* [Order​Return​Information.returnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.returnableLineItems)

  OBJECT

  The return information for a specific order.

***

### Possible returns

* edges

  [\[Returnable​Line​Item​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnableLineItemEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Returnable​Line​Item!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnableLineItem)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ReturnableLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order​Return​Information.returnableLineItems](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.returnableLineItems)

#### Possible returns

* [Returnable​Line​Item​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection#returns-edges)
* [Returnable​Line​Item​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection#returns-nodes)
* [Returnable​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReturnableLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-reversedeliveryconnection"></a>


## Reverse​Delivery​Connection

connection

An auto-generated type for paginating through multiple ReverseDeliveries.

### Fields with this connection

* [Return.reverseDeliveries](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.reverseDeliveries)

  OBJECT

  A product return.

***

### Possible returns

* edges

  [\[Reverse​Delivery​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Reverse​Delivery!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReverseDelivery)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in ReverseDeliveryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Return.reverseDeliveries](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.reverseDeliveries)

#### Possible returns

* [Reverse​Delivery​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection#returns-edges)
* [Reverse​Delivery​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection#returns-nodes)
* [Reverse​Delivery​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/ReverseDeliveryConnection#returns-pageInfo)

---



<a id="latest-connections-saleconnection"></a>


## Sale​Connection

connection

An auto-generated type for paginating through multiple Sales.

### Fields with this connection

* [Order​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)

  OBJECT

  An agreement associated with an order placement.

* [Order​Edit​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)

  OBJECT

  An agreement related to an edit of the order.

* [Refund​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)

  OBJECT

  An agreement for refunding all or a portion of the order between the merchant and the customer.

* [Return​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)

  OBJECT

  An agreement between the merchant and customer for a return.

* [Sales​Agreement.sales](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement#fields-sales)

  INTERFACE

  A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

***

### Possible returns

* edges

  [\[Sale​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SaleEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Sale!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/Sale)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SaleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.sales)
* [Order​Edit​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.sales)
* [Refund​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.sales)
* [Return​Agreement.sales](https://shopify.dev/docs/api/customer/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.sales)
* [Sales​Agreement.sales](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement#fields-sales)

#### Possible returns

* [Sale​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection#returns-edges)
* [Sale​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection#returns-nodes)
* [Sale​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SaleConnection#returns-pageInfo)

---



<a id="latest-connections-salesagreementconnection"></a>


## Sales​Agreement​Connection

connection

An auto-generated type for paginating through multiple SalesAgreements.

### Fields with this connection

* [Order.agreements](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.agreements)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Sales​Agreement​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SalesAgreementEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Sales​Agreement!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SalesAgreementEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Order.agreements](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.agreements)

#### Possible returns

* [Sales​Agreement​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SalesAgreementConnection#returns-edges)
* [Sales​Agreement​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SalesAgreementConnection#returns-nodes)
* [Sales​Agreement​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SalesAgreementConnection#returns-pageInfo)

---



<a id="latest-connections-storecreditaccountconnection"></a>


## Store​Credit​Account​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccounts.

### Fields with this connection

* [Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)

  OBJECT

  Represents a company's business location.

* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

  INTERFACE

  Represents information about the store credit accounts associated to the specified owner.

***

### Possible returns

* edges

  [\[Store​Credit​Account​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account!\]!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in StoreCreditAccountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Company​Location.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts)
* [Customer.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.storeCreditAccounts)
* [Has​Store​Credit​Accounts.storeCreditAccounts](https://shopify.dev/docs/api/customer/latest/interfaces/HasStoreCreditAccounts#fields-storeCreditAccounts)

#### Possible returns

* [Store​Credit​Account​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection#returns-edges)
* [Store​Credit​Account​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection#returns-nodes)
* [Store​Credit​Account​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountConnection#returns-pageInfo)

---



<a id="latest-connections-storecreditaccounttransactionconnection"></a>


## Store​Credit​Account​Transaction​Connection

connection

An auto-generated type for paginating through multiple StoreCreditAccountTransactions.

### Fields with this connection

* [Store​Credit​Account.transactions](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

  OBJECT

  A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

  The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

***

### Possible returns

* edges

  [\[Store​Credit​Account​Transaction​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountTransactionEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Store​Credit​Account​Transaction!\]!](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in StoreCreditAccountTransactionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Store​Credit​Account.transactions](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions)

#### Possible returns

* [Store​Credit​Account​Transaction​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountTransactionConnection#returns-edges)
* [Store​Credit​Account​Transaction​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountTransactionConnection#returns-nodes)
* [Store​Credit​Account​Transaction​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/StoreCreditAccountTransactionConnection#returns-pageInfo)

---



<a id="latest-connections-subscriptionbillingcycleconnection"></a>


## Subscription​Billing​Cycle​Connection

connection

An auto-generated type for paginating through multiple SubscriptionBillingCycles.

### Fields with this connection

* [Subscription​Contract.upcomingBillingCycles](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.upcomingBillingCycles)

  OBJECT

  A Subscription Contract.

***

### Possible returns

* edges

  [\[Subscription​Billing​Cycle​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Billing​Cycle!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SubscriptionBillingCycleEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Contract.upcomingBillingCycles](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.upcomingBillingCycles)

#### Possible returns

* [Subscription​Billing​Cycle​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection#returns-edges)
* [Subscription​Billing​Cycle​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection#returns-nodes)
* [Subscription​Billing​Cycle​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionBillingCycleConnection#returns-pageInfo)

---



<a id="latest-connections-subscriptioncontractconnection"></a>


## Subscription​Contract​Connection

connection

An auto-generated type for paginating through multiple SubscriptionContracts.

### Fields with this connection

* [Customer.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts)

  OBJECT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Order.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.subscriptionContracts)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Possible returns

* edges

  [\[Subscription​Contract​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Contract!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SubscriptionContractEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Customer.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts)
* [Order.subscriptionContracts](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.subscriptionContracts)

#### Possible returns

* [Subscription​Contract​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection#returns-edges)
* [Subscription​Contract​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection#returns-nodes)
* [Subscription​Contract​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionContractConnection#returns-pageInfo)

---



<a id="latest-connections-subscriptiondiscountconnection"></a>


## Subscription​Discount​Connection

connection

An auto-generated type for paginating through multiple SubscriptionDiscounts.

### Fields with this connection

* [Subscription​Contract.discounts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)

  OBJECT

  A Subscription Contract.

* [Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-discounts)

  INTERFACE

  The common fields of a subscription contract.

***

### Possible returns

* edges

  [\[Subscription​Discount​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscountEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Discount!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SubscriptionDiscountEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Contract.discounts](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.discounts)
* [Subscription​Contract​Base.discounts](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-discounts)

#### Possible returns

* [Subscription​Discount​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection#returns-edges)
* [Subscription​Discount​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection#returns-nodes)
* [Subscription​Discount​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionDiscountConnection#returns-pageInfo)

---



<a id="latest-connections-subscriptionlineconnection"></a>


## Subscription​Line​Connection

connection

An auto-generated type for paginating through multiple SubscriptionLines.

### Fields with this connection

* [Subscription​Contract.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)

  OBJECT

  A Subscription Contract.

* [Subscription​Contract​Base.lines](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-lines)

  INTERFACE

  The common fields of a subscription contract.

* [Subscription​Discount.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.lines)

  OBJECT

  A discount applied to a subscription contract.

***

### Possible returns

* edges

  [\[Subscription​Line​Edge!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLineEdge)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Subscription​Line!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  A list of nodes that are contained in SubscriptionLineEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/customer/latest/objects/PageInfo)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

### Map

#### Fields with this connection

* [Subscription​Contract.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lines)
* [Subscription​Contract​Base.lines](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-lines)
* [Subscription​Discount.lines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.lines)

#### Possible returns

* [Subscription​Line​Connection.edges](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection#returns-edges)
* [Subscription​Line​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection#returns-nodes)
* [Subscription​Line​Connection.pageInfo](https://shopify.dev/docs/api/customer/latest/connections/SubscriptionLineConnection#returns-pageInfo)

---



<a id="latest-input-objects-calculatereturninput"></a>


## Calculate​Return​Input

input\_object

The input fields to calculate return amounts associated with an order.

### Fields

* order​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the order that will be returned.

* return​Line​Items

  [\[Calculate​Return​Line​Item​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnLineItemInput)

  required

  The line items from the order to include in the return.

***

### Map

No referencing types

---



<a id="latest-input-objects-calculatereturnlineiteminput"></a>


## Calculate​Return​Line​Item​Input

input\_object

The input fields for return line items on a calculated return.

### Fields

* line​Item​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the line item to be returned.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of the item to be returned.Quantity can't exceed the line item's fulfilled quantity.

***

### Input objects using this input

* [Calculate​Return​Input.returnLineItems](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnInput#fields-returnLineItems)

  INPUT OBJECT

  The input fields to calculate return amounts associated with an order.

***

### Map

#### Input objects using this input

* [Calculate​Return​Input.returnLineItems](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnInput#fields-returnLineItems)

---



<a id="latest-input-objects-companyaddressinput"></a>


## Company​Address​Input

input\_object

The input fields for creating or updating a company location address.

### Fields

* address1

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first line of the address, typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The second line of the address, typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the city, district, village, or town.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/customer/latest/enums/CountryCode)

  The two-letter code for the country of the address.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first name in the address.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The last name in the address.

* phone

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  A unique phone number for the business location, formatted using the E.164 standard, for example, *+16135551111*.

* recipient

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The identity of the recipient, for example, 'Receiving Department'.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The code for the region of the address, such as the province, state, or district, for example, QC for Quebec, Canada.

***

### Map

No referencing types

---



<a id="latest-input-objects-customeraddressinput"></a>


## Customer​Address​Input

input\_object

The input fields to create or update a mailing address.

### Fields

* address1

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The second line of the address. Typically the apartment, suite, or unit number.

* city

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The name of the customer's company or organization.

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The last name of the customer.

* phone​Number

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The customer's unique phone number, formatted using E.164 standard. For example, *+16135551111*.

* territory​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The country code, in ISO 3166-1 format. Accepts either a two-letter [alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2), a three-letter [alpha-3 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3), or a three-digit [numeric code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric). For example, `US`, `USA`, or `840` represents the United States.

* zip

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The zip or postal code of the address.

* zone​Code

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The alphanumeric code for the region of the address, such as the province, state, or district. For example, 'ON' for Ontario, Canada.

***

### Input objects using this input

* [Subscription​Delivery​Method​Local​Delivery​Input.deliveryAddress](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-deliveryAddress)

  INPUT OBJECT

  The input fields for a local delivery method.

* [Subscription​Delivery​Method​Shipping​Input.shippingAddress](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodShippingInput#fields-shippingAddress)

  INPUT OBJECT

  The input fields for a shipping delivery method.

***

### Map

#### Input objects using this input

* [Subscription​Delivery​Method​Local​Delivery​Input.deliveryAddress](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-deliveryAddress)
* [Subscription​Delivery​Method​Shipping​Input.shippingAddress](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodShippingInput#fields-shippingAddress)

---



<a id="latest-input-objects-customerupdateinput"></a>


## Customer​Update​Input

input\_object

The input fields to update a customer's personal information.

### Fields

* first​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The customer's first name.

* last​Name

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The customer's last name.

***

### Map

No referencing types

---



<a id="latest-input-objects-hasmetafieldsidentifier"></a>


## Has​Metafields​Identifier

input\_object

The input fields to identify a metafield on an owner resource by namespace and key.

### Fields

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The identifier for the metafield.

* namespace

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  A container for a set of metafields.

***

### Map

No referencing types

---



<a id="latest-input-objects-imagetransforminput"></a>


## Image​Transform​Input

input\_object

The available options for transforming an image.

All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

### Fields

* crop

  [Crop​Region](https://shopify.dev/docs/api/customer/latest/enums/CropRegion)

  The region of the image to remain after cropping. Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal. The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result in an image with a width of 5 and height of 10, where the right side of the image is removed.

* max​Height

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  Image height in pixels between 1 and 5760.

* max​Width

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  Image width in pixels between 1 and 5760.

* preferred​Content​Type

  [Image​Content​Type](https://shopify.dev/docs/api/customer/latest/enums/ImageContentType)

  Convert the source image into the preferred content type. Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.

* scale

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  Default:1

  Image size multiplier for high-resolution retina displays. Must be within 1..3.

***

### Map

No referencing types

---



<a id="latest-input-objects-metafieldidentifierinput"></a>


## Metafield​Identifier​Input

input\_object

The input fields that identify metafields.

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

  The unique ID of the resource that the metafield is attached to.

***

### Map

No referencing types

---



<a id="latest-input-objects-metafieldssetinput"></a>


## Metafields​Set​Input

input\_object

The input fields for a metafield value to set.

### Fields

* compare​Digest

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The `compareDigest` value obtained from a previous query. Provide this with updates to ensure the metafield is modified safely.

* key

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The unique identifier for a metafield within its namespace. Must be 2-64 characters long and can contain alphanumeric, hyphen, and underscore characters.

* namespace

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The container for a group of metafields that the metafield is or will be associated with. Used in tandem with `key` to lookup a metafield on a resource, preventing conflicts with other metafields with the same `key`. Must be 3-255 characters long and can contain alphanumeric, hyphen, and underscore characters.

* owner​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The unique ID of the resource that the metafield is attached to.

* type

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The type of data that is stored in the metafield. The type must be one of the [supported types](https://shopify.dev/apps/metafields/types). Required when there is no corresponding definition for the given `namespace`, `key`, and owner resource type (derived from `ownerId`).

* value

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

***

### Map

No referencing types

---



<a id="latest-input-objects-requestedlineiteminput"></a>


## Requested​Line​Item​Input

input\_object

The input fields for a line item requested for return.

### Fields

* customer​Note

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  A note from the customer explaining the item to be returned. For instance, the note can detail issues with the item for the merchant's information. Maximum length: 300 characters.

* line​Item​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the line item that the customer wants to return.

* quantity

  [Int!](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  non-null

  The quantity of the line item that the customer wants to return.

* return​Reason​Definition​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  The ID of a [`ReturnReasonDefinition`](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinition). Use [`LineItem.suggestedReturnReasonDefinitions`](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions) to get reasons tailored to the product's category.

***

### Map

No referencing types

---



<a id="latest-input-objects-subscriptionbillingcycleinput"></a>


## Subscription​Billing​Cycle​Input

input\_object

The input fields for specifying the subscription contract and selecting the associated billing cycle.

### Fields

* contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the subscription contract associated with the billing cycle.

* selector

  [Subscription​Billing​Cycle​Selector!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleSelector)

  required

  Selects the billing cycle by date or index.

***

### Map

No referencing types

---



<a id="latest-input-objects-subscriptionbillingcycleselector"></a>


## Subscription​Billing​Cycle​Selector

input\_object

The input fields to select a SubscriptionBillingCycle by either date or index.

### Fields

* date

  [Date​Time](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  The date to select a billing cycle.

* index

  [Int](https://shopify.dev/docs/api/customer/latest/scalars/Int)

  The index to select a billing cycle.

***

### Input objects using this input

* [Subscription​Billing​Cycle​Input.selector](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput#fields-selector)

  INPUT OBJECT

  The input fields for specifying the subscription contract and selecting the associated billing cycle.

***

### Map

#### Input objects using this input

* [Subscription​Billing​Cycle​Input.selector](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput#fields-selector)

---



<a id="latest-input-objects-subscriptiondeliverymethodinput"></a>


## Subscription​Delivery​Method​Input

input\_object

Specifies delivery method fields for a subscription contract. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

### Fields

* local​Delivery

  [Subscription​Delivery​Method​Local​Delivery​Input](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput)

  The input fields for the local delivery method.

* pickup

  [Subscription​Delivery​Method​Pickup​Input](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodPickupInput)

  The input fields for the pickup delivery method.

* shipping

  [Subscription​Delivery​Method​Shipping​Input](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodShippingInput)

  The input fields for the shipping delivery method.

***

### Map

No referencing types

---



<a id="latest-input-objects-subscriptiondeliverymethodlocaldeliveryinput"></a>


## Subscription​Delivery​Method​Local​Delivery​Input

input\_object

The input fields for a local delivery method.

### Fields

* delivery​Address

  [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

  The address to deliver to.

* instructions

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The delivery instructions that the customer can provide to the merchant.

* phone

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  non-null

  The phone number that the customer must provide to the merchant. Formatted using E.164 standard. For example, `+16135551111`.

***

### Input objects using this input

* [Subscription​Delivery​Method​Input.localDelivery](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-localDelivery)

  INPUT OBJECT

  Specifies delivery method fields for a subscription contract. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

### Map

#### Input objects using this input

* [Subscription​Delivery​Method​Input.localDelivery](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-localDelivery)

---



<a id="latest-input-objects-subscriptiondeliverymethodpickupinput"></a>


## Subscription​Delivery​Method​Pickup​Input

input\_object

The input fields for a pickup delivery method.

### Fields

* location​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  non-null

  The ID of the pickup location.

***

### Input objects using this input

* [Subscription​Delivery​Method​Input.pickup](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-pickup)

  INPUT OBJECT

  Specifies delivery method fields for a subscription contract. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

### Map

#### Input objects using this input

* [Subscription​Delivery​Method​Input.pickup](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-pickup)

---



<a id="latest-input-objects-subscriptiondeliverymethodshippinginput"></a>


## Subscription​Delivery​Method​Shipping​Input

input\_object

The input fields for a shipping delivery method.

### Fields

* shipping​Address

  [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

  The address to ship to.

***

### Input objects using this input

* [Subscription​Delivery​Method​Input.shipping](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-shipping)

  INPUT OBJECT

  Specifies delivery method fields for a subscription contract. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

### Map

#### Input objects using this input

* [Subscription​Delivery​Method​Input.shipping](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput#fields-shipping)

---



<a id="latest-interfaces-discountapplication"></a>


## Discount​Application

interface

Captures the intentions of a discount source at the time of application.

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

* value

  [Pricing​Value!](https://shopify.dev/docs/api/customer/latest/unions/PricingValue)

  non-null[Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The value of the discount application.

***

###### Variables

```json
{
	"allocationMethod": "",
	"targetSelection": "",
	"targetType": "",
	"value": ""
}
```

###### Schema

```graphql
interface DiscountApplication {
  allocationMethod: DiscountApplicationAllocationMethod!
  targetSelection: DiscountApplicationTargetSelection!
  targetType: DiscountApplicationTargetType!
  value: PricingValue!
}
```

---



<a id="latest-interfaces-displayableerror"></a>


## Displayable​Error

interface

Represents an error in the input of a mutation.

### Fields

* field

  [\[String!\]](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

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



<a id="latest-interfaces-hascomparedigest"></a>


## Has​Compare​Digest

interface

Represents a summary of the current version of data in a resource.

The `compare_digest` field can be used as input for mutations that implement a compare-and-swap mechanism.

### Fields

* compare​Digest

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

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



<a id="latest-interfaces-hasmetafields"></a>


## Has​Metafields

interface

The information about the metafields associated with the specified resource.

### Fields

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

***

###### Variables

```json
{
	"metafield": {
		"namespace": "",
		"key": ""
	},
	"metafields": [
		{
			"identifiers": ""
		}
	]
}
```

###### Schema

```graphql
interface HasMetafields {
  metafield: Metafield
  metafields: [Metafield]!
}
```

---



<a id="latest-interfaces-hasstorecreditaccounts"></a>


## Has​Store​Credit​Accounts

interface

Represents information about the store credit accounts associated to the specified owner.

### Fields

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



<a id="latest-interfaces-media"></a>


## Media

interface

Represents a media interface.

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

***

###### Variables

```json
{
	"alt": "",
	"id": "",
	"mediaContentType": "",
	"previewImage": ""
}
```

###### Schema

```graphql
interface Media {
  alt: String
  id: ID!
  mediaContentType: MediaContentType!
  previewImage: Image
}
```

---



<a id="latest-interfaces-paymenticon"></a>


## Payment​Icon

interface

The payment icon to display for the transaction.

### Fields

* payment​Icon

  [Payment​Icon​Image](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage)

  [Pre-auth accessible](https://shopify.dev/docs/apps/build/customer-accounts/order-status-page#customer-account-api)

  The payment icon to display for the transaction.

***

###### Variables

```json
{
	"paymentIcon": ""
}
```

###### Schema

```graphql
interface PaymentIcon {
  paymentIcon: PaymentIconImage
}
```

---



<a id="latest-interfaces-returnfee"></a>


## Return​Fee

interface

A fee associated with the processing of a return.

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

###### Variables

```json
{
	"amountSet": "",
	"title": ""
}
```

###### Schema

```graphql
interface ReturnFee {
  amountSet: MoneyBag!
  title: String!
}
```

---



<a id="latest-interfaces-returnlineitemtype"></a>


## Return​Line​Item​Type

interface

A line item that has been returned.

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

###### Variables

```json
{
	"id": "",
	"lineItem": "",
	"quantity": "",
	"returnReason": "",
	"returnReasonDefinition": ""
}
```

###### Schema

```graphql
interface ReturnLineItemType {
  id: ID!
  lineItem: LineItem!
  quantity: Int!
  returnReason: ReturnReason!
  returnReasonDefinition: ReturnReasonDefinition
}
```

---



<a id="latest-interfaces-sale"></a>


## Sale

interface

A record of an individual sale associated with a sales agreement. Every monetary value in an order's sales data is represented in the smallest unit of the currency. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

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
  totalAmount: MoneyV2!
  totalDiscountAmountAfterTaxes: MoneyV2!
  totalDiscountAmountBeforeTaxes: MoneyV2!
  totalTaxAmount: MoneyV2!
}
```

---



<a id="latest-interfaces-salesagreement"></a>


## Sales​Agreement

interface

A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

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

###### Variables

```json
{
	"happenedAt": "",
	"id": "",
	"reason": "",
	"sales": {
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
interface SalesAgreement {
  happenedAt: DateTime!
  id: ID!
  reason: OrderActionType!
  sales: SaleConnection!
}
```

---



<a id="latest-interfaces-storecreditaccounttransaction"></a>


## Store​Credit​Account​Transaction

interface

Interface for a store credit account transaction.

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

* origin

  [Store​Credit​Account​Transaction​Origin](https://shopify.dev/docs/api/customer/latest/unions/StoreCreditAccountTransactionOrigin)

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



<a id="latest-interfaces-subscriptioncontractbase"></a>


## Subscription​Contract​Base

interface

The common fields of a subscription contract.

### Fields

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

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/customer/latest/scalars/DateTime)

  non-null

  The date and time when the subscription contract was updated.

***

###### Variables

```json
{
	"currencyCode": "",
	"customAttributes": "",
	"deliveryMethod": "",
	"deliveryPrice": "",
	"discounts": {
		"first": "",
		"after": "",
		"last": "",
		"before": "",
		"reverse": ""
	},
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
  currencyCode: CurrencyCode!
  customAttributes: [Attribute!]!
  deliveryMethod: SubscriptionDeliveryMethod
  deliveryPrice: MoneyV2!
  discounts: SubscriptionDiscountConnection
  lines: SubscriptionLineConnection!
  linesCount: Count
  note: String
  orders: OrderConnection!
  updatedAt: DateTime!
}
```

---



<a id="latest-mutations-companylocationassignaddress"></a>


## company​Location​Assign​Address

mutation

Updates an address on a company location.

### Arguments

* address

  [Company​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput)

  required

  The input fields to use to update the address.

* address​Types

  [\[Company​Address​Type!\]!](https://shopify.dev/docs/api/customer/latest/enums/CompanyAddressType)

  required

  The list of address types on the location to update.

* location​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the company location to update addresses on.

***

### Company​Location​Assign​Address​Payload returns

* addresses

  [\[Company​Address!\]](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress)

  The list of updated addresses on the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### companyLocationAssignAddress reference

---



<a id="latest-mutations-customeraddresscreate"></a>


## customer​Address​Create

mutation

Creates a new address for a customer.

### Arguments

* address

  [Customer​Address​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

  required

  Specifies the fields to use when creating the address.

* default​Address

  [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  Default:false

  The flag to set the address as the default address.

***

### Customer​Address​Create​Payload returns

* customer​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The created customer address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressCreate reference

---



<a id="latest-mutations-customeraddressdelete"></a>


## customer​Address​Delete

mutation

Deletes a specific address for a customer.

### Arguments

* address​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the address to be deleted.

***

### Customer​Address​Delete​Payload returns

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressDelete reference

---



<a id="latest-mutations-customeraddressupdate"></a>


## customer​Address​Update

mutation

Updates a specific address for a customer.

### Arguments

* address

  [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

  Specifies the fields to use when updating the address.

* address​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the address to be updated.

* default​Address

  [Boolean](https://shopify.dev/docs/api/customer/latest/scalars/Boolean)

  Default:null

  The flag to set the address as the default address.

***

### Customer​Address​Update​Payload returns

* customer​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The updated address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressUpdate reference

---



<a id="latest-mutations-customeremailmarketingsubscribe"></a>


## customer​Email​Marketing​Subscribe

mutation

Subscribes the customer to email marketing.

### Customer​Email​Marketing​Subscribe​Payload returns

* email​Address

  [Customer​Email​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress)

  The customer's email address that's subscribed to the email marketing.

* user​Errors

  [\[User​Errors​Customer​Email​Marketing​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerEmailMarketingSubscribe reference

---



<a id="latest-mutations-customeremailmarketingunsubscribe"></a>


## customer​Email​Marketing​Unsubscribe

mutation

Unsubscribes the customer from email marketing.

### Customer​Email​Marketing​Unsubscribe​Payload returns

* email​Address

  [Customer​Email​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress)

  The customer's email address that's unsubscribed from the email marketing.

* user​Errors

  [\[User​Errors​Customer​Email​Marketing​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerEmailMarketingUnsubscribe reference

---



<a id="latest-mutations-customerupdate"></a>


## customer​Update

mutation

Updates the customer's personal information.

### Arguments

* input

  [Customer​Update​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerUpdateInput)

  required

  Specifies the input fields for the customer update.

***

### Customer​Update​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  The customer's personal information that has been updated.

* user​Errors

  [\[User​Errors​Customer​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### Updates a customer's first and last name

  #### Description

  Update a customer's first and last name

  #### Query

  ```graphql
  mutation customerUpdate($input: CustomerUpdateInput!) {
    customerUpdate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        firstName
        lastName
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "input": {
      "firstName": "Quinn",
      "lastName": "Ishida"
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "mutation customerUpdate($input: CustomerUpdateInput!) { customerUpdate(input: $input) { userErrors { field message } customer { firstName lastName } } }",
   "variables": {
      "input": {
        "firstName": "Quinn",
        "lastName": "Ishida"
      }
    }
  }'
  ```

  #### Response

  ```json
  {
    "customerUpdate": {
      "userErrors": [],
      "customer": {
        "firstName": "Quinn",
        "lastName": "Ishida"
      }
    }
  }
  ```

* ### customerUpdate reference

---



<a id="latest-mutations-metafieldsdelete"></a>


## metafields​Delete

mutation

Deletes multiple metafields in bulk.

### Arguments

* metafields

  [\[Metafield​Identifier​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput)

  required

  A list of identifiers specifying metafields to delete. At least one identifier must be specified.

***

### Metafields​Delete​Payload returns

* deleted​Metafields

  [\[Metafield​Identifier\]](https://shopify.dev/docs/api/customer/latest/objects/MetafieldIdentifier)

  List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.

* user​Errors

  [\[Metafields​Delete​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### metafieldsDelete reference

---



<a id="latest-mutations-metafieldsset"></a>


## metafields​Set

mutation

Sets metafield values. Metafield values will be set regardless if they were previously created or not.

Allows a maximum of 25 metafields to be set at a time.

This operation is atomic, meaning no changes are persisted if an error is encountered.

As of `2024-07`, this operation supports compare-and-set functionality to better handle concurrent requests. If `compareDigest` is set for any metafield, the mutation will only set that metafield if the persisted metafield value matches the digest used on `compareDigest`. If the metafield doesn't exist yet, but you want to guarantee that the operation will run in a safe manner, set `compareDigest` to `null`. The `compareDigest` value can be acquired by querying the metafield object and selecting `compareDigest` as a field. If the `compareDigest` value does not match the digest for the persisted value, the mutation will return an error. You can opt out of write guarantees by not sending `compareDigest` in the request.

### Arguments

* metafields

  [\[Metafields​Set​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput)

  required

  The list of metafield values to set. Maximum of 25.

***

### Metafields​Set​Payload returns

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  The list of metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### Create and update metafields

  #### Description

  Create and update operations are combined in the \`metafieldSet\` mutation. The following example shows you how to create one new metafield, \`key: "title"\`, and update an existing metafield, \`key: "nickname"\` in one mutation.

  #### Query

  ```graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "metafields": [
      {
        "key": "nickname",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Customer/624407574",
        "type": "single_line_text_field",
        "value": "Big Tuna"
      },
      {
        "key": "title",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Customer/624407574",
        "type": "single_line_text_field",
        "value": "Dr."
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
   "variables": {
      "metafields": [
        {
          "key": "nickname",
          "namespace": "my_fields",
          "ownerId": "gid://shopify/Customer/624407574",
          "type": "single_line_text_field",
          "value": "Big Tuna"
        },
        {
          "key": "title",
          "namespace": "my_fields",
          "ownerId": "gid://shopify/Customer/624407574",
          "type": "single_line_text_field",
          "value": "Dr."
        }
      ]
    }
  }'
  ```

  #### Response

  ```json
  {
    "metafieldsSet": {
      "metafields": [
        {
          "key": "nickname",
          "namespace": "my_fields",
          "value": "Big Tuna",
          "createdAt": "2024-11-13T20:03:35Z",
          "updatedAt": "2024-11-13T20:03:38Z"
        },
        {
          "key": "title",
          "namespace": "my_fields",
          "value": "Dr.",
          "createdAt": "2024-11-13T20:03:38Z",
          "updatedAt": "2024-11-13T20:03:38Z"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### Creating and updating metafields using compare-and-swap (CAS)

  #### Description

  Create and update operations are combined in the \`metafieldSet\` mutation. The following example shows you how to create one new metafield, \`key: "title"\`, and update an existing metafield, \`key: "nickname"\` in one mutation in a safer way with compare-and-swap (CAS) through the \`compareDigest\` field.

  #### Query

  ```graphql
  mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields {
        key
        namespace
        value
        createdAt
        updatedAt
      }
      userErrors {
        field
        message
        code
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "metafields": [
      {
        "key": "nickname",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Customer/624407574",
        "type": "single_line_text_field",
        "value": "Big Tuna",
        "compareDigest": "8ac49f51d020905227c0bc6d040a035396ec518dbda59d6bb53df3f718fb9f35"
      },
      {
        "key": "title",
        "namespace": "my_fields",
        "ownerId": "gid://shopify/Customer/624407574",
        "type": "single_line_text_field",
        "value": "Dr.",
        "compareDigest": null
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) { metafieldsSet(metafields: $metafields) { metafields { key namespace value createdAt updatedAt } userErrors { field message code } } }",
   "variables": {
      "metafields": [
        {
          "key": "nickname",
          "namespace": "my_fields",
          "ownerId": "gid://shopify/Customer/624407574",
          "type": "single_line_text_field",
          "value": "Big Tuna",
          "compareDigest": "8ac49f51d020905227c0bc6d040a035396ec518dbda59d6bb53df3f718fb9f35"
        },
        {
          "key": "title",
          "namespace": "my_fields",
          "ownerId": "gid://shopify/Customer/624407574",
          "type": "single_line_text_field",
          "value": "Dr.",
          "compareDigest": null
        }
      ]
    }
  }'
  ```

  #### Response

  ```json
  {
    "metafieldsSet": {
      "metafields": [
        {
          "key": "nickname",
          "namespace": "my_fields",
          "value": "Big Tuna",
          "createdAt": "2024-11-13T20:03:38Z",
          "updatedAt": "2024-11-13T20:03:39Z"
        },
        {
          "key": "title",
          "namespace": "my_fields",
          "value": "Dr.",
          "createdAt": "2024-11-13T20:03:39Z",
          "updatedAt": "2024-11-13T20:03:39Z"
        }
      ],
      "userErrors": []
    }
  }
  ```

* ### metafieldsSet reference

---



<a id="latest-mutations-orderrequestreturn"></a>


## order​Request​Return

mutation

Request a new return on behalf of a customer.

### Arguments

* order​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the order for which this return is being requested.

* requested​Line​Items

  [\[Requested​Line​Item​Input!\]!](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput)

  required

  The line items that are requested to be returned.

***

### Order​Request​Return​Payload returns

* return

  [Return](https://shopify.dev/docs/api/customer/latest/objects/Return)

  The return request that has been made.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### Request a return with a return reason definition

  #### Description

  Request a return on behalf of a customer using the new \`returnReasonDefinitionId\` field. This example demonstrates how to specify a standardized return reason when requesting a return through the Customer API. The \`returnReasonDefinitionId\` should be obtained from available return reason definitions.

  #### Query

  ```graphql
  mutation orderRequestReturn($orderId: ID!, $requestedLineItems: [RequestedLineItemInput!]!) {
    orderRequestReturn(orderId: $orderId, requestedLineItems: $requestedLineItems) {
      return {
        id
        status
        returnLineItems(first: 10) {
          edges {
            node {
              id
              quantity
              returnReasonDefinition {
                handle
                name
                deleted
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "orderId": "gid://shopify/Order/569035839",
    "requestedLineItems": [
      {
        "lineItemId": "gid://shopify/LineItem/353882977",
        "quantity": 1,
        "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
        "customerNote": "The item doesn't fit as expected"
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "mutation orderRequestReturn($orderId: ID!, $requestedLineItems: [RequestedLineItemInput!]!) { orderRequestReturn(orderId: $orderId, requestedLineItems: $requestedLineItems) { return { id status returnLineItems(first: 10) { edges { node { id quantity returnReasonDefinition { handle name deleted } } } } } userErrors { field message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/569035839",
      "requestedLineItems": [
        {
          "lineItemId": "gid://shopify/LineItem/353882977",
          "quantity": 1,
          "returnReasonDefinitionId": "gid://shopify/ReturnReasonDefinition/640710815",
          "customerNote": "The item doesn'\''t fit as expected"
        }
      ]
    }
  }'
  ```

  #### Response

  ```json
  {
    "orderRequestReturn": {
      "return": {
        "id": "gid://shopify/Return/963805104",
        "status": "REQUESTED",
        "returnLineItems": {
          "edges": [
            {
              "node": {
                "id": "gid://shopify/ReturnLineItem/791246336",
                "quantity": 1,
                "returnReasonDefinition": {
                  "handle": "too-small",
                  "name": "Too Small",
                  "deleted": false
                }
              }
            }
          ]
        }
      },
      "userErrors": []
    }
  }
  ```

* ### orderRequestReturn reference

---



<a id="latest-mutations-storefrontcustomeraccesstokencreate"></a>


## storefront​Customer​Access​Token​Create

mutation

Deprecated.

The `storefrontCustomerAccessTokenCreate` is deprecated and will be removed in a future version. Please see [the changelog](https://shopify.dev/changelog/deprecation-of-storefrontcustomeraccesstokencreate-mutation) for more information.

Exchanges the Customer Access Token, provided in the Authorization header, into a Storefront Customer Access Token. Renew this token each time you update the Customer Access Token found in the Authorization header.

### Storefront​Customer​Access​Token​Create​Payload returns

* customer​Access​Token

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The created access token.

* user​Errors

  [\[User​Errors​Storefront​Customer​Access​Token​Create​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsStorefrontCustomerAccessTokenCreateUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### storefrontCustomerAccessTokenCreate reference

---



<a id="latest-mutations-subscriptionbillingcycleskip"></a>


## subscription​Billing​Cycle​Skip

mutation

Skips a Subscription Billing Cycle.

### Arguments

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

  required

  The input object for selecting and using billing cycles.

***

### Subscription​Billing​Cycle​Skip​Payload returns

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Skip​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleSkipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionBillingCycleSkip reference

---



<a id="latest-mutations-subscriptionbillingcycleunskip"></a>


## subscription​Billing​Cycle​Unskip

mutation

Unskips a Subscription Billing Cycle.

### Arguments

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput)

  required

  The input object for selecting and using billing cycles.

***

### Subscription​Billing​Cycle​Unskip​Payload returns

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Unskip​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleUnskipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionBillingCycleUnskip reference

---



<a id="latest-mutations-subscriptioncontractactivate"></a>


## subscription​Contract​Activate

mutation

Activates a Subscription Contract. Contract status must be either active, paused, or failed.

### Arguments

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the subscription contract to activate.

***

### Subscription​Contract​Activate​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The activated Subscription Contract.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionContractActivate reference

---



<a id="latest-mutations-subscriptioncontractcancel"></a>


## subscription​Contract​Cancel

mutation

Cancels a Subscription Contract.

### Arguments

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the Subscription Contract to cancel.

***

### Subscription​Contract​Cancel​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The canceled Subscription Contract.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionContractCancel reference

---



<a id="latest-mutations-subscriptioncontractfetchdeliveryoptions"></a>


## subscription​Contract​Fetch​Delivery​Options

mutation

Fetches the available delivery options for a Subscription Contract.

### Arguments

* address

  [Customer​Address​Input](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput)

  The address to deliver the subscription contract to.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the subscription contract.

***

### Subscription​Contract​Fetch​Delivery​Options​Payload returns

* delivery​Options​Result

  [Subscription​Delivery​Options​Result](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOptionsResult)

  The available delivery options for a given delivery address. Returns `null` for pending requests.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionContractFetchDeliveryOptions reference

---



<a id="latest-mutations-subscriptioncontractpause"></a>


## subscription​Contract​Pause

mutation

Pauses a Subscription Contract.

### Arguments

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the subscription contract to pause.

***

### Subscription​Contract​Pause​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The updated Subscription Contract after the pause operation.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionContractPause reference

---



<a id="latest-mutations-subscriptioncontractselectdeliverymethod"></a>


## subscription​Contract​Select​Delivery​Method

mutation

Selects an option from a delivery options result and updates the delivery method on a Subscription Contract.

### Arguments

* delivery​Method​Input

  [Subscription​Delivery​Method​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodInput)

  required

  The delivery method selected for the subscription contract.

* subscription​Contract​Id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the subscription contract.

* subscription​Delivery​Options​Result​Token

  [String!](https://shopify.dev/docs/api/customer/latest/scalars/String)

  required

  The token associated with the successfully fetched delivery options result for the subscription contract.

***

### Subscription​Contract​Select​Delivery​Method​Payload returns

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The updated subscription contract object.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### subscriptionContractSelectDeliveryMethod reference

---



<a id="latest-payloads-companylocationassignaddresspayload"></a>


## Company​Location​Assign​Address​Payload

payload

Return type for `companyLocationAssignAddress` mutation.

### Fields

* addresses

  [\[Company​Address!\]](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress)

  The list of updated addresses on the company location.

* user​Errors

  [\[Business​Customer​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [company​Location​Assign​Address](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress)

---



<a id="latest-payloads-customeraddresscreatepayload"></a>


## Customer​Address​Create​Payload

payload

Return type for `customerAddressCreate` mutation.

### Fields

* customer​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The created customer address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

***

### Map

#### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressCreate)

---



<a id="latest-payloads-customeraddressdeletepayload"></a>


## Customer​Address​Delete​Payload

payload

Return type for `customerAddressDelete` mutation.

### Fields

* deleted​Address​Id

  [ID](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  The ID of the deleted address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete)

  mutation

  Deletes a specific address for a customer.

  * address​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the address to be deleted.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete)

---



<a id="latest-payloads-customeraddressupdatepayload"></a>


## Customer​Address​Update​Payload

payload

Return type for `customerAddressUpdate` mutation.

### Fields

* customer​Address

  [Customer​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress)

  The updated address.

* user​Errors

  [\[User​Errors​Customer​Address​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate)

---



<a id="latest-payloads-customeremailmarketingsubscribepayload"></a>


## Customer​Email​Marketing​Subscribe​Payload

payload

Return type for `customerEmailMarketingSubscribe` mutation.

### Fields

* email​Address

  [Customer​Email​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress)

  The customer's email address that's subscribed to the email marketing.

* user​Errors

  [\[User​Errors​Customer​Email​Marketing​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)

  mutation

  Subscribes the customer to email marketing.

***

### Map

#### Mutations with this payload

* [customer​Email​Marketing​Subscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingSubscribe)

---



<a id="latest-payloads-customeremailmarketingunsubscribepayload"></a>


## Customer​Email​Marketing​Unsubscribe​Payload

payload

Return type for `customerEmailMarketingUnsubscribe` mutation.

### Fields

* email​Address

  [Customer​Email​Address](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress)

  The customer's email address that's unsubscribed from the email marketing.

* user​Errors

  [\[User​Errors​Customer​Email​Marketing​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

  mutation

  Unsubscribes the customer from email marketing.

***

### Map

#### Mutations with this payload

* [customer​Email​Marketing​Unsubscribe](https://shopify.dev/docs/api/customer/latest/mutations/customerEmailMarketingUnsubscribe)

---



<a id="latest-payloads-customerupdatepayload"></a>


## Customer​Update​Payload

payload

Return type for `customerUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  The customer's personal information that has been updated.

* user​Errors

  [\[User​Errors​Customer​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/customer/latest/mutations/customerUpdate)

---



<a id="latest-payloads-metafieldsdeletepayload"></a>


## Metafields​Delete​Payload

payload

Return type for `metafieldsDelete` mutation.

### Fields

* deleted​Metafields

  [\[Metafield​Identifier\]](https://shopify.dev/docs/api/customer/latest/objects/MetafieldIdentifier)

  List of metafield identifiers that were deleted, null if the corresponding metafield isn't found.

* user​Errors

  [\[Metafields​Delete​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [metafields​Delete](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsDelete)

---



<a id="latest-payloads-metafieldssetpayload"></a>


## Metafields​Set​Payload

payload

Return type for `metafieldsSet` mutation.

### Fields

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/customer/latest/objects/Metafield)

  The list of metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [metafields​Set](https://shopify.dev/docs/api/customer/latest/mutations/metafieldsSet)

---



<a id="latest-payloads-orderrequestreturnpayload"></a>


## Order​Request​Return​Payload

payload

Return type for `orderRequestReturn` mutation.

### Fields

* return

  [Return](https://shopify.dev/docs/api/customer/latest/objects/Return)

  The return request that has been made.

* user​Errors

  [\[Return​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/ReturnUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [order​Request​Return](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn)

---



<a id="latest-payloads-storefrontcustomeraccesstokencreatepayload"></a>


## Storefront​Customer​Access​Token​Create​Payload

payload

Return type for `storefrontCustomerAccessTokenCreate` mutation.

### Fields

* customer​Access​Token

  [String](https://shopify.dev/docs/api/customer/latest/scalars/String)

  The created access token.

* user​Errors

  [\[User​Errors​Storefront​Customer​Access​Token​Create​User​Errors!\]!](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsStorefrontCustomerAccessTokenCreateUserErrors)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [storefront​Customer​Access​Token​Create](https://shopify.dev/docs/api/customer/latest/mutations/storefrontCustomerAccessTokenCreate)

  mutation

  Deprecated

***

### Map

---



<a id="latest-payloads-subscriptionbillingcycleskippayload"></a>


## Subscription​Billing​Cycle​Skip​Payload

payload

Return type for `subscriptionBillingCycleSkip` mutation.

### Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Skip​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleSkipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleSkip)

---



<a id="latest-payloads-subscriptionbillingcycleunskippayload"></a>


## Subscription​Billing​Cycle​Unskip​Payload

payload

Return type for `subscriptionBillingCycleUnskip` mutation.

### Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Unskip​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleUnskipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionBillingCycleUnskip)

---



<a id="latest-payloads-subscriptioncontractactivatepayload"></a>


## Subscription​Contract​Activate​Payload

payload

Return type for `subscriptionContractActivate` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The activated Subscription Contract.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract to activate.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Activate](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate)

---



<a id="latest-payloads-subscriptioncontractcancelpayload"></a>


## Subscription​Contract​Cancel​Payload

payload

Return type for `subscriptionContractCancel` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The canceled Subscription Contract.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract to cancel.

  ***

***

### Map

#### Mutations with this payload

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel)

---



<a id="latest-payloads-subscriptioncontractfetchdeliveryoptionspayload"></a>


## Subscription​Contract​Fetch​Delivery​Options​Payload

payload

Return type for `subscriptionContractFetchDeliveryOptions` mutation.

### Fields

* delivery​Options​Result

  [Subscription​Delivery​Options​Result](https://shopify.dev/docs/api/customer/latest/unions/SubscriptionDeliveryOptionsResult)

  The available delivery options for a given delivery address. Returns `null` for pending requests.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

***

### Map

#### Mutations with this payload

* [subscription​Contract​Fetch​Delivery​Options](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractFetchDeliveryOptions)

---



<a id="latest-payloads-subscriptioncontractpausepayload"></a>


## Subscription​Contract​Pause​Payload

payload

Return type for `subscriptionContractPause` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The updated Subscription Contract after the pause operation.

* user​Errors

  [\[Subscription​Contract​Status​Update​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [subscription​Contract​Pause](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause)

---



<a id="latest-payloads-subscriptioncontractselectdeliverymethodpayload"></a>


## Subscription​Contract​Select​Delivery​Method​Payload

payload

Return type for `subscriptionContractSelectDeliveryMethod` mutation.

### Fields

* contract

  [Subscription​Contract](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract)

  The updated subscription contract object.

* user​Errors

  [\[Subscription​Contract​User​Error!\]!](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

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

### Map

#### Mutations with this payload

* [subscription​Contract​Select​Delivery​Method](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod)

---



<a id="latest-queries-company"></a>


## company

query

The information of the customer's company. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the Company.

***

### Possible returns

* Company

  [Company](https://shopify.dev/docs/api/customer/latest/objects/Company)

  Represents a company's information.

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

### Examples

* ### company reference

---



<a id="latest-queries-companylocation"></a>


## company​Location

query

The Location corresponding to the provided ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the Location.

***

### Possible returns

* Company​Location

  [Company​Location](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation)

  Represents a company's business location.

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

### Examples

* ### companyLocation reference

---



<a id="latest-queries-customer"></a>


## customer

query

Returns the Customer resource. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Possible returns

* Customer

  [Customer!](https://shopify.dev/docs/api/customer/latest/objects/Customer)

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

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

### Examples

* ### With access to all personal data

  #### Description

  Retrieve basic customer information including their first name, last name, and email address. This query returns essential customer details that are commonly needed in customer account interfaces.

  #### Query

  ```graphql
  query {
    customer {
      firstName
      lastName
      emailAddress {
        emailAddress
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "query { customer { firstName lastName emailAddress { emailAddress } } }"
  }'
  ```

  #### Response

  ```json
  {
    "customer": {
      "firstName": "Sally",
      "lastName": "Testopherson",
      "emailAddress": {
        "emailAddress": "testacustomer@example.com"
      }
    }
  }
  ```

* ### Without access to all personal data

  #### Description

  Demonstrates how GraphQL handles access to restricted fields like phoneNumber. When an app doesn't have permission to access certain customer data, the API returns an error with details about the required permissions.

  #### Query

  ```graphql
  query {
    customer {
      firstName
      lastName
      phoneNumber {
        phoneNumber
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/customer/api/2026-04/graphql \
  -H 'Content-Type: application/json' \
  -H 'Authorization: {access_token}' \
  -d '{
  "query": "query { customer { firstName lastName phoneNumber { phoneNumber } } }"
  }'
  ```

  #### Response

  ```json
  {
    "data": {
      "customer": {
        "firstName": "Sally",
        "lastName": "Testopherson",
        "phoneNumber": {
          "phoneNumber": null
        }
      }
    },
    "errors": [
      {
        "message": "This app is not approved to use the phoneNumber field. See https://partners.shopify.com/123/apps/456/customer_data for more details.",
        "locations": [],
        "path": [
          "customer",
          "phoneNumber",
          "phoneNumber"
        ]
      }
    ]
  }
  ```

---



<a id="latest-queries-draftorder"></a>


## draft​Order

query

Returns a draft order resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the draft order to be returned.

***

### Possible returns

* Draft​Order

  [Draft​Order](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder)

  A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

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

### Examples

* ### draftOrder reference

---



<a id="latest-queries-order"></a>


## order

query

Returns an Order resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the Order to return.

***

### Possible returns

* Order

  [Order](https://shopify.dev/docs/api/customer/latest/objects/Order)

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

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

### Examples

* ### order reference

---



<a id="latest-queries-return"></a>


## return

query

Returns a Return resource by ID. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/customer/latest/scalars/ID)

  required

  The ID of the Return.

***

### Possible returns

* Return

  [Return](https://shopify.dev/docs/api/customer/latest/objects/Return)

  A product return.

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

### Examples

* ### return reference

---



<a id="latest-queries-returncalculate"></a>


## return​Calculate

query

The calculated monetary value of the return.

### Arguments

* input

  [Calculate​Return​Input!](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnInput)

  required

  The input fields for calculating a return.

***

### Possible returns

* Calculated​Return

  [Calculated​Return](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn)

  The calculated financial outcome of a return based on the line items requested for return.Includes the monetary values of the line items, along with applicable taxes, discounts, and otherfees on the order. Financial summary may include return fees depending onthe [return rules](https://help.shopify.com/manual/fulfillment/managing-orders/returns/return-rules)at the time the order was placed.

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

### Examples

* ### returnCalculate reference

---



<a id="latest-queries-shop"></a>


## shop

query

Returns the information about the shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

### Possible returns

* Shop

  [Shop!](https://shopify.dev/docs/api/customer/latest/objects/Shop)

  A collection of the general information about the shop.

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

### Examples

* ### shop reference

---



<a id="latest-scalars-boolean"></a>


## Boolean

scalar

Represents `true` or `false` values.

### Map

#### Fields with this scalar

* [Available​Shipping​Rates.ready](https://shopify.dev/docs/api/customer/latest/objects/AvailableShippingRates#field-AvailableShippingRates.fields.ready)
* [Buyer​Experience​Configuration.payNowOnly](https://shopify.dev/docs/api/customer/latest/objects/BuyerExperienceConfiguration#field-BuyerExperienceConfiguration.fields.payNowOnly)
* [Checkout.ready](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.ready)
* [Checkout.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.requiresShipping)
* [Checkout.taxExempt](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.taxExempt)
* [Checkout.taxesIncluded](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.taxesIncluded)
* [Draft​Order.inReview](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.inReview)
* [Draft​Order.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.requiresShipping)
* [Draft​Order.taxExempt](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.taxExempt)
* [Draft​Order.taxesIncluded](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.taxesIncluded)
* [Draft​Order​Line​Item.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.requiresShipping)
* [Draft​Order​Line​Item.taxable](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.taxable)
* [Exchange​Line​Item.productHasOnlyDefaultVariant](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.productHasOnlyDefaultVariant)
* [Fulfillment.isPickedUp](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.isPickedUp)
* [Fulfillment.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.requiresShipping)
* [Line​Item.giftCard](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.giftCard)
* [Line​Item.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.requiresShipping)
* [Order.edited](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.edited)
* [Order.requiresShipping](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.requiresShipping)
* [Order​Return​Information.hasRestockingFee](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.hasRestockingFee)
* [Order​Return​Information.hasReturnShippingFee](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.hasReturnShippingFee)
* [Page​Info.hasNextPage](https://shopify.dev/docs/api/customer/latest/objects/PageInfo#field-PageInfo.fields.hasNextPage)
* [Page​Info.hasPreviousPage](https://shopify.dev/docs/api/customer/latest/objects/PageInfo#field-PageInfo.fields.hasPreviousPage)
* [Payment​Schedule.completed](https://shopify.dev/docs/api/customer/latest/objects/PaymentSchedule#field-PaymentSchedule.fields.completed)
* [Payment​Terms.overdue](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms#field-PaymentTerms.fields.overdue)
* [Return​Reason​Definition.deleted](https://shopify.dev/docs/api/customer/latest/objects/ReturnReasonDefinition#field-ReturnReasonDefinition.fields.deleted)
* [Reverse​Delivery.customerGeneratedLabel](https://shopify.dev/docs/api/customer/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.customerGeneratedLabel)
* [Subscription​Billing​Cycle.edited](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.edited)
* [Subscription​Billing​Cycle.skipped](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.skipped)
* [Subscription​Discount.appliesToAllLines](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.appliesToAllLines)

#### Arguments with this scalar

* [Calculated​Return.returnLineItems(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems.arguments.reverse)
* [Checkout.discountApplications(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications.arguments.reverse)
* [Checkout.lineItems(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems.arguments.reverse)
* [Company.draftOrders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.reverse)
* [Company.locations(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.reverse)
* [Company.orders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.reverse)
* [Company​Address.formattedAddress(withName)](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.formattedAddress.arguments.withName)
* [Company​Address.formattedAddress(withCompanyName)](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.formattedAddress.arguments.withCompanyName)
* [Company​Contact.draftOrders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.reverse)
* [Company​Contact.locations(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.reverse)
* [Company​Contact.orders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.reverse)
* [Company​Location.contacts(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.reverse)
* [Company​Location.draftOrders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.reverse)
* [Company​Location.orders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.reverse)
* [Company​Location.roleAssignments(reverse)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments.arguments.reverse)
* [Customer.addresses(skipDefault)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses.arguments.skipDefault)
* [Customer.addresses(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses.arguments.reverse)
* [Customer.companyContacts(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.companyContacts.arguments.reverse)
* [Customer.draftOrders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders.arguments.reverse)
* [Customer.orders(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders.arguments.reverse)
* [Customer.subscriptionContracts(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts.arguments.reverse)
* [Customer​Address.formatted(withName)](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress#field-CustomerAddress.fields.formatted.arguments.withName)
* [Customer​Address.formatted(withCompany)](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress#field-CustomerAddress.fields.formatted.arguments.withCompany)
* [Draft​Order.lineItems(flattenComponents)](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems.arguments.flattenComponents)
* [Draft​Order.lineItems(reverse)](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems.arguments.reverse)
* [Fulfillment.events(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events.arguments.reverse)
* [Fulfillment.fulfillmentLineItems(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems.arguments.reverse)
* [Line​Item.suggestedReturnReasonDefinitions(reverse)](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.suggestedReturnReasonDefinitions.arguments.reverse)
* [Order.agreements(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.agreements.arguments.reverse)
* [Order.discountApplications(reverse)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.discountApplications.arguments.reverse)

---



<a id="latest-scalars-datetime"></a>


## Date​Time

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string. For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is represented as `"2019-09-07T15:50:00Z`".

### Map

#### Fields with this scalar

* [Checkout.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.createdAt)
* [Company​Address.createdAt](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.createdAt)
* [Company​Address.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.updatedAt)
* [Customer.creationDate](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.creationDate)
* [Draft​Order.createdAt](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.createdAt)
* [Draft​Order.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.updatedAt)
* [Fulfillment.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.createdAt)
* [Fulfillment.estimatedDeliveryAt](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.estimatedDeliveryAt)
* [Fulfillment.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.updatedAt)
* [Fulfillment​Event.happenedAt](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.happenedAt)
* [Metafield.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.createdAt)
* [Metafield.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.updatedAt)
* [Metaobject.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Metaobject#field-Metaobject.fields.updatedAt)
* [Order.cancelledAt](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.cancelledAt)
* [Order.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.createdAt)
* [Order.processedAt](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.processedAt)
* [Order.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.updatedAt)
* [Order​Agreement.happenedAt](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.happenedAt)
* [Order​Edit​Agreement.happenedAt](https://shopify.dev/docs/api/customer/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.happenedAt)
* [Order​Transaction.createdAt](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.createdAt)
* [Order​Transaction.processedAt](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.processedAt)
* [Payment​Schedule.completedAt](https://shopify.dev/docs/api/customer/latest/objects/PaymentSchedule#field-PaymentSchedule.fields.completedAt)
* [Payment​Schedule.dueAt](https://shopify.dev/docs/api/customer/latest/objects/PaymentSchedule#field-PaymentSchedule.fields.dueAt)
* [Payment​Terms.nextDueAt](https://shopify.dev/docs/api/customer/latest/objects/PaymentTerms#field-PaymentTerms.fields.nextDueAt)
* [Refund.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Refund#field-Refund.fields.createdAt)
* [Refund.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Refund#field-Refund.fields.updatedAt)
* [Refund​Agreement.happenedAt](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.happenedAt)
* [Return.closedAt](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.closedAt)
* [Return.createdAt](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.createdAt)
* [Return.updatedAt](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.updatedAt)

#### Inputs with this scalar

* [Subscription​Billing​Cycle​Selector.date](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleSelector#fields-date)

---



<a id="latest-scalars-decimal"></a>


## Decimal

scalar

A signed decimal number, which supports arbitrary precision and is serialized as a string.

Example values: `"29.99"`, `"29.999"`.

### Map

#### Fields with this scalar

* [Money​V2.amount](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2#field-MoneyV2.fields.amount)

---



<a id="latest-scalars-float"></a>


## Float

scalar

Represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Map

#### Fields with this scalar

* [Deposit​Percentage.percentage](https://shopify.dev/docs/api/customer/latest/objects/DepositPercentage#field-DepositPercentage.fields.percentage)
* [Pricing​Percentage​Value.percentage](https://shopify.dev/docs/api/customer/latest/objects/PricingPercentageValue#field-PricingPercentageValue.fields.percentage)
* [Tax​Line.rate](https://shopify.dev/docs/api/customer/latest/objects/TaxLine#field-TaxLine.fields.rate)
* [Tax​Line.ratePercentage](https://shopify.dev/docs/api/customer/latest/objects/TaxLine#field-TaxLine.fields.ratePercentage)
* [Weight.value](https://shopify.dev/docs/api/customer/latest/objects/Weight#field-Weight.fields.value)

---



<a id="latest-scalars-html"></a>


## HTML

scalar

A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a complete list of HTML elements.

Example value: `"<p>Grey cotton knit sweater.</p>"`

### Map

#### Fields with this scalar

* [Shop​Policy.body](https://shopify.dev/docs/api/customer/latest/objects/ShopPolicy#field-ShopPolicy.fields.body)

---



<a id="latest-scalars-id"></a>


## ID

scalar

Represents a unique identifier, often used to refetch an object. The ID type appears in a JSON response as a String, but it is not intended to be human-readable.

Example value: `"gid://shopify/Product/10079785100"`

### Map

#### Fields with this scalar

* [Additional​Fee​Sale.id](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.id)
* [Adjustment​Sale.id](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.id)
* [Applied​Gift​Card.id](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.id)
* [Checkout.id](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.id)
* [Checkout​Line​Item.id](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.id)
* [Company.id](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.id)
* [Company​Address.id](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.id)
* [Company​Contact.id](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.id)
* [Company​Contact​Role.id](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.id)
* [Company​Contact​Role​Assignment.id](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRoleAssignment#field-CompanyContactRoleAssignment.fields.id)
* [Company​Location.id](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.id)
* [Customer.id](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.id)
* [Customer​Address.id](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress#field-CustomerAddress.fields.id)
* [Domain.id](https://shopify.dev/docs/api/customer/latest/objects/Domain#field-Domain.fields.id)
* [Draft​Order.id](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.id)
* [Draft​Order​Line​Item.id](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.id)
* [Duty​Sale.id](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.id)
* [Exchange​Line​Item.id](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.id)
* [Exchange​Line​Item.productId](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.productId)
* [Exchange​Line​Item.variantId](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.variantId)
* [Fee​Sale.id](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.id)
* [Fulfillment.id](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.id)
* [Fulfillment​Event.id](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.id)
* [Fulfillment​Line​Item.id](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.id)
* [Generic​File.id](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.id)
* [Gift​Card​Sale.id](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.id)
* [Image.id](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.id)
* [Line​Item.id](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.id)
* [Line​Item.productId](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.productId)
* [Line​Item.variantId](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.variantId)

#### Inputs with this scalar

* [Calculate​Return​Input.orderId](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnInput#fields-orderId)
* [Calculate​Return​Line​Item​Input.lineItemId](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnLineItemInput#fields-lineItemId)
* [Metafield​Identifier​Input.ownerId](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput#fields-ownerId)
* [Metafields​Set​Input.ownerId](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-ownerId)
* [Requested​Line​Item​Input.lineItemId](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput#fields-lineItemId)
* [Requested​Line​Item​Input.returnReasonDefinitionId](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput#fields-returnReasonDefinitionId)
* [Subscription​Billing​Cycle​Input.contractId](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleInput#fields-contractId)
* [Subscription​Delivery​Method​Pickup​Input.locationId](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionDeliveryMethodPickupInput#fields-locationId)

#### Arguments with this scalar

* [Customer.subscriptionContract(id)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContract.arguments.id)
* [Query​Root.company(id)](https://shopify.dev/docs/api/customer/latest/objects/QueryRoot#field-QueryRoot.fields.company.arguments.id)
* [Query​Root.companyLocation(id)](https://shopify.dev/docs/api/customer/latest/objects/QueryRoot#field-QueryRoot.fields.companyLocation.arguments.id)
* [Query​Root.draftOrder(id)](https://shopify.dev/docs/api/customer/latest/objects/QueryRoot#field-QueryRoot.fields.draftOrder.arguments.id)
* [Query​Root.order(id)](https://shopify.dev/docs/api/customer/latest/objects/QueryRoot#field-QueryRoot.fields.order.arguments.id)
* [Query​Root.return(id)](https://shopify.dev/docs/api/customer/latest/objects/QueryRoot#field-QueryRoot.fields.return.arguments.id)
* [company​Location​Assign​Address.locationId](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress#arguments-locationId)
* [customer​Address​Delete.addressId](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressDelete#arguments-addressId)
* [customer​Address​Update.addressId](https://shopify.dev/docs/api/customer/latest/mutations/customerAddressUpdate#arguments-addressId)
* [order​Request​Return.orderId](https://shopify.dev/docs/api/customer/latest/mutations/orderRequestReturn#arguments-orderId)
* [subscription​Contract​Activate.subscriptionContractId](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractActivate#arguments-subscriptionContractId)
* [subscription​Contract​Cancel.subscriptionContractId](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractCancel#arguments-subscriptionContractId)
* [subscription​Contract​Fetch​Delivery​Options.subscriptionContractId](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractFetchDeliveryOptions#arguments-subscriptionContractId)
* [subscription​Contract​Pause.subscriptionContractId](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractPause#arguments-subscriptionContractId)
* [subscription​Contract​Select​Delivery​Method.subscriptionContractId](https://shopify.dev/docs/api/customer/latest/mutations/subscriptionContractSelectDeliveryMethod#arguments-subscriptionContractId)
* [company.id](https://shopify.dev/docs/api/customer/latest/queries/company#arguments-id)
* [company​Location.id](https://shopify.dev/docs/api/customer/latest/queries/companyLocation#arguments-id)
* [draft​Order.id](https://shopify.dev/docs/api/customer/latest/queries/draftOrder#arguments-id)
* [order.id](https://shopify.dev/docs/api/customer/latest/queries/order#arguments-id)
* [return.id](https://shopify.dev/docs/api/customer/latest/queries/return#arguments-id)

---



<a id="latest-scalars-int"></a>


## Int

scalar

Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Map

#### Fields with this scalar

* [Additional​Fee​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.quantity)
* [Adjustment​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.quantity)
* [Calculated​Return​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItem#field-CalculatedReturnLineItem.fields.quantity)
* [Checkout​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.quantity)
* [Count.count](https://shopify.dev/docs/api/customer/latest/objects/Count#field-Count.fields.count)
* [Draft​Order​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItem#field-DraftOrderLineItem.fields.quantity)
* [Draft​Order​Line​Items​Summary.lineItemCount](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemsSummary#field-DraftOrderLineItemsSummary.fields.lineItemCount)
* [Draft​Order​Line​Items​Summary.totalQuantityOfLineItems](https://shopify.dev/docs/api/customer/latest/objects/DraftOrderLineItemsSummary#field-DraftOrderLineItemsSummary.fields.totalQuantityOfLineItems)
* [Duty​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.quantity)
* [Exchange​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/ExchangeLineItem#field-ExchangeLineItem.fields.quantity)
* [Fee​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.quantity)
* [Fulfillment​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.quantity)
* [Generic​File.originalFileSize](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.originalFileSize)
* [Gift​Card​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.quantity)
* [Image.height](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.height)
* [Image.width](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.width)
* [Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.quantity)
* [Line​Item.refundableQuantity](https://shopify.dev/docs/api/customer/latest/objects/LineItem#field-LineItem.fields.refundableQuantity)
* [Line​Item​Group.quantity](https://shopify.dev/docs/api/customer/latest/objects/LineItemGroup#field-LineItemGroup.fields.quantity)
* [Metafields​Delete​User​Error.elementIndex](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsDeleteUserError#field-MetafieldsDeleteUserError.fields.elementIndex)
* [Metafields​Set​User​Error.elementIndex](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.elementIndex)
* [Model3d​Source.filesize](https://shopify.dev/docs/api/customer/latest/objects/Model3dSource#field-Model3dSource.fields.filesize)
* [Non​Returnable​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableLineItem#field-NonReturnableLineItem.fields.quantity)
* [Non​Returnable​Quantity​Detail.quantity](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableQuantityDetail#field-NonReturnableQuantityDetail.fields.quantity)
* [Order.number](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.number)
* [Payment​Icon​Image.height](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.height)
* [Payment​Icon​Image.width](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.width)
* [Product​Sale.quantity](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.quantity)
* [Return​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.quantity)
* [Returnable​Line​Item.quantity](https://shopify.dev/docs/api/customer/latest/objects/ReturnableLineItem#field-ReturnableLineItem.fields.quantity)

#### Inputs with this scalar

* [Calculate​Return​Line​Item​Input.quantity](https://shopify.dev/docs/api/customer/latest/input-objects/CalculateReturnLineItemInput#fields-quantity)
* [Image​Transform​Input.maxWidth](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-maxWidth)
* [Image​Transform​Input.maxHeight](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-maxHeight)
* [Image​Transform​Input.scale](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-scale)
* [Requested​Line​Item​Input.quantity](https://shopify.dev/docs/api/customer/latest/input-objects/RequestedLineItemInput#fields-quantity)
* [Subscription​Billing​Cycle​Selector.index](https://shopify.dev/docs/api/customer/latest/input-objects/SubscriptionBillingCycleSelector#fields-index)

#### Arguments with this scalar

* [Calculated​Return.returnLineItems(first)](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems.arguments.first)
* [Calculated​Return.returnLineItems(last)](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems.arguments.last)
* [Checkout.discountApplications(first)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications.arguments.first)
* [Checkout.discountApplications(last)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications.arguments.last)
* [Checkout.lineItems(first)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems.arguments.first)
* [Checkout.lineItems(last)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems.arguments.last)
* [Company.draftOrders(first)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.first)
* [Company.draftOrders(last)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.last)
* [Company.locations(first)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.first)
* [Company.locations(last)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.last)
* [Company.orders(first)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.first)
* [Company.orders(last)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.last)
* [Company​Contact.draftOrders(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.first)
* [Company​Contact.draftOrders(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.last)
* [Company​Contact.locations(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.first)
* [Company​Contact.locations(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.last)
* [Company​Contact.orders(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.first)
* [Company​Contact.orders(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.last)
* [Company​Location.contacts(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.first)
* [Company​Location.contacts(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.last)
* [Company​Location.draftOrders(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.first)
* [Company​Location.draftOrders(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.last)
* [Company​Location.orders(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.first)
* [Company​Location.orders(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.last)
* [Company​Location.roleAssignments(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments.arguments.first)
* [Company​Location.roleAssignments(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments.arguments.last)
* [Company​Location.storeCreditAccounts(first)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts.arguments.first)
* [Company​Location.storeCreditAccounts(last)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.storeCreditAccounts.arguments.last)
* [Customer.addresses(first)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses.arguments.first)
* [Customer.addresses(last)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.addresses.arguments.last)

---



<a id="latest-scalars-json"></a>


## JSON

scalar

A [JSON](https://www.json.org/json-en.html) object.

Example value: `{ "product": { "id": "gid://shopify/Product/1346443542550", "title": "White T-shirt", "options": [{ "name": "Size", "values": ["M", "L"] }] } }`

### Map

#### Fields with this scalar

* [Metafield.jsonValue](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.jsonValue)

---



<a id="latest-scalars-string"></a>


## String

scalar

Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.

### Map

#### Fields with this scalar

* [Applied​Gift​Card.lastCharacters](https://shopify.dev/docs/api/customer/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.lastCharacters)
* [Attribute.key](https://shopify.dev/docs/api/customer/latest/objects/Attribute#field-Attribute.fields.key)
* [Attribute.value](https://shopify.dev/docs/api/customer/latest/objects/Attribute#field-Attribute.fields.value)
* [Automatic​Discount​Application.title](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.title)
* [Business​Customer​User​Error.field](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.field)
* [Business​Customer​User​Error.message](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.message)
* [Calculated​Return​Line​Item​Edge.cursor](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturnLineItemEdge#field-CalculatedReturnLineItemEdge.fields.cursor)
* [Card​Payment​Details.cardBrand](https://shopify.dev/docs/api/customer/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.cardBrand)
* [Card​Payment​Details.last4](https://shopify.dev/docs/api/customer/latest/objects/CardPaymentDetails#field-CardPaymentDetails.fields.last4)
* [Checkout.email](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.email)
* [Checkout.note](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.note)
* [Checkout​Line​Item.title](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.title)
* [Checkout​Line​Item.variantTitle](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItem#field-CheckoutLineItem.fields.variantTitle)
* [Checkout​Line​Item​Edge.cursor](https://shopify.dev/docs/api/customer/latest/objects/CheckoutLineItemEdge#field-CheckoutLineItemEdge.fields.cursor)
* [Company.externalId](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.externalId)
* [Company.name](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.name)
* [Company​Address.address1](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.address1)
* [Company​Address.address2](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.address2)
* [Company​Address.city](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.city)
* [Company​Address.companyName](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.companyName)
* [Company​Address.country](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.country)
* [Company​Address.firstName](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.firstName)
* [Company​Address.formattedAddress](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.formattedAddress)
* [Company​Address.formattedArea](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.formattedArea)
* [Company​Address.lastName](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.lastName)
* [Company​Address.phone](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.phone)
* [Company​Address.province](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.province)
* [Company​Address.recipient](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.recipient)
* [Company​Address.zip](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.zip)
* [Company​Address.zoneCode](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.zoneCode)

#### Inputs with this scalar

* [Company​Address​Input.firstName](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-firstName)
* [Company​Address​Input.lastName](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-lastName)
* [Company​Address​Input.recipient](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-recipient)
* [Company​Address​Input.address1](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-address1)
* [Company​Address​Input.address2](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-address2)
* [Company​Address​Input.city](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-city)
* [Company​Address​Input.phone](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-phone)
* [Company​Address​Input.zoneCode](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-zoneCode)
* [Company​Address​Input.zip](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-zip)
* [Customer​Address​Input.firstName](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-firstName)
* [Customer​Address​Input.lastName](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-lastName)
* [Customer​Address​Input.address1](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-address1)
* [Customer​Address​Input.address2](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-address2)
* [Customer​Address​Input.city](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-city)
* [Customer​Address​Input.company](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-company)
* [Customer​Address​Input.territoryCode](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-territoryCode)
* [Customer​Address​Input.phoneNumber](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-phoneNumber)
* [Customer​Address​Input.zoneCode](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-zoneCode)
* [Customer​Address​Input.zip](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerAddressInput#fields-zip)
* [Customer​Update​Input.firstName](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerUpdateInput#fields-firstName)
* [Customer​Update​Input.lastName](https://shopify.dev/docs/api/customer/latest/input-objects/CustomerUpdateInput#fields-lastName)
* [Has​Metafields​Identifier.namespace](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier#fields-namespace)
* [Has​Metafields​Identifier.key](https://shopify.dev/docs/api/customer/latest/input-objects/HasMetafieldsIdentifier#fields-key)
* [Metafield​Identifier​Input.namespace](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput#fields-namespace)
* [Metafield​Identifier​Input.key](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldIdentifierInput#fields-key)
* [Metafields​Set​Input.namespace](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-namespace)
* [Metafields​Set​Input.key](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-key)
* [Metafields​Set​Input.value](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-value)
* [Metafields​Set​Input.compareDigest](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-compareDigest)
* [Metafields​Set​Input.type](https://shopify.dev/docs/api/customer/latest/input-objects/MetafieldsSetInput#fields-type)

#### Arguments with this scalar

* [Calculated​Return.returnLineItems(after)](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems.arguments.after)
* [Calculated​Return.returnLineItems(before)](https://shopify.dev/docs/api/customer/latest/objects/CalculatedReturn#field-CalculatedReturn.fields.returnLineItems.arguments.before)
* [Checkout.discountApplications(after)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications.arguments.after)
* [Checkout.discountApplications(before)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.discountApplications.arguments.before)
* [Checkout.lineItems(after)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems.arguments.after)
* [Checkout.lineItems(before)](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.lineItems.arguments.before)
* [Company.draftOrders(after)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.after)
* [Company.draftOrders(before)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.before)
* [Company.draftOrders(query)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.query)
* [Company.locations(after)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.after)
* [Company.locations(before)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.before)
* [Company.locations(query)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.query)
* [Company.metafield(namespace)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.metafield.arguments.namespace)
* [Company.metafield(key)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.metafield.arguments.key)
* [Company.orders(after)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.after)
* [Company.orders(before)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.before)
* [Company.orders(query)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.query)
* [Company​Contact.draftOrders(after)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.after)
* [Company​Contact.draftOrders(before)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.before)
* [Company​Contact.draftOrders(query)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.query)
* [Company​Contact.locations(after)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.after)
* [Company​Contact.locations(before)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.before)
* [Company​Contact.locations(query)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.query)
* [Company​Contact.orders(after)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.after)
* [Company​Contact.orders(before)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.before)
* [Company​Contact.orders(query)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.query)
* [Company​Location.contacts(after)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.after)
* [Company​Location.contacts(before)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.before)
* [Company​Location.contacts(query)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.query)
* [Company​Location.draftOrders(after)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.after)

---



<a id="latest-scalars-url"></a>


## URL

scalar

Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.

For example, `"https://example.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host (`example.myshopify.com`).

### Map

#### Fields with this scalar

* [Checkout.webUrl](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.webUrl)
* [Customer.imageUrl](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.imageUrl)
* [Domain.url](https://shopify.dev/docs/api/customer/latest/objects/Domain#field-Domain.fields.url)
* [Draft​Order.invoiceUrl](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.invoiceUrl)
* [Generic​File.url](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.url)
* [Image.url](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.url)
* [Market​Web​Presence​Root​Url.url](https://shopify.dev/docs/api/customer/latest/objects/MarketWebPresenceRootUrl#field-MarketWebPresenceRootUrl.fields.url)
* [Order.statusPageUrl](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.statusPageUrl)
* [Order​Payment​Information.paymentCollectionUrl](https://shopify.dev/docs/api/customer/latest/objects/OrderPaymentInformation#field-OrderPaymentInformation.fields.paymentCollectionUrl)
* [Payment​Icon​Image.url](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.url)
* [Reverse​Delivery​Label.publicFileUrl](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryLabel#field-ReverseDeliveryLabel.fields.publicFileUrl)
* [Reverse​Delivery​Tracking.trackingUrl](https://shopify.dev/docs/api/customer/latest/objects/ReverseDeliveryTracking#field-ReverseDeliveryTracking.fields.trackingUrl)
* [Shop.url](https://shopify.dev/docs/api/customer/latest/objects/Shop#field-Shop.fields.url)
* [Shop​Policy.url](https://shopify.dev/docs/api/customer/latest/objects/ShopPolicy#field-ShopPolicy.fields.url)
* [Subscription​Line.onlineStoreUrl](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionLine#field-SubscriptionLine.fields.onlineStoreUrl)
* [Tracking​Information.url](https://shopify.dev/docs/api/customer/latest/objects/TrackingInformation#field-TrackingInformation.fields.url)

---



<a id="latest-scalars-unsignedint64"></a>


## Unsigned​Int64

scalar

An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.

Example value: `"50"`.

### Map

#### Fields with this scalar

* [Draft​Order.totalWeight](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.totalWeight)
* [Subscription​Contract.revisionId](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.revisionId)

---



<a id="latest-unions-depositconfiguration"></a>


## Deposit​Configuration

union

Configuration of the deposit.

### Fields with this union

* [Buyer​Experience​Configuration.deposit](https://shopify.dev/docs/api/customer/latest/objects/BuyerExperienceConfiguration#field-BuyerExperienceConfiguration.fields.deposit)

  OBJECT

  The configuration for the buyer's checkout.

***

```graphql
union DepositConfiguration = DepositPercentage
```

---



<a id="latest-unions-metafieldreference"></a>


## Metafield​Reference

union

Returns the resource which is being referred to by a metafield.

### Fields with this union

* [Metafield.reference](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.reference)

  OBJECT

  The custom metadata attached to a resource. Metafields can be sorted into namespaces and are comprised of keys, values, and value types.

* [Metafield.references](https://shopify.dev/docs/api/customer/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  The custom metadata attached to a resource. Metafields can be sorted into namespaces and are comprised of keys, values, and value types.

* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/customer/latest/connections/MetafieldReferenceConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple MetafieldReferences.

* [Metafield​Reference​Edge.node](https://shopify.dev/docs/api/customer/latest/objects/MetafieldReferenceEdge#field-MetafieldReferenceEdge.fields.node)

  OBJECT

  An auto-generated type which holds one MetafieldReference and a cursor during pagination.

* [Metaobject​Field.reference](https://shopify.dev/docs/api/customer/latest/objects/MetaobjectField#field-MetaobjectField.fields.reference)

  OBJECT

  Provides the value of a Metaobject field.

***

```graphql
union MetafieldReference = GenericFile | MediaImage | Metaobject | Model3d | Video
```

---



<a id="latest-unions-paymentdetails"></a>


## Payment​Details

union

Payment details related to a transaction.

### Fields with this union

* [Order​Transaction.paymentDetails](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.paymentDetails)

  OBJECT

  A payment transaction within an order context.

***

```graphql
union PaymentDetails = CardPaymentDetails
```

---



<a id="latest-unions-pricingvalue"></a>


## Pricing​Value

union

The price value (fixed or percentage) for a discount application.

### Fields with this union

* [Automatic​Discount​Application.value](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.value)

  OBJECT

  Captures the intentions of a discount that was automatically applied.

* [Discount​Application.value](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication#fields-value)

  INTERFACE

  Captures the intentions of a discount source at the time of application.

* [Discount​Code​Application.value](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.value)

  OBJECT

  Captures the intentions of a discount code at the time that it is applied.

* [Manual​Discount​Application.value](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.value)

  OBJECT

  Captures the intentions of a discount that was manually created.

* [Script​Discount​Application.value](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.value)

  OBJECT

  Captures the intentions of a discount that was created by a Shopify Script.

***

```graphql
union PricingValue = MoneyV2 | PricingPercentageValue
```

---



<a id="latest-unions-purchasingentity"></a>


## Purchasing​Entity

union

Represents information about the purchasing entity for the order or draft order.

### Fields with this union

* [Draft​Order.purchasingEntity](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.purchasingEntity)

  OBJECT

  A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Order.purchasingEntity](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.purchasingEntity)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

```graphql
union PurchasingEntity = Customer | PurchasingCompany
```

---



<a id="latest-unions-reversedeliverydeliverable"></a>


## Reverse​Delivery​Deliverable

union

The method and associated details of a reverse delivery.

### Fields with this union

* [Reverse​Delivery.deliverable](https://shopify.dev/docs/api/customer/latest/objects/ReverseDelivery#field-ReverseDelivery.fields.deliverable)

  OBJECT

  A reverse delivery represents a package being sent back by a buyer to a merchant post-fulfillment. This could occur when a buyer requests a return and the merchant provides a shipping label. The reverse delivery includes the context of the items being returned, the method of return (for example, a shipping label), and the current status of the delivery (tracking information).

***

```graphql
union ReverseDeliveryDeliverable = ReverseDeliveryShippingDeliverable
```

---



<a id="latest-unions-storecreditaccounttransactionorigin"></a>


## Store​Credit​Account​Transaction​Origin

union

The origin of a store credit account transaction.

### Fields with this union

* [Store​Credit​Account​Credit​Transaction.origin](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.origin)

  OBJECT

  A credit transaction which increases the store credit account balance.

* [Store​Credit​Account​Debit​Revert​Transaction.origin](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.origin)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

* [Store​Credit​Account​Debit​Transaction.origin](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.origin)

  OBJECT

  A debit transaction which decreases the store credit account balance.

* [Store​Credit​Account​Expiration​Transaction.origin](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.origin)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

* [Store​Credit​Account​Transaction.origin](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction#fields-origin)

  INTERFACE

  Interface for a store credit account transaction.

***

```graphql
union StoreCreditAccountTransactionOrigin = OrderTransaction
```

---



<a id="latest-unions-subscriptionanchor"></a>


## Subscription​Anchor

union

Represents a subscription anchor.

### Fields with this union

* [Subscription​Billing​Policy.anchors](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingPolicy#field-SubscriptionBillingPolicy.fields.anchors)

  OBJECT

  The billing policy of a subscription.

* [Subscription​Delivery​Policy.anchors](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryPolicy#field-SubscriptionDeliveryPolicy.fields.anchors)

  OBJECT

  The delivery policy of a subscription.

***

```graphql
union SubscriptionAnchor = SubscriptionMonthDayAnchor | SubscriptionWeekDayAnchor | SubscriptionYearDayAnchor
```

---



<a id="latest-unions-subscriptiondeliverymethod"></a>


## Subscription​Delivery​Method

union

The delivery method to use to deliver the physical goods to the customer.

### Fields with this union

* [Subscription​Contract.deliveryMethod](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.deliveryMethod)

  OBJECT

  A Subscription Contract.

* [Subscription​Contract​Base.deliveryMethod](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-deliveryMethod)

  INTERFACE

  The common fields of a subscription contract.

***

```graphql
union SubscriptionDeliveryMethod = SubscriptionDeliveryMethodLocalDelivery | SubscriptionDeliveryMethodPickup | SubscriptionDeliveryMethodShipping
```

---



<a id="latest-unions-subscriptiondeliveryoption"></a>


## Subscription​Delivery​Option

union

The delivery option for a subscription contract.

### Fields with this union

* [Subscription​Delivery​Options​Result​Success.deliveryOptions](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryOptionsResultSuccess#field-SubscriptionDeliveryOptionsResultSuccess.fields.deliveryOptions)

  OBJECT

  A successful result containing the available delivery options for the subscription contract.

***

```graphql
union SubscriptionDeliveryOption = SubscriptionLocalDeliveryOption | SubscriptionPickupOption | SubscriptionShippingOption
```

---



<a id="latest-unions-subscriptiondeliveryoptionsresult"></a>


## Subscription​Delivery​Options​Result

union

The result of the query that fetches delivery options for the subscription contract.

```graphql
union SubscriptionDeliveryOptionsResult = SubscriptionDeliveryOptionsResultFailure | SubscriptionDeliveryOptionsResultSuccess
```

---



<a id="latest-unions-subscriptiondiscountvalue"></a>


## Subscription​Discount​Value

union

The value of the discount and how it will be applied.

### Fields with this union

* [Subscription​Discount.value](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.value)

  OBJECT

  A discount applied to a subscription contract.

***

```graphql
union SubscriptionDiscountValue = SubscriptionDiscountFixedAmountValue | SubscriptionDiscountPercentageValue
```

---
