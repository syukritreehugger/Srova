# Shopify Storefront – other Reference (Indonesian / English)

> Referensi lengkap **Storefront – other** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/storefront.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/storefront` |
| Total halaman | **211** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `other (small groups)` (split file)


## Daftar Isi (Table of Contents)

- [latest / connections / ArticleConnection](#latest-connections-articleconnection)
- [latest / connections / BaseCartLineConnection](#latest-connections-basecartlineconnection)
- [latest / connections / BlogConnection](#latest-connections-blogconnection)
- [latest / connections / CartDeliveryGroupConnection](#latest-connections-cartdeliverygroupconnection)
- [latest / connections / CollectionConnection](#latest-connections-collectionconnection)
- [latest / connections / CommentConnection](#latest-connections-commentconnection)
- [latest / connections / DiscountApplicationConnection](#latest-connections-discountapplicationconnection)
- [latest / connections / FulfillmentLineItemConnection](#latest-connections-fulfillmentlineitemconnection)
- [latest / connections / ImageConnection](#latest-connections-imageconnection)
- [latest / connections / LocationConnection](#latest-connections-locationconnection)
- [latest / connections / MailingAddressConnection](#latest-connections-mailingaddressconnection)
- [latest / connections / MediaConnection](#latest-connections-mediaconnection)
- [latest / connections / MetafieldReferenceConnection](#latest-connections-metafieldreferenceconnection)
- [latest / connections / MetaobjectConnection](#latest-connections-metaobjectconnection)
- [latest / connections / OrderConnection](#latest-connections-orderconnection)
- [latest / connections / OrderLineItemConnection](#latest-connections-orderlineitemconnection)
- [latest / connections / PageConnection](#latest-connections-pageconnection)
- [latest / connections / ProductConnection](#latest-connections-productconnection)
- [latest / connections / ProductVariantComponentConnection](#latest-connections-productvariantcomponentconnection)
- [latest / connections / ProductVariantConnection](#latest-connections-productvariantconnection)
- [latest / connections / QuantityPriceBreakConnection](#latest-connections-quantitypricebreakconnection)
- [latest / connections / SearchResultItemConnection](#latest-connections-searchresultitemconnection)
- [latest / connections / SellingPlanAllocationConnection](#latest-connections-sellingplanallocationconnection)
- [latest / connections / SellingPlanConnection](#latest-connections-sellingplanconnection)
- [latest / connections / SellingPlanGroupConnection](#latest-connections-sellingplangroupconnection)
- [latest / connections / StoreAvailabilityConnection](#latest-connections-storeavailabilityconnection)
- [latest / connections / StringConnection](#latest-connections-stringconnection)
- [latest / connections / UrlRedirectConnection](#latest-connections-urlredirectconnection)
- [latest / input-objects / AttributeInput](#latest-input-objects-attributeinput)
- [latest / input-objects / BuyerInput](#latest-input-objects-buyerinput)
- [latest / input-objects / CartAddressInput](#latest-input-objects-cartaddressinput)
- [latest / input-objects / CartBuyerIdentityInput](#latest-input-objects-cartbuyeridentityinput)
- [latest / input-objects / CartDeliveryAddressInput](#latest-input-objects-cartdeliveryaddressinput)
- [latest / input-objects / CartDeliveryCoordinatesPreferenceInput](#latest-input-objects-cartdeliverycoordinatespreferenceinput)
- [latest / input-objects / CartDeliveryInput](#latest-input-objects-cartdeliveryinput)
- [latest / input-objects / CartDeliveryPreferenceInput](#latest-input-objects-cartdeliverypreferenceinput)
- [latest / input-objects / CartInput](#latest-input-objects-cartinput)
- [latest / input-objects / CartInputMetafieldInput](#latest-input-objects-cartinputmetafieldinput)
- [latest / input-objects / CartLineInput](#latest-input-objects-cartlineinput)
- [latest / input-objects / CartLineParentInput](#latest-input-objects-cartlineparentinput)
- [latest / input-objects / CartLineUpdateInput](#latest-input-objects-cartlineupdateinput)
- [latest / input-objects / CartMetafieldDeleteInput](#latest-input-objects-cartmetafielddeleteinput)
- [latest / input-objects / CartMetafieldsSetInput](#latest-input-objects-cartmetafieldssetinput)
- [latest / input-objects / CartPreferencesInput](#latest-input-objects-cartpreferencesinput)
- [latest / input-objects / CartSelectableAddressInput](#latest-input-objects-cartselectableaddressinput)
- [latest / input-objects / CartSelectableAddressUpdateInput](#latest-input-objects-cartselectableaddressupdateinput)
- [latest / input-objects / CartSelectedDeliveryOptionInput](#latest-input-objects-cartselecteddeliveryoptioninput)
- [latest / input-objects / CategoryFilter](#latest-input-objects-categoryfilter)
- [latest / input-objects / CustomerAccessTokenCreateInput](#latest-input-objects-customeraccesstokencreateinput)
- [latest / input-objects / CustomerActivateInput](#latest-input-objects-customeractivateinput)
- [latest / input-objects / CustomerCreateInput](#latest-input-objects-customercreateinput)
- [latest / input-objects / CustomerResetInput](#latest-input-objects-customerresetinput)
- [latest / input-objects / CustomerUpdateInput](#latest-input-objects-customerupdateinput)
- [latest / input-objects / DeliveryAddressInput](#latest-input-objects-deliveryaddressinput)
- [latest / input-objects / GeoCoordinateInput](#latest-input-objects-geocoordinateinput)
- [latest / input-objects / HasMetafieldsIdentifier](#latest-input-objects-hasmetafieldsidentifier)
- [latest / input-objects / ImageTransformInput](#latest-input-objects-imagetransforminput)
- [latest / input-objects / MailingAddressInput](#latest-input-objects-mailingaddressinput)
- [latest / input-objects / MetafieldFilter](#latest-input-objects-metafieldfilter)
- [latest / input-objects / MetaobjectHandleInput](#latest-input-objects-metaobjecthandleinput)
- [latest / input-objects / MoneyInput](#latest-input-objects-moneyinput)
- [latest / input-objects / PriceRangeFilter](#latest-input-objects-pricerangefilter)
- [latest / input-objects / ProductFilter](#latest-input-objects-productfilter)
- [latest / input-objects / SelectedOptionInput](#latest-input-objects-selectedoptioninput)
- [latest / input-objects / ShopPayPaymentRequestDeliveryMethodInput](#latest-input-objects-shoppaypaymentrequestdeliverymethodinput)
- [latest / input-objects / ShopPayPaymentRequestDiscountInput](#latest-input-objects-shoppaypaymentrequestdiscountinput)
- [latest / input-objects / ShopPayPaymentRequestImageInput](#latest-input-objects-shoppaypaymentrequestimageinput)
- [latest / input-objects / ShopPayPaymentRequestInput](#latest-input-objects-shoppaypaymentrequestinput)
- [latest / input-objects / ShopPayPaymentRequestLineItemInput](#latest-input-objects-shoppaypaymentrequestlineiteminput)
- [latest / input-objects / ShopPayPaymentRequestShippingLineInput](#latest-input-objects-shoppaypaymentrequestshippinglineinput)
- [latest / input-objects / ShopPayPaymentRequestTotalShippingPriceInput](#latest-input-objects-shoppaypaymentrequesttotalshippingpriceinput)
- [latest / input-objects / TaxonomyMetafieldFilter](#latest-input-objects-taxonomymetafieldfilter)
- [latest / input-objects / VariantOptionFilter](#latest-input-objects-variantoptionfilter)
- [latest / input-objects / VisitorConsent](#latest-input-objects-visitorconsent)
- [latest / interfaces / BaseCartLine](#latest-interfaces-basecartline)
- [latest / interfaces / CartDiscountAllocation](#latest-interfaces-cartdiscountallocation)
- [latest / interfaces / DiscountApplication](#latest-interfaces-discountapplication)
- [latest / interfaces / DisplayableError](#latest-interfaces-displayableerror)
- [latest / interfaces / HasMetafields](#latest-interfaces-hasmetafields)
- [latest / interfaces / Media](#latest-interfaces-media)
- [latest / interfaces / OnlineStorePublishable](#latest-interfaces-onlinestorepublishable)
- [latest / interfaces / SitemapResourceInterface](#latest-interfaces-sitemapresourceinterface)
- [latest / interfaces / Trackable](#latest-interfaces-trackable)
- [latest / mutations / cartAttributesUpdate](#latest-mutations-cartattributesupdate)
- [latest / mutations / cartBuyerIdentityUpdate](#latest-mutations-cartbuyeridentityupdate)
- [latest / mutations / cartCreate](#latest-mutations-cartcreate)
- [latest / mutations / cartDeliveryAddressesAdd](#latest-mutations-cartdeliveryaddressesadd)
- [latest / mutations / cartDeliveryAddressesRemove](#latest-mutations-cartdeliveryaddressesremove)
- [latest / mutations / cartDeliveryAddressesReplace](#latest-mutations-cartdeliveryaddressesreplace)
- [latest / mutations / cartDeliveryAddressesUpdate](#latest-mutations-cartdeliveryaddressesupdate)
- [latest / mutations / cartDiscountCodesUpdate](#latest-mutations-cartdiscountcodesupdate)
- [latest / mutations / cartGiftCardCodesAdd](#latest-mutations-cartgiftcardcodesadd)
- [latest / mutations / cartGiftCardCodesRemove](#latest-mutations-cartgiftcardcodesremove)
- [latest / mutations / cartGiftCardCodesUpdate](#latest-mutations-cartgiftcardcodesupdate)
- [latest / mutations / cartLinesAdd](#latest-mutations-cartlinesadd)
- [latest / mutations / cartLinesRemove](#latest-mutations-cartlinesremove)
- [latest / mutations / cartLinesUpdate](#latest-mutations-cartlinesupdate)
- [latest / mutations / cartMetafieldDelete](#latest-mutations-cartmetafielddelete)
- [latest / mutations / cartMetafieldsSet](#latest-mutations-cartmetafieldsset)
- [latest / mutations / cartNoteUpdate](#latest-mutations-cartnoteupdate)
- [latest / mutations / cartSelectedDeliveryOptionsUpdate](#latest-mutations-cartselecteddeliveryoptionsupdate)
- [latest / mutations / customerAccessTokenCreate](#latest-mutations-customeraccesstokencreate)
- [latest / mutations / customerAccessTokenCreateWithMultipass](#latest-mutations-customeraccesstokencreatewithmultipass)
- [latest / mutations / customerAccessTokenDelete](#latest-mutations-customeraccesstokendelete)
- [latest / mutations / customerAccessTokenRenew](#latest-mutations-customeraccesstokenrenew)
- [latest / mutations / customerActivate](#latest-mutations-customeractivate)
- [latest / mutations / customerActivateByUrl](#latest-mutations-customeractivatebyurl)
- [latest / mutations / customerAddressCreate](#latest-mutations-customeraddresscreate)
- [latest / mutations / customerAddressDelete](#latest-mutations-customeraddressdelete)
- [latest / mutations / customerAddressUpdate](#latest-mutations-customeraddressupdate)
- [latest / mutations / customerCreate](#latest-mutations-customercreate)
- [latest / mutations / customerDefaultAddressUpdate](#latest-mutations-customerdefaultaddressupdate)
- [latest / mutations / customerRecover](#latest-mutations-customerrecover)
- [latest / mutations / customerReset](#latest-mutations-customerreset)
- [latest / mutations / customerResetByUrl](#latest-mutations-customerresetbyurl)
- [latest / mutations / customerUpdate](#latest-mutations-customerupdate)
- [latest / mutations / shopPayPaymentRequestSessionCreate](#latest-mutations-shoppaypaymentrequestsessioncreate)
- [latest / mutations / shopPayPaymentRequestSessionSubmit](#latest-mutations-shoppaypaymentrequestsessionsubmit)
- [latest / payloads / CartAttributesUpdatePayload](#latest-payloads-cartattributesupdatepayload)
- [latest / payloads / CartBuyerIdentityUpdatePayload](#latest-payloads-cartbuyeridentityupdatepayload)
- [latest / payloads / CartCreatePayload](#latest-payloads-cartcreatepayload)
- [latest / payloads / CartDeliveryAddressesAddPayload](#latest-payloads-cartdeliveryaddressesaddpayload)
- [latest / payloads / CartDeliveryAddressesRemovePayload](#latest-payloads-cartdeliveryaddressesremovepayload)
- [latest / payloads / CartDeliveryAddressesReplacePayload](#latest-payloads-cartdeliveryaddressesreplacepayload)
- [latest / payloads / CartDeliveryAddressesUpdatePayload](#latest-payloads-cartdeliveryaddressesupdatepayload)
- [latest / payloads / CartDiscountCodesUpdatePayload](#latest-payloads-cartdiscountcodesupdatepayload)
- [latest / payloads / CartGiftCardCodesAddPayload](#latest-payloads-cartgiftcardcodesaddpayload)
- [latest / payloads / CartGiftCardCodesRemovePayload](#latest-payloads-cartgiftcardcodesremovepayload)
- [latest / payloads / CartGiftCardCodesUpdatePayload](#latest-payloads-cartgiftcardcodesupdatepayload)
- [latest / payloads / CartLinesAddPayload](#latest-payloads-cartlinesaddpayload)
- [latest / payloads / CartLinesRemovePayload](#latest-payloads-cartlinesremovepayload)
- [latest / payloads / CartLinesUpdatePayload](#latest-payloads-cartlinesupdatepayload)
- [latest / payloads / CartMetafieldDeletePayload](#latest-payloads-cartmetafielddeletepayload)
- [latest / payloads / CartMetafieldsSetPayload](#latest-payloads-cartmetafieldssetpayload)
- [latest / payloads / CartNoteUpdatePayload](#latest-payloads-cartnoteupdatepayload)
- [latest / payloads / CartSelectedDeliveryOptionsUpdatePayload](#latest-payloads-cartselecteddeliveryoptionsupdatepayload)
- [latest / payloads / CustomerAccessTokenCreatePayload](#latest-payloads-customeraccesstokencreatepayload)
- [latest / payloads / CustomerAccessTokenCreateWithMultipassPayload](#latest-payloads-customeraccesstokencreatewithmultipasspayload)
- [latest / payloads / CustomerAccessTokenDeletePayload](#latest-payloads-customeraccesstokendeletepayload)
- [latest / payloads / CustomerAccessTokenRenewPayload](#latest-payloads-customeraccesstokenrenewpayload)
- [latest / payloads / CustomerActivateByUrlPayload](#latest-payloads-customeractivatebyurlpayload)
- [latest / payloads / CustomerActivatePayload](#latest-payloads-customeractivatepayload)
- [latest / payloads / CustomerAddressCreatePayload](#latest-payloads-customeraddresscreatepayload)
- [latest / payloads / CustomerAddressDeletePayload](#latest-payloads-customeraddressdeletepayload)
- [latest / payloads / CustomerAddressUpdatePayload](#latest-payloads-customeraddressupdatepayload)
- [latest / payloads / CustomerCreatePayload](#latest-payloads-customercreatepayload)
- [latest / payloads / CustomerDefaultAddressUpdatePayload](#latest-payloads-customerdefaultaddressupdatepayload)
- [latest / payloads / CustomerRecoverPayload](#latest-payloads-customerrecoverpayload)
- [latest / payloads / CustomerResetByUrlPayload](#latest-payloads-customerresetbyurlpayload)
- [latest / payloads / CustomerResetPayload](#latest-payloads-customerresetpayload)
- [latest / payloads / CustomerUpdatePayload](#latest-payloads-customerupdatepayload)
- [latest / payloads / ShopPayPaymentRequestSessionCreatePayload](#latest-payloads-shoppaypaymentrequestsessioncreatepayload)
- [latest / payloads / ShopPayPaymentRequestSessionSubmitPayload](#latest-payloads-shoppaypaymentrequestsessionsubmitpayload)
- [latest / queries / article](#latest-queries-article)
- [latest / queries / articles](#latest-queries-articles)
- [latest / queries / blog](#latest-queries-blog)
- [latest / queries / blogByHandle](#latest-queries-blogbyhandle)
- [latest / queries / blogs](#latest-queries-blogs)
- [latest / queries / cart](#latest-queries-cart)
- [latest / queries / collection](#latest-queries-collection)
- [latest / queries / collectionByHandle](#latest-queries-collectionbyhandle)
- [latest / queries / collections](#latest-queries-collections)
- [latest / queries / customer](#latest-queries-customer)
- [latest / queries / localization](#latest-queries-localization)
- [latest / queries / locations](#latest-queries-locations)
- [latest / queries / menu](#latest-queries-menu)
- [latest / queries / metaobject](#latest-queries-metaobject)
- [latest / queries / metaobjects](#latest-queries-metaobjects)
- [latest / queries / node](#latest-queries-node)
- [latest / queries / nodes](#latest-queries-nodes)
- [latest / queries / page](#latest-queries-page)
- [latest / queries / pageByHandle](#latest-queries-pagebyhandle)
- [latest / queries / pages](#latest-queries-pages)
- [latest / queries / paymentSettings](#latest-queries-paymentsettings)
- [latest / queries / predictiveSearch](#latest-queries-predictivesearch)
- [latest / queries / product](#latest-queries-product)
- [latest / queries / productByHandle](#latest-queries-productbyhandle)
- [latest / queries / productRecommendations](#latest-queries-productrecommendations)
- [latest / queries / productTags](#latest-queries-producttags)
- [latest / queries / productTypes](#latest-queries-producttypes)
- [latest / queries / products](#latest-queries-products)
- [latest / queries / publicApiVersions](#latest-queries-publicapiversions)
- [latest / queries / search](#latest-queries-search)
- [latest / queries / shop](#latest-queries-shop)
- [latest / queries / sitemap](#latest-queries-sitemap)
- [latest / queries / urlRedirects](#latest-queries-urlredirects)
- [latest / scalars / Boolean](#latest-scalars-boolean)
- [latest / scalars / Color](#latest-scalars-color)
- [latest / scalars / DateTime](#latest-scalars-datetime)
- [latest / scalars / Decimal](#latest-scalars-decimal)
- [latest / scalars / Float](#latest-scalars-float)
- [latest / scalars / HTML](#latest-scalars-html)
- [latest / scalars / ID](#latest-scalars-id)
- [latest / scalars / ISO8601DateTime](#latest-scalars-iso8601datetime)
- [latest / scalars / Int](#latest-scalars-int)
- [latest / scalars / JSON](#latest-scalars-json)
- [latest / scalars / String](#latest-scalars-string)
- [latest / scalars / URL](#latest-scalars-url)
- [latest / scalars / UnsignedInt64](#latest-scalars-unsignedint64)
- [latest / unions / CartAddress](#latest-unions-cartaddress)
- [latest / unions / DeliveryAddress](#latest-unions-deliveryaddress)
- [latest / unions / MenuItemResource](#latest-unions-menuitemresource)
- [latest / unions / Merchandise](#latest-unions-merchandise)
- [latest / unions / MetafieldParentResource](#latest-unions-metafieldparentresource)
- [latest / unions / MetafieldReference](#latest-unions-metafieldreference)
- [latest / unions / PricingValue](#latest-unions-pricingvalue)
- [latest / unions / SearchResultItem](#latest-unions-searchresultitem)
- [latest / unions / SellingPlanBillingPolicy](#latest-unions-sellingplanbillingpolicy)
- [latest / unions / SellingPlanCheckoutChargeValue](#latest-unions-sellingplancheckoutchargevalue)
- [latest / unions / SellingPlanDeliveryPolicy](#latest-unions-sellingplandeliverypolicy)
- [latest / unions / SellingPlanPriceAdjustmentValue](#latest-unions-sellingplanpriceadjustmentvalue)


---



<a id="latest-connections-articleconnection"></a>


## Article​Connection

connection

An auto-generated type for paginating through multiple Articles.

### Fields with this connection

* [Blog.articles](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles)

  OBJECT

  A blog container for [`Article`](https://shopify.dev/docs/api/storefront/current/objects/Article) objects. Stores can have multiple blogs, for example to organize content by topic or purpose.

  Each blog provides access to its articles, contributing [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/current/objects/ArticleAuthor) objects, and [`SEO`](https://shopify.dev/docs/api/storefront/current/objects/SEO) information. You can retrieve articles individually [by handle](https://shopify.dev/docs/api/storefront/current/objects/Blog#field-Blog.fields.articleByHandle) or as a [paginated list](https://shopify.dev/docs/api/storefront/current/objects/Blog#field-Blog.fields.articles).

***

### Queries with this connection

* [articles](https://shopify.dev/docs/api/storefront/latest/queries/articles)

  query

  Returns a paginated list of [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects from the shop's [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects. Each article is a blog post containing content, author information, tags, and optional images.

  Use the `query` argument to filter results by author, blog title, tags, or date fields. Sort results using the `sortKey` argument and reverse them with the `reverse` argument.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Article​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ArticleSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

    * author
    * blog\_title
    * created\_at
    * tag
    * tag\_not
    * updated\_at

  ***

***

### Possible returns

* edges

  [\[Article​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ArticleEdge)

  non-null

  A list of edges.

* nodes

  [\[Article!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Article)

  non-null

  A list of the nodes contained in ArticleEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Blog.articles](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles)

#### Queries with this connection

* [articles](https://shopify.dev/docs/api/storefront/latest/queries/articles)

#### Possible returns

* [Article​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection#returns-edges)
* [Article​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection#returns-nodes)
* [Article​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection#returns-pageInfo)

---



<a id="latest-connections-basecartlineconnection"></a>


## Base​Cart​Line​Connection

connection

An auto-generated type for paginating through multiple BaseCartLines.

### Fields with this connection

* [Cart.lines](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines)

  OBJECT

  A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart, throughout a customer's session.

  Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/current/objects/Cart#field-checkoutUrl) field to direct buyers to Shopify's web checkout to complete their purchase.

  Learn more about [interacting with carts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

* [Cart​Delivery​Group.cartLines](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines)

  OBJECT

  Groups cart line items that share the same delivery destination. Each group provides the available [`CartDeliveryOption`](https://shopify.dev/docs/api/storefront/current/objects/CartDeliveryOption) choices for that address, along with the customer's selected option.

  Access through the [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart) object's `deliveryGroups` field. Items are grouped by merchandise type (one-time purchase vs subscription), allowing different delivery methods for each.

***

### Possible returns

* edges

  [\[Base​Cart​Line​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/BaseCartLineEdge)

  non-null

  A list of edges.

* nodes

  [\[Base​Cart​Line!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine)

  non-null

  A list of the nodes contained in BaseCartLineEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Cart.lines](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines)
* [Cart​Delivery​Group.cartLines](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines)

#### Possible returns

* [Base​Cart​Line​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection#returns-edges)
* [Base​Cart​Line​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection#returns-nodes)
* [Base​Cart​Line​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection#returns-pageInfo)

---



<a id="latest-connections-blogconnection"></a>


## Blog​Connection

connection

An auto-generated type for paginating through multiple Blogs.

### Queries with this connection

* [blogs](https://shopify.dev/docs/api/storefront/latest/queries/blogs)

  query

  Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects. Each blog serves as a container for [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Blog​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/BlogSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

    * created\_at
    * handle
    * title
    * updated\_at

  ***

***

### Possible returns

* edges

  [\[Blog​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/BlogEdge)

  non-null

  A list of edges.

* nodes

  [\[Blog!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Blog)

  non-null

  A list of the nodes contained in BlogEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [blogs](https://shopify.dev/docs/api/storefront/latest/queries/blogs)

#### Possible returns

* [Blog​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection#returns-edges)
* [Blog​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection#returns-nodes)
* [Blog​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection#returns-pageInfo)

---



<a id="latest-connections-cartdeliverygroupconnection"></a>


## Cart​Delivery​Group​Connection

connection

An auto-generated type for paginating through multiple CartDeliveryGroups.

### Fields with this connection

* [Cart.deliveryGroups](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups)

  OBJECT

  A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart, throughout a customer's session.

  Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/current/objects/Cart#field-checkoutUrl) field to direct buyers to Shopify's web checkout to complete their purchase.

  Learn more about [interacting with carts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

***

### Possible returns

* edges

  [\[Cart​Delivery​Group​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroupEdge)

  non-null

  A list of edges.

* nodes

  [\[Cart​Delivery​Group!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup)

  non-null

  A list of the nodes contained in CartDeliveryGroupEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Cart.deliveryGroups](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups)

#### Possible returns

* [Cart​Delivery​Group​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection#returns-edges)
* [Cart​Delivery​Group​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection#returns-nodes)
* [Cart​Delivery​Group​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection#returns-pageInfo)

---



<a id="latest-connections-collectionconnection"></a>


## Collection​Connection

connection

An auto-generated type for paginating through multiple Collections.

### Fields with this connection

* [Product.collections](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.collections)

  OBJECT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Queries with this connection

* [collections](https://shopify.dev/docs/api/storefront/latest/queries/collections)

  query

  Returns a paginated list of the shop's [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection). Each `Collection` object includes a nested connection to its [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection#field-Collection.fields.products).

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Collection​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/CollectionSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

    * collection\_type
    * title
    * updated\_at

  ***

***

### Possible returns

* edges

  [\[Collection​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CollectionEdge)

  non-null

  A list of edges.

* nodes

  [\[Collection!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Collection)

  non-null

  A list of the nodes contained in CollectionEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

* total​Count

  [Unsigned​Int64!](https://shopify.dev/docs/api/storefront/latest/scalars/UnsignedInt64)

  non-null

  The total count of Collections.

***

### Map

#### Fields with this connection

* [Product.collections](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.collections)

#### Queries with this connection

* [collections](https://shopify.dev/docs/api/storefront/latest/queries/collections)

#### Possible returns

* [Collection​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-edges)
* [Collection​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-nodes)
* [Collection​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-pageInfo)
* [Collection​Connection.totalCount](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-totalCount)

---



<a id="latest-connections-commentconnection"></a>


## Comment​Connection

connection

An auto-generated type for paginating through multiple Comments.

### Fields with this connection

* [Article.comments](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments)

  OBJECT

  A post that belongs to a [`Blog`](https://shopify.dev/docs/api/storefront/current/objects/Blog). Each article includes content with optional HTML formatting, an excerpt for previews, [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/current/objects/ArticleAuthor) information, and an associated [`Image`](https://shopify.dev/docs/api/storefront/current/objects/Image).

  Articles can be organized with tags and include [`SEO`](https://shopify.dev/docs/api/storefront/current/objects/SEO) metadata. You can manage [comments](https://shopify.dev/docs/api/storefront/current/objects/Comment) when the blog's comment policy enables them.

***

### Possible returns

* edges

  [\[Comment​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CommentEdge)

  non-null

  A list of edges.

* nodes

  [\[Comment!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Comment)

  non-null

  A list of the nodes contained in CommentEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Article.comments](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments)

#### Possible returns

* [Comment​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection#returns-edges)
* [Comment​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection#returns-nodes)
* [Comment​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection#returns-pageInfo)

---



<a id="latest-connections-discountapplicationconnection"></a>


## Discount​Application​Connection

connection

An auto-generated type for paginating through multiple DiscountApplications.

### Fields with this connection

* [Order.discountApplications](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.discountApplications)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

***

### Possible returns

* edges

  [\[Discount​Application​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/DiscountApplicationEdge)

  non-null

  A list of edges.

* nodes

  [\[Discount​Application!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  non-null

  A list of the nodes contained in DiscountApplicationEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Order.discountApplications](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.discountApplications)

#### Possible returns

* [Discount​Application​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/DiscountApplicationConnection#returns-edges)
* [Discount​Application​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/DiscountApplicationConnection#returns-nodes)
* [Discount​Application​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/DiscountApplicationConnection#returns-pageInfo)

---



<a id="latest-connections-fulfillmentlineitemconnection"></a>


## Fulfillment​Line​Item​Connection

connection

An auto-generated type for paginating through multiple FulfillmentLineItems.

### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

  OBJECT

  A shipment of one or more items in an order. Accessed through the [`Order`](https://shopify.dev/docs/api/storefront/current/objects/Order) object's [`successfulFulfillments`](https://shopify.dev/docs/api/storefront/current/objects/Order#field-Order.fields.successfulFulfillments) field.

  Each fulfillment includes the line items that shipped, the tracking company name, and tracking details like numbers and URLs. An order can have multiple fulfillments when items ship separately or from different locations.

***

### Possible returns

* edges

  [\[Fulfillment​Line​Item​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentLineItemEdge)

  non-null

  A list of edges.

* nodes

  [\[Fulfillment​Line​Item!\]!](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentLineItem)

  non-null

  A list of the nodes contained in FulfillmentLineItemEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)

#### Possible returns

* [Fulfillment​Line​Item​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection#returns-edges)
* [Fulfillment​Line​Item​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [Fulfillment​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-imageconnection"></a>


## Image​Connection

connection

An auto-generated type for paginating through multiple Images.

### Fields with this connection

* [Product.images](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images)

  OBJECT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Possible returns

* edges

  [\[Image​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ImageEdge)

  non-null

  A list of edges.

* nodes

  [\[Image!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  non-null

  A list of the nodes contained in ImageEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product.images](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images)

#### Possible returns

* [Image​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection#returns-edges)
* [Image​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection#returns-nodes)
* [Image​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection#returns-pageInfo)

---



<a id="latest-connections-locationconnection"></a>


## Location​Connection

connection

An auto-generated type for paginating through multiple Locations.

### Queries with this connection

* [locations](https://shopify.dev/docs/api/storefront/latest/queries/locations)

  query

  Returns shop locations that support in-store pickup. Use the `near` argument with [`GeoCoordinateInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/GeoCoordinateInput) to sort results by proximity to the customer's location.

  When sorting by distance, set `sortKey` to [`DISTANCE`](https://shopify.dev/docs/api/storefront/2026-04/queries/locations#arguments-sortKey.enums.DISTANCE) and provide coordinates using the [`near`](https://shopify.dev/docs/api/storefront/2026-04/queries/locations#arguments-near) argument.

  Learn more about [supporting local pickup on storefronts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/local-pickup).

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Location​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/LocationSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * near

    [Geo​Coordinate​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/GeoCoordinateInput)

    Used to sort results based on proximity to the provided location.

  ***

***

### Possible returns

* edges

  [\[Location​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/LocationEdge)

  non-null

  A list of edges.

* nodes

  [\[Location!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Location)

  non-null

  A list of the nodes contained in LocationEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [locations](https://shopify.dev/docs/api/storefront/latest/queries/locations)

#### Possible returns

* [Location​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection#returns-edges)
* [Location​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection#returns-nodes)
* [Location​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection#returns-pageInfo)

---



<a id="latest-connections-mailingaddressconnection"></a>


## Mailing​Address​Connection

connection

An auto-generated type for paginating through multiple MailingAddresses.

### Fields with this connection

* [Customer.addresses](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses)

  OBJECT

  A customer account with the shop. Includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/current/objects/MailingAddress) and marketing preferences for logged-in customers, so they don't have to provide these details at every checkout.

  Access the customer through the [`customer`](https://shopify.dev/docs/api/storefront/current/queries/customer) query using a customer access token obtained from the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/current/mutations/customerAccessTokenCreate) mutation.

  The object implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface, enabling retrieval of [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

***

### Possible returns

* edges

  [\[Mailing​Address​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddressEdge)

  non-null

  A list of edges.

* nodes

  [\[Mailing​Address!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  non-null

  A list of the nodes contained in MailingAddressEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Customer.addresses](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses)

#### Possible returns

* [Mailing​Address​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection#returns-edges)
* [Mailing​Address​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection#returns-nodes)
* [Mailing​Address​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection#returns-pageInfo)

---



<a id="latest-connections-mediaconnection"></a>


## Media​Connection

connection

An auto-generated type for paginating through multiple Media.

### Fields with this connection

* [Product.media](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.media)

  OBJECT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Possible returns

* edges

  [\[Media​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MediaEdge)

  non-null

  A list of edges.

* nodes

  [\[Media!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

  non-null

  A list of the nodes contained in MediaEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product.media](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.media)

#### Possible returns

* [Media​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection#returns-edges)
* [Media​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection#returns-nodes)
* [Media​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection#returns-pageInfo)

---



<a id="latest-connections-metafieldreferenceconnection"></a>


## Metafield​Reference​Connection

connection

An auto-generated type for paginating through multiple MetafieldReferences.

### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  [Custom metadata](https://shopify.dev/docs/apps/build/metafields) attached to a Shopify resource such as a [`Product`](https://shopify.dev/docs/api/storefront/current/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/current/objects/Collection), or [`Customer`](https://shopify.dev/docs/api/storefront/current/objects/Customer). Each metafield is identified by a namespace and key, and stores a value with an associated type.

  Values are always stored as strings, but the [`type`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.type) field indicates how to interpret the data. When a metafield's type is a resource reference, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.reference) or [`references`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.references) fields to retrieve the linked objects. Access metafields on any resource that implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface.

* [Metaobject​Field.references](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

  OBJECT

  The value of a field within a [`Metaobject`](https://shopify.dev/docs/api/storefront/current/objects/Metaobject). For fields that reference other resources, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.reference) field for single references or [`references`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.references) for lists.

***

### Possible returns

* edges

  [\[Metafield​Reference​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldReferenceEdge)

  non-null

  A list of edges.

* nodes

  [\[Metafield​Reference!\]!](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

  non-null

  A list of the nodes contained in MetafieldReferenceEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.references)
* [Metaobject​Field.references](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

#### Possible returns

* [Metafield​Reference​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection#returns-edges)
* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection#returns-nodes)
* [Metafield​Reference​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection#returns-pageInfo)

---



<a id="latest-connections-metaobjectconnection"></a>


## Metaobject​Connection

connection

An auto-generated type for paginating through multiple Metaobjects.

### Queries with this connection

* [metaobjects](https://shopify.dev/docs/api/storefront/latest/queries/metaobjects)

  query

  Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject) entries for a specific type. Metaobjects are [custom data structures](https://shopify.dev/docs/apps/build/metaobjects) that extend Shopify's data model with merchant-defined or app-defined content like size charts, product highlights, or custom sections.

  The required `type` argument specifies which metaobject type to retrieve. You can sort results by `id` or `updated_at` using the `sortKey` argument.

  * type

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The type of metaobject to retrieve.

  * sort​Key

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The key of a field to sort with. Supports "id" and "updated\_at".

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

### Possible returns

* edges

  [\[Metaobject​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectEdge)

  non-null

  A list of edges.

* nodes

  [\[Metaobject!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject)

  non-null

  A list of the nodes contained in MetaobjectEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [metaobjects](https://shopify.dev/docs/api/storefront/latest/queries/metaobjects)

#### Possible returns

* [Metaobject​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection#returns-edges)
* [Metaobject​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection#returns-nodes)
* [Metaobject​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection#returns-pageInfo)

---



<a id="latest-connections-orderconnection"></a>


## Order​Connection

connection

An auto-generated type for paginating through multiple Orders.

### Fields with this connection

* [Customer.orders](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders)

  OBJECT

  A customer account with the shop. Includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/current/objects/MailingAddress) and marketing preferences for logged-in customers, so they don't have to provide these details at every checkout.

  Access the customer through the [`customer`](https://shopify.dev/docs/api/storefront/current/queries/customer) query using a customer access token obtained from the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/current/mutations/customerAccessTokenCreate) mutation.

  The object implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface, enabling retrieval of [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

***

### Possible returns

* edges

  [\[Order​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/OrderEdge)

  non-null

  A list of edges.

* nodes

  [\[Order!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Order)

  non-null

  A list of the nodes contained in OrderEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

* total​Count

  [Unsigned​Int64!](https://shopify.dev/docs/api/storefront/latest/scalars/UnsignedInt64)

  non-null

  The total count of Orders.

***

### Map

#### Fields with this connection

* [Customer.orders](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders)

#### Possible returns

* [Order​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-edges)
* [Order​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-nodes)
* [Order​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-pageInfo)
* [Order​Connection.totalCount](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-totalCount)

---



<a id="latest-connections-orderlineitemconnection"></a>


## Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple OrderLineItems.

### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.lineItems)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

***

### Possible returns

* edges

  [\[Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItemEdge)

  non-null

  A list of edges.

* nodes

  [\[Order​Line​Item!\]!](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem)

  non-null

  A list of the nodes contained in OrderLineItemEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Order.lineItems](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.lineItems)

#### Possible returns

* [Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection#returns-edges)
* [Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection#returns-nodes)
* [Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection#returns-pageInfo)

---



<a id="latest-connections-pageconnection"></a>


## Page​Connection

connection

An auto-generated type for paginating through multiple Pages.

### Queries with this connection

* [pages](https://shopify.dev/docs/api/storefront/latest/queries/pages)

  query

  Returns a paginated list of the shop's content [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page). Pages are custom HTML content like "About Us", "Contact", or policy information that merchants display outside their product catalog.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Page​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/PageSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

    * created\_at
    * handle
    * title
    * updated\_at

  ***

***

### Possible returns

* edges

  [\[Page​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/PageEdge)

  non-null

  A list of edges.

* nodes

  [\[Page!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Page)

  non-null

  A list of the nodes contained in PageEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [pages](https://shopify.dev/docs/api/storefront/latest/queries/pages)

#### Possible returns

* [Page​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection#returns-edges)
* [Page​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection#returns-nodes)
* [Page​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection#returns-pageInfo)

---



<a id="latest-connections-productconnection"></a>


## Product​Connection

connection

An auto-generated type for paginating through multiple Products.

### Fields with this connection

* [Collection.products](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products)

  OBJECT

  A group of products [organized by a merchant](https://help.shopify.com/manual/products/collections) to make their store easier to browse. Collections can help customers discover related products by category, season, promotion, or other criteria.

  Query a collection's products with [filtering options](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) like availability, price range, vendor, and tags. Each collection includes [`SEO`](https://shopify.dev/docs/api/storefront/current/objects/SEO) information, an optional [`Image`](https://shopify.dev/docs/api/storefront/current/objects/Image), and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

***

### Queries with this connection

* [products](https://shopify.dev/docs/api/storefront/latest/queries/products)

  query

  Returns a paginated list of the shop's [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product).

  For full-text storefront search, use the [`search`](https://shopify.dev/docs/api/storefront/2026-04/queries/search) query instead.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Product​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductSortKeys)

    Default:ID

    Sort the underlying list by the given key.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    You can apply one or multiple filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * available\_for\_sale

      Filter by products that have at least one product variant available for sale.

    * * created\_at

      * product\_type

      * tag

      * tag\_not

      * title

      * updated\_at

      * variants.price

      - Filter by the date and time when the product was created.

      - Example:

        * `created_at:>'2020-10-21T23:39:20Z'`
        * `created_at:<now`
        * `created_at:<=2024`

        Filter by a comma-separated list of [product types](https://help.shopify.com/en/manual/products/details/product-type).

      - Example:

        * `product_type:snowboard`

        Filter products by the product [`tags`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-tags) field.

      - Example:

        * `tag:my_tag`

        Filter by products that don't have the specified product [tags](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-tags).

      - Example:

        * `tag_not:my_tag`

        Filter by the product [`title`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-title) field.

      - Example:

        * `title:The Minimal Snowboard`

        Filter by the date and time when the product was last updated.

      - Example:

        * `updated_at:>'2020-10-21T23:39:20Z'`
        * `updated_at:<now`
        * `updated_at:<=2024`

        Filter by the price of the product's variants.

    * vendor

      Filter by the product [`vendor`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-vendor) field.

      Example:

      * `vendor:Snowdevil`
      * `vendor:Snowdevil OR vendor:Icedevil`

  ***

***

### Possible returns

* edges

  [\[Product​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductEdge)

  non-null

  A list of edges.

* filters

  [\[Filter!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Filter)

  non-null

  A list of available filters.

* nodes

  [\[Product!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  non-null

  A list of the nodes contained in ProductEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Collection.products](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products)

#### Queries with this connection

* [products](https://shopify.dev/docs/api/storefront/latest/queries/products)

#### Possible returns

* [Product​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-edges)
* [Product​Connection.filters](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-filters)
* [Product​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-nodes)
* [Product​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-pageInfo)

---



<a id="latest-connections-productvariantcomponentconnection"></a>


## Product​Variant​Component​Connection

connection

An auto-generated type for paginating through multiple ProductVariantComponents.

### Fields with this connection

* [Product​Variant.components](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.components)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Possible returns

* edges

  [\[Product​Variant​Component​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantComponentEdge)

  non-null

  A list of edges.

* nodes

  [\[Product​Variant​Component!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantComponent)

  non-null

  A list of the nodes contained in ProductVariantComponentEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product​Variant.components](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.components)

#### Possible returns

* [Product​Variant​Component​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection#returns-edges)
* [Product​Variant​Component​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection#returns-nodes)
* [Product​Variant​Component​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection#returns-pageInfo)

---



<a id="latest-connections-productvariantconnection"></a>


## Product​Variant​Connection

connection

An auto-generated type for paginating through multiple ProductVariants.

### Fields with this connection

* [Product.variants](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants)

  OBJECT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

* [Product​Variant.groupedBy](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.groupedBy)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Possible returns

* edges

  [\[Product​Variant​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantEdge)

  non-null

  A list of edges.

* nodes

  [\[Product​Variant!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

  non-null

  A list of the nodes contained in ProductVariantEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product.variants](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants)
* [Product​Variant.groupedBy](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.groupedBy)

#### Possible returns

* [Product​Variant​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection#returns-edges)
* [Product​Variant​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection#returns-nodes)
* [Product​Variant​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection#returns-pageInfo)

---



<a id="latest-connections-quantitypricebreakconnection"></a>


## Quantity​Price​Break​Connection

connection

An auto-generated type for paginating through multiple QuantityPriceBreaks.

### Fields with this connection

* [Product​Variant.quantityPriceBreaks](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.quantityPriceBreaks)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Possible returns

* edges

  [\[Quantity​Price​Break​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/QuantityPriceBreakEdge)

  non-null

  A list of edges.

* nodes

  [\[Quantity​Price​Break!\]!](https://shopify.dev/docs/api/storefront/latest/objects/QuantityPriceBreak)

  non-null

  A list of the nodes contained in QuantityPriceBreakEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product​Variant.quantityPriceBreaks](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.quantityPriceBreaks)

#### Possible returns

* [Quantity​Price​Break​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection#returns-edges)
* [Quantity​Price​Break​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection#returns-nodes)
* [Quantity​Price​Break​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection#returns-pageInfo)

---



<a id="latest-connections-searchresultitemconnection"></a>


## Search​Result​Item​Connection

connection

An auto-generated type for paginating through multiple SearchResultItems.

### Queries with this connection

* [search](https://shopify.dev/docs/api/storefront/latest/queries/search)

  query

  Returns paginated search results for [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) resources based on a query string. Results are sorted by relevance by default.

  The response includes the total result count and available product filters for building [faceted search interfaces](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products). Use the [`prefix`](https://shopify.dev/docs/api/storefront/2026-04/enums/SearchPrefixQueryType) argument to enable partial word matching on the last search term, allowing queries like "winter snow" to match "snowboard" or "snowshoe".

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * sort​Key

    [Search​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/SearchSortKeys)

    Default:RELEVANCE

    Sort the underlying list by the given key.

  * query

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The search query.

  * prefix

    [Search​Prefix​Query​Type](https://shopify.dev/docs/api/storefront/latest/enums/SearchPrefixQueryType)

    Specifies whether to perform a partial word match on the last search term.

  * product​Filters

    [\[Product​Filter!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter)

    Returns a subset of products matching all product filters.

    The input must not contain more than `250` values.

  * types

    [\[Search​Type!\]](https://shopify.dev/docs/api/storefront/latest/enums/SearchType)

    The types of resources to search for.

    The input must not contain more than `250` values.

  * unavailable​Products

    [Search​Unavailable​Products​Type](https://shopify.dev/docs/api/storefront/latest/enums/SearchUnavailableProductsType)

    Specifies how unavailable products or variants are displayed in the search results.

  ***

***

### Possible returns

* edges

  [\[Search​Result​Item​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SearchResultItemEdge)

  non-null

  A list of edges.

* nodes

  [\[Search​Result​Item!\]!](https://shopify.dev/docs/api/storefront/latest/unions/SearchResultItem)

  non-null

  A list of the nodes contained in SearchResultItemEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

* product​Filters

  [\[Filter!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Filter)

  non-null

  A list of available filters.

* total​Count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The total number of results.

***

### Map

#### Queries with this connection

* [search](https://shopify.dev/docs/api/storefront/latest/queries/search)

#### Possible returns

* [Search​Result​Item​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-edges)
* [Search​Result​Item​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-nodes)
* [Search​Result​Item​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-pageInfo)
* [Search​Result​Item​Connection.productFilters](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-productFilters)
* [Search​Result​Item​Connection.totalCount](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-totalCount)

---



<a id="latest-connections-sellingplanallocationconnection"></a>


## Selling​Plan​Allocation​Connection

connection

An auto-generated type for paginating through multiple SellingPlanAllocations.

### Fields with this connection

* [Product​Variant.sellingPlanAllocations](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanAllocations)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Possible returns

* edges

  [\[Selling​Plan​Allocation​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocationEdge)

  non-null

  A list of edges.

* nodes

  [\[Selling​Plan​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocation)

  non-null

  A list of the nodes contained in SellingPlanAllocationEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product​Variant.sellingPlanAllocations](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanAllocations)

#### Possible returns

* [Selling​Plan​Allocation​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection#returns-edges)
* [Selling​Plan​Allocation​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection#returns-nodes)
* [Selling​Plan​Allocation​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection#returns-pageInfo)

---



<a id="latest-connections-sellingplanconnection"></a>


## Selling​Plan​Connection

connection

An auto-generated type for paginating through multiple SellingPlans.

### Fields with this connection

* [Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlan) objects that share the same selling method and options.

  The `SellingPlanGroup` acts as a container for one or more individual `SellingPlan` objects, enabling merchants to offer multiple options (like weekly or monthly deliveries) under one, unified category on a product page.

***

### Possible returns

* edges

  [\[Selling​Plan​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanEdge)

  non-null

  A list of edges.

* nodes

  [\[Selling​Plan!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan)

  non-null

  A list of the nodes contained in SellingPlanEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

#### Possible returns

* [Selling​Plan​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection#returns-edges)
* [Selling​Plan​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection#returns-nodes)
* [Selling​Plan​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection#returns-pageInfo)

---



<a id="latest-connections-sellingplangroupconnection"></a>


## Selling​Plan​Group​Connection

connection

An auto-generated type for paginating through multiple SellingPlanGroups.

### Fields with this connection

* [Product.sellingPlanGroups](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.sellingPlanGroups)

  OBJECT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Possible returns

* edges

  [\[Selling​Plan​Group​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroupEdge)

  non-null

  A list of edges.

* nodes

  [\[Selling​Plan​Group!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroup)

  non-null

  A list of the nodes contained in SellingPlanGroupEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product.sellingPlanGroups](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.sellingPlanGroups)

#### Possible returns

* [Selling​Plan​Group​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection#returns-edges)
* [Selling​Plan​Group​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection#returns-nodes)
* [Selling​Plan​Group​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection#returns-pageInfo)

---



<a id="latest-connections-storeavailabilityconnection"></a>


## Store​Availability​Connection

connection

An auto-generated type for paginating through multiple StoreAvailabilities.

### Fields with this connection

* [Product​Variant.storeAvailability](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.storeAvailability)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Possible returns

* edges

  [\[Store​Availability​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailabilityEdge)

  non-null

  A list of edges.

* nodes

  [\[Store​Availability!\]!](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailability)

  non-null

  A list of the nodes contained in StoreAvailabilityEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Fields with this connection

* [Product​Variant.storeAvailability](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.storeAvailability)

#### Possible returns

* [Store​Availability​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection#returns-edges)
* [Store​Availability​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection#returns-nodes)
* [Store​Availability​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection#returns-pageInfo)

---



<a id="latest-connections-stringconnection"></a>


## String​Connection

connection

An auto-generated type for paginating through multiple Strings.

### Queries with this connection

* [product​Tags](https://shopify.dev/docs/api/storefront/latest/queries/productTags)

  query

  Returns a paginated list of all tags that have been added to [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) in the shop. Useful for building tag-based product filtering or navigation in a storefront.

  * first

    [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    required

    ### Arguments

    Returns up to the first `n` elements from the list.

  ***

* [product​Types](https://shopify.dev/docs/api/storefront/latest/queries/productTypes)

  query

  Returns a list of product types from the shop's [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) objects that are published to your app. Use this query to build [filtering interfaces](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) or navigation menus based on product categorization.

  * first

    [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    required

    ### Arguments

    Returns up to the first `n` elements from the list.

  ***

***

### Possible returns

* edges

  [\[String​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/StringEdge)

  non-null

  A list of edges.

* nodes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A list of the nodes contained in StringEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [product​Tags](https://shopify.dev/docs/api/storefront/latest/queries/productTags)
* [product​Types](https://shopify.dev/docs/api/storefront/latest/queries/productTypes)

#### Possible returns

* [String​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection#returns-edges)
* [String​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection#returns-nodes)
* [String​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection#returns-pageInfo)

---



<a id="latest-connections-urlredirectconnection"></a>


## Url​Redirect​Connection

connection

An auto-generated type for paginating through multiple UrlRedirects.

### Queries with this connection

* [url​Redirects](https://shopify.dev/docs/api/storefront/latest/queries/urlRedirects)

  query

  Returns a paginated list of [`UrlRedirect`](https://shopify.dev/docs/api/storefront/2026-04/objects/UrlRedirect) objects configured for the shop. Each redirect maps an old path to a target location.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Returns up to the first `n` elements from the list.

  * after

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come after the specified cursor.

  * last

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Returns up to the last `n` elements from the list.

  * before

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Returns the elements that come before the specified cursor.

  * reverse

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * query

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

    * created\_at
    * path
    * target

  ***

***

### Possible returns

* edges

  [\[Url​Redirect​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UrlRedirectEdge)

  non-null

  A list of edges.

* nodes

  [\[Url​Redirect!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UrlRedirect)

  non-null

  A list of the nodes contained in UrlRedirectEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Map

#### Queries with this connection

* [url​Redirects](https://shopify.dev/docs/api/storefront/latest/queries/urlRedirects)

#### Possible returns

* [Url​Redirect​Connection.edges](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection#returns-edges)
* [Url​Redirect​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection#returns-nodes)
* [Url​Redirect​Connection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection#returns-pageInfo)

---



<a id="latest-input-objects-attributeinput"></a>


## Attribute​Input

input\_object

A custom key-value pair that stores additional information on a [cart](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) or [cart line](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine). Attributes capture additional information like gift messages, special instructions, or custom order details. Learn more about [managing carts with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Key or name of the attribute.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Value of the attribute.

***

### Input objects using this input

* [Cart​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-attributes)

  INPUT OBJECT

  The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

* [Cart​Line​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-attributes)

  INPUT OBJECT

  The input fields for adding a merchandise line to a cart. Each line represents a [`ProductVariant`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant) the buyer intends to purchase, along with the quantity and optional [`SellingPlan`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlan) for subscriptions.

  Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation when creating a cart with initial items, and the [`cartLinesAdd`](https://shopify.dev/docs/api/storefront/current/mutations/cartLinesAdd) mutation when adding items to an existing cart.

* [Cart​Line​Update​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-attributes)

  INPUT OBJECT

  The input fields for updating a merchandise line in a cart. Used by the [`cartLinesUpdate`](https://shopify.dev/docs/api/storefront/current/mutations/cartLinesUpdate) mutation.

  Specify the line item's [`id`](https://shopify.dev/docs/api/storefront/current/input-objects/CartLineUpdateInput#fields-id) along with any fields to modify. You can change the quantity, swap the merchandise, update custom attributes, or associate a different selling plan.

***

### Map

#### Input objects using this input

* [Cart​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-attributes)
* [Cart​Line​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-attributes)
* [Cart​Line​Update​Input.attributes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-attributes)

---



<a id="latest-input-objects-buyerinput"></a>


## Buyer​Input

input\_object

Identifies a B2B buyer for the [`@inContext`](https://shopify.dev/docs/storefronts/headless/bring-your-own-stack/b2b) directive. Pass this input to contextualize Storefront API queries with data like B2B-specific pricing, quantity rules, and quantity price breaks.

For B2B customers with access to multiple company locations, include the [`companyLocationId`](https://shopify.dev/docs/api/storefront/latest/input-objects/BuyerInput#fields-companyLocationId) to specify which location they're purchasing for.

### Fields

* company​Location​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The identifier of the company location.

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The customer access token retrieved from the [Customer Accounts API](https://shopify.dev/docs/api/customer#step-obtain-access-token).

***

### Map

No referencing types

---



<a id="latest-input-objects-cartaddressinput"></a>


## Cart​Address​Input

input\_object

Specifies a delivery address for a cart. Provide either a [`deliveryAddress`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartAddressInput#fields-deliveryAddress) with full address details, or a [`copyFromCustomerAddressId`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartAddressInput#fields-copyFromCustomerAddressId) to copy from an existing customer address. Used by [`CartSelectableAddressInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectableAddressInput) and [`CartSelectableAddressUpdateInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectableAddressUpdateInput).

### Fields

* copy​From​Customer​Address​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  Copies details from the customer address to an address on this cart.

* delivery​Address

  [Cart​Delivery​Address​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput)

  A delivery address stored on this cart.

***

### Input objects using this input

* [Cart​Selectable​Address​Input.address](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-address)

  INPUT OBJECT

  The input fields for a selectable delivery address to present to the buyer. Used by [`CartDeliveryInput`](https://shopify.dev/docs/api/storefront/current/input-objects/CartDeliveryInput) when creating a cart with the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  You can pre-select an address for the buyer, mark it as one-time use so it isn't saved after checkout, and specify how strictly the address should be validated.

* [Cart​Selectable​Address​Update​Input.address](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-address)

  INPUT OBJECT

  The input fields to update a line item on a cart.

***

### Map

#### Input objects using this input

* [Cart​Selectable​Address​Input.address](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-address)
* [Cart​Selectable​Address​Update​Input.address](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-address)

---



<a id="latest-input-objects-cartbuyeridentityinput"></a>


## Cart​Buyer​Identity​Input

input\_object

The input fields for identifying the buyer associated with a cart. Buyer identity determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match the customer's shipping address.

Used by [`cartCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartCreate) and [`cartBuyerIdentityUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartBuyerIdentityUpdate) to set contact information, location, and checkout preferences.

***

**Note:** Preferences prefill fields at checkout but don\&#39;t sync back to the cart if overwritten.

***

### Fields

* company​Location​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The company location of the buyer that is interacting with the cart.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  The country where the buyer is located.

* customer​Access​Token

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The access token used to identify the customer associated with the cart.

* email

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The email address of the buyer that is interacting with the cart.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The phone number of the buyer that is interacting with the cart.

* preferences

  [Cart​Preferences​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartPreferencesInput)

  A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. Preferences are not synced back to the cart if they are overwritten.

* delivery​Address​Preferences

  [\[Delivery​Address​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput)

  Deprecated

***

### Input objects using this input

* [Cart​Input.buyerIdentity](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-buyerIdentity)

  INPUT OBJECT

  The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

***

### Map

#### Input objects using this input

* [Cart​Input.buyerIdentity](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-buyerIdentity)

---



<a id="latest-input-objects-cartdeliveryaddressinput"></a>


## Cart​Delivery​Address​Input

input\_object

The input fields to create or update a cart address.

### Fields

* address1

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the customer's company or organization.

* country​Code

  [Country​Code](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  The name of the country.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The last name of the customer.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

* province​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* zip

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The zip or postal code of the address.

***

### Input objects using this input

* [Cart​Address​Input.deliveryAddress](https://shopify.dev/docs/api/storefront/latest/input-objects/CartAddressInput#fields-deliveryAddress)

  INPUT OBJECT

  Specifies a delivery address for a cart. Provide either a [`deliveryAddress`](https://shopify.dev/docs/api/storefront/current/input-objects/CartAddressInput#fields-deliveryAddress) with full address details, or a [`copyFromCustomerAddressId`](https://shopify.dev/docs/api/storefront/current/input-objects/CartAddressInput#fields-copyFromCustomerAddressId) to copy from an existing customer address. Used by [`CartSelectableAddressInput`](https://shopify.dev/docs/api/storefront/current/input-objects/CartSelectableAddressInput) and [`CartSelectableAddressUpdateInput`](https://shopify.dev/docs/api/storefront/current/input-objects/CartSelectableAddressUpdateInput).

***

### Map

#### Input objects using this input

* [Cart​Address​Input.deliveryAddress](https://shopify.dev/docs/api/storefront/latest/input-objects/CartAddressInput#fields-deliveryAddress)

---



<a id="latest-input-objects-cartdeliverycoordinatespreferenceinput"></a>


## Cart​Delivery​Coordinates​Preference​Input

input\_object

Preferred location used to find the closest pick up point based on coordinates.

### Fields

* country​Code

  [Country​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  non-null

  The two-letter code for the country of the preferred location.

  For example, US.

* latitude

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The geographic latitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.

* longitude

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The geographic longitude for a given location. Coordinates are required in order to set pickUpHandle for pickup points.

***

### Input objects using this input

* [Cart​Delivery​Preference​Input.coordinates](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput#fields-coordinates)

  INPUT OBJECT

  Delivery preferences can be used to prefill the delivery section at checkout.

***

### Map

#### Input objects using this input

* [Cart​Delivery​Preference​Input.coordinates](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput#fields-coordinates)

---



<a id="latest-input-objects-cartdeliveryinput"></a>


## Cart​Delivery​Input

input\_object

The input fields for the cart's delivery properties.

### Fields

* addresses

  [\[Cart​Selectable​Address​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput)

  Selectable addresses to present to the buyer on the cart.

  The input must not contain more than `250` values.

***

### Input objects using this input

* [Cart​Input.delivery](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-delivery)

  INPUT OBJECT

  The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

***

### Map

#### Input objects using this input

* [Cart​Input.delivery](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-delivery)

---



<a id="latest-input-objects-cartdeliverypreferenceinput"></a>


## Cart​Delivery​Preference​Input

input\_object

Delivery preferences can be used to prefill the delivery section at checkout.

### Fields

* coordinates

  [Cart​Delivery​Coordinates​Preference​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryCoordinatesPreferenceInput)

  The coordinates of a delivery location in order of preference.

* delivery​Method

  [\[Preference​Delivery​Method​Type!\]](https://shopify.dev/docs/api/storefront/latest/enums/PreferenceDeliveryMethodType)

  The preferred delivery methods such as shipping, local pickup or through pickup points.

  The input must not contain more than `250` values.

* pickup​Handle

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods. It accepts both location ID for local pickup and external IDs for pickup points.

  The input must not contain more than `250` values.

***

### Input objects using this input

* [Cart​Preferences​Input.delivery](https://shopify.dev/docs/api/storefront/latest/input-objects/CartPreferencesInput#fields-delivery)

  INPUT OBJECT

  The input fields represent preferences for the buyer that is interacting with the cart.

***

### Map

#### Input objects using this input

* [Cart​Preferences​Input.delivery](https://shopify.dev/docs/api/storefront/latest/input-objects/CartPreferencesInput#fields-delivery)

---



<a id="latest-input-objects-cartinput"></a>


## Cart​Input

input\_object

The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartCreate) mutation.

Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

### Fields

* attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput)

  An array of key-value pairs that contains additional information about the cart.

  The input must not contain more than `250` values.

* buyer​Identity

  [Cart​Buyer​Identity​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput)

  The customer associated with the cart. Used to determine \[international pricing] (<https://shopify.dev/custom-storefronts/internationalization/international-pricing>). Buyer identity should match the customer's shipping address.

* delivery

  [Cart​Delivery​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryInput)

  The delivery-related fields for the cart.

* discount​Codes

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The case-insensitive discount codes that the customer added at checkout.

  The input must not contain more than `250` values.

* gift​Card​Codes

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The case-insensitive gift card codes.

  The input must not contain more than `250` values.

* lines

  [\[Cart​Line​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput)

  A list of merchandise lines to add to the cart.

  The input must not contain more than `250` values.

* metafields

  [\[Cart​Input​Metafield​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInputMetafieldInput)

  The metafields to associate with this cart.

  The input must not contain more than `250` values.

* note

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A note that's associated with the cart. For example, the note can be a personalized message to the buyer.

***

### Map

No referencing types

---



<a id="latest-input-objects-cartinputmetafieldinput"></a>


## Cart​Input​Metafield​Input

input\_object

The input fields for a cart metafield value to set.

Cart metafields will be copied to order metafields at order creation time if there is a matching order metafield definition with the [`cart to order copyable`](https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities#cart-to-order-copyable) capability enabled.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key name of the metafield.

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The type of data that the cart metafield stores. The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.

***

### Input objects using this input

* [Cart​Input.metafields](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-metafields)

  INPUT OBJECT

  The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

***

### Map

#### Input objects using this input

* [Cart​Input.metafields](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-metafields)

---



<a id="latest-input-objects-cartlineinput"></a>


## Cart​Line​Input

input\_object

The input fields for adding a merchandise line to a cart. Each line represents a [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) the buyer intends to purchase, along with the quantity and optional [`SellingPlan`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlan) for subscriptions.

Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartCreate) mutation when creating a cart with initial items, and the [`cartLinesAdd`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartLinesAdd) mutation when adding items to an existing cart.

### Fields

* attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput)

  An array of key-value pairs that contains additional information about the merchandise line.

  The input must not contain more than `250` values.

* merchandise​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the merchandise that the buyer intends to purchase.

* parent

  [Cart​Line​Parent​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineParentInput)

  The parent line item of the cart line.

* quantity

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Default:1

  The quantity of the merchandise.

* selling​Plan​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the selling plan that the merchandise is being purchased with.

***

### Input objects using this input

* [Cart​Input.lines](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-lines)

  INPUT OBJECT

  The input fields for creating a [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart). Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  Accepts merchandise lines, discount codes, gift card codes, and a note. You can also set custom attributes, metafields, buyer identity for international pricing, and delivery addresses.

***

### Map

#### Input objects using this input

* [Cart​Input.lines](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-lines)

---



<a id="latest-input-objects-cartlineparentinput"></a>


## Cart​Line​Parent​Input

input\_object

The parent line item of the cart line.

### Fields

* line​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The id of the parent line item.

* merchandise​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the parent line merchandise.

***

### Input objects using this input

* [Cart​Line​Input.parent](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-parent)

  INPUT OBJECT

  The input fields for adding a merchandise line to a cart. Each line represents a [`ProductVariant`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant) the buyer intends to purchase, along with the quantity and optional [`SellingPlan`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlan) for subscriptions.

  Used by the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation when creating a cart with initial items, and the [`cartLinesAdd`](https://shopify.dev/docs/api/storefront/current/mutations/cartLinesAdd) mutation when adding items to an existing cart.

***

### Map

#### Input objects using this input

* [Cart​Line​Input.parent](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-parent)

---



<a id="latest-input-objects-cartlineupdateinput"></a>


## Cart​Line​Update​Input

input\_object

The input fields for updating a merchandise line in a cart. Used by the [`cartLinesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartLinesUpdate) mutation.

Specify the line item's [`id`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartLineUpdateInput#fields-id) along with any fields to modify. You can change the quantity, swap the merchandise, update custom attributes, or associate a different selling plan.

### Fields

* attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput)

  An array of key-value pairs that contains additional information about the merchandise line.

  The input must not contain more than `250` values.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the merchandise line.

* merchandise​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the merchandise for the line item.

* quantity

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The quantity of the line item.

* selling​Plan​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the selling plan that the merchandise is being purchased with.

***

### Map

No referencing types

---



<a id="latest-input-objects-cartmetafielddeleteinput"></a>


## Cart​Metafield​Delete​Input

input\_object

The input fields to delete a cart metafield.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key name of the cart metafield. Can either be a composite key (`namespace.key`) or a simple key that relies on the default app-reserved namespace.

* owner​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the cart resource.

***

### Map

No referencing types

---



<a id="latest-input-objects-cartmetafieldssetinput"></a>


## Cart​Metafields​Set​Input

input\_object

The input fields for a cart metafield value to set.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key name of the cart metafield. This can either be a composite key (`namespace.key`) or a simple key that relies on the default app-reserved namespace.

* owner​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the cart resource.

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The type of data that the cart metafield stores. The type of data must be a [supported type](https://shopify.dev/apps/metafields/types).

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The data to store in the cart metafield. The data is always stored as a string, regardless of the metafield's type.

***

### Map

No referencing types

---



<a id="latest-input-objects-cartpreferencesinput"></a>


## Cart​Preferences​Input

input\_object

The input fields represent preferences for the buyer that is interacting with the cart.

### Fields

* delivery

  [Cart​Delivery​Preference​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput)

  Delivery preferences can be used to prefill the delivery section in at checkout.

* wallet

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Wallet preferences are used to populate relevant payment fields in the checkout flow. Accepted value: `["shop_pay"]`.

  The input must not contain more than `250` values.

***

### Input objects using this input

* [Cart​Buyer​Identity​Input.preferences](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-preferences)

  INPUT OBJECT

  The input fields for identifying the buyer associated with a cart. Buyer identity determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match the customer's shipping address.

  Used by [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) and [`cartBuyerIdentityUpdate`](https://shopify.dev/docs/api/storefront/current/mutations/cartBuyerIdentityUpdate) to set contact information, location, and checkout preferences.

  ***

  **Note:** Preferences prefill fields at checkout but don\&#39;t sync back to the cart if overwritten.

  ***

***

### Map

#### Input objects using this input

* [Cart​Buyer​Identity​Input.preferences](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-preferences)

---



<a id="latest-input-objects-cartselectableaddressinput"></a>


## Cart​Selectable​Address​Input

input\_object

The input fields for a selectable delivery address to present to the buyer. Used by [`CartDeliveryInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartDeliveryInput) when creating a cart with the [`cartCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartCreate) mutation.

You can pre-select an address for the buyer, mark it as one-time use so it isn't saved after checkout, and specify how strictly the address should be validated.

### Fields

* address

  [Cart​Address​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartAddressInput)

  required

  Exactly one kind of delivery address.

* one​Time​Use

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  When true, this delivery address will not be associated with the buyer after a successful checkout.

* selected

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Sets exactly one address as pre-selected for the buyer.

* validation​Strategy

  [Delivery​Address​Validation​Strategy](https://shopify.dev/docs/api/storefront/latest/enums/DeliveryAddressValidationStrategy)

  Default:COUNTRY\_CODE\_ONLY

  Defines what kind of address validation is requested.

***

### Input objects using this input

* [Cart​Delivery​Input.addresses](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryInput#fields-addresses)

  INPUT OBJECT

  The input fields for the cart's delivery properties.

***

### Map

#### Input objects using this input

* [Cart​Delivery​Input.addresses](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryInput#fields-addresses)

---



<a id="latest-input-objects-cartselectableaddressupdateinput"></a>


## Cart​Selectable​Address​Update​Input

input\_object

The input fields to update a line item on a cart.

### Fields

* address

  [Cart​Address​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartAddressInput)

  Exactly one kind of delivery address.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The id of the selectable address.

* one​Time​Use

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  When true, this delivery address will not be associated with the buyer after a successful checkout.

* selected

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Sets exactly one address as pre-selected for the buyer.

* validation​Strategy

  [Delivery​Address​Validation​Strategy](https://shopify.dev/docs/api/storefront/latest/enums/DeliveryAddressValidationStrategy)

  Default:COUNTRY\_CODE\_ONLY

  Defines what kind of address validation is requested.

***

### Map

No referencing types

---



<a id="latest-input-objects-cartselecteddeliveryoptioninput"></a>


## Cart​Selected​Delivery​Option​Input

input\_object

The input fields for updating the selected delivery options for a delivery group.

### Fields

* delivery​Group​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the cart delivery group.

* delivery​Option​Handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The handle of the selected delivery option.

***

### Map

No referencing types

---



<a id="latest-input-objects-categoryfilter"></a>


## Category​Filter

input\_object

A filter used to view a subset of products in a collection matching a specific category value.

### Fields

* id

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The id of the category to filter on.

***

### Input objects using this input

* [Product​Filter.category](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-category)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

***

### Map

#### Input objects using this input

* [Product​Filter.category](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-category)

---



<a id="latest-input-objects-customeraccesstokencreateinput"></a>


## Customer​Access​Token​Create​Input

input\_object

The input fields for authenticating a customer with email and password. Used by the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) mutation to generate a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken), which is required to read or modify customer data.

### Fields

* email

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The email associated to the customer.

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The login password to be used by the customer.

***

### Map

No referencing types

---



<a id="latest-input-objects-customeractivateinput"></a>


## Customer​Activate​Input

input\_object

The input fields to activate a customer.

### Fields

* activation​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The activation token required to activate the customer.

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  New password that will be set during activation.

***

### Map

No referencing types

---



<a id="latest-input-objects-customercreateinput"></a>


## Customer​Create​Input

input\_object

The input fields for creating a new [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) account. Used by the [`customerCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerCreate) mutation.

For legacy customer accounts only and requires an email address and password. Optionally accepts the customer's name, phone number, and email marketing consent.

***

**Caution:** The password is used for customer authentication. Ensure it\&#39;s transmitted securely and never logged or stored in plain text.

***

### Fields

* accepts​Marketing

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Indicates whether the customer has consented to be sent marketing material via email.

* email

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The customer’s email.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The customer’s first name.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The customer’s last name.

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The login password used by the customer.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

***

### Map

No referencing types

---



<a id="latest-input-objects-customerresetinput"></a>


## Customer​Reset​Input

input\_object

The input fields to reset a customer's password.

### Fields

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  New password that will be set as part of the reset password process.

* reset​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The reset token required to reset the customer’s password.

***

### Map

No referencing types

---



<a id="latest-input-objects-customerupdateinput"></a>


## Customer​Update​Input

input\_object

The input fields for updating a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Used by the [`customerUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerUpdate) mutation.

***

**Caution:** Updating the password invalidates all existing access tokens, including the one used to perform the mutation. The response returns a new access token. Ensure your app handles the new token returned in the response to avoid logging the customer out.

***

### Fields

* accepts​Marketing

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Indicates whether the customer has consented to be sent marketing material via email.

* email

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The customer’s email.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The customer’s first name.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The customer’s last name.

* password

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The login password used by the customer.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*. To remove the phone number, specify `null`.

***

### Map

No referencing types

---



<a id="latest-input-objects-deliveryaddressinput"></a>


## Delivery​Address​Input

input\_object

The input fields for delivery address preferences.

### Fields

* customer​Address​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of a customer address that is associated with the buyer that is interacting with the cart.

* delivery​Address

  [Mailing​Address​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MailingAddressInput)

  A delivery address preference of a buyer that is interacting with the cart.

* delivery​Address​Validation​Strategy

  [Delivery​Address​Validation​Strategy](https://shopify.dev/docs/api/storefront/latest/enums/DeliveryAddressValidationStrategy)

  Default:COUNTRY\_CODE\_ONLY

  Defines what kind of address validation is requested.

* one​Time​Use

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Whether the given delivery address is considered to be a one-time use address. One-time use addresses do not get persisted to the buyer's personal addresses when checking out.

***

### Input objects using this input

* [Cart​Buyer​Identity​Input.deliveryAddressPreferences](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-deliveryAddressPreferences)

  INPUT OBJECT

  The input fields for identifying the buyer associated with a cart. Buyer identity determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match the customer's shipping address.

  Used by [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) and [`cartBuyerIdentityUpdate`](https://shopify.dev/docs/api/storefront/current/mutations/cartBuyerIdentityUpdate) to set contact information, location, and checkout preferences.

  ***

  **Note:** Preferences prefill fields at checkout but don\&#39;t sync back to the cart if overwritten.

  ***

***

### Map

#### Input objects using this input

* [Cart​Buyer​Identity​Input.deliveryAddressPreferences](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-deliveryAddressPreferences)

---



<a id="latest-input-objects-geocoordinateinput"></a>


## Geo​Coordinate​Input

input\_object

The input fields used to specify a geographical location.

### Fields

* latitude

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The coordinate's latitude value.

* longitude

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The coordinate's longitude value.

***

### Map

No referencing types

---



<a id="latest-input-objects-hasmetafieldsidentifier"></a>


## Has​Metafields​Identifier

input\_object

The input fields to identify a [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) on an owner resource by namespace and key. Used as an argument to the [`metafields`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields#fields-metafields) field of the `HasMetafields` interface to retrieve multiple metafields in a single request.

If you omit the namespace, then the [app-reserved namespace](https://shopify.dev/docs/apps/build/metafields#app-owned-metafields) is used by default.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The identifier for the metafield.

* namespace

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

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

  [Crop​Region](https://shopify.dev/docs/api/storefront/latest/enums/CropRegion)

  The region of the image to remain after cropping. Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal. The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result in an image with a width of 5 and height of 10, where the right side of the image is removed.

* max​Height

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Image height in pixels between 1 and 5760.

* max​Width

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Image width in pixels between 1 and 5760.

* preferred​Content​Type

  [Image​Content​Type](https://shopify.dev/docs/api/storefront/latest/enums/ImageContentType)

  Convert the source image into the preferred content type. Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.

* scale

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Default:1

  Image size multiplier for high-resolution retina displays. Must be within 1..3.

***

### Map

No referencing types

---



<a id="latest-input-objects-mailingaddressinput"></a>


## Mailing​Address​Input

input\_object

The input fields for creating or updating a [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress). Accepts standard address components including street address, city, province, country, and postal code, along with customer name and contact information.

Used by the [`customerAddressCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressCreate) and [`customerAddressUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressUpdate) mutations, and as part of [`DeliveryAddressInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/DeliveryAddressInput) for cart delivery preferences.

### Fields

* address1

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first line of the address. Typically the street address or PO Box number.

* address2

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The second line of the address. Typically the number of the apartment, suite, or unit.

* city

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the city, district, village, or town.

* company

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the customer's company or organization.

* country

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the country.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first name of the customer.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The last name of the customer.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* zip

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The zip or postal code of the address.

***

### Input objects using this input

* [Delivery​Address​Input.deliveryAddress](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-deliveryAddress)

  INPUT OBJECT

  The input fields for delivery address preferences.

***

### Map

#### Input objects using this input

* [Delivery​Address​Input.deliveryAddress](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-deliveryAddress)

---



<a id="latest-input-objects-metafieldfilter"></a>


## Metafield​Filter

input\_object

Filters products in a collection by matching a specific metafield value. Used by the [`ProductFilter`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/ProductFilter) input's `productMetafield` and `variantMetafield` fields.

Supports the following metafield types: `number_integer`, `number_decimal`, `single_line_text_field`, and `boolean`.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key of the metafield to filter on.

* namespace

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The namespace of the metafield to filter on.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The value of the metafield.

***

### Input objects using this input

* [Product​Filter.productMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-productMetafield)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

* [Product​Filter.variantMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-variantMetafield)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

***

### Map

#### Input objects using this input

* [Product​Filter.productMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-productMetafield)
* [Product​Filter.variantMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-variantMetafield)

---



<a id="latest-input-objects-metaobjecthandleinput"></a>


## Metaobject​Handle​Input

input\_object

The input fields used to retrieve a metaobject by handle.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The handle of the metaobject.

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The type of the metaobject.

***

### Map

No referencing types

---



<a id="latest-input-objects-moneyinput"></a>


## Money​Input

input\_object

The input fields for a monetary value with currency.

### Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/storefront/latest/scalars/Decimal)

  non-null

  Decimal money amount.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

  non-null

  Currency of the money.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Delivery​Method​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDeliveryMethodInput#fields-amount)

  INPUT OBJECT

  The input fields to create a delivery method for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Discount​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput#fields-amount)

  INPUT OBJECT

  The input fields to create a discount for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Input.total](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-total)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Input.subtotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-subtotal)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Input.totalTax](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-totalTax)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.originalLinePrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-originalLinePrice)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.finalLinePrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-finalLinePrice)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.originalItemPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-originalItemPrice)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.finalItemPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-finalItemPrice)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Shipping​Line​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestShippingLineInput#fields-amount)

  INPUT OBJECT

  The input fields to create a shipping line for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.originalTotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-originalTotal)

  INPUT OBJECT

  The input fields to create a shipping total for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.finalTotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-finalTotal)

  INPUT OBJECT

  The input fields to create a shipping total for a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Delivery​Method​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDeliveryMethodInput#fields-amount)
* [Shop​Pay​Payment​Request​Discount​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput#fields-amount)
* [Shop​Pay​Payment​Request​Input.total](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-total)
* [Shop​Pay​Payment​Request​Input.subtotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-subtotal)
* [Shop​Pay​Payment​Request​Input.totalTax](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-totalTax)
* [Shop​Pay​Payment​Request​Line​Item​Input.originalLinePrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-originalLinePrice)
* [Shop​Pay​Payment​Request​Line​Item​Input.finalLinePrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-finalLinePrice)
* [Shop​Pay​Payment​Request​Line​Item​Input.originalItemPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-originalItemPrice)
* [Shop​Pay​Payment​Request​Line​Item​Input.finalItemPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-finalItemPrice)
* [Shop​Pay​Payment​Request​Shipping​Line​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestShippingLineInput#fields-amount)
* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.originalTotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-originalTotal)
* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.finalTotal](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-finalTotal)

---



<a id="latest-input-objects-pricerangefilter"></a>


## Price​Range​Filter

input\_object

A price range for filtering products in a collection. Used by the [`ProductFilter`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/ProductFilter) input's [`price`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/ProductFilter#fields-price) field.

***

**Note:** Omitting the \<a href="https://shopify.dev/docs/api/storefront/currents/input-objects/PriceRangeFilter#fields-max">maximum\</a> returns all products above the \<a href="/docs/api/storefront/2026-04/input-objects/PriceRangeFilter#fields-min">minimum\</a>.

***

### Fields

* max

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The maximum price in the range. Empty indicates no max price.

* min

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  Default:0.0

  The minimum price in the range. Defaults to zero.

***

### Input objects using this input

* [Product​Filter.price](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-price)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

***

### Map

#### Input objects using this input

* [Product​Filter.price](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-price)

---



<a id="latest-input-objects-productfilter"></a>


## Product​Filter

input\_object

The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

### Fields

* available

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Filter on if the product is available for sale.

* category

  [Category​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/CategoryFilter)

  A product category to filter on.

* price

  [Price​Range​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/PriceRangeFilter)

  A range of prices to filter with-in.

* product​Metafield

  [Metafield​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/MetafieldFilter)

  A product metafield to filter on.

* product​Type

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The product type to filter on.

* product​Vendor

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The product vendor to filter on.

* tag

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A product tag to filter on.

* taxonomy​Metafield

  [Taxonomy​Metafield​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/TaxonomyMetafieldFilter)

  A standard product attribute metafield to filter on.

* variant​Metafield

  [Metafield​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/MetafieldFilter)

  A variant metafield to filter on.

* variant​Option

  [Variant​Option​Filter](https://shopify.dev/docs/api/storefront/latest/input-objects/VariantOptionFilter)

  A variant option to filter on.

***

### Map

No referencing types

---



<a id="latest-input-objects-selectedoptioninput"></a>


## Selected​Option​Input

input\_object

The input fields required for a selected option.

### Fields

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The product option’s name.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The product option’s value.

***

### Map

No referencing types

---



<a id="latest-input-objects-shoppaypaymentrequestdeliverymethodinput"></a>


## Shop​Pay​Payment​Request​Delivery​Method​Input

input\_object

The input fields to create a delivery method for a Shop Pay payment request.

### Fields

* amount

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The amount for the delivery method.

* code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The code of the delivery method.

* delivery​Expectation​Label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The detail about when the delivery may be expected.

* detail

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The detail of the delivery method.

* label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The label of the delivery method.

* max​Delivery​Date

  [ISO8601Date​Time](https://shopify.dev/docs/api/storefront/latest/scalars/ISO8601DateTime)

  The maximum delivery date for the delivery method.

* min​Delivery​Date

  [ISO8601Date​Time](https://shopify.dev/docs/api/storefront/latest/scalars/ISO8601DateTime)

  The minimum delivery date for the delivery method.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Input.deliveryMethods](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-deliveryMethods)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Input.deliveryMethods](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-deliveryMethods)

---



<a id="latest-input-objects-shoppaypaymentrequestdiscountinput"></a>


## Shop​Pay​Payment​Request​Discount​Input

input\_object

The input fields to create a discount for a Shop Pay payment request.

### Fields

* amount

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The amount of the discount.

* label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The label of the discount.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Input.discounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-discounts)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.lineDiscounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-lineDiscounts)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Line​Item​Input.itemDiscounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-itemDiscounts)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.discounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-discounts)

  INPUT OBJECT

  The input fields to create a shipping total for a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Input.discounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-discounts)
* [Shop​Pay​Payment​Request​Line​Item​Input.lineDiscounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-lineDiscounts)
* [Shop​Pay​Payment​Request​Line​Item​Input.itemDiscounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-itemDiscounts)
* [Shop​Pay​Payment​Request​Total​Shipping​Price​Input.discounts](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput#fields-discounts)

---



<a id="latest-input-objects-shoppaypaymentrequestimageinput"></a>


## Shop​Pay​Payment​Request​Image​Input

input\_object

The input fields to create an image for a Shop Pay payment request.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The alt text of the image.

* url

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The source URL of the image.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Line​Item​Input.image](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-image)

  INPUT OBJECT

  The input fields to create a line item for a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Line​Item​Input.image](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-image)

---



<a id="latest-input-objects-shoppaypaymentrequestinput"></a>


## Shop​Pay​Payment​Request​Input

input\_object

The input fields represent a Shop Pay payment request.

### Fields

* delivery​Methods

  [\[Shop​Pay​Payment​Request​Delivery​Method​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDeliveryMethodInput)

  The delivery methods for the payment request.

  The input must not contain more than `250` values.

* discount​Codes

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The discount codes for the payment request.

  The input must not contain more than `250` values.

* discounts

  [\[Shop​Pay​Payment​Request​Discount​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput)

  The discounts for the payment request order.

  The input must not contain more than `250` values.

* line​Items

  [\[Shop​Pay​Payment​Request​Line​Item​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput)

  The line items for the payment request.

  The input must not contain more than `250` values.

* locale

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The locale for the payment request.

* payment​Method

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The encrypted payment method for the payment request.

* presentment​Currency

  [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

  non-null

  The presentment currency for the payment request.

* selected​Delivery​Method​Type

  [Shop​Pay​Payment​Request​Delivery​Method​Type](https://shopify.dev/docs/api/storefront/latest/enums/ShopPayPaymentRequestDeliveryMethodType)

  The delivery method type for the payment request.

* shipping​Lines

  [\[Shop​Pay​Payment​Request​Shipping​Line​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestShippingLineInput)

  The shipping lines for the payment request.

  The input must not contain more than `250` values.

* subtotal

  [Money​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  required

  The subtotal amount for the payment request.

* total

  [Money​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  required

  The total amount for the payment request.

* total​Shipping​Price

  [Shop​Pay​Payment​Request​Total​Shipping​Price​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestTotalShippingPriceInput)

  The total shipping price for the payment request.

* total​Tax

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The total tax for the payment request.

***

### Map

No referencing types

---



<a id="latest-input-objects-shoppaypaymentrequestlineiteminput"></a>


## Shop​Pay​Payment​Request​Line​Item​Input

input\_object

The input fields to create a line item for a Shop Pay payment request.

### Fields

* final​Item​Price

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The final item price for the line item.

* final​Line​Price

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The final line price for the line item.

* image

  [Shop​Pay​Payment​Request​Image​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestImageInput)

  The image of the line item.

* item​Discounts

  [\[Shop​Pay​Payment​Request​Discount​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput)

  The item discounts for the line item.

  The input must not contain more than `250` values.

* label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The label of the line item.

* line​Discounts

  [\[Shop​Pay​Payment​Request​Discount​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput)

  The line discounts for the line item.

  The input must not contain more than `250` values.

* original​Item​Price

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The original item price for the line item.

* original​Line​Price

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The original line price for the line item.

* quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The quantity of the line item.

* requires​Shipping

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Whether the line item requires shipping.

* sku

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The SKU of the line item.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Input.lineItems](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-lineItems)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Input.lineItems](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-lineItems)

---



<a id="latest-input-objects-shoppaypaymentrequestshippinglineinput"></a>


## Shop​Pay​Payment​Request​Shipping​Line​Input

input\_object

The input fields to create a shipping line for a Shop Pay payment request.

### Fields

* amount

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The amount for the shipping line.

* code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The code of the shipping line.

* label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The label of the shipping line.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Input.shippingLines](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-shippingLines)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Input.shippingLines](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-shippingLines)

---



<a id="latest-input-objects-shoppaypaymentrequesttotalshippingpriceinput"></a>


## Shop​Pay​Payment​Request​Total​Shipping​Price​Input

input\_object

The input fields to create a shipping total for a Shop Pay payment request.

### Fields

* discounts

  [\[Shop​Pay​Payment​Request​Discount​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDiscountInput)

  The discounts for the shipping total.

  The input must not contain more than `250` values.

* final​Total

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The final total for the shipping total.

* original​Total

  [Money​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput)

  The original total for the shipping total.

***

### Input objects using this input

* [Shop​Pay​Payment​Request​Input.totalShippingPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-totalShippingPrice)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Input objects using this input

* [Shop​Pay​Payment​Request​Input.totalShippingPrice](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-totalShippingPrice)

---



<a id="latest-input-objects-taxonomymetafieldfilter"></a>


## Taxonomy​Metafield​Filter

input\_object

A filter used to view a subset of products in a collection matching a specific taxonomy metafield value.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key of the metafield to filter on.

* namespace

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The namespace of the metafield to filter on.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The value of the metafield.

***

### Input objects using this input

* [Product​Filter.taxonomyMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-taxonomyMetafield)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

***

### Map

#### Input objects using this input

* [Product​Filter.taxonomyMetafield](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-taxonomyMetafield)

---



<a id="latest-input-objects-variantoptionfilter"></a>


## Variant​Option​Filter

input\_object

The input fields for a filter used to view a subset of products in a collection matching a specific variant option.

### Fields

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the variant option to filter on.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The value of the variant option to filter on.

***

### Input objects using this input

* [Product​Filter.variantOption](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-variantOption)

  INPUT OBJECT

  The input fields for a filter used to view a subset of products in a collection. By default, the `available` and `price` filters are enabled. Filters are customized with the Shopify Search & Discovery app. Learn more about [customizing storefront filtering](https://help.shopify.com/manual/online-store/themes/customizing-themes/storefront-filters).

***

### Map

#### Input objects using this input

* [Product​Filter.variantOption](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-variantOption)

---



<a id="latest-input-objects-visitorconsent"></a>


## Visitor​Consent

input\_object

The visitor's consent to data processing purposes for the shop. true means accepting the purposes, false means declining them, and null means that the visitor didn't express a preference.

### Fields

* analytics

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  The visitor accepts or rejects the analytics data processing purpose.

* marketing

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  The visitor accepts or rejects the first and third party marketing data processing purposes.

* preferences

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  The visitor accepts or rejects the preferences data processing purpose.

* sale​Of​Data

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  The visitor accepts or rejects the sale or sharing of their data with third parties.

***

### Map

No referencing types

---



<a id="latest-interfaces-basecartline"></a>


## Base​Cart​Line

interface

Defines the shared fields for items in a shopping cart. Implemented by [`CartLine`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine) for individual merchandise and [`ComponentizableCartLine`](https://shopify.dev/docs/api/storefront/2026-04/objects/ComponentizableCartLine) for grouped merchandise like bundles.

Each implementation includes the merchandise being purchased, quantity, cost breakdown, applied discounts, custom attributes, and any associated [`SellingPlan`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlan).

### Fields

* attribute

  [Attribute](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

  An attribute associated with the cart line.

  * key

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The key of the attribute.

  ***

* attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

  non-null

  The attributes associated with the cart line. Attributes are represented as key-value pairs.

* cost

  [Cart​Line​Cost!](https://shopify.dev/docs/api/storefront/latest/objects/CartLineCost)

  non-null

  The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout.

* discount​Allocations

  [\[Cart​Discount​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

  non-null

  The discounts that have been applied to the cart line.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* merchandise

  [Merchandise!](https://shopify.dev/docs/api/storefront/latest/unions/Merchandise)

  non-null

  The merchandise that the buyer intends to purchase.

* quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The quantity of the merchandise that the customer intends to purchase.

* selling​Plan​Allocation

  [Selling​Plan​Allocation](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocation)

  The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased.

* estimated​Cost

  [Cart​Line​Estimated​Cost!](https://shopify.dev/docs/api/storefront/latest/objects/CartLineEstimatedCost)

  non-nullDeprecated

***

###### Variables

```json
{
	"attribute": {
		"key": ""
	},
	"attributes": "",
	"cost": "",
	"discountAllocations": "",
	"estimatedCost": "",
	"id": "",
	"merchandise": "",
	"quantity": "",
	"sellingPlanAllocation": ""
}
```

###### Schema

```graphql
interface BaseCartLine {
  attribute: Attribute
  attributes: [Attribute!]!
  cost: CartLineCost!
  discountAllocations: [CartDiscountAllocation!]!
  estimatedCost: CartLineEstimatedCost!
  id: ID!
  merchandise: Merchandise!
  quantity: Int!
  sellingPlanAllocation: SellingPlanAllocation
}
```

---



<a id="latest-interfaces-cartdiscountallocation"></a>


## Cart​Discount​Allocation

interface

A common interface for querying discount allocations regardless of how the discount was applied ([automatic](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), or custom). Each implementation represents a different discount source.

Tracks how a discount distributes across [cart lines](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine). Each allocation includes the [`CartDiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDiscountApplication) details, the discounted amount, and whether the discount targets line items or shipping.

### Fields

* discounted​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The discounted amount that has been applied to the cart line.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetType)

  non-null

  The type of line that the discount is applicable towards.

* discount​Application

  [Cart​Discount​Application!](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication)

  non-nullDeprecated

***

###### Variables

```json
{
	"discountApplication": "",
	"discountedAmount": "",
	"targetType": ""
}
```

###### Schema

```graphql
interface CartDiscountAllocation {
  discountApplication: CartDiscountApplication!
  discountedAmount: MoneyV2!
  targetType: DiscountApplicationTargetType!
}
```

---



<a id="latest-interfaces-discountapplication"></a>


## Discount​Application

interface

Captures the intent of a discount at the time it was applied. Each implementation represents a different discount source, such as [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), and manual discounts.

The actual discounted amount on a line item or shipping line is represented by the [`DiscountAllocation`](https://shopify.dev/docs/api/storefront/2026-04/objects/DiscountAllocation) object, which references the discount application it originated from.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetSelection)

  non-null

  Which lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetType)

  non-null

  The type of line that the discount is applicable towards.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)

  non-null

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

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

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



<a id="latest-interfaces-hasmetafields"></a>


## Has​Metafields

interface

Implemented by resources that support custom metadata through [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects. Types like [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), and [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) implement this interface to provide consistent access to metafields.

You can retrieve a [single metafield](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields#fields-metafield) by namespace and key, or fetch [multiple metafields](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields#fields-metafields) in a single request. If you omit the namespace, then the [app-reserved namespace](https://shopify.dev/docs/apps/build/metafields#app-owned-metafields) is used by default.

### Fields

* metafield

  [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

  Token access required

  A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

  * namespace

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    ### Arguments

    The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

  * key

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The identifier for the metafield.

  ***

* metafields

  [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

  non-null Token access required

  A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

  * identifiers

    [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

    required

    ### Arguments

    The list of metafields to retrieve by namespace and key.

    The input must not contain more than `250` values.

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



<a id="latest-interfaces-media"></a>


## Media

interface

Requires `unauthenticated_read_product_listings` access scope.

A common set of fields for media content associated with [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product). Implementations include [`MediaImage`](https://shopify.dev/docs/api/storefront/2026-04/objects/MediaImage) for Shopify-hosted images, [`Video`](https://shopify.dev/docs/api/storefront/2026-04/objects/Video) for Shopify-hosted videos, [`ExternalVideo`](https://shopify.dev/docs/api/storefront/2026-04/objects/ExternalVideo) for videos hosted on platforms like YouTube or Vimeo, and [`Model3d`](https://shopify.dev/docs/api/storefront/2026-04/objects/Model3d) for 3D models.

Each implementation shares fields for alt text, content type, and preview images, while adding type-specific fields like embed URLs for external videos or source files for 3D models.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/storefront/latest/enums/MediaContentType)

  non-null

  The media content type.

* presentation

  [Media​Presentation](https://shopify.dev/docs/api/storefront/latest/objects/MediaPresentation)

  The presentation for a media.

* preview​Image

  [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  The preview image for the media.

***

###### Variables

```json
{
	"alt": "",
	"id": "",
	"mediaContentType": "",
	"presentation": "",
	"previewImage": ""
}
```

###### Schema

```graphql
interface Media {
  alt: String
  id: ID!
  mediaContentType: MediaContentType!
  presentation: MediaPresentation
  previewImage: Image
}
```

---



<a id="latest-interfaces-onlinestorepublishable"></a>


## Online​Store​Publishable

interface

Represents a resource that can be published to the Online Store sales channel.

### Fields

* online​Store​Url

  [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

***

###### Variables

```json
{
	"onlineStoreUrl": ""
}
```

###### Schema

```graphql
interface OnlineStorePublishable {
  onlineStoreUrl: URL
}
```

---



<a id="latest-interfaces-sitemapresourceinterface"></a>


## Sitemap​Resource​Interface

interface

Represents the common fields for all sitemap resource types.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Resource's handle.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time when the resource was updated.

***

###### Variables

```json
{
	"handle": "",
	"updatedAt": ""
}
```

###### Schema

```graphql
interface SitemapResourceInterface {
  handle: String!
  updatedAt: DateTime!
}
```

---



<a id="latest-interfaces-trackable"></a>


## Trackable

interface

Represents a resource that you can track the origin of the search traffic.

### Fields

* tracking​Parameters

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

***

###### Variables

```json
{
	"trackingParameters": ""
}
```

###### Schema

```graphql
interface Trackable {
  trackingParameters: String
}
```

---



<a id="latest-mutations-cartattributesupdate"></a>


## cart​Attributes​Update

mutation

Updates the attributes on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Attributes are custom key-value pairs that store additional information, such as gift messages, special instructions, or order notes.

### Arguments

* attributes

  [\[Attribute​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput)

  required

  An array of key-value pairs that contains additional information about the cart.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Attributes​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartAttributesUpdate reference

---



<a id="latest-mutations-cartbuyeridentityupdate"></a>


## cart​Buyer​Identity​Update

mutation

Updates the buyer identity on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart), including contact information, location, and checkout preferences. The buyer's country determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match their shipping address.

Use this mutation to associate a logged-in customer via access token, set a B2B company location, or configure checkout preferences like delivery method. Preferences prefill checkout fields but don't sync back to the cart if overwritten at checkout.

### Arguments

* buyer​Identity

  [Cart​Buyer​Identity​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput)

  required

  The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). Buyer identity should match the customer's shipping address.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Buyer​Identity​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartBuyerIdentityUpdate reference

---



<a id="latest-mutations-cartcreate"></a>


## cart​Create

mutation

Creates a new [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) for a buyer session. You can optionally initialize the cart with merchandise lines, discount codes, gift card codes, buyer identity for international pricing, and custom attributes.

The returned cart includes a `checkoutUrl` that directs the buyer to complete their purchase.

### Arguments

* input

  [Cart​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput)

  The fields used to create a cart.

***

### Cart​Create​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The new cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartCreate reference

---



<a id="latest-mutations-cartdeliveryaddressesadd"></a>


## cart​Delivery​Addresses​Add

mutation

Adds delivery addresses to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). A cart can have up to 20 delivery addresses. One address can be marked as selected for checkout, and addresses can optionally be marked as one-time use so they aren't saved to the customer's account.

### Arguments

* addresses

  [\[Cart​Selectable​Address​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput)

  required

  A list of delivery addresses to add to the cart.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Delivery​Addresses​Add​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### Adds a delivery address to a cart

  #### Description

  Add a delivery address to a cart

  #### Query

  ```graphql
  mutation CartDeliveryAddressesAdd($id: ID!, $addresses: [CartSelectableAddressInput!]!) {
    cartDeliveryAddressesAdd(cartId: $id, addresses: $addresses) {
      userErrors {
        message
        code
        field
      }
      warnings {
        message
        code
        target
      }
      cart {
        id
        delivery {
          addresses {
            id
            selected
            oneTimeUse
            address {
              ... on CartDeliveryAddress {
                firstName
                lastName
                company
                address1
                address2
                city
                provinceCode
                zip
                countryCode
              }
            }
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Cart/c1-145e58da76bbee55b288ea50b81810d3?key=0068c4788cbb29555c10c3acc3b2ffc2",
    "addresses": [
      {
        "selected": true,
        "address": {
          "deliveryAddress": {
            "address1": "131 Greene Street",
            "city": "New York",
            "provinceCode": "NY",
            "countryCode": "US",
            "zip": "10012"
          }
        }
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "mutation CartDeliveryAddressesAdd($id: ID!, $addresses: [CartSelectableAddressInput!]!) { cartDeliveryAddressesAdd(cartId: $id, addresses: $addresses) { userErrors { message code field } warnings { message code target } cart { id delivery { addresses { id selected oneTimeUse address { ... on CartDeliveryAddress { firstName lastName company address1 address2 city provinceCode zip countryCode } } } } } } }",
   "variables": {
      "id": "gid://shopify/Cart/c1-145e58da76bbee55b288ea50b81810d3?key=0068c4788cbb29555c10c3acc3b2ffc2",
      "addresses": [
        {
          "selected": true,
          "address": {
            "deliveryAddress": {
              "address1": "131 Greene Street",
              "city": "New York",
              "provinceCode": "NY",
              "countryCode": "US",
              "zip": "10012"
            }
          }
        }
      ]
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    mutation CartDeliveryAddressesAdd($id: ID!, $addresses: [CartSelectableAddressInput!]!) {
      cartDeliveryAddressesAdd(cartId: $id, addresses: $addresses) {
        userErrors {
          message
          code
          field
        }
        warnings {
          message
          code
          target
        }
        cart {
          id
          delivery {
            addresses {
              id
              selected
              oneTimeUse
              address {
                ... on CartDeliveryAddress {
                  firstName
                  lastName
                  company
                  address1
                  address2
                  city
                  provinceCode
                  zip
                  countryCode
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Cart/c1-145e58da76bbee55b288ea50b81810d3?key=0068c4788cbb29555c10c3acc3b2ffc2",
          "addresses": [
              {
                  "selected": true,
                  "address": {
                      "deliveryAddress": {
                          "address1": "131 Greene Street",
                          "city": "New York",
                          "provinceCode": "NY",
                          "countryCode": "US",
                          "zip": "10012"
                      }
                  }
              }
          ]
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `mutation CartDeliveryAddressesAdd($id: ID!, $addresses: [CartSelectableAddressInput!]!) {
        cartDeliveryAddressesAdd(cartId: $id, addresses: $addresses) {
          userErrors {
            message
            code
            field
          }
          warnings {
            message
            code
            target
          }
          cart {
            id
            delivery {
              addresses {
                id
                selected
                oneTimeUse
                address {
                  ... on CartDeliveryAddress {
                    firstName
                    lastName
                    company
                    address1
                    address2
                    city
                    provinceCode
                    zip
                    countryCode
                  }
                }
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Cart/c1-145e58da76bbee55b288ea50b81810d3?key=0068c4788cbb29555c10c3acc3b2ffc2",
          "addresses": [
              {
                  "selected": true,
                  "address": {
                      "deliveryAddress": {
                          "address1": "131 Greene Street",
                          "city": "New York",
                          "provinceCode": "NY",
                          "countryCode": "US",
                          "zip": "10012"
                      }
                  }
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "cartDeliveryAddressesAdd": {
      "userErrors": [],
      "warnings": [],
      "cart": {
        "id": "gid://shopify/Cart/c1-145e58da76bbee55b288ea50b81810d3?key=0068c4788cbb29555c10c3acc3b2ffc2",
        "delivery": {
          "addresses": [
            {
              "id": "gid://shopify/CartSelectableAddress/59168936-5627-4056-b460-9c2ca1dff094",
              "selected": true,
              "oneTimeUse": false,
              "address": {
                "firstName": null,
                "lastName": "",
                "company": null,
                "address1": "131 Greene Street",
                "address2": null,
                "city": "New York",
                "provinceCode": "NY",
                "zip": "10012",
                "countryCode": "US"
              }
            }
          ]
        }
      }
    }
  }
  ```

* ### cartDeliveryAddressesAdd reference

---



<a id="latest-mutations-cartdeliveryaddressesremove"></a>


## cart​Delivery​Addresses​Remove

mutation

Removes delivery addresses from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) by their IDs, allowing batch removal in a single request.

### Arguments

* address​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  A list of delivery addresses by handle to remove from the cart.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Delivery​Addresses​Remove​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### Removes a delivery address from a cart

  #### Description

  Removes a delivery address from a cart

  #### Query

  ```graphql
  mutation CartDeliveryAddressesRemove($id: ID!, $addressIds: [ID!]!) {
    cartDeliveryAddressesRemove(cartId: $id, addressIds: $addressIds) {
      userErrors {
        message
        code
        field
      }
      warnings {
        message
        code
        target
      }
      cart {
        id
        delivery {
          addresses {
            id
            selected
            oneTimeUse
            address {
              ... on CartDeliveryAddress {
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Cart/c1-8f1f41212a211bb1502fd5e27fa5b413?key=f0c5f2509893edbafaab3de9c160b9a8",
    "addressIds": [
      "gid://shopify/CartSelectableAddress/delivery-address-1"
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "mutation CartDeliveryAddressesRemove($id: ID!, $addressIds: [ID!]!) { cartDeliveryAddressesRemove(cartId: $id, addressIds: $addressIds) { userErrors { message code field } warnings { message code target } cart { id delivery { addresses { id selected oneTimeUse address { ... on CartDeliveryAddress { firstName lastName } } } } } } }",
   "variables": {
      "id": "gid://shopify/Cart/c1-8f1f41212a211bb1502fd5e27fa5b413?key=f0c5f2509893edbafaab3de9c160b9a8",
      "addressIds": [
        "gid://shopify/CartSelectableAddress/delivery-address-1"
      ]
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    mutation CartDeliveryAddressesRemove($id: ID!, $addressIds: [ID!]!) {
      cartDeliveryAddressesRemove(cartId: $id, addressIds: $addressIds) {
        userErrors {
          message
          code
          field
        }
        warnings {
          message
          code
          target
        }
        cart {
          id
          delivery {
            addresses {
              id
              selected
              oneTimeUse
              address {
                ... on CartDeliveryAddress {
                  firstName
                  lastName
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Cart/c1-8f1f41212a211bb1502fd5e27fa5b413?key=f0c5f2509893edbafaab3de9c160b9a8",
          "addressIds": [
              "gid://shopify/CartSelectableAddress/delivery-address-1"
          ]
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `mutation CartDeliveryAddressesRemove($id: ID!, $addressIds: [ID!]!) {
        cartDeliveryAddressesRemove(cartId: $id, addressIds: $addressIds) {
          userErrors {
            message
            code
            field
          }
          warnings {
            message
            code
            target
          }
          cart {
            id
            delivery {
              addresses {
                id
                selected
                oneTimeUse
                address {
                  ... on CartDeliveryAddress {
                    firstName
                    lastName
                  }
                }
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Cart/c1-8f1f41212a211bb1502fd5e27fa5b413?key=f0c5f2509893edbafaab3de9c160b9a8",
          "addressIds": [
              "gid://shopify/CartSelectableAddress/delivery-address-1"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "cartDeliveryAddressesRemove": {
      "userErrors": [],
      "warnings": [],
      "cart": {
        "id": "gid://shopify/Cart/c1-8f1f41212a211bb1502fd5e27fa5b413?key=f0c5f2509893edbafaab3de9c160b9a8",
        "delivery": {
          "addresses": []
        }
      }
    }
  }
  ```

* ### cartDeliveryAddressesRemove reference

---



<a id="latest-mutations-cartdeliveryaddressesreplace"></a>


## cart​Delivery​Addresses​Replace

mutation

Replaces all delivery addresses on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) with a new set of addresses in a single operation. Unlike [`cartDeliveryAddressesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartDeliveryAddressesUpdate), which modifies existing addresses, this mutation removes all current addresses and sets the provided list as the new delivery addresses.

One address can be marked as selected, and each address can be flagged for one-time use or configured with a specific validation strategy.

### Arguments

* addresses

  [\[Cart​Selectable​Address​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput)

  required

  A list of delivery addresses to replace on the cart.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Delivery​Addresses​Replace​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartDeliveryAddressesReplace reference

---



<a id="latest-mutations-cartdeliveryaddressesupdate"></a>


## cart​Delivery​Addresses​Update

mutation

Updates one or more delivery addresses on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Each address can be modified to change its details, set it as the pre-selected address for checkout, or mark it for one-time use so it isn't saved to the customer's account.

### Arguments

* addresses

  [\[Cart​Selectable​Address​Update​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput)

  required

  The delivery addresses to update.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Delivery​Addresses​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### Updates a delivery address on a cart

  #### Description

  Updates a delivery address on a cart

  #### Query

  ```graphql
  mutation CartDeliveryAddressesUpdate($id: ID!, $addresses: [CartSelectableAddressUpdateInput!]!) {
    cartDeliveryAddressesUpdate(cartId: $id, addresses: $addresses) {
      userErrors {
        message
        code
        field
      }
      warnings {
        message
        code
        target
      }
      cart {
        id
        delivery {
          addresses {
            id
            selected
            oneTimeUse
            address {
              ... on CartDeliveryAddress {
                firstName
                lastName
                company
                address1
                address2
                city
                provinceCode
                zip
                countryCode
              }
            }
          }
        }
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Cart/c1-36e8477271a658e2ec3ebd1bf2506686?key=ba72b8f664bfb53a09522a0e789123de",
    "addresses": [
      {
        "id": "gid://shopify/CartSelectableAddress/delivery-address-1",
        "selected": true,
        "address": {
          "copyFromCustomerAddressId": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress"
        }
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "mutation CartDeliveryAddressesUpdate($id: ID!, $addresses: [CartSelectableAddressUpdateInput!]!) { cartDeliveryAddressesUpdate(cartId: $id, addresses: $addresses) { userErrors { message code field } warnings { message code target } cart { id delivery { addresses { id selected oneTimeUse address { ... on CartDeliveryAddress { firstName lastName company address1 address2 city provinceCode zip countryCode } } } } } } }",
   "variables": {
      "id": "gid://shopify/Cart/c1-36e8477271a658e2ec3ebd1bf2506686?key=ba72b8f664bfb53a09522a0e789123de",
      "addresses": [
        {
          "id": "gid://shopify/CartSelectableAddress/delivery-address-1",
          "selected": true,
          "address": {
            "copyFromCustomerAddressId": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress"
          }
        }
      ]
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    mutation CartDeliveryAddressesUpdate($id: ID!, $addresses: [CartSelectableAddressUpdateInput!]!) {
      cartDeliveryAddressesUpdate(cartId: $id, addresses: $addresses) {
        userErrors {
          message
          code
          field
        }
        warnings {
          message
          code
          target
        }
        cart {
          id
          delivery {
            addresses {
              id
              selected
              oneTimeUse
              address {
                ... on CartDeliveryAddress {
                  firstName
                  lastName
                  company
                  address1
                  address2
                  city
                  provinceCode
                  zip
                  countryCode
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Cart/c1-36e8477271a658e2ec3ebd1bf2506686?key=ba72b8f664bfb53a09522a0e789123de",
          "addresses": [
              {
                  "id": "gid://shopify/CartSelectableAddress/delivery-address-1",
                  "selected": true,
                  "address": {
                      "copyFromCustomerAddressId": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress"
                  }
              }
          ]
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `mutation CartDeliveryAddressesUpdate($id: ID!, $addresses: [CartSelectableAddressUpdateInput!]!) {
        cartDeliveryAddressesUpdate(cartId: $id, addresses: $addresses) {
          userErrors {
            message
            code
            field
          }
          warnings {
            message
            code
            target
          }
          cart {
            id
            delivery {
              addresses {
                id
                selected
                oneTimeUse
                address {
                  ... on CartDeliveryAddress {
                    firstName
                    lastName
                    company
                    address1
                    address2
                    city
                    provinceCode
                    zip
                    countryCode
                  }
                }
              }
            }
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Cart/c1-36e8477271a658e2ec3ebd1bf2506686?key=ba72b8f664bfb53a09522a0e789123de",
          "addresses": [
              {
                  "id": "gid://shopify/CartSelectableAddress/delivery-address-1",
                  "selected": true,
                  "address": {
                      "copyFromCustomerAddressId": "gid://shopify/MailingAddress/544365967?model_name=CustomerAddress"
                  }
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "cartDeliveryAddressesUpdate": {
      "userErrors": [],
      "warnings": [],
      "cart": {
        "id": "gid://shopify/Cart/c1-36e8477271a658e2ec3ebd1bf2506686?key=ba72b8f664bfb53a09522a0e789123de",
        "delivery": {
          "addresses": [
            {
              "id": "gid://shopify/CartSelectableAddress/delivery-address-1",
              "selected": true,
              "oneTimeUse": true,
              "address": {
                "firstName": "Bob",
                "lastName": "Bobsen",
                "company": null,
                "address1": "123 Amoebobacterieae St",
                "address2": null,
                "city": "Ottawa",
                "provinceCode": "ON",
                "zip": "K2P0V6",
                "countryCode": "CA"
              }
            }
          ]
        }
      }
    }
  }
  ```

* ### cartDeliveryAddressesUpdate reference

---



<a id="latest-mutations-cartdiscountcodesupdate"></a>


## cart​Discount​Codes​Update

mutation

Updates the discount codes applied to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). This mutation replaces all existing discount codes with the provided list, so pass an empty array to remove all codes. Discount codes are case-insensitive.

After updating, check each [`CartDiscountCode`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDiscountCode) in the cart's [`discountCodes`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-Cart.fields.discountCodes) field to see whether the code is applicable to the cart's current contents.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* discount​Codes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The case-insensitive discount codes that the customer added at checkout.

  The input must not contain more than `250` values.

***

### Cart​Discount​Codes​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartDiscountCodesUpdate reference

---



<a id="latest-mutations-cartgiftcardcodesadd"></a>


## cart​Gift​Card​Codes​Add

mutation

Adds gift card codes to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) without replacing any codes already applied. Gift card codes are case-insensitive.

To replace all gift card codes instead of adding to them, use [`cartGiftCardCodesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartGiftCardCodesUpdate).

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* gift​Card​Codes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The case-insensitive gift card codes to add.

  The input must not contain more than `250` values.

***

### Cart​Gift​Card​Codes​Add​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartGiftCardCodesAdd reference

---



<a id="latest-mutations-cartgiftcardcodesremove"></a>


## cart​Gift​Card​Codes​Remove

mutation

Removes gift cards from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) using their IDs. You can retrieve the IDs of applied gift cards from the cart's [`appliedGiftCards`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-Cart.fields.appliedGiftCards) field.

### Arguments

* applied​Gift​Card​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The gift cards to remove.

  The input must not contain more than `250` values.

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Cart​Gift​Card​Codes​Remove​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartGiftCardCodesRemove reference

---



<a id="latest-mutations-cartgiftcardcodesupdate"></a>


## cart​Gift​Card​Codes​Update

mutation

Updates the gift card codes applied to the cart. Unlike [`cartGiftCardCodesAdd`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartGiftCardCodesAdd), which adds codes without replacing existing ones, this mutation sets the gift card codes for the cart. Gift card codes are case-insensitive.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* gift​Card​Codes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The case-insensitive gift card codes.

  The input must not contain more than `250` values.

***

### Cart​Gift​Card​Codes​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartGiftCardCodesUpdate reference

---



<a id="latest-mutations-cartlinesadd"></a>


## cart​Lines​Add

mutation

Adds one or more merchandise lines to an existing [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Each line specifies the [product variant](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) to purchase. Quantity defaults to `1` if not provided.

You can add up to 250 lines in a single request. Use [`CartLineInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartLineInput) to configure each line's merchandise, quantity, selling plan, custom attributes, and any parent relationships for nested line items such as warranties or add-ons.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* lines

  [\[Cart​Line​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput)

  required

  A list of merchandise lines to add to the cart.

  The input must not contain more than `250` values.

***

### Cart​Lines​Add​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartLinesAdd reference

---



<a id="latest-mutations-cartlinesremove"></a>


## cart​Lines​Remove

mutation

Removes one or more merchandise lines from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Accepts up to 250 line IDs per request. Returns the updated cart along with any errors or warnings.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* line​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The merchandise line IDs to remove.

  The input must not contain more than `250` values.

***

### Cart​Lines​Remove​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartLinesRemove reference

---



<a id="latest-mutations-cartlinesupdate"></a>


## cart​Lines​Update

mutation

Updates one or more merchandise lines on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). You can modify the quantity, swap the merchandise, change custom attributes, or update the selling plan for each line. You can update a maximum of 250 lines per request.

Omitting the [`attributes`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartLinesUpdate#arguments-lines.fields.attributes) field or setting it to null preserves existing line attributes. Pass an empty array to clear all attributes from a line.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* lines

  [\[Cart​Line​Update​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput)

  required

  The merchandise lines to update.

  The input must not contain more than `250` values.

***

### Cart​Lines​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartLinesUpdate reference

---



<a id="latest-mutations-cartmetafielddelete"></a>


## cart​Metafield​Delete

mutation

Deletes a cart metafield.

***

**Note:** This mutation won\&#39;t trigger \<a href="https://shopify.dev/docs/api/functions">Shopify Functions\</a>. The changes won\&#39;t be available to Shopify Functions until the buyer goes to checkout or performs another cart interaction that triggers the functions.

***

### Arguments

* input

  [Cart​Metafield​Delete​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldDeleteInput)

  required

  The input fields used to delete a cart metafield.

***

### Cart​Metafield​Delete​Payload returns

* deleted​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the deleted cart metafield.

* user​Errors

  [\[Metafield​Delete​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### cartMetafieldDelete reference

---



<a id="latest-mutations-cartmetafieldsset"></a>


## cart​Metafields​Set

mutation

Sets [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) values on a cart, creating new metafields or updating existing ones. Accepts up to 25 metafields per request.

Cart metafields can automatically copy to order metafields when an order is created, if there's a matching order metafield definition with the [cart to order copyable](https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities#cart-to-order-copyable) capability enabled.

***

**Note:** This mutation doesn\&#39;t trigger \<a href="https://shopify.dev/docs/api/functions">Shopify Functions\</a>. Changes aren\&#39;t available to Shopify Functions until the buyer goes to checkout or performs another cart interaction that triggers the functions.

***

### Arguments

* metafields

  [\[Cart​Metafields​Set​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput)

  required

  The list of Cart metafield values to set. Maximum of 25.

  The input must not contain more than `250` values.

***

### Cart​Metafields​Set​Payload returns

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

  The list of cart metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### cartMetafieldsSet reference

---



<a id="latest-mutations-cartnoteupdate"></a>


## cart​Note​Update

mutation

Updates the note on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). The note is a text field that stores additional information, such as a personalized message from the buyer or special instructions for the order.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* note

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The note on the cart.

***

### Cart​Note​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartNoteUpdate reference

---



<a id="latest-mutations-cartselecteddeliveryoptionsupdate"></a>


## cart​Selected​Delivery​Options​Update

mutation

Updates the selected delivery option for one or more [`CartDeliveryGroup`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryGroup) objects in a cart. Each delivery group represents items shipping to a specific address and offers multiple delivery options with different costs and methods.

Use this mutation when a customer chooses their preferred shipping method during checkout. The [`deliveryOptionHandle`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectedDeliveryOptionInput#field-CartSelectedDeliveryOptionInput.fields.deliveryOptionHandle) identifies which [`CartDeliveryOption`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryOption) to select for each delivery group.

### Arguments

* cart​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

* selected​Delivery​Options

  [\[Cart​Selected​Delivery​Option​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectedDeliveryOptionInput)

  required

  The selected delivery options.

  The input must not contain more than `250` values.

***

### Cart​Selected​Delivery​Options​Update​Payload returns

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Examples

* ### cartSelectedDeliveryOptionsUpdate reference

---



<a id="latest-mutations-customeraccesstokencreate"></a>


## customer​Access​Token​Create

mutation

Requires `unauthenticated_write_customers` access scope.

For legacy customer accounts only.

Creates a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) using the customer's email and password. The access token is required to read or modify the [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) object, such as updating account information or managing addresses.

The token has an expiration time. Use [`customerAccessTokenRenew`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenRenew) to extend the token before it expires, or create a new token if it's already expired.

***

**Caution:** This mutation handles customer credentials. Always transmit requests over HTTPS and never log or expose the password.

***

### Arguments

* input

  [Customer​Access​Token​Create​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerAccessTokenCreateInput)

  required

  The fields used to create a customer access token.

***

### Customer​Access​Token​Create​Payload returns

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  The newly created customer access token object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### Create a customer access token

  #### Description

  Creates a unique customer access token that's required to read and modify the \[Customer]\(https://shopify.dev/api/storefront/latest/objects/customer) object.

  #### Query

  ```graphql
  mutation customerAccessTokenCreate {
    customerAccessTokenCreate(input: {email: "ghaida@example.com", password: "7dx2gx2Z"}) {
      customerAccessToken {
        accessToken
      }
      customerUserErrors {
        message
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "mutation customerAccessTokenCreate { customerAccessTokenCreate(input: {email: \"ghaida@example.com\", password: \"7dx2gx2Z\"}) { customerAccessToken { accessToken } customerUserErrors { message } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    mutation customerAccessTokenCreate {
      customerAccessTokenCreate(input: {email: "ghaida@example.com", password: "7dx2gx2Z"}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `mutation customerAccessTokenCreate {
      customerAccessTokenCreate(input: {email: "ghaida@example.com", password: "7dx2gx2Z"}) {
        customerAccessToken {
          accessToken
        }
        customerUserErrors {
          message
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "customerAccessTokenCreate": {
      "customerAccessToken": {
        "accessToken": "ghaidas_token"
      },
      "customerUserErrors": []
    }
  }
  ```

* ### Get a customer by customer access token

  #### Description

  Retrieves the customer with the associated access token and returns the customer fields specified in the query.

  #### Query

  ```graphql
  query {
    customer(customerAccessToken: "bobs_token") {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query { customer(customerAccessToken: \"bobs_token\") { id firstName lastName acceptsMarketing email phone } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query {
      customer(customerAccessToken: "bobs_token") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query {
      customer(customerAccessToken: "bobs_token") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "customer": {
      "id": "gid://shopify/Customer/410535040",
      "firstName": "John",
      "lastName": "Smith",
      "acceptsMarketing": false,
      "email": "johnsmith@example.com",
      "phone": "+16134504533"
    }
  }
  ```

* ### customerAccessTokenCreate reference

---



<a id="latest-mutations-customeraccesstokencreatewithmultipass"></a>


## customer​Access​Token​Create​With​Multipass

mutation

Requires `unauthenticated_write_customers` access scope.

Creates a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) using a [multipass token](https://shopify.dev/docs/api/multipass) instead of email and password. This enables single sign-on for customers who authenticate through an external system.

If the customer doesn't exist in Shopify, then a new customer record is created automatically. If the customer exists but the record is disabled, then the customer record is re-enabled.

***

**Caution:** Multipass tokens are only valid for 15 minutes and can only be used once. Generate tokens on-the-fly when needed rather than in advance.

***

### Arguments

* multipass​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  A valid [multipass token](https://shopify.dev/api/multipass) to be authenticated.

***

### Customer​Access​Token​Create​With​Multipass​Payload returns

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  An access token object associated with the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAccessTokenCreateWithMultipass reference

---



<a id="latest-mutations-customeraccesstokendelete"></a>


## customer​Access​Token​Delete

mutation

Requires `unauthenticated_write_customers` access scope.

Permanently destroys a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken). Use this mutation when a customer explicitly signs out or when you need to revoke the token. Use [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) to generate a new token with the customer's credentials.

***

**Caution:** This action is irreversible. The customer needs to sign in again to obtain a new access token.

***

### Arguments

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

***

### Customer​Access​Token​Delete​Payload returns

* deleted​Access​Token

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The destroyed access token.

* deleted​Customer​Access​Token​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  ID of the destroyed customer access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAccessTokenDelete reference

---



<a id="latest-mutations-customeraccesstokenrenew"></a>


## customer​Access​Token​Renew

mutation

Requires `unauthenticated_write_customers` access scope.

Extends the validity of a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) before it expires. The renewed token maintains authenticated access to customer operations.

Renewal must happen before the token's [`expiresAt`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken#field-CustomerAccessToken.fields.expiresAt) time. If a token has already expired, then use [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) to generate a new token with the customer's credentials.

***

**Caution:** Store access tokens securely. Never store tokens in plain text or insecure locations, and avoid exposing them in URLs or logs.

***

### Arguments

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

***

### Customer​Access​Token​Renew​Payload returns

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  The renewed customer access token object.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAccessTokenRenew reference

---



<a id="latest-mutations-customeractivate"></a>


## customer​Activate

mutation

Requires `unauthenticated_write_customers` access scope.

Activates a customer account using an activation token received from the [`customerCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerCreate) mutation. The customer sets their password during activation and receives a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for authenticated access.

For a simpler approach that doesn't require parsing the activation URL, use [`customerActivateByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerActivateByUrl) instead.

***

**Caution:** This mutation handles customer credentials. Always use HTTPS and never log or expose the password or access token.

***

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  Specifies the customer to activate.

* input

  [Customer​Activate​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerActivateInput)

  required

  The fields used to activate a customer.

***

### Customer​Activate​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The customer object.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerActivate reference

---



<a id="latest-mutations-customeractivatebyurl"></a>


## customer​Activate​By​Url

mutation

Requires `unauthenticated_write_customers` access scope.

Activates a customer account using the full activation URL from the [`customerCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerCreate) mutation. This approach simplifies activation by accepting the complete URL directly, eliminating the need to parse it for the customer ID and activation token. Returns a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for authenticating subsequent requests.

***

**Caution:** Store the returned access token securely. It grants access to the customer\&#39;s account data.

***

### Arguments

* activation​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  required

  The customer activation URL.

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  A new password set during activation.

***

### Customer​Activate​By​Url​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The customer that was activated.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  A new customer access token for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerActivateByUrl reference

---



<a id="latest-mutations-customeraddresscreate"></a>


## customer​Address​Create

mutation

Requires `unauthenticated_write_customers` access scope.

Creates a new [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Use the customer's [access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressCreate#arguments-customerAccessToken) to identify them. Successful creation returns the new address.

Each customer can have multiple addresses.

### Arguments

* address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MailingAddressInput)

  required

  The customer mailing address to create.

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

***

### Customer​Address​Create​Payload returns

* customer​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  The new customer address object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressCreate reference

---



<a id="latest-mutations-customeraddressdelete"></a>


## customer​Address​Delete

mutation

Requires `unauthenticated_write_customers` access scope.

Permanently deletes a specific [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a valid [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressDelete#arguments-customerAccessToken) to authenticate the request.

***

**Caution:** This action is irreversible. You can\&#39;t recover the deleted address.

***

### Arguments

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  Specifies the address to delete.

***

### Customer​Address​Delete​Payload returns

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* deleted​Customer​Address​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  ID of the deleted customer address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressDelete reference

---



<a id="latest-mutations-customeraddressupdate"></a>


## customer​Address​Update

mutation

Requires `unauthenticated_write_customers` access scope.

Updates an existing [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressUpdate#arguments-customerAccessToken) to identify the customer, an ID to specify which address to modify, and an [`address`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/MailingAddressInput) with the updated fields.

Successful update returns the updated [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress).

### Arguments

* address

  [Mailing​Address​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MailingAddressInput)

  required

  The customer’s mailing address.

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  Specifies the customer address to update.

***

### Customer​Address​Update​Payload returns

* customer​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  The customer’s updated mailing address.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerAddressUpdate reference

---



<a id="latest-mutations-customercreate"></a>


## customer​Create

mutation

Requires `unauthenticated_write_customers` access scope.

Creates a new [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) account with the provided contact information and login credentials. The customer can then sign in for things such as accessing their account, viewing order history, and managing saved addresses.

***

**Caution:** This mutation creates customer credentials. Ensure passwords are collected securely and never logged or exposed in client-side code.

***

### Arguments

* input

  [Customer​Create​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerCreateInput)

  required

  The fields used to create a new customer.

***

### Customer​Create​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The created customer object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### Create a customer

  #### Description

  Create a new customer

  #### Query

  ```graphql
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        firstName
        lastName
        email
        phone
        acceptsMarketing
      }
      customerUserErrors {
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
    "input": {
      "firstName": "John",
      "lastName": "Smith",
      "email": "johnsmith@shopify.com",
      "phone": "+15146669999",
      "password": "5hopify",
      "acceptsMarketing": true
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "mutation customerCreate($input: CustomerCreateInput!) { customerCreate(input: $input) { customer { firstName lastName email phone acceptsMarketing } customerUserErrors { field message code } } }",
   "variables": {
      "input": {
        "firstName": "John",
        "lastName": "Smith",
        "email": "johnsmith@shopify.com",
        "phone": "+15146669999",
        "password": "5hopify",
        "acceptsMarketing": true
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          firstName
          lastName
          email
          phone
          acceptsMarketing
        }
        customerUserErrors {
          field
          message
          code
        }
      }
    }`,
    {
      variables: {
          "input": {
              "firstName": "John",
              "lastName": "Smith",
              "email": "johnsmith@shopify.com",
              "phone": "+15146669999",
              "password": "5hopify",
              "acceptsMarketing": true
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            firstName
            lastName
            email
            phone
            acceptsMarketing
          }
          customerUserErrors {
            field
            message
            code
          }
        }
      }`,
      "variables": {
          "input": {
              "firstName": "John",
              "lastName": "Smith",
              "email": "johnsmith@shopify.com",
              "phone": "+15146669999",
              "password": "5hopify",
              "acceptsMarketing": true
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "customerCreate": {
      "customer": {
        "firstName": "John",
        "lastName": "Smith",
        "email": "johnsmith@shopify.com",
        "phone": "+15146669999",
        "acceptsMarketing": true
      },
      "customerUserErrors": []
    }
  }
  ```

* ### customerCreate reference

---



<a id="latest-mutations-customerdefaultaddressupdate"></a>


## customer​Default​Address​Update

mutation

Requires `unauthenticated_write_customers` access scope.

Updates the default address of an existing [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerDefaultAddressUpdate#arguments-customerAccessToken) to identify the customer and an address ID to specify which address to set as the new default.

### Arguments

* address​Id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  ID of the address to set as the new default for the customer.

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

***

### Customer​Default​Address​Update​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The updated customer object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerDefaultAddressUpdate reference

---



<a id="latest-mutations-customerrecover"></a>


## customer​Recover

mutation

Requires `unauthenticated_write_customers` access scope.

Sends a reset password email to the customer. The email contains a reset password URL and token that you can pass to the [`customerResetByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerResetByUrl) or [`customerReset`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerReset) mutation to reset the customer's password.

This mutation is throttled by IP. With private access, you can provide a [`Shopify-Storefront-Buyer-IP` header](https://shopify.dev/docs/api/usage/authentication#optional-ip-header) instead of the request IP. The header is case-sensitive.

***

**Caution:** Ensure the value provided to \<code>\<span class="PreventFireFoxApplyingGapToWBR">Shopify-Storefront-Buyer-I\<wbr/>P\</span>\</code> is trusted. Unthrottled access to this mutation presents a security risk.

***

### Arguments

* email

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The email address of the customer to recover.

***

### Customer​Recover​Payload returns

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerRecover reference

---



<a id="latest-mutations-customerreset"></a>


## customer​Reset

mutation

Requires `unauthenticated_write_customers` access scope.

Resets a customer's password using the reset token from a password recovery email. On success, returns the updated [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) and a new [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for immediate authentication.

Use the [`customerRecover`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerRecover) mutation to send the password recovery email that provides the reset token. Alternatively, use [`customerResetByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerResetByUrl) if you have the full reset URL instead of the customer ID and token.

***

**Caution:** This mutation handles sensitive customer credentials. Validate password requirements on the client before submission.

***

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  Specifies the customer to reset.

* input

  [Customer​Reset​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerResetInput)

  required

  The fields used to reset a customer’s password.

***

### Customer​Reset​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The customer object which was reset.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerReset reference

---



<a id="latest-mutations-customerresetbyurl"></a>


## customer​Reset​By​Url

mutation

Requires `unauthenticated_write_customers` access scope.

Resets a customer's password using the reset URL from a password recovery email. The reset URL is generated by the [`customerRecover`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerRecover) mutation.

On success, returns the updated [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) and a new [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for immediate authentication.

***

**Caution:** This mutation handles customer credentials. Ensure the new password is transmitted securely and never logged or exposed in client-side code.

***

### Arguments

* password

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  New password that will be set as part of the reset password process.

* reset​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  required

  The customer's reset password url.

***

### Customer​Reset​By​Url​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The customer object which was reset.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerResetByUrl reference

---



<a id="latest-mutations-customerupdate"></a>


## customer​Update

mutation

Requires `unauthenticated_write_customers` access scope.

Updates a [customer's](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) personal information such as name, password, and marketing preferences. Requires a valid [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) to authenticate the customer making the update.

If the customer's password is updated, then all previous access tokens become invalid. The mutation returns a new access token in the payload to maintain the customer's session.

***

**Caution:** Password changes invalidate all existing access tokens. Ensure your app handles the new token returned in the response to avoid logging the customer out.

***

### Arguments

* customer

  [Customer​Update​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerUpdateInput)

  required

  The customer object input.

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The access token used to identify the customer.

***

### Customer​Update​Payload returns

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  The updated customer object.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  The newly created customer access token. If the customer's password is updated, all previous access tokens (including the one used to perform this mutation) become invalid, and a new token is generated.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

### Examples

* ### customerUpdate reference

---



<a id="latest-mutations-shoppaypaymentrequestsessioncreate"></a>


## shop​Pay​Payment​Request​Session​Create

mutation

Creates a [Shop Pay payment request session](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestSession) for processing payments. The session includes a checkout URL where customers complete their purchase and a token for subsequent operations like submitting the payment.

The `sourceIdentifier` must be unique across all orders to ensure accurate reconciliation.

For a complete integration guide including the JavaScript SDK setup and checkout flow, refer to the [Shop Component API documentation](https://shopify.dev/docs/api/commerce-components/pay). For implementation steps, see the [development journey guide](https://shopify.dev/docs/api/commerce-components/pay/development-journey). For common error scenarios, see the [troubleshooting guide](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide).

### Arguments

* payment​Request

  [Shop​Pay​Payment​Request​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput)

  required

  A payment request object.

* source​Identifier

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  A unique identifier for the payment request session.

***

### Shop​Pay​Payment​Request​Session​Create​Payload returns

* shop​Pay​Payment​Request​Session

  [Shop​Pay​Payment​Request​Session](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestSession)

  The new Shop Pay payment request session object.

* user​Errors

  [\[User​Errors​Shop​Pay​Payment​Request​Session​User​Errors!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors)

  non-null

  Error codes for failed Shop Pay payment request session mutations.

***

### Examples

* ### shopPayPaymentRequestSessionCreate reference

---



<a id="latest-mutations-shoppaypaymentrequestsessionsubmit"></a>


## shop​Pay​Payment​Request​Session​Submit

mutation

Finalizes a [Shop Pay payment request session](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestSession). Call this mutation after creating a session with [`shopPayPaymentRequestSessionCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/shopPayPaymentRequestSessionCreate).

The [`idempotencyKey`](https://shopify.dev/docs/api/storefront/2026-04/mutations/shopPayPaymentRequestSessionSubmit#arguments-idempotencyKey) argument ensures the payment transaction occurs only once, preventing duplicate charges. On success, returns a [`ShopPayPaymentRequestReceipt`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestReceipt) with the processing status and a receipt token.

For a complete integration guide including the JavaScript SDK setup and checkout flow, refer to the [Shop Component API documentation](https://shopify.dev/docs/api/commerce-components/pay). For implementation steps, see the [development journey guide](https://shopify.dev/docs/api/commerce-components/pay/development-journey). For common error scenarios, see the [troubleshooting guide](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide).

### Arguments

* idempotency​Key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The idempotency key is used to guarantee an idempotent result.

* order​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The order name to be used for the order created from the payment request.

* payment​Request

  [Shop​Pay​Payment​Request​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput)

  required

  The final payment request object.

* token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  A token representing a payment session request.

***

### Shop​Pay​Payment​Request​Session​Submit​Payload returns

* payment​Request​Receipt

  [Shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestReceipt)

  The checkout on which the payment was applied.

* user​Errors

  [\[User​Errors​Shop​Pay​Payment​Request​Session​User​Errors!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors)

  non-null

  Error codes for failed Shop Pay payment request session mutations.

***

### Examples

* ### shopPayPaymentRequestSessionSubmit reference

---



<a id="latest-payloads-cartattributesupdatepayload"></a>


## Cart​Attributes​Update​Payload

payload

Return type for `cartAttributesUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Attributes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate)

  mutation

  Updates the attributes on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Attributes are custom key-value pairs that store additional information, such as gift messages, special instructions, or order notes.

  * attributes

    [\[Attribute​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput)

    required

    ### Arguments

    An array of key-value pairs that contains additional information about the cart.

    The input must not contain more than `250` values.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    The ID of the cart.

  ***

***

### Map

#### Mutations with this payload

* [cart​Attributes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate)

---



<a id="latest-payloads-cartbuyeridentityupdatepayload"></a>


## Cart​Buyer​Identity​Update​Payload

payload

Return type for `cartBuyerIdentityUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Buyer​Identity​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate)

  mutation

  Updates the buyer identity on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart), including contact information, location, and checkout preferences. The buyer's country determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match their shipping address.

  Use this mutation to associate a logged-in customer via access token, set a B2B company location, or configure checkout preferences like delivery method. Preferences prefill checkout fields but don't sync back to the cart if overwritten at checkout.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * buyer​Identity

    [Cart​Buyer​Identity​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput)

    required

    The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). Buyer identity should match the customer's shipping address.

  ***

***

### Map

#### Mutations with this payload

* [cart​Buyer​Identity​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate)

---



<a id="latest-payloads-cartcreatepayload"></a>


## Cart​Create​Payload

payload

Return type for `cartCreate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The new cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)

  mutation

  Creates a new [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) for a buyer session. You can optionally initialize the cart with merchandise lines, discount codes, gift card codes, buyer identity for international pricing, and custom attributes.

  The returned cart includes a `checkoutUrl` that directs the buyer to complete their purchase.

  * input

    [Cart​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput)

    ### Arguments

    The fields used to create a cart.

  ***

***

### Map

#### Mutations with this payload

* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)

---



<a id="latest-payloads-cartdeliveryaddressesaddpayload"></a>


## Cart​Delivery​Addresses​Add​Payload

payload

Return type for `cartDeliveryAddressesAdd` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Delivery​Addresses​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd)

  mutation

  Adds delivery addresses to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). A cart can have up to 20 delivery addresses. One address can be marked as selected for checkout, and addresses can optionally be marked as one-time use so they aren't saved to the customer's account.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * addresses

    [\[Cart​Selectable​Address​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput)

    required

    A list of delivery addresses to add to the cart.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Delivery​Addresses​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd)

---



<a id="latest-payloads-cartdeliveryaddressesremovepayload"></a>


## Cart​Delivery​Addresses​Remove​Payload

payload

Return type for `cartDeliveryAddressesRemove` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Delivery​Addresses​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove)

  mutation

  Removes delivery addresses from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) by their IDs, allowing batch removal in a single request.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * address​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    A list of delivery addresses by handle to remove from the cart.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Delivery​Addresses​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove)

---



<a id="latest-payloads-cartdeliveryaddressesreplacepayload"></a>


## Cart​Delivery​Addresses​Replace​Payload

payload

Return type for `cartDeliveryAddressesReplace` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Delivery​Addresses​Replace](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace)

  mutation

  Replaces all delivery addresses on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) with a new set of addresses in a single operation. Unlike [`cartDeliveryAddressesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartDeliveryAddressesUpdate), which modifies existing addresses, this mutation removes all current addresses and sets the provided list as the new delivery addresses.

  One address can be marked as selected, and each address can be flagged for one-time use or configured with a specific validation strategy.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * addresses

    [\[Cart​Selectable​Address​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput)

    required

    A list of delivery addresses to replace on the cart.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Delivery​Addresses​Replace](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace)

---



<a id="latest-payloads-cartdeliveryaddressesupdatepayload"></a>


## Cart​Delivery​Addresses​Update​Payload

payload

Return type for `cartDeliveryAddressesUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Delivery​Addresses​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate)

  mutation

  Updates one or more delivery addresses on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Each address can be modified to change its details, set it as the pre-selected address for checkout, or mark it for one-time use so it isn't saved to the customer's account.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * addresses

    [\[Cart​Selectable​Address​Update​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput)

    required

    The delivery addresses to update.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Delivery​Addresses​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate)

---



<a id="latest-payloads-cartdiscountcodesupdatepayload"></a>


## Cart​Discount​Codes​Update​Payload

payload

Return type for `cartDiscountCodesUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Discount​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate)

  mutation

  Updates the discount codes applied to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). This mutation replaces all existing discount codes with the provided list, so pass an empty array to remove all codes. Discount codes are case-insensitive.

  After updating, check each [`CartDiscountCode`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDiscountCode) in the cart's [`discountCodes`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-Cart.fields.discountCodes) field to see whether the code is applicable to the cart's current contents.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * discount​Codes

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The case-insensitive discount codes that the customer added at checkout.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Discount​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate)

---



<a id="latest-payloads-cartgiftcardcodesaddpayload"></a>


## Cart​Gift​Card​Codes​Add​Payload

payload

Return type for `cartGiftCardCodesAdd` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Gift​Card​Codes​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd)

  mutation

  Adds gift card codes to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) without replacing any codes already applied. Gift card codes are case-insensitive.

  To replace all gift card codes instead of adding to them, use [`cartGiftCardCodesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartGiftCardCodesUpdate).

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * gift​Card​Codes

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The case-insensitive gift card codes to add.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Gift​Card​Codes​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd)

---



<a id="latest-payloads-cartgiftcardcodesremovepayload"></a>


## Cart​Gift​Card​Codes​Remove​Payload

payload

Return type for `cartGiftCardCodesRemove` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Gift​Card​Codes​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove)

  mutation

  Removes gift cards from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) using their IDs. You can retrieve the IDs of applied gift cards from the cart's [`appliedGiftCards`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-Cart.fields.appliedGiftCards) field.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * applied​Gift​Card​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    The gift cards to remove.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Gift​Card​Codes​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove)

---



<a id="latest-payloads-cartgiftcardcodesupdatepayload"></a>


## Cart​Gift​Card​Codes​Update​Payload

payload

Return type for `cartGiftCardCodesUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Gift​Card​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate)

  mutation

  Updates the gift card codes applied to the cart. Unlike [`cartGiftCardCodesAdd`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartGiftCardCodesAdd), which adds codes without replacing existing ones, this mutation sets the gift card codes for the cart. Gift card codes are case-insensitive.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * gift​Card​Codes

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The case-insensitive gift card codes.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Gift​Card​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate)

---



<a id="latest-payloads-cartlinesaddpayload"></a>


## Cart​Lines​Add​Payload

payload

Return type for `cartLinesAdd` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Lines​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd)

  mutation

  Adds one or more merchandise lines to an existing [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Each line specifies the [product variant](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) to purchase. Quantity defaults to `1` if not provided.

  You can add up to 250 lines in a single request. Use [`CartLineInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartLineInput) to configure each line's merchandise, quantity, selling plan, custom attributes, and any parent relationships for nested line items such as warranties or add-ons.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * lines

    [\[Cart​Line​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput)

    required

    A list of merchandise lines to add to the cart.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Lines​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd)

---



<a id="latest-payloads-cartlinesremovepayload"></a>


## Cart​Lines​Remove​Payload

payload

Return type for `cartLinesRemove` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Lines​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove)

  mutation

  Removes one or more merchandise lines from a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Accepts up to 250 line IDs per request. Returns the updated cart along with any errors or warnings.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * line​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    The merchandise line IDs to remove.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Lines​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove)

---



<a id="latest-payloads-cartlinesupdatepayload"></a>


## Cart​Lines​Update​Payload

payload

Return type for `cartLinesUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Lines​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate)

  mutation

  Updates one or more merchandise lines on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). You can modify the quantity, swap the merchandise, change custom attributes, or update the selling plan for each line. You can update a maximum of 250 lines per request.

  Omitting the [`attributes`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartLinesUpdate#arguments-lines.fields.attributes) field or setting it to null preserves existing line attributes. Pass an empty array to clear all attributes from a line.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * lines

    [\[Cart​Line​Update​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput)

    required

    The merchandise lines to update.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Lines​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate)

---



<a id="latest-payloads-cartmetafielddeletepayload"></a>


## Cart​Metafield​Delete​Payload

payload

Return type for `cartMetafieldDelete` mutation.

### Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the deleted cart metafield.

* user​Errors

  [\[Metafield​Delete​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cart​Metafield​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldDelete)

  mutation

  Deletes a cart metafield.

  ***

  **Note:** This mutation won\&#39;t trigger \<a href="https://shopify.dev/docs/api/functions">Shopify Functions\</a>. The changes won\&#39;t be available to Shopify Functions until the buyer goes to checkout or performs another cart interaction that triggers the functions.

  ***

  * input

    [Cart​Metafield​Delete​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldDeleteInput)

    required

    ### Arguments

    The input fields used to delete a cart metafield.

  ***

***

### Map

#### Mutations with this payload

* [cart​Metafield​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldDelete)

---



<a id="latest-payloads-cartmetafieldssetpayload"></a>


## Cart​Metafields​Set​Payload

payload

Return type for `cartMetafieldsSet` mutation.

### Fields

* metafields

  [\[Metafield!\]](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

  Token access required

  The list of cart metafields that were set.

* user​Errors

  [\[Metafields​Set​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldsSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [cart​Metafields​Set](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet)

  mutation

  Sets [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) values on a cart, creating new metafields or updating existing ones. Accepts up to 25 metafields per request.

  Cart metafields can automatically copy to order metafields when an order is created, if there's a matching order metafield definition with the [cart to order copyable](https://shopify.dev/docs/apps/build/metafields/use-metafield-capabilities#cart-to-order-copyable) capability enabled.

  ***

  **Note:** This mutation doesn\&#39;t trigger \<a href="https://shopify.dev/docs/api/functions">Shopify Functions\</a>. Changes aren\&#39;t available to Shopify Functions until the buyer goes to checkout or performs another cart interaction that triggers the functions.

  ***

  * metafields

    [\[Cart​Metafields​Set​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput)

    required

    ### Arguments

    The list of Cart metafield values to set. Maximum of 25.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Metafields​Set](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet)

---



<a id="latest-payloads-cartnoteupdatepayload"></a>


## Cart​Note​Update​Payload

payload

Return type for `cartNoteUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Note​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate)

  mutation

  Updates the note on a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). The note is a text field that stores additional information, such as a personalized message from the buyer or special instructions for the order.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * note

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The note on the cart.

  ***

***

### Map

#### Mutations with this payload

* [cart​Note​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate)

---



<a id="latest-payloads-cartselecteddeliveryoptionsupdatepayload"></a>


## Cart​Selected​Delivery​Options​Update​Payload

payload

Return type for `cartSelectedDeliveryOptionsUpdate` mutation.

### Fields

* cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  The updated cart.

* user​Errors

  [\[Cart​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* warnings

  [\[Cart​Warning!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning)

  non-null

  A list of warnings that occurred during the mutation.

***

### Mutations with this payload

* [cart​Selected​Delivery​Options​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate)

  mutation

  Updates the selected delivery option for one or more [`CartDeliveryGroup`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryGroup) objects in a cart. Each delivery group represents items shipping to a specific address and offers multiple delivery options with different costs and methods.

  Use this mutation when a customer chooses their preferred shipping method during checkout. The [`deliveryOptionHandle`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectedDeliveryOptionInput#field-CartSelectedDeliveryOptionInput.fields.deliveryOptionHandle) identifies which [`CartDeliveryOption`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryOption) to select for each delivery group.

  * cart​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  * selected​Delivery​Options

    [\[Cart​Selected​Delivery​Option​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectedDeliveryOptionInput)

    required

    The selected delivery options.

    The input must not contain more than `250` values.

  ***

***

### Map

#### Mutations with this payload

* [cart​Selected​Delivery​Options​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate)

---



<a id="latest-payloads-customeraccesstokencreatepayload"></a>


## Customer​Access​Token​Create​Payload

payload

Return type for `customerAccessTokenCreate` mutation.

### Fields

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  The newly created customer access token object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Access​Token​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate)

  mutation

  For legacy customer accounts only.

  Creates a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) using the customer's email and password. The access token is required to read or modify the [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) object, such as updating account information or managing addresses.

  The token has an expiration time. Use [`customerAccessTokenRenew`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenRenew) to extend the token before it expires, or create a new token if it's already expired.

  ***

  **Caution:** This mutation handles customer credentials. Always transmit requests over HTTPS and never log or expose the password.

  ***

  * input

    [Customer​Access​Token​Create​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerAccessTokenCreateInput)

    required

    ### Arguments

    The fields used to create a customer access token.

  ***

***

### Map

#### Mutations with this payload

* [customer​Access​Token​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate)

---



<a id="latest-payloads-customeraccesstokencreatewithmultipasspayload"></a>


## Customer​Access​Token​Create​With​Multipass​Payload

payload

Return type for `customerAccessTokenCreateWithMultipass` mutation.

### Fields

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  An access token object associated with the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Access​Token​Create​With​Multipass](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreateWithMultipass)

  mutation

  Creates a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) using a [multipass token](https://shopify.dev/docs/api/multipass) instead of email and password. This enables single sign-on for customers who authenticate through an external system.

  If the customer doesn't exist in Shopify, then a new customer record is created automatically. If the customer exists but the record is disabled, then the customer record is re-enabled.

  ***

  **Caution:** Multipass tokens are only valid for 15 minutes and can only be used once. Generate tokens on-the-fly when needed rather than in advance.

  ***

  * multipass​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    A valid [multipass token](https://shopify.dev/api/multipass) to be authenticated.

  ***

***

### Map

#### Mutations with this payload

* [customer​Access​Token​Create​With​Multipass](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreateWithMultipass)

---



<a id="latest-payloads-customeraccesstokendeletepayload"></a>


## Customer​Access​Token​Delete​Payload

payload

Return type for `customerAccessTokenDelete` mutation.

### Fields

* deleted​Access​Token

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The destroyed access token.

* deleted​Customer​Access​Token​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  ID of the destroyed customer access token.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Access​Token​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenDelete)

  mutation

  Permanently destroys a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken). Use this mutation when a customer explicitly signs out or when you need to revoke the token. Use [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) to generate a new token with the customer's credentials.

  ***

  **Caution:** This action is irreversible. The customer needs to sign in again to obtain a new access token.

  ***

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Access​Token​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenDelete)

---



<a id="latest-payloads-customeraccesstokenrenewpayload"></a>


## Customer​Access​Token​Renew​Payload

payload

Return type for `customerAccessTokenRenew` mutation.

### Fields

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  The renewed customer access token object.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Access​Token​Renew](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenRenew)

  mutation

  Extends the validity of a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) before it expires. The renewed token maintains authenticated access to customer operations.

  Renewal must happen before the token's [`expiresAt`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken#field-CustomerAccessToken.fields.expiresAt) time. If a token has already expired, then use [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) to generate a new token with the customer's credentials.

  ***

  **Caution:** Store access tokens securely. Never store tokens in plain text or insecure locations, and avoid exposing them in URLs or logs.

  ***

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Access​Token​Renew](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenRenew)

---



<a id="latest-payloads-customeractivatebyurlpayload"></a>


## Customer​Activate​By​Url​Payload

payload

Return type for `customerActivateByUrl` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The customer that was activated.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  A new customer access token for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

### Mutations with this payload

* [customer​Activate​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl)

  mutation

  Activates a customer account using the full activation URL from the [`customerCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerCreate) mutation. This approach simplifies activation by accepting the complete URL directly, eliminating the need to parse it for the customer ID and activation token. Returns a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for authenticating subsequent requests.

  ***

  **Caution:** Store the returned access token securely. It grants access to the customer\&#39;s account data.

  ***

  * activation​Url

    [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    required

    ### Arguments

    The customer activation URL.

  * password

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    A new password set during activation.

  ***

***

### Map

#### Mutations with this payload

* [customer​Activate​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl)

---



<a id="latest-payloads-customeractivatepayload"></a>


## Customer​Activate​Payload

payload

Return type for `customerActivate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The customer object.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)

  mutation

  Activates a customer account using an activation token received from the [`customerCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerCreate) mutation. The customer sets their password during activation and receives a [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for authenticated access.

  For a simpler approach that doesn't require parsing the activation URL, use [`customerActivateByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerActivateByUrl) instead.

  ***

  **Caution:** This mutation handles customer credentials. Always use HTTPS and never log or expose the password or access token.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    Specifies the customer to activate.

  * input

    [Customer​Activate​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerActivateInput)

    required

    The fields used to activate a customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)

---



<a id="latest-payloads-customeraddresscreatepayload"></a>


## Customer​Address​Create​Payload

payload

Return type for `customerAddressCreate` mutation.

### Fields

* customer​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  The new customer address object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressCreate)

  mutation

  Creates a new [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Use the customer's [access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressCreate#arguments-customerAccessToken) to identify them. Successful creation returns the new address.

  Each customer can have multiple addresses.

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MailingAddressInput)

    required

    The customer mailing address to create.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressCreate)

---



<a id="latest-payloads-customeraddressdeletepayload"></a>


## Customer​Address​Delete​Payload

payload

Return type for `customerAddressDelete` mutation.

### Fields

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* deleted​Customer​Address​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  ID of the deleted customer address.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressDelete)

  mutation

  Permanently deletes a specific [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a valid [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressDelete#arguments-customerAccessToken) to authenticate the request.

  ***

  **Caution:** This action is irreversible. You can\&#39;t recover the deleted address.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    Specifies the address to delete.

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The access token used to identify the customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressDelete)

---



<a id="latest-payloads-customeraddressupdatepayload"></a>


## Customer​Address​Update​Payload

payload

Return type for `customerAddressUpdate` mutation.

### Fields

* customer​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  The customer’s updated mailing address.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressUpdate)

  mutation

  Updates an existing [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) for a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAddressUpdate#arguments-customerAccessToken) to identify the customer, an ID to specify which address to modify, and an [`address`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/MailingAddressInput) with the updated fields.

  Successful update returns the updated [`MailingAddress`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress).

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    Specifies the customer address to update.

  * address

    [Mailing​Address​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/MailingAddressInput)

    required

    The customer’s mailing address.

  ***

***

### Map

#### Mutations with this payload

* [customer​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressUpdate)

---



<a id="latest-payloads-customercreatepayload"></a>


## Customer​Create​Payload

payload

Return type for `customerCreate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The created customer object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate)

  mutation

  Creates a new [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) account with the provided contact information and login credentials. The customer can then sign in for things such as accessing their account, viewing order history, and managing saved addresses.

  ***

  **Caution:** This mutation creates customer credentials. Ensure passwords are collected securely and never logged or exposed in client-side code.

  ***

  * input

    [Customer​Create​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerCreateInput)

    required

    ### Arguments

    The fields used to create a new customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate)

---



<a id="latest-payloads-customerdefaultaddressupdatepayload"></a>


## Customer​Default​Address​Update​Payload

payload

Return type for `customerDefaultAddressUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The updated customer object.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Default​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate)

  mutation

  Updates the default address of an existing [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Requires a [customer access token](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerDefaultAddressUpdate#arguments-customerAccessToken) to identify the customer and an address ID to specify which address to set as the new default.

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  * address​Id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ID of the address to set as the new default for the customer.

  ***

***

### Map

#### Mutations with this payload

* [customer​Default​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate)

---



<a id="latest-payloads-customerrecoverpayload"></a>


## Customer​Recover​Payload

payload

Return type for `customerRecover` mutation.

### Fields

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Recover](https://shopify.dev/docs/api/storefront/latest/mutations/customerRecover)

  mutation

  Sends a reset password email to the customer. The email contains a reset password URL and token that you can pass to the [`customerResetByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerResetByUrl) or [`customerReset`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerReset) mutation to reset the customer's password.

  This mutation is throttled by IP. With private access, you can provide a [`Shopify-Storefront-Buyer-IP` header](https://shopify.dev/docs/api/usage/authentication#optional-ip-header) instead of the request IP. The header is case-sensitive.

  ***

  **Caution:** Ensure the value provided to \<code>\<span class="PreventFireFoxApplyingGapToWBR">Shopify-Storefront-Buyer-I\<wbr/>P\</span>\</code> is trusted. Unthrottled access to this mutation presents a security risk.

  ***

  * email

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The email address of the customer to recover.

  ***

***

### Map

#### Mutations with this payload

* [customer​Recover](https://shopify.dev/docs/api/storefront/latest/mutations/customerRecover)

---



<a id="latest-payloads-customerresetbyurlpayload"></a>


## Customer​Reset​By​Url​Payload

payload

Return type for `customerResetByUrl` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The customer object which was reset.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)

  mutation

  Resets a customer's password using the reset URL from a password recovery email. The reset URL is generated by the [`customerRecover`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerRecover) mutation.

  On success, returns the updated [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) and a new [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for immediate authentication.

  ***

  **Caution:** This mutation handles customer credentials. Ensure the new password is transmitted securely and never logged or exposed in client-side code.

  ***

  * reset​Url

    [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    required

    ### Arguments

    The customer's reset password url.

  * password

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    New password that will be set as part of the reset password process.

  ***

***

### Map

#### Mutations with this payload

* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)

---



<a id="latest-payloads-customerresetpayload"></a>


## Customer​Reset​Payload

payload

Return type for `customerReset` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The customer object which was reset.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  A newly created customer access token object for the customer.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)

  mutation

  Resets a customer's password using the reset token from a password recovery email. On success, returns the updated [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) and a new [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) for immediate authentication.

  Use the [`customerRecover`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerRecover) mutation to send the password recovery email that provides the reset token. Alternatively, use [`customerResetByUrl`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerResetByUrl) if you have the full reset URL instead of the customer ID and token.

  ***

  **Caution:** This mutation handles sensitive customer credentials. Validate password requirements on the client before submission.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    Specifies the customer to reset.

  * input

    [Customer​Reset​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerResetInput)

    required

    The fields used to reset a customer’s password.

  ***

***

### Map

#### Mutations with this payload

* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)

---



<a id="latest-payloads-customerupdatepayload"></a>


## Customer​Update​Payload

payload

Return type for `customerUpdate` mutation.

### Fields

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The updated customer object.

* customer​Access​Token

  [Customer​Access​Token](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken)

  Token access required

  The newly created customer access token. If the customer's password is updated, all previous access tokens (including the one used to perform this mutation) become invalid, and a new token is generated.

* customer​User​Errors

  [\[Customer​User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserError)

  non-nullDeprecated

***

### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

  mutation

  Updates a [customer's](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) personal information such as name, password, and marketing preferences. Requires a valid [`CustomerAccessToken`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerAccessToken) to authenticate the customer making the update.

  If the customer's password is updated, then all previous access tokens become invalid. The mutation returns a new access token in the payload to maintain the customer's session.

  ***

  **Caution:** Password changes invalidate all existing access tokens. Ensure your app handles the new token returned in the response to avoid logging the customer out.

  ***

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The access token used to identify the customer.

  * customer

    [Customer​Update​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerUpdateInput)

    required

    The customer object input.

  ***

***

### Map

#### Mutations with this payload

* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

---



<a id="latest-payloads-shoppaypaymentrequestsessioncreatepayload"></a>


## Shop​Pay​Payment​Request​Session​Create​Payload

payload

Return type for `shopPayPaymentRequestSessionCreate` mutation.

### Fields

* shop​Pay​Payment​Request​Session

  [Shop​Pay​Payment​Request​Session](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestSession)

  The new Shop Pay payment request session object.

* user​Errors

  [\[User​Errors​Shop​Pay​Payment​Request​Session​User​Errors!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors)

  non-null

  Error codes for failed Shop Pay payment request session mutations.

***

### Mutations with this payload

* [shop​Pay​Payment​Request​Session​Create](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionCreate)

  mutation

  Creates a [Shop Pay payment request session](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestSession) for processing payments. The session includes a checkout URL where customers complete their purchase and a token for subsequent operations like submitting the payment.

  The `sourceIdentifier` must be unique across all orders to ensure accurate reconciliation.

  For a complete integration guide including the JavaScript SDK setup and checkout flow, refer to the [Shop Component API documentation](https://shopify.dev/docs/api/commerce-components/pay). For implementation steps, see the [development journey guide](https://shopify.dev/docs/api/commerce-components/pay/development-journey). For common error scenarios, see the [troubleshooting guide](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide).

  * source​Identifier

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    A unique identifier for the payment request session.

  * payment​Request

    [Shop​Pay​Payment​Request​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput)

    required

    A payment request object.

  ***

***

### Map

#### Mutations with this payload

* [shop​Pay​Payment​Request​Session​Create](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionCreate)

---



<a id="latest-payloads-shoppaypaymentrequestsessionsubmitpayload"></a>


## Shop​Pay​Payment​Request​Session​Submit​Payload

payload

Return type for `shopPayPaymentRequestSessionSubmit` mutation.

### Fields

* payment​Request​Receipt

  [Shop​Pay​Payment​Request​Receipt](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestReceipt)

  The checkout on which the payment was applied.

* user​Errors

  [\[User​Errors​Shop​Pay​Payment​Request​Session​User​Errors!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors)

  non-null

  Error codes for failed Shop Pay payment request session mutations.

***

### Mutations with this payload

* [shop​Pay​Payment​Request​Session​Submit](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit)

  mutation

  Finalizes a [Shop Pay payment request session](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestSession). Call this mutation after creating a session with [`shopPayPaymentRequestSessionCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/shopPayPaymentRequestSessionCreate).

  The [`idempotencyKey`](https://shopify.dev/docs/api/storefront/2026-04/mutations/shopPayPaymentRequestSessionSubmit#arguments-idempotencyKey) argument ensures the payment transaction occurs only once, preventing duplicate charges. On success, returns a [`ShopPayPaymentRequestReceipt`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayPaymentRequestReceipt) with the processing status and a receipt token.

  For a complete integration guide including the JavaScript SDK setup and checkout flow, refer to the [Shop Component API documentation](https://shopify.dev/docs/api/commerce-components/pay). For implementation steps, see the [development journey guide](https://shopify.dev/docs/api/commerce-components/pay/development-journey). For common error scenarios, see the [troubleshooting guide](https://shopify.dev/docs/api/commerce-components/pay/troubleshooting-guide).

  * token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    A token representing a payment session request.

  * payment​Request

    [Shop​Pay​Payment​Request​Input!](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput)

    required

    The final payment request object.

  * idempotency​Key

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    The idempotency key is used to guarantee an idempotent result.

  * order​Name

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The order name to be used for the order created from the payment request.

  ***

***

### Map

#### Mutations with this payload

* [shop​Pay​Payment​Request​Session​Submit](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit)

---



<a id="latest-queries-article"></a>


## article

query

Returns an [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) by its ID. Each article belongs to a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) and includes content in both plain text and HTML formats, [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) information, [`Comment`](https://shopify.dev/docs/api/storefront/2026-04/objects/Comment) objects, tags, and [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) data.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the `Article`.

***

### Possible returns

* Article

  [Article](https://shopify.dev/docs/api/storefront/latest/objects/Article)

  A post that belongs to a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog). Each article includes content with optional HTML formatting, an excerpt for previews, [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) information, and an associated [`Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image).

  Articles can be organized with tags and include [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) metadata. You can manage [comments](https://shopify.dev/docs/api/storefront/2026-04/objects/Comment) when the blog's comment policy enables them.

  * author​V2

    [Article​Author](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor)

    The article's author.

  * blog

    [Blog!](https://shopify.dev/docs/api/storefront/latest/objects/Blog)

    non-null

    The blog that the article belongs to.

  * comments

    [Comment​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection)

    non-null

    List of comments posted on the article.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * content

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    Stripped content of the article, single line with HTML tags removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * content​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The content of the article, complete with HTML formatting.

  * excerpt

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Stripped excerpt of the article, single line with HTML tags removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * excerpt​Html

    [HTML](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    The excerpt of the article, complete with HTML formatting.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the Article automatically generated from its title.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    The image associated with the article.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * published​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the article was published.

  * seo

    [SEO](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    The article’s SEO information.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A categorization that a article can be tagged with.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The article’s name.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * author

    [Article​Author!](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor)

    non-nullDeprecated

***

### Examples

* ### article reference

---



<a id="latest-queries-articles"></a>


## articles

query

Returns a paginated list of [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects from the shop's [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects. Each article is a blog post containing content, author information, tags, and optional images.

Use the `query` argument to filter results by author, blog title, tags, or date fields. Sort results using the `sortKey` argument and reverse them with the `reverse` argument.

### ArticleConnection arguments

[ArticleConnection!](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

  * author
  * blog\_title
  * created\_at
  * tag
  * tag\_not
  * updated\_at

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Article​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ArticleSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Article​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ArticleEdge)

  non-null

  A list of edges.

* nodes

  [\[Article!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Article)

  non-null

  A list of the nodes contained in ArticleEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### articles reference

---



<a id="latest-queries-blog"></a>


## blog

query

Retrieves a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) by its handle or ID. A blog organizes [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects for the online store and includes author information, [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) settings, and custom [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects.

### Arguments

* handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The handle of the `Blog`.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the `Blog`.

***

### Possible returns

* Blog

  [Blog](https://shopify.dev/docs/api/storefront/latest/objects/Blog)

  A blog container for [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects. Stores can have multiple blogs, for example to organize content by topic or purpose.

  Each blog provides access to its articles, contributing [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) objects, and [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information. You can retrieve articles individually [by handle](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articleByHandle) or as a [paginated list](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articles).

  * article​By​Handle

    [Article](https://shopify.dev/docs/api/storefront/latest/objects/Article)

    Find an article by its handle.

    * handle

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      ### Arguments

      The handle of the article.

    ***

  * articles

    [Article​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection)

    non-null

    List of the blog's articles.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Article​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ArticleSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

      * author
      * blog\_title
      * created\_at
      * tag
      * tag\_not
      * updated\_at

    ***

  * authors

    [\[Article​Author!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor)

    non-null

    The authors who have contributed to the blog.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the Blog automatically generated from its title.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * seo

    [SEO](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    The blog's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The blogs’s title.

***

### Examples

* ### blog reference

---



<a id="latest-queries-blogbyhandle"></a>


## blog​By​Handle

query

Deprecated. Use [blog](https://shopify.dev/docs/api/admin-graphql/latest/queries/blog) instead.

Retrieves a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) by its handle. A blog organizes [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects for the online store and includes author information, [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) settings, and custom [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects.

### Arguments

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The handle of the blog.

***

### Possible returns

* Blog

  [Blog](https://shopify.dev/docs/api/storefront/latest/objects/Blog)

  A blog container for [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects. Stores can have multiple blogs, for example to organize content by topic or purpose.

  Each blog provides access to its articles, contributing [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) objects, and [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information. You can retrieve articles individually [by handle](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articleByHandle) or as a [paginated list](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articles).

  * article​By​Handle

    [Article](https://shopify.dev/docs/api/storefront/latest/objects/Article)

    Find an article by its handle.

    * handle

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      ### Arguments

      The handle of the article.

    ***

  * articles

    [Article​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection)

    non-null

    List of the blog's articles.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Article​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ArticleSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

      * author
      * blog\_title
      * created\_at
      * tag
      * tag\_not
      * updated\_at

    ***

  * authors

    [\[Article​Author!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor)

    non-null

    The authors who have contributed to the blog.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the Blog automatically generated from its title.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * seo

    [SEO](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    The blog's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The blogs’s title.

***

### Examples

* ### blogByHandle reference

---



<a id="latest-queries-blogs"></a>


## blogs

query

Returns a paginated list of the shop's [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects. Each blog serves as a container for [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects.

### BlogConnection arguments

[BlogConnection!](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

  * created\_at
  * handle
  * title
  * updated\_at

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Blog​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/BlogSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Blog​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/BlogEdge)

  non-null

  A list of edges.

* nodes

  [\[Blog!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Blog)

  non-null

  A list of the nodes contained in BlogEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### blogs reference

---



<a id="latest-queries-cart"></a>


## cart

query

Returns a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) by its ID. The cart contains the merchandise lines a buyer intends to purchase, along with estimated costs, applied discounts, gift cards, and delivery options.

Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/latest/queries/cart#returns-Cart.fields.checkoutUrl) field to redirect buyers to Shopify's web checkout when they're ready to complete their purchase. For more information, refer to [Manage a cart with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the cart.

***

### Possible returns

* Cart

  [Cart](https://shopify.dev/docs/api/storefront/latest/objects/Cart)

  A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart, throughout a customer's session.

  Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-checkoutUrl) field to direct buyers to Shopify's web checkout to complete their purchase.

  Learn more about [interacting with carts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

  * applied​Gift​Cards

    [\[Applied​Gift​Card!\]!](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard)

    non-null

    The gift cards that have been applied to the cart.

  * attribute

    [Attribute](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

    An attribute associated with the cart.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      ### Arguments

      The key of the attribute.

    ***

  * attributes

    [\[Attribute!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

    non-null

    The attributes associated with the cart. Attributes are represented as key-value pairs.

  * buyer​Identity

    [Cart​Buyer​Identity!](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity)

    non-null

    Information about the buyer that's interacting with the cart.

  * checkout​Url

    [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    non-null

    The URL of the checkout for the cart.

  * cost

    [Cart​Cost!](https://shopify.dev/docs/api/storefront/latest/objects/CartCost)

    non-null

    The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the cart was created.

  * delivery

    [Cart​Delivery!](https://shopify.dev/docs/api/storefront/latest/objects/CartDelivery)

    non-null

    The delivery properties of the cart.

  * delivery​Groups

    [Cart​Delivery​Group​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection)

    non-null

    The delivery groups available for the cart, based on the buyer identity default delivery address preference or the default address of the logged-in customer.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * with​Carrier​Rates

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to include [carrier-calculated delivery rates](https://help.shopify.com/en/manual/shipping/setting-up-and-managing-your-shipping/enabling-shipping-carriers) in the response.

      By default, only static shipping rates are returned. This argument requires mandatory usage of the [`@defer` directive](https://shopify.dev/docs/api/storefront#directives).

      For more information, refer to [fetching carrier-calculated rates for the cart using `@defer`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/defer#fetching-carrier-calculated-rates-for-the-cart-using-defer).

    ***

  * discount​Codes

    [\[Cart​Discount​Code!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountCode)

    non-null

    The case-insensitive discount codes that the customer added at checkout.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * lines

    [Base​Cart​Line​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection)

    non-null

    A list of lines containing information about the items the customer intends to purchase.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * note

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    A note that's associated with the cart. For example, the note can be a personalized message to the buyer.

  * total​Quantity

    [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    non-null

    The total number of items in the cart.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the cart was updated.

  * discount​Allocations

    [\[Cart​Discount​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

    non-nullDeprecated

  * estimated​Cost

    [Cart​Estimated​Cost!](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost)

    non-nullDeprecated

***

### Examples

* ### cart reference

---



<a id="latest-queries-collection"></a>


## collection

query

Retrieves a single [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection) by its ID or handle. Use the [`products`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection#field-Collection.fields.products) field to access items in the collection.

### Arguments

* handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The handle of the `Collection`.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the `Collection`.

***

### Possible returns

* Collection

  [Collection](https://shopify.dev/docs/api/storefront/latest/objects/Collection)

  A group of products [organized by a merchant](https://help.shopify.com/manual/products/collections) to make their store easier to browse. Collections can help customers discover related products by category, season, promotion, or other criteria.

  Query a collection's products with [filtering options](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) like availability, price range, vendor, and tags. Each collection includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information, an optional [`Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image), and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

  * description

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    Stripped description of the collection, single line with HTML tags removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the collection, complete with HTML formatting.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the collection automatically generated from its title. Limit of 255 characters.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    Image associated with the collection.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * products

    [Product​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection)

    non-null

    List of products in the collection.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Collection​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductCollectionSortKeys)

      Default:COLLECTION\_DEFAULT

      Sort the underlying list by the given key.

    * filters

      [\[Product​Filter!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter)

      Returns a subset of products matching all product filters.

      The input must not contain more than `250` values.

    ***

  * seo

    [SEO!](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    non-null

    The collection's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The collection’s name. Limit of 255 characters.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the collection was last modified.

***

### Examples

* ### collection reference

---



<a id="latest-queries-collectionbyhandle"></a>


## collection​By​Handle

query

Deprecated. Use [collection](https://shopify.dev/docs/api/admin-graphql/latest/queries/collection) instead.

Retrieves a [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection) by its URL-friendly handle. Handles are automatically generated from collection titles but merchants can customize them.

### Arguments

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The handle of the collection.

***

### Possible returns

* Collection

  [Collection](https://shopify.dev/docs/api/storefront/latest/objects/Collection)

  A group of products [organized by a merchant](https://help.shopify.com/manual/products/collections) to make their store easier to browse. Collections can help customers discover related products by category, season, promotion, or other criteria.

  Query a collection's products with [filtering options](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) like availability, price range, vendor, and tags. Each collection includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information, an optional [`Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image), and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

  * description

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    Stripped description of the collection, single line with HTML tags removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the collection, complete with HTML formatting.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the collection automatically generated from its title. Limit of 255 characters.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    Image associated with the collection.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * products

    [Product​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection)

    non-null

    List of products in the collection.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Collection​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductCollectionSortKeys)

      Default:COLLECTION\_DEFAULT

      Sort the underlying list by the given key.

    * filters

      [\[Product​Filter!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter)

      Returns a subset of products matching all product filters.

      The input must not contain more than `250` values.

    ***

  * seo

    [SEO!](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    non-null

    The collection's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The collection’s name. Limit of 255 characters.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the collection was last modified.

***

### Examples

* ### collectionByHandle reference

---



<a id="latest-queries-collections"></a>


## collections

query

Returns a paginated list of the shop's [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection). Each `Collection` object includes a nested connection to its [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection#field-Collection.fields.products).

### CollectionConnection arguments

[CollectionConnection!](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

  * collection\_type
  * title
  * updated\_at

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Collection​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/CollectionSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Collection​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CollectionEdge)

  non-null

  A list of edges.

* nodes

  [\[Collection!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Collection)

  non-null

  A list of the nodes contained in CollectionEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

* total​Count

  [Unsigned​Int64!](https://shopify.dev/docs/api/storefront/latest/scalars/UnsignedInt64)

  non-null

  The total count of Collections.

***

### Examples

* ### Retrieve collections

  #### Description

  A collection represents a group of products that a store owner can create. The store owner can organize these product groups to make their stores easier to browse. For example, a merchant might create a collection for a specific type of product that they sell, such as footwear. Merchants can create collections by selecting products individually or by defining rules that automatically determine whether products are included. The following example shows how to query for collections and the products that belong to those collections.

  #### Query

  ```graphql
  query {
    collections(first: 2) {
      edges {
        node {
          id
          products(first: 5) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query { collections(first: 2) { edges { node { id products(first: 5) { edges { node { id } } } } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query {
      collections(first: 2) {
        edges {
          node {
            id
            products(first: 5) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query {
      collections(first: 2) {
        edges {
          node {
            id
            products(first: 5) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "collections": {
      "edges": [
        {
          "node": {
            "id": "gid://shopify/Collection/547751128",
            "products": {
              "edges": [
                {
                  "node": {
                    "id": "gid://shopify/Product/929898465"
                  }
                },
                {
                  "node": {
                    "id": "gid://shopify/Product/538825261"
                  }
                }
              ]
            }
          }
        },
        {
          "node": {
            "id": "gid://shopify/Collection/585546552",
            "products": {
              "edges": []
            }
          }
        }
      ]
    }
  }
  ```

---



<a id="latest-queries-customer"></a>


## customer

query

Retrieves the [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) associated with the provided access token. Use the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) mutation to obtain an access token using legacy customer account authentication (email and password).

The returned customer includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress), [orders](https://shopify.dev/docs/api/storefront/2026-04/objects/Order), and [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

### Arguments

* customer​Access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The customer access token.

***

### Possible returns

* Customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  A customer account with the shop. Includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) and marketing preferences for logged-in customers, so they don't have to provide these details at every checkout.

  Access the customer through the [`customer`](https://shopify.dev/docs/api/storefront/2026-04/queries/customer) query using a customer access token obtained from the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) mutation.

  The object implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields) interface, enabling retrieval of [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

  * accepts​Marketing

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null Token access required

    Indicates whether the customer has consented to be sent marketing material via email.

  * addresses

    [Mailing​Address​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection)

    non-null Token access required

    A list of addresses for the customer.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * avatar​Url

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Token access required

    The URL of the customer's avatar image.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null Token access required

    The date and time when the customer was created.

  * default​Address

    [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

    Token access required

    The customer’s default address.

  * display​Name

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    The customer’s name, email or phone number.

  * email

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Token access required

    The customer’s email address.

  * first​Name

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Token access required

    The customer’s first name.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null Token access required

    A unique ID for the customer.

  * last​Name

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Token access required

    The customer’s last name.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * number​Of​Orders

    [Unsigned​Int64!](https://shopify.dev/docs/api/storefront/latest/scalars/UnsignedInt64)

    non-null Token access required

    The number of orders that the customer has made at the store in their lifetime.

  * orders

    [Order​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection)

    non-null Token access required

    The orders associated with the customer.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Order​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/OrderSortKeys)

      Default:ID

      Sort the underlying list by the given key.

    * query

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

      * processed\_at

    ***

  * phone

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    Token access required

    The customer’s phone number.

  * social​Login​Provider

    [Social​Login​Provider](https://shopify.dev/docs/api/storefront/latest/objects/SocialLoginProvider)

    Token access required

    The social login provider associated with the customer.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    A comma separated list of tags that have been added to the customer. Additional access scope required: unauthenticated\_read\_customer\_tags.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null Token access required

    The date and time when the customer information was updated.

***

### Examples

* ### Get a customer by access token

  #### Description

  The following query retrieves the customer with the associated access token. It returns the customer fields specified in the query.

  #### Query

  ```graphql
  query {
    customer(customerAccessToken: "bobs_token") {
      id
      firstName
      lastName
      acceptsMarketing
      email
      phone
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query { customer(customerAccessToken: \"bobs_token\") { id firstName lastName acceptsMarketing email phone } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query {
      customer(customerAccessToken: "bobs_token") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query {
      customer(customerAccessToken: "bobs_token") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "customer": {
      "id": "gid://shopify/Customer/410535040",
      "firstName": "John",
      "lastName": "Smith",
      "acceptsMarketing": false,
      "email": "johnsmith@example.com",
      "phone": "+16134504533"
    }
  }
  ```

---



<a id="latest-queries-localization"></a>


## localization

query

Returns the shop's localization settings. Use this query to build [country and language selectors](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets) for your storefront.

The [`country`](https://shopify.dev/docs/api/storefront/latest/queries/localization#returns-Localization.fields.country) and [`language`](https://shopify.dev/docs/api/storefront/latest/queries/localization#returns-Localization.fields.language) fields reflect the active localized experience. To change the context, use the [`@inContext`](https://shopify.dev/docs/api/storefront#directives) directive with your desired country or language code.

### Possible returns

* Localization

  [Localization!](https://shopify.dev/docs/api/storefront/latest/objects/Localization)

  Information about the shop's configured localized experiences, including available countries and languages. The [`country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.country) and [`language`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.language) fields reflect the active localization context, which you can change using the `@inContext` directive on queries.

  Use [`availableCountries`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.availableCountries) to list all countries with enabled localized experiences, and [`availableLanguages`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.availableLanguages) to get languages available for the currently active country. Each [`Country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Country) includes its own currency, unit system, and available languages.

  * available​Countries

    [\[Country!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Country)

    non-null

    The list of countries with enabled localized experiences.

  * available​Languages

    [\[Language!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Language)

    non-null

    The list of languages available for the active country.

  * country

    [Country!](https://shopify.dev/docs/api/storefront/latest/objects/Country)

    non-null

    The country of the active localized experience. Use the `@inContext` directive to change this value.

  * language

    [Language!](https://shopify.dev/docs/api/storefront/latest/objects/Language)

    non-null

    The language of the active localized experience. Use the `@inContext` directive to change this value.

  * market

    [Market!](https://shopify.dev/docs/api/storefront/latest/objects/Market)

    non-nullDeprecated

***

### Examples

* ### Load the countries a shop sells to and the supported languages for each

  #### Description

  This example shows how to load the countries a shop sells to and the supported languages for each country. Any option returned by the API can also be passed to the \[\`@inContext\` directive]\(/api/storefront#directives) to load data for that country and language context.

  #### Query

  ```graphql
  query AllLocalizations @inContext(language: EN) {
    localization {
      availableCountries {
        isoCode
        name
        availableLanguages {
          isoCode
          endonymName
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query AllLocalizations @inContext(language: EN) { localization { availableCountries { isoCode name availableLanguages { isoCode endonymName } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query AllLocalizations @inContext(language: EN) {
      localization {
        availableCountries {
          isoCode
          name
          availableLanguages {
            isoCode
            endonymName
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query AllLocalizations @inContext(language: EN) {
      localization {
        availableCountries {
          isoCode
          name
          availableLanguages {
            isoCode
            endonymName
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "localization": {
      "availableCountries": [
        {
          "isoCode": "BE",
          "name": "Belgium",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "ES",
              "endonymName": "Español"
            },
            {
              "isoCode": "FR",
              "endonymName": "Français"
            }
          ]
        },
        {
          "isoCode": "CA",
          "name": "Canada",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "FR",
              "endonymName": "Français"
            }
          ]
        },
        {
          "isoCode": "DE",
          "name": "Germany",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "ES",
              "endonymName": "Español"
            },
            {
              "isoCode": "FR",
              "endonymName": "Français"
            }
          ]
        },
        {
          "isoCode": "ES",
          "name": "Spain",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "ES",
              "endonymName": "Español"
            },
            {
              "isoCode": "FR",
              "endonymName": "Français"
            }
          ]
        },
        {
          "isoCode": "FR",
          "name": "France",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "ES",
              "endonymName": "Español"
            },
            {
              "isoCode": "FR",
              "endonymName": "Français"
            }
          ]
        },
        {
          "isoCode": "GB",
          "name": "United Kingdom",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            }
          ]
        },
        {
          "isoCode": "US",
          "name": "United States",
          "availableLanguages": [
            {
              "isoCode": "EN",
              "endonymName": "English"
            },
            {
              "isoCode": "ES",
              "endonymName": "Español"
            }
          ]
        }
      ]
    }
  }
  ```

---



<a id="latest-queries-locations"></a>


## locations

query

Requires `unauthenticated_read_product_pickup_locations` access scope.

Returns shop locations that support in-store pickup. Use the `near` argument with [`GeoCoordinateInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/GeoCoordinateInput) to sort results by proximity to the customer's location.

When sorting by distance, set `sortKey` to [`DISTANCE`](https://shopify.dev/docs/api/storefront/2026-04/queries/locations#arguments-sortKey.enums.DISTANCE) and provide coordinates using the [`near`](https://shopify.dev/docs/api/storefront/2026-04/queries/locations#arguments-near) argument.

Learn more about [supporting local pickup on storefronts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/local-pickup).

### LocationConnection arguments

[LocationConnection!](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* near

  [Geo​Coordinate​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/GeoCoordinateInput)

  Used to sort results based on proximity to the provided location.

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Location​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/LocationSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Location​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/LocationEdge)

  non-null

  A list of edges.

* nodes

  [\[Location!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Location)

  non-null

  A list of the nodes contained in LocationEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### locations reference

---



<a id="latest-queries-menu"></a>


## menu

query

Retrieves a [`Menu`](https://shopify.dev/docs/api/storefront/2026-04/objects/Menu) by its handle. Menus are [hierarchical navigation structures](https://help.shopify.com/manual/online-store/menus-and-links) that merchants configure for their storefront, such as header and footer navigation.

Each menu contains [`MenuItem`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem) objects that can nest up to three levels deep, with each item linking to [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog), or external URLs.

### Arguments

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The navigation menu's handle.

***

### Possible returns

* Menu

  [Menu](https://shopify.dev/docs/api/storefront/latest/objects/Menu)

  A navigation structure for building store [menus](https://help.shopify.com/manual/online-store/menus-and-links). Each menu contains [`MenuItem`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem) objects that can be nested to create multi-level navigation hierarchies.

  Menu items can link to [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog), or external URLs. Use the [`menu`](https://shopify.dev/docs/api/storefront/2026-04/queries/menu) query to retrieve a menu by its handle.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    The menu's handle.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null Token access required

    A globally-unique ID.

  * items

    [\[Menu​Item!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem)

    non-null Token access required

    The menu's child items.

  * items​Count

    [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    non-null Token access required

    The count of items on the menu.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    The menu's title.

***

### Examples

* ### menu reference

---



<a id="latest-queries-metaobject"></a>


## metaobject

query

Requires `unauthenticated_read_metaobjects` access scope.

Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject) by either its [`global ID`](https://shopify.dev/docs/api/storefront/2026-04/queries/metaobject#arguments-id) or its [`handle`](https://shopify.dev/docs/api/storefront/2026-04/queries/metaobject#arguments-handle).

***

**Note:** When using the handle, you must also provide the metaobject type because handles are only unique within a type.

***

### Arguments

* handle

  [Metaobject​Handle​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MetaobjectHandleInput)

  The handle and type of the metaobject.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the metaobject.

***

### Possible returns

* Metaobject

  [Metaobject](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject)

  An instance of [custom structured data](https://shopify.dev/docs/apps/build/metaobjects) defined by a metaobject definition. Metaobjects store reusable content that extends beyond standard Shopify resources, such as size charts, author profiles, or custom content sections.

  Each metaobject contains fields that match the types and validation rules specified in its definition. [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) references can point to metaobjects, connecting custom data with products, collections, and other resources. If the definition has the `renderable` capability, then the [`seo`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject#field-Metaobject.fields.seo) field provides SEO metadata. If it has the `online_store` capability, then the [`onlineStoreUrl`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject#field-Metaobject.fields.onlineStoreUrl) field returns the public URL.

  * field

    [Metaobject​Field](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField)

    Token access required

    Accesses a field of the object by key.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      ### Arguments

      The key of the field.

    ***

  * fields

    [\[Metaobject​Field!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField)

    non-null Token access required

    All object fields with defined values. Omitted object keys can be assumed null, and no guarantees are made about field order.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    The unique handle of the metaobject. Useful as a custom ID.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null Token access required

    A globally-unique ID.

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    Token access required

    The URL used for viewing the metaobject on the shop's Online Store. Returns `null` if the metaobject definition doesn't have the `online_store` capability.

  * seo

    [Metaobject​SEO](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectSEO)

    Token access required

    The metaobject's SEO information. Returns `null` if the metaobject definition doesn't have the `renderable` capability.

  * type

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null Token access required

    The type of the metaobject.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null Token access required

    The date and time when the metaobject was last updated.

***

### Examples

* ### metaobject reference

---



<a id="latest-queries-metaobjects"></a>


## metaobjects

query

Requires `unauthenticated_read_metaobjects` access scope.

Returns a paginated list of [`Metaobject`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject) entries for a specific type. Metaobjects are [custom data structures](https://shopify.dev/docs/apps/build/metaobjects) that extend Shopify's data model with merchant-defined or app-defined content like size charts, product highlights, or custom sections.

The required `type` argument specifies which metaobject type to retrieve. You can sort results by `id` or `updated_at` using the `sortKey` argument.

### MetaobjectConnection arguments

[MetaobjectConnection!](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The key of a field to sort with. Supports "id" and "updated\_at".

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The type of metaobject to retrieve.

***

### Possible returns

* edges

  [\[Metaobject​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectEdge)

  non-null

  A list of edges.

* nodes

  [\[Metaobject!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject)

  non-null

  A list of the nodes contained in MetaobjectEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### metaobjects reference

---



<a id="latest-queries-node"></a>


## node

query

Retrieves any object that implements the [`Node`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Node) interface by its globally-unique ID. Use inline fragments to access type-specific fields on the returned object.

This query follows the [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface) and is commonly used for refetching objects when you have their ID but need updated data.

### Arguments

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The ID of the Node to return.

***

### Possible returns

* Node

  [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  Enables global object identification following the [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface). Any type implementing this interface has a globally-unique `id` field and can be fetched directly using the [`node`](https://shopify.dev/docs/api/storefront/2026-04/queries/node) or [`nodes`](https://shopify.dev/docs/api/storefront/2026-04/queries/nodes) queries.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

***

### Examples

* ### node reference

---



<a id="latest-queries-nodes"></a>


## nodes

query

Retrieves multiple objects by their global IDs in a single request. Any object that implements the [`Node`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Node) interface can be fetched, including [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), and [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page).

Use inline fragments to access type-specific fields on the returned objects. The input accepts up to 250 IDs.

### Arguments

* ids

  [\[ID!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  required

  The IDs of the Nodes to return.

  The input must not contain more than `250` values.

***

### Possible returns

* Node

  [\[Node\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  Enables global object identification following the [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface). Any type implementing this interface has a globally-unique `id` field and can be fetched directly using the [`node`](https://shopify.dev/docs/api/storefront/2026-04/queries/node) or [`nodes`](https://shopify.dev/docs/api/storefront/2026-04/queries/nodes) queries.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

***

### Examples

* ### nodes reference

---



<a id="latest-queries-page"></a>


## page

query

Retrieves a [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page) by its [`handle`](https://shopify.dev/docs/api/storefront/2026-04/queries/page#arguments-handle) or [`id`](https://shopify.dev/docs/api/storefront/2026-04/queries/page#arguments-id). Pages are static content pages that merchants display outside their product catalog, such as "About Us," "Contact," or policy pages.

The returned page includes information such as the [HTML body content](https://shopify.dev/docs/api/storefront/2026-04/queries/page#returns-Page.fields.body), [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information, and any associated [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects.

### Arguments

* handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The handle of the `Page`.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the `Page`.

***

### Possible returns

* Page

  [Page](https://shopify.dev/docs/api/storefront/latest/objects/Page)

  A [custom content page](https://help.shopify.com/manual/online-store/add-edit-pages) on a merchant's store. Pages display HTML-formatted content, such as "About Us", contact details, or store policies.

  Each page has a unique [`handle`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page#field-Page.fields.handle) for URL routing and includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information for search engine optimization. Pages support [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) attachments for storing additional custom data.

  * body

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the page, complete with HTML formatting.

  * body​Summary

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    Summary of the page body.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The timestamp of the page creation.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the page automatically generated from its title.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * seo

    [SEO](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    The page's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The title of the page.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The timestamp of the latest page update.

***

### Examples

* ### page reference

---



<a id="latest-queries-pagebyhandle"></a>


## page​By​Handle

query

Deprecated. Use [page](https://shopify.dev/docs/api/admin-graphql/latest/queries/page) instead.

Retrieves a [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page) by its handle.

### Arguments

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The handle of the page.

***

### Possible returns

* Page

  [Page](https://shopify.dev/docs/api/storefront/latest/objects/Page)

  A [custom content page](https://help.shopify.com/manual/online-store/add-edit-pages) on a merchant's store. Pages display HTML-formatted content, such as "About Us", contact details, or store policies.

  Each page has a unique [`handle`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page#field-Page.fields.handle) for URL routing and includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information for search engine optimization. Pages support [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) attachments for storing additional custom data.

  * body

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the page, complete with HTML formatting.

  * body​Summary

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    Summary of the page body.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The timestamp of the page creation.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A human-friendly unique string for the page automatically generated from its title.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel.

  * seo

    [SEO](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    The page's SEO information.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The title of the page.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The timestamp of the latest page update.

***

### Examples

* ### pageByHandle reference

---



<a id="latest-queries-pages"></a>


## pages

query

Returns a paginated list of the shop's content [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page). Pages are custom HTML content like "About Us", "Contact", or policy information that merchants display outside their product catalog.

### PageConnection arguments

[PageConnection!](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

  * created\_at
  * handle
  * title
  * updated\_at

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Page​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/PageSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Page​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/PageEdge)

  non-null

  A list of edges.

* nodes

  [\[Page!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Page)

  non-null

  A list of the nodes contained in PageEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### pages reference

---



<a id="latest-queries-paymentsettings"></a>


## payment​Settings

query

Settings related to payments.

### Possible returns

* Payment​Settings

  [Payment​Settings!](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings)

  Settings related to payments.

  * accepted​Card​Brands

    [\[Card​Brand!\]!](https://shopify.dev/docs/api/storefront/latest/enums/CardBrand)

    non-null

    List of the card brands which the business entity accepts.

  * card​Vault​Url

    [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    non-null

    The url pointing to the endpoint to vault credit cards.

  * country​Code

    [Country​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

    non-null

    The country where the shop is located. When multiple business entities operate within the shop, then this will represent the country of the business entity that's serving the specified buyer context.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

    non-null

    The three-letter code for the shop's primary currency.

  * enabled​Presentment​Currencies

    [\[Currency​Code!\]!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

    non-null

    A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.

  * shopify​Payments​Account​Id

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The shop’s Shopify Payments account ID.

  * supported​Digital​Wallets

    [\[Digital​Wallet!\]!](https://shopify.dev/docs/api/storefront/latest/enums/DigitalWallet)

    non-null

    List of the digital wallets which the business entity supports.

***

### Examples

* ### paymentSettings reference

---



<a id="latest-queries-predictivesearch"></a>


## predictive​Search

query

Returns suggested results as customers type in a search field, enabling type-ahead search experiences. The query matches [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [articles](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) based on partial search terms, and also provides [search query suggestions](https://shopify.dev/docs/api/storefront/2026-04/objects/SearchQuerySuggestion) to help customers refine their search.

You can filter results by resource type and limit the quantity. The [`limitScope`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch#arguments-limitScope) argument controls whether limits apply across all result types or per type. Use [`unavailableProducts`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch#arguments-unavailableProducts) to control how out-of-stock products appear in results.

### Arguments

* limit

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Limits the number of results based on `limit_scope`. The value can range from 1 to 10, and the default is 10.

* limit​Scope

  [Predictive​Search​Limit​Scope](https://shopify.dev/docs/api/storefront/latest/enums/PredictiveSearchLimitScope)

  Decides the distribution of results.

* query

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The search query.

* searchable​Fields

  [\[Searchable​Field!\]](https://shopify.dev/docs/api/storefront/latest/enums/SearchableField)

  Specifies the list of resource fields to use for search. The default fields searched on are TITLE, PRODUCT\_TYPE, VARIANT\_TITLE, and VENDOR. For the best search experience, you should search on the default field set.

  The input must not contain more than `250` values.

* types

  [\[Predictive​Search​Type!\]](https://shopify.dev/docs/api/storefront/latest/enums/PredictiveSearchType)

  The types of resources to search for.

  The input must not contain more than `250` values.

* unavailable​Products

  [Search​Unavailable​Products​Type](https://shopify.dev/docs/api/storefront/latest/enums/SearchUnavailableProductsType)

  Specifies how unavailable products are displayed in the search results.

***

### Possible returns

* Predictive​Search​Result

  [Predictive​Search​Result](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult)

  Returned by the [`predictiveSearch`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) query to power type-ahead search experiences. Includes matching [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects, along with query suggestions that help customers refine their search.

  * articles

    [\[Article!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Article)

    non-null

    The articles that match the search query.

  * collections

    [\[Collection!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Collection)

    non-null

    The articles that match the search query.

  * pages

    [\[Page!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Page)

    non-null

    The pages that match the search query.

  * products

    [\[Product!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Product)

    non-null

    The products that match the search query.

  * queries

    [\[Search​Query​Suggestion!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SearchQuerySuggestion)

    non-null

    The query suggestions that are relevant to the search query.

***

### Examples

* ### predictiveSearch reference

---



<a id="latest-queries-product"></a>


## product

query

Retrieves a single [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) by its ID or handle. Use this query to build product detail pages, access variant and pricing information, or fetch product media and [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield). See some [examples of querying products](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/getting-started).

### Arguments

* handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The handle of the `Product`.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the `Product`.

***

### Possible returns

* Product

  [Product](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

  * adjacent​Variants

    [\[Product​Variant!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    non-null

    A list of variants whose selected options differ with the provided selected options by one, ordered by variant id. If selected options are not provided, adjacent variants to the first available variant is returned.

    Note that this field returns an array of variants. In most cases, the number of variants in this array will be low. However, with a low number of options and a high number of values per option, the number of variants returned here can be high. In such cases, it recommended to avoid using this field.

    This list of variants can be used in combination with the `options` field to build a rich variant picker that includes variant availability or other variant information.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore product options that are not present on the requested product.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * available​For​Sale

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Indicates if at least one product variant is available for sale.

  * category

    [Taxonomy​Category](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory)

    The category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

  * collections

    [Collection​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection)

    non-null

    A list of [collections](https://shopify.dev/docs/api/storefront/latest/objects/Collection) that include the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * compare​At​Price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing) of the product in the shop's default currency.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was created.

  * description

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

  * encoded​Variant​Availability

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant that is currently available for sale.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * encoded​Variant​Existence

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * featured​Image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    The featured image for the product.

    This field is functionally equivalent to `images(first: 1)`.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * images

    [Image​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection)

    non-null

    List of images associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Image​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductImageSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * is​Gift​Card

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product is a gift card.

  * media

    [Media​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection)

    non-null

    The [media](https://shopify.dev/docs/apps/build/online-store/product-media) that are associated with the product. Valid media are images, 3D models, videos.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Media​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductMediaSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The product's URL on the online store. If `null`, then the product isn't published to the online store sales channel.

  * options

    [\[Product​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductOption)

    non-null

    A list of product options. The limit is defined by the [shop's resource limits for product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`).

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

  * product​Type

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

  * published​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was published to the channel.

  * requires​Selling​Plan

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.

  * selected​Or​First​Available​Variant

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find an active product variant based on selected options, availability or the first variant.

    All arguments are optional. If no selected options are provided, the first available variant is returned. If no variants are available, the first variant is returned.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * selling​Plan​Groups

    [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection)

    non-null

    A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * seo

    [SEO!](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    non-null

    The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A comma-separated list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer. Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the GraphQL Admin API's [`tagsAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd) mutation.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name for the product that displays to customers. The title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.

  * total​Inventory

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Token access required

    The quantity of inventory that's in stock.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was last modified. A product's `updatedAt` value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.

  * variant​By​Selected​Options

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find a product’s variant based on its selected options. This is useful for converting a user’s selection of product options into a single matching variant. If there is not a variant for the selected options, `null` will be returned.

    * selected​Options

      [\[Selected​Option​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      required

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection)

    non-null

    A list of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductVariantSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * variants​Count

    [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

    The number of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

  * vendor

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name of the product's vendor.

***

### Examples

* ### Load products which are published in a given context

  #### Description

  The Storefront API will automatically limit your query to products that are published in any applicable catalogs. Unpublished products will behave just like they were archived or deleted: they will be omitted from connections and not found when queried by handle or ID. Use the \`@inContext\` directive to set the context explicitly; if omitted, the primary market will be used. > Note: If your app is a sales channel to which products can be published, then the Storefront API will only return products that are published both to your sales channel \_and\_ the market you’re querying for. In this example, the merchant has restricted their alarm clock from sale in the United Kingdom by unpublishing it from that market’s catalog. That product field returns \`null\` and that product is not included in the \`products\` connection response.

  #### Query

  ```graphql
  query Products @inContext(country: GB) {
    woolSweater: product(handle: "wool-sweater") {
      title
    }
    alarmClock: product(handle: "alarm-clock") {
      title
    }
    products(first: 2) {
      nodes {
        title
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query Products @inContext(country: GB) { woolSweater: product(handle: \"wool-sweater\") { title } alarmClock: product(handle: \"alarm-clock\") { title } products(first: 2) { nodes { title } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query Products @inContext(country: GB) {
      woolSweater: product(handle: "wool-sweater") {
        title
      }
      alarmClock: product(handle: "alarm-clock") {
        title
      }
      products(first: 2) {
        nodes {
          title
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query Products @inContext(country: GB) {
      woolSweater: product(handle: "wool-sweater") {
        title
      }
      alarmClock: product(handle: "alarm-clock") {
        title
      }
      products(first: 2) {
        nodes {
          title
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "woolSweater": {
      "title": "Wool sweater"
    },
    "alarmClock": null,
    "products": {
      "nodes": [
        {
          "title": "Wool sweater"
        }
      ]
    }
  }
  ```

* ### Load translated and localized content for a product

  #### Description

  By adding the \`@inContext\` directive to your query, you can access localized and translated content.

  #### Query

  ```graphql
  query ProductTitle @inContext(country: CA, language: FR) {
    product(handle: "wool-sweater") {
      title
      description
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query ProductTitle @inContext(country: CA, language: FR) { product(handle: \"wool-sweater\") { title description } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query ProductTitle @inContext(country: CA, language: FR) {
      product(handle: "wool-sweater") {
        title
        description
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query ProductTitle @inContext(country: CA, language: FR) {
      product(handle: "wool-sweater") {
        title
        description
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "product": {
      "title": "Chandail en laine",
      "description": "C’est très chaud!"
    }
  }
  ```

* ### Retrieve a single product

  #### Description

  Products are identified by an ID, which you can use in queries to retrieve information. To query a single product, you can use the product ID as an argument to the \`product\` query.

  #### Query

  ```graphql
  query getProductById($id: ID!) {
    product(id: $id) {
      title
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Product/929898465"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProductById($id: ID!) { product(id: $id) { title } }",
   "variables": {
      "id": "gid://shopify/Product/929898465"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProductById($id: ID!) {
      product(id: $id) {
        title
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/929898465"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `query getProductById($id: ID!) {
        product(id: $id) {
          title
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/929898465"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "product": {
      "title": "Camper Van"
    }
  }
  ```

* ### Retrieve local prices for a product

  #### Description

  By adding the \`@inContext\` directive to your query, you can access local pricing for a specified country. These prices are returned in the currency configured for the country in Markets settings. They may be calculated from the base variant prices, or provided by the merchant as fixed local prices.

  #### Query

  ```graphql
  query ProductPricing @inContext(country: CA) {
    product(handle: "wool-sweater") {
      variants(first: 1) {
        nodes {
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query ProductPricing @inContext(country: CA) { product(handle: \"wool-sweater\") { variants(first: 1) { nodes { price { amount currencyCode } } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query ProductPricing @inContext(country: CA) {
      product(handle: "wool-sweater") {
        variants(first: 1) {
          nodes {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query ProductPricing @inContext(country: CA) {
      product(handle: "wool-sweater") {
        variants(first: 1) {
          nodes {
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "product": {
      "variants": {
        "nodes": [
          {
            "price": {
              "amount": "90.0",
              "currencyCode": "CAD"
            }
          }
        ]
      }
    }
  }
  ```

* ### Retrieve product media

  #### Description

  You can use the Storefront API to query a product's media and display it on a storefront. Specify the \`media\` connection on the \`Product\` object to return a product's media. You can then use a fragment to specify the fields that you want to return for each possible media type.

  #### Query

  ```graphql
  query getProductMedia($id: ID!) {
    product(id: $id) {
      id
      media(first: 10) {
        edges {
          node {
            mediaContentType
            alt
            ...mediaFieldsByType
          }
        }
      }
    }
  }

  fragment mediaFieldsByType on Media {
    ... on ExternalVideo {
      id
      embeddedUrl
    }
    ... on MediaImage {
      image {
        url
      }
    }
    ... on Model3d {
      sources {
        url
        mimeType
        format
        filesize
      }
    }
    ... on Video {
      sources {
        url
        mimeType
        format
        height
        width
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Product/929898465"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProductMedia($id: ID!) { product(id: $id) { id media(first: 10) { edges { node { mediaContentType alt ...mediaFieldsByType } } } } } fragment mediaFieldsByType on Media { ... on ExternalVideo { id embeddedUrl } ... on MediaImage { image { url } } ... on Model3d { sources { url mimeType format filesize } } ... on Video { sources { url mimeType format height width } } }",
   "variables": {
      "id": "gid://shopify/Product/929898465"
    }
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProductMedia($id: ID!) {
      product(id: $id) {
        id
        media(first: 10) {
          edges {
            node {
              mediaContentType
              alt
              ...mediaFieldsByType
            }
          }
        }
      }
    }
    
    fragment mediaFieldsByType on Media {
      ... on ExternalVideo {
        id
        embeddedUrl
      }
      ... on MediaImage {
        image {
          url
        }
      }
      ... on Model3d {
        sources {
          url
          mimeType
          format
          filesize
        }
      }
      ... on Video {
        sources {
          url
          mimeType
          format
          height
          width
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/929898465"
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: {
      "query": `query getProductMedia($id: ID!) {
        product(id: $id) {
          id
          media(first: 10) {
            edges {
              node {
                mediaContentType
                alt
                ...mediaFieldsByType
              }
            }
          }
        }
      }
      
      fragment mediaFieldsByType on Media {
        ... on ExternalVideo {
          id
          embeddedUrl
        }
        ... on MediaImage {
          image {
            url
          }
        }
        ... on Model3d {
          sources {
            url
            mimeType
            format
            filesize
          }
        }
        ... on Video {
          sources {
            url
            mimeType
            format
            height
            width
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/929898465"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "product": {
      "id": "gid://shopify/Product/929898465",
      "media": {
        "edges": [
          {
            "node": {
              "mediaContentType": "IMAGE",
              "alt": "",
              "image": {
                "url": "https://cdn.shopify.com/s/files/1/0003/2595/3821/products/draft58.jpg?v=1773111786"
              }
            }
          },
          {
            "node": {
              "mediaContentType": "IMAGE",
              "alt": "",
              "image": {
                "url": "https://cdn.shopify.com/s/files/1/0003/2595/3821/products/draft59.jpg?v=1773111786"
              }
            }
          }
        ]
      }
    }
  }
  ```

---



<a id="latest-queries-productbyhandle"></a>


## product​By​Handle

query

Deprecated. Use [product](https://shopify.dev/docs/api/admin-graphql/latest/queries/product) instead.

Retrieves a [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) by its handle. The handle is a URL-friendly identifier that's automatically generated from the product's title. If no product exists with the specified handle, returns `null`.

### Arguments

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

***

### Possible returns

* Product

  [Product](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

  * adjacent​Variants

    [\[Product​Variant!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    non-null

    A list of variants whose selected options differ with the provided selected options by one, ordered by variant id. If selected options are not provided, adjacent variants to the first available variant is returned.

    Note that this field returns an array of variants. In most cases, the number of variants in this array will be low. However, with a low number of options and a high number of values per option, the number of variants returned here can be high. In such cases, it recommended to avoid using this field.

    This list of variants can be used in combination with the `options` field to build a rich variant picker that includes variant availability or other variant information.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore product options that are not present on the requested product.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * available​For​Sale

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Indicates if at least one product variant is available for sale.

  * category

    [Taxonomy​Category](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory)

    The category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

  * collections

    [Collection​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection)

    non-null

    A list of [collections](https://shopify.dev/docs/api/storefront/latest/objects/Collection) that include the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * compare​At​Price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing) of the product in the shop's default currency.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was created.

  * description

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

  * encoded​Variant​Availability

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant that is currently available for sale.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * encoded​Variant​Existence

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * featured​Image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    The featured image for the product.

    This field is functionally equivalent to `images(first: 1)`.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * images

    [Image​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection)

    non-null

    List of images associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Image​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductImageSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * is​Gift​Card

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product is a gift card.

  * media

    [Media​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection)

    non-null

    The [media](https://shopify.dev/docs/apps/build/online-store/product-media) that are associated with the product. Valid media are images, 3D models, videos.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Media​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductMediaSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The product's URL on the online store. If `null`, then the product isn't published to the online store sales channel.

  * options

    [\[Product​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductOption)

    non-null

    A list of product options. The limit is defined by the [shop's resource limits for product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`).

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

  * product​Type

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

  * published​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was published to the channel.

  * requires​Selling​Plan

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.

  * selected​Or​First​Available​Variant

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find an active product variant based on selected options, availability or the first variant.

    All arguments are optional. If no selected options are provided, the first available variant is returned. If no variants are available, the first variant is returned.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * selling​Plan​Groups

    [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection)

    non-null

    A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * seo

    [SEO!](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    non-null

    The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A comma-separated list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer. Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the GraphQL Admin API's [`tagsAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd) mutation.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name for the product that displays to customers. The title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.

  * total​Inventory

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Token access required

    The quantity of inventory that's in stock.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was last modified. A product's `updatedAt` value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.

  * variant​By​Selected​Options

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find a product’s variant based on its selected options. This is useful for converting a user’s selection of product options into a single matching variant. If there is not a variant for the selected options, `null` will be returned.

    * selected​Options

      [\[Selected​Option​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      required

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection)

    non-null

    A list of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductVariantSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * variants​Count

    [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

    The number of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

  * vendor

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name of the product's vendor.

***

### Examples

* ### productByHandle reference

---



<a id="latest-queries-productrecommendations"></a>


## product​Recommendations

query

Returns recommended products for a given product, identified by either ID or handle. Use the [`intent`](https://shopify.dev/docs/api/storefront/2026-04/enums/ProductRecommendationIntent) argument to control the recommendation strategy.

Shopify [auto-generates related recommendations](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations) based on sales data, product descriptions, and collection relationships. Complementary recommendations require [manual configuration](https://help.shopify.com/manual/online-store/storefront-search/search-and-discovery-recommendations) through the Shopify Search & Discovery app. Returns up to ten [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) objects.

### Arguments

* intent

  [Product​Recommendation​Intent](https://shopify.dev/docs/api/storefront/latest/enums/ProductRecommendationIntent)

  Default:RELATED

  The recommendation intent that is used to generate product recommendations. You can use intent to generate product recommendations on various pages across the channels, according to different strategies.

* product​Handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The handle of the product.

* product​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The id of the product.

***

### Possible returns

* Product

  [\[Product!\]](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

  * adjacent​Variants

    [\[Product​Variant!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    non-null

    A list of variants whose selected options differ with the provided selected options by one, ordered by variant id. If selected options are not provided, adjacent variants to the first available variant is returned.

    Note that this field returns an array of variants. In most cases, the number of variants in this array will be low. However, with a low number of options and a high number of values per option, the number of variants returned here can be high. In such cases, it recommended to avoid using this field.

    This list of variants can be used in combination with the `options` field to build a rich variant picker that includes variant availability or other variant information.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore product options that are not present on the requested product.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * available​For​Sale

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Indicates if at least one product variant is available for sale.

  * category

    [Taxonomy​Category](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory)

    The category of a product from [Shopify's Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17).

  * collections

    [Collection​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection)

    non-null

    A list of [collections](https://shopify.dev/docs/api/storefront/latest/objects/Collection) that include the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * compare​At​Price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The [compare-at price range](https://help.shopify.com/manual/products/details/product-pricing/sale-pricing) of the product in the shop's default currency.

  * created​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was created.

  * description

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A single-line description of the product, with [HTML tags](https://developer.mozilla.org/en-US/docs/Web/HTML) removed.

    * truncate​At

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncates a string after the given length.

    ***

  * description​Html

    [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

    non-null

    The description of the product, with HTML tags. For example, the description might include bold `<strong></strong>` and italic `<i></i>` text.

  * encoded​Variant​Availability

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant that is currently available for sale.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * encoded​Variant​Existence

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    An encoded string containing all option value combinations with a corresponding variant.

    Integers represent option and values: \[0,1] represents option\_value at array index 0 for the option at array index 0

    `:`, `,`, ``and `-` are control characters. `:` indicates a new option. ex: 0:1 indicates value 0 for the option in position 1, value 1 for the option in position 2. `,` indicates the end of a repeated prefix, mulitple consecutive commas indicate the end of multiple repeated prefixes. ``indicates a gap in the sequence of option values. ex: 0 4 indicates option values in position 0 and 4 are present. `-` indicates a continuous range of option values. ex: 0 1-3 4

    Decoding process:

    Example options: \[Size, Color, Material] Example values: \[\[Small, Medium, Large], \[Red, Blue], \[Cotton, Wool]] Example encoded string: "0:0:0,1:0-1,,1:0:0-1,1:1,,2:0:1,1:0,,"

    Step 1: Expand ranges into the numbers they represent: "0:0:0,1:0 1,,1:0:0 1,1:1,,2:0:1,1:0,," Step 2: Expand repeated prefixes: "0:0:0,0:1:0 1,1:0:0 1,1:1:1,2:0:1,2:1:0," Step 3: Expand shared prefixes so data is encoded as a string: "0:0:0,0:1:0,0:1:1,1:0:0,1:0:1,1:1:1,2:0:1,2:1:0," Step 4: Map to options + option values to determine existing variants:

    \[Small, Red, Cotton] (0:0:0), \[Small, Blue, Cotton] (0:1:0), \[Small, Blue, Wool] (0:1:1), \[Medium, Red, Cotton] (1:0:0), \[Medium, Red, Wool] (1:0:1), \[Medium, Blue, Wool] (1:1:1), \[Large, Red, Wool] (2:0:1), \[Large, Blue, Cotton] (2:1:0).

  * featured​Image

    [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

    The featured image for the product.

    This field is functionally equivalent to `images(first: 1)`.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * images

    [Image​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection)

    non-null

    List of images associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Image​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductImageSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * is​Gift​Card

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product is a gift card.

  * media

    [Media​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection)

    non-null

    The [media](https://shopify.dev/docs/apps/build/online-store/product-media) that are associated with the product. Valid media are images, 3D models, videos.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Media​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductMediaSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * online​Store​Url

    [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

    The product's URL on the online store. If `null`, then the product isn't published to the online store sales channel.

  * options

    [\[Product​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductOption)

    non-null

    A list of product options. The limit is defined by the [shop's resource limits for product options](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-resourcelimits) (`Shop.resourceLimits.maxProductOptions`).

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Truncate the array result to this size.

    ***

  * price​Range

    [Product​Price​Range!](https://shopify.dev/docs/api/storefront/latest/objects/ProductPriceRange)

    non-null

    The minimum and maximum prices of a product, expressed in decimal numbers. For example, if the product is priced between $10.00 and $50.00, then the price range is $10.00 - $50.00.

  * product​Type

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The [product type](https://help.shopify.com/manual/products/details/product-type) that merchants define.

  * published​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was published to the channel.

  * requires​Selling​Plan

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the product can only be purchased with a [selling plan](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription-only (`requiresSellingPlan:false`), then the product is unpublished from all channels, except the online store.

  * selected​Or​First​Available​Variant

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find an active product variant based on selected options, availability or the first variant.

    All arguments are optional. If no selected options are provided, the first available variant is returned. If no variants are available, the first variant is returned.

    * selected​Options

      [\[Selected​Option​Input!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:true

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * selling​Plan​Groups

    [Selling​Plan​Group​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection)

    non-null

    A list of all [selling plan groups](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/selling-plans/build-a-selling-plan) that are associated with the product either directly, or through the product's variants.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    ***

  * seo

    [SEO!](https://shopify.dev/docs/api/storefront/latest/objects/SEO)

    non-null

    The [SEO title and description](https://help.shopify.com/manual/promoting-marketing/seo/adding-keywords) that are associated with a product.

  * tags

    [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A comma-separated list of searchable keywords that are associated with the product. For example, a merchant might apply the `sports` and `summer` tags to products that are associated with sportwear for summer. Updating `tags` overwrites any existing tags that were previously added to the product. To add new tags without overwriting existing tags, use the GraphQL Admin API's [`tagsAdd`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/tagsadd) mutation.

  * title

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name for the product that displays to customers. The title is used to construct the product's handle. For example, if a product is titled "Black Sunglasses", then the handle is `black-sunglasses`.

  * total​Inventory

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Token access required

    The quantity of inventory that's in stock.

  * tracking​Parameters

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

  * updated​At

    [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

    non-null

    The date and time when the product was last modified. A product's `updatedAt` value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.

  * variant​By​Selected​Options

    [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

    Find a product’s variant based on its selected options. This is useful for converting a user’s selection of product options into a single matching variant. If there is not a variant for the selected options, `null` will be returned.

    * selected​Options

      [\[Selected​Option​Input!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/SelectedOptionInput)

      required

      ### Arguments

      The input fields used for a selected option.

      The input must not contain more than `250` values.

    * ignore​Unknown​Options

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to ignore unknown product options.

    * case​Insensitive​Match

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Whether to perform case insensitive match on option names and values.

    ***

  * variants

    [Product​Variant​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection)

    non-null

    A list of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

    * first

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      ### Arguments

      Returns up to the first `n` elements from the list.

    * after

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come after the specified cursor.

    * last

      [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      Returns up to the last `n` elements from the list.

    * before

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      Returns the elements that come before the specified cursor.

    * reverse

      [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

      Default:false

      Reverse the order of the underlying list.

    * sort​Key

      [Product​Variant​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductVariantSortKeys)

      Default:POSITION

      Sort the underlying list by the given key.

    ***

  * variants​Count

    [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

    The number of [variants](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant) that are associated with the product.

  * vendor

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The name of the product's vendor.

***

### Examples

* ### productRecommendations reference

---



<a id="latest-queries-producttags"></a>


## product​Tags

query

Requires `unauthenticated_read_product_tags` access scope.

Returns a paginated list of all tags that have been added to [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) in the shop. Useful for building tag-based product filtering or navigation in a storefront.

### StringConnection arguments

[StringConnection!](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection)

* first

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  required

  Returns up to the first `n` elements from the list.

***

### Possible returns

* edges

  [\[String​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/StringEdge)

  non-null

  A list of edges.

* nodes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A list of the nodes contained in StringEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### productTags reference

---



<a id="latest-queries-producttypes"></a>


## product​Types

query

Requires `unauthenticated_read_product_listings` access scope.

Returns a list of product types from the shop's [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) objects that are published to your app. Use this query to build [filtering interfaces](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) or navigation menus based on product categorization.

### StringConnection arguments

[StringConnection!](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection)

* first

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  required

  Returns up to the first `n` elements from the list.

***

### Possible returns

* edges

  [\[String​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/StringEdge)

  non-null

  A list of edges.

* nodes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A list of the nodes contained in StringEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### productTypes reference

---



<a id="latest-queries-products"></a>


## products

query

Returns a paginated list of the shop's [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product).

For full-text storefront search, use the [`search`](https://shopify.dev/docs/api/storefront/2026-04/queries/search) query instead.

### ProductConnection arguments

[ProductConnection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  You can apply one or multiple filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

  * available\_for\_sale

    Filter by products that have at least one product variant available for sale.

  * * created\_at

    * product\_type

    * tag

    * tag\_not

    * title

    * updated\_at

    * variants.price

    - Filter by the date and time when the product was created.

    - Example:

      * `created_at:>'2020-10-21T23:39:20Z'`
      * `created_at:<now`
      * `created_at:<=2024`

      Filter by a comma-separated list of [product types](https://help.shopify.com/en/manual/products/details/product-type).

    - Example:

      * `product_type:snowboard`

      Filter products by the product [`tags`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-tags) field.

    - Example:

      * `tag:my_tag`

      Filter by products that don't have the specified product [tags](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-tags).

    - Example:

      * `tag_not:my_tag`

      Filter by the product [`title`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-title) field.

    - Example:

      * `title:The Minimal Snowboard`

      Filter by the date and time when the product was last updated.

    - Example:

      * `updated_at:>'2020-10-21T23:39:20Z'`
      * `updated_at:<now`
      * `updated_at:<=2024`

      Filter by the price of the product's variants.

  * vendor

    Filter by the product [`vendor`](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-vendor) field.

    Example:

    * `vendor:Snowdevil`
    * `vendor:Snowdevil OR vendor:Icedevil`

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Product​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/ProductSortKeys)

  Default:ID

  Sort the underlying list by the given key.

***

### Possible returns

* edges

  [\[Product​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductEdge)

  non-null

  A list of edges.

* filters

  [\[Filter!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Filter)

  non-null

  A list of available filters.

* nodes

  [\[Product!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  non-null

  A list of the nodes contained in ProductEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### Retrieve first three products

  #### Description

  The following example shows how to query for first three products.

  #### Query

  ```graphql
  query getProducts($first: Int) {
    products(first: $first) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($first: Int) { products(first: $first) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($first: Int) {
      products(first: $first) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($first: Int) {
      products(first: $first) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo2NTcyMTE2NSwibGFzdF92YWx1ZSI6IjY1NzIxMTY1In0=",
          "node": {
            "title": "Storefront Spoon"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjoyNjMwNzE4NTYsImxhc3RfdmFsdWUiOiIyNjMwNzE4NTYifQ==",
          "node": {
            "title": "Storefront Shoes"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo1Mzg4MjUyNjEsImxhc3RfdmFsdWUiOiI1Mzg4MjUyNjEifQ==",
          "node": {
            "title": "Guitar"
          }
        }
      ]
    }
  }
  ```

* ### Retrieve first three products in reverse order

  #### Description

  The following example shows how to query for first three products in reverse order.

  #### Query

  ```graphql
  query getProducts($first: Int, $reverse: Boolean) {
    products(first: $first, reverse: $reverse) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($first: Int, $reverse: Boolean) { products(first: $first, reverse: $reverse) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($first: Int, $reverse: Boolean) {
      products(first: $first, reverse: $reverse) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($first: Int, $reverse: Boolean) {
      products(first: $first, reverse: $reverse) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo5Mjk4OTg0NjUsImxhc3RfdmFsdWUiOiI5Mjk4OTg0NjUifQ==",
          "node": {
            "title": "Camper Van"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo1Mzg4MjUyNjEsImxhc3RfdmFsdWUiOiI1Mzg4MjUyNjEifQ==",
          "node": {
            "title": "Guitar"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjoyNjMwNzE4NTYsImxhc3RfdmFsdWUiOiIyNjMwNzE4NTYifQ==",
          "node": {
            "title": "Storefront Shoes"
          }
        }
      ]
    }
  }
  ```

* ### Retrieve first two products after cursor

  #### Description

  The following example shows how to query for first two products after cursor.

  #### Query

  ```graphql
  query getProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($first: Int, $after: String) { products(first: $first, after: $after) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($first: Int, $after: String) {
      products(first: $first, after: $after) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($first: Int, $after: String) {
      products(first: $first, after: $after) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjoyNjMwNzE4NTYsImxhc3RfdmFsdWUiOiIyNjMwNzE4NTYifQ==",
          "node": {
            "title": "Storefront Shoes"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo1Mzg4MjUyNjEsImxhc3RfdmFsdWUiOiI1Mzg4MjUyNjEifQ==",
          "node": {
            "title": "Guitar"
          }
        }
      ]
    }
  }
  ```

* ### Retrieve last two products before cursor

  #### Description

  The following example shows how to query for last two products before cursor.

  #### Query

  ```graphql
  query getProducts($last: Int, $before: String) {
    products(last: $last, before: $before) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($last: Int, $before: String) { products(last: $last, before: $before) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($last: Int, $before: String) {
      products(last: $last, before: $before) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($last: Int, $before: String) {
      products(last: $last, before: $before) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo2NTcyMTE2NSwibGFzdF92YWx1ZSI6IjY1NzIxMTY1In0=",
          "node": {
            "title": "Storefront Spoon"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjoyNjMwNzE4NTYsImxhc3RfdmFsdWUiOiIyNjMwNzE4NTYifQ==",
          "node": {
            "title": "Storefront Shoes"
          }
        }
      ]
    }
  }
  ```

* ### Retrieve product that matches the query

  #### Description

  The following example shows how to query product that matches the query.

  #### Query

  ```graphql
  query getProducts($first: Int, $query: String) {
    products(first: $first, query: $query) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($first: Int, $query: String) { products(first: $first, query: $query) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($first: Int, $query: String) {
      products(first: $first, query: $query) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($first: Int, $query: String) {
      products(first: $first, query: $query) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo1Mzg4MjUyNjEsImxhc3RfdmFsdWUiOiI1Mzg4MjUyNjEifQ==",
          "node": {
            "title": "Guitar"
          }
        }
      ]
    }
  }
  ```

* ### Retrieve products after sorting by a key

  #### Description

  The following example shows how to query products after sorting by a key.

  #### Query

  ```graphql
  query getProducts($first: Int, $sortKey: ProductSortKeys) {
    products(first: $first, sortKey: $sortKey) {
      edges {
        cursor
        node {
          title
        }
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/api/2026-04/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Storefront-Access-Token: {storefront_access_token}' \
  -d '{
  "query": "query getProducts($first: Int, $sortKey: ProductSortKeys) { products(first: $first, sortKey: $sortKey) { edges { cursor node { title } } } }"
  }'
  ```

  #### React Router

  ```javascript
  import { unauthenticated } from "../shopify.server";

  export const loader = async () => {
    const { storefront } = await unauthenticated.storefront(
      'your-development-store.myshopify.com'
    );
    const response = await storefront.graphql(
      `#graphql
    query getProducts($first: Int, $sortKey: ProductSortKeys) {
      products(first: $first, sortKey: $sortKey) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Storefront({
    domain: 'your-development-store.myshopify.com',
    storefrontAccessToken,
  });
  const data = await client.query({
    data: `query getProducts($first: Int, $sortKey: ProductSortKeys) {
      products(first: $first, sortKey: $sortKey) {
        edges {
          cursor
          node {
            title
          }
        }
      }
    }`,
  });
  ```

  #### Response

  ```json
  {
    "products": {
      "edges": [
        {
          "cursor": "eyJsYXN0X2lkIjo5Mjk4OTg0NjUsImxhc3RfdmFsdWUiOiJDYW1wZXIgVmFuIn0=",
          "node": {
            "title": "Camper Van"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo1Mzg4MjUyNjEsImxhc3RfdmFsdWUiOiJHdWl0YXIifQ==",
          "node": {
            "title": "Guitar"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjoyNjMwNzE4NTYsImxhc3RfdmFsdWUiOiJTdG9yZWZyb250IFNob2VzIn0=",
          "node": {
            "title": "Storefront Shoes"
          }
        },
        {
          "cursor": "eyJsYXN0X2lkIjo2NTcyMTE2NSwibGFzdF92YWx1ZSI6IlN0b3JlZnJvbnQgU3Bvb24ifQ==",
          "node": {
            "title": "Storefront Spoon"
          }
        }
      ]
    }
  }
  ```

---



<a id="latest-queries-publicapiversions"></a>


## public​Api​Versions

query

Returns all public Storefront [API versions](https://shopify.dev/docs/api/storefront/2026-04/objects/ApiVersion), including supported, release candidate, and unstable versions.

### Possible returns

* Api​Version

  [\[Api​Version!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ApiVersion)

  A version of the Shopify API. Each version has a unique handle in date-based format (YYYY-MM) or `unstable` for the development version.

  Shopify guarantees supported versions are stable. Unsupported versions include unstable and release candidate versions. Use the [`publicApiVersions`](https://shopify.dev/docs/api/storefront/2026-04/queries/publicApiVersions) query to retrieve all available versions. Learn more about [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning).

  * display​Name

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The human-readable name of the version.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle.

  * supported

    [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    non-null

    Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning).

***

### Examples

* ### publicApiVersions reference

---



<a id="latest-queries-search"></a>


## search

query

Returns paginated search results for [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) resources based on a query string. Results are sorted by relevance by default.

The response includes the total result count and available product filters for building [faceted search interfaces](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products). Use the [`prefix`](https://shopify.dev/docs/api/storefront/2026-04/enums/SearchPrefixQueryType) argument to enable partial word matching on the last search term, allowing queries like "winter snow" to match "snowboard" or "snowshoe".

### SearchResultItemConnection arguments

[SearchResultItemConnection!](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* prefix

  [Search​Prefix​Query​Type](https://shopify.dev/docs/api/storefront/latest/enums/SearchPrefixQueryType)

  Specifies whether to perform a partial word match on the last search term.

* product​Filters

  [\[Product​Filter!\]](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter)

  Returns a subset of products matching all product filters.

  The input must not contain more than `250` values.

* query

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  required

  The search query.

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

* sort​Key

  [Search​Sort​Keys](https://shopify.dev/docs/api/storefront/latest/enums/SearchSortKeys)

  Default:RELEVANCE

  Sort the underlying list by the given key.

* types

  [\[Search​Type!\]](https://shopify.dev/docs/api/storefront/latest/enums/SearchType)

  The types of resources to search for.

  The input must not contain more than `250` values.

* unavailable​Products

  [Search​Unavailable​Products​Type](https://shopify.dev/docs/api/storefront/latest/enums/SearchUnavailableProductsType)

  Specifies how unavailable products or variants are displayed in the search results.

***

### Possible returns

* edges

  [\[Search​Result​Item​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SearchResultItemEdge)

  non-null

  A list of edges.

* nodes

  [\[Search​Result​Item!\]!](https://shopify.dev/docs/api/storefront/latest/unions/SearchResultItem)

  non-null

  A list of the nodes contained in SearchResultItemEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

* product​Filters

  [\[Filter!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Filter)

  non-null

  A list of available filters.

* total​Count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The total number of results.

***

### Examples

* ### search reference

---



<a id="latest-queries-shop"></a>


## shop

query

Returns the [`Shop`](https://shopify.dev/docs/api/storefront/2026-04/objects/Shop) associated with the storefront access token. The `Shop` object provides general store information such as the shop name, description, and primary domain.

Use this query to access data like store policies, [`PaymentSettings`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaymentSettings), [`Brand`](https://shopify.dev/docs/api/storefront/2026-04/objects/Brand) configuration, and shipping destinations. It also exposes [`ShopPayInstallmentsPricing`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayInstallmentsPricing) and [`SocialLoginProvider`](https://shopify.dev/docs/api/storefront/2026-04/objects/SocialLoginProvider) options for customer accounts.

### Possible returns

* Shop

  [Shop!](https://shopify.dev/docs/api/storefront/latest/objects/Shop)

  The central hub for store-wide settings and information accessible through the Storefront API. Provides the shop's name, description, and branding configuration including logos and colors through the [`Brand`](https://shopify.dev/docs/api/storefront/2026-04/objects/Brand) object.

  Access store policies such as privacy, refund, shipping, and terms of service via [`ShopPolicy`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPolicy), and the subscription policy via [`ShopPolicyWithDefault`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPolicyWithDefault). [`PaymentSettings`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaymentSettings) expose accepted card brands, supported digital wallets, and enabled presentment currencies. The object also includes the primary [`Domain`](https://shopify.dev/docs/api/storefront/2026-04/objects/Domain), countries the shop ships to, [`ShopPayInstallmentsPricing`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayInstallmentsPricing), and [`SocialLoginProvider`](https://shopify.dev/docs/api/storefront/2026-04/objects/SocialLoginProvider) options for customer accounts.

  * brand

    [Brand](https://shopify.dev/docs/api/storefront/latest/objects/Brand)

    The shop's branding configuration.

  * contact​Information

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop's contact information.

  * customer​Account​Translations

    [\[Translation!\]](https://shopify.dev/docs/api/storefront/latest/objects/Translation)

    Translations for customer accounts.

  * customer​Account​Url

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The URL for the customer account (only present if shop has a customer account vanity domain).

  * description

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    A description of the shop.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    non-null

    A globally-unique ID.

  * legal​Notice

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop's legal notice.

  * metafield

    [Metafield](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    Token access required

    A [custom field](https://shopify.dev/docs/apps/build/custom-data), including its `namespace` and `key`, that's associated with a Shopify resource for the purposes of adding and storing additional information.

    * namespace

      [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      ### Arguments

      The container the metafield belongs to. If omitted, the app-reserved namespace will be used.

    * key

      [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

      required

      The identifier for the metafield.

    ***

  * metafields

    [\[Metafield\]!](https://shopify.dev/docs/api/storefront/latest/objects/Metafield)

    non-null Token access required

    A list of [custom fields](https://shopify.dev/docs/apps/build/custom-data) that a merchant associates with a Shopify resource.

    * identifiers

      [\[Has​Metafields​Identifier!\]!](https://shopify.dev/docs/api/storefront/latest/input-objects/HasMetafieldsIdentifier)

      required

      ### Arguments

      The list of metafields to retrieve by namespace and key.

      The input must not contain more than `250` values.

    ***

  * money​Format

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    A string representing the way currency is formatted when the currency isn’t specified.

  * name

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    non-null

    The shop’s name.

  * payment​Settings

    [Payment​Settings!](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings)

    non-null

    Settings related to payments.

  * primary​Domain

    [Domain!](https://shopify.dev/docs/api/storefront/latest/objects/Domain)

    non-null

    The primary domain of the shop’s Online Store.

  * privacy​Policy

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop’s privacy policy.

  * refund​Policy

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop’s refund policy.

  * shipping​Policy

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop’s shipping policy.

  * ships​To​Countries

    [\[Country​Code!\]!](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

    non-null

    Countries that the shop ships to.

  * shop​Pay​Installments​Pricing

    [Shop​Pay​Installments​Pricing](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsPricing)

    Token access required

    The Shop Pay Installments pricing information for the shop.

  * social​Login​Providers

    [\[Social​Login​Provider!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SocialLoginProvider)

    non-null

    The social login providers for customer accounts.

  * subscription​Policy

    [Shop​Policy​With​Default](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicyWithDefault)

    The shop’s subscription policy.

  * terms​Of​Sale

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop's terms of sale.

  * terms​Of​Service

    [Shop​Policy](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy)

    The shop’s terms of service.

***

### Examples

* ### shop reference

---



<a id="latest-queries-sitemap"></a>


## sitemap

query

Returns sitemap data for a specific resource type, enabling headless storefronts to generate XML sitemaps for search engine optimization. The query provides a page count and paginated access to resources like [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects.

When paginating through resources, the number of items per page varies from 0 to 250, and empty pages can occur without indicating the end of results. Always check [`hasNextPage`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaginatedSitemapResources#field-PaginatedSitemapResources.fields.hasNextPage) to determine if more pages are available.

### Arguments

* type

  [Sitemap​Type!](https://shopify.dev/docs/api/storefront/latest/enums/SitemapType)

  required

  The type of the resource for the sitemap.

***

### Possible returns

* Sitemap

  [Sitemap!](https://shopify.dev/docs/api/storefront/latest/objects/Sitemap)

  Contains all fields required to generate sitemaps.

  * pages​Count

    [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

    The number of sitemap's pages for a given type.

  * resources

    [Paginated​Sitemap​Resources](https://shopify.dev/docs/api/storefront/latest/objects/PaginatedSitemapResources)

    A list of sitemap's resources for a given type.

    Important Notes:

    * The number of items per page varies from 0 to 250.
    * Empty pages (0 items) may occur and do not necessarily indicate the end of results.
    * Always check `hasNextPage` to determine if more pages are available.

    - page

      [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

      required

      ### Arguments

      The page number to fetch.

    ***

***

### Examples

* ### sitemap reference

---



<a id="latest-queries-urlredirects"></a>


## url​Redirects

query

Returns a paginated list of [`UrlRedirect`](https://shopify.dev/docs/api/storefront/2026-04/objects/UrlRedirect) objects configured for the shop. Each redirect maps an old path to a target location.

### UrlRedirectConnection arguments

[UrlRedirectConnection!](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection)

* after

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come after the specified cursor.

* before

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Returns the elements that come before the specified cursor.

* first

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the first `n` elements from the list.

* last

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Returns up to the last `n` elements from the list.

* query

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Apply one or multiple filters to the query. Refer to the detailed [search syntax](https://shopify.dev/api/usage/search-syntax) for more information about using filters.

  * created\_at
  * path
  * target

* reverse

  [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  Default:false

  Reverse the order of the underlying list.

***

### Possible returns

* edges

  [\[Url​Redirect​Edge!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UrlRedirectEdge)

  non-null

  A list of edges.

* nodes

  [\[Url​Redirect!\]!](https://shopify.dev/docs/api/storefront/latest/objects/UrlRedirect)

  non-null

  A list of the nodes contained in UrlRedirectEdge.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo)

  non-null

  Information to aid in pagination.

***

### Examples

* ### urlRedirects reference

---



<a id="latest-scalars-boolean"></a>


## Boolean

scalar

Represents `true` or `false` values.

### Map

#### Fields with this scalar

* [Api​Version.supported](https://shopify.dev/docs/api/storefront/latest/objects/ApiVersion#field-ApiVersion.fields.supported)
* [Cart​Cost.subtotalAmountEstimated](https://shopify.dev/docs/api/storefront/latest/objects/CartCost#field-CartCost.fields.subtotalAmountEstimated)
* [Cart​Cost.totalAmountEstimated](https://shopify.dev/docs/api/storefront/latest/objects/CartCost#field-CartCost.fields.totalAmountEstimated)
* [Cart​Discount​Code.applicable](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountCode#field-CartDiscountCode.fields.applicable)
* [Cart​Line​Instructions.canRemove](https://shopify.dev/docs/api/storefront/latest/objects/CartLineInstructions#field-CartLineInstructions.fields.canRemove)
* [Cart​Line​Instructions.canUpdateQuantity](https://shopify.dev/docs/api/storefront/latest/objects/CartLineInstructions#field-CartLineInstructions.fields.canUpdateQuantity)
* [Cart​Selectable​Address.oneTimeUse](https://shopify.dev/docs/api/storefront/latest/objects/CartSelectableAddress#field-CartSelectableAddress.fields.oneTimeUse)
* [Cart​Selectable​Address.selected](https://shopify.dev/docs/api/storefront/latest/objects/CartSelectableAddress#field-CartSelectableAddress.fields.selected)
* [Customer.acceptsMarketing](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.acceptsMarketing)
* [Discount​Code​Application.applicable](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable)
* [Domain.sslEnabled](https://shopify.dev/docs/api/storefront/latest/objects/Domain#field-Domain.fields.sslEnabled)
* [Metafield.list](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.list)
* [Order.edited](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.edited)
* [Page​Info.hasNextPage](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo#field-PageInfo.fields.hasNextPage)
* [Page​Info.hasPreviousPage](https://shopify.dev/docs/api/storefront/latest/objects/PageInfo#field-PageInfo.fields.hasPreviousPage)
* [Paginated​Sitemap​Resources.hasNextPage](https://shopify.dev/docs/api/storefront/latest/objects/PaginatedSitemapResources#field-PaginatedSitemapResources.fields.hasNextPage)
* [Product.availableForSale](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.availableForSale)
* [Product.isGiftCard](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.isGiftCard)
* [Product.requiresSellingPlan](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.requiresSellingPlan)
* [Product​Variant.availableForSale](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.availableForSale)
* [Product​Variant.currentlyNotInStock](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.currentlyNotInStock)
* [Product​Variant.requiresComponents](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.requiresComponents)
* [Product​Variant.requiresShipping](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.requiresShipping)
* [Product​Variant.taxable](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.taxable)
* [Selling​Plan.recurringDeliveries](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.recurringDeliveries)
* [Shop​Pay​Installments​Product​Variant​Pricing.available](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsProductVariantPricing#field-ShopPayInstallmentsProductVariantPricing.fields.available)
* [Shop​Pay​Installments​Product​Variant​Pricing.eligible](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsProductVariantPricing#field-ShopPayInstallmentsProductVariantPricing.fields.eligible)
* [Shop​Pay​Payment​Request​Line​Item.requiresShipping](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.requiresShipping)
* [Store​Availability.available](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailability#field-StoreAvailability.fields.available)

#### Inputs with this scalar

* [Cart​Selectable​Address​Input.selected](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-selected)
* [Cart​Selectable​Address​Input.oneTimeUse](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-oneTimeUse)
* [Cart​Selectable​Address​Update​Input.selected](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-selected)
* [Cart​Selectable​Address​Update​Input.oneTimeUse](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-oneTimeUse)
* [Customer​Create​Input.acceptsMarketing](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerCreateInput#fields-acceptsMarketing)
* [Customer​Update​Input.acceptsMarketing](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerUpdateInput#fields-acceptsMarketing)
* [Delivery​Address​Input.oneTimeUse](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-oneTimeUse)
* [Product​Filter.available](https://shopify.dev/docs/api/storefront/latest/input-objects/ProductFilter#fields-available)
* [Shop​Pay​Payment​Request​Line​Item​Input.requiresShipping](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-requiresShipping)
* [Visitor​Consent.preferences](https://shopify.dev/docs/api/storefront/latest/input-objects/VisitorConsent#fields-preferences)
* [Visitor​Consent.analytics](https://shopify.dev/docs/api/storefront/latest/input-objects/VisitorConsent#fields-analytics)
* [Visitor​Consent.marketing](https://shopify.dev/docs/api/storefront/latest/input-objects/VisitorConsent#fields-marketing)
* [Visitor​Consent.saleOfData](https://shopify.dev/docs/api/storefront/latest/input-objects/VisitorConsent#fields-saleOfData)

#### Arguments with this scalar

* [Article.comments(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments.arguments.reverse)
* [Blog.articles(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.reverse)
* [Cart.deliveryGroups(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.reverse)
* [Cart.deliveryGroups(withCarrierRates)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.withCarrierRates)
* [Cart.lines(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines.arguments.reverse)
* [Cart​Delivery.addresses(selected)](https://shopify.dev/docs/api/storefront/latest/objects/CartDelivery#field-CartDelivery.fields.addresses.arguments.selected)
* [Cart​Delivery​Address.formatted(withName)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryAddress#field-CartDeliveryAddress.fields.formatted.arguments.withName)
* [Cart​Delivery​Address.formatted(withCompany)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryAddress#field-CartDeliveryAddress.fields.formatted.arguments.withCompany)
* [Cart​Delivery​Group.cartLines(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines.arguments.reverse)
* [Collection.products(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.reverse)
* [Customer.addresses(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses.arguments.reverse)
* [Customer.orders(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders.arguments.reverse)
* [Fulfillment.fulfillmentLineItems(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems.arguments.reverse)
* [Mailing​Address.formatted(withName)](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.formatted.arguments.withName)
* [Mailing​Address.formatted(withCompany)](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.formatted.arguments.withCompany)
* [Order.discountApplications(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.discountApplications.arguments.reverse)
* [Order.lineItems(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.lineItems.arguments.reverse)
* [Product.adjacentVariants(ignoreUnknownOptions)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.adjacentVariants.arguments.ignoreUnknownOptions)
* [Product.adjacentVariants(caseInsensitiveMatch)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.adjacentVariants.arguments.caseInsensitiveMatch)
* [Product.collections(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.collections.arguments.reverse)
* [Product.images(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images.arguments.reverse)
* [Product.media(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.media.arguments.reverse)
* [Product.selectedOrFirstAvailableVariant(ignoreUnknownOptions)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant.arguments.ignoreUnknownOptions)
* [Product.selectedOrFirstAvailableVariant(caseInsensitiveMatch)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant.arguments.caseInsensitiveMatch)
* [Product.sellingPlanGroups(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.sellingPlanGroups.arguments.reverse)
* [Product.variantBySelectedOptions(ignoreUnknownOptions)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variantBySelectedOptions.arguments.ignoreUnknownOptions)
* [Product.variantBySelectedOptions(caseInsensitiveMatch)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variantBySelectedOptions.arguments.caseInsensitiveMatch)
* [Product.variants(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants.arguments.reverse)
* [Product​Variant.sellingPlanAllocations(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanAllocations.arguments.reverse)
* [Product​Variant.storeAvailability(reverse)](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.storeAvailability.arguments.reverse)

---



<a id="latest-scalars-color"></a>


## Color

scalar

A string containing a hexadecimal representation of a color.

For example, "#6A8D48".

### Map

#### Fields with this scalar

* [Brand​Color​Group.background](https://shopify.dev/docs/api/storefront/latest/objects/BrandColorGroup#field-BrandColorGroup.fields.background)
* [Brand​Color​Group.foreground](https://shopify.dev/docs/api/storefront/latest/objects/BrandColorGroup#field-BrandColorGroup.fields.foreground)
* [Product​Option​Value​Swatch.color](https://shopify.dev/docs/api/storefront/latest/objects/ProductOptionValueSwatch#field-ProductOptionValueSwatch.fields.color)
* [Swatch.color](https://shopify.dev/docs/api/storefront/latest/objects/Swatch#field-Swatch.fields.color)

---



<a id="latest-scalars-datetime"></a>


## Date​Time

scalar

Represents an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-encoded date and time string. For example, 3:50 pm on September 7, 2019 in the time zone of UTC (Coordinated Universal Time) is represented as `"2019-09-07T15:50:00Z`".

### Map

#### Fields with this scalar

* [Article.publishedAt](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.publishedAt)
* [Cart.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.createdAt)
* [Cart.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.updatedAt)
* [Collection.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.updatedAt)
* [Company.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.createdAt)
* [Company.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.updatedAt)
* [Company​Contact.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/CompanyContact#field-CompanyContact.fields.createdAt)
* [Company​Contact.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/CompanyContact#field-CompanyContact.fields.updatedAt)
* [Company​Location.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.createdAt)
* [Company​Location.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.updatedAt)
* [Customer.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.createdAt)
* [Customer.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.updatedAt)
* [Customer​Access​Token.expiresAt](https://shopify.dev/docs/api/storefront/latest/objects/CustomerAccessToken#field-CustomerAccessToken.fields.expiresAt)
* [Metafield.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.createdAt)
* [Metafield.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.updatedAt)
* [Metaobject.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.updatedAt)
* [Order.canceledAt](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.canceledAt)
* [Order.processedAt](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.processedAt)
* [Page.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.createdAt)
* [Page.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.updatedAt)
* [Product.createdAt](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.createdAt)
* [Product.publishedAt](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.publishedAt)
* [Product.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.updatedAt)
* [Sitemap​Image.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/SitemapImage#field-SitemapImage.fields.updatedAt)
* [Sitemap​Resource.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/SitemapResource#field-SitemapResource.fields.updatedAt)
* [Sitemap​Resource​Metaobject.updatedAt](https://shopify.dev/docs/api/storefront/latest/objects/SitemapResourceMetaobject#field-SitemapResourceMetaobject.fields.updatedAt)

---



<a id="latest-scalars-decimal"></a>


## Decimal

scalar

A signed decimal number, which supports arbitrary precision and is serialized as a string.

Example values: `"29.99"`, `"29.999"`.

### Map

#### Fields with this scalar

* [Money​V2.amount](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2#field-MoneyV2.fields.amount)

#### Inputs with this scalar

* [Money​Input.amount](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput#fields-amount)

---



<a id="latest-scalars-float"></a>


## Float

scalar

Represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).

### Map

#### Fields with this scalar

* [Cart​Delivery​Address.latitude](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryAddress#field-CartDeliveryAddress.fields.latitude)
* [Cart​Delivery​Address.longitude](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryAddress#field-CartDeliveryAddress.fields.longitude)
* [Cart​Delivery​Coordinates​Preference.latitude](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryCoordinatesPreference#field-CartDeliveryCoordinatesPreference.fields.latitude)
* [Cart​Delivery​Coordinates​Preference.longitude](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryCoordinatesPreference#field-CartDeliveryCoordinatesPreference.fields.longitude)
* [Location​Address.latitude](https://shopify.dev/docs/api/storefront/latest/objects/LocationAddress#field-LocationAddress.fields.latitude)
* [Location​Address.longitude](https://shopify.dev/docs/api/storefront/latest/objects/LocationAddress#field-LocationAddress.fields.longitude)
* [Mailing​Address.latitude](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.latitude)
* [Mailing​Address.longitude](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.longitude)
* [Pricing​Percentage​Value.percentage](https://shopify.dev/docs/api/storefront/latest/objects/PricingPercentageValue#field-PricingPercentageValue.fields.percentage)
* [Product​Variant.weight](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.weight)
* [Selling​Plan​Checkout​Charge​Percentage​Value.percentage](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanCheckoutChargePercentageValue#field-SellingPlanCheckoutChargePercentageValue.fields.percentage)
* [Selling​Plan​Percentage​Price​Adjustment.adjustmentPercentage](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanPercentagePriceAdjustment#field-SellingPlanPercentagePriceAdjustment.fields.adjustmentPercentage)
* [Unit​Price​Measurement.quantityValue](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.quantityValue)

#### Inputs with this scalar

* [Cart​Delivery​Coordinates​Preference​Input.latitude](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryCoordinatesPreferenceInput#fields-latitude)
* [Cart​Delivery​Coordinates​Preference​Input.longitude](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryCoordinatesPreferenceInput#fields-longitude)
* [Geo​Coordinate​Input.latitude](https://shopify.dev/docs/api/storefront/latest/input-objects/GeoCoordinateInput#fields-latitude)
* [Geo​Coordinate​Input.longitude](https://shopify.dev/docs/api/storefront/latest/input-objects/GeoCoordinateInput#fields-longitude)
* [Price​Range​Filter.min](https://shopify.dev/docs/api/storefront/latest/input-objects/PriceRangeFilter#fields-min)
* [Price​Range​Filter.max](https://shopify.dev/docs/api/storefront/latest/input-objects/PriceRangeFilter#fields-max)

---



<a id="latest-scalars-html"></a>


## HTML

scalar

A string containing HTML code. Refer to the [HTML spec](https://html.spec.whatwg.org/#elements-3) for a complete list of HTML elements.

Example value: `"<p>Grey cotton knit sweater.</p>"`

### Map

#### Fields with this scalar

* [Article.contentHtml](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.contentHtml)
* [Article.excerptHtml](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.excerptHtml)
* [Collection.descriptionHtml](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.descriptionHtml)
* [Comment.contentHtml](https://shopify.dev/docs/api/storefront/latest/objects/Comment#field-Comment.fields.contentHtml)
* [Page.body](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.body)
* [Product.descriptionHtml](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.descriptionHtml)

---



<a id="latest-scalars-id"></a>


## ID

scalar

Represents a unique identifier, often used to refetch an object. The ID type appears in a JSON response as a String, but it is not intended to be human-readable.

Example value: `"gid://shopify/Product/10079785100"`

### Map

#### Fields with this scalar

* [Applied​Gift​Card.id](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.id)
* [Article.id](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.id)
* [Blog.id](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.id)
* [Cart.id](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.id)
* [Cart​Delivery​Group.id](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.id)
* [Cart​Line.id](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.id)
* [Cart​Selectable​Address.id](https://shopify.dev/docs/api/storefront/latest/objects/CartSelectableAddress#field-CartSelectableAddress.fields.id)
* [Cart​Warning.target](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning#field-CartWarning.fields.target)
* [Collection.id](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.id)
* [Comment.id](https://shopify.dev/docs/api/storefront/latest/objects/Comment#field-Comment.fields.id)
* [Company.id](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.id)
* [Company​Contact.id](https://shopify.dev/docs/api/storefront/latest/objects/CompanyContact#field-CompanyContact.fields.id)
* [Company​Location.id](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.id)
* [Componentizable​Cart​Line.id](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.id)
* [Customer.id](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.id)
* [External​Video.id](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.id)
* [Generic​File.id](https://shopify.dev/docs/api/storefront/latest/objects/GenericFile#field-GenericFile.fields.id)
* [Image.id](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.id)
* [Location.id](https://shopify.dev/docs/api/storefront/latest/objects/Location#field-Location.fields.id)
* [Mailing​Address.id](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.id)
* [Market.id](https://shopify.dev/docs/api/storefront/latest/objects/Market#field-Market.fields.id)
* [Media​Image.id](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.id)
* [Menu.id](https://shopify.dev/docs/api/storefront/latest/objects/Menu#field-Menu.fields.id)
* [Menu​Item.id](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.id)
* [Menu​Item.resourceId](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.resourceId)
* [Metafield.id](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.id)
* [Metaobject.id](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.id)
* [Model3d.id](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.id)
* [Order.id](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.id)
* [Page.id](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.id)

#### Inputs with this scalar

* [Buyer​Input.companyLocationId](https://shopify.dev/docs/api/storefront/latest/input-objects/BuyerInput#fields-companyLocationId)
* [Cart​Address​Input.copyFromCustomerAddressId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartAddressInput#fields-copyFromCustomerAddressId)
* [Cart​Buyer​Identity​Input.companyLocationId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-companyLocationId)
* [Cart​Line​Input.merchandiseId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-merchandiseId)
* [Cart​Line​Input.sellingPlanId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-sellingPlanId)
* [Cart​Line​Parent​Input.lineId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineParentInput#fields-lineId)
* [Cart​Line​Parent​Input.merchandiseId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineParentInput#fields-merchandiseId)
* [Cart​Line​Update​Input.id](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-id)
* [Cart​Line​Update​Input.merchandiseId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-merchandiseId)
* [Cart​Line​Update​Input.sellingPlanId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-sellingPlanId)
* [Cart​Metafield​Delete​Input.ownerId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldDeleteInput#fields-ownerId)
* [Cart​Metafields​Set​Input.ownerId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput#fields-ownerId)
* [Cart​Selectable​Address​Update​Input.id](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-id)
* [Cart​Selected​Delivery​Option​Input.deliveryGroupId](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectedDeliveryOptionInput#fields-deliveryGroupId)
* [Delivery​Address​Input.customerAddressId](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-customerAddressId)

#### Arguments with this scalar

* [Query​Root.article(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.article.arguments.id)
* [Query​Root.blog(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.blog.arguments.id)
* [Query​Root.cart(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.cart.arguments.id)
* [Query​Root.collection(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.collection.arguments.id)
* [Query​Root.metaobject(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.metaobject.arguments.id)
* [Query​Root.node(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.node.arguments.id)
* [Query​Root.nodes(ids)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.nodes.arguments.ids)
* [Query​Root.page(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.page.arguments.id)
* [Query​Root.product(id)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.product.arguments.id)
* [Query​Root.productRecommendations(productId)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.productRecommendations.arguments.productId)
* [cart​Attributes​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate#arguments-cartId)
* [cart​Buyer​Identity​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate#arguments-cartId)
* [cart​Delivery​Addresses​Add.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd#arguments-cartId)
* [cart​Delivery​Addresses​Remove.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove#arguments-cartId)
* [cart​Delivery​Addresses​Remove.addressIds](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove#arguments-addressIds)
* [cart​Delivery​Addresses​Replace.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace#arguments-cartId)
* [cart​Delivery​Addresses​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate#arguments-cartId)
* [cart​Discount​Codes​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate#arguments-cartId)
* [cart​Gift​Card​Codes​Add.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd#arguments-cartId)
* [cart​Gift​Card​Codes​Remove.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove#arguments-cartId)
* [cart​Gift​Card​Codes​Remove.appliedGiftCardIds](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove#arguments-appliedGiftCardIds)
* [cart​Gift​Card​Codes​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate#arguments-cartId)
* [cart​Lines​Add.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd#arguments-cartId)
* [cart​Lines​Remove.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove#arguments-cartId)
* [cart​Lines​Remove.lineIds](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove#arguments-lineIds)
* [cart​Lines​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate#arguments-cartId)
* [cart​Note​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate#arguments-cartId)
* [cart​Selected​Delivery​Options​Update.cartId](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate#arguments-cartId)
* [customer​Activate.id](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate#arguments-id)
* [customer​Address​Delete.id](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressDelete#arguments-id)

---



<a id="latest-scalars-iso8601datetime"></a>


## ISO8601Date​Time

scalar

An ISO 8601-encoded datetime

### Map

#### Fields with this scalar

* [Shop​Pay​Payment​Request​Delivery​Method.maxDeliveryDate](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDeliveryMethod#field-ShopPayPaymentRequestDeliveryMethod.fields.maxDeliveryDate)
* [Shop​Pay​Payment​Request​Delivery​Method.minDeliveryDate](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDeliveryMethod#field-ShopPayPaymentRequestDeliveryMethod.fields.minDeliveryDate)

#### Inputs with this scalar

* [Shop​Pay​Payment​Request​Delivery​Method​Input.minDeliveryDate](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDeliveryMethodInput#fields-minDeliveryDate)
* [Shop​Pay​Payment​Request​Delivery​Method​Input.maxDeliveryDate](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestDeliveryMethodInput#fields-maxDeliveryDate)

---



<a id="latest-scalars-int"></a>


## Int

scalar

Represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.

### Map

#### Fields and connections with this scalar

* [Cart.totalQuantity](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.totalQuantity)
* [Cart​Line.quantity](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.quantity)
* [Componentizable​Cart​Line.quantity](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.quantity)
* [Count.count](https://shopify.dev/docs/api/storefront/latest/objects/Count#field-Count.fields.count)
* [Filter​Value.count](https://shopify.dev/docs/api/storefront/latest/objects/FilterValue#field-FilterValue.fields.count)
* [Fulfillment​Line​Item.quantity](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.quantity)
* [Generic​File.originalFileSize](https://shopify.dev/docs/api/storefront/latest/objects/GenericFile#field-GenericFile.fields.originalFileSize)
* [Image.height](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.height)
* [Image.width](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.width)
* [Menu.itemsCount](https://shopify.dev/docs/api/storefront/latest/objects/Menu#field-Menu.fields.itemsCount)
* [Metafields​Set​User​Error.elementIndex](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.elementIndex)
* [Model3d​Source.filesize](https://shopify.dev/docs/api/storefront/latest/objects/Model3dSource#field-Model3dSource.fields.filesize)
* [Order.orderNumber](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.orderNumber)
* [Order​Line​Item.currentQuantity](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem#field-OrderLineItem.fields.currentQuantity)
* [Order​Line​Item.quantity](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem#field-OrderLineItem.fields.quantity)
* [Product.totalInventory](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.totalInventory)
* [Product​Variant.quantityAvailable](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.quantityAvailable)
* [Product​Variant​Component.quantity](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantComponent#field-ProductVariantComponent.fields.quantity)
* [Quantity​Price​Break.minimumQuantity](https://shopify.dev/docs/api/storefront/latest/objects/QuantityPriceBreak#field-QuantityPriceBreak.fields.minimumQuantity)
* [Quantity​Rule.increment](https://shopify.dev/docs/api/storefront/latest/objects/QuantityRule#field-QuantityRule.fields.increment)
* [Quantity​Rule.maximum](https://shopify.dev/docs/api/storefront/latest/objects/QuantityRule#field-QuantityRule.fields.maximum)
* [Quantity​Rule.minimum](https://shopify.dev/docs/api/storefront/latest/objects/QuantityRule#field-QuantityRule.fields.minimum)
* [Selling​Plan​Price​Adjustment.orderCount](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanPriceAdjustment#field-SellingPlanPriceAdjustment.fields.orderCount)
* [Selling​Plan​Recurring​Billing​Policy.intervalCount](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringBillingPolicy#field-SellingPlanRecurringBillingPolicy.fields.intervalCount)
* [Selling​Plan​Recurring​Delivery​Policy.intervalCount](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringDeliveryPolicy#field-SellingPlanRecurringDeliveryPolicy.fields.intervalCount)
* [Shop​Pay​Installments​Financing​Plan​Term.apr](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.apr)
* [Shop​Pay​Payment​Request​Line​Item.quantity](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.quantity)
* [Store​Availability.quantityAvailable](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailability#field-StoreAvailability.fields.quantityAvailable)
* [Unit​Price​Measurement.referenceValue](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceValue)
* [Video​Source.height](https://shopify.dev/docs/api/storefront/latest/objects/VideoSource#field-VideoSource.fields.height)

#### Inputs with this scalar

* [Cart​Line​Input.quantity](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineInput#fields-quantity)
* [Cart​Line​Update​Input.quantity](https://shopify.dev/docs/api/storefront/latest/input-objects/CartLineUpdateInput#fields-quantity)
* [Image​Transform​Input.maxWidth](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-maxWidth)
* [Image​Transform​Input.maxHeight](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-maxHeight)
* [Image​Transform​Input.scale](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-scale)
* [Shop​Pay​Payment​Request​Line​Item​Input.quantity](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestLineItemInput#fields-quantity)

#### Arguments with this scalar

* [Article.comments(first)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments.arguments.first)
* [Article.comments(last)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments.arguments.last)
* [Article.content(truncateAt)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.content.arguments.truncateAt)
* [Article.excerpt(truncateAt)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.excerpt.arguments.truncateAt)
* [Blog.articles(first)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.first)
* [Blog.articles(last)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.last)
* [Cart.deliveryGroups(first)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.first)
* [Cart.deliveryGroups(last)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.last)
* [Cart.lines(first)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines.arguments.first)
* [Cart.lines(last)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines.arguments.last)
* [Cart​Delivery​Group.cartLines(first)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines.arguments.first)
* [Cart​Delivery​Group.cartLines(last)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines.arguments.last)
* [Collection.description(truncateAt)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.description.arguments.truncateAt)
* [Collection.products(first)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.first)
* [Collection.products(last)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.last)
* [Comment.content(truncateAt)](https://shopify.dev/docs/api/storefront/latest/objects/Comment#field-Comment.fields.content.arguments.truncateAt)
* [Customer.addresses(first)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses.arguments.first)
* [Customer.addresses(last)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses.arguments.last)
* [Customer.orders(first)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders.arguments.first)
* [Customer.orders(last)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders.arguments.last)
* [Fulfillment.fulfillmentLineItems(first)](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems.arguments.first)
* [Fulfillment.fulfillmentLineItems(last)](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems.arguments.last)
* [Fulfillment.trackingInfo(first)](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.trackingInfo.arguments.first)
* [Image.transformedSrc(maxWidth)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.maxWidth)
* [Image.transformedSrc(maxHeight)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.maxHeight)
* [Image.transformedSrc(scale)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.scale)
* [Metafield.references(first)](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.references.arguments.first)
* [Metafield.references(last)](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.references.arguments.last)
* [Metaobject​Field.references(first)](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.references.arguments.first)
* [Metaobject​Field.references(last)](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.references.arguments.last)

---



<a id="latest-scalars-json"></a>


## JSON

scalar

A [JSON](https://www.json.org/json-en.html) object.

Example value: `{ "product": { "id": "gid://shopify/Product/1346443542550", "title": "White T-shirt", "options": [{ "name": "Size", "values": ["M", "L"] }] } }`

### Map

#### Fields with this scalar

* [Filter​Value.input](https://shopify.dev/docs/api/storefront/latest/objects/FilterValue#field-FilterValue.fields.input)
* [Media​Presentation.asJson](https://shopify.dev/docs/api/storefront/latest/objects/MediaPresentation#field-MediaPresentation.fields.asJson)

---



<a id="latest-scalars-string"></a>


## String

scalar

Represents textual data as UTF-8 character sequences. This type is most often used by GraphQL to represent free-form human-readable text.

### Map

#### Fields and connections with this scalar

* [Api​Version.displayName](https://shopify.dev/docs/api/storefront/latest/objects/ApiVersion#field-ApiVersion.fields.displayName)
* [Api​Version.handle](https://shopify.dev/docs/api/storefront/latest/objects/ApiVersion#field-ApiVersion.fields.handle)
* [Applied​Gift​Card.lastCharacters](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.lastCharacters)
* [Article.content](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.content)
* [Article.excerpt](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.excerpt)
* [Article.handle](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.handle)
* [Article.tags](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.tags)
* [Article.title](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.title)
* [Article.trackingParameters](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.trackingParameters)
* [Article​Author.bio](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor#field-ArticleAuthor.fields.bio)
* [Article​Author.email](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor#field-ArticleAuthor.fields.email)
* [Article​Author.firstName](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor#field-ArticleAuthor.fields.firstName)
* [Article​Author.lastName](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor#field-ArticleAuthor.fields.lastName)
* [Article​Author.name](https://shopify.dev/docs/api/storefront/latest/objects/ArticleAuthor#field-ArticleAuthor.fields.name)
* [Article​Edge.cursor](https://shopify.dev/docs/api/storefront/latest/objects/ArticleEdge#field-ArticleEdge.fields.cursor)
* [Attribute.key](https://shopify.dev/docs/api/storefront/latest/objects/Attribute#field-Attribute.fields.key)
* [Attribute.value](https://shopify.dev/docs/api/storefront/latest/objects/Attribute#field-Attribute.fields.value)
* [Automatic​Discount​Application.title](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.title)
* [Base​Cart​Line​Edge.cursor](https://shopify.dev/docs/api/storefront/latest/objects/BaseCartLineEdge#field-BaseCartLineEdge.fields.cursor)
* [Blog.handle](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.handle)
* [Blog.title](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.title)
* [Blog​Edge.cursor](https://shopify.dev/docs/api/storefront/latest/objects/BlogEdge#field-BlogEdge.fields.cursor)
* [Brand.shortDescription](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.shortDescription)
* [Brand.slogan](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.slogan)
* [Cart.note](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.note)
* [Cart​Automatic​Discount​Allocation.title](https://shopify.dev/docs/api/storefront/latest/objects/CartAutomaticDiscountAllocation#field-CartAutomaticDiscountAllocation.fields.title)
* [Cart​Buyer​Identity.email](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.email)
* [Cart​Buyer​Identity.phone](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.phone)
* [Cart​Code​Discount​Allocation.code](https://shopify.dev/docs/api/storefront/latest/objects/CartCodeDiscountAllocation#field-CartCodeDiscountAllocation.fields.code)
* [Cart​Custom​Discount​Allocation.title](https://shopify.dev/docs/api/storefront/latest/objects/CartCustomDiscountAllocation#field-CartCustomDiscountAllocation.fields.title)

#### Inputs with this scalar

* [Attribute​Input.key](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput#fields-key)
* [Attribute​Input.value](https://shopify.dev/docs/api/storefront/latest/input-objects/AttributeInput#fields-value)
* [Buyer​Input.customerAccessToken](https://shopify.dev/docs/api/storefront/latest/input-objects/BuyerInput#fields-customerAccessToken)
* [Cart​Buyer​Identity​Input.email](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-email)
* [Cart​Buyer​Identity​Input.phone](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-phone)
* [Cart​Buyer​Identity​Input.customerAccessToken](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-customerAccessToken)
* [Cart​Delivery​Address​Input.address1](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-address1)
* [Cart​Delivery​Address​Input.address2](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-address2)
* [Cart​Delivery​Address​Input.city](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-city)
* [Cart​Delivery​Address​Input.company](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-company)
* [Cart​Delivery​Address​Input.firstName](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-firstName)
* [Cart​Delivery​Address​Input.lastName](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-lastName)
* [Cart​Delivery​Address​Input.phone](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-phone)
* [Cart​Delivery​Address​Input.provinceCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-provinceCode)
* [Cart​Delivery​Address​Input.zip](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-zip)
* [Cart​Delivery​Preference​Input.pickupHandle](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput#fields-pickupHandle)
* [Cart​Input.discountCodes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-discountCodes)
* [Cart​Input.giftCardCodes](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-giftCardCodes)
* [Cart​Input.note](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput#fields-note)
* [Cart​Input​Metafield​Input.key](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInputMetafieldInput#fields-key)
* [Cart​Input​Metafield​Input.value](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInputMetafieldInput#fields-value)
* [Cart​Input​Metafield​Input.type](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInputMetafieldInput#fields-type)
* [Cart​Metafield​Delete​Input.key](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldDeleteInput#fields-key)
* [Cart​Metafields​Set​Input.key](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput#fields-key)
* [Cart​Metafields​Set​Input.value](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput#fields-value)
* [Cart​Metafields​Set​Input.type](https://shopify.dev/docs/api/storefront/latest/input-objects/CartMetafieldsSetInput#fields-type)
* [Cart​Preferences​Input.wallet](https://shopify.dev/docs/api/storefront/latest/input-objects/CartPreferencesInput#fields-wallet)
* [Cart​Selected​Delivery​Option​Input.deliveryOptionHandle](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectedDeliveryOptionInput#fields-deliveryOptionHandle)
* [Category​Filter.id](https://shopify.dev/docs/api/storefront/latest/input-objects/CategoryFilter#fields-id)
* [Customer​Access​Token​Create​Input.email](https://shopify.dev/docs/api/storefront/latest/input-objects/CustomerAccessTokenCreateInput#fields-email)

#### Arguments with this scalar

* [Article.comments(after)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments.arguments.after)
* [Article.comments(before)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments.arguments.before)
* [Article.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.metafield.arguments.namespace)
* [Article.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.metafield.arguments.key)
* [Base​Cart​Line.attribute(key)](https://shopify.dev/docs/api/storefront/latest/objects/BaseCartLine#field-BaseCartLine.fields.attribute.arguments.key)
* [Blog.articleByHandle(handle)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articleByHandle.arguments.handle)
* [Blog.articles(after)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.after)
* [Blog.articles(before)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.before)
* [Blog.articles(query)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.query)
* [Blog.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.metafield.arguments.namespace)
* [Blog.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.metafield.arguments.key)
* [Cart.attribute(key)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.attribute.arguments.key)
* [Cart.deliveryGroups(after)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.after)
* [Cart.deliveryGroups(before)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups.arguments.before)
* [Cart.lines(after)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines.arguments.after)
* [Cart.lines(before)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.lines.arguments.before)
* [Cart.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.metafield.arguments.namespace)
* [Cart.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.metafield.arguments.key)
* [Cart​Delivery​Group.cartLines(after)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines.arguments.after)
* [Cart​Delivery​Group.cartLines(before)](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.cartLines.arguments.before)
* [Cart​Line.attribute(key)](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.attribute.arguments.key)
* [Collection.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.metafield.arguments.namespace)
* [Collection.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.metafield.arguments.key)
* [Collection.products(after)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.after)
* [Collection.products(before)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.before)
* [Company.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.metafield.arguments.namespace)
* [Company.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.metafield.arguments.key)
* [Company​Location.metafield(namespace)](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafield.arguments.namespace)
* [Company​Location.metafield(key)](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafield.arguments.key)
* [Componentizable​Cart​Line.attribute(key)](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.attribute.arguments.key)

---



<a id="latest-scalars-url"></a>


## URL

scalar

Represents an [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986) and [RFC 3987](https://datatracker.ietf.org/doc/html/rfc3987)-compliant URI string.

For example, `"https://example.myshopify.com"` is a valid URL. It includes a scheme (`https`) and a host (`example.myshopify.com`).

### Map

#### Fields with this scalar

* [Article.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.onlineStoreUrl)
* [Blog.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.onlineStoreUrl)
* [Cart.checkoutUrl](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.checkoutUrl)
* [Collection.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.onlineStoreUrl)
* [Domain.url](https://shopify.dev/docs/api/storefront/latest/objects/Domain#field-Domain.fields.url)
* [External​Video.embedUrl](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.embedUrl)
* [External​Video.originUrl](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.originUrl)
* [Fulfillment​Tracking​Info.url](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentTrackingInfo#field-FulfillmentTrackingInfo.fields.url)
* [Generic​File.url](https://shopify.dev/docs/api/storefront/latest/objects/GenericFile#field-GenericFile.fields.url)
* [Image.url](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.url)
* [Menu​Item.url](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.url)
* [Metaobject.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.onlineStoreUrl)
* [Order.customerUrl](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.customerUrl)
* [Order.statusUrl](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.statusUrl)
* [Page.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.onlineStoreUrl)
* [Payment​Settings.cardVaultUrl](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.cardVaultUrl)
* [Product.onlineStoreUrl](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.onlineStoreUrl)
* [Shop​Pay​Payment​Request​Session.checkoutUrl](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestSession#field-ShopPayPaymentRequestSession.fields.checkoutUrl)
* [Shop​Policy.url](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicy#field-ShopPolicy.fields.url)
* [Shop​Policy​With​Default.url](https://shopify.dev/docs/api/storefront/latest/objects/ShopPolicyWithDefault#field-ShopPolicyWithDefault.fields.url)

#### Arguments with this scalar

* [customer​Activate​By​Url.activationUrl](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl#arguments-activationUrl)
* [customer​Reset​By​Url.resetUrl](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl#arguments-resetUrl)

---



<a id="latest-scalars-unsignedint64"></a>


## Unsigned​Int64

scalar

An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.

Example value: `"50"`.

### Map

#### Fields and connections with this scalar

* [Customer.numberOfOrders](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.numberOfOrders)
* [Collection​Connection.totalCount](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-totalCount)
* [Order​Connection.totalCount](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-totalCount)

---



<a id="latest-unions-cartaddress"></a>


## Cart​Address

union

A delivery address of the buyer that is interacting with the cart.

### Fields with this union

* [Cart​Selectable​Address.address](https://shopify.dev/docs/api/storefront/latest/objects/CartSelectableAddress#field-CartSelectableAddress.fields.address)

  OBJECT

  A selectable delivery address for a cart.

***

```graphql
union CartAddress = CartDeliveryAddress
```

---



<a id="latest-unions-deliveryaddress"></a>


## Delivery​Address

union

A delivery address of the buyer that is interacting with the cart.

### Fields with this union

* [Cart​Buyer​Identity.deliveryAddressPreferences](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.deliveryAddressPreferences)

  OBJECT

  Deprecated

***

```graphql
union DeliveryAddress = MailingAddress
```

---



<a id="latest-unions-menuitemresource"></a>


## Menu​Item​Resource

union

The list of possible resources a `MenuItem` can reference.

### Fields with this union

* [Menu​Item.resource](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.resource)

  OBJECT

  A navigation link within a [`Menu`](https://shopify.dev/docs/api/storefront/current/objects/Menu). Each item has a title, URL, and can link to store resources like [products](https://shopify.dev/docs/api/storefront/current/objects/Product), [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), [pages](https://shopify.dev/docs/api/storefront/current/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/current/objects/Blog), or external URLs.

  Menu items support nested hierarchies through the [`items`](https://shopify.dev/docs/api/storefront/current/objects/MenuItem#field-MenuItem.fields.items) field, enabling dropdown or multi-level navigation structures. The [`tags`](https://shopify.dev/docs/api/storefront/current/objects/MenuItem#field-MenuItem.fields.tags) field filters results when the item links to a collection specifically.

***

```graphql
union MenuItemResource = Article | Blog | Collection | Metaobject | Page | Product | ShopPolicy
```

---



<a id="latest-unions-merchandise"></a>


## Merchandise

union

A [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) that a buyer intends to purchase at checkout.

### Fields with this union

* [Base​Cart​Line.merchandise](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-merchandise)

  INTERFACE

  Defines the shared fields for items in a shopping cart. Implemented by [`CartLine`](https://shopify.dev/docs/api/storefront/current/objects/CartLine) for individual merchandise and [`ComponentizableCartLine`](https://shopify.dev/docs/api/storefront/current/objects/ComponentizableCartLine) for grouped merchandise like bundles.

  Each implementation includes the merchandise being purchased, quantity, cost breakdown, applied discounts, custom attributes, and any associated [`SellingPlan`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlan).

* [Cart​Line.merchandise](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.merchandise)

  OBJECT

  An item in a customer's [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart) representing a product variant they intend to purchase. Each cart line tracks the merchandise, quantity, cost breakdown, and any applied discounts.

  Cart lines can include custom attributes for additional information like gift wrapping requests, and can be associated with a [`SellingPlanAllocation`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) for purchase options like subscriptions, pre-orders, or try-before-you-buy. The [`instructions`](https://shopify.dev/docs/api/storefront/current/objects/CartLine#field-CartLine.fields.instructions) field indicates whether the line can be removed or have its quantity updated.

* [Componentizable​Cart​Line.merchandise](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.merchandise)

  OBJECT

  Represents information about the grouped merchandise in the cart.

***

```graphql
union Merchandise = ProductVariant
```

---



<a id="latest-unions-metafieldparentresource"></a>


## Metafield​Parent​Resource

union

The Shopify resource that owns a metafield. Returned by the `Metafield` object's [`parentResource`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.parentResource) field, enabling traversal from a metafield back to the resource it's attached to.

### Fields with this union

* [Metafield.parentResource](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.parentResource)

  OBJECT

  [Custom metadata](https://shopify.dev/docs/apps/build/metafields) attached to a Shopify resource such as a [`Product`](https://shopify.dev/docs/api/storefront/current/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/current/objects/Collection), or [`Customer`](https://shopify.dev/docs/api/storefront/current/objects/Customer). Each metafield is identified by a namespace and key, and stores a value with an associated type.

  Values are always stored as strings, but the [`type`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.type) field indicates how to interpret the data. When a metafield's type is a resource reference, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.reference) or [`references`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.references) fields to retrieve the linked objects. Access metafields on any resource that implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface.

***

```graphql
union MetafieldParentResource = Article | Blog | Cart | Collection | Company | CompanyLocation | Customer | Location | Market | Order | Page | Product | ProductVariant | SellingPlan | Shop
```

---



<a id="latest-unions-metafieldreference"></a>


## Metafield​Reference

union

The resource that a metafield points to when its type is a resource reference. Metafields can store references to other Shopify resources, and this union provides access to the actual referenced object.

Returned by the `Metafield` object's [`reference`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.reference) field for single references or the [`references`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.references) field for lists.

### Fields with this union

* [Metafield.reference](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.reference)

  OBJECT

  [Custom metadata](https://shopify.dev/docs/apps/build/metafields) attached to a Shopify resource such as a [`Product`](https://shopify.dev/docs/api/storefront/current/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/current/objects/Collection), or [`Customer`](https://shopify.dev/docs/api/storefront/current/objects/Customer). Each metafield is identified by a namespace and key, and stores a value with an associated type.

  Values are always stored as strings, but the [`type`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.type) field indicates how to interpret the data. When a metafield's type is a resource reference, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.reference) or [`references`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.references) fields to retrieve the linked objects. Access metafields on any resource that implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface.

* [Metafield.references](https://shopify.dev/docs/api/storefront/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  [Custom metadata](https://shopify.dev/docs/apps/build/metafields) attached to a Shopify resource such as a [`Product`](https://shopify.dev/docs/api/storefront/current/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/current/objects/Collection), or [`Customer`](https://shopify.dev/docs/api/storefront/current/objects/Customer). Each metafield is identified by a namespace and key, and stores a value with an associated type.

  Values are always stored as strings, but the [`type`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.type) field indicates how to interpret the data. When a metafield's type is a resource reference, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.reference) or [`references`](https://shopify.dev/docs/api/storefront/current/objects/Metafield#field-Metafield.fields.references) fields to retrieve the linked objects. Access metafields on any resource that implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface.

* [Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple MetafieldReferences.

* [Metafield​Reference​Edge.node](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldReferenceEdge#field-MetafieldReferenceEdge.fields.node)

  OBJECT

  An auto-generated type which holds one MetafieldReference and a cursor during pagination.

* [Metaobject​Field.reference](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.reference)

  OBJECT

  The value of a field within a [`Metaobject`](https://shopify.dev/docs/api/storefront/current/objects/Metaobject). For fields that reference other resources, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.reference) field for single references or [`references`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.references) for lists.

* [Metaobject​Field.references](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

  OBJECT

  The value of a field within a [`Metaobject`](https://shopify.dev/docs/api/storefront/current/objects/Metaobject). For fields that reference other resources, use the [`reference`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.reference) field for single references or [`references`](https://shopify.dev/docs/api/storefront/current/objects/MetaobjectField#field-MetaobjectField.fields.references) for lists.

***

```graphql
union MetafieldReference = Article | Collection | GenericFile | MediaImage | Metaobject | Model3d | Page | Product | ProductVariant | Video
```

---



<a id="latest-unions-pricingvalue"></a>


## Pricing​Value

union

The price value (fixed or percentage) for a discount application.

### Fields with this union

* [Automatic​Discount​Application.value](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.value)

  OBJECT

  An [automatic discount](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) applied to a cart or checkout without requiring a discount code. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface.

  Includes the discount's title, value, and allocation details that specify how the discount amount distributes across entitled line items or shipping lines.

* [Cart​Discount​Application.value](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.value)

  OBJECT

  Captures the intent of a discount source at the time it was applied to a cart. This includes the discount value, how it's allocated across entitled items, and which line types it targets.

  The actual discounted amounts on specific cart lines are represented by [`CartDiscountAllocation`](https://shopify.dev/docs/api/storefront/current/interfaces/CartDiscountAllocation) objects, which reference this application.

* [Discount​Application.value](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication#fields-value)

  INTERFACE

  Captures the intent of a discount at the time it was applied. Each implementation represents a different discount source, such as [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), and manual discounts.

  The actual discounted amount on a line item or shipping line is represented by the [`DiscountAllocation`](https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation) object, which references the discount application it originated from.

* [Discount​Code​Application.value](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.value)

  OBJECT

  Records the configuration and intent of a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes) when a customer applies it. This includes the code string, allocation method, target type, and discount value at the time of application. The [`applicable`](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable) field indicates whether the code was successfully applied.

  ***

  **Note:** To see the actual amounts discounted on specific line items or shipping lines, use the \<a href="https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Allocation\</span>\</code>\</a> object instead.

  ***

* [Manual​Discount​Application.value](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.value)

  OBJECT

  A discount created manually by a merchant, as opposed to [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) or [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes). Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and includes a title, optional description, and the discount value as either a fixed amount or percentage.

* [Script​Discount​Application.value](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.value)

  OBJECT

  A discount application created by a Shopify Script. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and captures the discount's value, allocation method, and targeting rules at the time the script applied it.

***

```graphql
union PricingValue = MoneyV2 | PricingPercentageValue
```

---



<a id="latest-unions-searchresultitem"></a>


## Search​Result​Item

union

A search result that matches the search query.

### Fields with this union

* [Search​Result​Item​Connection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-nodes)

  CONNECTION

  An auto-generated type for paginating through multiple SearchResultItems.

* [Search​Result​Item​Edge.node](https://shopify.dev/docs/api/storefront/latest/objects/SearchResultItemEdge#field-SearchResultItemEdge.fields.node)

  OBJECT

  An auto-generated type which holds one SearchResultItem and a cursor during pagination.

***

```graphql
union SearchResultItem = Article | Page | Product
```

---



<a id="latest-unions-sellingplanbillingpolicy"></a>


## Selling​Plan​Billing​Policy

union

The selling plan billing policy.

### Fields with this union

* [Selling​Plan.billingPolicy](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.billingPolicy)

  OBJECT

  Represents deferred or recurring purchase options for [products](https://shopify.dev/docs/api/storefront/current/objects/Product) and [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), such as subscriptions, pre-orders, or try-before-you-buy. Each selling plan belongs to a [`SellingPlanGroup`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) and defines billing, pricing, inventory, and delivery policies.

***

```graphql
union SellingPlanBillingPolicy = SellingPlanRecurringBillingPolicy
```

---



<a id="latest-unions-sellingplancheckoutchargevalue"></a>


## Selling​Plan​Checkout​Charge​Value

union

Requires `unauthenticated_read_selling_plans` access scope.

The portion of the price to be charged at checkout.

### Fields with this union

* [Selling​Plan​Checkout​Charge.value](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanCheckoutCharge#field-SellingPlanCheckoutCharge.fields.value)

  OBJECT

  The initial payment due for the purchase.

***

```graphql
union SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue
```

---



<a id="latest-unions-sellingplandeliverypolicy"></a>


## Selling​Plan​Delivery​Policy

union

The selling plan delivery policy.

### Fields with this union

* [Selling​Plan.deliveryPolicy](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.deliveryPolicy)

  OBJECT

  Represents deferred or recurring purchase options for [products](https://shopify.dev/docs/api/storefront/current/objects/Product) and [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), such as subscriptions, pre-orders, or try-before-you-buy. Each selling plan belongs to a [`SellingPlanGroup`](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) and defines billing, pricing, inventory, and delivery policies.

***

```graphql
union SellingPlanDeliveryPolicy = SellingPlanRecurringDeliveryPolicy
```

---



<a id="latest-unions-sellingplanpriceadjustmentvalue"></a>


## Selling​Plan​Price​Adjustment​Value

union

Requires `unauthenticated_read_selling_plans` access scope.

Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments.

### Fields with this union

* [Selling​Plan​Price​Adjustment.adjustmentValue](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanPriceAdjustment#field-SellingPlanPriceAdjustment.fields.adjustmentValue)

  OBJECT

  Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.

***

```graphql
union SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment
```

---
