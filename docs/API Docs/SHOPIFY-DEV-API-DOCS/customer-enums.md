# Shopify Customer – enums Reference (Indonesian / English)

> Referensi lengkap **Customer – enums** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/customer.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/customer` |
| Total halaman | **70** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



> **Grup:** `enums` (split file)


## Daftar Isi (Table of Contents)

- [latest / enums / BusinessCustomerErrorCode](#latest-enums-businesscustomererrorcode)
- [latest / enums / CompanyAddressType](#latest-enums-companyaddresstype)
- [latest / enums / CompanyContactRoleAssignmentSortKeys](#latest-enums-companycontactroleassignmentsortkeys)
- [latest / enums / CompanyContactSortKeys](#latest-enums-companycontactsortkeys)
- [latest / enums / CompanyLocationSortKeys](#latest-enums-companylocationsortkeys)
- [latest / enums / CountPrecision](#latest-enums-countprecision)
- [latest / enums / CountryCode](#latest-enums-countrycode)
- [latest / enums / CropRegion](#latest-enums-cropregion)
- [latest / enums / CurrencyCode](#latest-enums-currencycode)
- [latest / enums / DiscountApplicationAllocationMethod](#latest-enums-discountapplicationallocationmethod)
- [latest / enums / DiscountApplicationTargetSelection](#latest-enums-discountapplicationtargetselection)
- [latest / enums / DiscountApplicationTargetType](#latest-enums-discountapplicationtargettype)
- [latest / enums / DiscountTargetType](#latest-enums-discounttargettype)
- [latest / enums / DiscountType](#latest-enums-discounttype)
- [latest / enums / DraftOrderByCompanySortKeys](#latest-enums-draftorderbycompanysortkeys)
- [latest / enums / DraftOrderByLocationSortKeys](#latest-enums-draftorderbylocationsortkeys)
- [latest / enums / DraftOrderSortKeys](#latest-enums-draftordersortkeys)
- [latest / enums / DraftOrderStatus](#latest-enums-draftorderstatus)
- [latest / enums / EmailMarketingState](#latest-enums-emailmarketingstate)
- [latest / enums / FulfillmentEventSortKeys](#latest-enums-fulfillmenteventsortkeys)
- [latest / enums / FulfillmentEventStatus](#latest-enums-fulfillmenteventstatus)
- [latest / enums / FulfillmentSortKeys](#latest-enums-fulfillmentsortkeys)
- [latest / enums / FulfillmentStatus](#latest-enums-fulfillmentstatus)
- [latest / enums / ImageContentType](#latest-enums-imagecontenttype)
- [latest / enums / LanguageCode](#latest-enums-languagecode)
- [latest / enums / MediaContentType](#latest-enums-mediacontenttype)
- [latest / enums / MetafieldsDeleteUserErrorCode](#latest-enums-metafieldsdeleteusererrorcode)
- [latest / enums / MetafieldsSetUserErrorCode](#latest-enums-metafieldssetusererrorcode)
- [latest / enums / NonReturnableReason](#latest-enums-nonreturnablereason)
- [latest / enums / OrderActionType](#latest-enums-orderactiontype)
- [latest / enums / OrderByCompanySortKeys](#latest-enums-orderbycompanysortkeys)
- [latest / enums / OrderByContactSortKeys](#latest-enums-orderbycontactsortkeys)
- [latest / enums / OrderByLocationSortKeys](#latest-enums-orderbylocationsortkeys)
- [latest / enums / OrderCancelReason](#latest-enums-ordercancelreason)
- [latest / enums / OrderFinancialStatus](#latest-enums-orderfinancialstatus)
- [latest / enums / OrderFulfillmentStatus](#latest-enums-orderfulfillmentstatus)
- [latest / enums / OrderPaymentStatus](#latest-enums-orderpaymentstatus)
- [latest / enums / OrderSortKeys](#latest-enums-ordersortkeys)
- [latest / enums / OrderTransactionKind](#latest-enums-ordertransactionkind)
- [latest / enums / OrderTransactionStatus](#latest-enums-ordertransactionstatus)
- [latest / enums / OrderTransactionType](#latest-enums-ordertransactiontype)
- [latest / enums / PermittedOperation](#latest-enums-permittedoperation)
- [latest / enums / ResourceType](#latest-enums-resourcetype)
- [latest / enums / ReturnErrorCode](#latest-enums-returnerrorcode)
- [latest / enums / ReturnReason](#latest-enums-returnreason)
- [latest / enums / ReturnShippingMethod](#latest-enums-returnshippingmethod)
- [latest / enums / ReturnSortKeys](#latest-enums-returnsortkeys)
- [latest / enums / ReturnStatus](#latest-enums-returnstatus)
- [latest / enums / SaleActionType](#latest-enums-saleactiontype)
- [latest / enums / SaleLineType](#latest-enums-salelinetype)
- [latest / enums / SmsMarketingState](#latest-enums-smsmarketingstate)
- [latest / enums / StoreCreditSystemEvent](#latest-enums-storecreditsystemevent)
- [latest / enums / SubscriptionBillingCycleBillingCycleStatus](#latest-enums-subscriptionbillingcyclebillingcyclestatus)
- [latest / enums / SubscriptionBillingCycleSkipUserErrorCode](#latest-enums-subscriptionbillingcycleskipusererrorcode)
- [latest / enums / SubscriptionBillingCycleUnskipUserErrorCode](#latest-enums-subscriptionbillingcycleunskipusererrorcode)
- [latest / enums / SubscriptionBillingCyclesSortKeys](#latest-enums-subscriptionbillingcyclessortkeys)
- [latest / enums / SubscriptionContractLastBillingErrorType](#latest-enums-subscriptioncontractlastbillingerrortype)
- [latest / enums / SubscriptionContractLastPaymentStatus](#latest-enums-subscriptioncontractlastpaymentstatus)
- [latest / enums / SubscriptionContractStatusUpdateErrorCode](#latest-enums-subscriptioncontractstatusupdateerrorcode)
- [latest / enums / SubscriptionContractSubscriptionStatus](#latest-enums-subscriptioncontractsubscriptionstatus)
- [latest / enums / SubscriptionContractUserErrorCode](#latest-enums-subscriptioncontractusererrorcode)
- [latest / enums / SubscriptionContractsSortKeys](#latest-enums-subscriptioncontractssortkeys)
- [latest / enums / SubscriptionInterval](#latest-enums-subscriptioninterval)
- [latest / enums / TransactionSortKeys](#latest-enums-transactionsortkeys)
- [latest / enums / UnitPriceMeasurementUnit](#latest-enums-unitpricemeasurementunit)
- [latest / enums / UserErrorsCustomerAddressUserErrorsCode](#latest-enums-usererrorscustomeraddressusererrorscode)
- [latest / enums / UserErrorsCustomerEmailMarketingUserErrorsCode](#latest-enums-usererrorscustomeremailmarketingusererrorscode)
- [latest / enums / UserErrorsCustomerUserErrorsCode](#latest-enums-usererrorscustomerusererrorscode)
- [latest / enums / UserErrorsStorefrontCustomerAccessTokenCreateUserErrorsCode](#latest-enums-usererrorsstorefrontcustomeraccesstokencreateusererrorscode)
- [latest / enums / WeightUnit](#latest-enums-weightunit)


---



<a id="latest-enums-businesscustomererrorcode"></a>


## Business​Customer​Error​Code

enum

Possible error codes that can be returned by `BusinessCustomerUserError`.

### Valid values

* BLANK

  The input value is blank.

* BUSINESS\_​LOCATION\_​NOT\_​FOUND

  Business location doesn't exist.

* FAILED\_​TO\_​DELETE

  Deleting the resource failed.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​INPUT

  The input is invalid.

* LIMIT\_​REACHED

  The number of resources exceeded the limit.

* NO\_​INPUT

  The input is empty.

* PERMISSION\_​DENIED

  Permission denied.

* REQUIRED

  Missing a required field.

* RESOURCE\_​NOT\_​FOUND

  The resource wasn't found.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The field value is too long.

* UNEXPECTED\_​TYPE

  Unexpected type.

***

### Fields

* [Business​Customer​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.code)

  OBJECT

  An error that happens during the execution of a business customer mutation.

***

### Map

#### Fields with this enum

* [Business​Customer​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/BusinessCustomerUserError#field-BusinessCustomerUserError.fields.code)

---



<a id="latest-enums-companyaddresstype"></a>


## Company​Address​Type

enum

The valid values for the address type of a company.

### Valid values

* BILLING

  The address is a billing address.

* SHIPPING

  The address is a shipping address.

***

### Fields

* [company​Location​Assign​Address.addressTypes](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress#arguments-addressTypes)

  ARGUMENT

***

### Map

#### Arguments with this enum

* [company​Location​Assign​Address.addressTypes](https://shopify.dev/docs/api/customer/latest/mutations/companyLocationAssignAddress#arguments-addressTypes)

---



<a id="latest-enums-companycontactroleassignmentsortkeys"></a>


## Company​Contact​Role​Assignment​Sort​Keys

enum

The set of valid sort keys for the CompanyContactRoleAssignment query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* LOCATION\_​NAME

  Sort by the `location_name` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Location.roleAssignments(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments.arguments.sortKey)

  ARGUMENT

  Represents a company's business location.

***

### Map

#### Arguments with this enum

* [Company​Location.roleAssignments(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.roleAssignments.arguments.sortKey)

---



<a id="latest-enums-companycontactsortkeys"></a>


## Company​Contact​Sort​Keys

enum

The set of valid sort keys for the CompanyContact query.

### Valid values

* COMPANY\_​ID

  Sort by the `company_id` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* EMAIL

  Sort by the `email` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* NAME\_​EMAIL

  Sort by the `name_email` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Location.contacts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.sortKey)

  ARGUMENT

  Represents a company's business location.

***

### Map

#### Arguments with this enum

* [Company​Location.contacts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.contacts.arguments.sortKey)

---



<a id="latest-enums-companylocationsortkeys"></a>


## Company​Location​Sort​Keys

enum

The set of valid sort keys for the CompanyLocation query.

### Valid values

* COMPANY\_​AND\_​LOCATION\_​NAME

  Sort by the `company_and_location_name` value.

* COMPANY\_​ID

  Sort by the `company_id` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* NAME

  Sort by the `name` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company.locations(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.sortKey)

  ARGUMENT

  Represents a company's information.

* [Company​Contact.locations(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.sortKey)

  ARGUMENT

  Represents the customer's contact information.

***

### Map

#### Arguments with this enum

* [Company.locations(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.locations.arguments.sortKey)
* [Company​Contact.locations(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.locations.arguments.sortKey)

---



<a id="latest-enums-countprecision"></a>


## Count​Precision

enum

The precision of the value returned by a count field.

### Valid values

* AT\_​LEAST

  The count is at least the value. A limit was imposed and reached.

* EXACT

  The count is exactly the value. A write may not be reflected instantaneously.

***

### Fields

* [Count.precision](https://shopify.dev/docs/api/customer/latest/objects/Count#field-Count.fields.precision)

  OBJECT

  A numeric count with precision information indicating whether the count is exact or an estimate.

***

### Map

#### Fields with this enum

* [Count.precision](https://shopify.dev/docs/api/customer/latest/objects/Count#field-Count.fields.precision)

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

* [Company​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.countryCode)

  OBJECT

  The address of a company location, either billing or shipping. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Company​Address​Input.countryCode](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-countryCode)

  INPUT OBJECT

  The input fields for creating or updating a company location address.

* [Customer​Address.territoryCode](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress#field-CustomerAddress.fields.territoryCode)

  OBJECT

  Represents a customer's mailing address. For example, a customer's default address and an order's billing address are both mailing addresses. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Pickup​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/PickupAddress#field-PickupAddress.fields.countryCode)

  OBJECT

  The address of a pickup location.

* [Subscription​Mailing​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionMailingAddress#field-SubscriptionMailingAddress.fields.countryCode)

  OBJECT

  The mailing address on a subscription.

***

### Map

#### Fields with this enum

* [Company​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/CompanyAddress#field-CompanyAddress.fields.countryCode)
* [Customer​Address.territoryCode](https://shopify.dev/docs/api/customer/latest/objects/CustomerAddress#field-CustomerAddress.fields.territoryCode)
* [Pickup​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/PickupAddress#field-PickupAddress.fields.countryCode)
* [Subscription​Mailing​Address.countryCode](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionMailingAddress#field-SubscriptionMailingAddress.fields.countryCode)

#### Inputs with this enum

* [Company​Address​Input.countryCode](https://shopify.dev/docs/api/customer/latest/input-objects/CompanyAddressInput#fields-countryCode)

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

* [Image.transformedSrc(crop)](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)

  ARGUMENT

  Represents an image resource.

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-crop)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

* [Payment​Icon​Image.transformedSrc(crop)](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.transformedSrc.arguments.crop)

  ARGUMENT

  Represents an image resource.

***

### Map

#### Inputs with this enum

* [Image​Transform​Input.crop](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-crop)

#### Arguments with this enum

* [Image.transformedSrc(crop)](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.transformedSrc.arguments.crop)
* [Payment​Icon​Image.transformedSrc(crop)](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.transformedSrc.arguments.crop)

---



<a id="latest-enums-currencycode"></a>


## Currency​Code

enum

The currency codes that represent the world currencies throughout the Admin API. Currency codes include [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, non-standard codes, digital currency codes.

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

* USDC

  United States Dollars Coin (USDC).

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

  Deprecated

* STD

  Deprecated

* VEF

  Deprecated

***

### Fields

* [Checkout.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.currencyCode)

  OBJECT

  A container for information required to checkout items and pay. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Draft​Order.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.currencyCode)

  OBJECT

  A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Money​V2.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2#field-MoneyV2.fields.currencyCode)

  OBJECT

  A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

* [Order.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.currencyCode)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Subscription​Contract.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.currencyCode)

  OBJECT

  A Subscription Contract.

* [Subscription​Contract​Base.currencyCode](https://shopify.dev/docs/api/customer/latest/interfaces/SubscriptionContractBase#fields-currencyCode)

  INTERFACE

  The common fields of a subscription contract.

***

### Map

#### Fields with this enum

* [Checkout.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/Checkout#field-Checkout.fields.currencyCode)
* [Draft​Order.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.currencyCode)
* [Money​V2.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/MoneyV2#field-MoneyV2.fields.currencyCode)
* [Order.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.currencyCode)
* [Subscription​Contract.currencyCode](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.currencyCode)

---



<a id="latest-enums-discountapplicationallocationmethod"></a>


## Discount​Application​Allocation​Method

enum

The method by which the discount's value is allocated onto its entitled lines.

### Valid values

* ACROSS

  The value is spread across all entitled lines.

* EACH

  The value is applied onto every entitled line.

* ONE

  Deprecated

***

### Fields

* [Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)

  OBJECT

  Captures the intentions of a discount that was automatically applied.

* [Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication#fields-allocationMethod)

  INTERFACE

  Captures the intentions of a discount source at the time of application.

* [Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)

  OBJECT

  Captures the intentions of a discount code at the time that it is applied.

* [Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)

  OBJECT

  Captures the intentions of a discount that was manually created.

* [Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)

  OBJECT

  Captures the intentions of a discount that was created by a Shopify Script.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.allocationMethod)
* [Discount​Code​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.allocationMethod)
* [Manual​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.allocationMethod)
* [Script​Discount​Application.allocationMethod](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.allocationMethod)

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

* [Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)

  OBJECT

  Captures the intentions of a discount that was automatically applied.

* [Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication#fields-targetSelection)

  INTERFACE

  Captures the intentions of a discount source at the time of application.

* [Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)

  OBJECT

  Captures the intentions of a discount code at the time that it is applied.

* [Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)

  OBJECT

  Captures the intentions of a discount that was manually created.

* [Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)

  OBJECT

  Captures the intentions of a discount that was created by a Shopify Script.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetSelection)
* [Discount​Code​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetSelection)
* [Manual​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetSelection)
* [Script​Discount​Application.targetSelection](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetSelection)

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

* [Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)

  OBJECT

  Captures the intentions of a discount that was automatically applied.

* [Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/interfaces/DiscountApplication#fields-targetType)

  INTERFACE

  Captures the intentions of a discount source at the time of application.

* [Discount​Code​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)

  OBJECT

  Captures the intentions of a discount code at the time that it is applied.

* [Manual​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)

  OBJECT

  Captures the intentions of a discount that was manually created.

* [Script​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)

  OBJECT

  Captures the intentions of a discount that was created by a Shopify Script.

***

### Map

#### Fields with this enum

* [Automatic​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.targetType)
* [Discount​Code​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.targetType)
* [Manual​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.targetType)
* [Script​Discount​Application.targetType](https://shopify.dev/docs/api/customer/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.targetType)

---



<a id="latest-enums-discounttargettype"></a>


## Discount​Target​Type

enum

The type of line (line item or shipping line) on an order that the subscription discount is applicable towards.

### Valid values

* LINE\_​ITEM

  The discount applies onto line items.

* SHIPPING\_​LINE

  The discount applies onto shipping lines.

***

### Fields

* [Subscription​Discount.targetType](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.targetType)

  OBJECT

  A discount applied to a subscription contract.

***

### Map

#### Fields with this enum

* [Subscription​Discount.targetType](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.targetType)

---



<a id="latest-enums-discounttype"></a>


## Discount​Type

enum

The type of the subscription discount.

### Valid values

* AUTOMATIC\_​DISCOUNT

  Automatic discount type.

* CODE\_​DISCOUNT

  Code discount type.

* MANUAL

  Manual discount type.

***

### Fields

* [Subscription​Discount.type](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.type)

  OBJECT

  A discount applied to a subscription contract.

***

### Map

#### Fields with this enum

* [Subscription​Discount.type](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDiscount#field-SubscriptionDiscount.fields.type)

---



<a id="latest-enums-draftorderbycompanysortkeys"></a>


## Draft​Order​By​Company​Sort​Keys

enum

The set of valid sort keys for the DraftOrderByCompany query.

### Valid values

* CUSTOMER\_​NAME

  Sort by the `customer_name` value.

* ID

  Sort by the `id` value.

* NUMBER

  Sort by the `number` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* STATUS

  Sort by the `status` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  Represents a company's information.

***

### Map

#### Arguments with this enum

* [Company.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.draftOrders.arguments.sortKey)

---



<a id="latest-enums-draftorderbylocationsortkeys"></a>


## Draft​Order​By​Location​Sort​Keys

enum

The set of valid sort keys for the DraftOrderByLocation query.

### Valid values

* CUSTOMER\_​NAME

  Sort by the `customer_name` value.

* ID

  Sort by the `id` value.

* NUMBER

  Sort by the `number` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* STATUS

  Sort by the `status` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Location.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  Represents a company's business location.

***

### Map

#### Arguments with this enum

* [Company​Location.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.draftOrders.arguments.sortKey)

---



<a id="latest-enums-draftordersortkeys"></a>


## Draft​Order​Sort​Keys

enum

The set of valid sort keys for the DraftOrder query.

### Valid values

* CUSTOMER\_​NAME

  Sort by the `customer_name` value.

* ID

  Sort by the `id` value.

* NUMBER

  Sort by the `number` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* STATUS

  Sort by the `status` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Contact.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  Represents the customer's contact information.

* [Customer.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders.arguments.sortKey)

  ARGUMENT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Arguments with this enum

* [Company​Contact.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.draftOrders.arguments.sortKey)
* [Customer.draftOrders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.draftOrders.arguments.sortKey)

---



<a id="latest-enums-draftorderstatus"></a>


## Draft​Order​Status

enum

The valid statuses for a draft order.

### Valid values

* COMPLETED

  The draft order has been paid.

* INVOICE\_​SENT

  An invoice for the draft order has been sent to the customer.

* OPEN

  The draft order is open. It has not been paid, and an invoice hasn't been sent.

***

### Fields

* [Draft​Order.status](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.status)

  OBJECT

  A draft order for the customer. Any fields related to money are in the presentment currency. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Draft​Order.status](https://shopify.dev/docs/api/customer/latest/objects/DraftOrder#field-DraftOrder.fields.status)

---



<a id="latest-enums-emailmarketingstate"></a>


## Email​Marketing​State

enum

Represents the possible email marketing states for a customer.

### Valid values

* INVALID

  The customer’s email marketing state is invalid.

* NOT\_​SUBSCRIBED

  The customer isn't subscribed to email marketing.

* PENDING

  The customer is in the process of subscribing to email marketing.

* REDACTED

  The customer's personal data has been erased. This value is internally-set and read-only.

* SUBSCRIBED

  The customer is subscribed to email marketing.

* UNSUBSCRIBED

  The customer is not currently subscribed to email marketing but was previously subscribed.

***

### Fields

* [Customer​Email​Address.marketingState](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingState)

  OBJECT

  An email address associated with a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Customer​Email​Address.marketingState](https://shopify.dev/docs/api/customer/latest/objects/CustomerEmailAddress#field-CustomerEmailAddress.fields.marketingState)

---



<a id="latest-enums-fulfillmenteventsortkeys"></a>


## Fulfillment​Event​Sort​Keys

enum

The set of valid sort keys for the FulfillmentEvent query.

### Valid values

* HAPPENED\_​AT

  Sort by the `happened_at` value.

* ID

  Sort by the `id` value.

***

### Fields

* [Fulfillment.events(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events.arguments.sortKey)

  ARGUMENT

  Represents a single fulfillment in an order.

***

### Map

#### Arguments with this enum

* [Fulfillment.events(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.events.arguments.sortKey)

---



<a id="latest-enums-fulfillmenteventstatus"></a>


## Fulfillment​Event​Status

enum

The status of a fulfillment event.

### Valid values

* ATTEMPTED\_​DELIVERY

  A delivery was attempted.

* CARRIER\_​PICKED\_​UP

  The fulfillment has been picked up by the carrier.

* CONFIRMED

  The fulfillment is confirmed.

* DELAYED

  The fulfillment is delayed.

* DELIVERED

  The fulfillment was successfully delivered.

* FAILURE

  The fulfillment request failed.

* IN\_​TRANSIT

  The fulfillment is in transit.

* LABEL\_​PRINTED

  A purchased shipping label has been printed.

* LABEL\_​PURCHASED

  A shipping label has been purchased.

* OUT\_​FOR\_​DELIVERY

  The fulfillment is out for delivery.

* PICKED\_​UP

  The fulfillment was successfully picked up.

* READY\_​FOR\_​PICKUP

  The fulfillment is ready to be picked up.

***

### Fields

* [Fulfillment.latestShipmentStatus](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.latestShipmentStatus)

  OBJECT

  Represents a single fulfillment in an order.

* [Fulfillment​Event.status](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status)

  OBJECT

  An event that occurred for a fulfillment.

***

### Map

#### Fields with this enum

* [Fulfillment.latestShipmentStatus](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.latestShipmentStatus)
* [Fulfillment​Event.status](https://shopify.dev/docs/api/customer/latest/objects/FulfillmentEvent#field-FulfillmentEvent.fields.status)

---



<a id="latest-enums-fulfillmentsortkeys"></a>


## Fulfillment​Sort​Keys

enum

The set of valid sort keys for the Fulfillment query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

***

### Fields

* [Order.fulfillments(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillments.arguments.sortKey)

  ARGUMENT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Arguments with this enum

* [Order.fulfillments(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillments.arguments.sortKey)

---



<a id="latest-enums-fulfillmentstatus"></a>


## Fulfillment​Status

enum

The status of a fulfillment.

### Valid values

* CANCELLED

  The fulfillment was canceled.

* ERROR

  There was an error with the fulfillment request.

* FAILURE

  The fulfillment request failed.

* SUCCESS

  The fulfillment was completed successfully.

#### Deprecated valid values

* OPEN

  Deprecated

* PENDING

  Deprecated

***

### Fields

* [Fulfillment.status](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.status)

  OBJECT

  Represents a single fulfillment in an order.

***

### Map

#### Fields with this enum

* [Fulfillment.status](https://shopify.dev/docs/api/customer/latest/objects/Fulfillment#field-Fulfillment.fields.status)

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

* [Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)

  ARGUMENT

  Represents an image resource.

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-preferredContentType)

  INPUT OBJECT

  The available options for transforming an image.

  All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.

* [Payment​Icon​Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.transformedSrc.arguments.preferredContentType)

  ARGUMENT

  Represents an image resource.

***

### Map

#### Inputs with this enum

* [Image​Transform​Input.preferredContentType](https://shopify.dev/docs/api/customer/latest/input-objects/ImageTransformInput#fields-preferredContentType)

#### Arguments with this enum

* [Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/customer/latest/objects/Image#field-Image.fields.transformedSrc.arguments.preferredContentType)
* [Payment​Icon​Image.transformedSrc(preferredContentType)](https://shopify.dev/docs/api/customer/latest/objects/PaymentIconImage#field-PaymentIconImage.fields.transformedSrc.arguments.preferredContentType)

---



<a id="latest-enums-languagecode"></a>


## Language​Code

enum

Language codes supported by Shopify.

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

### Map

No referencing types

---



<a id="latest-enums-mediacontenttype"></a>


## Media​Content​Type

enum

The content types that a media can have.

### Valid values

* GENERIC\_​FILE

  A Shopify hosted generic file.

* IMAGE

  A Shopify hosted image.

* MODEL\_​3D

  A Shopify hosted 3D model.

* VIDEO

  A Shopify hosted video.

***

### Fields

* [Generic​File.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.mediaContentType)

  OBJECT

  The generic file resource lets you manage files in a merchant's store. Generic files include any file that doesn't fit into a designated type such as image or video. Example: PDF, JSON.

* [Media.mediaContentType](https://shopify.dev/docs/api/customer/latest/interfaces/Media#fields-mediaContentType)

  INTERFACE

  Represents a media interface.

* [Media​Image.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted image.

* [Model3d.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/Model3d#field-Model3d.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted 3D model.

* [Video.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/Video#field-Video.fields.mediaContentType)

  OBJECT

  Represents a Shopify hosted video.

***

### Map

#### Fields with this enum

* [Generic​File.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/GenericFile#field-GenericFile.fields.mediaContentType)
* [Media​Image.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/MediaImage#field-MediaImage.fields.mediaContentType)
* [Model3d.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/Model3d#field-Model3d.fields.mediaContentType)
* [Video.mediaContentType](https://shopify.dev/docs/api/customer/latest/objects/Video#field-Video.fields.mediaContentType)

---



<a id="latest-enums-metafieldsdeleteusererrorcode"></a>


## Metafields​Delete​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldsDeleteUserError`.

### Valid values

* BLANK

  The input value is blank.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* INVALID

  The input value is invalid.

* METAFIELD\_​DELETE\_​FAILED

  The metafield delete operation failed.

* NOT\_​FOUND

  The record with the ID used as the input value couldn't be found.

***

### Fields

* [Metafields​Delete​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsDeleteUserError#field-MetafieldsDeleteUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldsDelete`.

***

### Map

#### Fields with this enum

* [Metafields​Delete​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsDeleteUserError#field-MetafieldsDeleteUserError.fields.code)

---



<a id="latest-enums-metafieldssetusererrorcode"></a>


## Metafields​Set​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldsSetUserError`.

### Valid values

* APP\_​NOT\_​AUTHORIZED

  ApiPermission metafields can only be created or updated by the app owner.

* BLANK

  The input value is blank.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* INCLUSION

  The input value isn't included in the list.

* INVALID

  The input value is invalid.

* INVALID\_​COMPARE\_​DIGEST

  The compareDigest is invalid.

* INVALID\_​TYPE

  The type is invalid.

* INVALID\_​VALUE

  The value is invalid for metafield type or for definition options.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* PRESENT

  The input value needs to be blank.

* STALE\_​OBJECT

  The metafield has been modified since it was loaded.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

***

### Fields

* [Metafields​Set​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldsSet`.

***

### Map

#### Fields with this enum

* [Metafields​Set​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/MetafieldsSetUserError#field-MetafieldsSetUserError.fields.code)

---



<a id="latest-enums-nonreturnablereason"></a>


## Non​Returnable​Reason

enum

The reason why a line item quantity can't be returned.

### Valid values

* FINAL\_​SALE

  The line item quantity is final sale. This is only applicable if return rules were in place at the time an order was placed.

* OTHER

  The line item quantity is ineligible for return for a reason that has not been predefined.

* RETURN\_​WINDOW\_​EXPIRED

  The return window for this line item quantity has expired. This is only applicable if return rules were in place at the time an order was placed.

* RETURNED

  The line item quantity has already been returned.

* UNFULFILLED

  The line item quantity has not been fulfilled by the merchant.

***

### Fields

* [Non​Returnable​Quantity​Detail.reasonCode](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableQuantityDetail#field-NonReturnableQuantityDetail.fields.reasonCode)

  OBJECT

  Details about non-returnable quantities, including the number of units that can't be returned and the reasons for non-returnability, grouped by reason (e.g., already returned, not yet fulfilled).

* [Order​Non​Returnable​Summary.nonReturnableReasons](https://shopify.dev/docs/api/customer/latest/objects/OrderNonReturnableSummary#field-OrderNonReturnableSummary.fields.nonReturnableReasons)

  OBJECT

  The summary of reasons why the order is ineligible for return.

***

### Map

#### Fields with this enum

* [Non​Returnable​Quantity​Detail.reasonCode](https://shopify.dev/docs/api/customer/latest/objects/NonReturnableQuantityDetail#field-NonReturnableQuantityDetail.fields.reasonCode)
* [Order​Non​Returnable​Summary.nonReturnableReasons](https://shopify.dev/docs/api/customer/latest/objects/OrderNonReturnableSummary#field-OrderNonReturnableSummary.fields.nonReturnableReasons)

---



<a id="latest-enums-orderactiontype"></a>


## Order​Action​Type

enum

The possible order action types for a [sales agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).

### Valid values

* ORDER

  An order with a purchase or charge.

* ORDER\_​EDIT

  An edit to the order.

* REFUND

  A refund on the order.

* RETURN

  A return on the order.

* UNKNOWN

  An unknown agreement action. Represents new actions that may be added in future versions.

***

### Fields

* [Order​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.reason)

  OBJECT

  An agreement associated with an order placement.

* [Order​Edit​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.reason)

  OBJECT

  An agreement related to an edit of the order.

* [Refund​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.reason)

  OBJECT

  An agreement for refunding all or a portion of the order between the merchant and the customer.

* [Return​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.reason)

  OBJECT

  An agreement between the merchant and customer for a return.

* [Sales​Agreement.reason](https://shopify.dev/docs/api/customer/latest/interfaces/SalesAgreement#fields-reason)

  INTERFACE

  A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more.

***

### Map

#### Fields with this enum

* [Order​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/OrderAgreement#field-OrderAgreement.fields.reason)
* [Order​Edit​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/OrderEditAgreement#field-OrderEditAgreement.fields.reason)
* [Refund​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/RefundAgreement#field-RefundAgreement.fields.reason)
* [Return​Agreement.reason](https://shopify.dev/docs/api/customer/latest/objects/ReturnAgreement#field-ReturnAgreement.fields.reason)

---



<a id="latest-enums-orderbycompanysortkeys"></a>


## Order​By​Company​Sort​Keys

enum

The set of valid sort keys for the OrderByCompany query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* ORDER\_​NUMBER

  Sort by the `order_number` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.sortKey)

  ARGUMENT

  Represents a company's information.

***

### Map

#### Arguments with this enum

* [Company.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Company#field-Company.fields.orders.arguments.sortKey)

---



<a id="latest-enums-orderbycontactsortkeys"></a>


## Order​By​Contact​Sort​Keys

enum

The set of valid sort keys for the OrderByContact query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* ORDER\_​NUMBER

  Sort by the `order_number` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* PURCHASING\_​COMPANY\_​LOCATION\_​NAME

  Sort by the `purchasing_company_location_name` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Contact.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.sortKey)

  ARGUMENT

  Represents the customer's contact information.

***

### Map

#### Arguments with this enum

* [Company​Contact.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContact#field-CompanyContact.fields.orders.arguments.sortKey)

---



<a id="latest-enums-orderbylocationsortkeys"></a>


## Order​By​Location​Sort​Keys

enum

The set of valid sort keys for the OrderByLocation query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* ORDER\_​NUMBER

  Sort by the `order_number` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Company​Location.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.sortKey)

  ARGUMENT

  Represents a company's business location.

***

### Map

#### Arguments with this enum

* [Company​Location.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/CompanyLocation#field-CompanyLocation.fields.orders.arguments.sortKey)

---



<a id="latest-enums-ordercancelreason"></a>


## Order​Cancel​Reason

enum

The reason for the cancellation of the order.

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

* [Order.cancelReason](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.cancelReason)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Order.cancelReason](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.cancelReason)

---



<a id="latest-enums-orderfinancialstatus"></a>


## Order​Financial​Status

enum

Represents the order's current financial status.

### Valid values

* AUTHORIZED

  Displayed as **Authorized**.

* EXPIRED

  Displayed as **Expired**.

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

* [Order.financialStatus](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.financialStatus)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Order.financialStatus](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.financialStatus)

---



<a id="latest-enums-orderfulfillmentstatus"></a>


## Order​Fulfillment​Status

enum

Represents the order's aggregated fulfillment status for display purposes.

### Valid values

* FULFILLED

  Displayed as **Fulfilled**. All of the items in the order have been fulfilled.

* IN\_​PROGRESS

  Displayed as **In progress**. All of the items in the order have had a request for fulfillment sent to the fulfillment service or all of the items have been marked as in progress.

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

* [Order.fulfillmentStatus](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillmentStatus)

  OBJECT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Order.fulfillmentStatus](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.fulfillmentStatus)

---



<a id="latest-enums-orderpaymentstatus"></a>


## Order​Payment​Status

enum

The current payment status of the order.

### Valid values

* AUTHORIZED

  The payment has been authorized.

* EXPIRED

  The payment has expired.

* PAID

  The payment has been paid.

* PARTIALLY\_​PAID

  The payment has been partially paid.

* PARTIALLY\_​REFUNDED

  The payment has been partially refunded.

* PENDING

  The payment is pending.

* REFUNDED

  The payment has been refunded.

* VOIDED

  The payment has been voided.

***

### Fields

* [Order​Payment​Information.paymentStatus](https://shopify.dev/docs/api/customer/latest/objects/OrderPaymentInformation#field-OrderPaymentInformation.fields.paymentStatus)

  OBJECT

  The summary of payment status information for the order.

***

### Map

#### Fields with this enum

* [Order​Payment​Information.paymentStatus](https://shopify.dev/docs/api/customer/latest/objects/OrderPaymentInformation#field-OrderPaymentInformation.fields.paymentStatus)

---



<a id="latest-enums-ordersortkeys"></a>


## Order​Sort​Keys

enum

The set of valid sort keys for the Order query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* ORDER\_​NUMBER

  Sort by the `order_number` value.

* PROCESSED\_​AT

  Sort by the `processed_at` value.

* TOTAL\_​PRICE

  Sort by the `total_price` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Customer.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)

  ARGUMENT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Arguments with this enum

* [Customer.orders(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.orders.arguments.sortKey)

---



<a id="latest-enums-ordertransactionkind"></a>


## Order​Transaction​Kind

enum

The kind of order transaction.

### Valid values

* AUTHORIZATION

  An authorization transaction.

* CAPTURE

  A capture transaction.

* CARD\_​APPROVAL

  A card approval transaction.

* CARD\_​DECLINE

  A card decline transaction.

* CHANGE

  A change transaction.

* EMV\_​AUTHORIZATION

  An EMV authorization transaction.

* REFUND

  A refund transaction.

* REFUND\_​EMV\_​INITIATE

  A refund EMV initiate transaction.

* SALE

  A sale transaction.

* SUGGESTED\_​REFUND

  A suggested refund transaction.

* VOID

  A void transaction.

***

### Fields

* [Order​Transaction.kind](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.kind)

  OBJECT

  A payment transaction within an order context.

***

### Map

#### Fields with this enum

* [Order​Transaction.kind](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.kind)

---



<a id="latest-enums-ordertransactionstatus"></a>


## Order​Transaction​Status

enum

Represents the status of an order transaction.

### Valid values

* ERROR

  The transaction has an error.

* FAILURE

  The transaction has failed.

* PENDING

  The transaction is pending.

* PENDING\_​AUTHENTICATION

  The transaction is pending authentication.

* SUCCESS

  The transaction is successful.

***

### Fields

* [Order​Transaction.status](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)

  OBJECT

  A payment transaction within an order context.

***

### Map

#### Fields with this enum

* [Order​Transaction.status](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.status)

---



<a id="latest-enums-ordertransactiontype"></a>


## Order​Transaction​Type

enum

The type of order transaction.

### Valid values

* BANK\_​DEPOSIT

  A bank deposit transaction.

* CARD

  A card transaction.

* CASH\_​ON\_​DELIVERY

  A cash on delivery transaction.

* CUSTOM

  A custom payment transaction.

* GIFT\_​CARD

  A gift card transaction.

* MANUAL

  A generic manual transaction.

* MONEY\_​ORDER

  A money order transaction.

* SHOPIFY\_​INSTALLMENTS

  A Shopify installments transaction.

* STORE\_​CREDIT

  A store credit transaction.

***

### Fields

* [Order​Transaction.type](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.type)

  OBJECT

  A payment transaction within an order context.

***

### Map

#### Fields with this enum

* [Order​Transaction.type](https://shopify.dev/docs/api/customer/latest/objects/OrderTransaction#field-OrderTransaction.fields.type)

---



<a id="latest-enums-permittedoperation"></a>


## Permitted​Operation

enum

The operations that can be performed on a B2B resource.

### Valid values

* ADD

  The permission to add a resource.

* ALL

  All permissions for a resource.

* DELETE

  The permission to delete a resource.

* EDIT

  The permission to edit a resource.

* USE

  The permission to use a resource.

* VIEW

  The permission to view a resource.

***

### Fields

* [Company​Contact​Role.resourcePermission](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.resourcePermission)

  OBJECT

  A role for a company contact. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Resource​Permission.permittedOperations](https://shopify.dev/docs/api/customer/latest/objects/ResourcePermission#field-ResourcePermission.fields.permittedOperations)

  OBJECT

  Represents permissions on resources.

***

### Map

#### Fields with this enum

* [Company​Contact​Role.resourcePermission](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.resourcePermission)
* [Resource​Permission.permittedOperations](https://shopify.dev/docs/api/customer/latest/objects/ResourcePermission#field-ResourcePermission.fields.permittedOperations)

---



<a id="latest-enums-resourcetype"></a>


## Resource​Type

enum

The B2B resource types.

### Valid values

* BUSINESS\_​PROFILE

  The Business Profile resource type.

* COMPANY

  The Company resource type.

* COMPANY\_​CONTACT

  The Company Contact resource type.

* COMPANY\_​CONTACT\_​ROLE

  The Company Contact Role resource type.

* COMPANY\_​LOCATION

  The Company Location resource type.

* COMPANY\_​LOCATION\_​BILLING\_​ADDRESS

  The Company Location Billing Address resource type.

* COMPANY\_​LOCATION\_​SHIPPING\_​ADDRESS

  The Company Location Shipping Address resource type.

* COMPANY\_​TAX\_​EXEMPTION

  The Company Tax Exemption resource type.

* DRAFT\_​ORDER

  The Draft Order resource type.

* ORDER

  The Order resource type.

* PAYMENT\_​METHOD

  The Payment Method resource type.

***

### Fields

* [Company​Contact​Role.resourcePermission(resource)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.resourcePermission.arguments.resource)

  ARGUMENT

  A role for a company contact. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Resource​Permission.resource](https://shopify.dev/docs/api/customer/latest/objects/ResourcePermission#field-ResourcePermission.fields.resource)

  OBJECT

  Represents permissions on resources.

***

### Map

#### Fields with this enum

* [Resource​Permission.resource](https://shopify.dev/docs/api/customer/latest/objects/ResourcePermission#field-ResourcePermission.fields.resource)

#### Arguments with this enum

* [Company​Contact​Role.resourcePermission(resource)](https://shopify.dev/docs/api/customer/latest/objects/CompanyContactRole#field-CompanyContactRole.fields.resourcePermission.arguments.resource)

---



<a id="latest-enums-returnerrorcode"></a>


## Return​Error​Code

enum

Possible error codes that can be returned by `ReturnUserError`.

### Valid values

* ALREADY\_​EXISTS

  The requested resource already exists.

* BLANK

  The input value is blank.

* CREATION\_​FAILED

  A requested resource could not be created.

* EQUAL\_​TO

  The input value should be equal to the value allowed.

* FEATURE\_​NOT\_​ENABLED

  A required feature is not enabled.

* GREATER\_​THAN

  The input value should be greater than the minimum allowed value.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be greater than or equal to the minimum value allowed.

* INCLUSION

  The input value isn't included in the list.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID

  The input value is invalid.

* INVALID\_​STATE

  A resource was not in the correct state for the operation to succeed.

* LESS\_​THAN

  The input value should be less than the maximum value allowed.

* LESS\_​THAN\_​OR\_​EQUAL\_​TO

  The input value should be less than or equal to the maximum value allowed.

* NOT\_​A\_​NUMBER

  The input value is not a number.

* NOT\_​AUTHORIZED

  A request is not authorized.

* NOT\_​EDITABLE

  A requested item is not editable.

* NOT\_​FOUND

  A requested item could not be found.

* NOTIFICATION\_​FAILED

  A requested notification could not be sent.

* PRESENT

  The input value needs to be blank.

* TAKEN

  The input value is already taken.

* TOO\_​BIG

  The input value is too big.

* TOO\_​LONG

  The input value is too long.

* TOO\_​MANY\_​ARGUMENTS

  Too many arguments provided.

* TOO\_​SHORT

  The input value is too short.

* WRONG\_​LENGTH

  The input value is the wrong length.

***

### Fields

* [Return​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/ReturnUserError#field-ReturnUserError.fields.code)

  OBJECT

  The errors that occur during the execution of a return mutation.

***

### Map

#### Fields with this enum

* [Return​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/ReturnUserError#field-ReturnUserError.fields.code)

---



<a id="latest-enums-returnreason"></a>


## Return​Reason

enum

The reason for returning the item.

> **Deprecated**: This enum is deprecated in favor of `ReturnReasonDefinition`. Use `returnReasonDefinitionId` in input objects and `returnReasonDefinition` in return line items instead. This enum will be removed in a future API version.

### Valid values

* COLOR

  The color of the item didn't meet expectations.

* DEFECTIVE

  The item was damaged or defective.

* NOT\_​AS\_​DESCRIBED

  The item was not as described.

* OTHER

  Other reason not listed.

* SIZE\_​TOO\_​LARGE

  The size of the item was too large.

* SIZE\_​TOO\_​SMALL

  The size of the item was too small.

* STYLE

  The style of the item didn't meet expectations.

* UNKNOWN

  The reason is unknown.

* UNWANTED

  The customer changed their mind about the item.

* WRONG\_​ITEM

  The customer received the wrong item.

***

### Fields

* [Return​Line​Item.returnReason](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.returnReason)

  OBJECT

  A line item that has been returned.

#### Deprecated fields

* [Return​Line​Item​Type.returnReason](https://shopify.dev/docs/api/customer/latest/interfaces/ReturnLineItemType#fields-returnReason)

  INTERFACE

  Deprecated

* [Unverified​Return​Line​Item.returnReason](https://shopify.dev/docs/api/customer/latest/objects/UnverifiedReturnLineItem#field-UnverifiedReturnLineItem.fields.returnReason)

  OBJECT

  Deprecated

***

### Map

#### Fields with this enum

* [Return​Line​Item.returnReason](https://shopify.dev/docs/api/customer/latest/objects/ReturnLineItem#field-ReturnLineItem.fields.returnReason)

---



<a id="latest-enums-returnshippingmethod"></a>


## Return​Shipping​Method

enum

How items will be returned to the merchant.

### Valid values

* CUSTOMER\_​PROVIDED\_​LABEL

  The customer is responsible for providing the shipping label.

* MERCHANT\_​PROVIDED\_​LABEL

  The merchant provides the shipping label.

***

### Fields

* [Order​Return​Information.returnShippingMethods](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.returnShippingMethods)

  OBJECT

  The return information for a specific order.

***

### Map

#### Fields with this enum

* [Order​Return​Information.returnShippingMethods](https://shopify.dev/docs/api/customer/latest/objects/OrderReturnInformation#field-OrderReturnInformation.fields.returnShippingMethods)

---



<a id="latest-enums-returnsortkeys"></a>


## Return​Sort​Keys

enum

The set of valid sort keys for the Return query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

***

### Fields

* [Order.returns(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returns.arguments.sortKey)

  ARGUMENT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Arguments with this enum

* [Order.returns(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.returns.arguments.sortKey)

---



<a id="latest-enums-returnstatus"></a>


## Return​Status

enum

The current status of a `Return`.

### Valid values

* CANCELED

  The `Return` has been canceled by the user.

* CLOSED

  The `Return` has been successfully completed.

* DECLINED

  The `Return` request was declined.

* OPEN

  The `Return` is currently in progress.

* REQUESTED

  The `Return` has been requested by the user.

***

### Fields

* [Return.status](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.status)

  OBJECT

  A product return.

***

### Map

#### Fields with this enum

* [Return.status](https://shopify.dev/docs/api/customer/latest/objects/Return#field-Return.fields.status)

---



<a id="latest-enums-saleactiontype"></a>


## Sale​Action​Type

enum

An order action type associated with a sale.

### Valid values

* ORDER

  A purchase or charge.

* RETURN

  A removal or return.

* UNKNOWN

  An unidentified order action. Represents new actions that may be added in future versions.

* UPDATE

  A change to the price, taxes, or discounts for a previous purchase.

***

### Fields

* [Additional​Fee​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.actionType)

  OBJECT

  A sale that includes an additional fee charge.

* [Adjustment​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.actionType)

  OBJECT

  A sale event that results in an adjustment to the order price.

* [Duty​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.actionType)

  OBJECT

  A sale that includes a duty charge.

* [Fee​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.actionType)

  OBJECT

  A sale associated with a fee.

* [Gift​Card​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.actionType)

  OBJECT

  A sale associated with a gift card.

* [Product​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.actionType)

  OBJECT

  A sale associated with a product.

* [Sale.actionType](https://shopify.dev/docs/api/customer/latest/interfaces/Sale#fields-actionType)

  INTERFACE

  A record of an individual sale associated with a sales agreement. Every monetary value in an order's sales data is represented in the smallest unit of the currency. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

* [Shipping​Line​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.actionType)

  OBJECT

  A sale associated with a shipping charge.

* [Tip​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.actionType)

  OBJECT

  A sale that is associated with a tip.

* [Unknown​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/UnknownSale#field-UnknownSale.fields.actionType)

  OBJECT

  This represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

***

### Map

#### Fields with this enum

* [Additional​Fee​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.actionType)
* [Adjustment​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.actionType)
* [Duty​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.actionType)
* [Fee​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.actionType)
* [Gift​Card​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.actionType)
* [Product​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.actionType)
* [Shipping​Line​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.actionType)
* [Tip​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.actionType)
* [Unknown​Sale.actionType](https://shopify.dev/docs/api/customer/latest/objects/UnknownSale#field-UnknownSale.fields.actionType)

---



<a id="latest-enums-salelinetype"></a>


## Sale​Line​Type

enum

The possible line types of a sale record. A sale can be an adjustment, which occurs when a refund is issued for a line item that is either more or less than the total value of the line item. Examples include restocking fees and goodwill payments. In such cases, Shopify generates a sales agreement with sale records for each line item that is returned or refunded, and an additional sale record for the adjustment, for example a restocking fee. The sale records for the returned or refunded items represent the reversal of the original line item sale value. The additional adjustment sale record represents the difference between the original total value of all line items that were refunded, and the actual amount refunded.

### Valid values

* ADDITIONAL\_​FEE

  An additional fee.

* ADJUSTMENT

  A sale adjustment.

* DUTY

  A duty charge.

* FEE

  A fee charge.

* GIFT\_​CARD

  A gift card.

* PRODUCT

  A product that was purchased, returned, or exchanged.

* SHIPPING

  A shipping charge.

* TIP

  A tip given by the customer.

* UNKNOWN

  An unknown sale line type. This represents new types that may be added in future versions.

***

### Fields

* [Additional​Fee​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.lineType)

  OBJECT

  A sale that includes an additional fee charge.

* [Adjustment​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.lineType)

  OBJECT

  A sale event that results in an adjustment to the order price.

* [Duty​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.lineType)

  OBJECT

  A sale that includes a duty charge.

* [Fee​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.lineType)

  OBJECT

  A sale associated with a fee.

* [Gift​Card​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineType)

  OBJECT

  A sale associated with a gift card.

* [Product​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.lineType)

  OBJECT

  A sale associated with a product.

* [Sale.lineType](https://shopify.dev/docs/api/customer/latest/interfaces/Sale#fields-lineType)

  INTERFACE

  A record of an individual sale associated with a sales agreement. Every monetary value in an order's sales data is represented in the smallest unit of the currency. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

* [Shipping​Line​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.lineType)

  OBJECT

  A sale associated with a shipping charge.

* [Tip​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.lineType)

  OBJECT

  A sale that is associated with a tip.

* [Unknown​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/UnknownSale#field-UnknownSale.fields.lineType)

  OBJECT

  This represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

***

### Map

#### Fields with this enum

* [Additional​Fee​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.lineType)
* [Adjustment​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.lineType)
* [Duty​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/DutySale#field-DutySale.fields.lineType)
* [Fee​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/FeeSale#field-FeeSale.fields.lineType)
* [Gift​Card​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineType)
* [Product​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/ProductSale#field-ProductSale.fields.lineType)
* [Shipping​Line​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.lineType)
* [Tip​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/TipSale#field-TipSale.fields.lineType)
* [Unknown​Sale.lineType](https://shopify.dev/docs/api/customer/latest/objects/UnknownSale#field-UnknownSale.fields.lineType)

---



<a id="latest-enums-smsmarketingstate"></a>


## Sms​Marketing​State

enum

Defines the valid SMS marketing states for a customer’s phone number.

### Valid values

* NOT\_​SUBSCRIBED

  The customer has not subscribed to SMS marketing.

* PENDING

  The customer is in the process of subscribing to SMS marketing.

* REDACTED

  The customer's personal data has been erased. This value is internally-set and read-only.

* SUBSCRIBED

  The customer has subscribed to SMS marketing.

* UNSUBSCRIBED

  The customer is not currently subscribed to SMS marketing but was previously subscribed.

***

### Fields

* [Customer​Phone​Number.marketingState](https://shopify.dev/docs/api/customer/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingState)

  OBJECT

  Defines the phone number of the customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Fields with this enum

* [Customer​Phone​Number.marketingState](https://shopify.dev/docs/api/customer/latest/objects/CustomerPhoneNumber#field-CustomerPhoneNumber.fields.marketingState)

---



<a id="latest-enums-storecreditsystemevent"></a>


## Store​Credit​System​Event

enum

The event that caused the store credit account transaction.

### Valid values

* ADJUSTMENT

  An adjustment was made to the store credit account.

* ORDER\_​CANCELLATION

  Store credit was returned when an authorized payment was voided.

* ORDER\_​PAYMENT

  Store credit was used as payment for an order.

* ORDER\_​REFUND

  Store credit was refunded from an order.

* PAYMENT\_​FAILURE

  A store credit payment was reverted due to another payment method failing.

* PAYMENT\_​RETURNED

  A smaller amount of store credit was captured than was originally authorized.

* TAX\_​FINALIZATION

  Tax finalization affected the store credit payment.

***

### Fields

* [Store​Credit​Account​Credit​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.event)

  OBJECT

  A credit transaction which increases the store credit account balance.

* [Store​Credit​Account​Debit​Revert​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.event)

  OBJECT

  A debit revert transaction which increases the store credit account balance. Debit revert transactions are created automatically when a [store credit account debit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountDebitTransaction) is reverted.

  Store credit account debit transactions are reverted when an order is cancelled, refunded or in the event of a payment failure at checkout. The amount added to the balance is equal to the amount reverted on the original credit.

* [Store​Credit​Account​Debit​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.event)

  OBJECT

  A debit transaction which decreases the store credit account balance.

* [Store​Credit​Account​Expiration​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.event)

  OBJECT

  An expiration transaction which decreases the store credit account balance. Expiration transactions are created automatically when a [store credit account credit transaction](https://shopify.dev/api/admin-graphql/latest/objects/StoreCreditAccountCreditTransaction) expires.

  The amount subtracted from the balance is equal to the remaining amount of the credit transaction.

* [Store​Credit​Account​Transaction.event](https://shopify.dev/docs/api/customer/latest/interfaces/StoreCreditAccountTransaction#fields-event)

  INTERFACE

  Interface for a store credit account transaction.

***

### Map

#### Fields with this enum

* [Store​Credit​Account​Credit​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountCreditTransaction#field-StoreCreditAccountCreditTransaction.fields.event)
* [Store​Credit​Account​Debit​Revert​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitRevertTransaction#field-StoreCreditAccountDebitRevertTransaction.fields.event)
* [Store​Credit​Account​Debit​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountDebitTransaction#field-StoreCreditAccountDebitTransaction.fields.event)
* [Store​Credit​Account​Expiration​Transaction.event](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccountExpirationTransaction#field-StoreCreditAccountExpirationTransaction.fields.event)

---



<a id="latest-enums-subscriptionbillingcyclebillingcyclestatus"></a>


## Subscription​Billing​Cycle​Billing​Cycle​Status

enum

The possible statuses of a subscription billing cycle.

### Valid values

* BILLED

  The billing cycle has been billed.

* UNBILLED

  The billing cycle has not been billed.

***

### Fields

* [Subscription​Billing​Cycle.status](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.status)

  OBJECT

  The billing cycle of a subscription.

***

### Map

#### Fields with this enum

* [Subscription​Billing​Cycle.status](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycle#field-SubscriptionBillingCycle.fields.status)

---



<a id="latest-enums-subscriptionbillingcycleskipusererrorcode"></a>


## Subscription​Billing​Cycle​Skip​User​Error​Code

enum

Possible error codes that can be returned by `SubscriptionBillingCycleSkipUserError`.

### Valid values

* INVALID

  The input value is invalid.

***

### Fields

* [Subscription​Billing​Cycle​Skip​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleSkipUserError#field-SubscriptionBillingCycleSkipUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `SubscriptionBillingCycleSkip`.

***

### Map

#### Fields with this enum

* [Subscription​Billing​Cycle​Skip​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleSkipUserError#field-SubscriptionBillingCycleSkipUserError.fields.code)

---



<a id="latest-enums-subscriptionbillingcycleunskipusererrorcode"></a>


## Subscription​Billing​Cycle​Unskip​User​Error​Code

enum

Possible error codes that can be returned by `SubscriptionBillingCycleUnskipUserError`.

### Valid values

* INVALID

  The input value is invalid.

***

### Fields

* [Subscription​Billing​Cycle​Unskip​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleUnskipUserError#field-SubscriptionBillingCycleUnskipUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `SubscriptionBillingCycleUnskip`.

***

### Map

#### Fields with this enum

* [Subscription​Billing​Cycle​Unskip​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingCycleUnskipUserError#field-SubscriptionBillingCycleUnskipUserError.fields.code)

---



<a id="latest-enums-subscriptionbillingcyclessortkeys"></a>


## Subscription​Billing​Cycles​Sort​Keys

enum

The set of valid sort keys for the SubscriptionBillingCycles query.

### Valid values

* CYCLE\_​END\_​AT

  Sort by the `cycle_end_at` value.

* CYCLE\_​INDEX

  Sort by the `cycle_index` value.

* ID

  Sort by the `id` value.

***

### Fields

* [Subscription​Contract.upcomingBillingCycles(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.upcomingBillingCycles.arguments.sortKey)

  ARGUMENT

  A Subscription Contract.

***

### Map

#### Arguments with this enum

* [Subscription​Contract.upcomingBillingCycles(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.upcomingBillingCycles.arguments.sortKey)

---



<a id="latest-enums-subscriptioncontractlastbillingerrortype"></a>


## Subscription​Contract​Last​Billing​Error​Type

enum

The possible values of the last billing error on a subscription contract.

### Valid values

* CUSTOMER\_​ERROR

  Subscription billing attempt error due to customer error.

* INVENTORY\_​ERROR

  Subscription billing attempt error due to inventory error.

* OTHER

  All other billing attempt errors.

* PAYMENT\_​ERROR

  Subscription billing attempt error due to payment error.

***

### Fields

* [Subscription​Contract.lastBillingAttemptErrorType](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lastBillingAttemptErrorType)

  OBJECT

  A Subscription Contract.

***

### Map

#### Fields with this enum

* [Subscription​Contract.lastBillingAttemptErrorType](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lastBillingAttemptErrorType)

---



<a id="latest-enums-subscriptioncontractlastpaymentstatus"></a>


## Subscription​Contract​Last​Payment​Status

enum

The status of the last payment on a subscription contract.

### Valid values

* FAILED

  A failed subscription billing attempt.

* SUCCEEDED

  A successful subscription billing attempt.

***

### Fields

* [Subscription​Contract.lastPaymentStatus](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lastPaymentStatus)

  OBJECT

  A Subscription Contract.

***

### Map

#### Fields with this enum

* [Subscription​Contract.lastPaymentStatus](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.lastPaymentStatus)

---



<a id="latest-enums-subscriptioncontractstatusupdateerrorcode"></a>


## Subscription​Contract​Status​Update​Error​Code

enum

Possible error codes that can be returned by `SubscriptionContractStatusUpdateUserError`.

### Valid values

* HAS\_​FUTURE\_​EDITS

  Subscription contract has a future contract or schedule edit.

* INVALID

  The input value is invalid.

* SUBSCRIPTION\_​CONTRACT\_​DOES\_​NOT\_​EXIST

  Subscription contract does not exist.

***

### Fields

* [Subscription​Contract​Status​Update​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError#field-SubscriptionContractStatusUpdateUserError.fields.code)

  OBJECT

  The error codes for failed subscription contract mutations.

***

### Map

#### Fields with this enum

* [Subscription​Contract​Status​Update​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractStatusUpdateUserError#field-SubscriptionContractStatusUpdateUserError.fields.code)

---



<a id="latest-enums-subscriptioncontractsubscriptionstatus"></a>


## Subscription​Contract​Subscription​Status

enum

The status of a subscription.

### Valid values

* ACTIVE

  The contract is active and is continuing per its policies.

* CANCELLED

  The contract was ended by an unplanned customer action.

* EXPIRED

  The contract has ended per the expected circumstances. All billing and delivery cycles of the subscriptions have been executed.

* FAILED

  The contract has ended because billing failed and no further billing attempts are expected.

* PAUSED

  The contract is temporarily paused and is expected to resume in the future.

* STALE

  The contract has expired due to inactivity.

***

### Fields

* [Subscription​Contract.status](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.status)

  OBJECT

  A Subscription Contract.

***

### Map

#### Fields with this enum

* [Subscription​Contract.status](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContract#field-SubscriptionContract.fields.status)

---



<a id="latest-enums-subscriptioncontractusererrorcode"></a>


## Subscription​Contract​User​Error​Code

enum

Possible error codes that can be returned by `SubscriptionContractUserError`.

### Valid values

* BLANK

  The input value is blank.

* HAS\_​FUTURE\_​EDITS

  Subscription contract has a future contract or schedule edit.

* INVALID

  The input value is invalid.

* PAYMENT\_​INSTRUMENT\_​DOES\_​NOT\_​EXIST

  Payment instrument does not exist.

* SUBSCRIPTION\_​CONTRACT\_​DOES\_​NOT\_​EXIST

  Subscription contract does not exist.

***

### Fields

* [Subscription​Contract​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError#field-SubscriptionContractUserError.fields.code)

  OBJECT

  The error codes for failed subscription contract mutations.

***

### Map

#### Fields with this enum

* [Subscription​Contract​User​Error.code](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionContractUserError#field-SubscriptionContractUserError.fields.code)

---



<a id="latest-enums-subscriptioncontractssortkeys"></a>


## Subscription​Contracts​Sort​Keys

enum

The set of valid sort keys for the SubscriptionContracts query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* STATUS

  Sort by the `status` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

### Fields

* [Customer.subscriptionContracts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts.arguments.sortKey)

  ARGUMENT

  Represents the personal information of a customer. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

* [Order.subscriptionContracts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.subscriptionContracts.arguments.sortKey)

  ARGUMENT

  A customer’s completed request to purchase one or more products from a shop. Apps using the Customer Account API must meet the protected customer data [requirements](https://shopify.dev/docs/apps/launch/protected-customer-data).

***

### Map

#### Arguments with this enum

* [Customer.subscriptionContracts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Customer#field-Customer.fields.subscriptionContracts.arguments.sortKey)
* [Order.subscriptionContracts(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/Order#field-Order.fields.subscriptionContracts.arguments.sortKey)

---



<a id="latest-enums-subscriptioninterval"></a>


## Subscription​Interval

enum

Defines valid subscription intervals.

### Valid values

* DAY

  Represents a day interval.

* MONTH

  Represents a month interval.

* WEEK

  Represents a week interval.

* YEAR

  Represents a year interval.

***

### Fields

* [Subscription​Billing​Policy.interval](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingPolicy#field-SubscriptionBillingPolicy.fields.interval)

  OBJECT

  The billing policy of a subscription.

* [Subscription​Delivery​Policy.interval](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryPolicy#field-SubscriptionDeliveryPolicy.fields.interval)

  OBJECT

  The delivery policy of a subscription.

***

### Map

#### Fields with this enum

* [Subscription​Billing​Policy.interval](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionBillingPolicy#field-SubscriptionBillingPolicy.fields.interval)
* [Subscription​Delivery​Policy.interval](https://shopify.dev/docs/api/customer/latest/objects/SubscriptionDeliveryPolicy#field-SubscriptionDeliveryPolicy.fields.interval)

---



<a id="latest-enums-transactionsortkeys"></a>


## Transaction​Sort​Keys

enum

The set of valid sort keys for the Transaction query.

### Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* EXPIRES\_​AT

  Sort by the `expires_at` value.

***

### Fields

* [Store​Credit​Account.transactions(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions.arguments.sortKey)

  ARGUMENT

  A store credit account contains a monetary balance that can be redeemed at checkout for purchases in the shop. The account is held in the specified currency and has an owner that cannot be transferred.

  The account balance is redeemable at checkout only when the owner is authenticated via [new customer accounts authentication](https://shopify.dev/docs/api/customer).

***

### Map

#### Arguments with this enum

* [Store​Credit​Account.transactions(sortKey)](https://shopify.dev/docs/api/customer/latest/objects/StoreCreditAccount#field-StoreCreditAccount.fields.transactions.arguments.sortKey)

---



<a id="latest-enums-unitpricemeasurementunit"></a>


## Unit​Price​Measurement​Unit

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

* [Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/customer/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

  OBJECT

  The unit price measurement of the line component. For example, "$9.99 / 100ml".

***

### Map

#### Fields with this enum

* [Unit​Price​Measurement.referenceUnit](https://shopify.dev/docs/api/customer/latest/objects/UnitPriceMeasurement#field-UnitPriceMeasurement.fields.referenceUnit)

---



<a id="latest-enums-usererrorscustomeraddressusererrorscode"></a>


## User​Errors​Customer​Address​User​Errors​Code

enum

Possible error codes that can be returned by `UserErrorsCustomerAddressUserErrors`.

### Valid values

* ADDRESS\_​ARGUMENT\_​EMPTY

  The provided address argument is empty.

* ADDRESS\_​ID\_​DOES\_​NOT\_​EXIST

  The provided address ID doesn't exist.

* ADDRESS1\_​MISSING

  The Address1 field is missing.

* CONTAINS\_​HTML\_​TAGS

  Input contains HTML tags.

* COUNTRY\_​NOT\_​EXIST

  The provided country doesn't exist.

* CUSTOMER\_​ADDRESS\_​ALREADY\_​EXISTS

  The provided customer address already exists.

* DELETING\_​CUSTOMER\_​DEFAULT\_​ADDRESS\_​NOT\_​ALLOWED

  The default address of the customer can't be deleted before setting another one as default.

* DEMOTING\_​CUSTOMER\_​DEFAULT\_​ADDRESS\_​NOT\_​ALLOWED

  Demoting the default address of the customer isn't allowed.

* INVALID

  The provided address field isn't valid.

* INVALID\_​FOR\_​COUNTRY

  The provided value is invalid for the country.

* INVALID\_​FOR\_​COUNTRY\_​AND\_​PROVINCE

  The provided value is invalid for the country and province.

* INVALID\_​TERRITORY\_​CODE

  The provided Territory Code isn't valid.

* PHONE\_​NUMBER\_​NOT\_​VALID

  The provided phone number isn't valid.

* REQUIRED

  The field is required.

* TERRITORY\_​CODE\_​MISSING

  The Territory Code field is missing.

* TOO\_​LONG

  The provided address field is too long.

* ZONE\_​CODE\_​MISSING

  The Zone Code field is missing.

***

### Fields

* [User​Errors​Customer​Address​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors#field-UserErrorsCustomerAddressUserErrors.fields.code)

  OBJECT

  The error codes that are provided for failed address mutations.

***

### Map

#### Fields with this enum

* [User​Errors​Customer​Address​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerAddressUserErrors#field-UserErrorsCustomerAddressUserErrors.fields.code)

---



<a id="latest-enums-usererrorscustomeremailmarketingusererrorscode"></a>


## User​Errors​Customer​Email​Marketing​User​Errors​Code

enum

Possible error codes that can be returned by `UserErrorsCustomerEmailMarketingUserErrors`.

### Valid values

* CUSTOMER\_​ALREADY\_​SUBSCRIBED

  The customer is already subscribed.

* EMAIL\_​ADDRESS\_​NOT\_​FOUND

  The customer does not have an email address.

* FAILED\_​TO\_​SUBSCRIBE

  Subscription failed.

* FAILED\_​TO\_​UNSUBSCRIBE

  Unsubscription failed.

***

### Fields

* [User​Errors​Customer​Email​Marketing​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors#field-UserErrorsCustomerEmailMarketingUserErrors.fields.code)

  OBJECT

  Provides error codes for marketing subscribe mutations.

***

### Map

#### Fields with this enum

* [User​Errors​Customer​Email​Marketing​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerEmailMarketingUserErrors#field-UserErrorsCustomerEmailMarketingUserErrors.fields.code)

---



<a id="latest-enums-usererrorscustomerusererrorscode"></a>


## User​Errors​Customer​User​Errors​Code

enum

Possible error codes that can be returned by `UserErrorsCustomerUserErrors`.

### Valid values

* CONTAINS\_​HTML\_​TAGS

  Input contains HTML tags.

* CONTAINS\_​URL

  Input contains URL.

* CUSTOMER\_​DOES\_​NOT\_​EXIST

  The customer does not exist.

* CUSTOMER\_​INPUT\_​ARGUMENT\_​EMPTY

  The personal information input argument is empty.

* INVALID

  The personal information field is not valid.

* TOO\_​LONG

  The personal information field is too long.

***

### Fields

* [User​Errors​Customer​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerUserErrors#field-UserErrorsCustomerUserErrors.fields.code)

  OBJECT

  Provides error codes for failed personal information mutations.

***

### Map

#### Fields with this enum

* [User​Errors​Customer​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsCustomerUserErrors#field-UserErrorsCustomerUserErrors.fields.code)

---



<a id="latest-enums-usererrorsstorefrontcustomeraccesstokencreateusererrorscode"></a>


## User​Errors​Storefront​Customer​Access​Token​Create​User​Errors​Code

enum

Possible error codes that can be returned by `UserErrorsStorefrontCustomerAccessTokenCreateUserErrors`.

### Valid values

* CUSTOMER\_​DOES\_​NOT\_​EXIST

  The customer does not exist.

***

### Fields

* [User​Errors​Storefront​Customer​Access​Token​Create​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsStorefrontCustomerAccessTokenCreateUserErrors#field-UserErrorsStorefrontCustomerAccessTokenCreateUserErrors.fields.code)

  OBJECT

  Error codes for failed Storefront Customer Access Token mutation.

***

### Map

#### Fields with this enum

* [User​Errors​Storefront​Customer​Access​Token​Create​User​Errors.code](https://shopify.dev/docs/api/customer/latest/objects/UserErrorsStorefrontCustomerAccessTokenCreateUserErrors#field-UserErrorsStorefrontCustomerAccessTokenCreateUserErrors.fields.code)

---



<a id="latest-enums-weightunit"></a>


## Weight​Unit

enum

Units of measurement for weight.

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

* [Weight.unit](https://shopify.dev/docs/api/customer/latest/objects/Weight#field-Weight.fields.unit)

  OBJECT

  A weight measurement with its numeric value and unit. Used throughout the API, for example in shipping calculations, delivery conditions, order line items, and inventory measurements.

  The weight combines a decimal value with a standard unit of measurement to ensure consistent weight handling across different regional systems.

***

### Map

#### Fields with this enum

* [Weight.unit](https://shopify.dev/docs/api/customer/latest/objects/Weight#field-Weight.fields.unit)

---
