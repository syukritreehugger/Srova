# Shopify Storefront – objects Reference (Indonesian / English)

> Referensi lengkap **Storefront – objects** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/storefront.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/storefront` |
| Total halaman | **150** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `objects` (split file)


## Daftar Isi (Table of Contents)

- [latest / objects / ApiVersion](#latest-objects-apiversion)
- [latest / objects / AppliedGiftCard](#latest-objects-appliedgiftcard)
- [latest / objects / Article](#latest-objects-article)
- [latest / objects / ArticleAuthor](#latest-objects-articleauthor)
- [latest / objects / Attribute](#latest-objects-attribute)
- [latest / objects / AutomaticDiscountApplication](#latest-objects-automaticdiscountapplication)
- [latest / objects / Blog](#latest-objects-blog)
- [latest / objects / Brand](#latest-objects-brand)
- [latest / objects / BrandColorGroup](#latest-objects-brandcolorgroup)
- [latest / objects / BrandColors](#latest-objects-brandcolors)
- [latest / objects / Cart](#latest-objects-cart)
- [latest / objects / CartAutomaticDiscountAllocation](#latest-objects-cartautomaticdiscountallocation)
- [latest / objects / CartBuyerIdentity](#latest-objects-cartbuyeridentity)
- [latest / objects / CartCodeDiscountAllocation](#latest-objects-cartcodediscountallocation)
- [latest / objects / CartCost](#latest-objects-cartcost)
- [latest / objects / CartCustomDiscountAllocation](#latest-objects-cartcustomdiscountallocation)
- [latest / objects / CartDelivery](#latest-objects-cartdelivery)
- [latest / objects / CartDeliveryAddress](#latest-objects-cartdeliveryaddress)
- [latest / objects / CartDeliveryCoordinatesPreference](#latest-objects-cartdeliverycoordinatespreference)
- [latest / objects / CartDeliveryGroup](#latest-objects-cartdeliverygroup)
- [latest / objects / CartDeliveryOption](#latest-objects-cartdeliveryoption)
- [latest / objects / CartDeliveryPreference](#latest-objects-cartdeliverypreference)
- [latest / objects / CartDiscountApplication](#latest-objects-cartdiscountapplication)
- [latest / objects / CartDiscountCode](#latest-objects-cartdiscountcode)
- [latest / objects / CartEstimatedCost](#latest-objects-cartestimatedcost)
- [latest / objects / CartLine](#latest-objects-cartline)
- [latest / objects / CartLineCost](#latest-objects-cartlinecost)
- [latest / objects / CartLineEstimatedCost](#latest-objects-cartlineestimatedcost)
- [latest / objects / CartLineInstructions](#latest-objects-cartlineinstructions)
- [latest / objects / CartLineParentRelationship](#latest-objects-cartlineparentrelationship)
- [latest / objects / CartPreferences](#latest-objects-cartpreferences)
- [latest / objects / CartSelectableAddress](#latest-objects-cartselectableaddress)
- [latest / objects / CartUserError](#latest-objects-cartusererror)
- [latest / objects / CartWarning](#latest-objects-cartwarning)
- [latest / objects / Collection](#latest-objects-collection)
- [latest / objects / Comment](#latest-objects-comment)
- [latest / objects / CommentAuthor](#latest-objects-commentauthor)
- [latest / objects / Company](#latest-objects-company)
- [latest / objects / CompanyContact](#latest-objects-companycontact)
- [latest / objects / CompanyLocation](#latest-objects-companylocation)
- [latest / objects / ComponentizableCartLine](#latest-objects-componentizablecartline)
- [latest / objects / Count](#latest-objects-count)
- [latest / objects / Country](#latest-objects-country)
- [latest / objects / Currency](#latest-objects-currency)
- [latest / objects / Customer](#latest-objects-customer)
- [latest / objects / CustomerAccessToken](#latest-objects-customeraccesstoken)
- [latest / objects / CustomerUserError](#latest-objects-customerusererror)
- [latest / objects / DiscountAllocation](#latest-objects-discountallocation)
- [latest / objects / DiscountCodeApplication](#latest-objects-discountcodeapplication)
- [latest / objects / Domain](#latest-objects-domain)
- [latest / objects / ExternalVideo](#latest-objects-externalvideo)
- [latest / objects / Filter](#latest-objects-filter)
- [latest / objects / FilterValue](#latest-objects-filtervalue)
- [latest / objects / Fulfillment](#latest-objects-fulfillment)
- [latest / objects / FulfillmentLineItem](#latest-objects-fulfillmentlineitem)
- [latest / objects / FulfillmentTrackingInfo](#latest-objects-fulfillmenttrackinginfo)
- [latest / objects / GenericFile](#latest-objects-genericfile)
- [latest / objects / Image](#latest-objects-image)
- [latest / objects / InContextAnnotation](#latest-objects-incontextannotation)
- [latest / objects / InContextAnnotationType](#latest-objects-incontextannotationtype)
- [latest / objects / Language](#latest-objects-language)
- [latest / objects / Localization](#latest-objects-localization)
- [latest / objects / Location](#latest-objects-location)
- [latest / objects / LocationAddress](#latest-objects-locationaddress)
- [latest / objects / MailingAddress](#latest-objects-mailingaddress)
- [latest / objects / ManualDiscountApplication](#latest-objects-manualdiscountapplication)
- [latest / objects / Market](#latest-objects-market)
- [latest / objects / MediaImage](#latest-objects-mediaimage)
- [latest / objects / MediaPresentation](#latest-objects-mediapresentation)
- [latest / objects / Menu](#latest-objects-menu)
- [latest / objects / MenuItem](#latest-objects-menuitem)
- [latest / objects / Metafield](#latest-objects-metafield)
- [latest / objects / MetafieldDeleteUserError](#latest-objects-metafielddeleteusererror)
- [latest / objects / MetafieldsSetUserError](#latest-objects-metafieldssetusererror)
- [latest / objects / Metaobject](#latest-objects-metaobject)
- [latest / objects / MetaobjectField](#latest-objects-metaobjectfield)
- [latest / objects / MetaobjectSEO](#latest-objects-metaobjectseo)
- [latest / objects / Model3d](#latest-objects-model3d)
- [latest / objects / Model3dSource](#latest-objects-model3dsource)
- [latest / objects / MoneyV2](#latest-objects-moneyv2)
- [latest / objects / Mutation](#latest-objects-mutation)
- [latest / objects / Order](#latest-objects-order)
- [latest / objects / OrderLineItem](#latest-objects-orderlineitem)
- [latest / objects / Page](#latest-objects-page)
- [latest / objects / PageInfo](#latest-objects-pageinfo)
- [latest / objects / PaginatedSitemapResources](#latest-objects-paginatedsitemapresources)
- [latest / objects / PaymentSettings](#latest-objects-paymentsettings)
- [latest / objects / PredictiveSearchResult](#latest-objects-predictivesearchresult)
- [latest / objects / PricingPercentageValue](#latest-objects-pricingpercentagevalue)
- [latest / objects / Product](#latest-objects-product)
- [latest / objects / ProductOption](#latest-objects-productoption)
- [latest / objects / ProductOptionValue](#latest-objects-productoptionvalue)
- [latest / objects / ProductOptionValueSwatch](#latest-objects-productoptionvalueswatch)
- [latest / objects / ProductPriceRange](#latest-objects-productpricerange)
- [latest / objects / ProductVariant](#latest-objects-productvariant)
- [latest / objects / ProductVariantComponent](#latest-objects-productvariantcomponent)
- [latest / objects / PurchasingCompany](#latest-objects-purchasingcompany)
- [latest / objects / QuantityPriceBreak](#latest-objects-quantitypricebreak)
- [latest / objects / QuantityRule](#latest-objects-quantityrule)
- [latest / objects / QueryRoot](#latest-objects-queryroot)
- [latest / objects / SEO](#latest-objects-seo)
- [latest / objects / ScriptDiscountApplication](#latest-objects-scriptdiscountapplication)
- [latest / objects / SearchQuerySuggestion](#latest-objects-searchquerysuggestion)
- [latest / objects / SelectedOption](#latest-objects-selectedoption)
- [latest / objects / SellingPlan](#latest-objects-sellingplan)
- [latest / objects / SellingPlanAllocation](#latest-objects-sellingplanallocation)
- [latest / objects / SellingPlanAllocationPriceAdjustment](#latest-objects-sellingplanallocationpriceadjustment)
- [latest / objects / SellingPlanCheckoutCharge](#latest-objects-sellingplancheckoutcharge)
- [latest / objects / SellingPlanCheckoutChargePercentageValue](#latest-objects-sellingplancheckoutchargepercentagevalue)
- [latest / objects / SellingPlanFixedAmountPriceAdjustment](#latest-objects-sellingplanfixedamountpriceadjustment)
- [latest / objects / SellingPlanFixedPriceAdjustment](#latest-objects-sellingplanfixedpriceadjustment)
- [latest / objects / SellingPlanGroup](#latest-objects-sellingplangroup)
- [latest / objects / SellingPlanGroupOption](#latest-objects-sellingplangroupoption)
- [latest / objects / SellingPlanOption](#latest-objects-sellingplanoption)
- [latest / objects / SellingPlanPercentagePriceAdjustment](#latest-objects-sellingplanpercentagepriceadjustment)
- [latest / objects / SellingPlanPriceAdjustment](#latest-objects-sellingplanpriceadjustment)
- [latest / objects / SellingPlanRecurringBillingPolicy](#latest-objects-sellingplanrecurringbillingpolicy)
- [latest / objects / SellingPlanRecurringDeliveryPolicy](#latest-objects-sellingplanrecurringdeliverypolicy)
- [latest / objects / Shop](#latest-objects-shop)
- [latest / objects / ShopPayInstallmentsFinancingPlan](#latest-objects-shoppayinstallmentsfinancingplan)
- [latest / objects / ShopPayInstallmentsFinancingPlanTerm](#latest-objects-shoppayinstallmentsfinancingplanterm)
- [latest / objects / ShopPayInstallmentsPricing](#latest-objects-shoppayinstallmentspricing)
- [latest / objects / ShopPayInstallmentsProductVariantPricing](#latest-objects-shoppayinstallmentsproductvariantpricing)
- [latest / objects / ShopPayPaymentRequest](#latest-objects-shoppaypaymentrequest)
- [latest / objects / ShopPayPaymentRequestContactField](#latest-objects-shoppaypaymentrequestcontactfield)
- [latest / objects / ShopPayPaymentRequestDeliveryMethod](#latest-objects-shoppaypaymentrequestdeliverymethod)
- [latest / objects / ShopPayPaymentRequestDiscount](#latest-objects-shoppaypaymentrequestdiscount)
- [latest / objects / ShopPayPaymentRequestImage](#latest-objects-shoppaypaymentrequestimage)
- [latest / objects / ShopPayPaymentRequestLineItem](#latest-objects-shoppaypaymentrequestlineitem)
- [latest / objects / ShopPayPaymentRequestReceipt](#latest-objects-shoppaypaymentrequestreceipt)
- [latest / objects / ShopPayPaymentRequestSession](#latest-objects-shoppaypaymentrequestsession)
- [latest / objects / ShopPayPaymentRequestShippingLine](#latest-objects-shoppaypaymentrequestshippingline)
- [latest / objects / ShopPayPaymentRequestTotalShippingPrice](#latest-objects-shoppaypaymentrequesttotalshippingprice)
- [latest / objects / ShopPolicy](#latest-objects-shoppolicy)
- [latest / objects / ShopPolicyWithDefault](#latest-objects-shoppolicywithdefault)
- [latest / objects / Sitemap](#latest-objects-sitemap)
- [latest / objects / SitemapImage](#latest-objects-sitemapimage)
- [latest / objects / SitemapResource](#latest-objects-sitemapresource)
- [latest / objects / SitemapResourceMetaobject](#latest-objects-sitemapresourcemetaobject)
- [latest / objects / SocialLoginProvider](#latest-objects-socialloginprovider)
- [latest / objects / StoreAvailability](#latest-objects-storeavailability)
- [latest / objects / Swatch](#latest-objects-swatch)
- [latest / objects / TaxonomyCategory](#latest-objects-taxonomycategory)
- [latest / objects / Translation](#latest-objects-translation)
- [latest / objects / UnitPriceMeasurement](#latest-objects-unitpricemeasurement)
- [latest / objects / UrlRedirect](#latest-objects-urlredirect)
- [latest / objects / UserError](#latest-objects-usererror)
- [latest / objects / UserErrorsShopPayPaymentRequestSessionUserErrors](#latest-objects-usererrorsshoppaypaymentrequestsessionusererrors)
- [latest / objects / Video](#latest-objects-video)
- [latest / objects / VideoSource](#latest-objects-videosource)


---



<a id="latest-objects-apiversion"></a>


## Api​Version

object

A version of the Shopify API. Each version has a unique handle in date-based format (YYYY-MM) or `unstable` for the development version.

Shopify guarantees supported versions are stable. Unsupported versions include unstable and release candidate versions. Use the [`publicApiVersions`](https://shopify.dev/docs/api/storefront/2026-04/queries/publicApiVersions) query to retrieve all available versions. Learn more about [Shopify API versioning](https://shopify.dev/docs/api/usage/versioning).

### Fields

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

### Map

No referencing types

***

### Queries

* [public​Api​Versions](https://shopify.dev/docs/api/storefront/latest/queries/publicApiVersions)

  query

  Returns all public Storefront [API versions](https://shopify.dev/docs/api/storefront/2026-04/objects/ApiVersion), including supported, release candidate, and unstable versions.

***

### ApiVersion Queries

#### Queried by

* [public​Api​Versions](https://shopify.dev/docs/api/storefront/latest/queries/publicApiVersions)

---



<a id="latest-objects-appliedgiftcard"></a>


## Applied​Gift​Card

object

Details about the gift card used on the checkout.

### Fields

* amount​Used

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount that was taken from the gift card by applying it.

* balance

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount left on the gift card.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Characters

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The last characters of the gift card.

* presentment​Amount​Used

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount that was applied to the checkout in its currency.

#### Deprecated fields

* amount​Used​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated

* balance​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated

***

### Map

#### Fields with this object

* [Cart.appliedGiftCards](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.appliedGiftCards)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### AppliedGiftCard Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-article"></a>


## Article

object

Requires `unauthenticated_read_content` access scope.

A post that belongs to a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog). Each article includes content with optional HTML formatting, an excerpt for previews, [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) information, and an associated [`Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image).

Articles can be organized with tags and include [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) metadata. You can manage [comments](https://shopify.dev/docs/api/storefront/2026-04/objects/Comment) when the blog's comment policy enables them.

### Fields

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

### Map

#### Fields and connections with this object

* [ArticleConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection#returns-nodes)
* [ArticleEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/ArticleEdge#field-ArticleEdge.fields.node)
* [Blog.articleByHandle](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articleByHandle)
* [Blog.articles](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles)
* [PredictiveSearchResult.articles](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult#field-PredictiveSearchResult.fields.articles)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)
* [Search​Result​Item](https://shopify.dev/docs/api/storefront/latest/unions/SearchResultItem)

***

### Queries

* [article](https://shopify.dev/docs/api/storefront/latest/queries/article)

  query

  Returns an [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) by its ID. Each article belongs to a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) and includes content in both plain text and HTML formats, [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) information, [`Comment`](https://shopify.dev/docs/api/storefront/2026-04/objects/Comment) objects, tags, and [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) data.

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the `Article`.

  ***

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

### Article Queries

#### Queried by

* [article](https://shopify.dev/docs/api/storefront/latest/queries/article)
* [articles](https://shopify.dev/docs/api/storefront/latest/queries/articles)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

  * [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

    interface

***

### Article Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)
* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

---



<a id="latest-objects-articleauthor"></a>


## Article​Author

object

Requires `unauthenticated_read_content` access scope.

The author of an article.

### Fields

* bio

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The author's bio.

* email

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author’s email.

* first​Name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author's first name.

* last​Name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author's last name.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author's full name.

***

### Map

#### Fields with this object

* [Article.authorV2](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.authorV2)
* [Blog.authors](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.authors)

---



<a id="latest-objects-attribute"></a>


## Attribute

object

A custom key-value pair for storing additional information on [carts](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart), [cart lines](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine), [orders](https://shopify.dev/docs/api/storefront/2026-04/objects/Order), and [order line items](https://shopify.dev/docs/api/storefront/2026-04/objects/OrderLineItem). Common uses include gift wrapping requests, customer notes, and tracking whether a customer is a first-time buyer.

Attributes set on a cart carry over to the resulting order after checkout. Use the [`cartAttributesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartAttributesUpdate) mutation to add or modify cart attributes. For a step-by-step guide, see [managing carts with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key or name of the attribute. For example, `"customersFirstOrder"`.

* value

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The value of the attribute. For example, `"true"`.

***

### Map

#### Fields with this object

* [BaseCartLine.attribute](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-attribute)
* [BaseCartLine.attributes](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-attributes)
* [Cart.attribute](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.attribute)
* [Cart.attributes](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.attributes)
* [CartLine.attribute](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.attribute)
* [CartLine.attributes](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.attributes)
* [ComponentizableCartLine.attribute](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.attribute)
* [ComponentizableCartLine.attributes](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.attributes)
* [Order.customAttributes](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.customAttributes)
* [OrderLineItem.customAttributes](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem#field-OrderLineItem.fields.customAttributes)

---



<a id="latest-objects-automaticdiscountapplication"></a>


## Automatic​Discount​Application

object

An [automatic discount](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) applied to a cart or checkout without requiring a discount code. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication) interface.

Includes the discount's title, value, and allocation details that specify how the discount amount distributes across entitled line items or shipping lines.

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

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the application.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  interface

***

### AutomaticDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-blog"></a>


## Blog

object

Requires `unauthenticated_read_content` access scope.

A blog container for [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects. Stores can have multiple blogs, for example to organize content by topic or purpose.

Each blog provides access to its articles, contributing [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/2026-04/objects/ArticleAuthor) objects, and [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information. You can retrieve articles individually [by handle](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articleByHandle) or as a [paginated list](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog#field-Blog.fields.articles).

### Fields

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

### Map

#### Fields and connections with this object

* [Article.blog](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.blog)
* [BlogConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection#returns-nodes)
* [BlogEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/BlogEdge#field-BlogEdge.fields.node)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Queries

* [blog](https://shopify.dev/docs/api/storefront/latest/queries/blog)

  query

  Retrieves a [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) by its handle or ID. A blog organizes [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects for the online store and includes author information, [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) settings, and custom [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects.

  * handle

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    ### Arguments

    The handle of the `Blog`.

  * id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    The ID of the `Blog`.

  ***

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

* [blog​By​Handle](https://shopify.dev/docs/api/storefront/latest/queries/blogByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The handle of the blog.

  ***

***

### Blog Queries

#### Queried by

* [blog](https://shopify.dev/docs/api/storefront/latest/queries/blog)
* [blogs](https://shopify.dev/docs/api/storefront/latest/queries/blogs)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

***

### Blog Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

---



<a id="latest-objects-brand"></a>


## Brand

object

The store's [branding configuration](https://help.shopify.com/manual/promoting-marketing/managing-brand-assets), such as logos, colors, and slogan. Access this through the [`Shop`](https://shopify.dev/docs/api/storefront/2026-04/objects/Shop#field-Shop.fields.brand) object to display consistent brand assets across your storefront.

### Fields

* colors

  [Brand​Colors!](https://shopify.dev/docs/api/storefront/latest/objects/BrandColors)

  non-null

  The colors of the store's brand.

* cover​Image

  [Media​Image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage)

  The store's cover image.

* logo

  [Media​Image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage)

  The store's default logo.

* short​Description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The store's short description.

* slogan

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The store's slogan.

* square​Logo

  [Media​Image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage)

  The store's preferred logo for square UI elements.

***

### Map

#### Fields with this object

* [Shop.brand](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.brand)

---



<a id="latest-objects-brandcolorgroup"></a>


## Brand​Color​Group

object

A group of related colors for the shop's brand.

### Fields

* background

  [Color](https://shopify.dev/docs/api/storefront/latest/scalars/Color)

  The background color.

* foreground

  [Color](https://shopify.dev/docs/api/storefront/latest/scalars/Color)

  The foreground color.

***

### Map

#### Fields with this object

* [BrandColors.primary](https://shopify.dev/docs/api/storefront/latest/objects/BrandColors#field-BrandColors.fields.primary)
* [BrandColors.secondary](https://shopify.dev/docs/api/storefront/latest/objects/BrandColors#field-BrandColors.fields.secondary)

---



<a id="latest-objects-brandcolors"></a>


## Brand​Colors

object

The colors of the shop's brand.

### Fields

* primary

  [\[Brand​Color​Group!\]!](https://shopify.dev/docs/api/storefront/latest/objects/BrandColorGroup)

  non-null

  The shop's primary brand colors.

* secondary

  [\[Brand​Color​Group!\]!](https://shopify.dev/docs/api/storefront/latest/objects/BrandColorGroup)

  non-null

  The shop's secondary brand colors.

***

### Map

#### Fields with this object

* [Brand.colors](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.colors)

---



<a id="latest-objects-cart"></a>


## Cart

object

A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart, throughout a customer's session.

Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-checkoutUrl) field to direct buyers to Shopify's web checkout to complete their purchase.

Learn more about [interacting with carts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

### Fields

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

#### Deprecated fields

* discount​Allocations

  [\[Cart​Discount​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

  non-nullDeprecated

* estimated​Cost

  [Cart​Estimated​Cost!](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost)

  non-nullDeprecated

***

### Map

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Queries

* [cart](https://shopify.dev/docs/api/storefront/latest/queries/cart)

  query

  Returns a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) by its ID. The cart contains the merchandise lines a buyer intends to purchase, along with estimated costs, applied discounts, gift cards, and delivery options.

  Use the [`checkoutUrl`](https://shopify.dev/docs/api/storefront/latest/queries/cart#returns-Cart.fields.checkoutUrl) field to redirect buyers to Shopify's web checkout when they're ready to complete their purchase. For more information, refer to [Manage a cart with the Storefront API](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/cart/manage).

  * id

    [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    required

    ### Arguments

    The ID of the cart.

  ***

***

### Cart Queries

#### Queried by

* [cart](https://shopify.dev/docs/api/storefront/latest/queries/cart)

***

### Mutations

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

* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)

  mutation

  Creates a new [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) for a buyer session. You can optionally initialize the cart with merchandise lines, discount codes, gift card codes, buyer identity for international pricing, and custom attributes.

  The returned cart includes a `checkoutUrl` that directs the buyer to complete their purchase.

  * input

    [Cart​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput)

    ### Arguments

    The fields used to create a cart.

  ***

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

### Cart Mutations

#### Mutated by

* [cart​Attributes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate)
* [cart​Buyer​Identity​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate)
* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)
* [cart​Delivery​Addresses​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd)
* [cart​Delivery​Addresses​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove)
* [cart​Delivery​Addresses​Replace](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace)
* [cart​Delivery​Addresses​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate)
* [cart​Discount​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate)
* [cart​Gift​Card​Codes​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd)
* [cart​Gift​Card​Codes​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove)
* [cart​Gift​Card​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate)
* [cart​Lines​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd)
* [cart​Lines​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove)
* [cart​Lines​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate)
* [cart​Note​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate)
* [cart​Selected​Delivery​Options​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Cart Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-cartautomaticdiscountallocation"></a>


## Cart​Automatic​Discount​Allocation

object

A discount allocation [that applies automatically](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) to a cart line when configured conditions are met. Unlike [`CartCodeDiscountAllocation`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartCodeDiscountAllocation), automatic discounts don't require customers to enter a code.

### Fields

* discounted​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The discounted amount that has been applied to the cart line.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetType)

  non-null

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the allocated discount.

* discount​Application

  [Cart​Discount​Application!](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication)

  non-nullDeprecated

***

### Map

No referencing types

***

### Interfaces

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

  interface

***

### CartAutomaticDiscountAllocation Implements

#### Implements

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

---



<a id="latest-objects-cartbuyeridentity"></a>


## Cart​Buyer​Identity

object

Contact information about the buyer interacting with a [cart](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). The buyer's country determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match their shipping address.

For B2B scenarios, the [`purchasingCompany`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.purchasingCompany) field identifies the company and location on whose behalf a business customer purchases. The [`preferences`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.preferences) field stores delivery and wallet settings that prefill checkout fields to streamline the buying process.

### Fields

* country​Code

  [Country​Code](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  The country where the buyer is located.

* customer

  [Customer](https://shopify.dev/docs/api/storefront/latest/objects/Customer)

  Token access required

  The customer account associated with the cart.

* email

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The email address of the buyer that's interacting with the cart.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The phone number of the buyer that's interacting with the cart.

* preferences

  [Cart​Preferences](https://shopify.dev/docs/api/storefront/latest/objects/CartPreferences)

  A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. Preferences are not synced back to the cart if they are overwritten.

* purchasing​Company

  [Purchasing​Company](https://shopify.dev/docs/api/storefront/latest/objects/PurchasingCompany)

  The purchasing company associated with the cart.

* delivery​Address​Preferences

  [\[Delivery​Address!\]!](https://shopify.dev/docs/api/storefront/latest/unions/DeliveryAddress)

  non-nullDeprecated

***

### Map

#### Fields with this object

* [Cart.buyerIdentity](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.buyerIdentity)

---



<a id="latest-objects-cartcodediscountallocation"></a>


## Cart​Code​Discount​Allocation

object

A discount allocation applied to a cart line when a customer enters a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes).

### Fields

* code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The code used to apply the discount.

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

### Map

No referencing types

***

### Interfaces

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

  interface

***

### CartCodeDiscountAllocation Implements

#### Implements

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

---



<a id="latest-objects-cartcost"></a>


## Cart​Cost

object

The estimated costs that a buyer will pay at checkout. The `Cart` object's [`cost`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart#field-Cart.fields.cost) field returns this. The costs are subject to change and changes will be reflected at checkout. Costs reflect [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) based on the buyer's context.

Amounts include the subtotal before taxes and cart-level discounts, the checkout charge amount excluding deferred payments, and the total. The subtotal and total amounts each include a corresponding boolean field indicating whether the value is an estimate.

### Fields

* checkout​Charge​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`.

* subtotal​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount, before taxes and cart-level discounts, for the customer to pay.

* subtotal​Amount​Estimated

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the subtotal amount is estimated.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The total amount for the customer to pay.

* total​Amount​Estimated

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the total amount is estimated.

#### Deprecated fields

* total​Duty​Amount

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Deprecated

* total​Duty​Amount​Estimated

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-nullDeprecated

* total​Tax​Amount

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Deprecated

* total​Tax​Amount​Estimated

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-nullDeprecated

***

### Map

#### Fields with this object

* [Cart.cost](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.cost)

---



<a id="latest-objects-cartcustomdiscountallocation"></a>


## Cart​Custom​Discount​Allocation

object

The discounts automatically applied to the cart line based on prerequisites that have been met.

### Fields

* discounted​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The discounted amount that has been applied to the cart line.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetType)

  non-null

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the allocated discount.

* discount​Application

  [Cart​Discount​Application!](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication)

  non-nullDeprecated

***

### Map

No referencing types

***

### Interfaces

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

  interface

***

### CartCustomDiscountAllocation Implements

#### Implements

* [Cart​Discount​Allocation](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation)

---



<a id="latest-objects-cartdelivery"></a>


## Cart​Delivery

object

The delivery properties of the cart.

### Fields

* addresses

  [\[Cart​Selectable​Address!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartSelectableAddress)

  non-null

  Selectable addresses to present to the buyer on the cart.

  * selected

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Filter the addresses by selected status.

  ***

***

### Map

#### Fields with this object

* [Cart.delivery](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.delivery)

---



<a id="latest-objects-cartdeliveryaddress"></a>


## Cart​Delivery​Address

object

Represents a mailing address for customers and shipping.

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

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The two-letter code for the country of the address.

  For example, US.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first name of the customer.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A formatted version of the address, customized by the provided arguments.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include the customer's name in the formatted address.

  * with​Company

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:true

    Whether to include the customer's company in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A comma-separated list of the values for city, province, and country.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The last name of the customer.

* latitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The latitude coordinate of the customer address.

* longitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The longitude coordinate of the customer address.

* name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The full name of the customer, based on firstName and lastName.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

* province​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The alphanumeric code for the region.

  For example, ON.

* zip

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The zip or postal code of the address.

***

### Map

#### Possible type in

* [Cart​Address](https://shopify.dev/docs/api/storefront/latest/unions/CartAddress)

---



<a id="latest-objects-cartdeliverycoordinatespreference"></a>


## Cart​Delivery​Coordinates​Preference

object

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

### Map

#### Fields with this object

* [CartDeliveryPreference.coordinates](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryPreference#field-CartDeliveryPreference.fields.coordinates)

---



<a id="latest-objects-cartdeliverygroup"></a>


## Cart​Delivery​Group

object

Groups cart line items that share the same delivery destination. Each group provides the available [`CartDeliveryOption`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryOption) choices for that address, along with the customer's selected option.

Access through the [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) object's `deliveryGroups` field. Items are grouped by merchandise type (one-time purchase vs subscription), allowing different delivery methods for each.

### Fields

* cart​Lines

  [Base​Cart​Line​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection)

  non-null

  A list of cart lines for the delivery group.

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

* delivery​Address

  [Mailing​Address!](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  non-null

  The destination address for the delivery group.

* delivery​Options

  [\[Cart​Delivery​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryOption)

  non-null

  The delivery options available for the delivery group.

* group​Type

  [Cart​Delivery​Group​Type!](https://shopify.dev/docs/api/storefront/latest/enums/CartDeliveryGroupType)

  non-null

  The type of merchandise in the delivery group.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID for the delivery group.

* selected​Delivery​Option

  [Cart​Delivery​Option](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryOption)

  The selected delivery option for the delivery group.

***

### Map

#### Fields and connections with this object

* [Cart.deliveryGroups](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.deliveryGroups)
* [CartDeliveryGroupConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection#returns-nodes)
* [CartDeliveryGroupEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroupEdge#field-CartDeliveryGroupEdge.fields.node)

---



<a id="latest-objects-cartdeliveryoption"></a>


## Cart​Delivery​Option

object

A shipping or delivery choice available to customers during checkout. Each option includes a title, estimated cost, and delivery method type such as shipping or local pickup.

Returned by the [`CartDeliveryGroup`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryGroup) object's [`deliveryOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.deliveryOptions) field and [`selectedDeliveryOption`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.selectedDeliveryOption) field.

### Fields

* code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The code of the delivery option.

* delivery​Method​Type

  [Delivery​Method​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DeliveryMethodType)

  non-null

  The method for the delivery option.

* description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The description of the delivery option.

* estimated​Cost

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated cost for the delivery option.

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The unique identifier of the delivery option.

* title

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The title of the delivery option.

***

### Map

#### Fields with this object

* [CartDeliveryGroup.deliveryOptions](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.deliveryOptions)
* [CartDeliveryGroup.selectedDeliveryOption](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.selectedDeliveryOption)

---



<a id="latest-objects-cartdeliverypreference"></a>


## Cart​Delivery​Preference

object

A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. Preferences are not synced back to the cart if they are overwritten.

### Fields

* coordinates

  [Cart​Delivery​Coordinates​Preference](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryCoordinatesPreference)

  Preferred location used to find the closest pick up point based on coordinates.

* delivery​Method

  [\[Preference​Delivery​Method​Type!\]!](https://shopify.dev/docs/api/storefront/latest/enums/PreferenceDeliveryMethodType)

  non-null

  The preferred delivery methods such as shipping, local pickup or through pickup points.

* pickup​Handle

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The pickup handle prefills checkout fields with the location for either local pickup or pickup points delivery methods. It accepts both location ID for local pickup and external IDs for pickup points.

***

### Map

#### Fields with this object

* [CartPreferences.delivery](https://shopify.dev/docs/api/storefront/latest/objects/CartPreferences#field-CartPreferences.fields.delivery)

---



<a id="latest-objects-cartdiscountapplication"></a>


## Cart​Discount​Application

object

Captures the intent of a discount source at the time it was applied to a cart. This includes the discount value, how it's allocated across entitled items, and which line types it targets.

The actual discounted amounts on specific cart lines are represented by [`CartDiscountAllocation`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/CartDiscountAllocation) objects, which reference this application.

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

### Map

---



<a id="latest-objects-cartdiscountcode"></a>


## Cart​Discount​Code

object

A discount code applied to a [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Discount codes are case-insensitive and can be added using the [`cartDiscountCodesUpdate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/cartDiscountCodesUpdate) mutation.

The [`applicable`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartDiscountCode#field-CartDiscountCode.fields.applicable) field indicates whether the code applies to the cart's current contents, which might change as items are added or removed.

### Fields

* applicable

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the discount code is applicable to the cart's current contents.

* code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The code for the discount.

***

### Map

#### Fields with this object

* [Cart.discountCodes](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.discountCodes)

---



<a id="latest-objects-cartestimatedcost"></a>


## Cart​Estimated​Cost

object

The estimated costs that the buyer pays at checkout. Uses [`CartBuyerIdentity`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartBuyerIdentity) to determine [international pricing](https://shopify.dev/docs/custom-storefronts/internationalization/international-pricing).

Includes the subtotal, total amount, duties, and taxes. The [`checkoutChargeAmount`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartEstimatedCost#field-CartEstimatedCost.fields.checkoutChargeAmount) field excludes deferred payments that are charged later, making it useful for displaying what the customer pays immediately.

### Fields

* checkout​Charge​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`.

* subtotal​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated amount, before taxes and discounts, for the customer to pay.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated total amount for the customer to pay.

* total​Duty​Amount

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The estimated duty amount for the customer to pay at checkout.

* total​Tax​Amount

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The estimated tax amount for the customer to pay at checkout.

***

### Map

---



<a id="latest-objects-cartline"></a>


## Cart​Line

object

An item in a customer's [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) representing a product variant they intend to purchase. Each cart line tracks the merchandise, quantity, cost breakdown, and any applied discounts.

Cart lines can include custom attributes for additional information like gift wrapping requests, and can be associated with a [`SellingPlanAllocation`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanAllocation) for purchase options like subscriptions, pre-orders, or try-before-you-buy. The [`instructions`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine#field-CartLine.fields.instructions) field indicates whether the line can be removed or have its quantity updated.

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

* instructions

  [Cart​Line​Instructions!](https://shopify.dev/docs/api/storefront/latest/objects/CartLineInstructions)

  non-null

  The instructions for the line item.

* merchandise

  [Merchandise!](https://shopify.dev/docs/api/storefront/latest/unions/Merchandise)

  non-null

  The merchandise that the buyer intends to purchase.

* parent​Relationship

  [Cart​Line​Parent​Relationship](https://shopify.dev/docs/api/storefront/latest/objects/CartLineParentRelationship)

  The parent of the line item.

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

### Map

#### Fields with this object

* [CartLineParentRelationship.parent](https://shopify.dev/docs/api/storefront/latest/objects/CartLineParentRelationship#field-CartLineParentRelationship.fields.parent)
* [ComponentizableCartLine.lineComponents](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.lineComponents)

***

### Interfaces

* * [Base​Cart​Line](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### CartLine Implements

#### Implements

* [Base​Cart​Line](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-cartlinecost"></a>


## Cart​Line​Cost

object

Cost breakdown for a single line item in a [cart](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart). Includes the per-unit price, the subtotal before line-level discounts, and the final total amount the buyer pays.

The [`compareAtAmountPerQuantity`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLineCost#field-CartLineCost.fields.compareAtAmountPerQuantity) field shows the original price when the item is on sale, enabling the display of savings to customers.

### Fields

* amount​Per​Quantity

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount of the merchandise line.

* compare​At​Amount​Per​Quantity

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The compare at amount of the merchandise line.

* subtotal​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The cost of the merchandise line before line-level discounts.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The total cost of the merchandise line.

***

### Map

#### Fields with this object

* [BaseCartLine.cost](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-cost)
* [CartLine.cost](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.cost)
* [ComponentizableCartLine.cost](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.cost)

---



<a id="latest-objects-cartlineestimatedcost"></a>


## Cart​Line​Estimated​Cost

object

The estimated cost of the merchandise line that the buyer will pay at checkout.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount of the merchandise line.

* compare​At​Amount

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The compare at amount of the merchandise line.

* subtotal​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated cost of the merchandise line before discounts.

* total​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The estimated total cost of the merchandise line.

***

### Map

---



<a id="latest-objects-cartlineinstructions"></a>


## Cart​Line​Instructions

object

Represents instructions for a cart line item.

### Fields

* can​Remove

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the line item can be removed from the cart.

* can​Update​Quantity

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the line item quantity can be updated.

***

### Map

#### Fields with this object

* [CartLine.instructions](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.instructions)

---



<a id="latest-objects-cartlineparentrelationship"></a>


## Cart​Line​Parent​Relationship

object

Represents the parent relationship of a cart line.

### Fields

* parent

  [Cart​Line!](https://shopify.dev/docs/api/storefront/latest/objects/CartLine)

  non-null

  The parent cart line.

***

### Map

#### Fields with this object

* [CartLine.parentRelationship](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.parentRelationship)

---



<a id="latest-objects-cartpreferences"></a>


## Cart​Preferences

object

A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. Preferences are not synced back to the cart if they are overwritten.

### Fields

* delivery

  [Cart​Delivery​Preference](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryPreference)

  Delivery preferences can be used to prefill the delivery section in at checkout.

* wallet

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Wallet preferences are used to populate relevant payment fields in the checkout flow. Accepted value: `["shop_pay"]`.

***

### Map

#### Fields with this object

* [CartBuyerIdentity.preferences](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.preferences)

---



<a id="latest-objects-cartselectableaddress"></a>


## Cart​Selectable​Address

object

A selectable delivery address for a cart.

### Fields

* address

  [Cart​Address!](https://shopify.dev/docs/api/storefront/latest/unions/CartAddress)

  non-null

  The delivery address.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A unique identifier for the address, specific to this cart.

* one​Time​Use

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  This delivery address will not be associated with the buyer after a successful checkout.

* selected

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Sets exactly one address as pre-selected for the buyer.

***

### Map

#### Fields with this object

* [CartDelivery.addresses](https://shopify.dev/docs/api/storefront/latest/objects/CartDelivery#field-CartDelivery.fields.addresses)

---



<a id="latest-objects-cartusererror"></a>


## Cart​User​Error

object

Represents an error that happens during execution of a cart mutation.

### Fields

* code

  [Cart​Error​Code](https://shopify.dev/docs/api/storefront/latest/enums/CartErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

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

* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)

  mutation

  Creates a new [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) for a buyer session. You can optionally initialize the cart with merchandise lines, discount codes, gift card codes, buyer identity for international pricing, and custom attributes.

  The returned cart includes a `checkoutUrl` that directs the buyer to complete their purchase.

  * input

    [Cart​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput)

    ### Arguments

    The fields used to create a cart.

  ***

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

### CartUserError Mutations

#### Mutated by

* [cart​Attributes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate)
* [cart​Buyer​Identity​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate)
* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)
* [cart​Delivery​Addresses​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd)
* [cart​Delivery​Addresses​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove)
* [cart​Delivery​Addresses​Replace](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace)
* [cart​Delivery​Addresses​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate)
* [cart​Discount​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate)
* [cart​Gift​Card​Codes​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd)
* [cart​Gift​Card​Codes​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove)
* [cart​Gift​Card​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate)
* [cart​Lines​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd)
* [cart​Lines​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove)
* [cart​Lines​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate)
* [cart​Note​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate)
* [cart​Selected​Delivery​Options​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### CartUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-cartwarning"></a>


## Cart​Warning

object

A non-blocking issue that occurred during a cart mutation. Unlike errors, warnings don't prevent the mutation from completing but indicate potential problems that may affect the buyer's experience.

Each warning includes a code identifying the issue type, a human-readable message, and a target ID pointing to the affected resource.

### Fields

* code

  [Cart​Warning​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CartWarningCode)

  non-null

  The code of the warning.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The message text of the warning.

* target

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The target of the warning.

***

### Map

No referencing types

***

### Mutations

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

* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)

  mutation

  Creates a new [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart) for a buyer session. You can optionally initialize the cart with merchandise lines, discount codes, gift card codes, buyer identity for international pricing, and custom attributes.

  The returned cart includes a `checkoutUrl` that directs the buyer to complete their purchase.

  * input

    [Cart​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/CartInput)

    ### Arguments

    The fields used to create a cart.

  ***

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

### CartWarning Mutations

#### Mutated by

* [cart​Attributes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartAttributesUpdate)
* [cart​Buyer​Identity​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartBuyerIdentityUpdate)
* [cart​Create](https://shopify.dev/docs/api/storefront/latest/mutations/cartCreate)
* [cart​Delivery​Addresses​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesAdd)
* [cart​Delivery​Addresses​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesRemove)
* [cart​Delivery​Addresses​Replace](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesReplace)
* [cart​Delivery​Addresses​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDeliveryAddressesUpdate)
* [cart​Discount​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartDiscountCodesUpdate)
* [cart​Gift​Card​Codes​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesAdd)
* [cart​Gift​Card​Codes​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesRemove)
* [cart​Gift​Card​Codes​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartGiftCardCodesUpdate)
* [cart​Lines​Add](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesAdd)
* [cart​Lines​Remove](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesRemove)
* [cart​Lines​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartLinesUpdate)
* [cart​Note​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartNoteUpdate)
* [cart​Selected​Delivery​Options​Update](https://shopify.dev/docs/api/storefront/latest/mutations/cartSelectedDeliveryOptionsUpdate)

---



<a id="latest-objects-collection"></a>


## Collection

object

Requires `unauthenticated_read_product_listings` access scope.

A group of products [organized by a merchant](https://help.shopify.com/manual/products/collections) to make their store easier to browse. Collections can help customers discover related products by category, season, promotion, or other criteria.

Query a collection's products with [filtering options](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) like availability, price range, vendor, and tags. Each collection includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information, an optional [`Image`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image), and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

### Fields

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

### Map

#### Fields and connections with this object

* [CollectionConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-nodes)
* [CollectionEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/CollectionEdge#field-CollectionEdge.fields.node)
* [PredictiveSearchResult.collections](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult#field-PredictiveSearchResult.fields.collections)
* [Product.collections](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.collections)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Queries

* [collection](https://shopify.dev/docs/api/storefront/latest/queries/collection)

  query

  Retrieves a single [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection) by its ID or handle. Use the [`products`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection#field-Collection.fields.products) field to access items in the collection.

  * id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    ### Arguments

    The ID of the `Collection`.

  * handle

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The handle of the `Collection`.

  ***

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

* [collection​By​Handle](https://shopify.dev/docs/api/storefront/latest/queries/collectionByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The handle of the collection.

  ***

***

### Collection Queries

#### Queried by

* [collection](https://shopify.dev/docs/api/storefront/latest/queries/collection)
* [collections](https://shopify.dev/docs/api/storefront/latest/queries/collections)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

  * [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

    interface

***

### Collection Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)
* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

---



<a id="latest-objects-comment"></a>


## Comment

object

Requires `unauthenticated_read_content` access scope.

A comment on an article.

### Fields

* author

  [Comment​Author!](https://shopify.dev/docs/api/storefront/latest/objects/CommentAuthor)

  non-null

  The comment’s author.

* content

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Stripped content of the comment, single line with HTML tags removed.

  * truncate​At

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Truncates a string after the given length.

  ***

* content​Html

  [HTML!](https://shopify.dev/docs/api/storefront/latest/scalars/HTML)

  non-null

  The content of the comment, complete with HTML formatting.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

***

### Map

#### Fields and connections with this object

* [Article.comments](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.comments)
* [CommentConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection#returns-nodes)
* [CommentEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/CommentEdge#field-CommentEdge.fields.node)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### Comment Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-commentauthor"></a>


## Comment​Author

object

Requires `unauthenticated_read_content` access scope.

The author of a comment.

### Fields

* email

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author's email.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The author’s name.

***

### Map

#### Fields with this object

* [Comment.author](https://shopify.dev/docs/api/storefront/latest/objects/Comment#field-Comment.fields.author)

---



<a id="latest-objects-company"></a>


## Company

object

A B2B organization that purchases from the shop. In the Storefront API, company information is accessed through the [`PurchasingCompany`](https://shopify.dev/docs/api/storefront/2026-04/objects/PurchasingCompany) object on [`CartBuyerIdentity`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartBuyerIdentity), which provides the associated location and contact for the current purchasing context.

You can store custom data using [metafields](https://shopify.dev/docs/apps/build/metafields).

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify.

* external​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique externally-supplied ID for the company.

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

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the company.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified.

***

### Map

#### Fields with this object

* [PurchasingCompany.company](https://shopify.dev/docs/api/storefront/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.company)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Company Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-companycontact"></a>


## Company​Contact

object

A company's main point of contact.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created in Shopify.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* locale

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The company contact's locale (language).

* title

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The company contact's job title.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last modified.

***

### Map

#### Fields with this object

* [PurchasingCompany.contact](https://shopify.dev/docs/api/storefront/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.contact)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### CompanyContact Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-companylocation"></a>


## Company​Location

object

A branch or office of a [`Company`](https://shopify.dev/docs/api/storefront/2026-04/objects/Company) where B2B customers can place orders. When a B2B customer selects a location after logging in, the Storefront API contextualizes product queries to return location-specific pricing and quantity rules.

Access through the [`PurchasingCompany`](https://shopify.dev/docs/api/storefront/2026-04/objects/PurchasingCompany) object, which associates the location with the buyer's [`Cart`](https://shopify.dev/docs/api/storefront/2026-04/objects/Cart).

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify.

* external​Id

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique externally-supplied ID for the company.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* locale

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The preferred locale of the company location.

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

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the company location.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified.

***

### Map

#### Fields with this object

* [PurchasingCompany.location](https://shopify.dev/docs/api/storefront/latest/objects/PurchasingCompany#field-PurchasingCompany.fields.location)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### CompanyLocation Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-componentizablecartline"></a>


## Componentizable​Cart​Line

object

Represents information about the grouped merchandise in the cart.

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

* line​Components

  [\[Cart​Line!\]!](https://shopify.dev/docs/api/storefront/latest/objects/CartLine)

  non-null

  The components of the line item.

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

### Map

No referencing types

***

### Interfaces

* * [Base​Cart​Line](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### ComponentizableCartLine Implements

#### Implements

* [Base​Cart​Line](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-count"></a>


## Count

object

Details for count of elements.

### Fields

* count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  Count of elements.

* precision

  [Count​Precision!](https://shopify.dev/docs/api/storefront/latest/enums/CountPrecision)

  non-null

  Precision of count, how exact is the value.

***

### Map

#### Fields with this object

* [Product.variantsCount](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variantsCount)
* [ShopPayInstallmentsFinancingPlanTerm.installmentsCount](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.installmentsCount)
* [ShopPayInstallmentsProductVariantPricing.installmentsCount](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsProductVariantPricing#field-ShopPayInstallmentsProductVariantPricing.fields.installmentsCount)
* [Sitemap.pagesCount](https://shopify.dev/docs/api/storefront/latest/objects/Sitemap#field-Sitemap.fields.pagesCount)

---



<a id="latest-objects-country"></a>


## Country

object

A country with localization settings for a storefront. Includes the country's currency, available languages, default language, and unit system (metric or imperial).

Access countries through the [localization](https://shopify.dev/docs/api/storefront/2026-04/queries/localization) query, which returns both the list of available countries and the currently active country. Use the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to change the active country context.

### Fields

* available​Languages

  [\[Language!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Language)

  non-null

  The languages available for the country.

* currency

  [Currency!](https://shopify.dev/docs/api/storefront/latest/objects/Currency)

  non-null

  The currency of the country.

* default​Language

  [Language!](https://shopify.dev/docs/api/storefront/latest/objects/Language)

  non-null

  The default language for the country.

* iso​Code

  [Country​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  non-null

  The ISO code of the country.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the country.

* unit​System

  [Unit​System!](https://shopify.dev/docs/api/storefront/latest/enums/UnitSystem)

  non-null

  The unit system used in the country.

* market

  [Market](https://shopify.dev/docs/api/storefront/latest/objects/Market)

  Deprecated

***

### Map

#### Fields with this object

* [Localization.availableCountries](https://shopify.dev/docs/api/storefront/latest/objects/Localization#field-Localization.fields.availableCountries)
* [Localization.country](https://shopify.dev/docs/api/storefront/latest/objects/Localization#field-Localization.fields.country)

---



<a id="latest-objects-currency"></a>


## Currency

object

A currency.

### Fields

* iso​Code

  [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

  non-null

  The ISO code of the currency.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the currency.

* symbol

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The symbol of the currency.

***

### Map

#### Fields with this object

* [Country.currency](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.currency)

---



<a id="latest-objects-customer"></a>


## Customer

object

Requires `unauthenticated_read_customers` access scope.

A customer account with the shop. Includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress) and marketing preferences for logged-in customers, so they don't have to provide these details at every checkout.

Access the customer through the [`customer`](https://shopify.dev/docs/api/storefront/2026-04/queries/customer) query using a customer access token obtained from the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) mutation.

The object implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields) interface, enabling retrieval of [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

### Fields

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

### Map

#### Fields with this object

* [CartBuyerIdentity.customer](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.customer)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Queries

* [customer](https://shopify.dev/docs/api/storefront/latest/queries/customer)

  query

  Retrieves the [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) associated with the provided access token. Use the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) mutation to obtain an access token using legacy customer account authentication (email and password).

  The returned customer includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress), [orders](https://shopify.dev/docs/api/storefront/2026-04/objects/Order), and [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

  * customer​Access​Token

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The customer access token.

  ***

***

### Customer Queries

#### Queried by

* [customer](https://shopify.dev/docs/api/storefront/latest/queries/customer)

***

### Mutations

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

### Customer Mutations

#### Mutated by

* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)
* [customer​Activate​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl)
* [customer​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate)
* [customer​Default​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate)
* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)
* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)
* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

***

### Interfaces

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

  interface

***

### Customer Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

---



<a id="latest-objects-customeraccesstoken"></a>


## Customer​Access​Token

object

Requires `unauthenticated_read_customers` access scope.

A unique authentication token that identifies a logged-in customer and authorizes modifications to the [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) object. The token is required for customer-specific operations like updating profile information or managing addresses.

Tokens have an expiration date and must be renewed using [`customerAccessTokenRenew`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenRenew) before they expire. Create tokens with [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreate) using legacy customer account authentication (email and password), or with [`customerAccessTokenCreateWithMultipass`](https://shopify.dev/docs/api/storefront/2026-04/mutations/customerAccessTokenCreateWithMultipass) for single sign-on flows.

### Fields

* access​Token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The customer’s access token.

* expires​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null Token access required

  The date and time when the customer access token expires.

***

### Map

No referencing types

***

### Mutations

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

### CustomerAccessToken Mutations

#### Mutated by

* [customer​Access​Token​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate)
* [customer​Access​Token​Create​With​Multipass](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreateWithMultipass)
* [customer​Access​Token​Renew](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenRenew)
* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)
* [customer​Activate​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl)
* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)
* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)
* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

---



<a id="latest-objects-customerusererror"></a>


## Customer​User​Error

object

Represents an error that happens during execution of a customer mutation.

### Fields

* code

  [Customer​Error​Code](https://shopify.dev/docs/api/storefront/latest/enums/CustomerErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

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

### CustomerUserError Mutations

#### Mutated by

* [customer​Access​Token​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate)
* [customer​Access​Token​Create​With​Multipass](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreateWithMultipass)
* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)
* [customer​Activate​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivateByUrl)
* [customer​Address​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressCreate)
* [customer​Address​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressDelete)
* [customer​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressUpdate)
* [customer​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate)
* [customer​Default​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate)
* [customer​Recover](https://shopify.dev/docs/api/storefront/latest/mutations/customerRecover)
* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)
* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)
* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### CustomerUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-discountallocation"></a>


## Discount​Allocation

object

The calculated discount amount applied to a line item or shipping line. While a [`DiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication) captures the discount's rules and intentions, the allocation shows how much was actually deducted.

Each allocation includes the discounted amount and a reference to the originating discount application.

### Fields

* allocated​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  Amount of discount allocated.

* discount​Application

  [Discount​Application!](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  non-null

  The discount this allocated amount originated from.

***

### Map

#### Fields with this object

* [Order.shippingDiscountAllocations](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.shippingDiscountAllocations)
* [OrderLineItem.discountAllocations](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem#field-OrderLineItem.fields.discountAllocations)

---



<a id="latest-objects-discountcodeapplication"></a>


## Discount​Code​Application

object

Records the configuration and intent of a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes) when a customer applies it. This includes the code string, allocation method, target type, and discount value at the time of application. The [`applicable`](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable) field indicates whether the code was successfully applied.

***

**Note:** To see the actual amounts discounted on specific line items or shipping lines, use the \<a href="/docs/api/storefront/2026-04/objects/DiscountAllocation">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Allocation\</span>\</code>\</a> object instead.

***

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* applicable

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Specifies whether the discount code was applied successfully.

* code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The string identifying the discount code that was used at the time of application.

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

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  interface

***

### DiscountCodeApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-domain"></a>


## Domain

object

A web address associated with a shop. The [`Shop`](https://shopify.dev/docs/api/storefront/2026-04/objects/Shop) object's [`primaryDomain`](https://shopify.dev/docs/api/storefront/2026-04/objects/Shop#field-Shop.fields.primaryDomain) field returns this to identify the shop's online store URL.

### Fields

* host

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The host name of the domain (eg: `example.com`).

* ssl​Enabled

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether SSL is enabled or not.

* url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  The URL of the domain (eg: `https://example.com`).

***

### Map

#### Fields with this object

* [Shop.primaryDomain](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.primaryDomain)

---



<a id="latest-objects-externalvideo"></a>


## External​Video

object

Requires `unauthenticated_read_product_listings` access scope.

Represents a video hosted outside of Shopify.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* embed​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  The embed URL of the video for the respective host.

* host

  [Media​Host!](https://shopify.dev/docs/api/storefront/latest/enums/MediaHost)

  non-null

  The host of the external video.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* media​Content​Type

  [Media​Content​Type!](https://shopify.dev/docs/api/storefront/latest/enums/MediaContentType)

  non-null

  The media content type.

* origin​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  The origin URL of the video on the respective host.

* presentation

  [Media​Presentation](https://shopify.dev/docs/api/storefront/latest/objects/MediaPresentation)

  The presentation for a media.

* preview​Image

  [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  The preview image for the media.

* embedded​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-nullDeprecated

***

### Map

No referencing types

***

### Interfaces

* * [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### ExternalVideo Implements

#### Implements

* [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-filter"></a>


## Filter

object

Requires `unauthenticated_read_product_listings` access scope.

A filter option available on collection and search results pages. Each filter includes a type, display label, and selectable values that customers can use to narrow down products.

The [`FilterValue`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue) objects contain an [`input`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue#field-FilterValue.fields.input) field that you can combine to [build dynamic filtering queries](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products). Merchants [configure available filters](https://help.shopify.com/manual/online-store/search-and-discovery/filters) using the Shopify Search & Discovery app.

### Fields

* id

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A unique identifier.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A human-friendly string for this filter.

* presentation

  [Filter​Presentation](https://shopify.dev/docs/api/storefront/latest/enums/FilterPresentation)

  Describes how to present the filter values. Returns a value only for filters of type `LIST`. Returns null for other types.

* type

  [Filter​Type!](https://shopify.dev/docs/api/storefront/latest/enums/FilterType)

  non-null

  An enumeration that denotes the type of data this filter represents.

* values

  [\[Filter​Value!\]!](https://shopify.dev/docs/api/storefront/latest/objects/FilterValue)

  non-null

  The list of values for this filter.

***

### Map

#### Connections with this object

* [ProductConnection.filters](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-filters)
* [SearchResultItemConnection.productFilters](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-productFilters)

---



<a id="latest-objects-filtervalue"></a>


## Filter​Value

object

Requires `unauthenticated_read_product_listings` access scope.

A selectable option within a [`Filter`](https://shopify.dev/docs/api/storefront/2026-04/objects/Filter), such as a specific color, size, or product type. Each value includes a count of matching results and a human-readable label for display.

The [`input`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue#field-FilterValue.fields.input) field provides ready-to-use JSON for building dynamic filtering interfaces. You can combine the `input` values from multiple selected [`FilterValue`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue) objects to construct filter queries. Visual representations are available through the [`image`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue#field-FilterValue.fields.image) or [`swatch`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue#field-FilterValue.fields.swatch) fields when the parent filter's presentation type supports them.

### Fields

* count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The number of results that match this filter value.

* id

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A unique identifier.

* image

  [Media​Image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage)

  The visual representation when the filter's presentation is `IMAGE`.

* input

  [JSON!](https://shopify.dev/docs/api/storefront/latest/scalars/JSON)

  non-null

  An input object that can be used to filter by this value on the parent field.

  The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A human-friendly string for this filter value.

* swatch

  [Swatch](https://shopify.dev/docs/api/storefront/latest/objects/Swatch)

  The visual representation when the filter's presentation is `SWATCH`.

***

### Map

#### Fields with this object

* [Filter.values](https://shopify.dev/docs/api/storefront/latest/objects/Filter#field-Filter.fields.values)

---



<a id="latest-objects-fulfillment"></a>


## Fulfillment

object

Requires `unauthenticated_read_customers` access scope.

A shipment of one or more items in an order. Accessed through the [`Order`](https://shopify.dev/docs/api/storefront/2026-04/objects/Order) object's [`successfulFulfillments`](https://shopify.dev/docs/api/storefront/2026-04/objects/Order#field-Order.fields.successfulFulfillments) field.

Each fulfillment includes the line items that shipped, the tracking company name, and tracking details like numbers and URLs. An order can have multiple fulfillments when items ship separately or from different locations.

### Fields

* fulfillment​Line​Items

  [Fulfillment​Line​Item​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection)

  non-null Token access required

  List of the fulfillment's line items.

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

* tracking​Company

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The name of the tracking company.

* tracking​Info

  [\[Fulfillment​Tracking​Info!\]!](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentTrackingInfo)

  non-null Token access required

  Tracking information associated with the fulfillment, such as the tracking number and tracking URL.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Truncate the array result to this size.

  ***

***

### Map

#### Fields with this object

* [Order.successfulFulfillments](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.successfulFulfillments)

---



<a id="latest-objects-fulfillmentlineitem"></a>


## Fulfillment​Line​Item

object

Requires `unauthenticated_read_customers` access scope.

Records how many units of an [`OrderLineItem`](https://shopify.dev/docs/api/storefront/2026-04/objects/OrderLineItem) were included in a [`Fulfillment`](https://shopify.dev/docs/api/storefront/2026-04/objects/Fulfillment). Each order line item has at most one fulfillment line item per fulfillment.

### Fields

* line​Item

  [Order​Line​Item!](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem)

  non-null Token access required

  The associated order's line item.

* quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null Token access required

  The amount fulfilled in this fulfillment.

***

### Map

#### Fields and connections with this object

* [Fulfillment.fulfillmentLineItems](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.fulfillmentLineItems)
* [FulfillmentLineItemConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection#returns-nodes)
* [FulfillmentLineItemEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentLineItemEdge#field-FulfillmentLineItemEdge.fields.node)

---



<a id="latest-objects-fulfillmenttrackinginfo"></a>


## Fulfillment​Tracking​Info

object

Requires `unauthenticated_read_customers` access scope.

Tracking information associated with the fulfillment.

### Fields

* number

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The tracking number of the fulfillment.

* url

  [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  Token access required

  The URL to track the fulfillment.

***

### Map

#### Fields with this object

* [Fulfillment.trackingInfo](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment#field-Fulfillment.fields.trackingInfo)

---



<a id="latest-objects-genericfile"></a>


## Generic​File

object

Requires `unauthenticated_read_product_listings` access scope.

Any file that doesn't fit into a designated type like image or video. For example, a PDF or JSON document. Use this object to manage files in a merchant's store.

Generic files are commonly referenced through [file reference metafields](https://shopify.dev/docs/apps/build/metafields/list-of-data-types) and returned as part of the [`MetafieldReference`](https://shopify.dev/docs/api/storefront/2026-04/unions/MetafieldReference) union.

Includes the file's URL, MIME type, size in bytes, and an optional preview image.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A word or phrase to indicate the contents of a file.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* mime​Type

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The MIME type of the file.

* original​File​Size

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The size of the original file in bytes.

* preview​Image

  [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  The preview image for the file.

* url

  [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  The URL of the file.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### GenericFile Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-image"></a>


## Image

object

An image resource with URL, dimensions, and transformation options. Used for product images, collection images, media previews, and other visual content throughout the storefront.

The [`url`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image#field-Image.fields.url) field accepts an [`ImageTransformInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/ImageTransformInput) argument for resizing, cropping, scaling for retina displays, and converting between image formats. Use the [`thumbhash`](https://shopify.dev/docs/api/storefront/2026-04/objects/Image#field-Image.fields.thumbhash) field to display lightweight placeholders while images load.

### Fields

* alt​Text

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A word or phrase to share the nature or contents of an image.

* height

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  A unique ID for the image.

* thumbhash

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The ThumbHash of the image.

  Useful to display placeholder images while the original image is loading.

  See <https://evanw.github.io/thumbhash/> for details on how to use it.

* url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  The location of the image as a URL.

  If no transform options are specified, then the original image will be preserved including any pre-applied transforms.

  All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.

  If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).

  * transform

    [Image​Transform​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput)

    ### Arguments

    A set of options to transform the original image.

  ***

* width

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify.

#### Deprecated fields

* original​Src

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-nullDeprecated

* src

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-nullDeprecated

* transformed​Src

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-nullDeprecated

  * max​Width

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Image width in pixels between 1 and 5760.

  * max​Height

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Image height in pixels between 1 and 5760.

  * crop

    [Crop​Region](https://shopify.dev/docs/api/storefront/latest/enums/CropRegion)

    Crops the image according to the specified region.

  * scale

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    Default:1

    Image size multiplier for high-resolution retina displays. Must be between 1 and 3.

  * preferred​Content​Type

    [Image​Content​Type](https://shopify.dev/docs/api/storefront/latest/enums/ImageContentType)

    Best effort conversion of image into content type (SVG -> PNG, Anything -> JPG, Anything -> WEBP are supported).

  ***

***

### Map

#### Fields and connections with this object

* [Article.image](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.image)
* [Collection.image](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.image)
* [ExternalVideo.previewImage](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.previewImage)
* [GenericFile.previewImage](https://shopify.dev/docs/api/storefront/latest/objects/GenericFile#field-GenericFile.fields.previewImage)
* [ImageConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection#returns-nodes)
* [ImageEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/ImageEdge#field-ImageEdge.fields.node)
* [Media.previewImage](https://shopify.dev/docs/api/storefront/latest/interfaces/Media#fields-previewImage)
* [MediaImage.image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.image)
* [MediaImage.previewImage](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.previewImage)
* [Model3d.previewImage](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.previewImage)
* [Product.featuredImage](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.featuredImage)
* [Product.images](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images)
* [ProductVariant.image](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.image)
* [Video.previewImage](https://shopify.dev/docs/api/storefront/latest/objects/Video#field-Video.fields.previewImage)

---



<a id="latest-objects-incontextannotation"></a>


## In​Context​Annotation

object

Provide details about the contexts influenced by the @inContext directive on a field.

### Fields

* description

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

* type

  [In​Context​Annotation​Type!](https://shopify.dev/docs/api/storefront/latest/objects/InContextAnnotationType)

  non-null

***

### Map

No referencing types

---



<a id="latest-objects-incontextannotationtype"></a>


## In​Context​Annotation​Type

object

This gives information about the type of context that impacts a field. For example, for a query with @inContext(language: "EN"), the type would point to the name: LanguageCode and kind: ENUM.

### Fields

* kind

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

***

### Map

#### Fields with this object

* [InContextAnnotation.type](https://shopify.dev/docs/api/storefront/latest/objects/InContextAnnotation#field-InContextAnnotation.fields.type)

---



<a id="latest-objects-language"></a>


## Language

object

A language available for a localized storefront experience. Provides the language name in both its native form (endonym) and translated into the current language, along with its [`LanguageCode`](https://shopify.dev/docs/api/storefront/2026-04/enums/LanguageCode).

Returned by the [`Localization`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization) and [`Country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Country) objects to indicate available and active languages. Pass the `isoCode` to the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to retrieve translated content in that language.

### Fields

* endonym​Name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position.

* iso​Code

  [Language​Code!](https://shopify.dev/docs/api/storefront/latest/enums/LanguageCode)

  non-null

  The ISO code.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the language in the current language.

***

### Map

#### Fields with this object

* [Country.availableLanguages](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.availableLanguages)
* [Country.defaultLanguage](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.defaultLanguage)
* [Localization.availableLanguages](https://shopify.dev/docs/api/storefront/latest/objects/Localization#field-Localization.fields.availableLanguages)
* [Localization.language](https://shopify.dev/docs/api/storefront/latest/objects/Localization#field-Localization.fields.language)

---



<a id="latest-objects-localization"></a>


## Localization

object

Information about the shop's configured localized experiences, including available countries and languages. The [`country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.country) and [`language`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.language) fields reflect the active localization context, which you can change using the `@inContext` directive on queries.

Use [`availableCountries`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.availableCountries) to list all countries with enabled localized experiences, and [`availableLanguages`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.availableLanguages) to get languages available for the currently active country. Each [`Country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Country) includes its own currency, unit system, and available languages.

### Fields

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

### Map

No referencing types

***

### Queries

* [localization](https://shopify.dev/docs/api/storefront/latest/queries/localization)

  query

  Returns the shop's localization settings. Use this query to build [country and language selectors](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets) for your storefront.

  The [`country`](https://shopify.dev/docs/api/storefront/latest/queries/localization#returns-Localization.fields.country) and [`language`](https://shopify.dev/docs/api/storefront/latest/queries/localization#returns-Localization.fields.language) fields reflect the active localized experience. To change the context, use the [`@inContext`](https://shopify.dev/docs/api/storefront#directives) directive with your desired country or language code.

***

### Localization Queries

#### Queried by

* [localization](https://shopify.dev/docs/api/storefront/latest/queries/localization)

---



<a id="latest-objects-location"></a>


## Location

object

Requires `unauthenticated_read_product_pickup_locations` access scope.

A physical store location where product inventory is held and that supports in-store pickup. Provides the location's name, address, and geographic coordinates for proximity-based sorting. Use with [`StoreAvailability`](https://shopify.dev/docs/api/storefront/2026-04/objects/StoreAvailability) to show customers where a [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) is available for pickup.

Learn more about [supporting local pickup on storefronts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/local-pickup).

### Fields

* address

  [Location​Address!](https://shopify.dev/docs/api/storefront/latest/objects/LocationAddress)

  non-null

  The address of the location.

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

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the location.

***

### Map

#### Fields and connections with this object

* [LocationConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection#returns-nodes)
* [LocationEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/LocationEdge#field-LocationEdge.fields.node)
* [StoreAvailability.location](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailability#field-StoreAvailability.fields.location)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Queries

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

### Location Queries

#### Queried by

* [locations](https://shopify.dev/docs/api/storefront/latest/queries/locations)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Location Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-locationaddress"></a>


## Location​Address

object

Represents the address of a location.

### Fields

* address1

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first line of the address for the location.

* address2

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The second line of the address for the location.

* city

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The city of the location.

* country

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The country of the location.

* country​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The country code of the location.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A formatted version of the address for the location.

* latitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The latitude coordinates of the location.

* longitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The longitude coordinates of the location.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The phone number of the location.

* province

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The province of the location.

* province​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The code for the province, state, or district of the address of the location.

* zip

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The ZIP code of the location.

***

### Map

#### Fields with this object

* [Location.address](https://shopify.dev/docs/api/storefront/latest/objects/Location#field-Location.fields.address)

---



<a id="latest-objects-mailingaddress"></a>


## Mailing​Address

object

A physical mailing address associated with a [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer) or [`Order`](https://shopify.dev/docs/api/storefront/2026-04/objects/Order). Stores standard address components including street address, city, province, country, and postal code, along with customer name and company information.

The address includes geographic coordinates and provides pre-formatted output through the [`formatted`](https://shopify.dev/docs/api/storefront/2026-04/objects/MailingAddress#field-MailingAddress.fields.formatted) field, which can optionally include or exclude name and company details.

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

* country​Code​V2

  [Country​Code](https://shopify.dev/docs/api/storefront/latest/enums/CountryCode)

  The two-letter code for the country of the address.

  For example, US.

* first​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The first name of the customer.

* formatted

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A formatted version of the address, customized by the provided arguments.

  * with​Name

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:false

    ### Arguments

    Whether to include the customer's name in the formatted address.

  * with​Company

    [Boolean](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

    Default:true

    Whether to include the customer's company in the formatted address.

  ***

* formatted​Area

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A comma-separated list of the values for city, province, and country.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* last​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The last name of the customer.

* latitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The latitude coordinate of the customer address.

* longitude

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The longitude coordinate of the customer address.

* name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The full name of the customer, based on firstName and lastName.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A unique phone number for the customer.

  Formatted using E.164 standard. For example, *+16135551111*.

* province

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The region of the address, such as the province, state, or district.

* province​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The alphanumeric code for the region.

  For example, ON.

* zip

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The zip or postal code of the address.

* country​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Deprecated

***

### Map

#### Fields and connections with this object

* [CartDeliveryGroup.deliveryAddress](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.deliveryAddress)
* [Customer.addresses](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.addresses)
* [Customer.defaultAddress](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.defaultAddress)
* [MailingAddressConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection#returns-nodes)
* [MailingAddressEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddressEdge#field-MailingAddressEdge.fields.node)
* [Order.billingAddress](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.billingAddress)
* [Order.shippingAddress](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.shippingAddress)

#### Possible type in

* [Delivery​Address](https://shopify.dev/docs/api/storefront/latest/unions/DeliveryAddress)

***

### Mutations

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

### MailingAddress Mutations

#### Mutated by

* [customer​Address​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressCreate)
* [customer​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressUpdate)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### MailingAddress Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-manualdiscountapplication"></a>


## Manual​Discount​Application

object

A discount created manually by a merchant, as opposed to [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) or [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes). Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication) interface and includes a title, optional description, and the discount value as either a fixed amount or percentage.

### Fields

* allocation​Method

  [Discount​Application​Allocation​Method!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationAllocationMethod)

  non-null

  The method by which the discount's value is allocated to its entitled items.

* description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The description of the application.

* target​Selection

  [Discount​Application​Target​Selection!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetSelection)

  non-null

  Which lines of targetType that the discount is allocated over.

* target​Type

  [Discount​Application​Target​Type!](https://shopify.dev/docs/api/storefront/latest/enums/DiscountApplicationTargetType)

  non-null

  The type of line that the discount is applicable towards.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the application.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  interface

***

### ManualDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-market"></a>


## Market

object

An audience of buyers that a merchant targets for sales. Audiences can include geographic regions, company locations, and retail locations. Markets enable localized shopping experiences with region-specific languages, currencies, and pricing.

Each market has a unique [`handle`](https://shopify.dev/docs/api/storefront/2026-04/objects/Market#field-Market.fields.handle) for identification and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield). Learn more about [building localized experiences with Shopify Markets](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets).

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  A human-readable unique string for the market automatically generated from its title.

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

***

### Map

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Market Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-mediaimage"></a>


## Media​Image

object

Requires `unauthenticated_read_product_listings` access scope.

An image hosted on Shopify's content delivery network (CDN). Used for product images, brand logos, and other visual content across the storefront.

The [`image`](https://shopify.dev/docs/api/storefront/2026-04/objects/MediaImage#field-MediaImage.fields.image) field provides the actual image data with transformation options. Implements the [`Media`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) interface alongside other media types like [`Video`](https://shopify.dev/docs/api/storefront/2026-04/objects/Video) and [`Model3d`](https://shopify.dev/docs/api/storefront/2026-04/objects/Model3d).

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A word or phrase to share the nature or contents of a media.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  The image for the media.

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

### Map

#### Fields with this object

* [Brand.coverImage](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.coverImage)
* [Brand.logo](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.logo)
* [Brand.squareLogo](https://shopify.dev/docs/api/storefront/latest/objects/Brand#field-Brand.fields.squareLogo)
* [FilterValue.image](https://shopify.dev/docs/api/storefront/latest/objects/FilterValue#field-FilterValue.fields.image)
* [Swatch.image](https://shopify.dev/docs/api/storefront/latest/objects/Swatch#field-Swatch.fields.image)

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Interfaces

* * [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### MediaImage Implements

#### Implements

* [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-mediapresentation"></a>


## Media​Presentation

object

Requires `unauthenticated_read_product_listings` access scope.

A media presentation.

### Fields

* as​Json

  [JSON](https://shopify.dev/docs/api/storefront/latest/scalars/JSON)

  A JSON object representing a presentation view.

  * format

    [Media​Presentation​Format!](https://shopify.dev/docs/api/storefront/latest/enums/MediaPresentationFormat)

    required

    ### Arguments

    The format to transform the settings.

  ***

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-nullDeprecated

***

### Map

#### Fields with this object

* [ExternalVideo.presentation](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.presentation)
* [Media.presentation](https://shopify.dev/docs/api/storefront/latest/interfaces/Media#fields-presentation)
* [MediaImage.presentation](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.presentation)
* [Model3d.presentation](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.presentation)
* [Video.presentation](https://shopify.dev/docs/api/storefront/latest/objects/Video#field-Video.fields.presentation)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### MediaPresentation Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-menu"></a>


## Menu

object

Requires `unauthenticated_read_content` access scope.

A navigation structure for building store [menus](https://help.shopify.com/manual/online-store/menus-and-links). Each menu contains [`MenuItem`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem) objects that can be nested to create multi-level navigation hierarchies.

Menu items can link to [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog), or external URLs. Use the [`menu`](https://shopify.dev/docs/api/storefront/2026-04/queries/menu) query to retrieve a menu by its handle.

### Fields

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

### Map

No referencing types

***

### Queries

* [menu](https://shopify.dev/docs/api/storefront/latest/queries/menu)

  query

  Retrieves a [`Menu`](https://shopify.dev/docs/api/storefront/2026-04/objects/Menu) by its handle. Menus are [hierarchical navigation structures](https://help.shopify.com/manual/online-store/menus-and-links) that merchants configure for their storefront, such as header and footer navigation.

  Each menu contains [`MenuItem`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem) objects that can nest up to three levels deep, with each item linking to [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog), or external URLs.

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The navigation menu's handle.

  ***

***

### Menu Queries

#### Queried by

* [menu](https://shopify.dev/docs/api/storefront/latest/queries/menu)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### Menu Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-menuitem"></a>


## Menu​Item

object

Requires `unauthenticated_read_content` access scope.

A navigation link within a [`Menu`](https://shopify.dev/docs/api/storefront/2026-04/objects/Menu). Each item has a title, URL, and can link to store resources like [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog), or external URLs.

Menu items support nested hierarchies through the [`items`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem#field-MenuItem.fields.items) field, enabling dropdown or multi-level navigation structures. The [`tags`](https://shopify.dev/docs/api/storefront/2026-04/objects/MenuItem#field-MenuItem.fields.tags) field filters results when the item links to a collection specifically.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* items

  [\[Menu​Item!\]!](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem)

  non-null

  The menu item's child items.

* resource

  [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)

  The linked resource.

* resource​Id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The ID of the linked resource.

* tags

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The menu item's tags to filter a collection.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The menu item's title.

* type

  [Menu​Item​Type!](https://shopify.dev/docs/api/storefront/latest/enums/MenuItemType)

  non-null

  The menu item's type.

* url

  [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  The menu item's URL.

***

### Map

#### Fields with this object

* [Menu.items](https://shopify.dev/docs/api/storefront/latest/objects/Menu#field-Menu.fields.items)
* [MenuItem.items](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.items)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### MenuItem Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-metafield"></a>


## Metafield

object

[Custom metadata](https://shopify.dev/docs/apps/build/metafields) attached to a Shopify resource such as a [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), or [`Customer`](https://shopify.dev/docs/api/storefront/2026-04/objects/Customer). Each metafield is identified by a namespace and key, and stores a value with an associated type.

Values are always stored as strings, but the [`type`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.type) field indicates how to interpret the data. When a metafield's type is a resource reference, use the [`reference`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.reference) or [`references`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield#field-Metafield.fields.references) fields to retrieve the linked objects. Access metafields on any resource that implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/HasMetafields) interface.

### Fields

* created​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null Token access required

  The date and time when the storefront metafield was created.

* description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The description of a metafield.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null Token access required

  A globally-unique ID.

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The unique identifier for the metafield within its namespace.

* list

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null Token access required

  Whether the metafield's type is a list type. Returns `true` for types like `list.color` or `list.single_line_text_field`.

* namespace

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The container for a group of metafields that the metafield is associated with.

* parent​Resource

  [Metafield​Parent​Resource!](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

  non-null Token access required

  The type of resource that the metafield is attached to.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

  Token access required

  Returns a reference object if the metafield's type is a resource reference.

* references

  [Metafield​Reference​Connection](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection)

  Token access required

  A list of reference objects if the metafield's type is a resource reference list.

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

  ***

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The type name of the metafield. Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null Token access required

  The date and time when the metafield was last updated.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The data stored in the metafield. Always stored as a string, regardless of the metafield's type.

***

### Map

#### Fields with this object

* [Article.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.metafield)
* [Article.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.metafields)
* [Blog.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.metafield)
* [Blog.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.metafields)
* [Cart.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.metafield)
* [Cart.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Cart#field-Cart.fields.metafields)
* [Collection.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.metafield)
* [Collection.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.metafields)
* [Company.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.metafield)
* [Company.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Company#field-Company.fields.metafields)
* [CompanyLocation.metafield](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafield)
* [CompanyLocation.metafields](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation#field-CompanyLocation.fields.metafields)
* [Customer.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.metafield)
* [Customer.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.metafields)
* [HasMetafields.metafield](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields#fields-metafield)
* [HasMetafields.metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields#fields-metafields)
* [Location.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Location#field-Location.fields.metafield)
* [Location.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Location#field-Location.fields.metafields)
* [Market.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Market#field-Market.fields.metafield)
* [Market.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Market#field-Market.fields.metafields)
* [Order.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.metafield)
* [Order.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.metafields)
* [Page.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.metafield)
* [Page.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.metafields)
* [Product.metafield](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.metafield)
* [Product.metafields](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.metafields)
* [ProductVariant.metafield](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.metafield)
* [ProductVariant.metafields](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.metafields)
* [SellingPlan.metafield](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.metafield)
* [SellingPlan.metafields](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.metafields)

***

### Mutations

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

### Metafield Mutations

#### Mutated by

* [cart​Metafields​Set](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### Metafield Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-metafielddeleteusererror"></a>


## Metafield​Delete​User​Error

object

An error that occurs during the execution of cart metafield deletion.

### Fields

* code

  [Metafield​Delete​Error​Code](https://shopify.dev/docs/api/storefront/latest/enums/MetafieldDeleteErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

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

### MetafieldDeleteUserError Mutations

#### Mutated by

* [cart​Metafield​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldDelete)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### MetafieldDeleteUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-metafieldssetusererror"></a>


## Metafields​Set​User​Error

object

An error that occurs during the execution of `MetafieldsSet`.

### Fields

* code

  [Metafields​Set​User​Error​Code](https://shopify.dev/docs/api/storefront/latest/enums/MetafieldsSetUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The index of the array element that's causing the error.

* field

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

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

### MetafieldsSetUserError Mutations

#### Mutated by

* [cart​Metafields​Set](https://shopify.dev/docs/api/storefront/latest/mutations/cartMetafieldsSet)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### MetafieldsSetUserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-metaobject"></a>


## Metaobject

object

Requires `unauthenticated_read_metaobjects` access scope.

An instance of [custom structured data](https://shopify.dev/docs/apps/build/metaobjects) defined by a metaobject definition. Metaobjects store reusable content that extends beyond standard Shopify resources, such as size charts, author profiles, or custom content sections.

Each metaobject contains fields that match the types and validation rules specified in its definition. [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) references can point to metaobjects, connecting custom data with products, collections, and other resources. If the definition has the `renderable` capability, then the [`seo`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject#field-Metaobject.fields.seo) field provides SEO metadata. If it has the `online_store` capability, then the [`onlineStoreUrl`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject#field-Metaobject.fields.onlineStoreUrl) field returns the public URL.

### Fields

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

### Map

#### Fields and connections with this object

* [MetaobjectConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection#returns-nodes)
* [MetaobjectEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectEdge#field-MetaobjectEdge.fields.node)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Queries

* [metaobject](https://shopify.dev/docs/api/storefront/latest/queries/metaobject)

  query

  Retrieves a single [`Metaobject`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject) by either its [`global ID`](https://shopify.dev/docs/api/storefront/2026-04/queries/metaobject#arguments-id) or its [`handle`](https://shopify.dev/docs/api/storefront/2026-04/queries/metaobject#arguments-handle).

  ***

  **Note:** When using the handle, you must also provide the metaobject type because handles are only unique within a type.

  ***

  * id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    ### Arguments

    The ID of the metaobject.

  * handle

    [Metaobject​Handle​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/MetaobjectHandleInput)

    The handle and type of the metaobject.

  ***

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

### Metaobject Queries

#### Queried by

* [metaobject](https://shopify.dev/docs/api/storefront/latest/queries/metaobject)
* [metaobjects](https://shopify.dev/docs/api/storefront/latest/queries/metaobjects)

***

### Interfaces

* * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

***

### Metaobject Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

---



<a id="latest-objects-metaobjectfield"></a>


## Metaobject​Field

object

Requires `unauthenticated_read_metaobjects` access scope.

The value of a field within a [`Metaobject`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metaobject). For fields that reference other resources, use the [`reference`](https://shopify.dev/docs/api/storefront/2026-04/objects/MetaobjectField#field-MetaobjectField.fields.reference) field for single references or [`references`](https://shopify.dev/docs/api/storefront/2026-04/objects/MetaobjectField#field-MetaobjectField.fields.references) for lists.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The field key.

* reference

  [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

  Token access required

  A referenced object if the field type is a resource reference.

* references

  [Metafield​Reference​Connection](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection)

  Token access required

  A list of referenced objects if the field type is a resource reference list.

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

  ***

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  The type name of the field. See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).

* value

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The field value.

***

### Map

#### Fields with this object

* [Metaobject.field](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.field)
* [Metaobject.fields](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.fields)
* [MetaobjectSEO.description](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectSEO#field-MetaobjectSEO.fields.description)
* [MetaobjectSEO.title](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectSEO#field-MetaobjectSEO.fields.title)

---



<a id="latest-objects-metaobjectseo"></a>


## Metaobject​SEO

object

Requires `unauthenticated_read_metaobjects` access scope.

SEO information for a metaobject.

### Fields

* description

  [Metaobject​Field](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField)

  Token access required

  The meta description.

* title

  [Metaobject​Field](https://shopify.dev/docs/api/storefront/latest/objects/MetaobjectField)

  Token access required

  The SEO title.

***

### Map

#### Fields with this object

* [Metaobject.seo](https://shopify.dev/docs/api/storefront/latest/objects/Metaobject#field-Metaobject.fields.seo)

---



<a id="latest-objects-model3d"></a>


## Model3d

object

Requires `unauthenticated_read_product_listings` access scope.

Represents a Shopify hosted 3D model.

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

* sources

  [\[Model3d​Source!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Model3dSource)

  non-null

  The sources for a 3d model.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Interfaces

* * [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Model3d Implements

#### Implements

* [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-model3dsource"></a>


## Model3d​Source

object

Requires `unauthenticated_read_product_listings` access scope.

Represents a source for a Shopify hosted 3d model.

### Fields

* filesize

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The filesize of the 3d model.

* format

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The format of the 3d model.

* mime​Type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The MIME type of the 3d model.

* url

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The URL of the 3d model.

***

### Map

#### Fields with this object

* [Model3d.sources](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.sources)

---



<a id="latest-objects-moneyv2"></a>


## Money​V2

object

A precise monetary value with its associated currency. Combines a decimal amount with a three-letter [`CurrencyCode`](https://shopify.dev/docs/api/storefront/2026-04/enums/CurrencyCode) to express prices, costs, and other financial values. For example, 12.99 USD.

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

### Map

#### Fields with this object

* [AppliedGiftCard.amountUsed](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.amountUsed)
* [AppliedGiftCard.balance](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.balance)
* [AppliedGiftCard.presentmentAmountUsed](https://shopify.dev/docs/api/storefront/latest/objects/AppliedGiftCard#field-AppliedGiftCard.fields.presentmentAmountUsed)
* [CartAutomaticDiscountAllocation.discountedAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartAutomaticDiscountAllocation#field-CartAutomaticDiscountAllocation.fields.discountedAmount)
* [CartCodeDiscountAllocation.discountedAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartCodeDiscountAllocation#field-CartCodeDiscountAllocation.fields.discountedAmount)
* [CartCost.checkoutChargeAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartCost#field-CartCost.fields.checkoutChargeAmount)
* [CartCost.subtotalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartCost#field-CartCost.fields.subtotalAmount)
* [CartCost.totalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartCost#field-CartCost.fields.totalAmount)
* [CartCustomDiscountAllocation.discountedAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartCustomDiscountAllocation#field-CartCustomDiscountAllocation.fields.discountedAmount)
* [CartDeliveryOption.estimatedCost](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryOption#field-CartDeliveryOption.fields.estimatedCost)
* [CartDiscountAllocation.discountedAmount](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation#fields-discountedAmount)
* [CartEstimatedCost.checkoutChargeAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost#field-CartEstimatedCost.fields.checkoutChargeAmount)
* [CartEstimatedCost.subtotalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost#field-CartEstimatedCost.fields.subtotalAmount)
* [CartEstimatedCost.totalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost#field-CartEstimatedCost.fields.totalAmount)
* [CartEstimatedCost.totalDutyAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost#field-CartEstimatedCost.fields.totalDutyAmount)
* [CartEstimatedCost.totalTaxAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartEstimatedCost#field-CartEstimatedCost.fields.totalTaxAmount)
* [CartLineCost.amountPerQuantity](https://shopify.dev/docs/api/storefront/latest/objects/CartLineCost#field-CartLineCost.fields.amountPerQuantity)
* [CartLineCost.compareAtAmountPerQuantity](https://shopify.dev/docs/api/storefront/latest/objects/CartLineCost#field-CartLineCost.fields.compareAtAmountPerQuantity)
* [CartLineCost.subtotalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineCost#field-CartLineCost.fields.subtotalAmount)
* [CartLineCost.totalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineCost#field-CartLineCost.fields.totalAmount)
* [CartLineEstimatedCost.amount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineEstimatedCost#field-CartLineEstimatedCost.fields.amount)
* [CartLineEstimatedCost.compareAtAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineEstimatedCost#field-CartLineEstimatedCost.fields.compareAtAmount)
* [CartLineEstimatedCost.subtotalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineEstimatedCost#field-CartLineEstimatedCost.fields.subtotalAmount)
* [CartLineEstimatedCost.totalAmount](https://shopify.dev/docs/api/storefront/latest/objects/CartLineEstimatedCost#field-CartLineEstimatedCost.fields.totalAmount)
* [DiscountAllocation.allocatedAmount](https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation#field-DiscountAllocation.fields.allocatedAmount)
* [Order.currentSubtotalPrice](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currentSubtotalPrice)
* [Order.currentTotalDuties](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currentTotalDuties)
* [Order.currentTotalPrice](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currentTotalPrice)
* [Order.currentTotalShippingPrice](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currentTotalShippingPrice)
* [Order.currentTotalTax](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currentTotalTax)

#### Possible type in

* [Pricing​Value](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)
* [Selling​Plan​Checkout​Charge​Value](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanCheckoutChargeValue)

---



<a id="latest-objects-mutation"></a>


## Mutation

object

The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start.

### Map

No referencing types

---



<a id="latest-objects-order"></a>


## Order

object

Requires `unauthenticated_read_customers` access scope.

An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

### Fields

* billing​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  Token access required

  The address associated with the payment method.

* canceled​At

  [Date​Time](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  Token access required

  The date and time when the order was canceled. Returns null if the order wasn't canceled.

* cancel​Reason

  [Order​Cancel​Reason](https://shopify.dev/docs/api/storefront/latest/enums/OrderCancelReason)

  Token access required

  The reason for the order's cancellation. Returns `null` if the order wasn't canceled.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

  non-null Token access required

  The code of the currency used for the payment.

* current​Subtotal​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes aren't included unless the order is a taxes-included order.

* current​Total​Duties

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Token access required

  The total cost of duties for the order, including refunds.

* current​Total​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed.

* current​Total​Shipping​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total cost of shipping, excluding shipping lines that have been refunded or removed. Taxes aren't included unless the order is a taxes-included order.

* current​Total​Tax

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total of all taxes applied to the order, excluding taxes for returned line items.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

  non-null Token access required

  A list of the custom attributes added to the order. For example, whether an order is a customer's first.

* customer​Locale

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The locale code in which this specific order happened.

* customer​Url

  [URL](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  Token access required

  The unique URL that the customer can use to access the order.

* discount​Applications

  [Discount​Application​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/DiscountApplicationConnection)

  non-null Token access required

  Discounts that have been applied on the order.

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

* edited

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null Token access required

  Whether the order has had any edits applied or not.

* email

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The customer's email address.

* financial​Status

  [Order​Financial​Status](https://shopify.dev/docs/api/storefront/latest/enums/OrderFinancialStatus)

  Token access required

  The financial status of the order.

* fulfillment​Status

  [Order​Fulfillment​Status!](https://shopify.dev/docs/api/storefront/latest/enums/OrderFulfillmentStatus)

  non-null Token access required

  The fulfillment status for the order.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null Token access required

  A globally-unique ID.

* line​Items

  [Order​Line​Item​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection)

  non-null Token access required

  List of the order’s line items.

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

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null Token access required

  Unique identifier for the order that appears on the order. For example, *#1000* or \_Store1001.

* order​Number

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null Token access required

  A unique numeric identifier for the order for use by shop owner and customer.

* original​Total​Duties

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Token access required

  The total cost of duties charged at checkout.

* original​Total​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total price of the order before any applied edits.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Token access required

  The customer's phone number for receiving SMS notifications.

* processed​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null Token access required

  The date and time when the order was imported. This value can be set to dates in the past when importing from other systems. If no value is provided, it will be auto-generated based on current date and time.

* shipping​Address

  [Mailing​Address](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress)

  Token access required

  The address to where the order will be shipped.

* shipping​Discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation)

  non-null Token access required

  The discounts that have been allocated onto the shipping line by discount applications.

* status​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null Token access required

  The unique URL for the order's status page.

* subtotal​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Token access required

  Price of the order before shipping and taxes.

* successful​Fulfillments

  [\[Fulfillment!\]](https://shopify.dev/docs/api/storefront/latest/objects/Fulfillment)

  Token access required

  List of the order’s successful fulfillments.

  * first

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

    Truncate the array result to this size.

  ***

* total​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).

* total​Refunded

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total amount that has been refunded.

* total​Shipping​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The total cost of shipping.

* total​Tax

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Token access required

  The total cost of taxes.

#### Deprecated fields

* subtotal​Price​V2

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Deprecated Token access required

* total​Price​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated Token access required

* total​Refunded​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated Token access required

* total​Shipping​Price​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated Token access required

* total​Tax​V2

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Deprecated Token access required

***

### Map

#### Fields and connections with this object

* [Customer.orders](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders)
* [OrderConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-nodes)
* [OrderEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/OrderEdge#field-OrderEdge.fields.node)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Order Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-orderlineitem"></a>


## Order​Line​Item

object

Requires `unauthenticated_read_product_listings` access scope.

Represents a single line in an order. There is one line item for each distinct product variant.

### Fields

* current​Quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The number of entries associated to the line item minus the items that have been removed.

* custom​Attributes

  [\[Attribute!\]!](https://shopify.dev/docs/api/storefront/latest/objects/Attribute)

  non-null

  List of custom attributes associated to the line item.

* discount​Allocations

  [\[Discount​Allocation!\]!](https://shopify.dev/docs/api/storefront/latest/objects/DiscountAllocation)

  non-null

  The discounts that have been allocated onto the order line item by discount applications.

* discounted​Total​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The total price of the line item, including discounts, and displayed in the presentment currency.

* original​Total​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it's displayed in the presentment currency.

* quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The number of products variants associated to the line item.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the product combined with title of the variant.

* variant

  [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

  The product variant object associated to the line item.

***

### Map

#### Fields and connections with this object

* [FulfillmentLineItem.lineItem](https://shopify.dev/docs/api/storefront/latest/objects/FulfillmentLineItem#field-FulfillmentLineItem.fields.lineItem)
* [Order.lineItems](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.lineItems)
* [OrderLineItemConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection#returns-nodes)
* [OrderLineItemEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItemEdge#field-OrderLineItemEdge.fields.node)

---



<a id="latest-objects-page"></a>


## Page

object

Requires `unauthenticated_read_content` access scope.

A [custom content page](https://help.shopify.com/manual/online-store/add-edit-pages) on a merchant's store. Pages display HTML-formatted content, such as "About Us", contact details, or store policies.

Each page has a unique [`handle`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page#field-Page.fields.handle) for URL routing and includes [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information for search engine optimization. Pages support [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) attachments for storing additional custom data.

### Fields

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

### Map

#### Fields and connections with this object

* [PageConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection#returns-nodes)
* [PageEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/PageEdge#field-PageEdge.fields.node)
* [PredictiveSearchResult.pages](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult#field-PredictiveSearchResult.fields.pages)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)
* [Search​Result​Item](https://shopify.dev/docs/api/storefront/latest/unions/SearchResultItem)

***

### Queries

* [page](https://shopify.dev/docs/api/storefront/latest/queries/page)

  query

  Retrieves a [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page) by its [`handle`](https://shopify.dev/docs/api/storefront/2026-04/queries/page#arguments-handle) or [`id`](https://shopify.dev/docs/api/storefront/2026-04/queries/page#arguments-id). Pages are static content pages that merchants display outside their product catalog, such as "About Us," "Contact," or policy pages.

  The returned page includes information such as the [HTML body content](https://shopify.dev/docs/api/storefront/2026-04/queries/page#returns-Page.fields.body), [`SEO`](https://shopify.dev/docs/api/storefront/2026-04/objects/SEO) information, and any associated [`Metafield`](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield) objects.

  * handle

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    ### Arguments

    The handle of the `Page`.

  * id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    The ID of the `Page`.

  ***

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

* [page​By​Handle](https://shopify.dev/docs/api/storefront/latest/queries/pageByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    The handle of the page.

  ***

***

### Page Queries

#### Queried by

* [page](https://shopify.dev/docs/api/storefront/latest/queries/page)
* [pages](https://shopify.dev/docs/api/storefront/latest/queries/pages)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

  * [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

    interface

***

### Page Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)
* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

---



<a id="latest-objects-pageinfo"></a>


## Page​Info

object

Returns information about pagination in a connection, in accordance with the [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).

### Fields

* end​Cursor

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The cursor corresponding to the last node in edges.

* has​Next​Page

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether there are more pages to fetch following the current page.

* has​Previous​Page

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether there are any pages prior to the current page.

* start​Cursor

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The cursor corresponding to the first node in edges.

***

### Map

#### Connections with this object

* [ArticleConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ArticleConnection#returns-pageInfo)
* [BaseCartLineConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/BaseCartLineConnection#returns-pageInfo)
* [BlogConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/BlogConnection#returns-pageInfo)
* [CartDeliveryGroupConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CartDeliveryGroupConnection#returns-pageInfo)
* [CollectionConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CollectionConnection#returns-pageInfo)
* [CommentConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/CommentConnection#returns-pageInfo)
* [DiscountApplicationConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/DiscountApplicationConnection#returns-pageInfo)
* [FulfillmentLineItemConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/FulfillmentLineItemConnection#returns-pageInfo)
* [ImageConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ImageConnection#returns-pageInfo)
* [LocationConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/LocationConnection#returns-pageInfo)
* [MailingAddressConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MailingAddressConnection#returns-pageInfo)
* [MediaConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MediaConnection#returns-pageInfo)
* [MetafieldReferenceConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MetafieldReferenceConnection#returns-pageInfo)
* [MetaobjectConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/MetaobjectConnection#returns-pageInfo)
* [OrderConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/OrderConnection#returns-pageInfo)
* [OrderLineItemConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/OrderLineItemConnection#returns-pageInfo)
* [PageConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/PageConnection#returns-pageInfo)
* [ProductConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-pageInfo)
* [ProductVariantComponentConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection#returns-pageInfo)
* [ProductVariantConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection#returns-pageInfo)
* [QuantityPriceBreakConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection#returns-pageInfo)
* [SearchResultItemConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SearchResultItemConnection#returns-pageInfo)
* [SellingPlanAllocationConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection#returns-pageInfo)
* [SellingPlanConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection#returns-pageInfo)
* [SellingPlanGroupConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection#returns-pageInfo)
* [StoreAvailabilityConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection#returns-pageInfo)
* [StringConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/StringConnection#returns-pageInfo)
* [UrlRedirectConnection.pageInfo](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection#returns-pageInfo)

---



<a id="latest-objects-paginatedsitemapresources"></a>


## Paginated​Sitemap​Resources

object

Type for paginating through multiple sitemap's resources.

### Fields

* has​Next​Page

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether there are more pages to fetch following the current page.

* items

  [\[Sitemap​Resource​Interface!\]!](https://shopify.dev/docs/api/storefront/latest/interfaces/SitemapResourceInterface)

  non-null

  List of sitemap resources for the current page. Note: The number of items varies between 0 and 250 per page.

***

### Map

#### Fields with this object

* [Sitemap.resources](https://shopify.dev/docs/api/storefront/latest/objects/Sitemap#field-Sitemap.fields.resources)

---



<a id="latest-objects-paymentsettings"></a>


## Payment​Settings

object

Settings related to payments.

### Fields

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

### Map

#### Fields with this object

* [Shop.paymentSettings](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.paymentSettings)

***

### Queries

* [payment​Settings](https://shopify.dev/docs/api/storefront/latest/queries/paymentSettings)

  query

  Settings related to payments.

***

### PaymentSettings Queries

#### Queried by

* [payment​Settings](https://shopify.dev/docs/api/storefront/latest/queries/paymentSettings)

---



<a id="latest-objects-predictivesearchresult"></a>


## Predictive​Search​Result

object

Returned by the [`predictiveSearch`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) query to power type-ahead search experiences. Includes matching [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Article`](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) objects, along with query suggestions that help customers refine their search.

### Fields

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

### Map

No referencing types

***

### Queries

* [predictive​Search](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch)

  query

  Returns suggested results as customers type in a search field, enabling type-ahead search experiences. The query matches [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [pages](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [articles](https://shopify.dev/docs/api/storefront/2026-04/objects/Article) based on partial search terms, and also provides [search query suggestions](https://shopify.dev/docs/api/storefront/2026-04/objects/SearchQuerySuggestion) to help customers refine their search.

  You can filter results by resource type and limit the quantity. The [`limitScope`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch#arguments-limitScope) argument controls whether limits apply across all result types or per type. Use [`unavailableProducts`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch#arguments-unavailableProducts) to control how out-of-stock products appear in results.

  * limit

    [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

    ### Arguments

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

***

### PredictiveSearchResult Queries

#### Queried by

* [predictive​Search](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch)

---



<a id="latest-objects-pricingpercentagevalue"></a>


## Pricing​Percentage​Value

object

A percentage discount value applied to cart items or orders. Returned as part of the [`PricingValue`](https://shopify.dev/docs/api/storefront/2026-04/unions/PricingValue) union on [discount applications](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication), where it represents discounts calculated as a percentage off rather than a [fixed amount](https://shopify.dev/docs/api/storefront/2026-04/objects/MoneyV2).

### Fields

* percentage

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The percentage value of the object.

***

### Map

#### Possible type in

* [Pricing​Value](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)

---



<a id="latest-objects-product"></a>


## Product

object

Requires `unauthenticated_read_product_listings` access scope.

Represents an item listed in a shop's catalog.

Products support multiple [product variants](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

Products can be organized into [collections](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield).

Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

### Fields

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

### Map

#### Fields and connections with this object

* [Collection.products](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products)
* [PredictiveSearchResult.products](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult#field-PredictiveSearchResult.fields.products)
* [ProductConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductConnection#returns-nodes)
* [ProductEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/ProductEdge#field-ProductEdge.fields.node)
* [ProductVariant.product](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.product)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)
* [Search​Result​Item](https://shopify.dev/docs/api/storefront/latest/unions/SearchResultItem)

***

### Queries

* [product](https://shopify.dev/docs/api/storefront/latest/queries/product)

  query

  Retrieves a single [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) by its ID or handle. Use this query to build product detail pages, access variant and pricing information, or fetch product media and [metafields](https://shopify.dev/docs/api/storefront/2026-04/objects/Metafield). See some [examples of querying products](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/getting-started).

  * id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    ### Arguments

    The ID of the `Product`.

  * handle

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The handle of the `Product`.

  ***

* [product​Recommendations](https://shopify.dev/docs/api/storefront/latest/queries/productRecommendations)

  query

  Returns recommended products for a given product, identified by either ID or handle. Use the [`intent`](https://shopify.dev/docs/api/storefront/2026-04/enums/ProductRecommendationIntent) argument to control the recommendation strategy.

  Shopify [auto-generates related recommendations](https://shopify.dev/docs/storefronts/themes/product-merchandising/recommendations) based on sales data, product descriptions, and collection relationships. Complementary recommendations require [manual configuration](https://help.shopify.com/manual/online-store/storefront-search/search-and-discovery-recommendations) through the Shopify Search & Discovery app. Returns up to ten [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) objects.

  * product​Id

    [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

    ### Arguments

    The id of the product.

  * product​Handle

    [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    The handle of the product.

  * intent

    [Product​Recommendation​Intent](https://shopify.dev/docs/api/storefront/latest/enums/ProductRecommendationIntent)

    Default:RELATED

    The recommendation intent that is used to generate product recommendations. You can use intent to generate product recommendations on various pages across the channels, according to different strategies.

  ***

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

* [product​By​Handle](https://shopify.dev/docs/api/storefront/latest/queries/productByHandle)

  query

  Deprecated

  * handle

    [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

    required

    ### Arguments

    A unique, human-readable string of the product's title. A handle can contain letters, hyphens (`-`), and numbers, but no spaces. The handle is used in the online store URL for the product.

  ***

***

### Product Queries

#### Queried by

* [product](https://shopify.dev/docs/api/storefront/latest/queries/product)
* [product​Recommendations](https://shopify.dev/docs/api/storefront/latest/queries/productRecommendations)
* [products](https://shopify.dev/docs/api/storefront/latest/queries/products)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

  * [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)

    interface

  * [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

    interface

***

### Product Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)
* [Online​Store​Publishable](https://shopify.dev/docs/api/storefront/latest/interfaces/OnlineStorePublishable)
* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

---



<a id="latest-objects-productoption"></a>


## Product​Option

object

Requires `unauthenticated_read_product_listings` access scope.

A customizable product attribute that customers select when purchasing, such as "Size", "Color", or "Material". Each option has a name and a set of [`ProductOptionValue`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductOptionValue) objects representing the available choices.

Different combinations of option values create distinct [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) objects. Option values can include visual swatches that display colors or images to help customers make selections. Option names have a 255-character limit.

Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

### Fields

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The product option’s name.

* option​Values

  [\[Product​Option​Value!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ProductOptionValue)

  non-null

  The corresponding option value to the product option.

* values

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-nullDeprecated

***

### Map

#### Fields with this object

* [Product.options](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.options)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ProductOption Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-productoptionvalue"></a>


## Product​Option​Value

object

Requires `unauthenticated_read_product_listings` access scope.

A specific value for a [`ProductOption`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductOption), such as "Red" or "Blue" for a "Color" option. Option values combine across different options to create [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) objects.

Each value can include a visual swatch that displays a color or image. The [`firstSelectableVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductOptionValue#field-ProductOptionValue.fields.firstSelectableVariant) field returns the variant that combines this option value with the lowest-position values for all other options. This is useful for building product selection interfaces.

Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

### Fields

* first​Selectable​Variant

  [Product​Variant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

  The product variant that combines this option value with the lowest-position option values for all other options.

  This field will always return a variant, provided a variant including this option value exists.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the product option value.

* swatch

  [Product​Option​Value​Swatch](https://shopify.dev/docs/api/storefront/latest/objects/ProductOptionValueSwatch)

  The swatch of the product option value.

***

### Map

#### Fields with this object

* [ProductOption.optionValues](https://shopify.dev/docs/api/storefront/latest/objects/ProductOption#field-ProductOption.fields.optionValues)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ProductOptionValue Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-productoptionvalueswatch"></a>


## Product​Option​Value​Swatch

object

Requires `unauthenticated_read_product_listings` access scope.

A visual representation for a [`ProductOptionValue`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductOptionValue), such as a color or image. Swatches help customers visualize options like "Red" or "Blue" without relying solely on text labels.

### Fields

* color

  [Color](https://shopify.dev/docs/api/storefront/latest/scalars/Color)

  The swatch color.

* image

  [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

  The swatch image.

***

### Map

#### Fields with this object

* [ProductOptionValue.swatch](https://shopify.dev/docs/api/storefront/latest/objects/ProductOptionValue#field-ProductOptionValue.fields.swatch)

---



<a id="latest-objects-productpricerange"></a>


## Product​Price​Range

object

Requires `unauthenticated_read_product_listings` access scope.

The minimum and maximum prices across all variants of a [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product).

### Fields

* max​Variant​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The highest variant's price.

* min​Variant​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The lowest variant's price.

***

### Map

#### Fields with this object

* [Product.compareAtPriceRange](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.compareAtPriceRange)
* [Product.priceRange](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.priceRange)

---



<a id="latest-objects-productvariant"></a>


## Product​Variant

object

Requires `unauthenticated_read_product_listings` access scope.

A specific version of a [product](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayInstallmentsPricing) for flexible payment options.

### Fields

* available​For​Sale

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Indicates if the product variant is available for sale.

* barcode

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The barcode (for example, ISBN, UPC, or GTIN) associated with the variant.

* compare​At​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.

* components

  [Product​Variant​Component​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection)

  non-null

  List of bundles components included in the variant considering only fixed bundles.

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

  ***

* currently​Not​In​Stock

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether a product is out of stock but still available for purchase (used for backorders).

* grouped​By

  [Product​Variant​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection)

  non-null

  List of bundles that include this variant considering only fixed bundles.

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

  ***

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* image

  [Image](https://shopify.dev/docs/api/storefront/latest/objects/Image)

  Image associated with the product variant. This field falls back to the product image if no image is available.

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

* price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The product variant’s price.

* product

  [Product!](https://shopify.dev/docs/api/storefront/latest/objects/Product)

  non-null

  The product object that the product variant belongs to.

* quantity​Available

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  Token access required

  The total sellable quantity of the variant for online sales channels.

* quantity​Price​Breaks

  [Quantity​Price​Break​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection)

  non-null

  A list of quantity breaks for the product variant.

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

  ***

* quantity​Rule

  [Quantity​Rule!](https://shopify.dev/docs/api/storefront/latest/objects/QuantityRule)

  non-null

  The quantity rule for the product variant in a given context.

* requires​Components

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether a product variant requires components. The default value is `false`. If `true`, then the product variant can only be purchased as a parent bundle with components.

* requires​Shipping

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether a customer needs to provide a shipping address when placing an order for the product variant.

* selected​Options

  [\[Selected​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SelectedOption)

  non-null

  List of product options applied to the variant.

* selling​Plan​Allocations

  [Selling​Plan​Allocation​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection)

  non-null

  Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing.

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

* shop​Pay​Installments​Pricing

  [Shop​Pay​Installments​Product​Variant​Pricing](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsProductVariantPricing)

  Token access required

  The Shop Pay Installments pricing information for the product variant.

* sku

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The SKU (stock keeping unit) associated with the variant.

* store​Availability

  [Store​Availability​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection)

  non-null

  The in-store pickup availability of this variant by location.

  * near

    [Geo​Coordinate​Input](https://shopify.dev/docs/api/storefront/latest/input-objects/GeoCoordinateInput)

    ### Arguments

    Used to sort results based on proximity to the provided location.

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

* taxable

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether tax is charged when the product variant is sold.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The product variant’s title.

* unit​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The unit price value for the variant based on the variant's measurement.

* unit​Price​Measurement

  [Unit​Price​Measurement](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement)

  The unit price measurement for the variant.

* weight

  [Float](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  The weight of the product variant in the unit system specified with `weight_unit`.

* weight​Unit

  [Weight​Unit!](https://shopify.dev/docs/api/storefront/latest/enums/WeightUnit)

  non-null

  Unit of measurement for weight.

#### Deprecated fields

* compare​At​Price​V2

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  Deprecated

* price​V2

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-nullDeprecated

***

### Map

#### Fields and connections with this object

* [OrderLineItem.variant](https://shopify.dev/docs/api/storefront/latest/objects/OrderLineItem#field-OrderLineItem.fields.variant)
* [Product.adjacentVariants](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.adjacentVariants)
* [Product.selectedOrFirstAvailableVariant](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant)
* [Product.variantBySelectedOptions](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variantBySelectedOptions)
* [Product.variants](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants)
* [ProductOptionValue.firstSelectableVariant](https://shopify.dev/docs/api/storefront/latest/objects/ProductOptionValue#field-ProductOptionValue.fields.firstSelectableVariant)
* [ProductVariant.groupedBy](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.groupedBy)
* [ProductVariantComponent.productVariant](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantComponent#field-ProductVariantComponent.fields.productVariant)
* [ProductVariantConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantConnection#returns-nodes)
* [ProductVariantEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantEdge#field-ProductVariantEdge.fields.node)

#### Possible type in

* [Merchandise](https://shopify.dev/docs/api/storefront/latest/unions/Merchandise)
* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)
* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### ProductVariant Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-productvariantcomponent"></a>


## Product​Variant​Component

object

Requires `unauthenticated_read_product_listings` access scope.

An individual product variant included in a [fixed bundle](https://shopify.dev/docs/apps/build/product-merchandising/bundles). Fixed bundles group multiple products together and sell them as a single unit, with the bundle's inventory determined by its components.

Access components through the `ProductVariant` object's [`components`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant#field-ProductVariant.fields.components) field.

### Fields

* product​Variant

  [Product​Variant!](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant)

  non-null

  The product variant object that the component belongs to.

* quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The quantity of component present in the bundle.

***

### Map

#### Fields and connections with this object

* [ProductVariant.components](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.components)
* [ProductVariantComponentConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/ProductVariantComponentConnection#returns-nodes)
* [ProductVariantComponentEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariantComponentEdge#field-ProductVariantComponentEdge.fields.node)

---



<a id="latest-objects-purchasingcompany"></a>


## Purchasing​Company

object

Represents information about the buyer that is interacting with the cart.

### Fields

* company

  [Company!](https://shopify.dev/docs/api/storefront/latest/objects/Company)

  non-null

  The company associated to the order or draft order.

* contact

  [Company​Contact](https://shopify.dev/docs/api/storefront/latest/objects/CompanyContact)

  The company contact associated to the order or draft order.

* location

  [Company​Location!](https://shopify.dev/docs/api/storefront/latest/objects/CompanyLocation)

  non-null

  The company location associated to the order or draft order.

***

### Map

#### Fields with this object

* [CartBuyerIdentity.purchasingCompany](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.purchasingCompany)

---



<a id="latest-objects-quantitypricebreak"></a>


## Quantity​Price​Break

object

Requires `unauthenticated_read_product_listings` access scope.

Quantity price breaks lets you offer different rates that are based on the amount of a specific variant being ordered.

### Fields

* minimum​Quantity

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  Minimum quantity required to reach new quantity break price.

* price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The price of variant after reaching the minimum quanity.

***

### Map

#### Fields and connections with this object

* [ProductVariant.quantityPriceBreaks](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.quantityPriceBreaks)
* [QuantityPriceBreakConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/QuantityPriceBreakConnection#returns-nodes)
* [QuantityPriceBreakEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/QuantityPriceBreakEdge#field-QuantityPriceBreakEdge.fields.node)

---



<a id="latest-objects-quantityrule"></a>


## Quantity​Rule

object

Requires `unauthenticated_read_product_listings` access scope.

The quantity rule for the product variant in a given context.

### Fields

* increment

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The value that specifies the quantity increment between minimum and maximum of the rule. Only quantities divisible by this value will be considered valid.

  The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum must be divisible by this value.

* maximum

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  An optional value that defines the highest allowed quantity purchased by the customer. If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.

* minimum

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The value that defines the lowest allowed quantity purchased by the customer. The minimum must be a multiple of the quantity rule's increment.

***

### Map

#### Fields with this object

* [ProductVariant.quantityRule](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.quantityRule)

---



<a id="latest-objects-queryroot"></a>


## Query​Root

object

The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/2026-04/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/2026-04/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/2026-04/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/2026-04/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/2026-04/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries enable storefront search functionality.

Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

### Map

No referencing types

---



<a id="latest-objects-seo"></a>


## SEO

object

Search engine optimization metadata for a resource. The title and description appear in search engine results and browser tabs.

### Fields

* description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The meta description.

* title

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The SEO title.

***

### Map

#### Fields with this object

* [Article.seo](https://shopify.dev/docs/api/storefront/latest/objects/Article#field-Article.fields.seo)
* [Blog.seo](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.seo)
* [Collection.seo](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.seo)
* [Page.seo](https://shopify.dev/docs/api/storefront/latest/objects/Page#field-Page.fields.seo)
* [Product.seo](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.seo)

---



<a id="latest-objects-scriptdiscountapplication"></a>


## Script​Discount​Application

object

A discount application created by a Shopify Script. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication) interface and captures the discount's value, allocation method, and targeting rules at the time the script applied it.

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

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the application as defined by the Script.

* value

  [Pricing​Value!](https://shopify.dev/docs/api/storefront/latest/unions/PricingValue)

  non-null

  The value of the discount application.

***

### Map

No referencing types

***

### Interfaces

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

  interface

***

### ScriptDiscountApplication Implements

#### Implements

* [Discount​Application](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication)

---



<a id="latest-objects-searchquerysuggestion"></a>


## Search​Query​Suggestion

object

A suggested search term returned by the [`predictiveSearch`](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) query. Query suggestions help customers refine their searches by showing relevant terms as they type.

The [`text`](https://shopify.dev/docs/api/storefront/2026-04/objects/SearchQuerySuggestion#field-SearchQuerySuggestion.fields.text) field provides the plain suggestion, while [`styledText`](https://shopify.dev/docs/api/storefront/2026-04/objects/SearchQuerySuggestion#field-SearchQuerySuggestion.fields.styledText) includes HTML tags to highlight matching portions. Implements [`Trackable`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Trackable) for analytics reporting on search traffic origins.

### Fields

* styled​Text

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The text of the search query suggestion with highlighted HTML tags.

* text

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The text of the search query suggestion.

* tracking​Parameters

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  URL parameters to be added to a page URL to track the origin of on-site search traffic for [analytics reporting](https://help.shopify.com/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports). Returns a result when accessed through the [search](https://shopify.dev/docs/api/storefront/2026-04/queries/search) or [predictiveSearch](https://shopify.dev/docs/api/storefront/2026-04/queries/predictiveSearch) queries, otherwise returns null.

***

### Map

#### Fields with this object

* [PredictiveSearchResult.queries](https://shopify.dev/docs/api/storefront/latest/objects/PredictiveSearchResult#field-PredictiveSearchResult.fields.queries)

***

### Interfaces

* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

  interface

***

### SearchQuerySuggestion Implements

#### Implements

* [Trackable](https://shopify.dev/docs/api/storefront/latest/interfaces/Trackable)

---



<a id="latest-objects-selectedoption"></a>


## Selected​Option

object

Requires `unauthenticated_read_product_listings` access scope.

A name/value pair representing a product option selection on a variant. The [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) object's [`selectedOptions`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant#field-ProductVariant.fields.selectedOptions) field returns this to indicate which options define that variant, such as "Size: Large" or "Color: Red".

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

#### Fields with this object

* [ProductVariant.selectedOptions](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.selectedOptions)

---



<a id="latest-objects-sellingplan"></a>


## Selling​Plan

object

Requires `unauthenticated_read_selling_plans` access scope.

Represents deferred or recurring purchase options for [products](https://shopify.dev/docs/api/storefront/2026-04/objects/Product) and [product variants](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant), such as subscriptions, pre-orders, or try-before-you-buy. Each selling plan belongs to a [`SellingPlanGroup`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlanGroup) and defines billing, pricing, inventory, and delivery policies.

### Fields

* billing​Policy

  [Selling​Plan​Billing​Policy](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanBillingPolicy)

  The billing policy for the selling plan.

* checkout​Charge

  [Selling​Plan​Checkout​Charge!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanCheckoutCharge)

  non-null

  The initial payment due for the purchase.

* delivery​Policy

  [Selling​Plan​Delivery​Policy](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanDeliveryPolicy)

  The delivery policy for the selling plan.

* description

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The description of the selling plan.

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

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'.

* options

  [\[Selling​Plan​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanOption)

  non-null

  The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.

* price​Adjustments

  [\[Selling​Plan​Price​Adjustment!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanPriceAdjustment)

  non-null

  The price adjustments that a selling plan makes when a variant is purchased with a selling plan.

* recurring​Deliveries

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether purchasing the selling plan will result in multiple deliveries.

***

### Map

#### Fields and connections with this object

* [SellingPlanAllocation.sellingPlan](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocation#field-SellingPlanAllocation.fields.sellingPlan)
* [SellingPlanConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection#returns-nodes)
* [SellingPlanEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanEdge#field-SellingPlanEdge.fields.node)
* [SellingPlanGroup.sellingPlans](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Interfaces

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

  interface

***

### SellingPlan Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

---



<a id="latest-objects-sellingplanallocation"></a>


## Selling​Plan​Allocation

object

Requires `unauthenticated_read_selling_plans` access scope.

Links a [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) to a [`SellingPlan`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlan), providing the pricing details for that specific combination. Each allocation includes the checkout charge amount, any remaining balance due for the purchase, and up to two price adjustments that show how the selling plan affects the variant's price.

Selling plan allocations are available on product variants and [cart lines](https://shopify.dev/docs/api/storefront/2026-04/objects/CartLine), enabling storefronts to display information such as subscription or purchase option pricing before and during checkout.

### Fields

* checkout​Charge​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The checkout charge amount due for the purchase.

* price​Adjustments

  [\[Selling​Plan​Allocation​Price​Adjustment!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocationPriceAdjustment)

  non-null

  A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it.

* remaining​Balance​Charge​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The remaining balance charge amount due for the purchase.

* selling​Plan

  [Selling​Plan!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan)

  non-null

  A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.

***

### Map

#### Fields and connections with this object

* [BaseCartLine.sellingPlanAllocation](https://shopify.dev/docs/api/storefront/latest/interfaces/BaseCartLine#fields-sellingPlanAllocation)
* [CartLine.sellingPlanAllocation](https://shopify.dev/docs/api/storefront/latest/objects/CartLine#field-CartLine.fields.sellingPlanAllocation)
* [ComponentizableCartLine.sellingPlanAllocation](https://shopify.dev/docs/api/storefront/latest/objects/ComponentizableCartLine#field-ComponentizableCartLine.fields.sellingPlanAllocation)
* [ProductVariant.sellingPlanAllocations](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.sellingPlanAllocations)
* [SellingPlanAllocationConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanAllocationConnection#returns-nodes)
* [SellingPlanAllocationEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocationEdge#field-SellingPlanAllocationEdge.fields.node)

---



<a id="latest-objects-sellingplanallocationpriceadjustment"></a>


## Selling​Plan​Allocation​Price​Adjustment

object

Requires `unauthenticated_read_selling_plans` access scope.

The resulting prices for variants when they're purchased with a specific selling plan.

### Fields

* compare​At​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00.

* per​Delivery​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00.

* price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00.

* unit​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`.

***

### Map

#### Fields with this object

* [SellingPlanAllocation.priceAdjustments](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanAllocation#field-SellingPlanAllocation.fields.priceAdjustments)

---



<a id="latest-objects-sellingplancheckoutcharge"></a>


## Selling​Plan​Checkout​Charge

object

Requires `unauthenticated_read_selling_plans` access scope.

The initial payment due for the purchase.

### Fields

* type

  [Selling​Plan​Checkout​Charge​Type!](https://shopify.dev/docs/api/storefront/latest/enums/SellingPlanCheckoutChargeType)

  non-null

  The charge type for the checkout charge.

* value

  [Selling​Plan​Checkout​Charge​Value!](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanCheckoutChargeValue)

  non-null

  The charge value for the checkout charge.

***

### Map

#### Fields with this object

* [SellingPlan.checkoutCharge](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.checkoutCharge)

---



<a id="latest-objects-sellingplancheckoutchargepercentagevalue"></a>


## Selling​Plan​Checkout​Charge​Percentage​Value

object

Requires `unauthenticated_read_selling_plans` access scope.

The percentage value of the price used for checkout charge.

### Fields

* percentage

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The percentage value of the price used for checkout charge.

***

### Map

#### Possible type in

* [Selling​Plan​Checkout​Charge​Value](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanCheckoutChargeValue)

---



<a id="latest-objects-sellingplanfixedamountpriceadjustment"></a>


## Selling​Plan​Fixed​Amount​Price​Adjustment

object

Requires `unauthenticated_read_selling_plans` access scope.

A fixed amount that's deducted from the original variant price. For example, $10.00 off.

### Fields

* adjustment​Amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The money value of the price adjustment.

***

### Map

#### Possible type in

* [Selling​Plan​Price​Adjustment​Value](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanPriceAdjustmentValue)

---



<a id="latest-objects-sellingplanfixedpriceadjustment"></a>


## Selling​Plan​Fixed​Price​Adjustment

object

Requires `unauthenticated_read_selling_plans` access scope.

A fixed price adjustment for a variant that's purchased with a selling plan.

### Fields

* price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  A new price of the variant when it's purchased with the selling plan.

***

### Map

#### Possible type in

* [Selling​Plan​Price​Adjustment​Value](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanPriceAdjustmentValue)

---



<a id="latest-objects-sellingplangroup"></a>


## Selling​Plan​Group

object

Requires `unauthenticated_read_selling_plans` access scope.

A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/storefront/2026-04/objects/SellingPlan) objects that share the same selling method and options.

The `SellingPlanGroup` acts as a container for one or more individual `SellingPlan` objects, enabling merchants to offer multiple options (like weekly or monthly deliveries) under one, unified category on a product page.

### Fields

* app​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  A display friendly name for the app that created the selling plan group.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the selling plan group.

* options

  [\[Selling​Plan​Group​Option!\]!](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroupOption)

  non-null

  Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product.

* selling​Plans

  [Selling​Plan​Connection!](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanConnection)

  non-null

  A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'.

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

***

### Map

#### Fields and connections with this object

* [Product.sellingPlanGroups](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.sellingPlanGroups)
* [SellingPlanGroupConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/SellingPlanGroupConnection#returns-nodes)
* [SellingPlanGroupEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroupEdge#field-SellingPlanGroupEdge.fields.node)

---



<a id="latest-objects-sellingplangroupoption"></a>


## Selling​Plan​Group​Option

object

Requires `unauthenticated_read_selling_plans` access scope.

Represents an option on a selling plan group that's available in the drop-down list in the storefront.

Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.

### Fields

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The name of the option. For example, 'Delivery every'.

* values

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'.

***

### Map

#### Fields with this object

* [SellingPlanGroup.options](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.options)

---



<a id="latest-objects-sellingplanoption"></a>


## Selling​Plan​Option

object

Requires `unauthenticated_read_selling_plans` access scope.

An option provided by a Selling Plan.

### Fields

* name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The name of the option (ie "Delivery every").

* value

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The value of the option (ie "Month").

***

### Map

#### Fields with this object

* [SellingPlan.options](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.options)

---



<a id="latest-objects-sellingplanpercentagepriceadjustment"></a>


## Selling​Plan​Percentage​Price​Adjustment

object

Requires `unauthenticated_read_selling_plans` access scope.

A percentage amount that's deducted from the original variant price. For example, 10% off.

### Fields

* adjustment​Percentage

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The percentage value of the price adjustment.

***

### Map

#### Possible type in

* [Selling​Plan​Price​Adjustment​Value](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanPriceAdjustmentValue)

---



<a id="latest-objects-sellingplanpriceadjustment"></a>


## Selling​Plan​Price​Adjustment

object

Requires `unauthenticated_read_selling_plans` access scope.

Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price.

### Fields

* adjustment​Value

  [Selling​Plan​Price​Adjustment​Value!](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanPriceAdjustmentValue)

  non-null

  The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price.

* order​Count

  [Int](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`.

***

### Map

#### Fields with this object

* [SellingPlan.priceAdjustments](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlan#field-SellingPlan.fields.priceAdjustments)

---



<a id="latest-objects-sellingplanrecurringbillingpolicy"></a>


## Selling​Plan​Recurring​Billing​Policy

object

The recurring billing policy for the selling plan.

### Fields

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/storefront/latest/enums/SellingPlanInterval)

  non-null

  The billing frequency, it can be either: day, week, month or year.

* interval​Count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The number of intervals between billings.

***

### Map

#### Possible type in

* [Selling​Plan​Billing​Policy](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanBillingPolicy)

---



<a id="latest-objects-sellingplanrecurringdeliverypolicy"></a>


## Selling​Plan​Recurring​Delivery​Policy

object

The recurring delivery policy for the selling plan.

### Fields

* interval

  [Selling​Plan​Interval!](https://shopify.dev/docs/api/storefront/latest/enums/SellingPlanInterval)

  non-null

  The delivery frequency, it can be either: day, week, month or year.

* interval​Count

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The number of intervals between deliveries.

***

### Map

#### Possible type in

* [Selling​Plan​Delivery​Policy](https://shopify.dev/docs/api/storefront/latest/unions/SellingPlanDeliveryPolicy)

---



<a id="latest-objects-shop"></a>


## Shop

object

Requires `unauthenticated_read_product_listings` access scope.

The central hub for store-wide settings and information accessible through the Storefront API. Provides the shop's name, description, and branding configuration including logos and colors through the [`Brand`](https://shopify.dev/docs/api/storefront/2026-04/objects/Brand) object.

Access store policies such as privacy, refund, shipping, and terms of service via [`ShopPolicy`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPolicy), and the subscription policy via [`ShopPolicyWithDefault`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPolicyWithDefault). [`PaymentSettings`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaymentSettings) expose accepted card brands, supported digital wallets, and enabled presentment currencies. The object also includes the primary [`Domain`](https://shopify.dev/docs/api/storefront/2026-04/objects/Domain), countries the shop ships to, [`ShopPayInstallmentsPricing`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayInstallmentsPricing), and [`SocialLoginProvider`](https://shopify.dev/docs/api/storefront/2026-04/objects/SocialLoginProvider) options for customer accounts.

### Fields

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

### Map

#### Possible type in

* [Metafield​Parent​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldParentResource)

***

### Queries

* [shop](https://shopify.dev/docs/api/storefront/latest/queries/shop)

  query

  Returns the [`Shop`](https://shopify.dev/docs/api/storefront/2026-04/objects/Shop) associated with the storefront access token. The `Shop` object provides general store information such as the shop name, description, and primary domain.

  Use this query to access data like store policies, [`PaymentSettings`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaymentSettings), [`Brand`](https://shopify.dev/docs/api/storefront/2026-04/objects/Brand) configuration, and shipping destinations. It also exposes [`ShopPayInstallmentsPricing`](https://shopify.dev/docs/api/storefront/2026-04/objects/ShopPayInstallmentsPricing) and [`SocialLoginProvider`](https://shopify.dev/docs/api/storefront/2026-04/objects/SocialLoginProvider) options for customer accounts.

***

### Shop Queries

#### Queried by

* [shop](https://shopify.dev/docs/api/storefront/latest/queries/shop)

***

### Interfaces

* * [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Shop Implements

#### Implements

* [Has​Metafields](https://shopify.dev/docs/api/storefront/latest/interfaces/HasMetafields)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-shoppayinstallmentsfinancingplan"></a>


## Shop​Pay​Installments​Financing​Plan

object

Requires `unauthenticated_read_checkouts` access scope.

The financing plan in Shop Pay Installments.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null Token access required

  A globally-unique ID.

* max​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The maximum price to qualify for the financing plan.

* min​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The minimum price to qualify for the financing plan.

* terms

  [\[Shop​Pay​Installments​Financing​Plan​Term!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm)

  non-null Token access required

  The terms of the financing plan.

***

### Map

#### Fields with this object

* [ShopPayInstallmentsPricing.financingPlans](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsPricing#field-ShopPayInstallmentsPricing.fields.financingPlans)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ShopPayInstallmentsFinancingPlan Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-shoppayinstallmentsfinancingplanterm"></a>


## Shop​Pay​Installments​Financing​Plan​Term

object

Requires `unauthenticated_read_checkouts` access scope.

The terms of the financing plan in Shop Pay Installments.

### Fields

* apr

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null Token access required

  The annual percentage rate (APR) of the financing plan.

* frequency

  [Shop​Pay​Installments​Financing​Plan​Frequency!](https://shopify.dev/docs/api/storefront/latest/enums/ShopPayInstallmentsFinancingPlanFrequency)

  non-null Token access required

  The payment frequency for the financing plan.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null Token access required

  A globally-unique ID.

* installments​Count

  [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

  Token access required

  The number of installments for the financing plan.

* loan​Type

  [Shop​Pay​Installments​Loan!](https://shopify.dev/docs/api/storefront/latest/enums/ShopPayInstallmentsLoan)

  non-null Token access required

  The type of loan for the financing plan.

***

### Map

#### Fields with this object

* [ShopPayInstallmentsFinancingPlan.terms](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlan#field-ShopPayInstallmentsFinancingPlan.fields.terms)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ShopPayInstallmentsFinancingPlanTerm Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-shoppayinstallmentspricing"></a>


## Shop​Pay​Installments​Pricing

object

Requires `unauthenticated_read_shop_pay_installments_pricing` access scope.

The result for a Shop Pay Installments pricing request.

### Fields

* financing​Plans

  [\[Shop​Pay​Installments​Financing​Plan!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlan)

  non-null Token access required

  The financing plans available for the given price range.

* max​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The maximum price to qualify for financing.

* min​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The minimum price to qualify for financing.

***

### Map

#### Fields with this object

* [Shop.shopPayInstallmentsPricing](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.shopPayInstallmentsPricing)

---



<a id="latest-objects-shoppayinstallmentsproductvariantpricing"></a>


## Shop​Pay​Installments​Product​Variant​Pricing

object

Requires `unauthenticated_read_shop_pay_installments_pricing` access scope.

The shop pay installments pricing information for a product variant.

### Fields

* available

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null Token access required

  Whether the product variant is available.

* eligible

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null Token access required

  Whether the product variant is eligible for Shop Pay Installments.

* full​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The full price of the product variant.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null Token access required

  The ID of the product variant.

* installments​Count

  [Count](https://shopify.dev/docs/api/storefront/latest/objects/Count)

  Token access required

  The number of payment terms available for the product variant.

* price​Per​Term

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null Token access required

  The price per term for the product variant.

***

### Map

#### Fields with this object

* [ProductVariant.shopPayInstallmentsPricing](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.shopPayInstallmentsPricing)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ShopPayInstallmentsProductVariantPricing Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-shoppaypaymentrequest"></a>


## Shop​Pay​Payment​Request

object

Represents a Shop Pay payment request.

### Fields

* delivery​Methods

  [\[Shop​Pay​Payment​Request​Delivery​Method!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDeliveryMethod)

  non-null

  The delivery methods for the payment request.

* discount​Codes

  [\[String!\]!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The discount codes for the payment request.

* discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDiscount)

  The discounts for the payment request order.

* line​Items

  [\[Shop​Pay​Payment​Request​Line​Item!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem)

  non-null

  The line items for the payment request.

* locale

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The locale for the payment request.

* presentment​Currency

  [Currency​Code!](https://shopify.dev/docs/api/storefront/latest/enums/CurrencyCode)

  non-null

  The presentment currency for the payment request.

* selected​Delivery​Method​Type

  [Shop​Pay​Payment​Request​Delivery​Method​Type!](https://shopify.dev/docs/api/storefront/latest/enums/ShopPayPaymentRequestDeliveryMethodType)

  non-null

  The delivery method type for the payment request.

* shipping​Address

  [Shop​Pay​Payment​Request​Contact​Field](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestContactField)

  The shipping address for the payment request.

* shipping​Lines

  [\[Shop​Pay​Payment​Request​Shipping​Line!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestShippingLine)

  non-null

  The shipping lines for the payment request.

* subtotal

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The subtotal amount for the payment request.

* total

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The total amount for the payment request.

* total​Shipping​Price

  [Shop​Pay​Payment​Request​Total​Shipping​Price](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestTotalShippingPrice)

  The total shipping price for the payment request.

* total​Tax

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The total tax for the payment request.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequestReceipt.paymentRequest](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestReceipt#field-ShopPayPaymentRequestReceipt.fields.paymentRequest)
* [ShopPayPaymentRequestSession.paymentRequest](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestSession#field-ShopPayPaymentRequestSession.fields.paymentRequest)

---



<a id="latest-objects-shoppaypaymentrequestcontactfield"></a>


## Shop​Pay​Payment​Request​Contact​Field

object

Represents a contact field for a Shop Pay payment request.

### Fields

* address1

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The first address line of the contact field.

* address2

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The second address line of the contact field.

* city

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The city of the contact field.

* company​Name

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The company name of the contact field.

* country​Code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The country of the contact field.

* email

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The email of the contact field.

* first​Name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The first name of the contact field.

* last​Name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The first name of the contact field.

* phone

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The phone number of the contact field.

* postal​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The postal code of the contact field.

* province​Code

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The province of the contact field.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequest.shippingAddress](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.shippingAddress)

---



<a id="latest-objects-shoppaypaymentrequestdeliverymethod"></a>


## Shop​Pay​Payment​Request​Delivery​Method

object

Represents a delivery method for a Shop Pay payment request.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount for the delivery method.

* code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The code of the delivery method.

* delivery​Expectation​Label

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The detail about when the delivery may be expected.

* detail

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The detail of the delivery method.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The label of the delivery method.

* max​Delivery​Date

  [ISO8601Date​Time](https://shopify.dev/docs/api/storefront/latest/scalars/ISO8601DateTime)

  The maximum delivery date for the delivery method.

* min​Delivery​Date

  [ISO8601Date​Time](https://shopify.dev/docs/api/storefront/latest/scalars/ISO8601DateTime)

  The minimum delivery date for the delivery method.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequest.deliveryMethods](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.deliveryMethods)

---



<a id="latest-objects-shoppaypaymentrequestdiscount"></a>


## Shop​Pay​Payment​Request​Discount

object

Represents a discount for a Shop Pay payment request.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount of the discount.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The label of the discount.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequest.discounts](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.discounts)
* [ShopPayPaymentRequestLineItem.itemDiscounts](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.itemDiscounts)
* [ShopPayPaymentRequestLineItem.lineDiscounts](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.lineDiscounts)
* [ShopPayPaymentRequestTotalShippingPrice.discounts](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestTotalShippingPrice#field-ShopPayPaymentRequestTotalShippingPrice.fields.discounts)

---



<a id="latest-objects-shoppaypaymentrequestimage"></a>


## Shop​Pay​Payment​Request​Image

object

Represents an image for a Shop Pay payment request line item.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The alt text of the image.

* url

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The source URL of the image.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequestLineItem.image](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestLineItem#field-ShopPayPaymentRequestLineItem.fields.image)

---



<a id="latest-objects-shoppaypaymentrequestlineitem"></a>


## Shop​Pay​Payment​Request​Line​Item

object

Represents a line item for a Shop Pay payment request.

### Fields

* final​Item​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The final item price for the line item.

* final​Line​Price

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The final line price for the line item.

* image

  [Shop​Pay​Payment​Request​Image](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestImage)

  The image of the line item.

* item​Discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDiscount)

  The item discounts for the line item.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The label of the line item.

* line​Discounts

  [\[Shop​Pay​Payment​Request​Discount!\]](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDiscount)

  The line discounts for the line item.

* original​Item​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The original item price for the line item.

* original​Line​Price

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

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

### Map

#### Fields with this object

* [ShopPayPaymentRequest.lineItems](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.lineItems)

---



<a id="latest-objects-shoppaypaymentrequestreceipt"></a>


## Shop​Pay​Payment​Request​Receipt

object

Represents a receipt for a Shop Pay payment request.

### Fields

* payment​Request

  [Shop​Pay​Payment​Request!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest)

  non-null

  The payment request object.

* processing​Status​Type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The processing status.

* token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The token of the receipt.

***

### Map

No referencing types

***

### Mutations

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

### ShopPayPaymentRequestReceipt Mutations

#### Mutated by

* [shop​Pay​Payment​Request​Session​Submit](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit)

---



<a id="latest-objects-shoppaypaymentrequestsession"></a>


## Shop​Pay​Payment​Request​Session

object

Represents a Shop Pay payment request session.

### Fields

* checkout​Url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  The checkout URL of the Shop Pay payment request session.

* payment​Request

  [Shop​Pay​Payment​Request!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest)

  non-null

  The payment request associated with the Shop Pay payment request session.

* source​Identifier

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The source identifier of the Shop Pay payment request session.

* token

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The token of the Shop Pay payment request session.

***

### Map

No referencing types

***

### Mutations

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

### ShopPayPaymentRequestSession Mutations

#### Mutated by

* [shop​Pay​Payment​Request​Session​Create](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionCreate)

---



<a id="latest-objects-shoppaypaymentrequestshippingline"></a>


## Shop​Pay​Payment​Request​Shipping​Line

object

Represents a shipping line for a Shop Pay payment request.

### Fields

* amount

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The amount for the shipping line.

* code

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The code of the shipping line.

* label

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The label of the shipping line.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequest.shippingLines](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.shippingLines)

---



<a id="latest-objects-shoppaypaymentrequesttotalshippingprice"></a>


## Shop​Pay​Payment​Request​Total​Shipping​Price

object

Represents a shipping total for a Shop Pay payment request.

### Fields

* discounts

  [\[Shop​Pay​Payment​Request​Discount!\]!](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequestDiscount)

  non-null

  The discounts for the shipping total.

* final​Total

  [Money​V2!](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  non-null

  The final total for the shipping total.

* original​Total

  [Money​V2](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2)

  The original total for the shipping total.

***

### Map

#### Fields with this object

* [ShopPayPaymentRequest.totalShippingPrice](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.totalShippingPrice)

---



<a id="latest-objects-shoppolicy"></a>


## Shop​Policy

object

Policy that a merchant has configured for their store, such as their refund or privacy policy.

### Fields

* body

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Policy text, maximum size of 64kb.

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Policy’s handle.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A globally-unique ID.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Policy’s title.

* url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  Public URL to the policy.

***

### Map

#### Fields with this object

* [Shop.contactInformation](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.contactInformation)
* [Shop.legalNotice](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.legalNotice)
* [Shop.privacyPolicy](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.privacyPolicy)
* [Shop.refundPolicy](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.refundPolicy)
* [Shop.shippingPolicy](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.shippingPolicy)
* [Shop.termsOfSale](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.termsOfSale)
* [Shop.termsOfService](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.termsOfService)

#### Possible type in

* [Menu​Item​Resource](https://shopify.dev/docs/api/storefront/latest/unions/MenuItemResource)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### ShopPolicy Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-shoppolicywithdefault"></a>


## Shop​Policy​With​Default

object

A policy for the store that comes with a default value, such as a subscription policy. If the merchant hasn't configured a policy for their store, then the policy will return the default value. Otherwise, the policy will return the merchant-configured value.

### Fields

* body

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The text of the policy. Maximum size: 64KB.

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The handle of the policy.

* id

  [ID](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  The unique ID of the policy. A default policy doesn't have an ID.

* title

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The title of the policy.

* url

  [URL!](https://shopify.dev/docs/api/storefront/latest/scalars/URL)

  non-null

  Public URL to the policy.

***

### Map

#### Fields with this object

* [Shop.subscriptionPolicy](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.subscriptionPolicy)

---



<a id="latest-objects-sitemap"></a>


## Sitemap

object

Contains all fields required to generate sitemaps.

### Fields

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

### Map

No referencing types

***

### Queries

* [sitemap](https://shopify.dev/docs/api/storefront/latest/queries/sitemap)

  query

  Returns sitemap data for a specific resource type, enabling headless storefronts to generate XML sitemaps for search engine optimization. The query provides a page count and paginated access to resources like [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product), [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection), [`Page`](https://shopify.dev/docs/api/storefront/2026-04/objects/Page), and [`Blog`](https://shopify.dev/docs/api/storefront/2026-04/objects/Blog) objects.

  When paginating through resources, the number of items per page varies from 0 to 250, and empty pages can occur without indicating the end of results. Always check [`hasNextPage`](https://shopify.dev/docs/api/storefront/2026-04/objects/PaginatedSitemapResources#field-PaginatedSitemapResources.fields.hasNextPage) to determine if more pages are available.

  * type

    [Sitemap​Type!](https://shopify.dev/docs/api/storefront/latest/enums/SitemapType)

    required

    ### Arguments

    The type of the resource for the sitemap.

  ***

***

### Sitemap Queries

#### Queried by

* [sitemap](https://shopify.dev/docs/api/storefront/latest/queries/sitemap)

---



<a id="latest-objects-sitemapimage"></a>


## Sitemap​Image

object

Represents a sitemap's image.

### Fields

* alt

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Image's alt text.

* filepath

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Path to the image.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time when the image was updated.

***

### Map

#### Fields with this object

* [SitemapResource.image](https://shopify.dev/docs/api/storefront/latest/objects/SitemapResource#field-SitemapResource.fields.image)

---



<a id="latest-objects-sitemapresource"></a>


## Sitemap​Resource

object

Represents a sitemap resource that is not a metaobject.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Resource's handle.

* image

  [Sitemap​Image](https://shopify.dev/docs/api/storefront/latest/objects/SitemapImage)

  Resource's image.

* title

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  Resource's title.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time when the resource was updated.

***

### Map

No referencing types

***

### Interfaces

* [Sitemap​Resource​Interface](https://shopify.dev/docs/api/storefront/latest/interfaces/SitemapResourceInterface)

  interface

***

### SitemapResource Implements

#### Implements

* [Sitemap​Resource​Interface](https://shopify.dev/docs/api/storefront/latest/interfaces/SitemapResourceInterface)

---



<a id="latest-objects-sitemapresourcemetaobject"></a>


## Sitemap​Resource​Metaobject

object

A SitemapResourceMetaobject represents a metaobject with [the `renderable` capability](https://shopify.dev/docs/apps/build/custom-data/metaobjects/use-metaobject-capabilities#render-metaobjects-as-web-pages).

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Resource's handle.

* online​Store​Url​Handle

  [String](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The URL handle for accessing pages of this metaobject type in the Online Store.

* type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The type of the metaobject.

* updated​At

  [Date​Time!](https://shopify.dev/docs/api/storefront/latest/scalars/DateTime)

  non-null

  The date and time when the resource was updated.

***

### Map

No referencing types

***

### Interfaces

* [Sitemap​Resource​Interface](https://shopify.dev/docs/api/storefront/latest/interfaces/SitemapResourceInterface)

  interface

***

### SitemapResourceMetaobject Implements

#### Implements

* [Sitemap​Resource​Interface](https://shopify.dev/docs/api/storefront/latest/interfaces/SitemapResourceInterface)

---



<a id="latest-objects-socialloginprovider"></a>


## Social​Login​Provider

object

A social login provider for customer accounts.

### Fields

* handle

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The handle of the social login provider.

***

### Map

#### Fields with this object

* [Customer.socialLoginProvider](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.socialLoginProvider)
* [Shop.socialLoginProviders](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.socialLoginProviders)

---



<a id="latest-objects-storeavailability"></a>


## Store​Availability

object

Requires `unauthenticated_read_product_pickup_locations` access scope.

Inventory information for a product variant at a physical store location that offers local pickup. Includes stock availability, quantity on hand, and estimated pickup readiness time.

Local pickup must be [enabled in the store's shipping settings](https://help.shopify.com/manual/shipping/setting-up-and-managing-your-shipping/local-methods/local-pickup) for this data to be returned. Results can be sorted by proximity to a customer's location using the `near` argument on the [`ProductVariant.storeAvailability`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant#field-ProductVariant.fields.storeAvailability) connection.

Learn more about [supporting local pickup on storefronts](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/local-pickup).

### Fields

* available

  [Boolean!](https://shopify.dev/docs/api/storefront/latest/scalars/Boolean)

  non-null

  Whether the product variant is in-stock at this location.

* location

  [Location!](https://shopify.dev/docs/api/storefront/latest/objects/Location)

  non-null

  The location where this product variant is stocked at.

* pick​Up​Time

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours).

* quantity​Available

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null Token access required

  The quantity of the product variant in-stock at this location.

***

### Map

#### Fields and connections with this object

* [ProductVariant.storeAvailability](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.storeAvailability)
* [StoreAvailabilityConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/StoreAvailabilityConnection#returns-nodes)
* [StoreAvailabilityEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/StoreAvailabilityEdge#field-StoreAvailabilityEdge.fields.node)

---



<a id="latest-objects-swatch"></a>


## Swatch

object

A visual representation for filter values, containing a color, an image, or both. The [`FilterValue`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue) object's [`swatch`](https://shopify.dev/docs/api/storefront/2026-04/objects/FilterValue#field-FilterValue.fields.swatch) field returns this when the filter's presentation is set to `SWATCH`.

### Fields

* color

  [Color](https://shopify.dev/docs/api/storefront/latest/scalars/Color)

  The swatch color.

* image

  [Media​Image](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage)

  The swatch image.

***

### Map

#### Fields with this object

* [FilterValue.swatch](https://shopify.dev/docs/api/storefront/latest/objects/FilterValue#field-FilterValue.fields.swatch)

---



<a id="latest-objects-taxonomycategory"></a>


## Taxonomy​Category

object

Requires `unauthenticated_read_product_listings` access scope.

A category from Shopify's [Standard Product Taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) assigned to a [`Product`](https://shopify.dev/docs/api/storefront/2026-04/objects/Product). Categories provide hierarchical classification through the `ancestors` field.

The [`ancestors`](https://shopify.dev/docs/api/storefront/2026-04/objects/TaxonomyCategory#field-TaxonomyCategory.fields.ancestors) field returns the parent chain from the immediate parent up to the root. Each ancestor category also includes its own `ancestors`.

The [`name`](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.name) field returns the localized category name based on the storefront's request language with shop locale fallbacks. If a translation isn't available for the resolved locale, the English taxonomy name is returned.

### Fields

* ancestors

  [\[Taxonomy​Category!\]!](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory)

  non-null

  All parent nodes of the current taxonomy category.

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  A static identifier for the taxonomy category.

* name

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The localized name of the taxonomy category.

***

### Map

#### Fields with this object

* [Product.category](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.category)
* [TaxonomyCategory.ancestors](https://shopify.dev/docs/api/storefront/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.ancestors)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### TaxonomyCategory Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-translation"></a>


## Translation

object

Translation represents a translation of a key-value pair.

### Fields

* key

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The key of the translation.

* value

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The value of the translation.

***

### Map

#### Fields with this object

* [Shop.customerAccountTranslations](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.customerAccountTranslations)

---



<a id="latest-objects-unitpricemeasurement"></a>


## Unit​Price​Measurement

object

The measurement data used to calculate unit prices for a [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant). Unit pricing helps customers compare costs across different package sizes by showing a standardized price, such as "$9.99 / 100ml".

The object includes the quantity being sold (value and unit) and the reference measurement used for price comparison. Use this alongside the variant's [`unitPrice`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant#field-ProductVariant.fields.unitPrice) field to display complete unit pricing information.

### Fields

* measured​Type

  [Unit​Price​Measurement​Measured​Type](https://shopify.dev/docs/api/storefront/latest/enums/UnitPriceMeasurementMeasuredType)

  The type of unit of measurement for the unit price measurement.

* quantity​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/storefront/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The quantity unit for the unit price measurement.

* quantity​Value

  [Float!](https://shopify.dev/docs/api/storefront/latest/scalars/Float)

  non-null

  The quantity value for the unit price measurement.

* reference​Unit

  [Unit​Price​Measurement​Measured​Unit](https://shopify.dev/docs/api/storefront/latest/enums/UnitPriceMeasurementMeasuredUnit)

  The reference unit for the unit price measurement.

* reference​Value

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The reference value for the unit price measurement.

***

### Map

#### Fields with this object

* [ProductVariant.unitPriceMeasurement](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.unitPriceMeasurement)

---



<a id="latest-objects-urlredirect"></a>


## Url​Redirect

object

Requires `unauthenticated_read_content` access scope.

A redirect on the online store.

### Fields

* id

  [ID!](https://shopify.dev/docs/api/storefront/latest/scalars/ID)

  non-null

  The ID of the URL redirect.

* path

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The old path to be redirected from. When the user visits this path, they'll be redirected to the target location.

* target

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The target location where the user will be redirected to.

***

### Map

#### Fields and connections with this object

* [UrlRedirectConnection.nodes](https://shopify.dev/docs/api/storefront/latest/connections/UrlRedirectConnection#returns-nodes)
* [UrlRedirectEdge.node](https://shopify.dev/docs/api/storefront/latest/objects/UrlRedirectEdge#field-UrlRedirectEdge.fields.node)

***

### Queries

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

### UrlRedirect Queries

#### Queried by

* [url​Redirects](https://shopify.dev/docs/api/storefront/latest/queries/urlRedirects)

***

### Interfaces

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

  interface

***

### UrlRedirect Implements

#### Implements

* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-usererror"></a>


## User​Error

object

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

### Map

No referencing types

***

### Mutations

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

### UserError Mutations

#### Mutated by

* [customer​Access​Token​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate)
* [customer​Access​Token​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenDelete)
* [customer​Access​Token​Renew](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenRenew)
* [customer​Activate](https://shopify.dev/docs/api/storefront/latest/mutations/customerActivate)
* [customer​Address​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressCreate)
* [customer​Address​Delete](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressDelete)
* [customer​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerAddressUpdate)
* [customer​Create](https://shopify.dev/docs/api/storefront/latest/mutations/customerCreate)
* [customer​Default​Address​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerDefaultAddressUpdate)
* [customer​Recover](https://shopify.dev/docs/api/storefront/latest/mutations/customerRecover)
* [customer​Reset](https://shopify.dev/docs/api/storefront/latest/mutations/customerReset)
* [customer​Reset​By​Url](https://shopify.dev/docs/api/storefront/latest/mutations/customerResetByUrl)
* [customer​Update](https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### UserError Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-usererrorsshoppaypaymentrequestsessionusererrors"></a>


## User​Errors​Shop​Pay​Payment​Request​Session​User​Errors

object

Error codes for failed Shop Pay payment request session mutations.

### Fields

* code

  [User​Errors​Shop​Pay​Payment​Request​Session​User​Errors​Code](https://shopify.dev/docs/api/storefront/latest/enums/UserErrorsShopPayPaymentRequestSessionUserErrorsCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The error message.

***

### Map

No referencing types

***

### Mutations

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

### UserErrorsShopPayPaymentRequestSessionUserErrors Mutations

#### Mutated by

* [shop​Pay​Payment​Request​Session​Create](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionCreate)
* [shop​Pay​Payment​Request​Session​Submit](https://shopify.dev/docs/api/storefront/latest/mutations/shopPayPaymentRequestSessionSubmit)

***

### Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

  interface

***

### UserErrorsShopPayPaymentRequestSessionUserErrors Implements

#### Implements

* [Displayable​Error](https://shopify.dev/docs/api/storefront/latest/interfaces/DisplayableError)

---



<a id="latest-objects-video"></a>


## Video

object

Requires `unauthenticated_read_product_listings` access scope.

A video hosted on Shopify's servers. Implements the [`Media`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/Media) interface and provides multiple video sources through the [`sources`](https://shopify.dev/docs/api/storefront/2026-04/objects/Video#field-Video.fields.sources) field, each with [format](https://shopify.dev/docs/api/storefront/2026-04/objects/Video#field-Video.fields.sources.format), dimensions, and [URL information](https://shopify.dev/docs/api/storefront/2026-04/objects/Video#field-Video.fields.sources.url) for adaptive playback.

For videos hosted on external platforms like YouTube or Vimeo, use [`ExternalVideo`](https://shopify.dev/docs/api/storefront/2026-04/objects/ExternalVideo) instead.

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

* sources

  [\[Video​Source!\]!](https://shopify.dev/docs/api/storefront/latest/objects/VideoSource)

  non-null

  The sources for a video.

***

### Map

#### Possible type in

* [Metafield​Reference](https://shopify.dev/docs/api/storefront/latest/unions/MetafieldReference)

***

### Interfaces

* * [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)

    interface

  * [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

    interface

***

### Video Implements

#### Implements

* [Media](https://shopify.dev/docs/api/storefront/latest/interfaces/Media)
* [Node](https://shopify.dev/docs/api/storefront/latest/interfaces/Node)

---



<a id="latest-objects-videosource"></a>


## Video​Source

object

Requires `unauthenticated_read_product_listings` access scope.

Represents a source for a Shopify hosted video.

### Fields

* format

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The format of the video source.

* height

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The height of the video.

* mime​Type

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The video MIME type.

* url

  [String!](https://shopify.dev/docs/api/storefront/latest/scalars/String)

  non-null

  The URL of the video.

* width

  [Int!](https://shopify.dev/docs/api/storefront/latest/scalars/Int)

  non-null

  The width of the video.

***

### Map

#### Fields with this object

* [Video.sources](https://shopify.dev/docs/api/storefront/latest/objects/Video#field-Video.fields.sources)

---
