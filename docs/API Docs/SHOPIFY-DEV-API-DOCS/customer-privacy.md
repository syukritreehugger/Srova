# Shopify Customer Privacy Reference (Indonesian / English)

> Referensi lengkap **Customer Privacy** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/customer-privacy.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/customer-privacy` |
| Total halaman | **1** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)


---



<a id="landing"></a>


## Customer Privacy API

The Customer Privacy API is a browser-based, JavaScript API that you can use to [verify data processing permissions](#check-data-processing-permissions) or [build a cookie consent banner](#collect-and-register-consent).

This API is used to apply consent decisions to Shopify-managed surfaces, like [pixels](https://help.shopify.com/manual/promoting-marketing/pixels/overview), [audiences](https://help.shopify.com/manual/promoting-marketing/shopify-audiences), and [checkout](https://help.shopify.com/manual/checkout-settings).

**Note:**

Mobile app developers using Checkout Kit should see [privacy compliance guide](https://shopify.dev/docs/storefronts/mobile/checkout-kit/privacy-compliance) to learn how to pass visitor consent through the Storefront API's `@inContext` directive.

Refer to the [full list of cookies](https://www.shopify.com/legal/cookies) that Shopify uses.

***

### What you'll learn

Check what processing is allowed

* [Using API calls](#call-the-api)
* [Using an event listener](#use-an-event-listener)

To build a cookie banner

* [Load the Customer Privacy API](#loading-the-customer-privacy-api)
* [Collect and set consent](#collect-and-register-consent)
* [Custom storefront installation](#installation-on-a-custom-storefront)
* [Control the cookie banner](#cookie-banner-api)

***

### Loading the Customer Privacy API

To use the Customer Privacy API, you must load it using `loadFeatures` as follows:

```javascript
window.Shopify.loadFeatures(
 [
   {
     name: 'consent-tracking-api',
     version: '0.1',
   },
 ],
 error => {
   if (error) {
     // Rescue error
   }
   // If error is false, the API has loaded and ready to use!
 },
);
```

The second argument to `loadFeatures` is a callback that indicates that the API has loaded. When invoked without an error, the API is globally available at `window.Shopify.customerPrivacy`.

***

### Check data processing permissions

**Caution:**

Collecting data without consent might not comply with applicable laws. Consult legal counsel to discuss the requirements that apply to your business.

To check what processing is allowed, use the `Allowed` methods. These methods combine the following factors to determine what processing is allowed:

* **The current merchant settings**: Is consent required in this region?

* **User location**: Is the customer in a region where consent is required?

* **User consent given**: Did the customer give consent for a specific purpose?

  You can check for permission by [calling the API](#call-the-api) or [with an event listener](#use-an-event-listener).

  The default permissions state depends on how merchants have [configured their privacy settings](https://help.shopify.com/manual/privacy-and-security/privacy/customer-privacy/settings/privacy-settings). For regions that are configured to require consent, non-essential purposes are not allowed by default until consent is given. For other regions, the default behavior is to allow all processing purposes.

#### Call the API

The Customer Privacy API offers the following methods to check if data can be processed:

```javascript
window.Shopify.customerPrivacy.preferencesProcessingAllowed();
window.Shopify.customerPrivacy.analyticsProcessingAllowed();
window.Shopify.customerPrivacy.marketingAllowed();
window.Shopify.customerPrivacy.saleOfDataAllowed();
```

These methods return `true` / `false` if permission is given for the following:

* `preferencesProcessingAllowed`: customer preferences such as language, currency, size, and more.
* `analyticsProcessingAllowed`: customer analytics about how the storefront was used and interactions made on the storefront.
* `marketingAllowed`: Marketing, attribution and targeted advertising from the merchant.
* `saleOfDataAllowed`: Sharing data with third parties, usually for behaviorial advertising.

#### Use an event listener

The Customer Privacy API publishes the document event `visitorConsentCollected` when consent changes.

```javascript
document.addEventListener("visitorConsentCollected", (event) => console.log(event.detail));
```

### Output

```javascript
{
   marketingAllowed: true,
   saleOfDataAllowed: true,
   analyticsAllowed: false,
   preferencesAllowed: true,
 }
```

Updates are published only when consent changes, not when the listener is added.

#### Check customer location

You can see the detected geolocation by using the `getRegion` method. It returns a [ISO 3166-2-formatted string](https://www.iso.org/iso-3166-country-codes.html) with a two character country code, followed by an optional one to three character region code. Returns an empty string if the location can't be determined.

Examples:

* "USCA": California, USA
* "CAON": Ontario, Canada
* "IEL": Leinster, Ireland
* "GBENG": England, United Kingdom

```javascript
window.Shopify.customerPrivacy.getRegion()
```

#### Retrieve a Consent ID

A customer can retrieve their consent id using the `consentId` command. This is useful to check their consent history in the merchants consent audit log.

```javascript
window.Shopify.customerPrivacy.consentId()
```

***

### Collect and register consent

**Caution:**

1. Never read/modify any Shopify cookies directly or your processing will fail when new versions are released. Instead, always use this API to manage customer privacy settings.
2. Recording customer consent should only be done on a visitor interaction (such as a visitor accepting or declining via a cookie banner), and never done automatically on behalf of the visitor.

To record customer consent, use the `setTrackingConsent` method:

```javascript
window.Shopify.customerPrivacy.setTrackingConsent(
  {
    "analytics":    true | false,
    "marketing":    true | false,
    "preferences":  true | false
  },
  () => console.log("Consent captured")
);
```

The following consent purposes are supported:

* `Preferences`: Cookies that remember customer preferences, such as country or language, to personalize visits to the website.

* `Analytics`: Cookies to understand how customers interact with the site.

* `Marketing`: Cookies to provide ads and marketing communications based on customer interests.

  See the [Shopify Cookie Policy](https://www.shopify.com/legal/cookies) for the full list of cookies used by Shopify.

  You can set one or more consent signals at once:

```javascript
// A visitor visits our shop for the first time.
// We have no consent information about them as it's their first visit
window.Shopify.customerPrivacy.currentVisitorConsent();
```

### Output

```js
{marketing: '', analytics: '', preferences: '', sale_of_data: ''}
```

```js
// The visitor is shown a banner that asks for analytics consent.
// They grant analytics consent.
window.Shopify.customerPrivacy.setTrackingConsent({"analytics": true}, () => {});


// This is now reflected in the registered consent
window.Shopify.customerPrivacy.currentVisitorConsent();
```

### Output

```js
{marketing: '', analytics: 'yes', preferences: '', sale_of_data: ''}
```

***

### Collect and register data sale / sharing opt-out

**Caution:**

Data sale / sharing opt-out should be managed in an opt-out flow started by customers, instead of an opt-in flow that activates immediately upon page load.

To record a customer's opt-out from data sale / sharing, use the `setTrackingConsent` method with the `sale_of_data` option:

```javascript
window.Shopify.customerPrivacy.setTrackingConsent(
  {
    "sale_of_data": true | false,
  },
  () => console.log("Data sale/sharing preference captured")
);
```

Data sale opt-outs should be initiated by the customer, not presented immediately with a banner. For this reason, `true` allows data sale / sharing and `false` blocks data sale / sharing when requested by a customer.

Data sale / sharing opt-out is enforced independently from consent, and caution is advised when combining them.

To opt a Customer out of server-side data sale / sharing use the [dataSaleOptOut GraphQL API](https://shopify.dev/docs/api/admin-graphql/unstable/mutations/dataSaleOptOut).

The GPC signal is automatically collected and honored in regions configured for data sale opt-out and cannot be adjusted through `setTrackingConsent`.

```js
// The visitor elects to opt out of data sale/sharing.
window.Shopify.customerPrivacy.setTrackingConsent({"sale_of_data": false}, () => {});


// The `sale_of_data` opt-out is saved. The `analytics` consent isn't affected.
window.Shopify.customerPrivacy.currentVisitorConsent();
```

### Output

```js
> {marketing: '', analytics: 'yes', preferences: '', sale_of_data: 'no'}
```

#### Metafields

You can save custom data to this API using the optional `metafields` argument, which is also available through [checkout UI extensions](https://shopify.dev/docs/api/checkout-ui-extensions/).

`Metafields` takes an `Array` containing an object with two keys:

1. `key`: A string containing the key used to identify this value. This value must be 25 characters or less.
2. `value`: A string containing the value. `Null` may be passed to delete the key. This value must be 100 characters or less. The `metafields` object must be less than 250 characters in total.

```javascript
// Set custom metafields
window.Shopify.customerPrivacy.setTrackingConsent({
  metafields: [
    {key: "my-custom-state-a", value: "true"},
    {key: "my-custom-state-b", value: "false"}
  ]
});


// Set consent and metafields
window.Shopify.customerPrivacy.setTrackingConsent({
  marketing: true,
  metafields: [
    {key: "my-custom-state-a", value: "true"},
    {key: "my-custom-state-b", value: "false"}
  ]
});


// Read the stored metafield value and print to the console
value = window.Shopify.customerPrivacy.getTrackingConsentMetafield("my-custom-state")
console.log(value)
```

#### Custom storefronts

For custom storefronts, pass the following additional parameters to the `setTrackingConsent` method:

* `headlessStorefront`: `true`,

* `checkoutRootDomain`: Your checkout domain

* `storefrontRootDomain`: Your storefront domain

* `storefrontAccessToken`: Your Storefront API access token

  Learn more about installing the Customer Privacy API into a [custom storefront](#installation-on-a-custom-storefront).

#### Check consent given

Check users' consent decisions by calling the `currentVisitorConsent` method. This returns the preferences selected by the users and doesn't include critical information like location and merchant configuration.

**Note:**

Use the [`Allowed` methods](#check-data-processing-permissions) to check what processing is allowed. They combine several factors missing from the `currentVisitorConsent` method.

```javascript
window.Shopify.customerPrivacy.currentVisitorConsent();
```

### Output

```javascript
{marketing: 'yes', analytics: 'no', preferences: 'yes', sale_of_data: ''}
```

* `'yes'` - the current visitor has actively granted consent.
* `'no'` - the current visitor has actively denied consent.
* `''` (empty string) - the current visitor has not yet granted or denied consent.

#### Check if a consent banner should be displayed

To check if a cookie consent banner should be displayed to the current customer, use `shouldShowBanner`. This method indicates if the current customers is in a [region that's configured to show a cookie banner](#regions-showing-consent-banners).

**Note:**

The method doesn't indicate if consent has already been given.

```javascript
window.Shopify.customerPrivacy.shouldShowBanner();
```

### Output

```javascript
true | false
```

This is `true` if consent isn't already set and the visitor is in a [region showing consent](#regions-showing-consent-banners).

#### Check if data sale opt out is available

To check if the current customer is eligible for data sale opt-out, use the `saleOfDataRegion` method. This method indicates whether the current customers is in a [region configured for data sale opt outs](#regions-showing-data-sale-opt-out).

```javascript
window.Shopify.customerPrivacy.saleOfDataRegion();
```

### Output

```javascript
true | false
```

This is `true` if the visitor is from a region that requires data sale opt-outs.

#### Regions showing consent banners

When the Shopify cookie banner is enabled, it displays in the configured regions and automatically passes consent to this API.

If you're using an app to provide cookie banners, then contact the app's developer to understand where the consent banner is rendered.

Learn more about configuring a [cookie banner](https://help.shopify.com/manual/privacy-and-security/privacy/customer-privacy-settings/privacy-settings).

#### Regions showing data sale opt out

When the data sale opt out page is enabled, the opt out form is available to visitors from the configured regions, which is usually US states. In these regions, the [Global Privacy Control (GPC)](https://globalprivacycontrol.org/) is honored automatically, `sale_of_data` will be set to `false`, refer [above for details](#collect-and-register-consent).

***

### Installation on a custom storefront

**Note:**

Full integration of the cookie banner with Shopify Analytics is only available using the [Hydrogen Analytics](https://shopify.dev/docs/storefronts/headless/hydrogen/analytics/consent) package, and not the method described in this section. If you have a Hydrogen storefront, we recommend that you use the Hydrogen Analytics package.

To integrate into a custom storefront, you need to load the correct JavaScript asset, pass additional parameters, and update the storefront's content security policy.

#### Assets

Include the Customer Privacy JavaScript asset, either by itself or bundled with a consent banner using one of the following:

* [Customer Privacy API](https://cdn.shopify.com/shopifycloud/consent-tracking-api/v0.1/consent-tracking-api.js)

* [Customer Privacy API bundled with the Shopify Cookie Banner](https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js)

  When using an app, the developers might provide a different bundled asset.

#### Domains

Identify the following domains:

* **Storefront**: This is the domain of your storefront. For example, `hydrogen.shop`.

* **Checkout**: The domain where customers check out. For example, `checkout.hydrogen.shop`.

  If your custom storefront uses Hydrogen, then you can find these values in the Shopify admin, at **Settings** -> **Domains**.

  When you build your query, use the checkout domain as the value for `checkoutRootDomain`. For example, `checkout.hydrogen.shop`.

  For `storefrontRootDomain`, always use the shared, top level domain. For example, `hydrogen.shop`.

  Your checkout should be within the same root domain as the storefront so that it can read cookies set on the storefront domain - otherwise checkout will not be able to read and respect visitor consent given on your storefront.

  For example, in the following scenarios, checkout honours consent that's given on the storefront:

* If your storefront is hosted on `hydrogen.shop` and the checkout is on `checkout.hydrogen.shop`, consent will be honored on checkout.

* If your storefront is hosted on `landing.hydrogen.shop` and the checkout is on `hydrogen.shop`, consent will be honored on checkout.

* If your storefront is hosted on `hydrogen.shop` and the checkout is on `example.com`, consent management will **not** be honored on checkout, as cookies cannot be read across domains.

#### Storefront API token

Our consent API will contact Shopify servers to manage consent using the Storefront API which needs a [Storefront API token](https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started).

#### Updating your Content Security Policy

The Customer Privacy API (and the Shopify Cookie banner if used) will `POST` to the Storefront API at the checkout domain.

This domain needs to be allowed in your [Content Security Policy](https://content-security-policy.com/). This can be done manually in your server, or configured for [Oxygen](https://shopify.dev/docs/storefronts/headless/hydrogen/content-security-policy).

#### Setting Consent

To pass consent to the Customer Privacy API, load the [Customer Privacy API](#assets) and pass the additional arguments to `setTrackingConsent`:

```javascript
window.Shopify.customerPrivacy.setTrackingConsent(
  {
  "marketing": false,
  "analytics": true,
  "preferences": false,
  "headlessStorefront": true,
  "checkoutRootDomain": "checkout.hydrogen.shop",
  "storefrontRootDomain": "hydrogen.shop",
  "storefrontAccessToken": "YOUR_STOREFRONT_API_TOKEN_HERE"
  }, () => console.log('consent was submitted')
)
```

Refer to [`setTrackingConsent`](#collect-and-register-consent) for details on this method.

#### Setting consent with Shopify Cookie Banner

When using the Shopify Cookie banner, initialize the banner with the following configuration (this will automatically pass consent to the Customer Privacy API):

```html
<script src="https://cdn.shopify.com/shopifycloud/privacy-banner/storefront-banner.js"></script>
<script>
// Change with your shop details
const STOREFRONT_DOMAIN = 'hydrogen.shop';
const CHECKOUT_DOMAIN = 'checkout.hydrogen.shop';
const SF_API_TOKEN = 'YOUR_STOREFRONT_API_TOKEN_HERE'; // Obtained in the previous section
const LOCALE = "fr"
const COUNTRY = "ca"


// Run banner if needed for the current visitor:
privacyBanner.loadBanner({
  storefrontAccessToken: SF_API_TOKEN,
  checkoutRootDomain: CHECKOUT_DOMAIN,
  storefrontRootDomain: STOREFRONT_DOMAIN,
  // Optional
  locale: LOCALE,
  country: COUNTRY
}).then(() => {
  console.log('loaded');
});
</script>
```

Re-show the consent preferences modal (requires the `storefront-banner.js` script, same as above):

```javascript
// Change with your shop details
const STOREFRONT_DOMAIN = 'hydrogen.shop';
const CHECKOUT_DOMAIN = 'checkout.hydrogen.shop';
const SF_API_TOKEN = 'YOUR_STOREFRONT_API_TOKEN_HERE';
const LOCALE = "fr";
const COUNTRY = "ca";


// re-show the preferences modal
privacyBanner.showPreferences({
  storefrontAccessToken: SF_API_TOKEN,
  checkoutRootDomain: CHECKOUT_DOMAIN,
  storefrontRootDomain: STOREFRONT_DOMAIN,
  // Optional
  locale: LOCALE,
  country: COUNTRY
}).then(() => {
  console.log('preferences modal opened');
});
```

#### Data sale / sharing opt outs

To set data sale / sharing opt outs, integrate as above, but pass `sale_of_data` instead of `marketing`, `analytics`, and `preferences` arguments to `setTrackingConsent()`, with the desired preference (usually `false` after the visitor opts out in the form):

```javascript
window.Shopify.customerPrivacy.setTrackingConsent(
  {
  "sale_of_data": false,
  "headlessStorefront": true,
  "checkoutRootDomain": "checkout.hydrogen.shop",
  "storefrontRootDomain": "hydrogen.shop",
  "storefrontAccessToken": "39c829a9106f6e9a9759e83a6ad963a4"
  }, () => console.log('The visitor opted out of Data Sale')
)
```

***

### Cookie Banner API

These API methods let you control and interact with the Shopify cookie banner at runtime.

#### Showing the preferences modal

You can show the preferences modal of the Shopify cookie banner using the `showPreferences()` method:

```javascript
privacyBanner.showPreferences().then(() => {
  console.log('preferences modal opened');
});
```

***

### Upgrading the Customer Privacy API

The Customer Privacy API is backwards compatible.

#### Collecting Consent

You must decide how to map the consent you collect in your banner to the four consent signals used by Shopify. The following snippet shows the backwards compatibility between the legacy Boolean argument and the new granular argument.

```javascript
const callback = () => {}
// legacy boolean true maps to setting analytics and marketing to true.
window.Shopify.customerPrivacy.setTrackingConsent(true, callback);
window.Shopify.customerPrivacy.setTrackingConsent(
  {
    "analytics": true,
    "marketing": true,
  },
  callback
);


// legacy boolean false maps to setting analytics and marketing to false.
window.Shopify.customerPrivacy.setTrackingConsent(false, callback);
window.Shopify.customerPrivacy.setTrackingConsent(
  {
    "analytics": false,
    "marketing": false,
  },
  callback
);
```

#### Migrating consent banners

Two methods have been renamed to generalize their use:

```javascript
// Legacy method for GDPR
window.Shopify.customerPrivacy.shouldShowGDPRBanner();
// is now
window.Shopify.customerPrivacy.shouldShowBanner();


// Legacy method for US States Laws
window.Shopify.customerPrivacy.shouldShowCCPABanner();
// is now
window.Shopify.customerPrivacy.saleOfDataRegion();
```

#### Migrating data processing permission checks

Data processing has been separated into granular use. You must decide how to map your processing needs to one of the data processing purposes provided by Shopify.

`userCanBeTracked` and `userDataCanBeSold` use the following consent signals to determine if consent has been granted:

* `userCanBeTracked`: Analytics and marketing both must be accepted (when required)
* `userDataCanBeSold`: Sale of data must not be rejected

***

### Legacy documentation

**Warning:**

This documentation is here for historical reference. Do not begin any new integrations with the methods in this section. You should begin migrating away from these methods using the document in [Upgrading the Customer Privacy API](#upgrading-the-customer-privacy-api)

#### should​Show​GDPRBanner(): boolean

You can use this method to determine if you should show a GDPR banner.

##### Request data

`window.Shopify.customerPrivacy.shouldShowGDPRBanner();`

##### Response

This method returns a boolean value that indicates if you should show a GDPR banner.

The response aggregates the visitor’s location, the app user's preference, and whether the visitor has already provided a consent value in the past year.

| Visitor consent provided in past year | Visitor in EU | App user limits tracking for customers in Europe | Boolean value |
| - | - | - | - |
| Not applicable | Not applicable | ✘ | `false` |
| ✘ | ✔ | ✔ | `true` |
| ✘ | ✘ | ✔ | `false` |
| ✔ | ✔ | ✔ | `false` |
| ✔ | ✘ | ✔ | `false` |

#### set​Tracking​Consent(consent: boolean, callback: function)

You can use this method to set a buyer's response to a tracking consent request.

##### Request data

`window.Shopify.customerPrivacy.setTrackingConsent(consent: boolean, callback: function);`

**Request parameters:**

| Name | Type | Description |
| - | - | - |
| `consent` | boolean | Indicates the buyer's response to the tracking consent request. You can obtain the response using a banner UI element or other similar mechanism. If set to `true`, then the API returns a custom event called `trackingConsentAccepted`. If set to `false`, then no custom event is returned but the callback function is still executed. |
| `callback` | function | A function that executes after the API has set tracking consent. You can use this function to hide the UI banner element or execute a similar task. |

**Example request:**

The following example request shows a JavaScript function that sets `consent` to `true` and executes another function to hide the banner.

```javascript
function handleAccept(e) {
  window.Shopify.customerPrivacy.setTrackingConsent(true, hideBanner);
  document.addEventListener("trackingConsentAccepted", function () {
    console.log("trackingConsentAccepted event fired");
  });
}
```

##### Response

The API executes the callback function and optionally emits a custom event called `trackingConsentAccepted`.

**Example response:**

A successful request returns an empty object:

```json
{}
```

If there is an error with the request, then an error object is returned:

```JavaScript
{error:[string]}
```

#### Visitor tracking

**Warning:**

This documentation is here for historical reference. Do not begin any new integrations with the methods in this section. You should begin migrating away from these methods using the document in [Upgrading the Customer Privacy API](#upgrading-the-customer-privacy-api)

You can use the Customer Privacy API to check if customers have consented to be tracked and if app users have decided to disallow the sale of visitor data. Your implementation must include a [loading pattern](#loading-the-customer-privacy-api) to ensure that the API is available. For visitor tracking consent, you should implement a mechanism for [listening to consent collection events](#listening-for-consent-collection) that can fire asynchronously on the page, to ensure that you don't miss any tracking opportunities.

You can use the following methods for consent collection:

* [`userCanBeTracked(): boolean`](#usercanbetracked-boolean) - Covers the scenario of tracking a visitor (GDPR).

* [`userDataCanBeSold(): boolean`](#userdatacanbesold-boolean) - Covers the scenario of selling visitor data (CCPA).

  If `userCanBeTracked` is set to `false`, then the following behaviour must be observed:

* No persistent, non-essential cookies should be set

* No data should be emitted to third-party platforms

  If `userDataCanBeSold` is set to `false`, then the following behaviour must be observed:

* Data can be emitted (if tracking isn't blocked)

* Data can't be sold to third-parties

  If the Customer Privacy API isn't available, then tracking and data emission can proceed. All methods should be preceded with a check that the API is available before checking that tracking or sale of data is blocked.

  **Example API check:**

  `if (!window.Shopify.customerPrivacy || window.Shopify.customerPrivacy.userCanBeTracked()) { startTracking() }`

#### user​Can​Be​Tracked(): boolean

You can use this method to return whether the storefront visitor has consented to be tracked.

##### Request data

`window.Shopify.customerPrivacy.userCanBeTracked();`

##### Response

The API returns a boolean value that indicates whether a user can be tracked.

The response aggregates the visitor’s consent and location, as well as the app user's preference.

| Visitor consent | Visitor in EU | App user limits tracking for customers in Europe | Boolean value |
| - | - | - | - |
| Not applicable | Not applicable | ✘ | `true` |
| ✔ | ✔ | ✔ | `true` |
| ✔ | ✘ | ✔ | `true` |
| ✘ | ✔ | ✔ | `false` |
| ✘ | ✘ | ✔ | `false` |
| Undeclared | ✔ | ✔ | `false` |
| Undeclared | ✘ | ✔ | `true` |

##### Listening for consent collection

A `trackingConsentAccepted` event fires when positive tracking consent is collected on the page.

By listening for this event and calling your custom start tracking method when it fires, you avoid any possible data loss due to missing asynchronous consent collection.

```javascript
document.addEventListener('trackingConsentAccepted', () => {
  // fire custom method to start tracking
});
```

#### user​Data​Can​Be​Sold(): boolean

Use this method to determine if the app user has explicitly disallowed selling data to third parties for visitors located in California or Virginia. This enables compliance with the CCPA and VCDPA.

##### Request Data

`window.Shopify.customerPrivacy.userDataCanBeSold();`

##### Response

The API returns a Boolean value indicating whether data can be sold to third parties for visitors located in California (CA) or Virginia (VA).

The API response aggregates the app user's preferences and the visitor’s location. However, you can't use the API to enable visitors to opt-out of the sale of their data.

| User consent | Visitor in CA or VA | App user limits the third-party sale of CA or VA customers’ data | Boolean value |
| - | - | - | - |
| Not applicable | ✔ | ✔ | `false` |
| Not applicable | ✘ | ✔ | `true` |
| Not applicable | ✔ | ✘ | `true` |
| Not applicable | ✘ | ✘ | `true` |

***

---
