# Shopify Pixels Reference (Indonesian / English)

> Referensi lengkap **Pixels** Shopify API yang disusun ulang dari https://shopify.dev/docs/api/pixels.
> Dokumen ini dirancang untuk pengembang berbahasa Indonesia, namun seluruh konten teknis (skema, tipe, nama field, contoh kode) dipertahankan dalam bahasa Inggris asli untuk memastikan akurasi.

| Item | Nilai |
|------|-------|
| Sumber | `https://shopify.dev/docs/api/pixels` |
| Total halaman | **2** |
| Tanggal kompilasi | 2026-05-01 |
| Bahasa | Indonesia (intro/ToC) + English (konten teknis) |



## Daftar Isi (Table of Contents)

- [Landing](#landing)
- [pixel-extension](#pixel-extension)


---



<a id="landing"></a>


## About Web pixel app extensions

You can use a web pixel app extension to collect behavioral data for marketing campaign optimization and analytics. This guide provides the reference documentation for the web pixel app extension.

***

### Reference documentation

[Web pixel extension API\
\
](https://shopify.dev/docs/api/web-pixels-api)

[Learn about the sandboxing modes for web pixels, and the API references that are available for the sandbox.](https://shopify.dev/docs/api/web-pixels-api)

[Standard Events Reference\
\
](https://shopify.dev/docs/api/web-pixels-api/standard-events)

[Learn about the ways of tracking and sending events with web pixels.](https://shopify.dev/docs/api/web-pixels-api/standard-events)

***

### Next steps

* Learn how you can [use web pixels](https://shopify.dev/docs/apps/build/marketing-analytics/pixels) on an online store to collect behavioral data for marketing campaign optimization and analytics.
* [Create a web pixel app extension](https://shopify.dev/docs/apps/build/marketing-analytics/build-web-pixels) and subscribe to all events emitted by Shopify.

***

---



<a id="pixel-extension"></a>


## Web Pixels API

The Web Pixels API gives you access to a set of controlled APIs for accessing browser APIs and subscribing to customer events, within one of our Lax or Strict sandboxes.

### App Web Pixels

For app developers integrating app web pixels, pixels are loaded in a strict sandbox. To initialize the web pixel extension API you can import the `@shopify/web-pixels-extension package` for stronger typing and register your pixel. Once initialized, the `api` object (the **Standard API**) has access to the following properties:

* [`analytics`](https://shopify.dev/docs/api/web-pixels-api/standard-api/analytics): Provides access to Shopify's customer event API

* [`browser`](https://shopify.dev/docs/api/web-pixels-api/standard-api/browser): Provides access to specific browser methods that asynchronously execute in the top frame (cookie, localStorage, sessionStorage)

* [`init`](https://shopify.dev/docs/api/web-pixels-api/standard-api/init): A JSON object containing a snapshot of the page at time of page render.

  * Contains a context field that provides the Context of the page at the time of page render
  * Contains a data field that provides access to the Cart and Customer objects at the time of page render

* [`settings`](https://shopify.dev/docs/api/web-pixels-api/standard-api/settings): Provides access to the settings JSON object as set by the [GraphQL Admin API](https://shopify.dev/docs/apps/marketing/pixels/getting-started#step-5-create-a-web-pixel-setting-for-the-store) (Web pixel app extensions only)

To learn more about these Standard API properties, or how to create app pixels, please view the following documentation.

[API Reference - Standard API](https://shopify.dev/docs/api/web-pixels-api/standard-api)

[API Reference - App Pixel Tutorial](https://shopify.dev/docs/apps/marketing/pixels/getting-started)

[API Reference - App Pixel FAQ](https://help.shopify.com/en/manual/promoting-marketing/pixels/app-pixels)

### Initializing the API

###### API Object

```js
import {register} from '@shopify/web-pixels-extension';

register((api) => {
  // you can access the web pixel extension API in here
  api.analytics.subscribe('page_viewed', (event) => {
    console.log(`Event Name is: ${event.name}`);
    // Event Name is: page_viewed

    // Set a cookie with the standard API
    api.browser.cookie.set('my_user_id', 'ABCX123');

    console.log(`Customer Name: ${api.init.data.customer.firstName}`);
    // Customer Name: Bogus

    console.log(api.settings);
    /**
     * {
     *   "accountID": 234
     * }
     */
  });
});
```

###### API Object Destructured

```js
import {register} from '@shopify/web-pixels-extension';

register(({analytics, browser, settings, init}) => {
  // instead of accessing the `api` object, you can deconstruct the properties for convenience

  analytics.subscribe('page_viewed', (event) => {
    console.log(`Event Name is: ${event.name}`);
    // Event Name is: page_viewed

    // Set a cookie with the standard API
    browser.cookie.set('my_user_id', 'ABCX123');

    console.log(`Customer Name: ${init.data.customer.firstName}`);
    // Customer Name: Bogus

    console.log(settings);
    /**
     * {
     *   "accountID": 234
     * }
     */
  });
});
```

***

### Custom Web Pixels

Custom Pixels are loaded within a lax sandbox and configured within the pixel manager interface in the Shopify admin. For this developer interface, the `analytics`, `browser` and the `init` variables on the `api` object have already been deconstructed for you, and you can call them without having to write any additional boilerplate code.

**Unavailable Settings Property:**

Unlike with App Pixels, custom pixels do not have access to the `settings` property

[API Reference - Standard API](https://shopify.dev/docs/api/web-pixels-api/standard-api)

[API Reference - Custom Pixel Tutorial](https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels)

### Initializing the API

### API Object

```js
// With Custom Pixels, you can simply write the following without the "register" boilerplate.


analytics.subscribe('page_viewed', (event) => {
  console.log(`Event Name is: ${event.name}`);
  // Event Name is: page_viewed


  // Set a cookie with the standard API
  browser.cookie.set('my_user_id', 'ABCX123');


  console.log(`Customer Name: ${init.data.customer.firstName}`);
  // Customer Name: Bogus
});
```

![Custom Web Pixels](https://shopify.dev/assets/assets/images/api/web-pixels-api/CustomPixelAdmin-Bpsfay67.png)

***

### Customer Events Reference

After setting up your App Pixel or Custom Pixel, you can use these pixels to subscribe to additional customer events. We publish and maintain a list of commonly used standard events such as `page_viewed`, `product_viewed` and checkout progression events.

If you would like additional events not covered by our list, you can create, publish and subscribe to your own custom events.

To subscribe to multiple events at once you can use: `all_events`, `all_standard_events`, `all_custom_events`, `all_dom_events`. Please take note that the contents of these event subscriptions are subject to change as events are added or modified. Please view the following documentation for more details about customer events:

[API Reference - Standard Events](https://shopify.dev/docs/api/web-pixels-api/standard-events)

[API Reference - Custom Events](https://shopify.dev/docs/api/web-pixels-api/emitting-data)

[API Reference - DOM Events](https://shopify.dev/docs/api/web-pixels-api/dom-events)

[API Reference - Advanced DOM Events](https://shopify.dev/docs/api/web-pixels-api/advanced-dom-events)

[API Reference - Pixel Privacy](https://shopify.dev/docs/api/web-pixels-api/pixel-privacy)

***

---
