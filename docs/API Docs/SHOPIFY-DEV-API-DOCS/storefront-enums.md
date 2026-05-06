# Shopify Storefront – enums Reference (Indonesian / English)

> Referensi lengkap **Storefront – enums** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/storefront.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/storefront` |
| Total halaman | **60** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `enums` (split file)


## Daftar Isi (Table of Contents)

- [latest / enums / ArticleSortKeys](#latest-enums-articlesortkeys)
- [latest / enums / BlogSortKeys](#latest-enums-blogsortkeys)
- [latest / enums / CardBrand](#latest-enums-cardbrand)
- [latest / enums / CartDeliveryGroupType](#latest-enums-cartdeliverygrouptype)
- [latest / enums / CartErrorCode](#latest-enums-carterrorcode)
- [latest / enums / CartWarningCode](#latest-enums-cartwarningcode)
- [latest / enums / CollectionSortKeys](#latest-enums-collectionsortkeys)
- [latest / enums / CountPrecision](#latest-enums-countprecision)
- [latest / enums / CountryCode](#latest-enums-countrycode)
- [latest / enums / CropRegion](#latest-enums-cropregion)
- [latest / enums / CurrencyCode](#latest-enums-currencycode)
- [latest / enums / CustomerErrorCode](#latest-enums-customererrorcode)
- [latest / enums / DeliveryAddressValidationStrategy](#latest-enums-deliveryaddressvalidationstrategy)
- [latest / enums / DeliveryMethodType](#latest-enums-deliverymethodtype)
- [latest / enums / DigitalWallet](#latest-enums-digitalwallet)
- [latest / enums / DiscountApplicationAllocationMethod](#latest-enums-discountapplicationallocationmethod)
- [latest / enums / DiscountApplicationTargetSelection](#latest-enums-discountapplicationtargetselection)
- [latest / enums / DiscountApplicationTargetType](#latest-enums-discountapplicationtargettype)
- [latest / enums / FilterPresentation](#latest-enums-filterpresentation)
- [latest / enums / FilterType](#latest-enums-filtertype)
- [latest / enums / ImageContentType](#latest-enums-imagecontenttype)
- [latest / enums / LanguageCode](#latest-enums-languagecode)
- [latest / enums / LocationSortKeys](#latest-enums-locationsortkeys)
- [latest / enums / MediaContentType](#latest-enums-mediacontenttype)
- [latest / enums / MediaHost](#latest-enums-mediahost)
- [latest / enums / MediaPresentationFormat](#latest-enums-mediapresentationformat)
- [latest / enums / MenuItemType](#latest-enums-menuitemtype)
- [latest / enums / MetafieldDeleteErrorCode](#latest-enums-metafielddeleteerrorcode)
- [latest / enums / MetafieldsSetUserErrorCode](#latest-enums-metafieldssetusererrorcode)
- [latest / enums / OrderCancelReason](#latest-enums-ordercancelreason)
- [latest / enums / OrderFinancialStatus](#latest-enums-orderfinancialstatus)
- [latest / enums / OrderFulfillmentStatus](#latest-enums-orderfulfillmentstatus)
- [latest / enums / OrderSortKeys](#latest-enums-ordersortkeys)
- [latest / enums / PageSortKeys](#latest-enums-pagesortkeys)
- [latest / enums / PredictiveSearchLimitScope](#latest-enums-predictivesearchlimitscope)
- [latest / enums / PredictiveSearchType](#latest-enums-predictivesearchtype)
- [latest / enums / PreferenceDeliveryMethodType](#latest-enums-preferencedeliverymethodtype)
- [latest / enums / ProductCollectionSortKeys](#latest-enums-productcollectionsortkeys)
- [latest / enums / ProductImageSortKeys](#latest-enums-productimagesortkeys)
- [latest / enums / ProductMediaSortKeys](#latest-enums-productmediasortkeys)
- [latest / enums / ProductRecommendationIntent](#latest-enums-productrecommendationintent)
- [latest / enums / ProductSortKeys](#latest-enums-productsortkeys)
- [latest / enums / ProductVariantSortKeys](#latest-enums-productvariantsortkeys)
- [latest / enums / SearchPrefixQueryType](#latest-enums-searchprefixquerytype)
- [latest / enums / SearchSortKeys](#latest-enums-searchsortkeys)
- [latest / enums / SearchType](#latest-enums-searchtype)
- [latest / enums / SearchUnavailableProductsType](#latest-enums-searchunavailableproductstype)
- [latest / enums / SearchableField](#latest-enums-searchablefield)
- [latest / enums / SellingPlanCheckoutChargeType](#latest-enums-sellingplancheckoutchargetype)
- [latest / enums / SellingPlanInterval](#latest-enums-sellingplaninterval)
- [latest / enums / ShopPayInstallmentsFinancingPlanFrequency](#latest-enums-shoppayinstallmentsfinancingplanfrequency)
- [latest / enums / ShopPayInstallmentsLoan](#latest-enums-shoppayinstallmentsloan)
- [latest / enums / ShopPayPaymentRequestDeliveryMethodType](#latest-enums-shoppaypaymentrequestdeliverymethodtype)
- [latest / enums / SitemapType](#latest-enums-sitemaptype)
- [latest / enums / SubmissionErrorCode](#latest-enums-submissionerrorcode)
- [latest / enums / UnitPriceMeasurementMeasuredType](#latest-enums-unitpricemeasurementmeasuredtype)
- [latest / enums / UnitPriceMeasurementMeasuredUnit](#latest-enums-unitpricemeasurementmeasuredunit)
- [latest / enums / UnitSystem](#latest-enums-unitsystem)
- [latest / enums / UserErrorsShopPayPaymentRequestSessionUserErrorsCode](#latest-enums-usererrorsshoppaypaymentrequestsessionusererrorscode)
- [latest / enums / WeightUnit](#latest-enums-weightunit)


---



<a id="latest-enums-articlesortkeys"></a>


## Article​Sort​Keys

enum

The set of valid sort keys for the Article query.

### Valid values

* AUTHOR

  Sort by the `author` value.

* BLOG\_​TITLE

  Sort by the `blog_title` value.

* ID

  Sort by the `id` value.

* PUBLISHED\_​AT

  Sort by the `published_at` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Blog.articles(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.sortKey)

  ARGUMENT

  A blog container for [`Article`](https://shopify.dev/docs/api/storefront/current/objects/Article) objects. Stores can have multiple blogs, for example to organize content by topic or purpose.

  Each blog provides access to its articles, contributing [`ArticleAuthor`](https://shopify.dev/docs/api/storefront/current/objects/ArticleAuthor) objects, and [`SEO`](https://shopify.dev/docs/api/storefront/current/objects/SEO) information. You can retrieve articles individually [by handle](https://shopify.dev/docs/api/storefront/current/objects/Blog#field-Blog.fields.articleByHandle) or as a [paginated list](https://shopify.dev/docs/api/storefront/current/objects/Blog#field-Blog.fields.articles).

* [Query​Root.articles(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.articles.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [articles.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/articles#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Blog.articles(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Blog#field-Blog.fields.articles.arguments.sortKey)
* [Query​Root.articles(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.articles.arguments.sortKey)
* [articles.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/articles#arguments-sortKey)

---



<a id="latest-enums-blogsortkeys"></a>


## Blog​Sort​Keys

enum

The set of valid sort keys for the Blog query.

### Valid values

* HANDLE

  Sort by the `handle` value.

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

***

### Fields

* [Query​Root.blogs(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.blogs.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [blogs.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/blogs#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.blogs(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.blogs.arguments.sortKey)
* [blogs.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/blogs#arguments-sortKey)

---



<a id="latest-enums-cardbrand"></a>


## Card​Brand

enum

Card brand, such as Visa or Mastercard, which can be used for payments.

### Valid values

* AMERICAN\_​EXPRESS

  American Express.

* DINERS\_​CLUB

  Diners Club.

* DISCOVER

  Discover.

* JCB

  JCB.

* MASTERCARD

  Mastercard.

* VISA

  Visa.

***

### Fields

* [Payment​Settings.acceptedCardBrands](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.acceptedCardBrands)

  OBJECT

  Settings related to payments.

***

### Map

#### Fields with this enum

* [Payment​Settings.acceptedCardBrands](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.acceptedCardBrands)

---



<a id="latest-enums-cartdeliverygrouptype"></a>


## Cart​Delivery​Group​Type

enum

Defines what type of merchandise is in the delivery group.

### Valid values

* ONE\_​TIME\_​PURCHASE

  The delivery group only contains merchandise that is either a one time purchase or a first delivery of subscription merchandise.

* SUBSCRIPTION

  The delivery group only contains subscription merchandise.

***

### Fields

* [Cart​Delivery​Group.groupType](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.groupType)

  OBJECT

  Groups cart line items that share the same delivery destination. Each group provides the available [`CartDeliveryOption`](https://shopify.dev/docs/api/storefront/current/objects/CartDeliveryOption) choices for that address, along with the customer's selected option.

  Access through the [`Cart`](https://shopify.dev/docs/api/storefront/current/objects/Cart) object's `deliveryGroups` field. Items are grouped by merchandise type (one-time purchase vs subscription), allowing different delivery methods for each.

***

### Map

#### Fields with this enum

* [Cart​Delivery​Group.groupType](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.groupType)

---



<a id="latest-enums-carterrorcode"></a>


## Cart​Error​Code

enum

Error codes returned by [`CartUserError`](https://shopify.dev/docs/api/storefront/2026-04/objects/CartUserError) during cart mutations. Covers validation failures for addresses, quantities, delivery options, merchandise lines, discount codes, and metafields.

### Valid values

* ADDRESS\_​FIELD\_​CONTAINS\_​EMOJIS

  The specified address field contains emojis.

* ADDRESS\_​FIELD\_​CONTAINS\_​HTML\_​TAGS

  The specified address field contains HTML tags.

* ADDRESS\_​FIELD\_​CONTAINS\_​URL

  The specified address field contains a URL.

* ADDRESS\_​FIELD\_​DOES\_​NOT\_​MATCH\_​EXPECTED\_​PATTERN

  The specified address field does not match the expected pattern.

* ADDRESS\_​FIELD\_​IS\_​REQUIRED

  The specified address field is required.

* ADDRESS\_​FIELD\_​IS\_​TOO\_​LONG

  The specified address field is too long.

* BUNDLES\_​AND\_​ADDONS\_​CANNOT\_​BE\_​MIXED

  Bundles and addons cannot be mixed.

* BUYER\_​CANNOT\_​PURCHASE\_​FOR\_​COMPANY\_​LOCATION

  Buyer cannot purchase for company location.

* CART\_​TOO\_​LARGE

  The cart is too large to save.

* GIFT\_​CARD\_​RECIPIENT\_​INVALID

  The specified gift card recipient is invalid.

* INVALID

  The input value is invalid.

* INVALID\_​COMPANY\_​LOCATION

  Company location not found or not allowed.

* INVALID\_​DELIVERY\_​ADDRESS\_​ID

  The delivery address was not found.

* INVALID\_​DELIVERY\_​GROUP

  Delivery group was not found in cart.

* INVALID\_​DELIVERY\_​OPTION

  Delivery option was not valid.

* INVALID\_​INCREMENT

  The quantity must be a multiple of the specified increment.

* INVALID\_​MERCHANDISE\_​LINE

  Merchandise line was not found in cart.

* INVALID\_​METAFIELDS

  The metafields were not valid.

* INVALID\_​ZIP\_​CODE\_​FOR\_​COUNTRY

  The given zip code is invalid for the provided country.

* INVALID\_​ZIP\_​CODE\_​FOR\_​PROVINCE

  The given zip code is invalid for the provided province.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* MAXIMUM\_​EXCEEDED

  The quantity must be below the specified maximum for the item.

* MERCHANDISE\_​LINE\_​TRANSFORMERS\_​RUN\_​ERROR

  An error occurred while processing cart transformations.

* MERCHANDISE\_​NOT\_​APPLICABLE

  Item cannot be purchased as configured.

* MINIMUM\_​NOT\_​MET

  The quantity must be above the specified minimum for the item.

* MISSING\_​CUSTOMER\_​ACCESS\_​TOKEN

  The customer access token is required when setting a company location.

* MISSING\_​DISCOUNT\_​CODE

  Missing discount code.

* MISSING\_​NOTE

  Missing note.

* NOTE\_​TOO\_​LONG

  The note length must be below the specified maximum.

* ONLY\_​ONE\_​DELIVERY\_​ADDRESS\_​CAN\_​BE\_​SELECTED

  Only one delivery address can be selected.

* PARENT\_​LINE\_​INVALID\_​REFERENCE

  Cannot reference existing parent lines by variant\_id.

* PARENT\_​LINE\_​NESTING\_​TOO\_​DEEP

  Parent line nesting is too deep or circular.

* PARENT\_​LINE\_​NOT\_​FOUND

  Parent line not found.

* PARENT\_​LINE\_​OPERATION\_​BLOCKED

  Nested cartlines are blocked due to an incompatibility.

* PENDING\_​DELIVERY\_​GROUPS

  The delivery group is in a pending state.

* PROVINCE\_​NOT\_​FOUND

  The given province cannot be found.

* SELLING\_​PLAN\_​NOT\_​APPLICABLE

  Selling plan is not applicable.

* SERVICE\_​UNAVAILABLE

  An error occurred while saving the cart.

* TOO\_​MANY\_​DELIVERY\_​ADDRESSES

  Too many delivery addresses on Cart.

* UNSPECIFIED\_​ADDRESS\_​ERROR

  A general error occurred during address validation.

* VALIDATION\_​CUSTOM

  Validation failed.

* VARIANT\_​REQUIRES\_​SELLING\_​PLAN

  Variant can only be purchased with a selling plan.

* ZIP\_​CODE\_​NOT\_​SUPPORTED

  The given zip code is unsupported.

***

### Fields

* [Cart​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError#field-CartUserError.fields.code)

  OBJECT

  Represents an error that happens during execution of a cart mutation.

***

### Map

#### Fields with this enum

* [Cart​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/CartUserError#field-CartUserError.fields.code)

---



<a id="latest-enums-cartwarningcode"></a>


## Cart​Warning​Code

enum

The code for the cart warning.

### Valid values

* DISCOUNT\_​CODE\_​NOT\_​HONOURED

  The discount code cannot be honored.

* DISCOUNT\_​CURRENTLY\_​INACTIVE

  The discount is currently inactive.

* DISCOUNT\_​CUSTOMER\_​NOT\_​ELIGIBLE

  The customer is not eligible for this discount.

* DISCOUNT\_​CUSTOMER\_​USAGE\_​LIMIT\_​REACHED

  The customer's discount usage limit has been reached.

* DISCOUNT\_​ELIGIBLE\_​CUSTOMER\_​MISSING

  An eligible customer is missing for this discount.

* DISCOUNT\_​INCOMPATIBLE\_​PURCHASE\_​TYPE

  The purchase type is incompatible with this discount.

* DISCOUNT\_​NO\_​ENTITLED\_​LINE\_​ITEMS

  There are no entitled line items for this discount.

* DISCOUNT\_​NO\_​ENTITLED\_​SHIPPING\_​LINES

  There are no entitled shipping lines for this discount.

* DISCOUNT\_​NOT\_​FOUND

  The discount was not found.

* DISCOUNT\_​PURCHASE\_​NOT\_​IN\_​RANGE

  The purchase is not in range for this discount.

* DISCOUNT\_​QUANTITY\_​NOT\_​IN\_​RANGE

  The quantity is not in range for this discount.

* DISCOUNT\_​USAGE\_​LIMIT\_​REACHED

  The discount usage limit has been reached.

* DUPLICATE\_​DELIVERY\_​ADDRESS

  A delivery address with the same details already exists on this cart.

* MERCHANDISE\_​NOT\_​ENOUGH\_​STOCK

  The merchandise does not have enough stock.

* MERCHANDISE\_​OUT\_​OF\_​STOCK

  The merchandise is out of stock.

* MERCHANDISE\_​SELLING\_​PLAN\_​NOT\_​APPLICABLE\_​ON\_​COMPANY\_​LOCATION

  Only one-time purchase is available for B2B orders.

* PAYMENTS\_​GIFT\_​CARDS\_​UNAVAILABLE

  Gift cards are not available as a payment method.

***

### Fields

* [Cart​Warning.code](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning#field-CartWarning.fields.code)

  OBJECT

  A non-blocking issue that occurred during a cart mutation. Unlike errors, warnings don't prevent the mutation from completing but indicate potential problems that may affect the buyer's experience.

  Each warning includes a code identifying the issue type, a human-readable message, and a target ID pointing to the affected resource.

***

### Map

#### Fields with this enum

* [Cart​Warning.code](https://shopify.dev/docs/api/storefront/latest/objects/CartWarning#field-CartWarning.fields.code)

---



<a id="latest-enums-collectionsortkeys"></a>


## Collection​Sort​Keys

enum

The set of valid sort keys for the Collection query.

### Valid values

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Query​Root.collections(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.collections.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [collections.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/collections#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.collections(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.collections.arguments.sortKey)
* [collections.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/collections#arguments-sortKey)

---



<a id="latest-enums-countprecision"></a>


## Count​Precision

enum

The precision of the value returned by a count field.

### Valid values

* AT\_​LEAST

  The count is at least the value. A limit was reached.

* EXACT

  The count is exactly the value.

***

### Fields

* [Count.precision](https://shopify.dev/docs/api/storefront/latest/objects/Count#field-Count.fields.precision)

  OBJECT

  Details for count of elements.

***

### Map

#### Fields with this enum

* [Count.precision](https://shopify.dev/docs/api/storefront/latest/objects/Count#field-Count.fields.precision)

---



<a id="latest-enums-countrycode"></a>


## Country​Code

enum

The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines. If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision of another country. For example, the territories associated with Spain are represented by the country code `ES`, and the territories associated with the United States of America are represented by the country code `US`.

### Valid values

* AC

  Ascension Island.

* AD

  Andorra.

* AE

  United Arab Emirates.

* AF

  Afghanistan.

* AG

  Antigua & Barbuda.

* AI

  Anguilla.

* AL

  Albania.

* AM

  Armenia.

* AN

  Netherlands Antilles.

* AO

  Angola.

* AR

  Argentina.

* AT

  Austria.

* AU

  Australia.

* AW

  Aruba.

* AX

  Åland Islands.

* AZ

  Azerbaijan.

* BA

  Bosnia & Herzegovina.

* BB

  Barbados.

* BD

  Bangladesh.

* BE

  Belgium.

* BF

  Burkina Faso.

* BG

  Bulgaria.

* BH

  Bahrain.

* BI

  Burundi.

* BJ

  Benin.

* BL

  St. Barthélemy.

* BM

  Bermuda.

* BN

  Brunei.

* BO

  Bolivia.

* BQ

  Caribbean Netherlands.

* BR

  Brazil.

* BS

  Bahamas.

* BT

  Bhutan.

* BV

  Bouvet Island.

* BW

  Botswana.

* BY

  Belarus.

* BZ

  Belize.

* CA

  Canada.

* CC

  Cocos (Keeling) Islands.

* CD

  Congo - Kinshasa.

* CF

  Central African Republic.

* CG

  Congo - Brazzaville.

* CH

  Switzerland.

* CI

  Côte d’Ivoire.

* CK

  Cook Islands.

* CL

  Chile.

* CM

  Cameroon.

* CN

  China.

* CO

  Colombia.

* CR

  Costa Rica.

* CU

  Cuba.

* CV

  Cape Verde.

* CW

  Curaçao.

* CX

  Christmas Island.

* CY

  Cyprus.

* CZ

  Czechia.

* DE

  Germany.

* DJ

  Djibouti.

* DK

  Denmark.

* DM

  Dominica.

* DO

  Dominican Republic.

* DZ

  Algeria.

* EC

  Ecuador.

* EE

  Estonia.

* EG

  Egypt.

* EH

  Western Sahara.

* ER

  Eritrea.

* ES

  Spain.

* ET

  Ethiopia.

* FI

  Finland.

* FJ

  Fiji.

* FK

  Falkland Islands.

* FO

  Faroe Islands.

* FR

  France.

* GA

  Gabon.

* GB

  United Kingdom.

* GD

  Grenada.

* GE

  Georgia.

* GF

  French Guiana.

* GG

  Guernsey.

* GH

  Ghana.

* GI

  Gibraltar.

* GL

  Greenland.

* GM

  Gambia.

* GN

  Guinea.

* GP

  Guadeloupe.

* GQ

  Equatorial Guinea.

* GR

  Greece.

* GS

  South Georgia & South Sandwich Islands.

* GT

  Guatemala.

* GW

  Guinea-Bissau.

* GY

  Guyana.

* HK

  Hong Kong SAR.

* HM

  Heard & McDonald Islands.

* HN

  Honduras.

* HR

  Croatia.

* HT

  Haiti.

* HU

  Hungary.

* ID

  Indonesia.

* IE

  Ireland.

* IL

  Israel.

* IM

  Isle of Man.

* IN

  India.

* IO

  British Indian Ocean Territory.

* IQ

  Iraq.

* IR

  Iran.

* IS

  Iceland.

* IT

  Italy.

* JE

  Jersey.

* JM

  Jamaica.

* JO

  Jordan.

* JP

  Japan.

* KE

  Kenya.

* KG

  Kyrgyzstan.

* KH

  Cambodia.

* KI

  Kiribati.

* KM

  Comoros.

* KN

  St. Kitts & Nevis.

* KP

  North Korea.

* KR

  South Korea.

* KW

  Kuwait.

* KY

  Cayman Islands.

* KZ

  Kazakhstan.

* LA

  Laos.

* LB

  Lebanon.

* LC

  St. Lucia.

* LI

  Liechtenstein.

* LK

  Sri Lanka.

* LR

  Liberia.

* LS

  Lesotho.

* LT

  Lithuania.

* LU

  Luxembourg.

* LV

  Latvia.

* LY

  Libya.

* MA

  Morocco.

* MC

  Monaco.

* MD

  Moldova.

* ME

  Montenegro.

* MF

  St. Martin.

* MG

  Madagascar.

* MK

  North Macedonia.

* ML

  Mali.

* MM

  Myanmar (Burma).

* MN

  Mongolia.

* MO

  Macao SAR.

* MQ

  Martinique.

* MR

  Mauritania.

* MS

  Montserrat.

* MT

  Malta.

* MU

  Mauritius.

* MV

  Maldives.

* MW

  Malawi.

* MX

  Mexico.

* MY

  Malaysia.

* MZ

  Mozambique.

* NA

  Namibia.

* NC

  New Caledonia.

* NE

  Niger.

* NF

  Norfolk Island.

* NG

  Nigeria.

* NI

  Nicaragua.

* NL

  Netherlands.

* NO

  Norway.

* NP

  Nepal.

* NR

  Nauru.

* NU

  Niue.

* NZ

  New Zealand.

* OM

  Oman.

* PA

  Panama.

* PE

  Peru.

* PF

  French Polynesia.

* PG

  Papua New Guinea.

* PH

  Philippines.

* PK

  Pakistan.

* PL

  Poland.

* PM

  St. Pierre & Miquelon.

* PN

  Pitcairn Islands.

* PS

  Palestinian Territories.

* PT

  Portugal.

* PY

  Paraguay.

* QA

  Qatar.

* RE

  Réunion.

* RO

  Romania.

* RS

  Serbia.

* RU

  Russia.

* RW

  Rwanda.

* SA

  Saudi Arabia.

* SB

  Solomon Islands.

* SC

  Seychelles.

* SD

  Sudan.

* SE

  Sweden.

* SG

  Singapore.

* SH

  St. Helena.

* SI

  Slovenia.

* SJ

  Svalbard & Jan Mayen.

* SK

  Slovakia.

* SL

  Sierra Leone.

* SM

  San Marino.

* SN

  Senegal.

* SO

  Somalia.

* SR

  Suriname.

* SS

  South Sudan.

* ST

  São Tomé & Príncipe.

* SV

  El Salvador.

* SX

  Sint Maarten.

* SY

  Syria.

* SZ

  Eswatini.

* TA

  Tristan da Cunha.

* TC

  Turks & Caicos Islands.

* TD

  Chad.

* TF

  French Southern Territories.

* TG

  Togo.

* TH

  Thailand.

* TJ

  Tajikistan.

* TK

  Tokelau.

* TL

  Timor-Leste.

* TM

  Turkmenistan.

* TN

  Tunisia.

* TO

  Tonga.

* TR

  Türkiye.

* TT

  Trinidad & Tobago.

* TV

  Tuvalu.

* TW

  Taiwan.

* TZ

  Tanzania.

* UA

  Ukraine.

* UG

  Uganda.

* UM

  U.S. Outlying Islands.

* US

  United States.

* UY

  Uruguay.

* UZ

  Uzbekistan.

* VA

  Vatican City.

* VC

  St. Vincent & Grenadines.

* VE

  Venezuela.

* VG

  British Virgin Islands.

* VN

  Vietnam.

* VU

  Vanuatu.

* WF

  Wallis & Futuna.

* WS

  Samoa.

* XK

  Kosovo.

* YE

  Yemen.

* YT

  Mayotte.

* ZA

  South Africa.

* ZM

  Zambia.

* ZW

  Zimbabwe.

* ZZ

  Unknown Region.

***

### Fields

* [Cart​Buyer​Identity.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.countryCode)

  OBJECT

  Contact information about the buyer interacting with a [cart](https://shopify.dev/docs/api/storefront/current/objects/Cart). The buyer's country determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match their shipping address.

  For B2B scenarios, the [`purchasingCompany`](https://shopify.dev/docs/api/storefront/current/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.purchasingCompany) field identifies the company and location on whose behalf a business customer purchases. The [`preferences`](https://shopify.dev/docs/api/storefront/current/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.preferences) field stores delivery and wallet settings that prefill checkout fields to streamline the buying process.

* [Cart​Buyer​Identity​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-countryCode)

  INPUT OBJECT

  The input fields for identifying the buyer associated with a cart. Buyer identity determines [international pricing](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/markets/international-pricing) and should match the customer's shipping address.

  Used by [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) and [`cartBuyerIdentityUpdate`](https://shopify.dev/docs/api/storefront/current/mutations/cartBuyerIdentityUpdate) to set contact information, location, and checkout preferences.

  ***

  **Note:** Preferences prefill fields at checkout but don\&#39;t sync back to the cart if overwritten.

  ***

* [Cart​Delivery​Address​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-countryCode)

  INPUT OBJECT

  The input fields to create or update a cart address.

* [Cart​Delivery​Coordinates​Preference.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryCoordinatesPreference#field-CartDeliveryCoordinatesPreference.fields.countryCode)

  OBJECT

  Preferred location used to find the closest pick up point based on coordinates.

* [Cart​Delivery​Coordinates​Preference​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryCoordinatesPreferenceInput#fields-countryCode)

  INPUT OBJECT

  Preferred location used to find the closest pick up point based on coordinates.

* [Country.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.isoCode)

  OBJECT

  A country with localization settings for a storefront. Includes the country's currency, available languages, default language, and unit system (metric or imperial).

  Access countries through the [localization](https://shopify.dev/docs/api/storefront/current/queries/localization) query, which returns both the list of available countries and the currently active country. Use the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to change the active country context.

* [Mailing​Address.countryCodeV2](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.countryCodeV2)

  OBJECT

  A physical mailing address associated with a [`Customer`](https://shopify.dev/docs/api/storefront/current/objects/Customer) or [`Order`](https://shopify.dev/docs/api/storefront/current/objects/Order). Stores standard address components including street address, city, province, country, and postal code, along with customer name and company information.

  The address includes geographic coordinates and provides pre-formatted output through the [`formatted`](https://shopify.dev/docs/api/storefront/current/objects/MailingAddress#field-MailingAddress.fields.formatted) field, which can optionally include or exclude name and company details.

* [Payment​Settings.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.countryCode)

  OBJECT

  Settings related to payments.

* [Shop.shipsToCountries](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.shipsToCountries)

  OBJECT

  The central hub for store-wide settings and information accessible through the Storefront API. Provides the shop's name, description, and branding configuration including logos and colors through the [`Brand`](https://shopify.dev/docs/api/storefront/current/objects/Brand) object.

  Access store policies such as privacy, refund, shipping, and terms of service via [`ShopPolicy`](https://shopify.dev/docs/api/storefront/current/objects/ShopPolicy), and the subscription policy via [`ShopPolicyWithDefault`](https://shopify.dev/docs/api/storefront/current/objects/ShopPolicyWithDefault). [`PaymentSettings`](https://shopify.dev/docs/api/storefront/current/objects/PaymentSettings) expose accepted card brands, supported digital wallets, and enabled presentment currencies. The object also includes the primary [`Domain`](https://shopify.dev/docs/api/storefront/current/objects/Domain), countries the shop ships to, [`ShopPayInstallmentsPricing`](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing), and [`SocialLoginProvider`](https://shopify.dev/docs/api/storefront/current/objects/SocialLoginProvider) options for customer accounts.

***

### Map

#### Fields with this enum

* [Cart​Buyer​Identity.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/CartBuyerIdentity#field-CartBuyerIdentity.fields.countryCode)
* [Cart​Delivery​Coordinates​Preference.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryCoordinatesPreference#field-CartDeliveryCoordinatesPreference.fields.countryCode)
* [Country.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.isoCode)
* [Mailing​Address.countryCodeV2](https://shopify.dev/docs/api/storefront/latest/objects/MailingAddress#field-MailingAddress.fields.countryCodeV2)
* [Payment​Settings.countryCode](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.countryCode)
* [Shop.shipsToCountries](https://shopify.dev/docs/api/storefront/latest/objects/Shop#field-Shop.fields.shipsToCountries)

#### Inputs with this enum

* [Cart​Buyer​Identity​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartBuyerIdentityInput#fields-countryCode)
* [Cart​Delivery​Address​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryAddressInput#fields-countryCode)
* [Cart​Delivery​Coordinates​Preference​Input.countryCode](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryCoordinatesPreferenceInput#fields-countryCode)

---



<a id="latest-enums-cropregion"></a>


## Crop​Region

enum

The part of the image that should remain after cropping.

### Valid values

* BOTTOM

  Keep the bottom of the image.

* CENTER

  Keep the center of the image.

* LEFT

  Keep the left of the image.

* RIGHT

  Keep the right of the image.

* TOP

  Keep the top of the image.

***

### Fields

* [Image.transformedSrc(crop)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)

  ARGUMENT

  An image resource with URL, dimensions, and transformation options. Used for product images, collection images, media previews, and other visual content throughout the storefront.

  The [`url`](https://shopify.dev/docs/api/storefront/current/objects/Image#field-Image.fields.url) field accepts an [`ImageTransformInput`](https://shopify.dev/docs/api/storefront/current/input-objects/ImageTransformInput) argument for resizing, cropping, scaling for retina displays, and converting between image formats. Use the [`thumbhash`](https://shopify.dev/docs/api/storefront/current/objects/Image#field-Image.fields.thumbhash) field to display lightweight placeholders while images load.

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-crop)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

***

### Map

#### Inputs with this enum

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-crop)

#### Arguments with this enum

* [Image.transformedSrc(crop)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)

---



<a id="latest-enums-currencycode"></a>


## Currency​Code

enum

The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes, and non-standard codes.

### Valid values

* AED

  United Arab Emirates Dirham (AED).

* AFN

  Afghan Afghani (AFN).

* ALL

  Albanian Lek (ALL).

* AMD

  Armenian Dram (AMD).

* ANG

  Netherlands Antillean Guilder.

* AOA

  Angolan Kwanza (AOA).

* ARS

  Argentine Pesos (ARS).

* AUD

  Australian Dollars (AUD).

* AWG

  Aruban Florin (AWG).

* AZN

  Azerbaijani Manat (AZN).

* BAM

  Bosnia and Herzegovina Convertible Mark (BAM).

* BBD

  Barbadian Dollar (BBD).

* BDT

  Bangladesh Taka (BDT).

* BGN

  Bulgarian Lev (BGN).

* BHD

  Bahraini Dinar (BHD).

* BIF

  Burundian Franc (BIF).

* BMD

  Bermudian Dollar (BMD).

* BND

  Brunei Dollar (BND).

* BOB

  Bolivian Boliviano (BOB).

* BRL

  Brazilian Real (BRL).

* BSD

  Bahamian Dollar (BSD).

* BTN

  Bhutanese Ngultrum (BTN).

* BWP

  Botswana Pula (BWP).

* BYN

  Belarusian Ruble (BYN).

* BZD

  Belize Dollar (BZD).

* CAD

  Canadian Dollars (CAD).

* CDF

  Congolese franc (CDF).

* CHF

  Swiss Francs (CHF).

* CLP

  Chilean Peso (CLP).

* CNY

  Chinese Yuan Renminbi (CNY).

* COP

  Colombian Peso (COP).

* CRC

  Costa Rican Colones (CRC).

* CVE

  Cape Verdean escudo (CVE).

* CZK

  Czech Koruny (CZK).

* DJF

  Djiboutian Franc (DJF).

* DKK

  Danish Kroner (DKK).

* DOP

  Dominican Peso (DOP).

* DZD

  Algerian Dinar (DZD).

* EGP

  Egyptian Pound (EGP).

* ERN

  Eritrean Nakfa (ERN).

* ETB

  Ethiopian Birr (ETB).

* EUR

  Euro (EUR).

* FJD

  Fijian Dollars (FJD).

* FKP

  Falkland Islands Pounds (FKP).

* GBP

  United Kingdom Pounds (GBP).

* GEL

  Georgian Lari (GEL).

* GHS

  Ghanaian Cedi (GHS).

* GIP

  Gibraltar Pounds (GIP).

* GMD

  Gambian Dalasi (GMD).

* GNF

  Guinean Franc (GNF).

* GTQ

  Guatemalan Quetzal (GTQ).

* GYD

  Guyanese Dollar (GYD).

* HKD

  Hong Kong Dollars (HKD).

* HNL

  Honduran Lempira (HNL).

* HRK

  Croatian Kuna (HRK).

* HTG

  Haitian Gourde (HTG).

* HUF

  Hungarian Forint (HUF).

* IDR

  Indonesian Rupiah (IDR).

* ILS

  Israeli New Shekel (NIS).

* INR

  Indian Rupees (INR).

* IQD

  Iraqi Dinar (IQD).

* IRR

  Iranian Rial (IRR).

* ISK

  Icelandic Kronur (ISK).

* JEP

  Jersey Pound.

* JMD

  Jamaican Dollars (JMD).

* JOD

  Jordanian Dinar (JOD).

* JPY

  Japanese Yen (JPY).

* KES

  Kenyan Shilling (KES).

* KGS

  Kyrgyzstani Som (KGS).

* KHR

  Cambodian Riel.

* KID

  Kiribati Dollar (KID).

* KMF

  Comorian Franc (KMF).

* KRW

  South Korean Won (KRW).

* KWD

  Kuwaiti Dinar (KWD).

* KYD

  Cayman Dollars (KYD).

* KZT

  Kazakhstani Tenge (KZT).

* LAK

  Laotian Kip (LAK).

* LBP

  Lebanese Pounds (LBP).

* LKR

  Sri Lankan Rupees (LKR).

* LRD

  Liberian Dollar (LRD).

* LSL

  Lesotho Loti (LSL).

* LTL

  Lithuanian Litai (LTL).

* LVL

  Latvian Lati (LVL).

* LYD

  Libyan Dinar (LYD).

* MAD

  Moroccan Dirham.

* MDL

  Moldovan Leu (MDL).

* MGA

  Malagasy Ariary (MGA).

* MKD

  Macedonia Denar (MKD).

* MMK

  Burmese Kyat (MMK).

* MNT

  Mongolian Tugrik.

* MOP

  Macanese Pataca (MOP).

* MRU

  Mauritanian Ouguiya (MRU).

* MUR

  Mauritian Rupee (MUR).

* MVR

  Maldivian Rufiyaa (MVR).

* MWK

  Malawian Kwacha (MWK).

* MXN

  Mexican Pesos (MXN).

* MYR

  Malaysian Ringgits (MYR).

* MZN

  Mozambican Metical.

* NAD

  Namibian Dollar.

* NGN

  Nigerian Naira (NGN).

* NIO

  Nicaraguan Córdoba (NIO).

* NOK

  Norwegian Kroner (NOK).

* NPR

  Nepalese Rupee (NPR).

* NZD

  New Zealand Dollars (NZD).

* OMR

  Omani Rial (OMR).

* PAB

  Panamian Balboa (PAB).

* PEN

  Peruvian Nuevo Sol (PEN).

* PGK

  Papua New Guinean Kina (PGK).

* PHP

  Philippine Peso (PHP).

* PKR

  Pakistani Rupee (PKR).

* PLN

  Polish Zlotych (PLN).

* PYG

  Paraguayan Guarani (PYG).

* QAR

  Qatari Rial (QAR).

* RON

  Romanian Lei (RON).

* RSD

  Serbian dinar (RSD).

* RUB

  Russian Rubles (RUB).

* RWF

  Rwandan Franc (RWF).

* SAR

  Saudi Riyal (SAR).

* SBD

  Solomon Islands Dollar (SBD).

* SCR

  Seychellois Rupee (SCR).

* SDG

  Sudanese Pound (SDG).

* SEK

  Swedish Kronor (SEK).

* SGD

  Singapore Dollars (SGD).

* SHP

  Saint Helena Pounds (SHP).

* SLL

  Sierra Leonean Leone (SLL).

* SOS

  Somali Shilling (SOS).

* SRD

  Surinamese Dollar (SRD).

* SSP

  South Sudanese Pound (SSP).

* STN

  Sao Tome And Principe Dobra (STN).

* SYP

  Syrian Pound (SYP).

* SZL

  Swazi Lilangeni (SZL).

* THB

  Thai baht (THB).

* TJS

  Tajikistani Somoni (TJS).

* TMT

  Turkmenistani Manat (TMT).

* TND

  Tunisian Dinar (TND).

* TOP

  Tongan Pa'anga (TOP).

* TRY

  Turkish Lira (TRY).

* TTD

  Trinidad and Tobago Dollars (TTD).

* TWD

  Taiwan Dollars (TWD).

* TZS

  Tanzanian Shilling (TZS).

* UAH

  Ukrainian Hryvnia (UAH).

* UGX

  Ugandan Shilling (UGX).

* USD

  United States Dollars (USD).

* UYU

  Uruguayan Pesos (UYU).

* UZS

  Uzbekistan som (UZS).

* VED

  Venezuelan Bolivares (VED).

* VES

  Venezuelan Bolivares Soberanos (VES).

* VND

  Vietnamese đồng (VND).

* VUV

  Vanuatu Vatu (VUV).

* WST

  Samoan Tala (WST).

* XAF

  Central African CFA Franc (XAF).

* XCD

  East Caribbean Dollar (XCD).

* XOF

  West African CFA franc (XOF).

* XPF

  CFP Franc (XPF).

* XXX

  Unrecognized currency.

* YER

  Yemeni Rial (YER).

* ZAR

  South African Rand (ZAR).

* ZMW

  Zambian Kwacha (ZMW).

#### Deprecated valid values

* BYR

  Deprecated (removal date set)

* STD

  Deprecated (removal date set)

* VEF

  Deprecated (removal date set)

***

### Fields

* [Currency.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Currency#field-Currency.fields.isoCode)

  OBJECT

  A currency.

* [Money​Input.currencyCode](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput#fields-currencyCode)

  INPUT OBJECT

  The input fields for a monetary value with currency.

* [Money​V2.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2#field-MoneyV2.fields.currencyCode)

  OBJECT

  A precise monetary value with its associated currency. Combines a decimal amount with a three-letter [`CurrencyCode`](https://shopify.dev/docs/api/storefront/current/enums/CurrencyCode) to express prices, costs, and other financial values. For example, 12.99 USD.

* [Order.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currencyCode)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

* [Payment​Settings.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.currencyCode)

  OBJECT

  Settings related to payments.

* [Payment​Settings.enabledPresentmentCurrencies](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.enabledPresentmentCurrencies)

  OBJECT

  Settings related to payments.

* [Shop​Pay​Payment​Request.presentmentCurrency](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.presentmentCurrency)

  OBJECT

  Represents a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Input.presentmentCurrency](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-presentmentCurrency)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Fields with this enum

* [Currency.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Currency#field-Currency.fields.isoCode)
* [Money​V2.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/MoneyV2#field-MoneyV2.fields.currencyCode)
* [Order.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.currencyCode)
* [Payment​Settings.currencyCode](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.currencyCode)
* [Payment​Settings.enabledPresentmentCurrencies](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.enabledPresentmentCurrencies)
* [Shop​Pay​Payment​Request.presentmentCurrency](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.presentmentCurrency)

#### Inputs with this enum

* [Money​Input.currencyCode](https://shopify.dev/docs/api/storefront/latest/input-objects/MoneyInput#fields-currencyCode)
* [Shop​Pay​Payment​Request​Input.presentmentCurrency](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-presentmentCurrency)

---



<a id="latest-enums-customererrorcode"></a>


## Customer​Error​Code

enum

Error codes returned by the [`CustomerUserError`](https://shopify.dev/docs/api/storefront/2026-04/objects/CustomerUserError) object. These codes identify specific validation and processing failures for customer-related mutations, including account creation, updates, password resets, and address management.

### Valid values

* ALREADY\_​ENABLED

  Customer already enabled.

* BAD\_​DOMAIN

  Input email contains an invalid domain name.

* BLANK

  The input value is blank.

* CONTAINS\_​HTML\_​TAGS

  Input contains HTML tags.

* CONTAINS\_​URL

  Input contains URL.

* CUSTOMER\_​DISABLED

  Customer is disabled.

* INVALID

  The input value is invalid.

* INVALID\_​MULTIPASS\_​REQUEST

  Multipass token is not valid.

* NOT\_​FOUND

  Address does not exist.

* PASSWORD\_​STARTS\_​OR\_​ENDS\_​WITH\_​WHITESPACE

  Input password starts or ends with whitespace.

* TAKEN

  The input value is already taken.

* TOKEN\_​INVALID

  Invalid activation token.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNIDENTIFIED\_​CUSTOMER

  Unidentified customer.

***

### Fields

* [Customer​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError#field-CustomerUserError.fields.code)

  OBJECT

  Represents an error that happens during execution of a customer mutation.

***

### Map

#### Fields with this enum

* [Customer​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/CustomerUserError#field-CustomerUserError.fields.code)

---



<a id="latest-enums-deliveryaddressvalidationstrategy"></a>


## Delivery​Address​Validation​Strategy

enum

Controls how delivery addresses are validated during cart operations. The default validation checks only the country code, while strict validation verifies all address fields against Shopify's checkout rules and rejects invalid addresses.

Used by [`DeliveryAddressInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/DeliveryAddressInput) when setting buyer identity preferences, and by [`CartSelectableAddressInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectableAddressInput) and [`CartSelectableAddressUpdateInput`](https://shopify.dev/docs/api/storefront/2026-04/input-objects/CartSelectableAddressUpdateInput) when managing cart delivery addresses.

### Valid values

* COUNTRY\_​CODE\_​ONLY

  Only the country code is validated.

* STRICT

  Strict validation is performed, i.e. all fields in the address are validated according to Shopify's checkout rules. If the address fails validation, the cart will not be updated.

***

### Fields

* [Cart​Selectable​Address​Input.validationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-validationStrategy)

  INPUT OBJECT

  The input fields for a selectable delivery address to present to the buyer. Used by [`CartDeliveryInput`](https://shopify.dev/docs/api/storefront/current/input-objects/CartDeliveryInput) when creating a cart with the [`cartCreate`](https://shopify.dev/docs/api/storefront/current/mutations/cartCreate) mutation.

  You can pre-select an address for the buyer, mark it as one-time use so it isn't saved after checkout, and specify how strictly the address should be validated.

* [Cart​Selectable​Address​Update​Input.validationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-validationStrategy)

  INPUT OBJECT

  The input fields to update a line item on a cart.

* [Delivery​Address​Input.deliveryAddressValidationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-deliveryAddressValidationStrategy)

  INPUT OBJECT

  The input fields for delivery address preferences.

***

### Map

#### Inputs with this enum

* [Cart​Selectable​Address​Input.validationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressInput#fields-validationStrategy)
* [Cart​Selectable​Address​Update​Input.validationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/CartSelectableAddressUpdateInput#fields-validationStrategy)
* [Delivery​Address​Input.deliveryAddressValidationStrategy](https://shopify.dev/docs/api/storefront/latest/input-objects/DeliveryAddressInput#fields-deliveryAddressValidationStrategy)

---



<a id="latest-enums-deliverymethodtype"></a>


## Delivery​Method​Type

enum

List of different delivery method types.

### Valid values

* LOCAL

  Local Delivery.

* NONE

  None.

* PICK\_​UP

  Local Pickup.

* PICKUP\_​POINT

  Shipping to a Pickup Point.

* RETAIL

  Retail.

* SHIPPING

  Shipping.

***

### Fields

* [Cart​Delivery​Option.deliveryMethodType](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryOption#field-CartDeliveryOption.fields.deliveryMethodType)

  OBJECT

  A shipping or delivery choice available to customers during checkout. Each option includes a title, estimated cost, and delivery method type such as shipping or local pickup.

  Returned by the [`CartDeliveryGroup`](https://shopify.dev/docs/api/storefront/current/objects/CartDeliveryGroup) object's [`deliveryOptions`](https://shopify.dev/docs/api/storefront/current/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.deliveryOptions) field and [`selectedDeliveryOption`](https://shopify.dev/docs/api/storefront/current/objects/CartDeliveryGroup#field-CartDeliveryGroup.fields.selectedDeliveryOption) field.

***

### Map

#### Fields with this enum

* [Cart​Delivery​Option.deliveryMethodType](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryOption#field-CartDeliveryOption.fields.deliveryMethodType)

---



<a id="latest-enums-digitalwallet"></a>


## Digital​Wallet

enum

Digital wallet, such as Apple Pay, which can be used for accelerated checkouts.

### Valid values

* ANDROID\_​PAY

  Android Pay.

* APPLE\_​PAY

  Apple Pay.

* GOOGLE\_​PAY

  Google Pay.

* SHOPIFY\_​PAY

  Shopify Pay.

***

### Fields

* [Payment​Settings.supportedDigitalWallets](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.supportedDigitalWallets)

  OBJECT

  Settings related to payments.

***

### Map

#### Fields with this enum

* [Payment​Settings.supportedDigitalWallets](https://shopify.dev/docs/api/storefront/latest/objects/PaymentSettings#field-PaymentSettings.fields.supportedDigitalWallets)

---



<a id="latest-enums-discountapplicationallocationmethod"></a>


## Discount​Application​Allocation​Method

enum

Controls how a discount's value is distributed across entitled lines. A discount can either spread its value across all entitled lines or apply the full value to each line individually.

Used by the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/2026-04/interfaces/DiscountApplication) interface and its implementations to capture the intentions of a discount source at the time of application.

### Valid values

* ACROSS

  The value is spread across all entitled lines.

* EACH

  The value is applied onto every entitled line.

* ONE

  Deprecated

***

### Fields

* [Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)

  OBJECT

  An [automatic discount](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) applied to a cart or checkout without requiring a discount code. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface.

  Includes the discount's title, value, and allocation details that specify how the discount amount distributes across entitled line items or shipping lines.

* [Cart​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.allocationMethod)

  OBJECT

  Captures the intent of a discount source at the time it was applied to a cart. This includes the discount value, how it's allocated across entitled items, and which line types it targets.

  The actual discounted amounts on specific cart lines are represented by [`CartDiscountAllocation`](https://shopify.dev/docs/api/storefront/current/interfaces/CartDiscountAllocation) objects, which reference this application.

* [Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication#fields-allocationMethod)

  INTERFACE

  Captures the intent of a discount at the time it was applied. Each implementation represents a different discount source, such as [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), and manual discounts.

  The actual discounted amount on a line item or shipping line is represented by the [`DiscountAllocation`](https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation) object, which references the discount application it originated from.

* [Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)

  OBJECT

  Records the configuration and intent of a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes) when a customer applies it. This includes the code string, allocation method, target type, and discount value at the time of application. The [`applicable`](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable) field indicates whether the code was successfully applied.

  ***

  **Note:** To see the actual amounts discounted on specific line items or shipping lines, use the \<a href="https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Allocation\</span>\</code>\</a> object instead.

  ***

* [Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)

  OBJECT

  A discount created manually by a merchant, as opposed to [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) or [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes). Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and includes a title, optional description, and the discount value as either a fixed amount or percentage.

* [Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)

  OBJECT

  A discount application created by a Shopify Script. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and captures the discount's value, allocation method, and targeting rules at the time the script applied it.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)
* [Cart​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.allocationMethod)
* [Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)
* [Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)
* [Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)

---



<a id="latest-enums-discountapplicationtargetselection"></a>


## Discount​Application​Target​Selection

enum

The lines on the order to which the discount is applied, of the type defined by the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of `LINE_ITEM`, applies the discount on all line items that are entitled to the discount. The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.

### Valid values

* ALL

  The discount is allocated onto all the lines.

* ENTITLED

  The discount is allocated onto only the lines that it's entitled for.

* EXPLICIT

  The discount is allocated onto explicitly chosen lines.

***

### Fields

* [Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)

  OBJECT

  An [automatic discount](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) applied to a cart or checkout without requiring a discount code. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface.

  Includes the discount's title, value, and allocation details that specify how the discount amount distributes across entitled line items or shipping lines.

* [Cart​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.targetSelection)

  OBJECT

  Captures the intent of a discount source at the time it was applied to a cart. This includes the discount value, how it's allocated across entitled items, and which line types it targets.

  The actual discounted amounts on specific cart lines are represented by [`CartDiscountAllocation`](https://shopify.dev/docs/api/storefront/current/interfaces/CartDiscountAllocation) objects, which reference this application.

* [Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication#fields-targetSelection)

  INTERFACE

  Captures the intent of a discount at the time it was applied. Each implementation represents a different discount source, such as [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), and manual discounts.

  The actual discounted amount on a line item or shipping line is represented by the [`DiscountAllocation`](https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation) object, which references the discount application it originated from.

* [Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)

  OBJECT

  Records the configuration and intent of a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes) when a customer applies it. This includes the code string, allocation method, target type, and discount value at the time of application. The [`applicable`](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable) field indicates whether the code was successfully applied.

  ***

  **Note:** To see the actual amounts discounted on specific line items or shipping lines, use the \<a href="https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Allocation\</span>\</code>\</a> object instead.

  ***

* [Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)

  OBJECT

  A discount created manually by a merchant, as opposed to [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) or [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes). Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and includes a title, optional description, and the discount value as either a fixed amount or percentage.

* [Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)

  OBJECT

  A discount application created by a Shopify Script. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and captures the discount's value, allocation method, and targeting rules at the time the script applied it.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)
* [Cart​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.targetSelection)
* [Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)
* [Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)
* [Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)

---



<a id="latest-enums-discountapplicationtargettype"></a>


## Discount​Application​Target​Type

enum

The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.

### Valid values

* LINE\_​ITEM

  The discount applies onto line items.

* SHIPPING\_​LINE

  The discount applies onto shipping lines.

***

### Fields

* [Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)

  OBJECT

  An [automatic discount](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) applied to a cart or checkout without requiring a discount code. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface.

  Includes the discount's title, value, and allocation details that specify how the discount amount distributes across entitled line items or shipping lines.

* [Cart​Automatic​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartAutomaticDiscountAllocation#field-CartAutomaticDiscountAllocation.fields.targetType)

  OBJECT

  A discount allocation [that applies automatically](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) to a cart line when configured conditions are met. Unlike [`CartCodeDiscountAllocation`](https://shopify.dev/docs/api/storefront/current/objects/CartCodeDiscountAllocation), automatic discounts don't require customers to enter a code.

* [Cart​Code​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartCodeDiscountAllocation#field-CartCodeDiscountAllocation.fields.targetType)

  OBJECT

  A discount allocation applied to a cart line when a customer enters a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes).

* [Cart​Custom​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartCustomDiscountAllocation#field-CartCustomDiscountAllocation.fields.targetType)

  OBJECT

  The discounts automatically applied to the cart line based on prerequisites that have been met.

* [Cart​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/interfaces/CartDiscountAllocation#fields-targetType)

  INTERFACE

  A common interface for querying discount allocations regardless of how the discount was applied ([automatic](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), or custom). Each implementation represents a different discount source.

  Tracks how a discount distributes across [cart lines](https://shopify.dev/docs/api/storefront/current/objects/CartLine). Each allocation includes the [`CartDiscountApplication`](https://shopify.dev/docs/api/storefront/current/objects/CartDiscountApplication) details, the discounted amount, and whether the discount targets line items or shipping.

* [Cart​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.targetType)

  OBJECT

  Captures the intent of a discount source at the time it was applied to a cart. This includes the discount value, how it's allocated across entitled items, and which line types it targets.

  The actual discounted amounts on specific cart lines are represented by [`CartDiscountAllocation`](https://shopify.dev/docs/api/storefront/current/interfaces/CartDiscountAllocation) objects, which reference this application.

* [Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/interfaces/DiscountApplication#fields-targetType)

  INTERFACE

  Captures the intent of a discount at the time it was applied. Each implementation represents a different discount source, such as [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts), [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes), and manual discounts.

  The actual discounted amount on a line item or shipping line is represented by the [`DiscountAllocation`](https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation) object, which references the discount application it originated from.

* [Discount​Code​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)

  OBJECT

  Records the configuration and intent of a [discount code](https://help.shopify.com/manual/discounts/discount-methods/discount-codes) when a customer applies it. This includes the code string, allocation method, target type, and discount value at the time of application. The [`applicable`](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.applicable) field indicates whether the code was successfully applied.

  ***

  **Note:** To see the actual amounts discounted on specific line items or shipping lines, use the \<a href="https://shopify.dev/docs/api/storefront/current/objects/DiscountAllocation">\<code>\<span class="PreventFireFoxApplyingGapToWBR">Discount\<wbr/>Allocation\</span>\</code>\</a> object instead.

  ***

* [Manual​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)

  OBJECT

  A discount created manually by a merchant, as opposed to [automatic discounts](https://help.shopify.com/manual/discounts/discount-methods/automatic-discounts) or [discount codes](https://help.shopify.com/manual/discounts/discount-methods/discount-codes). Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and includes a title, optional description, and the discount value as either a fixed amount or percentage.

* [Script​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)

  OBJECT

  A discount application created by a Shopify Script. Implements the [`DiscountApplication`](https://shopify.dev/docs/api/storefront/current/interfaces/DiscountApplication) interface and captures the discount's value, allocation method, and targeting rules at the time the script applied it.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)
* [Cart​Automatic​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartAutomaticDiscountAllocation#field-CartAutomaticDiscountAllocation.fields.targetType)
* [Cart​Code​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartCodeDiscountAllocation#field-CartCodeDiscountAllocation.fields.targetType)
* [Cart​Custom​Discount​Allocation.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartCustomDiscountAllocation#field-CartCustomDiscountAllocation.fields.targetType)
* [Cart​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/CartDiscountApplication#field-CartDiscountApplication.fields.targetType)
* [Discount​Code​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)
* [Manual​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)
* [Script​Discount​Application.targetType](https://shopify.dev/docs/api/storefront/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)

---



<a id="latest-enums-filterpresentation"></a>


## Filter​Presentation

enum

Defines how to present the filter values, specifies the presentation of the filter.

### Valid values

* IMAGE

  Image presentation, filter values display an image.

* SWATCH

  Swatch presentation, filter values display color or image patterns.

* TEXT

  Text presentation, no additional visual display for filter values.

***

### Fields

* [Filter.presentation](https://shopify.dev/docs/api/storefront/latest/objects/Filter#field-Filter.fields.presentation)

  OBJECT

  A filter option available on collection and search results pages. Each filter includes a type, display label, and selectable values that customers can use to narrow down products.

  The [`FilterValue`](https://shopify.dev/docs/api/storefront/current/objects/FilterValue) objects contain an [`input`](https://shopify.dev/docs/api/storefront/current/objects/FilterValue#field-FilterValue.fields.input) field that you can combine to [build dynamic filtering queries](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products). Merchants [configure available filters](https://help.shopify.com/manual/online-store/search-and-discovery/filters) using the Shopify Search & Discovery app.

***

### Map

#### Fields with this enum

* [Filter.presentation](https://shopify.dev/docs/api/storefront/latest/objects/Filter#field-Filter.fields.presentation)

---



<a id="latest-enums-filtertype"></a>


## Filter​Type

enum

The type of data that the filter group represents.

For more information, refer to \[Filter products in a collection with the Storefront API] (<https://shopify.dev/custom-storefronts/products-collections/filter-products>).

### Valid values

* BOOLEAN

  A boolean value.

* LIST

  A list of selectable values.

* PRICE\_​RANGE

  A range of prices.

***

### Fields

* [Filter.type](https://shopify.dev/docs/api/storefront/latest/objects/Filter#field-Filter.fields.type)

  OBJECT

  A filter option available on collection and search results pages. Each filter includes a type, display label, and selectable values that customers can use to narrow down products.

  The [`FilterValue`](https://shopify.dev/docs/api/storefront/current/objects/FilterValue) objects contain an [`input`](https://shopify.dev/docs/api/storefront/current/objects/FilterValue#field-FilterValue.fields.input) field that you can combine to [build dynamic filtering queries](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products). Merchants [configure available filters](https://help.shopify.com/manual/online-store/search-and-discovery/filters) using the Shopify Search & Discovery app.

***

### Map

#### Fields with this enum

* [Filter.type](https://shopify.dev/docs/api/storefront/latest/objects/Filter#field-Filter.fields.type)

---



<a id="latest-enums-imagecontenttype"></a>


## Image​Content​Type

enum

List of supported image content types.

### Valid values

* JPG

  A JPG image.

* PNG

  A PNG image.

* WEBP

  A WEBP image.

***

### Fields

* [Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)

  ARGUMENT

  An image resource with URL, dimensions, and transformation options. Used for product images, collection images, media previews, and other visual content throughout the storefront.

  The [`url`](https://shopify.dev/docs/api/storefront/current/objects/Image#field-Image.fields.url) field accepts an [`ImageTransformInput`](https://shopify.dev/docs/api/storefront/current/input-objects/ImageTransformInput) argument for resizing, cropping, scaling for retina displays, and converting between image formats. Use the [`thumbhash`](https://shopify.dev/docs/api/storefront/current/objects/Image#field-Image.fields.thumbhash) field to display lightweight placeholders while images load.

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-preferredContentType)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

***

### Map

#### Inputs with this enum

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/storefront/latest/input-objects/ImageTransformInput#fields-preferredContentType)

#### Arguments with this enum

* [Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/storefront/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)

---



<a id="latest-enums-languagecode"></a>


## Language​Code

enum

Supported languages for retrieving translated storefront content. Pass a language code to the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to return product titles, descriptions, and other translatable fields in that language.

The [`Localization`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization) object provides the list of available languages for the active country, and each [`Country`](https://shopify.dev/docs/api/storefront/2026-04/objects/Country) in [`availableCountries`](https://shopify.dev/docs/api/storefront/2026-04/objects/Localization#field-Localization.fields.availableCountries) includes its own available languages.

### Valid values

* AF

  Afrikaans.

* AK

  Akan.

* AM

  Amharic.

* AR

  Arabic.

* AS

  Assamese.

* AZ

  Azerbaijani.

* BE

  Belarusian.

* BG

  Bulgarian.

* BM

  Bambara.

* BN

  Bangla.

* BO

  Tibetan.

* BR

  Breton.

* BS

  Bosnian.

* CA

  Catalan.

* CE

  Chechen.

* CKB

  Central Kurdish.

* CS

  Czech.

* CU

  Church Slavic.

* CY

  Welsh.

* DA

  Danish.

* DE

  German.

* DZ

  Dzongkha.

* EE

  Ewe.

* EL

  Greek.

* EN

  English.

* EO

  Esperanto.

* ES

  Spanish.

* ET

  Estonian.

* EU

  Basque.

* FA

  Persian.

* FF

  Fulah.

* FI

  Finnish.

* FIL

  Filipino.

* FO

  Faroese.

* FR

  French.

* FY

  Western Frisian.

* GA

  Irish.

* GD

  Scottish Gaelic.

* GL

  Galician.

* GU

  Gujarati.

* GV

  Manx.

* HA

  Hausa.

* HE

  Hebrew.

* HI

  Hindi.

* HR

  Croatian.

* HU

  Hungarian.

* HY

  Armenian.

* IA

  Interlingua.

* ID

  Indonesian.

* IG

  Igbo.

* II

  Sichuan Yi.

* IS

  Icelandic.

* IT

  Italian.

* JA

  Japanese.

* JV

  Javanese.

* KA

  Georgian.

* KI

  Kikuyu.

* KK

  Kazakh.

* KL

  Kalaallisut.

* KM

  Khmer.

* KN

  Kannada.

* KO

  Korean.

* KS

  Kashmiri.

* KU

  Kurdish.

* KW

  Cornish.

* KY

  Kyrgyz.

* LA

  Latin.

* LB

  Luxembourgish.

* LG

  Ganda.

* LN

  Lingala.

* LO

  Lao.

* LT

  Lithuanian.

* LU

  Luba-Katanga.

* LV

  Latvian.

* MG

  Malagasy.

* MI

  Māori.

* MK

  Macedonian.

* ML

  Malayalam.

* MN

  Mongolian.

* MO

  Moldavian.

* MR

  Marathi.

* MS

  Malay.

* MT

  Maltese.

* MY

  Burmese.

* NB

  Norwegian (Bokmål).

* ND

  North Ndebele.

* NE

  Nepali.

* NL

  Dutch.

* NN

  Norwegian Nynorsk.

* NO

  Norwegian.

* OM

  Oromo.

* OR

  Odia.

* OS

  Ossetic.

* PA

  Punjabi.

* PL

  Polish.

* PS

  Pashto.

* PT

  Portuguese.

* PT\_​BR

  Portuguese (Brazil).

* PT\_​PT

  Portuguese (Portugal).

* QU

  Quechua.

* RM

  Romansh.

* RN

  Rundi.

* RO

  Romanian.

* RU

  Russian.

* RW

  Kinyarwanda.

* SA

  Sanskrit.

* SC

  Sardinian.

* SD

  Sindhi.

* SE

  Northern Sami.

* SG

  Sango.

* SH

  Serbo-Croatian.

* SI

  Sinhala.

* SK

  Slovak.

* SL

  Slovenian.

* SN

  Shona.

* SO

  Somali.

* SQ

  Albanian.

* SR

  Serbian.

* SU

  Sundanese.

* SV

  Swedish.

* SW

  Swahili.

* TA

  Tamil.

* TE

  Telugu.

* TG

  Tajik.

* TH

  Thai.

* TI

  Tigrinya.

* TK

  Turkmen.

* TO

  Tongan.

* TR

  Turkish.

* TT

  Tatar.

* UG

  Uyghur.

* UK

  Ukrainian.

* UR

  Urdu.

* UZ

  Uzbek.

* VI

  Vietnamese.

* VO

  Volapük.

* WO

  Wolof.

* XH

  Xhosa.

* YI

  Yiddish.

* YO

  Yoruba.

* ZH

  Chinese.

* ZH\_​CN

  Chinese (Simplified).

* ZH\_​TW

  Chinese (Traditional).

* ZU

  Zulu.

***

### Fields

* [Language.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Language#field-Language.fields.isoCode)

  OBJECT

  A language available for a localized storefront experience. Provides the language name in both its native form (endonym) and translated into the current language, along with its [`LanguageCode`](https://shopify.dev/docs/api/storefront/current/enums/LanguageCode).

  Returned by the [`Localization`](https://shopify.dev/docs/api/storefront/current/objects/Localization) and [`Country`](https://shopify.dev/docs/api/storefront/current/objects/Country) objects to indicate available and active languages. Pass the `isoCode` to the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to retrieve translated content in that language.

***

### Map

#### Fields with this enum

* [Language.isoCode](https://shopify.dev/docs/api/storefront/latest/objects/Language#field-Language.fields.isoCode)

---



<a id="latest-enums-locationsortkeys"></a>


## Location​Sort​Keys

enum

The set of valid sort keys for the Location query.

### Valid values

* CITY

  Sort by the `city` value.

* DISTANCE

  Sort by the `distance` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

***

### Fields

* [Query​Root.locations(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.locations.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [locations.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/locations#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.locations(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.locations.arguments.sortKey)
* [locations.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/locations#arguments-sortKey)

---



<a id="latest-enums-mediacontenttype"></a>


## Media​Content​Type

enum

The possible content types for a media object.

### Valid values

* EXTERNAL\_​VIDEO

  An externally hosted video.

* IMAGE

  A Shopify hosted image.

* MODEL\_​3D

  A 3d model.

* VIDEO

  A Shopify hosted video.

***

### Fields

* [External​Video.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaContentType)

  OBJECT

  Represents a video hosted outside of Shopify.

* [Media.mediaContentType](https://shopify.dev/docs/api/storefront/latest/interfaces/Media#fields-mediaContentType)

  INTERFACE

  A common set of fields for media content associated with [products](https://shopify.dev/docs/api/storefront/current/objects/Product). Implementations include [`MediaImage`](https://shopify.dev/docs/api/storefront/current/objects/MediaImage) for Shopify-hosted images, [`Video`](https://shopify.dev/docs/api/storefront/current/objects/Video) for Shopify-hosted videos, [`ExternalVideo`](https://shopify.dev/docs/api/storefront/current/objects/ExternalVideo) for videos hosted on platforms like YouTube or Vimeo, and [`Model3d`](https://shopify.dev/docs/api/storefront/current/objects/Model3d) for 3D models.

  Each implementation shares fields for alt text, content type, and preview images, while adding type-specific fields like embed URLs for external videos or source files for 3D models.

* [Media​Image.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)

  OBJECT

  An image hosted on Shopify's content delivery network (CDN). Used for product images, brand logos, and other visual content across the storefront.

  The [`image`](https://shopify.dev/docs/api/storefront/current/objects/MediaImage#field-MediaImage.fields.image) field provides the actual image data with transformation options. Implements the [`Media`](https://shopify.dev/docs/api/storefront/current/interfaces/Media) interface alongside other media types like [`Video`](https://shopify.dev/docs/api/storefront/current/objects/Video) and [`Model3d`](https://shopify.dev/docs/api/storefront/current/objects/Model3d).

* [Model3d.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted 3D model.

* [Video.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/Video#field-Video.fields.mediaContentType)

  OBJECT

  A video hosted on Shopify's servers. Implements the [`Media`](https://shopify.dev/docs/api/storefront/current/interfaces/Media) interface and provides multiple video sources through the [`sources`](https://shopify.dev/docs/api/storefront/current/objects/Video#field-Video.fields.sources) field, each with [format](https://shopify.dev/docs/api/storefront/current/objects/Video#field-Video.fields.sources.format), dimensions, and [URL information](https://shopify.dev/docs/api/storefront/current/objects/Video#field-Video.fields.sources.url) for adaptive playback.

  For videos hosted on external platforms like YouTube or Vimeo, use [`ExternalVideo`](https://shopify.dev/docs/api/storefront/current/objects/ExternalVideo) instead.

***

### Map

#### Fields with this enum

* [External​Video.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.mediaContentType)
* [Media​Image.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)
* [Model3d.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/Model3d#field-Model3d.fields.mediaContentType)
* [Video.mediaContentType](https://shopify.dev/docs/api/storefront/latest/objects/Video#field-Video.fields.mediaContentType)

---



<a id="latest-enums-mediahost"></a>


## Media​Host

enum

Host for a Media Resource.

### Valid values

* VIMEO

  Host for Vimeo embedded videos.

* YOUTUBE

  Host for YouTube embedded videos.

***

### Fields

* [External​Video.host](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.host)

  OBJECT

  Represents a video hosted outside of Shopify.

***

### Map

#### Fields with this enum

* [External​Video.host](https://shopify.dev/docs/api/storefront/latest/objects/ExternalVideo#field-ExternalVideo.fields.host)

---



<a id="latest-enums-mediapresentationformat"></a>


## Media​Presentation​Format

enum

The possible formats for a media presentation.

### Valid values

* IMAGE

  A media image presentation.

* MODEL\_​VIEWER

  A model viewer presentation.

***

### Fields

* [Media​Presentation.asJson(format)](https://shopify.dev/docs/api/storefront/latest/objects/MediaPresentation#field-MediaPresentation.fields.asJson.arguments.format)

  ARGUMENT

  A media presentation.

***

### Map

#### Arguments with this enum

* [Media​Presentation.asJson(format)](https://shopify.dev/docs/api/storefront/latest/objects/MediaPresentation#field-MediaPresentation.fields.asJson.arguments.format)

---



<a id="latest-enums-menuitemtype"></a>


## Menu​Item​Type

enum

A menu item type.

### Valid values

* ARTICLE

  An article link.

* BLOG

  A blog link.

* CATALOG

  A catalog link.

* COLLECTION

  A collection link.

* COLLECTIONS

  A collection link.

* CUSTOMER\_​ACCOUNT\_​PAGE

  A customer account page link.

* FRONTPAGE

  A frontpage link.

* HTTP

  An http link.

* METAOBJECT

  A metaobject page link.

* PAGE

  A page link.

* PRODUCT

  A product link.

* SEARCH

  A search link.

* SHOP\_​POLICY

  A shop policy link.

***

### Fields

* [Menu​Item.type](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.type)

  OBJECT

  A navigation link within a [`Menu`](https://shopify.dev/docs/api/storefront/current/objects/Menu). Each item has a title, URL, and can link to store resources like [products](https://shopify.dev/docs/api/storefront/current/objects/Product), [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), [pages](https://shopify.dev/docs/api/storefront/current/objects/Page), [blogs](https://shopify.dev/docs/api/storefront/current/objects/Blog), or external URLs.

  Menu items support nested hierarchies through the [`items`](https://shopify.dev/docs/api/storefront/current/objects/MenuItem#field-MenuItem.fields.items) field, enabling dropdown or multi-level navigation structures. The [`tags`](https://shopify.dev/docs/api/storefront/current/objects/MenuItem#field-MenuItem.fields.tags) field filters results when the item links to a collection specifically.

***

### Map

#### Fields with this enum

* [Menu​Item.type](https://shopify.dev/docs/api/storefront/latest/objects/MenuItem#field-MenuItem.fields.type)

---



<a id="latest-enums-metafielddeleteerrorcode"></a>


## Metafield​Delete​Error​Code

enum

Possible error codes that can be returned by `MetafieldDeleteUserError`.

### Valid values

* APP\_​NOT\_​AUTHORIZED

  The current app is not authorized to perform this action.

* INVALID\_​OWNER

  The owner ID is invalid.

* METAFIELD\_​DOES\_​NOT\_​EXIST

  Metafield not found.

***

### Fields

* [Metafield​Delete​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldDeleteUserError#field-MetafieldDeleteUserError.fields.code)

  OBJECT

  An error that occurs during the execution of cart metafield deletion.

***

### Map

#### Fields with this enum

* [Metafield​Delete​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldDeleteUserError#field-MetafieldDeleteUserError.fields.code)

---



<a id="latest-enums-metafieldssetusererrorcode"></a>


## Metafields​Set​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldsSetUserError`.

### Valid values

* APP\_​NOT\_​AUTHORIZED

  The current app is not authorized to perform this action.

* BLANK

  The input value is blank.

* INCLUSION

  The input value isn't included in the list.

* INVALID\_​OWNER

  The owner ID is invalid.

* INVALID\_​TYPE

  The type is invalid.

* INVALID\_​VALUE

  The value is invalid for metafield type or for definition options.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* PRESENT

  The input value needs to be blank.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

***

### Fields

* [Metafields​Set​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldsSet`.

***

### Map

#### Fields with this enum

* [Metafields​Set​User​Error.code](https://shopify.dev/docs/api/storefront/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)

---



<a id="latest-enums-ordercancelreason"></a>


## Order​Cancel​Reason

enum

Represents the reason for the order's cancellation.

### Valid values

* CUSTOMER

  The customer wanted to cancel the order.

* DECLINED

  Payment was declined.

* FRAUD

  The order was fraudulent.

* INVENTORY

  There was insufficient inventory.

* OTHER

  The order was canceled for an unlisted reason.

* STAFF

  Staff made an error.

***

### Fields

* [Order.cancelReason](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.cancelReason)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

***

### Map

#### Fields with this enum

* [Order.cancelReason](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.cancelReason)

---



<a id="latest-enums-orderfinancialstatus"></a>


## Order​Financial​Status

enum

Represents the order's current financial status.

### Valid values

* AUTHORIZED

  Displayed as **Authorized**.

* PAID

  Displayed as **Paid**.

* PARTIALLY\_​PAID

  Displayed as **Partially paid**.

* PARTIALLY\_​REFUNDED

  Displayed as **Partially refunded**.

* PENDING

  Displayed as **Pending**.

* REFUNDED

  Displayed as **Refunded**.

* VOIDED

  Displayed as **Voided**.

***

### Fields

* [Order.financialStatus](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.financialStatus)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

***

### Map

#### Fields with this enum

* [Order.financialStatus](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.financialStatus)

---



<a id="latest-enums-orderfulfillmentstatus"></a>


## Order​Fulfillment​Status

enum

The aggregated fulfillment status of an [`Order`](https://shopify.dev/docs/api/storefront/2026-04/objects/Order), summarizing the state of all line items. Used for display purposes.

Statuses range from unfulfilled to fully fulfilled, with intermediate states such as in progress and on hold.

Learn more about [order statuses](https://help.shopify.com/manual/fulfillment/managing-orders/order-status).

### Valid values

* FULFILLED

  Displayed as **Fulfilled**. All of the items in the order have been fulfilled.

* IN\_​PROGRESS

  Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service.

* ON\_​HOLD

  Displayed as **On hold**. All of the unfulfilled items in this order are on hold.

* OPEN

  Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status.

* PARTIALLY\_​FULFILLED

  Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled.

* PENDING\_​FULFILLMENT

  Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN\_PROGRESS" status.

* RESTOCKED

  Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status.

* SCHEDULED

  Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time.

* UNFULFILLED

  Displayed as **Unfulfilled**. None of the items in the order have been fulfilled.

***

### Fields

* [Order.fulfillmentStatus](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.fulfillmentStatus)

  OBJECT

  An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information.

***

### Map

#### Fields with this enum

* [Order.fulfillmentStatus](https://shopify.dev/docs/api/storefront/latest/objects/Order#field-Order.fields.fulfillmentStatus)

---



<a id="latest-enums-ordersortkeys"></a>


## Order​Sort​Keys

enum

The set of valid sort keys for the Order query.

### Valid values

* ID

  Sort by the `id` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

***

### Fields

* [Customer.orders(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)

  ARGUMENT

  A customer account with the shop. Includes data such as contact information, [addresses](https://shopify.dev/docs/api/storefront/current/objects/MailingAddress) and marketing preferences for logged-in customers, so they don't have to provide these details at every checkout.

  Access the customer through the [`customer`](https://shopify.dev/docs/api/storefront/current/queries/customer) query using a customer access token obtained from the [`customerAccessTokenCreate`](https://shopify.dev/docs/api/storefront/current/mutations/customerAccessTokenCreate) mutation.

  The object implements the [`HasMetafields`](https://shopify.dev/docs/api/storefront/current/interfaces/HasMetafields) interface, enabling retrieval of [custom data](https://shopify.dev/docs/apps/build/custom-data) associated with the customer.

***

### Map

#### Arguments with this enum

* [Customer.orders(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)

---



<a id="latest-enums-pagesortkeys"></a>


## Page​Sort​Keys

enum

The set of valid sort keys for the Page query.

### Valid values

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Query​Root.pages(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.pages.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [pages.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/pages#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.pages(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.pages.arguments.sortKey)
* [pages.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/pages#arguments-sortKey)

---



<a id="latest-enums-predictivesearchlimitscope"></a>


## Predictive​Search​Limit​Scope

enum

Decides the distribution of results.

### Valid values

* ALL

  Return results up to limit across all types.

* EACH

  Return results up to limit per type.

***

### Fields

* [Query​Root.predictiveSearch(limitScope)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.limitScope)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [predictive​Search.limitScope](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-limitScope)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.predictiveSearch(limitScope)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.limitScope)
* [predictive​Search.limitScope](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-limitScope)

---



<a id="latest-enums-predictivesearchtype"></a>


## Predictive​Search​Type

enum

The types of search items to perform predictive search on.

### Valid values

* ARTICLE

  Returns matching articles.

* COLLECTION

  Returns matching collections.

* PAGE

  Returns matching pages.

* PRODUCT

  Returns matching products.

* QUERY

  Returns matching query strings.

***

### Fields

* [Query​Root.predictiveSearch(types)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.types)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [predictive​Search.types](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-types)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.predictiveSearch(types)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.types)
* [predictive​Search.types](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-types)

---



<a id="latest-enums-preferencedeliverymethodtype"></a>


## Preference​Delivery​Method​Type

enum

The preferred delivery methods such as shipping, local pickup or through pickup points.

### Valid values

* PICK\_​UP

  A delivery method used to let buyers receive items directly from a specific location within an area.

* PICKUP\_​POINT

  A delivery method used to let buyers collect purchases at designated locations like parcel lockers.

* SHIPPING

  A delivery method used to send items directly to a buyer’s specified address.

***

### Fields

* [Cart​Delivery​Preference.deliveryMethod](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryPreference#field-CartDeliveryPreference.fields.deliveryMethod)

  OBJECT

  A set of preferences tied to the buyer interacting with the cart. Preferences are used to prefill fields in at checkout to streamline information collection. Preferences are not synced back to the cart if they are overwritten.

* [Cart​Delivery​Preference​Input.deliveryMethod](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput#fields-deliveryMethod)

  INPUT OBJECT

  Delivery preferences can be used to prefill the delivery section at checkout.

***

### Map

#### Fields with this enum

* [Cart​Delivery​Preference.deliveryMethod](https://shopify.dev/docs/api/storefront/latest/objects/CartDeliveryPreference#field-CartDeliveryPreference.fields.deliveryMethod)

#### Inputs with this enum

* [Cart​Delivery​Preference​Input.deliveryMethod](https://shopify.dev/docs/api/storefront/latest/input-objects/CartDeliveryPreferenceInput#fields-deliveryMethod)

---



<a id="latest-enums-productcollectionsortkeys"></a>


## Product​Collection​Sort​Keys

enum

Sort options for products within a [`Collection`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection). Used by the [`products`](https://shopify.dev/docs/api/storefront/2026-04/objects/Collection#field-Collection.fields.products) connection to order results by best-selling, price, title, creation date, or the collection's default and manual ordering.

***

**Note:** The \<a href="/docs/api/storefront/2026-04/enums/ProductCollectionSortKeys#enums-RELEVANCE">\<code>\<span class="PreventFireFoxApplyingGapToWBR">R\<wbr/>E\<wbr/>L\<wbr/>E\<wbr/>V\<wbr/>A\<wbr/>N\<wbr/>C\<wbr/>E\</span>\</code>\</a> key applies only when you specify a search query.

***

### Valid values

* BEST\_​SELLING

  Sort by the `best-selling` value.

* COLLECTION\_​DEFAULT

  Sort by the `collection-default` value.

* CREATED

  Sort by the `created` value.

* ID

  Sort by the `id` value.

* MANUAL

  Sort by the `manual` value.

* PRICE

  Sort by the `price` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

***

### Fields

* [Collection.products(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.sortKey)

  ARGUMENT

  A group of products [organized by a merchant](https://help.shopify.com/manual/products/collections) to make their store easier to browse. Collections can help customers discover related products by category, season, promotion, or other criteria.

  Query a collection's products with [filtering options](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/filter-products) like availability, price range, vendor, and tags. Each collection includes [`SEO`](https://shopify.dev/docs/api/storefront/current/objects/SEO) information, an optional [`Image`](https://shopify.dev/docs/api/storefront/current/objects/Image), and supports custom data through [`metafields`](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

***

### Map

#### Arguments with this enum

* [Collection.products(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Collection#field-Collection.fields.products.arguments.sortKey)

---



<a id="latest-enums-productimagesortkeys"></a>


## Product​Image​Sort​Keys

enum

The set of valid sort keys for the ProductImage query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* POSITION

  Sort by the `position` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

### Fields

* [Product.images(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images.arguments.sortKey)

  ARGUMENT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Map

#### Arguments with this enum

* [Product.images(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.images.arguments.sortKey)

---



<a id="latest-enums-productmediasortkeys"></a>


## Product​Media​Sort​Keys

enum

The set of valid sort keys for the ProductMedia query.

### Valid values

* ID

  Sort by the `id` value.

* POSITION

  Sort by the `position` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

### Fields

* [Product.media(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.media.arguments.sortKey)

  ARGUMENT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Map

#### Arguments with this enum

* [Product.media(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.media.arguments.sortKey)

---



<a id="latest-enums-productrecommendationintent"></a>


## Product​Recommendation​Intent

enum

The recommendation intent that is used to generate product recommendations. You can use intent to generate product recommendations according to different strategies.

### Valid values

* COMPLEMENTARY

  Offer customers products that are complementary to a product for which recommendations are to be fetched. An example is add-on products that display in a Pair it with section.

* RELATED

  Offer customers a mix of products that are similar or complementary to a product for which recommendations are to be fetched. An example is substitutable products that display in a You may also like section.

***

### Fields

* [Query​Root.productRecommendations(intent)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.productRecommendations.arguments.intent)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [product​Recommendations.intent](https://shopify.dev/docs/api/storefront/latest/queries/productRecommendations#arguments-intent)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.productRecommendations(intent)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.productRecommendations.arguments.intent)
* [product​Recommendations.intent](https://shopify.dev/docs/api/storefront/latest/queries/productRecommendations#arguments-intent)

---



<a id="latest-enums-productsortkeys"></a>


## Product​Sort​Keys

enum

Sorting options for the [`products`](https://shopify.dev/docs/api/storefront/2026-04/queries/products) query. Supports sorting products by criteria such as best-selling and price, and by product attributes such as type, and vendor.

***

**Note:** Use the \<a href="/docs/api/storefront/2026-04/enums/ProductSortKeys#enums-RELEVANCE">\<code>\<span class="PreventFireFoxApplyingGapToWBR">R\<wbr/>E\<wbr/>L\<wbr/>E\<wbr/>V\<wbr/>A\<wbr/>N\<wbr/>C\<wbr/>E\</span>\</code>\</a> key only when a search query is specified.

***

### Valid values

* BEST\_​SELLING

  Sort by the `best_selling` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* PRICE

  Sort by the `price` value.

* PRODUCT\_​TYPE

  Sort by the `product_type` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

* VENDOR

  Sort by the `vendor` value.

***

### Fields

* [Query​Root.products(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.products.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [products.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/products#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.products(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.products.arguments.sortKey)
* [products.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/products#arguments-sortKey)

---



<a id="latest-enums-productvariantsortkeys"></a>


## Product​Variant​Sort​Keys

enum

The set of valid sort keys for the ProductVariant query.

### Valid values

* ID

  Sort by the `id` value.

* POSITION

  Sort by the `position` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* SKU

  Sort by the `sku` value.

* TITLE

  Sort by the `title` value.

***

### Fields

* [Product.variants(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants.arguments.sortKey)

  ARGUMENT

  Represents an item listed in a shop's catalog.

  Products support multiple [product variants](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant), representing different versions of the same product, and can include various [media](https://shopify.dev/docs/api/storefront/current/interfaces/Media) types. Use the [`selectedOrFirstAvailableVariant`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.selectedOrFirstAvailableVariant) or [`variantBySelectedOptions`](https://shopify.dev/docs/api/storefront/current/objects/Product#field-Product.fields.variantBySelectedOptions) fields to help customers find the right variant based on their selections.

  Products can be organized into [collections](https://shopify.dev/docs/api/storefront/current/objects/Collection), associated with [selling plans](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanGroup) for subscriptions, and extended with custom data through [metafields](https://shopify.dev/docs/api/storefront/current/objects/Metafield).

  Learn more about working with [products and collections](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections).

***

### Map

#### Arguments with this enum

* [Product.variants(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/Product#field-Product.fields.variants.arguments.sortKey)

---



<a id="latest-enums-searchprefixquerytype"></a>


## Search​Prefix​Query​Type

enum

Specifies whether to perform a partial word match on the last search term.

### Valid values

* LAST

  Perform a partial word match on the last search term.

* NONE

  Don't perform a partial word match on the last search term.

***

### Fields

* [Query​Root.search(prefix)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.prefix)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [search.prefix](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-prefix)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.search(prefix)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.prefix)
* [search.prefix](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-prefix)

---



<a id="latest-enums-searchsortkeys"></a>


## Search​Sort​Keys

enum

The set of valid sort keys for the search query.

### Valid values

* PRICE

  Sort by the `price` value.

* RELEVANCE

  Sort by relevance to the search terms.

***

### Fields

* [Query​Root.search(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.sortKey)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [search.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-sortKey)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.search(sortKey)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.sortKey)
* [search.sortKey](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-sortKey)

---



<a id="latest-enums-searchtype"></a>


## Search​Type

enum

The types of search items to perform search within.

### Valid values

* ARTICLE

  Returns matching articles.

* PAGE

  Returns matching pages.

* PRODUCT

  Returns matching products.

***

### Fields

* [Query​Root.search(types)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.types)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [search.types](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-types)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.search(types)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.types)
* [search.types](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-types)

---



<a id="latest-enums-searchunavailableproductstype"></a>


## Search​Unavailable​Products​Type

enum

Specifies whether to display results for unavailable products.

### Valid values

* HIDE

  Exclude unavailable products.

* LAST

  Show unavailable products after all other matching results. This is the default.

* SHOW

  Show unavailable products in the order that they're found.

***

### Fields

* [Query​Root.predictiveSearch(unavailableProducts)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.unavailableProducts)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [Query​Root.search(unavailableProducts)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.unavailableProducts)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [predictive​Search.unavailableProducts](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-unavailableProducts)

  ARGUMENT

* [search.unavailableProducts](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-unavailableProducts)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.predictiveSearch(unavailableProducts)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.unavailableProducts)
* [Query​Root.search(unavailableProducts)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.search.arguments.unavailableProducts)
* [predictive​Search.unavailableProducts](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-unavailableProducts)
* [search.unavailableProducts](https://shopify.dev/docs/api/storefront/latest/queries/search#arguments-unavailableProducts)

---



<a id="latest-enums-searchablefield"></a>


## Searchable​Field

enum

Specifies the list of resource fields to search.

### Valid values

* AUTHOR

  Author of the page or article.

* BODY

  Body of the page or article or product description or collection description.

* PRODUCT\_​TYPE

  Product type.

* TAG

  Tag associated with the product or article.

* TITLE

  Title of the page or article or product title or collection title.

* VARIANTS\_​BARCODE

  Variant barcode.

* VARIANTS\_​SKU

  Variant SKU.

* VARIANTS\_​TITLE

  Variant title.

* VENDOR

  Product vendor.

***

### Fields

* [Query​Root.predictiveSearch(searchableFields)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.searchableFields)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [predictive​Search.searchableFields](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-searchableFields)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.predictiveSearch(searchableFields)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.predictiveSearch.arguments.searchableFields)
* [predictive​Search.searchableFields](https://shopify.dev/docs/api/storefront/latest/queries/predictiveSearch#arguments-searchableFields)

---



<a id="latest-enums-sellingplancheckoutchargetype"></a>


## Selling​Plan​Checkout​Charge​Type

enum

The checkout charge when the full amount isn't charged at checkout.

### Valid values

* PERCENTAGE

  The checkout charge is a percentage of the product or variant price.

* PRICE

  The checkout charge is a fixed price amount.

***

### Fields

* [Selling​Plan​Checkout​Charge.type](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanCheckoutCharge#field-SellingPlanCheckoutCharge.fields.type)

  OBJECT

  The initial payment due for the purchase.

***

### Map

#### Fields with this enum

* [Selling​Plan​Checkout​Charge.type](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanCheckoutCharge#field-SellingPlanCheckoutCharge.fields.type)

---



<a id="latest-enums-sellingplaninterval"></a>


## Selling​Plan​Interval

enum

Represents a valid selling plan interval.

### Valid values

* DAY

  Day interval.

* MONTH

  Month interval.

* WEEK

  Week interval.

* YEAR

  Year interval.

***

### Fields

* [Selling​Plan​Recurring​Billing​Policy.interval](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringBillingPolicy#field-SellingPlanRecurringBillingPolicy.fields.interval)

  OBJECT

  The recurring billing policy for the selling plan.

* [Selling​Plan​Recurring​Delivery​Policy.interval](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringDeliveryPolicy#field-SellingPlanRecurringDeliveryPolicy.fields.interval)

  OBJECT

  The recurring delivery policy for the selling plan.

***

### Map

#### Fields with this enum

* [Selling​Plan​Recurring​Billing​Policy.interval](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringBillingPolicy#field-SellingPlanRecurringBillingPolicy.fields.interval)
* [Selling​Plan​Recurring​Delivery​Policy.interval](https://shopify.dev/docs/api/storefront/latest/objects/SellingPlanRecurringDeliveryPolicy#field-SellingPlanRecurringDeliveryPolicy.fields.interval)

---



<a id="latest-enums-shoppayinstallmentsfinancingplanfrequency"></a>


## Shop​Pay​Installments​Financing​Plan​Frequency

enum

The payment frequency for a Shop Pay Installments Financing Plan.

### Valid values

* MONTHLY

  Monthly payment frequency.

* WEEKLY

  Weekly payment frequency.

***

### Fields

* [Shop​Pay​Installments​Financing​Plan​Term.frequency](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.frequency)

  OBJECT

  The terms of the financing plan in Shop Pay Installments.

***

### Map

#### Fields with this enum

* [Shop​Pay​Installments​Financing​Plan​Term.frequency](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.frequency)

---



<a id="latest-enums-shoppayinstallmentsloan"></a>


## Shop​Pay​Installments​Loan

enum

The loan type for a Shop Pay Installments Financing Plan Term.

### Valid values

* INTEREST

  An interest-bearing loan type.

* SPLIT\_​PAY

  A split-pay loan type.

* ZERO\_​PERCENT

  A zero-percent loan type.

***

### Fields

* [Shop​Pay​Installments​Financing​Plan​Term.loanType](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.loanType)

  OBJECT

  The terms of the financing plan in Shop Pay Installments.

***

### Map

#### Fields with this enum

* [Shop​Pay​Installments​Financing​Plan​Term.loanType](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayInstallmentsFinancingPlanTerm#field-ShopPayInstallmentsFinancingPlanTerm.fields.loanType)

---



<a id="latest-enums-shoppaypaymentrequestdeliverymethodtype"></a>


## Shop​Pay​Payment​Request​Delivery​Method​Type

enum

Represents the delivery method type for a Shop Pay payment request.

### Valid values

* PICKUP

  The delivery method type is pickup.

* SHIPPING

  The delivery method type is shipping.

***

### Fields

* [Shop​Pay​Payment​Request.selectedDeliveryMethodType](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.selectedDeliveryMethodType)

  OBJECT

  Represents a Shop Pay payment request.

* [Shop​Pay​Payment​Request​Input.selectedDeliveryMethodType](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-selectedDeliveryMethodType)

  INPUT OBJECT

  The input fields represent a Shop Pay payment request.

***

### Map

#### Fields with this enum

* [Shop​Pay​Payment​Request.selectedDeliveryMethodType](https://shopify.dev/docs/api/storefront/latest/objects/ShopPayPaymentRequest#field-ShopPayPaymentRequest.fields.selectedDeliveryMethodType)

#### Inputs with this enum

* [Shop​Pay​Payment​Request​Input.selectedDeliveryMethodType](https://shopify.dev/docs/api/storefront/latest/input-objects/ShopPayPaymentRequestInput#fields-selectedDeliveryMethodType)

---



<a id="latest-enums-sitemaptype"></a>


## Sitemap​Type

enum

The types of resources potentially present in a sitemap.

### Valid values

* ARTICLE

  Articles present in the sitemap.

* BLOG

  Blogs present in the sitemap.

* COLLECTION

  Collections present in the sitemap.

* METAOBJECT

  Metaobjects present in the sitemap. Only metaobject types with the [`renderable` capability](https://shopify.dev/docs/apps/build/custom-data/metaobjects/use-metaobject-capabilities#render-metaobjects-as-web-pages) are included in sitemap.

* PAGE

  Pages present in the sitemap.

* PRODUCT

  Products present in the sitemap.

***

### Fields

* [Query​Root.sitemap(type)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.sitemap.arguments.type)

  ARGUMENT

  The entry point for all Storefront API queries. Provides access to shop resources including products, collections, carts, and customer data, as well as content like articles and pages. This query acts as the public, top-level type from which all queries must start.

  Use individual queries like [`product`](https://shopify.dev/docs/api/storefront/current/queries/product) or [`collection`](https://shopify.dev/docs/api/storefront/current/queries/collection) to fetch specific resources by ID or handle. Use plural queries like [`products`](https://shopify.dev/docs/api/storefront/current/queries/products) or [`collections`](https://shopify.dev/docs/api/storefront/current/queries/collections) to retrieve paginated lists with optional filtering and sorting. The [`search`](https://shopify.dev/docs/api/storefront/current/queries/search) and [`predictiveSearch`](https://shopify.dev/docs/api/storefront/current/queries/predictiveSearch) queries enable storefront search functionality.

  Explore queries interactively with the [GraphiQL explorer and sample query kit](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/api-exploration).

* [sitemap.type](https://shopify.dev/docs/api/storefront/latest/queries/sitemap#arguments-type)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [Query​Root.sitemap(type)](https://shopify.dev/docs/api/storefront/latest/objects/QueryRoot#field-QueryRoot.fields.sitemap.arguments.type)
* [sitemap.type](https://shopify.dev/docs/api/storefront/latest/queries/sitemap#arguments-type)

---



<a id="latest-enums-submissionerrorcode"></a>


## Submission​Error​Code

enum

The code of the error that occurred during cart submit for completion.

### Valid values

* BUYER\_​IDENTITY\_​EMAIL\_​IS\_​INVALID

* BUYER\_​IDENTITY\_​EMAIL\_​REQUIRED

* BUYER\_​IDENTITY\_​PHONE\_​IS\_​INVALID

* DELIVERY\_​ADDRESS\_​REQUIRED

* DELIVERY\_​ADDRESS1\_​INVALID

* DELIVERY\_​ADDRESS1\_​REQUIRED

* DELIVERY\_​ADDRESS1\_​TOO\_​LONG

* DELIVERY\_​ADDRESS2\_​INVALID

* DELIVERY\_​ADDRESS2\_​REQUIRED

* DELIVERY\_​ADDRESS2\_​TOO\_​LONG

* DELIVERY\_​CITY\_​INVALID

* DELIVERY\_​CITY\_​REQUIRED

* DELIVERY\_​CITY\_​TOO\_​LONG

* DELIVERY\_​COMPANY\_​INVALID

* DELIVERY\_​COMPANY\_​REQUIRED

* DELIVERY\_​COMPANY\_​TOO\_​LONG

* DELIVERY\_​COUNTRY\_​REQUIRED

* DELIVERY\_​FIRST\_​NAME\_​INVALID

* DELIVERY\_​FIRST\_​NAME\_​REQUIRED

* DELIVERY\_​FIRST\_​NAME\_​TOO\_​LONG

* DELIVERY\_​INVALID\_​POSTAL\_​CODE\_​FOR\_​COUNTRY

* DELIVERY\_​INVALID\_​POSTAL\_​CODE\_​FOR\_​ZONE

* DELIVERY\_​LAST\_​NAME\_​INVALID

* DELIVERY\_​LAST\_​NAME\_​REQUIRED

* DELIVERY\_​LAST\_​NAME\_​TOO\_​LONG

* DELIVERY\_​NO\_​DELIVERY\_​AVAILABLE

* DELIVERY\_​NO\_​DELIVERY\_​AVAILABLE\_​FOR\_​MERCHANDISE\_​LINE

* DELIVERY\_​OPTIONS\_​PHONE\_​NUMBER\_​INVALID

* DELIVERY\_​OPTIONS\_​PHONE\_​NUMBER\_​REQUIRED

* DELIVERY\_​PHONE\_​NUMBER\_​INVALID

* DELIVERY\_​PHONE\_​NUMBER\_​REQUIRED

* DELIVERY\_​POSTAL\_​CODE\_​INVALID

* DELIVERY\_​POSTAL\_​CODE\_​REQUIRED

* DELIVERY\_​ZONE\_​NOT\_​FOUND

* DELIVERY\_​ZONE\_​REQUIRED\_​FOR\_​COUNTRY

* ERROR

* MERCHANDISE\_​LINE\_​LIMIT\_​REACHED

* MERCHANDISE\_​NOT\_​APPLICABLE

* MERCHANDISE\_​NOT\_​ENOUGH\_​STOCK\_​AVAILABLE

* MERCHANDISE\_​OUT\_​OF\_​STOCK

* MERCHANDISE\_​PRODUCT\_​NOT\_​PUBLISHED

* NO\_​DELIVERY\_​GROUP\_​SELECTED

* PAYMENTS\_​ADDRESS1\_​INVALID

* PAYMENTS\_​ADDRESS1\_​REQUIRED

* PAYMENTS\_​ADDRESS1\_​TOO\_​LONG

* PAYMENTS\_​ADDRESS2\_​INVALID

* PAYMENTS\_​ADDRESS2\_​REQUIRED

* PAYMENTS\_​ADDRESS2\_​TOO\_​LONG

* PAYMENTS\_​BILLING\_​ADDRESS\_​ZONE\_​NOT\_​FOUND

* PAYMENTS\_​BILLING\_​ADDRESS\_​ZONE\_​REQUIRED\_​FOR\_​COUNTRY

* PAYMENTS\_​CITY\_​INVALID

* PAYMENTS\_​CITY\_​REQUIRED

* PAYMENTS\_​CITY\_​TOO\_​LONG

* PAYMENTS\_​COMPANY\_​INVALID

* PAYMENTS\_​COMPANY\_​REQUIRED

* PAYMENTS\_​COMPANY\_​TOO\_​LONG

* PAYMENTS\_​COUNTRY\_​REQUIRED

* PAYMENTS\_​CREDIT\_​CARD\_​BASE\_​EXPIRED

* PAYMENTS\_​CREDIT\_​CARD\_​BASE\_​GATEWAY\_​NOT\_​SUPPORTED

* PAYMENTS\_​CREDIT\_​CARD\_​BASE\_​INVALID\_​START\_​DATE\_​OR\_​ISSUE\_​NUMBER\_​FOR\_​DEBIT

* PAYMENTS\_​CREDIT\_​CARD\_​BRAND\_​NOT\_​SUPPORTED

* PAYMENTS\_​CREDIT\_​CARD\_​FIRST\_​NAME\_​BLANK

* PAYMENTS\_​CREDIT\_​CARD\_​GENERIC

* PAYMENTS\_​CREDIT\_​CARD\_​LAST\_​NAME\_​BLANK

* PAYMENTS\_​CREDIT\_​CARD\_​MONTH\_​INCLUSION

* PAYMENTS\_​CREDIT\_​CARD\_​NAME\_​INVALID

* PAYMENTS\_​CREDIT\_​CARD\_​NUMBER\_​INVALID

* PAYMENTS\_​CREDIT\_​CARD\_​NUMBER\_​INVALID\_​FORMAT

* PAYMENTS\_​CREDIT\_​CARD\_​SESSION\_​ID

* PAYMENTS\_​CREDIT\_​CARD\_​VERIFICATION\_​VALUE\_​BLANK

* PAYMENTS\_​CREDIT\_​CARD\_​VERIFICATION\_​VALUE\_​INVALID\_​FOR\_​CARD\_​TYPE

* PAYMENTS\_​CREDIT\_​CARD\_​YEAR\_​EXPIRED

* PAYMENTS\_​CREDIT\_​CARD\_​YEAR\_​INVALID\_​EXPIRY\_​YEAR

* PAYMENTS\_​FIRST\_​NAME\_​INVALID

* PAYMENTS\_​FIRST\_​NAME\_​REQUIRED

* PAYMENTS\_​FIRST\_​NAME\_​TOO\_​LONG

* PAYMENTS\_​INVALID\_​POSTAL\_​CODE\_​FOR\_​COUNTRY

* PAYMENTS\_​INVALID\_​POSTAL\_​CODE\_​FOR\_​ZONE

* PAYMENTS\_​LAST\_​NAME\_​INVALID

* PAYMENTS\_​LAST\_​NAME\_​REQUIRED

* PAYMENTS\_​LAST\_​NAME\_​TOO\_​LONG

* PAYMENTS\_​METHOD\_​REQUIRED

* PAYMENTS\_​METHOD\_​UNAVAILABLE

* PAYMENTS\_​PHONE\_​NUMBER\_​INVALID

* PAYMENTS\_​PHONE\_​NUMBER\_​REQUIRED

* PAYMENTS\_​POSTAL\_​CODE\_​INVALID

* PAYMENTS\_​POSTAL\_​CODE\_​REQUIRED

* PAYMENTS\_​SHOPIFY\_​PAYMENTS\_​REQUIRED

* PAYMENTS\_​UNACCEPTABLE\_​PAYMENT\_​AMOUNT

* PAYMENTS\_​WALLET\_​CONTENT\_​MISSING

* REDIRECT\_​TO\_​CHECKOUT\_​REQUIRED

  Redirect to checkout required to complete this action.

* TAXES\_​DELIVERY\_​GROUP\_​ID\_​NOT\_​FOUND

* TAXES\_​LINE\_​ID\_​NOT\_​FOUND

* TAXES\_​MUST\_​BE\_​DEFINED

* VALIDATION\_​CUSTOM

  Validation failed.

***

### Map

No referencing types

---



<a id="latest-enums-unitpricemeasurementmeasuredtype"></a>


## Unit​Price​Measurement​Measured​Type

enum

The accepted types of unit of measurement.

### Valid values

* AREA

  Unit of measurements representing areas.

* COUNT

  Unit of measurements representing counts.

* LENGTH

  Unit of measurements representing lengths.

* UNKNOWN

  The type of measurement is unknown. Upgrade to the latest version of the API to resolve this type.

* VOLUME

  Unit of measurements representing volumes.

* WEIGHT

  Unit of measurements representing weights.

***

### Fields

* [Unit​Price​Measurement.measuredType](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.measuredType)

  OBJECT

  The measurement data used to calculate unit prices for a [`ProductVariant`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant). Unit pricing helps customers compare costs across different package sizes by showing a standardized price, such as "$9.99 / 100ml".

  The object includes the quantity being sold (value and unit) and the reference measurement used for price comparison. Use this alongside the variant's [`unitPrice`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant#field-ProductVariant.fields.unitPrice) field to display complete unit pricing information.

***

### Map

#### Fields with this enum

* [Unit​Price​Measurement.measuredType](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.measuredType)

---



<a id="latest-enums-unitpricemeasurementmeasuredunit"></a>


## Unit​Price​Measurement​Measured​Unit

enum

The valid units of measurement for a unit price measurement.

### Valid values

* CL

  100 centiliters equals 1 liter.

* CM

  100 centimeters equals 1 meter.

* FLOZ

  Imperial system unit of volume (U.S. customary unit).

* FT

  1 foot equals 12 inches.

* FT2

  Imperial system unit of area.

* G

  Metric system unit of weight.

* GAL

  1 gallon equals 128 fluid ounces (U.S. customary unit).

* IN

  Imperial system unit of length.

* ITEM

  1 item, a unit of count.

* KG

  1 kilogram equals 1000 grams.

* L

  Metric system unit of volume.

* LB

  Imperial system unit of weight.

* M

  Metric system unit of length.

* M2

  Metric system unit of area.

* M3

  1 cubic meter equals 1000 liters.

* MG

  1000 milligrams equals 1 gram.

* ML

  1000 milliliters equals 1 liter.

* MM

  1000 millimeters equals 1 meter.

* OZ

  16 ounces equals 1 pound.

* PT

  1 pint equals 16 fluid ounces (U.S. customary unit).

* QT

  1 quart equals 32 fluid ounces (U.S. customary unit).

* UNKNOWN

  The unit of measurement is unknown. Upgrade to the latest version of the API to resolve this unit.

* YD

  1 yard equals 36 inches.

***

### Fields

* [Unit​Price​Measurement.quantityUnit](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.quantityUnit)

  OBJECT

  The measurement data used to calculate unit prices for a [`ProductVariant`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant). Unit pricing helps customers compare costs across different package sizes by showing a standardized price, such as "$9.99 / 100ml".

  The object includes the quantity being sold (value and unit) and the reference measurement used for price comparison. Use this alongside the variant's [`unitPrice`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant#field-ProductVariant.fields.unitPrice) field to display complete unit pricing information.

* [Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

  OBJECT

  The measurement data used to calculate unit prices for a [`ProductVariant`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant). Unit pricing helps customers compare costs across different package sizes by showing a standardized price, such as "$9.99 / 100ml".

  The object includes the quantity being sold (value and unit) and the reference measurement used for price comparison. Use this alongside the variant's [`unitPrice`](https://shopify.dev/docs/api/storefront/current/objects/ProductVariant#field-ProductVariant.fields.unitPrice) field to display complete unit pricing information.

***

### Map

#### Fields with this enum

* [Unit​Price​Measurement.quantityUnit](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.quantityUnit)
* [Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/storefront/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

---



<a id="latest-enums-unitsystem"></a>


## Unit​System

enum

Systems of weights and measures.

### Valid values

* IMPERIAL\_​SYSTEM

  Imperial system of weights and measures.

* METRIC\_​SYSTEM

  Metric system of weights and measures.

***

### Fields

* [Country.unitSystem](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.unitSystem)

  OBJECT

  A country with localization settings for a storefront. Includes the country's currency, available languages, default language, and unit system (metric or imperial).

  Access countries through the [localization](https://shopify.dev/docs/api/storefront/current/queries/localization) query, which returns both the list of available countries and the currently active country. Use the [`@inContext`](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/in-context) directive to change the active country context.

***

### Map

#### Fields with this enum

* [Country.unitSystem](https://shopify.dev/docs/api/storefront/latest/objects/Country#field-Country.fields.unitSystem)

---



<a id="latest-enums-usererrorsshoppaypaymentrequestsessionusererrorscode"></a>


## User​Errors​Shop​Pay​Payment​Request​Session​User​Errors​Code

enum

Possible error codes that can be returned by `ShopPayPaymentRequestSessionUserErrors`.

### Valid values

* IDEMPOTENCY\_​KEY\_​ALREADY\_​USED

  Idempotency key has already been used.

* PAYMENT\_​REQUEST\_​INVALID\_​INPUT

  Payment request input is invalid.

* PAYMENT\_​REQUEST\_​NOT\_​FOUND

  Payment request not found.

***

### Fields

* [User​Errors​Shop​Pay​Payment​Request​Session​User​Errors.code](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors#field-UserErrorsShopPayPaymentRequestSessionUserErrors.fields.code)

  OBJECT

  Error codes for failed Shop Pay payment request session mutations.

***

### Map

#### Fields with this enum

* [User​Errors​Shop​Pay​Payment​Request​Session​User​Errors.code](https://shopify.dev/docs/api/storefront/latest/objects/UserErrorsShopPayPaymentRequestSessionUserErrors#field-UserErrorsShopPayPaymentRequestSessionUserErrors.fields.code)

---



<a id="latest-enums-weightunit"></a>


## Weight​Unit

enum

Units of measurement for weight, supporting both metric and imperial systems. Used by [`ProductVariant`](https://shopify.dev/docs/api/storefront/2026-04/objects/ProductVariant) to specify the unit for the variant's weight value.

### Valid values

* GRAMS

  Metric system unit of mass.

* KILOGRAMS

  1 kilogram equals 1000 grams.

* OUNCES

  Imperial system unit of mass.

* POUNDS

  1 pound equals 16 ounces.

***

### Fields

* [Product​Variant.weightUnit](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.weightUnit)

  OBJECT

  A specific version of a [product](https://shopify.dev/docs/api/storefront/current/objects/Product) available for sale, differentiated by options like size or color. For example, a small blue t-shirt and a large blue t-shirt are separate variants of the same product. For more information, see the docs on [Shopify's product model](https://shopify.dev/docs/apps/build/product-merchandising/products-and-collections).

  For products with quantity rules, variants enforce minimum, maximum, and increment constraints on purchases.

  Variants also support subscriptions and pre-orders through [selling plan allocations](https://shopify.dev/docs/api/storefront/current/objects/SellingPlanAllocation) objects, bundle configurations through [product variant components](https://shopify.dev/docs/api/storefront/current/objects/ProductVariantComponent) objects, and [shop pay installments pricing](https://shopify.dev/docs/api/storefront/current/objects/ShopPayInstallmentsPricing) for flexible payment options.

***

### Map

#### Fields with this enum

* [Product​Variant.weightUnit](https://shopify.dev/docs/api/storefront/latest/objects/ProductVariant#field-ProductVariant.fields.weightUnit)

---
